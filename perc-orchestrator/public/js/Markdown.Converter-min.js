"use strict";var Markdown;if(typeof exports==="object"&&typeof require==="function"){Markdown=exports}else{Markdown={}}(function(){function c(e){return e}function d(e){return false}function b(){}b.prototype={chain:function(g,f){var e=this[g];if(!e){throw new Error("unknown hook "+g)}if(e===c){this[g]=f}else{this[g]=function(i){var h=Array.prototype.slice.call(arguments,0);h[0]=e.apply(null,h);return f.apply(null,h)}}},set:function(f,e){if(!this[f]){throw new Error("unknown hook "+f)}this[f]=e},addNoop:function(e){this[e]=c},addFalse:function(e){this[e]=d}};Markdown.HookCollection=b;function a(){}a.prototype={set:function(e,f){this["s_"+e]=f},get:function(e){return this["s_"+e]}};Markdown.Converter=function(X){var l=this.hooks=new b();l.addNoop("plainLinkText");l.addNoop("preConversion");l.addNoop("postNormalization");l.addNoop("preBlockGamut");l.addNoop("postBlockGamut");l.addNoop("preSpanGamut");l.addNoop("postSpanGamut");l.addNoop("postConversion");var z;var p;var e;var D;X=X||{};var V=c,q=c;if(X.nonAsciiLetters){(function(){var ab=/[Q\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u0660-\u0669\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07c0-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0966-\u096f\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0be6-\u0bef\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d66-\u0d6f\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edd\u0f00\u0f20-\u0f29\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f-\u1049\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u1090-\u1099\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1946-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u19d0-\u19d9\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b50-\u1b59\u1b83-\u1ba0\u1bae-\u1bb9\u1c00-\u1c23\u1c40-\u1c49\u1c4d-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u2094\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183-\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua62b\ua640-\ua65f\ua662-\ua66e\ua67f-\ua697\ua717-\ua71f\ua722-\ua788\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8d0-\ua8d9\ua900-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa50-\uaa59\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/g;var Y="Q".charCodeAt(0);var ac="A".charCodeAt(0);var aa="Z".charCodeAt(0);var Z="a".charCodeAt(0)-aa-1;V=function(ad){return ad.replace(ab,function(ae){var ah=ae.charCodeAt(0);var ag="";var af;while(ah>0){af=(ah%51)+ac;if(af>=Y){af++}if(af>aa){af+=Z}ag=String.fromCharCode(af)+ag;ah=ah/51|0}return"Q"+ag+"Q"})};q=function(ad){return ad.replace(/Q([A-PR-Za-z]{1,3})Q/g,function(ae,ah){var ai=0;var af;for(var ag=0;ag<ah.length;ag++){af=ah.charCodeAt(ag);if(af>aa){af-=Z}if(af>Y){af--}af-=ac;ai=(ai*51)+af}return String.fromCharCode(ai)})}})()}this.makeHtml=function(Y){if(z){throw new Error("Recursive call to converter.makeHtml")}z=new a();p=new a();e=[];D=0;Y=l.preConversion(Y);Y=Y.replace(/~/g,"~T");Y=Y.replace(/\$/g,"~D");Y=Y.replace(/\r\n/g,"\n");Y=Y.replace(/\r/g,"\n");Y="\n\n"+Y+"\n\n";Y=O(Y);Y=Y.replace(/^[ \t]+$/mg,"");Y=l.postNormalization(Y);Y=r(Y);Y=o(Y);Y=h(Y);Y=S(Y);Y=Y.replace(/~D/g,"$$");Y=Y.replace(/~T/g,"~");Y=l.postConversion(Y);e=p=z=null;return Y};function o(Y){Y=Y.replace(/^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(ab,ad,ac,aa,Z,ae){ad=ad.toLowerCase();z.set(ad,G(ac));if(Z){return aa}else{if(ae){p.set(ad,ae.replace(/"/g,"&quot;"))}}return""});return Y}function r(aa){var Z="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del";var Y="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math";aa=aa.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,P);aa=aa.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,P);aa=aa.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,P);aa=aa.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,P);aa=aa.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,P);return aa}function U(Y){Y=Y.replace(/(^\n+|\n+$)/g,"");return"\n\n~K"+(e.push(Y)-1)+"K\n\n"}function P(Y,Z){return U(Z)}var g=function(Y){return h(Y)};function h(aa,Z){aa=l.preBlockGamut(aa,g);aa=k(aa);var Y="<hr />\n";aa=aa.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,Y);aa=aa.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,Y);aa=aa.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,Y);aa=R(aa);aa=t(aa);aa=i(aa);aa=l.postBlockGamut(aa,g);aa=r(aa);aa=N(aa,Z);return aa}function m(Y){Y=l.preSpanGamut(Y);Y=u(Y);Y=y(Y);Y=L(Y);Y=H(Y);Y=I(Y);Y=Q(Y);Y=Y.replace(/~P/g,"://");Y=G(Y);Y=B(Y);Y=Y.replace(/  +\n/g," <br>\n");Y=l.postSpanGamut(Y);return Y}function y(Z){var Y=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;Z=Z.replace(Y,function(ab){var aa=ab.replace(/(.)<\/?code>(?=.)/g,"$1`");aa=C(aa,ab.charAt(1)=="!"?"\\`*_/":"\\`*_");return aa});return Z}function I(Y){Y=Y.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,j);Y=Y.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,j);Y=Y.replace(/(\[([^\[\]]+)\])()()()()()/g,j);return Y}function j(ae,ak,aj,ai,ah,ag,ad,ac){if(ac==undefined){ac=""}var ab=ak;var Z=aj.replace(/:\/\//g,"~P");var aa=ai.toLowerCase();var Y=ah;var af=ac;if(Y==""){if(aa==""){aa=Z.toLowerCase().replace(/ ?\n/g," ")}Y="#"+aa;if(z.get(aa)!=undefined){Y=z.get(aa);if(p.get(aa)!=undefined){af=p.get(aa)}}else{if(ab.search(/\(\s*\)$/m)>-1){Y=""}else{return ab}}}Y=E(Y);Y=C(Y,"*_");var al='<a href="'+Y+'"';if(af!=""){af=K(af);af=C(af,"*_");al+=' title="'+af+'"'}al+=">"+Z+"</a>";return al}function H(Y){Y=Y.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,J);Y=Y.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,J);return Y}function K(Y){return Y.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function J(ae,ak,aj,ai,ah,ag,ad,ac){var ab=ak;var aa=aj;var Z=ai.toLowerCase();var Y=ah;var af=ac;if(!af){af=""}if(Y==""){if(Z==""){Z=aa.toLowerCase().replace(/ ?\n/g," ")}Y="#"+Z;if(z.get(Z)!=undefined){Y=z.get(Z);if(p.get(Z)!=undefined){af=p.get(Z)}}else{return ab}}aa=C(K(aa),"*_[]()");Y=C(Y,"*_");var al='<img src="'+Y+'" alt="'+aa+'"';af=K(af);af=C(af,"*_");al+=' title="'+af+'"';al+=" />";return al}function k(Y){Y=Y.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(Z,aa){return"<h1>"+m(aa)+"</h1>\n\n"});Y=Y.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(aa,Z){return"<h2>"+m(Z)+"</h2>\n\n"});Y=Y.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(Z,ac,ab){var aa=ac.length;return"<h"+aa+">"+m(ab)+"</h"+aa+">\n\n"});return Y}function R(aa,Y){aa+="~0";var Z=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;if(D){aa=aa.replace(Z,function(ac,af,ae){var ag=af;var ad=(ae.search(/[*+-]/g)>-1)?"ul":"ol";var ab=n(ag,ad,Y);ab=ab.replace(/\s+$/,"");ab="<"+ad+">"+ab+"</"+ad+">\n";return ab})}else{Z=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;aa=aa.replace(Z,function(ad,ah,af,ac){var ag=ah;var ai=af;var ae=(ac.search(/[*+-]/g)>-1)?"ul":"ol";var ab=n(ai,ae);ab=ag+"<"+ae+">\n"+ab+"</"+ae+">\n";return ab})}aa=aa.replace(/~0/,"");return aa}var s={ol:"\\d+[.]",ul:"[*+-]"};function n(aa,Z,ad){D++;aa=aa.replace(/\n{2,}$/,"\n");aa+="~0";var Y=s[Z];var ab=new RegExp("(^[ \\t]*)("+Y+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+Y+")[ \\t]+))","gm");var ac=false;aa=aa.replace(ab,function(af,ah,ag,ae){var ak=ae;var al=ah;var aj=/\n\n$/.test(ak);var ai=aj||ak.search(/\n{2,}/)>-1;if(ai||ac){ak=h(w(ak),true)}else{ak=R(w(ak),true);ak=ak.replace(/\n$/,"");if(!ad){ak=m(ak)}}ac=aj;return"<li>"+ak+"</li>\n"});aa=aa.replace(/~0/g,"");D--;return aa}function t(Y){Y+="~0";Y=Y.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(Z,ab,aa){var ac=ab;var ad=aa;ac=F(w(ac));ac=O(ac);ac=ac.replace(/^\n+/g,"");ac=ac.replace(/\n+$/g,"");ac="<pre><code>"+ac+"\n</code></pre>";return"\n\n"+ac+"\n\n"+ad});Y=Y.replace(/~0/,"");return Y}function u(Y){Y=Y.replace(/(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm,function(ab,ad,ac,aa,Z){var ae=aa;ae=ae.replace(/^([ \t]*)/g,"");ae=ae.replace(/[ \t]*$/g,"");ae=F(ae);ae=ae.replace(/:\/\//g,"~P");return ad+"<code>"+ae+"</code>"});return Y}function F(Y){Y=Y.replace(/&/g,"&amp;");Y=Y.replace(/</g,"&lt;");Y=Y.replace(/>/g,"&gt;");Y=C(Y,"*_{}[]\\",false);return Y}function B(Y){Y=V(Y);Y=Y.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g,"$1<strong>$3</strong>");Y=Y.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g,"$1<em>$3</em>");return q(Y)}function i(Y){Y=Y.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(Z,aa){var ab=aa;ab=ab.replace(/^[ \t]*>[ \t]?/gm,"~0");ab=ab.replace(/~0/g,"");ab=ab.replace(/^[ \t]+$/gm,"");ab=h(ab);ab=ab.replace(/(^|\n)/g,"$1  ");ab=ab.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(ac,ad){var ae=ad;ae=ae.replace(/^  /mg,"~0");ae=ae.replace(/~0/g,"");return ae});return U("<blockquote>\n"+ab+"\n</blockquote>")});return Y}function N(af,Y){af=af.replace(/^\n+/g,"");af=af.replace(/\n+$/g,"");var ag=af.split(/\n{2,}/g);var ad=[];var Z=/~K(\d+)K/;var aa=ag.length;for(var ab=0;ab<aa;ab++){var ac=ag[ab];if(Z.test(ac)){ad.push(ac)}else{if(/\S/.test(ac)){ac=m(ac);ac=ac.replace(/^([ \t]*)/g,"<p>");ac+="</p>";ad.push(ac)}}}if(!Y){aa=ad.length;for(var ab=0;ab<aa;ab++){var ae=true;while(ae){ae=false;ad[ab]=ad[ab].replace(/~K(\d+)K/g,function(ah,ai){ae=true;return e[ai]})}}}return ad.join("\n\n")}function G(Y){Y=Y.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");Y=Y.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;");return Y}function L(Y){Y=Y.replace(/\\(\\)/g,v);Y=Y.replace(/\\([`*_{}\[\]()>#+-.!])/g,v);return Y}var A="[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]",W="[-A-Z0-9+&@#/%=~_|[\\])]",M=new RegExp('(="|<)?\\b(https?|ftp)(://'+A+"*"+W+")(?=$|\\W)","gi"),T=new RegExp(W,"i");function f(ac,af,ah,ab){if(af){return ac}if(ab.charAt(ab.length-1)!==")"){return"<"+ah+ab+">"}var ad=ab.match(/[()]/g);var Y=0;for(var Z=0;Z<ad.length;Z++){if(ad[Z]==="("){if(Y<=0){Y=1}else{Y++}}else{Y--}}var aa="";if(Y<0){var ag=new RegExp("\\){1,"+(-Y)+"}$");ab=ab.replace(ag,function(ai){aa=ai;return""})}if(aa){var ae=ab.charAt(ab.length-1);if(!T.test(ae)){aa=ae+aa;ab=ab.substr(0,ab.length-1)}}return"<"+ah+ab+">"+aa}function Q(Z){Z=Z.replace(M,f);var Y=function(ac,ab){var aa=E(ab);aa=C(aa,"*_");return'<a href="'+aa+'">'+l.plainLinkText(ab)+"</a>"};Z=Z.replace(/<((https?|ftp):[^'">\s]+)>/gi,Y);return Z}function S(Y){Y=Y.replace(/~E(\d+)E/g,function(Z,ab){var aa=parseInt(ab);return String.fromCharCode(aa)});return Y}function w(Y){Y=Y.replace(/^(\t|[ ]{1,4})/gm,"~0");Y=Y.replace(/~0/g,"");return Y}function O(ab){if(!/\t/.test(ab)){return ab}var aa=["    ","   ","  "," "],Z=0,Y;return ab.replace(/[\n\t]/g,function(ac,ad){if(ac==="\n"){Z=ad+1;return ac}Y=(ad-Z)%4;Z=ad+1;return aa[Y]})}var x=/(?:["'*()[\]:]|~D)/g;function E(Z){if(!Z){return""}var Y=Z.length;return Z.replace(x,function(aa,ab){if(aa=="~D"){return"%24"}if(aa==":"){if(ab==Y-1||/[0-9\/]/.test(Z.charAt(ab+1))){return":"}}return"%"+aa.charCodeAt(0).toString(16)})}function C(ac,Z,aa){var Y="(["+Z.replace(/([\[\]\\])/g,"\\$1")+"])";if(aa){Y="\\\\"+Y}var ab=new RegExp(Y,"g");ac=ac.replace(ab,v);return ac}function v(Y,aa){var Z=aa.charCodeAt(0);return"~E"+Z+"E"}}})();