import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@app/_services';
import { HttpErrorResponse } from '@angular/common/http';
import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from '@app/_services';
import { PeriodicElement } from '@app/liverequest/liverequest.component';
import { MatTableDataSource } from '@angular/material/table';

//Employee
//Name
//Designation
//Department
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['Employee','Name','Designation','Department'];
  private dataSource;
  public employees = [];
  formBuilder: any;


  private _url: string = 'http://10.10.11.137:8000/api/pi/emp/list?Department=All';

  
  constructor(private http: HttpClient ) { }
  ngOnInit() {
    this.http.get<PeriodicElement[]>(this._url)
    .subscribe(data =>{this.employees = data;
        this.dataSource = new MatTableDataSource(this.employees);
      });
  }


}
