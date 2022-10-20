import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MembersComponent} from './members/members.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MemberFormComponent} from './member-form/member-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {LayoutComponent} from './layout/layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ToolsComponent} from './tools/tools.component';
import {ArticlesComponent} from './articles/articles.component';
import {EventsComponent} from './events/events.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {AffectDialogComponent} from './affect-dialog/affect-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {FirebaseModule} from "./firebase/Firebase.module";
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ToolsComponent,
    ArticlesComponent,
    EventsComponent,
    ArticleFormComponent,
    AffectDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    FirebaseModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
