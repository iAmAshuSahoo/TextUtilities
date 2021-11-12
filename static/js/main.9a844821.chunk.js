(this["webpackJsonptext-util"]=this["webpackJsonptext-util"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),l=a.n(s),r=(a(9),a(10),a(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"/",children:e.about})})]}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]})]})]})})}i.defaultProps={title:"Project Title",about:"About Us"};var b=a(2);a(12);function j(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],s=a[1],l=Object(n.useRef)(0),i=Object(n.useState)(0),j=Object(b.a)(i,2),d=j[0],o=j[1],h=Object(n.useState)(!0),m=Object(b.a)(h,2),x=m[0],u=m[1],O=function(){var e=c.split(" ");return e[e.length-1]||e.pop(),e},p=function(){var e=.008*O().length;return e>0?Math.round(100*e)/100:e},g=function(){o(l.current.value),l.current.value=0};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("h1",{className:"my-3",children:e.heading}),Object(r.jsx)("label",{htmlFor:"myBox",className:"form-label",children:"Example textarea"}),Object(r.jsx)("textarea",{className:"form-control mb-3",value:c,id:"myBox",rows:"8",onChange:function(e){s(e.target.value)},placeholder:"Enter value to convert"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var e=c.toUpperCase();s(e)},children:"Convert To UpperCase"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var e=c.toLowerCase();s(e)},children:"Convert To LowerCase"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:g,children:"Select Writing Goal"})]}),Object(r.jsxs)("div",{className:"d-flex my-3 justify-content-between",children:[Object(r.jsxs)("div",{className:"text-summary",children:[Object(r.jsx)("h2",{className:"",children:"Your Word Summary"}),Object(r.jsxs)("p",{children:[O().length," words and ",c.length," characters"]}),Object(r.jsxs)("p",{children:[p()," minutes read",Object(r.jsx)("button",{className:"".concat(x?"btn-info":"btn-primary"," btn mx-3"),onClick:function(){u(!x)},children:x?"Hide Details":"Show Details"})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"wordGoal",className:"form-label",children:"Enter word goal (only numbers)"}),Object(r.jsx)("button",{className:"btn btn-warning mx-3 my-3",onClick:g,children:"Set Goal"}),Object(r.jsx)("input",{ref:l,type:"number",className:"form-control",id:"wordGoal",placeholder:"500"})]}),d>0?Object(r.jsxs)("p",{children:["Selected Goal ",d]}):null,c.length>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Text Preview :"}),Object(r.jsx)("p",{children:c})]}):null]}),x?Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Other Details"}),Object(r.jsx)("table",{className:"table table-bordered",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Words"}),Object(r.jsx)("td",{className:"detail",children:Object(r.jsx)("span",{className:"table-badge",children:O().length})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Characters"}),Object(r.jsx)("td",{className:"detail",children:Object(r.jsx)("span",{className:"table-badge",children:c.length})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Sentences"}),Object(r.jsx)("td",{className:"detail",children:Object(r.jsx)("span",{className:"table-badge",children:function(){var e=c.split(".");return e[e.length-1]||e.pop(),e}().length})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Paragraphs"}),Object(r.jsx)("td",{className:"detail",children:Object(r.jsx)("span",{className:"table-badge",children:function(){var e=c.split("\n").filter((function(e){return e||!1}));return e[e.length-1]||e.pop(),e}().length})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Reading Time"}),Object(r.jsx)("td",{className:"detail",children:Object(r.jsxs)("span",{className:"table-badge",children:[p()," minutes"]})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Speaking Time"}),Object(r.jsx)("td",{className:"detail",children:Object(r.jsxs)("span",{className:"table-badge",children:[function(){var e=.004*O().length;return e>0?Math.round(100*e)/100:e}()," minutes"]})})]})]})})]}):null]})]})}var d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"Text Utils"}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(j,{heading:"Enter Text To convert to needed Format"})})]})},o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),o()}],[[13,1,2]]]);
//# sourceMappingURL=main.9a844821.chunk.js.map