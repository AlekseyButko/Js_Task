function createMultiplicationTable() {
    let table = document.createElement("table"); 
    table.style.borderCollapse = "collapse"; 
    table.style.textAlign = "center";

    for (let i = 0; i <= 10; i++) {
        let row = document.createElement("tr"); 

        for (let j = 0; j <= 10; j++) {
            let cell = document.createElement(i === 0 || j === 0 ? "th" : "td"); 
            cell.style.border = "1px solid black"; 
            cell.style.padding = "5px"; 
            if (i === 0 && j === 0) {
                cell.textContent = "×"; 
            } else if (i === 0) {
                cell.textContent = j; 
            } else if (j === 0) {
                cell.textContent = i; 
            } else {
                cell.textContent = i * j; 
            }

            row.appendChild(cell); 
        }

        table.appendChild(row); 
    }

    document.body.appendChild(table); 

createMultiplicationTable();
