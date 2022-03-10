import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis?:Assignment;
  constructor() { }

  ngOnInit(): void {
  }
  //changer la propriéte d'un devoir non rendu à rendu
  onAssignmentRendu(){
    if(this.assignmentTransmis)
      this.assignmentTransmis.rendu = true;
  }

}
