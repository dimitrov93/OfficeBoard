import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './create/create.component';
import { TaskBaordComponent } from './task-baord/task-baord.component';


const routes: Routes = [
  {
    path: '',
    component: TaskBaordComponent
  },

  {
    path: 'create',
    component: TaskCreateComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
