(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{300:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var n=s(3),o=s(26),r=s(27),a=s(29),c=s(28),i=s(0),u=s.n(i),l=s(10),j=s(1),d=function(e){return function(t){Object(a.a)(i,t);var s=Object(c.a)(i);function i(){return Object(o.a)(this,i),s.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(n.a)({},this.props)):Object(j.jsx)(l.a,{to:"/login"})}}]),i}(u.a.Component)}},301:function(e,t,s){e.exports={profile:"Profile_profile__95lfI",header:"Profile_header__2ZBlC",content:"Profile_content__1ExoA",sidebar:"Profile_sidebar__3hpq4"}},302:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__1uvdQ",headImage:"ProfileInfo_headImage__2NaAv"}},303:function(e,t,s){e.exports={descriptionBlock:"DescriptionBlock_descriptionBlock__lems_",userImgContainer:"DescriptionBlock_userImgContainer__vZ6Oa",userInfo:"DescriptionBlock_userInfo__15jrz",userName:"DescriptionBlock_userName__2izm-",socialBlock:"DescriptionBlock_socialBlock__3JpEo"}},304:function(e,t,s){e.exports={post:"Post_post__2pD5w"}},305:function(e,t,s){e.exports={postHeader:"PostHeader_postHeader__SATF3",userImgContainer:"PostHeader_userImgContainer__AiQu-",postInfo:"PostHeader_postInfo__3R8fU",userNameContainer:"PostHeader_userNameContainer__1GEA-",postDataContainer:"PostHeader_postDataContainer__1WwSQ"}},306:function(e,t,s){e.exports={postContent:"PostContent_postContent__BTX6D",postImg:"PostContent_postImg__2iV94"}},307:function(e,t,s){e.exports={postFooter:"PostFooter_postFooter__1SLUP"}},308:function(e,t,s){e.exports={likeButton:"LikeButton_likeButton__2toX9",likeCount:"LikeButton_likeCount__1EdV2"}},309:function(e,t,s){e.exports={commentButton:"CommentButton_commentButton__1oZWM"}},310:function(e,t,s){e.exports={repostButton:"RepostButton_repostButton__n3jVC"}},311:function(e,t,s){e.exports={createPostContainer:"MyPosts_createPostContainer__3fLUw"}},312:function(e,t,s){e.exports={addPostContainer:"AddPostForm_addPostContainer__1XqlF",item:"AddPostForm_item__2xhSG"}},313:function(e,t,s){e.exports={trendItem:"TrendItem_trendItem__28fc8",itemNameContainer:"TrendItem_itemNameContainer__1Q8cM",itemCountContainer:"TrendItem_itemCountContainer__B_fsD"}},314:function(e,t,s){e.exports={profileSidebar:"ProfileSidebar_profileSidebar__1IwBF",textHeader:"ProfileSidebar_textHeader__2Oxbc"}},323:function(e,t,s){"use strict";s.r(t);var n=s(3),o=s(26),r=s(27),a=s(29),c=s(28),i=s(0),u=s(301),l=s.n(u),j=s(302),d=s.n(j),m=s(303),b=s.n(m),f=s(47),p=s(94),O=s(127),_=s(1),x=function(e){var t=Object(i.useState)(!1),s=Object(O.a)(t,2),n=s[0],o=s[1],r=Object(i.useState)(e.status),a=Object(O.a)(r,2),c=a[0],u=a[1];Object(i.useEffect)((function(){u(e.status)}),[e.status]);return Object(_.jsxs)("div",{children:[!n&&Object(_.jsx)("div",{children:Object(_.jsx)("span",{onDoubleClick:function(){o(!0)},children:e.status||"-----"})}),n&&Object(_.jsx)("div",{children:Object(_.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(c)},autoFocus:!0,value:c})})]})},h=function(e){return e.userProfile?Object(_.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(_.jsxs)("div",{className:b.a.userInfo,children:[Object(_.jsx)("div",{className:b.a.userImgContainer,children:Object(_.jsx)("img",{src:null!==e.userProfile.photos.small?e.userProfile.photos.small:p.a,alt:""})}),Object(_.jsxs)("div",{className:b.a.userName,children:[Object(_.jsx)("h3",{children:e.userProfile.fullName}),Object(_.jsx)(x,Object(n.a)({status:e.status},e))]})]}),Object(_.jsxs)("div",{className:b.a.socialBlock,children:[Object(_.jsx)("button",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}),Object(_.jsx)("button",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}),Object(_.jsx)("button",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})]}):Object(_.jsx)(f.a,{})},N=function(e){return Object(_.jsxs)("div",{className:d.a.profileInfo,children:[Object(_.jsx)("div",{className:d.a.headImageContainer,children:Object(_.jsx)("img",{className:d.a.headImage,src:"https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",alt:""})}),Object(_.jsx)(h,Object(n.a)(Object(n.a)({},e),{},{userProfile:e.userProfile}))]})},v=s(304),I=s.n(v),P=s(305),g=s.n(P),C=function(e){return Object(_.jsxs)("div",{className:g.a.postHeader,children:[Object(_.jsx)("div",{className:g.a.userImgContainer,children:Object(_.jsx)("img",{className:g.a.userImg,src:e.imgUrl,alt:"Not load"})}),Object(_.jsxs)("div",{className:g.a.postInfo,children:[Object(_.jsx)("div",{className:g.a.userNameContainer,children:Object(_.jsx)("a",{href:"#s",children:e.userName})}),Object(_.jsx)("div",{className:g.a.postDataContainer,children:Object(_.jsx)("a",{href:"#s",children:"14.05.2021"})})]})]})},B=s(306),k=s.n(B),S=function(e){return Object(_.jsxs)("div",{className:k.a.postContent,children:[Object(_.jsx)("div",{className:k.a.postImg,children:Object(_.jsx)("img",{src:e.postImage,alt:""})}),Object(_.jsx)("div",{className:k.a.postMessage,children:e.message})]})},D=s(307),w=s.n(D),A=s(308),F=s.n(A),H=function(){return Object(_.jsx)("button",{className:F.a.likeButton+" fa fa-heart-o"})},T=s(309),E=s.n(T),U=function(){return Object(_.jsx)("button",{className:E.a.commentButton+" fa fa-commenting-o"})},y=s(310),L=s.n(y),M=function(){return Object(_.jsx)("button",{className:L.a.repostButton+" fa fa-share"})},Q=function(){return Object(_.jsxs)("div",{className:w.a.postFooter,children:[Object(_.jsx)(H,{}),Object(_.jsx)(U,{}),Object(_.jsx)(M,{})]})},V=function(e){return Object(_.jsxs)("div",{className:I.a.post,children:[Object(_.jsx)(C,{imgUrl:e.userImg,userName:e.userName}),Object(_.jsx)(S,{message:e.message,postImage:e.postImage}),Object(_.jsx)(Q,{})]})},X=s(311),Z=s.n(X),G=i.memo((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:Z.a.posts,children:e.postsElements})})})),J=s(17),q=Object(J.b)((function(e){return{postsElements:e.profile.postsInfo.map((function(e){return Object(_.jsx)(V,{userImg:e.userImg,userName:e.userName,postData:"14.05.2021",message:e.message,postImage:e.postImage},e.id)}))}}),(function(e){return{}}))(G),z=s(55),R=s(312),W=s.n(R),K=s(125),Y=s(126),$=Object(Y.a)({form:"addPost"})((function(e){return Object(_.jsxs)("form",{className:W.a.addPostContainer,onSubmit:e.handleSubmit,children:[Object(_.jsx)(K.a,{className:W.a.item,placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",component:"textarea",name:"newPostText"}),Object(_.jsx)("button",{className:W.a.item,children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})})),ee=Object(J.b)((function(e){return{value:e.profile.newPostText}}),{addPost:z.a})((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)($,{onSubmit:function(t){e.addPost(t.newPostText),console.log(t.newPostText)}})})})),te=s(313),se=s.n(te),ne=function(e){return Object(_.jsxs)("div",{className:se.a.trendItem,children:[Object(_.jsx)("div",{className:se.a.itemNameContainer,children:Object(_.jsx)("a",{href:"/profile",children:e.name})}),Object(_.jsx)("div",{className:se.a.itemCountContainer,children:Object(_.jsx)("p",{children:"\u0423\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f: ".concat(e.mentionsCount)})})]})},oe=s(314),re=s.n(oe),ae=function(e){return Object(_.jsxs)("div",{className:re.a.profileSidebar,children:[Object(_.jsx)("div",{className:re.a.textHeader,children:Object(_.jsx)("h4",{children:"\u0422\u0440\u0435\u043d\u0434\u044b"})}),Object(_.jsx)("div",{className:re.a.items,children:e.trendsElements})]})},ce=Object(J.b)((function(e){return{trendsElements:e.profile.trendsInfo.map((function(e){return Object(_.jsx)(ne,{name:e.name,mentionsCount:e.mentionsCount},e.id)}))}}),(function(e){return{}}))(ae),ie=function(e){return Object(_.jsxs)("div",{className:l.a.profile,children:[Object(_.jsx)("div",{className:l.a.header,children:Object(_.jsx)(N,Object(n.a)({userProfile:e.userProfile},e))}),Object(_.jsxs)("div",{className:l.a.content,children:[Object(_.jsx)(ee,{}),Object(_.jsx)(q,{})]}),Object(_.jsx)("div",{className:l.a.sidebar,children:Object(_.jsx)(ce,{})})]})},ue=s(10),le=s(300),je=s(11),de=function(e){Object(a.a)(s,e);var t=Object(c.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(_.jsx)(ie,Object(n.a)(Object(n.a)({},this.props),{},{userProfile:this.props.userProfile}))}}]),s}(i.Component);t.default=Object(je.d)(Object(J.b)((function(e){return{userProfile:e.profile.userProfile,isAuth:e.auth.isAuth,authUserId:e.auth.userId,status:e.profile.status}}),{getProfile:z.c,getStatus:z.d,updateStatus:z.e}),ue.f,le.a)(de)}}]);
//# sourceMappingURL=3.e61a1e51.chunk.js.map