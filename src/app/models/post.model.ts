import { User } from "./user.model";

export class Post {
    public slug: string;
    public title: string;
    public body: string;
    public createdAt: string;
    public updatedAt: string;
    public favorited: boolean;
    public upvotes: number;
    public author: User;
    public category: string
  constructor(slug: string, title: string, description: string, body: string, createdAt: string, updatedAt: string, upvotes: number,favorited: boolean, author: User, category: string ){
    this.slug = slug;
    this.author = author;
    this.body = body;
    this.createdAt = createdAt;
    this.favorited = favorited;
    this.upvotes = upvotes;
    this.updatedAt = updatedAt;
    this.title = title;
    this.category = category
  }
  }