/*
@svgjs
@version: 1.1
@author: Grant Kiely
@date: 21/6/14

Awesomeness
-Easy way to cache svg's
-Allows styling of svg
-Loads async

Todo
Perf-wise
-make just one queryselector call, slice to array and filter for each arr elem
	http://jsperf.com/find-children-vs-queryselectoral/3
-change innerHTML to doc fragment
	-First create a function that converts string to document fragment and test against inner
	http://jsperf.com/document-fragment-vs-innerhtml-vs-looped-appendchild
-Make it work in every browser and fallback to png for ie using image.vida.io?
http://stackoverflow.com/questions/3975499/convert-svg-to-image-jpeg-png-etc-in-the-browser
-Checkout <svg> <img /> </svg for fallback


//Instructions
-Get svg code & put in arr
-Create div: <div data-svg="svg_class_here"></div>
-Put script in head <script async="js/svg.js" async></script>
*/


var SVGJS = (function(){

	var arr = [
		'<svg class="svg-home" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="80" height="80" viewBox="0 0 80 80"><g id="icomoon-ignore"><line stroke-width="1" x1="" y1="" x2="" y2="" stroke="#449FDB" opacity=""/></g><path d="M80 47.5l-15-15v-22.5h-10v12.5l-15-15-40 40v2.5h10v25h25v-15h10v15h25v-25h10z" fill="#ffffff"/></svg>'
	];

	var div = document.createElement('div'),
		nl=[]; //nodelist

	function init(){
		var list, ll, sel,
			l = arr.length;


		//check for data-svg and place svg
		for(var i =0; i<l; i++){
			div.innerHTML = arr[i];
			nl.push(div.firstChild);

			sel = (div.firstChild.classList ?  div.firstChild.classList[0] : false) || div.firstChild.className.animVal || div.firstChild.id;

			list = document.querySelectorAll('[data-svg="'+sel+'"]');
			if(!list.length){
				cwarn('no dom node found');
			}

			ll = list.length;
			for(var j=0; j<ll; j++){
				list[j].appendChild(div.firstChild.cloneNode(true));
			}
		}
	}

	//Initialise
	var ready = document.readyState;
	if(ready === "complete" || ready ==="interactive"){
		init();
	}
	else{
		document.addEventListener("DOMContentLoaded", init);
	}

	return{
		load: function(node){
			var sel;
			if(typeof node === 'string')
				node = document.querySelector(node);

			var val = node.getAttribute('data-svg');
			for(var i =0; i< nl.length; i++){
				sel = (nl[i].classList ?  nl[i].classList[0] : false) || nl[i].className.animVal;
				if(~sel.indexOf(val)){
					return node.appendChild(nl[i]);
				}

			}
		}
	}
	
})();