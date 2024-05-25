#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("//////////"), chalk.bold.italic.blueBright("WELCOME TO THE CODING QUIZ APPLICATION"), chalk.green("//////////"));


let intro = await inquirer.prompt({
  name: "name",
  type: "input",
  message: chalk.redBright("Enter your name."),
});

console.log(
  chalk.greenBright("Dear"), chalk.bold.yellowBright(`${intro.name}`), chalk.greenBright("You should get 4 points atleast for win in the quiz.")
);

let condition = true;
while (condition) {
  let options = await inquirer.prompt({
    name: "options",
    type: "list",
    message: chalk.redBright("Select which quiz you want to perform."),
    choices: ["HTML", "CSS", "JAVA", "TYPESCRIPT", "PYTHON", "C++"],
  });
  // 1st option
  let points = 0;
  if (options.options === "HTML") {
    let html1 = await inquirer.prompt({
      name: "one",
      type: "list",
      message: chalk.redBright("1) HTML stands for:"),
      choices: [
        "(a) HighText Machine Language",
        "(b) HyperText and links Markup Language",
        "(c) HyperText Markup Language",
        "(d) None of these",
      ],
    });
    if (html1.one === "(c) HyperText Markup Language") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let html2 = await inquirer.prompt({
      name: "two",
      type: "list",
      message:
      chalk.redBright("2) The correct sequence of HTML tags for starting a webpage is:"),
      choices: [
        "(a) Head, Title, HTML, body",
        "(b) HTML, Body, Title, Head",
        "(c) HTML, Head, Title, Body",
        "(d) HTML, Title, Head, Body",
      ],
    });
    if (html2.two === "(c) HTML, Head, Title, Body") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let html3 = await inquirer.prompt({
      name: "three",
      type: "list",
      message:
      chalk.redBright("3) Which of the following element is responsible for making the text bold in HTML?"),
      choices: ["(a) <pre>", "(b) <a>", "(c) <b>", "(d) <br>"],
    });
    if (html3.three === "(c) <b>") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let html4 = await inquirer.prompt({
      name: "four",
      type: "list",
      message:
      chalk.redBright("4) Which of the following tag is used for inserting the largest heading in HTML?"),
      choices: ["(a) <h1>", "(b) <h3>", "(c) <h6>", "(d) <h4>"],
    });
    if (html4.four === "(a) <h1>") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let html5 = await inquirer.prompt({
      name: "five",
      type: "list",
      message:
      chalk.redBright("5) Which of the following tag is used to insert a line-break in HTML?"),
      choices: ["(a) <br>", "(b) <a>", "(c) <pre>", "(d) <b>"],
    });
    if (html5.five === "(a) <br>") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }

    if (points >= 4) {
      console.log(chalk.greenBright("Congratulations! you got"), chalk.bold.yellowBright(`${points}`), chalk.greenBright("points and you passed your quiz."));
    } else {
      console.log(chalk.redBright("You got"), chalk.bold.yellowBright(`${points}`), chalk.redBright("points, you need hard work."));
    }
  // 2nd option
  
  } else if (options.options === "CSS") {
    let points1 = 0;
    let css1 = await inquirer.prompt({
      name: "one",
      type: "list",
      message: chalk.redBright("1) Which of the below is the abbreviation of CSS:"),
      choices: [
        "(a) Cascade sheets style",
        "(b) Color and style sheets",
        "(c) Cascading style sheets",
        "(d) Coded Style Sheet",
      ],
    });
      if (css1.one === "(c) Cascading style sheets") {
        console.log(chalk.magentaBright("Your answer is correct"));
        points1++;
      } else {
        console.log(chalk.red("Your answer is wrong"));
      }
    let css2 = await inquirer.prompt({
      name: "two",
      type: "list",
      message:
      chalk.redBright("2) Which of the following is the correct syntax to add the external stylesheet in CSS:"),
      choices: [
        "(a) <style src = quiz.css>",
        '(b) <style src = "quiz.css">',
        "(c) <stylesheet> quiz.css </stylesheet>",
        `(d) <link rel="stylesheet" type="quiz/css" href="quiz.css">`,
      ],
    });
      if (
        css2.two === `(d) <link rel="stylesheet" type="quiz/css" href="quiz.css">`
      ) {
        console.log(chalk.magentaBright("Your answer is correct"));
        points1++;
      } else {
        console.log(chalk.red("Your answer is wrong"));
      }
    let css3 = await inquirer.prompt({
      name: "three",
      type: "list",
      message:
      chalk.redBright("3)Which of the below CSS properties is used to change the background color of CSS ?"),
      choices: [
        "(a) bg color",
        "(b) color-background",
        "(c) background-color",
        "(d) color",
      ],
    });
      if (css3.three === "(c) background-color") {
        console.log(chalk.magentaBright("Your answer is correct"));
        points1++;
      } else {
        console.log(chalk.red("Your answer is wrong"));
      }
    let css4 = await inquirer.prompt({
      name: "four",
      type: "list",
      message:
      chalk.redBright("4) Which of the below CSS class is used to change the text color of CSS ?"),
      choices: [
        "(a) background-color",
        "(b) color",
        "(c) color-background",
        "(d) None of the above",
      ],
    });
      if (css4.four === "(b) color") {
        console.log(chalk.magentaBright("Your answer is correct"));
        points1++;
      } else {
        console.log(chalk.red("Your answer is wrong"));
      }
    let css5 = await inquirer.prompt({
      name: "five",
      type: "list",
      message:
      chalk.redBright("5) Which of the below is the correct syntax to put a line over text in CSS?"),
      choices: [
        "(a) text-decoration: line",
        "(b) text-decoration: none",
        "(c) text-decoration: overline",
        "(d) text-decoration: underline",
      ],
    });
      if (css5.five === "(c) text-decoration: overline") {
       console.log(chalk.magentaBright("Your answer is correct"));
        points1++;
     } else {
      console.log(chalk.red("Your answer is wrong"));
      }
      if (points1 >= 4) {
        console.log(chalk.greenBright("Congratulations! you got"), chalk.bold.yellowBright(`${points1}`), chalk.greenBright("points and you passed your quiz."));
      } else {
        console.log(chalk.redBright("You got"), chalk.bold.yellowBright(`${points1}`), chalk.redBright("points, you need hard work."));
      }
    }
  // 3rd option
  
  else if (options.options === "JAVA") {
    let points2 = 0;
    let java1 = await inquirer.prompt({
      name: "one",
      type: "list",
      message: chalk.redBright("1. Who invented Java Programming?"),
      choices: [
        "a) Guido van Rossum",
        "b) James Gosling",
        "c) Dennis Ritchie",
        "d) Bjarne Stroustrup",
      ],
    });
    if (java1.one === "b) James Gosling") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points2++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let java2 = await inquirer.prompt({
      name: "two",
      type: "list",
      message: chalk.redBright("2. Which statement is true about Java?:"),
      choices: [
        "a) Java is a sequence-dependent programming language",
        "b) Java is a code dependent programming language",
        "c) Java is a platform-dependent programming language",
        "d) Java is a platform-independent programming language",
      ],
    });
    if (
      java2.two === "d) Java is a platform-independent programming language"
    ) {
      console.log(chalk.magentaBright("Your answer is correct"));
      points2++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let java3 = await inquirer.prompt({
      name: "three",
      type: "list",
      message:
      chalk.redBright("Which component is used to compile, debug and execute the java programs?"),
      choices: ["a) JRE", "b) JIT", "c) JDK", "d) JVM"],
    });
    if (java3.three === "c) JDK") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points2++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let java4 = await inquirer.prompt({
      name: "four",
      type: "list",
      message: chalk.redBright("4. Which one of the following is not a Java feature?"),
      choices: [
        "a) Object-oriented",
        "b) Use of pointers",
        "c) Portable",
        "d) Dynamic and Extensible",
      ],
    });
    if (java4.four === "b) Use of pointers") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points2++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let java5 = await inquirer.prompt({
      name: "five",
      type: "list",
      message: chalk.redBright("5. Which of these cannot be used for a variable name in Java?"),
      choices: [
        "a) identifier & keyword",
        "b) identifier",
        "c) keyword",
        "d) none of the mentioned",
      ],
    });
    if (java5.five === "c) keyword") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points2++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    if (points2 >= 4) {
      console.log(chalk.greenBright("Congratulations! you got"), chalk.bold.yellowBright(`${points2}`), chalk.greenBright("points and you passed your quiz."));
    } else {
      console.log(chalk.redBright("You got"), chalk.bold.yellowBright(`${points2}`), chalk.redBright("points, you need hard work."));
    }
  }
  // 4th option
  
  else if (options.options === "TYPESCRIPT") {
     let points3 = 0;
    let ts1 = await inquirer.prompt({
      name: "one",
      type: "list",
      message: chalk.redBright("1. What is TypeScript primarily used for?"),
      choices: [
        "a. Memory Management",
        "b. Dynamic Typing",
        "c. Static Typing",
        "d. Asynchronous operations",
      ],
    });
    if (ts1.one === "c. Static Typing") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points3++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let ts2 = await inquirer.prompt({
      name: "two",
      type: "list",
      message: chalk.redBright("2. Which of the following is NOT a valid TypeScript data type?"),
      choices: ["a. void", "b. any", "c. dynamic", "d. tuple"],
    });
    if (ts2.two === "c. dynamic") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points3++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let ts3 = await inquirer.prompt({
      name: "three",
      type: "list",
      message: chalk.redBright("3. How do you denote a variable as readonly in TypeScript?"),
      choices: ["a. const", "b. static", "c. readonly", "d. fixed"],
    });
    if (ts3.three === "c. readonly") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points3++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let ts4 = await inquirer.prompt({
      name: "four",
      type: "list",
      message:
      chalk.redBright("4. How do you specify that a function does not return anything in TypeScript?"),
      choices: [
        "a. function myFunc(): undefined",
        "b. function myFunc(): void",
        "c. function myFunc(): null",
        "d. function myFunc(): None",
      ],
    });
    if (ts4.four === "b. function myFunc(): void") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points3++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let ts5 = await inquirer.prompt({
      name: "five",
      type: "list",
      message: chalk.redBright("5. How do you define a custom type in TypeScript?"),
      choices: ["a. interface", "b. typedef", "c. type", "d. Both A and C"],
    });
    if (ts5.five === "d. Both A and C") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points3++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    if (points3 >= 4) {
      console.log(chalk.greenBright("Congratulations! you got"), chalk.bold.yellowBright(`${points3}`), chalk.greenBright("points and you passed your quiz."));
    } else {
      console.log(chalk.redBright("You got"), chalk.bold.yellowBright`(${points3}`), chalk.redBright("points, you need hard work.");
    }
  }

  // 5th option
 
  else if (options.options === "PYTHON") {
    let points4 = 0;
    let py1 = await inquirer.prompt({
      name: "one",
      type: "list",
      message: chalk.redBright("1. Who developed Python Programming Language?"),
      choices: [
        "a) Wick van Rossum",
        "b) Rasmus Lerdorf",
        "c) Guido van Rossum",
        "d) Niene Stom",
      ],
    });
    if (py1.one === "c) Guido van Rossum") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points4++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let py2 = await inquirer.prompt({
      name: "two",
      type: "list",
      message: chalk.redBright("2. Which type of Programming does Python support?"),
      choices: [
        "a) object-oriented programming",
        "b) structured programming",
        "c) functional programming",
        "d) all of the mentioned",
      ],
    });
    if (py2.two === "d) all of the mentioned") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points4++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let py3 = await inquirer.prompt({
      name: "three",
      type: "list",
      message: chalk.redBright("3. Is Python case sensitive when dealing with identifiers?"),
      choices: [
        "a) no",
        "b) yes",
        "c) machine dependent",
        "d) none of the mentioned",
      ],
    });
    if (py3.three === "b) yes") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points4++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let py4 = await inquirer.prompt({
      name: "four",
      type: "list",
      message:
      chalk.redBright("4. Which of the following is the correct extension of the Python file?"),
      choices: ["a) .python", "b) .pl", "c) .py", "d) .p"],
    });
    if (py4.four === "c) .py") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points4++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let py5 = await inquirer.prompt({
      name: "five",
      type: "list",
      message: chalk.redBright("5. Is Python code compiled or interpreted?"),
      choices: [
        "a) Python code is both compiled and interpreted",
        "b) Python code is neither compiled nor interpreted",
        "c) Python code is only compiled",
        "d) Python code is only interpreted",
      ],
    });
    if (py5.five === "a) Python code is both compiled and interpreted") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points4++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    if (points4 >= 4) {
      console.log(chalk.greenBright("Congratulations! you got"), chalk.bold.yellowBright(`${points4}`), chalk.greenBright("points and you passed your quiz."));
    } else {
      console.log(chalk.redBright("You got"), chalk.bold.yellowBright(`${points4}`), chalk.redBright("points, you need hard work."));
    }
  }
  // 6th option
 
  else if (options.options === "C++") {
    let points5 = 0;
    let c1 = await inquirer.prompt({
      name: "one",
      type: "list",
      message: chalk.redBright("1. Who invented C++?"),
      choices: [
        "a) Dennis Ritchie",
        "b) Ken Thompson",
        "c) Brian Kernighan",
        "d) Bjarne Stroustrup",
      ],
    });
    if (c1.one === "d) Bjarne Stroustrup") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points5++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let c2 = await inquirer.prompt({
      name: "two",
      type: "list",
      message: chalk.redBright("2. What is C++?"),
      choices: [
        "a) C++ is an object oriented programming language",
        "b) C++ is a procedural programming language",
        "c) C++ supports both procedural and object oriented programming language",
        "d) C++ is a functional programming language",
      ],
    });
    if (
      c2.two ===
      "c) C++ supports both procedural and object oriented programming language"
    ) {
      console.log(chalk.magentaBright("Your answer is correct"));
      points5++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let c3 = await inquirer.prompt({
      name: "three",
      type: "list",
      message:
      chalk.redBright("3. Which of the following is the correct syntax of including a user defined header files in C++?"),
      choices: [
        "a) #include [userdefined]",
        `b) #include “userdefined”`,
        "c) #include <userdefined.h>",
        "d) #include <userdefined>",
      ],
    });
    if (c3.three === `b) #include “userdefined”`) {
      console.log(chalk.magentaBright("Your answer is correct"));
      points5++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let c4 = await inquirer.prompt({
      name: "four",
      type: "list",
      message: chalk.redBright("4. Which of the following is used for comments in C++?"),
      choices: [
        "a) /* comment */",
        "b) // comment */",
        "c) // comment",
        "d) both // comment or /* comment */",
      ],
    });
    if (c4.four === "d) both // comment or /* comment */") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points5++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    let c5 = await inquirer.prompt({
      name: "five",
      type: "list",
      message:
      chalk.redBright("5. Which of the following user-defined header file extension used in c++?"),
      choices: ["a) hg", "b) cpp", "c) h", "d) hf"],
    });
    if (c5.five === "c) h") {
      console.log(chalk.magentaBright("Your answer is correct"));
      points5++;
    } else {
      console.log(chalk.red("Your answer is wrong"));
    }
    if (points5 >= 4) {
      console.log(chalk.greenBright("Congratulations! you got"), chalk.bold.yellowBright(`${points5}`), chalk.greenBright("points and you passed your quiz."));
    } else {
      console.log(chalk.redBright("You got"), chalk.bold.yellowBright(`${points5}`), chalk.redBright("points, you need hard work."));
    }}
  let continueQuiz = await inquirer.prompt({
    name: "continue",
    type: "confirm",
    message: chalk.redBright("Do you want to continue quiz again?"),
    default: true
  })
  condition = continueQuiz.continue;
  }
  console.log(chalk.magentaBright("ThankYou,"), chalk.bold.yellowBright(`${intro.name}`), chalk.magentaBright("for using Quiz Application."));
  console.log(chalk.blueBright.bold.italic("HOPE YOU ENJOYED. GOOD LUCK FOR YOUR CODING JOURNEY."));
