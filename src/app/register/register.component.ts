import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	authType: String = '';
	title: String = '';
	isSubmitting: boolean = false;
	// errors: Errors = new Errors();
	authForm: FormGroup;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private userService: UserService,
	  private fb: FormBuilder
  ) {
	  // use FormBuilder to create a form group
	  this.authForm = this.fb.group({
		  'email': ['', Validators.required],
		  'password': ['', Validators.required]
	  });
  }

  ngOnInit() {
  }

	submitForm() {
		this.isSubmitting = true;
		// this.errors = new Errors();

		let credentials = this.authForm.value;
		this.userService
			.attemptAuth(this.authType, credentials)
			.subscribe(
				data => this.router.navigateByUrl('/'),
				err => {
					// this.errors = err;
					this.isSubmitting = false;
				}
			);
	}

}
