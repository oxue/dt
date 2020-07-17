if (self.CavalryLogger) { CavalryLogger.start_js(["LeexX"]); }

__d("MWChatEventHandlers.bs",["bs_curry","React","useCometPressableEventHandlers"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.handler;var c=b("useCometPressableEventHandlers")({}),d=c[3];return g.createElement("div",{ref:c[0],onKeyDown:d.onKeyDown,onFocus:d.onFocus,onBlur:d.onBlur,onClick:d.onClick,onDragStart:d.onDragStart,onMouseDown:d.onMouseDown,onMouseEnter:d.onMouseEnter,onMouseLeave:d.onMouseLeave,onMouseUp:d.onMouseUp,onTouchEnd:d.onTouchEnd,onTouchMove:d.onTouchMove,onTouchStart:d.onTouchStart},b("bs_curry")._1(a,c[2]))}c=a;f.make=c}),null);
__d("MWChatAdminItem.bs",["React","stylex","bs_belt_Option","MWXMAComponent.bs","MWChatTextTransform.bs","CometTextWithEntities.react"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi",paddingTop:"fdg1wqfs",paddingBottom:"ae35evdt",paddingStart:"lt9micmv",paddingEnd:"gl4o1x5y"},content:{maxWidth:"f2fs36ck",fontSize:"r9r71o1u",lineHeight:"eagtllmd",color:"pipptul6",textAlign:"oqcyycmt",marginTop:"kvgmc6g5",marginBottom:"oygrvhab",marginStart:"f9o22wc5",marginEnd:"ad2k81qe"},xma:{marginTop:"tr9rh885"}};function a(a){var c=a.content,d=a.managePageMessagesLink;a=a.dispatch;var e;switch(c.tag|0){case 0:c=c[2];if(c.tag){var f=c[0];e=f.tag===7?h.jsxs(h.Fragment,{children:[h.jsx(b("CometTextWithEntities.react"),{text:b("bs_belt_Option").mapWithDefault(c[1],"",function(a){return a.text}),transforms:[b("MWChatTextTransform.bs").emoticonTransform,b("MWChatTextTransform.bs").emojiTransform]}),h.jsx("div",{children:h.jsx(b("MWXMAComponent.bs").make,{xma:f[0],first:!0,last:!0,outgoing:!0,dispatch:a}),className:(g||(g=b("stylex")))(i.xma)})]}):null}else e=h.jsxs(h.Fragment,{children:[h.jsx(b("CometTextWithEntities.react"),{text:c[0].text,transforms:[b("MWChatTextTransform.bs").emoticonTransform,b("MWChatTextTransform.bs").emojiTransform]}),d]});break;case 1:case 2:e=null;break}return h.jsx("div",{children:h.jsx("div",{children:e,className:(g||(g=b("stylex")))(i.content)}),className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatStory.bs",["fbt","React","stylex","bs_belt_Option","bs_caml_option","CometPressable.react","XCometStoriesControllerRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j={imageWrap:{position:"l9j0dhe7",minWidth:"hpfvmrgz"},originalImage:{maxWidth:"d2edcug0",maxHeight:"iko8p5ub",verticalAlign:"sf5mxxl7",borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomStartRadius:"qmr60zad",borderBottomEndRadius:"jinzq4gt",boxShadow:"hu0ub5uo",borderTop:"opwvks06",borderEnd:"hop1g133",borderBottom:"linmgsc8",borderStart:"t63ysoy8"}};function a(a){var c=a.storyID;a=a.previewUrl;if(c!==void 0){c=window.btoa("S:_ISC:"+c);c=b("XCometStoriesControllerRouteBuilder").buildURL({card_id:c,view_single:!0})}else c=void 0;a={"aria-label":g._("View Story"),overlayDisabled:!0,children:i.jsx("img",{className:(h||(h=b("stylex")))(j.originalImage),src:a})};c=b("bs_belt_Option").map(c,function(a){return{url:a}});c!==void 0&&(a.linkProps=b("bs_caml_option").valFromOption(c));return i.jsx("div",{children:i.jsx(b("CometPressable.react"),a),className:h(j.imageWrap)})}c=a;f.styles=j;f.make=c}),null);
__d("MWChatReplyBubble.bs",["React","MWTheme.bs","MWChatColors.bs","MWChatBubbleBAF.bs","MWChatBubbleSolid.bs"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.pos,d=a.replyToOther,e=a.outgoing;a=a.content;var f=b("MWTheme.bs").useTheme(0);if(f.tag){if(!d)return g.jsx(b("MWChatBubbleBAF.bs").make,{pos:c,colors:f[0].colors.map(function(a){return b("MWTheme.bs").lighten(void 0,a)}),content:a,first:!0,last:!1,outgoing:e,hasRepliedToMessage:!0,xstyle:b("MWChatColors.bs").styles.replyToOriginal})}else if(!d)return g.jsx(b("MWChatBubbleSolid.bs").make,{color:b("MWTheme.bs").lighten(void 0,f[0].color),content:a,first:!0,last:!1,hasRepliedToMessage:!0,outgoing:e,xstyle:b("MWChatColors.bs").styles.replyToOriginal});return g.jsx(b("MWChatBubbleSolid.bs").make,{content:a,first:!0,last:!1,hasRepliedToMessage:!0,outgoing:e,xstyle:b("MWChatColors.bs").styles.replyToOriginal})}c=a;f.make=c}),null);
__d("MWChatAttachmentReplyBubble.bs",["ix","fbt","React","fbicon","stylex","TetraIcon.react","MWChatReplyBubble.bs"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React"),k={message:{fontStyle:"fmqa7x8m",fontSize:"e9vueds3",paddingBottom:"osnr6wyh"},icon:{marginStart:"h676nmdw"}};function a(a){var c=a.pos,d=a.replyToOther;a=a.outgoing;var e=j.jsxs("div",{children:[j.jsx("span",{children:h._("Attachment")}),j.jsx("span",{children:j.jsx(b("TetraIcon.react"),{icon:b("fbicon")._(g("537728"),12),color:"secondary"}),className:(i||(i=b("stylex")))(k.icon)})],className:i(k.message)});return j.jsx(b("MWChatReplyBubble.bs").make,{pos:c,replyToOther:d,outgoing:a,content:e})}c=a;f.styles=k;f.make=c}),null);
__d("MWChatIncomingMessageReplyToDefault.bs",["React","stylex","MWChatIncomingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi",paddingTop:"jwdofwj8"},originalRow:{backgroundColor:"g5ia77u1",position:"l9j0dhe7",marginBottom:"enqfppq2"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},originalRoot:{display:"j83agx80"},originalSpacer:{flexBasis:"ir1wk9f7",flexGrow:"buofh1pr",flexShrink:"pfnyh3mw"}};function a(a){var c=a.response,d=a.dispatch,e=a.hovered,f=a.replied;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsx("div",{children:h.jsxs("div",{children:[f,h.jsx("div",{className:(g||(g=b("stylex")))(i.originalSpacer)})],className:g(i.originalRoot)}),className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatIncomingMessageRow.bs").make,{content:c,first:!0,last:!0,hasRepliedToMessage:!0,dispatch:d,hovered:e,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatIncomingMessageReplyToAttachment.bs",["React","MWChatAttachmentReplyBubble.bs","MWChatIncomingMessageReplyToDefault.bs"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.pos,d=a.response,e=a.dispatch,f=a.replyToOther,h=a.hovered;a=a.buildSharedMediaViewerURL;return g.jsx(b("MWChatIncomingMessageReplyToDefault.bs").make,{response:d,dispatch:e,hovered:h,replied:g.jsx(b("MWChatAttachmentReplyBubble.bs").make,{pos:c,replyToOther:f,outgoing:!1}),buildSharedMediaViewerURL:a})}c=a;f.make=c}),null);
__d("MWChatIncomingMessageReplyToPhoto.bs",["React","stylex","MWChatIncomingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi",paddingTop:"jwdofwj8"},originalRow:{position:"l9j0dhe7",display:"j83agx80",alignItems:"bp9cbjyn",height:"idiwt2bm",minWidth:"hpfvmrgz"},responseRow:{position:"l9j0dhe7",marginTop:"sxpk6l6v"},originalImage:{maxWidth:"d2edcug0",maxHeight:"iko8p5ub",verticalAlign:"sf5mxxl7",borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomStartRadius:"qmr60zad",borderBottomEndRadius:"inkptoze",boxShadow:"hu0ub5uo",borderTop:"opwvks06",borderEnd:"hop1g133",borderBottom:"linmgsc8",borderStart:"t63ysoy8"},originalSpacer:{flexBasis:"ir1wk9f7",flexGrow:"buofh1pr"},imageWrap:{position:"l9j0dhe7",minWidth:"hpfvmrgz"}};function a(a){var c=a.response,d=a.content,e=a.dispatch,f=a.hovered;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("div",{children:h.jsx("img",{className:(g||(g=b("stylex")))(i.originalImage),src:d.previewUrl}),className:g(i.imageWrap)}),h.jsx("div",{className:g(i.originalSpacer)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatIncomingMessageRow.bs").make,{content:c,first:!0,last:!0,hasRepliedToMessage:!0,dispatch:e,hovered:f,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatIncomingMessageReplyToPhotoGroup.bs",["React","stylex","CometPhotoGrid.react","CometImageCover.react","MWChatIncomingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi",paddingTop:"jwdofwj8"},originalRow:{backgroundColor:"g5ia77u1",position:"l9j0dhe7",display:"j83agx80"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},imagesWrap:{width:"nf4m65g7"},originalSpacer:{backgroundColor:"nred35xi",flexShrink:"pfnyh3mw",flexGrow:"buofh1pr",flexBasis:"ir1wk9f7"},image:{width:"k4urcfbm",height:"datstx6m",objectFit:"bixrwtb6"}};function a(a){var c=a.response,d=a.content,e=a.dispatch,f=a.hovered;a=a.buildSharedMediaViewerURL;d=d.attachments.map(function(a,c){return h.jsx(b("CometImageCover.react"),{src:a,style:i.image},String(c))});return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("div",{children:h.jsx(b("CometPhotoGrid.react"),{children:d}),className:(g||(g=b("stylex")))(i.imagesWrap)}),h.jsx("div",{className:g(i.originalSpacer)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatIncomingMessageRow.bs").make,{content:c,first:!0,last:!0,hasRepliedToMessage:!0,dispatch:e,hovered:f,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatIncomingMessageReplyToRemovedMessage.bs",["fbt","React","stylex","MWChatReplyBubble.bs","MWChatIncomingMessageReplyToDefault.bs"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j={message:{fontStyle:"fmqa7x8m",fontSize:"e9vueds3",paddingBottom:"osnr6wyh"}};function a(a){var c=a.pos,d=a.response,e=a.dispatch,f=a.replyToOther,k=a.hovered;a=a.buildSharedMediaViewerURL;var l=i.jsx("div",{children:g._("Message removed"),className:(h||(h=b("stylex")))(j.message)});return i.jsx(b("MWChatIncomingMessageReplyToDefault.bs").make,{response:d,dispatch:e,hovered:k,replied:i.jsx(b("MWChatReplyBubble.bs").make,{pos:c,replyToOther:f,outgoing:!1,content:l}),buildSharedMediaViewerURL:a})}c=a;f.styles=j;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToSticker.bs",["React","stylex","bs_belt_Option","MWChatSticker.bs","MWChatOutgoingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi"},originalRow:{backgroundColor:"g5ia77u1",position:"l9j0dhe7",display:"j83agx80",alignItems:"bp9cbjyn",height:"idiwt2bm",minWidth:"hpfvmrgz"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},stickerWrap:{position:"l9j0dhe7",minWidth:"hpfvmrgz"},originalSpacer:{width:"odw8uiq3",flexShrink:"pfnyh3mw",flexGrow:"buofh1pr",flexBasis:"mg4g778l"},originalGutter:{width:"pgctjfs5",flexShrink:"pfnyh3mw"},fade:{position:"pmk7jnqg",top:"kr520xx4",start:"j9ispegn",end:"n7fi1qx3",bottom:"i09qtzwb",backgroundColor:"nred35xi",opacity:"qwwmc0zo"}};function j(a){if(a<60)return 1;else return.5}function a(a){var c=a.pos,d=a.response,e=a.content,f=a.dispatch,k=a.hovered;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.originalSpacer)}),h.jsxs("div",{children:[h.jsx("div",{className:g(i.fade)}),h.jsx(b("MWChatSticker.bs").make,{sticker:e.sticker,scale:j(b("bs_belt_Option").getWithDefault(e.sticker.height,120))})],className:g(i.stickerWrap)}),h.jsx("div",{className:g(i.originalGutter)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:d,first:!0,last:!0,hasRepliedToMessage:!0,pos:c,dispatch:f,hovered:k,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.stickerScale=j;f.make=c}),null);
__d("MWChatIncomingMessageReplyToSticker.bs",["React","stylex","bs_belt_Option","MWChatSticker.bs","MWChatIncomingMessageRow.bs","MWChatOutgoingMessageReplyToSticker.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi",paddingTop:"jwdofwj8"},originalRow:{position:"l9j0dhe7",display:"j83agx80",alignItems:"bp9cbjyn",height:"idiwt2bm",minWidth:"hpfvmrgz"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},stickerWrap:{position:"l9j0dhe7",minWidth:"hpfvmrgz"},originalSpacer:{backgroundColor:"nred35xi",width:"odw8uiq3",flexShrink:"pfnyh3mw",flexGrow:"buofh1pr",flexBasis:"mg4g778l"},fade:{position:"pmk7jnqg",top:"kr520xx4",start:"j9ispegn",end:"n7fi1qx3",bottom:"i09qtzwb",backgroundColor:"nred35xi",opacity:"qwwmc0zo"}};function a(a){var c=a.response,d=a.content,e=a.dispatch,f=a.hovered;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.fade)}),h.jsx(b("MWChatSticker.bs").make,{sticker:d.sticker,scale:b("MWChatOutgoingMessageReplyToSticker.bs").stickerScale(b("bs_belt_Option").getWithDefault(d.sticker.height,120))})],className:g(i.stickerWrap)}),h.jsx("div",{className:g(i.originalSpacer)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatIncomingMessageRow.bs").make,{content:c,first:!0,last:!0,hasRepliedToMessage:!0,dispatch:e,hovered:f,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatIncomingMessageReplyToStory.bs",["React","stylex","MWChatStory.bs","MWChatIncomingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi",paddingTop:"jwdofwj8"},originalRow:{position:"l9j0dhe7",display:"j83agx80",alignItems:"bp9cbjyn",height:"idiwt2bm",minWidth:"hpfvmrgz"},responseRow:{position:"l9j0dhe7",marginTop:"sxpk6l6v"},originalSpacer:{flexBasis:"ir1wk9f7",flexGrow:"buofh1pr"}};function a(a){var c=a.response,d=a.content,e=a.dispatch,f=a.hovered;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx(b("MWChatStory.bs").make,{storyID:d.sourceID,previewUrl:d.previewUrl}),h.jsx("div",{className:(g||(g=b("stylex")))(i.originalSpacer)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatIncomingMessageRow.bs").make,{content:c,first:!0,last:!0,hasRepliedToMessage:!0,dispatch:e,hovered:f,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatIncomingMessageReplyToText.bs",["React","MWTheme.bs","stylex","MWChatColors.bs","MWChatBubbleBAF.bs","MWChatBubbleSolid.bs","MWChatTextTransform.bs","MWChatIncomingMessageRow.bs","CometTextWithEntities.react"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi",paddingTop:"jwdofwj8"},originalRow:{position:"l9j0dhe7",marginBottom:"enqfppq2"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},originalRoot:{display:"j83agx80"},originalSpacer:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",minWidth:"n5yhfkqm",flexShrink:"pfnyh3mw"},textContainer:{overflowWrap:"jm1wdb64",paddingBottom:"osnr6wyh",fontSize:"e9vueds3"}};function a(a){var c=a.pos,d=a.originalMessage,e=a.response,f=a.dispatch,j=a.replyToOther,k=a.hovered;a=a.buildSharedMediaViewerURL;var l=b("MWTheme.bs").useTheme(0);d=h.jsx("div",{children:h.jsx(b("CometTextWithEntities.react"),{ranges:d.ranges,text:d.text,transforms:[b("MWChatTextTransform.bs").emoticonTransform,b("MWChatTextTransform.bs").emojiTransform]}),className:(g||(g=b("stylex")))(i.textContainer)});var m,n=0;l.tag?j?n=1:m=h.jsx(b("MWChatBubbleBAF.bs").make,{pos:c,colors:l[0].colors.map(function(a){return b("MWTheme.bs").lighten(void 0,a)}),content:d,first:!0,last:!1,outgoing:!1,hasRepliedToMessage:!0,xstyle:b("MWChatColors.bs").styles.replyToOriginal}):j?n=1:m=h.jsx(b("MWChatBubbleSolid.bs").make,{color:b("MWTheme.bs").lighten(void 0,l[0].color),content:d,first:!0,last:!1,hasRepliedToMessage:!0,outgoing:!1,xstyle:b("MWChatColors.bs").styles.replyToOriginal});n===1&&(m=h.jsx(b("MWChatBubbleSolid.bs").make,{content:d,first:!0,last:!1,hasRepliedToMessage:!0,outgoing:!1,xstyle:b("MWChatColors.bs").styles.replyToOriginal}));return h.jsxs("div",{children:[h.jsx("div",{children:h.jsxs("div",{children:[m,h.jsx("div",{className:g(i.originalSpacer)})],className:g(i.originalRoot)}),className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatIncomingMessageRow.bs").make,{content:e,first:!0,last:!0,hasRepliedToMessage:!0,dispatch:f,hovered:k,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatIntersperse.bs",["bs_curry"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return a.reduce(function(a,d,e){return a.concat(e===0?[d]:[b("bs_curry")._1(c,e),d])},[])}f.intersperse=a}),null);
__d("MWChatIncomingGroup.bs",["fbt","React","MWTheme.bs","stylex","bs_belt_Option","bs_caml_option","MWChatProfile.bs","CometLink.react","MWChatIntersperse.bs","CometTooltip.react","MWChatSeenHeadsRow.bs","MWChatEventHandlers.bs","MWChatIncomingMessageRow.bs","MWChatMessageTableFocusTable.bs","MWChatIncomingMessageReplyToText.bs","MWChatIncomingMessageReplyToPhoto.bs","MWChatIncomingMessageReplyToStory.bs","MWChatIncomingMessageReplyToSticker.bs","MWChatIncomingMessageReplyToAttachment.bs","MWChatIncomingMessageReplyToPhotoGroup.bs","MWChatIncomingMessageReplyToRemovedMessage.bs"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j={root:{display:"j83agx80",paddingTop:"jwdofwj8",paddingBottom:"pby63qed"},rootMask:{paddingTop:"jb3vyjys",paddingBottom:"qt6c0cv9"},profile:{flexShrink:"pfnyh3mw",alignItems:"aovydwv3",display:"j83agx80"},solid:{marginStart:"h676nmdw",marginEnd:"oi9244e8",marginBottom:"oygrvhab"},mask:{backgroundColor:"nred35xi"},verticalSep:{width:"c9rrlmt1",backgroundColor:"nred35xi",flexShrink:"pfnyh3mw"},main:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",minWidth:"hpfvmrgz"},label:{paddingStart:"tw6a2znq"},sep:{height:"p3ovkuyr",backgroundColor:"nred35xi"},topSep:{height:"p3ovkuyr",backgroundColor:"nred35xi"},bottomSep:{height:"pmqtw6m8",backgroundColor:"nred35xi"},labelRoot:{display:"j83agx80"},labelLabel:{flexShrink:"pfnyh3mw",fontSize:"r9r71o1u",color:"m9osqain",lineHeight:"fsrhnwul",maxWidth:"dkr8dfph"},profileSpacer:{paddingBottom:"a5h7je3r"}};function k(a){a=a[0].status;if(typeof a==="number")return null;else{a=a[0];var c=a.length;if(c!==1&&c!==0)return i.jsx(b("MWChatSeenHeadsRow.bs").make,{messageSeenBy:a});else return null}}function l(a,c,d,e,f,g){return i.jsx(b("MWChatEventHandlers.bs").make,{handler:function(h){var j;if(typeof a==="number")j=a===0?i.jsx(b("MWChatIncomingMessageReplyToRemovedMessage.bs").make,{pos:e,response:c,dispatch:f,replyToOther:d,hovered:h.hovered,buildSharedMediaViewerURL:g}):i.jsx(b("MWChatIncomingMessageRow.bs").make,{content:c,first:!0,last:!0,dispatch:f,hovered:h.hovered,buildSharedMediaViewerURL:g});else switch(a.tag|0){case 0:j=i.jsx(b("MWChatIncomingMessageReplyToText.bs").make,{pos:e,originalMessage:a[0],response:c,dispatch:f,replyToOther:d,hovered:h.hovered,buildSharedMediaViewerURL:g});break;case 1:j=i.jsx(b("MWChatIncomingMessageReplyToSticker.bs").make,{response:c,content:a[0],dispatch:f,hovered:h.hovered,buildSharedMediaViewerURL:g});break;case 2:j=i.jsx(b("MWChatIncomingMessageReplyToPhoto.bs").make,{response:c,content:a[0],dispatch:f,hovered:h.hovered,buildSharedMediaViewerURL:g});break;case 3:j=i.jsx(b("MWChatIncomingMessageReplyToPhotoGroup.bs").make,{response:c,content:a[0],dispatch:f,hovered:h.hovered,buildSharedMediaViewerURL:g});break;case 4:j=i.jsx(b("MWChatIncomingMessageReplyToAttachment.bs").make,{pos:e,response:c,dispatch:f,replyToOther:d,hovered:h.hovered,buildSharedMediaViewerURL:g});break;case 5:j=i.jsx(b("MWChatIncomingMessageReplyToStory.bs").make,{response:c,content:a[0],dispatch:f,hovered:h.hovered,buildSharedMediaViewerURL:g});break}return i.jsx("div",{children:i.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Row.make,{children:j}),role:"row"})}})}function m(a){switch(a.tag|0){case 0:return a[1].reactions;case 1:case 2:return}}function a(a){var c=a.pos,d=a.image,e=a.title,f=a.profileHref,n=a.authorName,o=a.messages,p=a.setCovidSheet,q=a.dispatch,r=a.buildSharedMediaViewerURL;a=b("MWTheme.bs").useTheme(0);var s=o.length-1|0,t={contents:void 0},u={contents:!1};o=o.map(function(a,d){var e=d===0,f=d===s;switch(a.tag|0){case 0:var g=a[0],h=k(g);f&&(t.contents=b("bs_caml_option").some(h),u.contents=m(g)!==void 0);return i.jsxs(i.Fragment,{children:[i.jsx(b("MWChatEventHandlers.bs").make,{handler:function(a){return i.jsx("div",{children:i.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Row.make,{children:i.jsx(b("MWChatIncomingMessageRow.bs").make,{content:g,first:e,last:f,setCovidSheet:p,dispatch:q,hovered:a.hovered,buildSharedMediaViewerURL:r})}),role:"row"})}}),f?null:h]},String(d));case 1:h=a[1];var j=k(h);f&&(t.contents=b("bs_caml_option").some(j),u.contents=m(h)!==void 0);return i.jsxs(i.Fragment,{children:[l(a[0],h,!0,c,q,r),f?null:j]},String(d));case 2:h=a[1];j=k(h);f&&(t.contents=b("bs_caml_option").some(j),u.contents=m(h)!==void 0);return i.jsxs(i.Fragment,{children:[l(a[0],h,!1,c,q,r),f?null:j]},String(d))}});if(f!==void 0){var v=n!==void 0?g._("{user}'s profile",[g._param("user",n)]):g._("Participant's Profile"),w={size:28,isActiveNow:!1};d!==void 0&&(w.src=b("bs_caml_option").valFromOption(d));f=i.jsx(b("CometLink.react"),{href:f,label:v,children:i.jsx(b("MWChatProfile.bs").make,w)})}else{v={size:28,isActiveNow:!1};d!==void 0&&(v.src=b("bs_caml_option").valFromOption(d));f=i.jsx(b("MWChatProfile.bs").make,v)}w=n!==void 0?i.jsx(b("CometTooltip.react"),{tooltip:n,align:"middle",position:"start",children:f}):f;d=a.tag?b("MWChatIntersperse.bs").intersperse(o,function(a){return i.jsx("div",{className:(h||(h=b("stylex")))(j.sep)},"sep_"+String(a))}):o;v={children:i.jsxs(i.Fragment,{children:[b("MWTheme.bs").isGradient(a)?i.jsx("div",{className:(h||(h=b("stylex")))(j.verticalSep)}):null,i.jsx("div",{children:w,className:(h||(h=b("stylex")))(j.profile,b("MWTheme.bs").isGradient(a)?j.mask:j.solid,u.contents?j.profileSpacer:!1)}),b("MWTheme.bs").isGradient(a)?i.jsx("div",{className:(h||(h=b("stylex")))(j.verticalSep)}):null,i.jsxs("div",{children:[e!==void 0?i.jsx("div",{children:i.jsx("div",{children:i.jsx("div",{children:b("bs_caml_option").valFromOption(e),className:(h||(h=b("stylex")))(j.labelLabel)}),className:(h||(h=b("stylex")))(j.labelRoot)}),className:(h||(h=b("stylex")))(j.label,b("MWTheme.bs").isGradient(a)?j.mask:!1)}):null,d],className:h(j.main)})]}),className:h(j.root,b("MWTheme.bs").isGradient(a)?j.rootMask:!1)};return i.jsxs(i.Fragment,{children:[b("MWTheme.bs").isGradient(a)?i.jsx("div",{className:(h||(h=b("stylex")))(j.topSep)}):null,(v["data-testid"]="incoming_group",i.jsx("div",v)),b("bs_belt_Option").getWithDefault(t.contents,null),b("MWTheme.bs").isGradient(a)?i.jsx("div",{className:(h||(h=b("stylex")))(j.bottomSep)}):null]})}c=a;f.styles=j;f.getSeenHeadRow=k;f.renderReplyTo=l;f.getReaction=m;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToDefault.bs",["React","stylex","MWChatOutgoingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi"},originalRow:{backgroundColor:"g5ia77u1",position:"l9j0dhe7",marginBottom:"enqfppq2"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},originalRoot:{display:"j83agx80"},originalSpacer:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",minWidth:"n5yhfkqm",flexShrink:"pfnyh3mw"},originalGutter:{width:"pgctjfs5",flexShrink:"pfnyh3mw"}};function a(a){var c=a.pos,d=a.response,e=a.dispatch,f=a.children,j=a.hovered;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsx("div",{children:h.jsxs("div",{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.originalSpacer)}),f,h.jsx("div",{className:g(i.originalGutter)})],className:g(i.originalRoot)}),className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:d,first:!0,last:!0,hasRepliedToMessage:!0,pos:c,dispatch:e,hovered:j,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToAttachment.bs",["React","MWChatAttachmentReplyBubble.bs","MWChatOutgoingMessageReplyToDefault.bs"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.pos,d=a.response,e=a.dispatch,f=a.replyToOther,h=a.hovered;a=a.buildSharedMediaViewerURL;return g.jsx(b("MWChatOutgoingMessageReplyToDefault.bs").make,{pos:c,response:d,dispatch:e,children:g.jsx(b("MWChatAttachmentReplyBubble.bs").make,{pos:c,replyToOther:f,outgoing:!0}),hovered:h,buildSharedMediaViewerURL:a})}c=a;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToPhoto.bs",["React","stylex","MWChatOutgoingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi"},originalRow:{backgroundColor:"g5ia77u1",position:"l9j0dhe7",display:"j83agx80",alignItems:"bp9cbjyn",height:"idiwt2bm",minWidth:"hpfvmrgz"},responseRow:{position:"l9j0dhe7",marginTop:"sxpk6l6v"},imageWrap:{position:"l9j0dhe7",minWidth:"hpfvmrgz"},originalSpacer:{width:"odw8uiq3",flexShrink:"pfnyh3mw",flexGrow:"buofh1pr",flexBasis:"mg4g778l"},originalGutter:{width:"pgctjfs5",flexShrink:"pfnyh3mw"},originalImage:{maxWidth:"d2edcug0",maxHeight:"iko8p5ub",verticalAlign:"sf5mxxl7",borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomStartRadius:"qmr60zad",borderBottomEndRadius:"jinzq4gt",boxShadow:"hu0ub5uo",borderTop:"opwvks06",borderEnd:"hop1g133",borderBottom:"linmgsc8",borderStart:"t63ysoy8"}};function a(a){var c=a.pos,d=a.response,e=a.content,f=a.dispatch,j=a.hovered;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.originalSpacer)}),h.jsx("div",{children:h.jsx("img",{className:g(i.originalImage),src:e.previewUrl}),className:g(i.imageWrap)}),h.jsx("div",{className:g(i.originalGutter)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:d,first:!0,last:!0,hasRepliedToMessage:!0,pos:c,dispatch:f,hovered:j,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToPhotoGroup.bs",["React","stylex","CometPhotoGrid.react","CometImageCover.react","MWChatOutgoingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi"},originalRow:{backgroundColor:"g5ia77u1",position:"l9j0dhe7",display:"j83agx80"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},imagesWrap:{width:"nf4m65g7"},originalSpacer:{flexShrink:"pfnyh3mw",flexGrow:"buofh1pr",flexBasis:"ir1wk9f7"},originalGutter:{width:"pgctjfs5",flexShrink:"pfnyh3mw"},image:{width:"k4urcfbm",height:"datstx6m",objectFit:"bixrwtb6"}};function a(a){var c=a.pos,d=a.response,e=a.content,f=a.dispatch,j=a.hovered;a=a.buildSharedMediaViewerURL;e=e.attachments.map(function(a,c){return h.jsx(b("CometImageCover.react"),{src:a,style:i.image},String(c))});return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.originalSpacer)}),h.jsx("div",{children:h.jsx(b("CometPhotoGrid.react"),{children:e}),className:g(i.imagesWrap)}),h.jsx("div",{className:g(i.originalGutter)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:d,first:!0,last:!0,hasRepliedToMessage:!0,pos:c,dispatch:f,hovered:j,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToRemovedMessage.bs",["fbt","React","stylex","MWChatReplyBubble.bs","MWChatOutgoingMessageReplyToDefault.bs"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j={message:{fontStyle:"fmqa7x8m",fontSize:"e9vueds3",paddingBottom:"osnr6wyh"}};function a(a){var c=a.pos,d=a.response,e=a.dispatch,f=a.replyToOther,k=a.hovered;a=a.buildSharedMediaViewerURL;var l=i.jsx("div",{children:g._("Message removed"),className:(h||(h=b("stylex")))(j.message)});return i.jsx(b("MWChatOutgoingMessageReplyToDefault.bs").make,{pos:c,response:d,dispatch:e,children:i.jsx(b("MWChatReplyBubble.bs").make,{pos:c,replyToOther:f,outgoing:!0,content:l}),hovered:k,buildSharedMediaViewerURL:a})}c=a;f.styles=j;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToStory.bs",["React","stylex","MWChatStory.bs","MWChatOutgoingMessageRow.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"nred35xi"},originalRow:{backgroundColor:"g5ia77u1",position:"l9j0dhe7",display:"j83agx80",alignItems:"bp9cbjyn",height:"idiwt2bm",minWidth:"hpfvmrgz"},responseRow:{position:"l9j0dhe7",marginTop:"sxpk6l6v"},originalSpacer:{width:"odw8uiq3",flexShrink:"pfnyh3mw",flexGrow:"buofh1pr",flexBasis:"mg4g778l"},originalGutter:{width:"pgctjfs5",flexShrink:"pfnyh3mw"}};function a(a){var c=a.pos,d=a.response,e=a.content,f=a.dispatch,j=a.hovered;a=a.buildSharedMediaViewerURL;return h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.originalSpacer)}),h.jsx(b("MWChatStory.bs").make,{storyID:e.sourceID,previewUrl:e.previewUrl}),h.jsx("div",{className:g(i.originalGutter)})],className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:d,first:!0,last:!0,hasRepliedToMessage:!0,pos:c,dispatch:f,hovered:j,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(i.root)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatOutgoingMessageReplyToText.bs",["React","MWTheme.bs","stylex","MWChatColors.bs","MWChatBubbleBAF.bs","MWChatBubbleSolid.bs","MWChatTextTransform.bs","MWChatOutgoingMessageRow.bs","CometTextWithEntities.react"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={mask:{backgroundColor:"nred35xi"},originalRow:{position:"l9j0dhe7",marginBottom:"enqfppq2"},responseRow:{position:"l9j0dhe7",marginTop:"hy1o8qpp"},originalRoot:{display:"j83agx80"},originalSpacer:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",minWidth:"n5yhfkqm",flexShrink:"pfnyh3mw"},originalGutter:{width:"pgctjfs5",flexShrink:"pfnyh3mw"},textContainer:{overflowWrap:"jm1wdb64",paddingBottom:"osnr6wyh",fontSize:"e9vueds3"}};function a(a){var c=a.pos,d=a.originalMessage,e=a.response,f=a.dispatch,j=a.replyToOther,k=a.hovered;a=a.buildSharedMediaViewerURL;var l=b("MWTheme.bs").useTheme(0);d=h.jsx("div",{children:h.jsx(b("CometTextWithEntities.react"),{ranges:d.ranges,text:d.text,transforms:[b("MWChatTextTransform.bs").emoticonTransform,b("MWChatTextTransform.bs").emojiTransform]}),className:(g||(g=b("stylex")))(i.textContainer)});var m,n=0;l.tag?j?n=1:m=h.jsx(b("MWChatBubbleBAF.bs").make,{pos:c,colors:l[0].colors.map(function(a){return b("MWTheme.bs").lighten(void 0,a)}),content:d,first:!0,last:!1,outgoing:!0,xstyle:b("MWChatColors.bs").styles.replyToOriginal}):j?n=1:m=h.jsx(b("MWChatBubbleSolid.bs").make,{color:b("MWTheme.bs").lighten(void 0,l[0].color),content:d,first:!0,last:!1,outgoing:!0,xstyle:b("MWChatColors.bs").styles.replyToOriginal});n===1&&(m=h.jsx(b("MWChatBubbleSolid.bs").make,{content:d,first:!0,last:!1,outgoing:!0,xstyle:b("MWChatColors.bs").styles.replyToOriginal}));return h.jsxs("div",{children:[h.jsx("div",{children:h.jsxs("div",{children:[h.jsx("div",{className:g(i.originalSpacer)}),m,h.jsx("div",{className:g(i.originalGutter)})],className:g(i.originalRoot)}),className:g(i.originalRow)}),h.jsx("div",{children:h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:e,first:!0,last:!0,hasRepliedToMessage:!0,pos:c,dispatch:f,hovered:k,buildSharedMediaViewerURL:a}),className:g(i.responseRow)})],className:g(b("MWTheme.bs").isGradient(l)?i.mask:!1)})}c=a;f.styles=i;f.make=c}),null);
__d("MWChatOutgoingGroup.bs",["React","MWTheme.bs","stylex","bs_caml_option","MWChatIntersperse.bs","MWChatEventHandlers.bs","MWChatOutgoingMessageRow.bs","MWChatMessageTableFocusTable.bs","MWChatOutgoingMessageReplyToText.bs","MWChatOutgoingMessageReplyToPhoto.bs","MWChatOutgoingMessageReplyToStory.bs","MWChatOutgoingMessageReplyToSticker.bs","MWChatOutgoingMessageReplyToAttachment.bs","MWChatOutgoingMessageReplyToPhotoGroup.bs","MWChatOutgoingMessageReplyToRemovedMessage.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={root:{backgroundColor:"g5ia77u1",paddingTop:"jwdofwj8",paddingBottom:"pby63qed"},rootMask:{paddingTop:"jb3vyjys",paddingBottom:"qt6c0cv9"},labelRoot:{display:"j83agx80"},mask:{backgroundColor:"nred35xi"},labelSpacer:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr"},labelLabel:{flexShrink:"pfnyh3mw",fontSize:"r9r71o1u",color:"m9osqain",lineHeight:"fsrhnwul",maxWidth:"dkr8dfph"},labelMargin:{flexShrink:"pfnyh3mw",width:"la0tivve"},sep:{height:"p3ovkuyr",backgroundColor:"nred35xi"},topSep:{height:"p3ovkuyr",backgroundColor:"nred35xi"},bottomSep:{height:"pmqtw6m8",backgroundColor:"nred35xi"}};function j(a,c,d,e,f,g,i){return h.jsx(b("MWChatEventHandlers.bs").make,{handler:function(g){var j;if(typeof a==="number")j=a===0?h.jsx(b("MWChatOutgoingMessageReplyToRemovedMessage.bs").make,{pos:e,response:c,dispatch:f,replyToOther:d,hovered:g.hovered,buildSharedMediaViewerURL:i}):h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:c,first:!0,last:!0,pos:e,dispatch:f,hovered:g.hovered,buildSharedMediaViewerURL:i});else switch(a.tag|0){case 0:j=h.jsx(b("MWChatOutgoingMessageReplyToText.bs").make,{pos:e,originalMessage:a[0],response:c,dispatch:f,replyToOther:d,hovered:g.hovered,buildSharedMediaViewerURL:i});break;case 1:j=h.jsx(b("MWChatOutgoingMessageReplyToSticker.bs").make,{pos:e,response:c,content:a[0],dispatch:f,hovered:g.hovered,buildSharedMediaViewerURL:i});break;case 2:j=h.jsx(b("MWChatOutgoingMessageReplyToPhoto.bs").make,{pos:e,response:c,content:a[0],dispatch:f,hovered:g.hovered,buildSharedMediaViewerURL:i});break;case 3:j=h.jsx(b("MWChatOutgoingMessageReplyToPhotoGroup.bs").make,{pos:e,response:c,content:a[0],dispatch:f,hovered:g.hovered,buildSharedMediaViewerURL:i});break;case 4:j=h.jsx(b("MWChatOutgoingMessageReplyToAttachment.bs").make,{pos:e,response:c,dispatch:f,replyToOther:d,hovered:g.hovered,buildSharedMediaViewerURL:i});break;case 5:j=h.jsx(b("MWChatOutgoingMessageReplyToStory.bs").make,{pos:e,response:c,content:a[0],dispatch:f,hovered:g.hovered,buildSharedMediaViewerURL:i});break}return h.jsx("div",{children:h.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Row.make,{children:j}),role:"row"})}},g)}function a(a){var c=a.pos,d=a.messages,e=a.title,f=a.setCovidSheet,k=a.dispatch,l=a.buildSharedMediaViewerURL;a=b("MWTheme.bs").useTheme(0);var m=d.length-1|0;d=d.map(function(a,d){var e=d===0,g=d===m;switch(a.tag|0){case 0:var i=a[0];return h.jsx(b("MWChatEventHandlers.bs").make,{handler:function(a){a={children:h.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Row.make,{children:h.jsx(b("MWChatOutgoingMessageRow.bs").make,{content:i,first:e,last:g,pos:c,setCovidSheet:f,dispatch:k,hovered:a.hovered,buildSharedMediaViewerURL:l})}),role:"row"};a["data-testid"]="mwchat_outgoing_row";return h.jsx("div",a)}},String(d));case 1:return j(a[0],a[1],!0,c,k,String(d),l);case 2:return j(a[0],a[1],!1,c,k,String(d),l)}});d=a.tag?b("MWChatIntersperse.bs").intersperse(d,function(a){return h.jsx("div",{className:(g||(g=b("stylex")))(i.sep)},"sep_"+String(a))}):d;e={children:h.jsxs(h.Fragment,{children:[e!==void 0?h.jsxs("div",{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.labelSpacer)}),h.jsx("div",{children:b("bs_caml_option").valFromOption(e),className:(g||(g=b("stylex")))(i.labelLabel)}),h.jsx("div",{className:(g||(g=b("stylex")))(i.labelMargin)})],className:(g||(g=b("stylex")))(i.labelRoot,b("MWTheme.bs").isGradient(a)?i.mask:!1)}):null,h.jsx(h.Fragment,{children:d})]}),className:(g||(g=b("stylex")))(i.root,b("MWTheme.bs").isGradient(a)?i.rootMask:!1)};return h.jsxs(h.Fragment,{children:[b("MWTheme.bs").isGradient(a)?h.jsx("div",{className:(g||(g=b("stylex")))(i.topSep)}):null,(e["data-testid"]="outgoing_group",h.jsx("div",e)),b("MWTheme.bs").isGradient(a)?h.jsx("div",{className:(g||(g=b("stylex")))(i.bottomSep)}):null]})}c=a;f.styles=i;f.renderReplyTo=j;f.make=c}),null);
__d("MWChatMessageListTabbableRow.bs",["React","stylex","FocusWithinHandler.react","MWChatMessageTableFocusTable.bs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={focusNotVisible:{outline:"lzcic4wl"}};function a(a){var c=a.children;return h.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Row.make,{children:h.jsx("div",{children:h.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Cell.make,{colSpan:2,children:h.jsx(b("FocusWithinHandler.react"),{children:function(a,d){return h.createElement("div",{role:"gridcell",tabIndex:0,"data-scope":b("MWChatMessageTableFocusTable.bs").scopeID,className:(g||(g=b("stylex")))(d?!1:i.focusNotVisible)},c)}})}),role:"row"})})}c=a;f.styles=i;f.make=c}),null);