(this.webpackJsonpnp2_front=this.webpackJsonpnp2_front||[]).push([[0],{198:function(e,t,a){e.exports=a(363)},203:function(e,t,a){},204:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),i=(a(203),a(34)),c=a(35),s=a(37),m=a(36),u=a(111),p=a(38),h=(a(204),a(399)),d=a(400),f=a(11),E=a(154),b=a(386),g="https://ieng-p.herokuapp.com/",v="api/forms",y="api/users",k=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){var n={email:t.email,password:t.password};console.log("Received values of form: ",t),fetch(g+y+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(console.log(e),"OK"===e.status){var t=a.props.cookies,n=e.user.access_token;t.set("token",n),a.setState({token:n}),window.location.assign("/list")}}))}}))};var n=e.cookies;return a.state={token:n.get("token")||"Ben"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(h.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(h.a.Item,null,e("email",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(d.a,{prefix:r.a.createElement(f.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(h.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(d.a,{prefix:r.a.createElement(f.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(h.a.Item,null,r.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log In")))}}]),t}(n.Component),j=h.a.create({name:"normal_login"})(k),O=Object(b.a)(j),w=a(397),S=a(77),I=a.n(S),x=a(65),C=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));var n=e.cookies;return a.state={token:n.get("token")||"Ben"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=g+v;console.log(t),fetch(t,{method:"GET",headers:{"x-access-token":this.state.token}}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.forms})}))}},{key:"render",value:function(){return console.log(this.state.data),r.a.createElement(w.a,{itemLayout:"horizontal",dataSource:this.state.data,renderItem:function(e){return r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Item.Meta,{avatar:r.a.createElement(I.a,null),title:r.a.createElement(x.b,{to:"/submitted/".concat(e._id,"/list")},e.title)}))}})}}]),t}(n.Component),F=Object(b.a)(C),P=a(29),M=a(94),N=a(388),D=a(401),W=a(395),_=a(47),B=M.a.Option,T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields((function(t,a){if(!t){console.log("Received values of form: ",a);var n=e.props.match.params.id;fetch("http://localhost:3002/api/forms/".concat(n),{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)}).then((function(e){return console.log(e)}))}}))},e.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},e.handleChange=function(e,t){console.log(e,t)},e.handleSelect=function(t){console.log("selected ".concat(t)),e.setState({selectedShit:t})},e.onChangeNum=function(e){console.log(e)},e.buildForm=function(){var t,a=e.props.form.getFieldDecorator,n=e.state.form.fields,o=[];for(var l in n){var i=n[l];if("Text"===i.type)if(i.options){for(var c in t=[],i.options){var s=i.options[c];t.push(r.a.createElement(B,{key:s.value,value:s.value},s.label))}o.push(r.a.createElement(N.a,{key:i.name},r.a.createElement(h.a.Item,{label:i.title,hasFeedback:!0},a(i.name,{rules:[{required:!0,message:"Please select ".concat(i.title)}]})(r.a.createElement(M.a,{placeholder:"Please select an Option"},t)))))}else o.push(r.a.createElement(N.a,{key:i.name},r.a.createElement(h.a.Item,{label:i.title},a(i.title,{rules:[{required:!!i.required,message:"Please input your ".concat(i.title)}]})(r.a.createElement(d.a,{prefix:r.a.createElement(f.a,{type:"form",style:{color:"rgba(0,0,0,.25)"}}),placeholder:i.title})))));else if("Location"===i.type){t=[];var m=0,u=0;if(i.options){for(var p in i.options){var E=i.options[p],b=parseFloat(E.value.lat),g=parseFloat(E.value.long);m+=b,u+=g,t.push(r.a.createElement(_.Marker,{key:p,title:E.label,name:"item-".concat(p),position:{lat:b,lng:g}}))}m/=i.options.length,u/=i.options.length}o.push(r.a.createElement(N.a,{key:i.name,style:{height:450}},r.a.createElement(h.a.Item,{label:i.title},r.a.createElement(_.Map,{initialCenter:{lat:m,lng:u},google:e.props.google,style:{width:"400px",height:"400px",margin:"16px"},zoom:5},t,r.a.createElement(_.InfoWindow,null,r.a.createElement("div",null,r.a.createElement("h1",null,i.title)))))))}else"Number"===i.type?o.push(r.a.createElement(N.a,{key:i.name},r.a.createElement(h.a.Item,{label:i.title},a(i.title,{rules:[{required:!!i.required,message:"Please input your ".concat(i.title)}]})(r.a.createElement(D.a,{onChange:e.onChangeNum()}))))):"Date"===i.type&&o.push(r.a.createElement(N.a,{key:i.name},r.a.createElement(h.a.Item,{label:i.title},a(i.title,{rules:[{required:!!i.required,message:"Please input your ".concat(i.title)}]})(r.a.createElement(W.a,{onChange:e.handleChange(),placeholder:i.title})))))}return e.setState({formItems:o}),o},e.state={formItems:[]},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id,a=g+v+"/".concat(t);console.log(a),fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({form:t}),e.buildForm()}))}},{key:"render",value:function(){this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement("h1",null," View "),r.a.createElement(h.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:14}},{onSubmit:this.handleSubmit}),r.a.createElement(N.a,{gutter:24},this.state.formItems),r.a.createElement(h.a.Item,{wrapperCol:{span:12,offset:6}},r.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),t}(n.Component),A=Object(_.GoogleApiWrapper)({apiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"})(T),q=h.a.create({name:"validate_other"})(A),G=Object(P.f)(q),L=a(151),z=a.n(L),R=a(152),J=a.n(R),K=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).deleteItem=function(e){var t=e.target.dataset.eid,n=a.props.match.params.id;if(console.log(t),confirm("Are you sure?")){var r=g+v+"/".concat(n,"/list/").concat(t);fetch(r,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(console.log(e),"ok"===e.result){var n=[];a.state.data.forEach((function(e){e._id!==t&&n.push(e)})),a.setState({data:n})}}))}};var n=e.cookies;return a.state={token:n.get("token")||"Ben"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=g+v+"/".concat(t,"/list");console.log(a),fetch(a,{method:"GET",headers:{"x-access-token":this.state.token}}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(w.a,{itemLayout:"horizontal",dataSource:this.state.data,renderItem:function(t){return r.a.createElement(w.a.Item,{key:t._id,actions:[r.a.createElement(E.a,{"data-eid":t._id,icon:"delete",type:"danger",onClick:e.deleteItem})]},r.a.createElement(w.a.Item.Meta,{avatar:r.a.createElement(I.a,null),title:r.a.createElement(x.b,{to:"/submitted/".concat(e.props.match.params.id,"/view/").concat(t._id)},t.username)}))}})}}]),t}(n.Component),V=Object(b.a)(Object(P.f)(K)),U=a(391),$=a(390),H=a(396),Q=a(190),X=a(402),Y=a(389),Z=a(398),ee=Object(Q.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function te(e){var t=ee();return r.a.createElement("div",{className:t.root},r.a.createElement(X.a,{position:"static"},r.a.createElement(Y.a,null,r.a.createElement(Z.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},e.icon),r.a.createElement($.a,{variant:"h6",className:t.title},"Form Generator"))))}M.a.Option;var ae=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).csvButton=function(e){var t=a.props.match.params,n=t.id,r=t.vid,o=g+v+"/".concat(n,"/list/").concat(r,"/csv");window.open(o,"_blank")},a.buildForm=function(){a.props.form.getFieldDecorator;var e,t=a.state.form.fields,n=[],o=0;for(var l in t){var i=t[l];if("Number"===i.type&&(o+=parseInt(i.value,10)),"Location"===i.type){e=[];var c,s,m=i.value.split("&");c=parseFloat(m[0].split("=")[1]),s=parseFloat(m[1].split("=")[1]),e.push(r.a.createElement(_.Marker,{title:i.title,name:i.name,position:{lat:c,lng:s}})),n.push(r.a.createElement(N.a,{key:i.name,style:{height:450}},r.a.createElement("span",null,i.title,":"),r.a.createElement("br",null),r.a.createElement(_.Map,{initialCenter:{lat:c,lng:s},google:a.props.google,style:{width:"400px",height:"400px",margin:"16px"},zoom:5},e,r.a.createElement(_.InfoWindow,null,r.a.createElement("div",null,r.a.createElement("h1",null,i.title))))))}else n.push(r.a.createElement(N.a,{key:i.name},r.a.createElement("div",{style:{borderColor:"grey",borderStyle:"solid",borderWidth:"1px",borderRadius:"20px",padding:"10px",margin:"10px"}},r.a.createElement("span",null,i.title,":"),r.a.createElement("span",null,"\xa0 ",i.value))))}return a.setState({formItems:n,sum:o}),n};var n=e.cookies;return a.state={token:n.get("token")||"Ben",formItems:[]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params,a=t.id,n=t.vid,r=g+v+"/".concat(a,"/list/").concat(n);console.log(r),fetch(r,{method:"GET",headers:{"x-access-token":this.state.token}}).then((function(e){return e.json()})).then((function(t){e.setState({form:t}),e.buildForm()}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.formItems,r.a.createElement(N.a,null,r.a.createElement("div",{style:{borderColor:"grey",borderStyle:"solid",borderWidth:"1px",borderRadius:"20px",padding:"10px",margin:"10px"}},r.a.createElement("span",null,"Sum Of Numeric Fields:"),r.a.createElement("span",null,"\xa0 ",this.state.sum))),r.a.createElement(N.a,{style:{margin:"20px"}},r.a.createElement(E.a,{onClick:this.csvButton},"Get CSV")))}}]),t}(n.Component),ne=Object(_.GoogleApiWrapper)({apiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"})(ae),re=h.a.create({name:"validate_other"})(ne),oe=Object(b.a)(Object(P.f)(re)),le=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={icon:z.a},e.swap=e.swap.bind(Object(u.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"swap",value:function(e){"test"===e?this.setState({icon:z.a}):"list"===e?this.setState({icon:I.a}):this.setState({icon:J.a})}},{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement(U.a,null,r.a.createElement(te,{icon:"Admin Panel"}),r.a.createElement(U.a,null,r.a.createElement("div",null,r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/view/:id"},r.a.createElement(G,null)),r.a.createElement(P.a,{path:"/submitted/:id/list"},r.a.createElement(V,null)),r.a.createElement(P.a,{path:"/submitted/:id/view/:vid"},r.a.createElement(oe,null)),r.a.createElement(P.a,{path:"/list"},r.a.createElement(F,null)),r.a.createElement(P.a,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(P.a,{path:"*"},r.a.createElement(H.a,{style:t.center,my:8},r.a.createElement($.a,{variant:"h4",component:"h1",gutterBottom:!0},"404",r.a.createElement("br",null),"Page Not Found"))))))))}}]),t}(r.a.Component);le.center={textAlign:"center",display:"block",marginLeft:"auto",marginRight:"auto"};var ie=Object(b.a)(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(393),se=a(392),me=a(123),ue=a(191),pe=Object(ue.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:me.a.A400},background:{default:"#fff"}}}),he=a(394);l.a.render(r.a.createElement(se.a,{theme:pe},r.a.createElement(ce.a,null),r.a.createElement(he.a,null,r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[198,1,2]]]);
//# sourceMappingURL=main.5d833632.chunk.js.map