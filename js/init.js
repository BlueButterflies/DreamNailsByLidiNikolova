(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    }); // end of document ready

    $(document).ready(function () {
        <!-- Slider images -->
        $('.slider').slider();

        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
            onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
        });

        <!-- Dropdown button for Lang -->
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrainWidth: false, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: 'center', // Displays dropdown with edge aligned to the left of button
                stopPropagation: false, // Stops event propagation
            }
        );

        <!--Share button -->
        $('.modal').modal();
        $("#facebookShareLink").on("click",function(){
            var fbpopup = window.open(
                "https://www.facebook.com/sharer/sharer.php?u=https://nailsbylidinikolova.com/gallery/logo.jpg",
                "pop",
                "width=600, height=400, scrollbars=no");
            return false;
        });
    })

})(jQuery); // end of jQuery name space