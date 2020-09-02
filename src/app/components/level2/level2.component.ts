import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

  question: any;
  questions: Array<{}> = [
    {
      "number": 1,
      "question": "¿Qué famoso alimento ha sido falsamente señalado como una cura del virus?",
      "options": [
        {
          "a": "Choclo",
          "b": "Ajo",
          "c": "Lechuga"
        }
      ],
      "answer": "Ajo",
      "explanation": "El ajo es un alimento saludable y posee propiedades antimicrobianas, pero no hay evidencia de que comer ajo proteja a nadie respecto a la infección por coronavirus."
    },
    {
      "number": 2,
      "question": "Con el confinamiento se pretende…",
      "options": [
        {
          "a": "Aplanar la curva",
          "b": "Descansar en casa",
          "c": "Pasar más tiempo con la familia"
        }
      ],
      "answer": "Aplanar la curva",
      "explanation": "Falta esto"
    },
    {
      "number": 3,
      "question": "¿Cuántas cepas de Coronavirus relacionados con enfermedades respiratorias en humanos existen?",
      "options": [
        {
          "a": 10,
          "b": 5,
          "c": 7
        }
      ],
      "answer": 7,
      "explanation": "Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19."
    },
    {
      "number": 4,
      "question": "¿Hasta cuántos días se estima que demora en incubar el virus en el cuerpo?",
      "options": [
        {
          "a": "10 días",
          "b": "14 días",
          "c": "7 días"
        }
      ],
      "answer": "14 días",
      "explanation": "El “período de incubación” es el tiempo que transcurre entre la infección por el virus y la aparición de los síntomas de la enfermedad. La mayoría de las estimaciones respecto al periodo de incubación de COVID-19 oscilan entre 1 y 14 días, y en general se sitúan en torno a cinco días."
    },
    {
      "number": 5,
      "question": "¿Cuántos días debe mantener una cuarentena alguien que estuvo en contacto con una persona con COVID-19?",
      "options": [
        {
          "a": "20 días",
          "b": "7 días",
          "c": "14 días"
        }
      ],
      "answer": "14 días",
      "explanation": "El aislamiento domiciliario (cuarentena) durará 14 días, desde que estuvo en contacto con una persona con COVID-19 en su periodo sintomático o desde la fecha de salida de un país que tiene un brote activo de COVID-19. El tiempo del aislamiento domiciliario (cuarentena) está determinado por el periodo de incubación del SARS-CoV-2."
    },
    {
      "number": 6,
      "question": "¿Cómo se llama al síntoma de dificultad para respirar?",
      "options":
      {
        "a": "Disnea",
        "b": "Cefalea",
        "c": "Hiperventilación"
      },
      "answer": "Disnea",
      "explanation": "Pendiente"
    }
  ];

  index: any = 0;
  answer: any;


  constructor(private router: Router) { }

  nextQuestion(){
    if (this.index <= this.questions.length -1) {
      return this.question = this.questions[(this.index++)];
    } else {
      this.router.navigateByUrl('/correct');
    }
  }


  ngOnInit(): void {
    this.question = this.questions[(this.index)];
  }

}

