import { Component, Inject, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, isFormGroup } from '@angular/forms';
import { EditDataService } from '../../Services/EditData.service';
import { Task } from '../../../Models/Task';
import { Subscription } from 'rxjs';
import { TestApiService } from '../../../Services/test-api.service';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit ,OnChanges,OnDestroy{
  updateForm:FormGroup;
editedTask:Task = new Task();



  @Input()
  viewed:boolean
  constructor(private editDetailService:EditDataService,private taskApi:TestApiService,private formBuilder:FormBuilder){

  }
  @Input()
  selectedTask:any
  closeEditDetails(){
    this.editDetailService.sendData(false);
  }
  DeleteTask(id:number){
    this.editDetailService.deleteTask(id);
    this.closeEditDetails()
  }
  get formattedDate(): string {
    const date = new Date(this.selectedTask.dueDate);
    return date.toISOString().substring(0, 10); // Format as 'YYYY-MM-DD'
  }
  EditTask(id:number){
    this.editedTask.AssignTask(id,this.updateForm.value.TaskName,this.updateForm.value.Description,this.updateForm.value.dueDate)
    this.editDetailService.updateTask(id,this.editedTask);
    this.closeEditDetails();
  }
  validateField(field:string){
    const formcontrol = this.updateForm.get(field)
    if(formcontrol){
        formcontrol.markAsTouched();}
    else{
      formcontrol.markAsUntouched();}
  }
  shouldShowError(field:string){
    const control = this.updateForm.get(field);
    return control && control.invalid && control.touched && (control.dirty || control.touched);
  }

  DetailSubscription:Subscription;
  ngOnInit(): void {
    this.DetailSubscription =  this.editDetailService.taskTransfered.subscribe((task:Task)=>{
      this.selectedTask = task
      this.updateForm = this.formBuilder.group({
        TaskName: [this.selectedTask.name,[Validators.required,Validators.minLength(3)]],
        Description: [`${this.selectedTask.description}`,[Validators.minLength(5)]],
        dueDate:[this.formattedDate,[Validators.required]]})
    })

  }
  ngOnChanges(){

  }
  ngOnDestroy(){
    this.DetailSubscription.unsubscribe()
  }
}
