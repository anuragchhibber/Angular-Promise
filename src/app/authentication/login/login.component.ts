import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../../models/login-request';
import { LoginService, login } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  inLogin: login;
  result: LoginRequest;

  

  constructor(public router: Router, private loginService: LoginService) {
    this.loginForm = this.createFormGroup();
   }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  onSubmit(){

    this.result = Object.assign({},this.loginForm.value);
    
    this.getLogin();
        
  }

  getLogin(): void{
    this.loginService.getLogin(this.result.username)
      .then((login: login) => { 
        this.inLogin = login;
        
        if(this.result.username == this.inLogin[0].username && this.result.password == this.inLogin[0].password)
        {
          this.router.navigate(['/dash'])
        }
      });
  }
 

  ngOnInit() {
  }

}
