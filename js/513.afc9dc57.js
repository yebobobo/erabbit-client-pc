"use strict";(self["webpackChunkerabbit_client_pc"]=self["webpackChunkerabbit_client_pc"]||[]).push([[513],{5708:function(e,t,r){r.d(t,{gN:function(){return Q},l0:function(){return ae}});r(1703),r(6699);var n=r(3396),a=r(4870);
/**
  * vee-validate v4.0.3
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */
function i(e){return"function"===typeof e}const l=e=>null!==e&&!!e&&"object"===typeof e&&!Array.isArray(e),o={};function u(e){return o[e]}function s(e){return i(e)&&!!e.__locatorRef}function d(e){return["input","textarea","select"].includes(e)}function c(e,t){return d(e)&&"file"===t}function v(e){return!!e&&i(e.validate)}function f(e){return"checkbox"===e||"radio"===e}function h(e){return Number(e)>=0}function m(e){return Array.isArray(e)?0===e.length:l(e)&&0===Object.keys(e).length}function y(e){return/^\[.+\]$/i.test(e)}function p(e){return y(e)?e.replace(/\[|\]/gi,""):e}function b(e,t){if(e)return y(t)?e[p(t)]:t.split(/\.|\[(\d+)\]/).filter(Boolean).reduce(((e,t)=>{if(e&&t in e)return e[t]}),e)}function g(e,t,r){if(y(t))return void(e[p(t)]=r);const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let i=0;i<n.length;i++){if(i===n.length-1)return void(a[n[i]]=r);n[i]in a||(a[n[i]]=h(n[i+1])?[]:{}),a=a[n[i]]}}function S(e,t){Array.isArray(e)&&h(t)?e.splice(Number(t),1):delete e[t]}function V(e,t){if(y(t))return void delete e[p(t)];const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let n=e;for(let i=0;i<r.length;i++){if(i===r.length-1){S(n,r[i]);break}if(!(r[i]in n))break;n=n[r[i]]}const a=r.map(((t,n)=>b(e,r.slice(0,n).join("."))));for(let i=a.length-1;i>=0;i--)m(a[i])&&(0!==i?S(a[i-1],r[i-1]):S(e,r[0]))}function F(e){return Object.keys(e)}function O(e,t){const r=(0,n.FN)();return(0,n.f3)(e,(null===r||void 0===r?void 0:r.provides[e])||t)}const A=e=>!!e&&(!!("undefined"!==typeof Event&&i(Event)&&e instanceof Event)||!(!e||!e.srcElement));function E(e){if(!A(e))return e;const t=e.target;return f(t.type)&&"_value"in t?t._value:"file"===t.type&&t.files?Array.from(t.files):t.value}function j(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?i(e)||v(e)||l(e)&&e._$$isNormalized?e:l(e)?Object.keys(e).reduce(((t,r)=>{const n=U(e[r]);return!1!==e[r]&&(t[r]=D(n)),t}),t):"string"!==typeof e?t:e.split("|").reduce(((e,t)=>{const r=k(t);return r.name?(e[r.name]=D(r.params),e):e}),t):t}function U(e){return!0===e?[]:Array.isArray(e)||l(e)?e:[e]}function D(e){const t=e=>"string"===typeof e&&"@"===e[0]?w(e.slice(1)):e;return Array.isArray(e)?e.map(t):Object.keys(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{})}const k=e=>{let t=[];const r=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}};function w(e){const t=t=>{const r=t[e];return r};return t.__locatorRef=e,t}function M(e){return Array.isArray(e)?e.filter(s):Object.keys(e).filter((t=>s(e[t]))).map((t=>e[t]))}const T=(e,t)=>e.slots.default?e.slots.default(t):e.slots.default,B={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let _=Object.assign({},B);const $=()=>_;async function P(e,t,r={}){const n=null===r||void 0===r?void 0:r.bails,a={name:(null===r||void 0===r?void 0:r.name)||"{field}",rules:j(t),bails:null===n||void 0===n||n,formData:(null===r||void 0===r?void 0:r.values)||{}},i=await x(a,e),l=i.errors;return{errors:l}}async function x(e,t){if(v(e.rules))return R(e,t);if(i(e.rules)){const r=await e.rules(t,{field:e.name,form:e.formData}),n="string"!==typeof r&&r,a="string"===typeof r?r:C({field:e.name,value:t,form:e.formData});return{errors:n?[]:[a]}}const r=[],n=Object.keys(e.rules),a=n.length;for(let i=0;i<a;i++){const a=n[i],l=await I(e,t,{name:a,params:e.rules[a]});if(l.error&&(r.push(l.error),e.bails))return{errors:r}}return{errors:r}}async function R(e,t){const r=await e.rules.validate(t,{abortEarly:e.bails}).then((()=>[])).catch((e=>{if("ValidationError"===e.name)return e.errors;throw e}));return{errors:r}}async function I(e,t,r){const n=u(r.name);if(!n)throw new Error(`No such validator '${r.name}' exists.`);const a=Z(r.params,e.formData),i={field:e.name,value:t,form:e.formData,rule:r},l=await n(t,a,i);return"string"===typeof l?{error:l}:{error:l?void 0:C(i)}}function C(e){const t=$().generateMessage;return t?t(e):"Field is invalid"}function Z(e,t){const r=e=>s(e)?e(t):e;return Array.isArray(e)?e.map(r):Object.keys(e).reduce(((t,n)=>(t[n]=r(e[n]),t)),{})}const N=Symbol("vee-validate-form"),q=Symbol("vee-validate-form-errors"),J=Symbol("vee-validate-form-initial-values");let Y=0;function L(e,t,r){const l=Y>=Number.MAX_SAFE_INTEGER?0:++Y,{initialValue:o,validateOnMount:u,bails:s,type:d,valueProp:c,label:v,validateOnValueUpdate:f}=H((0,a.SU)(e),r),h=O(N),{meta:m,errors:y,handleBlur:p,handleInput:b,resetValidationState:g,setValidationState:S,value:V,checked:F}=z({name:e,initValue:(0,a.SU)(o),form:h,type:d,valueProp:c}),A=X(null===h||void 0===h?void 0:h.schema,(0,a.SU)(e)),U=(0,n.Fl)((()=>j(A||(0,a.SU)(t)))),D=async()=>{var t;let r;return m.pending=!0,r=h&&h.validateSchema?(await h.validateSchema())[(0,a.SU)(e)]:await P(V.value,U.value,{name:(0,a.SU)(v)||(0,a.SU)(e),values:null!==(t=null===h||void 0===h?void 0:h.values)&&void 0!==t?t:{},bails:s}),m.pending=!1,S(r)},k=e=>{var t,r;if(!F||F.value!==(null===(r=null===(t=e)||void 0===t?void 0:t.target)||void 0===r?void 0:r.checked))return V.value=E(e),m.dirty=!0,f?void 0:D()};u&&(0,n.bv)(D);const w=(0,n.Fl)((()=>y.value[0]));function T(e){m.touched=e}function B(e){m.dirty=e}let _;function $(){f&&(_=(0,n.YP)(V,D,{deep:!0}))}function x(e){null===_||void 0===_||_(),g(e),$()}$();const R={fid:l,name:e,value:V,meta:m,errors:y,errorMessage:w,type:d,valueProp:c,checked:F,idx:-1,resetField:x,handleReset:()=>x(),validate:D,handleChange:k,handleBlur:p,handleInput:b,setValidationState:S,setTouched:T,setDirty:B};if((0,a.dq)(t)&&"function"!==typeof(0,a.SU)(t)&&(0,n.YP)(t,D,{deep:!0}),!h)return R;h.register(R),(0,n.Jd)((()=>{h.unregister(R)}));const I=(0,n.Fl)((()=>{const e=U.value;return!e||i(e)||i(e.validate)?[]:Object.keys(e).reduce(((e,t)=>{const r=M(U.value[t]).map((e=>e.__locatorRef));return e.push(...r),e}),[])}));return(0,n.m0)((()=>{I.value.length&&I.value.forEach((e=>{if(e in h.values&&m.dirty)return D()}))})),R}function H(e,t){const r=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:e,validateOnValueUpdate:!0});return t?Object.assign(Object.assign({},r()),t||{}):r()}function z({name:e,initValue:t,form:r,type:i,valueProp:l}){var o;const u=(0,a.iH)([]),s=O(J,void 0),d=null!==(o=b((0,a.SU)(s),(0,a.SU)(e)))&&void 0!==o?o:t,{resetMeta:c,meta:v}=G(d),h=K(d,e,r);f(i)&&d&&(h.value=d);const m=f(i)?(0,n.Fl)((()=>Array.isArray(h.value)?h.value.includes((0,a.SU)(l)):(0,a.SU)(l)===h.value)):void 0;(void 0===m||m.value)&&(h.value=d);const y=()=>{v.touched=!0},p=e=>{f(i)||(h.value=E(e)),v.dirty=!0};function g(e){return u.value=e.errors,v.valid=!e.errors.length,e}function S(r){var n;h.value=r&&"value"in r?r.value:null!==(n=b((0,a.SU)(s),(0,a.SU)(e)))&&void 0!==n?n:t,u.value=(null===r||void 0===r?void 0:r.errors)||[],c(r)}return{meta:v,errors:u,setValidationState:g,resetValidationState:S,handleBlur:y,handleInput:p,value:h,checked:m}}function G(e){const t=()=>({touched:!1,dirty:!1,valid:!1,pending:!1,initialValue:e}),r=(0,a.qj)(t());function n(e){var n,a,i;const l=t();r.pending=l.pending,r.touched=null!==(n=null===e||void 0===e?void 0:e.touched)&&void 0!==n?n:l.touched,r.dirty=null!==(a=null===e||void 0===e?void 0:e.dirty)&&void 0!==a?a:l.dirty,r.initialValue=null!==(i=null===e||void 0===e?void 0:e.value)&&void 0!==i?i:l.initialValue}return{meta:r,resetMeta:n}}function X(e,t){if(e)return e[t]}function K(e,t,r){if(!r)return(0,a.iH)(e);g(r.values,(0,a.SU)(t),e);const i=(0,n.Fl)({get(){return b(r.values,(0,a.SU)(t))},set(e){r.setFieldValue((0,a.SU)(t),e)}});return i}const Q=(0,n.aZ)({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:null},validateOnMount:{type:Boolean,default:!1},bails:{type:Boolean,default:()=>$().bails},label:{type:String,default:void 0}},setup(e,t){const r=(0,a.Vh)(e,"rules"),i=(0,a.Vh)(e,"name"),l=(0,a.Vh)(e,"label"),{errors:o,value:u,errorMessage:s,validate:d,handleChange:v,handleBlur:h,handleInput:m,setDirty:y,setTouched:p,resetField:b,handleReset:g,meta:S,checked:V}=L(i,r,{validateOnMount:e.validateOnMount,bails:e.bails,type:t.attrs.type,initialValue:f(t.attrs.type)||"modelValue"in t.attrs?t.attrs.modelValue:t.attrs.value,valueProp:t.attrs.value,label:l,validateOnValueUpdate:!1});let F=!1;function O(){F=!0,(0,n.Y3)((()=>{F=!1}))}const A="modelValue"in t.attrs?function(e){v(e),t.emit("update:modelValue",u.value)}:v,E="modelValue"in t.attrs?function(e){m(e),t.emit("update:modelValue",u.value)}:m,{validateOnInput:j,validateOnChange:U,validateOnBlur:D,validateOnModelUpdate:k}=$(),w=[h,t.attrs.onBlur,D?d:void 0].filter(Boolean),M=[E,O,j?A:void 0,t.attrs.onInput].filter(Boolean),B=[E,O,U?A:void 0,t.attrs.onChange].filter(Boolean),_=()=>{const r={name:e.name,onBlur:w,onInput:M,onChange:B};return k&&(r["onUpdate:modelValue"]=[A,O]),f(t.attrs.type)&&V?r.checked=V.value:r.value=u.value,c(W(e,t),t.attrs.type)&&delete r.value,{field:r,meta:S,errors:o.value,errorMessage:s.value,validate:d,resetField:b,handleChange:A,handleInput:E,handleReset:g,handleBlur:h,setDirty:y,setTouched:p}};return()=>{const r=(0,n.LL)(W(e,t)),a=_();"modelValue"in t.attrs&&String(t.attrs.modelValue)!==String(u.value)&&!F&&(0,n.Y3)((()=>{v(t.attrs.modelValue)}));const i=T(t,a);return r?(0,n.h)(r,Object.assign(Object.assign({},t.attrs),a.field),i):i}}});function W(e,t){let r=e.as||"";return e.as||t.slots.default||(r="input"),r}function ee(e){const t=(0,a.iH)([]),r=(0,a.iH)(!1),i=(0,n.Fl)((()=>t.value.reduce(((e,t)=>{if(!e[t.name])return e[t.name]=t,t.idx=-1,e;if(!Array.isArray(e[t.name])){const r=e[t.name];r.idx=0,e[t.name]=[r]}return t.idx=e[t.name].length,e[t.name].push(t),e}),{}))),l=(0,a.qj)({}),o={},u=(0,n.Fl)((()=>t.value.reduce(((e,t)=>{let r;if(Array.isArray(i.value[t.name])){const e=i.value[t.name];r=(0,a.SU)((e.find((e=>(0,a.SU)(e.checked)))||t).errorMessage)}else r=(0,a.SU)(t.errorMessage);return r&&(e[t.name]=r),e}),{}))),{initialValues:s,setInitialValues:d}=ne(i,l,null===e||void 0===e?void 0:e.initialValues),c=te(t,s);function f(e,t){const r=i.value[e];r&&(Array.isArray(r)?r.forEach((e=>{e.setValidationState({errors:t?[t]:[]})})):r.setValidationState({errors:t?[t]:[]}))}function h(e){F(e).forEach((t=>{f(t,e[t])}))}function m(e,t){var r;const n=i.value[e];if(Array.isArray(n)&&"checkbox"===(null===(r=n[0])||void 0===r?void 0:r.type)&&!Array.isArray(t)){const r=b(l,e),a=Array.isArray(r)?[...r]:[],i=a.indexOf(t);return i>=0?a.splice(i,1):a.push(t),g(l,e,a),void n.forEach((e=>{o[e.fid]=a}))}let a=t;"checkbox"===(null===n||void 0===n?void 0:n.type)&&(a=b(l,e)===t?void 0:t),g(l,e,a),n&&(o[n.fid]=a)}function y(e){F(e).forEach((t=>{m(t,e[t])}))}function p(e,t){const r=i.value[e];r&&(Array.isArray(r)?r.forEach((e=>e.setTouched(t))):r.setTouched(t))}function S(e){F(e).forEach((t=>{p(t,!!e[t])}))}function O(e,t){const r=i.value[e];r&&(Array.isArray(r)?r.forEach((e=>e.setDirty(t))):r.setDirty(t))}function A(e){F(e).forEach((t=>{O(t,!!e[t])}))}const E=e=>{(null===e||void 0===e?void 0:e.values)&&d(e.values),t.value.forEach((e=>e.resetField())),(null===e||void 0===e?void 0:e.dirty)&&A(e.dirty),(null===e||void 0===e?void 0:e.touched)&&S(e.touched),(null===e||void 0===e?void 0:e.errors)&&h(e.errors)};function j(e){t.value.push(e),(0,a.dq)(e.name)&&(0,n.YP)(e.name,(t=>{m(t,o[e.fid])}),{flush:"post"})}function U(e){var r,i;const u=t.value.indexOf(e);if(-1===u)return;t.value.splice(u,1);const s=e.fid;(0,n.Y3)((()=>{delete o[s]}));const d=(0,a.SU)(e.name);if(-1===e.idx)return void V(l,d);const c=null===(i=null===(r=b(l,d))||void 0===r?void 0:r.indexOf)||void 0===i?void 0:i.call(r,(0,a.SU)(e.valueProp));void 0!==c?-1!==c&&(Array.isArray(l[d])?V(l,`${d}.${c}`):V(l,d)):V(l,d)}const D={register:j,unregister:U,fields:i,values:l,schema:null===e||void 0===e?void 0:e.validationSchema,validateSchema:v(null===e||void 0===e?void 0:e.validationSchema)?(e=!1)=>re(D,e):void 0,setFieldValue:m,setValues:y,setErrors:h,setFieldError:f,setFieldTouched:p,setTouched:S,setFieldDirty:O,setDirty:A,resetForm:E},k=async()=>{if(D.validateSchema)return D.validateSchema(!0).then((e=>Object.keys(e).every((t=>!e[t].errors.length))));const e=await Promise.all(t.value.map((e=>e.validate())));return e.every((e=>!e.errors.length))},w=(0,n.Fl)((()=>t.value.reduce(((e,t)=>(g(e,t.name,(0,a.SU)(t.value)),e)),{}))),M=e=>function(t){return t instanceof Event&&(t.preventDefault(),t.stopPropagation()),r.value=!0,k().then((r=>{if(r&&"function"===typeof e)return e(w.value,{evt:t,setDirty:A,setFieldDirty:O,setErrors:h,setFieldError:f,setTouched:S,setFieldTouched:p,setValues:y,setFieldValue:m,resetForm:E})})).then((()=>{r.value=!1}),(e=>{throw r.value=!1,e}))},T=M(((e,{evt:t})=>{var r;t&&(null===(r=null===t||void 0===t?void 0:t.target)||void 0===r||r.submit())}));return(0,n.bv)((()=>{(null===e||void 0===e?void 0:e.initialErrors)&&h(e.initialErrors),(null===e||void 0===e?void 0:e.initialDirty)&&A(e.initialDirty),(null===e||void 0===e?void 0:e.initialTouched)&&S(e.initialTouched),(null===e||void 0===e?void 0:e.validateOnMount)&&k()})),(0,n.JJ)(N,D),(0,n.JJ)(q,u),{errors:u,meta:c,values:l,validate:k,isSubmitting:r,handleReset:()=>E(),resetForm:E,handleSubmit:M,submitForm:T,setFieldError:f,setErrors:h,setFieldValue:m,setValues:y,setFieldTouched:p,setTouched:S,setFieldDirty:O,setDirty:A}}function te(e,t){const r={valid:"every",dirty:"some",touched:"some",pending:"some"};return(0,n.Fl)((()=>{const n=F(r).reduce(((t,n)=>{const a=r[n];return t[n]=e.value[a]((e=>e.meta[n])),t}),{});return Object.assign({initialValues:(0,a.SU)(t)},n)}))}async function re(e,t=!1){const r=await e.schema.validate(e.values,{abortEarly:!1}).then((()=>[])).catch((e=>{if("ValidationError"!==e.name)throw e;return e.inner||[]})),n=e.fields.value,a=r.reduce(((e,t)=>(e[t.path]=t,e)),{}),i=F(n).reduce(((e,r)=>{const i=n[r],l=(a[r]||{errors:[]}).errors,o={errors:l};e[r]=o;const u=Array.isArray(i),s=u?i.some((e=>e.meta.dirty)):i.meta.dirty;return t||s?u?(i.forEach((e=>e.setValidationState(o))),e):(i.setValidationState(o),e):e}),{});return i}function ne(e,t,r){const i=(0,a.iH)((0,a.SU)(r)||{}),l=(0,n.Fl)((()=>i.value));function o(r,n=!1){if(i.value=Object.assign(Object.assign({},i.value),r),!n)return;const a=e=>e.meta.dirty||e.meta.touched;F(e.value).forEach((r=>{const n=e.value[r],l=Array.isArray(n)?n.some(a):a(n);if(l)return;const o=b(i.value,r);g(t,r,o)}))}return(0,a.dq)(r)&&(0,n.YP)(r,(e=>{o(e,!0)}),{deep:!0}),(0,n.JJ)(J,l),{initialValues:l,setInitialValues:o}}const ae=(0,n.aZ)({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialDirty:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1}},setup(e,t){const r=(0,a.Vh)(e,"initialValues"),{errors:i,validate:l,handleReset:o,resetForm:u,values:s,meta:d,isSubmitting:c,handleSubmit:v,submitForm:f,setErrors:h,setFieldError:m,setFieldValue:y,setValues:p,setFieldDirty:b,setDirty:g,setFieldTouched:S,setTouched:V}=ee({validationSchema:e.validationSchema,initialValues:r,initialErrors:e.initialErrors,initialTouched:e.initialTouched,initialDirty:e.initialDirty,validateOnMount:e.validateOnMount}),F=t.attrs.onSubmit?v(t.attrs.onSubmit):f;function O(){o(),"function"===typeof t.attrs.onReset&&t.attrs.onReset()}function A(e,t){const r="function"!==typeof e||t?t:e;return v(r)(e)}return function(){"setErrors"in this||(this.setFieldError=m,this.setErrors=h,this.setFieldValue=y,this.setValues=p,this.setFieldDirty=b,this.setDirty=g,this.setFieldTouched=S,this.setTouched=V,this.resetForm=u,this.validate=l);const r=T(t,{meta:d.value,errors:i.value,values:s,isSubmitting:c.value,validate:l,handleSubmit:A,handleReset:o,submitForm:f,setErrors:h,setFieldError:m,setFieldValue:y,setValues:p,setFieldDirty:b,setDirty:g,setFieldTouched:S,setTouched:V,resetForm:u});if(!e.as)return r;const a="form"===e.as?{novalidate:!0}:{};return(0,n.h)("form"===e.as?e.as:(0,n.LL)(e.as),Object.assign(Object.assign(Object.assign({},a),t.attrs),{onSubmit:F,onReset:O}),r)}}});(0,n.aZ)({props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const r=(0,n.f3)(q,void 0),a=(0,n.Fl)((()=>null===r||void 0===r?void 0:r.value[e.name]));return()=>{const r=T(t,{message:a.value}),i=e.as?(0,n.LL)(e.as):e.as,l=Object.assign({role:"alert"},t.attrs);return!i&&(null===r||void 0===r?void 0:r.length)?r:(null===r||void 0===r?void 0:r.length)?(0,n.h)(i,l,r):(0,n.h)(i||"span",l,a.value)}}})},2683:function(e,t,r){r.d(t,{Ak:function(){return a},Cv:function(){return o},EE:function(){return l},MM:function(){return i}});var n=r(6038);const a=({account:e,password:t})=>(0,n.Z)("/login","post",{account:e,password:t}),i=e=>(0,n.Z)("/login/code","get",{mobile:e}),l=({mobile:e,code:t})=>(0,n.Z)("/login/code","get",{mobile:e,code:t}),o=e=>(0,n.Z)("/register/check","get",{account:e})},2635:function(e,t,r){var n=r(2683);t["Z"]={account(e){return e?!!/^[a-zA-Z]\w{5,19}$/.test(e)||"字母开头且6-20个字符":"请输入用户名"},async accountApi(e){if(!e)return"请输入用户名";if(!/^[a-zA-Z]\w{5,19}$/.test(e))return"字母开头且6-20个字符";const t=await(0,n.Cv)(e);return!t.result.valid||"用户名已存在"},password(e){return e?!!/^\w{6,24}$/.test(e)||"密码6-24个字符":"请输入密码"},rePassword(e,{form:t}){return e?/^\w{6,24}$/.test(e)?e===t.password||"确认密码要和密码保持一致":"密码6-24个字符":"请输入确认密码"},mobile(e){return e?!!/^1[3-9]\d{9}$/.test(e)||"手机格式不正确":"请输入手机号"},code(e){return e?!!/^\d{6}$/.test(e)||"短信验证码6个数字":"请输入短信验证码"},isAgree(e){return!!e||"请勾选登录协议"}}}}]);
//# sourceMappingURL=513.afc9dc57.js.map