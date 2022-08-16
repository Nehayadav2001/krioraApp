import{ HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      Email:[''],
      Password:['']
    });
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
       const user=res.find((a:any)=>{
        return a.Email===this.loginForm.value.Email && a.Password === this.loginForm.value.Password
       });
       if(user){
        alert('login success!');
        this.loginForm.reset();
        this.router.navigate(['home'])
       }else{
        alert("user not found");
       }
    });
  }
    
}


