(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{301:function(e,s,t){"use strict";t.d(s,"a",(function(){return l}));var a=t(3),n=t(26),i=t(27),r=t(29),c=t(28),o=t(1),d=t.n(o),g=t(11),u=t(0),l=function(e){return function(s){Object(r.a)(o,s);var t=Object(c.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(a.a)({},this.props)):Object(u.jsx)(g.a,{to:"/login"})}}]),o}(d.a.Component)}},316:function(e,s,t){e.exports={messages:"MessagesPage_messages__d6u2H"}},317:function(e,s,t){e.exports={chat:"Chat_chat__1Zukb"}},318:function(e,s,t){e.exports={addMessage:"AddMessageForm_addMessage__2eiNl",textareaContainer:"AddMessageForm_textareaContainer__3Ar2O",buttonContainer:"AddMessageForm_buttonContainer__3gCzg"}},319:function(e,s,t){e.exports={messagesContainer:"Messages_messagesContainer__219ZV"}},320:function(e,s,t){e.exports={messageContainer:"Message_messageContainer__14acA",isViewed:"Message_isViewed__1ThOF",messageContent:"Message_messageContent__tLl5g",userName:"Message_userName__T2v-u",messageText:"Message_messageText__1SnN8",userImageContainer:"Message_userImageContainer__3bKfL"}},321:function(e,s,t){e.exports={dialogsList:"DialogsList_dialogsList__WS0CS"}},322:function(e,s,t){e.exports={dialogItem:"DialogItem_dialogItem__iom6v",dialogItemActive:"DialogItem_dialogItemActive__3uR7p",userImg:"DialogItem_userImg__35uhN",userName:"DialogItem_userName__1ozeE"}},325:function(e,s,t){"use strict";t.r(s);var a=t(26),n=t(27),i=t(29),r=t(28),c=t(316),o=t.n(c),d=t(317),g=t.n(d),u=t(1),l=t.n(u),m=t(97),j=t(17),b=t(318),p=t.n(b),h=t(91),O=t(128),x=t(0),_=Object(O.a)({form:"addMessage"})((function(e){return Object(x.jsxs)("form",{className:p.a.addMessage,onSubmit:e.handleSubmit,children:[Object(x.jsx)("div",{className:p.a.textareaContainer,children:Object(x.jsx)(h.a,{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",component:"textarea",name:"newMessageText"})}),Object(x.jsx)("div",{className:p.a.buttonContainer,children:Object(x.jsx)("button",{className:"fa fa-paper-plane",children:" \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),f=t(45),M=Object(j.b)((function(e){return{value:e.messages.newMessageText,currentDialogId:e.messages.currentDialogId}}),{addMessage:m.a,sendMessage:m.f})((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(_,{onSubmit:function(s,t){e.sendMessage(e.currentDialogId,s.newMessageText),t(Object(f.a)("addMessage"))}})})})),v=t(319),N=t.n(v),C=t(320),I=t.n(C),D=t(57),w=function(e){return Object(x.jsxs)("div",{className:"".concat(I.a.messageContainer," ").concat(e.isViewed?I.a.isViewed:null),children:[Object(x.jsx)("div",{className:I.a.userImageContainer,children:e.photo?Object(x.jsx)("img",{src:e.photo,alt:"Not load"}):Object(x.jsx)("img",{src:D.a,alt:"Not load"})}),Object(x.jsxs)("div",{className:I.a.messageContent,children:[Object(x.jsx)("div",{className:I.a.userName,children:Object(x.jsx)("a",{href:"#s",children:e.senderName})}),Object(x.jsx)("div",{className:I.a.messageText,children:Object(x.jsx)("p",{children:e.messageText})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:function(){e.deleteMessage(e.id)},children:"Delete"})})]})},k=function(e){return Object(x.jsx)("div",{className:N.a.messagesContainer,children:e.messages.map((function(s){return Object(x.jsx)(w,{deleteMessage:e.deleteMessage,senderName:s.senderName,messageText:s.body,id:s.id,isViewed:s.viewed},s.id)}))})},A=t(13),T=t(11),y=function(e){Object(i.a)(t,e);var s=Object(r.a)(t);function t(){return Object(a.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidUpdate",value:function(e,s,t){this.props.currentDialogId!==e.currentDialogId&&this.props.getMessages(this.props.currentDialogId)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:g.a.chat,children:[Object(x.jsx)(k,{messages:this.props.messages,deleteMessage:this.props.deleteMessage}),Object(x.jsx)("div",{className:g.a.textareaContainer,children:Object(x.jsx)(M,{})})]})}}]),t}(l.a.Component),L=Object(A.d)(T.f)(y),S=t(301),V=t(321),F=t.n(V),U=t(322),z=t.n(U),J=t(18),Z=function(e){return Object(x.jsxs)(J.b,{to:"/messages/"+e.id,activeClassName:z.a.dialogItemActive,className:z.a.dialogItem,onClick:function(){e.setCurrentDialogId(e.id)},children:[Object(x.jsx)("div",{className:z.a.userImg,children:e.photo?Object(x.jsx)("img",{src:e.photo,alt:"User"}):Object(x.jsx)("img",{src:D.a,alt:"User"})}),Object(x.jsx)("div",{className:z.a.userName,children:Object(x.jsx)("p",{children:e.userName})})]})},E=function(e){return Object(x.jsx)("div",{className:F.a.dialogsList,children:e.dialogs.map((function(s){return Object(x.jsx)(Z,{setCurrentDialogId:e.setCurrentDialogId,id:s.id,userName:s.userName,photo:s.photos.small},s.id)}))})},H=function(e){Object(i.a)(t,e);var s=Object(r.a)(t);function t(){return Object(a.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.getDialogs()}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:o.a.messages,children:[Object(x.jsx)(E,{dialogs:this.props.dialogs,getMessages:this.props.getMessages,setCurrentDialogId:this.props.setCurrentDialogId}),Object(x.jsx)(T.b,{path:"/messages/:userId?",render:function(){return Object(x.jsx)(L,{messages:e.props.messages,currentDialogId:e.props.currentDialogId,getMessages:e.props.getMessages,deleteMessage:e.props.deleteMessage})}})]})}}]),t}(u.Component);s.default=Object(A.d)(Object(j.b)((function(e){return{isAuth:e.auth.isAuth,dialogs:e.messages.dialogs,messages:e.messages.messages,currentDialogId:e.messages.currentDialogId}}),{getDialogs:m.d,getMessages:m.e,setCurrentDialogId:m.g,deleteMessage:m.c}),S.a)(H)}}]);
//# sourceMappingURL=4.0a42cb5d.chunk.js.map