const fs = require('fs');
const path = require('path');

const productsFile = 'products.json';
const backupFile = 'backup_products.json'

// Step 1: Read existing products
function readProductsSync() {
    try {
        const data = fs.readFileSync(productsFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file synchronously:', error);
        return [];
    }
}

function readProductsAsync() {
    fs.readFile(productsFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file asynchronously:', err);
            return;
        }
        console.log('Asynchronous Read:', JSON.parse(data));
    });
}

// Step 2: Add 10 new products
function addNewProducts() {
    let products = readProductsSync();
    for (let i = 1; i <= 10; i++) {
        products.push({ id: products.length + 1, name: `Product ${products.length + 1}`, price: Math.random() * 100 });
    }
    
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2), 'utf8');
    console.log('10 new products added successfully!');
}

// Step 3: Create a backup file with read-only permissions
function createBackup() {
    fs.copyFileSync(productsFile, backupFile);
    fs.chmodSync(backupFile, 0o444); // Read-only permission
    console.log('Backup created with read-only permissions.');
}

// Run the steps in order
addNewProducts();
createBackup();

// Step 4: Read data in synchronous & asynchronous ways
console.log('Synchronous Read:', readProductsSync());
readProductsAsync();
