// Repeticao

const studentsOfClassA = [

  { name: `Mayk`, grade: 9.8 },

  {
    name: `Diego`,
    grade: 6.2
  },

  {
    name: `Nic`,
    grade: 2.1
  },

  {
    name: `Liduina`,
    grade: 7.4
  }
]

const studentsOfClassB = [

  {
    name: `Cleitin`,
    grade: 0.8
  },

  {
    name: `Robsu`,
    grade: 8.7
  },

  {
    name: `Stano`,
    grade: 5.4
  },

  {
    name: `Zolol`,
    grade: 3.4
  }
]

function calculateAverage(students) {
  let sum = 0
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }
  const average = (sum / students.length).toFixed(2)
  return average
}

function sendMessage(average, class0) {
  if (average > 5) {
    console.log(`${class0} average ${average}. Congrats!`)
  } else {
    console.log(`${class0} average ${average}. Is not good!`)
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {

  if (student.flunked) {
    console.log(`${student.name} is flunked!`)
  }
}

function studentflunked(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendFlunkedMessage(student)
  }
}

const average1 = calculateAverage(studentsOfClassA)
const average2 = calculateAverage(studentsOfClassB)

sendMessage(average1, `Class A`)
sendMessage(average2, `Class B`)

studentflunked(studentsOfClassA)
studentflunked(studentsOfClassB)

