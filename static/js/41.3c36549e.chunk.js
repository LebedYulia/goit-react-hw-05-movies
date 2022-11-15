"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[41],{5041:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,a,s=t(5861),i=t(885),c=t(4687),o=t.n(c),u=t(2791),p=t(1087),l=t(7689),d=t(8617),v=t(8966),f=t(9014),h=t(5247),x=t(168),g=t(7402),m=g.Z.div(r||(r=(0,x.Z)(["\n max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 16px;\n  display: flex;     \n"]))),j=g.Z.div(a||(a=(0,x.Z)(["\n   padding: 0 32px; \n"]))),w=t(184),_=function(e){var n=e.poster_path,t=e.title,r=e.vote_average,a=e.overview,s=e.genres;return(0,w.jsxs)(m,{children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{src:n,alt:t,width:"360"})}),(0,w.jsxs)(j,{children:[(0,w.jsx)("h2",{children:t}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"User score:"})," ",r]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Genres:"})," ",s]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Overview:"})," ",a]})]})]})},b=function(){var e,n,t,r,a,c,x=(0,l.UO)().movieId,g=(0,u.useState)(null),m=(0,i.Z)(g,2),j=m[0],b=m[1],k=(0,l.TH)();if((0,u.useEffect)((function(){function e(){return(e=(0,s.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Pg)(x);case 3:n=e.sent,b(n),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),f.ZP.error("Ooops! Something went wrong. Try again.");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),j){var Z=j.poster_path,y=j.title,P=j.vote_average,U=j.overview,S=j.genres,C=(void 0===S?[]:S).map((function(e){return e.name})).join(", "),O="https://via.placeholder.com/360x540.png?text=".concat(y);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(p.rU,{to:null!==(e=null===(n=k.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:[(0,w.jsx)(d.jTe,{size:"16"})," Go to back"]}),(0,w.jsx)(_,{poster_path:Z?"".concat("https://image.tmdb.org/t/p/w500").concat(Z):O,title:y,vote_average:P,overview:U,genres:C}),(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(p.rU,{to:"cast",state:{from:null!==(t=null===(r=k.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(p.rU,{to:"reviews",state:{from:null!==(a=null===(c=k.state)||void 0===c?void 0:c.from)&&void 0!==a?a:"/"},children:"Reviews"})})]}),(0,w.jsx)(u.Suspense,{fallback:(0,w.jsx)(v.g4,{color:"red",wrapperStyle:{margin:"auto"}}),children:(0,w.jsx)(l.j3,{})})]})}}},5247:function(e,n,t){t.d(n,{Df:function(){return l},J9:function(){return u},Pg:function(){return d},_4:function(){return v}});var r=t(5861),a=t(4687),s=t.n(a),i=t(1044),c="f15e9a3194e113470990f4a0e5a9c33f",o="https://api.themoviedb.org/3",u=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={baseURL:o,params:{api_key:c,language:"en-uk",query:n}},e.next=3,i.ZP.get("search/movie",t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.abrupt("return",a.results);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p={baseURL:o,params:{api_key:c,language:"en-uk"}},l=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/trending/movie/day",p);case 2:return n=e.sent,e.next=5,n.data;case 5:return t=e.sent,e.abrupt("return",t.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n),p);case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n,"/").concat(t),p);case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=41.3c36549e.chunk.js.map