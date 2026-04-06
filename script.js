const msg = document.getElementById("messages"),
      input = document.getElementById("input"),
      mode = document.getElementById("mode"),
      form = document.getElementById("chat-form");
form.addEventListener("submit", sendMsg);
function addMsg(text, role) {
  const el = document.createElement("article");
  el.className = "message " + role;
  el.textContent = text;
  msg.appendChild(el);
  msg.scrollTop = msg.scrollHeight;
  return el;
}
async function sendMsg(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMsg(text, "user");
  input.value = "";
  const botMsg = addMsg("Thinking...", "bot");
  try {
    const res = await fetch("/api/chat.php", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ message: text, mode: mode?.value || "general" })
    });
    const data = await res.json();
    botMsg.textContent = data.reply;
  } catch {
    botMsg.textContent = "Error. Try again.";
  }
}
