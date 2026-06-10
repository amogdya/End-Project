// Submenu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggles = document.querySelectorAll('.menu-toggle');
    
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the submenu ID from data attribute
            const submenuId = this.getAttribute('data-toggle');
            const submenu = document.getElementById(submenuId);
            const icon = this.querySelector('.submenu-icon');
            
            if (submenu) {
                // Toggle display
                const isDisplayed = submenu.style.display === 'block';
                submenu.style.display = isDisplayed ? 'none' : 'block';
                
                // Rotate icon
                if (icon) {
                    icon.style.transform = isDisplayed ? 'rotate(0deg)' : 'rotate(180deg)';
                }
            }
        });
    });
    
    // Keep submenus open on page load if we're on a submenu page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'sales-orders.html' || currentPage === 'sales-create.html') {
        const salesMenu = document.getElementById('salesMenu');
        const salesToggle = document.querySelector('[data-toggle="salesMenu"]');
        if (salesMenu && salesToggle) {
            salesMenu.style.display = 'block';
            const icon = salesToggle.querySelector('.submenu-icon');
            if (icon) {
                icon.style.transform = 'rotate(180deg)';
            }
        }
    }
});
