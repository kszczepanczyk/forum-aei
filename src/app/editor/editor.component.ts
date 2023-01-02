import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { PostService } from '../post-section/post.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  id: number;
  editMode = false;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit(){
    const newUser = new User(1,"","","","");
    const newPost = new Post(
      "slug",
      this.postForm.value['title'],
      "",
      this.postForm.value['body'],
      "",
      "",
      1,
      false,
      newUser,
      this.postForm.value['category']
    );
    this.postService.addPost(this.postForm.value);
    this.router.navigate(['../dyskusje'],{relativeTo: this.route});
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
