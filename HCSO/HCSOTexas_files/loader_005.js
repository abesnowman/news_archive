webpackJsonp(["loader.WideLayout"],{"78Sj":function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h.REQUEST:var n=v(t.meta);return l()({},e,s()({},n,l()({},e[n],{fetchStatus:d.a.LOADING})));case h.FAILURE:var o=v(t.meta);return l()({},e,s()({},o,l()({},e[o],{fetchStatus:d.a.FAILED})));case h.SUCCESS:var i=v(t.meta),r=t.payload,a=r.entities,c=r.result,u=c.map(function(e){return a.recommendations[e]});return l()({},e,s()({},i,l()({},e[i],{fetchStatus:d.a.LOADED,recommendations:u})));default:return e}}n.d(t,"d",function(){return y}),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return w}),n.d(t,"b",function(){return O});var i=n("//Fk"),r=n.n(i),a=n("bOdI"),s=n.n(a),c=n("Dd8w"),l=n.n(c),u=n("bTdA"),d=n("zAiL"),p=n("ipg4"),f=n("IIth"),h=Object(f.a)("rweb/recommendations","FETCH"),m={},v=function(e){var t=e.displayLocation,n=e.similarToUserId;return t+(n?"_"+n:"")};p.a.register(s()({},"recommendations",o));var _=[],y=function(e,t){var n=t.displayLocation,o=t.similarToUserId,i=e.recommendations,r=i[v({displayLocation:n,similarToUserId:o})];return r&&r.recommendations?r.recommendations:_},g=function(e,t){var n=t.displayLocation,o=t.similarToUserId,i=e.recommendations,r=i[v({displayLocation:n,similarToUserId:o})];return r?r.fetchStatus:d.a.NONE},w=function(e){return function(t,n,o){var i=o.api,r=e.displayLocation,a=e.itsInterests,s=e.limit,c=void 0===s?30:s,l=e.similarToUserId;return Object(f.b)(t,{params:{display_location:r,itsInterests:a,limit:c,user_id:l},request:i.Recommendations.fetch})({actionTypes:h,context:"FETCH_RECOMMENDATIONS",meta:{displayLocation:r,similarToUserId:l}},function(e){if(e)return[Object(u.c)(e.entities)]})}},O=function(e){return function(t,n){var o=n(),i=e.displayLocation,a=e.similarToUserId,s=y(o,{displayLocation:i,similarToUserId:a}),c=g(o,{displayLocation:i,similarToUserId:a})===d.a.LOADED;return s&&c?r.a.resolve():t(w(e))}}},Dtbj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Zx67"),i=n.n(o),r=n("Zrlr"),a=n.n(r),s=n("wxAW"),c=n.n(s),l=n("zwoO"),u=n.n(l),d=n("Pf15"),p=n.n(d),f=n("zAiL"),h=n("Y2tT"),m=n("GiK3"),v=n.n(m),_=n("jYKd"),y=n.n(_),g=n("4vsE"),w=n.n(g),O=n("iuYP"),S=n("bgPG"),b=n("avDV"),E=n("gT2f"),T=n("CqBa"),L=n("O9Qs"),k=n("FVb8"),P=k.formatMessage("Who to follow"),R=k.formatMessage("Show more"),I=function(e){function t(){return a()(this,t),u()(this,(t.__proto__||i()(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.screenName,n=e.userIds,o=n.length>3;return v.a.createElement(w.a,null,v.a.createElement(E.a,{text:P}),v.a.createElement(L.a,{displayMode:T.a.UserCompact,userIds:n.slice(0,3),withItemBorder:!0}),o&&v.a.createElement(b.a,{link:O.d("/"+t+"/who_to_follow"),text:R}))}}]),t}(v.a.Component),x=Object(S.b)({component:"who_to_follow"})(I),N=(n("KSGD"),n("78Sj")),C=n("y7g/"),M=n("4n+p"),D=n("sLaq"),H=n("bndy"),U=n("Dica"),A=function(e,t){return C.i(e)},j=function(e,t){return U.b.select(e,t.userId).screen_name},F=function(e,t){return t.userId},K=function(e,t){var n=F(0,t),o=A(e);return N.d(e,{displayLocation:"profile_accounts_sidebar",similarToUserId:n===o?null:n}).map(function(e){return e.user})},W=function(e,t){var n=F(0,t),o=A(e);return N.c(e,{displayLocation:"profile_accounts_sidebar",similarToUserId:n===o?null:n})},q=Object(H.createSelector)(W,A,K,j,F,function(e,t,n,o,i){return{fetchStatus:e,loggedInUserId:t,recommendations:n,screenName:o,userId:i}}),B={createLocalApiErrorHandler:Object(D.b)("WHO_TO_FOLLOW_CONTAINER"),fetchRecommendationsIfNeeded:N.b},Y=Object(M.connect)(q,B);n.d(t,"WhoToFollowContainer",function(){return V});var z=n("Re12"),G=z.formatMessage("Loading recommendations for users to follow"),Z=y.a.create(function(e){return{root:{minHeight:"20rem"}}}),V=function(e){function t(){var e,n,o,r;a()(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=o=u()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(c))),o._renderContent=function(){var e=o.props,t=e.recommendations,n=e.screenName,i=e.userId;return v.a.createElement(x,{screenName:n,userId:i,userIds:t})},r=n,u()(o,r)}return p()(t,e),c()(t,[{key:"componentWillMount",value:function(){this._fetchRecommendations(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.userId!==this.props.userId&&this._fetchRecommendations(e)}},{key:"render",value:function(){var e=this.props.fetchStatus;return e===f.a.FAILED||this._hasEmptySuggestionList()?null:v.a.createElement(w.a,{style:Z.root},v.a.createElement(h.a,{accessibilityLabel:G,fetchStatus:e,render:this._renderContent}))}},{key:"_fetchRecommendations",value:function(e){var t=e.fetchRecommendationsIfNeeded,n=e.userId;t({limit:4,displayLocation:"profile_accounts_sidebar",similarToUserId:n!==e.loggedInUserId?n:null})}},{key:"_hasEmptySuggestionList",value:function(){var e=this.props,t=e.fetchStatus,n=e.recommendations;return t===f.a.LOADED&&0===n.length}}]),t}(v.a.Component);t.default=Y(V)},Pz0n:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Zx67"),i=n.n(o),r=n("Zrlr"),a=n.n(r),s=n("wxAW"),c=n.n(s),l=n("zwoO"),u=n.n(l),d=n("Pf15"),p=n.n(d),f=n("7q6/"),h=!f.a.isEdge(),m=f.a.isFirefox(),v=n("8S4E"),_=n("GiK3"),y=n.n(_),g=n("O27J"),w=n.n(g),O=n("jYKd"),S=n.n(O),b=n("KSGD"),E=n("yu6i"),T=n.n(E),L=n("4vsE"),k=n.n(L);n("k2ao");n.d(t,"roundToNearestDevicePixel",function(){return R});var P=S.a.create(function(e){return{container:{height:"100%"},sticky:{position:"sticky"},fixed:{position:"fixed"},static:{position:"static"}}}),R=function(e){var t=e.cssPixels,n=e.dpr;return Math.round(t*n)/n},I=function(e){function t(e,n){a()(this,t);var o=u()(this,(t.__proto__||i()(t)).call(this,e,n));return o._setContentRef=function(e){o._contentRef=w.a.findDOMNode(e)},o._setContainerRef=function(e){o._containerRef=w.a.findDOMNode(e)},o._handleProgrammaticScroll=function(e){o._prevScrollY=(o._prevScrollY||0)+e,o.setState({contentOffset:Math.max(0,o.state.contentOffset+e)})},o.state={stickyTop:!0,stickyThreshold:0,contentOffset:0,contentHeight:0,stickyOffset:0,position:h?"sticky":"static"},o._scheduleUpdatePositioning=Object(v.a)(o._updatePositioning.bind(o),window.requestAnimationFrame),o}return p()(t,e),c()(t,[{key:"componentWillMount",value:function(){var e=this.context.viewport;this._removeProgrammaticScrollListener=e.addProgrammaticScrollListener(this._handleProgrammaticScroll)}},{key:"componentDidMount",value:function(){var e=this.context.viewport;this._updatePositioning(),this._removeScrollListener=e.addScrollListener(this._scheduleUpdatePositioning);var t=this._containerRef.getBoundingClientRect(),n=e.scrollY();this._prevScrollY=n,this.setState({stickyOffset:n+t.top})}},{key:"componentWillUnmount",value:function(){this._removeScrollListener&&this._removeScrollListener(),this._removeProgrammaticScrollListener&&this._removeProgrammaticScrollListener()}},{key:"render",value:function(){var e=this.state,t=e.stickyTop,n=e.stickyThreshold,o=e.contentOffset,i=e.position,r=P[i],a=window.devicePixelRatio||1,s=R({cssPixels:n,dpr:a}),c=R({cssPixels:o,dpr:a}),l={top:t?s+"px":null,bottom:t?null:s+"px"};return y.a.createElement(k.a,{ref:this._setContainerRef,style:[P.container,{minHeight:this.state.contentHeight}]},y.a.createElement(k.a,{style:{marginTop:c+"px"}}),y.a.createElement(k.a,{ref:this._setContentRef,style:[this.props.style,l,r]},this.props.children))}},{key:"_updatePositioning",value:function(){if(this._contentRef&&this._containerRef){var e=this.context.viewport.scrollY(),t=e-this._prevScrollY;if(!(Math.abs(t)<.5)){var n=this.props.distanceFromBottom;this._prevScrollY=e;var o=this._contentRef.getBoundingClientRect(),i=this._containerRef.getBoundingClientRect(),r=T.a.get("window"),a=r.height,s=e+i.top,c=Math.max(o.top-i.top,0);if(a-o.height>s)this._updateState({stickyTop:!0,stickyThreshold:s,contentOffset:0,stickyOffset:s,contentHeight:o.height,position:"fixed"});else{var l=t>0,u=l!==this.state.stickyTop,d=window.devicePixelRatio||1,p=o.bottom-a+n<=1/d,f=s-o.top<=1/d;if((l&&p||!l&&f)&&m){var v=n,_=s;this._updateState({position:"fixed",stickyTop:f,stickyThreshold:f?_:v,contentOffset:c,contentHeight:o.height})}else{var y=a-o.height-n,g=a-o.height-s,w=h?"sticky":"static";this._updateState({position:w,stickyTop:l,stickyOffset:s,stickyThreshold:l?y:g,contentOffset:u?c:this.state.contentOffset,contentHeight:o.height})}}}}}},{key:"_updateState",value:function(e){var t=this.state.stickyTop!==e.stickyTop,n=this.state.stickyThreshold!==e.stickyThreshold,o=Math.abs(this.state.contentOffset-e.contentOffset)>.5,i=Math.abs(this.state.stickyOffset-e.stickyOffset)>.5,r=this.state.position!==e.position,a=this.state.contentHeight!==e.contentHeight;(t||n||o||i||r||a)&&this.setState(e)}}]),t}(y.a.PureComponent);I.contextTypes={viewport:b.object.isRequired},I.defaultProps={distanceFromBottom:10};t.default=I},druG:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Animate=void 0;var i=n("Dd8w"),r=o(i),a=n("Zx67"),s=o(a),c=n("Zrlr"),l=o(c),u=n("wxAW"),d=o(u),p=n("zwoO"),f=o(p),h=n("Pf15"),m=o(h),v=n("u2KI"),_=o(v),y=n("GiK3"),g=o(y),w=n("O27J"),O=o(w),S=n("2pBo"),b=o(S),E=n("4vsE"),T=o(E),L=(0,_.default)({normal:100,long:250,longer:500}),k=(0,_.default)({animate:"animate",static:"static",prep:"prep"}),P=t.Animate=function(e){function t(){var e,n,o,i;(0,l.default)(this,t);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=o=(0,f.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(c))),o.state={animateStage:k.static,animateProps:o.props.show&&!o.props.animateMount?{height:"auto",opacity:1}:{height:0,opacity:0},renderChildren:o.props.children,componentHeight:0,props:(0,r.default)({},o.props,{show:o.props.animateMount?!o.props.show:o.props.show})},o._transitionStart=function(e){var t=e.componentHeight,n=o.state.props,i=n.show,r=n.type,a="fade"===r;i?o.setState({animateProps:{height:a?"auto":0,opacity:0},animateStage:k.animate,componentHeight:t},o._requestNewFrame(function(){o.setState({animateProps:{height:a?"auto":t,opacity:1}})})):o.setState({animateProps:{height:a?"auto":t,opacity:1},animateStage:k.animate,componentHeight:t},o._requestNewFrame(function(){o.setState({animateProps:{height:a?"auto":0,opacity:0}})}))},o._handleTransitionEnd=function(e){var t=o.props,n=t.onAnimateComplete,i=t.show;e.target===o._outerLayerNode&&(n&&n(),o.setState({animateProps:i?{height:"auto",opacity:1}:{height:0,opacity:0},animateStage:k.static}))},o._requestNewFrame=function(e){window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){o._mounted&&e()})})},o._setOuterLayerNode=function(e){o._outerLayerNode=O.default.findDOMNode(e)},o._setInnerLayerNode=function(e){var t=O.default.findDOMNode(e);if(t instanceof window.HTMLElement){var n=t.getBoundingClientRect().height;o._transitionStart({componentHeight:n})}},i=n,(0,f.default)(o,i)}return(0,m.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this._mounted=!0}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.animateProps,n=t.height,o=t.opacity,i=e.animateStage,r=e.renderChildren,a=e.props,s=a.show,c=a.duration,l=i===k.static,u=i===k.animate;if(l)return s?g.default.createElement(T.default,null,g.default.createElement(T.default,null,r)):null;var d=[u&&R.transitionStyles,u&&{transitionDuration:L[c]+"ms"},{height:n,opacity:o}];return g.default.createElement(T.default,{onTransitionEnd:this._handleTransitionEnd,ref:this._setOuterLayerNode,style:d},g.default.createElement(T.default,{ref:this._setInnerLayerNode},r))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.show!==t.props.show?t.animateStage===k.static?{animateStage:k.prep,renderChildren:e.show?e.children:t.props.children,props:e}:{animateStage:k.animate,animateProps:e.show?{height:t.componentHeight,opacity:1}:{height:0,opacity:0},props:e}:{props:e,renderChildren:e.children}}}]),t}(g.default.Component);P.defaultProps={duration:"normal",type:"slide"};var R=b.default.create({transitionStyles:{transitionProperty:"opacity, height",transitionTimingFunction:"ease",overflow:"hidden"}});t.default=P},lUbS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Gu7T"),i=n.n(o),r=n("P7m2"),a=n("4n+p"),s=n("bndy"),c=n("qCVd"),l=n("rrVe"),u=n.n(l),d=n("JSXd"),p=n("9LAc"),f=n.n(p),h=Object(s.createSelector)(function(e,t){return t.conversationModule.selectEntries(e)},function(e){return d.a.selectAll(e)},function(e,t){return t.focalTweetId},function(e,t,n){var o=[n].concat(i()(u()(e,m))),a=Object(r.a)(o,function(e){return t[e]}),s=n&&t[n],c=s&&s.quoted_status&&t[s.quoted_status],l=c&&c.user,d=u()(a,v),p=d.length>0&&l?[d[0],l].concat(i()(d.slice(1))):d;return f()(p)}),m=function(e){switch(e.type){case c.a.Tweet:return[e.content.id];case c.a.ConversationThread:return Object(r.a)(e.content.conversationComponents,function(e){return e.conversationTweetComponent&&e.conversationTweetComponent.tweet.id});default:return[]}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.entities;t=void 0===t?{}:t;var n=t.user_mentions,o=void 0===n?[]:n,r=o.map(function(e){return e.id_str});return[e.user].concat(i()(r))},_=Object(s.createSelector)(h,function(e){return{participantIds:e}}),y=Object(a.connect)(_),g=n("GiK3"),w=n.n(g),O=n("O9Qs"),S=(n("KSGD"),function(e){var t=e.maxCount,n=e.participantIds;return w.a.createElement(O.a,{userIds:n.slice(0,t)})});S.defaultProps={maxCount:3};var b=S;t.default=y(b)},"x+Yi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("u2KI"),i=n.n(o),r=n("Zx67"),a=n.n(r),s=n("Zrlr"),c=n.n(s),l=n("wxAW"),u=n.n(l),d=n("zwoO"),p=n.n(d),f=n("Pf15"),h=n.n(f),m=n("Dd8w"),v=n.n(m),_=n("GiK3"),y=n.n(_),g=n("8S4E"),w=n("NreW"),O=n.n(w),S=n("Zegd"),b=n("O27J"),E=n.n(b),T=n("druG"),L=n.n(T),k=n("wXPw"),P=n.n(k),R=n("Y+mP"),I=n.n(R),x=n("jYKd"),N=n.n(x),C=n("yu6i"),M=n.n(C),D=n("tmOy"),H=n.n(D),U=n("4vsE"),A=n.n(U),j=N.a.create(function(e){return{anchor:N.a.absoluteFillObject,mask:v()({},N.a.absoluteFillObject,{position:"fixed"}),bodyRectHelper:v()({},N.a.absoluteFillObject,{bottom:void 0}),content:{borderRadius:"2px",position:"absolute",backgroundColor:e.colors.navigationBackground,boxShadow:"0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24)"},contentInitialRender:{position:"fixed",opacity:0},contentFixed:{position:"fixed",maxHeight:"100vh",overflowY:"auto",overscrollBehavior:"contain"}}}),F=function(e){var t=e.verticalPreference,n=e.canOrientUp,o=e.canOrientDown;return!n||"up"!==t&&o?"down":"up"},K=function(e){var t=e.horizontalPreference,n=e.canOrientLeft,o=e.canOrientRight;return!n||"left"!==t&&o?"right":"left"},W=function(e){return H.a.isRTL?"left"===e?"right":"left":e},q=function(e){function t(e,n){c()(this,t);var o=p()(this,(t.__proto__||a()(t)).call(this,e,n));return o._handleEsc=function(e){var t=o.props.onDismiss,n=e.altKey,i=e.ctrlKey,r=e.metaKey,a=e.key;!(n||i||r)&&"Escape"===a&&t()},o._receiveBodyRectHelperRef=function(e){var t=E.a.findDOMNode(e);t&&t instanceof window.HTMLElement&&(o._bodyRectHelperNode=t),o._scheduleUpdate()},o._receiveAnchorRef=function(e){var t=E.a.findDOMNode(e);t&&t instanceof window.HTMLElement&&(o._anchorNode=t),o._scheduleUpdate()},o._receiveContentRef=function(e){var t=E.a.findDOMNode(e);t&&t instanceof window.HTMLElement&&(o._contentNode=t),o._scheduleUpdate()},o._updatePosition=function(){if(o._mounted&&(o._anchorNode||o.props.position)&&o._contentNode&&o._contentNode instanceof window.HTMLElement&&o._bodyRectHelperNode&&o._bodyRectHelperNode instanceof window.HTMLElement){var e=o._contentNode.scrollHeight,t=o._contentNode.scrollWidth,n=o._bodyRectHelperNode.getBoundingClientRect(),i=n.left,r=n.top,a=n.width,s=M.a.get("window"),c=s.width,l=s.height,u={left:0,top:0,height:0,width:0};o.props.position?u=v()({},u,o.props.position):o._anchorNode&&o._anchorNode instanceof window.HTMLElement&&(u=o._anchorNode.getBoundingClientRect());var d=u,p=d.left,f=d.top,h=d.height,m=d.width,_=c-a,y=p-i,g=f-r,w=p+m>=t,O=f+h>=e,S=c-p>=t,b=l-f>=e,E=o.props.preferredVerticalOrientation,T=W(o.props.preferredHorizontalOrientation),L=o.state.verticalOrientation||F({verticalPreference:E,canOrientUp:O,canOrientDown:b}),k=o.state.horizontalOrientation||K({horizontalPreference:T,canOrientLeft:w,canOrientRight:S}),P=o.props.isFixed?p:y,R=o.props.isFixed?f:g,I="up"===L?R+h-e:R,x="left"===k?c-P-m-_:c-P-t-_;o.setState({top:Math.max(I,0),right:x,verticalOrientation:L,horizontalOrientation:k})}},o.state=i()({}),o._scheduleUpdate=Object(g.a)(o._updatePosition,window.requestAnimationFrame),o._scheduleDebouncedUpdate=O()(o._scheduleUpdate,250),o}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){this._mounted=!0,M.a.addEventListener("change",this._scheduleDebouncedUpdate)}},{key:"componentWillUnmount",value:function(){this._mounted=!1,M.a.removeEventListener("change",this._scheduleDebouncedUpdate)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.isFixed,o=e.onDismiss,i=this.state,r=i.top,a=i.right,s=void 0===r,c=[j.content,s&&j.contentInitialRender,n&&j.contentFixed,{top:r,right:H.a.isRTL?void 0:a,left:H.a.isRTL?a:void 0}];return y.a.createElement(A.a,{ref:this._receiveAnchorRef,style:j.anchor},y.a.createElement(I.a.Dropdown,null,y.a.createElement(S.a,{onDismiss:o},y.a.createElement(P.a,null,y.a.createElement(A.a,{onClick:o,style:j.mask}),y.a.createElement(A.a,{ref:this._receiveBodyRectHelperRef,style:j.bodyRectHelper}),y.a.createElement(A.a,{onKeyUp:this._handleEsc,ref:this._receiveContentRef,style:c},s?t:y.a.createElement(L.a,{animateMount:!0,show:!0},t))))))}}]),t}(y.a.Component);q.defaultProps={preferredHorizontalOrientation:"left",preferredVerticalOrientation:"down"},t.default=q}});