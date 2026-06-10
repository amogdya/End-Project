// Populate Sales KPIs
function populateSalesKPIs() {
    const container = document.getElementById('salesKPIContainer');
    container.innerHTML = salesKPIData.map(kpi => `
        <div class="kpi-card ${kpi.type === 'default' ? '' : kpi.type}">
            <div class="kpi-details">
                <p>${kpi.label}</p>
                <h3>${kpi.value}</h3>
            </div>
            <i class="fa-solid ${kpi.icon} kpi-icon"></i>
        </div>
    `).join('');
}

// Populate Sales Orders Table
function populateSalesOrders() {
    const tbody = document.getElementById('salesOrdersTableBody');
    tbody.innerHTML = salesOrdersData.map(order => {
        const deliveredStyle = order.fulfillmentStatus === 'Delivered' ? ' style="background:#e2f9f0; color:var(--success);"' : '';
        return `
            <tr>
                <td><strong>${order.orderId}</strong></td>
                <td>${order.date}</td>
                <td>${order.customerName}</td>
                <td>${order.totalAmount}</td>
                <td><span class="badge ${order.paymentStatus.toLowerCase()}">${order.paymentStatus}</span></td>
                <td><span class="badge ${order.fulfillmentStatus.toLowerCase()}"${deliveredStyle}>${order.fulfillmentStatus}</span></td>
                <td>${order.salesRep}</td>
                <td style="text-align: right; font-size: 1.1rem; color: var(--text-muted);">
                    <i class="fa-regular fa-eye" style="margin: 0 5px; cursor:pointer;" title="View"></i>
                    <i class="fa-solid fa-pen" style="margin: 0 5px; cursor:pointer;" title="Edit"></i>
                    <i class="fa-solid fa-print" style="margin: 0 5px; cursor:pointer;" title="Quick Print"></i>
                </td>
            </tr>
        `;
    }).join('');
}

// Initialize sales page
document.addEventListener('DOMContentLoaded', () => {
    populateSalesKPIs();
    populateSalesOrders();
});