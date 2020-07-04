import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AuthenticationService]
})

export class LoginPage implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  // async onLogin() {
  //   const { email, password } = this.registerForm.value;
  //   try {
  //     const user = await this.authenticationService.login(email, password);
  //     if(user){}
  //       this.router.navigate(['/user-home']);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async onLogin() {
  //   const { email, password } = this.loginForm.value;
  //   try {
  //     const user = await this.authenticationService.login(email, password);
  //     if (user) {
  //       this.checkUserIsVerified(user);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // onRegister() {
  //   var { email, password } = this.registerForm.value;
  //   this.authenticationService.register(email, password);
  //   console.log('Form->', this.registerForm.value);
  // }

  signOut() {
    this.authenticationService.SignOut();
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }

  // async onGoogleLogin() {
  //   try {
  //     const user = await this.authenticationService.loginGoogle();
  //     if (user) {
  //       this.checkUserIsVerified(user);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

