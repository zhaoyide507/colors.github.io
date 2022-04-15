(function(){"use strict";var t={8263:function(t,o,e){e(6992),e(8674),e(9601),e(7727);var r=e(9567),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("mainPage")],1)},n=[],l=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"hello"},[r("el-container",[r("el-header",{staticStyle:{"text-align":"left",color:"#409EFF","font-size":"20px","line-height":"60px","border-bottom":"4px solid #409EFF"}},[r("img",{attrs:{src:e(2923),alt:""}}),t._v(" 一个只有颜色的网站 V3.0.1 "),r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[r("el-menu-item",{attrs:{index:"1"},on:{click:t.changeToRed}},[t._v("红")]),r("el-menu-item",{attrs:{index:"2"},on:{click:t.changeToPurple}},[t._v("紫")]),r("el-menu-item",{attrs:{index:"3"},on:{click:t.changeToGray}},[t._v("灰")]),r("el-menu-item",{attrs:{index:"4"},on:{click:t.changeToBlue}},[t._v("蓝")]),r("el-menu-item",{attrs:{index:"5"},on:{click:t.changeToWhite}},[t._v("白")]),r("el-menu-item",{attrs:{index:"6"},on:{click:t.changeToCyan}},[t._v("青")]),r("el-menu-item",{attrs:{index:"7"},on:{click:t.changeToGreen}},[t._v("绿")]),r("el-menu-item",{attrs:{index:"8"},on:{click:t.changeToYellow}},[t._v("黄")]),r("el-menu-item",{attrs:{index:"9"},on:{click:t.changeToChange}},[t._v("渐变")])],1)],1),r("br"),r("br"),r("br"),r("br"),r("br"),r("el-container",[r("el-aside",{attrs:{width:"50%"}},[r("el-steps",{attrs:{active:3,"align-center":""}},[r("el-step",{attrs:{title:"点击颜色标签选择对应种类颜色"}}),r("el-step",{attrs:{title:"复制色值信息"}}),r("el-step",{attrs:{title:"点击选中两种颜色，在右侧查看颜色预览"}})],1),r("br"),0==t.filtColorList.length?r("el-skeleton",{attrs:{animated:""}}):t._e(),t._l(t.filtColorList,(function(o){return r("div",{key:o.colorValueHex,attrs:{id:"colorsItems"}},[r("div",{attrs:{id:"oneColor"},on:{click:function(e){return t.chooseColor(o.colorValueHex,o.name,o.bgi)}}},[r("div",{style:{backgroundColor:o.colorValueHex,backgroundImage:o.bgi},attrs:{id:"colorPadding"}}),r("div",{attrs:{id:"colorInfo"}},[t._v(" "+t._s(o.name)+" "),r("br"),t._v(" "+t._s(o.colorValueHex)+" "),r("br"),7==o.colorValueHex.length?r("span",[t._v(t._s(t.hexToRgb(o.colorValueHex)))]):t._e()])])])})),r("el-backtop",{attrs:{target:".el-aside"}})],2),r("el-container",[r("el-main",[r("h2",{staticStyle:{color:"#409EFF"}},[t._v("颜色预览")]),r("div",{attrs:{id:"preview"}},[r("div",{attrs:{id:"preview1"}},[r("div",{style:{backgroundColor:t.color1,backgroundImage:t.bgi1},attrs:{id:"previewColorPadding1"}}),r("div",{attrs:{id:"previewColorInfo1"}},[t._v(t._s(t.color1Name)),r("br"),t._v(t._s(t.color1))])]),r("div",{attrs:{id:"preview2"}},[r("div",{style:{backgroundColor:t.color2,backgroundImage:t.bgi2},attrs:{id:"previewColorPadding2"}}),r("div",{attrs:{id:"previewColorInfo2"}},[t._v(t._s(t.color2Name)),r("br"),t._v(t._s(t.color2))])])]),r("br"),r("div",{attrs:{id:"clacItem"}},[r("el-button",{attrs:{id:"halfBtn1",type:"primary"},on:{click:t.calcComplementaryColours}},[t._v("计算互补色")]),r("el-button",{attrs:{id:"halfBtn2",type:"primary"},on:{click:t.chooseAdjacentColor}},[t._v("选取邻近色")]),r("el-button",{attrs:{id:"fullBtn",type:"primary"},on:{click:t.calcColorHarmony}},[t._v("计算色彩和谐度")])],1),r("br"),r("h2",{staticStyle:{border:"1px solid #ABABAB","border-radius":"6px"}},[t._v("色彩和谐度："+t._s(t.distenceOfTwoColors))]),r("br"),r("br"),t._v(" 预览面板使用说明："),r("br"),t._v(" 1.选中一种颜色之后点击“计算互补色”按钮，下方会出现这个颜色的互补色 "),r("br"),t._v(" 2.选中一种颜色之后点击“选取邻近色”按钮，下方会出现这个颜色的互补色 "),r("br"),t._v(" 3.选中两种颜色之后点击“计算色彩和谐度”按钮，下方会出现这两个颜色的和谐指数， "),r("br"),t._v(" 你可以根据指数进行配色。一般而言，和谐度超过50一起使用比较和谐 "),r("br"),t._v("和谐度低于50一起使用则比较跳跃 ")])],1)],1),r("el-footer",[t._v(" ©ZhaoYide www.designcolors.cc "+t._s(t.years)+" "),r("br"),t._v(" 参考：色谱 中科院科技情报编委会名词室.科学出版社,1957. ")])],1)],1)},s=[],c=(e(7327),e(1539),e(8309),e(7042),e(9653),e(9714),e(8342)),a=e.n(c),u={name:"mainPage",props:{msg:String},data:function(){return{searchInputIndex:"",filtColorList:[],colorList:[],color1:"",color2:"",color1Name:"",color2Name:"",bgi1:"",bgi2:"",distenceOfTwoColors:""}},methods:{changeToRed:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("红")}))},changeToPurple:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("紫")}))},changeToGray:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("灰")}))},changeToWhite:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("白")}))},changeToBlue:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("蓝")}))},changeToCyan:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("青")}))},changeToGreen:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("绿")}))},changeToYellow:function(){this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("黄")}))},showColorHex:function(t,o){this.$notify.info({duration:3e3,title:"颜色提示",message:"Name:"+t+"               Hex:"+o+"               "+this.hexToRgb(o)})},hexToRgb:function(t){return"RGB("+parseInt("0x"+t.slice(1,3))+","+parseInt("0x"+t.slice(3,5))+","+parseInt("0x"+t.slice(5,7))+")"},hexToCMYK:function(t){var o=parseInt("0x"+t.slice(1,3)),e=parseInt("0x"+t.slice(3,5)),r=parseInt("0x"+t.slice(5,7)),i=255-o,n=255-e,l=255-r,s=i<n?i:n;return s=s<l?s:l,i-=s,n-=s,l-=s,"CMYK("+i+","+n+","+l+","+s+")"},changeToChange:function(){this.$notify.warning({duration:5e3,title:"注意！",message:"渐变色不提供RGB，请使用16进制色值，RGB会在之后的版本中进行更新"}),this.filtColorList=this.colorList.filter((function(t){return-1!==t.name.indexOf("渐变")}))},chooseColor:function(t,o,e){""==this.color1&&""!=this.color2?(this.color1Name=o,this.color1=t,this.bgi1=e):""!==this.color1&&""==this.color2?(this.color2Name=o,this.color2=t,this.bgi2=e):""==this.color1&&""==this.color2?(this.color1Name=o,this.color1=t,this.bgi1=e):""!=this.color1&&""!=this.color2&&(this.color2="",this.color1="",this.color1Name="",this.color2Name="",this.bgi1="",this.bgi2="",this.color1=t,this.color1Name=o,this.bgi1=e)},calcComplementaryColours:function(){var t=parseInt("0x"+this.color1.slice(1,3)),o=parseInt("0x"+this.color1.slice(3,5)),e=parseInt("0x"+this.color1.slice(5,7)),r=255-t,i=255-o,n=255-e,l="rgb("+r+","+i+","+n+")";this.color2=l,this.color2Name=this.color1Name+"的互补色"},chooseAdjacentColor:function(){var t=parseInt("0x"+this.color1.slice(1,3)),o=parseInt("0x"+this.color1.slice(3,5)),e=parseInt("0x"+this.color1.slice(5,7));t/=255,o/=255,e/=255;var r,i,n,l,s,c,a=Math.max(t,o,e),u=Math.min(t,o,e),h=a-u,f=a,d=Number(0==f?0:h/f),m=0;t===f&&(m=60*(o-e)/h),o===f&&(m=120+60*(e-t)/h),e===f&&(m=240+60*(t-o)/h),0===h&&(m=0),m<0&&(m+=360),m=m/2*(256/180),d*=255,f*=255;for(var p=0;p<this.colorList.length;p++)if(this.color1!==this.colorList[p].colorValueHex){var v=parseInt("0x"+this.colorList[p].colorValueHex.slice(1,3)),g=parseInt("0x"+this.colorList[p].colorValueHex.slice(3,5)),x=parseInt("0x"+this.colorList[p].colorValueHex.slice(5,7));v/=255,g/=255,x/=255;var b=Math.max(v,g,x),A=Math.min(v,g,x),C=b-A,w=b,y=Number(0===w?0:C/w),H=0;v===w&&(H=60*(g-x)/C),g===w&&(H=120+60*(x-v)/C),x===w&&(H=240+60*(v-g)/C),0===C&&(H=0),H<0&&(H+=360),H=H/2*(256/180),y*=255,w*=255;var L=void 0;if(L=Math.sqrt(Math.pow(m-H,2)+Math.pow(d-y,2)+Math.pow(f-w,2)),0==p)r=L,i=255*v,n=255*g,l=255*x,c=this.colorList[p].colorValueHex;else{if(!(L<r))continue;r=L,i=255*v,n=255*g,l=255*x,c=this.colorList[p].colorValueHex}s=this.colorList.filter((function(t){return-1!==t.colorValueHex.indexOf(c)})),console.log("rgb("+i+","+n+","+l+")"),this.color2="rgb("+i+","+n+","+l+")",this.color2Name=s[0].name}},calcColorHarmony:function(){var t=parseInt("0x"+this.color1.slice(1,3)),o=parseInt("0x"+this.color1.slice(3,5)),e=parseInt("0x"+this.color1.slice(5,7));t/=255,o/=255,e/=255;var r=Math.max(t,o,e),i=Math.min(t,o,e),n=r-i,l=r,s=Number(0==l?0:n/l),c=0;t===l&&(c=60*(o-e)/n),o===l&&(c=120+60*(e-t)/n),e===l&&(c=240+60*(t-o)/n),0===n&&(c=0),c<0&&(c+=360),c=c/2*(256/180),s*=255,l*=255;var a=parseInt("0x"+this.color2.slice(1,3)),u=parseInt("0x"+this.color2.slice(3,5)),h=parseInt("0x"+this.color2.slice(5,7));a/=255,u/=255,h/=255;var f,d=Math.max(a,u,h),m=Math.min(a,u,h),p=d-m,v=d,g=Number(0===v?0:p/v),x=0;a===v&&(x=60*(u-h)/p),u===v&&(x=120+60*(h-a)/p),h===v&&(x=240+60*(a-u)/p),0===p&&(x=0),x<0&&(x+=360),x=x/2*(256/180),g*=255,v*=255,console.log(c,x,s,g,l,v),f=Math.sqrt(Math.pow(c-x,2)+Math.pow(s-g,2)+Math.pow(l-v,2)),"#"==this.color1.substr(0,1)&&"r"==this.color2.substr(0,1)?(this.color1="",this.color2="",this.color1Name="",this.color2Name="",this.$confirm("计算得出的邻近色/互补色暂不提供相似度计算，请在左侧色卡区选择2种不同颜色后重试","错误",{type:"error"})):""===this.color1||""===this.color2?this.$confirm("选取的颜色不足两个，请在左侧色卡区选择2种不同颜色后重试","错误",{type:"error"}):this.color1===this.color2&&this.$confirm("不得选取同样的颜色，请在左侧色卡区选择2种不同颜色后重试","错误",{type:"error"}),this.distenceOfTwoColors=100*(100/f).toString().substr(0,5),console.log(f)}},computed:{years:function(){var t=new Date,o=t.getFullYear(),e=o+1;return o+"~"+e}},mounted:function(){var t=this;a().getJSON("./colorList.json",(function(o){t.colorList=o})),console.log(t.filtColorList),this.$confirm("这是本网站的使用说明：<br>1.点击颜色标签选择对应种类颜色<br>2.复制色值信息<br>3.点击选中两种颜色，在右侧查看颜色预览<br>4.网站右下角有回到顶部的按钮","提示",{confirmButtonText:"我知道了",type:"info",dangerouslyUseHTMLString:!0})}},h=u,f=e(1001),d=(0,f.Z)(h,l,s,!1,null,"6b7bd6a6",null),m=d.exports,p={name:"App",components:{mainPage:m}},v=p,g=(0,f.Z)(v,i,n,!1,null,null,null),x=g.exports,b=e(1555),A=e.n(b);r["default"].config.productionTip=!1,r["default"].use(A()),new r["default"]({render:function(t){return t(x)}}).$mount("#app")},2923:function(t){t.exports="data:image/png;base64,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"}},o={};function e(r){var i=o[r];if(void 0!==i)return i.exports;var n=o[r]={id:r,loaded:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}e.m=t,function(){var t=[];e.O=function(o,r,i,n){if(!r){var l=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],n=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&n||l>=n)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(s=!1,n<l&&(l=n));if(s){t.splice(u--,1);var a=i();void 0!==a&&(o=a)}}return o}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,i,n]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var i,n,l=r[0],s=r[1],c=r[2],a=0;if(l.some((function(o){return 0!==t[o]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(c)var u=c(e)}for(o&&o(r);a<l.length;a++)n=l[a],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},r=self["webpackChunkcolors"]=self["webpackChunkcolors"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(8263)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.395a2d34.js.map