import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les assignments";
  assignments = [
    {
      nom : "Devoir angular de Mr Buffa",
      dateDeRendu : '2022-03-28',
      rendu : false
    },
    {
      nom : "Devoir oracle de Mr Mopollo",
      dateDeRendu : '2022-01-22',
      rendu : true
    },
    {
      nom : "Devoir grails de Mr Galli",
      dateDeRendu : '2022-04-01',
      rendu : false
    },
  ]

  //appelé après le constructeur et avant l'affichage du composant
  ngOnInit(): void {
  }

}
