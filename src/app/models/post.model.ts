import { User } from "./user.model";

export class Post {
    public id: number;
    public title: string;
    public content: string;
    public date_created: string;
    public username: string;
    public category: string
  constructor(id: number, title: string, content: string, date_created: string, username: string, category: string ){
    this.id = id;
    this.username = username;
    this.content = content;
    this.date_created = date_created;
    this.title = title;
    this.category = category
  }
  }