import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError } from 'rxjs';
import { IEmployee } from '@app/employee';
import { MatTableDataSource } from '@angular/material/table';


export interface xyz {
  id : string ,
  name: string,
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = ['Type','HOD','Principal', 'Admin','request'];
  
  public employees = [];
  public errorMsg;
  constructor(private http:HttpClient) { } 

  
  private _url: string ='http://localhost:8000/api/pi/emp/salary_check?Employee_ID='+'Emp01';
  private dataSource;
  ngOnInit() {
  
  //   this.http.get<IEmployee[]>(this._url)
  //   .subscribe(data => {this.employees = data;
  //     this.dataSource = new MatTableDataSource(this.employees);
  //   });
   }


  getstatus() {
    var empid = document.getElementById('emp').nodeValue;
    this.http.get<IEmployee[]>('http://10.10.13.66:8000/api/pi/emp/salary_check?Employee_ID='+empid)
    .subscribe(data => {this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
    });
  }
  
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}
