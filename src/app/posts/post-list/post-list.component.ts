import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from "../post.model";
import {PostService} from "../post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: PostModel[] = [];
  private postsSub: Subscription;
  isLoading = false;

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: PostModel[]) => {
        this.isLoading = false;
          this.posts = posts;
      });
  }
  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
