if (self.CavalryLogger) { CavalryLogger.start_js(["FEIcE"]); }

__d("BirthdayCometTodaysBirthdaysDialogQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},g={kind:"Literal",name:"first",value:1},h={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},i=[{alias:null,args:null,kind:"ScalarField",name:"amount",storageKey:null}],j=[d],k={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},p={kind:"InlineFragment",selections:[c],type:"Node",abstractKey:"__isNode"},q={alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},r={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},s={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[c,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"BirthdayCometTodaysBirthdaysDialogQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[b,{args:null,kind:"FragmentSpread",name:"BirthdayCometTodaysBirthdays_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"BirthdayCometTodaysBirthdaysDialogQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[b,c],storageKey:null},{alias:null,args:[{kind:"Literal",name:"birthday_in_range__relative_end_day",value:0},{kind:"Literal",name:"birthday_in_range__relative_start_day",value:0},{kind:"Literal",name:"is_memorialized",value:!1}],concreteType:"AllFriendsConnection",kind:"LinkedField",name:"all_friends",plural:!1,selections:[{alias:null,args:null,concreteType:"AllFriendsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[b,{kind:"InlineFragment",selections:[c,{alias:null,args:null,concreteType:"Date",kind:"LinkedField",name:"birthdate",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"day",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"month",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"year",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_posted_for_birthday",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_post",storageKey:null},f,{alias:null,args:[g,{kind:"Literal",name:"is_active",value:!0},{kind:"Literal",name:"promotional_sources",value:["BIRTHDAY"]}],concreteType:"FundraisersOwnedConnection",kind:"LinkedField",name:"fundraisers_owned",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[b,c,{kind:"InlineFragment",selections:[{alias:"fundraiserID",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"campaign_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[b,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[h],storageKey:null},c],storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"amount_raised",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"goal_amount",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_progress_text",plural:!1,selections:j,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"days_left_text",plural:!1,selections:j,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donation_disabled_reason_message",plural:!1,selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[k,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[b,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[m,n,h,o],storageKey:null},p],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[k,l,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[k,l,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[b,{kind:"InlineFragment",selections:[c,e],type:"User",abstractKey:null},p],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[b,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[c,{kind:"InlineFragment",selections:[q],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[r,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[r,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},p],storageKey:null},k,l],storageKey:null},d],storageKey:null},{alias:null,args:[{kind:"Literal",name:"donate_ref",value:"BIRTHDAY_REMINDER"},{kind:"Literal",name:"source",value:"BIRTHDAY_REMINDER"}],kind:"ScalarField",name:"mobile_donate_url",storageKey:'mobile_donate_url(donate_ref:"BIRTHDAY_REMINDER",source:"BIRTHDAY_REMINDER")'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"beneficiary",plural:!1,selections:[b,c,e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"payment_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"receiver_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"psd_agreement_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fundraiser_campaign_type",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_ended",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_share_fundraiser",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_manage",storageKey:null},{alias:null,args:null,concreteType:"FundraiserCreatorManagement",kind:"LinkedField",name:"creator_management",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_management_share_placeholder_text",plural:!1,selections:j,storageKey:null}],storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"},{kind:"InlineFragment",selections:[f],type:"Entity",abstractKey:"__isEntity"}],type:"Fundraiser",abstractKey:"__isFundraiser"}],storageKey:null}],storageKey:'fundraisers_owned(first:1,is_active:true,promotional_sources:["BIRTHDAY"])'},{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[h,o,m,n],storageKey:null},{kind:"InlineFragment",selections:[q,f],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[b,c,s],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[g],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[c,s],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],type:"Actor",abstractKey:"__isActor"}],type:"User",abstractKey:null},p],storageKey:null}],storageKey:null}],storageKey:"all_friends(birthday_in_range__relative_end_day:0,birthday_in_range__relative_start_day:0,is_memorialized:false)"}],storageKey:null}]},params:{id:"3273789656021327",metadata:{relayPreloadable:!0},name:"BirthdayCometTodaysBirthdaysDialogQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("BirthdayCometTodaysBirthdaysDialog.react",["fbt","BirthdayCometTodaysBirthdays.react","CometCardedDialog.react","CometDialogCloseCallbackContext.react","CometRelay","React","TetraButton.react","XCometBirthdayEventControllerRouteBuilder","recoverableViolation","stylex","BirthdayCometTodaysBirthdaysDialogQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("CometDialogCloseCallbackContext.react").CometDialogCloseCallbackContextProvider;b("CometRelay").graphql;var j=b("CometRelay").usePreloadedQuery,k=b("React"),l=b("XCometBirthdayEventControllerRouteBuilder").buildURL({}),m=h!==void 0?h:h=b("BirthdayCometTodaysBirthdaysDialogQuery.graphql");function a(a){var c=a.props;a=a.queries;a=j(m,a.todaysBirthdaysQueryReference);a=a.viewer;if(a==null){b("recoverableViolation")("viewer was nullish for today birthdays","comet_ui");return null}return k.jsx(b("CometCardedDialog.react"),{onClose:c.onClose,title:g._("Friends' Birthdays"),withCloseButton:!0,children:k.jsx(i,{onClose:c.onClose,children:k.jsxs(k.Fragment,{children:[k.jsx(b("BirthdayCometTodaysBirthdays.react"),{viewer:a}),k.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc jb3vyjys bkfpd7mw btwxx1t3 j83agx80",children:k.jsx(b("TetraButton.react"),{label:g._("See Upcoming Birthdays"),linkProps:{url:l},type:"secondary"})})]})})})}e.exports=a}),null);
__d("getGenderConst",["GenderConst"],(function(a,b,c,d,e,f){"use strict";function a(a){switch(a){case"FEMALE":return b("GenderConst").FEMALE_SINGULAR;case"MALE":return b("GenderConst").MALE_SINGULAR;case"NEUTER":return b("GenderConst").NEUTER_SINGULAR;case"UNKNOWN":default:return b("GenderConst").UNKNOWN_SINGULAR}}e.exports=a}),null);