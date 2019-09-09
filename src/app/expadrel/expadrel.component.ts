import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '@app/_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expadrel',
  templateUrl: './expadrel.component.html',
  styleUrls: ['./expadrel.component.css']
})
export class ExpadrelComponent {

  constructor( private authenticationService: AuthenticationService,
    private router: Router,) { }

  ngOnInit() {
  }
  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}


}
