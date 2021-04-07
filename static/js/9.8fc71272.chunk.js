(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{1207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(23),l=n(41),c=n(321),s=n(88),u=n(81);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(s.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},r.a.createElement(u.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(c.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(23),l=n(41),c=n(64),s=n(81);t.a=function(e){var t=Object(c.a)(),n=Object(l.a)(),a=n.textDark,u=n.textLight,i=n.placeholder;return r.a.createElement(s.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?i:e.amount?a:u}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1212:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(64),l=n(321);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(l.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1213:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(23),c=n(41);t.a=function(e){var t=Object(c.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?l.g.tiny:l.g.small,marginBottom:e.small?l.g.tiny:l.g.small+l.g.tiny}})}},1214:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(23),c=n(64),s=n(81);t.a=function(e){var t=e.chainId,n=void 0===t?1:t,a=Object(c.a)(),u={1:"Mainnet",42:"Kovan"}[n];return r.a.createElement(o.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(s.a,{light:!0,style:{textAlign:"center",marginVertical:l.g.large}},a("change-network-to",{networkName:u})))}},1216:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(23),c=n(81);t.a=function(e){var t=e.error;return r.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:l.g.tiny,marginTop:l.g.small}},t.code&&r.a.createElement(c.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(c.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1217:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(11),l=n.n(o),c=n(0),s=n.n(c),u=n(5),i=n(23),m=n(49),b=n(41),d=n(410);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(c.useContext)(m.a).darkMode,n=Object(b.a)(),a=n.backgroundLight,o=n.borderDark,l=Object(d.a)().border;return s.a.createElement(u.a,r()({},e,{style:[g(g({},l({color:t?o:a})),{},{backgroundColor:a,marginTop:i.g.normal+i.g.small,padding:i.g.small+i.g.tiny}),e.style]}))}},1221:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(64),l=n(321);t.a=function(){var e=Object(o.a)();return r.a.createElement(l.a,{title:e("fetching"),disabled:!0})}},1224:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(0),l=n.n(o),c=n(12),s=n(5),u=n(33),i=n(23),m=n(41),b=n(410),d=n(24),f=n(321),g=n(1207),p=n(1228);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=Object(m.a)().accent,n=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(d.h)(e.token)){var n=Object(d.n)(16);t=t.gt(n)?t.sub(n):u.ethers.constants.Zero}e.updateAmount(Object(d.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return l.a.createElement(s.a,{style:{position:"absolute",right:12,bottom:"web"===c.a.OS?12:24}},l.a.createElement(f.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(i.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:i.g.tiny}}))};t.a=function(e){var t,n,a=Object(b.a)().border,r=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(d.l)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return l.a.createElement(s.a,null,e.title&&l.a.createElement(g.a,{text:e.title}),l.a.createElement(s.a,null,l.a.createElement(p.a,{label:e.label,value:e.amount,onChangeText:r,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:i.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:O(O({},a()),{},{paddingHorizontal:i.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&l.a.createElement(y,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(23),c=n(41),s=n(410),u=n(321),i=n(81);t.a=function(e){var t=Object(c.a)().textLight,n=(0,Object(s.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(i.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(u.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1228:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(0),l=n.n(o),c=n(12),s=n(74),u=n(41);t.a=function(e){var t=Object(u.a)(),n=t.textDark,a=t.textMedium,i=t.textLight,m=e.size||"normal",b=e.color||n,d="small"===m?16:"large"===m?24:20,f=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return l.a.createElement(s.c,r()({},e,{inputStyle:[{fontSize:d,fontFamily:"regular",paddingBottom:4,color:b,marginTop:0,minHeight:32},"web"===c.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:a},e.labelStyle],placeholderTextColor:e.placeholderTextColor||i,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:f}))}},1248:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(21),l=n.n(o),c=n(0),s=n(33),u=n(139),i=n.n(u),m=n(61),b=n(56),d=n(24),f=n(100),g=function(){return{enter:Object(c.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(d.g)("SushiBar",m.f,t),l.next=3,r.a.awrap(n.estimateGas.enter(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.enter(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.enter()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(c.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(d.g)("SushiBar",m.f,t),l.next=3,r.a.awrap(n.estimateGas.leave(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.leave(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.leave()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(c.useContext)(b.b),t=e.signer,n=e.address,a=e.getTokenAllowance,o=e.tokens,u=e.updateTokens,f=g(),p=f.enter,h=f.leave,O=Object(c.useState)(),y=l()(O,2),x=y[0],j=y[1],S=Object(c.useState)(),v=l()(S,2),E=v[0],w=v[1],k=Object(c.useState)(),C=l()(k,2),P=C[0],T=C[1],B=Object(c.useState)(""),A=l()(B,2),z=A[0],D=A[1],H=Object(c.useState)(!1),I=l()(H,2),L=I[0],M=I[1],W=Object(c.useState)(!1),F=l()(W,2),N=F[0],U=F[1],Z=Object(c.useState)(!1),X=l()(Z,2),G=X[0],J=X[1],R=Object(c.useState)(!1),V=l()(R,2),K=V[0],q=V[1],Q=Object(c.useState)(!1),Y=l()(Q,2),$=Y[0],_=Y[1],ee=Object(c.useMemo)((function(){return o.find((function(e){return"SUSHI"===e.symbol}))}),[o]),te=Object(c.useMemo)((function(){return o.find((function(e){return"xSUSHI"===e.symbol}))}),[o]);Object(c.useEffect)((function(){D("")}),[n]),i()((function(){var e,n,o,l,c;return r.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(!(ee&&te&&t)){u.next=34;break}return M(!1),U(!1),J(!0),u.prev=4,e=s.ethers.BigNumber.from(2).pow(96).sub(1),u.next=8,r.a.awrap(a(ee.address,m.f));case 8:return n=u.sent,M(s.ethers.BigNumber.from(n).gte(e)),u.next=12,r.a.awrap(a(te.address,m.f));case 12:return o=u.sent,U(s.ethers.BigNumber.from(o).gte(e)),l=Object(d.g)("ERC20",ee.address,t),u.t0=j,u.next=18,r.a.awrap(l.balanceOf(m.f));case 18:return u.t1=u.sent,(0,u.t0)(u.t1),u.t2=w,u.next=23,r.a.awrap(l.totalSupply());case 23:return u.t3=u.sent,(0,u.t2)(u.t3),c=Object(d.g)("ERC20",te.address,t),u.t4=T,u.next=29,r.a.awrap(c.totalSupply());case 29:u.t5=u.sent,(0,u.t4)(u.t5);case 31:return u.prev=31,J(!1),u.finish(31);case 34:case"end":return u.stop()}}),null,null,[[4,,31,34]],Promise)}),[ee,te,t]);var ne=Object(c.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(z&&ee&&t)){a.next=16;break}return q(!0),a.prev=2,e=Object(d.l)(z,ee.decimals),a.next=6,r.a.awrap(p(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(u());case 12:D("");case 13:return a.prev=13,q(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[z,ee,t]),ae=Object(c.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(z&&te&&t)){a.next=16;break}return _(!0),a.prev=2,e=Object(d.l)(z,te.decimals),a.next=6,r.a.awrap(h(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(u());case 12:D("");case 13:return a.prev=13,_(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[z,te,t]);return{sushi:ee,xSushi:te,sushiStaked:x,sushiSupply:E,xSushiSupply:P,amount:z,setAmount:D,sushiAllowed:L,setSushiAllowed:M,xSushiAllowed:N,setXSushiAllowed:U,loading:G,onEnter:ne,entering:K,onLeave:ae,leaving:$}}},1388:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(21),l=n.n(o),c=n(0),s=n.n(c),u=n(12),i=n(5),m=n(1211),b=n(414),d=n(1213),f=n(321),g=n(1214),p=n(411),h=n(412),O=n(1216),y=n(1221),x=n(1207),j=n(1217),S=n(1212),v=n(1225),E=n(81),w=n(413),k=n(1224),C=n(417),P=n(418),T=n(23),B=n(56),A=n(1248),z=n(64),D=n(24),H=n(415),I=function(){var e=Object(c.useContext)(B.b).chainId,t=Object(z.a)(),n=Object(A.a)();return 1!==e?s.a.createElement(g.a,null):s.a.createElement(i.a,{style:{marginTop:T.g.large}},s.a.createElement(L,{state:n}),s.a.createElement(d.a,null),s.a.createElement(M,{state:n}),n.xSushi&&n.xSushi.balance.isZero()&&s.a.createElement(v.a,{text:t("you-dont-have-xsushi"),color:"orange",style:{marginTop:T.g.small}}),s.a.createElement(W,{state:n}))},L=function(e){var t=e.state,n=Object(z.a)();return s.a.createElement(i.a,null,s.a.createElement(x.a,{text:n("your-xsushi")}),s.a.createElement(m.a,{amount:t.xSushi?Object(D.d)(t.xSushi.balance,t.xSushi.decimals):"",suffix:"xSUSHI"}))},M=function(e){var t=e.state,n=Object(z.a)();return!t.xSushi||t.xSushi.balance.isZero()?s.a.createElement(x.a,{text:n("amount-to-unstake"),disabled:!0}):s.a.createElement(i.a,null,s.a.createElement(x.a,{text:n("amount-to-unstake")}),s.a.createElement(k.a,{token:t.xSushi,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:T.d}))},W=function(e){var t=e.state,n=!t.sushi||!t.xSushi||!t.sushiStaked||!t.xSushiSupply||Object(D.j)(t.amount),a=n?void 0:Object(D.l)(t.amount,t.xSushi.decimals).mul(t.sushiStaked).div(t.xSushiSupply);return s.a.createElement(j.a,null,s.a.createElement(m.a,{amount:a?Object(D.d)(a,t.sushi.decimals,8):"",suffix:"SUSHI",disabled:n}),s.a.createElement(F,{state:t}))},F=function(e){var t=e.state,n=Object(c.useState)({}),a=l()(n,2),r=a[0],o=a[1];return s.a.createElement(i.a,{style:{marginTop:T.g.normal}},!t.xSushi||t.xSushi.balance.isZero()||Object(D.j)(t.amount)?s.a.createElement(N,{state:t,onError:o,disabled:!0}):Object(D.l)(t.amount,t.xSushi.decimals).gt(t.xSushi.balance)?s.a.createElement(S.a,{symbol:t.xSushi.symbol}):t.loading?s.a.createElement(y.a,null):s.a.createElement(N,{state:t,onError:o,disabled:!1}),r.message&&4001!==r.code&&s.a.createElement(O.a,{error:r}))},N=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(z.a)();return s.a.createElement(f.a,{title:o("unstake"),loading:t.leaving,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onLeave());case 4:t.setAmount(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:a})};t.default=function(){var e=Object(z.a)();return s.a.createElement(H.a,null,s.a.createElement(p.a,null,s.a.createElement(b.a,null),s.a.createElement(h.a,null,s.a.createElement(w.a,{text:e("unstake")}),s.a.createElement(E.a,{light:!0},e("unstake-desc")),s.a.createElement(I,null)),"web"===u.a.OS&&s.a.createElement(C.a,null)),s.a.createElement(P.d,null))}}}]);
//# sourceMappingURL=9.8fc71272.chunk.js.map