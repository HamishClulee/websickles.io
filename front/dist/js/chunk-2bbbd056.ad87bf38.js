(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bbbd056"],{"2b2d":function(t,e,i){"use strict";var a=i("7a23"),r=Object(a["O"])("data-v-0e737ed6");Object(a["w"])("data-v-0e737ed6");var s={class:"input-row"},n={class:"error-text-con"},o={key:0,class:"error-icon"},c={class:"error-text"};Object(a["u"])();var u=r((function(t,e,i,r,u,l){return Object(a["t"])(),Object(a["f"])("div",{class:"field-container",style:{width:i.fullwidth?"100%":"auto"}},[Object(a["j"])("span",s,[Object(a["L"])(Object(a["j"])("input",{style:{width:i.setwidth},onFocus:e[1]||(e[1]=function(t){return u.touched=!0}),onBlur:e[2]||(e[2]=function(){return l.onBlur.apply(l,arguments)}),onInput:e[3]||(e[3]=function(t){return u.touched=!0}),class:"form-input",placeholder:" ","onUpdate:modelValue":e[4]||(e[4]=function(t){return u.val=t}),type:u.localtype,autocomplete:i.hasautocomplete,required:i.isrequired},null,44,["type","autocomplete","required"]),[[a["F"],u.val]]),"password"===i.inptype?(Object(a["t"])(),Object(a["f"])("img",{key:0,onClick:e[5]||(e[5]=function(){return l.toggletype.apply(l,arguments)}),src:"password"===u.localtype?"/svg/eye.svg":"/svg/eye-slash.svg"},null,8,["src"])):Object(a["g"])("",!0)]),Object(a["j"])("label",{onClick:e[6]||(e[6]=function(){return l.setInputActive.apply(l,arguments)}),class:l.stayactive?"stay-active":"placey-text"},Object(a["D"])(i.placey),3),Object(a["j"])("div",n,[""!==i.errortxt?(Object(a["t"])(),Object(a["f"])("div",o)):Object(a["g"])("",!0),Object(a["j"])("p",c,Object(a["D"])(i.errortxt),1)])],4)})),l={name:"qinput",props:{fullwidth:{default:!0,type:Boolean},setwidth:{default:"100%",type:String},placey:{type:String,required:!0},errortxt:{type:String,required:!0},eventname:{type:String,required:!0},isrequired:{type:Boolean,required:!1,default:!1},hasautocomplete:{type:Boolean,required:!1,default:!1},inptype:{type:String,required:!0}},data:function(){return{val:"",touched:!1,localtype:""}},created:function(){this.localtype=this.inptype},mounted:function(){var t=this;this.$nextTick((function(){t.$el.firstChild.firstChild.focus()}))},methods:{setInputActive:function(){this.touched=!0,this.$el.firstChild.firstChild.focus()},onBlur:function(t){this.touched=!1,t&&this.email!==t.target.value&&(this.email=t.target.value)},toggletype:function(){this.localtype="password"===this.localtype?"text":"password"}},computed:{stayactive:function(){return""!==this.val||this.touched}},watch:{val:function(t,e){t.length-e.length>5&&(this.touched=!0),this.$emit(this.eventname,this.val)}}};i("5899");l.render=u,l.__scopeId="data-v-0e737ed6";e["a"]=l},5899:function(t,e,i){"use strict";i("9f4f")},"5f21":function(t,e,i){"use strict";i("ddca")},"9f4f":function(t,e,i){},bd01:function(t,e,i){"use strict";i.r(e);var a=i("7a23"),r=Object(a["O"])("data-v-29a6f0b4");Object(a["w"])("data-v-29a6f0b4");var s={class:"auth-item-container"},n=Object(a["j"])("h2",{class:"h2"},"Login",-1),o={class:"error-h6"},c={class:"button-container"},u=Object(a["j"])("div",{class:"google-btn",style:{width:"100%"}},[Object(a["j"])("div",{class:"google-icon-wrapper"},[Object(a["j"])("img",{class:"google-icon-svg",src:"/svg/google.svg"})]),Object(a["j"])("p",{class:"btn-text"},[Object(a["j"])("b",null,"Continue with Google")])],-1),l=Object(a["i"])("Don't have an account? "),d=Object(a["i"])("Sign Up here."),p=Object(a["i"])("Trouble logging in?");Object(a["u"])();var h=r((function(t,e,i,h,b,f){var j=Object(a["B"])("qinput"),g=Object(a["B"])("router-link");return Object(a["t"])(),Object(a["f"])("div",s,[n,Object(a["j"])("h6",o,Object(a["D"])(b.servermsg),1),Object(a["j"])(j,{inptype:"email",placey:"Email",errortxt:b.emailerror,eventname:"emailinput",onEmailinput:f.validateemail,isrequired:!0,hasautocomplete:!0},null,8,["errortxt","onEmailinput"]),Object(a["j"])(j,{inptype:"password",placey:"Password",errortxt:b.passerror,eventname:"passwordinput",onPasswordinput:f.validatepassword,isrequired:!0,hasautocomplete:!0},null,8,["errortxt","onPasswordinput"]),Object(a["j"])("div",c,[Object(a["j"])("a",{href:f.buildLink},[u],8,["href"]),Object(a["j"])("button",{disabled:!f.validated,type:"submit",class:[{disabled:!f.validated},"button submit"],onClick:e[1]||(e[1]=function(){return f.submit.apply(f,arguments)})}," SUBMIT ",10,["disabled"]),Object(a["j"])("p",null,[l,Object(a["j"])(g,{to:{path:"/auth/signup"}},{default:r((function(){return[d]})),_:1})]),Object(a["j"])("p",null,[Object(a["j"])(g,{to:{path:"/auth/forgot"}},{default:r((function(){return[p]})),_:1})])])])})),b=(i("d3b7"),i("ac1f"),i("3ca3"),i("841c"),i("ddb0"),i("2b3d"),i("2b2d")),f=i("b143"),j=i("6dcd"),g=i("d89f"),m={name:"login",components:{qinput:b["a"]},data:function(){return{email:"",password:"",emailerror:"",passerror:"",servermsg:"",googleSignInParams:{client_id:"".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GOOGLE_CLIENT_ID,".apps.googleusercontent.com")}}},mounted:function(){var t=new URLSearchParams(window.location.search);"true"===t.get("authRedirect")&&f["c"].emit(f["g"],f["h"])},methods:{submit:function(t){var e=this;t.preventDefault(),this.validated&&(this.servermsg="",this.$QAuth.login(this.email,this.password).then((function(t){e.success(t)})).catch((function(t){e.httpError(t)})))},validateemail:function(t){var e=/^\S+@\S+$/;this.email=t,e.test(this.email)?(this.email,this.emailerror=""):this.emailerror="That email address looks funny, did you type it correctly?"},validatepassword:function(t){this.password=t,this.password.length<8?this.passerror="Password needs to be at least 8 characters long...":(this.password,this.passerror="")},httpError:function(t){this.servermsg="Something isn't right with those login details, try again. Maybe you need to Sign Up?",403!==t.response.status&&f["c"].emit(f["g"],f["a"])},success:function(t){t.data.userError?this.servermsg=t.data.userError:(Object(j["b"])(t.data.user.token),this.$store.commit("IS_AUTHED",t.data.user),f["c"].emit(f["g"],Object(f["l"])(t.data.user.email)),this.$router.push({path:"/authed"}))}},computed:{buildLink:function(){return"".concat(g["a"],"/auth/google")},validated:function(){return""===this.emailerror&&""===this.passerror&&""!==this.email&&""!==this.password}}};i("5f21");m.render=h,m.__scopeId="data-v-29a6f0b4";e["default"]=m},ddca:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2bbbd056.ad87bf38.js.map