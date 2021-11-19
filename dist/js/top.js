window.addEventListener('load', function(){


	var closeBtn = document.querySelector('#btn-none')
	var elem = document.getElementById('top_fixed_btn');
	
	//カードを消す
	closeBtn.addEventListener('click',function() {
	　elem.remove();
	});

	
	window.onscroll = function () {
		var check = window.pageYOffset; 
		var docHeight = document.body.clientHeight;
		var dispHeight = window.innerHeight;
		var footer = document.getElementsByClassName('footer');
		var footerHeight = footer[0].clientHeight;
		var targetPos = docHeight-dispHeight-footerHeight;
		
		
		console.log("docHeight:" + docHeight);
		console.log("dispHeight:" + dispHeight);
		console.log("footerHeight:" + footerHeight);
		
		if(check > targetPos){ 
			elem.style.display = "none";
	  }else{
			elem.style.display = "block";
	  }
	};
	
	ScrollReveal().reveal('.top_container', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'bottom',
	  opacity: 0,
	  mobile : false
	});	
	
	ScrollReveal().reveal('.top_auctions', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'left',
	  opacity: 0,
	  mobile : false
	});	
	
	ScrollReveal().reveal('.top_auctions_inner', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'left',
	  delay: 500,
	  opacity: 0,
	  mobile : false
	});	
	
	ScrollReveal().reveal('.top_items', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'bottom',
	  opacity: 0,
	  mobile : false
	});	

	ScrollReveal().reveal('.top_howtouse', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'right',
	  opacity: 0,
	  mobile : false
	});	

	ScrollReveal().reveal('.top_howtouse_inner', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'right',
	  delay: 500,
	  opacity: 0,
	  mobile : false
	});	
	
	ScrollReveal().reveal('.top_news', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'bottom',
	  opacity: 0,
	  mobile : false
	});	

	ScrollReveal().reveal('.top_faq', { 
	  viewFactor: 0,
	  duration: 1000,
	  reset: false,
	  distance: '50px',
	  origin: 'bottom',
	  opacity: 0,
	  mobile : false
	});	

});

  
