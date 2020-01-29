import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()

export class TestService {
  tests: Test[];
  urlBase: string = "";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl:string) {
    this.urlBase = baseUrl;
  }

  public getTest() {
    return this.http.get<Test[]>(this.urlBase + 'api/tests')
  }

  public getTestByValue(search:string) {
    return this.http.get<Test[]>(this.urlBase + 'api/tests/' + search)
  }
}

interface Test {
  id: number,
  test: string
}
