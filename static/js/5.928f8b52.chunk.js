(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{1211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(23),l=n(41),c=n(64),i=n(81);t.a=function(e){var t=Object(c.a)(),n=Object(l.a)(),a=n.textDark,s=n.textLight,u=n.placeholder;return r.a.createElement(i.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?u:e.amount?a:s}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1212:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(64),l=n(321);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(l.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1219:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(21),l=n.n(o),c=n(0),i=n.n(c),s=n(5),u=n(23),m=n(56),d=n(64),f=n(321);t.a=function(e){var t,n=Object(d.a)(),a=Object(c.useContext)(m.b).approveToken,o=Object(c.useState)(!1),b=l()(o,2),p=b[0],y=b[1],k=Object(c.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),y(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,y(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?i.a.createElement(s.a,null):i.a.createElement(f.a,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:k,loading:p,containerStyle:{marginBottom:u.g.tiny}})}},1225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(23),c=n(41),i=n(410),s=n(321),u=n(81);t.a=function(e){var t=Object(c.a)().textLight,n=(0,Object(i.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(s.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1226:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(23),l=n(81);t.a=function(e){return r.a.createElement(l.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:o.g.tiny}},e.token.symbol)}},1230:function(e,t,n){"use strict";var a=n(139),r=n.n(a),o={};t.a=function(e,t,n){var a=e.toString();r()((function(){var n=setTimeout(e,t);return o[a]=n,n}),(function(e){clearTimeout(e)}),n)}},1231:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(23),l=n(24),c=n(81);t.a=function(e){return r.a.createElement(c.a,{caption:o.d,disabled:e.disabled,style:e.style},Object(l.d)(e.amount||e.token.balance,e.token.decimals,8))}},1232:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(23),l=n(81);t.a=function(e){return r.a.createElement(l.a,{caption:!0,numberOfLines:1,ellipsizeMode:"tail",style:{marginLeft:o.g.small,width:180},disabled:e.disabled},o.d?e.token.name:e.token.symbol)}},1237:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(23),c=n(1215),i=n(1220),s=n(88),u=n(1208),m=n(1209),d=n(1218),f=n(81),b=function(e){return r.a.createElement(m.a,{containerStyle:{marginBottom:u.a},style:{paddingLeft:l.g.small+l.g.tiny,paddingRight:l.g.small},selected:e.selected,disabled:e.selectable,onPress:function(){return null==e.setOption?void 0:e.setOption(e.selected?void 0:e.option)}},r.a.createElement(s.a,{style:{alignItems:"center"}},r.a.createElement(o.a,{style:{flex:1}},r.a.createElement(f.a,{fontWeight:"regular"},e.option.title),r.a.createElement(f.a,{note:!0,style:{marginTop:4}},e.option.description)),e.selected?r.a.createElement(c.a,null):r.a.createElement(d.a,null)))};t.a=function(e){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:e.title,expanded:!e.option,onExpand:function(){return e.setOption()}},e.options.map((function(t){var n;return r.a.createElement(b,{key:t.key,option:t,setOption:e.setOption,selected:t.key===(null==(n=e.option)?void 0:n.key)})}))),e.option&&r.a.createElement(b,{option:e.option,setOption:e.setOption,selected:!0,selectable:!1}))}},1238:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24),l=n(81);t.a=function(e){return r.a.createElement(l.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(o.f)(e.token.priceUSD||0,4))}},1239:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24),l=n(81);t.a=function(e){return r.a.createElement(l.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(o.f)(e.token.valueUSD||0,4))}},1240:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function l(e){try{i(a.next(e))}catch(t){o(t)}}function c(e){try{i(a.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}i((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.signERC2612Permit=t.signDaiPermit=void 0;const r=n(420),o=n(1241),l="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",c=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],i=e=>"".padEnd(e,"0"),s=(e,t)=>a(void 0,void 0,void 0,(function*(){return o.hexToUtf8((yield r.call(e,t,"0x06fdde03")).substr(130))})),u=(e,t)=>a(void 0,void 0,void 0,(function*(){if("string"!==typeof t)return t;const n=t,[a,o]=yield Promise.all([s(e,n),r.getChainId(e)]);return{name:a,version:"1",chainId:o,verifyingContract:n}}));t.signDaiPermit=(e,t,n,o,s,m)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,d={holder:n,spender:o,nonce:m||(yield r.call(e,a,`0x7ecebe00${i(24)}${n.substr(2)}`)),expiry:s||l,allowed:!0},f=((e,t)=>({types:{EIP712Domain:c,Permit:[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}]},primaryType:"Permit",domain:t,message:e}))(d,yield u(e,t)),b=yield r.signData(e,n,f);return Object.assign(Object.assign({},b),d)})),t.signERC2612Permit=(e,t,n,o,s=l,m,d)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,f={owner:n,spender:o,value:s,nonce:d||(yield r.call(e,a,`0x7ecebe00${i(24)}${n.substr(2)}`)),deadline:m||l},b=((e,t)=>({types:{EIP712Domain:c,Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},primaryType:"Permit",domain:t,message:e}))(f,yield u(e,t)),p=yield r.signData(e,n,b);return Object.assign(Object.assign({},p),f)}))},1241:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hexToUtf8=void 0;const r=a(n(1242));t.hexToUtf8=function(e){let t="",n=0,a=(e=(e=(e=(e=(e=e.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length;for(let r=0;r<a;r+=2)n=parseInt(e.substr(r,2),16),t+=String.fromCharCode(n);return r.default.decode(t)}},1242:function(e,t,n){!function(e){var t,n,a,r=String.fromCharCode;function o(e){for(var t,n,a=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(n=e.charCodeAt(r++)))?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),r--):a.push(t);return a}function l(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function c(e,t){return r(e>>t&63|128)}function i(e){if(0==(4294967168&e))return r(e);var t="";return 0==(4294965248&e)?t=r(e>>6&31|192):0==(4294901760&e)?(l(e),t=r(e>>12&15|224),t+=c(e,6)):0==(4292870144&e)&&(t=r(e>>18&7|240),t+=c(e,12),t+=c(e,6)),t+=r(63&e|128)}function s(){if(a>=n)throw Error("Invalid byte index");var e=255&t[a];if(a++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(){var e,r;if(a>n)throw Error("Invalid byte index");if(a==n)return!1;if(e=255&t[a],a++,0==(128&e))return e;if(192==(224&e)){if((r=(31&e)<<6|s())>=128)return r;throw Error("Invalid continuation byte")}if(224==(240&e)){if((r=(15&e)<<12|s()<<6|s())>=2048)return l(r),r;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=(7&e)<<18|s()<<12|s()<<6|s())>=65536&&r<=1114111)return r;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,a=-1,r="";++a<n;)r+=i(t[a]);return r},e.decode=function(e){t=o(e),n=t.length,a=0;for(var l,c=[];!1!==(l=u());)c.push(l);return function(e){for(var t,n=e.length,a=-1,o="";++a<n;)(t=e[a])>65535&&(o+=r((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=r(t);return o}(c)}}(t)},1244:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(64),l=n(321);t.a=function(e){var t=e.state,n=Object(o.a)();return r.a.createElement(l.a,{title:t.fromSymbol+"-"+t.toSymbol+" "+n("not-supported"),disabled:!0})}},1245:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(31),l=n.n(o),c=n(0),i=n(35),s=n(1240),u=n(33),m=n(61),d=n(56),f=n(24),b=n(100),p=n(416),y=n(419);t.a=function(){var e=Object(c.useContext)(d.b).ethereum,t=Object(p.a)(),n=t.getPair,a=t.getTrade,o=t.calculateAmountOfLPTokenMinted,k=Object(y.b)(),O=k.allowedSlippage,v=k.ttl,g=new i.g("3","100"),j=function(e,t,n,o,c){var s,u,d,b,p;return r.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,r.a.awrap(a(e,t,n,o));case 2:if(u=y.sent){y.next=5;break}throw new Error("Cannot find trade");case 5:return d=i.h.swapCallParameters(u,{feeOnTransfer:!1,allowedSlippage:O,recipient:m.h,ttl:v}),b=Object(f.g)("IUniswapV2Router02",m.d,c),y.next=9,r.a.awrap((s=b.populateTransaction)[d.methodName].apply(s,l()(d.args).concat([{value:d.value}])));case 9:return p=y.sent,y.abrupt("return",p.data||"");case 11:case"end":return y.stop()}}),null,null,null,Promise)},E=Object(c.useCallback)((function(e,t,a,c,s){var d,p,y,k,O,v,E,h,x;return r.a.async((function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,r.a.awrap(n(e,t,c));case 2:return p=T.sent,y=new i.j(Object(f.b)(e),a.div(2).toString()),T.next=6,r.a.awrap(o(p,y,p.getOutputAmount(y)[0]));case 6:if(k=T.sent){T.next=9;break}throw new Error("Cannot calculate LP token amount");case 9:return O=Object(f.g)("ZapIn",m.h,s),T.t0=e.address,T.t1=p.liquidityToken.address,T.t2=a,T.t3=Object(f.c)(k,g),T.t4=m.d,T.t5=m.d,T.next=18,r.a.awrap(j(e,t,a.div(2),c,s));case 18:return T.t6=T.sent,v=[T.t0,T.t1,T.t2,T.t3,T.t4,T.t5,T.t6],E=Object(f.h)(e)?a:u.ethers.constants.Zero,T.next=23,r.a.awrap((d=O.estimateGas).ZapIn.apply(d,v.concat([{value:E}])));case 23:return h=T.sent,T.next=26,r.a.awrap(O.ZapIn.apply(O,v.concat([{value:E,gasLimit:h.mul(120).div(100)}])));case 26:return x=T.sent,T.abrupt("return",b.a.apply(void 0,[x,"ZapIn_General_V2.ZapIn()"].concat(l()(v.map((function(e){return e.toString()}))))));case 28:case"end":return T.stop()}}),null,null,null,Promise)}),[j]),h=function(e,t,o,l){var c,i,s,u,m,d;return r.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:if(e!==t.tokenA){b.next=5;break}c=t.tokenB,i=t.tokenA,b.next=11;break;case 5:if(e!==t.tokenB){b.next=10;break}c=t.tokenA,i=t.tokenB,b.next=11;break;case 10:throw new Error("Wrong outputToken");case 11:return b.next=13,r.a.awrap(n(c,i,l));case 13:return s=b.sent,u=Object(f.m)(s.reserveOf(Object(f.b)(c)),c.decimals),m=o.mul(u).div(t.totalSupply),b.next=18,r.a.awrap(a(c,i,m,l));case 18:if(d=b.sent){b.next=21;break}throw new Error("Cannot find trade");case 21:return b.abrupt("return",Object(f.m)(d.outputAmount));case 22:case"end":return b.stop()}}),null,null,null,Promise)};return{zapIn:E,zapOut:Object(c.useCallback)((function(t,n,a,o,c){var i,u,d,p,y,k,O;return r.a.async((function(j){for(;;)switch(j.prev=j.next){case 0:return u=Object(f.g)("ZapOut",m.i,c),d=Math.floor((new Date).getTime()/1e3)+v,j.t0=r.a,j.t1=s.signERC2612Permit,j.t2=e,j.t3=t.address,j.next=8,r.a.awrap(c.getAddress());case 8:return j.t4=j.sent,j.t5=m.i,j.t6=a.toString(),j.t7=d,j.t8=(0,j.t1)(j.t2,j.t3,j.t4,j.t5,j.t6,j.t7),j.next=15,j.t0.awrap.call(j.t0,j.t8);case 15:return p=j.sent,j.t9=n.address,j.t10=t.address,j.t11=a,j.t12=f.c,j.next=22,r.a.awrap(h(n,t,a,o));case 22:return j.t13=j.sent,j.t14=g,j.t15=(0,j.t12)(j.t13,j.t14),j.t16=a,j.t17=d,j.t18=p.v,j.t19=p.r,j.t20=p.s,y=[j.t9,j.t10,j.t11,j.t15,j.t16,j.t17,j.t18,j.t19,j.t20],j.next=33,r.a.awrap((i=u.estimateGas).ZapOutWithPermit.apply(i,y));case 33:return k=j.sent,j.next=36,r.a.awrap(u.ZapOutWithPermit.apply(u,y.concat([{gasLimit:k.mul(120).div(100)}])));case 36:return O=j.sent,j.abrupt("return",b.a.apply(void 0,[O,"ZapOut_General_V1.ZapOutWithPermit()"].concat(l()(y.map((function(e){return e.toString()}))))));case 38:case"end":return j.stop()}}),null,null,null,Promise)}),[h]),getZapOutSwappedAmount:h}}},1247:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(21),l=n.n(o),c=n(0),i=n.n(c),s=n(240),u=n(5),m=n(23),d=n(56),f=n(1230),b=n(64),p=n(1215),y=n(1220),k=n(88),O=n(1208),v=n(1222),g=n(1209),j=n(1218),E=n(81),h=n(1231),x=n(1210),T=n(1232),S=n(1238),w=n(11),A=n.n(w),P=n(90),C=n(33),D=n(41),I=n(410),L=n(322),Z=n(321),B=n(1228);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(){return i.a.createElement(P.a,{size:"small",style:{position:"absolute",right:16,bottom:16}})},_=function(e){var t=Object(b.a)(),n=Object(D.a)().accent,a=Object(c.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return i.a.createElement(g.a,{selected:!1,disabled:!0,onPress:a,containerStyle:{marginBottom:O.a}},i.a.createElement(k.a,{style:{alignItems:"center"}},i.a.createElement(x.a,{token:e.token}),i.a.createElement(T.a,{token:e.token}),i.a.createElement(u.a,{style:{flex:1}}),i.a.createElement(Z.a,{type:"clear",size:"small",color:n,title:e.duplicate?t("already-added"):t("-add-")+" "+e.token.symbol,fontWeight:"bold",onPress:a,disabled:e.duplicate,buttonStyle:{paddingHorizontal:4,height:27}})))},M=function(e){var t=Object(b.a)(),n=Object(I.a)().border,a=Object(c.useContext)(d.b),o=a.provider,s=a.tokens,p=Object(c.useState)(),y=l()(p,2),O=y[0],v=y[1],g=Object(c.useState)(!1),j=l()(g,2),E=j[0],h=j[1],x=!!O&&-1!==s.findIndex((function(e){return e.address===O.address}));return e.tokens?(Object(c.useEffect)((function(){""===e.text&&(h(!1),v(void 0))}),[e.text]),Object(f.a)((function(){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.text.trim(),!o||!C.ethers.utils.isAddress(t)){a.next=11;break}return h(!0),a.prev=3,a.next=6,r.a.awrap(Object(L.i)(t,o));case 6:(n=a.sent).name&&n.symbol&&n.decimals&&v(n);case 8:return a.prev=8,h(!1),a.finish(8);case 11:case"end":return a.stop()}}),null,null,[[3,,8,11]],Promise)}),300,[o,e.text]),i.a.createElement(u.a,null,i.a.createElement(k.a,{style:{marginBottom:m.g.small}},i.a.createElement(B.a,{value:e.text,onChangeText:e.onChangeText,placeholder:t("token-name-symbol-or-address"),autoFocus:m.d,inputStyle:{marginHorizontal:m.g.tiny,fontSize:e.text?20:16},inputContainerStyle:{borderBottomWidth:0,marginRight:E?32:0},labelStyle:{height:0},containerStyle:U(U({},n()),{},{paddingHorizontal:m.g.tiny,paddingTop:12,paddingBottom:0})}),e.onAddToken&&E&&i.a.createElement(z,null)),e.onAddToken&&O&&i.a.createElement(_,{token:O,selected:!0,onSelectToken:e.onAddToken,duplicate:x}))):i.a.createElement(u.a,null)},W=n(1226),q=n(1239),R=function(e){var t=Object(c.useContext)(d.b),n=t.loadingTokens,a=t.tokens,r=Object(c.useCallback)((function(t){var n=t.item;return i.a.createElement(G,{key:n.address,token:n,selected:!1,onSelectToken:e.onSelectToken,disabled:null==e.disabled?void 0:e.disabled(n)})}),[e.onSelectToken,e.disabled]),o=Object(c.useMemo)((function(){return a.filter((function(t){return!e.hidden||!e.hidden(t)})).sort(V)}),[a,e.hidden]);return n?i.a.createElement(v.a,null):0===o.length?i.a.createElement(H,null):i.a.createElement(s.a,{keyExtractor:function(e){return e.address},data:o,renderItem:r})},H=function(){var e=Object(b.a)();return i.a.createElement(u.a,{style:{margin:m.g.normal}},i.a.createElement(E.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},e("you-dont-have-assets")))},G=function(e){var t=Object(c.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return i.a.createElement(g.a,{selected:e.selected,onPress:t,disabled:e.disabled||e.selectable,containerStyle:{marginBottom:O.a}},i.a.createElement(k.a,{style:{alignItems:"center"}},i.a.createElement(x.a,{token:e.token,disabled:e.disabled}),i.a.createElement(u.a,null,null!==e.token.priceUSD&&i.a.createElement(S.a,{token:e.token,disabled:e.disabled,style:{marginLeft:m.g.small}}),i.a.createElement(T.a,{token:e.token,disabled:e.disabled})),i.a.createElement(u.a,{style:{flex:1,alignItems:"flex-end"}},null!==e.token.valueUSD&&i.a.createElement(q.a,{token:e.token,disabled:e.disabled}),i.a.createElement(k.a,null,i.a.createElement(h.a,{token:e.token,disabled:e.disabled,style:{flex:1,textAlign:"right"}}),m.d&&i.a.createElement(W.a,{token:e.token,disabled:e.disabled}))),e.selected?i.a.createElement(p.a,null):i.a.createElement(j.a,null)))},V=function(e,t){if(t.balance.isZero()&&e.balance.isZero())return((null==t?void 0:t.priceUSD)||0)-((null==e?void 0:e.priceUSD)||0);var n=(null==t?void 0:t.valueUSD)||0,a=(null==e?void 0:e.valueUSD)||1;return n===a?(t.balance.isZero()?0:1e10)-(e.balance.isZero()?0:1e10)+e.symbol.localeCompare(t.symbol):n-a};t.a=function(e){var t=Object(c.useContext)(d.b),n=t.tokens,a=t.addCustomToken,o=Object(c.useState)(""),s=l()(o,2),m=s[0],b=s[1],p=Object(c.useState)(""),k=l()(p,2),O=k[0],v=k[1],g=Object(c.useMemo)((function(){return n.find((function(t){return t.symbol===e.symbol}))}),[n,e.symbol]);return Object(c.useEffect)((function(){return b("")}),[e.symbol]),Object(f.a)((function(){return v(m.trim().toLowerCase())}),300,[m]),i.a.createElement(u.a,{style:e.style},i.a.createElement(y.a,{title:e.title,expanded:!e.symbol,onExpand:function(){return e.onChangeSymbol("")}},i.a.createElement(M,{text:m,onChangeText:b,tokens:n,onAddToken:function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(a(t));case 2:b(""),v(""),e.onChangeSymbol(t.symbol);case 5:case"end":return n.stop()}}),null,null,null,Promise)}}),i.a.createElement(R,{disabled:e.disabled,hidden:function(t){return O.length>0?!t.symbol.toLowerCase().includes(O)&&!t.name.toLowerCase().includes(O):(null==e.hidden?void 0:e.hidden(t))||!1},onSelectToken:function(t){return e.onChangeSymbol(t.symbol)}})),g&&i.a.createElement(G,{token:g,selected:!0,onSelectToken:function(){return e.onChangeSymbol("")},selectable:!0}))}},1390:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(21),l=n.n(o),c=n(0),i=n.n(c),s=n(12),u=n(5),m=n(35),d=n(33),f=n(139),b=n.n(f),p=n(1211),y=n(1219),k=n(414),O=n(1213),v=n(321),g=n(1214),j=n(411),E=n(412),h=n(1216),x=n(1221),T=n(1207),S=n(1217),w=n(1212),A=n(1208),P=n(1223),C=n(1225),D=(n(1237),n(81)),I=n(413),L=n(1224),Z=n(1247),B=n(1244),F=n(417),U=n(418),z=n(61),_=n(23),M=n(157),W=n(56),q=n(11),R=n.n(q),H=n(24),G=n(1233),V=n(416),$=n(419),N=n(1234),J=n(1245);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){R()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(){var e=Object(N.a)(),t=Object(c.useContext)(W.b),n=t.provider,a=t.signer,o=t.updateTokens,i=Object(c.useState)(!1),s=l()(i,2),u=s[0],m=s[1],d=Object(c.useState)(),f=l()(d,2),b=f[0],p=f[1],y=Object(c.useState)(),k=l()(y,2),O=k[0],v=k[1],g=Object(c.useState)(!1),j=l()(g,2),E=j[0],h=j[1],x=Object(V.a)().getPair,T=Object($.b)(),S=T.addLiquidity,w=T.addLiquidityETH,A=Object(J.a)().zapIn,P=!!O&&!!e.toToken&&!O.priceOf(Object(H.b)(e.toToken)).denominator.toString().startsWith("0");Object(c.useEffect)((function(){v(void 0),e.setFromSymbol("")}),[b]),Object(G.a)((function(t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t||(m(!0),v(void 0)),!(e.fromToken&&e.toToken&&n)){a.next=17;break}return a.prev=2,a.t0=v,a.next=6,r.a.awrap(x(e.fromToken,e.toToken,n));case 6:a.t1=a.sent,(0,a.t0)(a.t1),a.next=12;break;case 10:a.prev=10,a.t2=a.catch(2);case 12:return a.prev=12,m(!1),a.finish(12);case 15:a.next=18;break;case 17:m(!1);case 18:case"end":return a.stop()}}),null,null,[[2,10,12,15]],Promise)}),(function(){return"getPair("+e.fromSymbol+","+e.toSymbol+")"}),[e.fromSymbol,e.toSymbol,n],0);var C=Object(c.useCallback)((function(){var t,c,i,s,u,m,d,f,p,y;return r.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:if(!(e.fromToken&&e.toToken&&e.fromAmount&&e.toAmount&&n&&a)){k.next=33;break}if(h(!0),k.prev=2,t=Object(H.l)(e.fromAmount,e.fromToken.decimals),c=Object(H.l)(e.toAmount,e.toToken.decimals),"zapper"!==b){k.next=13;break}return k.next=8,r.a.awrap(A(e.fromToken,e.toToken,t,n,a));case 8:return i=k.sent,k.next=11,r.a.awrap(i.wait());case 11:k.next=27;break;case 13:if(!Object(H.h)(e.fromToken)&&!Object(H.h)(e.toToken)){k.next=22;break}return s=Object(H.h)(e.fromToken)?[e.toToken,c,t]:[e.fromToken,t,c],u=l()(s,3),m=u[0],d=u[1],f=u[2],k.next=17,r.a.awrap(w(m,d,f,a));case 17:return p=k.sent,k.next=20,r.a.awrap(p.wait());case 20:k.next=27;break;case 22:return k.next=24,r.a.awrap(S(e.fromToken,e.toToken,t,c,a));case 24:return y=k.sent,k.next=27,r.a.awrap(y.wait());case 27:return k.next=29,r.a.awrap(o());case 29:e.setFromSymbol("");case 30:return k.prev=30,h(!1),k.finish(30);case 33:case"end":return k.stop()}}),null,null,[[2,,30,33]],Promise)}),[e.fromToken,e.toToken,e.fromAmount,e.toAmount,n,a]);return Q(Q({},e),{},{loading:u||e.loading,mode:b,setMode:p,pair:O,priceDetermined:P,onAdd:C,adding:E})},Y=n(41),ee=n(156),te=n(64),ne=n(415),ae=function(){var e=Object(c.useContext)(W.b).chainId,t=X();return 1!==e?i.a.createElement(g.a,null):i.a.createElement(u.a,{style:{marginTop:_.g.large}},i.a.createElement(re,{state:t}),i.a.createElement(O.a,null),i.a.createElement(oe,{state:t}),i.a.createElement(O.a,null),i.a.createElement(le,{state:t}),i.a.createElement(i.a.Fragment,null,i.a.createElement(A.b,null),i.a.createElement(ce,{state:t})),i.a.createElement(ie,{state:t}))},re=function(e){var t=e.state,n=Object(te.a)(),a=Object(c.useContext)(W.b).customTokens;return i.a.createElement(Z.a,{title:n("1st-token"),symbol:t.fromSymbol,onChangeSymbol:t.setFromSymbol,hidden:function(e){return!a.find((function(t){return t.address===e.address}))&&e.balance.isZero()}})},oe=function(e){var t=e.state,n=Object(te.a)(),a=Object(c.useContext)(W.b).customTokens;return t.fromSymbol?i.a.createElement(u.a,null,i.a.createElement(Z.a,{title:n("2nd-token"),symbol:t.toSymbol,onChangeSymbol:t.setToSymbol,hidden:function(e){return e.symbol===t.fromSymbol||!a.find((function(t){return t.address===e.address}))&&e.balance.isZero()}})):i.a.createElement(T.a,{text:n("2nd-token"),disabled:!0})},le=function(e){var t=e.state,n=Object(te.a)();if(!t.fromSymbol||!t.toSymbol)return i.a.createElement(T.a,{text:n("amount-of-tokens"),disabled:!0});return i.a.createElement(L.a,{title:n("amount-of-tokens"),token:t.fromToken,amount:t.fromAmount,onAmountChanged:function(e){if(t.setFromAmount(e),t.pair&&t.fromToken&&t.priceDetermined){var n=t.pair.priceOf(Object(H.b)(t.fromToken)).quote(Object(H.a)(t.fromToken,e)).toExact();t.setToAmount(Object(H.j)(n)?"":n)}},hideMaxButton:t.loading&&!t.pair})},ce=function(e){var t=e.state;if(!t.fromSymbol||!t.toSymbol)return i.a.createElement(u.a,null);return i.a.createElement(L.a,{token:t.toToken,amount:t.toAmount,onAmountChanged:function(e){if(t.setToAmount(e),t.pair&&t.toToken&&t.priceDetermined){var n=t.pair.priceOf(Object(H.b)(t.toToken)).quote(Object(H.a)(t.toToken,e)).toExact();t.setFromAmount(Object(H.j)(n)?"":n)}},hideMaxButton:t.loading&&!t.pair})},ie=function(e){var t=e.state;return!t.fromToken||!t.toToken||t.loading||t.pair&&t.priceDetermined?i.a.createElement(me,{state:t}):i.a.createElement(se,{state:t})},se=function(e){var t=e.state,n=Object(te.a)(),a=Object(Y.a)(),r=(a.red,a.green),o=Object(H.j)(t.fromAmount)||Object(H.j)(t.toAmount),l=M.a.from(Object(H.l)(t.toAmount,t.toToken.decimals),Object(H.l)(t.fromAmount,t.fromToken.decimals)).toString(8);return i.a.createElement(u.a,null,i.a.createElement(S.a,{style:{marginTop:_.g.normal}},i.a.createElement(fe,{state:t,price:l,disabled:o}),i.a.createElement(ue,{state:t})),!Object(H.i)(t.fromToken,t.toToken)&&i.a.createElement(C.a,{text:n("first-provider-desc-1")+n("first-provider-desc-2"),color:r,style:{marginTop:_.g.small}}))},ue=function(e){var t=e.state,n=Object(c.useState)({}),a=l()(n,2),r=a[0],o=a[1];b()((function(){return o({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var s=!Object(H.h)(t.fromToken)&&!t.fromTokenAllowed,m=!Object(H.h)(t.toToken)&&!t.toTokenAllowed,d=s||Object(H.j)(t.fromAmount)||m||Object(H.j)(t.toAmount);return i.a.createElement(u.a,{style:{marginTop:_.g.normal}},Object(H.i)(t.fromToken,t.toToken)?i.a.createElement(B.a,{state:t}):!t.fromToken||!t.toToken||Object(H.j)(t.fromAmount)||Object(H.j)(t.toAmount)?i.a.createElement(ye,{state:t,onError:o,disabled:!0}):t.loading?i.a.createElement(x.a,null):Object(H.l)(t.fromAmount,t.fromToken.decimals).gt(t.fromToken.balance)?i.a.createElement(w.a,{symbol:t.fromSymbol}):Object(H.l)(t.toAmount,t.toToken.decimals).gt(t.toToken.balance)?i.a.createElement(w.a,{symbol:t.toSymbol}):i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{token:t.fromToken,spender:z.d,onSuccess:function(){return t.setFromTokenAllowed(!0)},onError:o,hidden:!s}),i.a.createElement(y.a,{token:t.toToken,spender:z.d,onSuccess:function(){return t.setToTokenAllowed(!0)},onError:o,hidden:!m}),i.a.createElement(ye,{state:t,onError:o,disabled:d})),r.message&&4001!==r.code&&i.a.createElement(h.a,{error:r}))},me=function(e){var t=e.state,n=Object(te.a)(),a=de(t),r=a.fromAmount,o=a.toAmount,l=a.lpTokenAmount,c=Object(H.j)(t.fromAmount)||Object(H.j)(t.toAmount),s=t.pair&&t.fromToken&&t.priceDetermined?t.pair.priceOf(Object(H.b)(t.fromToken)).toFixed(8):void 0,u=t.fromSymbol+"-"+t.toSymbol;return i.a.createElement(S.a,null,i.a.createElement(p.a,{amount:l,suffix:u,disabled:c}),i.a.createElement(P.a,{text:null==r?void 0:r.toFixed(),label:t.fromSymbol||n("1st-token"),disabled:c}),i.a.createElement(P.a,{text:null==o?void 0:o.toFixed(),label:t.toSymbol||n("2nd-token"),disabled:c}),i.a.createElement(fe,{state:t,price:s,disabled:!t.fromSymbol||!t.toSymbol}),i.a.createElement(be,{state:t}))},de=function(e){var t=Object(c.useState)(),n=l()(t,2),a=n[0],o=n[1],i=Object(c.useState)(),s=l()(i,2),u=s[0],d=s[1],f=Object(c.useState)(),p=l()(f,2),y=p[0],k=p[1],O=Object(V.a)().calculateAmountOfLPTokenMinted;return b()((function(){var t,n,a;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!(e.fromToken&&e.toToken&&e.pair)||Object(H.j)(e.fromAmount)||Object(H.j)(e.toAmount)){l.next=9;break}return t=new m.j(Object(H.b)(e.fromToken),Object(H.l)(e.fromAmount,e.fromToken.decimals).div(1).toString()),d(t),n=Object(H.a)(e.toToken,e.toAmount),k(n),l.next=7,r.a.awrap(O(e.pair,t,n));case 7:a=l.sent,o(a?Object(H.d)(a,e.pair.liquidityToken.decimals):void 0);case 9:case"end":return l.stop()}}),null,null,null,Promise)}),[e.pair,e.fromAmount,e.toAmount]),{fromAmount:u,toAmount:y,lpTokenAmount:a}},fe=function(e){var t=e.state,n=e.price,a=e.disabled,r=Object(te.a)();return i.a.createElement(P.a,{label:r("ratio"),text:n,suffix:t.toSymbol+" = 1 "+t.fromSymbol,disabled:a})},be=function(e){var t=e.state,n=Object(c.useState)({}),a=l()(n,2),r=a[0],o=a[1],s=pe(t.fromToken),m=(s.allowed,s.setAllowed,s.loading);b()((function(){return o({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var d=!Object(H.h)(t.fromToken)&&!t.fromTokenAllowed,f=!Object(H.h)(t.toToken)&&!t.toTokenAllowed,p=d||Object(H.j)(t.fromAmount)||f||Object(H.j)(t.toAmount);return i.a.createElement(u.a,{style:{marginTop:_.g.normal}},Object(H.i)(t.fromToken,t.toToken)?i.a.createElement(B.a,{state:t}):!t.fromToken||!t.toToken||Object(H.j)(t.fromAmount)||Object(H.j)(t.toAmount)?i.a.createElement(ye,{state:t,onError:o,disabled:!0}):t.loading||m||!t.pair?i.a.createElement(x.a,null):Object(H.l)(t.fromAmount,t.fromToken.decimals).gt(t.fromToken.balance)?i.a.createElement(w.a,{symbol:t.fromSymbol}):"normal"===t.mode&&Object(H.l)(t.toAmount,t.toToken.decimals).gt(t.toToken.balance)?i.a.createElement(w.a,{symbol:t.toSymbol}):i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{token:t.fromToken,spender:z.d,onSuccess:function(){return t.setFromTokenAllowed(!0)},onError:o,hidden:!d}),i.a.createElement(y.a,{token:t.toToken,spender:z.d,onSuccess:function(){return t.setToTokenAllowed(!0)},onError:o,hidden:!f}),i.a.createElement(ye,{state:t,onError:o,disabled:p})),r.message&&4001!==r.code&&i.a.createElement(h.a,{error:r}))},pe=function(e){var t=Object(c.useContext)(W.b),n=t.signer,a=t.getTokenAllowance,o=Object(c.useState)(!1),i=l()(o,2),s=i[0],u=i[1],m=Object(c.useState)(!1),f=l()(m,2),p=f[0],y=f[1];return b()((function(){var t,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(u(!1),!e||!n){l.next=13;break}if(y(!0),l.prev=3,t=d.ethers.BigNumber.from(2).pow(96).sub(1),!Object(H.h)(e)){l.next=10;break}return l.next=8,r.a.awrap(a(e.address,z.h));case 8:o=l.sent,u(d.ethers.BigNumber.from(o).gte(t));case 10:return l.prev=10,y(!1),l.finish(10);case 13:case"end":return l.stop()}}),null,null,[[3,,10,13]],Promise)}),[e,n]),{allowed:s,setAllowed:u,loading:p}},ye=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(te.a)(),l=Object(ee.a)("/liquidity/remove","RemoveLiquidity"),s=Object(c.useCallback)((function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onAdd());case 4:l(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)}),[t.onAdd,n]);return i.a.createElement(v.a,{title:o("supply-",{symbol:t.fromSymbol&&t.toSymbol?" "+t.fromSymbol+"-"+t.toSymbol:""}),disabled:a,loading:t.adding,onPress:s})};t.default=function(){var e=Object(te.a)();return i.a.createElement(ne.a,null,i.a.createElement(j.a,null,i.a.createElement(k.a,null),i.a.createElement(E.a,null,i.a.createElement(I.a,{text:e("add-liquidity")}),i.a.createElement(D.a,{light:!0},e("add-liquidity-desc")),i.a.createElement(ae,null)),"web"===s.a.OS&&i.a.createElement(F.a,null)),i.a.createElement(U.b,null))}}}]);
//# sourceMappingURL=5.928f8b52.chunk.js.map