document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var registrationForm = document.getElementById('registration-form');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Speed Dating Night',
                start: '2024-07-20T19:00:00',
                end: '2024-07-20T21:00:00',
                description: 'Join us for a fun evening!'
            },
            {
                title: 'Speed Dating Afternoon',
                start: '2024-07-27T14:00:00',
                end: '2024-07-27T16:00:00',
                description: 'An afternoon of great connections!'
            }
        ],
        eventClick: function(info) {
            alert('Event: ' + info.event.title + '\n' + 'Description: ' + info.event.extendedProps.description);
            registrationForm.style.display = 'block';
            document.getElementById('event').value = info.event.title;
        }
    });
    calendar.render();
});