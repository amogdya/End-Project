// Populate KPI Cards
function populateDashboardKPIs() {
    const container = document.getElementById('dashboardKPIContainer');
    container.innerHTML = dashboardKPIData.map(kpi => {
        const trendHtml = kpi.trend ? `<div class="kpi-subtext" style="color: var(--success);"><i class="fa-solid fa-arrow-trend-up"></i> ${kpi.trend}</div>` : '';
        const buttonHtml = kpi.button ? `<div style="margin-top: 10px;"><button class="btn-action">${kpi.button}</button></div>` : '';
        return `
            <div class="kpi-card ${kpi.type === 'default' ? '' : kpi.type}">
                <div class="kpi-details">
                    <p>${kpi.label}</p>
                    <h3>${kpi.value}</h3>
                    ${trendHtml}${buttonHtml}
                </div>
                <i class="fa-solid ${kpi.icon} kpi-icon"></i>
            </div>
        `;
    }).join('');
}

// Populate Revenue Overview
function populateRevenueOverview() {
    const container = document.getElementById('revenueOverviewContainer');
    container.innerHTML = revenueOverviewData.map(stat => `
        <div class="stat-row">
            <div class="stat-info">
                <span class="stat-label">${stat.label}</span>
                <span class="stat-value">${stat.value}</span>
            </div>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${stat.percentage}%; background-color: ${stat.color};"></div></div>
        </div>
    `).join('');
}

// Populate Conversion Metrics
function populateConversionMetrics() {
    const container = document.getElementById('conversionMetricsContainer');
    container.innerHTML = conversionMetricsData.map(metric => `
        <li>
            <div class="metric-icon" style="background-color: ${metric.bgColor}; color: ${metric.iconColor};">
                <i class="fa-solid ${metric.icon}"></i>
            </div>
            <div class="metric-text">
                <strong>${metric.value}</strong>
                <span>${metric.label}</span>
            </div>
        </li>
    `).join('');
}

// Populate Recent Orders
function populateRecentOrders() {
    const tbody = document.getElementById('recentOrdersTableBody');
    tbody.innerHTML = recentOrdersData.map(order => `
        <tr>
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.amount}</td>
            <td><span class="status-badge ${order.status.toLowerCase()}">${order.status}</span></td>
        </tr>
    `).join('');
}

// Populate Tasks
function populateTasks() {
    const container = document.getElementById('tasksContainer');
    container.innerHTML = tasksData.map(task => `
        <label class="task-item">
            <input type="checkbox" ${task.completed ? 'checked' : ''}> ${task.text}
        </label>
    `).join('');
}

// Initialize all dashboard elements
document.addEventListener('DOMContentLoaded', () => {
    populateDashboardKPIs();
    populateRevenueOverview();
    populateConversionMetrics();
    populateRecentOrders();
    populateTasks();
});