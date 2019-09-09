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
  selector: 'app-adminreq',
  templateUrl: './adminreq.component.html',
  styleUrls: ['./adminreq.component.css']
})
export class AdminreqComponent implements OnInit {

 
  displayedColumns: string[] = ['EMPID', 'name', 'lastname', 'designation','Type','request'];
  private dataSource;
  public employees = [];
  formBuilder: any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private http: HttpClient ) { }
  
  
  private _url: string = '/assets/data/adminreq.json';
  
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
     this.http.post('http://10.10.14.236:8080/api/pi/emp', prop ).subscribe(result => {alert(result)})
     
  }

}
