if (self.CavalryLogger) { CavalryLogger.start_js(["C6GGm"]); }

__d("MessengerFormattingConfig",[],(function(a,b,c,d,e,f){e.exports={boldConfig:{pattern:"([\\s_~'\"(]|^)\\*(\\S(?:.*?\\S)??)\\*(?=[\\s_~,.;:!?'\")]|$)",nonCapturingPattern:"(?:[\\s_~'\"(]|^)\\*(?:\\S(?:.*?\\S)??)\\*(?=[\\s_~,.;:!?'\")]|$)"},italicConfig:{pattern:"([\\s*~'\"(]|^)_(\\S(?:.*?\\S)??)_(?=[\\s*~,.;:!?'\")]|$)",nonCapturingPattern:"(?:[\\s*~'\"(]|^)_(?:\\S(?:.*?\\S)??)_(?=[\\s*~,.;:!?'\")]|$)"},strikethroughConfig:{pattern:"([\\s*_'\"(]|^)~(\\S(?:.*?\\S)??)~(?=[\\s*_,.;:!?'\")]|$)",nonCapturingPattern:"(?:[\\s*_'\"(]|^)~(?:\\S(?:.*?\\S)??)~(?=[\\s*_,.;:!?'\")]|$)"},codeConfig:{pattern:"([\\s*_~'\"(]|^)`([^`\\r\\n](?:.*?[^`\\r\\n])??)`(?=[\\s\\w*_~,.;:!?'\")]|$)",nonCapturingPattern:"(?:[\\s*_~'\"(]|^)`(?:[^`\\r\\n](?:.*?[^`\\r\\n])??)`(?=[\\s\\w*_~,.;:!?'\")]|$)"},codeBlockConfig:{pattern:"(```)([\\s\\S]+?)```",nonCapturingPattern:"(```)([\\s\\S]+?)```"},codeBlockV2Config:{pattern:"(`{3,})(?:(?:((.*?)(?:\\r\\n?|\\n))([\\s\\S]*?))|(.+?))\\1\\s*?(?:\\r\\n?|\\n|$)",nonCapturingPattern:"(`{3,})([\\s\\S]+?)\\1\\s*((\\r\\n)|\\r|\\n|$)"},blockQuoteConfig:{pattern:"(^>>> ?)((.|(\\r\\n)|\\r|\\n)*?\\S(.|(\\r\\n)|\\r|\\n)*?)^<<<\\s*?((\\r\\n)|\\r|\\n|$)",nonCapturingPattern:"(^>>> ?)((.|(\\r\\n)|\\r|\\n)*?\\S(.|(\\r\\n)|\\r|\\n)*?)^<<<\\s*((\\r\\n)|\\r|\\n|$)"},multipleInlineBlockQuoteConfig:{pattern:"((^> )(.*\\S.*)((\\r\\n)|\\r|\\n)?)(^> ?(.*)((\\r\\n)|\\r|\\n)?)*",nonCapturingPattern:"(^> (.*\\S.*)((\\r\\n)|\\r|\\n)?)(^> ?(.*)((\\r\\n)|\\r|\\n)?)*"},singleInlineBlockQuoteConfig:{pattern:"(^> ?)(.*?$)",nonCapturingPattern:"^> ?(.*?$)"}}}),null);
__d("MercuryMessageRenderLocations",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({CHAT:"chat",MESSENGER:"messenger",PAGES:"pages"});e.exports=a}),null);
__d("MessengerFormattingUtils",["cx","CurrentUser","JSResource","MessengerFormattingConfig","Newline.react","React","UnicodeUtils","lazyLoadComponent","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j=b("lazyLoadComponent")(b("JSResource")("MessengerCodeBlock.react").__setRef("MessengerFormattingUtils"));function a(a){return{offset:a[1].length,length:(h||(h=b("UnicodeUtils"))).strlen(a[2])+2,innerOffset:1,innerText:a[2]}}function c(a){return{offset:a[1].length,length:(h||(h=b("UnicodeUtils"))).strlen(a[2])+2,innerOffset:1,innerText:a[2].replace(/\s\s+/g," ").trim()}}function d(a){return{offset:0,length:(h||(h=b("UnicodeUtils"))).strlen(a[0]),innerOffset:h.strlen(a[1]),innerText:a[2]}}g=b("MessengerFormattingConfig");var k={pattern:new RegExp(g.boldConfig.pattern,"g"),nonCapturingPattern:new RegExp(g.boldConfig.nonCapturingPattern),formatter:function(a){a=a.children;return i.jsx("b",{children:a})},getRangeInMatch:a,recursivelyFormat:!0},l={pattern:new RegExp(g.italicConfig.pattern,"g"),nonCapturingPattern:new RegExp(g.italicConfig.nonCapturingPattern),formatter:function(a){a=a.children;return i.jsx("i",{children:a})},getRangeInMatch:a,recursivelyFormat:!0};a={pattern:new RegExp(g.strikethroughConfig.pattern,"g"),nonCapturingPattern:new RegExp(g.strikethroughConfig.nonCapturingPattern),formatter:function(a){a=a.children;return i.jsx("s",{children:a})},getRangeInMatch:a,recursivelyFormat:!0};c={pattern:new RegExp(g.codeConfig.pattern,"g"),nonCapturingPattern:new RegExp(g.codeConfig.nonCapturingPattern),formatter:function(a){a=a.children;return i.jsx("code",{className:b("CurrentUser").isWorkUser()?"_7ilw":"",children:a})},getRangeInMatch:c,recursivelyFormat:!1};var m=function(a){var c=a.children;a=a.range;return i.jsxs(i.Fragment,{children:[i.jsx(i.Suspense,{fallback:i.jsx("div",{className:"_7mv7",children:c}),children:i.jsx(j,{range:a,children:c})}),i.jsx(b("Newline.react"),{})]})},n={pattern:new RegExp(g.codeBlockConfig.pattern,"g"),nonCapturingPattern:new RegExp(g.codeBlockConfig.nonCapturingPattern),formatter:function(a){a=a.children;return i.jsx("code",{children:a})},getRangeInMatch:d,recursivelyFormat:!1};m={pattern:new RegExp(g.codeBlockV2Config.pattern,"g"),nonCapturingPattern:new RegExp(g.codeBlockV2Config.nonCapturingPattern),formatter:m,getRangeInMatch:function(a){var c=a[3]||"",d=a[4]!==void 0?a[4]:a[5],e=a[1]||"",f=a[2]||"";return{offset:0,length:(h||(h=b("UnicodeUtils"))).strlen(a[0]),innerOffset:h.strlen(e)+h.strlen(f),innerText:d,codeBlockLanguage:c}},recursivelyFormat:!1};var o=function(a){a=a.children;return i.jsxs(i.Fragment,{children:[i.jsxs("blockquote",{className:"_pye"+(b("CurrentUser").isWorkUser()?" _7ilx":""),children:[i.jsx("div",{className:"_pyf"}),a]}),i.jsx(b("Newline.react"),{})]})};d={pattern:new RegExp(g.blockQuoteConfig.pattern,"gm"),nonCapturingPattern:new RegExp(g.blockQuoteConfig.nonCapturingPattern,"m"),formatter:o,getRangeInMatch:d,recursivelyFormat:!0};o={pattern:new RegExp(g.multipleInlineBlockQuoteConfig.pattern,"gm"),nonCapturingPattern:new RegExp(g.multipleInlineBlockQuoteConfig.nonCapturingPattern,"m"),formatter:o,getRangeInMatch:function(a){var c=a[0],d=(h||(h=b("UnicodeUtils"))).strlen(c);a=h.strlen(a[2]);return{offset:0,length:d,innerOffset:a,innerText:h.substring(c,a,d)}},recursivelyFormat:!0,getAdditionalInnerRanges:function(a){return r(a.innerText,[p]).map(function(b){return babelHelpers["extends"]({},b,{offset:b.offset+a.innerOffset,innerOffset:b.innerOffset+a.innerOffset})})}};var p={pattern:new RegExp(g.singleInlineBlockQuoteConfig.pattern,"gm"),nonCapturingPattern:new RegExp(g.singleInlineBlockQuoteConfig.nonCapturingPattern,"m"),formatter:function(a){a=a.children;return a},getRangeInMatch:function(a){return{offset:0,length:(h||(h=b("UnicodeUtils"))).strlen(a[0]),innerOffset:h.strlen(a[1]),innerText:a[2]}},recursivelyFormat:!0},q=[d,k,l,a,c,o];q.push(b("CurrentUser").isWorkUser()?m:n);function f(a,b){b===void 0&&(b=q);for(var c=0;c<b.length;c++){var d=b[c].nonCapturingPattern;if(d.test(a))return!0}return!1}function r(a,c){c===void 0&&(c=q);var d=[];for(var e=0;e<c.length;e++){var f=c[e];f.pattern.lastIndex=0;var g=void 0;while((g=f.pattern.exec(a))!=null){g=b("nullthrows")(g);var i=f.getRangeInMatch(g),j=a.substr(0,g.index+i.offset);j=(h||(h=b("UnicodeUtils"))).strlen(j);j={offset:j,length:i.length,innerText:i.innerText,innerOffset:j+i.innerOffset,formatter:f.formatter,recursivelyFormat:f.recursivelyFormat,codeBlockLanguage:i.codeBlockLanguage};i=f.getAdditionalInnerRanges?f.getAdditionalInnerRanges(j):[];d.push(j);d=d.concat(i)}}return d}e.exports={defaultFormatConfigs:q,hasMatch:f,getRanges:r,formatConfigs:{bold:k,italic:l,strikethrough:a,blockcode:n,codeblockV2:m,code:c,blockquote:d,multipleInlineBlockquote:o,singleInlineBlockquote:p}}}),null);
__d("RedditLinkMatcher",[],(function(a,b,c,d,e,f){"use strict";var g=new RegExp("(^|\\s)(\\/?[ru]\\/\\w{1,21})(?:\\b)","i");a=function(a){a=g.exec(a);return a===null?null:{lnk:a[2],idx:a.index+a[1].length}};b=function(a){return g.exec(a)!==null};c={match:a,isMatch:b};e.exports=c}),null);
__d("RedditLinkRanges",["RedditLinkMatcher","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";var g;a={REDDIT_PREFIX:"https://reddit.com",get:function(a,c){c===void 0&&(c=0);c=c;var d=a.substr(c),e=b("RedditLinkMatcher").match(d);if(!e)return[];var f=e.lnk;e=e.idx;d=(g||(g=b("UnicodeUtils"))).strlen(d.substr(0,e));c+=d;e="";switch(f[1].toLowerCase()){case"r":e=this.REDDIT_PREFIX+f;break;case"u":e=this.REDDIT_PREFIX+f;break;default:switch(f[0].toLowerCase()){case"r":e=this.REDDIT_PREFIX+"/"+f;break;case"u":e=this.REDDIT_PREFIX+"/"+f;break;default:return[]}}d=f.length;f=[{offset:c,length:d,entity:{url:e}}];return f.concat(this.get(a,c+d))}};e.exports=a}),null);
__d("TextWithEntitiesMetadataType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,CONCEPT:1,INTENT:2})}),null);
__d("shouldAddMRefParam",["isFacebookURI"],(function(a,b,c,d,e,f){a=function(a){if(!b("isFacebookURI")(a)||a.getFragment())return!1;return/^\/events\//.test(a.getPath())?!0:!1};e.exports=a}),null);
__d("MercuryMessageBody.react",["cx","fbt","BootloadedComponent.react","CurrentUser","EmojiRenderer","EmoticonEmojiList","EmoticonsList","JSResource","Link.react","LinkRanges","MercuryIDs","MercuryMessageRenderLocations","MessengerFormattingUtils","MessengerMathUtils","MessengerSupportedEmojiUtils","MessengerTextWithEntities.react","P2PTriggersUtils","React","RedditLinkMatcher","RedditLinkRanges","TextWithEntities.react","TextWithEntitiesMetadataType","UnicodeUtils","URI","URLMatcher","emptyFunction","getURLRanges","gkx","ifRequired","prop-types","shouldAddMRefParam"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=b("LinkRanges").module,l=b("React"),m=function(){m=b("emptyFunction"),b("ifRequired")("ChatAppActions",function(a){a.setInitialDisplayDone()})};a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.interpolator=function(a,c){if(c.className)return l.jsx("span",{className:c.className,children:a});if(c.math)return l.jsx(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:l.jsx("span",{children:a}),body:d.$4(a),fallbackBody:a,inline:!0,stripDelimiters:!0,className:"_1e4d _1e4e"});if(c.id){var e={};!b("CurrentUser").isWorkUser()&&!d.props.isFromViewer&&d.props.threadCustomColor&&(e.color=d.props.threadCustomColor);var f=d.props.onContactSelect,g=d.props.threadID?b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID)===c.id:!1,h=new(i||(i=b("URI")))("/ajax/hovercard/user.php").setQueryData({id:c.id}),j=b("gkx")("678279");h=l.jsx(b("Link.react"),{className:"_ih-"+(b("CurrentUser").isWorkUser()&&c.id===b("CurrentUser").getID()?" _1zle":""),href:g?"#":c.url,"data-hovercard":j?h:null,style:e,onClick:f&&!g?function(a){d.$3(f,c,a)}:b("emptyFunction"),children:a});!g&&f&&!j&&(typeof a==="string"&&(c.contactName=a&&a.replace("@","")),h=l.jsx(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerAvatarActions.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:h,avatar:h,contact:c,showSendMessageItem:!0,onAction:d.props.onContactSelect}));return h}if(c.formatter){e=c.formatter;g=c.recursivelyFormat?d.renderBody(c.innerText,!0,c.innerOffset):c.innerText;return l.jsx(e,{range:c,children:g})}if(c.entity&&c.entity.url)if((i||(i=b("URI"))).isValidURI(c.entity.url)){j=new(i||(i=b("URI")))(c.entity.url.replace(/#+$/,""));b("shouldAddMRefParam")(j)&&j.addQueryData({__mref:"mb"});h=j.toString();return l.jsx(b("Link.react"),{href:{url:h,shimhash:c.entity.shimhash},s:c.entity.s,target:"_blank",children:a})}else return a;if(!c.entity&&c.id===void 0){e=typeof c.type==="number"?c.type:b("TextWithEntitiesMetadataType")[c.type];switch(e){case 0:return l.jsx("span",{className:"_2y9",title:JSON.stringify(c.data),children:a});case 1:return d.renderConceptMetadata(a,c.data);case 2:return d.renderIntentMetadata(a,c.data);default:return a}}return a};d.state=d.parseMessageBody(c);return d}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){(this.props.body!==a.body||this.props.metaRanges!==a.metaRanges||this.props.ranges!==a.ranges)&&this.setState(this.parseMessageBody(a))};d.parseMessageBody=function(a){var c=(a.body||"").replace(/\s+$/,""),d=this.$1(a.metaRanges||[]);d={normalizedBody:c,isEncrypted:!1,isMathBlock:!1,isRichText:!1,ranges:[],filteredMetaRanges:d};if(c.length===0)return d;if(c.startsWith("?OTR")){d.isEncrypted=!0;return d}if(b("MessengerMathUtils").isMathBlock(c)){d.isMathBlock=!0;return d}var e=a.ranges,f=a.metaRanges;f=e&&e.length||f&&f.length||b("EmoticonsList").noncapturingRegexp.test(c)||b("EmojiRenderer").containsEmoji(c)||b("URLMatcher").match(c)||k&&k.hasMatch(c)||b("RedditLinkMatcher").isMatch(c)||this.$2(c,a)||b("MessengerSupportedEmojiUtils").containsEmoji(c)||b("EmoticonEmojiList").noncapturingRegexp.test(c)||b("MessengerFormattingUtils").hasMatch(c)||b("MessengerMathUtils").hasInlineMath(c);if(!f)return d;d.isRichText=!0;e&&e.length===1&&e[0].className==="__in"&&(e=b("getURLRanges")(c).concat(e));e=e||[];e.forEach(function(a){if(a.id){var d=c.substring(0,a.offset);a.offset=(j||(j=b("UnicodeUtils"))).strlen(d)}});e=e.concat(b("getURLRanges")(c));k&&(e=e.concat(k.get(c)));e=e.concat(b("RedditLinkRanges").get(c));e=e.concat(b("MessengerFormattingUtils").getRanges(c));e=e.concat(b("MessengerMathUtils").getInlineMathRanges(c));d.ranges=e.filter(function(a){return a!=void 0});return d};d.hasFormatting=function(){return this.state.isRichText||this.state.isMathBlock||this.state.isEncrypted};d.$3=function(a,b,c){c.preventDefault()};d.$4=function(a){if(this.props.isFromViewer)return"\\color{#fff}{"+b("MessengerMathUtils").getMathBlockInner(a)+"}";else return b("MessengerMathUtils").getMathBlockInner(a)};d.renderConceptMetadata=function(a,b){if(!b)return a;return b.intent_name||b.name?this.renderIntentMetadata(a,b):a};d.renderIntentMetadata=function(a,c){if(!c)return a;var d=c.intent_name||c.name;switch(d){case"request_time":return l.jsx(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ServicesVerticalRequestTimeTriggers.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:l.jsx("span",{children:a}),data:c,text:a,threadID:this.props.threadID});default:return a}};d.renderBody=function(a,c,d){c===void 0&&(c=!1);d===void 0&&(d=0);var e=this.state,f=e.isRichText,g=e.ranges;e=e.filteredMetaRanges;var h=(j||(j=b("UnicodeUtils"))).strlen(a);if(!f)return l.jsx("span",{className:this.props.className,children:a});c&&(g=g.filter(function(a){return a.offset>=d&&a.offset+a.length<=d+h}).map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-d})}),e=e.filter(function(a){return a.offset>=d&&a.offset+a.length<=d+h}).map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-d})}));f={className:this.props.className,interpolator:this.interpolator,metaRanges:e,ranges:g,renderEmoji:!0,renderEmoticons:!0,text:a};if(this.$2(a)){c=l.jsx(b("TextWithEntities.react"),babelHelpers["extends"]({},f));return l.jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadPlaceholder:c,bootloadLoader:b("JSResource")("TextWithEntitiesAndP2P.react").__setRef("MercuryMessageBody.react")},f,{getMessengerEmote:this.$5,isSupportedEmoji:this.$6,threadID:this.props.threadID}))}e=l.jsx(b("MessengerTextWithEntities.react"),babelHelpers["extends"]({},f));return e};d.render=function(){var a=this.state,c=a.normalizedBody,d=a.isEncrypted;a=a.isMathBlock;if(c.length===0)return null;m();if(this.props.plainText)return l.jsx("span",{children:c});else if(d)return l.jsx("span",{className:"_89h",children:h._("[encrypted message]")});else if(a)return l.jsx(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:l.jsx("div",{children:c}),body:this.$4(c),fallbackBody:c,stripDelimiters:!0,className:"_1e4d"});else return this.renderBody(c)};d.$6=function(a){return b("MessengerSupportedEmojiUtils").isSupportedEmojiKey(a)};d.$5=function(a){a=b("EmoticonEmojiList").emote2emojis[a];return b("MessengerSupportedEmojiUtils").isSupportedEmojiKey(a)?a:null};d.$1=function(a){var b=a.filter(function(a){return a.data&&(a.data.intent_name==="create_event"||a.data.name==="create_event")});return b.length!==0?b:a};d.$2=function(a,c){c===void 0&&(c=this.props);return!!(c.threadID&&b("P2PTriggersUtils").canSeeTriggers(c.threadID)&&b("P2PTriggersUtils").getMatches(a))};return c}(l.PureComponent);a.propTypes={body:(c=b("prop-types")).string,customLike:c.object,isFromViewer:c.bool,metaRanges:c.array,ranges:c.array,threadCustomColor:c.string,threadID:c.string,onContactSelect:c.func,renderLocation:c.oneOf([b("MercuryMessageRenderLocations").CHAT,b("MercuryMessageRenderLocations").MESSENGER,b("MercuryMessageRenderLocations").PAGES])};e.exports=a}),null);