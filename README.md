# DS-CFG-HELP-BOT
A discord help-bot which can be customized with a set of parameters loaded through a JSON file.

### Customizable parameters
+ token - your bot's token
+ host - to store bot's application owner ID in case bot needs to reach out to her.
+ helpCmds - defined with a trigger (for example: &help) that will set off the corresponding response (return parameter in JSON file).
+ greetOn - when set to TRUE, greets players to the server using any of the sentences added in the greetings array.
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
| firstReminder  | TODO! |
| secondReminder  | TODO! |
| thirdReminder  | TODO! |

### Planned customizable parameters
+ extend events.
+ extend greetings to account for new users entering the guild vs old users returning to it.
+ chatterBot - when set to TRUE, it will bring random topics based on existing topics in the chatTopics array.
+ chatTopics - array with topics.

## FAQ
+ **Q: Bot won't send messages to the greeter channel! What's wrong?** **A:** Make sure the greeter channel has been set correctly in JSON's greetChannel and that greetOn is set to 'true'.
+ **Q: Events aren't working properly and I made sure the eventChannel is set up. What's the problem?** **A:** The date format should be like this: "2017-4-29 2:04".

### Honorable mentions
+ hydrabolt for [discord.js](https://github.com/hydrabolt/discord.js/)
+ moment for [moment.js](https://github.com/moment/moment) 
