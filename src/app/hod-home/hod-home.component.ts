import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService, MessageService } from '@app/_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hod-home',
  templateUrl: './hod-home.component.html',
  styleUrls: ['./hod-home.component.css']
})
export class HodHomeComponent implements OnInit {

  
  currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private messageService: MessageService
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

    ngOnInit() {
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

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
}

clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
}


}
