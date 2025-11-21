$(".sidebar ul li").on('click', function () {
            $(".sidebar ul li.active").removeClass('active');
            $(this).addClass('active');
        });

        $('.open-btn').on('click', function () {
            $('.sidebar').addClass('active');

        });


        $('.close-btn').on('click', function () {
            $('.sidebar').removeClass('active');

        })

        // ////////////////////////...............


  


      
        $('.toggleRigthBar-btn').on('click', function () {
            // Toggle the sidebar visibility
          
            // Toggle the button's appearance (open/close icons and text)
            $('.open-text, .close-text').toggle(); // This will switch between "open" and "close" text/icons
        });
        