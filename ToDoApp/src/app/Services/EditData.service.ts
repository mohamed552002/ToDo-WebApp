import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscribable, Subscription, map, switchMap } from 'rxjs';
import { Task } from '../../Models/Task';
import { TestApiService } from '../../Services/test-api.service';

@Injectable({
  providedIn: 'root',
})
export class EditDataService {
  constructor(private TaskApi:TestApiService) {

  }
  private dataSubject = new Subject<boolean>();
  data$ = this.dataSubject.asObservable();
  private TaskSubject = new Subject<Task>();
  taskTransfered = this.TaskSubject.asObservable();
  private TaskDelete = new Subject<number>();
  taskDelete = this.TaskSubject.asObservable();
  private AllData = new Subject<Task[]>();
  getalldata = this.AllData.asObservable();
  private sharedListSubject = new BehaviorSubject<any[]>([]);
  sharedList$ = this.sharedListSubject.asObservable();

  sendData(data: boolean) {
    this.dataSubject.next(data);
  }
  viewTask(task:Task){
    this.TaskSubject.next(task);
  }
  allTasks = this.TaskApi.getData();

  addTask(task:Task){
      this.TaskApi.postData(task).pipe(switchMap(()=>{
        this.getAllData()
        return []
      })).subscribe();
  }
  updateTask(id:number,task:Task){
    // this.TaskApi.UpdateTask(id,task).subscribe();
      this.TaskApi.UpdateTask(id, task).pipe(
        switchMap(() => {
          this.getAllData()
        return []})
      ).subscribe();

  }


  deleteTask(id){
    this.allTasks.subscribe((data)=>{
      data = data.filter(item => item.id != id)
      this.sharedListSubject.next(data)
      this.TaskApi.DeleteTask(id).subscribe();
    })
  }
  task:any
  tasksupscription:Subscription
  getAllData() {
    this.tasksupscription = this.TaskApi.getData().subscribe((data)=>{
      this.sharedListSubject.next(data)
    })
  }



}
