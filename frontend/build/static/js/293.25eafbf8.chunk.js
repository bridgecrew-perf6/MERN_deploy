"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[293],{5684:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.error,n=e.resetErrorBoundary;return(0,r.jsxs)("div",{role:"alert",children:[(0,r.jsx)("p",{children:"Something went wrong:"}),(0,r.jsx)("pre",{children:t.message}),(0,r.jsx)("button",{onClick:n,children:"Try again"})]})}},4293:function(e,t,n){n.r(t);var r=n(1413),i=n(885),o=n(3484),a=n(3767),c=n(9752),l=n(5093),u=n(7246),s=n(4569),d=n.n(s),f=n(2791),p=n(6742),h=n(6030),g=n(6871),x=n(3504),v=n(7111),j=n.n(v),y=n(5684),m=n(5816),C=n(184),Z=f.lazy((function(){return n.e(314).then(n.bind(n,6314))}));t.default=function(){var e,t,n=(0,h.I0)(),s=(0,f.useRef)(0),v=(0,g.s0)(),b=(0,h.v9)((function(e){return{cart:e.cart.cart}})).cart,w=(0,f.useState)(),S=(0,i.Z)(w,2),k=S[0],R=S[1],z=(0,f.useState)(),L=(0,i.Z)(z,2),E=L[0],I=L[1],T=(0,f.useState)(),_=(0,i.Z)(T,2),M=_[0],B=_[1],W=(0,f.useRef)(0),A=(0,f.useState)(0),H=(0,i.Z)(A,2),P=H[0],D=H[1],F=(0,f.useState)(!1),N=(0,i.Z)(F,2),O=N[0],U=N[1],q=(0,f.useState)(""),G=(0,i.Z)(q,2),J=G[0],K=G[1],Q=(0,x.lr)(),V=(0,i.Z)(Q,2),X=V[0],Y=V[1],$=X.get("page");if((0,f.useEffect)((function(){var e=new AbortController;return U(!0),d().get("/api/products",{params:{page:"".concat($),limit:3},signal:e.signal}).then((function(e){U(!1),R(e.data.data),D(e.data.total),n((0,m.R)(e.data.data))})).catch((function(e){"canceled"===e.message?console.log("axios aborted"):console.log(e)})),function(){return e.abort()}}),[$]),(0,f.useEffect)((function(){d().get("/api/products/getallproducts").then((function(e){I(e.data.data)}))}),[]),(0,f.useEffect)((function(){B(""===J?k:null===E||void 0===E?void 0:E.filter((function(e){return e.title.toLowerCase().includes(J.toLowerCase())})))}),[J,k]),0!==(null===(e=b[0])||void 0===e?void 0:e._id)){var ee=b.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);s.current=ee}return(0,C.jsx)("div",{children:O?(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:(0,C.jsx)(j(),{size:30,color:"#c67c03"})}):(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px"},children:E?(0,C.jsx)(a.Z,{spacing:2,sx:{width:300},children:(0,C.jsx)(c.Z,{id:"free-solo-demo",size:"small",freeSolo:!0,options:E.map((function(e){return e.title})),onChange:function(e){return function(e){e.target.innerHTML.startsWith("<path")?K(""):0===e.target.value?K(e.target.innerHTML):void 0===e.target.value?K(""):K(e.target.value)}(e)},renderInput:function(e){return(0,C.jsx)(l.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Search by title",color:"warning"}))}})}):null}),(0,C.jsx)(o.Z,{style:{position:"fixed",right:"35",zIndex:"2",backgroundColor:"tomato",borderRadius:"100%",padding:"10",fontSize:"50px",color:"white",top:"65"},onClick:function(){return v("/shoppingcart")}}),0===(null===(t=b[0])||void 0===t?void 0:t._id)||0===b.length?null:(0,C.jsx)("div",{style:{backgroundColor:"gray",borderRadius:"100%",width:"20px",height:"20px",position:"fixed",right:"30px",top:"93px",zIndex:"3",color:"white",paddingLeft:"5px"},children:s.current}),(0,C.jsx)(p.ErrorBoundary,{FallbackComponent:y.Z,onReset:function(){},children:(0,C.jsx)(f.Suspense,{fallback:(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:(0,C.jsx)(j(),{size:30,color:"#c67c03"})}),children:(0,C.jsx)("div",{style:{flexWrap:"wrap",display:"flex",justifyContent:"space-around"},children:null===M||void 0===M?void 0:M.map((function(e){return(0,C.jsx)(Z,{item:e},e._id)}))})})}),""===J?(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"1rem"},children:(0,C.jsx)(a.Z,{spacing:2,children:(0,C.jsx)(u.Z,{sx:{color:"red"},count:function(){for(var e=0,t=0;t<Math.floor(P/3)+1;t++)e+=1;return e}(),page:$?Number($):W.current,onChange:function(e,t){W.current=t,Y((0,x.fW)({page:"".concat(W.current)}))},defaultPage:1,color:"primary"})})}):null]})})}},5816:function(e,t,n){n.d(t,{R:function(){return i}});var r=n(6562),i=function(e){return function(t){t({type:r.M.SET_ALL_PRODUCTS,payload:e})}}}}]);
//# sourceMappingURL=293.25eafbf8.chunk.js.map