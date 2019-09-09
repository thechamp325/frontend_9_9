import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

@Component({
  selector: 'app-pri-request',
  templateUrl: './pri-request.component.html',
  styleUrls: ['./pri-request.component.css']
})
export class PriRequestComponent {
  private empid="";
  displayedColumns: string[] = ['EMPID', 'name', 'lastname', 'designation','Type','request'];
  private dataSource;
  public employees = [];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private http: HttpClient) { }
  private _url = 'http://10.10.13.66:8000/api/pi/emp/liveprincipal'

  ngOnInit() {
     this.http.get<PeriodicElement[]>(this._url)
      .subscribe(data =>{this.employees = data;
        this.dataSource = new MatTableDataSource(this.employees);
      });
    }

   
    yes(prop){
      console.log(prop);
      this.http.post('http://10.10.13.66:8000/api/pi/emp/approveprinci', prop ).subscribe(result => {alert(result)})
    }
  }


