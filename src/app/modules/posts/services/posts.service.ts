import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { POSTS_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { map } from 'rxjs/operators';
import { Posts } from 'src/app/core/models/posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts: Array<Posts>;
  posts: Posts;

  constructor(private apiService: ApiService) { }

  getPosts(): Observable<Posts[]> {
    return this.apiService.get(POSTS_ENDPOINT.POSTS).pipe(
      map(res => {
        this.arrPosts = res.data.posts.map(posts => new Posts(posts));
        return this.arrPosts;
      })
    )
  } 

  getPostsAll(): Observable<Posts[]> {
    return this.apiService.get(POSTS_ENDPOINT.POSTS, {page_size: 100}).pipe(
      map(res => {
        this.arrPosts = res.data.posts.map(posts => new Posts(posts));
        return this.arrPosts;
      })
    )
  } 

  getPostsQuery(query) {
    return this.apiService.get(POSTS_ENDPOINT.POSTS, query).pipe(
      map(res => {
        this.arrPosts = res.data.posts.map(posts => new Posts(posts));
        return this.arrPosts;
      })
    )
  } 

  getById(id): Observable<Posts> {
    return this.apiService.get(`${POSTS_ENDPOINT.POSTS}/${id}`).pipe(
      map(res => {
        this.posts = new Posts(res.data);
        return this.posts;
      })
    )
  }
}
