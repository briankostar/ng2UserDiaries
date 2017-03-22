import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../shared/services/articles.service";
import { ArticleListConfig } from "../shared/models/article-list-config.model";
import { Article } from "../shared/models/article.model";

@Component( {
	selector   :'app-home',
	templateUrl:'./home.component.html',
	styleUrls  :[ './home.component.css' ]
} )
export class HomeComponent implements OnInit {

	query: ArticleListConfig;
	articles: Article[];

	constructor( private articleService: ArticlesService ) {
	}


	ngOnInit() {
		this.query = new ArticleListConfig();
		this.query.type    = 'all';
		this.query.filters = {
			limit :10,
			offset:0
		};
		this.articleService.query( this.query )
			.subscribe( data => {
				console.log( 'data', data );
				this.articles = data.articles;
			} )
	}

}
