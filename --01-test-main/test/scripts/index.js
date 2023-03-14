const questions = [
  {
      question: "Укажите правильную классификацию массивов:",
      optionA: "Одномерные и многомерные",
      optionB: "Резиновые и статичные",
      optionC: "Сложные и простые",
      optionD: "сортировка",
      correctOption: "optionA"
  },

  {
      question: "Укажите правильное написание функции «квадратный корень из числа x»: ?",
      optionA: "Math.Sqrt(x)",
      optionB: "Sqrt(x)",
      optionC: "Arifmetic.sqrt(x)",
      optionD: "сортировка",
      correctOption: "optionB"
  },
  {
    question: "Минимальное значение типа byte: ",
    optionA: "1",
    optionB: "255",
    optionC: "0",
    optionD: "сортировка",
    correctOption: "optionC"
  },
  {
    question: "Условный оператор предназначен для: ",
    optionA: "оптимизации программы",
    optionB: "установления  условий  пользователю",
    optionC: "ветвления программы",
    optionD: "сортировка",
    correctOption: "optionB"
  },
  {
    question: "Укажите определяющую составляющую при проектировании модулей, функций, алгоритмов работы и использований структур данных: ",
    optionA: "организация процесса",
    optionB: "архитектура программного обеспечения",
    optionC: "системные требования",
    optionD: "сортировка",
    correctOption: "optionB"
  },
  {
    question: "Определите результат выполнения фрагмента следующего кода: Console.WriteLine(«Hello, World!»);",
    optionA: "Напишет на новой строчке Hello, World!",
    optionB: "Удалит все значения с Hello, World!",
    optionC: "Напишет Hello, World!",
    optionD: "сортировка",
    correctOption: "optionB"
  },
  {
    question: "Определите результат фрагмента кода:  int a = 10;  int b = 4;  bool c = (a == 10 && b == 4);",
    optionA: "Null",
    optionB: "True",
    optionC: "False",
    optionD: "сортировка",
    correctOption: "optionB"
},
{
  question: "Укажите правильное обозначение вещественного типа float:",
  optionA: "4,5",
  optionB: "4",
  optionC: "4.5f",
  optionD: "сортировка",
  correctOption: "optionC"
},
{
  question: "В каком варианте правильно создана переменная: ",
  optionA: "$x = 10;",
  optionB: "char symbol = ‘A’;",
  optionC: "x = 0;",
  optionD: "сортировка",
  correctOption: "optionB"
},
{
  question: "Укажите обозначение логического оператора «НЕ»: ",
  optionA: "No",
  optionB: "Not",
  optionC: "!",
  optionD: "сортировка",
  correctOption: "optionB"
},
{
  question: "К языку программирования низкого уровня относится: ",
  optionA: "Basic",
  optionB: "Fortran",
  optionC: "Assembler",
  optionD: "сортировка",
  correctOption: "optionC"
},
{
  question: "Символьный тип данных объявляется служебным словом: ",
  optionA: "string",
  optionB: "word",
  optionC: "char",
  optionD: "сортировка",
  correctOption: "optionC"
},
{
  question: "Логический тип данных объявляется служебным словом: ",
  optionA: "LOGIC",
  optionB: "BOOLEAN",
  optionC: "BYTE",
  optionD: "сортировка",
  correctOption: "optionB"
},
{
  question: "Какие из приведенных типов данных относятся к целочисленному типу данных: ",
  optionA: "comp, double",
  optionB: "integer, real",
  optionC: "integer, word, longint ",
  optionD: "сортировка",
  correctOption: "optionC"
},
{
  question: "Цикл с предусловием определяется служебным словом: ",
  optionA: "WHILE ",
  optionB: "FOR",
  optionC: "REPEAT",
  optionD: "сортировка",
  correctOption: "optionA"
},
{
  question: "Как называется набор однотипных данных, имеющий общее для всех своих элементов имя?",
  optionA: "множество",
  optionB: "массив",
  optionC: "запись",
  optionD: "сортировка",
  correctOption: "optionB"
},
{
  question: "Определите, как называется процесс перестановки элементов массива с целью упорядочивания их в соответствии с каким-либо критерием?",
  optionA: "поиск",
  optionB: "перебор",
  optionC: "массив",
  optionD: "сортировка",
  correctOption: "optionD"
},
{
  question: "Разработке алгоритма предшествует: ",
  optionA: "постановка задачи, разработка математической модели ",
  optionB: "постановка задачи, разработка математической модели, выбор метода решения",
  optionC: "постановка задачи, выбор метода решения, проектирование программ",
  optionD: "сортировка",
  correctOption: "optionA"
},
{
  question: "Языком высокого уровня является: ",
  optionA: "Ассемблер",
  optionB: "Фортран ",
  optionC: "Макроассемблер ",
  optionD: "сортировка",
  correctOption: "optionB"
},


]


let shuffledQuestions = [] //пустой массив для хранения перетасованных выбранных вопросов из всех доступных вопросов

function handleQuestions() { 
  //функция для перемешивания и отправки 10 вопросов в массив shuffledQuestions
  while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1 //содержит текущий номер вопроса
let playerScore = 0  //держит счет игрока
let wrongAttempt = 0 //количество неправильных ответов, выбранных игроком
let indexNumber = 0 //будет использоваться при отображении следующего вопроса

// функция для отображения следующего вопроса
//также обрабатывает отображение игроков и информации о викторинах
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //получает текущий вопрос 
  const currentQuestionAnswer = currentQuestion.correctOption //получает ответ на текущий вопрос
  const options = document.getElementsByName("option"); 
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //получить правильный радиовход с правильным ответом
          correctOption = option.labels[0].id
      }
  })

  //проверка, чтобы убедиться, что радиовход проверен или выбрана опция
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //проверяет совпадает ли отмеченный ответ с правильным
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++ //добавление к счету игрока
          indexNumber++ //добавление 1 к индексу, поэтому нужно отобразить следующий вопрос
          //задержка для след вопроса
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++ //добавляет 1 к неправильным овтетам 
          indexNumber++
          //задержка для следующего вопроса
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}




function handleNextQuestion() {
  checkForAnswer() //проверка на правильный ответ
  unCheckRadioButtons()
  //задерживает отображение следующего вопроса
  setTimeout(() => {
      if (indexNumber <= 9) {
//отображает следующий вопрос, если номер индекса не больше 9
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()//заканчивает тест
      }
      resetOptionBackground()
  }, 1000);
}

//возвращает фон параметров к нулю после отображения правильных/неправильных цветов
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// снятие флажка со всех переключателей для следующего вопроса
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// функция для ответа на все вопросы
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // проверка как ответил пользователь
  if (playerScore <= 3) {
      remark = "Плохо. Поролбуйте еще"
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Уже лучше. Есть куда стремиться"
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Отлично, продолжай в том же духе"
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  //данные для отображение на экран
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//закрывает тест и перемешивает вопросы
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//функция для закрытие окна если не выбрал ответ
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}