

module.exports = {

    parseCommand: function (input, commandsList) {

        for (var cmd = 0; cmd < commandsList.length; cmd++) {

            if (input == commandsList[cmd].trigger) {
                return commandsList[cmd];
            }     
        }

        return null;
    } 
}



