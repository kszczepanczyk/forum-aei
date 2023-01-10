import { User } from "./user.model";

export class Post {
    public title: string;
    public content: string;
    public createdAt: string;
    public upvotes: number;
    public author: User;
    public category: string
  constructor( title: string, content: string, createdAt: string,  upvotes: number, author: User, category: string ){
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
    this.upvotes = upvotes;
    this.title = title;
    this.category = category
  }
  }