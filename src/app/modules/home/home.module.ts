import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from 'src/app/pages/home/home.page';
import { HomePostsPage } from 'src/app/pages/home/home-posts/home-posts.page';

const routes : Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        component: HomePostsPage
      },
      {
        path: 'search',
        loadChildren: () => import(`../search/search.module`).then(m => m.SearchModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomePage,
    HomePostsPage,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
