(this["webpackJsonpemployee-directory-react-app"]=this["webpackJsonpemployee-directory-react-app"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(12),a=s.n(n),c=(s(23),s(24),s(13)),o=s(14),l=s(18),i=s(17),h=(s(25),s(0));var j=function(){return Object(h.jsxs)("div",{className:"header py-5",children:[Object(h.jsx)("h1",{children:"Employee Directory"}),Object(h.jsxs)("p",{children:["Click on the ",Object(h.jsx)("span",{children:Object(h.jsx)("i",{class:"bi bi-sort-alpha-down"})})," or the ",Object(h.jsx)("span",{children:Object(h.jsx)("i",{class:"bi bi-sort-alpha-down-alt"})})," to sort the employee names"]})]})},u=s(15),d=s.n(u),b=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")};s(45);var m=function(e){return Object(h.jsx)("form",{className:"search mx-auto",children:Object(h.jsx)("div",{className:"my-4",children:Object(h.jsx)("input",{value:e.search,onChange:e.handleInputChange,className:"form-control",id:"searchInput",placeholder:"Search"})})})};s(46);var p=function(e){return Object(h.jsxs)("table",{className:"table table-striped table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Image"}),Object(h.jsxs)("th",{scope:"col",onClick:e.handleSortChange,children:["Name ",e.sortAsc&&Object(h.jsx)("span",{children:Object(h.jsx)("i",{class:"bi bi-sort-alpha-down"})})," ",!e.sortAsc&&Object(h.jsx)("span",{children:Object(h.jsx)("i",{class:"bi bi-sort-alpha-down-alt"})})," "]}),Object(h.jsx)("th",{scope:"col",children:"Phone"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(h.jsx)("tbody",{children:e.results.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{scope:"row",children:[" ",Object(h.jsx)("img",{alt:"Person",src:e.Image,className:"img-fluid"})]}),Object(h.jsx)("td",{children:e.Name}),Object(h.jsx)("td",{children:e.Phone}),Object(h.jsx)("td",{children:e.Email}),Object(h.jsx)("td",{children:e.DOB})]},e.Email)}))})]})},O=s(16),f=s.n(O),x=function(e,t){return t?e.sort((function(e,t){return e.Name.toLowerCase()<t.Name.toLowerCase()?-1:e.Name.toLowerCase()>t.Name.toLowerCase()?1:0})):e.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?-1:e.Name.toLowerCase()<t.Name.toLowerCase()?1:0}))},C=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={search:"",results:[],filteredresults:[],sortAsc:!0,error:""},e.handleInputChange=function(t){e.setState({filteredresults:x(e.state.results.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.target.value.toLowerCase())})),e.state.sortAsc)})},e.handleSortChange=function(t){var s=!e.state.sortAsc;e.setState({sortAsc:s}),e.setState({filteredresults:x(e.state.filteredresults,s)})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){var s=t.data.results.map((function(e){return{Image:e.picture.medium,Name:e.name.first+" "+e.name.last,Phone:e.phone,Email:e.email,DOB:f()(e.dob.date).format("MM-DD-YYYY")}}));e.setState({results:s,filteredresults:x(s,e.state.sortAsc)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{}),Object(h.jsx)(m,{handleInputChange:this.handleInputChange}),Object(h.jsx)(p,{handleSortChange:this.handleSortChange,results:this.state.filteredresults,sortAsc:this.state.sortAsc})]})}}]),s}(r.Component);a.a.render(Object(h.jsx)(C,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0532cf6d.chunk.js.map