import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';

const SettingRoute:ModuleWithProviders = RouterModule.forChild( [
	{
		path     :'setting',
		component:SettingComponent
	}
] );
@NgModule( {
	imports     :[
		CommonModule,
		SettingRoute
	],
	declarations:[ SettingComponent ]
} )
export class SettingModule {
}
