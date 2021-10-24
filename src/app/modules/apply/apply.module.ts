import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplyPage } from '../../pages/apply/apply.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPage
  }
]

@NgModule({
  declarations: [ApplyPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ApplyModule { }
