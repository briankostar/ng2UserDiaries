import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyPageComponent } from './my-page.component';
import { ProfileResolver } from "./profile-resolver.service";
import { SharedModule } from "../shared/shared.module";

const MyPageRoute:ModuleWithProviders = RouterModule.forChild( [ {
	path     :'my-page/:username',
	component:MyPageComponent
} ] );

@NgModule( {
	imports     :[
		SharedModule,
		MyPageRoute
	],
	declarations:[ MyPageComponent ],
	providers: [
		ProfileResolver
	]
} )
export class MyPageModule {
}
