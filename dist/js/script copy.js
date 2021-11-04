window.addEventListener('load', function(){
	deSVG('.replace-svg', true);
	
	
	
	
	//新規会員申請ファイルアップロード
	const formInputs = document.getElementsByClassName("form_file");
	const length = formInputs.length;
	if(!length){
		return false;
	}
	for (let i = 0; i < length; i++) {
	  formInputs[i].onchange = function () {
	    const file = this.files[0].name;
	    const label = this.nextElementSibling;
	    if (!label.classList.contains("uploaded")) {
	      const span = document.createElement("div");
	      span.className = "form_file_text";
	      this.parentNode.appendChild(span);
	      label.classList.add("uploaded");
	    }
	    label.nextElementSibling.innerHTML = file;
	  };
	}
	
	
	//発送先処理
	const checkShipping = document.getElementById('check_shipping')
	const checkZip =  document.getElementById('check_zip')
	const checkPrefecture =  document.getElementById('check_prefecture')
	const checkAddress =  document.getElementById('check_address')
	
	
	const shippingAddress = function(){
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