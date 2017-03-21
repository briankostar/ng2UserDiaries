import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services';

@Component( {
	selector   :'app-login',
	templateUrl:'./login.component.html',
	styleUrls  :[ './login.component.css' ]
} )
export class LoginComponent implements OnInit {
	email: String    = '';
	password: String = '';

	constructor( private router: Router,
				 private userService: UserService, ) {
	}

	ngOnInit() {
	}

	submitForm() {
		console.log( 'submitting' );
		let credentials = {
			"email"   :this.email,
			"password":this.password
		};
		this.userService
			.attemptAuth( 'login', credentials )
			.subscribe(
				data => this.router.navigateByUrl( '/' ),
				err => {
					// this.errors = err;
					console.log( 'ERROR!' );
				}
			);
	}

}
