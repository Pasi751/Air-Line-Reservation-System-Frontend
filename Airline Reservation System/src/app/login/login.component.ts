import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  currentUser: boolean = false;

  loginForm: FormGroup<any> = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });


  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService
      .login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(
        (resp) => {
          /*console.log(resp); */
          if (resp) {
            sessionStorage.setItem(
              'username',
              this.loginForm.get('username')?.value
            );
            this.currentUser = false;
            alert("login successfully");
            this.router.navigate([`/list`]);
            
          } else {
            this.currentUser = true;
          }
        },
        (error) => {
          this.currentUser = true;
          alert("Please check the username and password");
        }
      );
  }

  isAuthenticated (): boolean{

    return this.currentUser;
  }


}
