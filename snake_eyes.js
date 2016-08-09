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
controller.hears('throw the dice',['direct_message','direct_mention','mention'],function(bot,message) {

  var names = ["Josh", "Keshav", "Chris", "Will", "KC", "Jarom", "Christian"];
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
