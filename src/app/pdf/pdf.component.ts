import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf'; 

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  downloadPDF()
  {
    const doc= new jspdf();
    doc.text('some txt',10,10);

    doc.save('Test.pdf');
  }

  ngOnInit() {
  }

}
