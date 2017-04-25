
const Discord = require("discord.js");

var talkModule = require('./talkModule');
var dictionaries = require('./dictionaries');
var configModule = require('./configModule');

const devToken = 'your_dev_token';
const token = 'your_prod_token';

const bot = new Discord.Client();

var isReconnected;

var botSetup;
var greetChannel = new Discord.Channel();

bot.on("ready", () => {
	isReconnected = false;

    botSetup = configModule.readConfig();
    
    for (let config = 0; config < botSetup.length; config++) {

        if (botSetup[config].parameter == '&setGreetChannel') {
            var channelID = botSetup[config].value;
            greetChannel = bot.channels.get(channelID);
        }            
    }

});


bot.on('presenceUpdate', (user) => {

  var previousStatus = user.frozenPresence.status;

  if (previousStatus == 'offline') {

    greetChannel.sendMessage('welcome ma gurrl!');

  }

});


bot.on("message", message => {

	var input = message.content;
});


process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});


bot.on("disconnect", () =>
{
    isReconnected = true;

    setTimeout (Reconnect.bind(null, devToken), reconnectInterval);
});


function Reconnect(devToken)
{
    if (isReconnected == true)
    {
        bot.login(devToken);
    }
}

bot.login(devToken);


