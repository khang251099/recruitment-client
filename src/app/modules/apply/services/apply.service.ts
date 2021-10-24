import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Cv } from 'src/app/core/models/cv';
import { map } from 'rxjs/operators';
import { CV_ENDPOINT } from 'src/app/core/enums/endpoints.enum';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  cv: Cv;

  constructor(private apiService: ApiService) { }

  send(formData) {
    return this.apiService.post(CV_ENDPOINT.CV, formData, {type: 'multipart/form-data'}).pipe(
      map(res => {
        console.log(res);
      })
    )
  }
}
