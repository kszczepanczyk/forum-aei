  export class User {
    public _id: number;
    public idUser: number;
    //public permissionLvl: number;
    public email: string;
    //public token: string;
    public username: string;
    //public image: string;
    public rank: string;
    public date_joined: Date;
    public password: string;

    constructor(_id: number,idUser: number,email: string, username: string, rank: string, date_joined: Date,password: string ){
      this._id = _id;
      this.idUser = idUser;
      this.email = email;
      this.rank = rank;
      this.date_joined = date_joined;
      this.password = password
      //this.image = image;
      //this.permissionLvl = permissionLvl;
      //this.token = token;
      this.username = username;
    }
  }