import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError } from 'rxjs';
import { IEmployee } from '@app/employee';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf/dist/jspdf.node.debug.js';


export interface xyz {
  id : string ,
  name: string,
}

@Component({
  selector: 'app-salary', 
  templateUrl: './salary.component.html',
  
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {

   
  public employees = [];
  public errorMsg;
  constructor(private http:HttpClient) { }

  
  private _url: string = '/assets/data/employees.json';

  ngOnInit() {
  
    this.http.get<IEmployee[]>(this._url)
    .subscribe(data => this.employees = data);
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

  // public convert()
  // {
  //   var data = document.getElementById('pdf');

  //   html2canvas(data).then(canvas => {
  //   //necessary setting
  //   var imgWidth = 208;
  //   var pageHeight = 295;
  //   var imgHeight = canvas.height * imgWidth / canvas.width;
  //   var heightLeft = imgHeight;

  //   const contentDataURL = canvas.toDataURL('image/png')
  //   let pdf = new jspdf('p', 'mm', 'a4');//A4 size page of pdf
  //   var position = 0;
  //   pdf.addImage(contentDataURL, 'PNG', 0 , position , imgWidth , imgHeight)
  //   pdf.save('fi.pdf');//generated pdf
  //   });
  // }

  public convert() 
{
    var data = document.getElementById('pdf');
    html2canvas(data).then(canvas => 
        {
        // Few necessary setting options
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'pt', 'a4'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('MYPdf.pdf'); // Generated PDF 

    });
}

}
