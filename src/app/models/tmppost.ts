export class TmpPost {
  idPost: number;
  user_id: number;
  thread_id: number;
  title: string;
  content: string;
  date_created: string;
  constructor(
    idPost: number,
    user_id: number,
    thread_id: number,
    title: string,
    content: string,
    date_created: string
  ) {
    this.content = content;
    this.date_created = date_created;
    this.idPost = idPost;
    this.thread_id = thread_id;
    this.title = title;
    this.user_id = user_id;
  }
}
