import { Component, OnInit, Input } from '@angular/core';

import { TestService } from '../../services/Test.Service';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input() tests: any;
  @Input() isMantenimiento = false;
  headers: string[] = ["Id", "Test"];
  constructor(private test: TestService) { }

  ngOnInit() {
    this.tests = this.test.getTests().subscribe(
      data => this.tests = data
    );
  }

  deleteTest(id) {
    if (confirm("Are you sure?") == true) {
      this.test.deleteTest(id).subscribe(
        data => {
          this.tests = data;
        }
      );
    }
  }
}
