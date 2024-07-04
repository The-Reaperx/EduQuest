export interface Question {
  questionId: number;
  questionText: string;
  answer: string;
  hints?: string[];
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
                questionText: "What are logic gates?",
                answer:
                  "Logic gates are fundamental building blocks of digital circuits.",
              },
              {
                questionId: 2,
                questionText: "Explain Boolean algebra.",
                answer:
                  "Boolean algebra is a mathematical system used to analyze and simplify digital circuits.",
              },
              {
                questionId: 3,
                questionText: "Explain Life",
                answer:
                  "Boolean algebra is a mathematical system used to analyze and simplify digital circuits.",
              },
            ],
          },
          {
            levelId: 2,
            questions: [
              {
                questionId: 1,
                questionText: "What is a truth table?",
                answer:
                  "A truth table is a mathematical table used in logic to determine the truth value of a complex expression.",
              },
              {
                questionId: 2,
                questionText: "Define combinatorial logic.",
                answer:
                  "Combinatorial logic refers to digital circuits where the output is solely dependent on the input values.",
              },
            ],
          },
          {
            levelId: 3,
            questions: [
              {
                questionId: 1,
                questionText: "What is a truth table?",
                answer:
                  "A truth table is a mathematical table used in logic to determine the truth value of a complex expression.",
              },
              {
                questionId: 2,
                questionText: "Define combinatorial logic.",
                answer:
                  "Combinatorial logic refers to digital circuits where the output is solely dependent on the input values.",
              },
            ],
          },
          {
            levelId: 4,
            questions: [
              {
                questionId: 1,
                questionText: "What is a truth table?",
                answer:
                  "A truth table is a mathematical table used in logic to determine the truth value of a complex expression.",
              },
              {
                questionId: 2,
                questionText: "Define combinatorial logic.",
                answer:
                  "Combinatorial logic refers to digital circuits where the output is solely dependent on the input values.",
              },
            ],
          },
          {
            levelId: 5,
            questions: [
              {
                questionId: 1,
                questionText: "What is a truth table?",
                answer:
                  "A truth table is a mathematical table used in logic to determine the truth value of a complex expression.",
              },
              {
                questionId: 2,
                questionText: "Define combinatorial logic.",
                answer:
                  "Combinatorial logic refers to digital circuits where the output is solely dependent on the input values.",
              },
            ],
          },
        ],
      },
      {
        unitId: 2,
        unitText: "MULTI-DIMENSIONAL ARRAYS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "Explain arrays in programming.",
                answer:
                  "An array is a data structure that stores a collection of elements of the same type.",
              },
              {
                questionId: 2,
                questionText: "What are multi-dimensional arrays?",
                answer:
                  "Multi-dimensional arrays are arrays of arrays, allowing storage of data in multiple dimensions.",
              },
            ],
          },
        ],
      },
      {
        unitId: 3,
        unitText: "OBJECT ORIENTED PROGRAMMING",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What is object-oriented programming (OOP)?",
                answer:
                  "OOP is a programming paradigm based on the concept of 'objects', which can contain data, in the form of fields (often known as attributes), and code, in the form of procedures (often known as methods).",
              },
              {
                questionId: 2,
                questionText: "List some key principles of OOP.",
                answer:
                  "Encapsulation, inheritance, and polymorphism are key principles of OOP.",
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
                questionText: "What is an algorithm?",
                answer:
                  "An algorithm is a step-by-step procedure or formula for solving a problem.",
              },
              {
                questionId: 2,
                questionText: "Why are algorithms important?",
                answer:
                  "Algorithms are fundamental to computer science and are used to power everything from search engines to operating systems.",
              },
            ],
          },
          {
            levelId: 2,
            questions: [
              {
                questionId: 1,
                questionText: "Explain sorting algorithms.",
                answer:
                  "Sorting algorithms are algorithms that put elements of a list in a certain order.",
              },
              {
                questionId: 2,
                questionText: "Describe searching algorithms.",
                answer:
                  "Searching algorithms are designed to find one or more items with specific properties in a collection of items.",
              },
            ],
          },
        ],
      },
      {
        unitId: 2,
        unitText: "SORTING ALGORITHMS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What is a bubble sort?",
                answer:
                  "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
              },
              {
                questionId: 2,
                questionText: "Explain merge sort.",
                answer:
                  "Merge sort is a divide and conquer algorithm that divides the unsorted list into n sublists, each containing one element, then repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining.",
              },
            ],
          },
        ],
      },
      {
        unitId: 3,
        unitText: "SEARCHING ALGORITHMS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What is binary search?",
                answer:
                  "Binary search is a search algorithm that finds the position of a target value within a sorted array.",
              },
              {
                questionId: 2,
                questionText: "Explain linear search.",
                answer:
                  "Linear search is a simple search algorithm that sequentially checks each element of the list until a match is found or the whole list has been searched.",
              },
            ],
          },
        ],
      },
      {
        unitId: 4,
        unitText: "ADVANCED ALGORITHMS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What are dynamic programming algorithms?",
                answer:
                  "Dynamic programming algorithms are algorithms that solve complex problems by breaking them down into simpler subproblems and storing the results of subproblems to avoid recomputation.",
              },
              {
                questionId: 2,
                questionText: "Explain greedy algorithms.",
                answer:
                  "Greedy algorithms are algorithms that make the locally optimal choice at each step with the hope of finding a global optimum.",
              },
            ],
          },
        ],
      },
      {
        unitId: 5,
        unitText: "ADVANCED ALGORITHMS II",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What are backtracking algorithms?",
                answer:
                  "Backtracking algorithms are algorithms that solve problems incrementally by building up a solution piece by piece, removing solutions that fail to satisfy the constraints of the problem at any point.",
              },
              {
                questionId: 2,
                questionText: "Describe divide and conquer algorithms.",
                answer:
                  "Divide and conquer algorithms are algorithms that solve a problem by dividing it into smaller subproblems, solving the subproblems recursively, and combining their solutions to solve the original problem.",
              },
            ],
          },
        ],
      },
      {
        unitId: 6,
        unitText: "FUTURE OF ALGORITHMS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What are quantum algorithms?",
                answer:
                  "Quantum algorithms are algorithms designed to run on quantum computers, taking advantage of quantum phenomena such as superposition and entanglement to perform computations.",
              },
              {
                questionId: 2,
                questionText: "Explain parallel algorithms.",
                answer:
                  "Parallel algorithms are algorithms that solve problems by executing multiple computations simultaneously, taking advantage of parallel processing capabilities.",
              },
            ],
          },
        ],
      },
    ],
  },
  "MATH 202": {
    courseCode: "MATH 202",
    courseTitle: "CALCULUS II",
    units: [
      {
        unitId: 1,
        unitText: "INTRODUCTION TO DATA STRUCTURES",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What are data structures?",
                answer:
                  "Data structures are ways of organizing and storing data so that it can be accessed and used efficiently.",
              },
              {
                questionId: 2,
                questionText: "Explain arrays and linked lists.",
                answer:
                  "Arrays and linked lists are basic data structures used to store collections of data in computer memory.",
              },
            ],
          },
          {
            levelId: 2,
            questions: [
              {
                questionId: 1,
                questionText: "Describe stacks and queues.",
                answer:
                  "Stacks and queues are abstract data types that provide a way to access and manipulate data.",
              },
              {
                questionId: 2,
                questionText: "What are hash tables?",
                answer:
                  "Hash tables are data structures that store key-value pairs and allow for efficient retrieval of values based on their keys.",
              },
            ],
          },
        ],
      },
      {
        unitId: 2,
        unitText: "LINKED LISTS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "Explain singly linked lists.",
                answer:
                  "A singly linked list is a linear data structure where each element contains a data field and a reference (link) to the next element in the list.",
              },
              {
                questionId: 2,
                questionText: "What are doubly linked lists?",
                answer:
                  "A doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes.",
              },
            ],
          },
        ],
      },
      {
        unitId: 3,
        unitText: "TREES AND GRAPHS",
        levels: [
          {
            levelId: 1,
            questions: [
              {
                questionId: 1,
                questionText: "What are trees in data structures?",
                answer:
                  "A tree is a hierarchical data structure that consists of nodes connected by edges. Each node contains a value or data and can have zero or more child nodes.",
              },
              {
                questionId: 2,
                questionText: "Explain binary trees.",
                answer:
                  "A binary tree is a type of tree data structure in which each node has at most two children, referred to as the left child and the right child.",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default courseData;
