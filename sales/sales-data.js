// Sales & Orders KPI Data
const salesKPIData = [
    {
        id: 1,
        label: "Orders Today",
        value: "14",
        icon: "fa-cart-plus",
        type: "success"
    },
    {
        id: 2,
        label: "Pending Fulfillment",
        value: "5",
        icon: "fa-boxes-packing",
        type: "warning"
    },
    {
        id: 3,
        label: "Awaiting Payment",
        value: "$1,250.00",
        icon: "fa-hand-holding-dollar",
        type: "default"
    }
];

// Sales Orders Table Data
const salesOrdersData = [
    {
        id: 1,
        orderId: "#ORD-1042",
        date: "Jun 10, 2026",
        customerName: "Wayne Enterprises",
        totalAmount: "$4,500.00",
        paymentStatus: "Paid",
        fulfillmentStatus: "Processing",
        salesRep: "Sergie Gomez"
    },
    {
        id: 2,
        orderId: "#ORD-1041",
        date: "Jun 10, 2026",
        customerName: "Stark Industries",
        totalAmount: "$1,250.00",
        paymentStatus: "Unpaid",
        fulfillmentStatus: "Draft",
        salesRep: "Sarah Jenkins"
    },
    {
        id: 3,
        orderId: "#ORD-1040",
        date: "Jun 09, 2026",
        customerName: "Daily Bugle",
        totalAmount: "$320.00",
        paymentStatus: "Paid",
        fulfillmentStatus: "Delivered",
        salesRep: "Sergie Gomez"
    }
];
