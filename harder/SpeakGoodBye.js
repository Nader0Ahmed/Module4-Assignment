(function (window) {
  var goodByeGreeting = {};
  goodByeGreeting.speakWord = "Good Bye";
  goodByeGreeting.sayGoodBye = function(name) {
    console.log(goodByeGreeting.speakWord + " " + name);
  }
  window.goodByeGreeting = goodByeGreeting;
})(window);