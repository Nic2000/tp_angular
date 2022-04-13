import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  //champ de formulaire != obligatoire
  nomAssignment!:string;
  dateDeRendu!:Date;
  private assignments: any;

  //on va utiliser un outpu() pour envoyer l'assignment créée au père
  @Output() nouvelAssignment = new EventEmitter<Assignment>()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('nom =' + this.nomAssignment + 'date de rendu =' + this.dateDeRendu);
    let newAssignment = new Assignment();
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    //on l'ajoute au tableau
  //  this.assignments.push(newAssignment);
    this.nouvelAssignment.emit(newAssignment);
  }
}
