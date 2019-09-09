import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@app/_services';

import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from '@app/_services';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,) { }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  ngOnInit() {

    this.form = this.formBuilder.group({
      from_month:     ['', Validators.required],
      to_month:     ['', Validators.required],
    });
  }

  Submit(){
    console.log(this.form.value);
    this.http.post('http://10.10.14.236:8080/api/pi/emp/salary_certificate', this.form.value, ).subscribe(result => {alert(result)})
   
  }

}
