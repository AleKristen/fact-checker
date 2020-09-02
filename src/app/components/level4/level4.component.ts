import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css']
})
export class Level4Component implements OnInit {

  question: any;
  questions: Array<{}> = [
    {
      id: 0,
      title: "En ________ de 2019 se detectó el primer caso de Coronavirus en China.",
      options: [
        {
          a:"Octubre",
          b:"Noviembre",
          c:"Diciembre"
      }
    ]
  },
    {
      id: 1,
      title: "Evitar tocarse la cara, nariz y ________.",
      options: [
        {
        a: "Codos", 
        b:"Pies",
        c:"Ojos"
      }
    ]
  },
    {
      id: 2,
      title: "Al toser deberíamos cubrirnos la boca con la parte interna ________.",
      options: [
        {
        a:"Del codo",
        b:"De la mano",
        c:"Del hombro"
      }
      ]
    },
    {
      id: 3,
      title: "Los geles con ________ son útiles frente al coronavirus.",
      options: [
        {
        a:"Lidocaína",
        b:"Diclofenaco",
        c:"Alcohol"
      }
    ]
  },
  {
    id: 4,
    title: "La OMS recomienda una distancia mínima de ________ para evitar contagios.",
    options: [
      {
      a:"1 m.",
      b:"4 m.",
      c:"3 m."
    }
  ]
},
{
  id: 5,
  title: "Deberías lavarte las manos durante ________ para eliminar la enfermedad por coronavirus.",
  options: [
    {
    a:"15 segundos",
    b:"20 segundos",
    c:"1 minuto"
  }
]
},
  ];

index:any=0;

  constructor() { 
    
  }

  
  nextQuestion(){
    this.question = this.questions[(this.index++)];
  }

  ngOnInit(): void {
    this.question = this.questions[(this.index)];
  }

}
