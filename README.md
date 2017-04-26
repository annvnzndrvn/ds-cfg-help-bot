# DS-CFG-HELP-BOT
A discord help-bot which can be customized with a set of parameters loaded through a JSON file.

### Customizable parameters in development
+ token - your bot's token
+ host - to store bot's application owner ID in case bot needs to reach out to her.
+ helpCmds - defined with a trigger (for example: &help) that will set off the corresponding response (return parameter in JSON file).
+ greetOn - when set to TRUE, greets players to the server using any of the sentences added in the greetings array.
+ greetChannel - to store channel's ID where bot should send greetings to.
+ greetings - string array with greetings.

### Planned customizable parameters
+ chatterBot - when set to TRUE, it will bring random topics based on existing topics in the chatTopics array.
+ chatTopics - array with topics.
+ announceEvents - Array with event objects. The first parameter sets the event name and the second parameter sets the time at which this event will happen. An hour before the event starts, the bot will send reminders every 20 minutes.

## FAQ
+ **Q: Bot won't send messages to the greeter channel! What's wrong?** **A:** Make sure the greeter channel has been set correctly in JSON's greetChannel and that greetOn is set to 'true'.
