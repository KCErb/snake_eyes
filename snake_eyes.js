// Basic test case
var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: true
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACK_TOKEN,
}).startRTM()

// give the bot something to listen for.
controller.on('mention',function(bot,message) {
  var namesToDrop = message.split(' -');
  var allNames = ["Addison", "Christian", "Chris", "Jarom", "Josh", "KC", "Keshav", "Will"];
  names = allNames.diff(namesToDrop);
  shuffle(names);
  bot.reply(message,names.join('\n'));
});

// Fisher–Yates shuffle - thanks stack overflow
// http://stackoverflow.com/a/6274398/3221576
function shuffle(array) {
  var counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    var index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

// Array diff - thanks stack overflow
// http://stackoverflow.com/a/4026828/3221576
// case insensitive indexOf - thanks stack overflow
// http://stackoverflow.com/a/40195757/3221576
Array.prototype.diff = function(a) {
    return this.filter(function(i) {
      indexOf = a.findIndex(item => i.toLowerCase() === item.toLowerCase());
      return indexOf < 0;
    });
};
