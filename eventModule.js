var moment = require("moment");
var sentEventsArray = [];

module.exports = {

    checkDeadline: function (events, eventChannel) {

        for (var e = 0; e < events.length; e++) {
            var event = events[e];

            var eventStart = moment(event.start, 'YYYY-MM-DD HH:mm:ss');
            var now = moment();

            if (eventStart.year() == now.year() && 
                eventStart.month() == now.month() &&
                eventStart.date() == now.date()) {
                if (eventStart.hours() == now.hours() &&
                    eventStart.minutes() == now.minutes()) {                    
                        this.sendAnnouncement(event, eventChannel);
                }
                else { // send reminders
                    
                }
            }
        }
    },

    sendAnnouncement: function (event, eventChannel) {

        var sent = false;

        sentEventsArray.forEach(function(e) {
            if (e == event.name) {
                sent = true;
            }
        });

        if (!sent) {
            event.atEveryone.toLowerCase() == 'true' ? 
                    eventChannel.sendMessage('@everyone: Event - ' + event.name + ' starting! ' + event.announcement)             
                    : eventChannel.sendMessage('Event - ' + event.name + ' starting! ' + event.announcement);

            var sent = event.name;
            sentEventsArray.push(sent);
        }       
    },

    sendReminder: function (event, eventChannel) {
        // TODO
    }

}

