export const songTemplates = {
    frereJacques: {
      name: "Frère Jacques",
      id: "tuneFrere",
      pattern: [
        [   // Line 1: "are you sleeping"
          { syllables: 1, count: 1, wordKey: 'word1' },   // "are"
          { syllables: 1, count: 1, wordKey: 'word2' },   // "you"
          { syllables: 2, count: 1, wordKey: 'word3' }    // "sleeping"
        ],
        [   // Line 2: repeat of line 1
          { syllables: 1, count: 1, wordKey: 'word1' },   // "are"
          { syllables: 1, count: 1, wordKey: 'word2' },   // "you"
          { syllables: 2, count: 1, wordKey: 'word3' }    // "sleeping"
        ],
        [   // Line 3: "brother John"
          { syllables: 2, count: 1, wordKey: 'word4' },   // "brother"
          { syllables: 1, count: 1, wordKey: 'word5' }    // "John"
        ],
        [   // Line 4: repeat of line 3
          { syllables: 2, count: 1, wordKey: 'word4' },   // "brother"
          { syllables: 1, count: 1, wordKey: 'word5' }    // "John"
        ],
        [   // Line 5: "morning bells are ringing"
          { syllables: 2, count: 1, wordKey: 'word6' },   // "morning"
          { syllables: 1, count: 1, wordKey: 'word7' },   // "bells"
          { syllables: 1, count: 1, wordKey: 'word8' },   // "are"
          { syllables: 2, count: 1, wordKey: 'word9' }    // "ringing"
        ],
        [   // Line 6: repeat of line 5
          { syllables: 2, count: 1, wordKey: 'word6' },   // "morning"
          { syllables: 1, count: 1, wordKey: 'word7' },   // "bells"
          { syllables: 1, count: 1, wordKey: 'word8' },   // "are"
          { syllables: 2, count: 1, wordKey: 'word9' }    // "ringing"
        ],
        [   // Line 7: "ding dang dong"
          { syllables: 1, count: 1, wordKey: 'word10' },   // "ding"
          { syllables: 1, count: 1, wordKey: 'word11' },   // "dang"
          { syllables: 1, count: 1, wordKey: 'word12' }    // "dong"
        ],
        [   // Line 8: repeat of line 7
          { syllables: 1, count: 1, wordKey: 'word10' },   // "ding"
          { syllables: 1, count: 1, wordKey: 'word11' },   // "dang"
          { syllables: 1, count: 1, wordKey: 'word12' }    // "dong"
        ]
      ],
      original: [
        "are you sleeping",
        "are you sleeping",
        "brother John",
        "brother John",
        "morning bells are ringing",
        "morning bells are ringing",
        "ding dang dong",
        "ding dang dong"
      ]
    },
    rowYourBoat: {
      name: "Row Row Row Your Boat",
      id: "tuneRow",
      pattern: [
        [   // "Row row row your boat"
          { syllables: 1, count: 1, wordKey: 'row' },    // "Row"
          { syllables: 1, count: 1, wordKey: 'row' },    // "row"
          { syllables: 1, count: 1, wordKey: 'row' },    // "row"
          { syllables: 1, count: 1 },                    // "your"
          { syllables: 1, count: 1 }                     // "boat"
        ],
        [   // "Gently down the stream"
          { syllables: 2, count: 1 },                    // "gently"
          { syllables: 1, count: 1 },                    // "down"
          { syllables: 1, count: 1 },                    // "the"
          { syllables: 1, count: 1 }                     // "stream"
        ],
        [   // "Merrily merrily merrily merrily"
          { syllables: 3, count: 1, wordKey: 'merrily' }, // "merrily"
          { syllables: 3, count: 1, wordKey: 'merrily' }, // "merrily"
          { syllables: 3, count: 1, wordKey: 'merrily' }, // "merrily"
          { syllables: 3, count: 1, wordKey: 'merrily' }  // "merrily"
        ],
        [   // "Life is but a dream"
          { syllables: 1, count: 1 },                    // "life"
          { syllables: 1, count: 1 },                    // "is"
          { syllables: 1, count: 1 },                    // "but"
          { syllables: 1, count: 1 },                     // "a"
          { syllables: 1, count: 1 }                     // "dream"
        ]
      ],
      original: [
        "Row, row, row your boat",
        "Gently down the stream",
        "Merrily, merrily, merrily, merrily",
        "Life is but a dream"
      ]
    },
    maryLamb: {
      name: "Mary Had a Little Lamb",
      id: "tuneMary",
      pattern: [
        [   // "Mary had a little lamb"
          { syllables: 2, count: 1, wordKey: 'mary' },   // "Mary"
          { syllables: 1, count: 1 },                    // "had"
          { syllables: 1, count: 1 },                    // "a"
          { syllables: 2, count: 1, wordKey: 'little' }, // "little"
          { syllables: 1, count: 1, wordKey: 'lamb' }    // "lamb"
        ],
        [   // "Little lamb"
          { syllables: 2, count: 1, wordKey: 'little' }, // "little"
          { syllables: 1, count: 1, wordKey: 'lamb' }    // "lamb"
        ],
        [   // "Little lamb"
          { syllables: 2, count: 1, wordKey: 'little' }, // "little"
          { syllables: 1, count: 1, wordKey: 'lamb' }    // "lamb"
        ],
        [   // "Mary had a little lamb"
          { syllables: 2, count: 1, wordKey: 'mary' },   // "Mary"
          { syllables: 1, count: 1 },                    // "had"
          { syllables: 1, count: 1 },                    // "a"
          { syllables: 2, count: 1, wordKey: 'little' }, // "little"
          { syllables: 1, count: 1, wordKey: 'lamb' }    // "lamb"
        ],
        [   // "Whose fleece was white as snow"
          { syllables: 1, count: 1 },                    // "whose"
          { syllables: 1, count: 1 },                    // "fleece"
          { syllables: 1, count: 1 },                    // "was"
          { syllables: 1, count: 1 },                    // "white"
          { syllables: 1, count: 1 },                    // "as"
          { syllables: 1, count: 1 }                     // "snow"
        ]
      ],
      original: [
        "Mary had a little lamb",
        "Little lamb",
        "Little lamb",
        "Mary had a little lamb",
        "Whose fleece was white as snow"
      ]
    }
  };
  
  export const wordCollections = {
    random: {},
    animals: {
      1: [
        "cat", "dog", "pig", "hen", "bat", "rat", "cow", "duck", "bird", "fish", "snake", "frog", "fox", "seal", "whale", "bear"
      ],
      2: [
        "tiger", "lion", "penguin", "rabbit", "turtle", "hamster", "puppy", "kitten", "monkey", "zebra", "panda", "gerbil", "camel", "donkey"
      ],
      3: [
        "elephant", "kangaroo", "buffalo", "butterfly", "octopus", "pelican", "antelope", "crocodile", "cockatiel"
      ],
      4: [
        "rhinoceros", "alligator", "salamander"
      ],
      5: [
        "hippopotamus"
      ]
    },
    starwars: {
      1: [
        "Sith", "Luke", "Rey", "Han", "Ben", "Finn", "Poe", "droid", "drone", "ship", "force", "light", "dark"
      ],
      2: [
        "Vader", "Leia", "Chewie", "Yoda", "Kylo", "Jabba", "rebel", "saber"
      ],
      3: [
        "Emperor", "Skywalker", "lightsaber", "galaxy", "stormtrooper", "Kenobi", "destroyer", "empire", "alliance"
      ],
      4: [
        "Millennium", "rebellion"
      ]
    },
    food: {
      1: [
        "bread", "cheese", "rice", "soup", "cake", "pie", "ham", "fish", "beef", "pork", "bean"
      ],
      2: [
        "pizza", "sandwich", "burger", "hotdog", "taco", "sushi", "pasta", "cookie", "muffin", "donut"
      ],
      3: [
        "hamburger", "burrito", "lasagna"
      ],
      4: [
        "macaroni", "quesadilla", "enchilada", "pepperoni", "chimichanga", "fettuccine", "mozzarella", "tortellini", "ravioli"
      ]
    }
  };