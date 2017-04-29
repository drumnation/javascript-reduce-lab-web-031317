const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0)
// example syntax: [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );

// 1) reducers Technologic should have a `totalBatteries` variable
// 2) reducers Technologic should have a number as a result
// 3) reducers Technologic should have made the sum of all the assembled batteries

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
]

var wordCountMap = monologueLines.reduce((line, sentence) => {
  var wordCount = sentence.split(' ').length
  if (!line[wordCount]) {line[wordCount] = 0}
  line[wordCount]++
  return line
}, {})

// 1) reducers The perfect monologue should have a `wordCountMap` variable
// 2) reducers The perfect monologue should have an object as a result
// 3) reducers The perfect monologue should have made the correct word count for all sentences
