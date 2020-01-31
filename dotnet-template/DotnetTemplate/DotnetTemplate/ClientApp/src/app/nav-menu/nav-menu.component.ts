import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  login: boolean = false;
  collapse() {
    this.isExpanded = false;
  }

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getSession().subscribe(data => {
      if (data == true) {
        this.login = true;
      }
      else {
        this.login = false;
      }
    });
  }

  closeSession() {
    this.userService.closeSession().subscribe(data => {
      if (data.value == "OK") {
        this.login = false;
      }
      else {
        this.login = true;
        this.router.navigate(["/login"]);
      }
    });
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
