const container = document.getElementById("table-container");

const table = document.createElement("table");

// Створюємо заголовок таблиці
const headerRow = document.createElement("tr");
const emptyCell = document.createElement("th");
headerRow.appendChild(emptyCell);

for (let i = 1; i <= 10; i++) {
  const th = document.createElement("th");
  th.textContent = i;
  headerRow.appendChild(th);
}
table.appendChild(headerRow);


for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");

  
  const th = document.createElement("th");
  th.textContent = i;
  row.appendChild(th);

 
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    td.textContent = i * j;
    row.appendChild(td);
  }

  table.appendChild(row);
}

container.appendChild(table);
