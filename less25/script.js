const emojis = ["😄", "😎", "😡", "😭", "😍"];
let votes = JSON.parse(localStorage.getItem("emojiVotes")) || {};

emojis.forEach(emoji => {
  if (!votes[emoji]) votes[emoji] = 0;
});

const container = document.getElementById("emoji-container");
const resultDiv = document.getElementById("result");

// Вивід смайлів
function renderEmojis() {
  container.innerHTML = "";
  emojis.forEach(emoji => {
    const div = document.createElement("div");
    div.className = "emoji";
    div.innerHTML = `${emoji}<div class="vote-count">${votes[emoji]} голосів</div>`;

    div.addEventListener("click", () => {
      votes[emoji]++;
      saveVotes();
      renderEmojis();
    });

    container.appendChild(div);
  });
}

// Зберегти у localStorage
function saveVotes() {
  localStorage.setItem("emojiVotes", JSON.stringify(votes));
}

// Показати результат
document.getElementById("showResults").addEventListener("click", () => {
  const maxVotes = Math.max(...Object.values(votes));
  const winners = Object.entries(votes)
    .filter(([_, count]) => count === maxVotes)
    .map(([emoji]) => emoji);

  if (maxVotes === 0) {
    resultDiv.textContent = "Ще немає голосів.";
  } else {
    resultDiv.textContent = `Переможець: ${winners.join(" ")}`;
  }
});

// Скидання
document.getElementById("resetVotes").addEventListener("click", () => {
  emojis.forEach(e => votes[e] = 0);
  saveVotes();
  renderEmojis();
  resultDiv.textContent = "";
});

// Початковий рендер
renderEmojis();
