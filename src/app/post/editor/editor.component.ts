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
  isSubmitting = false;
  post: Post = {} as Post;
  error: Object = {};

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
    this.isSubmitting = true;
    Object.assign(this.post, this.postForm.value);
    this.post.username = this.authService.currentUser.username;
    this.postService.addPost(this.post).subscribe(
      post => this.router.navigate(['./dyskusje']),
      err => {
          this.error = err;
          this.isSubmitting = false;
      }
    )
    
  }

  private initForm(){
    let postTitle = '';
    let postBody = '';
    let postCategory = '';


    this.postForm = new FormGroup({
      title: new FormControl(postTitle),
      content: new FormControl(postBody),
      subjectName: new FormControl(postCategory)
    })
  }

}
