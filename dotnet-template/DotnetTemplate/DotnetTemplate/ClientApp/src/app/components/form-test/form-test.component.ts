import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../services/Test.Service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  testForm: FormGroup;
  title: string;
  parameter: string;
  constructor(private testService: TestService, private route: Router, private active: ActivatedRoute) {
    this.testForm = new FormGroup({
      'Id': new FormControl(0),
      'Test': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(100)])
    });

    this.active.params.subscribe(parameter => {
      this.parameter = parameter["id"];
      if (this.parameter == "new") {
        this.title = "Add Test";
      } else {
        this.title = "Edit Test";
      }
    });
  }

  ngOnInit() {
    if (this.parameter != "new")
      this.testService.getTest(+this.parameter).subscribe(data => {
        this.testForm.controls["Id"].setValue(data.id)
        this.testForm.controls["Test"].setValue(data.test)
      });
  }

  saveData() {
    if (this.testForm.valid == true) {
      this.testService.saveTest(this.testForm.value).subscribe(data => { this.route.navigate(["/actions-test"]) });
    }
  }

}
