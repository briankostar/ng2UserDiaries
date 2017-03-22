import { Component, OnInit } from '@angular/core';
import { User, UserService, Profile } from '../shared';
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ProfilesService } from "../shared/services/profiles.service";
import { ArticlesService } from "../shared/services/articles.service";
import { ArticleListConfig } from "../shared/models/article-list-config.model";
import { Article } from "../shared/models/article.model";

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
	query: ArticleListConfig;
	articles: Article[];

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private profilesService: ProfilesService, private articleService: ArticlesService) { }

  ngOnInit() {
	  this.route.params.subscribe((params:any)  => {
		  this.username = params['username'];
			console.log('this.username', params.username);

		  this.profilesService
			  .get(params.username)
			  .subscribe(
				  data => {
				  	console.log('got profile', data);
				  	this.profile = data;

					  this.query = new ArticleListConfig();
					  this.query.type    = 'all';
					  this.query.filters = {
					  	author: `${this.profile.username}`,
						  limit :10,
						  offset:0
					  };
					  this.articleService.query( this.query )
						  .subscribe( data => {
							  console.log( 'data', data );
							  this.articles = data.articles;
						  } )
				  },
				  err => {
					  console.log( 'ERROR!' );
					  this.router.navigateByUrl( '/' )
				  }
			  );
	  });
  }

}
