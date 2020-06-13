import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }
  loginUser(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }
  hasUser() {
    return this.af.authState
  }
  logout(){
    return this.af.signOut()
  }
}
