"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[61],{600:function(n,t,e){e.d(t,{Bt:function(){return d},DD:function(){return p},d5:function(){return l},on:function(){return f},vw:function(){return o}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="4b93e172d3270cc5f7c85789f0b471e0",i="en-US",o=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?api_key=".concat(s,"&language=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(s,"&page=1&query=").concat(t,"&?&language=").concat(i,"&include_adult=false"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&page=1&language=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},61:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r=e(791),a="PagesStyles_title__hMd+z",c=e(861),u=e(439),s=e(757),i=e.n(s),o=e(600),f=e(689),p=e(87),l="ListLtending_list__b6zH2",d="ListLtending_item__ftVSC",v=e(184),h=function(){var n=(0,f.TH)(),t=(0,r.useState)([]),e=(0,u.Z)(t,2),a=e[0],s=e[1];return(0,r.useEffect)((function(){var n=function(){var n=(0,c.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.vw)();case 3:t=n.sent,s(t.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsx)("ul",{className:l,children:a.map((function(t){var e=t.id,r=t.title,a=t.name;return(0,v.jsx)("li",{className:d,children:(0,v.jsxs)(p.rU,{className:d,to:"/movies/".concat(e),state:{from:n},children:[r,a]})},e)}))})},g=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:a,children:"Trending today"}),(0,v.jsx)(h,{})]})}}}]);
//# sourceMappingURL=61.a6fcc9db.chunk.js.map