  export class User {
    public _id: string;
    public permissionLvl: number;
    public email: string;
    public token: string;
    public username: string;
    public image: string;

    constructor(permissionLvl: number,email: string, token: string, username: string, image: string ){
      this.email = email;
      this.image = image;
      this.permissionLvl = permissionLvl;
      this.token = token;
      this.username = username;
    }
  }