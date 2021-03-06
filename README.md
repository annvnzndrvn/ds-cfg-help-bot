# DS-CFG-HELP-BOT
A discord help-bot which can be customized with a set of parameters loaded through a JSON file.

### Customizable parameters
+ token - your bot's token
+ host - to store bot's application owner ID in case bot needs to reach out to her.
+ helpCmds - defined with a trigger (for example: &help) that will set off the corresponding response (return parameter in JSON file).
+ greetOn - when set to TRUE, greets members to the server using any of the sentences added in the greetings array.
+ greetOnReturn - if set to FALSE, help-bot will ignore members that come back to the guild and it will only send a greeting message to new members to the guild. Set this to TRUE if you want the bot to send messages to every member that goes online.
+ greetPrivate - set to TRUE to have the bot send the greeting privately or FALSE to have it sent to the greetChannel.
+ greetChannel - to store channel's ID where bot should send greetings to.
+ eventChannel - to store channel's ID where bot should send event reminders and announcements.
+ greetings - string array with greetings.
+ events - see events section for full description.

###  Events
Events are structured as follows:

| Parameter     | Explanation                                                                              |
| :------------ | :--------------------------------------------------------------------------------------- |
| name          | name of the event                                                                        |
| start         | date at which event should trigger. It should be set using this format: "2017-4-29 2:04" |
| announcement  | this is the string of text that will be sent along with the event announcement once it reaches the start date.|
| atEveryone  | when set to TRUE, it will mention everyone, otherwise it will just send the name and announcement of the event.|
| duration  | how long the event will last.|
| reminders  | list containing reminders in 00:00 format. Once it reaches the specified time, it will trigger a message to the channel |


### Planned customizable parameters
+ currently no planned new customizable features.

## FAQ
+ **Q: Bot won't send messages to the greeter channel! What's wrong?** **A:** Make sure the greeter channel has been set correctly in JSON's greetChannel and that greetOn is set to 'true'.
+ **Q: Events aren't working properly and I made sure the eventChannel is set up. What's the problem?** **A:** The date format should be like this: "2017-4-29 2:04".
+ **Q: How to find the ID of the channel to set it on the config file?** **A:** On discord desktop app, switch to developer mode and then just right click on the channel + copy ID.

### Honorable mentions
+ hydrabolt for [discord.js](https://github.com/hydrabolt/discord.js/)
+ moment for [moment.js](https://github.com/moment/moment) 
