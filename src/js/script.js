window.addEventListener('load', function(){
	deSVG('.replace-svg', true);
	//パスワード表示
	var passwordCheck_1 = document.getElementById('show-pass-01')
	var passwordCheck_2 = document.getElementById('show-pass-02')
	var passwordCheck_3 = document.getElementById('show-pass-03')
	var elemPass_1 =  document.getElementById('password-01')
	var elemPass_2 =  document.getElementById('password-02')
	var elemPass_3 =  document.getElementById('password-03')
	var eyeLine =  document.getElementsByClassName('eyes_line')
	
	var sortSelected = document.querySelectorAll('.sort_selected')
	
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
	
	
	for(var element of sortSelected) {
		console.log(element);
		element.addEventListener('click', function(){
			console.log();
			this.nextElementSibling.classList.toggle("is-active")
		})
	}


var listElem = document.querySelectorAll('.sort_list li');
var elem = document.querySelectorAll('.list_card li')
for(var element of listElem) {
	element.addEventListener('click', function(){
		//クリックしたliタグのdata属性を取得する
		var dataYear = this.dataset.sortYear;
		//auction listをいったん非表示にする
		elem.forEach(function (result) {
			$('.list_card li').hide();
			if(dataYear !== ""){
				$('.list_card li[data-year-target='+dataYear+']').show();
			}else{
				$('.list_card li').show();
			}
			
		});		
		
	});
}


});