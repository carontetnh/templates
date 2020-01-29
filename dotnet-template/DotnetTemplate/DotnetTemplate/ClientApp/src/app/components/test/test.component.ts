import { Component, OnInit, Input } from '@angular/core';

import { TestService } from '../../services/Test.Service';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input() tests: any;
  headers: string[] = ["Id", "Test"];
  constructor(private test: TestService) { }

  ngOnInit() {
    this.tests = this.test.getTest().subscribe(
      data => this.tests = data
    );
  }
}
