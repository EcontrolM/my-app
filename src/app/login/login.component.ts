import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';
import { AlertService } from '../service/alert.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    if (this.authenticationService.login(this.model.username, this.model.password) !== null) {
      this.router.navigate([this.returnUrl]);
      this.alertService.success('Welcome');
    } else {
      this.alertService.error('Login failed');
      this.loading = false;
    }
    //        this.authenticationService.login(this.model.username, this.model.password)
    //            .subscribe(
    //                data => {
    //                    this.router.navigate([this.returnUrl]);
    //                },
    //                error => {
    //                    this.alertService.error(error);
    //                    this.loading = false;
    //                });
  }
}
