if (self.CavalryLogger) { CavalryLogger.start_js(["2m7zw"]); }

__d("MWChatSolidReactionSettingDefault",[],(function(a,b,c,d,e,f){"use strict";function a(){return!1}e.exports={params:null,preload:null,query:null,useIsSolid:a}}),null);
__d("MessengerWebDeltasTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerWebDeltasLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerWebDeltasLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerWebDeltasLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDeltaEvent=function(a){this.$1.delta_event=a;return this};c.setDeltaType=function(a){this.$1.delta_type=a;return this};c.setIgnoreReason=function(a){this.$1.ignore_reason=a;return this};c.setSyncSeqID=function(a){this.$1.sync_seq_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={delta_event:!0,delta_type:!0,ignore_reason:!0,sync_seq_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("MessengerWebDeltasTypedLogger.bs",["MessengerWebDeltasTypedLogger"],(function(a,b,c,d,e,f){"use strict";function a(a){return new(b("MessengerWebDeltasTypedLogger"))()}f.messengerWebDeltasTypedLogger=a}),null);