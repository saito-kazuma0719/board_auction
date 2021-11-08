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