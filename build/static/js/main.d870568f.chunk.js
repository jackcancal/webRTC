(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],[,,function(e,t,n){e.exports={video:"index_video__2wd7T",button:"index_button__3plz1"}},,,,,function(e,t,n){e.exports={button:"index_button__4sEsc"}},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),i=n.n(c),r=(n(15),n(16),n(5)),u=n(6),l=n(1),s=n(9),d=n(8),m=n(7),f=n.n(m);var v=function(e){return o.a.createElement("div",{className:"".concat(f.a.button," ").concat(e.className),onClick:e.onClick},e.children)},h=n(2),p=n.n(h);function b(e){var t=document.createElement("a");t.download="photo",t.href=e,document.body.appendChild(t),t.click(),t.remove()}var w=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.init=function(){var t=Object(l.a)(e).player;window.navigator.mediaDevices.getUserMedia({video:{width:640,height:480,frameRate:15,facingMode:"enviroment"},audio:!1}).then((function(e){t.srcObject=e}))},e.savePicture=function(){var t=Object(l.a)(e),n=t.picture,a=t.player;n.width=document.documentElement.offsetWidth,n.height=document.documentElement.offsetHeight,n.getContext("2d").drawImage(a,0,0,a.offsetWidth,a.offsetHeight),b(n.toDataURL("image/jpeg"))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("video",{className:p.a.video,ref:function(t){return e.player=t},autoPlay:1,playsInline:1}),o.a.createElement("canvas",{ref:function(t){return e.picture=t}}),o.a.createElement(v,{className:p.a.button,onClick:this.savePicture},"\u4fdd\u5b58\u56fe\u7247"))}}]),n}(a.PureComponent);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d870568f.chunk.js.map