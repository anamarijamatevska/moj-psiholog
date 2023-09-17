export const questions = [
  {
    question: 'Што Ве натера да побарате помош од психолог?',
    type: 'checkbox',
    answers: [
      {
        answer: 'Се чувстувам депресивно',
        category: 'anxiety-depression'
      },
      {
        answer: 'Се чувствувам анксиозно',
        category: 'anxiety-depression'
      },
      {
        answer: 'Се соочувам со семејни проблеми',
        category: 'family'
      },
      {
        answer: 'Не можам да најдам смисла во сопствениот живот',
        category: 'anxiety-depression'
      },
      {
        answer: 'Се соочив со траума',
        category: 'anxiety-depression'
      },
      {
        answer: 'Сакам да поминам преку одредена препрека',
        category: 'anxiety-depression'
      },
      {
        answer: 'Тагувам по изгубена личност',
        category: 'anxiety-depression'
      },
      {
        answer: 'Имам потешкотии кога се работи за храна',
        category: 'eating-dissorder'
      },
      {
        answer: 'Друго',
        category: 'other'
      }
    ],
  },
  {
    question: 'Дали моментално се соочувате со прекумерна тага или депресија?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Не',
        category: 'other'
      }
    ],
  },
  {
    question: 'Дали се чувствувате лошо за себе или дали мислите дека сте ги разочарале најблиските?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Не',
        category: 'other'
      }
    ],
  },
  {
    question: 'Какви се Вашите моментални навики за исхрана?',
    type: 'radio',
    answers: [
      {
        answer: 'Лоши',
        category: 'eating-dissorder'
      },
      {
        answer: 'Средни',
        category: 'eating-dissorder'
      },
      {
        answer: 'Добри',
        category: 'other'
      },
    ],
  },
  {
    question: 'Дали Ви доаѓаат мисли дека би Ви било подобро доколку сте мртви или доколку се повредите себе на некаков начин?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Не',
        category: 'other'
      }
    ],
  },
  {
    question: 'Кога последно помисливте на самоубиство?',
    type: 'radio',
    answers: [
      {
        answer: 'Никогаш',
        category: 'other'
      },
      {
        answer: 'Пред една година',
        category: 'anxiety-depression'
      },
      {
        answer: 'Пред околу 3 месеци',
        category: 'anxiety-depression'
      },
      {
        answer: 'Пред околу 1 месец',
        category: 'anxiety-depression'
      },
      {
        answer: 'Во последните две недели',
        category: 'anxiety-depression'
      }
    ],
  },
  {
    question: 'Дали некогаш сте имале панични напади?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Не',
        category: 'other'
      }
    ],
  },
  {
    question: 'Дали се менуваат Вашите мисли и чувства кога ќе осетите анксиозност?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Не',
        category: 'other'
      }
    ],
  },
  {
    question: 'Дали имате претходни искуства или трауми кои може да се причина за Вашата анксиозност?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Не',
        category: 'other'
      }
    ],
  },
  {
    question: 'Дали моментално се соочувате со анксиозност или панични напади?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Не',
        category: 'other'
      }
    ],
  },
  {
    question: 'Дали често помислувате на самоубиство?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'anxiety-depression'
      },
      {
        answer: 'Ретко',
        category: 'anxiety-depression'
      },
      {
        answer: 'Никогаш',
        category: 'other'
      },
    ],
  },
  {
    question: 'Колку често излегувате со Вашите пријатели или партнер?',
    type: 'radio',
    answers: [
      {
        answer: 'Немам пријатели/партнер',
        category: 'anxiety-depression'
      },
      {
        answer: 'Ретко',
        category: 'anxiety-depression'
      },
      {
        answer: 'Често',
        category: 'other'
      },
    ],
  },
  {
    question: 'Дали се храните здраво?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'other'
      },
      {
        answer: 'Не',
        category: 'eating-dissorder'
      }
    ],
  },
  {
    question: 'Каков е Вашиот однос со храната?',
    type: 'radio',
    answers: [
      {
        answer: 'Добар',
        category: 'other'
      },
      {
        answer: 'Лош',
        category: 'eating-dissorder'
      }
    ],
  },
  {
    question: 'Дали имате луѓе во Вашиот живот кои Ви даваат поддршка?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'other'
      },
      {
        answer: 'Не',
        category: 'anxiety-depression'
      }
    ],
  },
  {
    question: 'Дали добро се справувате со стрес?',
    type: 'radio',
    answers: [
      {
        answer: 'Да',
        category: 'other'
      },
      {
        answer: 'Не',
        category: 'anxiety-depression'
      }
    ],
  },
  {
    question: 'Каков Ви е односот со Вашата фамилија?',
    type: 'radio',
    answers: [
      {
        answer: 'Добар',
        category: 'other'
      },
      {
        answer: 'Лош',
        category: 'anxiety-depression'
      }
    ],
  },
  {
    question: 'Кои се Вашите преференци за Вашиот психолог?',
    type: 'radio',
    answers: [
      {
        answer: 'Да биде машко',
        category: 'male'
      },
      {
        answer: 'Да биде женско',
        category: 'female'
      }
    ],
  },
]