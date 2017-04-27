

module.exports = {

    parseCommand: function (input, commandsList) {

        for (var cmd = 0; cmd < commandsList.length; cmd++) {

            if (input == commandsList[cmd].trigger) {
                return commandsList[cmd];
            }     
        }

        return null;
    },

    warnAdminAboutAbuse: function (admin, msg) {
        admin.sendMessage('User ' 
                                + msg.author.username + 
                                    " claims there's been digital abuse around the guild. Investigate the matter and apprehend the culprit(s)! (if there's any, that is)");
    }
}



