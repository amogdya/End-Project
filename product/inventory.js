// Populate inventory table
function populateInventoryTable() {
    const tbody = document.getElementById('inventoryTableBody');
    tbody.innerHTML = inventoryData.map(product => {
        const stockClass = product.stockStatus === 'Low Stock' ? 'low-stock' : 
                          product.stockStatus === 'Out of Stock' ? 'out-of-stock' : 'healthy';
        const stockLabel = product.stockStatus === 'Low Stock' ? `${product.stock} Low Stock` :
                          product.stockStatus === 'Out of Stock' ? `${product.stock} Out of Stock` : `${product.stock} in stock`;
        return `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" class="product-thumb"></td>
                <td><strong>${product.sku}</strong></td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td><span class="badge ${stockClass}">${stockLabel}</span></td>
                <td><span class="badge active">${product.status}</span></td>
                <td style="text-align: right; font-size: 1.1rem; color: var(--text-muted);">
                    <i class="fa-solid fa-pen" style="margin: 0 5px; cursor:pointer;" title="Edit"></i>
                    <i class="fa-solid fa-boxes-packing" style="margin: 0 5px; cursor:pointer;" title="Adjust Stock"></i>
                    <i class="fa-solid fa-trash" style="margin: 0 5px; cursor:pointer; color: var(--danger);" title="Delete"></i>
                </td>
            </tr>
        `;
    }).join('');
}

// Initialize table when DOM is ready
document.addEventListener('DOMContentLoaded', populateInventoryTable);