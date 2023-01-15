import { User } from "./user.model";

export class Post {
    public title: string;
    public content: string;
    public createdAt: string;
    public username: string;
    public category: string
  constructor( title: string, content: string, createdAt: string, username: string, category: string ){
    this.username = username;
    this.content = content;
    this.createdAt = createdAt;
    this.title = title;
    this.category = category
  }
  }