import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url: string = "";
  user: FormGroup;
  error: boolean;
  constructor(private userService: UserService, private router: Router, @Inject('BASE_URL') baseUrl: string,) {
    this.user = new FormGroup({
      'Username': new FormControl("", Validators.required),
      'Password': new FormControl("", Validators.required)
    });
    this.url = baseUrl;
  }

  ngOnInit() {
  }

  login() {
    if (this.user.valid == true) {
      this.userService.login(this.user.value).subscribe(res => {
        if (res.username == "") {
          this.error = true;
        } else {
          //this.router.navigate(["/welcome"]);
          this.error = false;
          window.location.href = this.url + "welcome";
        }
      });
    }
  }
}
