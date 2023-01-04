(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b0ae392"],{bf26:function(t,e,a){},eda0:function(t,e,a){"use strict";a.r(e);a("a450");var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"department-doctor"},[e("el-radio-group",{on:{change:t.changeSwitch},model:{value:t.isSV,callback:function(e){t.isSV=e},expression:"isSV"}},[e("el-radio",{attrs:{label:1}},[t._v("患者360")]),e("el-radio",{attrs:{label:2}},[t._v("专科视图")]),e("el-radio",{attrs:{label:3}},[t._v("移动360")])],1),e("span",{staticClass:"date-span"},[t._v("时间范围：")]),e("el-date-picker",{attrs:{type:"daterange",clearable:!1,align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.changeDate},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.departmentShow,expression:"departmentShow"}],attrs:{id:"department"}},[e("div",{staticClass:"title-span"},[t._v("\n      "+t._s(2===t.isSV?"模块访问情况":"Top10科室访问情况")+"\n    ")]),e("el-radio-group",{staticClass:"typeRadio",on:{change:t.changeRadio},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[e("el-radio",{attrs:{label:1}},[t._v("按浏览量查看")]),e("el-radio",{attrs:{label:2}},[t._v("按使用人数查看")])],1),e("span",{directives:[{name:"show",rawName:"v-show",value:2===t.isSV,expression:"isSV === 2"}],staticClass:"date-span"},[t._v("专科视图类型：")]),e("el-select",{directives:[{name:"show",rawName:"v-show",value:2===t.isSV,expression:"isSV === 2"}],attrs:{filterable:"",placeholder:"请选择专科视图"},on:{change:t.getSpecialViewNum},model:{value:t.defaultSpecialViewType,callback:function(e){t.defaultSpecialViewType=e},expression:"defaultSpecialViewType"}},t._l(t.specialViewTypeList,(function(t,a){return e("el-option",{key:a,attrs:{label:t.diseaseName,value:t.diseaseCode}})})),1),e("span",{directives:[{name:"show",rawName:"v-show",value:2!==t.isSV,expression:"isSV !==2"}],staticClass:"date-span"},[t._v("选择对比科室：")]),e("el-select",{attrs:{"multiple-limit":5,multiple:"",filterable:"",placeholder:"请选择科室"},model:{value:t.defaultDepartmentOption,callback:function(e){t.defaultDepartmentOption=e},expression:"defaultDepartmentOption"}},t._l(t.departmentOptions,(function(t,a){return e("el-option",{key:a,attrs:{label:t.name,value:t.code}})})),1),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.defaultDepartmentOption.length&&!t.quitContrast,expression:"defaultDepartmentOption.length && !quitContrast"}],staticClass:"contrastBtn",attrs:{type:"primary"},on:{click:t.showDepartmentContrastBar}},[t._v("开始对比")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.quitContrast,expression:"quitContrast"}],on:{click:t.closeDepartmentContrastBar}},[t._v("退出对比")]),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.barChartyAxis.length,expression:"!barChartyAxis.length"}],staticClass:"empty-text"},[t._v("暂无数据")]),e("div",{attrs:{id:"departmentBar"}}),e("div",{attrs:{id:"departmentContrastBar"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.departmentShow,expression:"!departmentShow"}],attrs:{id:"doctor"}},[e("div",{staticClass:"backDepartment",on:{click:t.backDepartment}},[e("i",{staticClass:"el-icon-arrow-left"}),t._v("\n      "+t._s(t.departmentName)+" Top10医生访问情况\n      "),e("span",{directives:[{name:"show",rawName:"v-show",value:2!==t.isSV,expression:"isSV !== 2"}],staticClass:"date-span"},[t._v("选择对比医生：")]),e("el-select",{attrs:{"multiple-limit":5,multiple:"",filterable:"",placeholder:"请选择医生"},model:{value:t.defaultDoctorOption,callback:function(e){t.defaultDoctorOption=e},expression:"defaultDoctorOption"}},t._l(t.doctorOptions,(function(t,a){return e("el-option",{key:a,attrs:{label:t.userName,value:t.usercode}})})),1),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.defaultDoctorOption.length&&!t.quitContrast,expression:"defaultDoctorOption.length && !quitContrast"}],staticClass:"contrastBtn",attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.showDoctorContrastBar.apply(null,arguments)}}},[t._v("开始对比")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.quitContrast,expression:"quitContrast"}],on:{click:function(e){return e.stopPropagation(),t.closeDepartmentContrastBar.apply(null,arguments)}}},[t._v("退出对比")])],1),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.barChartyAxis.length,expression:"!barChartyAxis.length"}],staticClass:"empty-text"},[t._v("暂无数据")]),e("div",{attrs:{id:"doctorBar"}}),e("div",{attrs:{id:"doctorContrastBar"}})])],1)},n=[],r=(a("7afe"),a("aa18"),a("982e"),a("f13c")),s=a("ae5e"),o=a("acac"),l=a("2ad3"),c=a("e0e5"),p=a("fd63"),d=a("e4a1"),h=a("4d28"),u=a.n(h);function m(t){var e=f();return function(){var a,i=Object(c["a"])(t);if(e){var n=Object(c["a"])(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Object(l["a"])(this,a)}}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var v=function(t){Object(o["a"])(a,t);var e=m(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.isSV=1,t.pickerBeginDateBefore={disabledDate:function(t){return t.getTime()>Date.now()}},t.dateRange=[t.$moment(new Date).format("YYYY-MM-DD"),t.$moment(new Date).format("YYYY-MM-DD")],t.radio=1,t.departmentShow=!0,t.contrastDepartment=!0,t.quitContrast=!1,t.startContrast=!1,t.defaultSpecialViewType="",t.specialViewTypeList=[],t.departmentOptions=[],t.defaultDepartmentOption=[],t.departmentName="",t.defaultDoctorOption=[],t.doctorOptions=[],t.barChartyAxis=[],t.barChartSeries=[],t.departmentBarChartSeriesName="浏览量",t.departmentBarChart=null,t.detailBarChart=null,t.ksdm="",t.departmentData=[],t.doctorData=[],t.pickerOptions={shortcuts:[{text:"今天",onClick:function(t){var e=new Date,a=new Date;t.$emit("pick",[a,e])}},{text:"昨天",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-864e5),e.setTime(e.getTime()-864e5),t.$emit("pick",[a,e])}},{text:"最近7天",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近30天",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}}],disabledDate:function(t){return t.getTime()>Date.now()}},t}return Object(s["a"])(a,[{key:"mounted",value:function(){this.getPortalData(!1),this.getAllDepartment()}},{key:"changeSwitch",value:function(t){this.departmentShow=!0,this.defaultDepartmentOption=[],this.contrastDepartment=!0,this.startContrast=!1,this.ksdm="",this.quitContrast&&this.closeDepartmentContrastBar(),this.quitContrast=!1,1!==t?this.getSpecialViewList():this.getPortalData(!1)}},{key:"changeRadio",value:function(){1===this.radio?this.departmentBarChartSeriesName="浏览量":this.departmentBarChartSeriesName="使用人数",1!==this.isSV?this.getSpecialViewNum():(this.getPortalData(!1),this.quitContrast&&this.getPortalData(!0))}},{key:"closeDepartmentContrastBar",value:function(){this.departmentShow?document.getElementById("departmentContrastBar").style.height="0px":document.getElementById("doctorContrastBar").style.height="0px",this.detailBarChart.dispose(),this.quitContrast=!1,this.contrastDepartment=!0,this.defaultDepartmentOption=[],this.defaultDoctorOption=[]}},{key:"showDepartmentContrastBar",value:function(){document.getElementById("departmentContrastBar").style.height="165px",this.startContrast=!1,this.quitContrast=!0,this.getPortalData(!0)}},{key:"backDepartment",value:function(){this.quitContrast&&this.closeDepartmentContrastBar(),this.startContrast=!1,this.defaultDoctorOption=[],this.contrastDepartment=!0,this.ksdm="",this.departmentShow=!0,1!==this.isSV?this.getSpecialViewNum():this.getPortalData(!1)}},{key:"showSelectDoctorBox",value:function(){this.startContrast=!0,this.contrastDepartment=!1,this.getAllUser()}},{key:"showDoctorContrastBar",value:function(){document.getElementById("doctorContrastBar").style.height="165px",this.startContrast=!1,this.quitContrast=!0,this.getPortalData(!0)}},{key:"getAllUser",value:function(){var t=this,e={ksdm:this.ksdm,beginDay:this.dateRange[0],endDay:this.dateRange[1]};this.$api.getAllUser(e).then((function(e){t.doctorOptions=e.data||[],t.doctorOptions=t.doctorOptions.filter((function(e){return!t.departmentData.includes(e.usercode)}))})).catch((function(t){}))}},{key:"getPortalData",value:function(t){var e=this,a={ksdm:this.ksdm,beginDay:this.dateRange[0],endDay:this.dateRange[1],codes:this.departmentShow?this.defaultDepartmentOption.join(","):this.defaultDoctorOption.join(","),isPeople:1!==this.radio,dataType:this.departmentShow?"ks":"ys",isContrast:t};this.$api.getTopViewNum(a).then((function(a){if(e.barChartyAxis=[],e.barChartSeries=[],a.data)return t||(e.departmentData=a.data.map((function(t){return t.code}))),e.barChartyAxis=a.data.map((function(t){return t.name.length>9?t.name.slice(0,9)+"...":t.name})),e.barChartSeries=a.data.map((function(t){return t.num})),void e.renderDepartmentBar(t)})).catch((function(t){}))}},{key:"renderDepartmentBar",value:function(t){var e=this,a="departmentBar";t&&this.departmentShow?a="departmentContrastBar":t&&!this.departmentShow?a="doctorContrastBar":t||this.departmentShow||(a="doctorBar"),u.a.init(document.getElementById(a)).dispose();var i=u.a.init(document.getElementById(a)),n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"15%",right:"8%",bottom:"2%",top:"1%"},xAxis:{show:!1,type:"value",boundaryGap:[0,.01]},yAxis:{axisLine:{show:!1},axisTick:{show:!1},type:"category",data:this.barChartyAxis},series:[{name:this.departmentBarChartSeriesName,type:"bar",barCategoryGap:"40%",barMaxWidth:"70",label:{normal:{show:!0,position:"right"}},itemStyle:{normal:{color:"#47dfed",barBorderRadius:6}},data:this.barChartSeries}]};i.setOption(n),this.departmentShow&&!t&&i.getZr().on("click",(function(t){e.getAllUser(),e.quitContrast&&e.closeDepartmentContrastBar(),e.startContrast=!1,e.defaultDepartmentOption=[],e.contrastDepartment=!0,e.departmentShow=!1;var a=i.convertFromPixel({seriesIndex:0},[t.offsetX,t.offsetY])[1];e.ksdm=e.departmentData[a],e.departmentName=e.barChartyAxis[a],1!==e.isSV?e.getSpecialViewNum():e.getPortalData(!1)})),t?this.detailBarChart=i:this.departmentBarChart=i}},{key:"getSpecialViewList",value:function(){var t=this;2===this.isSV?this.$api.getAllSpecialView().then((function(e){t.specialViewTypeList=e.data||[],t.specialViewTypeList.length&&(t.defaultSpecialViewType=t.specialViewTypeList[0].diseaseCode),t.getSpecialViewNum()})).catch((function(t){})):this.getSpecialViewNum()}},{key:"getSpecialViewNum",value:function(){var t=this,e=2===this.isSV?"specialView-"+this.defaultSpecialViewType:"mobile360",a={beginDay:this.dateRange[0],endDay:this.dateRange[1],dataType:this.departmentShow?"ks":"ys",moduleCode:this.ksdm,parentCode:e,isPeople:1!==this.radio};this.$api.getSpecialViewNum(a).then((function(e){t.barChartyAxis=[],t.barChartSeries=[],t.departmentData=e.data.map((function(t){return t.code})),t.barChartyAxis=e.data.map((function(t){return t.name.length>9?t.name.slice(0,9)+"...":t.name})),t.barChartSeries=e.data.map((function(t){return t.num})),t.renderDepartmentBar(!1)})).catch((function(t){}))}},{key:"getAllDepartment",value:function(){var t=this;this.$api.listAllDepts().then((function(e){t.departmentOptions=e.data||[],t.departmentOptions=t.departmentOptions.filter((function(e){return!t.departmentData.includes(e.code)}))})).catch((function(t){}))}},{key:"changeDate",value:function(){1!==this.isSV?this.getSpecialViewNum():(this.quitContrast&&this.getPortalData(!0),this.getPortalData(!1))}}]),a}(d["c"]);v=Object(p["a"])([Object(d["a"])({name:"departmentDoctor"})],v);var w=v,g=w,C=(a("ee0a"),a("0b56")),y=Object(C["a"])(g,i,n,!1,null,"5aa5b606",null);e["default"]=y.exports},ee0a:function(t,e,a){"use strict";a("bf26")}}]);