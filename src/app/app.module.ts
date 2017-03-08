import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

const route = RouterModule.forRoot( [], { useHash:true } );

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeModule } from './home/home.module'
import {
	ApiService,
	JwtService,
	UserService
} from './shared';

@NgModule( {
	declarations:[
		AppComponent,
		HeaderComponent,
		FooterComponent
	],
	imports     :[
		BrowserModule,
		FormsModule,
		HttpModule,
		route,
		HomeModule
	],
	providers   :[ ApiService, JwtService, UserService ],
	bootstrap   :[ AppComponent ]
} )
export class AppModule {
}
