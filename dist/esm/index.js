import{Dimensions as e}from'react-native';var t,r={exports:{}},n={};var o,a,u,i={exports:{}};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */'production'===process.env.NODE_ENV?r.exports=function(){if(t)return n;t=1;var e=Symbol.for('react.element'),r=Symbol.for('react.portal'),o=Symbol.for('react.fragment'),a=Symbol.for('react.strict_mode'),u=Symbol.for('react.profiler'),i=Symbol.for('react.provider'),c=Symbol.for('react.context'),s=Symbol.for('react.forward_ref'),l=Symbol.for('react.suspense'),f=Symbol.for('react.memo'),p=Symbol.for('react.lazy'),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if('object'!=typeof e&&'function'!=typeof e&&null!=e)throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');this.updater.enqueueSetState(this,e,t,'setState')},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,'forceUpdate')},g.prototype=v.prototype;var _=b.prototype=new g;_.constructor=b,h(_,v.prototype),_.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function R(t,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=''+r.key),r)S.call(r,o)&&!C.hasOwnProperty(o)&&(a[o]=r[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:e,type:t,key:u,ref:i,props:a,_owner:k.current}}function E(t){return'object'==typeof t&&null!==t&&t.$$typeof===e}var O=/\/+/g;function j(e,t){return'object'==typeof e&&null!==e&&null!=e.key?function(e){var t={'=':'=0',':':'=2'};return'$'+e.replace(/[=:]/g,(function(e){return t[e]}))}(''+e.key):t.toString(36)}function P(t,n,o,a,u){var i=typeof t;'undefined'!==i&&'boolean'!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case'string':case'number':c=!0;break;case'object':switch(t.$$typeof){case e:case r:c=!0}}if(c)return u=u(c=t),t=''===a?'.'+j(c,0):a,w(u)?(o='',null!=t&&(o=t.replace(O,'$&/')+'/'),P(u,n,o,'',(function(e){return e}))):null!=u&&(E(u)&&(u=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||c&&c.key===u.key?'':(''+u.key).replace(O,'$&/')+'/')+t)),n.push(u)),1;if(c=0,a=''===a?'.':a+':',w(t))for(var s=0;s<t.length;s++){var l=a+j(i=t[s],s);c+=P(i,n,o,l,u)}else if(l=function(e){return null===e||'object'!=typeof e?null:'function'==typeof(e=d&&e[d]||e['@@iterator'])?e:null}(t),'function'==typeof l)for(t=l.call(t),s=0;!(i=t.next()).done;)c+=P(i=i.value,n,o,l=a+j(i,s++),u);else if('object'===i)throw n=String(t),Error('Objects are not valid as a React child (found: '+('[object Object]'===n?'object with keys {'+Object.keys(t).join(', ')+'}':n)+'). If you meant to render a collection of children, use an array instead.');return c}function x(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,'','',(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};return n.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error('React.Children.only expected to receive a single React element child.');return e}},n.Component=v,n.Fragment=o,n.Profiler=u,n.PureComponent=b,n.StrictMode=a,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(t,r,n){if(null==t)throw Error('React.cloneElement(...): The argument must be a React element, but you passed '+t+'.');var o=h({},t.props),a=t.key,u=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=k.current),void 0!==r.key&&(a=''+r.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(s in r)S.call(r,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==c?c[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:e,type:t.type,key:a,ref:u,props:o,_owner:i}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=R,n.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},n.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},n.unstable_act=function(){throw Error('act(...) is not supported in production builds of React.')},n.useCallback=function(e,t){return $.current.useCallback(e,t)},n.useContext=function(e){return $.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return $.current.useDeferredValue(e)},n.useEffect=function(e,t){return $.current.useEffect(e,t)},n.useId=function(){return $.current.useId()},n.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},n.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},n.useMemo=function(e,t){return $.current.useMemo(e,t)},n.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},n.useRef=function(e){return $.current.useRef(e)},n.useState=function(e){return $.current.useState(e)},n.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},n.useTransition=function(){return $.current.useTransition()},n.version='18.2.0',n}():r.exports=(o||(o=1,a=i,u=i.exports,'production'!==process.env.NODE_ENV&&function(){'undefined'!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&'function'==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=Symbol.for('react.element'),t=Symbol.for('react.portal'),r=Symbol.for('react.fragment'),n=Symbol.for('react.strict_mode'),o=Symbol.for('react.profiler'),i=Symbol.for('react.provider'),c=Symbol.for('react.context'),s=Symbol.for('react.forward_ref'),l=Symbol.for('react.suspense'),f=Symbol.for('react.suspense_list'),p=Symbol.for('react.memo'),d=Symbol.for('react.lazy'),y=Symbol.for('react.offscreen'),h=Symbol.iterator,m='@@iterator';function v(e){if(null===e||'object'!=typeof e)return null;var t=h&&e[h]||e[m];return'function'==typeof t?t:null}var g={current:null},b={transition:null},_={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},w={current:null},S={},k=null;function C(e){k=e}S.setExtraStackFrame=function(e){k=e},S.getCurrentStack=null,S.getStackAddendum=function(){var e='';k&&(e+=k);var t=S.getCurrentStack;return t&&(e+=t()||''),e};var R=!1,E=!1,O=!1,j=!1,P=!1,x={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:b,ReactCurrentOwner:w};function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I('warn',e,r)}function $(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I('error',e,r)}function I(e,t,r){var n=x.ReactDebugCurrentFrame.getStackAddendum();''!==n&&(t+='%s',r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift('Warning: '+t),Function.prototype.apply.call(console[e],console,o)}x.ReactDebugCurrentFrame=S,x.ReactCurrentActQueue=_;var D={};function L(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||'ReactClass',o=n+'.'+t;D[o]||($('Can\'t call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.',t,n),D[o]=!0)}var N={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){L(e,'forceUpdate')},enqueueReplaceState:function(e,t,r,n){L(e,'replaceState')},enqueueSetState:function(e,t,r,n){L(e,'setState')}},F=Object.assign,A={};function M(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||N}Object.freeze(A),M.prototype.isReactComponent={},M.prototype.setState=function(e,t){if('object'!=typeof e&&'function'!=typeof e&&null!=e)throw new Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');this.updater.enqueueSetState(this,e,t,'setState')},M.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,'forceUpdate')};var B={isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.'],replaceState:['replaceState','Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).']},V=function(e,t){Object.defineProperty(M.prototype,e,{get:function(){T('%s(...) is deprecated in plain JavaScript React classes. %s',t[0],t[1])}})};for(var W in B)B.hasOwnProperty(W)&&V(W,B[W]);function z(){}function U(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||N}z.prototype=M.prototype;var q=U.prototype=new z;q.constructor=U,F(q,M.prototype),q.isPureReactComponent=!0;var H=Array.isArray;function Y(e){return H(e)}function K(e){if(function(e){try{return!1}catch(e){return!0}}())return $('The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',function(e){return'function'==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||'Object'}(e)),function(e){return''+e}(e)}function G(e){return e.displayName||'Context'}function J(e){if(null==e)return null;if('number'==typeof e.tag&&$('Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'),'function'==typeof e)return e.displayName||e.name||null;if('string'==typeof e)return e;switch(e){case r:return'Fragment';case t:return'Portal';case o:return'Profiler';case n:return'StrictMode';case l:return'Suspense';case f:return'SuspenseList'}if('object'==typeof e)switch(e.$$typeof){case c:return G(e)+'.Consumer';case i:return G(e._context)+'.Provider';case s:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||'';return''!==o?r+'('+o+')':r}(e,e.render,'ForwardRef');case p:var a=e.displayName||null;return null!==a?a:J(e.type)||'Memo';case d:var u=e,y=u._payload,h=u._init;try{return J(h(y))}catch(e){return null}}return null}var X,Q,Z,ee=Object.prototype.hasOwnProperty,te={key:!0,ref:!0,__self:!0,__source:!0};function re(e){if(ee.call(e,'ref')){var t=Object.getOwnPropertyDescriptor(e,'ref').get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function ne(e){if(ee.call(e,'key')){var t=Object.getOwnPropertyDescriptor(e,'key').get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}Z={};var oe=function(t,r,n,o,a,u,i){var c={$$typeof:e,type:t,key:r,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,'validated',{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,'_self',{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,'_source',{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ae(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in re(t)&&(u=t.ref,function(e){if('string'==typeof e.ref&&w.current&&e.__self&&w.current.stateNode!==e.__self){var t=J(w.current.type);Z[t]||($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),Z[t]=!0)}}(t)),ne(t)&&(K(t.key),a=''+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)ee.call(t,n)&&!te.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d='function'==typeof e?e.displayName||e.name||'Unknown':e;a&&function(e,t){var r=function(){X||(X=!0,$('%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',t))};r.isReactWarning=!0,Object.defineProperty(e,'key',{get:r,configurable:!0})}(o,d),u&&function(e,t){var r=function(){Q||(Q=!0,$('%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',t))};r.isReactWarning=!0,Object.defineProperty(e,'ref',{get:r,configurable:!0})}(o,d)}return oe(e,a,u,i,c,w.current,o)}function ue(e,t,r){if(null==e)throw new Error('React.cloneElement(...): The argument must be a React element, but you passed '+e+'.');var n,o,a=F({},e.props),u=e.key,i=e.ref,c=e._self,s=e._source,l=e._owner;if(null!=t)for(n in re(t)&&(i=t.ref,l=w.current),ne(t)&&(K(t.key),u=''+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)ee.call(t,n)&&!te.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return oe(e.type,u,i,c,s,l,a)}function ie(t){return'object'==typeof t&&null!==t&&t.$$typeof===e}var ce='.',se=':',le=!1,fe=/\/+/g;function pe(e){return e.replace(fe,'$&/')}function de(e,t){return'object'==typeof e&&null!==e&&null!=e.key?(K(e.key),r=''+e.key,n={'=':'=0',':':'=2'},'$'+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function ye(r,n,o,a,u){var i=typeof r;'undefined'!==i&&'boolean'!==i||(r=null);var c,s,l,f=!1;if(null===r)f=!0;else switch(i){case'string':case'number':f=!0;break;case'object':switch(r.$$typeof){case e:case t:f=!0}}if(f){var p=r,d=u(p),y=''===a?ce+de(p,0):a;if(Y(d)){var h='';null!=y&&(h=pe(y)+'/'),ye(d,n,h,'',(function(e){return e}))}else null!=d&&(ie(d)&&(!d.key||p&&p.key===d.key||K(d.key),c=d,s=o+(!d.key||p&&p.key===d.key?'':pe(''+d.key)+'/')+y,d=oe(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),n.push(d));return 1}var m=0,g=''===a?ce:a+se;if(Y(r))for(var b=0;b<r.length;b++)m+=ye(l=r[b],n,o,g+de(l,b),u);else{var _=v(r);if('function'==typeof _){var w=r;_===w.entries&&(le||T('Using Maps as children is not supported. Use an array of keyed ReactElements instead.'),le=!0);for(var S,k=_.call(w),C=0;!(S=k.next()).done;)m+=ye(l=S.value,n,o,g+de(l,C++),u)}else if('object'===i){var R=String(r);throw new Error('Objects are not valid as a React child (found: '+('[object Object]'===R?'object with keys {'+Object.keys(r).join(', ')+'}':R)+'). If you meant to render a collection of children, use an array instead.')}}return m}function he(e,t,r){if(null==e)return e;var n=[],o=0;return ye(e,n,'','',(function(e){return t.call(r,e,o++)})),n}var me,ve=-1,ge=0,be=1,_e=2;function we(e){if(e._status===ve){var t=(0,e._result)();if(t.then((function(t){if(e._status===ge||e._status===ve){var r=e;r._status=be,r._result=t}}),(function(t){if(e._status===ge||e._status===ve){var r=e;r._status=_e,r._result=t}})),e._status===ve){var r=e;r._status=ge,r._result=t}}if(e._status===be){var n=e._result;return void 0===n&&$('lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import(\'./MyComponent\'))\n\nDid you accidentally put curly braces around the import?',n),'default'in n||$('lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import(\'./MyComponent\'))',n),n.default}throw e._result}function Se(e){return'string'==typeof e||'function'==typeof e||!!(e===r||e===o||P||e===n||e===l||e===f||j||e===y||R||E||O)||'object'==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===me||void 0!==e.getModuleId)}function ke(){var e=g.current;return null===e&&$('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'),e}me=Symbol.for('react.module.reference');var Ce,Re,Ee,Oe,je,Pe,xe,Te=0;function $e(){}$e.__reactDisabledLog=!0;var Ie,De=x.ReactCurrentDispatcher;function Le(e,t,r){if(void 0===Ie)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||''}return'\n'+Ie+e}var Ne,Fe=!1,Ae='function'==typeof WeakMap?WeakMap:Map;function Me(e,t){if(!e||Fe)return'';var r,n=Ne.get(e);if(void 0!==n)return n;Fe=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=De.current,De.current=null,function(){if(0===Te){Ce=console.log,Re=console.info,Ee=console.warn,Oe=console.error,je=console.group,Pe=console.groupCollapsed,xe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Te++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,'props',{set:function(){throw Error()}}),'object'==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&'string'==typeof t.stack){for(var i=t.stack.split('\n'),c=r.stack.split('\n'),s=i.length-1,l=c.length-1;s>=1&&l>=0&&i[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(i[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||i[s]!==c[l]){var f='\n'+i[s].replace(' at new ',' at ');return e.displayName&&f.includes('<anonymous>')&&(f=f.replace('<anonymous>',e.displayName)),'function'==typeof e&&Ne.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{Fe=!1,De.current=o,function(){if(0==--Te){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:Ce}),info:F({},e,{value:Re}),warn:F({},e,{value:Ee}),error:F({},e,{value:Oe}),group:F({},e,{value:je}),groupCollapsed:F({},e,{value:Pe}),groupEnd:F({},e,{value:xe})})}Te<0&&$('disabledDepth fell below zero. This is a bug in React. Please file an issue.')}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:'',d=p?Le(p):'';return'function'==typeof e&&Ne.set(e,d),d}function Be(e,t,r){if(null==e)return'';if('function'==typeof e)return Me(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if('string'==typeof e)return Le(e);switch(e){case l:return Le('Suspense');case f:return Le('SuspenseList')}if('object'==typeof e)switch(e.$$typeof){case s:return Me(e.render,!1);case p:return Be(e.type);case d:var n=e,o=n._payload,a=n._init;try{return Be(a(o))}catch(e){}}return''}Ne=new Ae;var Ve,We={},ze=x.ReactDebugCurrentFrame;function Ue(e){if(e){var t=Be(e.type);ze.setExtraStackFrame(t)}else ze.setExtraStackFrame(null)}function qe(e){C(e?Be(e.type):null)}function He(){if(w.current){var e=J(w.current.type);if(e)return'\n\nCheck the render method of `'+e+'`.'}return''}Ve=!1;var Ye={};function Ke(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=He();if(!t){var r='string'==typeof e?e:e.displayName||e.name;r&&(t='\n\nCheck the top-level render call using <'+r+'>.')}return t}(t);if(!Ye[r]){Ye[r]=!0;var n='';e&&e._owner&&e._owner!==w.current&&(n=' It was passed a child from '+J(e._owner.type)+'.'),qe(e),$('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),qe(null)}}}function Ge(e,t){if('object'==typeof e)if(Y(e))for(var r=0;r<e.length;r++){var n=e[r];ie(n)&&Ke(n,t)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var o=v(e);if('function'==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ie(a.value)&&Ke(a.value,t)}}function Je(e){var t,r=e.type;if(null!=r&&'string'!=typeof r){if('function'==typeof r)t=r.propTypes;else{if('object'!=typeof r||r.$$typeof!==s&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=J(r);!function(e,t,r,n,o){var a=Function.call.bind(ee);for(var u in e)if(a(e,u)){var i=void 0;try{if('function'!=typeof e[u]){var c=Error((n||'React class')+': '+r+' type `'+u+'` is invalid; it must be a function, usually from the `prop-types` package, but received `'+typeof e[u]+'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');throw c.name='Invariant Violation',c}i=e[u](t,u,n,r,null,'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')}catch(e){i=e}!i||i instanceof Error||(Ue(o),$('%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',n||'React class',r,u,typeof i),Ue(null)),i instanceof Error&&!(i.message in We)&&(We[i.message]=!0,Ue(o),$('Failed %s type: %s',r,i.message),Ue(null))}}(t,e.props,'prop',n,e)}else void 0===r.PropTypes||Ve||(Ve=!0,$('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',J(r)||'Unknown'));'function'!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||$('getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.')}}function Xe(t,n,o){var a,u,i=Se(t);if(!i){var c,s='';(void 0===t||'object'==typeof t&&null!==t&&0===Object.keys(t).length)&&(s+=' You likely forgot to export your component from the file it\'s defined in, or you might have mixed up default and named imports.'),s+=(null!=(a=n)&&void 0!==(u=a.__source)?'\n\nCheck your code at '+u.fileName.replace(/^.*[\\\/]/,'')+':'+u.lineNumber+'.':'')||He(),null===t?c='null':Y(t)?c='array':void 0!==t&&t.$$typeof===e?(c='<'+(J(t.type)||'Unknown')+' />',s=' Did you accidentally export a JSX literal instead of a component?'):c=typeof t,$('React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',c,s)}var l=ae.apply(this,arguments);if(null==l)return l;if(i)for(var f=2;f<arguments.length;f++)Ge(arguments[f],t);return t===r?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if('children'!==n&&'key'!==n){qe(e),$('Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',n),qe(null);break}}null!==e.ref&&(qe(e),$('Invalid attribute `ref` supplied to `React.Fragment`.'),qe(null))}(l):Je(l),l}var Qe=!1,Ze=!1,et=null,tt=0,rt=!1;function nt(e){e!==tt-1&&$('You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '),tt=e}function ot(e,t,r){var n=_.current;if(null!==n)try{ut(n),function(e){if(null===et)try{var t=('require'+Math.random()).slice(0,7);et=(a&&a[t]).call(a,'timers').setImmediate}catch(e){et=function(e){!1===Ze&&(Ze=!0,'undefined'==typeof MessageChannel&&$('This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}et(e)}((function(){0===n.length?(_.current=null,t(e)):ot(e,t,r)}))}catch(e){r(e)}else t(e)}var at=!1;function ut(e){if(!at){at=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{at=!1}}}var it=Xe,ct=function(e,t,r){for(var n=ue.apply(this,arguments),o=2;o<arguments.length;o++)Ge(arguments[o],n.type);return Je(n),n},st=function(e){var t=Xe.bind(null,e);return t.type=e,Qe||(Qe=!0,T('React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.')),Object.defineProperty(t,'type',{enumerable:!1,get:function(){return T('Factory.type is deprecated. Access the class directly before passing it to createFactory.'),Object.defineProperty(this,'type',{value:e}),e}}),t},lt={map:he,forEach:function(e,t,r){he(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!ie(e))throw new Error('React.Children.only expected to receive a single React element child.');return e}};u.Children=lt,u.Component=M,u.Fragment=r,u.Profiler=o,u.PureComponent=U,u.StrictMode=n,u.Suspense=l,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,u.cloneElement=ct,u.createContext=function(e){var t={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:c,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,$('Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?')),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,$('Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?')),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(T('Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = \'%s\'.',e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},u.createElement=it,u.createFactory=st,u.createRef=function(){var e={current:null};return Object.seal(e),e},u.forwardRef=function(e){null!=e&&e.$$typeof===p?$('forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'):'function'!=typeof e?$('forwardRef requires a render function but was given %s.',null===e?'null':typeof e):0!==e.length&&2!==e.length&&$('forwardRef render functions accept exactly two parameters: props and ref. %s',1===e.length?'Did you forget to use the ref parameter?':'Any additional parameter will be undefined.'),null!=e&&(null==e.defaultProps&&null==e.propTypes||$('forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'));var t,r={$$typeof:s,render:e};return Object.defineProperty(r,'displayName',{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},u.isValidElement=ie,u.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:ve,_result:e},_init:we};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){$('React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'),t=e,Object.defineProperty(n,'defaultProps',{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){$('React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'),r=e,Object.defineProperty(n,'propTypes',{enumerable:!0})}}}),n},u.memo=function(e,t){Se(e)||$('memo: The first argument must be a component. Instead received: %s',null===e?'null':typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,'displayName',{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},u.startTransition=function(e,t){var r=b.transition;b.transition={};var n=b.transition;b.transition._updatedFibers=new Set;try{e()}finally{b.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&T('Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'),n._updatedFibers.clear())}},u.unstable_act=function(e){var t=tt;tt++,null===_.current&&(_.current=[]);var r,n=_.isBatchingLegacy;try{if(_.isBatchingLegacy=!0,r=e(),!n&&_.didScheduleLegacyUpdate){var o=_.current;null!==o&&(_.didScheduleLegacyUpdate=!1,ut(o))}}catch(e){throw nt(t),e}finally{_.isBatchingLegacy=n}if(null!==r&&'object'==typeof r&&'function'==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then((function(n){nt(t),0===tt?ot(n,e,r):e(n)}),(function(e){nt(t),r(e)}))}};return rt||'undefined'==typeof Promise||Promise.resolve().then((function(){})).then((function(){u||(rt=!0,$('You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'))})),i}var c=r;if(nt(t),0===tt){var s=_.current;return null!==s&&(ut(s),_.current=null),{then:function(e,t){null===_.current?(_.current=[],ot(c,e,t)):e(c)}}}return{then:function(e,t){e(c)}}},u.useCallback=function(e,t){return ke().useCallback(e,t)},u.useContext=function(e){var t=ke();if(void 0!==e._context){var r=e._context;r.Consumer===e?$('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'):r.Provider===e&&$('Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?')}return t.useContext(e)},u.useDebugValue=function(e,t){return ke().useDebugValue(e,t)},u.useDeferredValue=function(e){return ke().useDeferredValue(e)},u.useEffect=function(e,t){return ke().useEffect(e,t)},u.useId=function(){return ke().useId()},u.useImperativeHandle=function(e,t,r){return ke().useImperativeHandle(e,t,r)},u.useInsertionEffect=function(e,t){return ke().useInsertionEffect(e,t)},u.useLayoutEffect=function(e,t){return ke().useLayoutEffect(e,t)},u.useMemo=function(e,t){return ke().useMemo(e,t)},u.useReducer=function(e,t,r){return ke().useReducer(e,t,r)},u.useRef=function(e){return ke().useRef(e)},u.useState=function(e){return ke().useState(e)},u.useSyncExternalStore=function(e,t,r){return ke().useSyncExternalStore(e,t,r)},u.useTransition=function(){return ke().useTransition()},u.version='18.2.0','undefined'!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&'function'==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),i.exports);var c=r.exports;var s=()=>{const[e,t]=c.useState({width:0,height:0,x:0,y:0});return[e,c.useCallback((e=>{const r=e.nativeEvent.layout;t(r)}),[])]};var l=()=>{const e=c.useRef(null),[t,r]=c.useState({width:0,height:0,x:0,y:0});return c.useEffect((()=>{if(e.current){const{width:t,height:n,x:o,y:a}=e.current.getBoundingClientRect();r({width:t,height:n,x:o,y:a})}const t=()=>{if(e.current){const{width:t,height:n,x:o,y:a}=e.current.getBoundingClientRect();r({width:t,height:n,x:o,y:a})}};return window.addEventListener('resize',t),()=>{window.removeEventListener('resize',t)}}),[]),[t,e]};const f=s||l;function p(){return{left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36}}const d=s||l;function y(){function e(e){e.preventDefault()}return{preventDefault:e,preventDefaultForScrollKeys:function(t){if({left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36}[t.keyCode])return e(t),!1}}}const h=()=>{const[t,r]=c.useState(e.get('window'));return c.useEffect((()=>{const t=e.addEventListener('change',(e=>{r((t=>({...t,width:e.window.width,height:e.window.height})))}));return()=>t.remove()}),[]),t};const m=()=>{const[e,t]=c.useState({width:window.innerWidth,height:window.innerHeight});return c.useEffect((()=>{const e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener('resize',e),()=>{window.removeEventListener('resize',e)}}),[]),e},v=h||m,g=h||m;const b=(t=>{const r=c.useRef(null),[n,o]=c.useState(!1),[a,u]=c.useState({rectTop:0,rectBottom:0,rectWidth:0}),i=c.useCallback((()=>{const e=setInterval((()=>{r.current&&r.current.measure(((e,t,r,n,o,a)=>{const i={rectTop:a,rectBottom:a+n,rectWidth:o+r};u((e=>e.rectTop!==i.rectTop||e.rectBottom!==i.rectBottom||e.rectWidth!==i.rectWidth?i:e))}))}),1e3);return()=>clearInterval(e)}),[]);return c.useEffect((()=>{const e=i();return()=>e()}),[i]),c.useEffect((()=>{const r=e.get('window'),u=0!==a.rectBottom&&a.rectTop>=0&&a.rectBottom<=r.height&&a.rectWidth>0&&a.rectWidth<=r.width;n!==u&&(o(u),t(u))}),[a,n,t]),r})||(t=>{const r=c.useRef(null),[n,o]=c.useState(!1),[a,u]=c.useState({rectTop:0,rectBottom:0,rectWidth:0}),i=c.useCallback((()=>{const e=setInterval((()=>{r.current&&r.current.measure(((e,t,r,n,o,a)=>{const i={rectTop:a,rectBottom:a+n,rectWidth:o+r};u((e=>e.rectTop!==i.rectTop||e.rectBottom!==i.rectBottom||e.rectWidth!==i.rectWidth?i:e))}))}),1e3);return()=>clearInterval(e)}),[]);return c.useEffect((()=>{const e=i();return()=>e()}),[i]),c.useEffect((()=>{const r=e.get('window'),u=0!==a.rectBottom&&a.rectTop>=0&&a.rectBottom<=r.height&&a.rectWidth>0&&a.rectWidth<=r.width;n!==u&&(o(u),t(u))}),[a,n,t]),r});export{f as useComponentSize,p as useKeyCodes,d as useOnClickByStyle,y as usePreventDefault,v as useScreenDimensions,h as useScreenDimensionsForNative,m as useScreenDimensionsForWeb,g as useScrollControl,b as useVisibilitySensor};
//# sourceMappingURL=index.js.map
