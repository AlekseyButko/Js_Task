let savedLink = '';

document.getElementById('setLinkBtn').addEventListener('click', () => {
  const input = prompt('Введіть посилання (включно з http:// або https://):');
  if (input && input.startsWith('http')) {
    savedLink = input;
    alert(`Посилання збережено: ${savedLink}`);
  } else {
    alert('Некоректне посилання.');
  }
});

document.getElementById('goToLinkBtn').addEventListener('click', () => {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert('Спочатку введіть посилання.');
  }
});
