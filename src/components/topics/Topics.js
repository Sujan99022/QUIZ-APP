export function javaQ () {
    return [
        {
          qno : '1',
          question : 'Which keyword is used to define a constant in Java?',
          optA : 'var',
          optB : 'final',
          optC : 'static',
          optD : 'const',
          ans : 'b'
        },
        {
          qno : '2',
          question : `int x = 5;   
          System.out.println(x++ + ++x);`,
          optA : '11',
          optB : '12',
          optC : '13',
          optD : '10',
          ans : 'c'
        },
        {
          qno : '3',
          question : 'Which of the following is NOT a valid Java identifier?',
          optA : '_myVar',
          optB : '$myVar',
          optC : '1stVar',
          optD : 'my_Var',
          ans : 'c'
        },
        {
          qno : '4',
          question : 'Which Java keyword is used to implement multiple inheritance of interfaces?',
          optA : 'extends',
          optB : 'implements',
          optC : 'inheritance',
          optD : 'interface',
          ans : 'b'
        },
        {
          qno : '5',
          question : `What does the 'static' keyword mean in Java?`,
          optA : 'It indicates that the variable or method belongs to the class itself, rather than to instances of the class.',
          optB : 'It indicates that the variable or method can only be accessed within the same package.',
          optC : ' It indicates that the variable or method cannot be changed after initialization.',
          optD : 'It indicates that the variable or method can only be accessed by subclasses.',
          ans : 'a'
        },
        {
          qno : '6',
          question : 'Which collection class in Java provides an ordered collection and allows duplicate elements?',
          optA : 'HashSet',
          optB : 'TreeSet',
          optC : 'ArrayList',
          optD : 'LinkedList',
          ans : 'c'
        },
        {
          qno : '7',
          question : 'What is the result of 12 % 5 in Java?',
          optA : '2',
          optB : '3',
          optC : '4',
          optD : '5',
          ans : 'a'
        },
        {
          qno : '8',
          question : 'Which of the following is NOT a primitive data type in Java?',
          optA : 'int',
          optB : 'double',
          optC : 'string',
          optD : 'char',
          ans : 'c'
        },
        {
          qno : '9',
          question : 'What is the correct way to declare a constructor in Java?',
          optA : 'public void ClassName()',
          optB : 'public ClassName void()',
          optC : 'public ClassName(void)',
          optD : 'public ClassName()',
          ans : 'd'
        },
        {
          qno : '10',
          question : `String str1 = "hello";
          String str2 = new String("hello");
          System.out.println(str1 == str2);
          `,
          optA : 'true',
          optB : 'false',
          optC : 'Compilation Error',
          optD : 'Runtime Error',
          ans : 'b'
        }
      ]
}

export function pythonQ() {
    return [
        {
          qno : '1',
          question : 'What is Python?',
          optA : 'A high-level programming language',
          optB : 'A database management system',
          optC : 'A hardware device',
          optD : 'A version control system',
          ans : 'a'
        },
        {
          qno : '2',
          question : `Which of the following statements is true about Python?`,
          optA : 'It is strongly typed',
          optB : 'It requires compilation before execution',
          optC : 'It supports automatic memory management',
          optD : 'It is only used for web development',
          ans : 'c'
        },
        {
          qno : '3',
          question : `What is the output of the following code snippet? print("Python"[::-1])`,
          optA : 'nohtyP',
          optB : 'Python',
          optC : 'pyt',
          optD : 'ynohtyP',
          ans : 'a'
        },
        {
          qno : '4',
          question : 'Which data type is mutable in Python?',
          optA : 'int',
          optB : 'float',
          optC : 'tuple',
          optD : 'list',
          ans : 'd'
        },
        {
          qno : '5',
          question : `What is the correct way to create a function in Python?`,
          optA : 'def function_name:',
          optB : 'function function_name:',
          optC : 'define function_name():',
          optD : 'def function_name():',
          ans : 'd'
        },
        {
          qno : '6',
          question : 'Which of the following is not a valid way to comment in Python?',
          optA : '# This is a comment',
          optB : '// This is a comment',
          optC : `''' This is a comment '''`,
          optD : `""" This is a comment """`,
          ans : 'b'
        },
        {
          qno : '7',
          question : `What will be the output of the following code snippet? x = [1, 2, 3]
          y = x
          y.append(4)
          print(x)
          `,
          optA : '[1,2,3]',
          optB : '[1,2,3,4]',
          optC : '[1,2,3,4,4]',
          optD : '[1,2,3,4,4,4]',
          ans : 'b'
        },
        {
          qno : '8',
          question : 'Which of the following is used to read user input in Python?',
          optA : 'scanf()',
          optB : 'read()',
          optC : 'input()',
          optD : 'get()',
          ans : 'c'
        },
        {
          qno : '9',
          question : `What will be the output of the following code snippet? print(2 ** 3 ** 2)`,
          optA : '64',
          optB : '512',
          optC : '72',
          optD : '9',
          ans : 'b'
        },
        {
          qno : '10',
          question : `Which of the following statements is true about Python's 'None' object?
          `,
          optA : 'It represents an empty string',
          optB : 'It is equivalent to zero',
          optC : 'It represents absence of a value',
          optD : 'It is equivalent to an empty list',
          ans : 'c'
        }
      ]
}

export function javascriptQ () {
    return [
        {
          qno : '1',
          question : `What is the output of 'typeof null'?`,
          optA : 'null',
          optB : 'object',
          optC : 'undefined',
          optD : 'number',
          ans : 'b'
        },
        {
          qno : '2',
          question : `What is the result of '2 + '2''?`,
          optA : `"4"`,
          optB : '4',
          optC : `"22"`,
          optD : 'NaN',
          ans : 'c'
        },
        {
          qno : '3',
          question : 'Which method is used to add an element to the end of an array in JavaScript?',
          optA : 'push()',
          optB : 'unshift()',
          optC : 'add()',
          optD : 'append()',
          ans : 'a'
        },
        {
          qno : '4',
          question : `What does the '===' operator do in JavaScript?`,
          optA : 'Compares both value and type',
          optB : 'Compares only value',
          optC : 'Compares only type',
          optD : 'Assigns a value',
          ans : 'a'
        },
        {
          qno : '5',
          question : `Which of the following is NOT a valid JavaScript variable name?`,
          optA : 'myVariable',
          optB : '_myVariable',
          optC : '1stVariable',
          optD : '$myVariable',
          ans : 'c'
        },
        {
          qno : '6',
          question : `What is the output of 'console.log(0.1 + 0.2 === 0.3)'?`,
          optA : 'true',
          optB : 'false',
          optC : 'undefined',
          optD : 'NaN',
          ans : 'b'
        },
        {
          qno : '7',
          question : 'Which of the following is NOT a JavaScript data type?',
          optA : 'boolean',
          optB : 'number',
          optC : 'decimal',
          optD : 'string',
          ans : 'c'
        },
        {
          qno : '8',
          question : `What is the result of 'typeof([])'?`,
          optA : 'array',
          optB : 'object',
          optC : 'arrayObject',
          optD : 'undefined',
          ans : 'b'
        },
        {
          qno : '9',
          question : `What is the purpose of the 'querySelector' method in JavaScript?`,
          optA : 'To select the first element that matches a specified CSS selector',
          optB : 'To select all elements that match a specified CSS selector',
          optC : 'To select elements by their class name',
          optD : 'To select elements by their tag name',
          ans : 'a'
        },
        {
          qno : '10',
          question : `Which statement is used to exit from a loop in JavaScript?`,
          optA : 'continue',
          optB : 'break',
          optC : 'return',
          optD : 'exit',
          ans : 'b'
        }
      ]
}

export function reactjsQ() {
    return [
        {
          qno : '1',
          question : 'What is React JS?',
          optA : 'A server-side scripting language',
          optB : 'A JavaScript library for building user interfaces',
          optC : 'A database management system',
          optD : 'A programming language for building mobile apps',
          ans : 'b'
        },
        {
          qno : '2',
          question : `What is JSX in React?`,
          optA : 'JavaScript XML',
          optB : 'JavaScript Extended',
          optC : 'JavaScript Framework',
          optD : 'JavaScript Exchange',
          ans : 'a'
        },
        {
          qno : '3',
          question : 'What is the purpose of using props in React?',
          optA : 'To store component state',
          optB : 'To manage routing',
          optC : 'To pass data from parent to child components',
          optD : 'To handle HTTP requests',
          ans : 'c'
        },
        {
          qno : '4',
          question : 'What is the significance of state in React components?',
          optA : 'It helps in styling components',
          optB : 'It determines the hierarchy of components',
          optC : 'It holds data that may change over time',
          optD : 'It defines the layout of components',
          ans : 'c'
        },
        {
          qno : '5',
          question : `What is a React Hook?`,
          optA : 'A class component in React',
          optB : `A function that lets you "hook into" React state and lifecycle features from function components`,
          optC : 'A method to handle HTTP requests',
          optD : 'A routing library in React',
          ans : 'b'
        },
        {
          qno : '6',
          question : 'What is the key difference between a class component and a functional component in React?',
          optA : 'Class components use JSX, while functional components use plain JavaScript',
          optB : 'Class components can have state and lifecycle methods, while functional components cannot',
          optC : 'Functional components are faster than class components',
          optD : 'Class components can only be used for rendering UI, while functional components are used for logic',
          ans : 'b'
        },
        {
          qno : '7',
          question : 'What is Redux in React?',
          optA : 'A state management library',
          optB : 'A styling framework',
          optC : 'A routing library',
          optD : 'A testing library',
          ans : 'a'
        },
        {
          qno : '8',
          question : 'What are React Router and its use?',
          optA : 'A library for managing HTTP requests',
          optB : 'A state management tool',
          optC : 'A library for adding animations to React components',
          optD : 'A routing library for React applications',
          ans : 'd'
        },
        {
          qno : '9',
          question : 'What is the Virtual DOM in React?',
          optA : 'A browser feature that renders DOM elements virtually',
          optB : 'A lightweight version of the Document Object Model',
          optC : 'An in-memory representation of the actual DOM',
          optD : 'A way to optimize rendering performance in React applications',
          ans : 'c'
        },
        {
          qno : '10',
          question : `What are React Fragments used for?`,
          optA : 'To create virtual DOM elements',
          optB : 'To group multiple React elements without adding extra nodes to the DOM',
          optC : 'To add styles to React components',
          optD : 'To define routing paths in React applications',
          ans : 'b'
        }
      ]
}