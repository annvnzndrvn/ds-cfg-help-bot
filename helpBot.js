const Discord = require("discord.js");

var talkModule = require('./talkModule');
var dictionaries = require('./dictionaries');
var cmdModule = require('./cmdModule');
var eventModule = require('./eventModule');
var utilities = require('./utilities');
var config = require('./config.json');
var configModule = require('./configModule');

const bot = new Discord.Client({autoReconnect:true});

var botSetup;
var greetChannel = new Discord.Channel();
var eventChannel = new Discord.Channel();
var adminUser = new Discord.User();

const milliseconds = 2000;

bot.on("ready", () => {

    greetChannel = bot.channels.get(config.cfg.greetChannel);
    eventChannel = bot.channels.get(config.cfg.eventChannel);
    adminUser = configModule.retrieveAdminUser(bot.users, config.cfg.host);
});

bot.on('presenceUpdate', (user) => {

  if (config.cfg.greetOnReturn.toLowerCase() == 'true') {

    var previousStatus = user.frozenPresence.status;
    var r = utilities.getRandomNumber(0, config.cfg.greetings.length);

    if (previousStatus == 'offline' && config.cfg.greetOn.toLowerCase() == 'true') {

        config.cfg.greetPrivate.toLowerCase() == 'true' ? 
                            user.sendMessage(user.user + ': ' + config.cfg.greetings[r])   
                            : greetChannel.sendMessage(user.user + ': ' + config.cfg.greetings[r]);
    }

  }
  else
    return;
});

bot.on('guildMemberAdd', (user) => {

  var r = utilities.getRandomNumber(0, config.cfg.greetings.length);

  if (config.cfg.greetOn.toLowerCase() == 'true') {

    config.cfg.greetPrivate.toLowerCase() == 'true' ? 
                    user.sendMessage(user.user + ': ' + config.cfg.greetings[r])   
                    : greetChannel.sendMessage(user.user + ': ' + config.cfg.greetings[r]);
  }
});

bot.on("message", message => {

	var input = message.content;

    var cmd = cmdModule.parseCommand(input, config.cfg.helpCmds);

    if (cmd != null) {
        message.reply(cmd.return);
        if (cmd.warnHost.toLowerCase() == 'true') {
            cmdModule.warnAdmin(adminUser, cmd, message);
        }
    }
});

function eventCheck() {
    eventChannel = bot.channels.get(config.cfg.eventChannel);
    eventModule.checkDeadline(config.cfg.events, eventChannel);
    setTimeout(eventCheck, milliseconds);
}

setTimeout(eventCheck, milliseconds);

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

bot.on("disconnect", () =>
{
    
});

bot.login(config.cfg.token);