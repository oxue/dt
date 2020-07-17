if (self.CavalryLogger) { CavalryLogger.start_js(["9h7NP"]); }

__d("BaseScrollableArea.react",["BaseScrollableAreaContext","CometVisualCompletionAttributes","React","UserAgent","debounce","resize-observer-polyfill","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useContext,j=c.useEffect,k=c.useImperativeHandle,l=c.useMemo,m=c.useRef,n=c.useState,o={baseScroller:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr"},baseScrollerHorizontal:{flexDirection:"btwxx1t3"},"default":{MsOverflowStyle:"o8kakjsu",MsScrollChaining:"rpm2j7zs",MsScrollRails:"k7i0oixp",WebkitOverflowScrolling:"gvuykj2m",display:"j83agx80",flexDirection:"cbu4d94t",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",zIndex:"du4w35lb"},expanding:{flexBasis:"d8ncny3e",flexGrow:"buofh1pr",minHeight:"tgvbjcpo"},hideScrollbar:{MsOverflowStyle:"q5bimw55",scrollbarWidth:"ofs802cu","::-webkit-scrollbar":{display:"pohlnb88",height:"dkue75c7",width:"mb9wzai9"}},horizontalAuto:{overflowX:"d76ob5m9",overscrollBehaviorX:"qan41l3s"},perspective:{perspective:"l56l04vs",perspectiveOrigin:"r57mb794",position:"l9j0dhe7",transformStyle:"kh7kg01d"},verticalAuto:{overflowY:"eg9m0zos",overscrollBehaviorY:"c3g1iek1"}},p={base:{boxSizing:"rq0escxv",display:"mkhogb32",opacity:"b5wmifdl",paddingTop:"jb3vyjys",paddingEnd:"ph5uu5jm",paddingBottom:"qt6c0cv9",paddingStart:"b3onmgus",pointerEvents:"hzruof5a",position:"pmk7jnqg",right:"kwrap0ej",top:"kr520xx4",transformOrigin:"enuw37q7",transitionDuration:"dpja2al7",transitionProperty:"art1omkt",transitionTimingFunction:"nw2je8n7",width:"hhz5lgdu"},hovered:{opacity:"pedkr2u6",transitionDuration:"z1801hqc"},inner:{backgroundColor:"oj68ptkr",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",height:"datstx6m",width:"k4urcfbm"}},q={base:{backgroundColor:"pwoa4pd7",display:"mkhogb32",height:"datstx6m",opacity:"b5wmifdl",position:"pmk7jnqg",right:"kwrap0ej",top:"kr520xx4",transitionDuration:"qgmjvhk0",transitionProperty:"art1omkt",transitionTimingFunction:"nw2je8n7",width:"hhz5lgdu",":hover":{opacity:"pyaxyem1"}}};function a(a,c){var d=a.children,e=a.expanding;e=e===void 0?!1:e;var f=a.hideScrollbar,r=f===void 0?!1:f,v=a.horizontal;f=a.id;var w=a.onScroll,x=a.onScrollBottom,y=a.onScrollTop,z=a.testid,A=a.vertical;z=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","expanding","hideScrollbar","horizontal","id","onScroll","onScrollBottom","onScrollTop","testid","vertical","xstyle"]);var B=l(function(){return!A||r||v||u()},[A,r,v]),C=n(!1),D=C[0],E=C[1];C=n(!1);var F=C[0],G=C[1];C=n(!1);var H=C[0],I=C[1],J=i(b("BaseScrollableAreaContext")),K=m(null),L=m(null),M=m(null),N=m(null),O=m(null),P=m(0);j(function(){if(B)return;var a=K.current,c=L.current,d=M.current,e=N.current;if(a==null||c==null||d==null||e==null)return;var f=0,g=0,h=function(){e.style.display="none";d.style.display="none";var a=c.getBoundingClientRect(),b=a.height;g=a.top;P.current=c.scrollHeight;a=P.current;a!==c.scrollHeight&&(a=c.scrollHeight);f=Math.pow(b,2)/a;var h=(b-f)/(a-b);d.style.right="0px";e.style.right="0px";d.style.height=a<=b?"0px":f+"px";e.style.height=a+"px";d.style.transform=["matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,0,1,0,\n          0,0,0,-1)","scale("+1/h+")","translateZ("+(1-1/h)+"px)","translateZ(-2px)"].join(" ");d.style.display="block";e.style.display=a<=b?"none":"block"},i=function(a){a.preventDefault();var b=a.clientY;a=c.clientHeight;var d=c.scrollTop;I(!0);var h=P.current/a;a=d/h;var i=function(a){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation()};if(b<g+a||b>g+a+f){var j=b<g+a?-20:20,k=!0,l=window.setInterval(function(){k&&c.scrollTo({top:c.scrollTop+j})},16);a=function a(b){i(b),l&&window.clearInterval(l),window.removeEventListener("mouseup",a,!0),e.removeEventListener("mouseenter",m),e.removeEventListener("mouseleave",n)};var m=function(a){k=!0},n=function(a){k=!1};window.addEventListener("mouseup",a,!0);e.addEventListener("mouseenter",m);e.addEventListener("mouseleave",n);return}var o=function(a){i(a);a=a.clientY-b;c.scrollTo({top:d+a*h})};a=function a(b){i(b),I(!1),window.removeEventListener("mousemove",o,!0),window.removeEventListener("mouseup",a,!0)};window.addEventListener("mousemove",o,!0);window.addEventListener("mouseup",a,!0)},j=b("debounce")(h,100);window.addEventListener("resize",j);e.addEventListener("mousedown",i);var k=new(b("resize-observer-polyfill"))(j);k.observe(a);return function(){window.removeEventListener("resize",j),e.removeEventListener("mousedown",i),k.disconnect(),j.reset()}},[B]);C=function(){E(!0)};var Q=function(){return E(!1)},R=function(a){w&&w(a),G(!0),O.current&&window.clearTimeout(O.current),O.current=window.setTimeout(function(){G(!1)},1e3)};j(function(){return function(){window.clearTimeout(O.current)}},[]);var S=l(function(){return{getDOMNode:function(){return L.current}}},[]);k(c,function(){return S});c=l(function(){return[].concat(J,[S])},[S,J]);return B?h.jsx(b("BaseScrollableAreaContext").Provider,{value:c,children:h.jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(o["default"],e&&o.expanding,r&&o.hideScrollbar,v&&o.horizontalAuto,A&&o.verticalAuto,z),"data-testid":void 0,id:f,onScroll:R,ref:L,children:h.jsxs("div",{className:g(o.baseScroller,v&&!A&&o.baseScrollerHorizontal),children:[y?h.jsx(t,{onVisible:y}):null,d,x?h.jsx(s,{onVisible:x}):null]})}))}):h.jsx(b("BaseScrollableAreaContext").Provider,{value:c,children:h.jsxs("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(o["default"],o.hideScrollbar,e&&o.expanding,o.perspective,v&&o.horizontalAuto,A&&o.verticalAuto,z),"data-testid":void 0,id:f,onMouseEnter:C,onMouseLeave:Q,onScroll:R,ref:L,children:[h.jsxs("div",{className:g(o.baseScroller,v&&!A&&o.baseScrollerHorizontal),ref:K,children:[y?h.jsx(t,{onVisible:y}):null,d,x?h.jsx(s,{onVisible:x}):null]}),h.jsx("div",babelHelpers["extends"]({className:g(q.base)},b("CometVisualCompletionAttributes").IGNORE,{"data-thumb":1,ref:N})),h.jsx("div",babelHelpers["extends"]({className:g(p.base,(D||F||H)&&p.hovered)},b("CometVisualCompletionAttributes").IGNORE,{"data-thumb":1,ref:M,children:h.jsx("div",{className:g(p.inner)})}))]}))})}var r={main:{height:"ay7djpcl",opacity:"b5wmifdl",pointerEvents:"hzruof5a",width:"rfua0xdk"},top:{position:"pmk7jnqg",top:"kr520xx4"}};function s(a){a=a.onVisible;a=b("useVisibilityObserver")({onVisible:a});return h.jsx("div",{className:(g||(g=b("stylex")))(r.main),ref:a})}function t(a){a=a.onVisible;a=b("useVisibilityObserver")({onVisible:a});return h.jsx("div",{className:(g||(g=b("stylex")))(r.main,r.top),ref:a})}function u(){return b("UserAgent").isPlatform("iOS")||b("UserAgent").isPlatform("Android")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Firefox < 64")}e.exports=h.forwardRef(a)}),null);
__d("CometMenuItemBaseRoleContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("CometSeparatorMenuItem.react",["CometMenuItemBaseRoleContext","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useContext,j={separator:{borderTop:"l6v480f0",marginTop:"aahdfvyu",marginEnd:"wkznzc2l",marginBottom:"tvmbv18p",marginStart:"dhix69tm"}};function a(a,c){a=a.xstyle;var d=i(b("CometMenuItemBaseRoleContext"));return h.jsx("div",{className:(g||(g=b("stylex")))([j.separator,a]),ref:c,role:d==="menuitem"?"separator":"presentation"})}e.exports=h.forwardRef(a)}),null);
__d("CometMenuBase.react",["BaseScrollableArea.react","CometErrorBoundary.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometSeparatorMenuItem.react","React","TabbableScopeQuery.react","TetraTextPairing.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={listItem:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",display:"j83agx80",flexDirection:"btwxx1t3",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr"},root:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"cbu4d94t",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso"},sizeFull:{width:"k4urcfbm"},sizeNormal:{width:"geg40m2u"},sizeSmall:{width:"jbcpqwzg"},truncate:{maxHeight:"ktk59qbb"}},j="menu",k={listbox:"option",menu:"menuitem"};function a(a){var c=a.children,d=a.footer,e=a.header,f=a.role;f=f===void 0?j:f;var l=a.size;l=l===void 0?"normal":l;a=a.truncate;a=a===void 0?!1:a;var m=0,n=h.Children.toArray(c).map(function(a){if(a==null)return null;var c=m++;return a.type===b("CometSeparatorMenuItem.react")?a:h.jsx(b("CometErrorBoundary.react"),{fallback:null,children:a},c)});f=k[f];return h.Children.count(c)>0?h.jsx(b("BaseScrollableArea.react"),{horizontal:!1,vertical:!0,xstyle:[i.root,l==="full"&&i.sizeFull,l==="normal"&&i.sizeNormal,l==="small"&&i.sizeSmall,a&&i.truncate],children:h.jsxs(b("CometMenuItemBaseRoleContext").Provider,{value:f,children:[e!=null?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.listItem),role:f,children:h.jsx(b("TetraTextPairing.react"),{headline:e.title,level:3,meta:e.meta,reduceEmphasis:!0})}),h.jsx(b("CometSeparatorMenuItem.react"),{})]}):null,h.jsx(b("CometMenuFocusGroup").FocusGroup,{orientation:"vertical",preventScrollOnFocus:!1,tabScopeQuery:b("TabbableScopeQuery.react"),wrap:!0,children:n}),d!=null?h.jsxs(h.Fragment,{children:[h.jsx(b("CometSeparatorMenuItem.react"),{}),h.jsx("div",{className:(g||(g=b("stylex")))(i.listItem),role:f,children:h.jsx(b("TetraTextPairing.react"),{level:3,meta:d.text})})]}):null]})}):null}e.exports=a}),null);
__d("CometMenuBaseWithPopover.react",["CometMenuBase.react","CometPopover.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h="menu";function a(a,c){var d=a.children,e=a.id,f=a.role;f=f===void 0?h:f;var i=a.withArrow,j=a.testid;j=j===void 0?"comet-menu":j;j=babelHelpers.objectWithoutPropertiesLoose(a,["children","id","role","withArrow","testid"]);return g.Children.count(d)>0?g.jsx(b("CometPopover.react"),{id:e,ref:c,role:f,testid:void 0,withArrow:i,children:g.jsx(b("CometMenuBase.react"),babelHelpers["extends"]({},j,{children:d,role:f}))}):null}e.exports=g.memo(g.forwardRef(a))}),null);
__d("CometMenu.react",["CometMenuBaseWithPopover.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){return g.jsx(b("CometMenuBaseWithPopover.react"),babelHelpers["extends"]({},a,{ref:c}))}e.exports=g.forwardRef(a)}),null);
__d("CometMenuItemHighlightContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.createContext(!1)}),null);
__d("CometMenuItemBase.react",["BaseFocusRing.react","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometMenuItemHighlightContext","CometPressable.react","CometPressableOverlay.react","CometTextWithBadge.react","React","TetraText.react","TetraTextPairing.react","mergeRefs","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useCallback,j=c.useContext,k=c.useEffect,l=c.useMemo,m=c.useRef,n={aux:{marginStart:"ozuftl9m"},content:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",justifyContent:"i1fnvgqd",minWidth:"hpfvmrgz"},disabled:{cursor:"rj84mg9z"},listItem:{alignItems:"bp9cbjyn",appearance:"dwo3fsh8",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"j83agx80",flexDirection:"btwxx1t3",flexShrink:"pfnyh3mw",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr",position:"l9j0dhe7",textAlign:"i1ao9s8h",zIndex:"du4w35lb"},listItemAlignedCenter:{alignItems:"bp9cbjyn"},listItemWithIcon:{paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}};function a(a,c){var d=a.alignCenter;d=d===void 0?!1:d;var e=a.aux,f=a.badge,o=a.bodyColor,p=a.bodyText,q=a.disabled,r=q===void 0?!1:q;q=a.download;var s=a.href,t=a.iconNode,u=a.id,v=a.onClick,w=a.onHoverIn,x=a.onHoverOut,y=a.onPressIn,z=a.passthroughProps,A=a.preventClosingMenuOnSelect;A=A===void 0?!1:A;var B=a.preventLocalNavigation,C=a.primaryColor,D=a.primaryText,E=a.role,F=a.routeTarget,G=a.secondaryColor,H=a.secondaryText,I=a.target,J=a.testid;J=a.visuallyFocused;var K=J===void 0?!1:J;J=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","aux","badge","bodyColor","bodyText","disabled","download","href","iconNode","id","onClick","onHoverIn","onHoverOut","onPressIn","passthroughProps","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","visuallyFocused"]);var L=m(null);a=j(b("CometMenuContext"));var M=A!==!0&&a?a.onClose:null;A=s!=null||F!=null||I!=null?{download:q,passthroughProps:z,preventLocalNavigation:B,routeTarget:F,target:I,url:s}:void 0;a=i(function(a){M!=null&&M(),v&&v(a)},[v,M]);q=j(b("CometMenuItemBaseRoleContext"));F=(B=(z=E)!=null?z:q)!=null?B:void 0;var N=m(K);k(function(){var a=L.current;!N.current&&K&&a!=null&&a.scrollIntoView({block:"nearest"})},[K]);I=l(function(){return b("mergeRefs")(c,L)},[c]);var O=f!=null?h.jsx(b("CometTextWithBadge.react"),{badgeAfter:typeof f==="number"?h.jsx(b("TetraText.react"),{color:r?"disabled":C,type:"body4",children:f}):f,children:D}):D;return h.jsx(b("CometMenuFocusGroup").FocusItem,{children:h.jsx(b("CometPressable.react"),babelHelpers["extends"]({},J,{disabled:r,display:"inline",id:u,linkProps:A,onHoverIn:w,onHoverOut:x,onPress:a,onPressIn:y,overlayDisabled:!0,ref:I,role:F,testid:void 0,xstyle:[n.listItem,d&&n.listItemAlignedCenter,t!=null&&n.listItemWithIcon,r&&n.disabled,K&&b("BaseFocusRing.react").focusRingXStyle],children:function(a){var c=a.focused,d=a.focusVisible,f=a.hovered;a=a.pressed;return h.jsxs(b("CometMenuItemHighlightContext").Provider,{value:c&&d||f,children:[t,h.jsxs("div",{className:(g||(g=b("stylex")))(n.content),children:[h.jsx(b("TetraTextPairing.react"),{body:p,bodyColor:o,headline:O,headlineColor:r?"disabled":C,level:4,meta:H,metaColor:G,reduceEmphasis:!0}),e!=null&&h.jsx("div",{className:(g||(g=b("stylex")))(n.aux),children:e})]}),h.jsx(b("CometPressableOverlay.react"),{focusVisible:d||K,hovered:f,pressed:a,radius:4})]})}}))})}e.exports=h.forwardRef(a)}),null);
__d("CometMenuItemIcon.react",["CometImageIcon.react","IconSource","ImageIconSource","React","TetraIcon.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a){var c=a.icon,d=a.iconColor,e=a.iconCssSelectorId;a=a.use;a=a===void 0?"normal":a;return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe(a==="contained"||a==="contained_small_icon"?{"align-items-1":"bp9cbjyn","background-color-1":"tdjehn4e","border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","display-1":"j83agx80","height-1":"tv7at329","justify-content-1":"taijpn5t","min-width-1":"odlk74j0"}:{},a==="normal"?{"align-self-1":"tiyi1ipj","height-1":"jnigpg78","width-1":"odw8uiq3"}:null,{"margin-end-1":"tvfksri0"}),id:e,children:c instanceof b("IconSource")?h.jsx(b("TetraIcon.react"),{color:(e=d)!=null?e:"secondary",icon:c}):c instanceof b("ImageIconSource")?h.jsx(b("TetraIcon.react"),{icon:c}):h.jsx(b("CometImageIcon.react"),babelHelpers["extends"]({},c,{size:a==="contained"?36:20}))})}e.exports=h.memo(a)}),null);
__d("CometMenuItem.react",["CometBadge.react","CometMenuItemBase.react","CometMenuItemIcon.react","React","TetraTextPairing.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.auxItem,e=a.icon,f=a.iconCssSelectorId,h=a.iconStyle;h=h===void 0?"normal":h;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","icon","iconCssSelectorId","iconStyle"]);var i=null;d!=null&&(i=d.type==="text"?g.jsx(b("TetraTextPairing.react"),{level:3,meta:d.auxText}):g.jsx(b("CometBadge.react"),{color:d.color}));return g.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:i,iconNode:e!=null?g.jsx(b("CometMenuItemIcon.react"),{icon:e,iconCssSelectorId:f,use:h}):null,ref:c}))}e.exports=g.forwardRef(a)}),null);
__d("CometFocusTableContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({FocusCell:null,FocusRow:null,FocusTable:null});e.exports=c}),null);
__d("TetraButtonGroup.react",["CometFocusTableContext","CometRow.react","CometRowItem.react","React","TetraButton.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useContext,j={hiddenButton:{height:"do00u71z",visibility:"kr9hpln1"},resetFlexBasis:{flexBasis:"mg4g778l"}};function k(a){var c=i(b("CometFocusTableContext"));c=c.FocusCell;a=a.children;return c!=null?h.jsx(c,{children:h.jsx("div",{role:"gridcell",children:a})}):a}function a(a){var c=a.align,d=c===void 0?"justify":c;c=a.direction;c=c===void 0?"forward":c;var e=a.paddingHorizontal,f=a.paddingTop,i=a.primary,l=a.secondary,m=a.size,n=a.wrap;n=n===void 0?"none":n;var o=[],p=[],q=i.ref,r=i.testid;r=babelHelpers.objectWithoutPropertiesLoose(i,["ref","testid"]);i=h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},r,{ref:q,size:m,testid:void 0}))});o.push({hidden:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},r,{disabled:!0,padding:"normal",size:m})),visible:i});if(l!=null){q=l.ref;r=l.testid;r=babelHelpers.objectWithoutPropertiesLoose(l,["ref","testid"]);o.push({hidden:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},r,{disabled:!0,padding:"normal",size:m,type:"secondary"})),visible:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},r,{ref:q,size:m,testid:void 0,type:"secondary"}))})})}else if(a.secondaryIcon!=null)p.push(h.jsx(b("CometRowItem.react"),{children:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},a.secondaryIcon,{labelIsHidden:!0,size:m,type:"secondary"}))})},"secondary-icon"));else if(a.secondaryIconGroup!=null){l=a.secondaryIconGroup;r=l.primaryIcon;q=l.secondaryIcon;p.push(h.jsx(b("CometRowItem.react"),{children:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},r,{labelIsHidden:!0,size:m,type:"secondary"}))})},"secondary-icon-1"),h.jsx(b("CometRowItem.react"),{children:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},q,{labelIsHidden:!0,size:m,type:"secondary"}))})},"secondary-icon-2"))}a=o.map(function(a,c){return h.jsx(b("CometRowItem.react"),{expanding:d==="justify",xstyle:j.resetFlexBasis,children:o.map(function(a,d){return h.jsx(h.Fragment,{children:c!==d?h.jsx("div",{"aria-hidden":!0,className:(g||(g=b("stylex")))(j.hiddenButton),children:a.hidden}):a.visible},d)})},c)});l=[h.jsx(b("CometRowItem.react"),{expanding:d==="justify",xstyle:j.resetFlexBasis,children:i},"primary")].concat(p);r=o.length===2;return h.jsx(b("CometRow.react"),{align:d,direction:c,paddingHorizontal:e,paddingTop:f,spacing:8,wrap:n,children:r?a:l})}e.exports=a}),null);
__d("CometConfirmationDialogImpl.react",["fbt","CometCardedDialog.react","CometTrackingNodeProvider.react","React","TetraButtonGroup.react","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useCallback;function a(a){var c=a.body,d=a.cancel,e=a.confirm,f=a.disabled;f=f===void 0?!1:f;var j=a.onClose;a=a.title;var k=i(function(){j(!0)},[j]),l=i(function(){j(!1)},[j]);return h.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:163,children:h.jsxs(b("CometCardedDialog.react"),{onClose:l,testid:void 0,title:a,titleHorizontalAlignment:"start",withCloseButton:!0,children:[h.jsx("div",{className:"l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",children:h.jsx(b("TetraText.react"),{type:"body3",children:c})}),h.jsx("div",{className:"a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys bkfpd7mw btwxx1t3 j83agx80",children:h.jsx(b("TetraButtonGroup.react"),{direction:"backward",paddingHorizontal:16,primary:{disabled:f,label:(a=e)!=null?a:g._("Confirm"),onPress:k,testid:"CometConfirmationDialogConfirmButton"},secondary:{disabled:f,label:(c=d)!=null?c:g._("Cancel"),onPress:l,reduceEmphasis:!0,testid:"CometConfirmationDialogCancelButton"}})})]})})}e.exports=a}),null);
__d("XConsentCookieController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cookie/consent/",{})}),null);
__d("DeferredCookie",["requireCond","Cookie","CookieConsent","cr:1109759","SubscriptionList","cr:1083116","XConsentCookieController","cr:1069930","promiseDone","cr:1083117"],(function(a,b,c,d,e,f){"use strict";var g,h=new Map();a={shouldAddDefaultListener:!0,defaultHandler:null,sentConsentToServer:!1,callbacks:new(b("SubscriptionList"))(),addToQueue:function(a,c,d,e,f,i,j){if(!(g||(g=b("CookieConsent"))).isDeferCookies()){f?b("Cookie").setWithoutChecksIfFirstPartyContext(a,c,d,e,j):b("Cookie").setWithoutChecks(a,c,d,e,j);return}if(h.has(a))return;h.set(a,{name:a,value:c,nMilliSecs:d,path:e,firstPartyOnly:f,secure:j});i&&this.addDefaultInteractionListener()},flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing:function(){h.forEach(function(a,c){a.firstPartyOnly?b("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure):b("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure)}),(g||(g=b("CookieConsent"))).setConsented(),this.callbacks.fireCallbacks(),h=new Map(),this.removeDefaultInteractionListener()},flushAllCookies:function(){this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();if(!this.sentConsentToServer){var a=b("XConsentCookieController").getURIBuilder().getURI();this.sentConsentToServer=!0;b("cr:1069930")!=null?b("promiseDone")(b("cr:1069930")(a.toString(),{data:{},method:"POST"}),null,function(a){b("cr:1083117")&&b("cr:1083117")("Cookie consent has not been set successfully: "+a.errorMsg,"comet_infra")}):b("cr:1083116")!=null&&new(b("cr:1083116"))(a).send()}},removeDefaultInteractionListener:function(){this.shouldAddDefaultListener=!1,this.defaultHandler&&(window.removeEventListener?window.removeEventListener("click",this.defaultHandler,!0):document.detachEvent&&document.detachEvent("onclick",this.defaultHandler),this.defaultHandler=null)},addDefaultInteractionListener:function(a){this.shouldAddDefaultListener&&(this.shouldAddDefaultListener=!1,this.defaultHandler=a!=null?a:this.baseInteractionHandler.bind(this),this._attachDefaultHandler())},setDefaultInteractionListener:function(a){this.removeDefaultInteractionListener(),this.defaultHandler=a,this._attachDefaultHandler()},registerCallbackOnCookieFlush:function(a){!(g||(g=b("CookieConsent"))).isDeferCookies()?a():this.callbacks.add(a)},baseInteractionHandler:function(a){var c=a.target;if(!(c instanceof HTMLElement))return;if(a instanceof MouseEvent&&!this.isValidClick(a))return;b("cr:1109759")!=null&&!b("cr:1109759").isBlacklisted(c)&&this.flushAllCookies()},isValidClick:function(a){return a.which===void 0?!0:a.which==1},canEmbedThirdPartyPixel:function(){return(g||(g=b("CookieConsent"))).isCookiesBlocked()||(g||(g=b("CookieConsent"))).isDeferCookies()?!1:h.size===0},_attachDefaultHandler:function(){window.addEventListener?window.addEventListener("click",this.defaultHandler,!0):document.attachEvent&&document.attachEvent("onclick",this.defaultHandler)}};e.exports=a}),null);
__d("MWChatMultitabCookieWriter.bs",["gkx","qex","DeferredCookie","MWChatThreadId.bs","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("qex")._("1489057");c=c||b("gkx")("1578502");var d=a.chatHeads.map(function(a){return{i:b("MWChatThreadId.bs").serializeFuture(a)}});a=a.openTabsState;if(c&&a.length===1){c=a[0];a=c.threadID;c=a?b("MWChatThreadId.bs").serializeFuture(a[0]):void 0}else c=void 0;a=JSON.stringify({t3:d,utc3:Date.now(),lm3:c,v:1});if(a!==void 0){b("DeferredCookie").addToQueue("presence","C"+a,0,"",!1,!1,!0);return 0}else{b("recoverableViolation")("Failed to serialize cookie","messenger_comet");return 0}}c=1;f.version=c;f.write=a}),null);
__d("MWChatTabCookieWriter.bs",["DeferredCookie","MWChatThreadId.bs","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.chatHeads.map(function(a){return{i:b("MWChatThreadId.bs").serializeFuture(a)}});a=a.openTabState;if(a!==void 0){a=a.threadID;a=a?b("MWChatThreadId.bs").serializeFuture(a[0]):"l"}else a=void 0;c=JSON.stringify({t3:c,utc3:Date.now(),lm3:a,v:1});if(c!==void 0){b("DeferredCookie").addToQueue("presence","C"+c,0,"",!1,!1,!0);return 0}else{b("recoverableViolation")("Failed to serialize cookie","messenger_comet");return 0}}c=1;f.version=c;f.write=a}),null);