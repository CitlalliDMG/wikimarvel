(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,t){e.exports=t.p+"static/media/Marvel_Wiki_Comics_logo.4e053e1c.png"},46:function(e,a,t){e.exports=t(84)},55:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(39),i=t.n(r),l=t(10),o=t(11),s=t(13),m=t(12),u=t(14),h=t(87),p=t(88),b=t(85),d=t(27),f=(t(55),t(16)),E=t(45),v="REQUEST_API_DATA",g=function(){return{type:v}},N=Object(f.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.data;switch(t){case"RECEIVE_API_DATA":return n;default:return e}}}),w=t(18),O=t.n(w),y=t(22),j=t(41),k=t(42),C=t.n(k),S={KEYS:{KEY_ONE:"THIS_IS_A_TEST",KEY_TWO:"THIS_IS_ANOTHER_TEST"},privateKey:"1d4c901adcec4b14717289898f2817c27a5f663a",publicKey:"3b46b9c54721040bdc0a44a5758d23c9"},x=function(){var e=(new Date).getTime(),a=C.a.MD5(e+S.privateKey+S.publicKey),t="&ts=".concat(e,"&apikey=").concat(S.publicKey,"&hash=").concat(a);return console.log(t),"".concat("https://gateway.marvel.com:443/v1/public/").concat("comics?format=comic&formatType=comic&dateDescriptor=thisWeek").concat(t)},A=new function e(){Object(l.a)(this,e),this.fetchData=Object(j.a)(O.a.mark(function e(){var a,t,n,c;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x());case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,n=t.data.results,console.log(n),e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(0),c=e.t0,e.abrupt("return",c);case 16:case"end":return e.stop()}},e,this,[[0,12]])}))},_=O.a.mark(T),I=O.a.mark(D);function T(e){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.a)(A.fetchData);case 3:return a=e.sent,e.next=6,Object(y.b)({type:"RECEIVE_API_DATA",data:a});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},_,this,[[0,8]])}function D(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.c)(v,T);case 2:case"end":return e.stop()}},I,this)}var K=D,R=Object(E.a)(),M=Object(f.d)(N,Object(f.a)(R));R.run(K);var W=t(83),B=t(43),F=t.n(B),L=t(86),P=function(){return c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(L.a,{to:"/wikimarvel/signup"},"Reg\xedstrate")),c.a.createElement("li",null,c.a.createElement(L.a,{to:"/wikimarvel/signin"},"Inicia sesi\xf3n")))},q=function(){return c.a.createElement("header",{className:"header-container"},c.a.createElement("div",{className:"logo"},c.a.createElement(W.a,{to:"/wikimarvel/"},c.a.createElement("img",{src:F.a,alt:"Marvel Comics Logo",height:"30"}))),c.a.createElement("nav",{className:"nav-links"},c.a.createElement(P,null)))},H=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"inputSearch",value:function(e){this.props.getInputToSearch(e.target.value)}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Funciona bot\xf3n buscar")}},{key:"render",value:function(){return c.a.createElement("form",{className:"center-form",onSubmit:this.onSubmit.bind(this)},c.a.createElement("label",{htmlFor:"comic-search",className:"center-label"},"\xbfQu\xe9 c\xf3mic buscas?"),c.a.createElement("input",{name:"comic-search",className:"search-bar",id:"comic-search",value:this.props.initialName,onChange:this.inputSearch.bind(this),type:"text",placeholder:"Ingresa el c\xf3mic buscas"}),c.a.createElement("button",{id:"searchbutton",className:"search-button",type:"submit"},"Buscar"))}}]),a}(n.Component),Y=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).comic=function(e){return c.a.createElement("div",{key:e.id,className:"comic"},c.a.createElement("img",{className:"comic-image",src:"".concat(e.thumbnail.path,"/portrait_fantastic.").concat(e.thumbnail.extension),alt:e.title}),c.a.createElement("div",{className:"comic-info"},c.a.createElement("p",null,e.title)))},e.state={searchString:"",searchResultList:[],isLoaded:"waiting",comics:[],total:0},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.requestApiData()}},{key:"fromSearchField",value:function(e){this.setState({searchString:e})}},{key:"render",value:function(){var e=this.props.data;return console.log(e),e.length>0?c.a.createElement("main",{className:"main-container"},c.a.createElement(H,{getInputToSearch:this.fromSearchField.bind(this)}),c.a.createElement("section",{className:"results-container"},c.a.createElement("h1",{className:"title"},"Los c\xf3mics m\xe1s recientes"),e.map(this.comic))):c.a.createElement("main",{className:"main-container"},c.a.createElement("p",null,"Cargando ..."))}}]),a}(n.Component),J=Object(d.b)(function(e){return{data:e.data}},function(e){return Object(f.b)({requestApiData:g},e)})(Y),Q=t(26),U=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={email:"",password:""},t.handleChange=function(e){t.setState(Object(Q.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container center-vertically"},c.a.createElement("h1",{className:"container-content"},"Ingresa a Wiki Comics"),c.a.createElement("form",{className:"center-form",onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",className:"search-bar",id:"email",onChange:this.handleChange,type:"email",placeholder:"Correo","aria-label":"Email"}),c.a.createElement("input",{name:"password",className:"search-bar",id:"password",onChange:this.handleChange,type:"password",placeholder:"Contrase\xf1a","aria-label":"Password"}),c.a.createElement("button",{id:"searchbutton",className:"search-button",type:"submit","aria-label":"Sign In Button"},"Entrar")))}}]),a}(n.Component),V=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={email:"",password:"",firstName:"",lastName:""},t.handleChange=function(e){t.setState(Object(Q.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container center-vertically"},c.a.createElement("h1",{className:"container-content"},"Crea una cuenta"),c.a.createElement("form",{className:"center-form",onSubmit:this.handleSubmit},c.a.createElement("input",{name:"firstName",className:"search-bar",id:"firstName",onChange:this.handleChange,type:"text",placeholder:"Nombre","aria-label":"First Name"}),c.a.createElement("input",{name:"lastName",className:"search-bar",id:"lastName",onChange:this.handleChange,type:"text",placeholder:"Apellidos","aria-label":"Last Name"}),c.a.createElement("input",{name:"email",className:"search-bar",id:"email",onChange:this.handleChange,type:"email",placeholder:"Correo","aria-label":"Email"}),c.a.createElement("input",{name:"password",className:"search-bar",id:"password",onChange:this.handleChange,type:"password",placeholder:"Contrase\xf1a","aria-label":"Password"}),c.a.createElement("button",{id:"searchbutton","aria-label":"Sign Up Button",className:"search-button",type:"submit"},"Registrar")))}}]),a}(n.Component),$=function(e){var a=e.match.params.id;return c.a.createElement("div",null,"Aqu\xed van los datos del comic ",a)},z=function(){return c.a.createElement("main",{className:"main-container container"},c.a.createElement("div",{className:"container-content"},c.a.createElement("h1",null,"Opps... Al parecer algo ha salido mal "),c.a.createElement(W.a,{to:"/"},"Regresar al inicio")))},G=function(){return c.a.createElement("footer",{className:"footer-container"},c.a.createElement("a",{href:"http://marvel.com"},"Datos proporcionados por Marvel. ",c.a.createElement("br",null)," \xa9 2018 Marvel"))},X=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(h.a,{basename:"/wikimarvel"},c.a.createElement(d.a,{store:M},c.a.createElement("div",{className:"main-grid"},c.a.createElement(q,null),c.a.createElement(p.a,null,c.a.createElement(b.a,{exact:!0,path:"/wikimarvel/",component:J}),c.a.createElement(b.a,{exact:!0,path:"/wikimarvel/comic/:id",component:$}),c.a.createElement(b.a,{exact:!0,path:"/wikimarvel/signin",component:U}),c.a.createElement(b.a,{exact:!0,path:"/wikimarvel/signup",component:V}),c.a.createElement(b.a,{component:z})),c.a.createElement(G,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.3069f2ca.chunk.js.map