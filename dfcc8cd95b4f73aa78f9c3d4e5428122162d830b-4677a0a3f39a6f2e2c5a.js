(self.webpackChunkohpretty_gatsby_blog=self.webpackChunkohpretty_gatsby_blog||[]).push([[667],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!i(t[l[c]],a[l[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var o,r=n(7294),i=(o=r)&&"object"==typeof o&&"default"in o?o.default:o;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(o){if("function"!=typeof o)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=t(l.map((function(t){return t.props}))),d.canUseDOM?e(c):n&&(c=n(c))}var d=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,l=[],t};var a=r.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),u()},a.render=function(){return i.createElement(o,this.props)},r}(r.PureComponent);return a(d,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(o)+")"),a(d,"canUseDOM",s),d}}},9316:function(t,e,n){var o=n(7294);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var i=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,o,r){return function(t,e,n,o,r){var i=(t-n)/(e-n);if(0===i)return o;if(1===i)return r;for(var a="#",s=1;s<6;s+=2){var c=parseInt(o.substr(s,2),16),l=parseInt(r.substr(s,2),16),u=Math.round((1-i)*c+i*l).toString(16);1===u.length&&(u="0"+u),a+=u}return a}(t,e,n,s(o),s(r))}var l=function(t){function e(e){t.call(this,e);var n=e.height,o=e.width,r=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:r?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,o=e.h,r=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var i=Math.min(this.i,Math.max(this.o,r));i!==o&&this.setState({h:i})},e.prototype.U=function(t){var e=this.state,n=e.h,o=e.N,r=e.B,i=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-r;(!o||s<250||i&&n<=a||!i&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,i=t.className,a=t.offColor,s=t.onColor,l=t.offHandleColor,u=t.onHandleColor,d=t.checkedIcon,p=t.uncheckedIcon,h=t.checkedHandleIcon,f=t.uncheckedHandleIcon,m=t.boxShadow,g=t.activeBoxShadow,y=t.height,b=t.width,v=t.borderRadius,w=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),k=this.state,T=k.h,E=k.N,C=k.j,x={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},S={height:y,width:b,margin:Math.max(0,(this.t-y)/2),position:"relative",background:c(T,this.i,this.o,a,s),borderRadius:"number"==typeof v?v:y/2,cursor:n?"default":"pointer",WebkitTransition:E?null:"background 0.25s",MozTransition:E?null:"background 0.25s",transition:E?null:"background 0.25s"},A={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"relative",opacity:(T-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},O={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"absolute",opacity:1-(T-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},j={height:this.t,width:this.t,background:c(T,this.i,this.o,l,u),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof v?v-1:"50%",position:"absolute",transform:"translateX("+T+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:C?g:m,border:0,WebkitTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},M={height:this.t,width:this.t,opacity:Math.max(2*(1-(T-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((T-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"};return o.createElement("div",{className:i,style:x},o.createElement("div",{className:"react-switch-bg",style:S,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&o.createElement("div",{style:A},d),p&&o.createElement("div",{style:O},p)),o.createElement("div",{className:"react-switch-handle",style:j,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},f&&o.createElement("div",{style:M},f),h&&o.createElement("div",{style:I},h)),o.createElement("input",r({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},w,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:i,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l},7534:function(t,e,n){t.exports=n(9316)},945:function(t,e,n){"use strict";n.d(e,{H:function(){return Yt},j:function(){return Xt}});var o,r,i,a,s=n(7294),c=n(9),l=n(8631),u=n(9499),d=n(5697),p=n.n(d),h=n(4839),f=n.n(h),m=n(2993),g=n.n(m),y=n(6494),b=n.n(y),v="bodyAttributes",w="htmlAttributes",k="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(t){return T[t]})),"charset"),C="cssText",x="href",S="http-equiv",A="innerHTML",O="itemprop",j="name",M="property",I="rel",_="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",D="defer",R="encodeSpecialCharacters",H="onChangeClientState",z="titleTemplate",B=Object.keys(P).reduce((function(t,e){return t[P[e]]=e,t}),{}),U=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},G=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},X=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},$=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=et(t,T.TITLE),n=et(t,z);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var o=et(t,N);return e||o||void 0},J=function(t){return et(t,H)||function(){}},Q=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return K({},t,e)}),{})},Z=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var o=Object.keys(n),r=0;r<o.length;r++){var i=o[r].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},tt=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&at("Helmet: "+t+' should be of type "Array". Instead found type "'+W(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===e.indexOf(c)||n===I&&"canonical"===t[n].toLowerCase()||c===I&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(s)||s!==A&&s!==C&&s!==O||(n=s)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),a=0;a<i.length;a++){var s=i[a],c=b()({},o[s],r[s]);o[s]=c}return t}),[]).reverse()},et=function(t,e){for(var n=t.length-1;n>=0;n--){var o=t[n];if(o.hasOwnProperty(e))return o[e]}return null},nt=(o=Date.now(),function(t){var e=Date.now();e-o>16?(o=e,t(e)):setTimeout((function(){nt(t)}),0)}),ot=function(t){return clearTimeout(t)},rt="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||nt:n.g.requestAnimationFrame||nt,it="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ot:n.g.cancelAnimationFrame||ot,at=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},st=null,ct=function(t,e){var n=t.baseTag,o=t.bodyAttributes,r=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,u=t.styleTags,d=t.title,p=t.titleAttributes;dt(T.BODY,o),dt(T.HTML,r),ut(d,p);var h={baseTag:pt(T.BASE,n),linkTags:pt(T.LINK,i),metaTags:pt(T.META,a),noscriptTags:pt(T.NOSCRIPT,s),scriptTags:pt(T.SCRIPT,l),styleTags:pt(T.STYLE,u)},f={},m={};Object.keys(h).forEach((function(t){var e=h[t],n=e.newTags,o=e.oldTags;n.length&&(f[t]=n),o.length&&(m[t]=h[t].oldTags)})),e&&e(),c(t,f,m)},lt=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=lt(t)),dt(T.TITLE,e)},dt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var o=n.getAttribute(F),r=o?o.split(","):[],i=[].concat(r),a=Object.keys(e),s=0;s<a.length;s++){var c=a[s],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===r.indexOf(c)&&r.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);r.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},pt=function(t,e){var n=document.head||document.querySelector(T.HEAD),o=n.querySelectorAll(t+"["+"data-react-helmet]"),r=Array.prototype.slice.call(o),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var o in e)if(e.hasOwnProperty(o))if(o===A)n.innerHTML=e.innerHTML;else if(o===C)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[o]?"":e[o];n.setAttribute(o,s)}n.setAttribute(F,"true"),r.some((function(t,e){return a=e,n.isEqualNode(t)}))?r.splice(a,1):i.push(n)})),r.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:r,newTags:i}},ht=function(t){return Object.keys(t).reduce((function(e,n){var o=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+o:o}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[P[n]||n]=t[n],e}),e)},mt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(o={key:t})[F]=!0,r=ft(n,o),[s.createElement(T.TITLE,r,t)];var t,n,o,r},toString:function(){return function(t,e,n,o){var r=ht(n),i=lt(e);return r?"<"+t+' data-react-helmet="true" '+r+">"+$(i,o)+"</"+t+">":"<"+t+' data-react-helmet="true">'+$(i,o)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case v:case w:return{toComponent:function(){return ft(e)},toString:function(){return ht(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var o,r=((o={key:n})[F]=!0,o);return Object.keys(e).forEach((function(t){var n=P[t]||t;if(n===A||n===C){var o=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=e[t]})),s.createElement(t,r)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,o){var r=Object.keys(o).filter((function(t){return!(t===A||t===C)})).reduce((function(t,e){var r=void 0===o[e]?e:e+'="'+$(o[e],n)+'"';return t?t+" "+r:r}),""),i=o.innerHTML||o.cssText||"",a=-1===U.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+r+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},gt=function(t){var e=t.baseTag,n=t.bodyAttributes,o=t.encode,r=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.scriptTags,l=t.styleTags,u=t.title,d=void 0===u?"":u,p=t.titleAttributes;return{base:mt(T.BASE,e,o),bodyAttributes:mt(v,n,o),htmlAttributes:mt(w,r,o),link:mt(T.LINK,i,o),meta:mt(T.META,a,o),noscript:mt(T.NOSCRIPT,s,o),script:mt(T.SCRIPT,c,o),style:mt(T.STYLE,l,o),title:mt(T.TITLE,{title:d,titleAttributes:p},o)}},yt=f()((function(t){return{baseTag:Z([x,L],t),bodyAttributes:Q(v,t),defer:et(t,D),encode:et(t,R),htmlAttributes:Q(w,t),linkTags:tt(T.LINK,[I,x],t),metaTags:tt(T.META,[j,E,S,M,O],t),noscriptTags:tt(T.NOSCRIPT,[A],t),onChangeClientState:J(t),scriptTags:tt(T.SCRIPT,[_,A],t),styleTags:tt(T.STYLE,[C],t),title:V(t),titleAttributes:Q(k,t)}}),(function(t){st&&it(st),t.defer?st=rt((function(){ct(t,(function(){st=null}))})):(ct(t),st=null)}),gt)((function(){return null})),bt=(r=yt,a=i=function(t){function e(){return q(this,e),X(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!g()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,r=t.newChildProps,i=t.nestedChildren;return K({},o,((e={})[n.type]=[].concat(o[n.type]||[],[K({},r,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,r=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(o.type){case T.TITLE:return K({},r,((e={})[o.type]=a,e.titleAttributes=K({},i),e));case T.BODY:return K({},r,{bodyAttributes:K({},i)});case T.HTML:return K({},r,{htmlAttributes:K({},i)})}return K({},r,((n={})[o.type]=K({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=K({},e);return Object.keys(t).forEach((function(e){var o;n=K({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,o={};return s.Children.forEach(t,(function(t){if(t&&t.props){var r=t.props,i=r.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[B[n]||n]=t[n],e}),e)}(G(r,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:o=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(o,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=G(t,["children"]),o=K({},n);return e&&(o=this.mapChildrenToProps(e,o)),s.createElement(r,o)},Y(e,null,[{key:"canUseDOM",set:function(t){r.canUseDOM=t}}]),e}(s.Component),i.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var t=r.rewind();return t||(t=gt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);bt.renderStatic=bt.rewind;var vt=n(6863),wt=n.n(vt);var kt=function(t,e){void 0===e&&(e={});var n=(0,s.useState)(t?"loading":"idle"),o=n[0],r=n[1];return(0,s.useEffect)((function(){if(t){var n=document.querySelector('script[src="'+t+'"]');if(n)r(n.getAttribute("data-status"));else{(n=document.createElement("script")).src=t,n.async=!0,Object.keys(e).forEach((function(t){"type"===t&&n&&(n.type=e[t]),"noModule"===t&&n&&(n.noModule=e[t]),"integrity"===t&&n&&(n.integrity=e[t]),"crossorigin"===t&&n&&(n.crossOrigin=e[t])})),n.setAttribute("data-status","loading"),document.body.appendChild(n);var o=function(t){var e;null===(e=n)||void 0===e||e.setAttribute("data-status","load"===t.type?"ready":"error")};n.addEventListener("load",o),n.addEventListener("error",o)}var i=function(t){r("load"===t.type?"ready":"error")};return n.addEventListener("load",i),n.addEventListener("error",i),function(){n&&(n.removeEventListener("load",i),n.removeEventListener("error",i))}}r("idle")}),[t]),o},Tt=s.memo((function(){var t=(0,u.useLocation)().pathname,e=kt("https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",{type:"module"}),n=kt("https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",{noModule:!0});(0,s.useEffect)((function(){}),[e,n]);var o=(0,l.v9)((function(t){return t.title}));return s.createElement(bt,null,s.createElement("title",null,t===wt().sitePathPrefix?wt().title:o+" – "+wt().title),s.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"}),s.createElement("style",null,"@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap');"))})),Et=n(1597),Ct=n(7534),xt=(0,c.createGlobalStyle)(["*{box-sizing:border-box;-webkit-font-smoothing:antialiased;}html,body,figure,p,h1,h2,h3,h4,h5,h6,button,a{margin:0;padding:0;line-height:1.5;font-family:var(--default-font-family);-webkit-text-size-adjust:100%;}html,body,#___gatsby,#gatsby-focus-wrapper{height:1px;min-height:100vh;background-color:var(--primary);transition:background-color 0.2s ease;}*::selection{background:var(--selection);text-shadow:none;}*::-moz-selection{background:var(--selection);text-shadow:none;}*::-webkit-selection{background:var(--selection);text-shadow:none;}@keyframes fadein-dropdown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);-ms-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0);}100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;}}@keyframes fadein{from{opacity:0;}to{opacity:1;}}@-moz-keyframes fadein{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadein{from{opacity:0;}to{opacity:1;}}@-o-keyframes fadein{from{opacity:0;}to{opacity:1;}}"]),St=(0,c.createGlobalStyle)([".grvsc-container{font-family:var(--code-font-family);border:1px solid var(--grvsc-border) !important;border-radius:4px !important;background-color:var(--grvsc-background) !important;transition:all 0.2s ease;}.grvsc-code,.grvsc-line{width:100%;padding:0 !important;margin:0 !important;color:white !important;font-size:0.9rem;hyphens:auto !important;border:none !important;border-radius:0 !important;background-color:transparent !important;}.grvsc-code{padding:0 !important;border-radius:0 !important;}.grvsc-line::before{padding:2px 0;}.grvsc-gutter-pad{padding-left:0 !important;}.grvsc-gutter::before{color:var(--grvsc-line-text);font-family:var(--code-font-family);}.grvsc-line-number{width:3rem !important;padding:0 8px 0 12px !important;}.grvsc-line-number::before{color:var(--grvsc-line-text);font-family:var(--code-font-family);font-size:0.7rem;}.grvsc-source{padding:2px 0;color:var(--mtk1);font-weight:400 !important;font-family:var(--code-font-family);font-size:0.9rem;line-height:1.4;}.mtk4{color:var(--mtk4) !important}.mtk1{color:var(--mtk1) !important}.mtk11{color:var(--mtk11) !important}.mtk12{color:var(--mtk12) !important}.mtk15{color:var(--mtk15) !important}.mtk8{color:var(--mtk8) !important}.mtk7{color:var(--mtk7) !important}.mtk3{color:var(--mtk3) !important}.grvsc-line-highlighted::before{background-color:var(--grvsc-line-highlighted-background-color) !important;box-shadow:inset var(--grvsc-line-highlighted-border-width) 0 0 0 var(--grvsc-line-highlighted-border-color) !important;}"]),At=(0,c.createGlobalStyle)([":root{--mobile:425px;--tablet:768px;--desktop:1280px;--default-font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo',Pretendard,Roboto,'Noto Sans KR','Segoe UI','Malgun Gothic',sans-serif;--code-font-family:'JetBrains Mono',SFMono-Regular,Pretendard,Menlo,Consolas,'PT Mono','Liberation Mono',Courier,monospace;}body{&.light{--primary:white;--line:#eeeeee;--mobile-menu:rgba(245,245,245,0.98);--text:#25201d;--text-secondary:#868e96;--cover:#fcfcfc;--selection:rgba(0,0,0,0.075);--toc-border:#ebebeb;--category-border:rgba(143,144,156,0.5);--category-background:white;--recommend-post:rgb(248,248,248);--grvsc-border:rgba(0,0,0,0.1);--grvsc-background:rgba(0,0,0,0.02);--grvsc-line-text:#444444;--mtk4:#0000FF;--mtk1:#000000;--mtk11:#795E26;--mtk12:#001080;--mtk15:#AF00DB;--mtk8:#A31515;--mtk7:#09885A;--mtk3:#008000;--grvsc-line-highlighted-background-color:rgba(37,32,29,0.05);--grvsc-line-highlighted-border-color:rgba(37,32,29,0.2);--grvsc-line-highlighted-border-width:4px;}&.dark{--primary:#25201d;--line:#1a1613;--mobile-menu:rgba(37,32,29,0.98);--text:white;--text-secondary:#bbbbbb;--cover:#221e1a;--selection:rgba(255,255,255,0.15);--toc-border:#444444;--category-border:rgba(143,144,156,0.5);--category-background:#221e1a;--recommend-post:rgba(0,0,0,0.2);--grvsc-border:rgba(0,0,0,0.3);--grvsc-background:rgba(0,0,0,0.2);--grvsc-line-text:#aaaaaa;--mtk4:#569CD6;--mtk1:#D4D4D4;--mtk11:#DCDCAA;--mtk12:#9CDCFE;--mtk15:#C586C0;--mtk8:#CE9178;--mtk7:#B5CEA8;--mtk3:#6A9955;--grvsc-line-highlighted-background-color:rgba(255,255,255,0.1);--grvsc-line-highlighted-border-color:rgba(255,255,255,0.5);--grvsc-line-highlighted-border-width:4px;}}"]),Ot=c.default.nav.withConfig({displayName:"navigation__TopNavigation",componentId:"sc-lppfmj-0"})(["position:fixed;z-index:9;width:100%;height:56px;background-color:var(--primary);background-position:center center;border-bottom:1px solid var(--line);transition:all 0.2s ease;"]),jt=c.default.div.withConfig({displayName:"navigation__TopNavigationContainer",componentId:"sc-lppfmj-1"})(["display:flex;width:100%;max-width:1280px;height:100%;margin:0 auto;padding:0 6%;align-items:center;justify-content:space-between;"]),Mt=c.default.ul.withConfig({displayName:"navigation__TopLinkWrap",componentId:"sc-lppfmj-2"})(["display:flex;height:100%;padding:0;list-style:none;@media only screen and (max-width:768px){display:none;}"]),It=c.default.li.withConfig({displayName:"navigation__TopLinkList",componentId:"sc-lppfmj-3"})(["display:table;height:100%;margin:0 0 0 48px;opacity:1;transition:opacity 0.2s ease;:hover{opacity:0.7;}a{display:table-cell;height:100%;padding:0;font-weight:500;color:var(--text);text-decoration:none;user-select:none;vertical-align:middle;background-color:transparent;}"]),_t=c.default.div.withConfig({displayName:"navigation__ThemeToggleContainer",componentId:"sc-lppfmj-4"})(["display:flex;margin:0 0 0 36px;align-items:center;"]),Lt=(0,c.default)(Et.rU).withConfig({displayName:"navigation__Logo",componentId:"sc-lppfmj-5"})(["display:flex;align-items:center;color:var(--text);text-decoration:none;opacity:1;transition:opacity 0.2s ease;:hover{opacity:0.7;}"]),Pt=c.default.div.withConfig({displayName:"navigation__LogoContainer",componentId:"sc-lppfmj-6"})(["display:flex;align-items:center;opacity:1;color:var(--text);transition:opacity 0.2s ease;cursor:pointer;:hover{opacity:0.7;}"]),Nt=c.default.div.withConfig({displayName:"navigation__Menu",componentId:"sc-lppfmj-7"})(["display:none;border-bottom:none;align-items:center;cursor:pointer;padding:16px 0;ion-icon{width:24px;height:24px;margin:0;padding:0;color:var(--text);vertical-align:middle;}@media only screen and (max-width:768px){display:flex;}"]),Dt=c.default.div.withConfig({displayName:"navigation__MobileMenu",componentId:"sc-lppfmj-8"})(["position:fixed;display:none;width:100%;height:100%;top:0;left:0;background:var(--mobile-menu);z-index:9;animation:fadein-dropdown 0.3s both 0.3s;-moz-animation:fadein-dropdown 0.3s both 0.3s;-webkit-animation:fadein-dropdown 0.3s both 0.3s;-o-animation:fadein-dropdown 0.3s both 0.3s;"]),Rt=c.default.section.withConfig({displayName:"navigation__MobileMenuContainer",componentId:"sc-lppfmj-9"})(["width:100%;margin:0 auto;padding:0 6%;"]),Ht=c.default.div.withConfig({displayName:"navigation__MobileMenuClose",componentId:"sc-lppfmj-10"})(["display:flex;height:56px;align-items:center;"]),zt=(0,c.default)(Nt).withConfig({displayName:"navigation__MenuAlignRight",componentId:"sc-lppfmj-11"})(["display:flex;margin-left:auto;"]),Bt=c.default.ul.withConfig({displayName:"navigation__MobileMenuWrap",componentId:"sc-lppfmj-12"})(["margin:32px 0 0 0;padding:0;list-style:none;"]),Ut=c.default.li.withConfig({displayName:"navigation__MobileMenuList",componentId:"sc-lppfmj-13"})(["margin:24px 0;font-size:1.5rem;font-weight:700;a{width:100%;color:var(--text);text-decoration:none;}"]),Ft=function(){var t=(0,u.useLocation)().pathname,e=function(){var t=(0,s.useState)(null),e=t[0],n=t[1],o=(0,s.useCallback)((function(){var t="light"===e?"dark":"light";n(t),window.__setPreferredTheme(t)}),[e]);return(0,s.useEffect)((function(){"object"==typeof window&&n(window.__theme),window.__onThemeChange=function(t){n(t)}}),[]),{theme:e,toggleTheme:o}}(),n=e.theme,o=e.toggleTheme,r=function(t){var e=document.getElementById("mobile-menu");e.style.display=t?"block":"none"};return s.createElement(s.Fragment,null,s.createElement(xt,null),s.createElement(At,null),s.createElement(Ot,null,s.createElement(jt,null,t===wt().sitePathPrefix?s.createElement(Pt,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},s.createElement("p",null,"ohpretty-gatsby-blog")):s.createElement(Pt,null,s.createElement(Lt,{to:"/"},s.createElement("p",null,"ohpretty-gatsby-blog"))),s.createElement(Mt,null,s.createElement(It,null,s.createElement(Et.rU,{to:"/post"},"Post")),s.createElement(It,null,s.createElement(Et.rU,{to:"/about"},"About")),s.createElement(It,null,s.createElement("a",{href:"https://github.com/"+wt().social.github,target:"_blank"},"Github")),s.createElement(_t,null,n&&s.createElement(Ct.default,{checked:"light"!==n,onChange:o,onColor:"#ffffff",offColor:"#25201d",onHandleColor:"#25201d",offHandleColor:"#ffffff",handleDiameter:20,uncheckedIcon:!1,uncheckedHandleIcon:s.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:12}},"🌤️"),checkedIcon:!1,checkedHandleIcon:s.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:12}},"🌙"),height:22,width:46,boxShadow:"0px 1px 5px rgba(37, 32, 29, 0.6)",activeBoxShadow:"0px 0px 1px 5px rgba(37, 32, 29, 0.2)"}),!n&&s.createElement("div",{style:{width:"46px"}}))),s.createElement(Nt,{onClick:function(){return r(!0)}},s.createElement("ion-icon",{name:"menu-outline"}))),s.createElement(Dt,{id:"mobile-menu"},s.createElement(Rt,null,s.createElement(Ht,null,s.createElement(zt,{onClick:function(){return r(!1)}},s.createElement("ion-icon",{name:"close-outline"}))),s.createElement(Bt,null,s.createElement(Ut,null,s.createElement(Et.rU,{to:"/post"},"Post")),s.createElement(Ut,null,s.createElement(Et.rU,{to:"/about"},"About")),s.createElement(Ut,null,s.createElement("a",{href:"https://github.com/ohprettyhak",target:"_blank",onClick:function(){return r(!1)}},"Github")))))))},Wt=c.default.main.withConfig({displayName:"DefaultLayout__Main",componentId:"sc-1t3ainz-0"})(["width:100%;max-width:1280px;min-height:100%;margin:0 auto;padding:0 6%;"]),qt=c.default.div.withConfig({displayName:"DefaultLayout__Container",componentId:"sc-1t3ainz-1"})(["min-height:100%;padding-top:56px;background-color:var(--primary);transition:background-color 0.2s ease;"]),Yt=function(t){var e=t.children;return s.createElement(s.Fragment,null,s.createElement(Tt,null),s.createElement(Ft,null),s.createElement(qt,null,s.createElement(Wt,null,e)))},Kt=c.default.main.withConfig({displayName:"PostLayout__Main",componentId:"sc-tmqdqy-0"})(["width:100%;max-width:1280px;min-height:100%;margin:0 auto;padding:0 6%;.utterances{max-width:100% !important;}"]),Gt=c.default.div.withConfig({displayName:"PostLayout__Container",componentId:"sc-tmqdqy-1"})(["min-height:100%;padding-top:56px;background-color:var(--primary);transition:background-color 0.2s ease;"]),Xt=s.memo((function(t){var e=t.children;return s.createElement(s.Fragment,null,s.createElement(Tt,null),s.createElement(Ft,null),s.createElement(St,null),s.createElement(Gt,null,s.createElement(Kt,null,e)))}))}}]);