let audioPlayer = document.getElementById("audio_player");
let podcast = document.getElementById("podcast");
let audio = audioPlayer.src;
let test1 = "http://localhost/img/play_button.svg";
console.log(audio);

audioPlayer.addEventListener("click", () => {
  let gauge_if_playing = (audioPlayer.src == test1) ? true : false;
  if(gauge_if_playing) {
  audioPlayer.src = "http://localhost/img/stop_button.svg";
  podcast.pause();
  } else {
  audioPlayer.src = "http://localhost/img/play_button.svg";
  podcast.play();
  }
});