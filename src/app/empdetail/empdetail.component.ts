import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder  } from '@angular/forms';
import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService, AuthenticationService } from '@app/_services';
import { Designation, payband } from '@app/app.component';


@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {
  
  isLinear = false;
  EmpForm: FormGroup;
  des2: FormGroup;
  des3: FormGroup;
  des4: FormGroup;

  salutation: string[];
  model: EmpData;
  child: boolean;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,  private authenticationService: AuthenticationService) { }
    salutationControl = new FormControl('', [Validators.required]);


  desgControl = new FormControl('', [Validators.required]);
  desgs: Designation[] = [
    {value: 'X'},
    {value: 'Y'},
    {value: 'Z'},
    {value: 'A'},
  ];


  paybandControl = new FormControl('', [Validators.required]);
  paybands: payband[] = [
    {value: '100-200'},
    {value: '200-300'},
    {value: '300-400'},
    {value: '400-500'},
  ];

  


  ngOnInit(){
    this.model = new EmpData('Emp_ID', 'Mr.', 'F_Name', 'M_Name', 'L_Name', 'Father_Name', 'Mother_Name', 'M', 'CAddress' , 'Permanent_Address',
 'Y', 2, 'Religion', 'Caste', 'DOB', 'Pan', 810903810, 9849849544, 'Official_Email', 'Personal_Email' );
                  this.salutation = ['Mr.', 'Ms.'];
                  this.EmpForm = this.formBuilder.group({
                    empid:     ['', Validators.required],
                    salutation:   [this.model.salutation, Validators.required],
                    fname:        ['', Validators.required],
                    mname:        ['', Validators.required],
                    lname:        ['', Validators.required],
                    //fathersName:  ['', Validators.required],
                    //mothersName:  ['', Validators.required],
                    gender:       ['', Validators.required],
                    caddress:     ['', Validators.required],
                    paddress:     ['', Validators.required],
                    mstatus:      ['', Validators.required],
                    nchild:       [''],
                    religion:     ['', Validators.required],
                    caste:        ['', Validators.required],

                    dob:          ['', Validators.required],
                    pan:          ['', Validators.required],
                    aadhar:       ['', Validators.required],
                    phone:        ['', Validators.required],
                   // tphone:        ['', Validators.required],
                    oemail:       ['', Validators.required],
                    pemail:       ['', Validators.required],
                  });
                  
                  this.des2 = this.formBuilder.group({
                    diploma:     ['', Validators.required],
                    class_diploma:     ['', Validators.required],
                    diplomainst:     ['', Validators.required],
                    diplomaboard:     ['', Validators.required],
                    diplomamonthyr:     ['', Validators.required],
                    qual_ug:     ['', Validators.required],
                    grade_ug:     ['', Validators.required],
                    uginst:     ['', Validators.required],
                    uguniversity:     ['', Validators.required],
                    ugmonthyr:     ['', Validators.required],
                    pgqual:     ['', Validators.required],
                    pgclass:     ['', Validators.required],
                    pginst:     ['', Validators.required],
                    pguniversity:     ['', Validators.required],
                    pgmonth:     ['', Validators.required],
                    phdsubj:     ['', Validators.required],
                    phdinst:     ['', Validators.required],
                    phduniversity:     ['', Validators.required],
                    areaspecial:     ['', Validators.required],
                    phdmonthyr:     ['', Validators.required],
                    pastteaching:     ['', Validators.required],
                    pastindustry:     ['', Validators.required],
                    pastresearch:     ['', Validators.required],
                  });

                  this.des3 = this.formBuilder.group({
                    nop:     ['', Validators.required],
                    nop_int:     ['', Validators.required],
                    nop_conf:     ['', Validators.required],
                    nop_intconf:     ['', Validators.required],
                    nob:     ['', Validators.required],
                    nopatents:     ['', Validators.required],
                    awarddets:     ['', Validators.required],
                    pggrant:     ['', Validators.required],
                  });

                  this.des4 = this.formBuilder.group({
                    bankaccno:     ['', Validators.required],
                    bankname:     ['', Validators.required],
                    banknamebr:     ['', Validators.required],
                    dep:     ['', Validators.required],
                    designation:     ['', Validators.required],
                    date_join:     ['', Validators.required],
                    date_conf:     ['', Validators.required],
                    uni_apprperiodpg:     ['', Validators.required],
                    uni_apprnumber:     ['', Validators.required],
                    dateaspg:     ['', Validators.required],
                    uni_apprperiodphd:     ['', Validators.required],
                    uni_apprnumberphd:     ['', Validators.required],
                    dateasphd:     ['', Validators.required],
                    ug_pg:     ['', Validators.required],
                    presentstaff:    ['', Validators.required],
                    pay:    ['', Validators.required],
                    paygrade:     ['', Validators.required],
                    uan:    ['', Validators.required],
                    pfaccno:    ['', Validators.required],
                    resign_date:    ['', Validators.required],
                    relieve_date:    ['', Validators.required],
                    staff_type:    ['', Validators.required],
                    sub_staff_type:    ['', Validators.required],
                    increment_month:    ['', Validators.required],
                    vacation:    ['', Validators.required],
                    remarks:    ['', Validators.required],
                    univapprno:    ['', Validators.required],
                    univapprnodate:    ['', Validators.required],
                    app_expiry_temp:    ['', Validators.required],
                  });

  }


  onSubmit(){
    console.log(this.EmpForm.value);
    this.http.post('http://10.10.13.66:8000/api/pi/emp/enter', this.EmpForm.value, ).subscribe(result => {alert(JSON.stringify(result)); });
  }

  
  
  
  
  Submit(){
      console.log(this.des2.value);
      this.http.post('http://10.10.13.66:8000/api/pi/emp/enter', this.des2.value, ).subscribe(result => {alert(result); });
    }

    Submit3(){
      console.log(this.des3.value);
      this.http.post('http://10.10.13.66:8000/api/pi/emp/enter', this.des3.value, ).subscribe(result => {alert(result); });
    }

    
  Submit4(){
    console.log(this.des4.value);
    this.http.post('http://10.10.13.66:8000/api/pi/emp/enter', this.des4.value, ).subscribe(result => {alert(result); });
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

Single(){
  document.getElementById('new').nodeValue = '0';
  var data = document.getElementById('new');
  data.setAttribute('disabled', 'disabled');
}

Married(){
  var data = document.getElementById('new');
  data.removeAttribute('disabled');
}


}
