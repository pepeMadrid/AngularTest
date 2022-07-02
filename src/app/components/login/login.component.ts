import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  cargando = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.formularioLogin =this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
  loguear(){
    console.log(this.formularioLogin);
    const user = this.formularioLogin.value.user;
    const pass = this.formularioLogin.value.pass;

    if(user == "discom" && pass == "1234"){
      //accedemos al dashboard
      this.fakeCargando();
    }else{
      //error credenciales
      this.msgError();
      this.formularioLogin.reset();
    }
  }
  msgError(){
    //Snackbar informativo de error credenciales
    this._snackBar.open("Error de credenciales",'',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  fakeCargando(){
    this.cargando=true;
    setTimeout(() =>{
      //redireccion al dashboard
      this.router.navigate(['dashboard']);
      this.cargando=false;},2000)
  }
}
