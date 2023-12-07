import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './container/container.component';
import { TasksComponent } from './container/tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskListComponent } from './container/tasks/task-list/task-list.component';
import { NewTaskComponent } from './container/tasks/new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskDetailsComponent } from './container/task-details/task-details.component';
import { CustomizeGridSystem } from './customdirectives/customize-grid-system.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TasksComponent,
    TaskListComponent,
    NewTaskComponent,
    TaskDetailsComponent,
    CustomizeGridSystem,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
