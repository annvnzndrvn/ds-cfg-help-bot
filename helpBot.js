
const Discord = require("discord.js");

var talkModule = require('./talkModule');
var dictionaries = require('./dictionaries');
var cmdModule = require('./cmdModule');
var utilities = require('./utilities');
var config = require('./config.json');
var configModule = require('./configModule');

const bot = new Discord.Client();

var isReconnected;

var botSetup;
var greetChannel = new Discord.Channel();
var adminUser = new Discord.User();

bot.on("ready", () => {

	isReconnected = false;

    greetChannel = bot.channels.get(config.cfg.greetChannel);
    adminUser = configModule.retrieveAdminUser(bot.users, config.cfg.host);
});


bot.on('presenceUpdate', (user) => {

  var previousStatus = user.frozenPresence.status;
  var r = utilities.getRandomNumber(0, config.cfg.greetings.length);

  if (previousStatus == 'offline' && config.cfg.greetOn.toLowerCase() == 'true')
      greetChannel.sendMessage(user.user + ': ' + config.cfg.greetings[r]);

});


bot.on("message", message => {

	var input = message.content;

    var cmd = cmdModule.parseCommand(input, config.cfg.helpCmds);

    if (cmd != null) {
        message.reply(cmd.return);
        if (cmd.warnHost.toLowerCase() == 'true') {
            cmdModule.warnAdminAboutAbuse(adminUser, message);
        }
    }
        
});


process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});


bot.on("disconnect", () =>
{
    isReconnected = true;

    setTimeout (Reconnect.bind(null, config.cfg.token), reconnectInterval);
});


function Reconnect(tkn)
{
    if (isReconnected == true)
    {
        bot.login(tkn);
    }
}


bot.login(config.cfg.token);


