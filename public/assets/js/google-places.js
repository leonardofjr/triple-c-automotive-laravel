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