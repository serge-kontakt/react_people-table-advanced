(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{25:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(27),n=(a(37),a(38),a(9)),r=a(3),s=a(10),l=a.n(s),i=(a(25),a(1)),j=function(e){var t=e.isActive;return l()("navbar-item ",{"has-background-grey-lighter":t})},o=function(){var e=Object(r.n)().search;return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(n.c,{className:j,to:"/",children:"Home"}),Object(i.jsx)(n.c,{className:j,to:{pathname:"/people",search:e},children:"People"})]})})})},d=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},u=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},h=a(5),m=a(0),O=(a(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),x=a(4),f=a(7),p="https://mate-academy.github.io/react_people-table/api/people.json";function v(e){return new Promise((function(t){return setTimeout(t,e)}))}function N(){return(N=Object(f.a)(Object(x.a)().mark((function e(){return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v(500).then((function(){return fetch(p)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=a(11),y=a(8),w=function(e){var t,a=e.person,c=Object(n.d)(),r=Object(h.a)(c,1)[0];return Object(i.jsx)(n.c,{to:{pathname:"../".concat(null===a||void 0===a?void 0:a.slug),search:r.toString()},className:(t=a.sex,l()("",{"has-text-danger":"f"===t})),children:null===a||void 0===a?void 0:a.name})},S=a(28);function k(e,t){var a=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(h.a)(e,2),c=t[0],n=t[1];null===n?a.delete(c):Array.isArray(n)?(a.delete(c),n.forEach((function(e){a.append(c,e)}))):a.set(c,n)})),a.toString()}var L=["children","params"],C=function(e){var t=e.children,a=e.params,c=Object(S.a)(e,L),r=Object(n.d)(),s=Object(h.a)(r,1)[0];return Object(i.jsx)(n.b,Object(g.a)(Object(g.a)({to:{search:k(s,a)}},c),{},{children:t}))},A=["name","sex","born","died"],P=function(e){var t,a=e.people,c=Object(n.d)(),s=Object(h.a)(c,1)[0],j=Object(r.r)().slug,o=Object(m.useState)(a),d=Object(h.a)(o,2),b=d[0],u=d[1],O=j,x=null===(t=s.get("query"))||void 0===t?void 0:t.toLowerCase(),f=s.get("sex"),p=s.getAll("centuries"),v=s.get("sort"),N=s.get("order");Object(m.useEffect)((function(){var e=f?a.filter((function(e){return e.sex===f})):Object(y.a)(a);x&&(e=e.filter((function(e){var t=x.toLowerCase();return e.name&&e.name.toLowerCase().includes(t)||e.motherName&&e.motherName.toLowerCase().includes(t)||e.fatherName&&e.fatherName.toLowerCase().includes(t)}))),p.length>0&&(e=e.filter((function(e){var t=Math.ceil(e.born/100);return p.includes(t.toString())?e:null}))),"born"!==v&&"died"!==v||(e=e.sort((function(e,t){return e[v]-t[v]}))),"name"!==v&&"sex"!==v||(e=e.sort((function(e,t){return e[v].localeCompare(t[v])}))),N&&e.reverse(),u(e)}),[s]);var S=b.map((function(e){if(e.motherName&&e.fatherName){var t=b.find((function(t){return t.name===e.motherName})),a=b.find((function(t){return t.name===e.fatherName}));return Object(g.a)(Object(g.a)({},e),{},{mother:t,father:a})}if(e.motherName){var c=b.find((function(t){return t.name===e.motherName}));return Object(g.a)(Object(g.a)({},e),{},{mother:c})}if(e.fatherName){var n=b.find((function(t){return t.name===e.fatherName}));return Object(g.a)(Object(g.a)({},e),{},{father:n})}return e}));return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[A.map((function(e){return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e[0].toUpperCase()+e.slice(1),Object(i.jsx)(C,{params:(t=e,v!==t?{sort:t,order:null}:N?{sort:null,order:null}:{sort:v,order:"desc"}),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":v!==e,"fa-sort-up":v===e&&!N,"fa-sort-down":v===e&&N})})})})]})},e);var t})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:S.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":O===e.slug}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(w,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsxs)("td",{children:[!e.motherName&&"-",e.motherName&&(e.mother?Object(i.jsx)(w,{person:e.mother}):e.motherName)]}),Object(i.jsxs)("td",{children:[!e.fatherName&&"-",e.fatherName&&(e.father?Object(i.jsx)(w,{person:e.father}):e.fatherName)]})]},e.name)}))})]})},F=["16","17","18","19","20"],E=function(){var e=Object(n.d)(),t=Object(h.a)(e,2),a=t[0],c=t[1],r=a.get("query")||"",s=a.get("sex")||"",j=a.getAll("centuries")||[];return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(C,{className:l()({"is-active":null===s}),params:{sex:null},children:"All"}),Object(i.jsx)(C,{className:l()({"is-active":"m"===s}),params:{sex:"m"},children:"Male"}),Object(i.jsx)(C,{className:l()({"is-active":"f"===s}),params:{sex:"f"},children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){!function(e){var t=k(a,e);c(t)}({query:e.target.value||null})}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:F.map((function(e){return Object(i.jsx)(C,{"data-cy":"century",className:l()("button mr-1",{"is-info":j.includes(e)}),params:{centuries:j.includes(e)?j.filter((function(t){return e!==t})):[].concat(Object(y.a)(j),[e])},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(C,{"data-cy":"centuryALL",className:l()("button is-success",{"is-outlined":j.length>0}),params:{centuries:[]},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(C,{className:"button is-link is-outlined is-fullwidth",params:{centuries:[],query:null,sex:null},children:"Reset all filters"})})]})},_=function(){var e=Object(m.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],n=Object(m.useState)(!1),r=Object(h.a)(n,2),s=r[0],l=r[1],j=Object(m.useState)(!1),o=Object(h.a)(j,2),d=o[0],b=o[1],u=Object(m.useState)(!1),x=Object(h.a)(u,2),f=x[0],p=x[1];return Object(m.useEffect)((function(){p(!0),function(){return N.apply(this,arguments)}().then((function(e){c(e),0===e.length&&b(!0)})).catch((function(){l(!0)})).finally((function(){p(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:a.length>0&&Object(i.jsx)(E,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[f&&Object(i.jsx)(O,{}),s&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),d&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!f&&!d&&!s&&a.length>0&&Object(i.jsx)(P,{people:a})]})})]})})]})},q=function(){return Object(i.jsx)(n.a,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(d,{}),children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(r.c,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(u,{})}),Object(i.jsx)(r.c,{path:"people",children:Object(i.jsx)(r.c,{path:":slug?",element:Object(i.jsx)(_,{})})})]})})})};Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(q,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.2321e066.chunk.js.map