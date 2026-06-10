document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.sidebar-toggle');
    if (!toggle) return;

    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');

    const updateSidebarState = () => {
        const isMobileView = window.innerWidth <= 992;
        if (isMobileView) {
            document.body.classList.remove('sidebar-collapsed');
        } else {
            document.body.classList.remove('sidebar-open');
        }
    };

    toggle.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            document.body.classList.toggle('sidebar-open');
        } else {
            document.body.classList.toggle('sidebar-collapsed');
        }
    });

    const sidebarClose = document.querySelector('.sidebar-close');
    if (sidebarClose) {
        sidebarClose.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                document.body.classList.remove('sidebar-open');
            }
        });
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                document.body.classList.remove('sidebar-open');
            }
        });
    });

    window.addEventListener('resize', updateSidebarState);
    updateSidebarState();
});
