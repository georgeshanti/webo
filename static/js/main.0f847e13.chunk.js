(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,function(e,a,t){e.exports={"tax-calc":"style_tax-calc__1EiJk",container:"style_container__1mqkD",topbar:"style_topbar__LAPWl",card:"style_card__OIdLN",section:"style_section__1IGp4",active:"style_active__1r4bs",sub:"style_sub__3KODG",para:"style_para__2S8Mg",button:"style_button__1bMar",man:"style_man__F0Nsp",others:"style_others__3tNPf",title:"style_title__3lriG",othersDrop:"style_othersDrop__zYv6E",open:"style_open__2s5Hz",results:"style_results__MEg4Z",result:"style_result__1QY63",neutral:"style_neutral__ABXJA",per:"style_per__3A2ny",good:"style_good__2y1Hb",bad:"style_bad__GgoFv",val:"style_val__tiAbJ",footer:"style_footer__3GRED","share-box":"style_share-box__26_LY",share:"style_share__1d03o",init:"style_init__3w-DN",breaker:"style_breaker__3C0vn"}},,,,,,,function(e,a,t){e.exports={features:"style_features__3vH8i",image:"style_image__3e2Qq",center:"style_center__qLZMk",image1:"style_image1__2oqYO",image2:"style_image2__1czur",image3:"style_image3__23OOJ",image4:"style_image4__3LYWA",image5:"style_image5__2Lwo-"}},,,,,function(e,a,t){e.exports={input:"style_input__PhwSg",drop:"style_drop__23tKF",top:"style_top__3rz1i",selected:"style_selected__3Uufy",icon:"style_icon__13xt0",options:"style_options__1iIYX",open:"style_open__3zAab",sub:"style_sub__39KNI"}},,function(e,a,t){e.exports={topbar:"style_topbar__3r3ED",navbar:"style_navbar__3VILb",logo:"style_logo__HuHOz","logo-img":"style_logo-img__3FRkh","logo-text":"style_logo-text__2fazl",menu:"style_menu__1q_Dd",open:"style_open__GgljH",close:"style_close__igeQJ"}},,,,function(e,a,t){e.exports={footer:"style_footer__-eIEB",first:"style_first__Xb30c",desc:"style_desc__6YGF_",text:"style_text__3k_N6",menu:"style_menu__oRo3F",second:"style_second__1545V"}},,function(e,a,t){e.exports={home:"style_home__16GSd",first:"style_first__3PcEe",content:"style_content__2XzCj",app_shot:"style_app_shot__3wu8z",second:"style_second__3ArcZ"}},,function(e,a,t){e.exports={question:"style_question__3Dpin",q:"style_q__1jQvi",open:"style_open__1wE2z"}},function(e,a,t){e.exports={reach:"style_reach__1EWqh",heading:"style_heading__3vTm9","card-background":"style_card-background__1-ZRH","card-wrapper":"style_card-wrapper__2mDIg"}},function(e,a,t){e.exports={finances:"style_finances__1z1tj",options:"style_options__22G2U",subscribe:"style_subscribe__1mhRX"}},,function(e,a,t){e.exports={final:"style_final__awSaV",banner:"style_banner__2-kXF"}},,,,,,function(e,a,t){e.exports={"get-started":"style_get-started__2CuVD"}},function(e,a,t){e.exports={wonder:"style_wonder__opsNv"}},,,,function(e,a,t){e.exports=t(55)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){e.exports={App:"style_App__374xc","App-logo":"style_App-logo__1ryeC","App-logo-spin":"style_App-logo-spin__uDUdH","App-header":"style_App-header__3qP79","App-link":"style_App-link__3QRqU"}},,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(32),i=t.n(s),r=(t(43),t(16)),c=t(17),o=(t(44),t(45),t(46),t(2)),u=t(3),m=t(5),h=t(4),p=t(6),v=t(21),d=t.n(v),g=t(20),y=t(15),E=t.n(y),b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).state={open:!1},t.toggle=t.toggle.bind(Object(g.a)(t)),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"toggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){return l.a.createElement("div",{className:E.a.topbar},l.a.createElement("div",{className:E.a.navbar},l.a.createElement("a",{className:E.a.logo},l.a.createElement("img",{className:E.a["logo-img"],src:"img/Group 3.svg",alt:"logo"}),l.a.createElement("img",{className:E.a["logo-text"],src:"img/savemo.png",alt:"logo-text"})),l.a.createElement("div",{className:E.a.menu},l.a.createElement("a",{onClick:this.toggle},l.a.createElement("i",{class:"fas fa-bars"})),l.a.createElement("div",{className:this.state.open?E.a.open:""},l.a.createElement("a",null,"Home"),l.a.createElement("a",null,"Why us?"),l.a.createElement("a",null,"FAQs"),l.a.createElement("a",null,"Blog"),l.a.createElement("a",null,"Team"),l.a.createElement("span",{className:E.a.close,onClick:this.toggle},l.a.createElement("i",{class:"fas fa-times"}))))))}}]),a}(l.a.Component),_=t(33),f=t.n(_),A=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).update=function(e){t.setState({email:e.target.value})},t.submit=function(e){e.preventDefault(),t.validateEmail(t.state.email)?fetch("https://api.airtable.com/v0/app0n6LvMdIVQuSmw/Table%201",{method:"post",headers:{Authorization:"Bearer keyvkioeOfS5i5Q8T","content-type":"application/json"},body:JSON.stringify({fields:{"Email-id":t.state.email},typecast:!0})}).then((function(e){200==e.status&&t.setState({status:"All done!"})})):t.setState({status:"Invalid email address"})},t.state={email:"",status:""},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"validateEmail",value:function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:f.a["get-started"]},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("input",{type:"input",placeholder:"Enter your email to start",onChange:this.update}),l.a.createElement("input",{type:"submit",value:"GET STARTED"})),l.a.createElement("br",null),l.a.createElement("span",null,this.state.status))}}]),a}(l.a.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:d.a.home},l.a.createElement("div",{className:d.a.first},l.a.createElement(b,null),l.a.createElement("h1",null,"Your finances on autopilot"),l.a.createElement("h2",null,"Random sentence spanning more than two lines about why you should sign up"),l.a.createElement("br",null),l.a.createElement(A,null),l.a.createElement("br",null),l.a.createElement("div",{className:d.a.content},l.a.createElement("img",{className:d.a.app_shot,src:"img/Group 2.svg",alt:"app"}),l.a.createElement("h1",null,"Finances can be complicated. Your\u2019s doesn't have to be."))),l.a.createElement("div",{className:d.a.second}))}}]),a}(l.a.Component),S=t(8),O=t.n(S),k=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:O.a.features},l.a.createElement("div",{className:O.a.image+" "+O.a.image3+" "+O.a.center},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{className:O.a.center,src:"img/2689785.svg"})))),l.a.createElement("div",{className:O.a.image+" "+O.a.image1},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"img/Group 4.png"})),l.a.createElement("span",null,"Save without even realising"))),l.a.createElement("div",{className:O.a.image+" "+O.a.image2},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"img/Group 5.png"})),l.a.createElement("span",null,"Intelligent modes"))),l.a.createElement("div",{className:O.a.image+" "+O.a.image4},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"img/Group 6.png"})),l.a.createElement("span",null,"Actually achievable goals"))),l.a.createElement("div",{className:O.a.image+" "+O.a.image5},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"img/Group-2.png"})),l.a.createElement("span",null,"Spend smartly, wisely"))))}}]),a}(l.a.Component),w=t(25),j=t.n(w),x=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:j.a.finances},l.a.createElement("h",null,"All your finances under a single roof"),l.a.createElement("h2",null,"Save, plan, invest and manage all in one place."),l.a.createElement("div",{className:j.a.options},l.a.createElement("div",null,l.a.createElement("img",null),l.a.createElement("span",null,"Save for the good stuff.")),l.a.createElement("div",null,l.a.createElement("img",null),l.a.createElement("span",null,"Watch your money grow.")),l.a.createElement("div",null,l.a.createElement("img",null),l.a.createElement("span",null,"Spend without guilt-tripping."))),l.a.createElement("span",{className:j.a.subscribe},"Subscribe for all the goodness"),l.a.createElement(A,null))}}]),a}(l.a.Component),C=t(34),P=t.n(C),D=t(23),M=t.n(D),T=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).state={open:e.open},t.open=t.open.bind(Object(g.a)(t)),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"open",value:function(){console.log("Open"),this.setState({open:!this.state.open})}},{key:"render",value:function(){return console.log(M.a.open),l.a.createElement("div",{className:M.a.question},l.a.createElement("div",{className:M.a.q,onClick:this.open},l.a.createElement("h3",null,this.props.question),l.a.createElement("a",null,l.a.createElement("i",{className:"fas "+(this.state.open?"fa-angle-up":"fa-angle-down")}))),l.a.createElement("h2",{className:this.state.open?M.a.open:""},this.props.answer))}}]),a}(l.a.Component),I=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).questions=[{question:"What is this app?",answer:"We understand that handling money is difficult. On one hand, you want to go out for dinner and on the other, you want to save up for that Europe trip. We help you make both possible.",open:!0},{question:"What happens to my data?",answer:"Your data is none of our business. We don't share it with anyone. We use it to give you better insights into your spendings.",open:!1},{question:"Can I get an instant loan?",answer:"Wrong place buddy. We want to make you save better and avoid loans.",open:!1},{question:"You guys are awesome. Can I buy you a beer?",answer:"Sure. Feel free to reach out to us at hangout@savemo.app",open:!1}],t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.questions.map((function(e){return l.a.createElement(T,{question:e.question,answer:e.answer,open:e.open})}));return l.a.createElement("div",{className:P.a.wonder},l.a.createElement("h",null,"In case you're wondering"),e)}}]),a}(l.a.Component),H=t(24),q=t.n(H),L=t(14),W=t(27),F=t.n(W),V=function(e){function a(e){return Object(o.a)(this,a),Object(m.a)(this,Object(h.a)(a).call(this,e))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:F.a.final,style:Object(L.a)({},this.props.style,{display:"block"})},l.a.createElement("div",{className:F.a.banner}),this.props.children)}}]),a}(l.a.Component),B=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:q.a.reach},l.a.createElement("div",{className:q.a.heading},l.a.createElement("h1",null,"Say Hi!"),l.a.createElement("h3",null,"Reach us at team@savemo.app")),l.a.createElement("div",{className:q.a["card-background"]},l.a.createElement("div",{className:q.a["card-wrapper"]},l.a.createElement(V,{style:{width:"100%"}},l.a.createElement("h",null,"We are Savemo"),l.a.createElement("p",null,"We are building a super simple app so that you don't have to worry about your finances.",l.a.createElement("br",null),"Sign up to get early access to our beta when we launch later this month."),l.a.createElement(A,null)))))}}]),a}(l.a.Component),G=t(19),R=t.n(G),z=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:R.a.footer},l.a.createElement("div",{className:R.a.first},l.a.createElement("div",{className:R.a.desc},l.a.createElement("img",{src:"/img/Group 3.svg"}),l.a.createElement("div",{className:R.a.text},"We\u2019re Savemo. A young but powerful team of developers and designers with one objective in mind. Making finances simpler.")),l.a.createElement("div",{className:R.a.menu},l.a.createElement("ul",null,l.a.createElement("li",null,"Work"),l.a.createElement("li",null,"Services"),l.a.createElement("li",null,"Company")),l.a.createElement("ul",null,l.a.createElement("li",null,"Blog"),l.a.createElement("li",null,"Twitter"),l.a.createElement("li",null,"Facebook"),l.a.createElement("li",null,"Instagram")))),l.a.createElement("div",{className:R.a.second},"\xa9 2020 Savemo. Terms & Conditions"))}}]),a}(l.a.Component);var Y=function(){return l.a.createElement("div",{className:"index"},l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(x,null),l.a.createElement(I,null),l.a.createElement(B,null),l.a.createElement(z,null))},J=t(11),Q=t(1),U=t.n(Q),X=t(13),K=t.n(X),Z=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).toggle=function(e){t.setState({open:!t.state.open})},t.changeDuration=function(e){return function(a){t.props.toggleAnnual(e),t.toggle()}},t.state={val:t.props.value,open:!1},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:K.a.input},l.a.createElement("label",null,this.props.name),l.a.createElement("br",null),l.a.createElement("input",{type:"input",name:this.props.name,onChange:this.props.save,value:this.props.value}),l.a.createElement("div",{className:K.a.drop+" "+(this.state.open?K.a.open:"")},l.a.createElement("div",{onClick:this.toggle,className:K.a.top},l.a.createElement("span",{"data-annual":!1,className:K.a.selected},this.props.annual&&"Annual",!this.props.annual&&"Monthly"),l.a.createElement("span",{className:K.a.icon},l.a.createElement("i",{class:"fas fa-sort-down"}))),l.a.createElement("div",{className:K.a.options+" "+(this.state.open&&K.a.open)},l.a.createElement("span",{onClick:this.changeDuration(!1)},"Monthly"),l.a.createElement("span",{onClick:this.changeDuration(!0)},"Annual"))),l.a.createElement("br",null),l.a.createElement("div",{onClick:this.props.checkSave},this.props.checkSave&&l.a.createElement("input",{type:"checkbox",checked:this.props.checkValue}),l.a.createElement("label",{className:K.a.sub},this.props.checkText)))}}]),a}(l.a.Component),$=t(35),ee=function(e){function a(e){var t;Object(o.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).changeSlide=function(e){return function(){t.setState({slide:e})}},t.save=function(e){return function(a){t.setState({details:Object(L.a)({},t.state.details,Object(J.a)({},e,Object(L.a)({},t.state.details[e],Object(J.a)({},"value",a.target.value))))})}},t.reset=function(){localStorage.getItem("data",""),t.setState({details:t.defaultData,slide:1})},t.saveToggle=function(e){return function(a){t.setState({details:Object(L.a)({},t.state.details,Object(J.a)({},e,Object(L.a)({},t.state.details[e],Object(J.a)({},"value",!t.state.details[e].value))))})}},t.toggleAnnual=function(e){return function(a){t.setState({details:Object(L.a)({},t.state.details,Object(J.a)({},e,Object(L.a)({},t.state.details[e],Object(J.a)({},"annual",a))))})}},t.toggle=function(e){return function(){t.setState(Object(J.a)({},e,!t.state[e]))}},t.share=function(){navigator.share&&navigator.share({title:"Savemo - Tax Calculator",url:"http://bit.ly/savemo_referral"})},t.reset=function(){window.location="/"},t.version=1,(null==localStorage.getItem("version")||null==localStorage.getItem("version")||parseInt(localStorage.getItem("version"))<1)&&(localStorage.setItem("data",""),localStorage.setItem("version","1")),t.defaultData={salary:{type:"int",value:0,annual:!0},variablePay:{type:"int",value:0,annual:!0},hra:{type:"int",value:0,annual:!0},lta:{type:"int",value:0,annual:!0},conveyance:{type:"int",value:0,annual:!0},medical:{type:"int",value:0,annual:!0},meal:{type:"int",value:0,annual:!0},special:{type:"int",value:0,annual:!0},mobile:{type:"int",value:0,annual:!0},telephone:{type:"int",value:0,annual:!0},books:{type:"int",value:0,annual:!0},car:{type:"int",value:0,annual:!0},driver:{type:"int",value:0,annual:!0},employeePF:{type:"int",value:0,annual:!0},employerPF:{type:"int",value:0,annual:!0},pt:{type:"int",value:0,annual:!0},rent:{type:"int",value:0,annual:!1},ppf:{type:"int",value:0,annual:!0},investments:{type:"int",value:0,annual:!0},atc:{type:"int",value:0,annual:!0},medicalPremium:{type:"int",value:0,annual:!0},medicalPremiumDependant:{type:"int",value:0,annual:!0},nps:{type:"int",value:0,annual:!0},housingLoan:{type:"int",value:0,annual:!0},electricLoan:{type:"int",value:0,annual:!0},educationLoan:{type:"int",value:0,annual:!0},preventiveHealth:{type:"int",value:0,annual:!0},preventiveHealthDependant:{type:"int",value:0,annual:!0},medicalPremiumHandicapped:{type:"int",value:0,annual:!0},medicalPremiumHandicappedSevere:{type:"int",value:0,annual:!0},medicalTreatment:{type:"int",value:0,annual:!0},medicalTreatmentSC:{type:"int",value:0,annual:!0},medicalTreatmentVSC:{type:"int",value:0,annual:!0},physicalDisabilityA40:{type:"int",value:0,annual:!0},physicalDisabilityB40:{type:"int",value:0,annual:!0},equityScheme:{type:"int",value:0,annual:!0},"lta-receipts":{type:"bool",value:!1,annual:!0},"mobile-receipts":{type:"bool",value:!1,annual:!0},"telephone-receipts":{type:"bool",value:!1,annual:!0},"books-receipts":{type:"bool",value:!1,annual:!0},"car-receipts":{type:"bool",value:!1,annual:!0},"driver-receipts":{type:"bool",value:!1,annual:!0},"rent-city":{type:"bool",value:!1,annual:!0}};var n="null"==localStorage.getItem("data")||""==localStorage.getItem("data")||void 0==localStorage.getItem("data")||null==localStorage.getItem("data")?t.defaultData:JSON.parse(localStorage.getItem("data"));return t.state={slide:0,details:n,othersOpen:!1,otherAllowancesOpen:!1},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"numberWithCommas",value:function(e){var a=(e=parseInt(e).toString()).substring(e.length-3),t=e.substring(0,e.length-3);return""!=t&&(a=","+a),t.replace(/\B(?=(\d{2})+(?!\d))/g,",")+a}},{key:"componentDidUpdate",value:function(){4==this.state.slide&&localStorage.setItem("data",null)}},{key:"render",value:function(){console.log(this.state),localStorage.setItem("data",JSON.stringify(this.state.details));var e={};for(var a in this.state.details)if("int"==this.state.details[a].type){var t=this.state.details[a].value;e[a]=Object($.isBoolean)(t)?t:isNaN(t)?0:parseInt(t),e[a]*=this.state.details[a].annual?1:12}else"bool"==this.state.details[a].type&&(e[a]=this.state.details[a].value);var n=Math.min(15e4,e.ppf+e.investments+e.atc+e.employeePF),s=Math.min(e.medicalPremium,25e3)+Math.min(e.medicalPremiumDependant,25e3)+Math.min(e.preventiveHealth,5e3)+Math.min(e.preventiveHealthDependant,5e3),i=Math.min(e.nps,5e4)+Math.min(e.housingLoan,15e4)+Math.min(e.electricLoan,5e4)+e.educationLoan+Math.min(e.medicalPremiumHandicapped,75e3)+Math.min(e.medicalPremiumHandicappedSevere,125e3)+Math.min(e.medicalTreatment,4e4)+Math.min(e.medicalTreatmentSC,1e5)+Math.min(e.medicalTreatmentVSC,1e5)+Math.min(e.physicalDisabilityA40,125e3)+Math.min(e.physicalDisabilityB40,75e3)+Math.min(e.equityScheme,25e3),o=Math.max(0,Math.min(e.hra,e["rent-city"]?.5*e.salary:.4*e.salary,12*e.rent-.1*e.salary)),u=n+s+i,m=e.salary+e.variablePay+e.hra+(e["lta-receipts"]?0:e.lta)+e.conveyance+e.medical+e.special+(e["mobile-receipts"]?0:e.mobile)+(e["telephone-receipts"]?0:e.telephone)+(e["books-receipts"]?0:e.books)+(e["car-receipts"]?Math.max(0,e.driver-21600):e.driver)+(e["driver-receipts"]?Math.max(0,e.driver-21600):e.driver)-5e4-o-u-e.pt,h=e.salary+e.variablePay+e.hra+e.lta+e.conveyance+e.medical+e.special+e.mobile+e.telephone+e.books+e.driver-e.pt;m=m<=5e5?0:m,h=h<=5e5?0:h;var p=.3*Math.max(0,m-1e6),v=Math.max(0,.2*(Math.min(1e6,m)-5e5)),d=Math.max(0,.05*(Math.min(5e5,m)-25e4))+v+p;d*=1.04;var g=.3*Math.max(0,h-15e5)+Math.max(0,.25*(Math.min(15e5,h)-125e4))+Math.max(0,.2*(Math.min(125e4,h)-1e6))+Math.max(0,.15*(Math.min(1e6,h)-75e4))+Math.max(0,.1*(Math.min(75e4,h)-5e5))+Math.max(0,.05*(Math.min(5e5,h)-25e4));g*=1.04,console.log(m,d),console.log(h,g);var y=l.a.createElement("div",{className:U.a.section+" "+U.a.active},l.a.createElement("h",null,"Budget left you confused? We know the feeling."),l.a.createElement("p",{className:U.a.init},"How many tax slabs are there?"),l.a.createElement("p",{className:U.a.init},"Do I claim house rent or not?"),l.a.createElement("p",{className:U.a.init},"Why is everyone talking about regimes all of a sudden?"),l.a.createElement("p",{className:U.a.para},"In the next page, you will have to enter values form your offer letter / annual contract / salary slip.",l.a.createElement("br",null),l.a.createElement("br",null),"Make sure you keep it handy.",l.a.createElement("br",null),l.a.createElement("br",null),"The whole thing will take you less than two minutes."),l.a.createElement(r.b,{to:"".concat(this.props.match.url,"/salary")},l.a.createElement("a",{className:U.a.button},"Get Started")),l.a.createElement("img",{className:U.a.man,srcset:" /img/ques-xxxhdpi.png 3x, /img/ques-xxhdpi.png 2x, /img/ques-xhdpi.png 1x ",src:"/img/ques-xhdpi.png 1x"})),E=l.a.createElement("div",{className:U.a.section+" "+U.a.active},l.a.createElement("h",null,"Let\u2019s start with your income"),l.a.createElement("br",null),l.a.createElement("span",{className:U.a.sub},l.a.createElement("b",null,"\u2022")," You can get these values from your Offer Letter / Annual Contract / Salary Slip."),l.a.createElement("br",null),l.a.createElement("span",{className:U.a.sub},l.a.createElement("b",null,"Note: "),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"If any of these values are not present in your salary slip or offer letter leave them as 0"),l.a.createElement("li",null,"We do not store any of this data. We value your privacy!"))),l.a.createElement("form",null,l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("salary"),annual:this.state.details.salary.annual,value:this.state.details.salary.value,save:this.save("salary"),name:"Basic Salary"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("variablePay"),annual:this.state.details.variablePay.annual,value:this.state.details.variablePay.value,save:this.save("variablePay"),name:"Variable Pay"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("hra"),annual:this.state.details.hra.annual,value:this.state.details.hra.value,save:this.save("hra"),name:"House Rent Allowance (HRA)"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("lta"),annual:this.state.details.lta.annual,value:this.state.details.lta.value,save:this.save("lta"),name:"Leave Travel Allowance",checkValue:this.state.details["lta-receipts"].value,checkSave:this.saveToggle("lta-receipts"),checkText:"I submit receipt/bill for this"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("conveyance"),annual:this.state.details.conveyance.annual,value:this.state.details.conveyance.value,save:this.save("conveyance"),name:"Conveyance / Vehicle Allowance"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medical"),annual:this.state.details.medical.annual,value:this.state.details.medical.value,save:this.save("medical"),name:"Medical Reimbursement"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("meal"),annual:this.state.details.meal.annual,value:this.state.details.meal.value,save:this.save("meal"),name:"Meal Coupons (Sodexo)"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("special"),annual:this.state.details.special.annual,value:this.state.details.special.value,save:this.save("special"),name:"Special Allowance / Flexi-Pay Benefit"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("employeePF"),annual:this.state.details.employeePF.annual,value:this.state.details.employeePF.value,save:this.save("employeePF"),name:"Employee Contribution to PF"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("employerPF"),annual:this.state.details.employerPF.annual,value:this.state.details.employerPF.value,save:this.save("employerPF"),name:"Employer Contribution to PF"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("pt"),annual:this.state.details.pt.annual,value:this.state.details.pt.value,save:this.save("pt"),name:"Professional Tax"}),l.a.createElement("div",{className:U.a.others},l.a.createElement("div",{className:U.a.title,onClick:this.toggle("otherAllowancesOpen")},l.a.createElement("h3",null,"Other Allowances"),l.a.createElement("a",null,l.a.createElement("i",{className:"fas "+(this.state.otherAllowancesOpen?"fa-angle-up":"fa-angle-down")}))),l.a.createElement("div",{className:U.a.othersDrop+" "+(this.state.otherAllowancesOpen?U.a.open:"")},l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("mobile"),annual:this.state.details.mobile.annual,value:this.state.details.mobile.value,save:this.save("mobile"),name:"Mobile Handset Reimbursement",checkValue:this.state.details["mobile-receipts"].value,checkSave:this.saveToggle("mobile-receipts"),checkText:"I submit receipt/bill for this"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("telephone"),annual:this.state.details.telephone.annual,value:this.state.details.telephone.value,save:this.save("telephone"),name:"Telephone & Internet Reimbursement",checkValue:this.state.details["telephone-receipts"].value,checkSave:this.saveToggle("telephone-receipts"),checkText:"I submit receipt/bill for this"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("books"),annual:this.state.details.books.annual,value:this.state.details.books.value,save:this.save("books"),name:"Books, Periodicals and Training",checkValue:this.state.details["books-receipts"].value,checkSave:this.saveToggle("books-receipts"),checkText:"I submit receipt/bill for this"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("car"),annual:this.state.details.car.annual,value:this.state.details.car.value,save:this.save("car"),name:"Car Maintenance",checkValue:this.state.details["car-receipts"].value,checkSave:this.saveToggle("car-receipts"),checkText:"I submit receipt/bill for this"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("driver"),annual:this.state.details.driver.annual,value:this.state.details.driver.value,save:this.save("driver"),name:"Driver Allowance",checkValue:this.state.details["driver-receipts"].value,checkSave:this.saveToggle("driver-receipts"),checkText:"I submit receipt/bill for this"})))),l.a.createElement(r.b,{to:"".concat(this.props.match.url,"/rent")},l.a.createElement("a",{className:U.a.button},"Next Step: Rent"))),b=l.a.createElement("div",{className:U.a.section+" "+U.a.active},l.a.createElement("h",null,"Rent"),l.a.createElement("form",null,l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("rent"),annual:this.state.details.rent.annual,value:this.state.details.rent.value,save:this.save("rent"),name:"How much do you pay as rent every month?",checkValue:this.state.details["rent-city"].value,checkSave:this.saveToggle("rent-city"),checkText:"I live in Delhi/Chennai/Kolkata/Mumbai"})),l.a.createElement(r.b,{to:"".concat(this.props.match.url,"/deductions")},l.a.createElement("a",{className:U.a.button},"Last Step: Deductions")));console.log(U.a.section+" "+(3==this.state.slide?U.a.active:""));var _=l.a.createElement("div",{className:U.a.section+" "+U.a.active},l.a.createElement("h",null,"Deductions"),l.a.createElement("br",null),l.a.createElement("span",{className:U.a.sub},l.a.createElement("b",null,"Note: ")," All values are per annum."),l.a.createElement("form",null,l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("ppf"),annual:this.state.details.ppf.annual,value:this.state.details.ppf.value,save:this.save("ppf"),name:"Contribution To PPF"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("investments"),annual:this.state.details.investments.annual,value:this.state.details.investments.value,save:this.save("investments"),name:"80C: Investments in ELSS funds"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("atc"),annual:this.state.details.atc.annual,value:this.state.details.atc.value,save:this.save("atc"),name:"80C: Others"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medicalPremium"),annual:this.state.details.medicalPremium.annual,value:this.state.details.medicalPremium.value,save:this.save("medicalPremium"),name:"80D: Medical Insurance Premium"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medicalPremiumDependant"),annual:this.state.details.medicalPremiumDependant.annual,value:this.state.details.medicalPremiumDependant.value,save:this.save("medicalPremiumDependant"),name:"80D: Medical Insurance Premium for Dependant Parents"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("nps"),annual:this.state.details.nps.annual,value:this.state.details.nps.value,save:this.save("nps"),name:"Contribution To NPS"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("housingLoan"),annual:this.state.details.housingLoan.annual,value:this.state.details.housingLoan.value,save:this.save("housingLoan"),name:"Additional Interest on Housing Loan"}),l.a.createElement("div",{className:U.a.others},l.a.createElement("div",{className:U.a.title,onClick:this.toggle("othersOpen")},l.a.createElement("h3",null,"Others"),l.a.createElement("a",null,l.a.createElement("i",{className:"fas "+(this.state.othersOpen?"fa-angle-up":"fa-angle-down")}))),l.a.createElement("div",{className:U.a.othersDrop+" "+(this.state.othersOpen?U.a.open:"")},l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("electricLoan"),annual:this.state.details.electricLoan.annual,value:this.state.details.electricLoan.value,save:this.save("electricLoan"),name:"Interest on Electric Vehicle Loan"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("educationLoan"),annual:this.state.details.educationLoan.annual,value:this.state.details.educationLoan.value,save:this.save("educationLoan"),name:"Interest on Loan of Higher Education"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("preventiveHealth"),annual:this.state.details.preventiveHealth.annual,value:this.state.details.preventiveHealth.value,save:this.save("preventiveHealth"),name:"80D: Preventive Health Checkup"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("preventiveHealthDependant"),annual:this.state.details.preventiveHealthDependant.annual,value:this.state.details.preventiveHealthDependant.value,save:this.save("preventiveHealthDependant"),name:"80D: Preventive Health Checkup"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medicalPremiumHandicapped"),annual:this.state.details.medicalPremiumHandicapped.annual,value:this.state.details.medicalPremiumHandicapped.value,save:this.save("medicalPremiumHandicapped"),name:"Medical Insurance Of Handicapped Dependant"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medicalPremiumHandicappedSevere"),annual:this.state.details.medicalPremiumHandicappedSevere.annual,value:this.state.details.medicalPremiumHandicappedSevere.value,save:this.save("medicalPremiumHandicappedSevere"),name:"Medical Treatment / Insurance of handicapped Dependant (Severe)"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medicalTreatment"),annual:this.state.details.medicalTreatment.annual,value:this.state.details.medicalTreatment.value,save:this.save("medicalTreatment"),name:"Medical Treatment ( Specified Disease only )"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medicalTreatmentSC"),annual:this.state.details.medicalTreatmentSC.annual,value:this.state.details.medicalTreatmentSC.value,save:this.save("medicalTreatmentSC"),name:"Medical Treatment (Specified Disease only)- Senior Citizen"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("medicalTreatmentVSC"),annual:this.state.details.medicalTreatmentVSC.annual,value:this.state.details.medicalTreatmentVSC.value,save:this.save("medicalTreatmentVSC"),name:"Medical Treatment (Specified Disease only)- Very Senior Citizen"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("physicalDisabilityA40"),annual:this.state.details.physicalDisabilityA40.annual,value:this.state.details.physicalDisabilityA40.value,save:this.save("physicalDisabilityA40"),name:"Permanent Physical disability (Above 40%)"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("physicalDisabilityB40"),annual:this.state.details.physicalDisabilityB40.annual,value:this.state.details.physicalDisabilityB40.value,save:this.save("physicalDisabilityB40"),name:"Permanent Physical disability (Below 40%)"}),l.a.createElement(Z,{toggleAnnual:this.toggleAnnual("equityScheme"),annual:this.state.details.equityScheme.annual,value:this.state.details.equityScheme.value,save:this.save("equityScheme"),name:"Rajiv Gandhi Equity Scheme"})))),l.a.createElement(r.b,{to:"".concat(this.props.match.url,"/result")},l.a.createElement("a",{className:U.a.button},"Calculate"))),f=parseInt(Math.abs(100*(g-d)/d));f=isNaN(f)?0:f;var N=l.a.createElement("div",{className:U.a.section+" "+U.a.active},l.a.createElement("h",null,"Here's your tax comparison"),l.a.createElement("br",null),d!=g&&l.a.createElement("div",{className:U.a.results},l.a.createElement("div",{className:U.a.result+" "+(d<g?U.a.good:U.a.bad)},l.a.createElement("span",null,"Under the ",l.a.createElement("b",null,"old")," tax regime you will have to pay"),l.a.createElement("span",{className:U.a.val},"\u20b9",this.numberWithCommas(d)),l.a.createElement("span",{className:U.a.per},0!=g&&l.a.createElement("span",null,"That\u2019s ",l.a.createElement("b",null,f,"%")," more than what you have to pay in the new regime.")),l.a.createElement("img",{src:"/img/image_2.svg"})),l.a.createElement("div",{className:U.a.result+" "+(d>g?U.a.good:U.a.bad)},l.a.createElement("span",null,"Under the ",l.a.createElement("b",null,"new")," tax regime you will have to pay"),l.a.createElement("span",{className:U.a.val},"\u20b9",this.numberWithCommas(g)),l.a.createElement("span",{className:U.a.per},0!=d&&l.a.createElement("span",null,"That\u2019s ",l.a.createElement("b",null,f,"%")," more than what you used to pay in the old regime.")),l.a.createElement("img",{src:"/img/image_2.svg"}))),d==g&&l.a.createElement("div",{className:U.a.results},l.a.createElement("div",{className:U.a.result+" "+U.a.neutral},l.a.createElement("span",null,"You will pay the same tax in both the regimes"),l.a.createElement("span",{className:U.a.val},"\u20b9",this.numberWithCommas(d)))),d>g&&l.a.createElement("div",null,l.a.createElement("p",null,"We suggest you switch to the new regime."),l.a.createElement("p",null,"Sometimes change is good.")),d<g&&l.a.createElement("div",null,l.a.createElement("p",null,"We suggest you stick to the old regime."),l.a.createElement("p",null,"After all, if it ain't broke, why fix it.")),l.a.createElement("a",{className:U.a.button,onClick:this.reset},"Reset"),l.a.createElement("div",{className:U.a.footer},l.a.createElement("div",null,l.a.createElement("img",{src:"/img/group.svg"})),navigator.share&&l.a.createElement("div",{className:U.a["share-box"]},"Share this app with your friends ",l.a.createElement("a",{onClick:this.share,href:"javascript:void(0)",className:U.a.share},l.a.createElement("i",{class:"fa fa-share-alt","aria-hidden":"true"})))));l.a.createElement("div",{className:U.a.final,style:{display:"block"}},l.a.createElement("div",{className:U.a.banner}),l.a.createElement("h",null,"We are Savemo"),l.a.createElement("p",null,"We are building a super simple app so that you don't have to worry about your finances.",l.a.createElement("br",null),"Sign up to get early access to our beta when we launch later this month."),l.a.createElement(A,null));return console.log(this.props),l.a.createElement("div",{className:U.a["tax-calc"]},l.a.createElement("div",{className:U.a.container},l.a.createElement("div",{className:U.a.topbar},l.a.createElement("a",{href:"https://www.savemo.app/"},l.a.createElement("img",{src:"/img/savemo.svg"}))),l.a.createElement("div",{className:U.a.card},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"".concat(this.props.match.url,"/salary"),render:function(){return E}}),l.a.createElement(c.a,{path:"".concat(this.props.match.url,"/rent"),render:function(){return b}}),l.a.createElement(c.a,{path:"".concat(this.props.match.url,"/deductions"),render:function(){return _}}),l.a.createElement(c.a,{path:"".concat(this.props.match.url,"/result"),render:function(){return N}}),l.a.createElement(c.a,{path:"".concat(this.props.match.url,"/"),render:function(){return y}}))),l.a.createElement("div",{className:U.a.breaker}),l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"".concat(this.props.match.url,"/result")},l.a.createElement(V,{style:{width:"90%"}},l.a.createElement("h",null,"We are Savemo"),l.a.createElement("p",null,"We are building a super simple app so that you don't have to worry about your finances.",l.a.createElement("br",null),"Sign up to get early access to our beta when we launch later this month."),l.a.createElement(A,null))))))}}]),a}(l.a.Component),ae=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(l.a.Component),te=Object(c.f)(ae);var ne=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,null,l.a.createElement(te,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/tax-calculator",component:ee}),l.a.createElement(c.a,{path:"/",component:Y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[38,1,2]]]);
//# sourceMappingURL=main.0f847e13.chunk.js.map