import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const HomeRoute: ModuleWithProviders = RouterModule.forChild( [ {
	path     :'/',
	component:HomeComponent
} ] );

@NgModule( {
	imports     :[
		CommonModule,
		HomeRoute
	],
	declarations:[ HomeComponent ]
} )
export class HomeModule {
}
