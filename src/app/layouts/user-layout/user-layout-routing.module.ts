import { AboutModule } from './../../modules/about/about.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`../../modules/home/home.module`).then(m => m.HomeModule)
      },
      {
        path: 'posts',
        loadChildren: () => import(`../../modules/posts/posts.module`).then(m => m.PostsModule)
      },
      {
        path: 'apply',
        loadChildren: () => import(`../../modules/apply/apply.module`).then(m => m.ApplyModule)
      },
      {
        path: 'contact',
        loadChildren: () => import(`../../modules/contact/contact.module`).then(m => m.ContactModule)
      },
      {
        path: 'about',
        loadChildren: () => import(`../../modules/about/about.module`).then(m => m.AboutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
