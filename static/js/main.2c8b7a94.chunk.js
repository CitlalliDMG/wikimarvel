(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/Marvel_Wiki_Comics_logo.4e053e1c.png"},42:function(e,a,t){e.exports=t(84)},47:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var r=t(1),c=t.n(r),i=t(39),n=t.n(i),o=t(9),l=t(11),s=t(13),m=t(12),u=t(14),p=t(87),h=t(88),d=t(85),v=(t(47),t(52)),b=t(40),g=t.n(b),y=t(86),w=function(){return c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(y.a,{to:"/signup"},"Reg\xedstrate")),c.a.createElement("li",null,c.a.createElement(y.a,{to:"/signin"},"Inicia sesi\xf3n")),c.a.createElement("li",null,c.a.createElement(y.a,{to:"/mycomics"},"Mis colecciones")))},f=function(){return c.a.createElement("header",{className:"header-container"},c.a.createElement("div",{className:"logo"},c.a.createElement(v.a,{to:"/"},c.a.createElement("img",{src:g.a,alt:"Marvel Comics Logo",height:"30"}))),c.a.createElement("nav",{className:"nav-links"},c.a.createElement(w,null)))},R=t(16),I=t(22),E="REQUEST_API_DATA",N=function(){return{type:E}},U=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"inputSearch",value:function(e){this.props.getInputToSearch(e.target.value)}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Funciona bot\xf3n buscar")}},{key:"render",value:function(){return c.a.createElement("form",{className:"center-form",onSubmit:this.onSubmit.bind(this)},c.a.createElement("label",{htmlFor:"comic-search",className:"center-label"},"\xbfQu\xe9 c\xf3mic buscas?"),c.a.createElement("input",{name:"comic-search",className:"search-bar",id:"comic-search",value:this.props.initialName,onChange:this.inputSearch.bind(this),type:"text",placeholder:"Ingresa el c\xf3mic buscas"}),c.a.createElement("button",{id:"searchbutton",className:"search-button",type:"submit"},"Buscar"))}}]),a}(r.Component),C=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).comic=function(e){return c.a.createElement("div",{key:e.id,className:"comic"},c.a.createElement("img",{className:"comic-image",src:"".concat(e.thumbnail.path,"/portrait_fantastic.").concat(e.thumbnail.extension),alt:e.title}),c.a.createElement("div",{className:"comic-info"},c.a.createElement("p",null,e.title)))},e.state={searchString:"",searchResultList:[],isLoaded:"waiting",comics:[],total:0},e}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.requestApiData()}},{key:"fromSearchField",value:function(e){this.setState({searchString:e})}},{key:"render",value:function(){var e=this.props.data;return console.log(e),e.length>0?c.a.createElement("main",{className:"main-container"},c.a.createElement(U,{getInputToSearch:this.fromSearchField.bind(this)}),c.a.createElement("section",{className:"results-container"},c.a.createElement("h1",{className:"title"},"Los c\xf3mics m\xe1s recientes"),e.map(this.comic))):c.a.createElement("main",{className:"main-container"},c.a.createElement("p",null,"Cargando ..."))}}]),a}(r.Component),A=Object(I.b)(function(e){return{data:e.data}},function(e){return Object(R.b)({requestApiData:N},e)})(C),k=t(27),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={email:"",password:""},t.handleChange=function(e){t.setState(Object(k.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container center-vertically"},c.a.createElement("h1",{className:"container-content"},"Ingresa a Wiki Comics"),c.a.createElement("form",{className:"center-form",onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",className:"search-bar",id:"email",onChange:this.handleChange,type:"email",placeholder:"Correo","aria-label":"Email"}),c.a.createElement("input",{name:"password",className:"search-bar",id:"password",onChange:this.handleChange,type:"password",placeholder:"Contrase\xf1a","aria-label":"Password"}),c.a.createElement("button",{id:"searchbutton",className:"search-button",type:"submit","aria-label":"Sign In Button"},"Entrar")))}}]),a}(r.Component),j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={email:"",password:"",firstName:"",lastName:""},t.handleChange=function(e){t.setState(Object(k.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container center-vertically"},c.a.createElement("h1",{className:"container-content"},"Crea una cuenta"),c.a.createElement("form",{className:"center-form",onSubmit:this.handleSubmit},c.a.createElement("input",{name:"firstName",className:"search-bar",id:"firstName",onChange:this.handleChange,type:"text",placeholder:"Nombre","aria-label":"First Name"}),c.a.createElement("input",{name:"lastName",className:"search-bar",id:"lastName",onChange:this.handleChange,type:"text",placeholder:"Apellidos","aria-label":"Last Name"}),c.a.createElement("input",{name:"email",className:"search-bar",id:"email",onChange:this.handleChange,type:"email",placeholder:"Correo","aria-label":"Email"}),c.a.createElement("input",{name:"password",className:"search-bar",id:"password",onChange:this.handleChange,type:"password",placeholder:"Contrase\xf1a","aria-label":"Password"}),c.a.createElement("button",{id:"searchbutton","aria-label":"Sign Up Button",className:"search-button",type:"submit"},"Registrar")))}}]),a}(r.Component),_=function(e){var a=e.match.params.id;return c.a.createElement("div",null,"Aqu\xed van los datos del comic ",a)},T=function(e){var a=e.collection;return c.a.createElement("article",{className:"collection-info"},c.a.createElement("p",{className:"bold-text"}," Nombre de la colecci\xf3n: "),c.a.createElement("p",{className:"text"},a.collectionName),c.a.createElement("p",{className:"bold-text"}," Descripci\xf3n: "),c.a.createElement("p",{className:"text"},a.description),c.a.createElement("p",{className:"bold-text"}," N\xfamero de c\xf3mics: "),c.a.createElement("p",{className:"text"},a.total),c.a.createElement("p",{className:"bold-text"}," C\xf3mics en la colecci\xf3n: "),a.comics.map(function(e){return c.a.createElement("p",{key:"".concat(a.collectionName," ").concat(e.id)},e.title)}))},O=function(e){var a=e.collections;return c.a.createElement("div",{className:"collection-list"},a&&a.map(function(e){return c.a.createElement(T,{collection:e,key:e.id})}))},x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.collections;return console.log(e),c.a.createElement("main",{className:"main-container center-vertically"},c.a.createElement("h1",null,"Mis colecciones:"),c.a.createElement(O,{collections:e}))}}]),a}(r.Component),D=Object(I.b)(function(e){return{collections:e.collectionReducer.collections}})(x),P=function(){return c.a.createElement("main",{className:"main-container container"},c.a.createElement("div",{className:"container-content"},c.a.createElement("h1",null,"Opps... Al parecer algo ha salido mal "),c.a.createElement(v.a,{to:"/"},"Regresar al inicio")))},M=function(){return c.a.createElement("footer",{className:"footer-container"},c.a.createElement("a",{href:"http://marvel.com"},"Datos proporcionados por Marvel. ",c.a.createElement("br",null)," \xa9 2018 Marvel"))},B=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,{basename:"/wikimarvel"},c.a.createElement("div",{className:"main-grid"},c.a.createElement(f,null),c.a.createElement(h.a,null,c.a.createElement(d.a,{exact:!0,path:"/",component:A}),c.a.createElement(d.a,{exact:!0,path:"/comic/:id",component:_}),c.a.createElement(d.a,{exact:!0,path:"/signin",component:S}),c.a.createElement(d.a,{exact:!0,path:"/signup",component:j}),c.a.createElement(d.a,{exact:!0,path:"/mycomics",component:D}),c.a.createElement(d.a,{component:P})),c.a.createElement(M,null)))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(56),L={},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return e},G={collections:[{id:"1",collectionName:"Capitan Am\xe9rica",description:"Mis c\xf3mics del Capitan Am\xe9rica",total:2,comics:[{id:280,digitalId:4035,title:"Captain America (2002) #20",issueNumber:20,variantDescription:"",description:'"CAPTAIN AMERICA LIVES AGAIN!"  the Conclusion!\r\nThe Red Skull and the Nazi Army control the world after their victory in World War II. Can Captain America make the world right again!?\r\n32 PGS./MARVEL PSR...$2.99',modified:"2018-06-08T09:14:24-0400",isbn:"",upc:"75960605153302011",diamondCode:"SEP031584",ean:"",issn:"",format:"Comic",pageCount:0,textObjects:[{type:"issue_solicit_text",language:"en-us",text:'"CAPTAIN AMERICA LIVES AGAIN!"  the Conclusion!\r\nThe Red Skull and the Nazi Army control the world after their victory in World War II. Can Captain America make the world right again!?\r\n32 PGS./MARVEL PSR...$2.99'}],resourceURI:"http://gateway.marvel.com/v1/public/comics/280",urls:[{type:"detail",url:"http://marvel.com/comics/issue/280/captain_america_2002_20?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"purchase",url:"http://comicstore.marvel.com/Captain-America-20/digital-comic/4035?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"reader",url:"http://marvel.com/digitalcomics/view.htm?iid=4035&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"inAppLink",url:"https://applink.marvel.com/issue/4035?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/485",name:"Captain America (2002 - 2004)"},variants:[],collections:[{resourceURI:"http://gateway.marvel.com/v1/public/comics/1226",name:"Captain America Vol. IV: Captain America Lives Again (Trade Paperback)"}],collectedIssues:[],dates:[{type:"onsaleDate",date:"2004-01-01T00:00:00-0500"},{type:"focDate",date:"-0001-11-30T00:00:00-0500"},{type:"unlimitedDate",date:"2007-11-13T00:00:00-0500"},{type:"digitalPurchaseDate",date:"2014-03-04T00:00:00-0500"}],prices:[{type:"printPrice",price:0},{type:"digitalPurchasePrice",price:1.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/c/70/5bc78bc7a915a",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/c/70/5bc78bc7a915a",extension:"jpg"}],creators:{available:8,collectionURI:"http://gateway.marvel.com/v1/public/comics/280/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/8635",name:"Vc Randy Gentile",role:"letterer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/293",name:"Dave Gibbons",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/292",name:"Gene Ha",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/4300",name:"Nick Lowe",role:"editor"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/13152",name:"Joe Quesada",role:"editor"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/527",name:"Tom Palmer",role:"inker"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/501",name:"Dave Stewart",role:"colorist"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8991",name:"Lee Weeks",role:"penciler"}],returned:8},characters:{available:18,collectionURI:"http://gateway.marvel.com/v1/public/comics/280/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009169",name:"Baron Strucker"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009167",name:"Bruce Banner"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009211",name:"Bucky"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009220",name:"Captain America"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1010330",name:"Donald Blake"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009229",name:"Frank Castle"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009320",name:"Giant Man"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1011490",name:"Hank Pym"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009368",name:"Iron Man"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009215",name:"Luke Cage"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009471",name:"Nick Fury"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009535",name:"Red Skull"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1010901",name:"Stephen Strange"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009631",name:"Sue Storm"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009664",name:"Thor"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009624",name:"Tony Stark"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1010324",name:"Victor Von Doom"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009707",name:"Wasp"}],returned:18},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/280/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/1500",name:"Interior #1500",type:"interiorStory"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/65402",name:"Captain America (2002) #20",type:"cover"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/280/events",items:[],returned:0}},{id:305,digitalId:1620,title:"Captain America (2002) #21",issueNumber:21,variantDescription:"",description:'"HOMELAND," pt. 1 (of 5)\r\nA new CAP era begins, from the new regular creative team of writer Robert Morales (TRUTH: RED, WHITE & BLACK), artist Chris Bachalo (NEW X-MEN) and new editor Axel Alonso (AMAZING SPIDER-MAN)! \r\nIn a storyline ripped from today\'s headlines, after a daring rescue in the Florida Everglades, the U.S. government taps Cap to embark on what might be his most life-changing mission ever.\r\nThis new direction will culminate later next year in one of the most surprising and unexpected developments ever in the career of Captain America, and a major change for the Marvel Universe!\r\n32 PGS./MARVEL PSR...$2.99',modified:"2018-06-08T09:14:26-0400",isbn:"",upc:"75960605153302111",diamondCode:"OCT031547",ean:"",issn:"",format:"Comic",pageCount:0,textObjects:[{type:"issue_solicit_text",language:"en-us",text:'"HOMELAND," pt. 1 (of 5)\r\nA new CAP era begins, from the new regular creative team of writer Robert Morales (TRUTH: RED, WHITE & BLACK), artist Chris Bachalo (NEW X-MEN) and new editor Axel Alonso (AMAZING SPIDER-MAN)! \r\nIn a storyline ripped from today\'s headlines, after a daring rescue in the Florida Everglades, the U.S. government taps Cap to embark on what might be his most life-changing mission ever.\r\nThis new direction will culminate later next year in one of the most surprising and unexpected developments ever in the career of Captain America, and a major change for the Marvel Universe!\r\n32 PGS./MARVEL PSR...$2.99'}],resourceURI:"http://gateway.marvel.com/v1/public/comics/305",urls:[{type:"detail",url:"http://marvel.com/comics/issue/305/captain_america_2002_21?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"purchase",url:"http://comicstore.marvel.com/Captain-America-21/digital-comic/1620?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"reader",url:"http://marvel.com/digitalcomics/view.htm?iid=1620&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"inAppLink",url:"https://applink.marvel.com/issue/1620?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/485",name:"Captain America (2002 - 2004)"},variants:[],collections:[{resourceURI:"http://gateway.marvel.com/v1/public/comics/1334",name:"Captain America Vol. 5: Homeland (Trade Paperback)"}],collectedIssues:[],dates:[{type:"onsaleDate",date:"2003-12-03T00:00:00-0500"},{type:"focDate",date:"-0001-11-30T00:00:00-0500"},{type:"unlimitedDate",date:"2007-11-13T00:00:00-0500"},{type:"digitalPurchaseDate",date:"2014-03-11T00:00:00-0400"}],prices:[{type:"printPrice",price:0},{type:"digitalPurchasePrice",price:1.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/e/20/56e8351389390",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/e/20/56e8351389390",extension:"jpg"},{path:"http://i.annihil.us/u/prod/marvel/i/mg/a/10/56e6e821d58fc",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/305/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/232",name:"Chris Bachalo",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8635",name:"Vc Randy Gentile",role:"letterer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/301",name:"Robert Morales",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/427",name:"Tim Townsend",role:"inker"}],returned:4},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/305/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009220",name:"Captain America"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/305/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/1501",name:"CAPTAIN AMERICA (2002) #21",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/1502",name:"Interior #1502",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/305/events",items:[],returned:0}}]},{id:"2",collectionName:"Viuda Negra",description:"Wish List de c\xf3mics de la Viuda Negra",total:2,comics:[{id:4695,digitalId:632,title:"Black Widow (2004) #1",issueNumber:1,variantDescription:"",description:null,modified:"2014-02-28T10:07:46-0500",isbn:"",upc:"759606055501000111",diamondCode:"JUL041957",ean:"",issn:"",format:"Comic",pageCount:0,textObjects:[],resourceURI:"http://gateway.marvel.com/v1/public/comics/4695",urls:[{type:"detail",url:"http://marvel.com/comics/issue/4695/black_widow_2004_1?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"reader",url:"http://marvel.com/digitalcomics/view.htm?iid=632&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/758",name:"Black Widow (2004 - 2005)"},variants:[],collections:[{resourceURI:"http://gateway.marvel.com/v1/public/comics/1844",name:"Black Widow: Homecoming (Trade Paperback)"}],collectedIssues:[],dates:[{type:"onsaleDate",date:"2004-11-01T00:00:00-0500"},{type:"focDate",date:"-0001-11-30T00:00:00-0500"},{type:"unlimitedDate",date:"2007-11-13T00:00:00-0500"}],prices:[{type:"printPrice",price:0}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/c/70/4bc37e337b8af",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/c/70/4bc37e337b8af",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/4695/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11543",name:"Dan Brown",role:"colorist"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/9319",name:"Richard Morgan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12980",name:"Vc Cory Petit",role:"letterer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/26",name:"Bill Sienkiewicz",role:"penciler"}],returned:4},characters:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/4695/characters",items:[],returned:0},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/4695/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/548",name:"Interior #548",type:"interiorStory"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/65370",name:"BLACK WIDOW 1 cover",type:"cover"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/4695/events",items:[],returned:0}},{id:39,digitalId:1549,title:"Black Widow (2004) #3",issueNumber:3,variantDescription:"",description:"The intrigue continues as the spy who melted Siberia - Natasha Romanova - uses herself as bait to get vital info.  Meanwhile, her hunters in our nation's capital track her down, meaning - you guessed it - a guest appearance by Nick Fury!  Join mega-watt stars Richard K. Morgan & Bill Sienkiewicz (and cover artist Greg Land) as they heat up Marvel's hardboiled redhead this November!",modified:"-0001-11-30T00:00:00-0500",isbn:"",upc:"5960605550-00311",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:0,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"The intrigue continues as the spy who melted Siberia - Natasha Romanova - uses herself as bait to get vital info.  Meanwhile, her hunters in our nation's capital track her down, meaning - you guessed it - a guest appearance by Nick Fury!  Join mega-watt stars Richard K. Morgan & Bill Sienkiewicz (and cover artist Greg Land) as they heat up Marvel's hardboiled redhead this November!"}],resourceURI:"http://gateway.marvel.com/v1/public/comics/39",urls:[{type:"detail",url:"http://marvel.com/comics/issue/39/black_widow_2004_3?utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"},{type:"reader",url:"http://marvel.com/digitalcomics/view.htm?iid=1549&utm_campaign=apiRef&utm_source=3b46b9c54721040bdc0a44a5758d23c9"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/758",name:"Black Widow (2004 - 2005)"},variants:[],collections:[{resourceURI:"http://gateway.marvel.com/v1/public/comics/1844",name:"Black Widow: Homecoming (Trade Paperback)"}],collectedIssues:[],dates:[{type:"onsaleDate",date:"2004-11-24T00:00:00-0500"},{type:"focDate",date:"-0001-11-30T00:00:00-0500"},{type:"unlimitedDate",date:"2007-11-13T00:00:00-0500"}],prices:[{type:"printPrice",price:2.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/a/30/4f576f5c8e81b",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/a/30/4f576f5c8e81b",extension:"jpg"}],creators:{available:7,collectionURI:"http://gateway.marvel.com/v1/public/comics/39/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11543",name:"Dan Brown",role:"colorist"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/360",name:"Justin Ponsor",role:"colorist"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/425",name:"Greg Land",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/811",name:"Richard K. Morgan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/674",name:"Goran Parlov",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/361",name:"Cory Petit",role:"letterer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/26",name:"Bill Sienkiewicz",role:"inker"}],returned:7},characters:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/39/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009189",name:"Black Widow"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009471",name:"Nick Fury"}],returned:2},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/39/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/3534",name:"Black Widow (2004) #3",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/3535",name:"Black Widow (2004) #3",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/39/events",items:[],returned:0}}]}]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;arguments.length>1&&arguments[1];return e},K=Object(R.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.data;switch(t){case"RECEIVE_API_DATA":return r;default:return e}},authReducer:V,collectionReducer:H}),F=t(18),J=t.n(F),z=t(23),$=t(54),q=t(55),Q=t.n(q),Y={KEYS:{KEY_ONE:"THIS_IS_A_TEST",KEY_TWO:"THIS_IS_ANOTHER_TEST"},privateKey:"1d4c901adcec4b14717289898f2817c27a5f663a",publicKey:"3b46b9c54721040bdc0a44a5758d23c9"},X=function(){var e=(new Date).getTime(),a=Q.a.MD5(e+Y.privateKey+Y.publicKey),t="&ts=".concat(e,"&apikey=").concat(Y.publicKey,"&hash=").concat(a);return console.log(t),"".concat("https://gateway.marvel.com:443/v1/public/").concat("comics?format=comic&formatType=comic&dateDescriptor=thisWeek").concat(t)},Z=new function e(){Object(o.a)(this,e),this.fetchData=Object($.a)(J.a.mark(function e(){var a,t,r,c;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(X());case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,r=t.data.results,console.log(r),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),c=e.t0,e.abrupt("return",c);case 16:case"end":return e.stop()}},e,this,[[0,12]])}))},ee=J.a.mark(te),ae=J.a.mark(re);function te(e){var a;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.a)(Z.fetchData);case 3:return a=e.sent,e.next=6,Object(z.b)({type:"RECEIVE_API_DATA",data:a});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},ee,this,[[0,8]])}function re(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.c)(E,te);case 2:case"end":return e.stop()}},ae,this)}var ce=re,ie=Object(W.a)(),ne=Object(R.d)(K,Object(R.a)(ie));ie.run(ce),n.a.render(c.a.createElement(I.a,{store:ne},c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.2c8b7a94.chunk.js.map