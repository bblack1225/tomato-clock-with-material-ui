(this["webpackJsonptomato-clock-with-material-ui"]=this["webpackJsonptomato-clock-with-material-ui"]||[]).push([[0],{97:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"startTime",(function(){return p})),n.d(r,"pauseTime",(function(){return m})),n.d(r,"resetTime",(function(){return h})),n.d(r,"completedTime",(function(){return x}));var c=n(0),a=n(29),i=n.n(a),o=n(30),s=n(31),u=n(61),l=n.n(u),j=n(62),d=n(24),b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"START":var n=e.payload;return[].concat(Object(d.a)(t),[{startTime:n.startTime}]);case"PAUSE":var r=e.payload;return[].concat(Object(d.a)(t),[{pauseTime:r.pauseTime}]);default:return t}},f=Object(s.c)({records:b}),O=Object(s.d)(f,{},Object(s.a)(j.a,l.a)),p=function(t){return function(e){e({type:"START",payload:t})}},m=function(t){return function(e){e({type:"PAUSE",payload:t})}},h=function(t){return function(e){e({type:"RESET",payload:t})}},x=function(t){return function(e){e({type:"DONE",payload:t})}},v=n(34),g=n(15),y=n(126),S=n(7),T=n(124),k=n(66),C=n(133),E=n(134),R=n(1),P=function(t){var e=t.value;return Object(R.jsx)(E.a,{variant:"h5",component:"h5",color:"secondary",style:{fontWeight:700},children:e})};var w=function(t){return Object(R.jsxs)(C.a,{sx:{position:"relative"},display:"inline-flex",children:[Object(R.jsx)(T.a,Object(v.a)(Object(v.a)({variant:"determinate",sx:{color:function(t){return t.palette.grey["light"===t.palette.mode?200:800]}},size:40,thickness:4},t),{},{value:100})),Object(R.jsx)(T.a,Object(v.a)({variant:"determinate",sx:Object(S.a)({color:function(t){return"light"===t.palette.mode?"#1a90ff":"#308fe8"},position:"absolute",left:0},"& .".concat(k.a.circle),{strokeLinecap:"round"})},t)),Object(R.jsx)(C.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(R.jsx)(P,{value:t.timetext})})]})},A=n(125),N=n(67),z=n(5),I=Object(z.a)(A.a)((function(t){var e,n=t.theme;return e={height:10,borderRadius:5},Object(S.a)(e,"&.".concat(N.a.colorPrimary),{backgroundColor:n.palette.grey["light"===n.palette.mode?200:800]}),Object(S.a)(e,"& .".concat(N.a.bar),{borderRadius:5,backgroundColor:"light"===n.palette.mode?"#1a90ff":"#308fe8"}),e})),B=n(132),D=n(127),G=n(131),J=n(129),L=1,U=n(69),M=n.n(U),W=Object(y.a)((function(t){return{root:{"& > *":{textAlign:"center"}},buttonGroup:{"& > button":{margin:5}},progressBar:{"&":{marginTop:5,height:100}},circle:{strokeLinecap:"round"},linearProgress:{display:"flex",flexDirection:"column",height:"100%",paddingTop:25}}})),q={minutes:25,seconds:0,progress:0},F=function(){var t=Object(c.useRef)(null),e=Object(c.useState)(!1),n=Object(g.a)(e,2),a=n[0],i=n[1],u=Object(c.useState)({minutes:25,seconds:0,progress:0}),l=Object(g.a)(u,2),j=l[0],d=l[1],b=Object(c.useState)({isStart:!1,text:"Start"}),f=Object(g.a)(b,2),O=f[0],p=f[1],m=Object(c.useState)(L),h=Object(g.a)(m,2),x=h[0],y=h[1],S=W(),T=function(t){var e=t.minutes,n=t.seconds,r=n<10?"0"+n:n;return"".concat(e<10?"0"+e:e," : ").concat(r)}(j),k=(Object(o.c)((function(t){return t.records})),Object(o.b)()),C=Object(s.b)(r,k),E=C.startTime,A=C.pauseTime;Object(c.useEffect)((function(){if(O.isStart){var t=setInterval((function(){if(0===j.minutes&&0===j.seconds)p((function(t){return Object(v.a)(Object(v.a)({},t),{},{isStart:!1,text:"Start"})})),d(q),i(!0);else{var t=(1500-(60*j.minutes+j.seconds)-1)/1500*100;d((function(e){return{seconds:e.seconds?e.seconds-1:59,minutes:e.seconds?e.minutes:e.minutes-1,progress:t}}))}}),1e3);return function(){return clearInterval(t)}}}),[j,O.isStart]);return Object(R.jsxs)("div",{className:S.root,ref:t,children:[Object(R.jsx)(J.a,{in:a,children:Object(R.jsx)(D.a,{action:Object(R.jsx)(G.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){i(!1)},children:Object(R.jsx)(M.a,{fontSize:"inherit"})}),children:"Close me!"})}),Object(R.jsx)("div",{className:S.progressBar,children:x?Object(R.jsxs)("div",{className:S.linearProgress,children:[Object(R.jsx)(P,{value:T}),Object(R.jsx)(I,{variant:"determinate",value:j.progress})]}):Object(R.jsx)(w,{size:100,value:j.progress,timetext:T,classes:{circle:S.circle}})}),Object(R.jsxs)("div",{className:S.buttonGroup,children:[Object(R.jsx)(B.a,{variant:"contained",color:"primary",onClick:function(){p((function(t){return{isStart:!t.isStart,text:t.isStart?"Start":"Stop"}})),O.isStart?A({pauseTime:T}):E({startTime:T})},children:O.text}),Object(R.jsx)(B.a,{variant:"contained",color:"primary",onClick:function(){return d(q)},disabled:O.isStart,children:"Reset"}),Object(R.jsx)(B.a,{variant:"contained",color:"primary",onClick:function(){return y((function(t){return!t}))},children:"Progress"})]})]})},H=function(){var t=Object(o.c)((function(t){return t.records}));return console.log("state!!!",t),Object(R.jsx)("div",{children:"records"})};function K(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(F,{}),Object(R.jsx)(H,{})]})}var Q=document.getElementById("root");i.a.render(Object(R.jsx)(c.StrictMode,{children:Object(R.jsx)(o.a,{store:O,children:Object(R.jsx)(K,{})})}),Q)}},[[97,1,2]]]);
//# sourceMappingURL=main.1284a8ed.chunk.js.map