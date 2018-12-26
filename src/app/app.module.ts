import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";
import { DetailsComponent } from './details/details.component';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: any;
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    DetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private upgrade:UpgradeModule){
    this.ngDoBootstrap();
  }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myJsApp'], {strictDi: false});


  }
}


angular.module('myJsApp')
  .directive(
    'appDetails',
    downgradeComponent({ component: DetailsComponent })
  );
