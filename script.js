let audioPlayer = document.getElementById("audio_player");
let podcast = document.getElementById("podcast");
let audio = audioPlayer.src;
let test1 = "http://localhost/img/play_button.svg";

audioPlayer.addEventListener("click", () => {
  let gauge_if_playing = (audioPlayer.src == test1) ? true : false;
  console.log(gauge_if_playing);
  if(gauge_if_playing) {
  audioPlayer.src = "http://localhost/img/stop_button.svg";
  podcast.pause();
  } else {
  audioPlayer.src = "http://localhost/img/play_button.svg";
  podcast.play();
  }
});