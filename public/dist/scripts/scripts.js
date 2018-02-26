$(document).ready(function () {

    jQuery('.contact-form').submit(function () {
        event.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            dataType: 'json',
            data: $(this).serialize(),
   
            success: function (data, status) {
                if (status === 'success') {
                    $('.flash-message-contact-form-success').removeClass('d-none');
                }
            },
            error: function(err) {
                response = err.responseJSON;
                if (err.status === 422) {
                    if (response.contactFormName) {
                        $('.flash-message-contact-form-name span').html(response.contactFormName[0]);
                        $('.flash-message-contact-form-name').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-contact-form-name').addClass('d-none');
                    }
                    if (response.contactFormEmail) {
                        $('.flash-message-contact-form-email span').html(response.contactFormEmail[0]);
                        $('.flash-message-contact-form-email').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-contact-form-email').addClass('d-none');
                    }
                    if (response.contactFormMessage) {
                        $('.flash-message-contact-form-message span').html(response.contactFormMessage[0]);
                        $('.flash-message-contact-form-message').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-contact-form-message').addClass('d-none');
                    }
                }
            }
        });

        return false;
    });


    jQuery('.newsletter-form').submit(function () {
        event.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            dataType: 'json',
            data: $(this).serialize(),

            success: function (data, status) {
                if (status === 'success') {
                    $('.flash-message-newsletter-form-success').removeClass('d-none');
                }
            },
            error: function (err) {
                response = err.responseJSON;
                if (err.status === 422) {
                    if (response.contactFormName) {
                        $('.flash-message-newsletter-form-name span').html(response.contactFormName[0]);
                        $('.flash-message-newsletter-form-name').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-newsletter-form-name').addClass('d-none');
                    }
                    if (response.contactFormEmail) {
                        $('.flash-message-newsletter-form-email span').html(response.contactFormEmail[0]);
                        $('.flash-message-newsletter-form-email').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-newsletter-form-email').addClass('d-none');
                    }
                }
            }
        });

        return false;
    });

});


$(document).ready(function () {


/**** Srolling Functionality Services ****/
    // init controller
    var anchorLinkScrollingController = new ScrollMagic.Controller();

    // change behaviour of controller to animate scroll instead of jump
    anchorLinkScrollingController.scrollTo(function (newpos, offset) {
        TweenMax.to(window, 0.5, { scrollTo: { y: newpos + offset } });
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            anchorLinkScrollingController.scrollTo(id, - 100);

            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });

    var servicesController = new ScrollMagic.Controller();
    $('.fade-in').each(function () {
        var tween = TweenMax.from(this , 0.2, {autoAlpha: 0, scale: 0.5, y: '-=50', ease: Linear.easeNone});

        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
        .setTween(tween) // trigger a TweenMax tween
        .addTo(servicesController)
    })


/* Collapse Mobile Navigation Box On Click */

    $('#navbarToggleExternalContent .nav-item').each(function() {
        $(this).click(function() {
            $('nav:nth-child(2) button').attr('aria-expanded', 'false');
            $('nav:nth-child(2) button').removeClass('navbar-toggler');
            $('nav:nth-child(2) button').addClass('navbar-toggler collapsed');
            $('#navbarToggleExternalContent').addClass('collapsing');
            $('#navbarToggleExternalContent').removeClass('show');
        })
    })
});

//** Helper Functions **/
function revealElement(target, animation) {
    $(target).removeClass('invisible');
    $(target).addClass('animated' + animation);
}
$(document).ready(function () {
    var apiKey = 'AIzaSyBV4geM6r23-Bs0AZfLUtqeD7Yoknhv9FQ';
    let placeId = 'ChIJ3YD4Vm3W1IkRqp2JWTzSdTE';
    var query = 'honest mechanic in markham';
    let textSearchEndpoint = 'textsearch/json?query=';
    var apiUrl = 'https://maps.googleapis.com/maps/api/place/';

    function init() {
        getData();
    }

    function getData() {
        var placesDetailsEndpoint = 'details/json?placeid=';

        $.ajax({
            type: 'GET',
            url: apiUrl + placesDetailsEndpoint + placeId + '&key=' + apiKey,
            dataType: "JSON",
            success: function (response) {
                renderReviews(response.result.reviews);
            },
            error: function (request, status, error) {
                alert(error);
            }
        });
    }

    function renderReviews(reviews) {
        reviews.map(function (review) {
            let reviewHeader = '<div><div class="col-md-12 text-center review-wrap">' + '<p class="review-rating">' + renderRating(review.rating) + '</p></div><hr>'

            let reviewBody = '<div class="col-md-12 review-body"><p>' + review.text + '</p></div>'
            let reviewFooter = '<div class="col-md-12 text-center review-info-wrap" > <p>' + review.author_name + '</p></div></div>'
            $('.review-content').append(reviewHeader + reviewBody + reviewFooter)
        })
    }

    init();
});
function renderRating(rating) {
    let stars = new Array();
    for (let i = 0; i < rating; i++) {
        stars.push('<i class="fa fa-star" aria-hidden="true"></i>');
    }

    return stars.join('');

}
$(document).ready(function () {
    $('.main-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
$('.testimonial-responsive-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});