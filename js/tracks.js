let tracks = [{
        "id": 1000,
        "title": "Blitzkrieg Bop",
        "duration": "2:12"
    },
    {
        "id": 1001,
        "title": "Beat on the Brat",
        "duration": "2:30"
    },
    {
        "id": 1002,
        "title": "Judy Is a Punk",
        "duration": "1:30"
    },
    {
        "id": 1003,
        "title": "I Wanna Be Your Boyfriend",
        "duration": "2:24"
    },
    {
        "id": 1004,
        "title": "Chain Saw",
        "duration": "1:55"
    },
    {
        "id": 1005,
        "title": "Now I Wanna Sniff Some Glue",
        "duration": "1:34"
    },
    {
        "id": 1006,
        "title": "I Don't Wanna Go Down to the Basement",
        "duration": "2:35"
    },
    {
        "id": 1007,
        "title": "Loudmouth",
        "duration": "2:14"
    },
    {
        "id": 1008,
        "title": "Havana Affair",
        "duration": "2:00"
    },
    {
        "id": 1009,
        "title": "Listen to My Heart",
        "duration": "1:56"
    },
    {
        "id": 1010,
        "title": "53rd & 3rd",
        "duration": "2:19"
    },
    {
        "id": 1011,
        "title": "Let's Dance",
        "duration": "1:51"
    },
    {
        "id": 1012,
        "title": "I Don't Wanna Walk Around with You",
        "duration": "1:43"
    },
    {
        "id": 1013,
        "title": "Today Your Love, Tomorrow the World",
        "duration": "2:09"
    }
];

const cont = document.getElementById("track-container");

tracks.forEach(track => {
    cont.innerHTML += `
    <div class="track">
                    <div class="cont">
                        
                    </div>

                    <div class="cont">
                        <i state="0" source="../music/hillsong/Hillsong United - 01 Here Now (Madness).mp3" id="set-to-play" class="set-to-play far fa-play"></i>
                        <div class="r">
                            <span class="name">${track.title}</span>
                            <span class="title">Appollo cante</span>
                        </div>
                        <span class="duration">${track.duration}</span>
                    </div>

                </div>`;
});