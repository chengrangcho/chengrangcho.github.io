
var sentence = document.getElementById("intro");

function Function() {
    if (sentence.innerHTML === "Hi my name is Chengrang Cho, I am a senior") {
        sentence.innerHTML = "student at UC Berkeley, my biggest hobby is go out";
    } else if (sentence.innerHTML === "student at UC Berkeley, my biggest hobby is go out") {
        sentence.innerHTML = "and shoot some photos, Here are few photos I took over";
    } else if (sentence.innerHTML === "and shoot some photos, Here are few photos I took over") {
        sentence.innerHTML = "The past year, enjoy!";
    } else {
        sentence.innerHTML = "Hi my name is Chengrang Cho, I am a senior";
    }
  }