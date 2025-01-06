const data = [
    { id: 1, name: 'Amina Salčinović', age: 19},
    { id: 2, name: 'Nedžma Meša', age: 19 },
    { id: 3, name: 'Ajla Klisura', age: 19},
    { id: 3, name: 'Dženita Klisura', age: 19},
    { id: 3, name: 'Nedžma Mušanović', age: 19}

];

function renderTable() {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; 

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>
                <button onclick="editItem(${item.id})">Edit</button>
                <button onclick="deleteItem(${item.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editItem(id) {
    const item = data.find(d => d.id === id);
    if (item) {
        const newName = prompt('Enter new name:', item.name);
        const newAge = prompt('Enter new age:', item.age);

      
        if (newName && newAge) {
            item.name = newName;
            item.age = newAge;
            document.getElementById('message').textContent = 'Edit successful!';
        }

        renderTable(); 
    }
}

// delete options
function deleteItem(id) {
    const index = data.findIndex(d => d.id === id);
    if (index !== -1) {
        if (confirm('Are you sure you want to delete this item?')) {
            data.splice(index, 1); 
            document.getElementById('message').textContent = 'Delete successful!';
            renderTable(); // update table 
        }
    }
}
renderTable();