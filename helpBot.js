
const Discord = require("discord.js");

var talkModule = require('./talkModule');

var dictionaries = require('./dictionaries');

var request = require("request");

const devToken = 'your_dev_token';
const token = 'your_prod_token';

const bot = new Discord.Client();

var isReconnected;

bot.on("ready", () => {
	isReconnected = false;
});


bot.on("message", message => {
	silence = 0;

	console.log(message.content);

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


