window.addEventListener('load', function(){
	var radio = document.querySelectorAll("input[name=category]");
	var formInputs = document.getElementsByClassName("form_file");
	var length = formInputs.length;
	var checkShipping = document.getElementById('check_shipping')
	var checkZip =  document.getElementById('check_zip')
	var checkPrefecture =  document.getElementById('check_prefecture')
	var checkAddress =  document.getElementById('check_address')
	var passwordCheck_1 = document.getElementById('show-pass-01')
	var passwordCheck_2 = document.getElementById('show-pass-02')
	var elemPass_1 =  document.getElementById('password-01')
	var elemPass_2 =  document.getElementById('password-02')
	var eyeLine =  document.getElementsByClassName('eyes_line')
	
	//切り替え
	
	
	for(var element of radio) {

		element.addEventListener('change',function(){
			
			var corporateRow = document.querySelectorAll('.is-corporation');
			var indivisualRow = document.querySelectorAll('.is-individual');

			if( this.value === "個人" ) {
				for(var indivisualRow of indivisualRow) {
					console.log(indivisualRow);
					indivisualRow.style.display = "block"
				}
				for(var corporateRow of corporateRow) {
					console.log(corporateRow);
					corporateRow.style.display = "none"
				}
			}else{
				for(var indivisualRow of indivisualRow) {
					console.log(indivisualRow);
					indivisualRow.style.display = "none"
				}
				for(var corporateRow of corporateRow) {
					console.log(corporateRow);
					corporateRow.style.display = "block"
				}
			}
		});
	}	
	

	//新規会員申請ファイルアップロード
	if(!length){
		return false;
	}
	for (var i = 0; i < length; i++) {
	  formInputs[i].onchange = function () {
	    var file = this.files[0].name;
	    var label = this.nextElementSibling;
	    if (!label.classList.contains("uploaded")) {
	      var span = document.createElement("div");
	      span.className = "form_file_text";
	      this.parentNode.appendChild(span);
	      label.classList.add("uploaded");
	    }
	    label.nextElementSibling.innerHTML = file;
	  };
	}
	
	
	//発送先処理
	var shippingAddress = function(){
		if(checkShipping.checked){
			checkZip.disabled = true;
			checkPrefecture.disabled = true;
			checkAddress.disabled = true;
		}else{
			checkZip.disabled = false;
			checkPrefecture.disabled = false;
			checkAddress.disabled = false;
		}
	}
	
	checkShipping.addEventListener('click', shippingAddress, false);
	
	
	//パスワード表示
	passwordCheck_1.addEventListener('click', function(){
		this.classList.toggle('show');
		if(this.classList.contains('show')){
			elemPass_1.type = "text"
		}else{
			elemPass_1.type = "password"
		}
	});
	
	passwordCheck_2.addEventListener('click', function(){
		this.classList.toggle('show');
		if(this.classList.contains('show')){
			elemPass_2.type = "text"
		}else{
			elemPass_2.type = "password"
		}
	});
	
	
});