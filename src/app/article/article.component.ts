import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Article,
  ArticlesService,
  User,
  UserService
} from '../shared';

@Component({
  selector: 'article-page',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
  article: Article = new Article();
  currentUser: User;
  canModify: boolean;
  isSubmitting = false;
  isDeleting = false;
	slug: String;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
	  this.route.params.subscribe((params:any)  => {
		  this.slug = params['slug'];
		  console.log('this.slug', params.slug);

		  this.articlesService
			  .get(this.slug)
		  		.subscribe(data => {
		  			console.log('data', data);
		  			this.article = data;
				})

	  });
  }


  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

}
