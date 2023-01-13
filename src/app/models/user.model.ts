  export class User {
    public email: string;
    public username: string;
    public rank: string;
    public date_joined: Date;

    constructor(email: string, username: string, rank: string, date_joined: Date ){
      this.email = email;
      this.rank = rank;
      this.date_joined = date_joined;
      this.username = username;
    }
  }