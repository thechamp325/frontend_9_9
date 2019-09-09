import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core'; 
import { HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';



export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

@Component({
  selector: 'app-liverequest',
  templateUrl: './liverequest.component.html',
  styleUrls: ['./liverequest.component.css']
})


export class LiverequestComponent {

  
  displayedColumns: string[] = ['EMPID', 'name', 'lastname', 'designation','Type','request'];
  private dataSource;
  public employees = [];
  formBuilder: any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private http: HttpClient ) { }
  
  
  private _url: string = 'http://10.10.13.66:8000/api/pi/emp/livehod';
  
  ngOnInit() {

    this.http.get<PeriodicElement[]>(this._url)
    .subscribe(data =>{this.employees = data;
        this.dataSource = new MatTableDataSource(this.employees);
      });
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
   
  yes(prop){
     console.log(prop);
     this.http.post('http://10.10.13.66:8000/api/pi/emp/approvehod', prop ).subscribe(result => {alert(result)})
     
  }

}
