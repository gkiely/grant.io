(function(){

	var DOM ={
		body: _q('body'),
		overlay: _q('.overlay'),
		html: _q('html'),
		workWrapper: _q('.workWrapper')
	};


	var posBubbles={}, ctaHover = false;

	var bubble = b = (function(){
		var objC, delay=0, lastDelay;
		var dist = 110;

		return{
			create: function(obj){
				obj = obj || {};
				objC = objC || obj;
				lastDelay = lastDelay || obj.delay;
				delay = obj.delay || lastDelay;

				for(var i in obj){
					objC[i] = obj[i];
				}
				for(var i in objC){
					if(!obj.hasOwnProperty(i)){
						obj[i] = objC[i];
					}
				}

				var el = _q('.unused', 0);
				el.css({
					height: obj.size + 'em',
					width: obj.size + 'em',
					'background': 'rgba(' + obj.color + ')',
					'left': obj.position[0] + '%',
					'top': obj.position[1] + '%'
				}).removeClass('unused').addClass('bubble');


				var elpos = el.pos();
				//clog(elpos.x);
				//clog(window.innerWidth * (obj.position[0] * 0.01))
				//The only way to speed this up is to change to pixel vals,
				//or attach a div, give it an em width, see how big it is in pixels.

				var id = this.savePos({
					el: el, 
					left: elpos.x + elpos.width / 2, 
					top: elpos.y + elpos.height / 2, 
					size: obj.size,
					tm: [0,0]
				});

				
				setTimeout(function(){
					//This triggers the scale to full size
					el.addClass('anim');
					setTimeout(function(){
						//This allows faster bubble movment
						posBubbles[id].ready = true;
						el.addClass('postAnim');
					}, 1200);
				},delay);
				
				

				return this;
			},
			_genStr: function(c){
				var str='';
				while(c-- >0){
					str+='i';
				}
				return str;
			},
			savePos: function(o, c){
				c = c || 0;
				var iStr = this._genStr(c),
					id = Math.floor(o.left) + iStr; //save's duplicate prop with 'i'
				if(!posBubbles[id]){
					posBubbles[id] = {el: o.el, y: o.top, size: o.size, canMove: 1, tm: o.tm, ready: o.ready};
				}
				else {
					id = this.savePos(o, ++c);
				}
				return id;
			},
			searchPos: function(x,y){
				var r1, r2, p, arr=[];
				for(var i in posBubbles){
					if(posBubbles[i].ready){
						//remove any i's from prop name
						p = +i.replace(/i/g, '');
						r1 = p-dist;
						r2 = p+dist;
						//in range of x
						if(x > r1 && x < r2){
							r1 = posBubbles[i].y -dist;
							r2 = posBubbles[i].y +dist;
							//it is in range of x & y
							if(y > r1 && y < r2){
								//use x & y
								//use i and posBubbles[i]
								arr.push({i: i, el: posBubbles[i].el, x: p, y: posBubbles[i].y, size: posBubbles[i].size, canMove: posBubbles[i].canMove});
								//this.whereto(x, y, i, posBubbles[i]);
							}
						}
					}
				}
				return arr;
			},
			whereto: function(x, y, bx, by){

			},
			move: function(){

			},
			getObj: function(){
				clog(posBubbles);
			},
			finish: function(f){
				delay = delay || 1500;
				setTimeout(f, delay);
			}
		}
	})();



	var timerFlag = 1;
	//var tm=[0,0]; //translate memory, translate always positions to the elem's original position
	document.body.onmousemove = function(e){
		/*
		every 50ms, get mouse pos
		search obj with vals 30 px either side
		*/

		var mouse = gk.mousePos(e);
		mouseMove(mouse);
		
	}


	function mouseMove(mouse){
		var arr = b.searchPos(mouse.x, mouse.y),
			arrLength = arr.length;
		if(arrLength){
			for (var i = 0; i < arrLength; i++) {
				if(arr[i].canMove){
					var name = arr[i].i;

					var nextPos = gnp({elem: [arr[i].x,arr[i].y], mouse: [mouse.x, mouse.y]}, false); //set debug markers
					//if nextPos x or y are <0, we animate to edge of screen, and then setTimeout to bounce back.

					var el = arr[i].el;

					//Store translate in memory, (as translate positions to the elem's orig pos)
					var tm = posBubbles[name].tm;
					tm = [tm[0] + nextPos.x, tm[1] + nextPos.y];
					posBubbles[name].tm = tm;

					moveElems(el, tm);
					

					//pos() is the biggest perf hit so far, remove that shyt
					//can be improved by returning new loc from gnp
					//Should be improved

					(function(j, el){
						setTimeout(function(){
							//REPAINT
							var elpos = el.pos();

							savePos(el, elpos, arr[j].i)
							
							setTimeout(function(){
								if(!ctaHover){
									el.addClass('grey');
								}
							},330);
							
						}, 600);
					})(i, el);
					//postpone any movement on this bubble object
					posBubbles[name].canMove = 0;
				}
			};
		}
	}

	function moveElems(el, tm){
		el.removeClass('grey');
		var css = {};
		
		css[gk.prefix + (gk.prefix ? 'Transform' : 'transform') ] = 'translateX('+ tm[0] +'px) translateY(' + tm[1] +'px)';
		el.css(css);
	}

	function savePos(el, elpos, prop){
		var temp = posBubbles[prop];
		delete posBubbles[prop];
		bubble.savePos({
			el: el, 
			left: elpos.x + elpos.width / 2, 
			top: elpos.y + elpos.height /2, 
			size: temp.size,
			tm: temp.tm,
			ready: true
		});
	}


	



	//create an array of cool colours, and allow bubble gen to pick from them
	var cc = ['87, 221, 130', '251, 131, 27', '9, 150, 255', '235, 246, 102', '34, 212, 206', '84, 250, 100', '212, 45, 107', '19, 214, 93', 
		'26, 152, 227',
		'212, 45, 107',
		'22, 151, 87',
		'255, 52, 45',
		'51, 223, 104',
		'44, 228, 163',
		'87, 221, 130',
		'253, 161, 8',
		'252, 17, 78', '210, 6, 39', '182, 104, 98', '166, 11, 78',
		'136, 228, 231', '29, 248, 71', '182, 216, 16',
		'254, 207, 64',
		'52, 250, 70',
		'254, 185, 22', '91, 254, 109', '10, 237, 145',
		'221, 6, 50', '8, 161, 192', '243, 247, 92', '211, 60, 134', '49, 151, 205',
		'26, 228, 92', '122, 244, 106', '245, 75, 31'
	];

	function rand(min, max, min2, max2){
		if(min2 && max2){
			if(Math.floor(Math.random() *4) ===1) {max = max2; min =min2;}
		}
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function gnp(o, debug){
		if(!debug) createElem = function(){};

		var x, y,
			mx = o.mouse[0],
			my = o.mouse[1],
			ex = o.elem[0],
			ey = o.elem[1],
			val = 130,
			ang = (ex - mx);

		createElem(mx, my);
		createElem(ex, ey, 'DarkSalmon');

		//This accounts for straight up and down
		if(ang === 0) {
			ang = ey - my;
			if(ang < 0){
				y = ey -val;
				x = ex;
				createElem(x,y, 'yellow');
				return {x: 0, y: -val, pos:[x,y]}
			}
			else{
				y = ey + val;
				x = ex;
				createElem(x,y, 'yellow');
				return {x: 0, y: val, pos:[x,y]}
			}
		}
		else{
			var angLeftAbove;
			if(ang > 1) angLeftAbove =1;
			
			ang = (ey - my) / ang;
			if(ang >1){
				if(angLeftAbove){
					y = ey + val;
					x = ex + (val / ang);
					createElem(x,y, 'DarkViolet');
					return {x: val/ang, y:val, pos:[x,y]}
				}
				else{
					ang = (ey -my) / (ex - mx);
					y = ey - val;
					x = ex - (val/ ang);
					createElem(x,y, 'DarkViolet');
					return {x: -(val/ang), y: -val, pos:[x,y]}
				}
			}
		}

		
		//If this happens we need to switch
		if(ang < -1){
			ang = (ex - mx) / (ey-my);
			if(mx < ex && my > ey){
				// for angle type '/', mouse below
				y = ey - val;
				x = ex - val * ang;
				
				createElem(x,y, 'orange');
				return {x: -val * ang, y: -val, pos:[x,y]}
				//return {x:x, y:y}
			}
			
			y = ey + val;
			x = ex + val * ang;
			createElem(x,y, 'aqua');
			return {x: val*ang, y: val, pos:[x,y]}
			//return {x: x, y: y};
		}			
		if(mx <= ex){
			x = ex + val;
			y = ey + val * ang;
			
			createElem(x,y, 'fuchsia');
			return {x: val, y: val*ang, pos:[x,y]}
		}
		else{
			x = ex + -val;
			y = ey + -val * ang;
			
			createElem(x,y, 'blue');
			return {x: -val, y: -val*ang, pos:[x,y]}
		}
	}

	function createElem(x,y,c){
		var d = document.createElement('div');
		d.style.height = '5px';
		d.style.width = '5px';
		d.style.position = 'absolute';
		d.style.left = x + 'px';
		d.style.top = y + 'px';
		d.style.backgroundColor = c || 'red';
		d.className = "marker";
		document.body.appendChild(d);

	}




	//========= Init stuff ==========//
	function bubbleGen(p, px, s, d){
		var posX = rand(p,px);
		var posY;
		var size = rand(2, 9);
		if(posX > 60 && Math.floor(Math.random() *4) ===1){
			posY = rand(50,85);
		}
		else if(size > 7){
			posY = rand(-5,40, 90, 95);
		}
		else{
			posY = rand(-5,45, 90, 95);
		}

		b.create({
			size: size,
			position: [posX, posY],
			delay: rand(1,d),
			//color: '' + rand(1,255) + ',' + rand(1,255) + ',' + rand(1,255) + ',0.8'
			color: cc[rand(0, cc.length -1)] + ', 0.8'
		})
	}

	function init(){
		//These are temporary, should be sorted in bubbleGen as IIFE
		var j;
		var s, d;
		var ww = window.innerWidth;
		//desktop

		if(ww>600){
			if(ww > 800){
			 j = Math.floor(ww / 22);
			 d = 2920;
			}
			else{
				j = Math.floor(ww / 17);
				d = 2700;
			} 
			s = 2;
			
		}
		//mobile
		else{
			j = Math.floor(ww / 16);
			s=3;
			d = 4000;
		}


		var p, px;
		if(ww<400){
			p = -18;
			px = 88;
		} 
		else{
			p = -5;
			px = 95;
		} 

		for(var i = 0; i<j; i++){
			bubbleGen(p, px, s, d);
		}
	}

	setTimeout(init, 500);





	//
	//Image Carousel
	//*Note that the 'trans' time must be included as a css class (.fadeOut1500)
	//
	var carousel = (function(){
		var arr, l, that, hdiff, delay, trans, timer1, timer2;

		return{
			_rotate: function(c, n){
				if(this._running){
					timer1 = setTimeout(function(){
						//remove hide next elem, it is now visible behind el
						arr.i(n).removeClass('hide');
						//fade out current el
						arr.i(c).addClass('fadeOut' + trans || 1500);


						timer2 = setTimeout(function(){
							//hide curent el
							arr.i(c).removeClass('current fadeOut' + trans || 1500).addClass('next hide');
							//purely for meta reasons
							arr.i(n).addClass('current').removeClass('next');
							
							//just restarted
							if(n==0){
								that._rotate(0, 1);
							}
							//normal
							else if(c+2 < l){
								that._rotate(++c, c+1);
							}
							//restart
							else{
								that._rotate(n, 0);

							}
						}, 1200);
					}, delay || 3000);
				}
				
			},
			_heightDiff:function(arr){
				var h = arr[0].height;
				for (var i = 0; i < arr.length; i++) {
					if(h !== arr[i].height) return true;
				}
			},
			reset: function(){
				arr.removeClass('current').addClass('next hide');
				arr.i(0).removeClass('next hide').addClass('current');
			},
			_running:false,
			start: function(imgs, delayArg, transition){
				arr = imgs;
				l = arr.length;
				that = that || this;
				delay = delayArg;
				trans = transition;
				//this could be used to determine diff img heights, and fade transition the bottom browser bar
				//hdiff = this._heightDiff(arr.nodes);
				this._running = true;
				this.reset();
				this._rotate(0,1);
				
			},
			stop: function(){
				this._running = false;
				clearTimeout(timer1);
				clearTimeout(timer2);
			}
		}
	})();
	

	var btnCTA = _q('.gradChanging');
	var fadeToGrey = true;
	
	//Fade in anims for title & cta button
	var title = _q('.title');
	var body = DOM.body;

	setTimeout(function(){
		title.addClass('titleView');
	}, 540);

	setTimeout(function(){
		btnCTA.addClass('visible');
	}, 2700);
	

	//CTA click
	var ww = _q('.workWrapper'),
		bg = _q('.bg');
	btnCTA.click(function(){
		window.location.hash = 'work';
	});

	

	var url = window.location.href;
	var refHash = /#work$/.test(url) ||
		/#aud$/.test(url) ||
		/#lyl$/.test(url) ||
		/#nbn$/.test(url) ||
		/#uow$/.test(url) ||
		/#amp$/.test(url) ||
		/#spr$/.test(url) ||
		/#lep$/.test(url) ||
		/#forza$/.test(url) ||
		/#whalr$/.test(url) ||
		/#soundapt$/.test(url) ||
		/#pj$/.test(url) ||
		/#joelfolio$/.test(url);


	if(refHash){
		var hash = window.location.hash;
		if(/#work$/.test(url)){
			window.location.hash = hash + ',';
			window.location.hash = hash;
		}
		else{
			title.addClass('fadeOut');
			body.addClass('hideBubbles');
			ww.removeClass('hide');
			body.addClass('rad');
			ww.addClass('op1');
			bg.addClass('op0');
			gk.timer(function(){
				DOM.body = body.removeClass('ovh');
				DOM.html.removeClass('ovh');
			},500);
			showOverlay(hash);
		}
		
	}

	window.onhashchange = function(){
		var hash = window.location.hash;
		if(hash === "#work") {
			animWorkPage();
		}
		else if(hash.length > 1){
			showOverlay(hash);
			gk.timer(function(){
				if(DOM.el)
					DOM.el.node().removeAttribute('style');
			}, 800);
		}
	}

	/*
	//Hover
	btnCTA.hover(ctaHoverOver, ctaHoverOut);

	function ctaHoverOver(){
		ctaHover = true;
		for(var i in posBubbles){
			posBubbles[i].el.removeClass('grey');
		}
	}
	function ctaHoverOut(){
		ctaHover = false;
		if(fadeToGrey){
			for(var i in posBubbles){
				posBubbles[i].el.addClass('grey');
			}
		}
	}
	*/

	var tile = _q('.tile');

	tile.hover(function(e, node, el){
		tile.removeClass('op1');
		el.addClass('op1');
		//tile.addClass('op5');
	},function(){
		//tile.removeClass('op5');
	});

	
	tile.click(function(e, node, el){
		DOM.notEl = _q('.tile:not(.op1)').addClass('op0');
		DOM.el = el.addClass('noBS'); //stops box shadow on hover
		var cent = {x:window.innerWidth / 2, y: window.innerHeight / 2 + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) };
		


		gk.timer(function(){
			el.addClass('moveToCentre');
			var pos = el.pos();
			//means its to the left
			pos.x = cent.x - pos.x - pos.width / 2;
			pos.y = cent.y - pos.y - pos.height / 2 - document.body.scrollTop;
			
			var css = {};
			css[gk.prefix + (gk.prefix ? 'Transform' : 'transform')] = 'translateX('+ pos.x +'px) translateY(' + pos.y +'px)';
			el.css(css);

			el.removeClass('pointer');
		}, 300)
		.timer(function(){
			el.addClass('op0');
			//fade in overlay
			window.location.hash = el.data('tile'); //calls showOverlay
		}, 1500);
	});


	function showOverlay(hash){	
		var c, ol;
		//reset overlays
		DOM.overlay.addClass('hide').removeClass('fadeOut1300');
		DOM.curOverlay = ol = DOM.overlay.find('[data-tile="' + hash.slice(1) + '"]', 0);
		//carousel.stop();
		
		if( (c = ol.find('.carousel img')).length >1 ){
			carousel.start(c, 4500, 1300);
		}

		//fadeout workwrapper
		gk.timer(function(){
			DOM.workWrapper.addClass('hide');
			ol.removeClass('hide');
		}, 800)
		.timer(function(){
			//fade in
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			ol.addClass('fadeIn1500');
		}, 1000);
	}

	var firstAnim =1;
	function animWorkPage(){
		if(firstAnim){
			fadeToGrey = false;
			title.addClass('fadeOut');
			body.addClass('fadeBubbles');
			body.addClass('rad');
			firstAnim=0;

			//iPhone has ovh set to visible, as doesn't have bubbles set to visible.
			if(!gk.isMobile){
				setTimeout(function(){
					DOM.body = body.removeClass('ovh');
					DOM.html.removeClass('ovh');
				}, 600);
			}

			setTimeout(function(){
				bg.addClass('op0');
			}, 900);
		}
		else{
			carousel.stop();
		}

		
		ww.addClass('op0').removeClass('fadeIn1500 hide');
		
		
		gk.timer(function(){
			
			ww.addClass('fadeIn1500');
			//Causes flash in iPhone, not needed
			if(!gk.isMobile){
				title.addClass('hide');
				body.addClass('hideBubbles');
			}
		}, firstAnim ? 1500 : 500);
	}
	function hideOverlay(){
		if(!DOM.el) DOM.el = _q('.moveToCentre');
		if(!DOM.notEl) DOM.notEl = _q('.tile:not(.moveToCentre)');

		//Fix up tiles
		DOM.el.removeClass('.moveToCentre op0 noBS op1').addClass('pointer');
		DOM.notEl.removeClass('op0');

		DOM.curOverlay.addClass('fadeOut1300');
	}


	_q(document.body).click(function(e, node){
		var el,
			cls = node.className;
		if(cls === 'cancel' || cls === 'close'){
			hideOverlay();
			gk.timer(function(){
				window.location.hash = '#work';
				DOM.overlay.addClass('hide');
			}, 1000);
		}
		else if( (el = _q(node)).matches('.icon')){
			if(el.hasClass('btnNext'))
				window.location.hash = el.parent().parent().next().data('tile');
			else
				window.location.hash = el.parent().parent().prev().data('tile');
		}
	});





	//current things to address
	/*	

		BUGS
		-Firefox/IE11 click on spritly tile (scroll issue)
		-carousel transition size
		-IE9 doesn't work
		-MOBILE: click on tile, click back it goes to top. Should be an overlay.

		-Add appropriate meta tags

		PERF
		Try to remove pos()'s
		-Get rid of delete from posBubbles, instead set val to undefined and check that

		I kind of think the grey thing is lame, think it would look better
		they are just colour.
		Do a field test, adjust accordingly. FUCK the CTA, do what feels right.

		This type of nifty anim: http://designmodo.com/startup/#samples
		-portfolio page: make it usable
		
		-remove first pos(), as it is a 500ms delay on load
			calculate position using % and width/height of window

		-don't allow to go off screen
		-view work hover, moves any bubbles away from name
			Could move the mousemove into function & call with
			mouse 4 or 5 mouse positions
		-Above would also help with tap on mobile devices

		-update searchPos to work with pi
		-Resize: after resize, update all bubble positions.
				OR: change all vals to %?
		
		-make it move faster the closer you move to it
		-Different movement for different sizes?

	*/
})();


// load images
window.onload = function(){
	setTimeout(function(){
		_q('img[data-src]').load();
	}, 1500)
}