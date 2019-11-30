import {Component, EventEmitter, Output} from "@angular/core";
import {PostModel} from "../post.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create-component.scss']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  @Output() createdPost = new EventEmitter<PostModel>();
  addPost(form: NgForm) {
   const post: PostModel = {
     title: form.value.title,
     content: form.value.content
   };
   this.createdPost.emit(post);
  }
}
