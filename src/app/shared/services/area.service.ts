import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Area } from 'src/app/core/models/area';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AREA_ENDPOINT } from 'src/app/core/enums/endpoints.enum';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  arrArea: Array<Area>;  

  constructor(private apiService: ApiService) { }

  getArea(): Observable<Area[]> {
    return this.apiService.get(AREA_ENDPOINT.AREA).pipe(
      map(res => {
        this.arrArea = res.data.areas.map(area => new Area(area));
        return this.arrArea;
      })
    )
  } 
}
