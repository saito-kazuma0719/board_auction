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



});

  
