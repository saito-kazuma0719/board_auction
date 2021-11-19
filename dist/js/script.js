window.addEventListener('load', function(){
	deSVG('.replace-svg', true);
	//パスワード表示
	var passwordCheck_1 = document.getElementById('show-pass-01')
	var passwordCheck_2 = document.getElementById('show-pass-02')
	var passwordCheck_3 = document.getElementById('show-pass-03')
	var elemPass_1 =  document.getElementById('password-01')
	var elemPass_2 =  document.getElementById('password-02')
	var elemPass_3 =  document.getElementById('password-03')
	var menuTrigger = document.getElementsByClassName('menu_trigger')
	var navigation = document.getElementsByClassName('navigation')
	var pagetop = document.getElementById("pagetop");
	
	//pagetop
	var pagetopScroll = function() {
		if (window.pageYOffset > 400) {
			pagetop.classList.add('is-showed');
		} else {
			pagetop.classList.remove('is-showed');
		}
	};	
	
	window.addEventListener("load", pagetopScroll);
	window.addEventListener("scroll", pagetopScroll);
	
	pagetop.addEventListener('click', function(){
		e.preventDefault();
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	})
	
	
	
	
	//menu
	
	menuTrigger[0].addEventListener('click', function(){
		this.classList.toggle('is-opened');
		navigation[0].classList.toggle('expanded') 
	});
	
		
	if(!passwordCheck_1){
		return;
	}
	passwordCheck_1.addEventListener('click', function(){
		this.classList.toggle('show');
		if(this.classList.contains('show')){
			elemPass_1.type = "text"
		}else{
			elemPass_1.type = "password"
		}
	});


	if(!passwordCheck_2){
		return;
	}
	passwordCheck_2.addEventListener('click', function(){
		this.classList.toggle('show');
		if(this.classList.contains('show')){
			elemPass_2.type = "text"
		}else{
			elemPass_2.type = "password"
		}
	});
	
	if(!passwordCheck_3){
		return;
	}
	passwordCheck_3.addEventListener('click', function(){
		this.classList.toggle('show');
		if(this.classList.contains('show')){
			elemPass_3.type = "text"
		}else{
			elemPass_3.type = "password"
		}
	});
	

});


// カテゴリー取得
/*
window.addEventListener('load', function(){
	
	var listElem = document.querySelectorAll('.sort_list li');
	var elem = document.querySelectorAll('.card_item')
	for(var element of listElem) {
		element.addEventListener('click', function(){
			//クリックしたliタグのdata属性を取得する
			var dataCategory = this.dataset.sortCategory;
			var dataYear = this.dataset.sortYear;
			//auction listをいったん非表示にする
			elem.forEach(function (result) {
				$('.card_item').hide();
				if(dataCategory !== ""){
					$('.card_item[data-category-target='+dataCategory+']').show();
					hideList();
				}else{
					$('.card_item').show();
					hideList();
				}
			});		
		});
	}
	
	
	
	
	function hideList(){
		var elem = document.querySelectorAll('.sort_list')
		for (var i = 0; i < elem.length; i++) {
			elem[i].classList.remove("is-active");
		}
	}
	

});
*/



//お気に入り
var favoritBadge = document.querySelectorAll('.list_card_badge');
if(favoritBadge.length !== 0){
	for (var i = 0; i < favoritBadge.length; i++) {
		favoritBadge[i].addEventListener('click', function(){
			this.classList.toggle('is-active');
		})
	}
}


//ブックマーク
var bookmarkBadge = document.querySelectorAll('.card_bookmark_badge');
if(bookmarkBadge !== 0){
	for (var i = 0; i < bookmarkBadge.length; i++) {
		bookmarkBadge[i].addEventListener('click', function(){
			this.classList.toggle('is-active');
		})
	}
}

