import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-mini',
  templateUrl: './profile-mini.component.html',
  styleUrls: ['./profile-mini.component.scss']
})
export class ProfileMiniComponent implements OnInit {

  constructor() { }
  color: string;
  avatarAuthor: string;
  @Input() date: string|null;
  @Input() author: string;
  ngOnInit(): void {
    this.color = this.getProfileColor(this.author);
    this.avatarAuthor = this.author.slice(0,3);
  }

  getProfileColor(str: string) {
    let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
  }
}
