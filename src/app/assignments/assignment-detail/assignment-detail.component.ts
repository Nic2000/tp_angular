import {Component, Input,Output, OnInit,EventEmitter} from '@angular/core';
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis?:Assignment;
    //on va utiliser un outpu() pour envoyer l'assignment créée au père
  @Output() supprimerAssignment = new EventEmitter<Assignment>()
  constructor() { }

  ngOnInit(): void {
  }
  //changer la propriéte d'un devoir non rendu à rendu
  onAssignmentRendu(){
    if(this.assignmentTransmis)
      this.assignmentTransmis.rendu = true;
  }
  DeleteAssignment(){
      this.supprimerAssignment.emit(this.assignmentTransmis);
      this.assignmentTransmis = undefined;
  }

}
