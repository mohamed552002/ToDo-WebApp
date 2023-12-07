import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { EditDataService } from '../../../Services/EditData.service';
import { TestApiService } from '../../../../Services/test-api.service';
import { Task } from '../../../../Models/Task';
import { log } from 'console';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit , OnChanges {
  constructor(private editDataService : EditDataService,private taskApi:TestApiService){}
  tasks:any;
editTask:boolean = false;
@Output()
selectedTask:EventEmitter<any> = new EventEmitter();
@Input()
newTask:string;
taskFinished:boolean = false;
onEditBtnClick(){
  this.editDataService.sendData(true)
}
sendTask(task:Task){
  this.editDataService.viewTask(task)
}
onCompletedCheck(id:number,task:Task){
  task.isCompleted = !task.isCompleted;
  this.editDataService.updateTask(id,task)
}
ngOnInit(){
  // this.taskApi.getData().subscribe(data=>{
    this.editDataService.getAllData();
    this.editDataService.sharedList$.subscribe((t)=>{
      this.tasks =t;
    })
      // this.editDataService.getAllData().subscribe((data)=>
      // this.tasks = data);

}
ngOnChanges(){
  if(this.newTask){
  this.tasks.push(this.newTask);
}
  }
}
