$('.dropdown').hover(function () {
    $('.dropdown-menu').slideToggle(50, function () {

    })
})

        var typed = new Typed('.type', {
            strings: [
                'A Photographer',
                'Who Loves',
                'to Capture',
                'Random Things'
            ],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true
        });

        
        $(document).ready(function () {

            $(".img-container").popupLightbox(
                {
                    width: 800,
                    height: 550
                }
            );

        })


        
         