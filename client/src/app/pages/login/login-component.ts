import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent {
  @ViewChild('loginSubmit') loginForm!: NgForm;
  showPassword!: any;

  constructor(){
    // document.body.style.backgroundImage = "url('../../../assets/6776c-clickwallpapers-pokemon-4k-img2-scaled-1.jpg')";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundAttachment = "fixed";
    // document.body.style.backgroundSize = "cover";
  }

  passwordToggle() {
    this.showPassword =! this.showPassword;
  }

  onSubmit () {
    console.log(this.loginForm.value);
  }

  ngOnDestroy(){
    // document.body.style.backgroundImage = "none";
  }
}
