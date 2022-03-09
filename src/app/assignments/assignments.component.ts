import { Component, OnInit } from '@angular/core';
import {Assignment} from "./assignment.model";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  boutonInactif = false;
  //?: ça peut être null
  assignmentSelectionne ?: Assignment;
  //champ de formulaire != obligatoire
  nomAssignment!:string;
  dateDeRendu!:Date;

  titre = "Mon application sur les assignments";
  assignments:Assignment[] = [
    {
      nom : "Devoir angular de Mr Buffa",
      dateDeRendu : new Date('2022-03-28'),
      rendu : false
    },
    {
      nom : "Devoir oracle de Mr Mopollo",
      dateDeRendu : new Date('2022-01-22'),
      rendu : true
    },
    {
      nom : "Devoir grails de Mr Galli",
      dateDeRendu : new Date('2022-04-01'),
      rendu : false
    },
  ]

  //appelé après le constructeur et avant l'affichage du composant
  ngOnInit(): void {
  }

  onSubmit(){
    console.log('nom =' + this.nomAssignment + 'date de rendu =' + this.dateDeRendu);
    let newAssignment = new Assignment();
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    //on l'ajoute au tableau
    this.assignments.push(newAssignment);
  }
  formulaireSoumis(nom:string){
    console.log(nom);
  }
  assignmentClique(a:Assignment){
    this.assignmentSelectionne = a;
  }
}
