"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{5130:function(n,t,e){e.d(t,{O:function(){return c}});e(2791);var r=e(7689),a=e(1087),u=e(184),c=function(n){var t=n.id,e=n.title,c=(0,r.TH)();return(0,u.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:c},children:(0,u.jsx)("li",{children:e})})}},5493:function(n,t,e){e.r(t);var r=e(2982),a=e(5861),u=e(885),c=e(4687),s=e.n(c),i=e(2791),o=e(9014),f=e(5247),p=e(5130),v=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],c=t[1];return(0,i.useEffect)((function(){function n(){return(n=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.Df)();case 3:t=n.sent,c((0,r.Z)(t)),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),o.ZP.error("Ooops! Something went wrong. Try again.");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title;return(0,v.jsx)(p.O,{title:e,id:t},t)}))})]})}},5247:function(n,t,e){e.d(t,{Df:function(){return p},J9:function(){return o},Pg:function(){return v},_4:function(){return h}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1044),s="f15e9a3194e113470990f4a0e5a9c33f",i="https://api.themoviedb.org/3",o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={baseURL:i,params:{api_key:s,language:"en-uk",query:t}},n.next=3,c.ZP.get("search/movie",e);case 3:return r=n.sent,n.next=6,r.data;case 6:return a=n.sent,n.abrupt("return",a.results);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f={baseURL:i,params:{api_key:s,language:"en-uk"}},p=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day",f);case 2:return t=n.sent,n.next=5,t.data;case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t),f);case 2:return e=n.sent,n.next=5,e.data;case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/").concat(e),f);case 2:return r=n.sent,n.next=5,r.data;case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.efe65beb.chunk.js.map