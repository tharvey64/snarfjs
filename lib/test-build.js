// "exercise-javascript-{name}": function(){
//     return [
//         {
//             describe: "<text>",
//             config: {
//                 ...
//             },
//             messages: {
//                 ...
//             }
//         },
//         {
//             describe: "<text>",
//             config: {
//                 ...
//             },
//             messages: {
//                 ...
//                 <nameOfMatcher>:function(details){
//                     ...
//                     return <message>;
//                 }

//             }            
//         },
//             ...
//     ];
// }


module.exports = {
    "exercise-javascript-temp-convert": function(){
        return [
            {
                describe: "Fahrenheit to Celsius",
                config: {
                    variable_name: 'fahrenheitToCelsius',
                    inputs: [32, 10, 75, 245],
                    outputs: [0, -12.22, 23.89, 118.33]
                },
                messages: {
                    variable: 'fahrenheitToCelsius'
                }
            },
            {
                describe: "Celsius to Fahrenheit",
                config: {
                    variable_name: 'celsiusToFahrenheit',
                    inputs : [0, 10, 75, 245],
                    outputs : [32, 50, 167, 473]
                },
                messages: {
                    variable: 'celsiusToFahrenheit'
                }           
            },
        ];
    },
    "exercise-javascript-fizzbuzz": function(){
        return [
            {
                describe: "FizzBuzz",
                config: {
                    variable_name: 'fizzBuzz',
                    inputs: [20, 3, 10, 6, 2],
                    outputs: [
                        "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\n",
                        "1\n2\nFizz\n",
                        "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n",
                        "1\n2\nFizz\n4\nBuzz\nFizz\n",
                        "1\n2\n"
                    ]
                },
                messages: {
                    variable: 'fizzBuzz',
                }
            }
        ];
    },
    "exercise-javascript-print-an-array": function(){
        return [
            {
                describe: "Print an array",
                config: {
                    variable_name: 'fruits',
                    inputs: [["apple", "orange", "lemon", "lime"]],
                    outputs: ["apple\norange\nlemon\nlime\n"]
                },
                messages: {
                    variable: 'fruits',
                } 
            }
        ];
    },
    "exercise-javascript-fibonacci": function(){
        return [
            {
                describe: "Fibonacci",
                config: {
                    variable_name: 'fibonacciSequence',
                    inputs: [3, 14, 38, 200, 1000],
                    outputs: [
                        [0,1,1,2],
                        [0,1,1,2,3,5,8,13],
                        [0,1,1,2,3,5,8,13,21,34],
                        [0,1,1,2,3,5,8,13,21,34,55,89,144],
                        [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]
                    ]
                },
                messages: {
                    variable: 'fibonacciSequence'
                }
            },
        ];
    },
    "exercise-javascript-factorial": function(){
        return [
            {
                describe: "Factorial",
                config: {
                    variable_name: 'factorial',
                    inputs: [0,5,10,20,7],
                    outputs: [
                        1,
                        120,
                        3628800,
                        2432902008176640000,
                        5040
                    ]
                },
                messages: {
                    variable: 'factorial'
                }
            },
        ];
    },
    "exercise-javascript-is-palindrome": function(){
        return [
            {
                describe: "Palindrome",
                config: {
                    variable_name: 'isPalindrome',
                    inputs: ["abcdcba", "ABcCba", "racecar", "onomatopoeia", "Not a palindrome"],
                    outputs: [true, true, true, false, false]
                },
                messages: {
                    variable: 'isPalindrome'
                }
            }
        ];
    },
    "exercise-javascript-largest-prime-factor": function(){
        return [
            {
                describe: "Largest Prime Factor",
                config: {
                    variable_name: 'largestPrimeFactor',
                    inputs: [5,19,18,399,100000,302,601],
                    outputs: [5,19,3,19,5,151,601]
                },
                messages: {
                    variable: 'largestPrimeFactor'
                }
            }
        ];
    },
    "exercise-javascript-string-scramble": function(){
        return [
            {
                describe: "String Scramble",
                config: {
                    variable_name: "stringScramble",
                    inputs: [
                        ['waffle','aAbBcdeeefgL'],
                        ['spartacus','billy'],
                        ['string','Scramble']
                    ],
                    outputs: [
                        ['a','e','f','l'],
                        [],
                        ['s','r']
                    ]
                },
                messages: {
                    variable: "stringScramble"
                }
            }
        ];
    },
    "exercise-javascript-sieve-of-eratosthenes": function(){
        return [
            {
                describe: "Sieve of Eratosthenes",
                config: {
                    variable_name: "sieve",
                    inputs: [-5,4,10,25,50],
                    outputs: [
                        [],
                        [2,3],
                        [2,3,5,7],
                        [2,3,5,7,11,13,17,19,23],
                        [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
                    ]
                },
                messages: {
                    variable: "sieve"
                }
            }
        ];
    },
    "exercise-javascript-triangles": function(){
        return [
            {
                describe: "Triangles",
                config: {
                    variable_name: 'triangle',
                    inputs: [0, 2, 3, 10, 15],
                    outputs: [
                        "",
                        "*\n**\n",
                        "*\n**\n***\n",
                        "*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n",
                        "*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n***********\n************\n*************\n**************\n***************\n"
                    ]
                },
                messages: {
                    variable: 'triangle',
                }
            }
        ];
    },
    "exercise-javascript-make-a-boolean": function(){
        return [
            {
                describe: "Make a Boolean",
                config: {
                    variable_name: 'myBoolean'
                },
                messages: {
                    variable: 'myBoolean'
                } 
            }
        ];
    },
    "exercise-javascript-make-a-variable": function(){
        return [
            {
                describe: "Make a Variable",
                config: {
                    variable_name: 'myVariable'
                },
                messages: {
                    variable: 'myVariable'
                } 
            }
        ];
    },
    "exercise-javascript-make-an-array": function(){
        return [
            {
                describe: "Make an Array",
                config: {
                    variable_name: 'fruits'
                },
                messages: {
                    variable: 'fruits'
                } 
            }
        ];
    },
    "exercise-javascript-make-an-object": function(){
        return [
            {
                describe: "Make an Object",
                config: {
                    variable_name: 'michaela',
                    inputs: [
                        'name','gender','height(cm)',
                        'job','parents', 'pets'
                    ],
                    outputs: [
                        'toBeAString', 'toBeAString', 'toBeANumber', 
                        'toBeAString','toBeAnArray','toBeAnArray'
                    ]
                },
                messages: {
                    variable: 'michaela'
                }            
            }
        ];
    },
    "exercise-javascript-make-a-function": function(){
        return [
            {
                describe: "Make a Function",
                config: {
                    variable_name: 'adder',
                    inputs: [
                        [32,86],[0,-1],[500,-500],[-3,-4],[-14,9]
                    ],
                    outputs: [118, -1, 0, -7, -5]
                },
                messages: {
                    variable: 'adder'
                }            
            }
        ];
    },
    "exercise-javascript-make-some-variables": function(){
        return [
            {
                describe: "Make some variables",
                config: {
                    variable_name: 'name'
                },
                messages: {
                    variable: 'name'
                } 
            },
            {
                describe: "Make some variables",
                config: {
                    variable_name: 'age'
                },
                messages: {
                    variable: 'age'
                } 
            },
            {
                describe: "Make some variables",
                config: {
                    variable_name: 'favoriteMovie'
                },
                messages: {
                    variable: 'favoriteMovie'
                } 
            },
            {
                describe: "Make some variables",
                config: {
                    variable_name: 'favoriteAthlete'
                },
                messages: {
                    variable: 'favoriteAthlete'
                } 
            },
            {
                describe: "Make some variables",
                config: {
                    variable_name: 'birthYear'
                },
                messages: {
                    variable: 'birthYear'
                } 
            }
        ];
    },
};