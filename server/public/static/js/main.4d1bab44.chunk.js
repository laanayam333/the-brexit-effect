(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{152:function(e,t,n){},214:function(e){e.exports=JSON.parse('[{"store":"Money Exchange Legazpi","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","area":"Legazpi","latitude":40.3897555,"longitude":-3.6969138},{"store":"Los Angeles","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg","area":"California","latitude":34.0194,"longitude":-118.4108},{"store":"Chicago","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg","area":"Illinois","latitude":41.8376,"longitude":-87.6818},{"store":"Houston","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","area":"Texas","latitude":29.7805,"longitude":-95.3863},{"store":"Phoenix","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg","area":"Arizona","latitude":33.5722,"longitude":-112.088},{"store":"Philadelphia","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg","area":"Pennsylvania","latitude":40.0094,"longitude":-75.1333},{"store":"San Antonio","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG","area":"Texas","latitude":29.4724,"longitude":-98.5251},{"store":"San Diego","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg","area":"California","latitude":32.8153,"longitude":-117.135},{"store":"Dallas","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg","area":"Texas","latitude":32.7757,"longitude":-96.7967},{"store":"San Jose","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG","area":"California","latitude":37.2969,"longitude":-121.8193},{"store":"Austin","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG","area":"Texas","latitude":30.3072,"longitude":-97.756},{"store":"Jacksonville","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg","area":"Florida","latitude":30.337,"longitude":-81.6613},{"store":"San Francisco","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg","area":"California","latitude":37.7751,"longitude":-122.4193},{"store":"Columbus","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg","area":"Ohio","latitude":39.9848,"longitude":-82.985},{"store":"Indianapolis","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG","area":"Indiana","latitude":39.7767,"longitude":-86.1459},{"store":"Fort Worth","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg","area":"Texas","latitude":32.7795,"longitude":-97.3463},{"store":"Charlotte","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg","area":"North Carolina","latitude":35.2087,"longitude":-80.8307},{"store":"Seattle","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg","area":"Washington","latitude":47.6205,"longitude":-122.3509},{"store":"Denver","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG","area":"Colorado","latitude":39.7618,"longitude":-104.8806},{"store":"El Paso","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg","area":"Texas","latitude":31.8484,"longitude":-106.427}]')},216:function(e,t,n){e.exports=n(386)},221:function(e,t,n){},271:function(e,t,n){},365:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},385:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(38),i=n.n(o),s=(n(221),n(5)),c=n(6),l=n(10),u=n(8),m=n(11),h=n(61),p=n(40),d=n.n(p),g=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,n,a,r){return t.service.post("signup",{username:e,password:n,imageURL:a,money:r})},this.login=function(e,n){return t.service.post("login",{username:e,password:n})},this.logout=function(){return t.service.post("logout")},this.loggedin=function(){return t.service.get("loggedin")},this.handleUpload=function(e){return t.service.post("upload",e)},this.service=d.a.create({baseURL:"".concat("https://the-brexit-effect.herokuapp.com/api/"),withCredentials:!0})},f=(n(198),n(3)),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r)),console.log(n.state)},n.handleFormSubmit=function(e){e.preventDefault(),console.log(n.state);var t=n.state,a=t.username,r=t.password,o=t.imageURL,i=t.money;n.authServices.signup(a,r,o,i).then(function(e){n.setState({username:"",password:"",imageURL:String,money:0}),n.props.setUser(e),n.props.history.push("/")}).catch(function(e){return console.log(e)})},n.handleFileUpload=function(e){var t=new FormData;t.append("imageURL",e.target.files[0]),n.authServices.handleUpload(t).then(function(e){n.setState({imageURL:e.data.secure_url})}).catch(function(e){return console.log(e)})},n.state={username:"",password:"",imageURL:"",money:0},n.authServices=new g,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},"User: ",r.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Password: ",r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Image: ",r.a.createElement("input",{name:"imageURL",id:"input-img",type:"file",onChange:this.handleFileUpload})," ",r.a.createElement("br",null),"Money: ",r.a.createElement("input",{name:"money",type:"number",value:this.state.money,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),v=n(394),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.authServices.login(a,r).then(function(e){n.setState({username:"",password:""}),console.log(n.props),n.props.setUser(e)}).catch(function(e){return console.log(e.response.data.message)})},n.state={username:"",password:"",imageURL:"",money:0},n.authServices=new g,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},"Username: ",r.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Password: ",r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("input",{className:"login-butt",type:"submit",value:"Submit"})))}}]),t}(a.Component),y=n(47),w=n(31),j=n.n(w),O=(n(152),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,Object.assign({className:"modal-auth"},this.props,{size:"sm"}),r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,"Login")),r.a.createElement(j.a.Body,null,r.a.createElement(E,{setUser:this.props.setUser})))}}]),t}(a.Component)),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,Object.assign({},this.props,{size:"large"}),r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,"Signup")),r.a.createElement(j.a.Body,null,r.a.createElement(b,{setUser:this.props.setUser})))}}]),t}(a.Component),k=n(404),C=n(403),x=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e,n))).logout=function(){a.authServices.logout().then(function(e){a.props.setUser(null)}).catch(function(e){return console.log(e)})},a.state={loggedInUser:null,smShow:!1,lgShow:!1},a.authServices=new g,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.userInSession?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(k.a,{variant:"dark",expand:"lg"},r.a.createElement(k.a.Brand,{style:{textDecoration:"none",color:"#0d0d0d"},href:"/"},"The Brexit Effect"),r.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"justify-content-end",style:{width:"100%"}},r.a.createElement(C.a.Item,{style:{textDecoration:"none",color:"#0d0d0d"},className:"nav-item"},r.a.createElement(y.b,{style:{textDecoration:"none",color:"#0d0d0d"},to:"/dashboard"},"Dashboard")),r.a.createElement(C.a.Item,{className:"nav-item"},r.a.createElement(y.b,{style:{textDecoration:"none",color:"#0d0d0d"},to:"/profile"},"Profile")),r.a.createElement(C.a.Item,{className:"nav-item"},r.a.createElement(y.b,{style:{textDecoration:"none",color:"#0d0d0d"},to:"/",onClick:this.logout},"Logout"))))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(k.a,{variant:"dark",expand:"lg"},r.a.createElement(k.a.Brand,{style:{textDecoration:"none",color:"#0d0d0d"},href:"/"},"The Brexit Effect"),r.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"justify-content-end",style:{width:"100%"}},r.a.createElement(C.a.Item,{className:"nav-item"},r.a.createElement(y.b,{style:{textDecoration:"none",color:"#0d0d0d"},onClick:function(){return e.setState({smShow:!0})}},"Login")),r.a.createElement(C.a.Item,{className:"nav-item"},r.a.createElement(y.b,{style:{textDecoration:"none",color:"#0d0d0d"},onClick:function(){return e.setState({lgShow:!0})}},"Signup")),r.a.createElement(O,{show:this.state.smShow,onHide:function(){return e.setState({smShow:!1})},setUser:this.props.setUser}),r.a.createElement(_,{show:this.state.lgShow,onHide:function(){return e.setState({lgShow:!1})},setUser:this.props.setUser}))))))}}]),t}(a.Component),S=n(201),U=function e(){var t=this;Object(s.a)(this,e),this.getLatestNews=function(){return t.service.get("top-headlines?q=brexit&language=en&apiKey=".concat("041cff11d05448a3a8506f81a8893422"))},this.service=d.a.create({baseURL:"https://newsapi.org/v2/"})},D=function(e){var t=e.title;return r.a.createElement("p",{style:{whiteSpace:"nowrap",margin:"0"}},"\u2003",t,"\u2003")},N=(n(271),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.renderList()},e.renderList=function(){e.services.getLatestNews().then(function(t){e.setState({tickers:t.data.articles})}).catch(function(e){return console.log(e)})},e.state={tickers:[]},e.services=new U,e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return 0!==this.state.tickers.length?r.a.createElement(S.a,{speed:5,mode:"smooth"},function(){return r.a.createElement("div",{className:"d-flex text-center"},e.state.tickers.map(function(e,t){return r.a.createElement(D,Object.assign({key:t},e))}))}):r.a.createElement("p",null,"Loading...")}}]),t}(a.Component)),F=n(408),P=n(416),I=n(410),L=function e(){var t=this;Object(s.a)(this,e),this.getLatestCurrency=function(){return t.service.get("latest?base=GBP&symbols=USD,EUR,CNY,CHF,AUD")},this.getHistoricalCurrency=function(e){return t.service.get("history?start_at=2016-06-23&end_at=".concat(e,"&symbols=GBP"))},this.service=d.a.create({baseURL:"https://api.exchangeratesapi.io/"})},T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,a="top"===e.orientation?n-20:n+20;return r.a.createElement("g",null,r.a.createElement("circle",{cx:t,cy:a,r:"20",stroke:"tomato",fill:"none"}),r.a.createElement("circle",{cx:t,cy:a,r:"25",stroke:"orange",fill:"none"}),r.a.createElement("circle",{cx:t,cy:a,r:"30",stroke:"gold",fill:"none"}))}}]),t}(a.Component),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={latestExchange:null},e.services=new L,e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.services.getLatestCurrency().then(function(t){return e.setState({latestExchange:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return this.state.latestExchange?r.a.createElement("svg",{viewBox:"0 0 400 400"},r.a.createElement(F.a,{labelComponent:r.a.createElement(P.a,{flyoutComponent:r.a.createElement(T,null)}),colorScale:["#A6A6A6","#595959","#F2F2F2"],standalone:!1,width:400,height:400,padAngle:3,data:[{x:"EUR ".concat(this.state.latestExchange.rates.EUR.toFixed(3)),y:this.state.latestExchange.rates.EUR},{x:"USD ".concat(this.state.latestExchange.rates.USD.toFixed(3)),y:this.state.latestExchange.rates.USD},{x:"CNY ".concat(this.state.latestExchange.rates.CNY.toFixed(3)),y:this.state.latestExchange.rates.CNY},{x:"CHF ".concat(this.state.latestExchange.rates.CHF.toFixed(3)),y:this.state.latestExchange.rates.CHF},{x:"AUD ".concat(this.state.latestExchange.rates.AUD.toFixed(3)),y:this.state.latestExchange.rates.AUD}],innerRadius:100,labelRadius:111,style:{labels:{fontSize:7,fill:"#0d0d0d",fontFamily:"Lexend Deca"}},events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"gold",width:30}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]}),"/> />",r.a.createElement(I.a,{textAnchor:"middle",style:{fontSize:20,fill:"#0d0d0d",fontFamily:"Lexend Deca"},x:200,y:200,text:"The Brexit Effect"})):r.a.createElement("p",null,"Processing")}}]),t}(a.Component),H=(n(365),function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"data-bubble"},r.a.createElement(A,null)),r.a.createElement(N,null))}),B=n(19),z=n(405),M=n(415),R=n(409),J=n(417),G=n(413),W=n(407),V=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.renderHistorical()},e.renderHistorical=function(){e.services.getHistoricalCurrency(e.state.updatedToday).then(function(t){var n=t.data.rates,a={},r=(Object.entries(n).forEach(function(e){var t=Object(B.a)(e,2),n=t[0],r=t[1];Object.values(r).forEach(function(e){a[n]=e})}),[]),o=[],i=Object.keys(a).sort(function(e,t){return e=e.split("/").reverse().join(""),t=t.split("/").reverse().join(""),e.localeCompare(t)});i.forEach(function(e){r.push(a[e])});for(var s=0;s<r.length;s++)o.push({x:new Date(i[s]),y:r[s]});e.setState({res:o}),console.log(e.state.updatedToday)}).catch(function(e){return console.log(e)})},e.state={res:[{x:0,y:""}],updatedToday:(new Date).toISOString().slice(0,10)},e.services=new L,e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleZoom",value:function(e){this.setState({selectedDomain:e})}},{key:"handleBrush",value:function(e){this.setState({zoomDomain:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z.a,{width:1e3,height:400,maxDomain:{y:1},minDomain:{y:.7},scale:{x:"time"},containerComponent:r.a.createElement(M.a,{responsive:!1,zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},r.a.createElement(R.a,{style:{data:{stroke:"tomato",strokeWidth:2}},data:this.state.res})),r.a.createElement(z.a,{padding:{top:0,left:50,right:50,bottom:30},width:1e3,height:100,maxDomain:{y:1},scale:{x:"time"},containerComponent:r.a.createElement(J.a,{responsive:!1,brushDimension:"x",brushDomain:this.state.selectedDomain,onBrushDomainChange:this.handleBrush.bind(this)})},r.a.createElement(G.a,{tickValues:[new Date(2016,1,1),new Date(2017,1,1),new Date(2018,1,1),new Date(2019,1,1)],tickFormat:function(e){return new Date(e).getFullYear()}}),r.a.createElement(W.a,{style:{data:{stroke:"blue"}},data:this.state.res})))}}]),t}(a.Component),Y=(n(375),n(113)),Z=n.n(Y),q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.renderList()},e.renderList=function(){e.services.getLatestNews().then(function(t){e.setState({news:t.data.articles}),console.log(e.state.news)}).catch(function(e){return console.log(e)})},e.state={news:[]},e.services=new U,e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Z.a,{fade:"true"},this.state.news.map(function(e){return r.a.createElement(Z.a.Item,{key:e._id,className:"carousel-item"},r.a.createElement("img",{src:e.urlToImage,key:!0,alt:"News Slide",className:"news-slide-images"}),r.a.createElement(Z.a.Caption,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.url},"Read More")))}))}}]),t}(a.Component),K=n(399),X=(n(382),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(K.a,{className:"justify-content-center"},r.a.createElement(V,{className:"main-chart"}),r.a.createElement(q,null))))}),$=n(75),Q=function(e){var t=e.children;return r.a.createElement("div",{className:"control-panel"},t)},ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.containerComponent||Q;return r.a.createElement(e,null)}}]),t}(a.PureComponent);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ae={cursor:"pointer",fill:"#F28705",stroke:"none"},re=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=void 0===t?20:t,a=e.onClick;return r.a.createElement("svg",{height:n,viewBox:"0 0 24 24",style:ne({},ae,{transform:"translate(".concat(-n/2,"px,").concat(-n,"px)")}),onClick:a},r.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),t}(a.PureComponent),oe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.info,t="".concat(e.store,", ").concat(e.district);return r.a.createElement("div",null,r.a.createElement("div",null,t," |"," ",r.a.createElement("a",{target:"_new",href:"http://en.wikipedia.org/w/index.php?title=Special:Search&search=".concat(t)},"Wikipedia")),r.a.createElement("img",{width:240,src:e.image}))}}]),t}(a.PureComponent),ie=n(214),se="".concat("pk.eyJ1IjoibGFhbmF5YW0zMzMiLCJhIjoiY2p6anJrMTl4MDZyZjNnc2F5ZWhscjVlMiJ9.uj60cln4FkSFnRx6XtsrfA"),ce={position:"absolute",top:36,left:0,padding:"10px"},le={position:"absolute",top:0,left:0,margin:10},ue=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._updateViewport=function(e){n.setState({viewport:e})},n._renderPlaceMarker=function(e,t){return r.a.createElement($.b,{key:"marker-".concat(t),longitude:e.longitude,latitude:e.latitude},r.a.createElement(re,{size:20,onClick:function(){return n.setState({popupInfo:e})}}))},n.state={viewport:{latitude:40.416775,longitude:-3.70379,zoom:10,bearing:0,pitch:0,width:0,heigth:0},popupInfo:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"_renderPopup",value:function(){var e=this,t=this.state.popupInfo;return t&&r.a.createElement($.d,{tipSize:5,anchor:"top",longitude:t.longitude,latitude:t.latitude,closeOnClick:!1,onClose:function(){return e.setState({popupInfo:null})}},r.a.createElement(oe,{info:t}))}},{key:"render",value:function(){var e=this.state.viewport;return r.a.createElement($.e,Object.assign({},e,{width:"90vw",height:"50vh",mapStyle:"mapbox://styles/laanayam333/cjzjsu5c307jx1cpfbmvzhvgr",onViewportChange:this._updateViewport,mapboxApiAccessToken:se}),ie.map(this._renderPlaceMarker),this._renderPopup(),r.a.createElement("div",{className:"nav",style:ce},r.a.createElement($.c,null)),r.a.createElement(ee,{containerComponent:this.props.containerComponent}),r.a.createElement($.a,{style:le,positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}))}}]),t}(a.Component);n(383);var me=function e(){var t=this;Object(s.a)(this,e),this.getAllConversions=function(){return t.service.get("getAllConversions")},this.postConversion=function(e,n,a,r){return t.service.post("addConversion",{result:e,fromCurrency:n,toCurrency:a,amount:r})},this.deleteConversion=function(e){return t.service.post("/:id/deleteConversion",{_id:e})},this.service=d.a.create({baseURL:"".concat("https://the-brexit-effect.herokuapp.com/api/"),withCredentials:!0})},he=n(400),pe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).convertHandler=function(){n.state.fromCurrency!==n.state.toCurrency&&n.state.amount>0?d.a.get("https://api.exchangeratesapi.io/latest?base=".concat(n.state.fromCurrency,"&symbols=").concat(n.state.toCurrency)).then(function(e){var t=n.state.amount*e.data.rates[n.state.toCurrency];n.setState({result:t.toFixed(3)})}).catch(function(e){console.log("Opps",e.message)}):n.setState({result:"Enter valid amount / currency "})},n.selectHandler=function(e){"from"===e.target.name&&n.setState({fromCurrency:e.target.value,result:null}),"to"===e.target.name&&n.setState({toCurrency:e.target.value,result:null})},n.postConversion=function(){n.services.postConversion().then(function(e){return n.setState({currencies:e.data})}).catch(function(e){return console.log(e)})},n.state={result:null,fromCurrency:"GBP",toCurrency:"EUR",amount:null,currencies:[]},n.service=new me,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.exchangeratesapi.io/latest?base=GBP&symbols=USD,EUR,CNY,CHF,AUD").then(function(t){var n=["GBP"];for(var a in t.data.rates)n.push(a);e.setState({currencies:n.sort()})}).catch(function(e){console.log("Opps",e.message)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Converter"},r.a.createElement("div",{className:"Form"},r.a.createElement("input",{name:"amount",placeholder:"Enter amount",type:"text",value:this.state.amount,onChange:function(t){return e.setState({amount:t.target.value,result:null})}}),r.a.createElement("select",{name:"from",onChange:function(t){return e.selectHandler(t)},value:this.state.fromCurrency},this.state.currencies.map(function(e){return r.a.createElement("option",{key:e},e)})),r.a.createElement("select",{name:"to",onChange:function(t){return e.selectHandler(t)},value:this.state.toCurrency},this.state.currencies.map(function(e){return r.a.createElement("option",{key:e},e)})),"//!CONVERT BUTTON",r.a.createElement(he.a,{onClick:this.convertHandler},"Convert"),"//!SAVE BUTTON",r.a.createElement(he.a,{onClick:function(){return e.service.postConversion(e.state.result,e.state.fromCurrency,e.state.toCurrency,e.state.amount)},className:"btn btn-dark btn-md"},"Save")),r.a.createElement("div",null,this.state.result&&r.a.createElement("h1",null,this.state.result)))}}]),t}(a.Component),de=n(401),ge=(n(384),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onDelete=function(e){n.service.deleteConversion(e).then(console.log("hola")).catch(function(e){return console.log("Error",e)})},n.service=new me,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("article",{className:"conversion-card"},r.a.createElement("p",null,"If you change "),r.a.createElement("hr",null),r.a.createElement("h5",null,this.props.amount," ",this.props.fromCurrency),r.a.createElement("hr",null),r.a.createElement("p",null,"on "),r.a.createElement("h6",null,this.props.createdAt.slice(0,10)),r.a.createElement("hr",null),r.a.createElement("p",null,"you get "),r.a.createElement("h4",null," ",this.props.result," ",this.props.toCurrency),r.a.createElement("button",{onClick:this.onDelete(this.props._id),className:"btn btn-dark btn-md"},"Delete"),r.a.createElement("hr",null)))}}]),t}(a.Component)),fe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.showList()},n.showList=function(){n.service.getAllConversions().then(function(e){return n.setState({conversionList:e.data})}).catch(function(e){return console.log(e)})},n.state={conversionList:[]},n.service=new me,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},this.state.conversionList.map(function(e){return r.a.createElement(ge,Object.assign({key:e._id},e))})))}}]),t}(a.Component),be=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,Object.assign({className:"modal-auth"},this.props,{size:"xl"}),r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,"Conversion History")),r.a.createElement(j.a.Body,null,r.a.createElement(fe,null)))}}]),t}(a.Component),ve=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={lgShow:!1},n.authServices=new g,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(K.a,{className:"converter"},r.a.createElement(de.a,{md:8},r.a.createElement(pe,null)),r.a.createElement(de.a,{md:4},r.a.createElement("button",{onClick:function(){return e.setState({lgShow:!0})},className:"btn btn-dark btn-md"},"Show Conversions")),r.a.createElement(be,{show:this.state.lgShow,onHide:function(){return e.setState({lgShow:!1})},setUser:this.props.setUser})),r.a.createElement(K.a,null,r.a.createElement(ue,{className:"map"}))))}}]),t}(a.Component),Ee=(n(385),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).setTheUser=function(t){e.setState({loggedInUser:t}),console.log("A component has changed the user in App:",e.state.loggedInUser)},e.fetchUser=function(){null===e.state.loggedInUser&&e.authServices.loggedin().then(function(t){return e.setState({loggedInUser:t})}).catch(function(t){return e.setState({loggedInUser:!1})})},e.state={loggedInUser:null},e.authServices=new g,e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{setUser:this.setTheUser,userInSession:this.state.loggedInUser}),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,render:function(t){return r.a.createElement(H,Object.assign({},t,{setUser:e.setTheUser}))}}),r.a.createElement(h.b,{path:"/profile",exact:!0,render:function(t){return r.a.createElement(ve,Object.assign({},t,{setUser:e.setTheUser,userInSession:e.state.loggedInUser}))}}),r.a.createElement(h.b,{path:"/addConversion",exact:!0,component:ve}),r.a.createElement(h.b,{path:"/getAllConversions",exact:!0,component:fe}),r.a.createElement(h.b,{path:"/dashboard",exact:!0,render:function(t){return r.a.createElement(X,Object.assign({},t,{setUser:e.setTheUser}))}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{setUser:this.setTheUser,userInSession:this.state.loggedInUser}),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:H,render:function(t){return r.a.createElement(H,Object.assign({},t,{setUser:e.setTheUser}))}}),r.a.createElement(h.b,{path:"/login",exact:!0,render:function(t){return r.a.createElement(E,Object.assign({},t,{setUser:e.setTheUser}))}}),r.a.createElement(h.b,{path:"/signup",exact:!0,render:function(t){return r.a.createElement(b,Object.assign({},t,{setUser:e.setTheUser}))}}),">"))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y.a,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[216,1,2]]]);
//# sourceMappingURL=main.4d1bab44.chunk.js.map