function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");
    if (!input.value.trim()) return;
    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = input.value;
    chat.appendChild(userMsg);
    // Fake bot reply (for now)
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "message bot";
        botMsg.textContent = "This is where ArthaAI will reply 🤖";
        chat.appendChild(botMsg);
        chat.scrollTop = chat.scrollHeight;
    }, 500);
    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}
