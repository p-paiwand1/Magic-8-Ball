// Magic 8 Ball

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random response
  let input123 = document.getElementById("123").value.toLowerCase();
  if (input123 === "does a magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (input123 === "is javascript awesome?") {
    document.getElementById("output").innerHTML = "Of Course!";
  } else if (input123 === "") {
    document.getElementById("output").innerHTML = "Please Ask a Question?";
  } else {
    randRes = Math.random();
    console.log(randRes);
    if (randRes < 0.2) {
      document.getElementById("output").innerHTML = "Without a Doubt.";
    } else if (randRes < 0.4) {
      document.getElementById("output").innerHTML = "As I see it, yes.";
    } else if (randRes < 0.6) {
      document.getElementById("output").innerHTML = "Conterate and ask again";
    } else if (randRes < 0.8) {
      document.getElementById("output").innerHTML = "Don't count on it.";
    } else {
      document.getElementById("output").innerHTML = "Outlook not so good.";
    }
  }
}
