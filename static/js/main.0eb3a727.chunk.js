(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(135),s=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"8d625948-9dcf-4bd4-908a-b61b6acfe7e8"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getTotalUsersCount:function(){return s.get("/users").then((function(e){return e.data}))},followToUser:function(e){return s.post("/follow/".concat(e)).then((function(e){return e.data}))},unfollowToUser:function(e){return s.delete("/follow/".concat(e)).then((function(e){return e.data}))}},c={authMe:function(){return s.get("/auth/me").then((function(e){return e.data}))},loginUser:function(e,t,n){return s.post("/auth/login",{email:e,password:t,rememberMe:n})},logoutUser:function(){return s.post("/auth/logout").then((function(e){return e.data}))}},i={getProfile:function(e){return s.get("/profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return s.get("/profile/status/".concat(e))},updateStatus:function(e){return s.put("/profile/status",{status:e})}},u={getDialogs:function(){return s.get("/dialogs")},startDialog:function(e){return s.put("/dialogs/".concat(e))},getMessagesList:function(e){return s.get("/dialogs/".concat(e,"/messages"))},sendMessage:function(e,t){return s.post("/dialogs/".concat(e,"/messages"),{body:t})},deleteMessage:function(e){return s.delete("/dialogs/messages/".concat(e))}}},13:function(e,t,n){e.exports={navbar:"Navbar_navbar__246gH",item:"Navbar_item__QAxg8",active:"Navbar_active__2Tx17"}},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){e.exports={users:"Users_users__2g5Ov",selectedPage:"Users_selectedPage__3_tAT"}},136:function(e,t,n){e.exports={ldsRoller:"Preloader_ldsRoller__2V_bf"}},170:function(e,t,n){},171:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r,s=n(0),a=n.n(s),c=n(64),i=n.n(c),u=(n(170),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,322)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))}),o=n(26),l=n(27),f=n(29),d=n(28),p=(n(171),n(13)),b=n.n(p),j=n(18),g=n(17),m=n(1),h=Object(g.b)((function(e){return{authUserId:e.auth.userId}}),{})((function(e){return Object(m.jsxs)("nav",{className:b.a.navbar,children:[Object(m.jsx)(j.b,{to:"/profile",activeClassName:b.a.active,className:b.a.item,children:Object(m.jsx)("p",{className:b.a.itemLink+" fa fa-home",children:" \u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(m.jsx)(j.b,{to:"/messages",activeClassName:b.a.active,className:b.a.item,children:Object(m.jsx)("p",{className:b.a.itemLink+" fa fa-comments-o",children:" \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(m.jsx)(j.b,{to:"/users",activeClassName:b.a.active,className:b.a.item,children:Object(m.jsx)("p",{className:b.a.itemLink+" fa fa-user-circle",children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(m.jsx)(j.b,{to:"/news",activeClassName:b.a.active,className:b.a.item,children:Object(m.jsx)("p",{className:b.a.itemLink+" fa fa-newspaper-o",children:" \u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(m.jsx)(j.b,{to:"/music",activeClassName:b.a.active,className:b.a.item,children:Object(m.jsx)("p",{className:b.a.itemLink+" fa fa-music",children:" \u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(m.jsx)(j.b,{to:"/settings",activeClassName:b.a.active,className:b.a.item,children:Object(m.jsx)("p",{className:b.a.itemLink+" fa fa-gear",children:" \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(m.jsx)("hr",{})]})})),O=n(130),v=n.n(O),x=function(){return Object(m.jsx)("div",{className:v.a.news,children:"News"})},I=n(131),_=n.n(I),w=function(){return Object(m.jsx)("div",{className:_.a.music,children:"Music"})},y=n(132),N=n.n(y),C=function(){return Object(m.jsx)("div",{className:N.a.settings,children:"Settings"})},P=n(10),S=n(3),E=n(133),U=n.n(E),k=n(38),T=n.n(k),D=n(94),L=function(e){return Object(m.jsxs)("div",{className:T.a.userItem,children:[Object(m.jsx)("div",{className:T.a.userImageDiv,children:Object(m.jsx)("img",{alt:"No file",src:null!==e.photos.small?e.photos.small:D.a})}),Object(m.jsxs)("div",{className:T.a.userInfoDiv,children:[Object(m.jsx)("div",{className:T.a.userNameDiv,children:Object(m.jsx)(j.b,{to:"/profile/"+e.id,href:"#s",children:e.name})}),Object(m.jsx)("div",{className:T.a.userDescriptionDiv,children:Object(m.jsx)("p",{children:e.status||"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"})})]}),Object(m.jsx)("div",{className:T.a.subscribeButtonDiv,children:e.followed?Object(m.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.id})),onClick:function(){return t=e.id,void e.unfollow(t);var t},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439"}):Object(m.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.id})),onClick:function(){return t=e.id,void e.follow(t);var t},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f"})})]})},A=n(66),F=n(127),M=n(134),z=n.n(M),B=n(69),G=n.n(B),R=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(t/n),o=[],l=1;l<=u;l++)o.push(l);var f=Math.ceil(u/i),d=Object(s.useState)(1),p=Object(F.a)(d,2),b=p[0],j=p[1],g=(b-1)*i+1,h=b*i;return Object(m.jsxs)("div",{className:G.a.paginator,children:[b>1&&Object(m.jsx)("button",{onClick:function(){return j(b-1)},children:"PREV"}),o.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(m.jsx)("span",{className:z()(Object(A.a)({},G.a.selectedPage,r===e),G.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),f>b&&Object(m.jsx)("button",{onClick:function(){j(b+1)},children:"NEXT"})]})},q=function(e){return Object(m.jsxs)("div",{className:U.a.users,children:[Object(m.jsx)(R,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),Object(m.jsx)("div",{children:e.usersInfo.map((function(t){return Object(m.jsx)(L,Object(S.a)({status:t.status,id:t.id,name:t.name,photos:t.photos,followed:t.followed},e),t.id)}))})]})},X=n(7),K=n.n(X),Z=n(14),H=n(37),V=n(12),Q=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},Y="users/ADD-FRIEND",J="users/REMOVE-FRIEND",W="users/SET-USERS",$="users/SET-USERS-TOTAL-COUNT",ee="users/SET-CURRENT-PAGE",te="users/TOGGLE-IS-FETCHING",ne="users/TOGGLE-FOLLOWING-PROGRESS",re={usersInfo:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},se=function(e){return{type:Y,userId:e}},ae=function(e){return{type:J,userId:e}},ce=function(e){return{type:ee,currentPage:e}},ie=function(e){return{type:te,isFetching:e}},ue=function(e,t){return{type:ne,isFetching:e,userId:t}},oe=function(){var e=Object(Z.a)(K.a.mark((function e(t,n,r,s){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ue(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(ue(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(S.a)(Object(S.a)({},e),{},{usersInfo:Q(e.usersInfo,t.userId,"id",{followed:!0})});case J:return Object(S.a)(Object(S.a)({},e),{},{usersInfo:Q(e.usersInfo,t.userId,"id",{followed:!1})});case W:return Object(S.a)(Object(S.a)({},e),{},{usersInfo:Object(H.a)(t.users)});case $:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.usersCount});case ee:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case te:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case ne:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},fe=n(47),de=n(140),pe=Object(de.a)((function(e){return e.users.usersInfo}),(function(e){return e.filter((function(e){return!0}))})),be=function(e){return e.users.pageSize},je=function(e){return e.users.totalUsersCount},ge=function(e){return e.users.currentPage},me=function(e){return e.users.isFetching},he=function(e){return e.users.followingInProgress},Oe=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize),this.props.getTotalUsersCountFromAPI()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(q,Object(S.a)(Object(S.a)({},this.props),{},{onPageChanged:this.onPageChanged})),this.props.isFetching?Object(m.jsx)(fe.a,{}):null]})}}]),n}(a.a.Component),ve=Object(g.b)((function(e){return{usersInfo:pe(e),pageSize:be(e),totalUsersCount:je(e),currentPage:ge(e),isFetching:me(e),followingInProgress:he(e)}}),{follow:function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=V.d.followToUser.bind(V.d),t.next=3,oe(n,e,r,se);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=V.d.unfollowToUser.bind(V.d),t.next=3,oe(n,e,r,ae);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(Z.a)(K.a.mark((function n(r){var s;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ie(!0)),r(ce(e)),n.next=4,V.d.getUsers(e,t);case 4:s=n.sent,r((a=s.items,{type:W,users:a})),r(ie(!1));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},getTotalUsersCountFromAPI:function(){return function(){var e=Object(Z.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.d.getTotalUsersCount();case 2:n=e.sent,t((r=n.totalCount,{type:$,usersCount:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},setCurrentPage:ce})(Oe),xe=n(70),Ie=n.n(xe),_e=n(90),we=n.n(_e),ye=function(e){return Object(m.jsx)("div",{className:we.a.loginBlock,children:e.isAuth?Object(m.jsxs)(j.b,{to:"/profile",children:[e.login,Object(m.jsx)("button",{className:we.a.logoutButton,onClick:e.logoutUser,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(m.jsx)(j.b,{to:"/login",children:"Login"})})},Ne=function(e){return Object(m.jsxs)("header",{className:Ie.a.header,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{className:Ie.a.title,children:"ABOBA"})}),Object(m.jsx)(ye,Object(S.a)({className:Ie.a.loginBlock},e))]})},Ce=n(43),Pe="auth/SET-USER-DATA",Se={userId:null,email:null,login:null,isAuth:!1},Ee=function(e,t,n,r){return{type:Pe,data:{userId:e,email:t,login:n,isAuth:r}}},Ue=function(){return function(){var e=Object(Z.a)(K.a.mark((function e(t){var n,r,s,a,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.authMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.email,c=r.login,t(Ee(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(S.a)(Object(S.a)({},e),t.data);default:return e}},Te=n(55),De=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)(Ne,Object(S.a)({},this.props))}}]),n}(a.a.Component),Le=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId,userProfile:e.profile.userProfile}}),{getProfile:Te.c,logoutUser:function(){return function(){var e=Object(Z.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.logoutUser();case 2:0===e.sent.resultCode&&t(Ee(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(De),Ae=n(126),Fe=function(e){if(!e)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},Me=n(91),ze=n(52),Be=n.n(ze),Ge=n(125),Re=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,a=n&&r;return Object(m.jsxs)("div",{className:Be.a.formControl+" "+(a?Be.a.error:null),children:[Object(m.jsx)("div",{children:s}),a&&Object(m.jsx)("span",{children:r})]})},qe=function(e){var t=e.input,n=(e.meta,e.child,Object(Me.a)(e,["input","meta","child"]));return Object(m.jsx)(Re,Object(S.a)(Object(S.a)({},e),{},{children:Object(m.jsx)("input",Object(S.a)(Object(S.a)({},t),n))}))},Xe=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(m.jsxs)("div",{children:[Object(m.jsx)(Ge.a,Object(S.a)({placeholder:e,name:t,validate:n,component:r},s)),a]})},Ke=(r=50,function(e){if(e.length>r)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(r," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),Ze=Object(Ae.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(m.jsxs)("form",{onSubmit:t,children:[Xe("Email","email",[Fe,Ke],qe),Xe("\u041f\u0430\u0440\u043e\u043b\u044c","password",[Fe,Ke],qe,{type:"password"}),Xe(null,"rememberMe",[],qe,{type:"checkbox"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),n&&Object(m.jsx)("div",{className:Be.a.formSummaryError,children:n}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"\u0412\u043e\u0439\u0442\u0438"})})]})})),He=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"LOGIN"}),Object(m.jsx)(Ze,{onSubmit:function(t){e.loginUser(t.email,t.password,t.rememberMe)}})]})},Ve=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(m.jsx)(P.a,{to:"/profile"}):Object(m.jsx)("div",{children:Object(m.jsx)(He,Object(S.a)({},this.props))})}}]),n}(a.a.Component),Qe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUser:function(e,t,n){return function(){var r=Object(Z.a)(K.a.mark((function r(s){var a,c;return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,V.a.loginUser(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(Ue()):(c=a.data.messages.length>0?a.data.messages[0]:"\u041e\u0448\u0438\u0431\u043a\u0430",s(Object(Ce.b)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})(Ve),Ye="app/INITIALIZED_SUCCESS",Je={initialized:!1},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ye:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},$e=n(11),et=n(139),tt=n(95),nt={friendsInfo:[{id:1,name:"\u041c\u0430\u043a\u0441\u0438\u043c",imgUrl:"https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album"},{id:2,name:"\u0418\u0432\u0430\u043d",imgUrl:"https://vk.com/images/camera_200.png"},{id:3,name:"\u0414\u0435\u043d\u0438\u0441",imgUrl:"https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album"},{id:4,name:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439",imgUrl:"https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album"},{id:5,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",imgUrl:"https://sun9-12.userapi.com/impf/c849320/v849320227/1c9896/-WXxGlQ1818.jpg?size=450x600&quality=96&sign=92e2be87652a184ec61335ba95c92c8d&type=album"},{id:6,name:"\u0412\u0430\u043b\u0435\u0440\u0438\u044f",imgUrl:"https://sun9-61.userapi.com/impg/-Gzq6F_XfIUScPZ5X1yuk_KX_Tr1BMB4uBdo_w/MSpmQ-xE4hU.jpg?size=1280x1279&quality=96&sign=b2b9f20a34f7b3e18ab6e31649d0ebd0&type=album"}]},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt;return e},st=n(128),at=Object($e.c)({profile:Te.b,messages:tt.b,sidebar:rt,users:le,auth:ke,form:st.a,app:We}),ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$e.d,it=Object($e.e)(at,ct(Object($e.a)(et.a)));window.store=it;var ut=it,ot=a.a.lazy((function(){return n.e(3).then(n.bind(null,323))})),lt=a.a.lazy((function(){return n.e(4).then(n.bind(null,324))})),ft=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(Le,{}),Object(m.jsx)(h,{}),Object(m.jsx)("div",{className:"app-wrapper-content",children:Object(m.jsxs)(a.a.Suspense,{fallback:Object(m.jsx)(fe.a,{}),children:[Object(m.jsx)(P.b,{path:"/profile/:userId?",render:function(){return Object(m.jsx)(ot,{})}}),Object(m.jsx)(P.b,{path:"/messages",render:function(){return Object(m.jsx)(lt,{})}}),Object(m.jsx)(P.b,{path:"/users",render:function(){return Object(m.jsx)(ve,{})}}),Object(m.jsx)(P.b,{path:"/news",component:x}),Object(m.jsx)(P.b,{path:"/music",component:w}),Object(m.jsx)(P.b,{path:"/settings",component:C}),Object(m.jsx)(P.b,{path:"/login",render:function(){return Object(m.jsx)(Qe,{})}})]})})]}):Object(m.jsx)(fe.a,{})}}]),n}(a.a.Component),dt=Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Ue()).then((function(){e({type:Ye})}))}}})(ft),pt=function(e){return Object(m.jsx)(j.a,{children:Object(m.jsx)(g.a,{store:ut,children:Object(m.jsx)(dt,{})})})};i.a.render(Object(m.jsx)(pt,{}),document.getElementById("root")),u()},38:function(e,t,n){e.exports={userItem:"UserItem_userItem__2jKA8",userImageDiv:"UserItem_userImageDiv__cFh4N",userInfoDiv:"UserItem_userInfoDiv__2wNI_",userNameDiv:"UserItem_userNameDiv__2Mzfz",userDescriptionDiv:"UserItem_userDescriptionDiv__3vZZq",subscribeButtonDiv:"UserItem_subscribeButtonDiv__2L249"}},47:function(e,t,n){"use strict";var r=n(136),s=n.n(r),a=n(1);t.a=function(){return Object(a.jsxs)("div",{className:s.a.ldsRoller,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3th8G",error:"FormsControls_error__3rl0z",formSummaryError:"FormsControls_formSummaryError__2Ggj3"}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return m}));var r=n(7),s=n.n(r),a=n(14),c=n(37),i=n(3),u=n(12),o="profile/ADD-POST",l="profile/SET-USER-PROFILE",f="profile/SET_STATUS",d={postsInfo:[{id:1,userImg:"https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",userName:"\u041c\u0430\u043a\u0441\u0438\u043c \u0412\u0435\u0442\u043b\u0443\u0433\u0438\u043d",message:"\u041d\u0430 \u0441\u0441\u0434 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0433\u0440\u044b \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u0430\u043a \u0436\u0435 \u043a\u0430\u043a \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 , \u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0447\u0442\u043e\u0431 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0438\u043c\u0438 \u0431\u044b\u043b\u0430 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0430 \u043d\u0430 \u0436\u0435\u0441\u0442\u043a\u043e\u043c \u0432\u0430\u0436\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0444\u0430\u0439\u043b\u044b \u0447\u0442\u043e\u0431 \u043d\u0435 \u0437\u0430\u0431\u0438\u0432\u0430\u0442\u044c \u0441\u0441\u0434",postImage:"https://sun1.is74.userapi.com/impg/bxZj91ROk6XQ7TjDeLnyFjfqL21Ndbna8xO8oA/2I4InhKUC_Y.jpg?size=537x358&quality=96&sign=d93e1df50bd9a80ae2334156d1878cc2&type=album"},{id:2,userImg:"https://vk.com/images/camera_200.png",userName:"\u0418\u0432\u0430\u043d \u041d\u043e\u0432\u0438\u043a\u043e\u0432",message:"\u041f\u0440\u0438\u0432\u0447\u0435\u0434\u0435\u043b"},{id:3,userImg:"https://sun9-29.userapi.com/impg/4rwzV4E1IqPabM2dEhS9RlTLI_GXSgFgt11x0g/eL3XT3CfxGg.jpg?size=600x778&quality=96&sign=b87581f4de8c35ce52adbb32f5a2a0e2&type=album",userName:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439 \u0413\u043b\u0430\u0437\u044b\u0440\u0438\u043d",message:"\u0441\u0443\u043a\u0430 \u043a\u0430\u043a \u043f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044c \u0432 \u0432\u043e\u0440\u043b\u0434 \u0435\u0434\u0438\u0442 \u0435\u0441\u043b\u0438 \u044f \u043d\u0435 \u0437\u043d\u0430\u044e \u0433\u0440\u0430\u0434\u0443\u0441\u044b"},{id:4,userImg:"https://sun9-61.userapi.com/impg/KUlL2nnqJOZNF0tLnUVQZe-AfecK0CgBgEaLEw/csFRNfsfgGs.jpg?size=543x1080&quality=96&sign=cbe68261ce14bd9291d67127a6df960e&type=album",userName:"\u0414\u0435\u043d\u0438\u0441 \u0414\u0430\u043d",message:"\u0435\u0441\u043b\u0438 \u0448\u043e \u044f \u0431\u0435\u0441\u0435\u0434\u0443 \u043d\u0435 \u0447\u0438\u0442\u0430\u043b, \u0442\u0430\u043c \u0432\u043e\u043f\u0440\u043e\u0441 \u0448\u043e \u043b\u0443\u0447\u0448\u0435 \u0441\u0441\u0434 \u0438\u043b\u0438 \u0445\u0434\u0434, \u0447\u0442\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0435\u0441\u043b\u0438 \u044f \u0441\u0447\u0438\u0442\u0430\u044e \u0447\u0442\u043e \u043e\u0434\u0438\u043d \u043f\u043e\u0434 \u043e\u0434\u043d\u043e \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u043e\u0434 \u0434\u0440\u0443\u0433\u043e\u0435"},{id:5,userImg:"https://sun9-42.userapi.com/impg/c858532/v858532203/10b1e2/FgqHOcY_PiM.jpg?size=1080x1080&quality=96&sign=49365d7493b4c4c5512ce04ee0d26676&type=album",userName:"\u041c\u0430\u043a\u0441\u0438\u043c \u0412\u0435\u0442\u043b\u0443\u0433\u0438\u043d",message:"",postImage:"https://sun9-72.userapi.com/impg/7PMvbH4sOpKr1GIM2KFXW6ENhj3r_y3Y7wK6RA/HNrOqetXMLE.jpg?size=1080x531&quality=96&sign=3471eb513aaaa9f2726bdbcd7cf9e74f&type=album"}],trendsInfo:[{name:"#ABOBA",mentionsCount:7,id:1},{name:"#\u041a\u043e\u043d\u0435\u0446\u0411\u0438\u0442\u043a\u043e\u0438\u043d\u0430",mentionsCount:1e3,id:2},{name:"#\u041d\u043e\u0432\u0430\u044f\u0421\u043e\u0446\u0441\u0435\u0442\u044c",mentionsCount:153,id:3},{name:"#\u041f\u0440\u0438\u0432\u0447\u0451\u0434\u0435\u043b",mentionsCount:15,id:4}],userProfile:null,status:""},p=function(e){return{type:o,newPostText:e}},b=function(e){return{type:f,status:e}},j=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:l,userProfile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:5,message:t.newPostText,likesCount:0,userImg:"https://sun9-12.userapi.com/impf/c849320/v849320227/1c9896/-WXxGlQ1818.jpg?size=450x600&quality=96&sign=92e2be87652a184ec61335ba95c92c8d&type=album",userName:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430 \u041c\u0430\u0440\u043a\u043e\u0432\u0430"};return Object(i.a)(Object(i.a)({},e),{},{postsInfo:[n].concat(Object(c.a)(e.postsInfo))});case l:return Object(i.a)(Object(i.a)({},e),{},{userProfile:t.userProfile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__O1EkM",pageNumber:"Paginator_pageNumber__70WMB",selectedPage:"Paginator_selectedPage__2gfhh"}},70:function(e,t,n){e.exports={header:"Header_header__1k6Zc",title:"Header_title__2KZIU"}},90:function(e,t,n){e.exports={loginBlock:"LoginBlock_loginBlock__1v4IY",logoutButton:"LoginBlock_logoutButton__x-CFb",userPhotoBlock:"LoginBlock_userPhotoBlock__1JaVD"}},94:function(e,t,n){"use strict";t.a=n.p+"static/media/user.77e62bce.jpg"},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"g",(function(){return g})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return x}));var r=n(7),s=n.n(r),a=n(14),c=n(37),i=n(3),u=n(12),o="messages/ADD-MESSAGE",l="messages/SET-DIALOGS",f="messages/SET-MESSAGES",d="messages/SET_CURRENT_DIALOG",p="messages/DELETE_MESSAGE",b={messages:[],dialogs:[],currentDialogId:0},j=function(e,t){return{type:o,newMessageText:e,newMessageId:t}},g=function(e){return{type:d,dialogId:e}},m=function(e){return{type:p,messageId:e}},h=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getDialogs();case 2:n=e.sent,t((r=n.data,{type:l,dialogs:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getMessagesList(e);case 2:r=t.sent,n((s=r.data.items,{type:f,messages:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.sendMessage(e,t);case 2:a=n.sent,r(j(a.data.data.message.body,a.data.data.message.id));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.deleteMessage(e);case 2:n(m(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:t.newMessageId,body:t.newMessageText,photo:"https://vk.com/images/camera_200.png",senderName:"Krams"};return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(c.a)(e.messages),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{dialogs:t.dialogs});case f:return Object(i.a)(Object(i.a)({},e),{},{messages:t.messages});case d:return Object(i.a)(Object(i.a)({},e),{},{currentDialogId:t.dialogId});case p:return Object(i.a)(Object(i.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.messageId}))});default:return e}}}},[[299,1,2]]]);
//# sourceMappingURL=main.0eb3a727.chunk.js.map