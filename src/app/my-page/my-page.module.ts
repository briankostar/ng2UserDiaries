import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyPageComponent } from './my-page.component';

const MyPageRoute:ModuleWithProviders = RouterModule.forChild( [ {
	path     :'my-page',
	component:MyPageComponent
} ] );

@NgModule( {
	imports     :[
		CommonModule,
		MyPageRoute
	],
	declarations:[ MyPageComponent ]
} )
export class MyPageModule {
}
