export interface Question {
  questionId: number;
  questionType: string;
  questionText: string;
  choices: string[];
  answer: number;
  explanation: string;
  hint: string;
  mascot: string;
}

export interface Level {
  levelId: number;
  questions: Question[];
}

export interface Unit {
  unitId: number;
  unitText: string;
  levels: Level[];
}

export interface Course {
  courseCode: string;
  courseTitle: string;
  units: Unit[];
}

const courseData: { [key: string]: Course } = {
  "CPCS 211": {
    courseCode: "CPCS 211",
    courseTitle: "LOGIC DESIGN",
    units: [
      {
        unitId: 1,
        unitText: "FUNDAMENTALS OF ARRAYS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What are logic gates?",
                choices: [
                  "Devices that amplify signals",
                  "Basic building blocks of digital circuits",
                  "Components that store data",
                  "Units that measure electrical resistance",
                ],
                answer: 1,
                explanation:
                  "Logic gates are fundamental building blocks of digital circuits.",
                hint: "They are used in digital circuits.",
                mascot: "Logical Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Explain Boolean algebra.",
                choices: [
                  "A type of advanced calculus",
                  "A mathematical system for analyzing circuits",
                  "A programming language",
                  "A method to design mechanical systems",
                ],
                answer: 1,
                explanation:
                  "Boolean algebra is a mathematical system used to analyze and simplify digital circuits.",
                hint: "It's related to logic and circuits.",
                mascot: "Logical Bot",
              },
              {
                questionId: 3,
                questionType: "Multiple Choice",
                questionText: "Explain Life",
                choices: [
                  "A programming language",
                  "A mathematical system",
                  "A digital circuit component",
                  "A complex set of rules and experiences",
                ],
                answer: 3,
                explanation:
                  "Life is a complex set of rules and experiences, often requiring logical thinking.",
                hint: "Think beyond circuits and mathematics.",
                mascot: "Logical Bot",
              },
            ],
          },
          {
            levelId: 2,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is a truth table?",
                choices: [
                  "A table showing logical relationships",
                  "A data storage method",
                  "A type of array",
                  "A method to measure voltage",
                ],
                answer: 0,
                explanation:
                  "A truth table is a mathematical table used in logic to determine the truth value of a complex expression.",
                hint: "It helps in logic determination.",
                mascot: "Logical Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Define combinatorial logic.",
                choices: [
                  "Logic based on combinations of input values",
                  "A method to design software",
                  "A system to measure circuits",
                  "A storage method for data",
                ],
                answer: 0,
                explanation:
                  "Combinatorial logic refers to digital circuits where the output is solely dependent on the input values.",
                hint: "It's about input combinations.",
                mascot: "Logical Bot",
              },
            ],
          },
          {
            levelId: 3,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is a Karnaugh map?",
                choices: [
                  "A tool for circuit simulation",
                  "A method for simplifying Boolean expressions",
                  "A programming language",
                  "A data structure",
                ],
                answer: 1,
                explanation:
                  "A Karnaugh map is used for simplifying Boolean expressions.",
                hint: "It's a visual tool.",
                mascot: "Logical Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Explain the AND gate.",
                choices: [
                  "Outputs true if at least one input is true",
                  "Outputs true only if all inputs are true",
                  "Inverts the input signal",
                  "Outputs true if inputs are different",
                ],
                answer: 1,
                explanation:
                  "The AND gate outputs true only if all inputs are true.",
                hint: "It requires all conditions to be true.",
                mascot: "Logical Bot",
              },
            ],
          },
          {
            levelId: 4,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is a NOR gate?",
                choices: [
                  "Outputs true if at least one input is true",
                  "Outputs true only if all inputs are true",
                  "Inverts the input signal",
                  "Outputs true if all inputs are false",
                ],
                answer: 3,
                explanation:
                  "The NOR gate outputs true if all inputs are false.",
                hint: "It combines OR and NOT functions.",
                mascot: "Logical Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Define the NOT gate.",
                choices: [
                  "Outputs true if at least one input is true",
                  "Inverts the input signal",
                  "Outputs true if all inputs are false",
                  "Outputs true only if all inputs are true",
                ],
                answer: 1,
                explanation: "The NOT gate inverts the input signal.",
                hint: "It provides the opposite value.",
                mascot: "Logical Bot",
              },
            ],
          },
          {
            levelId: 5,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is a flip-flop?",
                choices: [
                  "A type of shoe",
                  "A type of logical gate",
                  "A memory storage element",
                  "A sorting algorithm",
                ],
                answer: 2,
                explanation:
                  "A flip-flop is a memory storage element used in sequential logic circuits.",
                hint: "It stores a bit of data.",
                mascot: "Logical Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Describe sequential logic.",
                choices: [
                  "Logic that depends only on current inputs",
                  "Logic that depends on current and past inputs",
                  "Logic for sorting data",
                  "Logic for arithmetic operations",
                ],
                answer: 1,
                explanation:
                  "Sequential logic depends on both current and past inputs.",
                hint: "It has memory of past states.",
                mascot: "Logical Bot",
              },
            ],
          },
        ],
      },
    ],
  },
  "CPCS 203": {
    courseCode: "CPCS 203",
    courseTitle: "COMPUTER SCIENCE",
    units: [
      {
        unitId: 1,
        unitText: "INTRODUCTION TO ALGORITHMS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is an algorithm?",
                choices: [
                  "A step-by-step procedure",
                  "A random process",
                  "A data storage method",
                  "A type of circuit",
                ],
                answer: 0,
                explanation:
                  "An algorithm is a step-by-step procedure or formula for solving a problem.",
                hint: "It's a methodical process.",
                mascot: "Algorithm Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Why are algorithms important?",
                choices: [
                  "They store data",
                  "They are fundamental to computer science",
                  "They power everything from search engines to operating systems",
                  "Both 1 and 2",
                ],
                answer: 3,
                explanation:
                  "Algorithms are fundamental to computer science and are used to power everything from search engines to operating systems.",
                hint: "They are central to many systems.",
                mascot: "Algorithm Bot",
              },
            ],
          },
          {
            levelId: 2,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "Explain sorting algorithms.",
                choices: [
                  "Algorithms that arrange data",
                  "Algorithms that search for data",
                  "Algorithms that store data",
                  "Algorithms that compress data",
                ],
                answer: 0,
                explanation:
                  "Sorting algorithms are algorithms that put elements of a list in a certain order.",
                hint: "They arrange data in order.",
                mascot: "Algorithm Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Describe searching algorithms.",
                choices: [
                  "Algorithms that arrange data",
                  "Algorithms that find specific items",
                  "Algorithms that store data",
                  "Algorithms that compress data",
                ],
                answer: 1,
                explanation:
                  "Searching algorithms are algorithms designed to retrieve information stored within some data structure.",
                hint: "They help find specific items.",
                mascot: "Algorithm Bot",
              },
            ],
          },
          {
            levelId: 3,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is a binary search algorithm?",
                choices: [
                  "An algorithm that searches sorted data",
                  "An algorithm that searches unsorted data",
                  "An algorithm that sorts data",
                  "An algorithm that compresses data",
                ],
                answer: 0,
                explanation:
                  "Binary search algorithm efficiently finds the position of a target value within a sorted array.",
                hint: "It works on sorted data.",
                mascot: "Algorithm Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Explain the concept of recursion.",
                choices: [
                  "A technique for compressing data",
                  "A function that calls itself",
                  "A method for storing data",
                  "A type of sorting algorithm",
                ],
                answer: 1,
                explanation:
                  "Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.",
                hint: "It's a self-referential process.",
                mascot: "Algorithm Bot",
              },
            ],
          },
          {
            levelId: 4,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is dynamic programming?",
                choices: [
                  "A method for algorithm optimization",
                  "A programming paradigm",
                  "A method to store data",
                  "A type of search algorithm",
                ],
                answer: 0,
                explanation:
                  "Dynamic programming is an optimization technique that solves problems by breaking them down into simpler subproblems.",
                hint: "It's about breaking down problems.",
                mascot: "Algorithm Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Describe the greedy algorithm.",
                choices: [
                  "An algorithm that looks at the whole solution",
                  "An algorithm that makes the locally optimal choice at each step",
                  "An algorithm that sorts data",
                  "An algorithm that compresses data",
                ],
                answer: 1,
                explanation:
                  "A greedy algorithm is an approach for solving problems by making the locally optimal choice at each stage with the hope of finding a global optimum.",
                hint: "It's about local optimization.",
                mascot: "Algorithm Bot",
              },
            ],
          },
          {
            levelId: 5,
            questions: [
              {
                questionId: 1,
                questionType: "Multiple Choice",
                questionText: "What is a graph algorithm?",
                choices: [
                  "An algorithm that deals with graphs",
                  "An algorithm that sorts data",
                  "An algorithm that compresses data",
                  "An algorithm for searching data",
                ],
                answer: 0,
                explanation:
                  "Graph algorithms are a set of instructions that traverse (visit nodes of) a graph.",
                hint: "It's related to nodes and edges.",
                mascot: "Algorithm Bot",
              },
              {
                questionId: 2,
                questionType: "Multiple Choice",
                questionText: "Explain the concept of backtracking.",
                choices: [
                  "A sorting algorithm",
                  "A method for storing data",
                  "An algorithm for solving problems incrementally",
                  "A method for data compression",
                ],
                answer: 2,
                explanation:
                  "Backtracking is an algorithmic technique for solving problems incrementally by trying partial solutions and then abandoning them if they are not suitable.",
                hint: "It involves trying and abandoning solutions.",
                mascot: "Algorithm Bot",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default courseData;
