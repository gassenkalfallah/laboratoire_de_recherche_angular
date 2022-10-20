import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private ngZone: NgZone) {
  }

  ngOnInit(): void {
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(() => {
      this.successRedirect()
    })
      .catch(error => console.log("error"));
  }

  private successRedirect() {
    this.ngZone.run(() => {
      this.router.navigate(['/members'])
    });
  }
}
