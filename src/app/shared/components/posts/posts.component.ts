import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PostsService } from 'src/app/modules/posts/services/posts.service';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { Posts } from 'src/app/core/models/posts';
import { SearchService } from 'src/app/modules/search/services/search.service';
import { SearchSubjectService } from 'src/app/shared/services/searchSubject.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styles: [
  ]
})
export class PostsComponent implements OnInit {
  @Input('objQuery') objQuery;
  arrPosts: Array<Posts> = [];
  arrPostsCopy: Array<Posts> = [];
  arrCurrent: Array<Posts> = [];
  pageLength: number = 0;

  constructor(    
    private postsService: PostsService, 
    private homeService: HomeService,
    private searchSubjectService: SearchSubjectService,
    private searchService: SearchService,  
  ) { }

  ngOnInit(): void {
    this.getPostsAll();    
    this.searchSubjectService.valTitleSearch$.subscribe(res => {
      this.onSearchTitle(res);
    })
    this.searchSubjectService.valAreaSearch$.subscribe(res => {
      this.onSearchArea(res);
    });
  }

  ngOnChanges(changes: SimpleChanges) {            
    this.getPostsQuery(changes.objQuery.currentValue);
  }

  getPosts() {
    this.postsService.getPosts().subscribe(res => {    
      this.arrPosts = res;    
      this.arrPostsCopy = this.arrPosts;
      this.arrCurrent = this.arrPosts;
      this.homeService.totalPosts$.next(this.arrPosts.length);          
    })
  }

  getPostsAll() {
    this.postsService.getPostsAll().subscribe(res => {    
      this.arrPosts = res;    
      this.arrPostsCopy = this.arrPosts;
      this.arrCurrent = this.arrPosts;
      this.homeService.totalPosts$.next(this.arrPosts.length);  
      this.pageLength = this.arrPosts.length;    
      this.arrPosts = this.showItemPage(this.arrPostsCopy, 0, 5);        
    })
  }

  showItemPage(arr, start, end) {
    let arrNew = []; 
    return arrNew = arr.slice(start, end);
  }

  onChangePage(e) {
    console.log(e);
    let start = e.pageSize * e.pageIndex;
    let end = start + e.pageSize;
    this.arrPosts = this.showItemPage(this.arrPostsCopy, start, end);
  } 

  getPostsQuery(objQ) {
    this.searchService.getPostsQuery(objQ).subscribe(res => {
      this.arrPosts = res;
      this.arrPostsCopy = this.arrPosts;
      this.arrCurrent = this.arrPosts;
      this.homeService.totalPosts$.next(this.arrPosts.length);     
    })
  }

  onSearchTitle(valSearch) {    
    valSearch = valSearch.toLowerCase();
    this.arrPosts = this.arrCurrent.filter((posts: Posts) => {
      return (posts.title).toLowerCase().indexOf(valSearch) > -1;
    });        
    this.homeService.totalPosts$.next(this.arrPosts.length);
  }
  
  onSearchArea(valArea) {   
    if(valArea == 'all') {
      this.arrPosts = this.arrPostsCopy;
      this.arrCurrent = this.arrPosts;   
    } else {
      this.arrPosts = this.arrPostsCopy.filter((posts: Posts) => {      
        return posts.area.id == valArea;
      });  
      this.arrCurrent = this.arrPosts;   
    }   
    this.homeService.totalPosts$.next(this.arrPosts.length);
  }
}
