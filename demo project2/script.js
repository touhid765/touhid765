// Sample data for demonstration
let inventory = [
    { id: 1, name: "Paracetamol", quantity: 100, price: 5 },
    { id: 2, name: "Ibuprofen", quantity: 50, price: 10 },
    { id: 3, name: "Aspirin", quantity: 200, price: 3 }
];

let sales = [
    { id: 1, item: "Paracetamol", quantity: 10, total: 50 },
    { id: 2, item: "Ibuprofen", quantity: 5, total: 50 }
];

let customers = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 2, name: "Jane Smi", age: 25, email: "je@example.com" }
];

document.addEventListener("DOMContentLoaded", function() {
    renderInventory();
    renderSales();
    renderCustomers();
});

function renderInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    inventory.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <p>Name: ${item.name}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${item.price}</p>
        `;
        inventoryList.appendChild(div);
    });
}

function renderSales() {
    const salesList = document.getElementById('sales-list');
    salesList.innerHTML = '';
    sales.forEach(sale => {
        const div = document.createElement('div');
        div.className = 'sale';
        div.innerHTML = `
            <p>Item: ${sale.item}</p>
            <p>Quantity: ${sale.quantity}</p>
            <p>Total: $${sale.total}</p>
        `;
        salesList.appendChild(div);
    });
}

function renderCustomers() {
    const customerList = document.getElementById('customer-list');
    customerList.innerHTML = '';
    customers.forEach(customer => {
        const div = document.createElement('div');
        div.className = 'customer';
        div.innerHTML = `
            <p>Name: ${customer.name}</p>
            <p>Age: ${customer.age}</p>
            <p>Email: ${customer.email}</p>
        `;
        customerList.appendChild(div);
    });
}

function addInventoryItem() {
    const newItem = { id: inventory.length + 1, name: "New Item", quantity: 100, price: 5 };
    inventory.push(newItem);
    renderInventory();
}

function addSale() {
    const newSale = { id: sales.length + 1, item: "New Sale", quantity: 10, total: 50 };
    sales.push(newSale);
    renderSales();
}

function addCustomer() {
    const newCustomer = { id: customers.length + 1, name: "New Customer", age: 40, email: "new@example.com" };
    customers.push(newCustomer);
    renderCustomers();
}

function generateReports() {
    const reportsList = document.getElementById('reports-list');
    reportsList.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'report';
    div.innerHTML = `
        <p>Inventory Count: ${inventory.length}</p>
        <p>Sales Count: ${sales.length}</p>
        <p>Customer Count: ${customers.length}</p>
    `;
    reportsList.appendChild(div);
}
