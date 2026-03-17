 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $toggle = $(this);
			setTimeout(function() {
				if ($('#ftco-nav').hasClass('show')) {
					$toggle.addClass('active');
				} else {
					$toggle.removeClass('active');
				}
			}, 0);
		});

		$('#ftco-nav').on('shown.bs.collapse', function() {
			$('.js-fh5co-nav-toggle').addClass('active');
		});

		$('#ftco-nav').on('hidden.bs.collapse', function() {
			$('.js-fh5co-nav-toggle').removeClass('active');
			$('body').removeClass('menu-show mega-modal-open project-popup-open').css('overflow', '');
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');
			var $target = $(href);
			if (!$target.length) {
				return;
			}

	    $('html, body').animate({
	        scrollTop: $target.offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });

			$('#ftco-nav').collapse('hide');
			$('.js-fh5co-nav-toggle').removeClass('active');
			$('body').removeClass('menu-show mega-modal-open project-popup-open').css('overflow', '');
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    touchDrag: false,
	    mouseDrag: false,
	    pullDrag: false,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

	// Mega Project Hub logic
	$(function() {
		function releaseBodyScrollIfNoOverlay() {
			var isMegaOpen = $('#megaProjectModal').hasClass('active');
			var isProjectPopupOpen = $('#projectPopupModal').hasClass('active');
			if (!isMegaOpen && !isProjectPopupOpen) {
				$('body').removeClass('mega-modal-open project-popup-open menu-show').css('overflow', '');
			}
		}

		releaseBodyScrollIfNoOverlay();
		$(window).on('pageshow', releaseBodyScrollIfNoOverlay);

		// Modal logic and jQuery filtering
		const megaProjectBtn = $('#megaProjectBtn');
		const megaProjectModal = $('#megaProjectModal');
		const megaCloseBtn = $('#megaCloseBtn');
		const body = $('body');
		megaProjectBtn.on('click', function() {
			megaProjectModal.addClass('active');
			body.addClass('mega-modal-open').css('overflow', 'hidden');
		});
		megaCloseBtn.on('click', function() {
			megaProjectModal.removeClass('active');
			body.removeClass('mega-modal-open').css('overflow', '');
			releaseBodyScrollIfNoOverlay();
		});
		megaProjectModal.on('click', function(e) {
			if (e.target === this) {
				megaProjectModal.removeClass('active');
				body.removeClass('mega-modal-open').css('overflow', '');
				releaseBodyScrollIfNoOverlay();
			}
		});
		// Dynamic filter menu and horizontal scroll grid
		function getCategories(projects) {
			const cats = new Set();
			projects.forEach(p => cats.add(p.category));
			return Array.from(cats);
		}
		function renderFilterMenu(categories) {
			const menu = $('#megaFilterMenu');
			menu.empty();
			categories.forEach((cat, idx) => {
				const btn = $(`<button class="mega-filter-btn${idx === 0 ? ' active' : ''}" data-cat="${cat}">${cat}</button>`);
				btn.on('click', function() {
					$('.mega-filter-btn').removeClass('active');
					$(this).addClass('active');
					renderProjectGrid(cat);
				});
				menu.append(btn);
			});
		}
		function renderProjectGrid(category) {
			const grid = $('#megaProjectGrid');
			grid.empty();
			const filtered = megaProjects.filter(p => p.category === category);
			filtered.forEach(p => {
				const card = $(`
					<div class="mega-project-card">
						<img src="${p.image}" alt="${p.title}" class="mega-project-img project-popup" data-desc="${p.description || ''}">
						<div class="mega-project-info">
							<div><strong>${p.title}</strong></div>
							<div style="font-size:0.95rem;opacity:0.7;">${p.category}</div>
							<div class="mega-desc">${p.description || ''}</div>
						</div>
					</div>
				`);
				card.find('.project-popup').on('click', function(e) {
					e.stopPropagation();
					$.magnificPopup.open({
						items: {
							src: p.image
						},
						type: 'image',
						closeOnContentClick: true,
						mainClass: 'mfp-img-mobile',
						image: { verticalFit: true }
					});
				});
				grid.append(card);
			});
		}
		// Initialize modal content
		const categories = getCategories(megaProjects);
		renderFilterMenu(categories);
		renderProjectGrid(categories[0]);
	});




})(jQuery);

