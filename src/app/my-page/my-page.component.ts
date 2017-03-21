import { Component, OnInit } from '@angular/core';
import { User, UserService, Profile } from '../shared';
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ProfilesService } from "../shared/services/profiles.service";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

	profile: Profile = new Profile();
	currentUser: User;
	isUser: boolean;
	username: String;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private profilesService: ProfilesService) { }

  ngOnInit() {
	  this.route.params.subscribe((params:any)  => {
		  this.username = params['username'];
			console.log('this.username', params.username);

		  this.profilesService
			  .get(params.username)
			  .subscribe(
				  data => {
				  	console.log('got profile', data);
				  	this.profile = data},
				  err => {
					  console.log( 'ERROR!' );
					  this.router.navigateByUrl( '/' )
				  }
			  );
	  });
  }

}
