import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { PostsComponent } from './components/posts/posts.component';
import { SpinnerDialog } from './dialogs/spinner/spinner.dialog';
import { SnackbarDialog } from './dialogs/snackbar/snackbar.dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [PostsComponent, SpinnerDialog, SnackbarDialog],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatPaginatorModule
  ],
  exports: [
    MaterialModule,
    PostsComponent,
    SpinnerDialog
  ]
})
export class SharedModule { }
