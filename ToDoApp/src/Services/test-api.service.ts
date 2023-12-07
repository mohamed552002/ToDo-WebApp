import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Task } from '../Models/Task';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  private apiUrl = 'https:/localhost:7269/Tasks';
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(`${this.apiUrl}/GetAllTasks`);
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/AddTask`, data);
  }
  DeleteTask(id: number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/DeleteTask/${id}`)
  }
  UpdateTask(id: number,task:Task):Observable<any>{
    return this.http.put<Task>(`${this.apiUrl}/UpdateTask/${id}`,task)
  }
}
