(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/Marvel_Comics_logo.ee150a31.png"},33:function(e,t,a){e.exports=a(48)},42:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(27),l=a.n(c),o=a(12),u=a(15),i=a(19),s=a(16),m=a(20),E=a(50),p=a(17),d=(a(42),a(9)),f=a(32),h="REQUEST_API_DATA",v=function(){return{type:h}},b=Object(d.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"RECEIVE_API_DATA":return n;default:return e}}}),O=a(11),j=a.n(O),w=a(13),g=a(29),_=new function e(){Object(o.a)(this,e),this.fetchData=Object(g.a)(j.a.mark(function e(){var t,a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://randomuser.me/api"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),n=e.t0,e.abrupt("return",n);case 14:case"end":return e.stop()}},e,this,[[0,10]])}))},A=j.a.mark(k),y=j.a.mark(T);function k(e){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.a)(_.fetchData);case 3:return t=e.sent,e.next=6,Object(w.b)({type:"RECEIVE_API_DATA",data:t});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},A,this,[[0,8]])}function T(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.c)(h,k);case 2:case"end":return e.stop()}},y,this)}var x=T,I=Object(f.a)(),N=Object(d.d)(b,Object(d.a)(I));I.run(x);var D=a(47),S=a(30),C=a.n(S),q=a(49),M=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(q.a,{to:"/"},"Mis colecciones")),r.a.createElement("li",null,r.a.createElement(q.a,{to:"/"},"Cerrar sesi\xf3n")),r.a.createElement("li",null,r.a.createElement(q.a,{to:"/",className:"avatar"},r.a.createElement("button",{className:"logout-button"},"CD"))))},K=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(q.a,{to:"/"},"Reg\xedstrate")),r.a.createElement("li",null,r.a.createElement(q.a,{to:"/"},"Inicia sesi\xf3n")))},R=function(){return r.a.createElement("header",{className:"header-container"},r.a.createElement("div",{className:"logo"},r.a.createElement(D.a,{to:"/"},r.a.createElement("img",{src:C.a,alt:"Marvel Comics Logo",height:"30"}))),r.a.createElement("nav",{className:"nav-links"},r.a.createElement(K,null),r.a.createElement(M,null)))},Y={KEYS:{KEY_ONE:"THIS_IS_A_TEST",KEY_TWO:"THIS_IS_ANOTHER_TEST"}},H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).person=function(e){return r.a.createElement("div",{key:e.id.value},r.a.createElement("h1",null,e.name.first," ",e.name.last),r.a.createElement("p",null,e.gender),r.a.createElement("img",{src:e.picture.medium,alt:"photography of ".concat(e.name.first)}),r.a.createElement("p",null,Y.KEYS.KEY_ONE))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.requestApiData()}},{key:"render",value:function(){var e=this.props.data.results,t=void 0===e?[]:e;return r.a.createElement("main",{className:"main-container"},r.a.createElement("section",null,r.a.createElement("p",null,"Aqu\xed va a ir el buscador y el resultado de la busqueda"),r.a.createElement("div",null,t.map(this.person))),r.a.createElement("aside",null,r.a.createElement("p",null,"Aqu\xed va a ir la colecci\xf3n que se esta armando")))}}]),t}(n.Component),P=Object(p.b)(function(e){return{data:e.data}},function(e){return Object(d.b)({requestApiData:v},e)})(H),W=function(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("p",null,"Datos proporcionados por Marvel. \xa9 2014 Marvel"))},B=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"main-grid"},r.a.createElement(R,null),r.a.createElement(p.a,{store:N},r.a.createElement(P,null)),r.a.createElement(W,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.e302e032.chunk.js.map