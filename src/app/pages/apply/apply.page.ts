import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';     
import { ApplyService } from 'src/app/modules/apply/services/apply.service';
import { CateService } from 'src/app/shared/services/cate.service';
import { AreaService } from 'src/app/shared/services/area.service';
import { Category } from 'src/app/core/models/category';
import { Area } from 'src/app/core/models/area';
import { SpinnerDialog } from 'src/app/shared/dialogs/spinner/spinner.dialog';


@Component({
    selector: 'app-apply',
    templateUrl: './apply.page.html',
    styles: [],
})
export class ApplyPage implements OnInit {
    formSend: FormGroup;
    arrCate: Array<Category>;
    arrArea: Array<Area>;
    arrGender: Array<any> = [
        { view: 'Male', value: 1 },
        { view: 'Female', value: 0 },
    ];
    selectedFile: File;
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';


    constructor(
        private router: Router,
        private fb: FormBuilder,
        private applyService: ApplyService,
        private cateService: CateService,
        private areaService: AreaService,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.getCate();
        this.getArea();

        this.formSend = this.fb.group({
            name: ['', Validators.required],
            cv: [null],
            email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            gender: [null, Validators.required],
            cate_id: [null, Validators.required],
            area_id: [null, Validators.required],
        });
    }
    
    getCate() {
        this.cateService.getCate().subscribe((res: Category[]) => {
            this.arrCate = res;
        })
    }

    getArea() {
        this.areaService.getArea().subscribe((res: Area[]) => {
            this.arrArea = res;
        })
    }

    onChangeFile(e) {
        this.selectedFile = e.target.files[0];        
    }

    onSend() {
        this.formSend.controls.cv.setValue(this.selectedFile);
        let data = this.formSend.value;
        console.log(data);
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('CV', data.cv, data.cv.name);
        formData.append('email', data.email);
        formData.append('address', data.address);
        formData.append('phone', data.phone);
        formData.append('gender', data.gender);
        formData.append('cate_id', data.cate_id);
        formData.append('area_id', data.area_id);
        this.dialog.open(SpinnerDialog);        
        this.applyService.send(formData).subscribe(res => {
            this.dialog.closeAll();
            this._snackBar.open('This CV has been submitted successfully', '', {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                duration: 2000,
            })
            this.router.navigateByUrl('/');
        })
    }
}
