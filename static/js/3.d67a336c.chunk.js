(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{301:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var n=s(3),r=s(27),c=s(28),o=s(30),i=s(29),a=s(1),l=s.n(a),j=s(13),u=s(0),d=function(e){return function(t){Object(o.a)(a,t);var s=Object(i.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(n.a)({},this.props)):Object(u.jsx)(j.a,{to:"/login"})}}]),a}(l.a.Component)}},302:function(e,t,s){e.exports={descriptionBlock:"DescriptionBlock_descriptionBlock__lems_",userImgContainer:"DescriptionBlock_userImgContainer__vZ6Oa",userInfo:"DescriptionBlock_userInfo__15jrz",userName:"DescriptionBlock_userName__2izm-",socialBlock:"DescriptionBlock_socialBlock__3JpEo",customFileUpload:"DescriptionBlock_customFileUpload__1dtvk",contact:"DescriptionBlock_contact__3zmUB"}},303:function(e,t,s){e.exports={profile:"Profile_profile__95lfI",header:"Profile_header__2ZBlC",content:"Profile_content__1ExoA",sidebar:"Profile_sidebar__3hpq4"}},304:function(e,t,s){},305:function(e,t,s){e.exports={post:"Post_post__2pD5w"}},306:function(e,t,s){e.exports={postHeader:"PostHeader_postHeader__SATF3",userImgContainer:"PostHeader_userImgContainer__AiQu-",postInfo:"PostHeader_postInfo__3R8fU",userNameContainer:"PostHeader_userNameContainer__1GEA-",postDataContainer:"PostHeader_postDataContainer__1WwSQ"}},307:function(e,t,s){e.exports={postContent:"PostContent_postContent__BTX6D",postImg:"PostContent_postImg__2iV94"}},308:function(e,t,s){e.exports={postFooter:"PostFooter_postFooter__1SLUP"}},309:function(e,t,s){e.exports={likeButton:"LikeButton_likeButton__2toX9",likeCount:"LikeButton_likeCount__1EdV2"}},310:function(e,t,s){e.exports={commentButton:"CommentButton_commentButton__1oZWM"}},311:function(e,t,s){e.exports={repostButton:"RepostButton_repostButton__n3jVC"}},312:function(e,t,s){e.exports={createPostContainer:"MyPosts_createPostContainer__3fLUw"}},313:function(e,t,s){e.exports={addPostContainer:"AddPostForm_addPostContainer__1XqlF",item:"AddPostForm_item__2xhSG"}},314:function(e,t,s){e.exports={trendItem:"TrendItem_trendItem__28fc8",itemNameContainer:"TrendItem_itemNameContainer__1Q8cM",itemCountContainer:"TrendItem_itemCountContainer__B_fsD"}},315:function(e,t,s){e.exports={profileSidebar:"ProfileSidebar_profileSidebar__1IwBF",textHeader:"ProfileSidebar_textHeader__2Oxbc"}},324:function(e,t,s){"use strict";s.r(t);var n=s(3),r=s(27),c=s(28),o=s(30),i=s(29),a=s(1),l=s(303),j=s.n(l),u=s(304),d=s.n(u),b=s(98),m=s(302),f=s.n(m),O=s(49),p=s(57),h=s(0),x=function(e){var t=Object(a.useState)(!1),s=Object(b.a)(t,2),n=s[0],r=s[1],c=Object(a.useState)(e.status),o=Object(b.a)(c,2),i=o[0],l=o[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return Object(h.jsxs)("div",{children:[!n&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"-----"})}),n&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){r(!1),e.updateStatus(i)},autoFocus:!0,value:i})})]})},_=s(128),v=s(26),P=s(50),N=s.n(P),g=Object(_.a)({form:"edit-profile"})((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),e.error&&Object(h.jsx)("div",{className:N.a.formSummaryError,children:e.error}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u0418\u043c\u044f: "}),Object(v.c)("\u0418\u043c\u044f","fullName",[],v.a)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u043e\u0432:"})," ",Object(v.c)("\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u043e\u0432","lookingForAJobDescription",[],v.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",Object(v.c)("\u041e\u0431\u043e \u043c\u043d\u0435","aboutMe",[],v.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: "}),Object.keys(e.userProfile.contacts).map((function(e){return Object(h.jsxs)("div",{className:f.a.contact,children:[Object(h.jsxs)("b",{children:[e,":"]}),Object(v.c)(e,"contacts."+e,[],v.a)]})}))]})]})]})})})),C=function(e){return Object(h.jsxs)("div",{children:[e.isOwner&&Object(h.jsx)("button",{onClick:e.activateEditMode,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u0418\u043c\u044f: "}),e.userProfile.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",e.userProfile.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"]}),e.userProfile.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u043e\u0432:"})," ",e.userProfile.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",e.userProfile.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: "}),Object.keys(e.userProfile.contacts).map((function(t){return Object(h.jsx)(I,{contactTitle:t,contactValue:e.userProfile.contacts[t]},t)}))]})]})]})},I=function(e){var t=e.contactTitle,s=e.contactValue;return Object(h.jsxs)("div",{className:f.a.contact,children:[Object(h.jsx)("b",{children:t})," : ",s]})},k=function(e){var t=Object(a.useState)(!1),s=Object(b.a)(t,2),r=s[0],c=s[1];if(!e.userProfile)return Object(h.jsx)(O.a,{});return Object(h.jsxs)("div",{className:f.a.descriptionBlock,children:[Object(h.jsxs)("div",{className:f.a.userInfo,children:[e.isOwner?Object(h.jsx)("label",{className:f.a.customFileUpload,children:Object(h.jsxs)("div",{className:f.a.userImgContainer,children:[Object(h.jsx)("img",{src:null!==e.userProfile.photos.small?e.userProfile.photos.small:p.a,alt:""}),Object(h.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]})}):Object(h.jsx)("div",{className:f.a.userImgContainer,children:Object(h.jsx)("img",{src:null!==e.userProfile.photos.small?e.userProfile.photos.small:p.a,alt:""})}),Object(h.jsxs)("div",{className:f.a.userName,children:[Object(h.jsx)("h3",{children:e.userProfile.fullName}),Object(h.jsx)(x,Object(n.a)({status:e.status},e)),r?Object(h.jsx)(g,{initialValues:e.userProfile,userProfile:e.userProfile,onSubmit:function(t){e.saveProfile(t).then((function(){c(!1)}))}}):Object(h.jsx)(C,Object(n.a)(Object(n.a)({},e),{},{activateEditMode:function(){c(!0)}}))]})]}),Object(h.jsx)("div",{className:f.a.socialBlock})]})},B=function(e){return Object(h.jsx)("div",{className:d.a.profileInfo,children:Object(h.jsx)(k,Object(n.a)(Object(n.a)({},e),{},{userProfile:e.userProfile}))})},S=s(305),D=s.n(S),F=s(306),w=s.n(F),A=function(e){return Object(h.jsxs)("div",{className:w.a.postHeader,children:[Object(h.jsx)("div",{className:w.a.userImgContainer,children:Object(h.jsx)("img",{className:w.a.userImg,src:e.imgUrl,alt:"Not load"})}),Object(h.jsxs)("div",{className:w.a.postInfo,children:[Object(h.jsx)("div",{className:w.a.userNameContainer,children:Object(h.jsx)("a",{href:"#s",children:e.userName})}),Object(h.jsx)("div",{className:w.a.postDataContainer,children:Object(h.jsx)("a",{href:"#s",children:"14.05.2021"})})]})]})},y=s(307),E=s.n(y),T=function(e){return Object(h.jsxs)("div",{className:E.a.postContent,children:[Object(h.jsx)("div",{className:E.a.postImg,children:Object(h.jsx)("img",{src:e.postImage,alt:""})}),Object(h.jsx)("div",{className:E.a.postMessage,children:e.message})]})},U=s(308),H=s.n(U),M=s(309),J=s.n(M),V=function(){return Object(h.jsx)("button",{className:J.a.likeButton+" fa fa-heart-o"})},L=s(310),z=s.n(L),Q=function(){return Object(h.jsx)("button",{className:z.a.commentButton+" fa fa-commenting-o"})},X=s(311),Z=s.n(X),q=function(){return Object(h.jsx)("button",{className:Z.a.repostButton+" fa fa-share"})},G=function(){return Object(h.jsxs)("div",{className:H.a.postFooter,children:[Object(h.jsx)(V,{}),Object(h.jsx)(Q,{}),Object(h.jsx)(q,{})]})},R=function(e){return Object(h.jsxs)("div",{className:D.a.post,children:[Object(h.jsx)(A,{imgUrl:e.userImg,userName:e.userName}),Object(h.jsx)(T,{message:e.message,postImage:e.postImage}),Object(h.jsx)(G,{})]})},W=s(312),K=s.n(W),Y=a.memo((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:K.a.posts,children:e.postsElements})})})),$=s(17),ee=Object($.b)((function(e){return{postsElements:e.profile.postsInfo.map((function(e){return Object(h.jsx)(R,{userImg:e.userImg,userName:e.userName,postData:"14.05.2021",message:e.message,postImage:e.postImage},e.id)}))}}),(function(e){return{}}))(Y),te=s(58),se=s(313),ne=s.n(se),re=s(91),ce=Object(_.a)({form:"addPost"})((function(e){return Object(h.jsxs)("form",{className:ne.a.addPostContainer,onSubmit:e.handleSubmit,children:[Object(h.jsx)(re.a,{className:ne.a.item,placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",component:"textarea",name:"newPostText"}),Object(h.jsx)("button",{className:ne.a.item,children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})})),oe=Object($.b)((function(e){return{value:e.profile.newPostText}}),{addPost:te.a})((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(ce,{onSubmit:function(t){e.addPost(t.newPostText),console.log(t.newPostText)}})})})),ie=s(314),ae=s.n(ie),le=function(e){return Object(h.jsxs)("div",{className:ae.a.trendItem,children:[Object(h.jsx)("div",{className:ae.a.itemNameContainer,children:Object(h.jsx)("a",{href:"/profile",children:e.name})}),Object(h.jsx)("div",{className:ae.a.itemCountContainer,children:Object(h.jsx)("p",{children:"\u0423\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f: ".concat(e.mentionsCount)})})]})},je=s(315),ue=s.n(je),de=function(e){return Object(h.jsxs)("div",{className:ue.a.profileSidebar,children:[Object(h.jsx)("div",{className:ue.a.textHeader,children:Object(h.jsx)("h4",{children:"\u0422\u0440\u0435\u043d\u0434\u044b"})}),Object(h.jsx)("div",{className:ue.a.items,children:e.trendsElements})]})},be=Object($.b)((function(e){return{trendsElements:e.profile.trendsInfo.map((function(e){return Object(h.jsx)(le,{name:e.name,mentionsCount:e.mentionsCount},e.id)}))}}),(function(e){return{}}))(de),me=function(e){return Object(h.jsxs)("div",{className:j.a.profile,children:[Object(h.jsx)("div",{className:j.a.header,children:Object(h.jsx)(B,Object(n.a)({userProfile:e.userProfile},e))}),Object(h.jsxs)("div",{className:j.a.content,children:[Object(h.jsx)(oe,{}),Object(h.jsx)(ee,{})]}),Object(h.jsx)("div",{className:j.a.sidebar,children:Object(h.jsx)(be,{})})]})},fe=s(13),Oe=s(301),pe=s(14),he=function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(me,Object(n.a)(Object(n.a)({},this.props),{},{userProfile:this.props.userProfile,isOwner:!this.props.match.params.userId}))}}]),s}(a.Component);t.default=Object(pe.d)(Object($.b)((function(e){return{userProfile:e.profile.userProfile,isAuth:e.auth.isAuth,authUserId:e.auth.userId,status:e.profile.status}}),{getProfile:te.c,getStatus:te.d,updateStatus:te.g,savePhoto:te.e,saveProfile:te.f}),fe.f,Oe.a)(he)}}]);
//# sourceMappingURL=3.d67a336c.chunk.js.map