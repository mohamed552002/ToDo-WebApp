export class Task{

  AssignTask(id:number,name:string,description:string,dueDate:Date,isCompleted?:boolean){
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted
  }
  id:number
  name:string;
  isCompleted?:boolean;
  description:string;
  dueDate:Date;
}
