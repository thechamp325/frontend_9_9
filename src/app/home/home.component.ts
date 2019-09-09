import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';

import { User } from '@app/_models';
import { UserService, AuthenticationService, MessageService } from '@app/_services/index';


@Component({ templateUrl: 'home.component.html',
styleUrls: ['./home.component.css'] }
)
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    messages: any[] = [];
    subscription: Subscription;


    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private userService: UserService,
        private messageService: MessageService
    ) {

           // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => {
            if (message) {
              this.messages.push(message);
            } else {
              // clear messages when empty message received
              this.messages = [];
            }
          });

        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
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
}