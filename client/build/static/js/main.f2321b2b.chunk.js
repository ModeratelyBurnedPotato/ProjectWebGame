(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,a){e.exports=a(156)},135:function(e,t,a){e.exports={grey:"#a8a8a8"}},136:function(e,t,a){e.exports={grey:"#a8a8a8"}},137:function(e,t,a){e.exports={grey:"#a8a8a8"}},155:function(e,t,a){e.exports={grey:"#a8a8a8"}},156:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(11),l=a.n(i),s=a(12),c=a.n(s),o=a(28),m=a(16),u=a(17),p=a(27),d=a(26),h=a(188),f=a(191),g=a(190),E=a(192),b=a(51),y=a(187),v=a(184),x=a(189);function k(){var e=[{update:1,date:"07.07.2020",description:"Insert short description here"},{update:2,date:"07.08.2020",description:"Insert short description here"},{update:3,date:"07.13.2020",description:"Insert short description here"},{update:4,date:"07.24.2020",description:"Insert short description here"}];return n.a.createElement("div",{className:"container-padded"},n.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",style:{flexWrap:"nowrap"},spacing:4},n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h4"},"News")),n.a.createElement(v.a,{item:!0},n.a.createElement(y.a,{src:"/Poker.jpg",component:"img",height:"400",title:"Some title"})),n.a.createElement(v.a,{item:!0,container:!0,spacing:2},e.map((function(t){return n.a.createElement(v.a,{item:!0,xs:12,key:e.indexOf(t)},n.a.createElement(h.a,{width:"100%"},n.a.createElement(x.a,{title:"Update ".concat(t.update),subheader:"".concat(t.date)}),n.a.createElement(g.a,null,n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},"".concat(t.description))),n.a.createElement(f.a,null,n.a.createElement(E.a,{size:"small",color:"primary"},"Share"),n.a.createElement(E.a,{size:"small",color:"primary"},"Learn More"))))})))))}var w=a(193),S=a(197),j=a(196),_=a(194),C=a(195);function O(e,t,a){return{name:e,username:t,chips:a}}var D=[O("Jason","poker123",300),O("Marian","marmar",5e3),O("John","jayjay1",20),O("Emily","emlee",100)].sort((function(e,t){return t.chips-e.chips}));function R(){return n.a.createElement("div",{className:"container-padded"},n.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",style:{flexWrap:"nowrap"},spacing:4},n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h4"},"Leaderboard")),n.a.createElement(v.a,{item:!0},n.a.createElement(w.a,{"aria-label":"simple table"},n.a.createElement(_.a,null,n.a.createElement(C.a,null,n.a.createElement(j.a,null,n.a.createElement("b",null,"Name")),n.a.createElement(j.a,{align:"left"},n.a.createElement("b",null,"Username")),n.a.createElement(j.a,{align:"right"},n.a.createElement("b",null,"Chips")))),n.a.createElement(S.a,null,D.map((function(e){return n.a.createElement(C.a,{key:e.name},n.a.createElement(j.a,{component:"th",scope:"row"},e.name),n.a.createElement(j.a,{align:"left"},e.username),n.a.createElement(j.a,{align:"right"},e.chips))})))))))}var I=a(70),T=a(198),N=a(158),U=Object(T.a)({root:{backgroundColor:"#000000",height:"100%"}});function M(e){var t=U();return n.a.createElement(N.a,{classes:{root:t.root},elevation:1|e.elevation,style:e.style},e.children)}var P=Object(T.a)({root:{backgroundColor:"#FFFFFF",height:"100%"}});function B(e){var t=P();return n.a.createElement(N.a,{classes:{root:t.root},className:"scroll-container",elevation:1|e.elevation,style:e.style},e.children)}var z=a(50),W=a(199),V=a(213),L=a(201),F=a(210),A=a(15),G=a(209),H=a(96),Y=a(41),J=a.n(Y),Q=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(m.a)(this,a),r=t.call(this,e);for(var n={},i={},l=0,s=Object.entries(r.props.fields);l<s.length;l++){var c=Object(z.a)(s[l],2),o=c[0];switch(c[1].type){case"checkbox":n[o]=!1,i[o]="";break;case"date":i[o]="";var u=J()();n[o]=u;break;default:i[o]="",n[o]=""}}return r.state={field_values:n,error_states:i},r}return Object(u.a)(a,[{key:"setErrorState",value:function(e,t){var a=Object.assign({},this.state.error_states);a[e]=t,this.setState((function(e){return{error_states:a}}))}},{key:"setValue",value:function(e,t){var a=Object.assign({},this.state.field_values);a[e]=t,this.setState((function(e){return{field_values:a}}))}},{key:"checkEmpty",value:function(e){for(var t=0,a=Object.entries(e);t<a.length;t++){var r=Object(z.a)(a[t],2),n=r[0];if(""===r[1])return this.setErrorState(n,"This field must not be empty."),!0}return!1}},{key:"handleChange",value:function(e){var t=e.target.getAttribute("name"),a=e.target.getAttribute("type");"checkbox"===a?this.setValue(t,e.target.checked):this.setValue(t,e.target.value),"checkbox"!==a&&""===e.target.value?this.setErrorState(t,"This field must not be empty."):this.setErrorState(t,"")}},{key:"handleDateChange",value:function(e,t){this.setValue(e,t),this.setErrorState(e,"")}},{key:"handleSubmit",value:function(e){return e.preventDefault(),this.checkEmpty(this.state.field_values)?null:{form:this,body:this.state.field_values}}},{key:"render",value:function(){for(var e=this,t=this.props,a=t.fields,r=t.tBoxVariant,i=t.button,l=t.onSubmit,s=(t.name,Object(I.a)(t,["fields","tBoxVariant","button","onSubmit","name"])),c=[],o=function(){var t=Object(z.a)(u[m],2),a=t[0],i=t[1];switch(i.type){case"checkbox":c.push(n.a.createElement(v.a,{item:!0,xs:!0,key:a},n.a.createElement(W.a,{control:n.a.createElement(V.a,{name:a,checked:e.state.field_values[a],onChange:function(t){return e.handleChange(t)},color:"primary",size:"small"}),label:n.a.createElement(b.a,{variant:"body2"},i.label)}),n.a.createElement("br",null),n.a.createElement(L.a,{variant:r,error:""!==e.state.error_states[a]},e.state.error_states[a])));break;case"date":c.push(n.a.createElement(v.a,{item:!0,xs:!0,key:a},n.a.createElement(A.a,{utils:H.a},n.a.createElement(G.a,{disableFuture:!0,fullWidth:!0,name:a,variant:"inline",inputVariant:r,format:"MMMM DD, yyyy",margin:"normal",label:i.label,value:e.state.field_values[a],onChange:function(t){return e.handleDateChange(a,t)},error:""!==e.state.error_states[a],helperText:e.state.error_states[a]}))));break;default:c.push(n.a.createElement(v.a,{item:!0,xs:!0,key:a},n.a.createElement(F.a,{label:i.label,name:a,variant:r,type:i.type,value:e.state.field_values[a],error:""!==e.state.error_states[a],helperText:e.state.error_states[a],margin:"normal",onChange:function(t){return e.handleChange(t)},fullWidth:!0})))}},m=0,u=Object.entries(a);m<u.length;m++)o();return"string"===typeof i?c.push(n.a.createElement(v.a,{item:!0,xs:!0,key:"button"},n.a.createElement(E.a,{type:"submit",fullWidth:!0},i))):c.push(i),n.a.createElement(v.a,Object.assign({container:!0,direction:"column",spacing:0},s),n.a.createElement("form",{noValidate:!0,onSubmit:function(t){return l(e.handleSubmit(t))}},c))}}]),a}(n.a.Component);function $(e){return n.a.createElement("span",{style:{lineHeight:"".concat(e.height,"rem")}},"\u200e\u200f\u200f\u200e \u200e")}var q=a(101);function K(e){return n.a.createElement(q.a,Object.assign({viewBox:"0 0 550 550"},e),n.a.createElement("path",{d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",fill:"#4285f4"}),n.a.createElement("path",{d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",fill:"#34a853"}),n.a.createElement("path",{d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",fill:"#fbbc04"}),n.a.createElement("path",{d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",fill:"#ea4335"}))}var X=a(4),Z=a(203),ee=a(202),te=a(212),ae=a(72),re=a(216),ne=a(200),ie=a(219),le=(a(135),a(97)),se=a.n(le);function ce(e){var t=e.children,a=e.value,r=e.index,i=Object(I.a)(e,["children","value","index"]);return n.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),a===r&&n.a.createElement(n.a.Fragment,null,t))}var oe=Object(X.a)((function(e){return{root:{color:se.a.grey},disabled:{display:"none"}}}))((function(e){return n.a.createElement(Z.a,e)})),me=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(m.a)(this,a),r=t.call(this,e);var n=Object.keys(r.props.list),i=Object.values(r.props.list),l=r.props.client.user.display_setting;return r.state={tabs:n,panes:i,selectedTab:0,display:l},r}return Object(u.a)(a,[{key:"setDisplay",value:function(e,t){this.setState((function(a){return{display:e,selectedTab:t}}))}},{key:"setSelectedTab",value:function(e){this.setState((function(t){return{selectedTab:e}}))}},{key:"render",value:function(){var e=this,t=[],a=[];return this.state.display.forEach((function(r,i){t.push(n.a.createElement(oe,{label:e.state.tabs[i],key:i,disabled:!r})),a.push(n.a.createElement(ee.a,{in:e.state.selectedTab===i},n.a.createElement(ce,{value:e.state.selectedTab,index:i,key:i},e.state.panes[i])))})),n.a.createElement("div",{className:"panelContainer main"},n.a.createElement("div",{className:"panelContainer left"},n.a.createElement(M,{style:{borderRadius:"4px 0 0 4px"}},n.a.createElement("div",{className:"nav-content"},n.a.createElement("img",{src:"/Logo-withText-dark.png",style:{width:"90%",margin:"1em auto"},alt:"logo"}),n.a.createElement(te.a,{orientation:"vertical",value:this.state.selectedTab,onChange:function(t,a){e.setSelectedTab(a)},textColor:"primary",variant:"fullWidth",indicatorColor:"secondary"},t),9!==this.props.client.user.raw_type&&n.a.createElement(v.a,{container:!0,style:{padding:"0.8em 1em",alignSelf:"flex-end",marginTop:"auto"},alignItems:"center",spacing:0},n.a.createElement(v.a,{item:!0,xs:10},n.a.createElement(ae.a,{disableRipple:!0,disableTouchRipple:!0,onClick:function(t){return e.setSelectedTab(6)}},n.a.createElement(re.a,{src:this.props.client.user.avatar_url,alt:this.props.client.user.name}),n.a.createElement(b.a,{style:{color:"white",marginLeft:"0.8em"},variant:"body2"},this.props.client.user.name))),n.a.createElement(v.a,{item:!0,xs:2},n.a.createElement(ne.a,{size:"small",onClick:function(t){return e.props.client.logout()}},n.a.createElement(ie.a,{color:"secondary"}))))))),n.a.createElement("div",{className:"panelContainer right"},n.a.createElement(B,{style:{borderRadius:"0 4px 4px 0"}},a)))}}]),a}(n.a.Component),ue=a(204),pe=(a(136),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).login_form=n.a.createRef(),r.register_form=n.a.createRef(),r.state={page_index:0},r}return Object(u.a)(a,[{key:"onLogin",value:function(){var e=Object(o.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a={username:t.body.username,password:t.body.password},e.prev=3,e.next=6,this.props.client.auth(a);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(3),this.login_form.current.setErrorState("password",e.t0.message),e.abrupt("return");case 12:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onRegister",value:function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r,n,i,l,s,o,m,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(a=t.body,r=a.username,n=a.email,i=a.dob,l=a.password,s=a.re_password,o=a.tnc,m=/(\w+@\w+\.\w+)/g,l===s){e.next=9;break}return this.register_form.current.setErrorState("re_password","Passwords do not match."),e.abrupt("return");case 9:if(n.match(m)){e.next=14;break}return this.register_form.current.setErrorState("email","Please enter a valid email."),e.abrupt("return");case 14:if(!i.isAfter(J()().subtract(19,"years"))){e.next=19;break}return this.register_form.current.setErrorState("dob","You must be 19 or older to register."),e.abrupt("return");case 19:if(o){e.next=22;break}return this.register_form.current.setErrorState("tnc","Please agree to the terms and conditions."),e.abrupt("return");case 22:return u={username:r,email:n,dob:i,password:l},e.prev=23,e.next=26,this.props.client.auth(u,!0);case 26:e.next=37;break;case 28:e.prev=28,e.t0=e.catch(23),e.t1=e.t0.message,e.next="username-duplicate"===e.t1?33:"email-duplicate"===e.t1?35:37;break;case 33:return this.register_form.current.setErrorState("username","Username already exists."),e.abrupt("break",37);case 35:return this.register_form.current.setErrorState("email","Email has been registered with an existing account."),e.abrupt("break",37);case 37:case"end":return e.stop()}}),e,this,[[23,28]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=function(){var t=Object(o.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onLogin(a);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(o.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onRegister(a);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r=n.a.createElement(v.a,{container:!0,alignItems:"flex-start",alignContent:"center",justify:"center",direction:"column",spacing:1},n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(b.a,{variant:"h5"},"Welcome Back")),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(b.a,{variant:"body2",color:"textSecondary"},"Login with your PokerQuarantine account.")),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement($,{height:1})),n.a.createElement(Q,{fields:{username:{label:"Username / Email",type:"text"},password:{label:"Password",type:"password"}},name:"signin",tBoxVariant:"filled",button:n.a.createElement(n.a.Fragment,{key:"spacing button"},n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement($,{height:2})),n.a.createElement(v.a,{container:!0,key:"button",alignItems:"center"},n.a.createElement(v.a,{item:!0,xs:10},n.a.createElement(ue.a,{href:"#",onClick:function(t){t.preventDefault(),e.setState((function(e){return{page_index:1}}))}},"Register")," ",n.a.createElement("br",null),n.a.createElement(ue.a,null,"Reset Password")),n.a.createElement(v.a,{item:!0,xs:2},n.a.createElement(E.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0},"Login")))),ref:this.login_form,onSubmit:t}),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement($,{height:3}),n.a.createElement(b.a,{variant:"body2",color:"textSecondary"},"Or sign in with a third-party account:"),n.a.createElement($,{height:1})),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(E.a,{size:"medium",variant:"outlined",startIcon:n.a.createElement(K,null),disabled:!0},"Sign in with Google"))),i=n.a.createElement(v.a,{container:!0,alignItems:"flex-start",alignContent:"center",justify:"center",direction:"column",spacing:1},n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(b.a,{variant:"h5"},"Register a new account")),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(b.a,{variant:"body2",color:"textSecondary"},"We'll just need some personal information of yours.")),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement($,{height:1})),n.a.createElement(Q,{fields:{username:{label:"Username",type:"text"},email:{label:"Email",type:"email"},dob:{label:"Date of Birth",type:"date"},password:{label:"Password",type:"password"},re_password:{label:"Re-enter Password",type:"password"},tnc:{label:"I have read and agree to the Terms & Conditions",type:"checkbox"}},name:"register",tBoxVariant:"filled",button:n.a.createElement(n.a.Fragment,{key:"spacing button"},n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement($,{height:2})),n.a.createElement(v.a,{container:!0,key:"button",alignItems:"center"},n.a.createElement(v.a,{item:!0,xs:10},n.a.createElement(ue.a,{href:"#",onClick:function(t){t.preventDefault(),e.setState((function(e){return{page_index:0}}))}},"Already have an account? Login")),n.a.createElement(v.a,{item:!0,xs:2},n.a.createElement(E.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0},"register")))),onSubmit:a,ref:this.register_form}));return n.a.createElement("div",{className:"container"},0===this.state.page_index&&n.a.createElement(ee.a,{in:0===this.state.page_index},r),1===this.state.page_index&&n.a.createElement(ee.a,{in:1===this.state.page_index},i))}}]),a}(n.a.Component));a(137);function de(e){var t=e.client.user;return n.a.createElement("div",{className:"container-padded"},n.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",alignContent:"flex-start",spacing:2},n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h4"},"User Info"),n.a.createElement($,{height:2})),n.a.createElement(v.a,{container:!0,item:!0,direction:"row",justify:"space-between",alignItems:"center"},n.a.createElement(v.a,{container:!0,item:!0,xs:10,direction:"column",justify:"flex-start",alignItems:"flex-start",spacing:2},n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(b.a,{variant:"h6"},"Username"),n.a.createElement(b.a,null,t.name)),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(b.a,{variant:"h6"},"User Type"),n.a.createElement(b.a,null,t.type)),n.a.createElement(v.a,{item:!0,xs:!0},n.a.createElement(b.a,{variant:"h6"},"Email"),n.a.createElement(b.a,null,t.email))),n.a.createElement(v.a,{container:!0,item:!0,xs:2,direction:"column",justify:"center",alignItems:"center",spacing:1},n.a.createElement(v.a,{item:!0},n.a.createElement(re.a,{src:t.avatar_url,alt:t.name,style:{height:"5em",width:"5em"}})),n.a.createElement(v.a,{item:!0},n.a.createElement(ue.a,null,"Edit")))),n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h6"},"Birthday"),n.a.createElement(b.a,null,t.dob.format("MMMM Do, YYYY"))),n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h6"},"Chips"),n.a.createElement(b.a,null,"".concat(t.balance))),n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h6"},"Wins / Losses / Total Games Played"),n.a.createElement(b.a,null,"".concat(t.wins," / ").concat(t.losses," / ").concat(t.games_played)))))}var he=a(205),fe=a(211),ge=Object(T.a)({root:{maxWidth:250,maxHeight:350},media:{height:340}});function Ee(e){var t=ge(),a=n.a.useState(""),r=Object(z.a)(a,1)[0];return n.a.createElement(h.a,{className:t.root},n.a.createElement(he.a,null,n.a.createElement(y.a,{component:"img",alt:e.matchCard.title,height:"140",image:"/cards.jpg",title:e.matchCard.title}),n.a.createElement(g.a,null,n.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.matchCard.title),n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.matchCard.short_description))),n.a.createElement(fe.a,{justifyContent:"flex-end"},n.a.createElement(fe.a,{p:0,bgcolor:"grey.300"},n.a.createElement(f.a,null,n.a.createElement(E.a,{size:"medium",color:"primary",onClick:function(){alert("playing "+e.matchCard.title+" with $"+r+" worth of chips")}},"Play")))))}var be=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={matchCard:[{id:1,title:"Texus Holdom",description:'Two cards, known as hole cards, are dealt face down to each player, and then five community cards are dealt face up in three stages. The stages consist of a series of three cards ("the flop"), later an additional single card ("the turn" or "fourth street"), and a final card ("the river" or "fifth street"). Each player seeks the best five card poker hand from any combination of the seven cards of the five community cards and their two hole cards. Players have betting options to check, call, raise, or fold.',short_description:"Two cards, known as hole cards, are dealt face down to each player, and then five community cards are dealt...",amount:5.99},{id:2,title:"Sample Game",description:"This is a sample game",short_description:"This is a sample game, This is a sample game, This is a sample game ,This is a sample game This is a sample game... ",amount:10.99},{id:3,title:"Sample Game",description:"This is a sample game",short_description:"This is a sample game, This is a sample game, This is a sample game ,This is a sample game This is a sample game... ",amount:20.99}]},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-padded",float:"right"},n.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",alignContent:"flex-start",spacing:4},n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h4"},"Match")),n.a.createElement(v.a,{item:!0,container:!0,justify:"flex-end",alignItems:"center",spacing:2,direction:"row"},this.state.matchCard.map((function(t){return n.a.createElement(v.a,{item:!0,xs:12,sm:4,md:4,key:e.state.matchCard.indexOf(t)},n.a.createElement(Ee,{matchCard:e.state.matchCard[e.state.matchCard.indexOf(t)]}," "))})))))}}]),a}(n.a.Component),ye=Object(T.a)({root:{maxWidth:250},media:{height:140}});function ve(e){var t=ye();return n.a.createElement(h.a,{className:t.root},n.a.createElement(he.a,null,n.a.createElement(y.a,{component:"img",alt:e.storeCard.title,height:"140",image:"/chips.png",title:e.storeCard.title}),n.a.createElement(g.a,null,n.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.storeCard.title),n.a.createElement(b.a,{variant:"body2",color:"textPrimary",component:"p"},e.storeCard.description))),n.a.createElement(fe.a,{justifyContent:"flex-end"},n.a.createElement(fe.a,{p:0,bgcolor:"grey.300"},n.a.createElement(f.a,null,n.a.createElement(E.a,{size:"large",color:"primary",onClick:function(){alert(e.storeCard.description)}},"More Info"),n.a.createElement(E.a,{size:"large",color:"primary",onClick:function(){alert("Paying "+e.storeCard.amount)}},"Purchase")))))}var xe=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={StoreCard:[{id:1,title:"Basic Purchase",description:"The minimum purchase, no discount",amount:5.99},{id:2,title:"Medium Purchase",description:"A small discount for spending more",amount:10.99},{id:3,title:"Large Purchase",description:"The largest discount available in a purchase",amount:20.99}]},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-padded"},n.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",alignContent:"flex-start",spacing:4},n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h4"},"Store")),n.a.createElement(v.a,{item:!0,container:!0,spacing:2,direction:"row",justify:"flex-end",alignItems:"flex-start"},this.state.StoreCard.map((function(t){return n.a.createElement(v.a,{item:!0,xs:12,sm:4,md:4,key:e.state.StoreCard.indexOf(t)},n.a.createElement(ve,{storeCard:e.state.StoreCard[e.state.StoreCard.indexOf(t)]}," "))})))))}}]),a}(n.a.Component);var ke=[{name:"Sample UserName 1",case_description:"Sample Report Detail filled by user 1",time:"3:07",ReportID:1e3},{name:"Sample UserName 2",case_description:"Sample Report Detail filled by user 2",time:"3:08",ReportID:1001},{name:"Sample UserName 3",case_description:"Sample Report Detail filled by user 3",time:"3:09",ReportID:1002},{name:"Sample UserName 4",case_description:"Sample Report Detail filled by user 4",time:"4:07",ReportID:1003},{name:"Sample UserName 5",case_description:"Sample Report Detail filled by user 5",time:"5:07",ReportID:1004},{name:"Sample UserName 6",case_description:"Sample Report Detail filled by user 6",time:"7:07",ReportID:1005},{name:"Sample UserName 7",case_description:"Sample Report Detail filled by user 7",time:"8:07",ReportID:1006},{name:"Sample UserName 8",case_description:"Sample Report Detail filled by user 8",time:"9:07",ReportID:1007},{name:"Sample UserName 9",case_description:"Sample Report Detail filled by user 9",time:"9:09",ReportID:1008},{name:"Sample UserName 10",case_description:"Sample Report Detail filled by user 10",time:"9:17",ReportID:1009},{name:"Sample UserName 11",case_description:"Sample Report Detail filled by user 11",time:"9:27",ReportID:1010},{name:"Sample UserName 12",case_description:"Sample Report Detail filled by user 12",time:"9:37",ReportID:1011},{name:"Sample UserName 13",case_description:"Sample Report Detail filled by user 13",time:"9:47",ReportID:1012},{name:"Sample UserName 14",case_description:"Sample Report Detail filled by user 14",time:"9:57",ReportID:1013},{name:"Sample UserName 15",case_description:"Sample Report Detail filled by user 15",time:"9:57",ReportID:1014},{name:"Sample UserName 16",case_description:"Sample Report Detail filled by user 16",time:"10:07",ReportID:1015}];function we(){return n.a.createElement("div",{className:"container-padded"},n.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",style:{flexWrap:"nowrap"},spacing:4},n.a.createElement(v.a,{item:!0},n.a.createElement(b.a,{variant:"h4"},"Management")),n.a.createElement(v.a,{item:!0},n.a.createElement(w.a,{"aria-label":"simple table"},n.a.createElement(_.a,null,n.a.createElement(C.a,null,n.a.createElement(j.a,null,n.a.createElement("b",null,"Username")),n.a.createElement(j.a,{align:"left"},n.a.createElement("b",null,"Report")),n.a.createElement(j.a,{align:"right"},n.a.createElement("b",null,"Time")),n.a.createElement(j.a,{align:"left"},n.a.createElement("b",null," ")))),n.a.createElement(S.a,null,ke.map((function(e){return n.a.createElement(C.a,{key:e.name},n.a.createElement(j.a,{component:"th",scope:"row"},e.name),n.a.createElement(j.a,{align:"left"},e.case_description),n.a.createElement(j.a,{align:"right"},e.time),n.a.createElement(j.a,null,n.a.createElement(E.a,{size:"small",variant:"outlined",color:"primary",onClick:function(t){return a=e.ReportID,void alert("Viewing ReportID: "+a);var a}},"Details")))})))))))}var Se=a(55),je=a.n(Se),_e={0:"Regular User",1:"Moderator"},Ce={9:[!0,!1,!1,!1,!0,!1,!1],0:[!1,!0,!0,!0,!0,!1,!1],1:[!1,!0,!0,!0,!0,!0,!1]},Oe=function(){function e(){Object(m.a)(this,e),this.userdata={},this.userdata.role=9}return Object(u.a)(e,[{key:"login",value:function(){var t=Object(o.a)(c.a.mark((function t(a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={email:a.username,password:a.password},t.abrupt("return",je.a.post("/api/login",r).then((function(t){var a=new e;return a.userdata=t.data,a})).catch((function(e){throw new Error("Incorrect username & password combination.")})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"create",value:function(){var t=Object(o.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",je.a.post("/api/check_email",{email:a.email}).then((function(e){throw new Error("email-duplicate")})).catch((function(t){if("email-duplicate"===t.message)throw t;return je.a.post("/api/signup",{email:a.email,password:a.password,name:a.username,dob:a.dob.toDate()}).then((function(t){var r=new e;return r.userdata={email:a.email,name:a.username,dob:a.dob.toDate(),role:0,balance:0,games_played:0,wins:0,losses:0},r})).catch((function(e){throw e}))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"logout",value:function(){var t=Object(o.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",je.a.get("/api/logout").then((function(t){return new e})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"avatar_url",get:function(){return"https://i.postimg.cc/0N3fsjz3/IMGBIN-giant-panda-dog-cat-avatar-png-Gus-CAj6v.png"}},{key:"name",get:function(){return this.userdata.name}},{key:"id",get:function(){return"0"}},{key:"raw_type",get:function(){return this.userdata.role}},{key:"type",get:function(){return _e[this.userdata.role]}},{key:"email",get:function(){return this.userdata.email}},{key:"dob",get:function(){return J()(this.userdata.dob)}},{key:"balance",get:function(){return this.userdata.balance}},{key:"games_played",get:function(){return this.userdata.games_played}},{key:"wins",get:function(){return this.userdata.wins}},{key:"losses",get:function(){return this.userdata.losses}},{key:"display_setting",get:function(){return Ce[this.userdata.role]}}]),e}(),De=a(208),Re=a(207),Ie=a(98),Te=a(206),Ne=a(71),Ue=Object(Ie.a)({palette:{type:"light",primary:Te.a,secondary:Ne.a,background:{default:"#4B4B4B"}}}),Me=(a(155),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(m.a)(this,a),(r=t.call(this,e)).navigator=n.a.createRef();var i=new Oe;return r.state={user:i},r}return Object(u.a)(a,[{key:"auth",value:function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r,n=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.length>1&&void 0!==n[1]&&n[1],e.prev=1,!a){e.next=8;break}return e.next=5,this.state.user.create(t);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,this.state.user.login(t);case 10:r=e.sent;case 11:this.setState((function(e){return{user:r}})),this.navigator.current.setDisplay(r.display_setting,1),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:case"end":return e.stop()}}),e,this,[[1,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.user.logout();case 2:t=e.sent,this.setState((function(e){return{user:t}})),this.navigator.current.setDisplay(t.display_setting,0);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={"login / register":n.a.createElement(pe,{client:this}),match:n.a.createElement(be,{client:this}),store:n.a.createElement(xe,{client:this}),leaderboard:n.a.createElement(R,{client:this}),news:n.a.createElement(k,{client:this}),management:n.a.createElement(we,{client:this}),"user info":n.a.createElement(de,{client:this})};return n.a.createElement(Re.a,{theme:Ue},n.a.createElement(De.a,null),n.a.createElement(me,{list:e,client:this,ref:this.navigator}))}},{key:"user",get:function(){return this.state.user}}]),a}(n.a.Component));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Me,null)),document.getElementById("root"))},97:function(e,t,a){e.exports={grey:"#a8a8a8"}}},[[125,1,2]]]);
//# sourceMappingURL=main.f2321b2b.chunk.js.map