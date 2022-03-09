import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TakeNotesComponent } from './components/take-notes/take-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { AuthguardService } from './services/authguardService/authguard.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateComponent } from './components/update/update.component';
import { GetAllTrashNotesComponent } from './components/get-all-trash-notes/get-all-trash-notes.component';
import { GetAllArchiveNotesComponent } from './components/get-all-archive-notes/get-all-archive-notes.component';
import { ColorpaletteComponent } from './components/colorpalette/colorpalette.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    TakeNotesComponent,
    DisplayNotesComponent,
    IconsComponent,
    GetAllNotesComponent,
    UpdateComponent,
    GetAllTrashNotesComponent,
    GetAllArchiveNotesComponent,
    ColorpaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
