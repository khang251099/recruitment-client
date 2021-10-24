import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {  
  totalPosts$ = new Rx.BehaviorSubject<number>(0); 

  constructor() { }
  

}
