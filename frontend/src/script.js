// Update class selection display
document.getElementById("classSelect").addEventListener("change", function () {
  const selected = this.value;
  document.getElementById("selectedClass").innerText = `Class ${selected}`;
});

// Chatbot interaction
function sendMessage() {
  const inputField = document.getElementById("userInput");
  const message = inputField.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chatMessages");

  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot";
  botMsg.textContent = "This is a demo response. I'm still learning 🤖";
  chatBox.appendChild(botMsg);

  inputField.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
