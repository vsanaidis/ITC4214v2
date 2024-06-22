$(document).ready(function() {
    // Dark mode toggle
    $('#darkmodeswitch').click(function() {
        $('body').toggleClass('dark-mode');
        const icon = $(this).next('label').find('i');
        if ($(this).is(':checked')) {
            icon.removeClass('bi-moon').addClass('bi-moon-fill');
        } else {
            icon.removeClass('bi-moon-fill').addClass('bi-moon');
        }
    });
    function toggleMainMenu() {
        const mainMenu = document.querySelector('.mainmenu');
        mainMenu.classList.toggle('show');
    }
    const buttonContainer = document.querySelector('.mainmenu');
    // const checkbox = document.getElementById('check');
    // const submit = document.getElementById('submitbtn');
 
    function showSidebar(){
        const sidebar = document.getElementById('listbar')
        sidebar.style.display = "flex"
    }
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // prevents the user from not entering input

        var username = $('#username').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();

        alert('Username: ' + username + '\nEmail: ' + email + '\nPhone: ' + phone + '\nMessage: ' + message);
    });

 

    // window.addEventListener('resize', checkWindowSize);

    // function checkWindowSize() {
    //     if (window.innerWidth > 858) {
    //         buttonContainer.classList.remove('column');
    //         buttonContainer.style.flexDirection = 'row';
    //     } else {
    //         buttonContainer.classList.add('column');
    //         buttonContainer.style.flexDirection = 'column';
    //     }
    // }

    // window.addEventListener('resize', function() {
    //     checkWindowSize();
    // });

    // function checkWindowSize() {
    //     if (window.innerWidth > 858) {
    //         buttonContainer.classList.remove('column');
    //         buttonContainer.style.flexDirection = 'row';
    //     } else {
    //         buttonContainer.classList.add('column');
    //         buttonContainer.style.flexDirection = 'column';
    //     }
    // }
    // Scroll to top button
    var btntop = document.getElementById('btntop'); // the button that takes the user to the top of the page
    btntop.addEventListener('click', function() {
        window.scrollTo({
            top: 0, // the position where the user is taken AKA the top of the page
            behavior: 'smooth' // smooth transition for the user
        });
    });
  
});
