import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup; //Declaro el formulario

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if(this.form.valid){ //si el formulario es valido
      const value = this.form.value
      this.authService.loginUser(value.email, value.password) //metodo que esta en el servico y que devuelve una promesa
      .then(()=>{
        this.router.navigate(['/admin']) //redirige a la pag admin una vez logeado
      })
      .catch(()=>{
        alert('Error Datos Invalidos')
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
