(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14681e9b"],{"10b1":function(e,t,a){"use strict";a("5732")},5732:function(e,t,a){},6407:function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,"pager-count":e.pagerCount},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})},n=[],r=(a("7afe"),a("f13c")),o=a("ae5e"),s=a("acac"),l=a("2ad3"),c=a("e0e5"),u=a("fd63"),d=a("e4a1");function f(e){var t=p();return function(){var a,i=Object(c["a"])(e);if(t){var n=Object(c["a"])(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Object(l["a"])(this,a)}}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var b=function(e){Object(s["a"])(a,e);var t=f(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"currentPage",get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},{key:"pageSize",get:function(){return this.size},set:function(e){this.$emit("update:size",e)}},{key:"handleSizeChange",value:function(e){this.currentPage=1,this.$emit("getTableData")}},{key:"handleCurrentChange",value:function(e){this.$emit("getTableData")}}]),a}(d["c"]);Object(u["a"])([Object(d["b"])({required:!0})],b.prototype,"total",void 0),Object(u["a"])([Object(d["b"])({default:1})],b.prototype,"page",void 0),Object(u["a"])([Object(d["b"])({default:10})],b.prototype,"size",void 0),Object(u["a"])([Object(d["b"])({default:7})],b.prototype,"pagerCount",void 0),Object(u["a"])([Object(d["b"])({default:function(){return[10,20,30,50]}})],b.prototype,"pageSizes",void 0),Object(u["a"])([Object(d["b"])({default:"total, sizes, prev, pager, next, jumper"})],b.prototype,"layout",void 0),b=Object(u["a"])([Object(d["a"])({name:"pagination"})],b);var g=b,m=g,h=(a("84c7"),a("0b56")),y=Object(h["a"])(m,i,n,!1,null,"7e267c7f",null);t["a"]=y.exports},"72bb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"mobile-user flex flex-v"},[t("div",{staticClass:"search-condition flex flex-pack-justify-between"},[t("div",{staticClass:"condition flex"},[t("el-input",{staticClass:"w-200",attrs:{placeholder:"请输入账号、姓名",clearable:""},on:{clear:e.queryData},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queryData.apply(null,arguments)}},model:{value:e.searchStr,callback:function(t){e.searchStr=t},expression:"searchStr"}}),t("el-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:e.queryData}},[e._v("\n        查询\n      ")])],1)]),t("div",{staticClass:"table-container flex-1 mt-10"},[t("el-table",{staticStyle:{width:"99%"},attrs:{data:e.mobileTableData,stripe:""}},[t("el-table-column",{attrs:{type:"index",label:"#","min-width":"10%"}}),t("el-table-column",{attrs:{prop:"usercode",label:"登录名","min-width":"10%",sortable:""}}),t("el-table-column",{attrs:{prop:"jgmc",label:"所属机构","min-width":"10%"}}),t("el-table-column",{attrs:{prop:"dingUserId",label:"钉钉id","min-width":"15%"}}),t("el-table-column",{attrs:{prop:"browser",label:"启用免密登录","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.dingUserId?1===t.row.state?"是":"否":"未关联")+"\n        ")]}}])}),t("el-table-column",{attrs:{prop:"dingMsgSwitch",label:"消息推送","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.dingMsgSwitch?"开启":"关闭")+"\n        ")]}}])}),t("el-table-column",{attrs:{label:"操作","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editMobileUser(a.row)}}},[e._v("\n            编辑\n          ")]),t("el-button",{attrs:{type:"primary",disabled:!a.row.dingUserId},on:{click:function(t){return e.unBindMobileUser(a.row)}}},[e._v("\n            解绑\n          ")])]}}])})],1),t("pagination",{attrs:{total:e.total,page:e.page,size:e.size},on:{"update:page":function(t){e.page=t},"update:size":function(t){e.size=t},getTableData:e.getTableData}})],1),t("el-dialog",{attrs:{title:"编辑移动用户",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"110px",rules:e.subFormRules}},[t("el-form-item",{attrs:{label:"用户ID",prop:"usercode"}},[t("el-input",{staticStyle:{width:"280px"},attrs:{disabled:"disabled",maxlength:20,"auto-complete":"off"},model:{value:e.editForm.usercode,callback:function(t){e.$set(e.editForm,"usercode",t)},expression:"editForm.usercode"}})],1),t("el-form-item",{attrs:{label:"机构代码",prop:"fullname"}},[t("el-input",{staticStyle:{width:"280px"},attrs:{disabled:"disabled",maxlength:20,"auto-complete":"off"},model:{value:e.editForm.jgdm,callback:function(t){e.$set(e.editForm,"jgdm",t)},expression:"editForm.jgdm"}})],1),t("el-form-item",{attrs:{label:"钉钉ID",prop:"dingUserId"}},[t("el-input",{staticStyle:{width:"280px"},attrs:{maxlength:20,"auto-complete":"off"},model:{value:e.editForm.dingUserId,callback:function(t){e.$set(e.editForm,"dingUserId",t)},expression:"editForm.dingUserId"}})],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"启用免密登录"}},[t("el-switch",{attrs:{"on-text":"ON","off-text":"OFF"},model:{value:e.editForm.state,callback:function(t){e.$set(e.editForm,"state",t)},expression:"editForm.state"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"推送开关"}},[t("el-switch",{attrs:{"on-text":"ON","off-text":"OFF"},model:{value:e.editForm.dingMsgSwitch,callback:function(t){e.$set(e.editForm,"dingMsgSwitch",t)},expression:"editForm.dingMsgSwitch"}})],1)],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editSubmit}},[e._v("确 定")])],1)],1)],1)},n=[],r=(a("7afe"),a("f13c")),o=a("ae5e"),s=a("acac"),l=a("2ad3"),c=a("e0e5"),u=a("fd63"),d=a("e4a1"),f=a("6407");function p(e){var t=b();return function(){var a,i=Object(c["a"])(e);if(t){var n=Object(c["a"])(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Object(l["a"])(this,a)}}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var g=function(e){Object(s["a"])(a,e);var t=p(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.searchStr="",e.mobileTableData=[],e.dialogVisible=!1,e.editForm={id:0,jgdm:"",usercode:"",fullname:"",dingUserId:"",state:!1,dingMsgSwitch:!1},e.total=0,e.page=1,e.size=10,e.subFormRules={dingUserId:[{required:!0,message:"请输入钉钉ID",trigger:"blur"}]},e}return Object(o["a"])(a,[{key:"mounted",value:function(){this.getTableData()}},{key:"queryData",value:function(){this.page=1,this.getTableData()}},{key:"getTableData",value:function(){var e=this,t={keyWord:this.searchStr,page:this.page,size:this.size};this.$api.getMobileUserByKeyword(t).then((function(t){var a=t.data||{};e.mobileTableData=a.content||[],e.total=a.totalElements||0})).catch((function(e){}))}},{key:"editMobileUser",value:function(e){var t=this;this.dialogVisible=!0,this.editForm.id=e.mobileUserId,this.editForm.usercode=e.usercode,this.editForm.fullname=e.fullname,this.editForm.dingUserId=e.dingUserId,this.editForm.jgdm=e.jgdm,this.editForm.state=1===e.state,this.editForm.dingMsgSwitch=!!e.dingMsgSwitch,this.$nextTick((function(){t.$refs.editForm.clearValidate()}))}},{key:"unBindMobileUser",value:function(e){var t=this;this.$api.unbindMobileUser({jgdm:e.jgdm,usercode:e.usercode}).then((function(e){200===e.status?(t.$message.success("解绑成功！"),t.getTableData()):t.$message.error("解绑失败！")})).catch((function(e){t.$message.error(e)}))}},{key:"editSubmit",value:function(){var e=this;this.$refs.editForm.validate((function(t){t&&e.$api.editMobileUser(e.editForm).then((function(t){200===t.status?(e.$message.success("修改成功！"),e.dialogVisible=!1,e.getTableData()):(e.$message.success("修改失败！"),e.dialogVisible=!1)})).catch((function(t){e.dialogVisible=!1}))}))}}]),a}(d["c"]);g=Object(u["a"])([Object(d["a"])({name:"MobileUser",components:{pagination:f["a"]}})],g);var m=g,h=m,y=(a("10b1"),a("0b56")),v=Object(y["a"])(h,i,n,!1,null,"81efe86a",null);t["default"]=v.exports},"84c7":function(e,t,a){"use strict";a("f180")},f180:function(e,t,a){}}]);