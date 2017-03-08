import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeModule } from './home/home.module'
import { MyPageModule } from './my-page/my-page.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import {
	ApiService,
	JwtService,
	UserService
} from './shared';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const Route = RouterModule.forRoot( [{ path: '**', component: PageNotFoundComponent }], { useHash:true } );

@NgModule( {
	declarations:[
		AppComponent,
		HeaderComponent,
		FooterComponent,
		PageNotFoundComponent
	],
	imports     :[
		BrowserModule,
		FormsModule,
		HttpModule,
		Route,
		HomeModule,
		MyPageModule,
		RegisterModule,
		LoginModule,
		ProfileModule
	],
	providers   :[ ApiService, JwtService, UserService ],
	bootstrap   :[ AppComponent ]
} )
export class AppModule {
}
