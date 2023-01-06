import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TmpPost } from 'src/app/models/tmppost';
import { Post } from '../../models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [DatePipe]
})
export class EditorComponent implements OnInit {
  id: number;
  editMode = false;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit(){
    let currentDate = new Date();
    // const addedPost = new Post(
    //   this.postForm.value['title'],
    //   this.postForm.value['body'],
    //   currentDate.toISOString(),
    //   0,
    //   this.authService.getCurrentUser(),
    //   this.postForm.value['category']
    // )
    const addedPost = new TmpPost(
      2,
      this.authService.currentUser._id,
      2,
      this.postForm.value['title'],
      this.postForm.value['body'],
      currentDate.toISOString()
    )
    this.postService.addPost(addedPost).subscribe(resp => {
      this.router.navigate(['../dyskusje'],{relativeTo: this.route});
    });
    
  }

  private initForm(){
    let postTitle = '';
    let postBody = '';
    let postCategory = '';


    this.postForm = new FormGroup({
      title: new FormControl(postTitle),
      body: new FormControl(postBody),
      category: new FormControl(postCategory)
    })
  }

}
