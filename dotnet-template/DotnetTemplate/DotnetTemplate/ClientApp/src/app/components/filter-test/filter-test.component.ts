import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/Test.Service';

@Component({
  selector: 'filter-test',
  templateUrl: './filter-test.component.html',
  styleUrls: ['./filter-test.component.css']
})
export class FilterTestComponent implements OnInit {

  tests: any;

  constructor(private test:TestService) {
  }

  ngOnInit() {
  }

  filterData(search) {
    if (search.value == "") {
      this.test.getTests().subscribe(data => this.tests = data);
    } else {
      this.test.getTestByValue(search.value).subscribe(data => this.tests = data);
    }
  }

  clearData(search) {
    search.value = "";
    this.test.getTests().subscribe(data => this.tests = data);
  }


}
