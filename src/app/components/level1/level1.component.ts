import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {

  question: Object = {};
  questions: Array<{}> = [
    {title: "Las personas con asma tienen mayor riesgo ante el COVID-19",
    options: [{a: "verdadero", b:"falso"}]},
    {title: "Las infusiones con miel, limón o jengibre ¿curan el COVID-19?",
    options: [{a: "falso", b:"verdadero"}]},
    {title: "¿Las moscas domésticas pueden transmitir el COVID-19?",
    options: [{a: "verdero", b:"falso"}]},
    {title: "¿El coronavirus puede afectar a personas jóvenes?",
    options: [{a: "verdero", b:"falso"}]},
    {title: "Los termómetros sin contacto NO detectan el COVID-19",
    options: [{a: "verdero", b:"falso"}]},
    {title: "¿Rociar el cuerpo con alcohol y cloro es efectivo para eliminar el Coronavirus?",
    options: [{a: "verdero", b:"falso"}]},
  ];
  index:any;
  history = [];
  constructor() { }
  setHistory(index) {
    this.history.push(index);
  }
  checkHistory(index) {
    return this.history.includes(index);
  }
  getRandomIndex() {
    return Math.floor(Math.random() * this.questions.length);
  }
  nextQuestion(){
    this.index = this.getRandomIndex();
    if(this.checkHistory(this.index) === false) {
      this.question = this.questions[this.index];
    } else {
      this.index = this.getRandomIndex();
    }
    this.setHistory(this.index);
  }

  ngOnInit() {

  }
}


