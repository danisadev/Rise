import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) { }





  // Sign In
  async login(email: string, password: string) {
    try {
      var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  //Sign out
  async SignOut() {
    await this.afAuth.signOut();

  }

  //Register User
  async register(email: string, password: string) {
    try {
      var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.log(error);
    } 
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
