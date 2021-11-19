
window.addEventListener('load', function(){
	
	// カテゴリーごとに取得
	var sorCategory = document.getElementById('sort-category');
	var sortCategoryList = document.getElementById('sort-category-list');
	var sortCategoryTarget = document.getElementById('sort-category-target');
	sorCategory.addEventListener('click', function(){
		sortCategoryList.classList.toggle("is-active")
	});
	
	var categoryElem = document.querySelectorAll('#sort-category-list li');
	var card = document.querySelectorAll('.card_item')

	for (var i = 0; i < categoryElem.length; i++) {
		categoryElem[i].addEventListener('click', function(){
			//クリックしたliタグのdata属性を取得する
			var dataCategory = this.dataset.sortCategory;
			console.log(dataCategory);
			for (var i = 0; i < card.length; i++) {
				card[i].style.display = "none";
				if(dataCategory !== "0"){
					var label = this.textContent;
					sortCategoryTarget.textContent = label;
					//ここにfilterしたAPI処理を追加
				}else{
					card[i].style.display = "block";
					sortCategoryTarget.textContent = "すべてのカテゴリー";
				}
			}
			
		});
	}
	
	$('.gallery').each(function(){
		var wrap = $(this);
		var slidr = $('.gallery_sldr',wrap);
		var arrows = $('.gallery_arrows',wrap);
		
		slidr.slick({
			infinite: false,
			dots: false,
			slidesToShow: 1,
			arrows: true,
			appendArrows: arrows,
			responsive: [{
				breakpoint: 767,
				settings: {
					arrows: false,
				}
			}]
		});
	})


	$(document).on('opened', '.remodal', function () {
		var sldr = $(this).find('.gallery_sldr');
		sldr.slick('setPosition');
	});	
	
	
	
	
	
});
