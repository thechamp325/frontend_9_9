import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService, MessageService } from '@app/_services';
import { Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-staff-home',
  templateUrl: 'staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent  {


  currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
  formBuilder: any;
  http: any;

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private messageService: MessageService,
      
      
    )
     {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    panelOpenState = false;
    
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

    ngOnIni() {
        this.loadAllUsers();
    }
    
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }


  submit(){;
    this.http.get('http://10.10.14.236:8080/api/pi/emp', ).subscribe(result => {alert(result)})
   
  }

}
