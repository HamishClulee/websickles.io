(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfe56"],{6655:function(t,n,e){"use strict";e.r(n);var a=e("7a23"),c={class:"verify-email-container page-container restrict layout-col layout-center-all"};function i(t,n,e,i,o,r){return Object(a["t"])(),Object(a["f"])("section",c,[Object(a["j"])("button",{class:"button primary large",onClick:n[1]||(n[1]=function(){return r.verifyEmail.apply(r,arguments)})},"Verify Your Email")])}e("d3b7"),e("ac1f"),e("3ca3"),e("841c"),e("ddb0"),e("2b3d");var o=e("b143"),r={name:"verifyemail",data:function(){return{token:null}},mounted:function(){this.token=new URLSearchParams(window.location.search).get("token")},methods:{verifyEmail:function(){var t=this;this.$QAuth.verifyemailtoken(this.token).then((function(){t.$router.push({name:"account"})})).catch((function(){o["c"].emit(o["g"],o["b"]),t.$router.push({name:"account"})}))}}};r.render=i;n["default"]=r}}]);
//# sourceMappingURL=chunk-2d0cfe56.1b6f0e1a.js.map