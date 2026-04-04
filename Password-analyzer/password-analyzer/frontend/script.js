async function check() {
  const password = document.getElementById("password").value;

  // This connects to the backend server we will start soon
  const res = await fetch("http://localhost:5000/check-password", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ password })
  });

  const data = await res.json();

  document.getElementById("strength").innerText = "Strength: " + data.strength;

  let bar = document.getElementById("bar");

  // Visual feedback based on what the backend says
  if (data.strength === "Weak" || data.strength === "Very Weak") {
    bar.style.width = "30%";
    bar.style.background = "#ff4d4d";
  } else if (data.strength === "Medium") {
    bar.style.width = "60%";
    bar.style.background = "#ffa500";
  } else {
    bar.style.width = "100%";
    bar.style.background = "#2ecc71";
  }

  let list = document.getElementById("suggestions");
  list.innerHTML = "";

  data.suggestions.forEach(s => {
    let li = document.createElement("li");
    li.innerText = "💡 " + s;
    list.appendChild(li);
  });
}