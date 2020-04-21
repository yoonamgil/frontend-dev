// DOM Level 2 Event 처리 : 특정 Element의 Event의 Listener를 등록 하는 방식 
// 특정 이벤트 핸들러(Listener)를 여러개 등록할 수 있다.
var TabBox = {
	init: function(){
		window.addEventListener('load', this._onWindowLoad);		
	},	
	_onWindowLoad: function(){
		var divTabBox = document.getElementsByClassName('tab-box')[0];
		var ulTabBox = divTabBox.childNodes[1];
		var liTabs = ulTabBox.getElementsByTagName('li');
		
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener('click', TabBox._onTabClicked);
		}
	},
	_onTabClicked: function(){
		//unselect
		var liSelecetds = document.getElementsByClassName('selected');
		(liSelecetds.length == 1) && (liSelecetds[0].className = '');		

		// seclect
		this.className = 'selected';
	}	
}