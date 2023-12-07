import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestApiService } from '../../../../Services/test-api.service';
import { EditDataService } from '../../../Services/EditData.service';
import { Task } from '../../../../Models/Task';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  animations: [
    trigger('fadeInOut2', [
      state('1', style({
        width: 0,
      })),
      state('2', style({
        width: 100,
      }))
      ,
      transition('1 <=> 2', [
        animate('200ms ease-out')
      ])])]
})
export class NewTaskComponent implements OnInit {
  startDate:string;
  constructor(private TaskForm:FormBuilder , private taskApi:TestApiService,private TaskService:EditDataService){
    this.startDate = new Date().toISOString().split('T')[0]
  }
  @Input()
  viewAddTaskbox:boolean;
  @Output()
  cancleTaskBtn:EventEmitter<boolean> = new EventEmitter<boolean>();
  onCancleNewTaskView(){
    this.cancleTaskBtn.emit(this.viewAddTaskbox);
  }

  TaskformIn:FormGroup
  validateField(field:string){
    const control = this.TaskformIn.get(field);
    if (control) {
      control.markAsTouched();
    }
    else{
      control.markAsUntouched();
    }
  }

// }

shouldShowError(field: string) {
  const control = this.TaskformIn.get(field);
  return control && control.invalid && (control.dirty || control.touched);
}
@Output() AllTasks:EventEmitter<any> = new EventEmitter();
task:Task = new Task()
addNewTaskSubmit() {
  // dataToSend = {
  //   name:,
  //   description:,
  //   dueDate:this.
  // };
  this.task.description =this.TaskformIn.value.Description
  this.task.name = this.TaskformIn.value.TaskName
  this.task.dueDate = this.TaskformIn.value.dueDate
  this.TaskService.addTask(this.task)
  // this.AllTasks.emit(dataToSend);
  this.onCancleNewTaskView()
}
  ngOnInit():void{
    this.TaskformIn = this.TaskForm.group({
      TaskName:["",[Validators.required,Validators.minLength(3)]],
      Description:["",[Validators.minLength(5)]],
      dueDate:["",[Validators.required]]
    })
  }

}
