(this["webpackJsonpfrontend-github-repos"]=this["webpackJsonpfrontend-github-repos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),r=n.n(a),o=(n(16),n(17),n(10)),i=n(11),u=n(6),l=(n(18),n(0)),j=function(e){var t=e.name,n=e.description,c=e.stargazers_count,s=e.open_issues_count,a=e.owner,r=e.pushed_at;return Object(l.jsxs)("article",{className:"repo",children:[Object(l.jsx)("img",{className:"owner-avatar",src:a.avatar_url,alt:"".concat(a.login,"'s avatar")}),Object(l.jsx)("h2",{className:"name",children:t}),Object(l.jsx)("p",{className:"description",children:null!==n&&void 0!==n?n:"No Description"}),Object(l.jsxs)("div",{className:"summary",children:[Object(l.jsxs)("span",{className:"stars",children:["Stars: ",c]}),Object(l.jsxs)("span",{className:"issues",children:["Issues: ",s]}),"Submitted on"," ",Object(l.jsx)("time",{dateTime:r,children:new Date(r).toLocaleDateString()})," ","by ",Object(l.jsx)("span",{className:"owner-name",children:a.login})]})]})},d=Object(c.memo)(j),b=n(5),p=n.n(b),h=n(7),f=n(9),m=new Date(Date.now()-2592e6).toISOString();console.log(m);var O="https://api.github.com/search/repositories?q=created:>".concat(m,"&sort=stars&order=desc"),g=(n(21),["id"]),v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(1),r=Object(u.a)(a,2),j=r[0],b=r[1],m=Object(c.useRef)(null),v=Object(c.useCallback)((function(e){console.log("handleScroll Called !!!!");var t=e.target;t.scrollHeight-t.scrollTop<1.5*t.clientHeight&&(b((function(e){return++e})),m.current.onscroll=void 0)}),[]);return function(e,t){Object(c.useEffect)((function(){var n=function(){var n=Object(f.a)(p.a.mark((function n(){var c,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(O,"&page=").concat(t));case 2:return c=n.sent,n.next=5,c.json();case 5:s=n.sent,e((function(e){return[].concat(Object(h.a)(e),Object(h.a)(s.items.map((function(e){var t=e.id,n=e.name,c=e.description,s=e.stargazers_count,a=e.open_issues_count,r=e.pushed_at,o=e.owner;return{id:t,name:n,description:c,stargazers_count:s,open_issues_count:a,pushed_at:r,owner:{login:o.login,avatar_url:o.avatar_url}}}))))}));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();try{n()}catch(c){console.error(c)}}),[t])}(s,j),Object(c.useEffect)((function(){m.current.onscroll=v}),[n]),Object(l.jsx)("div",{className:"repo-collection",ref:m,children:n.map((function(e){var t=e.id,n=Object(i.a)(e,g);return Object(l.jsx)(d,Object(o.a)({},n),t)}))})};var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{className:"title",children:[Object(l.jsx)("span",{className:"star",children:"\u2726"})," Most Starred Github Repos ",Object(l.jsx)("span",{className:"star",children:"\u2726"})]}),Object(l.jsx)(v,{})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),_()}},[[22,1,2]]]);
//# sourceMappingURL=main.6e10c4e0.chunk.js.map