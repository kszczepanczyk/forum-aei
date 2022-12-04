import { getPopperOptions } from "@ng-bootstrap/ng-bootstrap/util/positioning";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

export class PostService {
    private testUser: User = new User(1,"mail","token","username","imagepath");
    private posts: Post[] = [
      new Post("slug","title","description","body","12.12","13.12",12,false,this.testUser,"fizyka"),
      new Post("slug","title","description","body","12.12","13.12",12,false,this.testUser,"fizyka"),
      new Post("slug","title","description","body","12.12","13.12",12,false,this.testUser,"fizyka")
    ]

    getPost(){
        return this.posts.slice();
    }

    getPostById(id: number){
        return this.posts[id];
    }

    addPost(post: Post){
        this.posts.push(post);
    }
}

