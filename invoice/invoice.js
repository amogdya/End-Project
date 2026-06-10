// Populate invoice table
function populateInvoiceTable() {
    const tbody = document.getElementById('invoiceTableBody');
    tbody.innerHTML = invoiceData.map(invoice => {
        const statusClass = invoice.status.toLowerCase();
        const actionButtons = invoice.status === 'Pending' ? `
            <button class="btn-icon" title="View Detail"><i class="fa-solid fa-eye"></i></button>
            <button class="btn-icon" title="Download PDF"><i class="fa-solid fa-download"></i></button>
            <button class="btn-icon" title="Send Reminder"><i class="fa-solid fa-paper-plane"></i></button>
        ` : `
            <button class="btn-icon" title="View Detail"><i class="fa-solid fa-eye"></i></button>
            <button class="btn-icon" title="Download PDF"><i class="fa-solid fa-download"></i></button>
            <button class="btn-icon" title="Ellipsis"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        `;
        return `
            <tr>
                <td><strong>${invoice.invoiceId}</strong></td>
                <td>${invoice.clientName}</td>
                <td>${invoice.issueDate}</td>
                <td>${invoice.dueDate}</td>
                <td>${invoice.amount}</td>
                <td><span class="status-badge ${statusClass}">${invoice.status}</span></td>
                <td>
                    <div class="action-actions" style="justify-content: flex-end;">
                        ${actionButtons}
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Initialize table when DOM is ready
document.addEventListener('DOMContentLoaded', populateInvoiceTable);