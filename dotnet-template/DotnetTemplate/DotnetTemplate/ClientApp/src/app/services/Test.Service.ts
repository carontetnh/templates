import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()

export class TestService {
  tests: Test[];
  urlBase: string = "";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl:string) {
    this.urlBase = baseUrl;
  }

  public getTests() {
    return this.http.get<Test[]>(this.urlBase + 'api/tests')
  }

  public getTestByValue(search:string) {
    return this.http.get<Test[]>(this.urlBase + 'api/tests/' + search)
  }

  public saveTest(test) {
    return this.http.post<Test>(this.urlBase + 'api/test', test);
  }

  public getTest(id) {
    return this.http.get<Test>(this.urlBase + 'api/test/' + id);
  }

  public deleteTest(id) {
    return this.http.delete(this.urlBase + 'api/test/' + id);
  }


}

interface Test {
  id: number,
  test: string
}
