(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74cdf8a4"],{6407:function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,"pager-count":e.pagerCount},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})},i=[],s=(a("7afe"),a("f13c")),l=a("ae5e"),r=a("acac"),o=a("2ad3"),c=a("e0e5"),u=a("fd63"),d=a("e4a1");function p(e){var t=m();return function(){var a,n=Object(c["a"])(e);if(t){var i=Object(c["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(o["a"])(this,a)}}function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var h=function(e){Object(r["a"])(a,e);var t=p(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"currentPage",get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},{key:"pageSize",get:function(){return this.size},set:function(e){this.$emit("update:size",e)}},{key:"handleSizeChange",value:function(e){this.currentPage=1,this.$emit("getTableData")}},{key:"handleCurrentChange",value:function(e){this.$emit("getTableData")}}]),a}(d["c"]);Object(u["a"])([Object(d["b"])({required:!0})],h.prototype,"total",void 0),Object(u["a"])([Object(d["b"])({default:1})],h.prototype,"page",void 0),Object(u["a"])([Object(d["b"])({default:10})],h.prototype,"size",void 0),Object(u["a"])([Object(d["b"])({default:7})],h.prototype,"pagerCount",void 0),Object(u["a"])([Object(d["b"])({default:function(){return[10,20,30,50]}})],h.prototype,"pageSizes",void 0),Object(u["a"])([Object(d["b"])({default:"total, sizes, prev, pager, next, jumper"})],h.prototype,"layout",void 0),h=Object(u["a"])([Object(d["a"])({name:"pagination"})],h);var y=h,b=y,f=(a("84c7"),a("0b56")),v=Object(f["a"])(b,n,i,!1,null,"7e267c7f",null);t["a"]=v.exports},"84c7":function(e,t,a){"use strict";a("f180")},"995b":function(e,t,a){},"9a1c":function(e,t,a){"use strict";a.r(t);a("a450");var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"browseMonitor"},[t("div",{staticClass:"box-card"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{staticClass:"mt-25",attrs:{span:6}},[e._v("\n        今日概况\n      ")]),t("el-col",{attrs:{span:6}},[t("el-row",[t("el-col",[e._v("浏览次数")]),t("el-col",[e._v("\n            "+e._s(e.trendSummary.today.viewNum)+"\n            "),t("i",{directives:[{name:"show",rawName:"v-show",value:e.elasticShow,expression:"elasticShow"}],class:e.getArrowClass("view")})])],1)],1),t("el-col",{attrs:{span:6}},[t("el-row",[t("el-col",[e._v("使用人数")]),t("el-col",[e._v("\n            "+e._s(e.trendSummary.today.peopleNum)+"\n            "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.elasticShow,expression:"elasticShow"}],class:e.getArrowClass("people")})])],1)],1),t("el-col",{attrs:{span:6}},[t("el-row",[t("el-col",[e._v("使用科室数")]),t("el-col",[e._v("\n            "+e._s(e.trendSummary.today.ksNum)+"\n            "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.elasticShow,expression:"elasticShow"}],class:e.getArrowClass("dept")})])],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.elasticShow,expression:"elasticShow"}],staticClass:"detailBox"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[e._v("\n          昨日概况\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.yesterday.viewNum)+"\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.yesterday.peopleNum)+"\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.yesterday.ksNum)+"\n        ")])],1),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[e._v("\n          历史峰值\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.history.viewNum)+"\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.history.peopleNum)+"\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.history.ksNum)+"\n        ")])],1),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[e._v("\n          每月合计\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.month.viewNum)+"\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.month.peopleNum)+"\n        ")]),t("el-col",{attrs:{span:6}},[e._v("\n          "+e._s(e.trendSummary.month.ksNum)+"\n        ")])],1)],1),t("div",{staticClass:"elastic-button flex flex-pack-center flex-align-center",on:{click:function(t){e.elasticShow=!e.elasticShow}}},[t("i",{class:{"el-icon-caret-top":e.elasticShow,"el-icon-caret-bottom":!e.elasticShow}}),e._v("\n      "+e._s(e.elasticShow?"收起详情":"展开详情")+"\n    ")])],1),t("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.changeTab},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"今天",name:"0"}}),t("el-tab-pane",{attrs:{label:"昨天",name:"1"}}),t("el-tab-pane",{attrs:{label:"最近7天",name:"2"}}),t("el-tab-pane",{attrs:{label:"最近30天",name:"3"}}),t("el-tab-pane",{attrs:{label:"自定义日期",name:"4"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:"4"===e.activeName,expression:"activeName === '4'"}],staticClass:"date-pick"},[t("el-date-picker",{attrs:{type:"daterange",clearable:!1,placeholder:"选择日期范围","picker-options":e.pickerBeginDateBefore},on:{change:function(t){return e.changeDate()}},model:{value:e.dateRangeVal,callback:function(t){e.dateRangeVal=t},expression:"dateRangeVal"}})],1),t("div",{staticClass:"select-box"},[t("span",[e._v("选择科室")]),t("el-select",{attrs:{filterable:"",placeholder:"全院"},on:{change:e.getTrendNum},model:{value:e.defaultDepartmentOption,callback:function(t){e.defaultDepartmentOption=t},expression:"defaultDepartmentOption"}},e._l(e.departmentOptions,(function(e,a){return t("el-option",{key:a,attrs:{label:e.name,value:e.code}})})),1)],1),t("div",{staticClass:"flex flex-pack-center viewRadio"},[t("el-radio-group",{on:{change:e.getTrendNum},model:{value:e.isAmount,callback:function(t){e.isAmount=t},expression:"isAmount"}},[t("el-radio-button",{attrs:{label:!0}},[e._v("按浏览量查看")]),t("el-radio-button",{attrs:{label:!1}},[e._v("按使用人数查看")])],1)],1),t("div",{staticClass:"linechart"},[t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"linechart"}})])],1),t("el-dialog",{attrs:{title:"",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.dataTable,expression:"dataTable"}],staticClass:"dataTable"},[t("el-table",{attrs:{data:e.tableData,"max-height":"450"},on:{"row-click":e.showTableDetail}},[t("el-table-column",{attrs:{label:"访问时间",prop:"createTime"}}),t("el-table-column",{attrs:{label:"科室/病区",prop:"ksmc"}}),t("el-table-column",{attrs:{label:"访问医生",prop:"userName"}}),t("el-table-column",{attrs:{label:"IP",prop:"ip"}}),t("el-table-column",{attrs:{label:"客户端信息",prop:"clientName"}}),t("el-table-column",{attrs:{label:"包含信息",prop:"num"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.dataTable,expression:"!dataTable"}],staticClass:"dataTableDetail",on:{click:e.backDataTable}},[t("div",{staticClass:"backDataTable"},[t("i",{staticClass:"el-icon-arrow-left",staticStyle:{"margin-right":"8px"}}),e._v("返回上一级\n      ")]),t("div",{staticClass:"dataTableDetailTitle"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rowData}},[t("el-table-column",{attrs:{label:"访问时间",prop:"createTime"}}),t("el-table-column",{attrs:{label:"科室/病区",prop:"ksmc"}}),t("el-table-column",{attrs:{label:"访问医生",prop:"userName"}}),t("el-table-column",{attrs:{label:"IP",prop:"ip"}}),t("el-table-column",{attrs:{label:"客户端信息",prop:"clientName"}}),t("el-table-column",{attrs:{label:"包含信息",prop:"num"}})],1)],1),t("div",{staticClass:"dataTableDetailContent"},e._l(e.tableDetail,(function(a,n){return t("div",{key:n,staticClass:"tableDetail flex"},[t("div",{staticClass:"tableDetailIndex flex flex-pack-center flex-align-center"},[e._v("\n            "+e._s(a.rowNum)+"\n          ")]),t("div",{staticClass:"tableDetailMain flex flex-pack-center"},[t("ul",[t("li",{staticClass:"flex"},[t("div",[e._v("患者")]),t("span",[e._v(e._s(a.hzxm))])]),t("li",{staticClass:"flex"},[t("div",[e._v("访问时间")]),t("span",[e._v(e._s(a.createTime))])]),t("li",{staticClass:"flex"},[t("div",[e._v("模块")]),t("span",[e._v(e._s(a.moduleName))])]),t("li",{staticClass:"flex"},[t("div",[e._v("日志内容")]),t("span",[e._v(e._s("null"===a.note?"":a.note))])])])])])})),0)]),t("pagination",{directives:[{name:"show",rawName:"v-show",value:e.dataTable,expression:"dataTable"}],staticClass:"page-select",attrs:{page:e.tableCur,size:e.tablePageLen,total:e.tableCount},on:{"update:page":function(t){e.tableCur=t},"update:size":function(t){e.tablePageLen=t},getTableData:e.getTrendStatDetail}}),t("pagination",{directives:[{name:"show",rawName:"v-show",value:!e.dataTable,expression:"!dataTable"}],staticClass:"page-select",attrs:{page:e.detailCur,size:e.detailPageLen,total:e.tableDeailCount},on:{"update:page":function(t){e.detailCur=t},"update:size":function(t){e.detailPageLen=t},getTableData:function(t){return e.showTableDetail(e.rowData[0])}}})],1)],1)},i=[],s=(a("7afe"),a("1bc7"),a("f13c")),l=a("ae5e"),r=a("acac"),o=a("2ad3"),c=a("e0e5"),u=a("fd63"),d=a("e4a1"),p=a("4d28"),m=a.n(p),h=a("6407");function y(e){var t=b();return function(){var a,n=Object(c["a"])(e);if(t){var i=Object(c["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(o["a"])(this,a)}}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var f=function(e){Object(r["a"])(a,e);var t=y(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.trendSummary={today:{dataType:"",ksNum:0,peopleNum:0,viewNum:0},yesterday:{dataType:"",ksNum:0,peopleNum:0,viewNum:0},month:{dataType:"",ksNum:0,peopleNum:0,viewNum:0},history:{dataType:"",ksNum:0,peopleNum:0,viewNum:0},yesterday_now:{dataType:"",ksNum:0,peopleNum:0,viewNum:0}},e.elasticShow=!1,e.activeName="0",e.dateRangeVal=[],e.pickerBeginDateBefore={disabledDate:function(e){return e.getTime()>Date.now()}},e.beginDay=e.$moment(new Date).format("YYYY-MM-DD"),e.endDay=e.$moment(new Date).add(1,"day").format("YYYY-MM-DD"),e.departmentOptions=[],e.defaultDepartmentOption="",e.isAmount=!0,e.trendChart=null,e.seriesData=[],e.intervalType="minute",e.dialogTableVisible=!1,e.dataTable=!0,e.tableData=[],e.rowData=[],e.tableDetail=[],e.statCreateTime="",e.tableCur=1,e.detailCur=1,e.tablePageLen=10,e.detailPageLen=10,e.tableCount=0,e.tableDeailCount=0,e}return Object(l["a"])(a,[{key:"mounted",value:function(){this.getTrendSummary(),this.getAllDepartment(),this.getTrendNum()}},{key:"getTrendSummary",value:function(){var e=this;this.$api.getTrendSummary().then((function(t){t.data&&t.data.forEach((function(t){if(t.dataType)switch(t.dataType){case"today":e.trendSummary["today"]=t;break;case"yesterday_now":e.trendSummary["yesterday_now"]=t;break;case"yesterday":e.trendSummary["yesterday"]=t;break;case"month":e.trendSummary["month"]=t;break;case"history":e.trendSummary["history"]=t;break}}))})).catch((function(e){}))}},{key:"changeTab",value:function(){if("4"===this.activeName)this.dateRangeVal=[this.$moment(new Date).format("YYYY-MM-DD"),this.$moment(new Date).format("YYYY-MM-DD")],this.intervalType="minute",this.beginDay=this.$moment(new Date).format("YYYY-MM-DD"),this.endDay=this.$moment(new Date).add(1,"day").format("YYYY-MM-DD"),this.getTrendNum();else{switch(this.activeName){case"0":this.intervalType="minute",this.beginDay=this.$moment(new Date).format("YYYY-MM-DD"),this.endDay=this.$moment(new Date).add(1,"day").format("YYYY-MM-DD");break;case"1":this.intervalType="minute",this.beginDay=this.$moment(new Date).add(-1,"day").format("YYYY-MM-DD"),this.endDay=this.$moment(new Date).format("YYYY-MM-DD");break;case"2":this.intervalType="day",this.beginDay=this.$moment(new Date).add(-7,"day").format("YYYY-MM-DD"),this.endDay=this.$moment(new Date).format("YYYY-MM-DD");break;case"3":this.intervalType="day",this.beginDay=this.$moment(new Date).add(-30,"day").format("YYYY-MM-DD"),this.endDay=this.$moment(new Date).format("YYYY-MM-DD");break}this.getTrendNum()}}},{key:"changeDate",value:function(){null!==this.dateRangeVal[0]&&(this.beginDay=this.$moment(this.dateRangeVal[0]).format("YYYY-MM-DD"),this.endDay=this.$moment(this.dateRangeVal[1]).format("YYYY-MM-DD"),this.$moment(this.endDay).diff(this.$moment(this.beginDay))>0?this.intervalType="day":this.intervalType="minute",this.getTrendNum())}},{key:"getTrendNum",value:function(){var e=this,t={ksdm:this.defaultDepartmentOption,intervalType:this.intervalType,beginDay:this.beginDay,endDay:this.endDay,type:this.isAmount?"view":"people"};this.$api.getTrendNum(t).then((function(t){e.seriesData=[],t.data&&(e.seriesData=t.data.map((function(e){return{value:[e.groupName,e.groupValue]}})),e.renderLineChart())})).catch((function(e){}))}},{key:"getArrowClass",value:function(e){return"view"===e?this.trendSummary.today.viewNum-this.trendSummary.yesterday_now.viewNum>0?"el-icon-arrow-up":this.trendSummary.today.viewNum-this.trendSummary.yesterday_now.viewNum<0?"el-icon-arrow-down":"":"people"===e?this.trendSummary.today.peopleNum-this.trendSummary.yesterday_now.peopleNum>0?"el-icon-arrow-up":this.trendSummary.today.peopleNum-this.trendSummary.yesterday_now.peopleNum<0?"el-icon-arrow-down":"":"dept"===e?this.trendSummary.today.ksNum-this.trendSummary.yesterday_now.ksNum>0?"el-icon-arrow-up":this.trendSummary.today.ksNum-this.trendSummary.yesterday_now.ksNum<0?"el-icon-arrow-down":"":""}},{key:"showTableDetail",value:function(e){var t=this;this.dataTable=!1,this.rowData=[e];var a={ksdm:e.ksdm,createTime:e.createTime,usercode:e.usercode,ip:e.ip,client:e.client,size:this.detailPageLen,page:this.detailCur,intervalType:this.intervalType};this.$api.getTrendDetail(a).then((function(e){e.data&&(t.tableDetail=e.data.content||[],t.tableDeailCount=e.data.totalElements||0)})).catch((function(e){}))}},{key:"renderLineChart",value:function(){var e,t=this,a=this.$moment(this.endDay).diff(this.$moment(this.beginDay))/36e5;"minute"===this.intervalType&&(e=a=0),this.trendChart||(this.trendChart=m.a.init(document.getElementById("linechart"))),a>=0&&a<24?e=72e5:a>=24&&a<336?e=864e5:a>=336&&a<720?e=1296e5:a>=720&&(e=null);var n=this.isAmount?"浏览次数":"使用人数",i={color:["#11a0e6"],tooltip:{trigger:"item",axisPointer:{type:"shadow"},backgroundColor:"tranparent",formatter:function(e){var t=[];return t.push('<div style="cursor:pointer;min-width:160px;height:auto;background: #FFFFFF;box-shadow: 0 0 3px 0 #A6A6A6;border-radius: 2px;padding:5px 15px 5px 20px;">'),t.push('<p style="margin-bottom: 5px"><span style="font-size:12px;color:#b2bfcf;margin: 0 5px 0 0;width: 50px;">'),t.push(n),t.push('：</span><span style="font-size:12px;color:#53a0ea;">'),t.push(e.value[1]),t.push("</span></p>"),t.push('<p style="margin-bottom: 15px"><span style="font-size:12px;color:#b2bfcf;margin: 0 5px 0 0;width: 50px;">时间：</span><span style="font-size:12px;color:#414141;">'),t.push(e.value[0]),t.push("</span></p>"),t.push("</div>"),t.join("")}},grid:{top:"4%",left:"1%",right:"3%",bottom:"12%",containLabel:!0},xAxis:{min:this.beginDay,max:this.endDay,interval:e,type:"time",axisLine:{inside:!0,onZero:!1,lineStyle:{color:"#8CA0B3"}},axisTick:{show:!1},axisLabel:{margin:10,textStyle:{fontSize:12,color:"#666",align:"center"}},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#ff9900"}},axisPointer:{show:!1}},dataZoom:[{type:"inside",start:0,end:100,minSpan:10},{show:!0,type:"slider",y:"90%",start:0,end:100,left:50,right:50,minSpan:10}],yAxis:{type:"value",splitNumber:4,axisTick:{show:!1},axisLine:{lineStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{type:"solid",color:"#EDEDED",fontStyle:"lighter"}}},series:[{name:"评分",type:"line",data:this.seriesData}]};this.trendChart.setOption(i),this.trendChart.on("click",(function(e){t.statCreateTime=e.value[0],t.tableCur=1,t.detailCur=1,t.dataTable=!0,t.getTrendStatDetail()}))}},{key:"getAllDepartment",value:function(){var e=this;this.$api.listAllDepts().then((function(t){t.data&&(e.departmentOptions=t.data,e.departmentOptions.unshift({code:"",id:0,name:"全院",note:"",orderno:"",syfw:"",yljgdm:""}))})).catch((function(e){}))}},{key:"getTrendStatDetail",value:function(){var e=this,t={page:this.tableCur,size:this.tablePageLen,ksdm:this.defaultDepartmentOption,dataType:this.intervalType,createTime:this.statCreateTime};this.$api.getTrendStatDetail(t).then((function(t){t.data&&(e.tableData=t.data.content||[],e.tableCount=t.data.totalElements||0),e.dialogTableVisible=!0})).catch((function(e){}))}},{key:"backDataTable",value:function(){this.dataTable=!0,this.detailCur=1}}]),a}(d["c"]);f=Object(u["a"])([Object(d["a"])({name:"BrowseMonitor",components:{pagination:h["a"]}})],f);var v=f,g=v,w=(a("b240"),a("0b56")),D=Object(w["a"])(g,n,i,!1,null,"6ba657e6",null);t["default"]=D.exports},b240:function(e,t,a){"use strict";a("995b")},f180:function(e,t,a){}}]);