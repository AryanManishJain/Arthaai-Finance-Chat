:root {
  color-scheme: dark;
}
 {
  box-sizing: border-box;
}
body {
  margin: 0;
min-height: 100vh;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: #050c1a;
  color: #e5e7eb;
}
.screen {
  min-height: 100vh;
  padding: 8px 10px;
}
.chat-panel {
  min-height: calc(100vh - 16px);
  border: 1px solid #27364d;
  background: linear-gradient(90deg, #07122a 0%, #061126 100%);
}
.messages {
  height: 56px;
  overflow-y: auto;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}
.message {
  padding: 8px 10px;
  font-size: 20px;
  line-height: 1.15;
}
.bot {
  color: #e5e7eb;
}
.intro {
  font-size: 46px;
  line-height: 1.1;
}
.user {
  color: #dbeafe;
}
.composer {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 10px 0;
}
input,
button {
  border-radius: 20px;
  border: 2px solid #334b6b;
  background: #1a2740;
  color: #f8fafc;
  font-size: 18px;
}
input {
width: 100%;
  padding: 22px 24px;
}
input::placeholder {
  color: #7e8795;
}
button {
width: 140px;
  padding: 18px 18px;
  font-size: 42px;
  line-height: 1;
  cursor: pointer;
}
button:hover {
background: #243452;
}
@media (max-width: 1024px) {
  .intro {
    font-size: 26px;
  }
  button {
    font-size: 34px;
  }
}
@media (max-width: 720px) {
  .screen {
    padding: 6px;
  }
  .messages {
    height: auto;
    min-height: 52px;
  }
  .message {
    font-size: 18px;
  }
  .intro {
    font-size: 20px;
  }
  button {
    width: 120px;
    font-size: 32px;
    padding: 14px;
  }
}
