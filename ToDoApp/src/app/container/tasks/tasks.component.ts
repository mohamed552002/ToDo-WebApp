import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  animations: []
})
export class TasksComponent implements OnInit {
faCheck = faCheck;
viewAddTaskbox = false;
editTask:boolean = false;
allTasks:any;
selectedTask2:EventEmitter<any> = new EventEmitter();
AllTasks(event:any){
  this.allTasks = event;
}
setSelectedTask(event:any){
  this.selectedTask2.emit(event);
}
changeTaskAddViewStatus(){
  if(this.viewAddTaskbox){
    this.viewAddTaskbox = false;
  }
  else{
    this.viewAddTaskbox = true;
  }
}
ngOnInit(){
}
}
