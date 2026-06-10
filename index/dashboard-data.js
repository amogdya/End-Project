// Dashboard KPI Cards Data
const dashboardKPIData = [
    {
        id: 1,
        label: "Total Revenue",
        value: "$124,500",
        trend: "+14.5% vs last month",
        icon: "fa-wallet",
        type: "default"
    },
    {
        id: 2,
        label: "New Customers",
        value: "842",
        trend: "+38 new this week",
        icon: "fa-users-rays",
        type: "success"
    },
    {
        id: 3,
        label: "Pending Orders",
        value: "16",
        button: "Review",
        icon: "fa-box-open",
        type: "warning"
    },
    {
        id: 4,
        label: "Low Stock Alerts",
        value: "5 Items",
        button: "View Inventory",
        icon: "fa-triangle-exclamation",
        type: "danger"
    }
];

// Revenue Overview Data
const revenueOverviewData = [
    {
        label: "Online Sales",
        value: "$75,000",
        percentage: 60,
        color: "var(--accent-color)"
    },
    {
        label: "Retail Stores",
        value: "$35,000",
        percentage: 28,
        color: "#2e59d9"
    },
    {
        label: "Partnerships",
        value: "$14,500",
        percentage: 12,
        color: "var(--success)"
    }
];

// New Customer Conversion Metrics
const conversionMetricsData = [
    {
        id: 1,
        icon: "fa-envelope-open-text",
        value: "1,200",
        label: "Initial Contacts",
        bgColor: "rgba(255, 77, 109, 0.1)",
        iconColor: "var(--accent-color)"
    },
    {
        id: 2,
        icon: "fa-user-check",
        value: "800",
        label: "New Customers",
        bgColor: "rgba(28, 200, 138, 0.1)",
        iconColor: "var(--success)"
    },
    {
        id: 3,
        icon: "fa-file-signature",
        value: "400",
        label: "Quotes Sent",
        bgColor: "rgba(246, 194, 62, 0.1)",
        iconColor: "var(--warning)"
    },
    {
        id: 4,
        icon: "fa-handshake",
        value: "150",
        label: "Closed Deals",
        bgColor: "#e2f0fd",
        iconColor: "#2e59d9"
    }
];

// Recent Orders Data
const recentOrdersData = [
    {
        id: 1,
        orderId: "#ORD-8012",
        customerName: "Wayne Enterprises",
        amount: "$4,500.00",
        status: "Shipped"
    },
    {
        id: 2,
        orderId: "#ORD-8013",
        customerName: "Stark Industries",
        amount: "$12,000.00",
        status: "Processing"
    },
    {
        id: 3,
        orderId: "#ORD-8014",
        customerName: "Oscorp Inc.",
        amount: "$850.00",
        status: "Pending"
    },
    {
        id: 4,
        orderId: "#ORD-8015",
        customerName: "Daily Bugle",
        amount: "$3,200.00",
        status: "Shipped"
    },
    {
        id: 5,
        orderId: "#ORD-8016",
        customerName: "Goliath National",
        amount: "$1,150.00",
        status: "Pending"
    }
];

// Tasks & Reminders Data
const tasksData = [
    {
        id: 1,
        text: "Call John Doe regarding quote",
        completed: false
    },
    {
        id: 2,
        text: "Approve discount for ABC Corp.",
        completed: false
    },
    {
        id: 3,
        text: "Follow up on Q2 projections",
        completed: true
    },
    {
        id: 4,
        text: "Review low stock alerts with procurement",
        completed: false
    }
];
