import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder  } from '@angular/forms';
import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService, AuthenticationService } from '@app/_services';

  export interface Designation {
    value: string;
  }
  
  export interface payband { 
    value: string;
  }
  

@Component({ templateUrl: 'form.component.html', styleUrls: ['./form.component.scss'] })
export class FormComponent{

  isLinear = false;
  EmpForm: FormGroup;
  des2: FormGroup;
  des31: FormGroup;
  des32:FormGroup;
  des33:FormGroup;
  des34:FormGroup;
  des35:FormGroup;
  des4: FormGroup;
  form:FormGroup;

  salutation: string[];
  model: EmpData;
  loading: boolean;

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
                    fathersName:  ['', Validators.required],
                    mothersName:  ['', Validators.required],
                    gender:       ['', Validators.required],
                    caddress:     ['', Validators.required],
                    paddress:     ['', Validators.required],
                    mstatus:      ['', Validators.required],
                    nchild:       ['', Validators.required],
                    religion:     ['', Validators.required],
                    caste:        ['', Validators.required],
                    dob:          ['', Validators.required],
                    pan:          ['', Validators.required],
                    aadhar:       ['', Validators.required],
                    phone:        ['', Validators.required],
                    tphone:        ['', Validators.required],
                    oemail:       ['', Validators.required],
                    pemail:       ['', Validators.required],
                  });
                  
                  this.des2 = this.formBuilder.group({
                    empid:     ['', Validators.required],
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
                    });

                    this.des31 = this.formBuilder.group({
                      title:     ['', Validators.required],
                      name:     ['', Validators.required],
                      author:     ['', Validators.required],
                      ISSN:     ['', Validators.required],
                      vol_no:     ['', Validators.required],
                      issue_no:     ['', Validators.required],
                      pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });

                     this.des32 = this.formBuilder.group({
                      title:     ['', Validators.required],
                      name:     ['', Validators.required],
                      author:     ['', Validators.required],
                      ISSN:     ['', Validators.required],
                      vol_no:     ['', Validators.required],
                      issue_no:     ['', Validators.required],
                      pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });


                     this.des33 = this.formBuilder.group({
                      title:     ['', Validators.required],
                      name:     ['', Validators.required],
                      author:     ['', Validators.required],
                      ISSN:     ['', Validators.required],
                      vol_no:     ['', Validators.required],
                      issue_no:     ['', Validators.required],
                      pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });

                     this.des34 = this.formBuilder.group({
                      title:     ['', Validators.required],
                      name:     ['', Validators.required],
                      author:     ['', Validators.required],
                      ISSN:     ['', Validators.required],
                      vol_no:     ['', Validators.required],
                      issue_no:     ['', Validators.required],
                      pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });

                     this.des35 = this.formBuilder.group({
                      title:     ['', Validators.required],
                      name:     ['', Validators.required],
                      author:     ['', Validators.required],
                      ISSN:     ['', Validators.required],
                      vol_no:     ['', Validators.required],
                      issue_no:     ['', Validators.required],
                      pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });

                  this.des4 = this.formBuilder.group({
                    bankaccno:     ['', Validators.required],
                    bankname:     ['', Validators.required],
                    banknamebr:     ['', Validators.required],
                    dep:     ['', Validators.required],
                    // designation:     ['', Validators.required],
                    date_join:     ['', Validators.required],
                    date_conf:     ['', Validators.required],
                    uni_apprperiodpg:     ['', Validators.required],//
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
                    remarks:    ['', Validators.required],//
                    univapprno:    ['', Validators.required],
                    univapprnodate:    ['', Validators.required],
                    app_expiry_temp:    ['a',Validators.required],//
                    // remark : ['',Validators.required]//
                  });
  }


  onSubmit(){
    console.log(this.EmpForm.value);
    this.http.post('http://10.10.13.66:8000/api/pi/emp', this.EmpForm.value, ).subscribe(result => {alert(result)})
   
  }

  
  
  
  
  Submit(){
    console.log(this.des2.value);
      this.http.post('http://10.10.13.66:8000/api/pi/emp/enter/admin/login/details/education', this.des2.value, ).subscribe(result => {alert(JSON.stringify(result))})
      
    }

    Submit31(){
      console.log(this.des31.value);
      this.http.post('http://10.10.14.84:8000/api/pi/emp/enter/admin/login/details/publications/national_journal', this.des31.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }

    Submit32(){
      console.log(this.des32.value);
      this.http.post('http://10.10.13.66:8080/api/pi/emp', this.des32.value, ).subscribe(result => {alert(result)})
    }
    Submit33(){
      console.log(this.des33.value);
      this.http.post('http://10.10.13.66:8080/api/pi/emp', this.des33.value, ).subscribe(result => {alert(result)})
    }
    
    Submit34(){
      console.log(this.des34.value);
      this.http.post('http://10.10.13.66:8080/api/pi/emp', this.des34.value, ).subscribe(result => {alert(result)})
    }

    Submit35(){
      console.log(this.des35.value);
      this.http.post('http://10.10.13.66:8080/api/pi/emp', this.des35.value, ).subscribe(result => {alert(result)})
    }

    

    
  Submit4(){
    console.log(this.des4.value);
    this.http.post('http://10.10.13.66:8000/api/pi/emp/enter/admin/login/details', this.des4.value, ).subscribe(result => {alert(result)})
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}


step=0;

setStep(index: number) {
  this.step = index;
}

nextStep() { 
  this.step++;
}

prevStep() {
  this.step--;
}

}