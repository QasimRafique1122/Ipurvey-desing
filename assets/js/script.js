$(".sidebar ul li").on('click', function () {
            $(".sidebar ul li.active").removeClass('active');
            $(this).addClass('active');
        });



// Mobile sidebar toggle
const sidebar = document.getElementById('side_nav');
const content = document.querySelector('.content');

// Handle both desktop and mobile toggle buttons
document.querySelectorAll('.mobile-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
        // Mobile: open/close sidebar (slide in/out)
        if (window.innerWidth < 768) {
            sidebar.classList.toggle('active');
        }
        // Desktop: collapse/expand width (icons only)
        else {
            sidebar.classList.toggle('sidebar-collapsed');
            content.classList.toggle('sidebar-collapsed');
        }
    });
});

// Close button (used for mobile)
document.getElementById('closeSidebar').addEventListener('click', function () {
    sidebar.classList.remove('active');
});
// Active link highlighting
document.querySelectorAll('.nav-side-link, .inner-link').forEach(link => {
    link.addEventListener('click', function (e) {
        // Remove active class from all links
        document.querySelectorAll('.nav-side-link').forEach(item => {
            item.classList.remove('active');
        });

        document.querySelectorAll('.inner-link').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // If it's a dropdown link, also highlight the parent
        if (this.classList.contains('inner-link')) {
            const parentLink = this.closest('.dropdown-btn');
            if (parentLink) {
                parentLink.classList.add('active');
            }
        }
    });
});