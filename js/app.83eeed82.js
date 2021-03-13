(function(e){function t(t){for(var o,r,a=t[0],c=t[1],l=t[2],u=0,p=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-todo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"16b4":function(e,t,n){},"19c2":function(e,t,n){},"35a1b":function(e,t,n){"use strict";n("d3b2")},"7f42":function(e,t,n){"use strict";n("e47f")},"85ec":function(e,t,n){},9073:function(e,t,n){"use strict";n("16b4")},c4f4:function(e,t,n){"use strict";n("19c2")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TodoList",{attrs:{appName:"TODO LIST"}})],1)},s=[],r=n("d4ec"),a=n("262e"),c=n("2caf"),l=n("9ab4"),d=n("1b40"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v(" "+e._s(e.title)+" ")]),n("TodoSearch",{on:{sendSearchValToParent:function(t){return e.toggleFilter(t)}}}),n("TodoAddItem",{on:{"new-todo-item":function(t){return e.addTodo(t)}}}),n("div",{staticClass:"col item-container"},e._l(e.todos,(function(t,o){return n("TodoItem",{key:o,attrs:{assignee:t.assignee,title:t.title,description:t.description,isCompleted:t.isCompleted,isFiltered:t.isFiltered},on:{"on-toggle":function(n){return e.toggleTodo(t)},"on-delete":function(n){return e.deleteTodo(t)}}})})),1)],1)},p=[],f=n("bee2"),m=(n("a4d3"),n("e01a"),n("4de4"),n("159b"),n("2fe1")),g=[{assignee:"Shawn Hughes",title:"Walk the cat",description:"Watch out for red trucks!",isCompleted:!1,isFiltered:!1},{assignee:"Tami Lamb",title:"Write a novel",description:"It's a work in progress.",isCompleted:!1,isFiltered:!1},{assignee:"Shawn Hughes",title:"Call mom",description:"Urgent!",isCompleted:!1,isFiltered:!1},{assignee:"Alfred Riley",title:"Read the works of Shakespeare",description:"Categorize by favorite to least favorite.",isCompleted:!1,isFiltered:!1},{assignee:"Alfred Riley",title:"Take out the trash",description:"Don't forget!",isCompleted:!1,isFiltered:!1}],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todoItemContainer",class:{isFiltered:e.isFiltered}},[n("div",{staticClass:"row itemRow"},[n("span",{staticClass:"toggleContainerView",class:{accordionClicked:e.accordionClicked},on:{click:e.toggleDescription}},[e._v(" > ")]),n("li",{staticClass:"lineStyle",class:{isCompleted:e.isCompleted},on:{click:function(t){return e.$emit("on-toggle")}}},[n("div",{staticClass:"titleItem"},[e._v(e._s(e.title))]),n("span",[e._v(" Assigned By: "+e._s(e.assignee)+" ")])]),n("span",{staticClass:"deleteItem",on:{click:function(t){return e.$emit("on-delete")}}},[e._v(" X ")])]),n("div",{staticClass:"descriptionContainer col",class:{toggled:e.toggled}},[n("p",[e._v(e._s(e.description))])])])},v=[],b={data:function(){return{newTodoDescription:"",toggled:!1,accordionClicked:!1}},props:["assignee","title","description","isCompleted","isFiltered"],methods:{toggleDescription:function(){this.toggled=!this.toggled,this.accordionClicked=!this.accordionClicked}}},T=b,w=(n("7f42"),n("2877")),C=Object(w["a"])(T,h,v,!1,null,"38ba5734",null),y=C.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addItemContainer"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addTodoItem()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo.assignee,expression:"newTodo.assignee"}],staticClass:"inputItem",attrs:{type:"text",placeholder:"Assignee"},domProps:{value:e.newTodo.assignee},on:{input:function(t){t.target.composing||e.$set(e.newTodo,"assignee",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo.title,expression:"newTodo.title"}],staticClass:"inputItem",attrs:{type:"text",placeholder:"Title"},domProps:{value:e.newTodo.title},on:{input:function(t){t.target.composing||e.$set(e.newTodo,"title",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo.description,expression:"newTodo.description"}],staticClass:"inputItem",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.newTodo.description},on:{input:function(t){t.target.composing||e.$set(e.newTodo,"description",t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v(" ADD ")])])])},_=[],j=(n("b64b"),n("498a"),{data:function(){return{newTodo:{assignee:"",title:"",description:""}}},methods:{unbindTodos:function(){var e=this;Object.keys(this.newTodo).forEach((function(t){e.newTodo[t]=""}))},addTodoItem:function(){var e=this;!1!==Object.keys(this.newTodo).every((function(t){return e.newTodo[t].trim().length>0}))&&(this.$emit("new-todo-item",this.newTodo),this.unbindTodos())}}}),k=j,x=(n("35a1b"),Object(w["a"])(k,O,_,!1,null,"cf13f1dc",null)),S=x.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.sendSearchValToParent()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"searchInput",attrs:{placeholder:"Search"},domProps:{value:e.searchValue},on:{input:function(t){t.target.composing||(e.searchValue=t.target.value)}}})])])},F=[],P={data:function(){return{searchValue:""}},methods:{sendSearchValToParent:function(){this.$emit("sendSearchValToParent",this.searchValue)}}},$=P,D=(n("c4f4"),Object(w["a"])($,I,F,!1,null,"d6b2d87a",null)),V=D.exports,A=function(e){Object(a["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.title="TODO LIST",e.todos=g,e}return Object(f["a"])(n,[{key:"addTodo",value:function(e){this.todos.push({assignee:e.assignee,title:e.title,description:e.description,isCompleted:!1,isFiltered:!1})}},{key:"toggleTodo",value:function(e){e.isCompleted=!e.isCompleted}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t!==e}))}},{key:"toggleFilter",value:function(e){this.todos.forEach((function(t){-1!==t.assignee.toLowerCase().indexOf(e.toLowerCase())?t.isFiltered=!1:t.isFiltered=!0}))}},{key:"data",value:function(){return{}}}]),n}(o["a"]);A=Object(l["a"])([Object(m["b"])({components:{TodoItem:y,TodoAddItem:S,TodoSearch:V}})],A);var E=A,L=E,N=(n("9073"),Object(w["a"])(L,u,p,!1,null,"7cdddcf0",null)),M=N.exports,R=function(e){Object(a["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return n}(d["b"]);R=Object(l["a"])([Object(d["a"])({components:{TodoList:M}})],R);var W=R,H=W,J=(n("034f"),Object(w["a"])(H,i,s,!1,null,null,null)),z=J.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(z)}}).$mount("#app")},d3b2:function(e,t,n){},e47f:function(e,t,n){}});
//# sourceMappingURL=app.83eeed82.js.map