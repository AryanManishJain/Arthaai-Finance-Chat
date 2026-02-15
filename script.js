async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const userText = input.value;
  if (!userText) return;
  chatBox.innerHTML += `<div class="message">You: ${userText}</div>`;
  input.value = "";
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: "You are ArthaAI, a finance assistant for Indian founders." },
          { role: "user", content: userText }
        ]
      })
    });
    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    chatBox.innerHTML += `<div class="message">ArthaAI: ${aiReply}</div>`;
  } catch (err) {
    chatBox.innerHTML += `<div class="message">Error connecting to AI</div>`;
  }
}
