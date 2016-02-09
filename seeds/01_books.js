var description_1 = "This book offers Python programmers one place to look when "+
"they need help remembering or deciphering the syntax of this open source language "+
"and its many powerful but scantily documented modules. This comprehensive reference " +
"guide makes it easy to look up the most frequently needed information--not just about " +
"the Python language itself, but also the most frequently used parts of the standard library "+
"and the most important third-party extensions.";
var url_1 = "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg"

var description_2 = "If you want to learn how to program, working with Python is "+
"an excellent way to start. This hands-on guide takes you through the language a "+
"step at a time, beginning with basic programming concepts before moving on to "+
"functions, recursion, data structures, and object-oriented design. This second "+
"edition and its supporting code have been updated for Python 3.";
var url_2 = "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg";

var description_3 = "Get a practical introduction to React Native, the JavaScript "+
"framework for writing and deploying fully featured mobile apps that look and "+
"feel native. With this hands-on guide, you’ll learn how to build applications "+
"that target iOS, Android, and other mobile platforms instead of browsers. You’ll "+
"also discover how to access platform features such as the camera, user location, and local storage.";
var url_3 = "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg";

var description_4 = "No matter how much experience you have with JavaScript, "+
"odds are you don’t fully understand the language. As part of the "+
"'You Don’t Know JS' series, this compact guide focuses on new features "+
"available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.";
var url_4 = "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/es6_and_beyond.jpg";

var description_5 = "No matter how much experience you have with JavaScript, "+
"odds are you don’t fully understand the language. This concise yet in-depth "+
"guide takes you inside scope and closures, two core concepts you need to know "+
"  to become a more efficient and effective JavaScript programmer. You’ll learn "+
"how and why they work, and how an understanding of closures can be a powerful part "+
"of your development skillset.";
var url_5 = "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/scope_and_closures.jpg";

var description_6 = "No matter how much experience you have with JavaScript, "+
"odds are you don’t fully understand the language. As part of the "+
"'You Don’t Know JS' series, this concise yet in-depth guide focuses "+
"on new asynchronous features and performance techniques—including Promises, "+
"generators, and Web Workers—that let you create sophisticated single-page web "+
"applications and escape callback hell in the process.";
var url_6 = "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/async_and_performance.jpg";

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('books').del(),
    knex('books').insert({title: "Python In A Nutshell", genre: "Python", description: description_1, cover_url: url_1 }),
    knex('books').insert({title: "Think Python", genre: "Python", description: description_2, cover_url: url_2 }),
    knex('books').insert({title: "Learning React Native", genre: "JavaScript", description: description_3, cover_url: url_3 }),
    knex('books').insert({title: "You Don't Know JS: ES6 & Beyond", genre: "JavaScript", description: description_4, cover_url: url_4 }),
    knex('books').insert({title: "You Don't Know JS: Scope & Closures", genre: "JavaScript", description: description_5, cover_url: url_5 }),
    knex('books').insert({title: "You Don't Know JS: Async & Performance", genre: "JavaScript", description: description_6, cover_url: url_6 })

  );
};
