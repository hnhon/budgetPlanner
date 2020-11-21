(this.webpackJsonpbudget_planner=this.webpackJsonpbudget_planner||[]).push([[0],{51:function(e,t,a){e.exports=a(61)},56:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(56),a(57),a(94)),s=a(88),i=a(10),m=Object(n.createContext)(),u=function(e){var t=Object(n.useState)("Monthly"),a=Object(i.a)(t,2),r=a[0],c=a[1];return l.a.createElement(m.Provider,{value:{periodical:r,setPeriodical:c}},e.children)};var E=function(){var e=Object(n.useContext)(m).setPeriodical;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"nav-style"},l.a.createElement("button",{onClick:function(){e("Daily")}},"Daily"),l.a.createElement("button",{onClick:function(){e("Monthly")}},"Monthly"),l.a.createElement("button",{onClick:function(){e("Yearly")}},"Yearly")))},b=a(13),d=a(92),v=a(91),y=Object(n.createContext)();var g=function(e){var t=JSON.parse(localStorage.getItem("billsList")),a=Object(n.useState)(null==t?[]:t),r=Object(i.a)(a,2),c=r[0],o=r[1];return l.a.createElement(y.Provider,{value:{billsList:c,setBillsList:o}},e.children)},h=Object(n.createContext)();var f=function(e){var t=JSON.parse(localStorage.getItem("costs")),a=Object(n.useState)(null==t?{monthlyCosts:0,yearlyCosts:0,dailyCosts:0}:t),r=Object(i.a)(a,2),c=r[0],o=r[1];return l.a.createElement(h.Provider,{value:{costs:c,updateCosts:function(e){var t=Math.round(100*(c.monthlyCosts+e))/100,a=Math.round(100*(c.yearlyCosts+12*e))/100,n=Math.round(100*(c.dailyCosts+e/30))/100;o({monthlyCosts:t,yearlyCosts:a,dailyCosts:n})}}},e.children)};var p=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),u=m[0],E=m[1],g=Object(n.useContext)(y),f=g.billsList,p=g.setBillsList,x=Object(n.useContext)(h),O=x.costs,S=x.updateCosts;return Object(n.useEffect)((function(){localStorage.setItem("billsList",JSON.stringify(f))}),[f]),Object(n.useEffect)((function(){localStorage.setItem("costs",JSON.stringify(O))}),[O]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{item:!0,xs:1,sm:4}),l.a.createElement(s.a,{item:!0,xs:10,sm:4},l.a.createElement("a",{href:"https://github.com/hnhon",rel:"noopener noreferrer",target:"_blank",style:{color:"black",textDecoration:"none",margin:"auto"}},"Project Repo")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://linkedin.com/in/hiunamhon",rel:"noopener noreferrer",target:"_blank",style:{color:"black",textDecoration:"none"}},"Contact Me")," ",l.a.createElement("br",null),l.a.createElement(o.a,{mb:1}),l.a.createElement("form",{className:"add-bill-form-control",onSubmit:function(e){!function(e){e.preventDefault(),p([].concat(Object(b.a)(f),[{billTitle:a,billAmount:u,checked:!0,id:Date.now()}])),r(""),E("")}(e),S(parseFloat(u))}},l.a.createElement(d.a,{type:"text",label:"Bill Title",onChange:function(e){return r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},value:a,required:!0}),l.a.createElement("br",null),l.a.createElement(d.a,{type:"number",label:"Monthly Bill",onChange:function(e){return E(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},value:u,required:!0}),l.a.createElement("br",null),l.a.createElement(o.a,{mt:1},l.a.createElement(v.a,{type:"submit",variant:"outlined"},"Submit")))),l.a.createElement(s.a,{item:!0,xs:1,sm:4}))},x=Object(n.createContext)(),O=function(e){var t=JSON.parse(localStorage.getItem("savings")),a=Object(n.useState)(null==localStorage.getItem("savings")?{monthlySavings:0,yearlySavings:0,dailySavings:0}:t),r=Object(i.a)(a,2),c=r[0],o=r[1];return l.a.createElement(x.Provider,{value:{savings:c,updateSavings:function(e){o({monthlySavings:Math.round(100*e)/100,yearlySavings:Math.round(12*e*100)/100,dailySavings:Math.round(e/30*100)/100})}}},e.children)};var S=function(){var e=Object(n.useContext)(h).costs,t=Object(n.useContext)(x).savings,a=Object(n.useContext)(m).periodical;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{item:!0,xs:1,sm:4}),l.a.createElement(s.a,{item:!0,xs:10,sm:4},l.a.createElement("div",{className:"bills-total-cost"},l.a.createElement("p",null,a," bill cost: "),l.a.createElement("p",null," $ ","Monthly"===a?e.monthlyCosts:"Yearly"===a?e.yearlyCosts:e.dailyCosts," "),l.a.createElement("p",null,a," saved:"),l.a.createElement("p",null," $ ","Monthly"===a?t.monthlySavings:"Yearly"===a?t.yearlySavings:t.dailySavings))),l.a.createElement(s.a,{item:!0,xs:1,sm:4}))},C=a(95);var j=function(){var e=Object(n.useContext)(y),t=e.billsList,a=e.setBillsList,r=Object(n.useContext)(x),c=r.savings,o=r.updateSavings;return Object(n.useEffect)((function(){localStorage.setItem("savings",JSON.stringify(c))}),[c]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{item:!0,xs:1,sm:4}),l.a.createElement(s.a,{item:!0,xs:10,sm:4},l.a.createElement("div",{className:"bills-list"},l.a.createElement("div",null,"Monthly Bill"),l.a.createElement("ul",{style:{padding:"0"}},t.map((function(e){return l.a.createElement("li",{className:"bill",key:e.id},l.a.createElement(C.a,{style:{paddingLeft:"0"},checked:e.checked,onChange:function(){!function(e){var n=t.map((function(t){return t.id===e?(t.checked=!t.checked,t):t}));a(n);var l=0;t.map((function(e){return!1===e.checked&&(l+=Math.round(100*parseFloat(e.billAmount))/100),e})),o(l)}(e.id)}}),l.a.createElement("span",null,e.billTitle,": $",e.billAmount))}))))),l.a.createElement(s.a,{item:!0,xs:1,sm:4}))};var k=function(){return l.a.createElement(g,null,l.a.createElement(f,null,l.a.createElement(O,null,l.a.createElement(u,null,l.a.createElement(o.a,{mt:10}),l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,xs:1,sm:4}),l.a.createElement(s.a,{container:!0,item:!0,xs:10,sm:4,style:{boxShadow:"2px 5px 20px gray"}},l.a.createElement(s.a,{item:!0,container:!0,xs:12},l.a.createElement(E,null)),l.a.createElement(s.a,{item:!0,container:!0,xs:12},l.a.createElement(p,null)),l.a.createElement(s.a,{item:!0,container:!0,xs:12},l.a.createElement(S,null)),l.a.createElement(s.a,{item:!0,container:!0,xs:12},l.a.createElement(j,null))),l.a.createElement(s.a,{item:!0,xs:1,sm:4})),l.a.createElement(o.a,{mb:10})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.0e9a9c00.chunk.js.map