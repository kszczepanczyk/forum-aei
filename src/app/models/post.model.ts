
export class Post {
    public idPost: number;
    public title: string;
    public content: string;
    public date_created: string;
    public username: string;
    public subjectname: string
  constructor(idPost: number, title: string, content: string, date_created: string, username: string, subjectname: string ){
    this.idPost = idPost;
    this.username = username;
    this.content = content;
    this.date_created = date_created;
    this.title = title;
    this.subjectname = subjectname
  }
  }