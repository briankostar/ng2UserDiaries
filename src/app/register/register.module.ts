import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const ReigsterRoute:ModuleWithProviders = RouterModule.forChild( [ {
	path     :'register',
	component:RegisterComponent
} ] );

@NgModule( {
	imports     :[
		CommonModule,
		ReigsterRoute
	],
	declarations:[ RegisterComponent ]
} )
export class RegisterModule {
}
