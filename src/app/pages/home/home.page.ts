import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { SearchService } from 'src/app/modules/search/services/search.service';
import { CateService } from 'src/app/shared/services/cate.service';
import { AreaService } from 'src/app/shared/services/area.service';
import { SearchSubjectService } from 'src/app/shared/services/searchSubject.service';
import { Area } from 'src/app/core/models/area';
import { Category } from 'src/app/core/models/category';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styles: [
  ]
})
export class HomePage implements OnInit {
  arrArea: Array<Area>;
  arrCategory: Array<Category>;
  totalPosts: number;  
  selectedCateId: number = null;
  arrSalary: Array<any> = [
    {
      id: 1,
      viewValue: 'Dưới 6 triệu',
      min: 0,
      max: 5999000
    },
    {
      id: 2,
      viewValue: 'Từ 6 triệu - 10 triệu',
      min: 6000000,
      max: 9999000
    },
    {
      id: 3,
      viewValue: 'Từ 10 triệu - 20 triệu',
      min: 10000000,
      max: 20000000
    },
    {
      id: 4,
      viewValue: 'Trên 20 triệu',
      min: 20000500,     
    }
  ]

  constructor(
    private homeService: HomeService, 
    private searchService: SearchService,   
    private cateService: CateService,
    private areaService: AreaService,
    private searchSubjectService: SearchSubjectService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getArea();
    this.getCate();  
    this.homeService.totalPosts$.subscribe(res => {
      this.totalPosts = res;
    });

    this.router.queryParams.subscribe(res => {
      this.selectedCateId = res.cate_id;      
    })
  } 

  getArea() {
    this.areaService.getArea().subscribe(res => {
      this.arrArea = res;
    })
  }

  getCate() {
    this.cateService.getCate().subscribe(res => {
      this.arrCategory = res;
    })
  }

  onChangeArea(e) {
    this.searchSubjectService.valAreaSearch$.next(e.value);
  }

  onSearch(e) {
    this.searchSubjectService.valTitleSearch$.next(e.target.value);
  }
}
