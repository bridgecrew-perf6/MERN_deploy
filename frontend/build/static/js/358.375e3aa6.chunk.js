"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[358],{5358:function(n,e,o){o.r(e);var r=o(885),t=o(2791),i=o(7621),a=o(2363),s=o(9504),c=o(2169),d=o(6151),u=o(890),l=(o(6311),o(6871)),m=o(184);e.default=function(n){var e=(0,l.s0)(),o=(0,t.useState)(0),f=(0,r.Z)(o,2),v=f[0],Z=f[1],p=n.item;return(0,m.jsxs)(i.Z,{sx:{width:300,margin:"10px"},children:[(0,m.jsxs)("div",{className:"slideshow-container1",children:[(0,m.jsx)(c.Z,{className:"fade",sx:{objectFit:"contain"},height:"250",component:"img",image:p.img[v],alt:p.title}),(0,m.jsx)("a",{className:"prev1",onClick:function(){Z(0===v?p.img.length-1:v-1)},children:"\u276e"}),(0,m.jsx)("a",{className:"next1",onClick:function(){v===p.img.length-1?Z(0):Z(v+1)},children:"\u276f"})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(u.Z,{gutterBottom:!0,variant:"h5",component:"div",children:p.title}),(0,m.jsx)(u.Z,{gutterBottom:!0,variant:"h5",component:"div",children:p.category}),(0,m.jsxs)(u.Z,{variant:"body2",color:"text.secondary",children:[p.desc.slice(0,30),"..."]})]}),(0,m.jsx)(a.Z,{children:(0,m.jsx)(d.Z,{size:"small",fullWidth:!0,onClick:function(){e("/admin/myproducts/".concat(p._id,"/edit"))},children:"Edit"})})]})}},2363:function(n,e,o){o.d(e,{Z:function(){return Z}});var r=o(3366),t=o(7462),i=o(2791),a=o(8182),s=o(767),c=o(7630),d=o(1046),u=o(5159);function l(n){return(0,u.Z)("MuiCardActions",n)}(0,o(208).Z)("MuiCardActions",["root","spacing"]);var m=o(184),f=["disableSpacing","className"],v=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var o=n.ownerState;return[e.root,!o.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,t.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Z=i.forwardRef((function(n,e){var o=(0,d.Z)({props:n,name:"MuiCardActions"}),i=o.disableSpacing,c=void 0!==i&&i,u=o.className,Z=(0,r.Z)(o,f),p=(0,t.Z)({},o,{disableSpacing:c}),g=function(n){var e=n.classes,o={root:["root",!n.disableSpacing&&"spacing"]};return(0,s.Z)(o,l,e)}(p);return(0,m.jsx)(v,(0,t.Z)({className:(0,a.Z)(g.root,u),ownerState:p,ref:e},Z))}))},9504:function(n,e,o){o.d(e,{Z:function(){return Z}});var r=o(7462),t=o(3366),i=o(2791),a=o(8182),s=o(767),c=o(7630),d=o(1046),u=o(5159);function l(n){return(0,u.Z)("MuiCardContent",n)}(0,o(208).Z)("MuiCardContent",["root"]);var m=o(184),f=["className","component"],v=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=i.forwardRef((function(n,e){var o=(0,d.Z)({props:n,name:"MuiCardContent"}),i=o.className,c=o.component,u=void 0===c?"div":c,Z=(0,t.Z)(o,f),p=(0,r.Z)({},o,{component:u}),g=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},l,e)}(p);return(0,m.jsx)(v,(0,r.Z)({as:u,className:(0,a.Z)(g.root,i),ownerState:p,ref:e},Z))}))},2169:function(n,e,o){o.d(e,{Z:function(){return g}});var r=o(3366),t=o(7462),i=o(2791),a=o(8182),s=o(767),c=o(1046),d=o(7630),u=o(5159);function l(n){return(0,u.Z)("MuiCardMedia",n)}(0,o(208).Z)("MuiCardMedia",["root","media","img"]);var m=o(184),f=["children","className","component","image","src","style"],v=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(n,e){var o=n.ownerState,r=o.isMediaComponent,t=o.isImageComponent;return[e.root,r&&e.media,t&&e.img]}})((function(n){var e=n.ownerState;return(0,t.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})})),Z=["video","audio","picture","iframe","img"],p=["picture","img"],g=i.forwardRef((function(n,e){var o=(0,c.Z)({props:n,name:"MuiCardMedia"}),i=o.children,d=o.className,u=o.component,g=void 0===u?"div":u,C=o.image,h=o.src,M=o.style,x=(0,r.Z)(o,f),w=-1!==Z.indexOf(g),j=!w&&C?(0,t.Z)({backgroundImage:'url("'.concat(C,'")')},M):M,b=(0,t.Z)({},o,{component:g,isMediaComponent:w,isImageComponent:-1!==p.indexOf(g)}),N=function(n){var e=n.classes,o={root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]};return(0,s.Z)(o,l,e)}(b);return(0,m.jsx)(v,(0,t.Z)({className:(0,a.Z)(N.root,d),as:g,role:!w&&C?"img":void 0,ref:e,style:j,ownerState:b,src:w?C||h:void 0},x,{children:i}))}))},7621:function(n,e,o){o.d(e,{Z:function(){return p}});var r=o(7462),t=o(3366),i=o(2791),a=o(8182),s=o(767),c=o(7630),d=o(1046),u=o(703),l=o(5159);function m(n){return(0,l.Z)("MuiCard",n)}(0,o(208).Z)("MuiCard",["root"]);var f=o(184),v=["className","raised"],Z=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),p=i.forwardRef((function(n,e){var o=(0,d.Z)({props:n,name:"MuiCard"}),i=o.className,c=o.raised,u=void 0!==c&&c,l=(0,t.Z)(o,v),p=(0,r.Z)({},o,{raised:u}),g=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},m,e)}(p);return(0,f.jsx)(Z,(0,r.Z)({className:(0,a.Z)(g.root,i),elevation:u?8:void 0,ref:e,ownerState:p},l))}))},6311:function(){}}]);
//# sourceMappingURL=358.375e3aa6.chunk.js.map