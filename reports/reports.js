// Populate Analytics Metrics
function populateAnalyticsMetrics() {
    const container = document.getElementById('analyticsMetricsContainer');
    container.innerHTML = analyticsMetricsData.map(metric => {
        const trendClass = metric.trendType === 'up' ? 'trend-up' : 'trend-down';
        const trendIcon = metric.trendType === 'up' ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down';
        return `
            <div class="metric-card ${metric.type === 'default' ? '' : metric.type}">
                <div class="metric-header">
                    <span>${metric.label}</span>
                    <div class="metric-icon-box"><i class="fa-solid ${metric.icon}"></i></div>
                </div>
                <div class="metric-value">${metric.value}</div>
                <div class="metric-trend ${trendClass}">
                    <i class="fa-solid ${trendIcon}"></i> <span>${metric.trend}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Populate Monthly Performance Chart
function populateMonthlyPerformance() {
    const container = document.getElementById('monthlyPerformanceChart');
    container.innerHTML = monthlyPerformanceData.map(data => `
        <div class="bar-wrapper"><div class="bar-growth" style="height: ${data.percentage}%;"></div><div class="bar-label">${data.month}</div></div>
    `).join('');
}

// Populate Acquisition Legend
function populateAcquisitionLegend() {
    const container = document.getElementById('acquisitionLegend');
    container.innerHTML = acquisitionSplitData.map(item => `
        <div class="legend-item"><span class="dot" style="background-color: ${item.color};"></span> ${item.label}</div>
    `).join('');
}

// Populate Top Products Table
function populateTopProducts() {
    const tbody = document.getElementById('topProductsTableBody');
    tbody.innerHTML = topProductSalesData.map(product => {
        let barColor = 'var(--accent-color)';
        if (product.percentage <= 50) {
            barColor = 'var(--warning)';
        }
        return `
            <tr>
                <td><strong>${product.productName}</strong></td>
                <td>${product.units}</td>
                <td>${product.revenue}</td>
                <td>
                    <div class="badge-progress-container">
                        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${product.percentage}%; background-color: ${barColor};"></div></div>
                        <span>${product.percentage}%</span>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Initialize reports page
document.addEventListener('DOMContentLoaded', () => {
    populateAnalyticsMetrics();
    populateMonthlyPerformance();
    populateAcquisitionLegend();
    populateTopProducts();
});