"use strict";

var clog = (function () {
  if (window.console && ~window.location.host.indexOf("localhost")) return function clog(val) {
    console.log(val);
  };else return function clog() {};
})();


// Class Code
// ========

// @desc: set's properties for object passed in
function setProps(_this, inst) {
  for (var i in inst) {
    _this[i] = inst[i];
  }
}

//@desc: set's properties to instance, calls init function if present
// if third param: calls checkReqs
function setPropsAndInit(_this, inst, req) {
  if (req) {
    checkReqs(req, inst);
  }
  setProps(_this, inst);
  if (typeof inst.init === "function") {
    inst.init.apply(_this);
  }
}

// @desc: checks requirements for class object
function checkReqs(reqs, inst) {
  if (inst) {
    for (var i in reqs) {
      if (inst.hasOwnProperty(i)) {
        if (!reqs[i](inst[i])) {
          throw new Error("Type Error for property: " + i);
        }
      } else {
        throw new Error("Class instance is missing the property: " + i);
      }
    }
  } else {
    throw new Error("You did not include an object in your class instance.");
  }
}

var type = {
  $: function () {},
  arr: function (arr) {
    return Array.isArray(arr);
  },
  bool: function (b) {
    return typeof b === "bool";
  },
  dom: function (node) {
    return node.nodeName ? true : false;
  },
  int: function (val) {
    return !isNaN(val);
  },
  str: function (s) {
    return typeof s === "string";
  },
  optional: function () {
    return true;
  }
};



window.UTIL = {};


//UTIL methods
(function () {
  //Detect mobile devices
  //updated: jun 22 2014
  //Check if new regex is being used
  //go here -> http://detectmobilebrowsers.com/
  //then here -> http://jsbeautifier.org/
  //copy what's between the if statement
  UTIL.isMobile = (function () {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    //also check's ipad
    if (/(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent)) return true;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
  })();


  UTIL.mobileFlag = /\?mobile/.test(window.location.href);

  var timer = {};
  var firstCall = {};

  UTIL.timer = function timer(func, time, amount) {
    clearTimeout(timer);
    var name, reg;

    // Find the function name
    if (Function.name) {
      name = func.name;
    } else {
      reg = func.toString().match(/^function\s*([^\s(]+)/);
      if (reg && reg[1]) {
        name = reg[1];
      }
    }

    // Set the timeout
    if (name) {
      timer[name] = setTimeout(func, time || 0);
    } else {
      name = "name";
      setTimeout(func, time || 0);
    }

    if (amount > 0) {
      if (!firstCall[name]) {
        firstCall[name] = true;
        --amount;
      }

      setTimeout(function () {
        UTIL.timer(func, time || 0, --amount);
      }, time || 0);
    }
  };
})();
"use strict";

;(function () {
	"use strict";




	if (window.$) {
		var $doc = $(document),
		    $win = $(window),
		    $body = $(document.body);
	}



	// Class Example code
	// ========

	// class Human {
	// 	constructor(inst){
	// 		setPropsAndInit(this, inst);	
	// 	}
	// }

	// let x = new Human({
	// 	name: 'grant',
	// 	age: 24,
	// 	init: function(){
	// 	  echo('yolo');
	// 	}
	// });



	// =======
	// Angular
	// =======
	var app = angular.module("app", ["ngRoute"]);


	/**
  * Router
  */
	app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		// $locationProvider.hashPrefix('!');
		// $locationProvider.html5Mode(true);
		function setUrl(args) {
			return args.pageName + ".html";
		}

		$routeProvider.when("/", {
			templateUrl: "creative.html"
		}).when("/banner-upload", {
			rootScopeData: {
				title: "Creative"
			},
			templateUrl: "banner-upload.html" }).when("/banner-upload-client", {
			data: {
				client: true
			},
			templateUrl: "banner-upload.html"
		}).when("/:pageName", {
			templateUrl: setUrl
		});
	}]);


	/**
  * Filters
  */

	app.filter("capitalize", function () {
		return function (input, all) {
			return !!input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : "";
		};
	});

	/**
  * Directives
  */
	app.directive("verticalAlign", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: "<div class=\"table\"><div class=\"cell\" ng-transclude></div></div>"
		};
	});

	/**
  * Angular's init funciton
  */
	app.run(["$rootScope", "$animate", function ($rootScope, $animate) {
		$rootScope.isMobile = UTIL.isMobile;
		if (UTIL.isMobile) {}

		// Handle Authentication
		$rootScope.$on("$routeChangeStart", function (e, current, prev) {
			var route = current.$$route;

			// Updates title in left nav
			$rootScope.data = route.rootScopeData;

			if ($rootScope.data && $rootScope.data.rootScopeData) {
				$rootScope.pageTitle = route.rootScopeData.title;
			}

			// Authenticate currentUser
			if (route.requireLogin && !$rootScope.currentUser) {
				e.preventDefault();
				// clog(route.originalPath);
				$location.url("/" + "login");
			}
		});
	}]);


	/**
  * Controller
  */
	app.controller("Main", ["$rootScope", "$scope", "$timeout", "$location", function ($rootScope, $scope, $timeout, $location) {
		// Scope Reliant functions
		// =======================

		// This guy allows you to update the controller's scope from jquery or native dom events
		// by calling $scope.$emit('updateScope')
		// $digest as opposed to $apply is more efficient as it only updates the current scope
		// http://www.binpress.com/tutorial/speeding-up-angular-js-with-simple-optimizations/135
		// @params: pass fullDigest for things like $location or things in different scopes.
		$scope.$on("updateScope", function (e, fullDigest) {
			if (fullDigest) {
				$scope.$apply();
			} else {
				$scope.$digest();
			}
		});



		// Pure functions
		// ==============

		/**
   * Sets a one item in an array to active, set's others to false.
   * @param {obj} item
   * @param {Array} list
   */
		var setActive = function (item, list) {
			list.some(function (item) {
				if (item.active) {
					return item.active = false;
				}
			});
			return item.active = true;
		};

		/**
   * Returns a filtered array
   * @param  {string} key 						Obj property name
   * @param  {any} val 								Expected object prop value
   * @param  {Array of Objects} arr 	The original unfiltered array
   * @return {Array of Objects}	  		filtered array based on conditions
   */
		var filterItems = function (key, val, arr) {
			return arr.filter(function (el) {
				return el[key] === val;
			});
		};




	}]);
	// ==== End of Angular ====









})();
// requireLogin: true
// Switch off ng-animate for title animations for ios, they are too delayed.
// $animate.enabled(false);
"use strict";

///////////////
// POLYFILLS //
///////////////

//=== trim ===//
if (typeof String.prototype.trim !== "function") {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  };
}

if (typeof Object.create != "function") {
  (function () {
    var F = function () {};
    Object.create = function (o) {
      if (arguments.length > 1) {
        throw Error("Second argument not supported");
      }
      if (o === null) {
        throw Error("Cannot set a null [[Prototype]]");
      }
      if (typeof o != "object") {
        throw TypeError("Argument must be an object");
      }
      F.prototype = o;
      return new F();
    };
  })();
}


//=== classList ===//
(function () {
  if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

  var prototype = Array.prototype,
      push = prototype.push,
      splice = prototype.splice,
      join = prototype.join;

  function DOMTokenList(el) {
    this.el = el;
    // The className needs to be trimmed and split on whitespace
    // to retrieve a list of classes.
    var classes = el.className.replace(/^\s+|\s+$/g, "").split(/\s+/);
    for (var i = 0; i < classes.length; i++) {
      push.call(this, classes[i]);
    }
  };

  DOMTokenList.prototype = {
    add: function (token) {
      if (this.contains(token)) return;
      push.call(this, token);
      this.el.className = this.toString();
    },
    contains: function (token) {
      return this.el.className.indexOf(token) != -1;
    },
    item: function (index) {
      return this[index] || null;
    },
    remove: function (token) {
      if (!this.contains(token)) return;
      for (var i = 0; i < this.length; i++) {
        if (this[i] == token) break;
      }
      splice.call(this, i, 1);
      this.el.className = this.toString();
    },
    toString: function () {
      return join.call(this, " ");
    },
    toggle: function (token) {
      if (!this.contains(token)) {
        this.add(token);
      } else {
        this.remove(token);
      }

      return this.contains(token);
    }
  };

  window.DOMTokenList = DOMTokenList;

  function defineElementGetter(obj, prop, getter) {
    if (Object.defineProperty) {
      Object.defineProperty(obj, prop, {
        get: getter
      });
    } else {
      obj.__defineGetter__(prop, getter);
    }
  }

  defineElementGetter(Element.prototype, "classList", function () {
    return new DOMTokenList(this);
  });
})();
//===== end of classlist ====//



//===== array indexOf =====//
if (!("indexOf" in Array.prototype)) {
  Array.prototype.indexOf = function (find, i /*opt*/) {
    if (i === undefined) i = 0;
    if (i < 0) i += this.length;
    if (i < 0) i = 0;
    for (var n = this.length; i < n; i++) if (i in this && this[i] === find) return i;
    return -1;
  };
}





//=== getElementsByClassName ===//
if (!document.getElementsByClassName) {
  document.getElementsByClassName = function (search) {
    var d = document,
        elements,
        pattern,
        i,
        results = [];
    if (d.querySelectorAll) {
      // IE8
      return d.querySelectorAll("." + search);
    }
    if (d.evaluate) {
      // IE6, IE7
      pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
      elements = d.evaluate(pattern, d, null, 0, null);
      while (i = elements.iterateNext()) {
        results.push(i);
      }
    } else {
      elements = d.getElementsByTagName("*");
      pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
      for (i = 0; i < elements.length; i++) {
        if (pattern.test(elements[i].className)) {
          results.push(elements[i]);
        }
      }
    }
    return results;
  };
}
//# sourceMappingURL=app.js.map