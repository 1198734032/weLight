(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7faa3d64"],{"06ba":function(t,e,a){},"6d5c":function(t,e,a){"use strict";var n=a("06ba"),i=a.n(n);i.a},c511:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"adminHome"},[a("div",{staticClass:"title"},[t._v("所有影片")]),t._l(t.movieList,(function(e){return a("div",{key:e.movieId,staticClass:"container"},[a("div",{staticClass:"movie_name"},[t._v(t._s(e.movieName))]),a("div",{staticClass:"del",on:{click:function(a){return t.del(e.movieId)}}},[a("span",{staticClass:"iconfont icon-lajitong"})])])}))],2)},i=[],c=a("e86c"),o=a("1bab");function s(t){return Object(o["a"])({method:"get",url:"/delete",params:{movieId:t}})}var r={data:function(){return{movieList:[]}},methods:{del:function(t){var e=this;s(t).then((function(t){if(console.log(t),!t.data.success)return alert("正在放映，不能删~~");Object(c["a"])().then((function(t){e.movieList=t.data.data.movieList,e.$forceUpdate()})),alert(t.data.Msg)})).catch((function(t){console.log(t)}))}},activated:function(){var t=this;Object(c["a"])().then((function(e){if(console.log(e),!e.data.success)return alert("影片加载出错啦！");t.movieList=e.data.data.movieList,t.$forceUpdate()}))}},u=r,d=(a("6d5c"),a("2877")),l=Object(d["a"])(u,n,i,!1,null,"e9907f16",null);e["default"]=l.exports},e86c:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("1bab");function i(){return Object(n["a"])({method:"get",url:"/movies"})}}}]);
//# sourceMappingURL=chunk-7faa3d64.730efeb7.js.map