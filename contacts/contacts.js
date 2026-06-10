// Populate contacts table
function populateContactsTable() {
    const tbody = document.getElementById('contactsTableBody');
    tbody.innerHTML = contactsData.map(contact => `
        <tr>
            <td>
                <div class="contact-profile">
                    <img src="${contact.image}" alt="Contact Avatar">
                    <div class="contact-info">
                        <div class="contact-name">${contact.name}</div>
                        <div class="contact-company">${contact.company}</div>
                    </div>
                </div>
            </td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td><strong>${contact.dealValue}</strong></td>
            <td><span class="status-badge ${contact.status.toLowerCase()}">${contact.status}</span></td>
            <td class="actions-cell" style="text-align: right;">
                <button title="Edit"><i class="fa-solid fa-pen"></i></button>
                <button title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// Initialize table when DOM is ready
document.addEventListener('DOMContentLoaded', populateContactsTable);