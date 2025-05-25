document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("button-container");

  container.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const buttonText = event.target.textContent;
      alert(`Клікнуто на кнопці: ${buttonText}`);
    }
  });
});
