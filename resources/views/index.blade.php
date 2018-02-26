<!DOCTYPE html>
<html>
    <head>
        <script src="https://cdn.rawgit.com/scottjehl/picturefill/3.0.2/dist/picturefill.min.js"></script>
        <title>Triple C Automotive</title>
        <meta name="viewport" content="width=device-width, initial scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400|Open+Sans:300,400|Oswald:200,300,400|Roboto:100,300,400|Vollkorn" rel="stylesheet" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/slick-1.8.0/slick.css">
        <link rel="stylesheet" href="./css/slick-1.8.0/slick-theme.css">
        <link rel="stylesheet" href="./css/animate-css/animate.css">
        <link rel="stylesheet" href="./css/font-awesome/css/font-awesome.css">
        <link rel="stylesheet" href="./css/app.css">

        
    </head>
    <body>
        <a id="top"></a>
        <header>
            @include ('components.jumbotron')
            @include ('components.testimonials')
            @include('components.navigation')
        </header>
        <main>
        <div class="container">
            <div class="content">
                <section class="about-container py-5"><a id="about"></a>
                    <div class="about-header fade-in">
                        @include('components.one-column-paragraph-heading', [
                        'headingTag' => 'h2', 
                        'heading' => $data['heading1'],
                        'text' => $data['text1']
                        ])
                    </div>
                    <div class="about-content row">
                         @include('components.three-column-heading-paragraph-image', [
                         'heading1' => $data['heading2'],
                         'text1' => $data['text2'], 
                         'img1' => $data['img1'],

                         'heading2' => $data['heading3'],
                         'text2' => $data['text3'],
                         'img2' => $data['img2'],

                         'heading3' => $data['heading4'],
                         'text3' => $data['text4'],
                         'img3' => $data['img3']
                         ])
                    </div>
                </section>

                <section class="featured-content row text-center py-5">
                   @include('components.three-column-heading-image-description-button', [
                         'heading1' => $data['heading5'],
                         'description1' => $data['description1'], 
                         'img1' => $data['img4'],
                         'buttonName1' => $data['buttonName1'],

                         'heading2' => $data['heading6'],
                         'description2' => $data['description2'], 
                         'img2' => $data['img5'],
                         'buttonName2' => $data['buttonName2'],

                         'heading3' => $data['heading7'],
                         'description3' => $data['description3'], 
                         'img3' => $data['img6'],
                         'buttonName3' => $data['buttonName3'],

                         ])
                </section>

                <section>
                    @include('inc.sections.services')
                </section>
            </div>
        </div>
        <section class="special-offers-container py-5">
            @include('inc.sections.discounts')
        </section>
        <section class="map">
            @include('components.map')
        </section>
        </main>
        <footer>
            <a id="bottom"></a>
            <div class="container py-5">
                <div class="row">
                    <div class="text-center col-lg-4">
                        <div><a href="tel://012 345 6789"><i class="fa fa-5x fa-phone"></i>
                            <p>Hire Me</p></a></div>
                        <div><i class="fa fa-5x fa-map-marker"></i>
                            <p>Address</p>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <h2 class="text-center px-3 py-2">Get in Touch</h2>
                        <p class="text-center px-3 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam ipsa libero voluptates pariatur quae repellendus vitae, eaque voluptatum doloribus cum magnam modi dolores excepturi minus iure enim soluta molestias.</p>

                        @include('components.contact-form')
                    </div>
                </div>
            </div>
            <div class="site-info text-center py-4"><small>Copyright &copy; 2018</small></div>
        </footer>
    </body>
    <script src="scripts/slick-1.8.0/slick.min.js"></script>
    <script src="scripts/gsap/TweenMax.min.js"></script>
    <script src="scripts/gsap/plugins/scrollToPlugin.min.js"></script>
    <script src="scripts/Scroll-Magic/scrollMagic.min.js"></script>
    <script src="scripts/Scroll-Magic/plugins/animation.gsap.js"></script>
    <script src="scripts/Scroll-Magic/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="dist/scripts/scripts.js"></script>
</html>