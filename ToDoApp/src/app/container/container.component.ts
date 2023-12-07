import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { EditDataService } from '../Services/EditData.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(50%)',
      })),
      transition(':enter', [
        animate(200)
      ])
    ]),trigger('colChange', [
      transition('* => *', [
        state('void', style({
          width: '100%', // Initial width when expanded
        })),
        animate('0.5s ease-out')
      ])
    ])]
})
export class ContainerComponent implements OnInit {
fabars = faBars;
constructor(private editBtn:EditDataService){}
@Input()
TaskDetails:boolean = false;
selectedTask:any;
setSelectedTask(event:any){
  this.selectedTask = event;

}

ngOnInit(){
  this.editBtn.data$.subscribe((data:boolean)=>{
    this.TaskDetails =data;
})

}
}
