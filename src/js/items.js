
window.addEventListener('load', function(){
	
	// 年度ごとに取得
	var sortSelected = document.getElementById('sort-year');
	var sortYearList = document.getElementById('sort-year-list');
	var sortYearTarget = document.getElementById('sort-year-target');
	
	sortSelected.addEventListener('click', function(){
		sortYearList.classList.toggle("is-active")
	});
	
	var listElem = document.querySelectorAll('#sort-year-list li');
	var elem = document.querySelectorAll('.card_item')
	
	
	for (var i = 0; i < listElem.length; i++) {
		listElem[i].addEventListener('click', function(){
			//クリックしたliタグのdata属性を取得する
			var dataYear = this.dataset.sortYear;
			for (var i = 0; i < elem.length; i++) {
				elem[i].style.display = "none";
				if(dataYear !== ""){
					sortYearTarget.textContent = dataYear+"年度";
					//ここにfilterしたAPI処理を追加
				}else{
					elem[i].style.display = "block";
					sortYearTarget.textContent = "すべての出品年";
				}
			}
			
		});
	}
	
	
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
	


});
