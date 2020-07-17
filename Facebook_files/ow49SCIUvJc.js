if (self.CavalryLogger) { CavalryLogger.start_js(["rFgSP"]); }

__d("CometGamingLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3652633918099821",metadata:{relayPreloadable:!0},name:"CometGamingLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3125695937485302",metadata:{relayPreloadable:!0},name:"CometGamingVideoRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootHeroBannerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3155156577911673",metadata:{relayPreloadable:!0},name:"CometGamingVideoRootHeroBannerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubHeaderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3466416693382929",metadata:{relayPreloadable:!0},name:"CometGamingVideoGameHubHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3043482089098720",metadata:{relayPreloadable:!0},name:"CometGamingVideoGameHubRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometDiscoverContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3033567350066467",metadata:{relayPreloadable:!0},name:"GroupsCometDiscoverContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometCrossGroupFeedRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4113939862011080",metadata:{relayPreloadable:!0},name:"CometCrossGroupFeedRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2721684854600574",metadata:{relayPreloadable:!0},name:"GroupsCometLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeFeedRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3395531963799057",metadata:{relayPreloadable:!0},name:"CometVideoHomeFeedRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometBookmarksRoot.entrypoint",["CometClassicHomeLeftRailContainerQuery$Parameters","JSResource","WebPixelRatio","qex"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=b("qex")._("1478254")===!0?10:9;b("qex")._("1511818")===!0&&(a+=3);return{queries:{menuContainerQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:b("CometClassicHomeLeftRailContainerQuery$Parameters"),variables:{numExploreBookmarks:a,removeProfileBookmark:b("qex")._("1478254")===!0,scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("CometBookmarksRoot.react").__setRef("CometBookmarksRoot.entrypoint")};e.exports=a}),null);
__d("buildCometGamingRoute.entrypoint",["JSResource","createContentAreaCompoundEntryPointBuilder","CometGamingLeftRailContainerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("CometGamingRoot.react").__setRef("buildCometGamingRoute.entrypoint"),function(a){return{leftRailQueryReference:{parameters:b("CometGamingLeftRailContainerQuery$Parameters"),variables:{}}}})}),null);
__d("CometGamingVideoRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGamingRoute.entrypoint","CometGamingVideoRootContentQuery$Parameters","CometGamingVideoRootHeroBannerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get();e.exports=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometGamingVideoRoot.react").__setRef("CometGamingVideoRoot.entrypoint"),function(){return{queries:{contentQueryReference:{parameters:b("CometGamingVideoRootContentQuery$Parameters"),variables:{scale:g}},heroBannerQueryReference:{parameters:b("CometGamingVideoRootHeroBannerQuery$Parameters"),variables:{scale:g}}}}})}),null);
__d("CometGamingVideoGameHubRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGamingRoute.entrypoint","CometGamingVideoGameHubRootContentQuery$Parameters","CometGamingVideoGameHubHeaderQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get();e.exports=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometGamingVideoGameHubRoot.react").__setRef("CometGamingVideoGameHubRoot.entrypoint"),function(a){return{queries:{contentQueryReference:{parameters:b("CometGamingVideoGameHubRootContentQuery$Parameters"),variables:{game_id:a.routeProps.game_id,params:{game_id:a.routeProps.game_id},scale:g}},headerQueryReference:{parameters:b("CometGamingVideoGameHubHeaderQuery$Parameters"),variables:{params:{game_id:a.routeProps.game_id}}}}}})}),null);
__d("buildCometGroupsTabRoute.entrypoint",["JSResource","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","GroupsCometLeftRailContainerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("GroupsCometTabRoot.react").__setRef("buildCometGroupsTabRoute.entrypoint"),function(a){return{leftRailQueryReference:{parameters:b("GroupsCometLeftRailContainerQuery$Parameters"),variables:{adminGroupsCount:3,memberGroupsCount:10,scale:b("WebPixelRatio").get()}}}})}),null);
__d("GroupsCometDiscoverRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGroupsTabRoute.entrypoint","GroupsCometDiscoverContentQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("buildCometGroupsTabRoute.entrypoint")(b("JSResource")("GroupsCometDiscoverRoot.react").__setRef("GroupsCometDiscoverRoot.entrypoint"),function(a){return{queries:{discoverQueryReference:{parameters:b("GroupsCometDiscoverContentQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}})}),null);
__d("CometCrossGroupFeedRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGroupsTabRoute.entrypoint","CometCrossGroupFeedRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";e.exports=b("buildCometGroupsTabRoute.entrypoint")(b("JSResource")("CometCrossGroupFeedRoot.react").__setRef("CometCrossGroupFeedRoot.entrypoint"),function(a){return{queries:{feedQueryReference:{parameters:b("CometCrossGroupFeedRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometCrossGroupFeedRootQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"GROUP",feedbackSource:69,focusCommentID:null,isComet:!0,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"groups_tab",scale:b("WebPixelRatio").get(),useDefaultActor:!1}}}}})}),null);