(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";

	
				// Wait for the document to be ready
	document.addEventListener('DOMContentLoaded', function () {

		  // Inicializa el mapa
		var map = L.map('map', {
		center: [24.61429, -104.51686],
		zoom: 7
		});

		  // Añade una capa de mapa de OpenStreetMap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		  }).addTo(map);
		  
		    // Cargar y procesar el archivo CSV
		fetch('data/ince_2023_11.csv')
		  .then(response => response.text())
		  .then(data => {
			var lines = data.split('\n');
			for (var i = 1; i < lines.length; i++) {
			  var fields = lines[i].split(',');
			  var lat = parseFloat(fields[1]);
			  var lng = parseFloat(fields[2]);
			  var name = fields[0];
			  
						// Crear un icono personalizado
			  var customIcon = L.icon({
				iconUrl: 'https://img.icons8.com/?size=512&id=6Ty1hd-tL2Il&format=png', // Cambiar esto a la URL de tu icono
				iconSize: [20, 20], // Tamaño del icono en píxeles
			  });

			  // Crear marcador y agregarlo al mapa
			  L.marker([lat, lng], { icon: customIcon }).addTo(map).bindPopup(name);

			}
		  });

		
	});	
	


    
})(jQuery);

