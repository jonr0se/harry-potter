function castSpell() {
  const wandSound = document.getElementById("wandSound");
  wandSound.currentTime = 0;
  wandSound.play();

  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }

  console.log("🪄 Lumos cast!");
}

function changeHouse() {
  const house = document.getElementById("houseSelect").value;
  document.body.className = house;
}
