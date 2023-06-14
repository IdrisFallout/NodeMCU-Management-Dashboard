const ServerURL = "http://192.168.43.239";
const toggleButton = document.getElementById("toggleButton");
const toggleText = document.getElementById("toggleText");
let switchOn = false;

const onUrl = new URL("/1", ServerURL);
const offUrl = new URL("/0", ServerURL);

function updateSwitch(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });
}

toggleButton.addEventListener("click", function () {
  switchOn = !switchOn;
  toggleButton.classList.toggle("on", switchOn);
  toggleText.textContent = switchOn ? "On" : "Off";

  if (switchOn) {
    updateSwitch(onUrl);
  } else {
    updateSwitch(offUrl);
  }
});