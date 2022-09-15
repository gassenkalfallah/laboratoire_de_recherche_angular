import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import{MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/Input';
@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTableModule,
    BrowserAnimationsModule,MatTableModule,
    MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
