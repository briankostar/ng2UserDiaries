import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
	{
		path: 'settings',
		component: SettingsComponent
	}
]);

@NgModule({
	imports: [
		SharedModule,
		settingsRouting
	],
	declarations: [
		SettingsComponent
	]
})
export class SettingsModule {}
