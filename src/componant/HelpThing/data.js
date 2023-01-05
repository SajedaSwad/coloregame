import { useState } from "react";

const Question = (props) => {
  const [formColor, setFormColor] = useState(['blue', 'green', 'yellow', 'purple', 'pink']);
  const colors = [];
  let rand;
  for (let i = 0; i < 4; i++) {
    rand = Math.floor(Math.random() * 10) % formColor.length;
    colors.push(formColor[rand]);
  }
  console.log ('colors',colors);
  return colors

}
const Compare = (rightAns, userAns) => {
  if (rightAns.length !== userAns.length) return false;
  let equal = true;
  let i = 0;
  while (equal && i < 4) {
    if (userAns[i] !== rightAns[i])
      equal = false;
    else
      i++;
  }
  return equal;
};
const checkAnswer = (answer, question) => {
  let cc = 0, cr = 0;
  const map = {};
  for (let i = 0; i < question.length; i++) {
    if (!map[question[i]])
      map[question[i]] = 0;
    map[question[i]]++;
  }

  for (let i = 0; i < answer.length; i++) {
    if (map[answer[i]]) {
      cr += 1;
      map[answer[i]]--;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    if (question[i] === answer[i]) {
      cc += 1;
      cr--;
    }
  }
  console.log('cc', cc);
  console.log('cr', cr);
  return { cc, cr }
}


export { Question, Compare, checkAnswer };