import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PostsService } from 'src/app/modules/posts/services/posts.service';
import { Posts } from 'src/app/core/models/posts';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.page.html',
  styles: [
  ]
})
export class PostsDetailPage implements OnInit {
  arrPosts: Array<Posts> = [];
  posts: Posts;

  constructor(private router: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.router.params.subscribe(res => {
      this.postsService.getById(res.id).subscribe(res => {
        this.posts = res;
        this.arrPosts.push(this.posts);
        console.log(this.posts);
      });
    }) 
  }
}
