import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared';

const LoginRoute:ModuleWithProviders = RouterModule.forChild( [ {
	path     :'login',
	component:LoginComponent
} ] );

@NgModule( {
	imports     :[
		CommonModule,
		LoginRoute,
		SharedModule
	],
	declarations:[ LoginComponent ]
} )
export class LoginModule {
}
