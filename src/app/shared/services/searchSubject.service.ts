import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchSubjectService {
    valTitleSearch$ = new Rx.BehaviorSubject('');
    valAreaSearch$ = new Rx.BehaviorSubject(null);

  constructor() { }
}
