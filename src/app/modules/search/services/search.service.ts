import { Injectable } from '@angular/core';
import { POSTS_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { Posts } from 'src/app/core/models/posts';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  arrPosts: Array<Posts> = [];  

  constructor(private apiService: ApiService) { }

  getPostsQuery(q): Observable<Posts[]> {
    return this.apiService.get(POSTS_ENDPOINT.POSTS, q).pipe(
      map(res => {
        this.arrPosts = res.data.posts.map(p => new Posts(p));
        return this.arrPosts;
      })
    )
  }
}
