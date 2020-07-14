(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{46:function(e,n,t){e.exports=t(80)},51:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(17),c=t.n(o),l=(t(51),t(3)),i=t(14),u=t(2),s=t(10),d=t(9);function m(){const e=Object(l.a)(["\n    color: #cfcfcf;\n    font-size: ",";\n    align-self: flex-end;\n"]);return m=function(){return e},e}function f(){const e=Object(l.a)(["\n    max-height: 80%;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    margin: 1vh auto;\n    margin-top: 7vh;\n    padding: 10px 15px 20px 20px;\n    border: 1px solid #888;\n    width: 80%;\n"]);return f=function(){return e},e}function p(){const e=Object(l.a)(["\n    background-color: rgba(0,0,0,0.4);\n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n"]);return p=function(){return e},e}const b=u.b.div(p()),g=u.b.div(f()),h=Object(u.b)(s.a)(m(),e=>e.theme.fontSizes.large);var v=function({children:e,closeHandler:n}){return a.a.createElement(b,null,a.a.createElement(g,null,a.a.createElement(h,{icon:d.i,onClick:n}),a.a.createElement("div",null,e)))},x=t(11);function y(){const e=Object(l.a)(["\n  width: 4rem;\n  height: 4rem;\n\n  transition: all .2s ease-in-out;\n  &:hover{\n    cursor: pointer;\n    transform: scale(1.5);\n  }\n"]);return y=function(){return e},e}function E(){const e=Object(l.a)(["\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  border: 1px solid #cfcfcf;\n  margin: 7px;\n"]);return E=function(){return e},e}function j(){const e=Object(l.a)(["\n    background-color: ",";\n    border-radius: ",";\n    padding: 0.8rem;\n    border: none;\n    outline: none;\n    &:active {\n        background-color: ",";\n    }\n"]);return j=function(){return e},e}const O=u.b.button(j(),e=>e.theme.colors.iconColor.primary,e=>e.round?"50%":"4px",e=>e.theme.colors.iconColor.activePrimary),w=u.b.div(E()),k=u.b.img(y());function S(){const e=Object(l.a)(["\n    padding-bottom: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n"]);return S=function(){return e},e}const C=u.b.div(S());var z=function({closeHandler:e}){const n=Object(x.b)();let t=[];for(let a=1;a<=59;a++)t.push("/EdWatch"+"/avatars/Artboards_Diversity_Avatars_by_Netguru-".concat(a,".png"));const r=t=>{n({type:"CHANGE_PROFILEIMAGE",profileImage:t.target.src}),e()};return a.a.createElement(C,null,t.map((e,n)=>a.a.createElement(w,{key:n},a.a.createElement(k,{src:e,onClick:r}))))};function A(){const e=Object(l.a)(["\n  padding: 0.5rem;\n  margin: 0rem 0rem 0rem 1rem;\n  border-radius: 3px;\n\n  @media (max-width: 768px) {\n    margin: 1rem 0rem 1rem 0rem;\n  }\n"]);return A=function(){return e},e}function I(){const e=Object(l.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"]);return I=function(){return e},e}function _(){const e=Object(l.a)([""]);return _=function(){return e},e}function P(){const e=Object(l.a)(["\n  padding:8px;\n  background: transparent;\n  border: none;\n  &:active {\n    background: grey;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return P=function(){return e},e}function T(){const e=Object(l.a)(["\n  font-size: ",";\n  padding: 0.4rem 0.3rem 0.3rem;\n  font-family: ",";\n"]);return T=function(){return e},e}function D(){const e=Object(l.a)(["\n  align-items: flex-start;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.5rem;\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return D=function(){return e},e}const R=u.b.div(D()),N=u.b.h3(T(),e=>e.theme.fontSizes.medium,e=>e.theme.fonts[0]),M=u.b.button(P()),H=Object(u.b)(s.a)(_()),G=(u.b.img(I(),e=>e.theme.fontSizes.xlarge,e=>e.theme.fontSizes.xlarge),u.b.input(A()));var F=function(e){const n=new x.b,t=Object(x.c)(e=>e.userProfile),o=Object(r.useState)(!1),c=Object(i.a)(o,2),l=c[0],u=c[1],s=Object(r.useState)(!1),m=Object(i.a)(s,2),f=m[0],p=m[1],b=()=>{p(e=>!e)},g=()=>{u(e=>!e)};return a.a.createElement(R,null,f&&a.a.createElement(v,{closeHandler:b},a.a.createElement(z,{closeHandler:b})),a.a.createElement(w,null,a.a.createElement(k,{src:t.profileImage,onClick:b,alt:"user profile"})),l?a.a.createElement(G,{value:t.name,onChange:e=>{const t=e.target.value;n({type:"CHANGE_NAME",name:t})},onKeyDown:e=>{"Enter"===e.key&&g()}}):a.a.createElement(N,null,t.name),a.a.createElement(M,{onClick:g},a.a.createElement(H,{icon:d.f})))};const J={colors:{backgroundColors:{primary:"#faf6e9",secondary:"#ece8d9",third:"#fffdf6",forth:"#494949"},textColors:{primary:"#212121",secondary:"#757575"},dividerColor:"#BDBDBD",iconColor:{primary:"#fffdf6",activePrimary:"#ece8d9"}},fonts:["Roboto","sans-serif"],fontSizes:{xsmall:"0.6rem",small:"0.8rem",medium:"1rem",large:"1.5rem",xlarge:"3.5rem"}};var U=({children:e})=>a.a.createElement(u.a,{theme:J},e);function L(){const e=Object(l.a)(["\n    display: flex;\n    border-radius: 3px;\n    padding: 1rem;\n    width: 100%;\n    background-color: ",";\n    margin: 1rem;\n"]);return L=function(){return e},e}function B(){const e=Object(l.a)(["\n    margin-left: 0.7rem;\n    width: 100%;\n    background-color: transparent;\n    border: none;\n"]);return B=function(){return e},e}function V(){const e=Object(l.a)(["\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n"]);return V=function(){return e},e}const W=u.b.img(V()),q=u.b.input(B()),K=u.b.div(L(),e=>e.theme.colors.backgroundColors.third);var Y=function(e){return a.a.createElement(K,null,a.a.createElement(W,{src:e.profileImage}),a.a.createElement(q,{ref:e.inputBoxRef,type:"text",onKeyDown:e.checkIfEnter}))},Q=t(7),X=t.n(Q),Z=t(12),$=t(6),ee=t(44);const ne=e=>({type:"UPDATE_STATE",payload:e}),te=e=>function(){var n=Object(Z.a)(X.a.mark((function n(t){return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,we(e);case 2:t(ne(e));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var re=t(23),ae=t(83);const oe=["Rational","Reliable","Reserved","Philosophical","Placid","Plucky","Polite","Powerful","Communicative","Compassionate","Conscientious","Considerate"],ce=["Dorisa","Jamima","Ruggiero","Ferdie","Antonio","Thom","Lincoln","Wynny","Evin","Johann","Roley"],le={id:Object(ae.a)(),profileImage:"/EdWatch"+"/avatars/Artboards_Diversity_Avatars_by_Netguru-".concat(Math.floor(58*Math.random())+1,".png"),name:"".concat(oe[Math.floor(Math.random()*oe.length)]," ").concat(ce[Math.floor(Math.random()*ce.length)])};var ie=(e=le,n)=>{switch(n.type){case"CHANGE_NAME":return Object($.a)(Object($.a)({},e),{},{name:n.name});case"CHANGE_PROFILEIMAGE":return Object($.a)(Object($.a)({},e),{},{profileImage:n.profileImage});default:return e}};const ue=[];var se=(e=ue,n)=>{switch(n.type){case"ADD_MESSAGE":return[...e,n.message];default:return e}};const de={playerReady:!1,playing:!0,url:null,played:0,playedSeconds:0,seekTo:!1};var me=(e=de,n)=>{switch(n.type){case"UPDATE_STATE":return Object($.a)(Object($.a)({},e),n.payload);default:return e}},fe=t(43);const pe=Object(re.c)({videoState:me,userProfile:ie,messages:se});var be=Object(re.d)(pe,{},Object(re.a)(fe.a));console.log("||".concat("https://edwatch.me/messagehub","||"));const ge=(new ee.a).withUrl("https://edwatch.me/messagehub").build();var he=Object(ae.a)();let ve=!0;const xe=()=>ve,ye=()=>he;ge.on("NewMessage",e=>{console.log("New message function called from server"),console.log(e),be.dispatch(ke(e))});const Ee=function(){var e=Object(Z.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge.start();case 3:return e.next=5,ge.invoke("CreateGroup",he);case 5:console.log("connected"),console.log("---------IMPORTANT---------"),console.log(ge),console.log(ge.connectionId),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Failed to connect to the backend..."),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(Z.a)(X.a.mark((function e(n){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=be.getState(),e.prev=1,e.next=4,ge.invoke("AddCurrentUserToGroup",n,t.userProfile.name);case 4:console.log("You have now joined someone elses group"),ve=!1,he=n,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Failed to join someone elses group"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(Z.a)(X.a.mark((function e(n){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=ye(),e.next=4,ge.invoke("NewGroupMessage",JSON.stringify(n),t);case 4:console.log("message sent to the group"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("failed to send message to group"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();ge.on("ReciveNewMessage",e=>{console.log(JSON.parse(e)),be.dispatch(ke(JSON.parse(e)))});ge.on("GroupAlert",e=>{let n={image:"/EdWatch/avatars/bot.png",message:e,name:"Bot"};be.dispatch(ke(n))});ge.on("GetHostVideo",Object(Z.a)(X.a.mark((function e(){var n,t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=be.getState(),n.videoState.url,1!=xe()){e.next=12;break}return e.prev=3,t=ye(),e.next=7,ge.invoke("UpdateGroupVideoState",JSON.stringify(Object($.a)(Object($.a)({},n.videoState),{},{seekTo:!0})),t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("failed to set group video for all people");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))),ge.on("LoadGroupVideo",e=>{let n=be.getState();n.videoState.url!=e&&be.dispatch(ne(Object($.a)(Object($.a)({},n),{},{url:e})))});const we=function(){var e=Object(Z.a)(X.a.mark((function e(n){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!xe()){e.next=10;break}return t=ye(),e.prev=2,e.next=5,ge.invoke("UpdateGroupVideoState",JSON.stringify(n),t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(n){return e.apply(this,arguments)}}();ge.on("NewVideoState",e=>{be.dispatch(ne(JSON.parse(e)))});const ke=e=>({type:"ADD_MESSAGE",message:e}),Se=e=>function(){var n=Object(Z.a)(X.a.mark((function n(t){return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Oe(e),t(ke(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function Ce(){const e=Object(l.a)(["\n    background-color: transparent;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 90%;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n"]);return Ce=function(){return e},e}const ze=u.b.div(Ce());var Ae=function(e){const n=Object(r.useRef)(null),t=Object(x.c)(e=>e.userProfile),o=Object(x.b)(),c=e=>{o(Se(e))};return a.a.createElement(r.Fragment,null,a.a.createElement(ze,null,a.a.createElement(Y,{inputBoxRef:n,checkIfEnter:e=>{if(("Enter"===e.key||"sendBtn"===e.target.id)&&""!=e.target.value){const e=n.current.value,r={image:t.profileImage,name:t.name,message:e};c(r),n.current.value=""}},profileImage:t.profileImage}),a.a.createElement(O,{round:!0,onClick:e=>{if(console.log(e),console.log(n.current.value),""!=n.current.value){const e={image:t.profileImage,name:t.name,message:n.current.value};c(e)}n.current.value=""}},a.a.createElement(s.a,{icon:d.e}))))};function Ie(){const e=Object(l.a)(["\n    font-family: ",";\n    font-size: ",";\n    margin-top: 8px;\n    margin-bottom: 8px;\n    margin-right: 5px;\n"]);return Ie=function(){return e},e}function _e(){const e=Object(l.a)(["\n    font-family: ",";\n    font-size: ",";\n    margin-top: 5px;\n"]);return _e=function(){return e},e}function Pe(){const e=Object(l.a)(["\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n"]);return Pe=function(){return e},e}function Te(){const e=Object(l.a)(["\n    height: 3rem;\n    width: 3rem;\n    border-radius: 50%;\n"]);return Te=function(){return e},e}function De(){const e=Object(l.a)(["\n    display:flex;\n    margin-top: 1rem;\n    background-color: ",";\n    border-radius: 10px;\n"]);return De=function(){return e},e}const Re=u.b.div(De(),e=>e.theme.colors.backgroundColors.third),Ne=u.b.img(Te()),Me=u.b.div(Pe()),He=u.b.p(_e(),e=>e.theme.fonts[0],e=>e.theme.fontSizes.xsmall),Ge=u.b.p(Ie(),e=>e.theme.fonts[1],e=>e.theme.fontSizes.medium);var Fe=function({name:e,message:n,image:t}){return a.a.createElement(Re,null,a.a.createElement(Ne,{src:t}),a.a.createElement(Me,null,a.a.createElement(He,null,e),a.a.createElement(Ge,null,n)))};function Je(){const e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    max-height: 80vh;\n    overflow: auto;\n"]);return Je=function(){return e},e}const Ue=u.b.div(Je());var Le=function(e){const n=Object(x.c)(e=>e.messages);return a.a.createElement(Ue,null,n.map((e,n)=>a.a.createElement(Fe,{name:e.name,message:e.message,image:e.image,key:n})))};function Be(){const e=Object(l.a)(["\nbackground-color: ",";\ndisplay: flex;\nflex-direction: column;\nalign-items: stretch;\njustify-content: space-between;\nheight: 100%;\npadding: 0px 15px 0px 15px;\n"]);return Be=function(){return e},e}const Ve=u.b.div(Be(),e=>e.theme.colors.backgroundColors.secondary);var We=function(e){return a.a.createElement(Ve,null,a.a.createElement(Le,null),a.a.createElement(Ae,null))};function qe(){const e=Object(l.a)(["\n    border-radius: 5px;\n    padding: 0.5rem;\n    font-size: 1rem;\n    margin: 1rem 1rem 1rem 0rem;\n    width: 90%;\n"]);return qe=function(){return e},e}function Ke(){const e=Object(l.a)(["\n    display: flex;\n"]);return Ke=function(){return e},e}function Ye(){const e=Object(l.a)(["\nalign-self: center;\nfont-size: ",";\nfont-family: ",";\nmargin-left: 10px;\nfont-weight: lighter;\n"]);return Ye=function(){return e},e}function Qe(){const e=Object(l.a)(["\n    width: ",";\n    height: ",";\n"]);return Qe=function(){return e},e}function Xe(){const e=Object(l.a)(["\n    padding: 10px;\n    margin: 7px;\n    background-color:  ",";\n    font-size: ",";\n    border: none;\n    border-radius: 5px;\n"]);return Xe=function(){return e},e}function Ze(){const e=Object(l.a)(["\n    font-size: ",";\n    margin-bottom: 1rem;\n"]);return Ze=function(){return e},e}function $e(){const e=Object(l.a)(["\n    display: flex;\n    width: 93%;\n    justify-content:flex-start;\n    padding: 15px 15px 15px 15px;\n    \n"]);return $e=function(){return e},e}const en=u.b.div($e()),nn=u.b.h3(Ze(),e=>e.theme.fontSizes.large),tn=u.b.button(Xe(),e=>e.theme.colors.iconColor.primary,e=>e.theme.fontSizes.medium),rn=u.b.img(Qe(),e=>e.theme.fontSizes.xlarge,e=>e.theme.fontSizes.xlarge),an=u.b.h3(Ye(),e=>e.theme.fontSizes.large,e=>e.theme.fonts[0]),on=u.b.div(Ke()),cn=u.b.input(qe());var ln=function(e){const n=Object(r.useRef)(null),t=Object(r.useState)(!1),o=Object(i.a)(t,2),c=o[0],l=o[1],u=Object(r.useState)(!1),m=Object(i.a)(u,2),f=m[0],p=m[1],b=()=>{l(e=>!e)},g=()=>{p(e=>!e)};return a.a.createElement(en,null,c&&a.a.createElement(v,{closeHandler:b},a.a.createElement(nn,null,"Invite"),a.a.createElement("p",null,"Send the ID below to allow people to join: "),a.a.createElement(cn,{type:"text",readOnly:!0,value:ye()})),f&&a.a.createElement(v,{closeHandler:g},a.a.createElement(nn,null,"Join"),a.a.createElement("p",null,"Join by entering the foreign ID:"),a.a.createElement(cn,{ref:n,type:"text"}),a.a.createElement("button",{onClick:()=>{console.log(n.current.value),je(n.current.value)}},"Join")),a.a.createElement(on,null,a.a.createElement(rn,{src:"/EdWatch/logo.ico"}),a.a.createElement(an,null,a.a.createElement("span",{style:{fontWeight:"bold"}},"Ed"),"Watch")),a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement(tn,{onClick:b},"Invite ",a.a.createElement(s.a,{icon:d.g})),a.a.createElement(tn,{onClick:g},"Join ",a.a.createElement(s.a,{icon:d.b}))))},un=t(29),sn=t.n(un);function dn(){const e=Object(l.a)(["\n    margin: 8px;\n    padding: ",";\n"]);return dn=function(){return e},e}function mn(){const e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: #d2f0fa;\n"]);return mn=function(){return e},e}function fn(){const e=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n"]);return fn=function(){return e},e}function pn(){const e=Object(l.a)(["\n    border-radius: 4px;\n    border: none;\n    margin: 5px;\n    padding: 5px;\n    outline-color: #a3a3a3;\n    font-size: ",";\n"]);return pn=function(){return e},e}function bn(){const e=Object(l.a)(["\n  position: relative;\n  margin-top:30px;\n  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */\n"]);return bn=function(){return e},e}function gn(){const e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return gn=function(){return e},e}const hn=u.b.div(gn()),vn=u.b.div(bn()),xn=u.b.input(pn(),e=>e.large?e.theme.fontSizes.large:e.theme.fontSizes.medium),yn=u.b.div(fn()),En=u.b.div(mn()),jn=Object(u.b)(O)(dn(),e=>e.small?"0.5rem":"0.8rem");var On=function(e){const n=Object(x.c)(e=>e.videoState),t=Object(x.b)(),o=e=>{let r=e.current.value;null!=r&&function(e){try{new URL(e)}catch(n){return console.log("not valid url"),!1}return!0}(r)&&t(te(Object($.a)(Object($.a)({},n),{},{url:r})))},c=Object(r.useRef)(null),l=Object(r.useRef)(null),i=Object(r.useRef)(null);Object(r.useEffect)(()=>{1==n.seekTo&&0==xe()&&null!=n.url&&(console.log("calling seekto"),u(parseFloat(n.playedSeconds)),t(ne(Object($.a)(Object($.a)({},n),{},{seekTo:!1}))))},[n.seekTo]);const u=e=>{i.current.seekTo(e)},m=xe()?a.a.createElement(sn.a,{width:"100%",height:"100%",ref:i,playing:n.playing,controls:!0,url:n.url,onPlay:()=>{t(te(Object($.a)(Object($.a)({},n),{},{playing:!0})))},onPause:()=>{t(te(Object($.a)(Object($.a)({},n),{},{playing:!1})))},onProgress:e=>{e.playedSeconds-n.playedSeconds>2||e.playedSeconds-n.playedSeconds<-2?(console.log("seek detected"),console.log("-------------------------------"),console.log("new played: ".concat(e.playedSeconds,".")),console.log("current played: ".concat(n.playedSeconds,".")),console.log("difference: ".concat(e.playedSeconds-n.playedSeconds,".")),console.log("-------------------------------"),t(te(Object($.a)(Object($.a)({},n),{},{playedSeconds:e.playedSeconds,seekTo:!0}))),t(ne(Object($.a)(Object($.a)({},n),{},{seekTo:!1})))):t(ne(Object($.a)(Object($.a)({},n),{},{playedSeconds:e.playedSeconds})))},progressInterval:1e3}):a.a.createElement(sn.a,{width:"100%",height:"100%",ref:i,playing:n.playing,controls:!1,url:n.url,volume:1});return a.a.createElement("div",null,a.a.createElement(vn,null,a.a.createElement(hn,null,null==n.url?a.a.createElement(En,null,a.a.createElement(yn,null,a.a.createElement(xn,{ref:c,placeholder:"Enter Video URL",large:!0,type:"text"}),a.a.createElement(jn,{onClick:()=>{o(c)}},"Load ",a.a.createElement(s.a,{icon:d.b})))):m)),null!=n.url&&a.a.createElement(r.Fragment,null,a.a.createElement(xn,{ref:l,type:"text",placeholder:"Enter Video URL"}),a.a.createElement(jn,{small:!0,onClick:()=>{o(l)}},"Load ",a.a.createElement(s.a,{icon:d.b}))))};var wn=function(e,n){const t=Object(r.useState)(e),a=Object(i.a)(t,2),o=a[0],c=a[1];return Object(r.useEffect)(()=>{const t=setTimeout(()=>{c(e)},n);return()=>{clearTimeout(t)}},[e]),o};function kn(e){return e=e.substring(0,100)+"..."}function Sn(e){let n=[];return e.items.forEach(e=>{let t={title:null,thumbnail:null,creator:null,uploadDate:null,description:null,video_url:null};t.title=e.snippet.title,t.thumbnail=e.snippet.thumbnails.high.url,t.creator=e.snippet.channelTitle,t.uploadDate=e.snippet.publishedAt,t.description=kn(e.snippet.description),t.video_url="https://www.youtube.com/watch?v=".concat(e.id.videoId),n.push(t)}),n}function Cn(e){let n=[];return e.data.forEach(e=>{let t={title:null,thumbnail:null,creator:null,uploadDate:null,description:null,video_url:null};t.title=e.name,t.thumbnail=e.pictures.sizes[2].link,t.creator=e.user.name,t.uploadDate=e.release_time,t.description=kn(e.description),t.video_url=e.link,n.push(t)}),n}const zn=function(){var e=Object(Z.a)(X.a.mark((function e(n,t){var r,a,o;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=null,a=null,o=null,e.t0=t,e.next="youtube"===e.t0?6:"vimeo"===e.t0?14:22;break;case 6:return e.next=8,fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=7&q=".concat(n,"&key=").concat("AIzaSyAOyzdgdALsFy_dvUMusFrDz4IckHFl9-A"));case 8:return r=e.sent,e.next=11,r.json();case 11:return a=e.sent,o=Sn(a),e.abrupt("break",23);case 14:return e.next=16,fetch("https://api.vimeo.com/videos?&query=".concat(n,"&page=1&per_page=7"),{method:"get",headers:new Headers({Authorization:"bearer ".concat("38bb815cfe5c89ec36c5b8180ee6c1fd")})});case 16:return r=e.sent,e.next=19,r.json();case 19:return a=e.sent,o=Cn(a),e.abrupt("break",23);case 22:o=null;case 23:return e.abrupt("return",o);case 24:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();var An=t(25);function In(){const e=Object(l.a)(["\n    font-size:  ",";\n    color: ",";\n    margin-bottom: ",";\n"]);return In=function(){return e},e}function _n(){const e=Object(l.a)(["\n    font-size: ",";\n    margin-top: 3px;\n    margin-bottom: 5px;\n\n"]);return _n=function(){return e},e}function Pn(){const e=Object(l.a)(["\n    cursor: pointer;\n    grid-area: rightbar;\n    display: flex;\n    flex-direction: column;\n"]);return Pn=function(){return e},e}function Tn(){const e=Object(l.a)(["\n    cursor: pointer;\n    grid-area: leftbar;\n    width: 100%;\n    height: 100%;\n"]);return Tn=function(){return e},e}function Dn(){const e=Object(l.a)(['\n    display: grid;\n    grid-template-areas:\n    "leftbar    rightbar";\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 100px 5px;\n    grid-column-gap: 13px;\n    grid-row-gap: 7px;\n    &:active {\n        background-color: ',";\n    }\n"]);return Dn=function(){return e},e}const Rn=u.b.div(Dn(),e=>e.theme.colors.iconColor.activePrimary),Nn=u.b.img(Tn()),Mn=u.b.div(Pn()),Hn=u.b.h2(_n(),e=>e.theme.fontSizes.medium),Gn=u.b.h5(In(),e=>e.theme.fontSizes.small,e=>e.theme.colors.textColors.secondary,e=>e.theme.fontSizes.xsmall);var Fn=function({data:e}){const n=Object(x.b)(),t=({userIcon:e,children:n})=>a.a.createElement(r.Fragment,null,a.a.createElement(s.a,{icon:e}," ")," ",n);return a.a.createElement(r.Fragment,null,a.a.createElement(Rn,{onClick:()=>{if(console.log("video URL is... ".concat(e.video_url)),xe())console.log("user is host, playing new video"),n(te({url:e.video_url})),Object(An.b)(a.a.createElement(t,{userIcon:d.a},"Video loaded for all users"),{delay:1e3});else{console.log("user is not host, copying video to clipboard");let n="Please play ".concat(e.video_url),r=document.createElement("textarea");r.value=n,r.setAttribute("readonly",""),r.style={position:"absolute",left:"-9999px"},document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),An.b.info(a.a.createElement(t,{userIcon:d.d},"Copied message to your clipboard, just paste in chat \u270c\ufe0f"))}}},a.a.createElement(Nn,{src:e.thumbnail}),a.a.createElement(Mn,null,a.a.createElement(Hn,null,e.title),a.a.createElement(Gn,null,e.creator," \u2022 ",e.uploadDate),a.a.createElement(Gn,null,e.description))))};function Jn(){const e=Object(l.a)(["\n","\n"]);return Jn=function(){return e},e}function Un(){const e=Object(l.a)(["\n  outline: none;\n  border:none;\n"]);return Un=function(){return e},e}function Ln(){const e=Object(l.a)(["\nalign-self: center;\n    padding: 1rem;\n    border: none;\n    border-radius: 5px;\n    box-shadow: 5px 5px 15px -15px rgba(0,0,0,0.75);\n    outline: none;\n    padding: 1rem;\n  margin: 1rem;\n"]);return Ln=function(){return e},e}function Bn(){const e=Object(l.a)(["\n@media (max-width: 768px) {\n  grid-template-columns: 1fr;\n}\n\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  justify-items: stretch;\n  justify-content: space-evenly;\n  margin-bottom: 50px;\n"]);return Bn=function(){return e},e}function Vn(){const e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  justify-items: stretch;\n\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 5px 10px 15px -15px rgba(0,0,0,0.75);\n  margin: 1rem;\n  background-color: #ffffff;\n"]);return Vn=function(){return e},e}function Wn(){const e=Object(l.a)(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 10px 10px 40px -10px rgba(0,0,0,0.75);\n  margin: 1rem;\n  outline: none;\n"]);return Wn=function(){return e},e}u.b.input(Wn());const qn=u.b.div(Vn()),Kn=u.b.div(Bn()),Yn=u.b.select(Ln()),Qn=u.b.input(Un()),Xn=u.b.option(Jn(),({disabled:e})=>e&&"\n    color: #cfcfcf;\n  ");var Zn=function({onChangeHandler:e,apibaseHandler:n}){return a.a.createElement(r.Fragment,null,a.a.createElement(Kn,null,a.a.createElement(qn,null,a.a.createElement(s.a,{style:{alignSelf:"center",justifySelf:"center"},icon:d.h}),a.a.createElement(Qn,{placeholder:"Search Videos",type:"text",onChange:e})),a.a.createElement(Yn,{name:"apiBase",id:"apiBase",onChange:n},a.a.createElement(Xn,{value:"youtube"},"YouTube"),a.a.createElement(Xn,{value:"vimeo"},"Vimeo"),a.a.createElement(Xn,{disabled:!0,value:"twitch"},"Twitch"),a.a.createElement(Xn,{disabled:!0,value:"dailyMotion"},"Daily Motion"))))};var $n=function(){const e=Object(r.useState)(""),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)("youtube"),l=Object(i.a)(c,2),u=l[0],m=l[1],f=Object(r.useState)([]),p=Object(i.a)(f,2),b=p[0],g=p[1],h=Object(r.useState)(!1),v=Object(i.a)(h,2),x=v[0],y=v[1],E=wn(t,500);return Object(r.useEffect)(()=>{if(E){console.log(E,u);(function(){var e=Object(Z.a)(X.a.mark((function e(){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zn(E,u);case 2:n=e.sent,y(!1),g(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else g([]),y(!1)},[E]),a.a.createElement(r.Fragment,null,a.a.createElement(Zn,{onChangeHandler:e=>{let n=e.target.value;y(!0),o(n)},apibaseHandler:e=>{let n=e.target.value;m(e=>n)}}),x&&a.a.createElement(s.a,{icon:d.c,spin:!0}),0!=b.length&&b.map((e,n)=>a.a.createElement(Fn,{data:e,key:n})))};t(79);function et(){const e=Object(l.a)(["\nwidth: 30%;\n@media (max-width: 768px) {\n      width: 90%;\n  }\n"]);return et=function(){return e},e}function nt(){const e=Object(l.a)(["\nwidth: 60%;\n@media (max-width: 768px) {\n      width: 90%;\n  }\n"]);return nt=function(){return e},e}function tt(){const e=Object(l.a)(["\n  display:flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  min-height: 100vh;\n  font-family: ",";\n  background-color: lightblue;\n"]);return tt=function(){return e},e}function rt(){const e=Object(l.a)(["\n  justify-content: space-around;\n  width: 100%;\n  min-height: 100vh;\n  background-color: ",";\n  display:flex;\n  overflow-y:auto;\n  margin-bottom: 50px;\n  padding-bottom: 50px;\n  padding-top: 50px;\n\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return rt=function(){return e},e}const at=u.b.div(rt(),e=>e.theme.colors.backgroundColors.primary),ot=u.b.div(tt(),e=>e.theme.fonts[0]),ct=u.b.div(nt()),lt=u.b.div(et());function it(){return Object(r.useEffect)(()=>(Ee(),()=>{console.log("----------UNMOUNT APP-----------")}),[]),a.a.createElement(U,null,a.a.createElement(ot,null,a.a.createElement(ln,null),a.a.createElement(at,null,a.a.createElement(ct,null,a.a.createElement(On,null),a.a.createElement(F,null),a.a.createElement($n,null)),a.a.createElement(lt,null,a.a.createElement(We,null)))),a.a.createElement(An.a,{position:"bottom-left",limit:3}))}const ut=document.getElementById("root");c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x.a,{store:be},a.a.createElement(it,null))),ut)}},[[46,1,2]]]);
//# sourceMappingURL=main.d7953a04.chunk.js.map