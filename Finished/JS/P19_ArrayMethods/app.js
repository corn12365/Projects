let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ];
  //console.log(secretMessage);
  //console.log(secretMessage.length); is 24
  secretMessage.pop();
  
  //console.log(secretMessage);
  //console.log(secretMessage.length); is 23
  
  secretMessage.push("to", "Program");
  //console.log(secretMessage);
  
  secretMessage[7] = "right";
  //console.log(secretMessage);
  
  secretMessage.shift();
  //console.log(secretMessage);
  
  secretMessage.unshift("Programming");
  //console.log(secretMessage);
  
  //console.log(secretMessage);
  
  /* Mr GPT gave me this normie solution which is pretty cool
  let words = ["get", "right", "the", "first", "time", "replace", "me"];
  
  secretMessage = secretMessage.map(word => {
    switch (word) {
      case 'get':
      case 'right':
      case 'the':
      case 'first':
      case 'time,':
        return 'know';
      default:
        return word;
    }
  });
  */
  // Chad splicer
  secretMessage.splice(6, 5, "know");
  
  console.log(secretMessage.join(" "));
  