import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { FormsModule } from '@angular/forms';
import { FormCompComponent } from './form-comp/form-comp.component';
import { DBCompComponent } from './dbcomp/dbcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ParentCompComponent,
    ChildCompComponent,
    FormCompComponent,
    DBCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
