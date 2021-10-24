import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { PostsPage } from 'src/app/pages/posts/posts.page';
import { PostsDetailPage } from 'src/app/pages/posts/posts-detail/posts-detail.page';

const routes : Routes = [
  {
    path: ':id',
    component: PostsDetailPage
  }
]

@NgModule({
  declarations: [
    PostsPage,
    PostsDetailPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
