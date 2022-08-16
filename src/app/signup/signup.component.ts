import{ HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupform!:FormGroup;
  router: any;

  constructor(private formBuilder:FormBuilder, private http:HttpClient,privaterouter:Router) { }

  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      Name:[''],
      Email:[''],
      Password:[''],
      ConfPass:['']
    })
  }
  signUp()
  {
    this.http.post<any>("http://localhost:3000/signup",this.signupform.value).subscribe((res: any)=>{
      alert("signup Succesfull");
      this.signupform.reset();
      this.router.navigate(['login']);
      
    },err=>{
      alert("Something Wrong");
    })
  }

}

