var TWP=window.TWP||{};TWP.Coral=window.TWP.Coral||{};var wp_pb=window.wp_pb||{};
(function($){TWP.Coral.COMMENT_DATA_WRAPPER="coral-data-wrapper";TWP.Coral.COMMENT_EMBED_WRAPPER="coral_talk_embed";TWP.Coral.LOAD_WORKAROUND_ID="coral_load_workaround";TWP.Coral.JWT="coral_jwt";TWP.Coral.containers={};TWP.Coral.debug=window.location.href.indexOf("debug\x3dtrue",0)>0?true:false;var debug=TWP.Coral.debug;TWP.Coral.events={"mutation.CreateLikeAction.success":{eVar26:"comments_like",event:"event80"},"mutation.PostFlag.success":{eVar26:"comments_report",event:"event80"},"plugin.talk-plugin-wapo-permalink.copySuccess":{eVar26:"comments_link",
event:"event80"},"mutation.IgnoreUser.success":{eVar26:"comments_ignore",event:"event80"},DNE1:{eVar26:"comments_respect",event:"event80"},"query.CoralEmbedStream_Embed.ready":{eVar26:"comments loaded",event:"event29"},"query.CoralEmbedStream_Embed.fetchMore.CoralEmbedStream_LoadMoreComments.success":{eVar26:function(evt){var variables=evt.detail.variables&&evt.detail.variables;return variables.parent_id&&variables.parent_id!=""?"view more replies":"view more comments"},event:"event5"},"mutation.PostComment.success":{eVar26:function(evt){var comment=
evt.detail.variables&&evt.detail.variables.input;return comment.parent_id&&comment.parent_id!=""?"reply":"new_thread"},event:"event3"},"ui.AllCommentsPane.viewNewComments":{eVar26:"view new comments",event:"event5"}};var eventMonitors={initEventMonitors:function(){try{var commonVars={pageName:s.pageName,channel:s.channel,eVar1:s.eVar1,prop1:s.prop1,eVar2:s.eVar2,prop2:s.prop2,prop3:s.prop3,prop4:s.prop4,prop5:s.prop5,eVar8:s.eVar8,eVar11:s.eVar11,prop12:s.prop12,eVar17:s.eVar17,prop25:s.prop25,prop33:s.prop33,
eVar33:s.eVar33,eVar58:s.eVar58,prop58:s.prop58,eVar59:s.eVar59,prop59:s.prop59,eVar62:s.eVar62,eVar65:s.eVar65,prop65:s.prop65,eVar70:"coral",prop70:"coral"};for(var key in TWP.Coral.events)if(TWP.Coral.events.hasOwnProperty(key)&&key.indexOf("DNE")<0)document.addEventListener(key,function(evt){if(typeof window.sendDataToOmniture==="function")try{var type=evt.type;var evar26=typeof TWP.Coral.events[type].eVar26=="function"?TWP.Coral.events[type].eVar26(evt):TWP.Coral.events[type].eVar26;window.sendDataToOmniture("coral."+
type,TWP.Coral.events[type].event,Object.assign({},commonVars,{eVar26:evar26}));debug&&window.console&&console.log&&console.log("OMNITURE: "+TWP.Coral.events[type].event+" "+evar26)}catch(err){}},false)}catch(err){}}};var talkController={jwt:localStorage.getItem(TWP.Coral.JWT)||"",dataWrapper:document.getElementById(TWP.Coral.COMMENT_DATA_WRAPPER),coralEmbedWrapper:document.getElementById(TWP.Coral.COMMENT_EMBED_WRAPPER),isFeaturedExplainerSeen:+localStorage.getItem("isFeaturedExplainerSeen")?true:
false,isOffTopicHidden:localStorage.getItem("isOffTopicHidden")=="true"?true:false,init:function(){TWP.Coral.containers["coral_container"]={};for(var i=0;i<talkController.dataWrapper.attributes.length;i++){var attrib=talkController.dataWrapper.attributes[i];TWP.Coral.containers["coral_container"][attrib.name]=attrib.value}TWP.Coral.containers["coral_container"]["parsed-plugin-config"]=JSON.parse(TWP.Coral.containers["coral_container"]["data-plugin-config"].replace(/'/g,'"'));TWP.Coral.containers["coral_container"]["parsed-plugin-config"]["isFeaturedExplainerSeen"]=
talkController.isFeaturedExplainerSeen;debug&&window.console&&console.log&&console.log("pb: isFeaturedExplainerSeeen",talkController.isFeaturedExplainerSeen);TWP.Coral.containers["coral_container"]["parsed-plugin-config"]["isOffTopicHidden"]=talkController.isOffTopicHidden;debug&&window.console&&console.log&&console.log("pb: isOffTopicHidden",talkController.isOffTopicHidden);debug&&window.console&&console.log&&console.log("pb: parsed plugin_config",TWP.Coral.containers["coral_container"]["parsed-plugin-config"]);
var isUser=document.cookie.match(/wapo_secure_login_id=([^;]+)/)?RegExp.$1:"",isCommentsUser=document.cookie.match(/wapo_groups=([^;]+commenting_verified)/)?RegExp.$1:"";wp_pb.register("comments_coral","auth_response",talkController.showAuthStatusMessage);if(isUser.length&&isCommentsUser.length)talkController.checkAuthStatus();else{if(isUser.length&&!isCommentsUser.length)wp_pb.report("comments_coral","auth_response",{status:"incomplete"});else if(!isUser.length)wp_pb.report("comments_coral","auth_response",
{status:"excluded"});talkController.initStream({token:""})}talkController.initFeatureNotfication()},initStream:function(data){window.Coral.Talk.render(document.getElementById(TWP.Coral.COMMENT_EMBED_WRAPPER),{talk:TWP.Coral.containers["coral_container"]["data-talk-url"],asset_url:TWP.Coral.containers["coral_container"]["data-asset-url"],auth_token:data.token,plugin_config:TWP.Coral.containers["coral_container"]["parsed-plugin-config"],events:function(events){events.once("query.CoralEmbedStream_Embed.ready",
function(data){document.dispatchEvent(new CustomEvent("query.CoralEmbedStream_Embed.ready",{detail:data}));if(document.getElementById(TWP.Coral.LOAD_WORKAROUND_ID))document.getElementById(TWP.Coral.LOAD_WORKAROUND_ID).remove()});events.onAny(function(eventName,data){debug&&window.console&&console.log&&console.log(eventName,data);if(eventName==="action.TALK_FEATURED_COMMENTS_ACTIONS_DISMISS_EXPLAINER")localStorage.setItem("isFeaturedExplainerSeen",1);if(eventName==="action.OFFTOPIC_TOGGLE_CHECKBOX"){var currentOffTopicState=
localStorage.getItem("isOffTopicHidden")=="true"?true:false;localStorage.setItem("isOffTopicHidden",!currentOffTopicState)}if(eventName in TWP.Coral.events&&(eventName!=="query.CoralEmbedStream_Embed.ready"||eventName!=="action.OFFTOPIC_TOGGLE_CHECKBOX"||eventName!=="wp.stream.commentCount"||eventName!=="action.TALK_FEATURED_COMMENTS_ACTIONS_DISMISS_EXPLAINER"))document.dispatchEvent(new CustomEvent(eventName,{detail:data}))});events.on("wp.stream.commentCount",wp_pb.StaticMethods.debounce(function(data){document.dispatchEvent(new CustomEvent("wp.stream.commentCount",
{detail:{totalCommentCount:data}}))},400))}})},resolveAuthResponse:function(data){var name=data.profile.display_name;localStorage.setItem("coral_jwt",data.token);wp_pb.report("comments_coral","auth_response",{status:"valid",displayName:name});return data},rejectAuthResponse:function(xhr,status,err){wp_pb.report("comments_coral","auth_response",{status:"excluded"});return{token:"",error:err}},checkAuthStatus:function(){var validateUrl=TWP.Coral.containers["coral_container"]["data-validate-url"]+"?jwt\x3d"+
talkController.jwt;fetch(validateUrl,{method:"GET",credentials:"include",mode:"cors",cache:"default"}).then(function(res){if(res.ok)return res.json();else throw new Error;}).then(talkController.resolveAuthResponse).then(talkController.initStream)["catch"](talkController.rejectAuthResponse)},showAuthStatusMessage:function(data){var msg=talkController.authStatusMessages[data.status](data);document.getElementById("coral_talk_auth_status_target").insertAdjacentHTML("afterbegin",msg)},authStatusMessages:{valid:function(data){var displayName=
decodeURIComponent(data.displayName);return"\x3cdiv id\x3d'talk_welcome'\x3ePosting as \x3cspan class\x3d'talk_display_name'\x3e"+displayName+"\x3c/span\x3e.\x3c/div\x3e"},incomplete:function(){return"\x3cdiv id\x3d'talk_incomplete'\x3e\x3cdiv class\x3d'header'\x3eYour profile is incomplete\x3c/div\x3e\x3cdiv\x3eBefore you can contribute to our community, please visit your \x3ca class\x3d'validate' href\x3d'"+window.TWP.signin.profileurl+encodeURIComponent(window.location.href.split("?")[0])+"\x26commenting\x3d1'\x3eProfile page\x3c/a\x3e in order to complete your profile.\x3c/div\x3e\x3c/div\x3e"},
excluded:function(){return"\x3ca class\x3d'sign-in' id\x3d'talk_not_signed_in' href\x3d'"+TWP.signin.loginurl_page+encodeURIComponent(window.location.href)+"'\x3eSign in to join the conversation\x3c/a\x3e"}},initFeatureNotfication:function(){var authors=TWP.Coral.containers["coral_container"]["data-authors"],siteServiceSection=TWP.Coral.containers["coral_container"]["data-site-service-section"],siteServiceParentSection=siteServiceSection.split("/")[0];if(TWP.Coral.containers["coral_container"]["parsed-plugin-config"]["includeFeatureNotification"]!==
false){var asset_url=TWP.Coral.containers["coral_container"]["parsed-plugin-config"].permalink_base;$("#coral_talk_feature_notification_target").find(".coral-feature-notification").fadeOut("slow");if(window.wp_pb.outputType!=="comment")talkController.coralEmbedWrapper.insertAdjacentHTML("beforeend",'\x3cdiv id\x3d"coral_load_workaround"\x3e\x3cp class\x3d"coral-workaround-load-text"\x3eAre the comments not loading?\x3c/p\x3e\x3ca class\x3d"coral-workaround-load-link" href\x3d"'+asset_url+"\x26tid\x3dsm_talk"+
'" target\x3d"_blank"\x3eOpen this conversation in a separate tab. \x3cspan class\x3d"fa fa-comments"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e');$.ajax({url:"/pb/comments-feature-notifications/?outputType\x3djsonFront"}).always(function(data){if(data.entries&&data.entries.length>0){var entries=data.entries,guid=TWP.Coral.containers["coral_container"]["data-asset-url"].split("?")[0],siteHierarchy=[guid,authors,siteServiceSection,siteServiceParentSection,"comments_sitewide"],keepLooping=true,now,start,
end,notificationScope;$.each(siteHierarchy,function(i,site){$.each(entries,function(j,entry){notificationScope=entry.wrapper.feature.siteServiceID;while(notificationScope.charAt(0)==="/")notificationScope=notificationScope.substr(1);if(notificationScope==site){now=(new Date).getTime();start=entry.wrapper.feature.start||null;end=entry.wrapper.feature.end||null;if((!start||now>start)&&(!end||now<end)){$(entry.notificationContent).hide().appendTo($("#coral_talk_feature_notification_target")).fadeIn("slow");
keepLooping=false}}});return keepLooping});$(".coral-feature-notification-close").on("click",function(){$(this).parent().fadeOut("slow")})}})}}};eventMonitors.initEventMonitors();talkController.init()})(jQuery);