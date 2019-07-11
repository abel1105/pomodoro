let audio = new Audio();

export const playAudio = name => {
  audio.src = `/ringtones/${name}.mp3`;
  audio.play();
};
