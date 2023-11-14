const sliding = () => {
  length = document.querySelector("#length").value;
  document.querySelector("#pwlength").innerText = length;
  pressed();
}

const pressed = () => {
  let randomPassword = '';
  let chars = "";

  let length = null;
  let caps = null;
  let special = null;
  let numbers = null;
  let lowercase = null;

  length = document.querySelector("#length").value;
  caps = document.querySelector("#caps").checked;
  special = document.querySelector("#special").checked;
  numbers = document.querySelector("#numbers").checked;
  lowercase = document.querySelector("#lowercase").checked;

  if (lowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (caps) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (numbers) {
    chars += "0123456789"
  }

  if (special) {
    chars += "!@#$%^&*()"
  }

  if (!chars) {
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  }

  let charactersLength = chars.length;
  for (let i = 0; i < length; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * charactersLength));

  }
  document.querySelector("#password").value = randomPassword;
  navigator.clipboard.writeText(randomPassword);
  return randomPassword;
}



const lowercaseCheckbox = document.getElementById("lowercase").addEventListener("input", pressed);

const capsCheckbox = document.getElementById("caps").addEventListener("input", pressed);

const numbersCheckbox = document.getElementById("numbers").addEventListener("input", pressed);

const specialCheckbox = document.getElementById("special").addEventListener("input", pressed);

const slider = document.getElementById("length").addEventListener("input", pressed);

const startButton = document.getElementById('button-generate-password').addEventListener('click', pressed);


window.addEventListener("load", () => {
  pressed();
});