const API_KEY = "PASTE_OPENAI_KEY_HERE";

async function sendMessage() {
const input = document.getElementById("user-input");
const text = input.value.trim();
if (!text) return;

addMessage(text, "user");
input.value = "";

addMessage("Thinking...", "ai");

const response = await fetch("https://api.openai.com/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${API_KEY}`
},
body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{ role: "system", content: "You are ArthaAI, a finance assistant for Indian founders." },
{ role: "user", content: text }
]
})
});

const data = await response.json();

document.querySelectorAll(".ai").forEach(m => {
if (m.innerText === "Thinking...") m.remove();
});

addMessage(data.choices[0].message.content, "ai");
}

function addMessage(text, sender) {
const box = document.getElementById("chat-box");
const msg = document.createElement("div");
msg.className = `message ${sender}`;
msg.innerText = text;
box.appendChild(msg);
box.scrollTop = box.scrollHeight;
}
