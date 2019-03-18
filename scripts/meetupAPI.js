function fillMeetupFields (events) {

    let element = document.getElementById('meetup');
    let html = "<h3 class=\"title\"></h3><p class=\"topic\"></p><div><b>Venue:</b><span class=\"venue\"></span></div><div><b>Date:</b><span class=\"date\"></span></div></a>";

    for(i=0; i < events.length; i++){
        let meetupInfo = document.createElement('a');
        meetupInfo.className = 'meetupInfo';
        meetupInfo.innerHTML = html;

        title           = meetupInfo.getElementsByClassName('title')[0];
        venue           = meetupInfo.getElementsByClassName('venue')[0];
        date            = meetupInfo.getElementsByClassName('date')[0];


        title.innerHTML = events[i].name;
        venue.innerHTML = events[i].venue.name + " \n" + events[i].venue.address_1 + "\n" + events[i].venue.city;
        date.innerHTML  = events[i].local_date + "\n" + events[i].local_time;
        meetupInfo.href = events[i].link;
        element.appendChild(meetupInfo);
    }

}

$.ajax({
    url: "https://api.meetup.com/opensourcediversity/events?&sign=true&photo-host=public&page=1",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "json"
    },
    success: function(response) {
        let events = response.data;
        fillMeetupFields(events);
    }
});