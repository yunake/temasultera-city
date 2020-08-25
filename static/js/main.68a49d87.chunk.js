(this["webpackJsonptemasultera-map"]=this["webpackJsonptemasultera-map"]||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),l=n.n(c),o=n(16),i=n(50),u=n(12),s=(n(56),n(57),n(134)),m=n(132),d=n(133),p=n(135),f=n(6),b=n.n(f),h=n(45),v=new(n.n(h).a),k=n(46),E=n.n(k),g=[[0,0],[Math.round(660),Math.round(880)]],y=new b.a.Icon({iconUrl:"https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",iconSize:[12,21]});var w=r.a.memo((function(e){var t=e.onMapClick,n=e.markers,a=e.newMarkerPosition;return r.a.createElement(s.a,{id:"map",crs:b.a.CRS.Simple,maxZoom:24,zoom:0,center:[200,400],style:{height:"100vh",width:"50vw"},onClick:t},r.a.createElement(m.a,{url:E.a,bounds:g}),n.map((function(e){return r.a.createElement(d.a,{key:e.id,position:e.position,icon:y},r.a.createElement(p.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:v.render(e.description)}})))})),r.a.createElement(d.a,{opacity:a?1:0,position:a||[-1e4,-1e3],icon:y}))})),j=n(27),O=n.n(j);var S=r.a.memo((function(e){var t=e.onSubmit,n=e.onClear,c=Object(a.useState)(""),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(a.useCallback)((function(e){var t=e.text;i(t)}),[]);return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("button",{className:"btn-back",onClick:n},"Back"),r.a.createElement("h2",null,"New Marker: ")),r.a.createElement(O.a,{value:"",renderHTML:function(e){return v.render(e)},onChange:s}),r.a.createElement("button",{className:"btn-new-marker",onClick:function(){return t({newMarkerDescription:o})}},"Add New Marker"))}));var x=r.a.memo((function(e){var t=e.markers,n=e.onDelete,c=e.onEdit,l=Object(a.useState)(null),i=Object(u.a)(l,2),s=i[0],m=i[1],d=Object(a.useState)(null),p=Object(u.a)(d,2),f=p[0],b=p[1],h=Object(a.useState)(""),k=Object(u.a)(h,2),E=k[0],g=k[1],y=function(e){return function(){n(e)}},w=function(e){return function(){c(e),b(null)}},j=t.filter((function(e){return e.description.toLowerCase().includes(E.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"All Markers: "),r.a.createElement("div",{id:"search"},r.a.createElement("h4",null,"Search: "),r.a.createElement("input",{type:"text",value:E,onChange:function(e){return g(e.target.value)}}),E&&r.a.createElement("button",{className:"btn-dlt",onClick:function(){return g("")}},"X")),r.a.createElement("div",{className:"card-wrapper"},null!==s&&r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .leaflet-marker-icon:nth-child(".concat(s+2,") {\n              filter:  hue-rotate(425deg)\n            }\n          ")}}),j.map((function(e,t){var n=f&&f.id===e.id;return r.a.createElement("div",{key:e.id,className:"marker-card",onMouseEnter:function(){m(t)},onMouseLeave:function(){m(null)}},r.a.createElement("div",null,n?r.a.createElement(O.a,{value:f.description,renderHTML:function(e){return v.render(e)},onChange:function(e){var t=e.text;b(Object(o.a)({},f,{description:t}))}}):r.a.createElement("div",{dangerouslySetInnerHTML:{__html:v.render(e.description)}})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",marginLeft:"10px"}},r.a.createElement("div",null,r.a.createElement("button",{style:{width:"100%",margin:0,marginBottom:"5px"},className:"btn-dlt btn-delete",onClick:y(e)},"Delete"),r.a.createElement("button",{style:{width:"100%",margin:0},className:"btn-dlt",onClick:function(){b(n?null:e)}},n?"Back":"Edit")),n&&r.a.createElement("button",{style:{width:"100%",margin:0},className:"btn-dlt btn-update",onClick:w(f)},"Update")))})),0===j.length&&r.a.createElement("h2",null,"No such markers")))})),C=n(29),M=n(48),L=C.initializeApp({apiKey:"AIzaSyBNrkxhhSw5vp2y9GSVttLGVvDkHeM3SHo",authDomain:"temasultera-map.firebaseapp.com",databaseURL:"https://temasultera-map.firebaseio.com",projectId:"temasultera-map",storageBucket:"temasultera-map.appspot.com",messagingSenderId:"462358138074",appId:"1:462358138074:web:3eddc8459297802250a9e3",measurementId:"G-MZHMBVM0RB"}).auth(),N={googleProvider:new C.auth.GoogleAuthProvider},D=Object(M.a)({providers:N,firebaseAppAuth:L}),I=C.firestore();var A=D(r.a.memo((function(e){var t=e.loading,n=e.user,a=e.signOut,c=e.signInWithGoogle;return r.a.createElement("div",null,t&&r.a.createElement("h2",null,"Loading.."),n?r.a.createElement("h1",null,"Hello, ",n.displayName):r.a.createElement("h1",null,"Log in"),n?r.a.createElement("button",{onClick:a},"Sign out"):r.a.createElement("button",{onClick:c},"Sign in with Google"))}))),H=n(49),B=n(13),R=n.n(B),_=n(18),G=function(){var e=Object(_.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.collection("markers-city").add(t);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(_.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.collection("markers-city").doc(t).delete();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(_.a)(R.a.mark((function e(){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.collection("markers-city").get();case 3:return t=e.sent,n=[],t.forEach((function(e){var t=e.data();n.push(Object(o.a)({fid:e.id},t))})),console.log("MARKERS: ",n),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(_.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.fid,a=Object(H.a)(t,["fid"]),e.prev=1,e.next=4,I.collection("markers-city").doc(n).update(a);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),K=[{title:"Markers",tab:"markers"},{title:"Sign in",tab:"sign_in"}];var U=D((function(e){var t=e.loading,n=e.user,c=Object(a.useState)(K[0].tab),l=Object(u.a)(c,2),s=l[0],m=l[1],d=Object(a.useState)([]),p=Object(u.a)(d,2),f=p[0],b=p[1],h=Object(a.useState)(null),v=Object(u.a)(h,2),k=v[0],E=v[1];Object(a.useEffect)((function(){var e=I.collection("markers-city").onSnapshot((function(e){var t=function(e){try{var t=[];return e.forEach((function(e){var n=e.data();t.push(Object(o.a)({fid:e.id},n))})),console.log("MARKERS: ",t),t}catch(n){console.error(n),alert(n)}}(e);b(t)}),(function(e){console.error(e)}));return function(){e()}}),[]),n||s===K[1].tab||m(K[1].tab);var g=Object(a.useCallback)((function(e){E(e.latlng)}),[]),y=Object(a.useCallback)((function(){E(null)}),[]),j=Object(a.useCallback)((function(e){var t=e.newMarkerDescription,a={id:Date.now(),description:t,position:k,user:n.email};b([].concat(Object(i.a)(f),[a])),E(null);var r=Object(o.a)({},a,{position:[k.lat,k.lng]});G(r).then(z).then(b)}),[f,k]),O=Object(a.useCallback)((function(e){window.confirm("Do you really want to delete this marker?")&&T(e.fid).then(z).then(b)}),[]),C=Object(a.useCallback)((function(e){P(e).then(z).then(b)}),[]);return t?r.a.createElement("h2",null,"Loading..."):r.a.createElement("div",null,r.a.createElement(w,{onMapClick:g,markers:f,newMarkerPosition:k}),r.a.createElement("div",{id:"panel"},r.a.createElement("div",{style:{display:"flex"}},K.map((function(e){return r.a.createElement("button",{key:e.tab,onClick:function(){m(e.tab),E(null)}},e.title)}))),n&&k&&r.a.createElement(S,{onSubmit:j,onClear:y}),!k&&s===K[0].tab&&r.a.createElement(x,{markers:f,onDelete:O,onEdit:C}),!k&&s===K[1].tab&&r.a.createElement(A,null)))}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))},46:function(e,t,n){e.exports=n.p+"static/media/map.47de744c.jpg"},51:function(e,t,n){e.exports=n(130)},56:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.68a49d87.chunk.js.map