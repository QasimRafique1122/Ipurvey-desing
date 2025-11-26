$(".sidebar ul li").on('click', function () {
            $(".sidebar ul li.active").removeClass('active');
            $(this).addClass('active');
        });
        //
        // $('.open-btn').on('click', function () {
        //     $('.sidebar').addClass('active');
        //
        // });
        //
        //
        // $('.close-btn').on('click', function () {
        //     $('.sidebar').removeClass('active');
        //
        // })
        //
        //
        // $('.toggleRigthBar-btn').on('click', function () {
        //     // Toggle the sidebar visibility
        //
        //     // Toggle the button's appearance (open/close icons and text)
        //     $('.open-text, .close-text').toggle(); // This will switch between "open" and "close" text/icons
        // });
// ....................



// Mobile sidebar toggle
document.getElementById('mobileToggle').addEventListener('click', function () {
    document.getElementById('side_nav').classList.toggle('active');
});

document.getElementById('closeSidebar').addEventListener('click', function () {
    document.getElementById('side_nav').classList.remove('active');
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