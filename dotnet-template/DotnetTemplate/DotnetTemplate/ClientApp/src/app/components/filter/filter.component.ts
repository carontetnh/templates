import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestService } from '../../services/Test.Service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() clickButton: EventEmitter<any>;
  @Output() clearButton: EventEmitter<any>;

  constructor() {
    this.clickButton = new EventEmitter();
    this.clearButton = new EventEmitter();
  }

  ngOnInit() {
  }

  filter(search) {
    this.clickButton.emit(search);
  }

  clear(search) {
    this.clearButton.emit(search);
  }
}
