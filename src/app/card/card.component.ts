import { Component,EventEmitter,Input, Output } from '@angular/core';
import { shortList } from '../models/shortList';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id:number; 
  @Input() title : string; 
  @Input() image: string; 
  @Input() description : string; 
  @Input() available : boolean; 
  

  @Output() notified = new EventEmitter<any>();

  @Output() Element = new EventEmitter<shortList>();

  btnText: string = 'Add to shortlist'; 


  getDescription(description: string) {
    alert(description);
  }

// sendNotif(){
// this.notified.emit("Hello !!!");
// }

sendNotif(){
  this.notified.emit({"msg":"success","code":"200"});
  }

  ShortListDetails() {
let x : shortList = {
  id: 1,
  idUser: 1, 
  idElement: this.id, 
  typeElement: "category"
       }

    this.Element.emit(x);
                                                  
  }

}
