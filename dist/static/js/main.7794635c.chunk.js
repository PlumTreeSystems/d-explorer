(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(90)},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=n(13),l=(n(52),n(53),n(2)),u=n(4),s=n(5),d=n(9),h=n(8),p=n(10),f=n(1),m=n.n(f),v=function(e,t){return{type:"LOAD_CHILDREN_NODES",parent:e,requestUrl:t}},O=function(e){return{type:"TOGGLE_CHILDREN_NODES",parent:e}},y=function(e){return{type:"OPEN_MODAL",data:e}},g=(n(54),function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).onOpenModal=function(){n.props.openModalAction({enrolleeId:n.props.id})},n.handleClick=function(){var e=n.props,t=e.id,r=e.onLoad,a=e.showChildren,i=e.sourceUrl;e.numberOfChildren>0&&r(t,a,i)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.numberOfChildren,i=["Node__Container"];return 0===r&&i.push("disabled"),a.a.createElement("div",{className:i.join(" ")},a.a.createElement("span",{onClick:function(){return e.handleClick()},className:"Node__Title"},n," ",r),a.a.createElement("div",{className:"Node__ModalButtonContainer",onClick:this.onOpenModal},a.a.createElement("i",{className:"fa fa-external-link"})))}}]),t}(a.a.PureComponent)),b={id:m.a.string.isRequired,parent:m.a.string.isRequired,title:m.a.string.isRequired,showChildren:m.a.bool,numberOfChildren:m.a.number.isRequired,children:m.a.arrayOf(m.a.shape({id:m.a.string.isRequired,title:m.a.string.isRequired,numberOfChildren:m.a.number.isRequired})),sourceUrl:m.a.string};b.children=m.a.arrayOf(m.a.shape(b).isRequired),g.defaultProps={showChildren:!1,children:[]};var E=Object(c.b)(function(e){return{sourceUrl:e.variables.sourceUrl}},function(e){return{onLoad:function(t,n,r){n?e(O(t)):(e({type:"SET_LOADING",data:{loading:!0}}),e(v(t,r)),e(O(t)),e({type:"SET_LOADING_END",data:{loading:!1}}))},openModalAction:function(t){return e(y(t))}}})(g),N=(n(55),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="";switch(this.props.type){case"space":e=" ";break;case"pipe":e=a.a.createElement("div",{className:"EmptyNode__SVGContainer"},a.a.createElement("svg",{viewBox:"0 0 100% 100%",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%"},a.a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:"100%",className:"SVG_Line"})));break;case"line":e=a.a.createElement("div",{className:"EmptyNode__SVGContainer"},a.a.createElement("svg",{viewBox:"0 0 100% 100%",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%"},a.a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:"100%",className:"SVG_Line"}),a.a.createElement("line",{x1:"0",y1:"50%",x2:"100%",y2:"50%",className:"SVG_Line"})));break;case"last-line":e=a.a.createElement("div",{className:"EmptyNode__SVGContainer"},a.a.createElement("svg",{viewBox:"0 0 100% 100%",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%"},a.a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:"50%",className:"SVG_Line"}),a.a.createElement("line",{x1:"0",y1:"50%",x2:"100%",y2:"50%",className:"SVG_Line"})));break;default:e="-"}return a.a.createElement("div",{className:"EmptyNode__Container"},e)}}]),t}(a.a.PureComponent)),C=(n(56),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.nodes.map(function(e,t){return e.isEmpty?a.a.createElement(N,Object.assign({key:t},e)):a.a.createElement(E,Object.assign({key:t},e))});return a.a.createElement("div",{className:"Column__Container"},e)}}]),t}(a.a.PureComponent)),_=function(e){return{type:"LOAD_ROOT_NODE",requestUrl:e}},j=function(){function e(t){Object(u.a)(this,e),this.root=t}return Object(s.a)(e,[{key:"findNode",value:function(t){return e.findInTree(this.root,t)}},{key:"addChildren",value:function(t,n){var r=e.findInTree(this.root,t);r.children||(r.children=[]),r.children=[].concat(Object(l.a)(r.children),Object(l.a)(n))}},{key:"toggleChildren",value:function(t){var n=e.findInTree(this.root,t);return n.showChildren=!n.showChildren}},{key:"getRoot",value:function(){return this.root}}],[{key:"clone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"getLevels",value:function(e){for(var t=!1,n=[[[e]]],r=0;!t;){var a=n[r].reduce(function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t))},[]).reduce(function(e,t){return t.children||(t.children=[]),t.children.forEach(function(e){e.parentNode=t}),t.children.length&&t.showChildren?[].concat(Object(l.a)(e),[t.children]):e},[]);a.length>0?n[++r]=a:t=!0}return n}},{key:"generateEmptyNodes",value:function(e,t){for(var n=[],r=0;r<t;r++)n.push({isEmpty:!0,type:e});return n}},{key:"getOpenedChildrenWidth",value:function(t){return t.showChildren&&0!==t.children.length?t.children.length+t.children.reduce(function(t,n){return e.getOpenedChildrenWidth(n)+t},0):0}},{key:"getChildren",value:function(e){e.reducers(function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.children))})}},{key:"findInTree",value:function(t,n){if(t.id===n)return t;t.children||(t.children=[]);for(var r=0;r<t.children.length;r++){var a=e.findInTree(t.children[r],n);if(a)return a}return null}}]),e}(),w=(n(57),function(){return a.a.createElement("div",{className:"Spinner__Container"},a.a.createElement("div",{className:"lds-dual-ring"}))}),k=n(41),L=(n(63),function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).onCloseModal=function(){n.props.closeModal()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.detailsUrl,r=e.id;return a.a.createElement(k.a,{open:t,onClose:this.onCloseModal},a.a.createElement("div",{className:"ModalElement__IframeContainer"},a.a.createElement("iframe",{width:"100%",height:"100%",src:n+"/associate/info/"+r})))}}]),t}(a.a.PureComponent)),R=Object(c.b)(function(e){return{open:e.modal.open,detailsUrl:e.variables.detailsUrl,id:e.modal.content.enrolleeId}},function(e){return{closeModal:function(){e({type:"CLOSE_MODAL",data:null})}}})(L),S=(n(64),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.didMount()}},{key:"render",value:function(){for(var e=this.props,t=e.root,n=(e.open,e.maxColumnSize),r=e.loading,i=(e.detailsUrl,t?j.getLevels(j.clone(t)):[]),o=[],c=0;c<i.length;c++){o[c]=[];for(var u=0,s=0;s<i[c].length;s++){if(i[c][s].length>0){var d=(i[c][s][0].parentNode?i[c][s][0].parentNode.offset:0)-o[c].length,h=j.generateEmptyNodes("space",d);o[c]=[].concat(Object(l.a)(o[c]),Object(l.a)(h)),u+=d}for(var p=0;p<i[c][s].length;p++){var f=i[c][s][p];f.offset=++u;var m=j.getOpenedChildrenWidth(f);u+=m;var v;v=j.generateEmptyNodes("pipe",m),o[c]=[].concat(Object(l.a)(o[c]),[f],Object(l.a)(v))}}}for(var O=o.length-1;O>0;O--)for(var y=0;y<o[O].length;y++){var g=o[O-1][y];!o[O][y].isEmpty&&g&&g.type&&(g.type="line")}for(var b=o.length-1;b>=0;b--)for(var E=!0,N=!0,_=o[b].length-1;_>0;_--){var k=o[b][_];if(k&&k.type)switch(k.type){case"pipe":E&&(k.type="space");break;case"line":(E||N)&&(E=!1,N=!1,k.type="last-line")}else N=!0,E=!0}for(var L=o.reverse().splice(0,n).reverse(),S=0,x=!0;x;)L[0]&&L[0][S].type&&"space"===L[0][S].type?++S:x=!1;var I=L.map(function(e,t){return a.a.createElement(C,{key:t,nodes:e.splice(S)})}),T=a.a.createElement("div",{style:{display:"flex"}},I,a.a.createElement(R,null)),D=a.a.createElement(w,null);return r?D:T}}]),t}(a.a.PureComponent)),x=Object(c.b)(function(e){return{root:e.nodes.rootNode,width:e.matrix.matrixWidth,maxColumnSize:e.variables.maxColumnSize,loading:e.variables.loading,sourceUrl:e.variables.sourceUrl}},function(e){return{didMount:function(t){e({type:"SET_LOADING",data:{loading:!0}}),e(_(t)),e({type:"SET_LOADING_END",data:{loading:!1}})}}})(S);var I=function(){return a.a.createElement(x,{width:6})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(14),D=n(38),G=n(39),M=n(11),A=(n(40),n(24)),U=n.n(A),q=function(e,t){switch(e){case B.GET_CHILDREN:U.a.get(t).then(function(e){return e}).catch(function(){return{errors:["Request failed"]}});case B.GET_ROOT:U.a.get(t).then(function(e){return e}).catch(function(){return{errors:["Request failed"]}});default:return{errors:["Request not found"]}}},B={GET_CHILDREN:"get_children",GET_ROOT:"get_root"},V={open:!1,content:{enrolleeId:""}},P=function(e){return{type:"SET_SOURCE_URLS",data:e}},W={maxColumnSize:5,loading:!1,sourceUrl:"",detailsUrl:""},H=Object(T.c)({nodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{rootNode:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _().type:var n=q(B.GET_ROOT,t.requestUrl);return n.errors?e:{rootNode:Object(M.a)({},n)};case v(0).type:var r=new j(j.clone(e.rootNode)),a=t.requestUrl+"?id="+t.parent,i=q(B.GET_CHILDREN,a);return i.errors?e:(r.addChildren(t.parent,i),{rootNode:r.getRoot()});case O(0).type:var o=new j(j.clone(e.rootNode));return o.toggleChildren(t.parent),{rootNode:o.getRoot()};default:return e}},matrix:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(arguments.length>1?arguments[1]:void 0).type,{matrixWidth:6}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y(e).type:var n={open:!0,content:Object(M.a)({},t.data)};return Object(M.a)({},e,n);case"CLOSE_MODAL":return Object(M.a)({},e,{open:!1,content:{enrolleeId:""}});default:return e}},variables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":case"SET_LOADING_END":case P(e).type:return Object(M.a)({},e,t.data);default:return e}}}),z=[D.a,Object(G.createLogger)()];var J={sourceUrl:document.getElementById("root").getAttribute("data-source"),detailsUrl:document.getElementById("root").getAttribute("data-details")},Y=Object(T.d)(H,T.a.apply(void 0,z));Y.dispatch(P(J)),o.a.render(a.a.createElement(c.a,{store:Y},a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.7794635c.chunk.js.map