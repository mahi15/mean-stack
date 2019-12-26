import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PostModel} from "../post.model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create-component.scss']
})
export class PostCreateComponent implements OnInit {
  post: PostModel;
  private mode = 'create';
  isLoading = false;
  private postId: string;
  form: FormGroup;

  constructor(public postService: PostService,
              public router: ActivatedRoute,
              public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      content:[null, [Validators.required]]
      });
    this.router.paramMap.subscribe((paramMap:ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content};
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
  addPost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode == 'create') {
      this.postService.addPost(this.form.value.title, this.form.value.content);
    } else {
      this.postService.updatePost(this.postId, this.form.value.title, this.form.value.content);
    }
    this.form.reset();
  }
}
