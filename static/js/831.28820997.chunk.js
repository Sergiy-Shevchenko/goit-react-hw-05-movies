"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[831],{600:function(e,t,n){n.d(t,{Bt:function(){return v},DD:function(){return p},d5:function(){return f},on:function(){return l},vw:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="4b93e172d3270cc5f7c85789f0b471e0",s="en-US",i=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/all/day?api_key=".concat(o,"&language=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(o,"&page=1&query=").concat(t,"&?&language=").concat(s,"&include_adult=false"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&page=1&language=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},831:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),u=n.n(c),o=n(791),s=n(87),i=n(689),l=n(600),p={input:"SearchStyles_input__F2KTr",item:"SearchStyles_item__Isb+q"},f=n(184),v=function(){var e,t=(0,s.lr)(),n=(0,a.Z)(t,2),c=n[0],v=n[1],h=(0,o.useState)((function(){var e;return null!==(e=c.get("query"))&&void 0!==e?e:""})),m=(0,a.Z)(h,2),d=m[0],g=m[1],x=(0,o.useState)([]),y=(0,a.Z)(x,2),k=y[0],w=y[1],b=(0,i.TH)();(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.on)(t);case 3:n=e.sent,w(n.data.results),console.log(n.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();d&&e(d)}),[d]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{className:p.input,onSubmit:function(e){e.preventDefault();var t=e.target.search.value;console.log(t),g(t)},children:[(0,f.jsx)("input",{type:"text",name:"search",value:null!==(e=c.get("query"))&&void 0!==e?e:"",onChange:function(e){var t=e.target.value;v(""!==t?{query:t}:{}),""===t&&g("")},autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{className:p.list,children:k.map((function(e){var t=e.id,n=e.title;return(0,f.jsx)("li",{className:p.item,children:(0,f.jsx)(s.rU,{className:p.item,to:"/movies/".concat(t),state:{from:b},children:n})},t)}))})]})},h=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(v,{})})}}}]);
//# sourceMappingURL=831.28820997.chunk.js.map