webpackJsonp(["loader.DashMenu"],{"4HzD":function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,"._2Do1vo-n,._2em4mS0v{text-decoration:none}._2Do1vo-n:active,._2Do1vo-n:focus,._2Do1vo-n:hover{text-decoration:underline}",""]),t.locals={link:"_2em4mS0v",linkProfileStatsLabel:"_2Do1vo-n"}},APUj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),r=n.n(a),o=n("Zx67"),i=n.n(o),l=n("Zrlr"),s=n.n(l),c=n("wxAW"),d=n.n(c),u=n("zwoO"),h=n.n(u),m=n("Pf15"),f=n.n(m),p=n("iuYP"),_=n("GiK3"),g=n.n(_),w=n("Mpbj"),v=n.n(w),k=n("7t5w"),E=n("4n+p"),y=n("bndy"),b=n("qX3G"),C=Object(y.createSelector)([b.b],function(e){return{loggedInUser:e}}),S={scribeAction:k.d,scribePageImpression:k.e},M=Object(E.connect)(C,S),O=M,F=n("bgPG"),N=n("Q3uQ"),D=n("x+Yi"),L=n("Dxna"),I=n("KSGD"),x=n("cM/+"),P=n("GWs/"),A=n("hUoQ"),R=n("4vsE"),T=n.n(R),H=n("K0rI"),U=n.n(H);n.d(t,"DashMenu",function(){return Z});var z=n("ORNw"),G={page:"dash"},W=z.formatMessage("Account"),j=z.formatMessage("Followers"),q=z.formatMessage("Following"),B=z.numberFormatter(),K=z.numberFormatter({compact:"short",maximumFractionDigits:1}),V=function(e){var t=e.count,n=e.label,a=e.link,r=e.onClick,o=e.style;return g.a.createElement(L.a,{className:U.a.linkProfileStatsLabel,link:a,onClick:r,style:[x.a.linkProfileStats,o]},g.a.createElement(v.a,{color:"normal",weight:"bold"},t<1e4?B(t):K(t)," "),g.a.createElement(v.a,{color:"deepGray",size:"small"},n))},Z=function(e){function t(){var e,n,a,o;s()(this,t);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return n=a=h()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(c))),a._handleMenuItemClick=function(e){return function(){var t=a.props,n=t.scribeAction,o=t.scribeNamespace,i=t.onClose;e&&n(r()({},o,{section:"overflow_menu",element:e,action:"click"})),i&&i()}},a._handleProfileClick=a._handleMenuItemClick("profile_overflow_item"),a._handleSimpleClick=a._handleMenuItemClick(),o=n,h()(a,o)}return f()(t,e),d()(t,[{key:"componentWillMount",value:function(){var e=this.props;(0,e.scribePageImpression)(e.scribeNamespace)}},{key:"render",value:function(){var e=this.props,t=e.simplifiedMenu,n=e.loggedInUser,a=n.followers_count,r=n.friends_count,o=n.name,i=n.profile_image_url_https,l=n.protected,s=n.screen_name,c=n.translator_type,d=n.verified,u=e.preferredHorizontalOrientation,h=e.onClose;return g.a.createElement(D.default,{isFixed:!0,onDismiss:h,preferredHorizontalOrientation:u},g.a.createElement(T.a,{style:x.a.header},g.a.createElement(T.a,{importantForAccessibility:"no-hide-descendants",style:[x.a.item,x.a.itemAccount]},g.a.createElement(P.default,{circle:!0,style:[x.a.avatar],uri:i,userName:o})),g.a.createElement(T.a,null,g.a.createElement(L.a,{accessibilityLabel:W,className:U.a.link,link:p.d("/"+s),onClick:this._handleProfileClick,style:[x.a.item,x.a.userNames]},g.a.createElement(A.a,{badgeContext:"account",isProtected:l,isVerified:d,name:o,translatorType:c}),g.a.createElement(v.a,{color:"deepGray",size:"small"},"@",s))),g.a.createElement(T.a,{style:[x.a.item,x.a.itemProfileStats]},g.a.createElement(V,{count:r,label:q,link:p.d("/"+s+"/following"),onClick:this._handleSimpleClick,style:x.a.linkProfileStatsLeft}),g.a.createElement(V,{count:a,label:j,link:p.d("/"+s+"/followers"),onClick:this._handleSimpleClick}))),g.a.createElement(N.a,{onClose:h,simplifiedMenu:t}))}}]),t}(g.a.Component);Z.defaultProps={simplifiedMenu:!1},Z.contextTypes={featureSwitch:I.object.isRequired};t.default=Object(F.b)(G)(O(Z))},ChAb:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=a(r),i=n("eVdM"),l=a(i),s=n("GiK3"),c=a(s),d=n("sT3W"),u=a(d),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.default)("svg",(0,o.default)({},e,{style:[u.default.root,e.style],viewBox:"0 0 24 24"}),c.default.createElement("g",null,c.default.createElement("path",{d:"M19.75 22a.755.755 0 0 1-.447-.147L12 16.433l-7.303 5.42A.75.75 0 0 1 3.5 21.25v-17C3.5 3.01 4.51 2 5.75 2h12.5c1.24 0 2.25 1.01 2.25 2.25v17a.75.75 0 0 1-.75.75zM12 14.75a.76.76 0 0 1 .447.147L19 19.76V4.25a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75v15.51l6.553-4.862A.74.74 0 0 1 12 14.75z"})))};h.metadata={height:24,width:24},t.default=h},HXFq:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=a(r),i=n("eVdM"),l=a(i),s=n("GiK3"),c=a(s),d=n("sT3W"),u=a(d),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.default)("svg",(0,o.default)({},e,{style:[u.default.root,e.style],viewBox:"0 0 24 24"}),c.default.createElement("g",null,c.default.createElement("path",{d:"M23.16 11.285h-5.708l1.22-1.22a.749.749 0 1 0-1.06-1.06l-2.5 2.5a.747.747 0 0 0 0 1.06l2.5 2.5a.745.745 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-1.22-1.22h5.707a.75.75 0 0 0 0-1.5zm-14.475.531c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.115-4.513-4.645-4.513S4.42 3.343 4.04 6.17c-.273 2.022-.01 3.46.805 4.39.967 1.107 2.484 1.256 3.84 1.256zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212s2.997 2.013 3.158 3.212c.208 1.55.057 2.627-.45 3.205-.454.52-1.265.743-2.71.743s-2.253-.222-2.71-.743c-.505-.578-.656-1.656-.448-3.205zm11.439 12.868c-.876-3.526-4.28-5.99-8.28-5.99S1.283 15.71.407 19.237c-.173.692-.03 1.4.394 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82a2.24 2.24 0 0 0 .394-1.94zm-1.575 1.016c-.127.16-.317.246-.553.246H2.532c-.235 0-.426-.085-.552-.246a.753.753 0 0 1-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"})))};h.metadata={height:24,width:24},t.default=h},Jnfv:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=a(r),i=n("eVdM"),l=a(i),s=n("GiK3"),c=a(s),d=n("sT3W"),u=a(d),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.default)("svg",(0,o.default)({},e,{style:[u.default.root,e.style],viewBox:"0 0 24 24"}),c.default.createElement("g",null,c.default.createElement("path",{d:"M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5a.75.75 0 0 0-.75.75v15.5c0 .413.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H4.25z"}),c.default.createElement("path",{d:"M17 8.64H7a.75.75 0 0 1 0-1.5h10a.75.75 0 1 1 0 1.5zm0 4.11H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5zm-5 4.11H7a.75.75 0 1 1 0-1.5h5a.75.75 0 0 1 0 1.5z"})))};h.metadata={height:24,width:24},t.default=h},K0rI:function(e,t,n){var a=n("4HzD");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0};r.transform=void 0;n("MTIv")(a,r);a.locals&&(e.exports=a.locals)},MRPs:function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments[1];switch(t.type){case b.REQUEST:var n=t.meta.direction;return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{fetchStatus:d()({},e.pendingFollowers.fetchStatus,h()({},n,E.a.LOADING))})});case b.SUCCESS:var a=e.pendingFollowers.ids,r=t.meta.direction,o=t.payload.result,i=o.ids.length?g()(a.concat(o.ids)):a;return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{atEnd:"0"===o.next_cursor_str,cursor:o.next_cursor_str,errors:null,ids:i,fetchStatus:d()({},e.pendingFollowers.fetchStatus,h()({},r,E.a.LOADED))})});case b.FAILURE:var l=t.meta.direction;return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{errors:t.payload,fetchStatus:d()({},e.pendingFollowers.fetchStatus,h()({},l,E.a.FAILED))})});case C.REQUEST:var c=e.pendingFollowers.hydratingStatus!==E.a.LOADED?E.a.LOADING:e.pendingFollowers.hydratingStatus;return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{hydratingStatus:c})});case C.SUCCESS:var u=e.pendingFollowers.hydratedIds,m=t.meta.ids.length?g()(u.concat(t.meta.ids)):u;return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{hydratedIds:m,hydratingStatus:E.a.LOADED})});case C.FAILURE:var f=e.pendingFollowers.hydratingStatus!==E.a.LOADED?E.a.FAILED:E.a.LOADED;return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{hydratingStatus:f,errors:t.payload})});case S.REQUEST:return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{acceptedIds:g()([].concat(s()(e.pendingFollowers.acceptedIds),[t.meta.id]))})});case M.REQUEST:return d()({},e,{pendingFollowers:d()({},e.pendingFollowers,{ids:v()(e.pendingFollowers.ids,t.meta.id),hydratedIds:v()(e.pendingFollowers.hydratedIds,t.meta.id)})});default:return e}}n.d(t,"f",function(){return F}),n.d(t,"g",function(){return N}),n.d(t,"h",function(){return x}),n.d(t,"d",function(){return P}),n.d(t,"e",function(){return R}),n.d(t,"c",function(){return T}),n.d(t,"b",function(){return H}),n.d(t,"a",function(){return U});var r,o=n("//Fk"),i=n.n(o),l=n("Gu7T"),s=n.n(l),c=n("Dd8w"),d=n.n(c),u=n("bOdI"),h=n.n(u),m=n("IIth"),f=n("bTdA"),p=n("ipg4"),_=n("9LAc"),g=n.n(_),w=n("YZVf"),v=n.n(w),k=n("XEmH"),E=n("zAiL"),y="rweb/friendships",b=m.a(y,"FETCH_PENDING_FOLLOWERS"),C=m.a(y,"FETCH_PENDING_FOLLOWERS_USERS"),S=m.a(y,"ACCEPT_PENDING_FOLLOWER"),M=m.a(y,"DECLINE_PENDING_FOLLOWER"),O={pendingFollowers:{acceptedIds:[],ids:[],fetchStatus:(r={},h()(r,k.a,E.a.NONE),h()(r,k.b,E.a.NONE),r),hydratedIds:[]}};p.a.register(h()({},"friendships",a));var F=function(e){return e.friendships.pendingFollowers},N=function(e){var t=F(e),n=t.fetchStatus,a=t.ids;return Object(E.b)(n,a.length>0)},D=function(e){return N(e)===E.a.LOADED},L=function(e){return N(e)===E.a.LOADING},I=function(e){return x(e)===E.a.LOADING},x=function(e){return e.friendships.pendingFollowers.hydratingStatus},P=function(){return function(e,t){return D(t())?i.a.resolve():e(A())}},A=function(){return function(e,t,n){var a=n.api,r=t(),o=F(r),l=o.atEnd,s=o.cursor;if(L(r)||l)return i.a.resolve();var c={cursor:s||"-1"};return m.b(e,{params:c,request:a.Friendships.fetchPendingFollowers})({actionTypes:b,context:"FETCH_PENDING_FOLLOWERS",meta:{direction:Object(k.d)(c)}})}},R=function(){return function(e,t){var n=F(t()),a=n.hydratedIds,r=n.ids;return a.length||!r.length?i.a.resolve():e(T())}},T=function(){return function(e,t,n){var a=n.api,r=t(),o=F(r),l=o.hydratedIds,s=o.ids,c=I(r),u=s.length===l.length;if(c||u)return i.a.resolve();var p=s.slice(l.length,l.length+20);return m.b(e,{params:{user_id:p.join(",")},request:a.Users.fetchUsers})({actionTypes:C,context:"FETCH_PENDING_FOLLOWERS_USERS",meta:{ids:p}},function(e){if(e&&e.result){var t=e.result.reduce(function(t,n){return d()({},t,h()({},n,d()({},e.entities.users[n],{follow_request_received:!0})))},{});return[Object(f.c)({users:t})]}}).then(function(t){return s.length===l.length+p.length?e(A()):t})}},H=function(e){return function(t,n,a){var r=a.api,o=m.c(t,{params:{user_id:e.id_str},request:r.Friendships.declinePendingFollower}),i=function(t){if(t)return[Object(f.c)({users:h()({},e.id_str,{id_str:e.id_str,follow_request_received:!1})})]};return o({actionTypes:M,context:"ACTION_DECLINE_PENDING_FOLLOWER",meta:{id:e.id_str}},i).then(function(e){return F(n()).ids.length<100?t(A()):e})}},U=function(e){return function(t,n,a){var r=a.api,o=m.c(t,{params:{user_id:e.id_str},request:r.Friendships.acceptPendingFollower}),i=function(t){if(t)return[Object(f.c)({users:h()({},e.id_str,{id_str:e.id_str,follow_request_received:!1})})]};return o({actionTypes:S,context:"ACTION_ACCEPT_PENDING_FOLLOWER",meta:{id:e.id_str}},i)}}},Q3uQ:function(e,t,n){"use strict";var a=n("//Fk"),r=n.n(a),o=n("Dd8w"),i=n.n(o),l=n("Zx67"),s=n.n(l),c=n("Zrlr"),d=n.n(c),u=n("wxAW"),h=n.n(u),m=n("zwoO"),f=n.n(m),p=n("Pf15"),_=n.n(p),g=n("iuYP"),w=n("GiK3"),v=n.n(w),k=n("ChAb"),E=n.n(k),y=n("7t5w"),b=n("MRPs"),C=n("OMex"),S=n("4n+p"),M=n("sLaq"),O=n("bndy"),F=n("Oa75"),N=n("qX3G"),D=Object(O.createSelector)([b.f,N.b,C.f],function(e,t,n){var a=e.acceptedIds,r=e.ids;return{acceptedFollowerCount:a.length,loggedInUser:t,pendingFollowerCount:r.length-a.length,settings:n}}),L={createLocalApiErrorHandler:Object(M.b)("DASH_MENU_CONTAINER"),fetchPendingFollowersIfNeeded:b.d,logout:F.a,scribeAction:y.d,updateDataSaverMode:C.r},I=Object(S.connect)(D,L),x=I,P=n("bgPG"),A=n("sp77"),R=n.n(A),T=n("ZCUr"),H=n("HXFq"),U=n.n(H),z=n("Dxna"),G=n("Jnfv"),W=n.n(G),j=n("oh4R"),q=n.n(j),B=n("uMse"),K=n.n(B),V=n("KSGD"),Z=n("nUDC"),Y=n.n(Z),Q=n("/FRN"),X=n("cM/+"),J={logout:"logout"},$=n("4vsE"),ee=n.n($),te=n("Mpbj"),ne=n.n(te),ae=n("arlL"),re=n.n(ae),oe=n("jYKd"),ie=n.n(oe),le=n("Gr4z"),se=n.n(le),ce=n("K0rI"),de=n.n(ce),ue=n("0MLe"),he=ue.formatMessage("Bookmarks"),me=ue.formatMessage("Data saver"),fe=ue.formatMessage("Send feedback"),pe=ue.formatMessage("Follower requests"),_e=ue.formatMessage("Help Center"),ge=ue.formatMessage("Lists"),we=ue.formatMessage("Log out"),ve=ue.formatMessage("Moments"),ke=ue.formatMessage("Night mode"),Ee=ue.formatMessage("Profile"),ye=ue.formatMessage("Settings and privacy"),be=function(e){var t=e.icon,n=e.label;return v.a.createElement(re.a,null,v.a.createElement(ee.a,{style:X.a.item},t?v.a.createElement(t,{style:X.a.icon}):null,v.a.createElement(ne.a,{color:"normal"},n)))},Ce=function(e){function t(){var e,n,a,o;d()(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return n=a=f()(this,(e=t.__proto__||s()(t)).call.apply(e,[this].concat(c))),a._featureSwitches={showBookmarks:!1,feedbackUrl:!1,allowNightmode:!1,showSwitchToMs:!1},a._handleDataSaverChanged=function(e){var t=a.props,n=t.createLocalApiErrorHandler,r=t.scribeAction,o=t.scribeNamespace,l=t.updateDataSaverMode;r(i()({},o,{element:"dataSaverMode",action:e?"on":"off"})),l({enabled:e}).catch(n(i()({},Object(T.a)(),{showToast:!0})))},a._handleNightModeChange=function(e){a._handleNightModeChangeClick(),ie.a.setTheme(e?"dark":"light")},a._handleSwitchToOldWeb=function(){a._handleSwitchToOldWebClick(),document.cookie=R.a.serialize(Q.RWEB_OPT_OUT_COOKIE,"off",{path:"/",domain:".twitter.com"}),"serviceWorker"in window.navigator&&navigator.serviceWorker?navigator.serviceWorker.getRegistrations().then(function(e){r.a.all(e.map(function(e){return e.unregister()})).then(function(){return window.location.reload()},function(){return window.location.reload()})}):window.location.reload()},a._handleMenuItemClick=function(e){return function(){var t=a.props,n=t.scribeAction,r=t.scribeNamespace,o=t.onClose;e&&n(i()({},r,{section:"overflow_menu",element:e,action:"click"})),o&&o()}},a._handleDataSaverClick=a._handleMenuItemClick("data_saver_overflow_item"),a._handleProfileClick=a._handleMenuItemClick("profile_overflow_item"),a._handleFollowerRequestsClick=a._handleMenuItemClick("follower_requests_overflow_item"),a._handleListsClick=a._handleMenuItemClick("lists_overflow_item"),a._handleBookmarksClick=a._handleMenuItemClick("bookmarks_overflow_item"),a._handleMomentsClick=a._handleMenuItemClick("moments_overflow_item"),a._handleSettingsClick=a._handleMenuItemClick("settings_overflow_item"),a._handleSimpleClick=a._handleMenuItemClick(),a._handleHelpClick=a._handleMenuItemClick("help_overflow_item"),a._handleLogoutScribingClick=a._handleMenuItemClick("logout_overflow_item"),a._handleSwitchToOldWebClick=a._handleMenuItemClick("macaw_swift_item"),a._handleNightModeChangeClick=a._handleMenuItemClick("night_mode"),a._handleLogoutClick=function(e){e&&e.preventDefault(),a._handleLogoutScribingClick(),a.props.logout()},o=n,f()(a,o)}return _()(t,e),h()(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.fetchPendingFollowersIfNeeded,n=e.loggedInUser,a=this.context.featureSwitch;this._featureSwitches={showBookmarks:a.hasOne("responsive_web_save_for_later_7046",["curation_sheet","share_menu_all","share_menu_bookmarks_dms"]),feedbackUrl:a.getValue("responsive_web_feedback_link"),allowNightmode:a.hasValue("responsive_web_night_mode_7836","enabled"),showSwitchToMS:a.isTrue("responsive_web_allow_switch_to_ms")&&"twitter.com"===window.location.hostname},n.protected&&t()}},{key:"render",value:function(){var e=this.props,t=e.acceptedFollowerCount,n=e.loggedInUser.screen_name,a=e.pendingFollowerCount,r=e.settings,o=e.simplifiedMenu;return v.a.createElement(ee.a,{style:X.a.scrollableItems},o?null:v.a.createElement(ee.a,null,v.a.createElement(z.a,{className:de.a.link,link:g.d("/"+n),onClick:this._handleProfileClick,style:X.a.link},v.a.createElement(be,{icon:Y.a,label:Ee}))),o?null:v.a.createElement(ee.a,null,v.a.createElement(z.a,{className:de.a.link,link:g.d("/"+n+"/lists"),onClick:this._handleListsClick,style:X.a.link},v.a.createElement(be,{icon:W.a,label:ge}))),this._featureSwitches.showBookmarks&&!o?v.a.createElement(ee.a,null,v.a.createElement(z.a,{className:de.a.link,link:g.d("/i/bookmarks"),onClick:this._handleBookmarksClick,style:X.a.link},v.a.createElement(be,{icon:E.a,label:he}))):null,o?null:v.a.createElement(ee.a,null,v.a.createElement(z.a,{className:de.a.link,link:g.d("/"+n+"/moments"),onClick:this._handleMomentsClick,style:X.a.link},v.a.createElement(be,{icon:q.a,label:ve}))),!a&&!t||o?null:v.a.createElement(re.a,null,v.a.createElement(ee.a,{style:[X.a.item,X.a.itemWithAccessory,X.a.followerRequest]},v.a.createElement(z.a,{className:de.a.link,link:g.d("/follower_requests"),onClick:this._handleFollowerRequestsClick,style:[X.a.link,X.a.linkFollowers]},v.a.createElement(U.a,{style:X.a.icon}),v.a.createElement(ne.a,{color:"normal",style:X.a.itemLabel},pe),v.a.createElement(ee.a,{style:[X.a.itemAccessory,X.a.badge]},v.a.createElement(ne.a,{color:"white",size:"small",weight:"bold"},a))))),o?null:v.a.createElement(ee.a,{style:X.a.divider}),o?null:v.a.createElement(ee.a,null,v.a.createElement(z.a,{className:de.a.link,link:g.d("/settings"),onClick:this._handleSettingsClick,style:X.a.link},v.a.createElement(be,{label:ye}))),v.a.createElement(ee.a,null,v.a.createElement(z.a,{className:de.a.link,link:g.c("https://support.twitter.com/"),onClick:this._handleHelpClick,style:X.a.link},v.a.createElement(be,{label:_e}))),null,v.a.createElement(ee.a,null,v.a.createElement(z.a,{className:de.a.link,link:g.c("/logout"),onClick:this._handleLogoutClick,style:X.a.link,testID:J.logout},v.a.createElement(be,{label:we}))),o?null:v.a.createElement(ee.a,{style:X.a.divider}),o?null:v.a.createElement(ee.a,{style:[X.a.item,X.a.itemWithAccessory,X.a.dataSaver]},v.a.createElement(z.a,{className:de.a.link,link:g.d("/settings/data"),onClick:this._handleDataSaverClick},v.a.createElement(re.a,null,v.a.createElement(ee.a,{style:[X.a.itemLabel,X.a.dataSaverLabel]},v.a.createElement(ne.a,{color:"normal"},me)))),v.a.createElement(se.a,{onValueChange:this._handleDataSaverChanged,style:X.a.itemAccessory,value:r.dataSaverMode})),o||!this._featureSwitches.allowNightmode?null:v.a.createElement(ee.a,{style:[X.a.item,X.a.itemWithAccessory,X.a.dataSaver]},v.a.createElement(ee.a,{style:[X.a.itemLabel,X.a.dataSaverLabel]},v.a.createElement(ne.a,{color:"normal"},ke)),v.a.createElement(se.a,{onValueChange:this._handleNightModeChange,style:X.a.itemAccessory,value:"dark"===ie.a.theme.key})),this._featureSwitches.feedbackUrl?v.a.createElement(z.a,{className:de.a.link,link:g.c(this._featureSwitches.feedbackUrl),onClick:this._handleSimpleClick,style:X.a.link},v.a.createElement(be,{label:fe})):null,this._featureSwitches.showSwitchToMS?v.a.createElement(ee.a,{className:de.a.link,onClick:this._handleSwitchToOldWeb},v.a.createElement(be,{label:"Switch to old web"})):null)}}]),t}(v.a.Component);Ce.contextTypes={featureSwitch:V.object},Ce.defaultProps={onClose:K.a,simplifiedMenu:!1};t.a=Object(P.b)({})(x(Ce))},"cM/+":function(e,t,n){"use strict";var a=n("jYKd"),r=n.n(a);t.a=r.a.create(function(e){return{header:{flexGrow:0,flexShrink:0},scrollableItems:{overflow:"auto",overscrollBehavior:"contain",WebkitOverflowScrolling:"touch",flexGrow:1,flexShrink:1},item:{boxSizing:"border-box",paddingVertical:e.spaces.small,paddingHorizontal:e.spaces.medium,flexDirection:"row"},itemAccount:{paddingBottom:0,paddingTop:e.spaces.xSmall,backgroundClip:"content-box",backgroundColor:e.colors.navigationBackground},itemProfileStats:{paddingVertical:e.spaces.xSmall},icon:{marginRight:e.spaces.xSmall},divider:{backgroundColor:e.colors.borderColor,height:1,marginVertical:e.spaces.xSmall},link:{color:e.colors.deepGray},linkFollowers:{display:"flex",width:"100%"},linkProfileStats:{color:e.colors.deepGray},linkProfileStatsLeft:{marginRight:e.spaces.xSmall},itemWithAccessory:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},itemLabel:{flexGrow:1},itemAccessory:{flexShrink:1,marginHorizontal:e.spaces.xSmall},avatar:{width:e.spaces.xxLarge},userNames:{display:"flex",flexDirection:"column",paddingVertical:e.spaces.xSmall},badge:{backgroundColor:e.colors.blue,borderRadius:"100%",boxShadow:"0 0 0 0.14rem "+e.colors.navigationBackground,minWidth:"1rem",width:"1.5em",height:"1.5em",alignItems:"center",justifyContent:"center",alignSelf:"flex-end"},dataSaver:{paddingVertical:0,paddingLeft:0},dataSaverLabel:{paddingVertical:e.spaces.small,paddingLeft:e.spaces.medium,paddingRight:e.spaces.jumbo}}})},druG:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Animate=void 0;var r=n("Dd8w"),o=a(r),i=n("Zx67"),l=a(i),s=n("Zrlr"),c=a(s),d=n("wxAW"),u=a(d),h=n("zwoO"),m=a(h),f=n("Pf15"),p=a(f),_=n("u2KI"),g=a(_),w=n("GiK3"),v=a(w),k=n("O27J"),E=a(k),y=n("2pBo"),b=a(y),C=n("4vsE"),S=a(C),M=(0,g.default)({normal:100,long:250,longer:500}),O=(0,g.default)({animate:"animate",static:"static",prep:"prep"}),F=t.Animate=function(e){function t(){var e,n,a,r;(0,c.default)(this,t);for(var i=arguments.length,s=Array(i),d=0;d<i;d++)s[d]=arguments[d];return n=a=(0,m.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(s))),a.state={animateStage:O.static,animateProps:a.props.show&&!a.props.animateMount?{height:"auto",opacity:1}:{height:0,opacity:0},renderChildren:a.props.children,componentHeight:0,props:(0,o.default)({},a.props,{show:a.props.animateMount?!a.props.show:a.props.show})},a._transitionStart=function(e){var t=e.componentHeight,n=a.state.props,r=n.show,o=n.type,i="fade"===o;r?a.setState({animateProps:{height:i?"auto":0,opacity:0},animateStage:O.animate,componentHeight:t},a._requestNewFrame(function(){a.setState({animateProps:{height:i?"auto":t,opacity:1}})})):a.setState({animateProps:{height:i?"auto":t,opacity:1},animateStage:O.animate,componentHeight:t},a._requestNewFrame(function(){a.setState({animateProps:{height:i?"auto":0,opacity:0}})}))},a._handleTransitionEnd=function(e){var t=a.props,n=t.onAnimateComplete,r=t.show;e.target===a._outerLayerNode&&(n&&n(),a.setState({animateProps:r?{height:"auto",opacity:1}:{height:0,opacity:0},animateStage:O.static}))},a._requestNewFrame=function(e){window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){a._mounted&&e()})})},a._setOuterLayerNode=function(e){a._outerLayerNode=E.default.findDOMNode(e)},a._setInnerLayerNode=function(e){var t=E.default.findDOMNode(e);if(t instanceof window.HTMLElement){var n=t.getBoundingClientRect().height;a._transitionStart({componentHeight:n})}},r=n,(0,m.default)(a,r)}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this._mounted=!0}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.animateProps,n=t.height,a=t.opacity,r=e.animateStage,o=e.renderChildren,i=e.props,l=i.show,s=i.duration,c=r===O.static,d=r===O.animate;if(c)return l?v.default.createElement(S.default,null,v.default.createElement(S.default,null,o)):null;var u=[d&&N.transitionStyles,d&&{transitionDuration:M[s]+"ms"},{height:n,opacity:a}];return v.default.createElement(S.default,{onTransitionEnd:this._handleTransitionEnd,ref:this._setOuterLayerNode,style:u},v.default.createElement(S.default,{ref:this._setInnerLayerNode},o))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.show!==t.props.show?t.animateStage===O.static?{animateStage:O.prep,renderChildren:e.show?e.children:t.props.children,props:e}:{animateStage:O.animate,animateProps:e.show?{height:t.componentHeight,opacity:1}:{height:0,opacity:0},props:e}:{props:e,renderChildren:e.children}}}]),t}(v.default.Component);F.defaultProps={duration:"normal",type:"slide"};var N=b.default.create({transitionStyles:{transitionProperty:"opacity, height",transitionTimingFunction:"ease",overflow:"hidden"}});t.default=F},nUDC:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=a(r),i=n("eVdM"),l=a(i),s=n("GiK3"),c=a(s),d=n("sT3W"),u=a(d),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.default)("svg",(0,o.default)({},e,{style:[u.default.root,e.style],viewBox:"0 0 24 24"}),c.default.createElement("g",null,c.default.createElement("path",{d:"M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246a.753.753 0 0 1-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"})))};h.metadata={height:24,width:24},t.default=h},"x+Yi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("u2KI"),r=n.n(a),o=n("Zx67"),i=n.n(o),l=n("Zrlr"),s=n.n(l),c=n("wxAW"),d=n.n(c),u=n("zwoO"),h=n.n(u),m=n("Pf15"),f=n.n(m),p=n("Dd8w"),_=n.n(p),g=n("GiK3"),w=n.n(g),v=n("8S4E"),k=n("NreW"),E=n.n(k),y=n("Zegd"),b=n("O27J"),C=n.n(b),S=n("druG"),M=n.n(S),O=n("wXPw"),F=n.n(O),N=n("Y+mP"),D=n.n(N),L=n("jYKd"),I=n.n(L),x=n("yu6i"),P=n.n(x),A=n("tmOy"),R=n.n(A),T=n("4vsE"),H=n.n(T),U=I.a.create(function(e){return{anchor:I.a.absoluteFillObject,mask:_()({},I.a.absoluteFillObject,{position:"fixed"}),bodyRectHelper:_()({},I.a.absoluteFillObject,{bottom:void 0}),content:{borderRadius:"2px",position:"absolute",backgroundColor:e.colors.navigationBackground,boxShadow:"0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24)"},contentInitialRender:{position:"fixed",opacity:0},contentFixed:{position:"fixed",maxHeight:"100vh",overflowY:"auto",overscrollBehavior:"contain"}}}),z=function(e){var t=e.verticalPreference,n=e.canOrientUp,a=e.canOrientDown;return!n||"up"!==t&&a?"down":"up"},G=function(e){var t=e.horizontalPreference,n=e.canOrientLeft,a=e.canOrientRight;return!n||"left"!==t&&a?"right":"left"},W=function(e){return R.a.isRTL?"left"===e?"right":"left":e},j=function(e){function t(e,n){s()(this,t);var a=h()(this,(t.__proto__||i()(t)).call(this,e,n));return a._handleEsc=function(e){var t=a.props.onDismiss,n=e.altKey,r=e.ctrlKey,o=e.metaKey,i=e.key;!(n||r||o)&&"Escape"===i&&t()},a._receiveBodyRectHelperRef=function(e){var t=C.a.findDOMNode(e);t&&t instanceof window.HTMLElement&&(a._bodyRectHelperNode=t),a._scheduleUpdate()},a._receiveAnchorRef=function(e){var t=C.a.findDOMNode(e);t&&t instanceof window.HTMLElement&&(a._anchorNode=t),a._scheduleUpdate()},a._receiveContentRef=function(e){var t=C.a.findDOMNode(e);t&&t instanceof window.HTMLElement&&(a._contentNode=t),a._scheduleUpdate()},a._updatePosition=function(){if(a._mounted&&(a._anchorNode||a.props.position)&&a._contentNode&&a._contentNode instanceof window.HTMLElement&&a._bodyRectHelperNode&&a._bodyRectHelperNode instanceof window.HTMLElement){var e=a._contentNode.scrollHeight,t=a._contentNode.scrollWidth,n=a._bodyRectHelperNode.getBoundingClientRect(),r=n.left,o=n.top,i=n.width,l=P.a.get("window"),s=l.width,c=l.height,d={left:0,top:0,height:0,width:0};a.props.position?d=_()({},d,a.props.position):a._anchorNode&&a._anchorNode instanceof window.HTMLElement&&(d=a._anchorNode.getBoundingClientRect());var u=d,h=u.left,m=u.top,f=u.height,p=u.width,g=s-i,w=h-r,v=m-o,k=h+p>=t,E=m+f>=e,y=s-h>=t,b=c-m>=e,C=a.props.preferredVerticalOrientation,S=W(a.props.preferredHorizontalOrientation),M=a.state.verticalOrientation||z({verticalPreference:C,canOrientUp:E,canOrientDown:b}),O=a.state.horizontalOrientation||G({horizontalPreference:S,canOrientLeft:k,canOrientRight:y}),F=a.props.isFixed?h:w,N=a.props.isFixed?m:v,D="up"===M?N+f-e:N,L="left"===O?s-F-p-g:s-F-t-g;a.setState({top:Math.max(D,0),right:L,verticalOrientation:M,horizontalOrientation:O})}},a.state=r()({}),a._scheduleUpdate=Object(v.a)(a._updatePosition,window.requestAnimationFrame),a._scheduleDebouncedUpdate=E()(a._scheduleUpdate,250),a}return f()(t,e),d()(t,[{key:"componentDidMount",value:function(){this._mounted=!0,P.a.addEventListener("change",this._scheduleDebouncedUpdate)}},{key:"componentWillUnmount",value:function(){this._mounted=!1,P.a.removeEventListener("change",this._scheduleDebouncedUpdate)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.isFixed,a=e.onDismiss,r=this.state,o=r.top,i=r.right,l=void 0===o,s=[U.content,l&&U.contentInitialRender,n&&U.contentFixed,{top:o,right:R.a.isRTL?void 0:i,left:R.a.isRTL?i:void 0}];return w.a.createElement(H.a,{ref:this._receiveAnchorRef,style:U.anchor},w.a.createElement(D.a.Dropdown,null,w.a.createElement(y.a,{onDismiss:a},w.a.createElement(F.a,null,w.a.createElement(H.a,{onClick:a,style:U.mask}),w.a.createElement(H.a,{ref:this._receiveBodyRectHelperRef,style:U.bodyRectHelper}),w.a.createElement(H.a,{onKeyUp:this._handleEsc,ref:this._receiveContentRef,style:s},l?t:w.a.createElement(M.a,{animateMount:!0,show:!0},t))))))}}]),t}(w.a.Component);j.defaultProps={preferredHorizontalOrientation:"left",preferredVerticalOrientation:"down"},t.default=j}});