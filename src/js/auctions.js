
window.addEventListener('load', function(){
	
	// 年度ごとに取得
	var sortSelected = document.getElementById('sort-year');
	var sortYearList = document.getElementById('sort-year-list');
	var sortYearTarget = document.getElementById('sort-year-target');
	
	sortSelected.addEventListener('click', function(){
		sortYearList.classList.toggle("is-active")
	});
	
	var listElem = document.querySelectorAll('#sort-year-list li');
	var elem = document.querySelectorAll('.list_card li')
	
	
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
					sortYearTarget.textContent = "すべての開催年";
				}
			}
			
		});
	}
});
