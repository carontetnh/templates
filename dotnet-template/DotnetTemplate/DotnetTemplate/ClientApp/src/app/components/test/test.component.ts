import { Component, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  tests: Test[];
  headers: string[] = ["Id", "Test"];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Test[]>(baseUrl + 'api/tests').subscribe(result => {
      this.tests = result;
    }, error => console.error(error));
  }
}
interface Test {
  id: number,
  test: string
}
