# DS-CFG-HELP-BOT
A discord help-bot which can be customized with a set of parameters loaded through a spreadsheet.

### Currently implemented customizable parameters
+ &host - stores this parameter's value as 'admin' in bot's memory.
+ &cmd - creates a command to be called using '&' + parameterValue which will trigger parameterAdditionalValue as bot's response. Can be stacked multiple times.
+ &greetOn - when set to TRUE, greets players to the server using any of the sentences added with !greet.
+ &greet - adds a sentence to the list of greetings. Can be stacked multiple times.
+ &setGreetChannel - sets specific channel for greetings.

### Planned customizable parameters
+ &chatterBot - when set to TRUE, it will bring random topics based on existing &chatTopics.
+ &chatTopic - sets a topic for the previous command. Can be stacked multiple times.
+ &announceEvent - the first parameter sets the event name and the second parameter sets the time at which this event will happen. An hour before the event starts, the bot will send reminders every 20 minutes. Can be stacked multiple times.

## FAQ
+ **Q: Bot won't send messages to the greeter channel! What's wrong?** **A:** Make sure that all cells in the spreadsheet are formatted as 'text', otherwise there may be some rounding around which will cause the channel ID set on &setGreetChannel to change.
