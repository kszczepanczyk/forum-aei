import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;


  constructor() { }

  ngOnInit(): void {
  }

}
