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

  formVisible = false;

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


  formulaireSoumis(nom:string){
    console.log(nom);
  }
  assignmentClique(a:Assignment){
    this.assignmentSelectionne = a;
  }

  onAddAssignmentBtnClick() {
      this.formVisible = true;
  }
}
