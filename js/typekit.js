/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"b":"//use.typekit.net/badges/default.gif","bu":"https://typekit.com/colophons/gca5rdp","c":[".tk-europa","\"europa\",sans-serif"],"f":"//use.typekit.net/c/d48887/europa:n4.X9J:P:2/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bf7135b2a62c569a8ddca988f707fda98c33bd8422c9b91cdd880e8a4820fe23f236f3141e14dedf8bdafea1c44e82186a69ce90192d5c454a735e349eb6c5363788674f7859559c55ec0ff75654f85746b373fa1761ca77f364e37113ee1ee74c8971515f088bcddda6d2c2c","fn":["europa",["n4"]],"k":"//use.typekit.net/{id}.js","p":"//p.typekit.net/p.gif?s=1&k=gca5rdp&ht=tk&h={host}&f=15530&a=1171147&_={_}","w":"gca5rdp"};
/*{"k":"1.8.3","created":"2014-05-07 13:43:26 UTC"}*/
;(function(window,document,undefined){
var j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}var aa=this;function ba(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return n.apply(k,arguments)}var ea=Date.now||function(){return+new Date};
function fa(a,b){this.ea=a;this.W=b||a;this.A=this.W.document}fa.prototype.createElement=function(a,b,c){a=this.A.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.A.createTextNode(c));return a};function q(a,b,c){a=a.A.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ga(a,b){function c(){a.A.body?b():setTimeout(c,0)}c()}
function r(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=l,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=j;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=l;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=j;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ha(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return l}
function s(a){var b=a.W.location.protocol;"about:"==b&&(b=a.ea.location.protocol);return"https:"===("https:"==b?"https:":"http:")}
function ia(a,b,c){var d=a.A.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=l;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=j,c&&c(k),e.onload=e.onreadystatechange=k,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e);window.setTimeout(function(){f||(f=j,c&&c(Error("Script load timeout")))},5E3)}}function t(a,b,c){this.Xa=a;this.ha=b;this.Wa=c}
ba("internalWebfont.BrowserInfo",t);t.prototype.Ka=m("Xa");t.prototype.hasWebFontSupport=t.prototype.Ka;t.prototype.La=m("ha");t.prototype.hasWebKitFallbackBug=t.prototype.La;t.prototype.Ma=m("Wa");t.prototype.hasWebKitMetricsBug=t.prototype.Ma;function u(a,b,c,d){this.g=a!=k?a:k;this.o=b!=k?b:k;this.K=c!=k?c:k;this.h=d!=k?d:k}var ja=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
function v(a,b){return a.g>b.g||a.g===b.g&&a.o>b.o||a.g===b.g&&a.o===b.o&&a.K>b.K?1:a.g<b.g||a.g===b.g&&a.o<b.o||a.g===b.g&&a.o===b.o&&a.K<b.K?-1:0}function w(a,b){return 0===v(a,b)||1===v(a,b)}u.prototype.toString=function(){return[this.g,this.o||"",this.K||"",this.h||""].join("")};
function x(a){a=ja.exec(a);var b=k,c=k,d=k,e=k;a&&(a[1]!==k&&a[1]&&(b=parseInt(a[1],10)),a[2]!==k&&a[2]&&(c=parseInt(a[2],10)),a[3]!==k&&a[3]&&(d=parseInt(a[3],10)),a[4]!==k&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new u(b,c,d,e)}function y(a,b,c,d,e,f,g,h,p,L,E){this.X=a;this.q=b;this.Va=c;this.C=d;this.G=e;this.Aa=f;this.n=g;this.m=h;this.Ra=p;this.T=L;this.B=E}ba("internalWebfont.UserAgent",y);y.prototype.getName=m("X");y.prototype.getName=y.prototype.getName;
y.prototype.Ja=m("Va");y.prototype.getVersion=y.prototype.Ja;y.prototype.Fa=m("C");y.prototype.getEngine=y.prototype.Fa;y.prototype.Ga=m("Aa");y.prototype.getEngineVersion=y.prototype.Ga;y.prototype.Ha=m("n");y.prototype.getPlatform=y.prototype.Ha;y.prototype.Ia=m("Ra");y.prototype.getPlatformVersion=y.prototype.Ia;y.prototype.Ea=m("T");y.prototype.getDocumentMode=y.prototype.Ea;y.prototype.Da=m("B");y.prototype.getBrowserInfo=y.prototype.Da;function ma(a,b){this.e=a;this.S=b}
var na=new y("Unknown",new u,"Unknown","Unknown",new u,"Unknown","Unknown",new u,"Unknown",void 0,new t(l,l,l));
ma.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")||-1!=this.e.indexOf("Trident/")){a=z(this);var b=A(this),c=x(b),d=k,e=k,f=k,g=k,h=B(this.e,/Trident\/([\d\w\.]+)/,1),p=C(this.S),d=-1!=this.e.indexOf("MSIE")?B(this.e,/MSIE ([\d\w\.]+)/,1):B(this.e,/rv:([\d\w\.]+)/,1),e=x(d);""!=h?(f="Trident",g=x(h)):(f="Unknown",g=new u,h="Unknown");a=new y("MSIE",e,d,f,g,h,a,c,b,p,new t("Windows"==a&&6<=e.g||"Windows Phone"==a&&8<=c.g,l,l))}else if(-1!=this.e.indexOf("Opera"))a:if(a="Unknown",b=
B(this.e,/Presto\/([\d\w\.]+)/,1),c=x(b),d=A(this),e=x(d),f=C(this.S),c.g!==k?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=B(this.e,/rv:([^\)]+)/,1),c=x(b)),-1!=this.e.indexOf("Opera Mini/"))g=B(this.e,/Opera Mini\/([\d\.]+)/,1),h=x(g),a=new y("OperaMini",h,g,a,c,b,z(this),e,d,f,new t(l,l,l));else{if(-1!=this.e.indexOf("Version/")&&(g=B(this.e,/Version\/([\d\.]+)/,1),h=x(g),h.g!==k)){a=new y("Opera",h,g,a,c,b,z(this),e,d,f,new t(10<=h.g,l,l));break a}g=B(this.e,/Opera[\/ ]([\d\.]+)/,1);
h=x(g);a=h.g!==k?new y("Opera",h,g,a,c,b,z(this),e,d,f,new t(10<=h.g,l,l)):new y("Opera",new u,"Unknown",a,c,b,z(this),e,d,f,new t(l,l,l))}else/OPR\/[\d.]+/.test(this.e)?a=oa(this):/AppleWeb(K|k)it/.test(this.e)?a=oa(this):-1!=this.e.indexOf("Gecko")?(a="Unknown",b=new u,c="Unknown",d=A(this),e=x(d),f=l,-1!=this.e.indexOf("Firefox")?(a="Firefox",c=B(this.e,/Firefox\/([\d\w\.]+)/,1),b=x(c),f=3<=b.g&&5<=b.o):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),g=B(this.e,/rv:([^\)]+)/,1),h=x(g),f||(f=1<h.g||
1==h.g&&9<h.o||1==h.g&&9==h.o&&2<=h.K||g.match(/1\.9\.1b[123]/)!=k||g.match(/1\.9\.1\.[\d\.]+/)!=k),a=new y(a,b,c,"Gecko",h,g,z(this),e,d,C(this.S),new t(f,l,l))):a=na;return a};function z(a){var b=B(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=B(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function A(a){var b=B(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=B(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(b=B(a.e,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=B(a.e,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=B(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function oa(a){var b=z(a),c=A(a),d=x(c),e=B(a.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),f=x(e),g="Unknown",h=new u,p="Unknown",L=l;/OPR\/[\d.]+/.test(a.e)?g="Opera":-1!=a.e.indexOf("Chrome")||-1!=a.e.indexOf("CrMo")||-1!=a.e.indexOf("CriOS")?g="Chrome":/Silk\/\d/.test(a.e)?g="Silk":"BlackBerry"==b||"Android"==b?g="BuiltinBrowser":-1!=a.e.indexOf("PhantomJS")?g="PhantomJS":-1!=a.e.indexOf("Safari")?g="Safari":-1!=a.e.indexOf("AdobeAIR")?g="AdobeAIR":-1!=a.e.indexOf("PlayStation")&&(g="BuiltinBrowser");
"BuiltinBrowser"==g?p="Unknown":"Silk"==g?p=B(a.e,/Silk\/([\d\._]+)/,1):"Chrome"==g?p=B(a.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.e.indexOf("Version/")?p=B(a.e,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==g?p=B(a.e,/AdobeAIR\/([\d\.]+)/,1):"Opera"==g?p=B(a.e,/OPR\/([\d.]+)/,1):"PhantomJS"==g&&(p=B(a.e,/PhantomJS\/([\d.]+)/,1));h=x(p);L="AdobeAIR"==g?2<h.g||2==h.g&&5<=h.o:"BlackBerry"==b?10<=d.g:"Android"==b?2<d.g||2==d.g&&1<d.o:526<=f.g||525<=f.g&&13<=f.o;return new y(g,h,p,"AppleWebKit",f,e,b,d,c,C(a.S),
new t(L,536>f.g||536==f.g&&11>f.o,"iPhone"==b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function B(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function C(a){if(a.documentMode)return a.documentMode}function pa(a){this.Pa=a||"-"}pa.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Pa)};function qa(a,b,c){this.l=a;this.z=b;this.aa=c;this.s="wf";this.r=new pa("-")}
function ra(a){var b=ha(a.z,a.r.h(a.s,"active")),c=[],d=[a.r.h(a.s,"loading")];b||c.push(a.r.h(a.s,"inactive"));r(a.z,c,d);F(a,"inactive")}function F(a,b,c){if(a.aa[b])if(c)a.aa[b](c.getName(),G(c));else a.aa[b]()}function H(a,b){this.X=a;this.ia=4;this.Y="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Y=c[1],this.ia=parseInt(c[2],10))}H.prototype.getName=m("X");function G(a){return a.Y+a.ia}
function J(a,b){this.l=a;this.P=b;this.F=this.l.createElement("span",{"aria-hidden":"true"},this.P)}
function sa(a,b){var c;c=[];for(var d=b.X.split(/,\s*/),e=0;e<d.length;e++){var f=d[e].replace(/['"]/g,"");-1==f.indexOf(" ")?c.push(f):c.push("'"+f+"'")}c=c.join(",");d="normal";e=b.ia+"00";"o"===b.Y?d="oblique":"i"===b.Y&&(d="italic");a.F.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function ta(a){q(a.l,"body",a.F)}J.prototype.remove=function(){var a=this.F;a.parentNode&&a.parentNode.removeChild(a)};function ua(a,b,c,d,e,f,g,h){this.ja=a;this.Oa=b;this.l=c;this.D=d;this.P=h||"BESbswy";this.B=e;this.Q={};this.fa=f||5E3;this.ua=g||k;this.O=this.N=k;a=new J(this.l,this.P);ta(a);for(var p in K)K.hasOwnProperty(p)&&(sa(a,new H(K[p],G(this.D))),this.Q[K[p]]=a.F.offsetWidth);a.remove()}var K={eb:"serif",cb:"sans-serif",Za:"monospace"};
ua.prototype.start=function(){this.N=new J(this.l,this.P);ta(this.N);this.O=new J(this.l,this.P);ta(this.O);this.Ta=ea();sa(this.N,new H(this.D.getName()+",serif",G(this.D)));sa(this.O,new H(this.D.getName()+",sans-serif",G(this.D)));va(this)};function wa(a,b,c){for(var d in K)if(K.hasOwnProperty(d)&&b===a.Q[K[d]]&&c===a.Q[K[d]])return j;return l}
function va(a){var b=a.N.F.offsetWidth,c=a.O.F.offsetWidth;b===a.Q.serif&&c===a.Q["sans-serif"]||a.B.ha&&wa(a,b,c)?ea()-a.Ta>=a.fa?a.B.ha&&wa(a,b,c)&&(a.ua===k||a.ua.hasOwnProperty(a.D.getName()))?xa(a,a.ja):xa(a,a.Oa):setTimeout(n(function(){va(this)},a),25):xa(a,a.ja)}function xa(a,b){a.N.remove();a.O.remove();b(a.D)}function M(a,b,c,d){this.l=b;this.H=c;this.ca=0;this.xa=this.ra=l;this.fa=d;this.B=a.B}
M.prototype.ga=function(a,b,c,d){if(0===a.length&&d)ra(this.H);else{this.ca+=a.length;d&&(this.ra=d);for(d=0;d<a.length;d++){var e=a[d],f=b[e.getName()],g=this.H,h=e;r(g.z,[g.r.h(g.s,h.getName(),G(h).toString(),"loading")]);F(g,"fontloading",h);(new ua(n(this.Ba,this),n(this.Ca,this),this.l,e,this.B,this.fa,c,f)).start()}}};
M.prototype.Ba=function(a){var b=this.H;r(b.z,[b.r.h(b.s,a.getName(),G(a).toString(),"active")],[b.r.h(b.s,a.getName(),G(a).toString(),"loading"),b.r.h(b.s,a.getName(),G(a).toString(),"inactive")]);F(b,"fontactive",a);this.xa=j;ya(this)};M.prototype.Ca=function(a){var b=this.H,c=ha(b.z,b.r.h(b.s,a.getName(),G(a).toString(),"active")),d=[],e=[b.r.h(b.s,a.getName(),G(a).toString(),"loading")];c||d.push(b.r.h(b.s,a.getName(),G(a).toString(),"inactive"));r(b.z,d,e);F(b,"fontinactive",a);ya(this)};
function ya(a){0==--a.ca&&a.ra&&(a.xa?(a=a.H,r(a.z,[a.r.h(a.s,"active")],[a.r.h(a.s,"loading"),a.r.h(a.s,"inactive")]),F(a,"active")):ra(a.H))}function za(){var a=[{name:"font-family",value:N.c[i+1]}];this.Sa=[N.c[i]];this.na=a}function Aa(a){for(var b=a.Sa.join(","),c=[],d=0;d<a.na.length;d++){var e=a.na[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Ba(a){this.l=a}Ba.prototype.toString=function(){return encodeURIComponent(this.l.W.location.hostname||this.l.ea.location.hostname)};
function Ca(a,b){this.t=a;this.v=b}Ca.prototype.toString=function(){for(var a=[],b=0;b<this.v.length;b++)for(var c=this.v[b],d=c.I(),c=c.I(this.t),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=j;break a}f=l}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)c=a.slice(0>d-4?0:d-4,d),b.unshift(parseInt(c,2).toString(16));return b.join("")};function O(a){this.Ua=a}
O.prototype.h=function(a,b){var c=b||{},d=this.Ua.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Da(a,b,c,d){this.M=a;this.U=b;this.gb=c;this.hb=d;this.pa={};this.oa={}}Da.prototype.I=function(a){return a?(this.pa[a]||this.U).slice(0):this.U.slice(0)};Da.prototype.ga=function(a,b,c){var d=[],e={};Ea(this,b,d,e);a(d,e,c)};
function Ea(a,b,c,d){c.push(a.M);d[a.M]=a.I(b);a=a.oa[b]||[];for(b=0;b<a.length;b++){for(var e=a[b],f=e.M,g=l,h=0;h<c.length;h++)c[h]==f&&(g=j);g||(c.push(f),d[f]=e.I())}}function Fa(a,b){this.M=a;this.U=b}Fa.prototype.I=m("U");function Ga(){this.la=this.za=this.L=this.V=this.qa=j}function P(a){return"Windows"===a.n}function R(a){return P(a)&&0===v(a.m,new u(5,1))||P(a)&&0===v(a.m,new u(5,2))||P(a)&&0===v(a.m,new u(6,0))||P(a)&&w(a.m,new u(6,1))}
function S(a){return"Macintosh"===a.n&&(w(a.m,new u(10,4))||a.m.g===k)}function Ha(a,b){return b.qa&&("iPhone"===a.n||"iPod"===a.n)}function Ia(a,b){return Ha(a,b)&&w(a.m,new u(4,2))&&-1===v(a.m,new u(5))}function Ja(a,b){return b.V&&"iPad"===a.n&&w(a.m,new u(4,2))&&-1===v(a.m,new u(5))}function T(a,b){return b.L&&"Android"===a.n}function Ka(a,b){return T(a,b)&&w(a.m,new u(2,2))&&-1===v(a.m,new u(3,1))}function La(a,b){return T(a,b)&&w(a.m,new u(3,1))&&-1===v(a.m,new u(4,1))}
function U(a){return"Linux"===a.n||"Ubuntu"===a.n}function Ma(a){return"Gecko"===a.C&&0===v(a.G,new u(1,9,1))&&!/^b[1-3]$/.test(a.G.h||"")}function Na(a){return"Safari"===a.getName()&&"AppleWebKit"===a.C||"Unknown"===a.getName()&&"AppleWebKit"===a.C&&("iPhone"===a.n||"iPad"===a.n||"iPod"===a.n)}function Oa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.C&&w(a.G,new u(525,13))&&-1===v(a.G,new u(534,50))}function Pa(a){return"Opera"===a.getName()&&w(a.q,new u(10,54))&&-1===v(a.q,new u(11,10))}
function Qa(a){return"BuiltinBrowser"===a.getName()}function Sa(a){this.wa=a}function Ta(a,b){return b}
var Ua={$a:"a",bb:"b",fb:"d",Ya:"i",ab:"j"},Va={a:function(a,b){return Oa(a)&&R(a)||Qa(a)&&(Ka(a,b)||T(a,b)&&w(a.m,new u(4,1)))||b.L&&"Silk"===a.getName()&&-1===v(a.q,new u(2))&&(Ka(a,b)||S)||b.L&&"Silk"===a.getName()&&w(a.q,new u(2))&&T(a,b)&&w(a.m,new u(4,1))||Na(a)&&(Ja(a,b)||Ia(a,b))||Ma(a)&&(R(a)||U(a))||Pa(a)&&(R(a)||U(a))||("Chrome"===a.getName()&&1===v(a.q,new u(4,0,249))&&-1===v(a.q,new u(6))||0===v(a.q,new u(4,0,249))&&(a.q.h===k||4<=a.q.h))&&(R(a)||U(a)||S(a))||"Chrome"===a.getName()&&
w(a.q,new u(6))&&(Ja(a,b)||Ia(a,b))||"AdobeAIR"===a.getName()&&w(a.q,new u(2,5))&&(P(a)&&a.m.g===k||U(a))},b:function(a){return Ma(a)&&S(a)||Oa(a)&&S(a)||Pa(a)&&S(a)||"AdobeAIR"===a.getName()&&w(a.q,new u(2,5))&&S(a)},d:function(a,b){return"Chrome"===a.getName()&&w(a.q,new u(6))&&(R(a)||U(a)||S(a)||T(a,b)||"CrOS"===a.n||b.V&&"iPad"===a.n&&w(a.m,new u(5))||Ha(a,b)&&w(a.m,new u(5)))||"Gecko"===a.C&&1===v(a.G,new u(1,9,1))&&(R(a)||U(a)||S(a)||T(a,b))||"Safari"===a.getName()&&("AppleWebKit"===a.C&&w(a.G,
new u(534,50)))&&(R(a)||S(a))||Na(a)&&(b.V&&"iPad"===a.n&&w(a.m,new u(5))||Ha(a,b)&&w(a.m,new u(5)))||"Opera"===a.getName()&&w(a.q,new u(11,10))&&(R(a)||U(a)||S(a)||T(a,b))||"MSIE"===a.getName()&&9<=a.T&&(P(a)&&w(a.m,new u(6,1))||P(a)&&0===v(a.m,new u(6,0)))||"MSIE"===a.getName()&&b.za&&"Windows Phone"===a.n&&w(a.m,new u(8))||Qa(a)&&(b.la&&"BlackBerry"===a.n&&w(a.m,new u(10))||U(a))},j:function(a,b){return Qa(a)&&La(a,b)||b.L&&"Silk"===a.getName()&&w(a.q,new u(2))&&(La(a,b)||U(a))},i:function(a){return"MSIE"===
a.getName()&&(w(a.q,new u(6,0))&&(void 0===a.T||9>a.T))&&R(a)}};function Wa(a,b){var c=b||new Ga,d;for(d in Ua){var e=Ua[d];if(Va[e](a,c))return e}return k}var Xa={};
Xa.i=new Sa(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;c.push(new Fa(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++)for(var f=c[e],g=0;g<f.length;g++){var h=f[g];if(a[h]){d=d.concat(a[h]);break}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=j,a.push(f));c=[];for(d=0;d<b.length;d++){e=b[d];for(f=0;f<a.length;f++)g=a[f],g==e&&
c.push(g)}return c});var V={};V.a=V.j=V.b=V.d=function(){return[]};V.i=function(a,b,c){return[new Ba(a),new Ca(b,c)]};function W(a){this.l=a;this.$=this.e=this.t=k;this.v=[];this.R=[];this.ya=this.ba=k}W.prototype.supportsConfiguredBrowser=function(){return!!this.t};
W.prototype.init=function(){if(0<this.R.length){for(var a=[],b=0;b<this.R.length;b++)a.push(Aa(this.R[b]));var b=this.l,a=a.join(""),c=this.l.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));q(b,"head",c)}};
W.prototype.load=function(a,b,c){if(this.t){for(var d=Xa[this.t]||new Sa(Ta),e=0;e<this.v.length;e++){for(var f=this.v[e],g=this.t,h=d,p=[],L=f.M.split(",")[0].replace(/"|'/g,""),E=f.I(),Q=p,D=void 0,I=[],Ra={},ka=0;ka<E.length;ka++)D=E[ka],0<D.length&&!Ra[D]&&(Ra[D]=j,I.push(D));E=I;h=h.wa?h.wa(L,E,Q):E;f.pa[g]=h;f.oa[g]=p}if(this.ba){d=V[this.t](this.l,this.t,this.v);e=this.t;f=[];for(g=0;g<d.length;g++)f.push(d[g].toString());d={format:e,extras:f};c&&(d.contextPath=c);d=this.ba.h(s(this.l),d);
c=this.l;var d=c.createElement("link",{rel:"stylesheet",href:d}),Z=l;d.onload=function(){Z||(Z=j)};d.onerror=function(){Z||(Z=j)};q(c,"head",d)}if(a){var la=this,nb=this.t;ga(this.l,function(){for(var c=0;c<la.v.length;c++)la.v[c].ga(a,nb,b&&c==la.v.length-1)})}}};W.prototype.collectFontFamilies=function(a,b){if(this.t)for(var c=0;c<this.v.length;c++)Ea(this.v[c],this.t,a,b)};
W.prototype.performOptionalActions=function(){if(this.da){var a=this,b=this.e,c=this.l;ga(this.l,function(){var d=a.da;if(d.va){var e=window.__adobewebfontsappname__,e=e?e.toString().substr(0,20):"",d=d.va.h(s(c),{host:encodeURIComponent(c.W.location.hostname||c.ea.location.hostname),app:encodeURIComponent(e),_:(+new Date).toString()}),f=new Image(1,1);f.src=d;f.onload=function(){f.onload=k}}d=a.da;d.ka&&(d=d.ka.h(b,c),q(c,"body",d))})}};
function Ya(a,b,c,d){this.Qa=a;this.ma=k;this.l=b;this.e=c;this.z=d;this.u=[]}Ya.prototype.Z=function(a){this.u.push(a)};Ya.prototype.load=function(a,b){var c=a,d=b||{};if("string"==typeof c)c=[c];else if(!c||!c.length)d=c||{},c=[];if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++){var h=this.Qa.h(s(this.l),{id:encodeURIComponent(c[g])});ia(this.l,h,function(){0==--f&&Za(e,d)})}else Za(this,d)};
function Za(a,b){if(0!=a.u.length){a.ma=b.contextPath||".";for(var c=new qa(a.l,a.z,b),d=l,e=0;e<a.u.length;e++)a.u[e].init(),d=d||a.u[e].supportsConfiguredBrowser();if(d){r(c.z,[c.r.h(c.s,"loading")]);F(c,"loading");for(var f=new M(a.e,a.l,c,b.timeout),c=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var Q=a[e];if(b[Q])for(var D=b[Q],I=0;I<D.length;I+=1)d.push(new H(Q,D[I]));else d.push(new H(Q))}f.ga(d,{},k,c)},d=0;d<a.u.length;d++)e=a.u[d],e.supportsConfiguredBrowser()&&(e.load(c,d==a.u.length-
1,a.ma),e.performOptionalActions(window))}else ra(c);a.u=[]}}function $a(a){this.J=a;this.u=[]}$a.prototype.Z=function(a){this.u.push(a)};
$a.prototype.load=function(){var a=this.J.__webfonttypekitmodule__;if(a)for(var b=0;b<this.u.length;b++){var c=this.u[b],d=a[c.ya];d&&d(function(a,b,d){a=[];b={};var h=(new ma(navigator.userAgent,document)).parse(),p=c;p.e=h;p.t=Wa(p.e,p.$);c.supportsConfiguredBrowser()&&(c.init(),c.load(k),c.collectFontFamilies(a,b),c.performOptionalActions(window));d(c.supportsConfiguredBrowser(),a,b)})}};function ab(a,b,c,d){this.J=a;this.A=b;this.Na=c;this.ta=d}
ab.prototype.h=function(a,b){var c=this.A.createElement("img");c.setAttribute("width",62);c.setAttribute("height",25);c.setAttribute("src",this.Na.h(s(b)));c.setAttribute("class","typekit-badge");c.setAttribute("alt","Fonts by Typekit");c.setAttribute("title","Information about the fonts used on this site");c.style.position="fixed";c.style.zIndex=2E9;c.style.right=0;c.style.bottom=0;c.style.cursor="pointer";c.style.border=0;"Opera"!=a.getName()&&(c.style.content="none");c.style.display="inline";c.style["float"]=
"none";c.style.height="25px";c.style.left="auto";c.style.margin=0;c.style.maxHeight="25px";c.style.maxWidth="62px";c.style.minHeight="25px";c.style.minWidth="62px";c.style.orphans=2;c.style.outline="none";c.style.overflow="visible";c.style.padding=0;c.style.pageBreakAfter="auto";c.style.pageBreakBefore="auto";c.style.pageBreakInside="auto";c.style.tableLayout="auto";c.style.textIndent=0;c.style.top="auto";c.style.unicodeBidi="normal";c.style.verticalAlign="baseline";c.style.visibility="visible";c.style.widows=
2;c.style.width="65px";if(this.ta){var d=this.A,e=this.ta;bb(this,c,"click",function(){d.location.href=e})}var f=a.n;if("MSIE"==a.getName()&&"Windows Phone"!=f){c.style.position="absolute";var g=this,h=function(){var a=cb(g,"scrollLeft","scrollTop"),b=cb(g,"clientWidth","clientHeight");c.style.bottom="auto";c.style.right="auto";c.style.top=a[1]+b[1]-25+"px";c.style.left=a[0]+b[0]-3-62+"px"};bb(this,this.J,"scroll",h);bb(this,this.J,"resize",h)}if("iPhone"==f||"iPod"==f||"iPad"==f||"Android"==f||"Windows Phone"==
f||"BlackBerry"==f)c.style.display="none";return c};function cb(a,b,c){var d=0,e=0;a=a.A;if(a.documentElement&&(a.documentElement[b]||a.documentElement[c]))d=a.documentElement[b],e=a.documentElement[c];else if(a.body&&(a.body[b]||a.body[c]))d=a.body[b],e=a.body[c];return[d,e]}function bb(a,b,c,d){if(b.attachEvent){var e=a.J;b["e"+c+d]=d;b[c+d]=function(){b["e"+c+d](e.event)};b.attachEvent("on"+c,b[c+d])}else b.addEventListener(c,d,l)}var db=(new ma(navigator.userAgent,document)).parse();
window.Typekit||(window.Typekit={});if(!window.Typekit.load){var eb=window.Typekit.config||{},fb=k;eb.k&&(fb=new O(eb.k));var X=new Ya(fb,new fa(window),db,document.documentElement),gb=new $a(window);window.Typekit.load=function(){X.load.apply(X,arguments)};window.Typekit.addKit=function(){X.Z.apply(X,arguments)}}var hb,ib=k,jb=k,kb=k,lb,Y,$,N=window.Typekit.config||{};N.b&&(ib=new O(N.b),jb=new ab(window,document,ib,N.bu));N.p&&(kb=new O(N.p));lb=new function(){var a=kb;this.ka=jb;this.va=a};$=new W(new fa(window));
$.da=lb;Y=new Ga;Y.qa=!N.si;Y.V=!N.st;Y.L=!N.sa;Y.za=!N.sw;Y.la=!N.sb;$.$=Y;N.w&&($.ya=N.w);N.f&&(hb=new O(N.f),$.ba=hb);var i;if(N.fn)for(i=0;i<N.fn.length;i+=2)$.v.push(new Da(N.fn[i],N.fn[i+1]));if(N.c)for(i=0;i<N.c.length;i+=2)$.R.push(new za);var mb;if(mb=gb)mb=!!gb.J.__webfonttypekitmodule__;mb?(gb.Z($),gb.load()):($.e=db,$.t=Wa($.e,$.$),window.Typekit.addKit($));
})(this,document);