let audioPlayer = document.getElementById("audio_player");
let podcast = document.getElementById("podcast");

audioPlayer.addEventListener("click", () => {
  let gauge_if_playing = (audioPlayer.src == "http://ihya502.surge.sh/img/play_button.svg") ? true : false;
  console.log(gauge_if_playing);
  if(gauge_if_playing) {
  audioPlayer.src = "http://ihya502.surge.sh/img/stop_button.svg";
  podcast.play();
  } else {
  audioPlayer.src = "http://ihya502.surge.sh/img/play_button.svg";
  podcast.pause();
  }
});