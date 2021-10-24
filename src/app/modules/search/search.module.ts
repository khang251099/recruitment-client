import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPage } from 'src/app/pages/search/search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
]

@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchModule { }
