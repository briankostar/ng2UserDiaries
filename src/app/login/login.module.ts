import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const LoginRoute:ModuleWithProviders = RouterModule.forChild( [ {
	path     :'login',
	component:LoginComponent
} ] );

@NgModule( {
	imports     :[
		CommonModule,
		LoginRoute
	],
	declarations:[ LoginComponent ]
} )
export class LoginModule {
}
