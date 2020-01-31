import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  urlBase: string = "";
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private router: Router) {
    this.urlBase = baseUrl;
  }

  public login(user) {
    return this.http.post<UserEnt>(this.urlBase + "api/login", user);
  }

  public getSessionVariable() {
    return this.http.get<Security>(this.urlBase + "api/login/getsessionvariable").pipe(map(res => {
      var data = res;
      var info = data.value;

      console.log(data);
      if (info == "") {
        this.router.navigate(["/login-error"]);
        return false;
      }
      else {
        return true;
      }
    }));
  }

  public closeSession() {
    return this.http.get<Security>(this.urlBase + "api/login/close");
  }

  public getSession() {
    return this.http.get<Security>(this.urlBase + "api/login/getsessionvariable").pipe(map(res => {
      var data = res;
      var info = data.value;

      console.log(data);
      if (info == "") {
        return false;
      }
      else {
        return true;
      }
    }));
  }
}

interface Security {
  key: string,
  value: string
}

interface UserEnt {
  id: string,
  username: string
}

