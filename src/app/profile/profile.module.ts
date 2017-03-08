import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const ProfileRoute:ModuleWithProviders = RouterModule.forChild( [
	{
		path     :'profile',
		component:ProfileComponent
	}
] );
@NgModule( {
	imports     :[
		CommonModule,
		ProfileRoute
	],
	declarations:[ ProfileComponent ]
} )
export class ProfileModule {
}
