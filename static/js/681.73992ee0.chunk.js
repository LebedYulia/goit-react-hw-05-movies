"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{9681:function(e,n,t){t.r(n);var r=t(5861),a=t(885),u=t(4687),s=t.n(u),c=t(2791),i=t(7689),o=t(5247),f=t(184);n.default=function(){var e=(0,i.UO)().movieId,n=(0,c.useState)(null),t=(0,a.Z)(n,2),u=t[0],p=t[1];if((0,c.useEffect)((function(){function n(){return(n=(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o._4)(e,"reviews");case 3:t=n.sent,p(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),u)return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:0!==u.length?"Reviews":"We don't have any review for this movie."}),(0,f.jsx)("ul",{children:u.map((function(e){var n=e.author,t=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Author: "}),n]}),(0,f.jsx)("p",{children:t})]},n)}))})]})}},5247:function(e,n,t){t.d(n,{Df:function(){return p},J9:function(){return o},Pg:function(){return h},_4:function(){return v}});var r=t(5861),a=t(4687),u=t.n(a),s=t(1044),c="f15e9a3194e113470990f4a0e5a9c33f",i="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={baseURL:i,params:{api_key:c,language:"en-uk",query:n}},e.next=3,s.ZP.get("search/movie",t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.abrupt("return",a.results);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f={baseURL:i,params:{api_key:c,language:"en-uk"}},p=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("/trending/movie/day",f);case 2:return n=e.sent,e.next=5,n.data;case 5:return t=e.sent,e.abrupt("return",t.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("/movie/".concat(n),f);case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("/movie/".concat(n,"/").concat(t),f);case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=681.73992ee0.chunk.js.map