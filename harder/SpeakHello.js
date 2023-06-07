(function (window) {
  var helloGreeting = {};
  helloGreeting.speakWord = "Hello";
  helloGreeting.sayHello = function (name) {
    console.log(helloGreeting.speakWord + " " + name);
  };
  window.helloGreeting = helloGreeting;
})(window);