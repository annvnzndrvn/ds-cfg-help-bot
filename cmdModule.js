

module.exports = {

    parseCommand: function (input, commandsList) {

        for (var cmd = 0; cmd < commandsList.length; cmd++) {

            if (input == commandsList[cmd].trigger) {
                return commandsList[cmd];
            }     
        }

        return null;
    },

    warnAdmin: function (admin, cmd, msg) {
        admin.sendMessage(cmd.warnHostMessage +                                 
                                    ' - triggered by: ' + msg.author.username);
    }
}



