// JavaScript Document
	var preloadImages = ['images/img_01.jpg','images/img_02.html','images/img_03.html','images/img_04.jpg'];
	var imgs = [];
	for(var i=0;i<preloadImages.length;i++){
		imgs[i] = new Image();
		imgs[i].src = preloadImages[i];
	} 
	
	$(document).ready(function(){
		$('#showimg').cycle({
			delay: -2000,
			timeout: 4000,
			pager: '#pager',
			pagerAnchorBuilder: function(idx, slide) {
       		 return '#pager li:eq(' + idx + ') a';
    		},
			pagerEvent:'mouseover'
		}); 
	});