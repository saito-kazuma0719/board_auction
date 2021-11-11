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
	
	
	/****
		
		1.sort_listのliをクリックしたら、data-sort-yearを取得する
		2.data-sort-yearを変数aに代入
		3.data-year-targetの数値と変数aの数値が一致したもののみ表示する
		
	**/
	
/*
	let targets = document.getElementsByClassName("sort_list");
	for(let i = 0; i < targets.length; i++){
	  targets[i].addEventListener("click",() => {
	        alert("CLASS: btn02がクリックされました。");
	  }, false);
	}
*/

	
/*
	let targets = document.getElementsByClassName("sort_list");
	for(let i = 0; i < targets.length; i++){
	  targets[i].addEventListener("click",() => {
	         console.log('data-sort-year');
	  }, false);
	}
*/

/*
$(function() {
    var lists = $('.list_card li');
    $(document).on('click', '.sort_list a', function() {
        // 絞り込みの対象を取得
        var target = $(this).attr('href').replace('#', '');
        lists.each(function(e) {
            // 絞り込み対象の場合は表示
            if($(this).hasClass(target)) {
                $(this).fadeIn();
            // 絞り込み対象でない場合は非表示
            } else {
                $(this).fadeOut();
            }
        });
        return false;
    });
});
*/


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


/*

var listElem = $('.sort_list li');
var elem = $('.list_card li');

listElem.on('click',function(){
	var dataYear = $(this).data(sort-year);
	elem.hide();
	if(dataYear !== ""){
		$('.list_card li[data-year-target='+dataYear+']').show();
	}else{
		elem.show();
});

*/


 
 
});