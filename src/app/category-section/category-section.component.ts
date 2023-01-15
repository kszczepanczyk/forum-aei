import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss']
})
export class CategorySectionComponent implements OnInit {

  latestActivity: Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getLatestActivity(1).subscribe(post => {
      this.latestActivity = post;
    })
  }

}
