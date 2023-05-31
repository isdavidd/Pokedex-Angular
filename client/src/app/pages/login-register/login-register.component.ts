import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginAndRegisterComponent {

  constructor(){
    // document.body.style.backgroundImage = "url('../../../assets/6776c-clickwallpapers-pokemon-4k-img2-scaled-1.jpg')";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundAttachment = "fixed";
    // document.body.style.backgroundSize = "cover";
  }

  ngOnDestroy(){
    // document.body.style.backgroundImage = "none";
  }

}

