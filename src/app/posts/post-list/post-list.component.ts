import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: PostModel[] = [
  //   {title: 'first post', content: 'this is the first post content'},
  //   {title: 'second post', content: 'this is the second post content'},
  //   {title: 'third post', content: 'this is the third post content'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
