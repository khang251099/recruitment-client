import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styles: [
  ]
})
export class SearchPage implements OnInit {    
  objQuery: any = {};

  constructor(private router: ActivatedRoute) { }
    
  ngOnInit(): void {
    this.router.queryParams.subscribe(res => {
      this.objQuery = res;
    }) 
  }

}
