(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-511e433c"],{"5d09":function(t,e,o){"use strict";o("6793")},6793:function(t,e,o){},"7c09":function(t,e,o){"use strict";var i=o("e1cf"),s={},a=Object(i["b"])(s);a.onGlobalStateChange((function(t,e){console.log("===state",t),console.log("===prev",e)})),e["a"]=a},"9ed6":function(t,e,o){"use strict";o.r(e);o("a450");var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"login-container"},[e("div",{staticClass:"login"},[e("div",{staticClass:"left"}),e("div",{staticClass:"right flex flex-v"},[e("div",{staticClass:"icon-login",style:{width:t.loginLogoSizeInfo.width,height:t.loginLogoSizeInfo.height}},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"imgs/logo-icon.png",alt:""}})]),e("h3",{staticClass:"title"},[t._v("后台管理系统")]),e("el-form",{ref:"loginForm",class:["flex-1","flex","flex-v","flex-pack-justify-around",{"form-margin":t.productList.length<2&&t.hosptailList.length<2}],attrs:{model:t.loginForm,rules:t.formRules,"label-position":"left","label-width":"0"}},[e("el-form-item",{attrs:{prop:"account"}},[e("el-input",{staticClass:"user-input",attrs:{type:"text",size:"small","auto-complete":"off",placeholder:"请输入账号","prefix-icon":"el-icon-user"},model:{value:t.loginForm.account,callback:function(e){t.$set(t.loginForm,"account",e)},expression:"loginForm.account"}})],1),e("el-form-item",{attrs:{prop:"password"}},[e("el-input",{staticClass:"form-input",attrs:{type:"password",size:"small","auto-complete":"off",placeholder:"请输入密码","prefix-icon":"el-icon-edit-outline"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.productList.length>1,expression:"productList.length > 1"}],attrs:{prop:"productId"}},[e("el-select",{staticClass:"form-select",attrs:{size:"small",placeholder:"请选择产品"},model:{value:t.loginForm.productId,callback:function(e){t.$set(t.loginForm,"productId",e)},expression:"loginForm.productId"}},t._l(t.productList,(function(t){return e("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})})),1)],1),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.hosptailList.length>1,expression:"hosptailList.length > 1"}],attrs:{prop:"hosptailId"}},[e("el-select",{staticClass:"form-select",attrs:{size:"small",placeholder:"请选择院区"},model:{value:t.loginForm.hosptailId,callback:function(e){t.$set(t.loginForm,"hosptailId",e)},expression:"loginForm.hosptailId"}},t._l(t.hosptailList,(function(t){return e("el-option",{key:t.validue,attrs:{label:t.name,value:t.code}})})),1)],1),t.captchaFlg?e("el-form-item",{attrs:{prop:"captcha"}},[e("el-input",{staticClass:"form-input",staticStyle:{width:"calc(100% - 106px)"},attrs:{type:"text",size:"small","auto-complete":"off",placeholder:"请输入验证码","prefix-icon":"el-icon-edit-outline"},model:{value:t.loginForm.captcha,callback:function(e){t.$set(t.loginForm,"captcha",e)},expression:"loginForm.captcha"}}),e("div",{staticClass:"check-code",attrs:{id:"captcha-img"},on:{click:t.getCaptchaImageFunc}},[e("img",{ref:"captchaImgRef",attrs:{id:"captcha",alt:"",src:"/auth/api/v3/token/getCaptchaImage"}})])],1):t._e(),e("el-form-item",[e("el-button",{class:["login-btn",{"btn-margin":t.productList.length<2&&t.hosptailList.length<2}],attrs:{type:"primary",loading:t.logining,disabled:!t.hosptailList.length&&!t.productList.length},on:{click:t.handleSubmit}},[t._v("\n            登录\n          ")])],1)],1)],1),e("div",{staticClass:"versoin"},[t._v("\n      © 2019 Winning Health 版权所有\n    ")])])])},s=[],a=(o("7afe"),o("e5b4"),o("1bc7"),o("fc02"),o("d91d"),o("f13c")),n=o("ae5e"),c=o("acac"),r=o("2ad3"),l=o("e0e5"),u=o("fd63"),d=o("e4a1"),p=o("2da9"),g=o("efb9"),h=o("7c09");function m(t){var e=f();return function(){var o,i=Object(l["a"])(t);if(e){var s=Object(l["a"])(this).constructor;o=Reflect.construct(i,arguments,s)}else o=i.apply(this,arguments);return Object(r["a"])(this,o)}}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var v=function(t){Object(c["a"])(o,t);var e=m(o);function o(){var t;return Object(a["a"])(this,o),t=e.apply(this,arguments),t.loginLogoSizeInfo={width:"0px",height:"0px"},t.logining=!1,t.captchaFlg=!1,t.loginForm={account:"",password:"",productId:"",hosptailId:"",captcha:""},t.formRules={account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],productId:[{required:!0,message:"请选择产品",trigger:"change"}],hosptailId:[{required:!0,message:"请选择医院",trigger:"change"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},t.hosptailList=[],t.productList=[],t.baseSysVersion="",t}return Object(n["a"])(o,[{key:"created",value:function(){this.$store.commit("SET_TOKEN",""),this.listAllProducts(""),this.listAllInstitutions(),this.getMasterInstitution(),this.getSystemVersion(),this.getCaptchaFlag(),this.getIsLoginAes()}},{key:"mounted",value:function(){this.loginLogoSizeInfo=window.CONFIG.loginLogoSizeInfo,this.getRequestParamMap(decodeURI(window.location.search))}},{key:"getRequestParamMap",value:function(t){if(-1!==t.indexOf("?"))for(var e=t.substr(1).split("&"),o=0;o<e.length;o++)this.loginForm[e[o].split("=")[0]]=p["Base64"].atob(unescape(e[o].split("=")[1]));""!==this.loginForm.productId&&""!==this.loginForm.hosptailId&&this.handleSubmit()}},{key:"listAllProducts",value:function(t){var e=this,o={usercode:t};this.$api.listAllProducts(o).then((function(t){e.productList=t.data||[],e.$store.commit("SET_PRODUCT_LIST",e.productList),1===e.productList.length&&(e.loginForm.productId=e.productList[0].code)})).catch((function(t){}))}},{key:"getCaptchaFlag",value:function(){var t=this,e={};this.$api.getCaptchaFlag(e).then((function(e){t.captchaFlg=e.data&&"1"===e.data,t.$nextTick((function(){t.getCaptchaImageFunc()}))})).catch((function(t){}))}},{key:"getIsLoginAes",value:function(){this.$api.getIsLoginAes().then((function(t){t.data&&sessionStorage.setItem("isLoginAes","1")})).catch((function(t){}))}},{key:"listAllInstitutions",value:function(){var t=this;this.$api.listAllInstitutions().then((function(e){t.hosptailList=e.data||[],1===t.hosptailList.length&&(t.loginForm.hosptailId=t.hosptailList[0].code)})).catch((function(t){}))}},{key:"getMasterInstitution",value:function(){var t=this;this.$api.getMainInstitution().then((function(e){console.log(e.data),t.$store.commit("SET_MASTER_INSTITUTION",e.data)})).catch((function(t){}))}},{key:"getCaptchaImageFunc",value:function(){var t=this.$refs.captchaImgRef,e=t.src;t.src=this.chgUrl(e)}},{key:"chgUrl",value:function(t){var e=(new Date).valueOf();return t=t.split("?")[0],t=t.indexOf("&")>=0?t+"×tamp="+e:t+"?timestamp="+e,t}},{key:"getSystemVersion",value:function(){var t=this;this.$api.getSystemVersion().then((function(e){t.$store.commit("SET_SYSTEM_VERSION",e.data),t.baseSysVersion=e.data})).catch((function(t){}))}},{key:"handleSubmit",value:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return!1;t.logining=!0;var o={usercode:"",password:"",yljgdm:"",productCode:"",captcha:""};o=sessionStorage.getItem("isLoginAes")?{usercode:g["a"].encrypt(t.loginForm.account),password:g["a"].encrypt(t.loginForm.password),yljgdm:g["a"].encrypt(t.loginForm.hosptailId),productCode:p["Base64"].encode(t.loginForm.productId),captcha:p["Base64"].encode(t.loginForm.captcha||"123456")}:{usercode:p["Base64"].encode(t.loginForm.account),password:p["Base64"].encode(t.loginForm.password),yljgdm:p["Base64"].encode(t.loginForm.hosptailId),productCode:p["Base64"].encode(t.loginForm.productId),captcha:p["Base64"].encode(t.loginForm.captcha||"123456")},t.$api.loginAdmin(o).then((function(e){var i=e.data||{};if(t.$store.commit("SET_ISKNOWLEDGE",i.isKnowledge),i.token){t.$store.commit("SET_TOKEN",i.token);var s=i.productList||[];s.length||t.$message.error("该账号未配置任何菜单，请更换账号！");var a=0;if(s.forEach((function(e){a+=e.menuList.length;var o=t.productList.find((function(t){return t.code===e.code}))||{};e.code===t.loginForm.productId&&t.$store.commit("SET_SYSTEM_VERSION",o.version||""),"00"===e.code?t.$set(e,"version",t.baseSysVersion||""):t.$set(e,"version",o.version||"")})),a){t.$store.commit("SET_USER_ACCOUNT",t.loginForm.account),t.$store.commit("SET_USER_NAME",i.fullname||""),t.$store.commit("SET_HOSPITAL_ID",p["Base64"].decode(o.yljgdm)),t.$store.commit("SET_HOSPITAL_LIST",t.hosptailList),t.hosptailList.length&&t.$store.commit("SET_CONFIG_HOSPITAL_ID",t.hosptailList[0].code),t.$store.commit("SET_ACTIVE_PRO_ID",p["Base64"].decode(o.productCode)),t.$store.commit("SET_MENU_LIST",s),h["a"].setGlobalState({isKnowledge:i.isKnowledge,yljgdm:p["Base64"].decode(o.yljgdm),token:i.token,activeProductId:p["Base64"].decode(o.productCode),hasPermissionMenuList:s}),t.$store.commit("SET_USER_CODE",i.usercode||""),sessionStorage.setItem("hasLogin",JSON.stringify(1));var n=s.find((function(t){return t.code===p["Base64"].decode(o.productCode)})).menuList;if(null==n)t.$message.error("该账号未配置该产品菜单，请更换产品！"),t.logining=!1;else{if(null==n[0].redirect||""===n[0].redirect)return t.$message.error("菜单重定向错误，请联系管理员！"),void(t.logining=!1);n[0].redirect.toLocaleLowerCase().indexOf("vte")>-1?t.$router.push("/micro-app/"):t.$router.push(n[0].redirect)}}else t.$message.error("该账号未配置任何菜单，请更换账号！"),t.logining=!1}else t.$message.error("token未获取，请联系管理员！")})).catch((function(e){t.logining=!1}))}))}}]),o}(d["c"]);v=Object(u["a"])([Object(d["a"])({name:"login"})],v);var I=v,S=I,L=(o("5d09"),o("0b56")),y=Object(L["a"])(S,i,s,!1,null,"61d5aab6",null);e["default"]=y.exports}}]);