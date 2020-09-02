import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {

  question: any;
  questions: Array<{}> = [
    {
      id: 0,
      title: "¿Puede mi mascota contagiarme el COVID-19?",
      options: [
        {
        a: "verdadero", 
        b:"falso"
      }
    ]
  },
    {
      id: 1,
      title: "¿La enfermedad por coronavirus es lo mismo que la gripe?",
      options: [
        {
        a: "verdadero", 
        b:"falso"
      }
    ]
  },
    {
      id: 2,
      title: "¿Puede la enfermedad por coronavirus (COVID-19) transmitirse tanto en temperaturas cálidas como frías?",
      options: [
        {
        a: "verdero", 
        b:"falso"
      }
      ]
    },
    {
      id: 3,
      title: "¿Pueden las cartas, los productos y los paquetes estar contaminados por el virus causante del coronavirus?",
      options: [
        {
        a: "verdadero", 
        b:"falso"
      }
    ]
  },
  {
    id: 4,
    title: "¿Es posible esterilizar y reutilizar las mascarillas poniéndolas en vapor a altas temperaturas?",
    options: [
      {
      a: "verdadero", 
      b:"falso"
    }
  ]
},
{
  id: 5,
  title: "Bañarse en agua caliente no previene la infección por el nuevo coronavirus",
  options: [
    {
    a: "verdadero", 
    b:"falso"
  }
]
},
  ];

  index:any;
  history = [];

  constructor() { }

  setHistory(index: any) {
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

  ngOnInit(): void {
  }

}
