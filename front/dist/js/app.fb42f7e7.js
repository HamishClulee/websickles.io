(function(e){function t(t){for(var c,o,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(c=!1)}c&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},o={app:0},a={app:0},r=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-05ed0da4":"bd491be7","chunk-12e7dfe2":"f1bd6e91","chunk-1b668e96":"03c73684","chunk-1f3aa5a2":"4ccc8391","chunk-1f8efde4":"40c78ff3","chunk-2bbbd056":"29e47567","chunk-2d0cfe56":"1b6f0e1a","chunk-4595c4f2":"5bba49c4","chunk-512aab58":"6c583427","chunk-623fcff4":"b4d0f040","chunk-882d9a6c":"ee04348f","chunk-951d4230":"a24f6f1b","chunk-a11ae436":"7e8de41a","chunk-a8ca73b0":"7485ea19","chunk-c3ac7cca":"b44d7a16","chunk-f269f154":"e56d593b"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-05ed0da4":1,"chunk-12e7dfe2":1,"chunk-1b668e96":1,"chunk-1f3aa5a2":1,"chunk-1f8efde4":1,"chunk-2bbbd056":1,"chunk-4595c4f2":1,"chunk-512aab58":1,"chunk-623fcff4":1,"chunk-882d9a6c":1,"chunk-951d4230":1,"chunk-a11ae436":1,"chunk-a8ca73b0":1,"chunk-c3ac7cca":1,"chunk-f269f154":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-05ed0da4":"75ef4f17","chunk-12e7dfe2":"cc3edef2","chunk-1b668e96":"8f9c5fcb","chunk-1f3aa5a2":"98fb1a8f","chunk-1f8efde4":"01e7512f","chunk-2bbbd056":"cec3f546","chunk-2d0cfe56":"31d6cfe0","chunk-4595c4f2":"de14ea49","chunk-512aab58":"fb74e9e3","chunk-623fcff4":"cbfd170c","chunk-882d9a6c":"47a9b190","chunk-951d4230":"cf7984c7","chunk-a11ae436":"7fccc0f9","chunk-a8ca73b0":"39a4e89c","chunk-c3ac7cca":"b6983ce6","chunk-f269f154":"b1cc4f11"}[e]+".css",a=u.p+c,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===c||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===c||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],f.parentNode.removeChild(f),n(r)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",d.name="ChunkLoadError",d.type=c,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0c61":function(e,t,n){},"16f0":function(e,t,n){"use strict";n("2a42")},"2a42":function(e,t,n){},4608:function(e,t,n){},"52ea":function(e,t,n){"use strict";n("9c78")},5784:function(e,t,n){},"6dcd":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var c=function(e){localStorage.setItem("AuthToken",e)},o=function(){localStorage.setItem("AuthToken","")}},"750d":function(e,t,n){"use strict";var c;n.d(t,"a",(function(){return c})),function(e){e["Dormant"]="DORMANT",e["Dragging"]="DRAGGING",e["Placed"]="PLACED"}(c||(c={}))},"79cd":function(e,t,n){},"9c78":function(e,t,n){},b143:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"j",(function(){return i})),n.d(t,"i",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"k",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"n",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return p}));var c=n("14b7"),o=Object(c["a"])(),a="LOADING",r="MESSAGES",i="SITEMODAL",u="SERVER_AUTH_ERROR_MESSAGE",s="EDITOR_ERROR",l="SWITCH_APP_MODE",d={is:!0,msg:"You are now logged out!",color:"success"},f=function(e){return{is:!0,msg:"Welcome back ".concat(e,"!"),color:"info"}},h={is:!0,msg:"Something went wrong, we have been notified, try again soon!",color:"error"},b={is:!0,msg:"You need to be logged in to view that page!",color:"warning"},g={is:!0,msg:"Logged in with Google!",color:"info"},m=function(e){return{is:!0,msg:"You are already logged in as ".concat(e,"!"),color:"warning"}},p=function(e){return{is:!0,msg:"We have sent you an email at ".concat(e,"!"),color:"info"}}},b476:function(e,t,n){"use strict";n("79cd")},c9d2:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var c="header",o="navbar",a="content_blocks"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=Object(c["P"])("data-v-0b066f18");Object(c["w"])("data-v-0b066f18");var a={class:"app-main"},r={class:"global-spinner-con"};Object(c["u"])();var i=o((function(e,t,n,i,u,s){var l=Object(c["B"])("loading"),d=Object(c["B"])("sitemodal"),f=Object(c["B"])("navbar"),h=Object(c["B"])("router-view"),b=Object(c["B"])("qrfooter"),g=Object(c["B"])("usermessages");return Object(c["t"])(),Object(c["f"])("section",a,[Object(c["j"])(c["c"],{name:"fade",mode:"out-in"},{default:o((function(){return[Object(c["M"])(Object(c["j"])("div",r,[Object(c["j"])(l)],512),[[c["I"],e.showGlobalSpinner]])]})),_:1}),Object(c["M"])(Object(c["j"])("div",null,[e.showsitemodal?(Object(c["t"])(),Object(c["f"])(d,Object(c["o"])({key:0},{contains:e.contains}),null,16)):Object(c["g"])("",!0),e.checkroute?(Object(c["t"])(),Object(c["f"])(f,{key:1})):Object(c["g"])("",!0),Object(c["j"])(h),e.showfooter?(Object(c["t"])(),Object(c["f"])(b,{key:2})):Object(c["g"])("",!0)],512),[[c["I"],!e.showGlobalSpinner]]),e.showUserMessage?(Object(c["t"])(),Object(c["f"])(g,Object(c["o"])({key:0},{msg:e.msg,black:e.black,sass:e.sass}),null,16)):Object(c["g"])("",!0),e.windowWidth<620?(Object(c["t"])(),Object(c["f"])(d,{key:1,contains:"smallscreen"})):Object(c["g"])("",!0)])})),u=(n("b0c0"),n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("5530")),s=Object(c["P"])("data-v-c62f62d4");Object(c["w"])("data-v-c62f62d4");var l={class:"navbar-con"},d={class:"navbar-left"},f=Object(c["j"])("img",{src:"/images/pop-logo.png",class:"pop-logo-actual"},null,-1),h=Object(c["j"])("div",{class:"spacer"},null,-1),b={class:"navbar-right"},g=Object(c["j"])("button",{class:"button primary"},"LOGIN / SIGNUP",-1),m=Object(c["j"])("div",{class:"avatar-icon"},[Object(c["j"])("img",{src:"/svg/avatar.svg"})],-1),p=Object(c["j"])("h6",{class:"small-6"},"ACCOUNT",-1),j={key:0,class:"canvas-nav"},v={class:"canvas-text-con"},O=Object(c["j"])("div",{class:"line"},null,-1),k=Object(c["j"])("div",{class:"line"},null,-1),w=Object(c["i"])("home"),y=Object(c["i"])("Login / SignUp"),S={key:0,class:"account-settings"},_=Object(c["j"])("div",{class:"avatar-icon"},[Object(c["j"])("img",{width:"40",src:"/svg/avatar.svg"})],-1),T=Object(c["i"])("Account");Object(c["u"])();var E=s((function(e,t,n,o,a,r){var i=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])("div",l,[Object(c["j"])("div",d,[Object(c["j"])("div",{class:"logo-con",onClick:t[1]||(t[1]=function(t){return r.routehome("home"!==e.$route.name?"home":null)})},[f])]),h,Object(c["j"])("div",b,[Object(c["j"])("div",{class:["text-item",r.checkvis("login")?"active-route":"inactive-route"]},[Object(c["j"])(i,{to:{path:"/auth/login"}},{default:s((function(){return[g]})),_:1})],2),e.isauthed?(Object(c["t"])(),Object(c["f"])("div",{key:0,class:"account-active-indic",onClick:t[2]||(t[2]=function(){return r.togglecanvas.apply(r,arguments)})},[m,p])):Object(c["g"])("",!0)]),Object(c["j"])(c["c"],{name:"fade",mode:"in-out"},{default:s((function(){return[a.canvasopen?(Object(c["t"])(),Object(c["f"])("div",j,[Object(c["j"])("div",v,[Object(c["j"])("div",{class:"big-x",onClick:t[3]||(t[3]=function(){return r.togglecanvas.apply(r,arguments)})},[O,k]),Object(c["j"])("div",{class:"canvas-item",onClick:t[4]||(t[4]=function(){return r.togglecanvas.apply(r,arguments)})},[Object(c["j"])(i,{to:{path:"/"}},{default:s((function(){return[w]})),_:1})]),Object(c["j"])("div",{class:"canvas-item",onClick:t[5]||(t[5]=function(){return r.togglecanvas.apply(r,arguments)})},[Object(c["j"])(i,{to:{path:"/app"}},{default:s((function(){return[Object(c["i"])(Object(c["D"])(e.isauthed?"Your Websites":"Try For Free"),1)]})),_:1})]),Object(c["j"])("div",{class:"canvas-item",onClick:t[6]||(t[6]=function(){return r.togglecanvas.apply(r,arguments)})},[Object(c["j"])(i,{to:{path:"/auth/login"}},{default:s((function(){return[y]})),_:1})]),e.isauthed?(Object(c["t"])(),Object(c["f"])("div",S,[Object(c["j"])("div",{class:"canvas-item account",onClick:t[7]||(t[7]=function(){return r.togglecanvas.apply(r,arguments)})},[_,Object(c["j"])(i,{to:{path:"/account"}},{default:s((function(){return[T]})),_:1})]),Object(c["j"])("div",{class:"canvas-item account",onClick:t[9]||(t[9]=function(){return r.togglecanvas.apply(r,arguments)})},[Object(c["j"])("button",{class:"button",onClick:t[8]||(t[8]=function(){return r.logout.apply(r,arguments)})},"LOGOUT")])])):Object(c["g"])("",!0)])])):Object(c["g"])("",!0)]})),_:1})])})),A=n("5502"),I=n("b143"),C={name:"navbar",data:function(){return{canvasopen:!1,scrolledTop:!0}},methods:{togglecanvas:function(){var e=this;setTimeout((function(){e.canvasopen=!e.canvasopen}),200)},routehome:function(e){e&&this.$router.push({path:"/"})},logout:function(){var e=this;this.$QAuth.logout().then((function(t){e.$store.commit("IS_AUTHED",t.data.user),I["c"].emit(I["g"],I["f"]),"/"!==e.$route.path&&e.$router.push({path:"/"})}))},checkvis:function(e){return e===this.$route.name}},computed:Object(u["a"])({},Object(A["b"])(["scrollY","isauthed"])),watch:{scrollY:function(e){this.scrolledTop=e<90}}};n("f696");C.render=E,C.__scopeId="data-v-c62f62d4";var L=C,x=Object(c["P"])("data-v-8bd7f170");Object(c["w"])("data-v-8bd7f170");var D=Object(c["j"])("img",{src:"/images/pop-logo.png",alt:"Create Mevn Logo",width:"100%",class:"logo"},null,-1),P=Object(c["j"])("div",{class:"text-container layout-col"},[Object(c["j"])("h4",{class:"main"},"WEBSICKLES.IO"),Object(c["j"])("h4",{class:"sub"},"Make Life Easy")],-1);Object(c["u"])();var N=x((function(e,t,n,o,a,r){return Object(c["t"])(),Object(c["f"])("footer",{class:["qr-footer",r.isWapp?"wapp-footer":"standard-footer"]},[a.displayPushed?(Object(c["t"])(),Object(c["f"])("div",{key:0,class:["footer-content layout-row layout-center-all",a.displayPushed?"in-view":"hidden"]},[D,P],2)):Object(c["g"])("",!0)],2)})),W={name:"qrfooter",data:function(){return{displayPushed:!1}},mounted:function(){var e=this;setTimeout((function(){e.displayPushed=!0}),500)},computed:{isWapp:function(){return"wapp"===this.$route.name}}};n("16f0");W.render=N,W.__scopeId="data-v-8bd7f170";var B=W,R=Object(c["P"])("data-v-33d0a762");Object(c["w"])("data-v-33d0a762");var q={class:"close-icon-row layout-row"},U=Object(c["j"])("div",{class:"icon-spacer"},null,-1),M={class:"message-actual"},G=Object(c["j"])("div",{class:"ttl-indicator"},null,-1);Object(c["u"])();var $=R((function(e,t,n,o,a,r){return Object(c["t"])(),Object(c["f"])(c["c"],{name:"fade",mode:"out-in"},{default:R((function(){return[Object(c["j"])("div",{class:["message-container layout-col",n.sass]},[Object(c["j"])("div",q,[U,Object(c["j"])("div",{class:"close-icon layout-row",onClick:t[1]||(t[1]=function(){return r.closeNow.apply(r,arguments)})},"x")]),Object(c["j"])("div",M,Object(c["D"])(n.msg),1),G],2)]})),_:1})})),H=(n("c975"),7e3),Y={name:"usermessages",props:{sass:{type:String,validator:function(e){return-1!==["success","warning","error","info",""].indexOf(e)}},msg:{required:!0,type:String}},mounted:function(){var e=this;setTimeout((function(){e.closeNow()}),H)},methods:{closeNow:function(){I["c"].emit(I["g"],{is:!1})}}};n("b476");Y.render=$,Y.__scopeId="data-v-33d0a762";var Q=Y,z=Object(c["P"])("data-v-0e48176e");Object(c["w"])("data-v-0e48176e");var Z={id:"square5"},F=Object(c["j"])("span",null,null,-1),K=Object(c["j"])("span",null,null,-1),J=Object(c["j"])("span",null,null,-1),V=Object(c["j"])("span",null,null,-1);Object(c["u"])();var X=z((function(e,t,n,o,a,r){return Object(c["t"])(),Object(c["f"])("div",Z,[F,K,J,V])})),ee={name:"loading"};n("dd82");ee.render=X,ee.__scopeId="data-v-0e48176e";var te=ee,ne=Object(c["P"])("data-v-c661a59a");Object(c["w"])("data-v-c661a59a");var ce={class:"modal-container layout-col layout-center-all"},oe={class:"modal-card layout-col layout-center-all"},ae={class:"modal-card-content layout-col layout-center-all"};Object(c["u"])();var re=ne((function(e,t,n,o,a,r){var i=Object(c["B"])("smallscreenmodal");return Object(c["t"])(),Object(c["f"])("div",ce,[Object(c["j"])("div",{class:"modal-background",onClick:t[1]||(t[1]=function(){return r.closeModal.apply(r,arguments)}),onKeydown:t[2]||(t[2]=Object(c["N"])((function(){return r.closeModal.apply(r,arguments)}),["esc"]))},null,32),Object(c["j"])("div",oe,[Object(c["j"])("div",ae,["smallscreen"===n.contains?(Object(c["t"])(),Object(c["f"])(i,{key:0})):Object(c["g"])("",!0)])])])})),ie=Object(c["P"])("data-v-73c56d0a");Object(c["w"])("data-v-73c56d0a");var ue={class:"small-screen-container"},se=Object(c["j"])("img",{src:"/images/pop-logo.png"},null,-1),le=Object(c["j"])("h4",null," Websickles isn't ready for mobile users yet! ",-1),de=Object(c["j"])("h4",null," Check back soon, or switch to a device with a larger screen! ",-1),fe=Object(c["j"])("img",{src:"/images/pop-logo.png"},null,-1);Object(c["u"])();var he=ie((function(e,t,n,o,a,r){return Object(c["t"])(),Object(c["f"])("div",ue,[se,le,de,fe])})),be={name:"smallscreen",mounted:function(){var e=document.querySelector("body");e&&(e.style.overflowY="hidden")},beforeUnmount:function(){var e=document.querySelector("body");e&&(e.style.overflowY="")}};n("52ea");be.render=he,be.__scopeId="data-v-73c56d0a";var ge=be,me={name:"sitemodal",components:{smallscreenmodal:ge},props:{contains:{type:String||null,required:!0}},methods:{closeModal:function(){I["c"].emit(I["j"],!1)}}};n("d176");me.render=re,me.__scopeId="data-v-c661a59a";var pe=me,je=Object(c["k"])({name:"TheGodFather",components:{navbar:L,qrfooter:B,sitemodal:pe,loading:te,usermessages:Q},data:function(){return{showsitemodal:!1,showGlobalSpinner:!1,contains:null,loadPushed:!1,showUserMessage:!1,msg:"",sass:"",black:""}},created:function(){this.SET_WINDOW_SIZE(),this.SET_SCROLL_LOCATION()},mounted:function(){var e=this;I["c"].on(I["d"],(function(t){e.showGlobalSpinner=t})),I["c"].on(I["g"],(function(t){e.showUserMessage=t.is,e.msg=t.msg,e.sass=t.color})),I["c"].on(I["j"],(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t?(e.contains=t,e.showsitemodal=!0):e.showsitemodal=!1}));var t=new URLSearchParams(window.location.search);"true"===t.get("redirect")&&(I["c"].emit(I["g"],I["h"]),this.$router.push({path:"/auth/login?redirect=true"})),"true"===t.get("googleauth")&&(I["c"].emit(I["g"],I["e"]),this.$router.push({path:"/app"})),window.addEventListener("resize",this.sizeChange),window.addEventListener("scroll",this.scrollChange)},methods:Object(u["a"])(Object(u["a"])({},Object(A["c"])(["SET_WINDOW_SIZE","SET_SCROLL_LOCATION"])),{},{sizeChange:function(){this.SET_WINDOW_SIZE()},scrollChange:function(){this.SET_SCROLL_LOCATION()}}),computed:Object(u["a"])({checkroute:function(){return"wapp"!==this.$route.name},showfooter:function(){return"auth"!==this.$route.name}},Object(A["b"])(["windowWidth"]))});n("db42");je.render=i,je.__scopeId="data-v-0b066f18";var ve=je,Oe=n("6c02"),ke=(n("a4d3"),n("e01a"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;var n=document.getElementById("__meta_description"),c=document.getElementsByTagName("title")[0];if(e)if(c.text=e.title?e.title:"",n.content=e.description?e.description:"",!1===e.index){var o=document.createElement("meta");o.name="robots",o.content="noindex",document.getElementsByTagName("head")[0].appendChild(o)}else try{for(var a=document.getElementsByTagName("meta"),r=0;r<a.length;r+=1)a[r]&&a[r].parentNode&&"robots"===a[r].name&&a[r].parentNode.removeChild(a[r])}catch(i){if(t)return t()}return!!t&&t()}),we=ke,ye=function(){return n.e("chunk-4595c4f2").then(n.bind(null,"6511"))},Se=function(){return n.e("chunk-882d9a6c").then(n.bind(null,"8e24"))},_e=function(){return n.e("chunk-623fcff4").then(n.bind(null,"06bc"))},Te=function(){return n.e("chunk-c3ac7cca").then(n.bind(null,"6e8a"))},Ee=function(){return n.e("chunk-a11ae436").then(n.bind(null,"6ecd"))},Ae=function(){return n.e("chunk-2bbbd056").then(n.bind(null,"bd01"))},Ie=function(){return n.e("chunk-951d4230").then(n.bind(null,"6634"))},Ce=function(){return n.e("chunk-12e7dfe2").then(n.bind(null,"8a71"))},Le=function(){return n.e("chunk-05ed0da4").then(n.bind(null,"2e45"))},xe=function(){return n.e("chunk-2d0cfe56").then(n.bind(null,"6655"))},De=function(){return n.e("chunk-a8ca73b0").then(n.bind(null,"2b12"))},Pe=function(){return n.e("chunk-1f8efde4").then(n.bind(null,"441b"))},Ne=function(){return n.e("chunk-512aab58").then(n.bind(null,"0fe0"))},We=function(){return n.e("chunk-1f3aa5a2").then(n.bind(null,"4fe8"))},Be=function(){return n.e("chunk-1b668e96").then(n.bind(null,"1f6b"))},Re=function(){return n.e("chunk-f269f154").then(n.bind(null,"cc05"))},qe=[{path:"/",name:"home",component:ye,beforeEnter:function(e,t,n){we({title:"Welcome QR | Description",description:"Brief description of how Welcome QR functions and the benefits it can provide to customers.",index:!0},n)}},{path:"/contact",name:"contact",component:We,beforeEnter:function(e,t,n){we({title:"Welcome QR | Contact Us",description:"Get in touch with us about; bug reports, feature requests, account queries or kind words of encoragement. We would love to hear from you!",index:!0},n)}},{path:"/admin",name:"adminmain",redirect:{name:"serverlogs"},meta:{requiresAuth:!0,requiresAdmin:!0},component:Se,beforeEnter:function(e,t,n){we({index:!1},n)},children:[{path:"/admin/server-logs",name:"serverlogs",meta:{requiresAuth:!0,requiresAdmin:!0},component:_e,beforeEnter:function(e,t,n){we({index:!1},n)}}]},{path:"/account",name:"account",meta:{requiresAuth:!0},component:De,beforeEnter:function(e,t,n){we({title:"Welcome QR | Account",description:"Manage all the information we need to keep your account working as intended",index:!0},n)}},{path:"/authcb",name:"authcb",meta:{requiresAuth:!1},component:Re,beforeEnter:function(e,t,n){we({index:!1},n)}},{path:"/auth",name:"auth",component:Ee,redirect:{name:"login"},children:[{path:"/auth/login",name:"login",component:Ae,beforeEnter:function(e,t,n){we({title:"Login ~ Signup",description:"Login and Signup here!",index:!0},n)}},{path:"/auth/signup",name:"signup",component:Ie,beforeEnter:function(e,t,n){we({title:"Login ~ Signup",description:"Login and Signup here!",index:!0},n)}},{path:"/auth/reset",name:"reset",component:Ce,beforeEnter:function(e,t,n){we({title:"Login ~ Signup",description:"Login and Signup here!",index:!0},n)}},{path:"/auth/forgot",name:"forgot",component:Le,beforeEnter:function(e,t,n){we({title:"Login ~ Signup",description:"Login and Signup here!",index:!0},n)}}]},{path:"/app",name:"wapp",meta:{requiresAuth:!0},component:Te,beforeEnter:function(e,t,n){we({title:"Login ~ Signup",description:"Login and Signup here!",index:!0},n)}},{path:"/verify-your-email",name:"verifyemail",component:xe,beforeEnter:function(e,t,n){we({index:!1},n)}},{path:"/privacy",name:"privacy",component:Ne,beforeEnter:function(e,t,n){we({title:"Websickles~Privacy Policy",description:"Brief description of how websickles manages and takes care of your data and your datas security.",index:!0},n)}},{path:"/toc",name:"terms",component:Pe,beforeEnter:function(e,t,n){we({title:"Websickles~Terms and Conditions",description:"Brief description of how Welcome QR Codes does business in a legal sense, information on your rights and our methods of operation",index:!0},n)}},{path:"/:pathMatch(.*)*",name:"notfound",component:Be,beforeEnter:function(e,t,n){we({index:!1},n)}}],Ue=Object(Oe["a"])({history:Object(Oe["b"])("/"),routes:qe,scrollBehavior:function(e,t,n){return n||{left:0,top:0}}}),Me=function(){return!!localStorage.getItem("AuthToken")&&""!==localStorage.getItem("AuthToken")};Ue.beforeEach((function(e,t,n){e.meta.requiresAuth&&!Me()?n({name:"login",query:{authRedirect:"true"}}):n()}));var Ge,$e,He,Ye=Ue,Qe=n("ade3"),ze=n("750d"),Ze=n("c9d2"),Fe={user:{email:null,id:null,authed:!1,subdom:null,role:null,tier:null},ui:{windowWidth:0,windowHeight:0,scrollY:0},drag:{current:""},static:(Ge={},Object(Qe["a"])(Ge,Ze["c"],{state:ze["a"].Dormant,description:{placeholder:""},baseStyles:{placeholder:""},iconPath:""}),Object(Qe["a"])(Ge,Ze["b"],{state:ze["a"].Dormant,description:{placeholder:""},baseStyles:{placeholder:""},iconPath:""}),Ge),content:[]},Ke=n("6dcd");(function(e){e["SET_WINDOW_SIZE"]="SET_WINDOW_SIZE",e["SET_SCROLL_LOCATION"]="SET_SCROLL_LOCATION",e["IS_AUTHED"]="IS_AUTHED",e["SET_CONTENT_STATE"]="SET_CONTENT_STATE",e["SET_STATIC_STATE"]="SET_STATIC_STATE"})(He||(He={}));var Je=($e={},Object(Qe["a"])($e,He.SET_STATIC_STATE,(function(e,t){t.wgtState===ze["a"].Dragging?e.drag.current=t.elementID:t.wgtState!==ze["a"].Placed&&t.wgtState!==ze["a"].Dormant||(e.drag.current=""),e.static[t.elementID]&&(e.static[t.elementID].state=t.wgtState)})),Object(Qe["a"])($e,He.SET_CONTENT_STATE,(function(e,t){t.wgtState===ze["a"].Dragging?e.drag.current=t.elementID:t.wgtState!==ze["a"].Placed&&t.wgtState!==ze["a"].Dormant||(e.drag.current=""),t.isOriginal,t.index&&(e.content[t.index].state=t.wgtState)})),Object(Qe["a"])($e,He.IS_AUTHED,(function(e,t){e.user.authed=t.authed,e.user.email=t.email,e.user.id=t.id,e.user.subdom=t.subdom,null!==t.token&&t.authed?Object(Ke["b"])(t.token):Object(Ke["a"])()})),Object(Qe["a"])($e,He.SET_WINDOW_SIZE,(function(e){e.ui.windowWidth=window.innerWidth,e.ui.windowHeight=window.innerHeight})),Object(Qe["a"])($e,He.SET_SCROLL_LOCATION,(function(e){e.ui.scrollY=window.scrollY})),$e),Ve={windowWidth:function(e){return e.ui.windowWidth||0},windowHeight:function(e){return e.ui.windowHeight||0},scrollY:function(e){return e.ui.scrollY||0},isauthed:function(e){return e.user.authed||!1},getuser:function(e){return e.user},getCurrentDrag:function(e){return e.drag.current||""},getAllStatic:function(e){return e.static},getStaticWidget:function(e){return function(t){return e.static[t]}},getContentBlocks:function(e){return e.content}},Xe=Object(A["a"])({state:Fe,mutations:Je,getters:Ve}),et=n("d4ec"),tt=n("bee2"),nt=n("bc3a"),ct=n.n(nt),ot=n("d89f");ct.a.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("AuthToken"));var at=function(){function e(t){Object(et["a"])(this,e),this.BASE_URL="".concat(ot["a"],"/auth"),this.ax=ct.a.create({baseURL:this.BASE_URL,withCredentials:!0,headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}),ct.a.interceptors.request.use((function(e){return e.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("AuthToken")),e}),(function(e){return Promise.reject(e)})),this.getuser().then((function(e){null!==e.data.user.token&&e.data.user.token&&Object(Ke["b"])(e.data.user.token),t.commit("IS_AUTHED",e.data.user),null!==e.data.user.email&&I["c"].emit(I["g"],Object(I["n"])(e.data.user.email))}))}return Object(tt["a"])(e,[{key:"getuser",value:function(){return this.ax.post("user",{})}},{key:"usersettings",value:function(){return this.ax.post("/user_settings",{})}},{key:"togglesubscribe",value:function(e){return this.ax.post("/toggle_subscribe",{subscribe:e})}},{key:"logout",value:function(){return Object(Ke["a"])(),this.ax.post("/logout")}},{key:"signup",value:function(e,t,n){return this.ax.post("/signup",{email:e,password:t,confirm:n})}},{key:"login",value:function(e,t){return this.ax.post("/login",{email:e,password:t})}},{key:"forgot",value:function(e){return this.ax.post("/forgot",{email:e})}},{key:"reset",value:function(e,t,n){return this.ax.post("/reset",{token:e,password:t,confirm:n})}},{key:"requestverifyemail",value:function(){return this.ax.post("/send_verify_email")}},{key:"verifyemailtoken",value:function(e){return this.ax.post("/verify_email_token",{token:e})}},{key:"contact",value:function(e,t,n,c){return this.ax.post("/contact",{email:e,name:t,message:n,selectval:c})}}]),e}();n("99af"),n("fb6a");ct.a.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("AuthToken"));var rt=function(){function e(){Object(et["a"])(this,e),this.BASE_URL="".concat(ot["a"],"/admin"),this.ax=ct.a.create({baseURL:this.BASE_URL,withCredentials:!0,headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}),ct.a.interceptors.request.use((function(e){return e.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("AuthToken")),e}),(function(e){return Promise.reject(e)}))}return Object(tt["a"])(e,[{key:"ensureTwoDigits",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=t?e+1:e,("0"+e).slice(-2)}},{key:"getlogbyday",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new Date;return""===e&&"".concat(t.getFullYear(),"-").concat(this.ensureTwoDigits(t.getMonth(),!0),"-").concat(this.ensureTwoDigits(t.getDate())),this.ax.post("get_log_by_day",{day:e})}},{key:"getalllogfilenames",value:function(){return this.ax.post("get_all_log_filenames")}},{key:"clientsideerror",value:function(e){return this.ax.post("new_client_side_error",{errdeets:e})}}]),e}(),it=Object(c["e"])(ve);it.config.globalProperties.$QAdmin=new rt;var ut=new at(Xe);it.config.globalProperties.$QAuth=ut;t["default"]=ut;it.config.errorHandler=function(e,t,n){return it.config.globalProperties.$QAdmin.clientsideerror({time:new Date,userAgent:navigator.userAgent,error:e,info:n}),!1},window.onerror=function(e,t,n,c,o){return it.config.globalProperties.$QAdmin.clientsideerror({time:new Date,userAgent:navigator.userAgent,message:e,url:t,line:n,column:c,error:o}),!1},it.use(Ye).use(Xe).mount("#app")},d176:function(e,t,n){"use strict";n("0c61")},d89f:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c="https://websickles.io"},db42:function(e,t,n){"use strict";n("5784")},dd82:function(e,t,n){"use strict";n("fa6e")},f696:function(e,t,n){"use strict";n("4608")},fa6e:function(e,t,n){}});
//# sourceMappingURL=app.fb42f7e7.js.map