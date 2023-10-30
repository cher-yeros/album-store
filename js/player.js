const play = document.getElementById("play");
const pause = document.getElementById("pause");
// const progressBar = document.getElementById("progress-bar");
// const bar = document.getElementById("bar");
// const volumeBar = document.getElementById("volume-bar");
// const mute = document.getElementById("mute");
const player = document.getElementById("audio-player");
const plys = document.querySelectorAll(".set-to-play");

startPlay();
$(document).ready(function() {
    $(".set-to-play").click(function() {
        plys.forEach(pl => {
            pl.classList.remove("fa-pause");
            pl.classList.add("fa-play")
        });

        if ($(this).attr('state') == '0') {
            player.src = $(this).attr('source');
            player.play();
            $(this).removeClass("fa-play");
            $(this).addClass("fa-pause");
            play.classList.remove("fa-play-circle");
            play.classList.add("fa-pause");
            $(this).attr('state', '1');
        } else {
            player.pause()
            $(this).removeClass("fa-pause");
            $(this).addClass("fa-play");
            play.classList.remove("fa-pause");
            play.classList.add("fa-play-circle");
            $(this).attr('state', '0');
        }

    });

    // console.log(player.src);
});

function startPlay() {
    // player.src = $(this).attr('source');

}