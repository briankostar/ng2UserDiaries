import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { UserService } from '../../services';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	currentUser: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
	  this.userService.currentUser.subscribe(
		  (userData) => {
			  this.currentUser = userData;
		  }
	  )
  }

	logout(){
		this.userService
			.purgeAuth();

		this.router.navigateByUrl( '/' )

			// .subscribe(
			// 	data => this.router.navigateByUrl( '/' ),
			// 	err => {
			// 		// this.errors = err;
			// 		console.log( 'ERROR!' );
			// 	}
			// );
	}

}
