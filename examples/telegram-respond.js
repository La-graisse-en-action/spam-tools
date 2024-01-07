const sendMessage = require("../src/telegram-text");

const musicLyrics = [
  "Yes, no, maybe",
  "I don't know",
  "Can you repeat the question?",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "Life is unfair",
  "So I just stare",
  "At the stain on the wall",
  "Where the TV'd been",
  "But ever since we've moved in",
  "It's been empty",
  "Why I",
  "Why I'm in this room?",
  "There is no point explaining",
  "You're not the boss of me now",
  "And you're not so big",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "Life is a test",
  "But I confess",
  "I like this mess I've made so far",
  "Grade on a curve",
  "And you'll observe",
  "I'm right below the horizon",
  "Yes, no, maybe",
  "I don't know",
  "Can you repeat the question?",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "You're not the boss of me now",
  "And you're not so big",
  "Life is unfair",
];

const anotherTest = `
The Array.from() function in JavaScript takes a list of values and returns a new array with the same number of elements as the original list, but with the values replaced by their index within the original list.

If you have a list of integers and want to return an array whose elements are those integer values, you can use this function:

Array.from( [1, 2, 3] )

This will give you:

[1, 2, 3]

The returned array has the same length as the original one and contains each entry exactly once--there are no duplicates!
`;

sendMessage(musicLyrics);
sendMessage(anotherTest);
