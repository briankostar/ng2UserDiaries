import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

const Route = RouterModule.forRoot( [], { useHash:true } );

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeModule } from './home/home.module'
import { MyPageModule } from './my-page/my-page.module';
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
		Route,
		HomeModule,
		MyPageModule
	],
	providers   :[ ApiService, JwtService, UserService ],
	bootstrap   :[ AppComponent ]
} )
export class AppModule {
}
