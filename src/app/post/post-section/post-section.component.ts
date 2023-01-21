import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { Post } from '../../models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss']
})
export class PostSectionComponent implements OnInit {
  posts: Post[];
  filteredPosts: Post[] = [];
  page: number = 1;
  postsNumber: number;
  subjectNames: any[] = [];
  selectedSubject = 'all';
  constructor(private postService: PostService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.postService.getAllPostsDb().subscribe(data => {
      this.posts = data;
      this.posts.sort((a, b) => {
        let dateA = new Date(a.date_created);
        let dateB = new Date(b.date_created);
        return dateB.getTime() - dateA.getTime();
      })
      this.postsNumber = this.posts.length;
      this.filteredPosts = this.posts;
    })
    this.categoryService.getAllCategory().subscribe(data => {
      console.log(data);
      this.subjectNames = data;
    })
  }
  filterPosts() {
    if (this.selectedSubject === 'all') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post => post.subjectname === this.selectedSubject);
    }
    this.postsNumber = this.filterPosts.length;
  }

}
