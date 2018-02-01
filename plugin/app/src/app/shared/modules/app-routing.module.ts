import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutesModel } from "../models/app-routes.model";
import { AthleteSettingsComponent } from "../../athlete-settings/athlete-settings.component";
import { CommonSettingsComponent } from "../../common-settings/common-settings.component";
import { ZonesSettingsComponent } from "../../zones-settings/zones-settings.component";
import { FitnessTrendComponent } from "../../fitness-trend/fitness-trend.component";
import { DonateComponent } from "../../donate/donate.component";
import { ReleasesNotesComponent } from "../../releases-notes/releases-notes.component";
import { ReleasesNotesResolverService } from "../../releases-notes/releases-notes-resolver.service";
import { YearProgressComponent } from "../../year-progress/year-progress.component";
import { YearProgressResolverService } from "../../year-progress/shared/services/year-progress-resolver.service";
import { ShareComponent } from "../../share/share.component";
import { WelcomeComponent } from "../../welcome/welcome.component";

export const routes: Routes = [
	{
		path: AppRoutesModel.welcome,
		component: WelcomeComponent
	},
	{
		path: AppRoutesModel.fitnessTrend,
		component: FitnessTrendComponent
	},
	{
		path: AppRoutesModel.yearProgressions,
		component: YearProgressComponent,
		resolve: {
			requiredYearProgressDataModel: YearProgressResolverService
		}
	},
	{
		path: AppRoutesModel.commonSettings,
		component: CommonSettingsComponent
	},
	{
		path: AppRoutesModel.athleteSettings,
		component: AthleteSettingsComponent
	},
	{
		path: AppRoutesModel.zonesSettings,
		component: ZonesSettingsComponent
	},
	{
		path: AppRoutesModel.zonesSettings + "/:zoneValue",
		component: ZonesSettingsComponent
	},
	{
		path: AppRoutesModel.donate,
		component: DonateComponent
	},
	{
		path: AppRoutesModel.releasesNotes,
		component: ReleasesNotesComponent,
		resolve: {
			releasesNotes: ReleasesNotesResolverService
		}
	},
	{
		path: AppRoutesModel.share,
		component: ShareComponent
	},
	{
		path: "", redirectTo: AppRoutesModel.welcome, pathMatch: "full"
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {enableTracing: false, useHash: true})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}