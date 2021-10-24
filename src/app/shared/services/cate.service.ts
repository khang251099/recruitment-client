import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { CATEGORY_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { Category } from 'src/app/core/models/category';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateService {
  arrCate: Array<Category>;

  constructor(private apiService: ApiService) { }

  getCate(): Observable<Category[]> {
    return this.apiService.get(CATEGORY_ENDPOINT.CATEGORY).pipe(
      map(res => {
        this.arrCate = res.data.categories.map(cate => new Category(cate));
        return this.arrCate;
      })
    )
  } 
}
