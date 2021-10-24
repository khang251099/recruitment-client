import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { ContactService } from 'src/app/modules/contact/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  // name:FormControl=new FormControl("",[Validators.required]);
  // email:FormControl=new FormControl("",[Validators.required,Validators.email]);
  // message:FormControl=new FormControl("",[Validators.required,Validators.maxLength(500)]);
  // honeypot:FormControl=new FormControl("");
  // submitted:boolean=false;
  // isLoading=false;
  // responseMassage:string;
  // disabledSubmitButton:boolean=true;

disabledSubmitButton: boolean = true;



formContact:FormGroup;
messageErr: string;

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private contactService: ContactService) { 
    // this.contactForm=this.formBuilder.group({
    //   // name : this.name,
    //   // email:this.email,
    //   // message:this.message,
    //   // honeypot:this.honeypot
    //   'contactFormName': ['', Validators.required],
    //   'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    //   'contactFormMessage': ['', Validators.required],
     
    // })
  }

  ngOnInit(): void {
    this.formContact=this.formBuilder.group({
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      message:['',[Validators.required]]
    })
  }

  checkErrEmail() {
    if(this.formContact.controls.email.hasError('required')) {
      return 'Email is required!'
    }
    return 'Email not match pattern'
  }

  // onSubmit() {
  //   this.contactService.sendMessage(this.contactForm.value).subscribe(() => {
  //     alert('Your message has been sent.');
  //     this.contactForm.reset();
  //     this.disabledSubmitButton = true;
  //   }, error => {
  //     console.log('Error', error);
  //   });
  // }
  
  // onSubmit(){
  //   if(this.form.status=="VALID" && this.honeypot.value=="")
  //   {
  //     this.form.disable();
  //     var formData:any= new FormData();
  //     formData.append("name",this.form.get("name").value);
  //     formData.append("email",this.form.get("email").value);
  //     formData.append("message",this.form.get("message").value);
  //     this.isLoading=true;
  //     this.submitted=false;
  //     this.http.post("http://localhost:4200",formData).subscribe(
  //       (res)=>{
  //         if(res["result"]=="success"){
  //           this.responseMassage="Thanks for the massage! I'll get back to you soon";
  //         }
  //         else
  //         {
  //           this.responseMassage="Oops! Something went wrong.....Pls, try again"
  //         }
  //         this.form.enable();
  //         this.submitted=true;
  //         this.isLoading=false;
  //       },
  //       (err)=>{
  //         this.responseMassage="Oops! Something went wrong.....Pls, try again.";
  //         this.form.enable();
  //         this.submitted=true;
  //         this.isLoading=false;
  //         console.log(err);

  //       }
  //     )

  //   }

  // }


  onSubmit() {
    let data = this.formContact.value;
    this.contactService.sendMessage(this.contactForm.value).subscribe(()=>{
      alert('Your message has been sent.');
      this.contactForm.reset();
    },
      //     this.contactForm.reset();
      err => {        
        this.messageErr = err;
      }
    );
  }
  // onSubmit() {
  //   this.contactService.sendMessage(this.contactForm.value).subscribe(() => {
  //     alert('Your message has been sent.');
  //     this.contactForm.reset();
  //     this.disabledSubmitButton = true;
  //   }, error => {
  //     console.log('Error', error);
  //   });
  // }
  onClick(e)
  {
    let text=document.getElementById('text')
    text.style.display='block';
    e.preventDefault();
  }

}
