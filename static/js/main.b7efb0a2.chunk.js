(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{43:function(e,n,t){e.exports=t(76)},48:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(23),c=t.n(o),l=(t(48),t(3)),i=t(21),u=t(2),s=t(12),d=t(13);function m(){const e=Object(l.a)(["\n    color: #cfcfcf;\n    font-size: ",";\n    align-self: flex-end;\n"]);return m=function(){return e},e}function f(){const e=Object(l.a)(["\n    max-height: 80%;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    margin: 1vh auto;\n    margin-top: 7vh;\n    padding: 10px 15px 20px 20px;\n    border: 1px solid #888;\n    width: 80%;\n"]);return f=function(){return e},e}function p(){const e=Object(l.a)(["\n    background-color: rgba(0,0,0,0.4);\n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n"]);return p=function(){return e},e}const b=u.b.div(p()),g=u.b.div(f()),h=Object(u.b)(s.a)(m(),e=>e.theme.fontSizes.large);var v=function({children:e,closeHandler:n}){return a.a.createElement(b,null,a.a.createElement(g,null,a.a.createElement(h,{icon:d.e,onClick:n}),a.a.createElement("div",null,e)))},O=t(9);function x(){const e=Object(l.a)(["\n  width: 4rem;\n  height: 4rem;\n\n  transition: all .2s ease-in-out;\n  &:hover{\n    cursor: pointer;\n    transform: scale(1.5);\n  }\n"]);return x=function(){return e},e}function E(){const e=Object(l.a)(["\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  border: 1px solid #cfcfcf;\n  margin: 7px;\n"]);return E=function(){return e},e}function y(){const e=Object(l.a)(["\n    background-color: ",";\n    border-radius: ",";\n    padding: 0.8rem;\n    border: none;\n    outline: none;\n    &:active {\n        background-color: ",";\n    }\n"]);return y=function(){return e},e}const j=u.b.button(y(),e=>e.theme.colors.iconColor.primary,e=>e.round?"50%":"4px",e=>e.theme.colors.iconColor.activePrimary),w=u.b.div(E()),k=u.b.img(x());function S(){const e=Object(l.a)(["\n    padding-bottom: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n"]);return S=function(){return e},e}const C=u.b.div(S());var A=function({closeHandler:e}){const n=Object(O.b)();let t=[];for(let a=1;a<=59;a++)t.push("/EdWatch"+"/avatars/Artboards_Diversity_Avatars_by_Netguru-".concat(a,".png"));const r=t=>{n({type:"CHANGE_PROFILEIMAGE",profileImage:t.target.src}),e()};return a.a.createElement(C,null,t.map((e,n)=>a.a.createElement(w,{key:n},a.a.createElement(k,{src:e,onClick:r}))))};function z(){const e=Object(l.a)(["\n  padding: 0.5rem;\n  margin: 0rem 0rem 0rem 1rem;\n  border-radius: 3px;\n\n  @media (max-width: 768px) {\n    margin: 1rem 0rem 1rem 0rem;\n  }\n"]);return z=function(){return e},e}function N(){const e=Object(l.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"]);return N=function(){return e},e}function P(){const e=Object(l.a)([""]);return P=function(){return e},e}function I(){const e=Object(l.a)(["\n  padding:8px;\n  background: transparent;\n  border: none;\n  &:active {\n    background: grey;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return I=function(){return e},e}function R(){const e=Object(l.a)(["\n  font-size: ",";\n  padding: 0.4rem 0.3rem 0.3rem;\n  font-family: ",";\n"]);return R=function(){return e},e}function T(){const e=Object(l.a)(["\n  align-items: flex-start;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.5rem;\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return T=function(){return e},e}const M=u.b.div(T()),D=u.b.h3(R(),e=>e.theme.fontSizes.medium,e=>e.theme.fonts[0]),G=u.b.button(I()),_=Object(u.b)(s.a)(P()),J=(u.b.img(N(),e=>e.theme.fontSizes.xlarge,e=>e.theme.fontSizes.xlarge),u.b.input(z()));var H=function(e){const n=new O.b,t=Object(O.c)(e=>e.userProfile),o=Object(r.useState)(!1),c=Object(i.a)(o,2),l=c[0],u=c[1],s=Object(r.useState)(!1),m=Object(i.a)(s,2),f=m[0],p=m[1],b=()=>{p(e=>!e)},g=()=>{u(e=>!e)};return a.a.createElement(M,null,f&&a.a.createElement(v,{closeHandler:b},a.a.createElement(A,{closeHandler:b})),a.a.createElement(w,null,a.a.createElement(k,{src:t.profileImage,onClick:b,alt:"user profile"})),l?a.a.createElement(J,{value:t.name,onChange:e=>{const t=e.target.value;n({type:"CHANGE_NAME",name:t})},onKeyDown:e=>{"Enter"===e.key&&g()}}):a.a.createElement(D,null,t.name),a.a.createElement(G,{onClick:g},a.a.createElement(_,{icon:d.c})))};const U={colors:{backgroundColors:{primary:"#faf6e9",secondary:"#ece8d9",third:"#fffdf6",forth:"#494949"},textColors:{primary:"#212121",secondary:"#757575"},dividerColor:"#BDBDBD",iconColor:{primary:"#fffdf6",activePrimary:"#ece8d9"}},fonts:["Roboto","sans-serif"],fontSizes:{xsmall:"0.6rem",small:"0.8rem",medium:"1rem",large:"1.5rem",xlarge:"3.5rem"}};var L=({children:e})=>a.a.createElement(u.a,{theme:U},e),F=t(8),V=t.n(F),W=t(14),B=t(6),K=t(41);const Y=e=>({type:"UPDATE_STATE",payload:e}),q=e=>function(){var n=Object(W.a)(V.a.mark((function n(t){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,he(e);case 2:t(Y(e));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var Q=t(20),X=t(77);const Z=["Rational","Reliable","Reserved","Philosophical","Placid","Plucky","Polite","Powerful","Communicative","Compassionate","Conscientious","Considerate"],$=["Dorisa","Jamima","Ruggiero","Ferdie","Antonio","Thom","Lincoln","Wynny","Evin","Johann","Roley"],ee={id:Object(X.a)(),profileImage:"/EdWatch"+"/avatars/Artboards_Diversity_Avatars_by_Netguru-".concat(Math.floor(58*Math.random())+1,".png"),name:"".concat(Z[Math.floor(Math.random()*Z.length)]," ").concat($[Math.floor(Math.random()*$.length)])};var ne=(e=ee,n)=>{switch(n.type){case"CHANGE_NAME":return Object(B.a)(Object(B.a)({},e),{},{name:n.name});case"CHANGE_PROFILEIMAGE":return Object(B.a)(Object(B.a)({},e),{},{profileImage:n.profileImage});default:return e}};const te=[];var re=(e=te,n)=>{switch(n.type){case"ADD_MESSAGE":return[...e,n.message];default:return e}};const ae={playerReady:!1,playing:!0,url:null,played:0,playedSeconds:0,seekTo:!1};var oe=(e=ae,n)=>{switch(n.type){case"UPDATE_STATE":return Object(B.a)(Object(B.a)({},e),n.payload);default:return e}},ce=t(40);const le=Object(Q.c)({videoState:oe,userProfile:ne,messages:re});var ie=Object(Q.d)(le,{},Object(Q.a)(ce.a));console.log("===== ".concat("http://138.197.166.210:8080/messagehub","======="));const ue=(new K.a).withUrl("http://138.197.166.210:8080/messagehub").build();var se=Object(X.a)();let de=!0;const me=()=>de,fe=()=>se;ue.on("NewMessage",e=>{console.log("New message function called from server"),console.log(e),ie.dispatch(ve(e))});const pe=function(){var e=Object(W.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.start();case 3:return e.next=5,ue.invoke("CreateGroup",se);case 5:console.log("connected"),console.log("---------IMPORTANT---------"),console.log(ue),console.log(ue.connectionId),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Failed to connect to the backend..."),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(W.a)(V.a.mark((function e(n){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ie.getState(),e.prev=1,e.next=4,ue.invoke("AddCurrentUserToGroup",n,t.userProfile.name);case 4:console.log("You have now joined someone elses group"),de=!1,se=n,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Failed to join someone elses group"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}(),ge=function(){var e=Object(W.a)(V.a.mark((function e(n){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=fe(),e.next=4,ue.invoke("NewGroupMessage",JSON.stringify(n),t);case 4:console.log("message sent to the group"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("failed to send message to group"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();ue.on("ReciveNewMessage",e=>{console.log(JSON.parse(e)),ie.dispatch(ve(JSON.parse(e)))});ue.on("GroupAlert",e=>{let n={image:"/EdWatch/avatars/bot.png",message:e,name:"Bot"};ie.dispatch(ve(n))});ue.on("GetHostVideo",Object(W.a)(V.a.mark((function e(){var n,t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=ie.getState(),n.videoState.url,1!=me()){e.next=12;break}return e.prev=3,t=fe(),e.next=7,ue.invoke("UpdateGroupVideoState",JSON.stringify(Object(B.a)(Object(B.a)({},n.videoState),{},{seekTo:!0})),t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("failed to set group video for all people");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))),ue.on("LoadGroupVideo",e=>{let n=ie.getState();n.videoState.url!=e&&ie.dispatch(Y(Object(B.a)(Object(B.a)({},n),{},{url:e})))});const he=function(){var e=Object(W.a)(V.a.mark((function e(n){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me()){t=fe();try{ue.invoke("UpdateGroupVideoState",JSON.stringify(n),t)}catch(r){console.log(r)}}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();ue.on("NewVideoState",e=>{ie.dispatch(Y(JSON.parse(e)))});const ve=e=>({type:"ADD_MESSAGE",message:e}),Oe=e=>function(){var n=Object(W.a)(V.a.mark((function n(t){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:ge(e),t(ve(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function xe(){const e=Object(l.a)(["\n    display: flex;\n    border-radius: 3px;\n    padding: 1rem;\n    width: 100%;\n    background-color: ",";\n    margin: 1rem;\n"]);return xe=function(){return e},e}function Ee(){const e=Object(l.a)(["\n    margin-left: 0.7rem;\n    width: 100%;\n    background-color: transparent;\n    border: none;\n"]);return Ee=function(){return e},e}function ye(){const e=Object(l.a)(["\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n"]);return ye=function(){return e},e}const je=u.b.img(ye()),we=u.b.input(Ee()),ke=u.b.div(xe(),e=>e.theme.colors.backgroundColors.third);var Se=function(e){const n=Object(r.useRef)(null),t=Object(O.c)(e=>e.userProfile),o=Object(O.b)();return a.a.createElement(ke,null,a.a.createElement(je,{src:t.profileImage}),a.a.createElement(we,{ref:n,type:"text",onKeyDown:e=>{if("Enter"===e.key&&""!=e.target.value){const r=e.target.value,a={image:t.profileImage,name:t.name,message:r};o(Oe(a)),n.current.value=""}}}))};function Ce(){const e=Object(l.a)(["\n    background-color: transparent;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 90%;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n"]);return Ce=function(){return e},e}const Ae=u.b.div(Ce());var ze=function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(Ae,null,a.a.createElement(Se,null),a.a.createElement(j,{round:!0},a.a.createElement(s.a,{icon:d.b}))))};function Ne(){const e=Object(l.a)(["\n    font-family: ",";\n    font-size: ",";\n    margin-top: 8px;\n    margin-bottom: 8px;\n    margin-right: 5px;\n"]);return Ne=function(){return e},e}function Pe(){const e=Object(l.a)(["\n    font-family: ",";\n    font-size: ",";\n    margin-top: 5px;\n"]);return Pe=function(){return e},e}function Ie(){const e=Object(l.a)(["\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n"]);return Ie=function(){return e},e}function Re(){const e=Object(l.a)(["\n    height: 3rem;\n    width: 3rem;\n    border-radius: 50%;\n"]);return Re=function(){return e},e}function Te(){const e=Object(l.a)(["\n    display:flex;\n    margin-top: 1rem;\n    background-color: ",";\n    border-radius: 10px;\n"]);return Te=function(){return e},e}const Me=u.b.div(Te(),e=>e.theme.colors.backgroundColors.third),De=u.b.img(Re()),Ge=u.b.div(Ie()),_e=u.b.p(Pe(),e=>e.theme.fonts[0],e=>e.theme.fontSizes.xsmall),Je=u.b.p(Ne(),e=>e.theme.fonts[1],e=>e.theme.fontSizes.medium);var He=function({name:e,message:n,image:t}){return a.a.createElement(Me,null,a.a.createElement(De,{src:t}),a.a.createElement(Ge,null,a.a.createElement(_e,null,e),a.a.createElement(Je,null,n)))};function Ue(){const e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    max-height: 80vh;\n    overflow: auto;\n"]);return Ue=function(){return e},e}const Le=u.b.div(Ue());var Fe=function(e){const n=Object(O.c)(e=>e.messages);return a.a.createElement(Le,null,n.map((e,n)=>a.a.createElement(He,{name:e.name,message:e.message,image:e.image,key:n})))};function Ve(){const e=Object(l.a)(["\nbackground-color: ",";\ndisplay: flex;\nflex-direction: column;\nalign-items: stretch;\njustify-content: space-between;\nheight: 100%;\npadding: 0px 15px 0px 15px;\n"]);return Ve=function(){return e},e}const We=u.b.div(Ve(),e=>e.theme.colors.backgroundColors.secondary);var Be=function(e){return a.a.createElement(We,null,a.a.createElement(Fe,null),a.a.createElement(ze,null))};function Ke(){const e=Object(l.a)(["\n    border-radius: 5px;\n    padding: 0.5rem;\n    font-size: 1rem;\n    margin: 1rem 1rem 1rem 0rem;\n    width: 90%;\n"]);return Ke=function(){return e},e}function Ye(){const e=Object(l.a)(["\n    display: flex;\n"]);return Ye=function(){return e},e}function qe(){const e=Object(l.a)(["\nalign-self: center;\nfont-size: ",";\nfont-family: ",";\nmargin-left: 10px;\nfont-weight: lighter;\n"]);return qe=function(){return e},e}function Qe(){const e=Object(l.a)(["\n    width: ",";\n    height: ",";\n"]);return Qe=function(){return e},e}function Xe(){const e=Object(l.a)(["\n    padding: 10px;\n    margin: 7px;\n    background-color:  ",";\n    font-size: ",";\n    border: none;\n    border-radius: 5px;\n"]);return Xe=function(){return e},e}function Ze(){const e=Object(l.a)(["\n    font-size: ",";\n    margin-bottom: 1rem;\n"]);return Ze=function(){return e},e}function $e(){const e=Object(l.a)(["\n    display: flex;\n    width: 93%;\n    justify-content:flex-start;\n    padding: 15px 15px 15px 15px;\n    \n"]);return $e=function(){return e},e}const en=u.b.div($e()),nn=u.b.h3(Ze(),e=>e.theme.fontSizes.large),tn=u.b.button(Xe(),e=>e.theme.colors.iconColor.primary,e=>e.theme.fontSizes.medium),rn=u.b.img(Qe(),e=>e.theme.fontSizes.xlarge,e=>e.theme.fontSizes.xlarge),an=u.b.h3(qe(),e=>e.theme.fontSizes.large,e=>e.theme.fonts[0]),on=u.b.div(Ye()),cn=u.b.input(Ke());var ln=function(e){const n=Object(r.useRef)(null),t=Object(r.useState)(!1),o=Object(i.a)(t,2),c=o[0],l=o[1],u=Object(r.useState)(!1),m=Object(i.a)(u,2),f=m[0],p=m[1],b=()=>{l(e=>!e)},g=()=>{p(e=>!e)};return a.a.createElement(en,null,c&&a.a.createElement(v,{closeHandler:b},a.a.createElement(nn,null,"Invite"),a.a.createElement("p",null,"Send the ID below to allow people to join: "),a.a.createElement(cn,{type:"text",readOnly:!0,value:fe()})),f&&a.a.createElement(v,{closeHandler:g},a.a.createElement(nn,null,"Join"),a.a.createElement("p",null,"Join by entering the foreign ID:"),a.a.createElement(cn,{ref:n,type:"text"}),a.a.createElement("button",{onClick:()=>{console.log(n.current.value),be(n.current.value)}},"Join")),a.a.createElement(on,null,a.a.createElement(rn,{src:"/EdWatch/logo.ico"}),a.a.createElement(an,null,a.a.createElement("span",{style:{fontWeight:"bold"}},"Ed"),"Watch")),a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement(tn,{onClick:b},"Invite ",a.a.createElement(s.a,{icon:d.d})),a.a.createElement(tn,{onClick:g},"Join ",a.a.createElement(s.a,{icon:d.a}))))},un=t(26),sn=t.n(un);function dn(){const e=Object(l.a)(["\n    margin: 8px;\n    padding: ",";\n"]);return dn=function(){return e},e}function mn(){const e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: #d2f0fa;\n"]);return mn=function(){return e},e}function fn(){const e=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n"]);return fn=function(){return e},e}function pn(){const e=Object(l.a)(["\n    border-radius: 4px;\n    border: none;\n    margin: 5px;\n    padding: 5px;\n    outline-color: #a3a3a3;\n    font-size: ",";\n"]);return pn=function(){return e},e}function bn(){const e=Object(l.a)(["\n  position: relative;\n  margin-top:30px;\n  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */\n"]);return bn=function(){return e},e}function gn(){const e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return gn=function(){return e},e}const hn=u.b.div(gn()),vn=u.b.div(bn()),On=u.b.input(pn(),e=>e.large?e.theme.fontSizes.large:e.theme.fontSizes.medium),xn=u.b.div(fn()),En=u.b.div(mn()),yn=Object(u.b)(j)(dn(),e=>e.small?"0.5rem":"0.8rem");var jn=function(e){const n=Object(O.c)(e=>e.videoState),t=Object(O.b)(),o=e=>{let r=e.current.value;null!=r&&function(e){try{new URL(e)}catch(n){return console.log("not valid url"),!1}return!0}(r)&&t(q(Object(B.a)(Object(B.a)({},n),{},{url:r})))},c=Object(r.useRef)(null),l=Object(r.useRef)(null),i=Object(r.useRef)(null);Object(r.useEffect)(()=>{1==n.seekTo&&0==me()&&(console.log("calling seekto"),u(parseFloat(n.playedSeconds)),t(Y(Object(B.a)(Object(B.a)({},n),{},{seekTo:!1}))))},[n.seekTo]);const u=e=>{i.current.seekTo(e)},m=me()?a.a.createElement(sn.a,{width:"100%",height:"100%",ref:i,playing:n.playing,controls:!0,url:n.url,onPlay:()=>{t(q(Object(B.a)(Object(B.a)({},n),{},{playing:!0})))},onPause:()=>{t(q(Object(B.a)(Object(B.a)({},n),{},{playing:!1})))},onProgress:e=>{e.playedSeconds-n.playedSeconds>2||e.playedSeconds-n.playedSeconds<-2?(console.log("seek detected"),console.log("-------------------------------"),console.log("new played: ".concat(e.playedSeconds,".")),console.log("current played: ".concat(n.playedSeconds,".")),console.log("difference: ".concat(e.playedSeconds-n.playedSeconds,".")),console.log("-------------------------------"),t(q(Object(B.a)(Object(B.a)({},n),{},{playedSeconds:e.playedSeconds,seekTo:!0}))),t(Y(Object(B.a)(Object(B.a)({},n),{},{seekTo:!1})))):t(Y(Object(B.a)(Object(B.a)({},n),{},{playedSeconds:e.playedSeconds})))},progressInterval:1e3}):a.a.createElement(sn.a,{width:"100%",height:"100%",ref:i,playing:n.playing,controls:!1,url:n.url,volume:1});return a.a.createElement("div",null,a.a.createElement(vn,null,a.a.createElement(hn,null,null==n.url?a.a.createElement(En,null,a.a.createElement(xn,null,a.a.createElement(On,{ref:c,placeholder:"Enter Video URL",large:!0,type:"text"}),a.a.createElement(yn,{onClick:()=>{o(c)}},"Load ",a.a.createElement(s.a,{icon:d.a})))):m)),null!=n.url&&a.a.createElement(r.Fragment,null,a.a.createElement(On,{ref:l,type:"text",placeholder:"Enter Video URL"}),a.a.createElement(yn,{small:!0,onClick:()=>{o(l)}},"Load ",a.a.createElement(s.a,{icon:d.a}))))};function wn(){const e=Object(l.a)(["\nwidth: 30%;\n@media (max-width: 768px) {\n      width: 90%;\n  }\n"]);return wn=function(){return e},e}function kn(){const e=Object(l.a)(["\nwidth: 60%;\n@media (max-width: 768px) {\n      width: 90%;\n  }\n"]);return kn=function(){return e},e}function Sn(){const e=Object(l.a)(["\n  display:flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  min-height: 100vh;\n  font-family: ",";\n  background-color: lightblue;\n"]);return Sn=function(){return e},e}function Cn(){const e=Object(l.a)(["\n  justify-content: space-around;\n  width: 100%;\n  min-height: 100vh;\n  background-color: ",";\n  display:flex;\n  overflow-y:auto;\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return Cn=function(){return e},e}const An=u.b.div(Cn(),e=>e.theme.colors.backgroundColors.primary),zn=u.b.div(Sn(),e=>e.theme.fonts[0]),Nn=u.b.div(kn()),Pn=u.b.div(wn());function In(){return Object(r.useEffect)(()=>(pe(),()=>{console.log("----------UNMOUNT APP-----------")}),[]),a.a.createElement(L,null,a.a.createElement(zn,null,a.a.createElement(ln,null),a.a.createElement(An,null,a.a.createElement(Nn,null,a.a.createElement(jn,null),a.a.createElement(H,null)),a.a.createElement(Pn,null,a.a.createElement(Be,null)))))}const Rn=document.getElementById("root");c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O.a,{store:ie},a.a.createElement(In,null))),Rn)}},[[43,1,2]]]);
//# sourceMappingURL=main.b7efb0a2.chunk.js.map