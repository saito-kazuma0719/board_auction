(function($) {
	var body = $('body'),
			toggleButton = $('.toggle-menu'),
			pageTop = $('.pagetop'),
			prevBottom = 0, lowerContentsPos, sidePos, sideWrapHeight, sideHeight, stopPos;

	toggleButton.on('click', function() {
		body.toggleClass('is-drawer-open').toggleClass('is-fixed');
	});

	if ( $('.blog-posts').length > 0 ) {
		$('.blog-posts').slick({
			dots: false,
			arrows: false,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 769,
					settings: {
						dots: false,
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	if ( $('.member-block-wrap').length > 0 ) {
		$('.member-block-wrap').slick({
			dots: false,
			arrows: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}

	if ( $('.main-slider').length > 0 )  {
		$('.main-slider').slick({
			dots: true,
			arrows: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.main-slider').on('afterChange', function(event, slick, currentSlide) {
			$('.main-visual_box').removeClass('is-active');
			$('.main-visual_image').removeClass('is-active');
			funcMvAnimation();
		});
	}

  $('.site-navigation .has-submenu').each(function() {
  	$(this).children('a').on('click', function() {
  		if ( $(window).width() <= 768 ) {
  			$(this).parent().toggleClass('is-open');
  			return false;
  		}
  	});
  	$(this).on({
  		mouseenter: function() {
  			if ( $(window).width() > 768 ) {
  				body.addClass('is-submenu-open');
  				$(this).addClass('is-open');
  			}
  		},
  		mouseleave: function() {
  			if ( $(window).width() > 768 ) {
  				body.removeClass('is-submenu-open');
  				$(this).removeClass('is-open');
  			}
  		}
  	});
  });
  
	$('.footer-navigation .menu > li > a').each(function() {
		$(this).on('click', function() {
			if ( $(window).width() <= 768 ) {
				$(this).closest('li').toggleClass('is-open');
				return false;
			}
		});
	});

	$('a[href^="#"]').on('click', function() {
		let speed = 500,
				href= $(this).attr("href"),
				target = $(href === '#' || href === '#top' || href === '' ? 'html' : href),
				position = target.offset().top;

		$("html, body").animate({scrollTop: position}, speed, "swing");
		return false;
	});

	var funcMvAnimation = function() {
		setTimeout(function() {
			$('.slick-current .main-visual_image').addClass('is-active');
		}, 1000);

		setTimeout(function() {
			$('.slick-current .main-visual_box').addClass('is-active');
		}, 3000);
	};

	var funcScrollEffect = function() {
		var winHeight = $(window).height();
		var scroll = $(window).scrollTop();
		$('.effect').each(function() {
			var curPos = $(this).offset().top;
			if ( scroll > curPos - winHeight + (winHeight * .8) ) {
				$(this).addClass('is-active');
			}
		});
	};

	var funcBlog = function() {
		if ( ! body.hasClass('page-blog') ) return;
		var h = 0, title = $('.blog-list .blog-post-box .blog-post-box_title, .other-posts_inner .blog-post-box .blog-post-box_title');
		title.height('auto');
		title.each(function() {
			if ( h < $(this).height() ) {
				h = $(this).height();
			}
		});
		title.height(h);
	};

	var funcLowerBox = function() {
		var h = 0, text = $('.lower-box_text');
		text.height('auto');
		text.each(function() {
			if ( h < $(this).height() ) {
				h = $(this).height();
			}
		});
		text.height(h);
	};
	
	var funcBlog = function() {
		var h = 0, text = $('.blog-post-box_title');
		text.height('auto');
		text.each(function() {
			if ( h < $(this).height() ) {
				h = $(this).height();
			}
		});
		text.height(h);
	};

	var funcTableContents = function() {
		var tableContents = $('.table-contents'), button = $('.table-contents_button');
		button.on('click', function() {
			tableContents.toggleClass('is-close');
		});
	};

	var funcPageTop = function() {
		$(window).on('scroll', function() {
			var tmpBottom = parseInt( pageTop.css('bottom'), 10);
			var bottom = Math.min(prevBottom, tmpBottom);
			if ( bottom === 0 ) {
				bottom = tmpBottom;
			}
			prevBottom = bottom;
			var offset = $('.lower-contents').height() + parseInt($('.lower-contents').css('marginBottom'), 10) - parseInt(pageTop.css('bottom'), 10);
			if ( (lowerContentsPos - $(window).height() + offset) < $(window).scrollTop() ) {
				if ( pageTop.hasClass('is-fixed') ) {
					pageTop.removeClass('is-fixed');
				}
			} else {
				if ( ! pageTop.hasClass('is-fixed') ) {
					pageTop.addClass('is-fixed');
				}
			}
			if ($(window).scrollTop() > 600) {
				if ( $(window).width() > 768 ) {
					pageTop.fadeIn();
				} else {
					pageTop.hide();
				}
			} else {
				pageTop.fadeOut();
			}
		});
	};

	var funcSideScroll = function() {
		$(window).on('scroll', function() {
				if ( $(window).scrollTop() > (sidePos + 20) ) {
					if ( $(window).scrollTop() > (sidePos + stopPos) ) {
						$('.post-detail-side-inner').addClass('is-end');
						$('.post-detail-side-inner').css({
							top: stopPos + 'px'
						});
					} else {
						$('.post-detail-side-inner').removeClass('is-end');
						$('.post-detail-side-inner').css({
							top: '20px'
						});
					}
					$('.post-detail-side-inner').addClass('is-fixed');
					sideTopMargin = $('.post-detail-side-inner').css('top');
				} else {
					$('.post-detail-side-inner').removeClass('is-fixed');
				}
		});
	};

	var funcServiceFlow = function() {
		$('.flow-tab button').on('click', function() {
				var t = $(this).attr('data-target');
				$('.flow-tab li').removeClass('is-active');
				$('.flow-panel').removeClass('is-active');
				$(this).closest('li').addClass('is-active');
				$('#' + t).addClass('is-active');
		});
	};

	var funcFaq = function() {
		$('.faq-list dt').each(function() {
			$(this).on('click', function() {
				$(this).toggleClass('is-open');
			});
		});
	};

	$(window).on({
		load: function() {
			funcMvAnimation();
			funcLowerBox();
			funcTableContents();
			if ( $(window).width() > 768 ) {
				funcBlog();
				if ($(window).scrollTop() <= 600) {
					pageTop.hide();
				}
			} else {
				pageTop.hide();
			}
			lowerContentsPos = $('.lower-contents').offset().top;
			if ( $('.post-detail-side').length > 0 ) {
				sidePos = $('.post-detail-side').offset().top;
				sideWrapHeight = $('.post-detail-side').height();
				sideHeight = $('.post-detail-side-inner').height();
				stopPos = sideWrapHeight - sideHeight;
				$('.post-detail-side-inner').width($('.post-detail-side').width());
				funcSideScroll(0);
			}
			funcPageTop();
			funcServiceFlow();
			funcFaq();
		},
		resize: function() {
			funcLowerBox();
			if ( $(window).width() > 768 ) {
				funcBlog();
			}
		},
		scroll: function() {
			funcScrollEffect();
		}
	});
})(jQuery);
