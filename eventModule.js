var moment = require("moment");
var sentEventsArray = [];
var sentRemindersArray = [];

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
                    this.sendReminders(event, event.reminders, eventChannel, now)
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

    sendReminders: function (event, reminders, eventChannel, now) {

         for (var r = 0; r < reminders.length; r++) {
            var reminder = moment(reminders[r], 'HH:mm') ;

            if (now.hours() == reminder.hours()) {

                if (now.minutes() == reminder.minutes()) {

                    var sent = false;

                    sentRemindersArray.forEach(function(rem) {

                        if (rem.hours() == reminder.hours() && rem.minutes() == reminder.minutes()) {
                            sent = true;
                        }
                    });

                    if (!sent) {
                        event.atEveryone.toLowerCase() == 'true' ? 
                                eventChannel.sendMessage('@everyone: Event Reminder - ' + event.name + ' starting at ' + event.start + ' - Estimated duration: 3 hours.')           
                                : eventChannel.sendMessage('Event Reminder - ' + event.name + ' starting at ' + event.start + ' - Estimated duration: 3 hours.');   

                        sentRemindersArray.push(reminder);
                    }

                }
            }

        }

    }

}

