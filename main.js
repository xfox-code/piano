const audioCtx = new window.AudioContext();
const gainNode = audioCtx.createGain();
gainNode.connect(audioCtx.destination);
let osc = null;

const playNote = (value) => {
  osc = audioCtx.createOscillator();
  osc.type = "triangle";
  osc.frequency.value = value;
  osc.connect(gainNode);
  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.3);
};

document.addEventListener("keydown", (e) => {
  console.log(e.key.toUpperCase());
  let key = e.key.toUpperCase();
  switch (key) {
    case "1":
      playNote(261.63);
      break;
    case "2":
      playNote(277.18);
      break;
    case "3":
      playNote(293.66);
      break;
    case "4":
      playNote(311.13);
      break;
    case "5":
      playNote(329.63);
      break;
    case "6":
      playNote(349.23);
      break;
    case "7":
      playNote(369.99);
      break;
    case "8":
      playNote(392.0);
      break;
    case "9":
      playNote(415.3);
      break;
    case "Q":
      playNote(440.0);
      break;
    case "W":
      playNote(466.16);
      break;
    case "E":
      playNote(493.88);
      break;
    case "R":
      playNote(523.25);
      break;
    case "T":
      playNote(554.37);
      break;
    case "Y":
      playNote(587.33);
      break;
    case "U":
      playNote(622.25);
      break;
    case "I":
      playNote(659.25);
      break;
    case "O":
      playNote(698.46);
      break;
    case "P":
      playNote(739.99);
      break;
    case "A":
      playNote(783.99);
      break;
    case "S":
      playNote(830.61);
      break;
    case "D":
      playNote(880.0);
      break;
    case "F":
      playNote(932.33);
      break;
    case "G":
      playNote(987.77);
      break;
    case "H":
      playNote(1046.5);
      break;
    case "J":
      playNote(1108.73);
      break;
    case "K":
      playNote(1174.66);
      break;
    case "L":
      playNote(1244.51);
      break;
    case "Z":
      playNote(1318.51);
      break;
    default:
      break;
  }
});
