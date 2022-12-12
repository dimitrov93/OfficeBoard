import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBaordComponent } from './task-baord/task-baord.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskCreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    TaskBaordComponent,
    TaskCreateComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TasksRoutingModule,
  ]
})
export class TasksModule { }
