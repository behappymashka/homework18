'use strict';

const createTable = document.getElementById('createTable');
const tableContainer = document.getElementById('tableContainer');
const deleteTable = document.getElementById('deleteTable');

createTable.addEventListener('click', () => {
    const table = document.createElement('table');

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0, count = i * 10 + 1; j < 10; j++, count++) {
            const column = document.createElement('td');
            column.textContent = count;
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    deleteTable.addEventListener('click', () => {
            tableContainer.removeChild(table);
        }
    )
    tableContainer.appendChild(table);
});


