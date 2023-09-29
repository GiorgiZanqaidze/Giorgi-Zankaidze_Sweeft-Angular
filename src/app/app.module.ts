import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import {NgOptimizedImage} from "@angular/common";
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import { LoadingItemComponent } from './components/loading-item/loading-item.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ButtonNavigateComponent } from './components/button-navigate/button-navigate.component';
import { ProjectInstructionsComponent } from './components/project-instructions/project-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserItemComponent,
    UserDetailsComponent,
    LoadingItemComponent,
    ErrorMessageComponent,
    ButtonNavigateComponent,
    ProjectInstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
