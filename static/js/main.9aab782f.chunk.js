(this["webpackJsonpfrontend-github-repos"]=this["webpackJsonpfrontend-github-repos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(8),s=n.n(i),c=(n(16),n(17),n(10)),o=n(11),l=n(4),u=(n(18),n(0)),p=function(e){var t=e.name,n=e.description,a=e.stargazers_count,r=e.open_issues_count,i=e.owner,s=e.pushed_at;return Object(u.jsxs)("article",{className:"repo",children:[Object(u.jsx)("img",{className:"owner-avatar",src:i.avatar_url,alt:"".concat(i.login,"'s avatar")}),Object(u.jsx)("h2",{className:"name",children:t}),Object(u.jsx)("p",{className:"description",children:null!==n&&void 0!==n?n:"No Description"}),Object(u.jsxs)("div",{className:"summary",children:[Object(u.jsxs)("span",{className:"stars",children:["Stars: ",a]}),Object(u.jsxs)("span",{className:"issues",children:["Issues: ",r]}),"Submitted on"," ",Object(u.jsx)("time",{dateTime:s,children:new Date(s).toLocaleDateString()})," ","by"," ",Object(u.jsx)("a",{className:"owner-name",href:i.html_url,target:"_blank",children:i.login})]})]})},d=Object(a.memo)(p),m=n(6),b=n.n(m),f=n(7),j=n(9),g=new Date(Date.now()-2592e6).toISOString(),h="https://api.github.com/search/repositories?q=created:>".concat(g,"&sort=stars&order=desc"),y=function(e){var t=e.items;return null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.name,a=e.description,r=e.stargazers_count,i=e.open_issues_count,s=e.pushed_at,c=e.owner;return{id:t,name:n,description:a,stargazers_count:r,open_issues_count:i,pushed_at:s,owner:{login:c.login,avatar_url:c.avatar_url,html_url:c.html_url}}}))},O=function(e,t){var n=Object(a.useState)({pageCount:0,repos:[]}),r=Object(l.a)(n,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){t&&function(){var t=Object(j.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h,"&page=").concat(i.pageCount+1));case 2:if(200!==(n=t.sent).status){t.next=8;break}return t.next=6,n.json();case 6:a=t.sent,s((function(e){var t,n=e.pageCount,r=e.repos;return{pageCount:++n,repos:[].concat(Object(f.a)(r),Object(f.a)(null!==(t=y(a))&&void 0!==t?t:[]))}}));case 8:e();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[t]),i.repos},v=(n(21),n(22),["title","titleId"]);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function k(e,t){var n=e.title,r=e.titleId,i=w(e,v);return a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto",animationPlayState:"running",animationDelay:"0s"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,a.createElement("circle",{cx:50,cy:50,r:0,fill:"none",stroke:"#749d34",strokeWidth:2,style:{animationPlayState:"running",animationDelay:"0s"}},a.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s",style:{animationPlayState:"running",animationDelay:"0s"}}),a.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s",style:{animationPlayState:"running",animationDelay:"0s"}})),a.createElement("circle",{cx:50,cy:50,r:0,fill:"none",stroke:"#ccccee",strokeWidth:2,style:{animationPlayState:"running",animationDelay:"0s"}},a.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s",style:{animationPlayState:"running",animationDelay:"0s"}}),a.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s",style:{animationPlayState:"running",animationDelay:"0s"}})))}var S=a.forwardRef(k),N=(n.p,function(e){var t=e.isLoading,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[t&&Object(u.jsx)(S,{className:"spinner"}),n]})}),_=["id"],D=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useRef)(null),s=Object(a.useCallback)((function(e){var t=e.target;t.scrollHeight-t.scrollTop<1.5*t.clientHeight&&(r(!0),i.current.onscroll=void 0)}),[]),p=O((function(){return r(!1)}),n);return Object(a.useEffect)((function(){if(!n)return i.current.onscroll=s,function(){return i.current.onscroll=void 0}}),[n]),Object(u.jsx)(N,{isLoading:n,children:Object(u.jsx)("div",{className:"repo-collection",ref:i,children:p.map((function(e){var t=e.id,n=Object(o.a)(e,_);return Object(u.jsx)(d,Object(c.a)({},n),t)}))})})};var C=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{className:"title",children:[Object(u.jsx)("span",{className:"star",children:"\u2726"})," Most Starred Github Repos ",Object(u.jsx)("span",{className:"star",children:"\u2726"})]}),Object(u.jsx)(D,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),E()}},[[23,1,2]]]);
//# sourceMappingURL=main.9aab782f.chunk.js.map