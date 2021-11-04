window.addEventListener('load', function(){
	var formInputs = document.getElementsByClassName("form_file");
	var length = formInputs.length;
	var checkShipping = document.getElementById('check_shipping')
	var checkZip =  document.getElementById('check_zip')
	var checkPrefecture =  document.getElementById('check_prefecture')
	var checkAddress =  document.getElementById('check_address')
	
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
});