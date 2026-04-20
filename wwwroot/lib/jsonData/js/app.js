/*!
 * JSON Generator Legacy v1.9.0
 * 
 *
 * Copyright 2022 Vazha Omanashvili
 * https://vazha.me
 *
 * 2022/03/19
 */ 
/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper window is present,
// execute the factory and get jQuery
// For environments that do not inherently posses a window with a document
// (such as Node.js), expose a jQuery-making factory as module.exports
// This accentuates the need for the creation of a real window
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info
module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=aa.type(a);return"function"!==c&&!aa.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a))}
// Implement the identical functionality for filter and not
function d(a,b,c){if(aa.isFunction(b))return aa.grep(a,function(a,d){/* jshint -W018 */
return!!b.call(a,d,a)!==c});if(b.nodeType)return aa.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(ha.test(b))return aa.filter(b,a,c);b=aa.filter(b,a)}return aa.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){while((a=a[b])&&1!==a.nodeType);return a}
// Convert String-formatted options into Object-formatted ones and store in cache
function f(a){var b=oa[a]={};return aa.each(a.match(na)||[],function(a,c){b[c]=!0}),b}/**
 * The ready event handler and self cleanup method
 */
function g(){$.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),aa.ready()}function h(){
// Support: Android < 4,
// Old WebKit does not have Object.preventExtensions/freeze method,
// return new empty object instead with no [[set]] accessor
Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=aa.expando+Math.random()}function i(a,b,c){var d;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ua,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:
// Only convert to a number if it doesn't change the string
+c+""===c?+c:ta.test(c)?aa.parseJSON(c):c)}catch(e){}
// Make sure we set the data so it isn't changed later
sa.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return $.activeElement}catch(a){}}
// Support: 1.x compatibility
// Manipulating tables requires a tbody
function m(a,b){return aa.nodeName(a,"table")&&aa.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Ka.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}
// Mark scripts as having already been evaluated
function p(a,b){for(var c=0,d=a.length;c<d;c++)ra.set(a[c],"globalEval",!b||ra.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){
// 1. Copy private data: events, handlers, etc.
if(ra.hasData(a)&&(f=ra.access(a),g=ra.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)aa.event.add(b,e,j[e][c])}
// 2. Copy user data
sa.hasData(a)&&(h=sa.access(a),i=aa.extend({},h),sa.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&aa.nodeName(a,b)?aa.merge([a],c):c}
// Support: IE >= 9
function s(a,b){var c=b.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===c&&ya.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function t(b,c){var d=aa(c.createElement(b)).appendTo(c.body),
// getDefaultComputedStyle might be reliably used only on attached element
e=a.getDefaultComputedStyle?
// Use of this method is a temporary fix (more like optmization) until something better comes along,
// since it was removed from specification and supported only in FF
a.getDefaultComputedStyle(d[0]).display:aa.css(d[0],"display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return d.detach(),e}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function u(a){var b=$,c=Oa[a];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return c||(c=t(a,b),"none"!==c&&c||(Na=(Na||aa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Na[0].contentDocument,b.write(),b.close(),c=t(a,b),Na.detach()),Oa[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;
// Support: IE9
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
// Support: iOS < 6
// A tribute to the "awesome hack by Dean Edwards"
// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE
// IE returns zIndex value as an integer.
return c=c||Ra(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||aa.contains(a.ownerDocument,a)||(g=aa.style(a,b)),Qa.test(g)&&Pa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due to missing dependency),
// remove it.
// Since there are no other hooks for marginRight, remove the whole object.
return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
// return a css property mapped to a potentially vendor prefixed property
function x(a,b){
// shortcut for names that are not vendor prefixed
if(b in a)return b;
// check for vendor prefixed names
var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xa.length;while(e--)if(b=Xa[e]+c,b in a)return b;return d}function y(a,b,c){var d=Ta.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===b?1:0,g=0;f<4;f+=2)
// both box models exclude margin, so add it if we want it
"margin"===c&&(g+=aa.css(a,c+wa[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=aa.css(a,"padding"+wa[f],!0,e)),
// at this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=aa.css(a,"border"+wa[f]+"Width",!0,e))):(
// at this point, extra isn't content, so add padding
g+=aa.css(a,"padding"+wa[f],!0,e),
// at this point, extra isn't content nor padding, so add border
"padding"!==c&&(g+=aa.css(a,"border"+wa[f]+"Width",!0,e)));return g}function A(a,b,c){
// Start with offset property, which is equivalent to the border-box value
var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g="border-box"===aa.css(a,"boxSizing",!1,f);
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(e<=0||null==e){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
e=v(a,b,f),(e<0||null==e)&&(e=a.style[b]),Qa.test(e))return e;
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
d=g&&(Z.boxSizingReliable()||e===a.style[b]),
// Normalize "", auto, and prepare for extra
e=parseFloat(e)||0}
// use the active box-sizing model to add/subtract irrelevant styles
return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=ra.get(d,"olddisplay"),c=d.style.display,b?(
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
f[g]||"none"!==c||(d.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===d.style.display&&xa(d)&&(f[g]=ra.access(d,"olddisplay",u(d.nodeName)))):f[g]||(e=xa(d),(c&&"none"!==c||!e)&&ra.set(d,"olddisplay",e?c:aa.css(d,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}
// Animations created synchronously will run synchronously
function D(){return setTimeout(function(){Ya=void 0}),Ya=aa.now()}
// Generate parameters to create a standard animation
function E(a,b){var c,d=0,e={height:a};for(
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
b=b?1:0;d<4;d+=2-b)c=wa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cb[b]||[]).concat(cb["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))
// we're done with this property
return d}function G(a,b,c){/* jshint validthis: true */
var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&xa(a),o=ra.get(a,"fxshow");
// handle queue: false promises
c.queue||(h=aa._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){
// doing this makes sure that the complete handler will be called
// before this completes
k.always(function(){h.unqueued--,aa.queue(a,"fx").length||h.empty.fire()})})),
// height/width overflow pass
1===a.nodeType&&("height"in b||"width"in b)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE9-10 do not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
c.overflow=[m.overflow,m.overflowX,m.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
j=aa.css(a,"display"),
// Get default display if display is currently "none"
"none"===j&&(j=u(a.nodeName)),"inline"===j&&"none"===aa.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));
// show/hide pass
for(d in b)if(e=b[d],$a.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){
// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
if("show"!==e||!o||void 0===o[d])continue;n=!0}l[d]=o&&o[d]||aa.style(a,d)}if(!aa.isEmptyObject(l)){o?"hidden"in o&&(n=o.hidden):o=ra.access(a,"fxshow",{}),
// store state if its toggle - enables .stop().toggle() to "reverse"
f&&(o.hidden=!n),n?aa(a).show():k.done(function(){aa(a).hide()}),k.done(function(){var b;ra.remove(a,"fxshow");for(b in l)aa.style(a,b,l[b])});for(d in l)g=F(n?o[d]:0,d,k),d in o||(o[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=aa.camelCase(c),e=b[d],f=a[c],aa.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=aa.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bb.length,h=aa.Deferred().always(function(){
// don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||D(),c=Math.max(0,j.startTime+j.duration-b),
// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:aa.extend({},b),opts:aa.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Ya||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=aa.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);
// resolve when we played the last frame
// otherwise, reject
return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);f<g;f++)if(d=bb[f].call(j,a,k,j.opts))return d;
// attach callbacks from options
return aa.map(k,F,j),aa.isFunction(j.opts.start)&&j.opts.start.call(a,j),aa.fx.timer(aa.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function J(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(na)||[];if(aa.isFunction(c))
// For each dataType in the dataTypeExpression
while(d=f[e++])
// Prepend if requested
"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function K(a,b,c,d){function e(h){var i;return f[h]=!0,aa.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vb;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function L(a,b){var c,d,e=aa.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&aa.extend(!0,a,d),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function M(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
// Remove auto dataType and get content-type in the process
while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}
// Check to see if we have a response for the expected dataType
if(i[0]in c)f=i[0];else{
// Try convertible dataTypes
for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}
// Or just use first one
f=f||g}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(f)return f!==i[0]&&i.unshift(f),c[f]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function N(a,b,c,d){var e,f,g,h,i,j={},
// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();
// Create converters map with lowercased keys
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();
// Convert to each sequential dataType
while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),
// Apply the dataFilter if provided
!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
// There's only work to do if current dataType is non-auto
if("*"===f)f=i;else if("*"!==i&&i!==f){
// If none found, seek a pair
if(
// Seek a direct converter
g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(
// If conv2 outputs current
h=e.split(" "),h[1]===f&&(
// If prev can be converted to accepted input
g=j[i+" "+h[0]]||j["* "+h[0]])){
// Condense equivalence converters
g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}
// Apply converter (if not an equivalence)
if(g!==!0)
// Unless errors are allowed to bubble, catch and return them
if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(aa.isArray(b))
// Serialize array item.
aa.each(b,function(b,e){c||zb.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==aa.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)O(a+"["+e+"]",b[e],c,d)}/**
 * Gets a window from an element
 */
function P(a){return aa.isWindow(a)?a:9===a.nodeType&&a.defaultView}
// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y="".trim,Z={},
// Use the correct document accordingly with window argument (sandbox)
$=a.document,_="2.1.0",
// Define a local copy of jQuery
aa=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new aa.fn.init(a,b)},
// Matches dashed string for camelizing
ba=/^-ms-/,ca=/-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
da=function(a,b){return b.toUpperCase()};aa.fn=aa.prototype={
// The current version of jQuery being used
jquery:_,constructor:aa,
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return R.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return a 'clean' array
// Return just the object
return null!=a?a<0?this[a+this.length]:this[a]:R.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=aa.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b.context=this.context,b},
// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(a,b){return aa.each(this,a,b)},map:function(a){return this.pushStack(aa.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:T,sort:Q.sort,splice:Q.splice},aa.extend=aa.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
// Handle a deep copy situation
"boolean"==typeof g&&(j=g,
// skip the boolean and the target
g=arguments[h]||{},h++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof g||aa.isFunction(g)||(g={}),
// extend jQuery itself if only one argument is passed
h===i&&(g=this,h--);h<i;h++)
// Only deal with non-null/undefined values
if(null!=(a=arguments[h]))
// Extend the base object
for(b in a)c=g[b],d=a[b],
// Prevent never-ending loop
g!==d&&(
// Recurse if we're merging plain objects or arrays
j&&d&&(aa.isPlainObject(d)||(e=aa.isArray(d)))?(e?(e=!1,f=c&&aa.isArray(c)?c:[]):f=c&&aa.isPlainObject(c)?c:{},
// Never move original objects, clone them
g[b]=aa.extend(j,f,d)):void 0!==d&&(g[b]=d));
// Return the modified object
return g},aa.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(_+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(a){throw new Error(a)},noop:function(){},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(a){return"function"===aa.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return a-parseFloat(a)>=0},isPlainObject:function(a){
// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
if("object"!==aa.type(a)||a.nodeType||aa.isWindow(a))return!1;
// Support: Firefox <20
// The try/catch suppresses exceptions thrown when attempting to access
// the "constructor" property of certain host objects, ie. |window.location|
// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
try{if(a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}
// If the function hasn't returned already, we're confident that
// |obj| is a plain object, created by {} or constructed with new Object
return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},
// Evaluates a script in a global context
globalEval:function(a){var b,c=eval;a=aa.trim(a),a&&(
// If the code includes a valid, prologue position
// strict mode pragma, execute code by injecting a
// script tag into the document.
1===a.indexOf("use strict")?(b=$.createElement("script"),b.text=a,$.head.appendChild(b).parentNode.removeChild(b)):
// Otherwise, avoid the DOM node creation, insertion
// and removal by using an indirect global eval
c(a))},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(ba,"ms-").replace(ca,da)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},
// args is for internal usage only
each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h){for(;f<g;f++)if(e=b.apply(a[f],d),e===!1)break}else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h){for(;f<g;f++)if(e=b.call(a[f],f,a[f]),e===!1)break}else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":Y.call(a)},
// results is for internal usage only
makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?aa.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){
// Go through the array, only saving the items
// that pass the validator function
for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},
// arg is for internal usage only
map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];
// Go through the array, translating each of the items to their new values
if(h)for(;f<g;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);
// Flatten any nested arrays
return S.apply([],i)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,d,e;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof b&&(c=a[b],b=a,a=c),aa.isFunction(a))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||aa.guid++,e},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:Z}),
// Populate the class2type map
aa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var ea=/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */
function(a){function b(a,b,c,d){var e,f,g,h,
// QSA vars
i,j,l,o,p,q;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){
// Shortcuts
if(e=sa.exec(a))
// Speed-up: Sizzle("#ID")
if(g=e[1]){if(9===h){
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document (jQuery #6963)
if(f=b.getElementById(g),!f||!f.parentNode)return c;
// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
if(f.id===g)return c.push(f),c}else
// Context is not a document
if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&x.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}
// QSA path
if(x.qsa&&(!J||!J.test(a))){
// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
if(o=l=N,p=b,q=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){j=m(a),(l=b.getAttribute("id"))?o=l.replace(ua,"\\$&"):b.setAttribute("id",o),o="[id='"+o+"'] ",i=j.length;while(i--)j[i]=o+n(j[i]);p=ta.test(a)&&k(b.parentNode)||b,q=j.join(",")}if(q)try{return _.apply(c,p.querySelectorAll(q)),c}catch(r){}finally{l||b.removeAttribute("id")}}}
// All others
return v(a.replace(ia,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function c(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+" ")>y.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function d(a){return a[N]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function f(a,b){var c=a.split("|"),d=a.length;while(d--)y.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function j(a){return d(function(b){return b=+b,d(function(c,d){var e,f=a([],c.length,b),g=f.length;
// Match elements found at the specified indexes
while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function k(a){return a&&typeof a.getElementsByTagName!==V&&a}
// Easy API for creating new setFilters
function l(){}function m(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);h=a,i=[],j=y.preFilter;while(h){
// Comma and first run
d&&!(e=ja.exec(h))||(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ka.exec(h))&&(d=e.shift(),f.push({value:d,
// Cast descendant combinators to space
type:e[0].replace(ia," ")}),h=h.slice(d.length));
// Filters
for(g in y.filter)!(e=oa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return c?h.length:h?b.error(a):S(a,i).slice(0)}function n(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)
// Assign to newCache so results back-propagate to previous elements
return j[2]=h[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
i[d]=j,j[2]=a(b,c,g))return!0}}}function p(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,
// Get initial elements from seed or context
p=d||u(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
r=!a||!d&&b?p:q(p,m,a,h,i),s=c?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
f||(d?a:o||e)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
g:r;
// Apply postFilter
if(
// Find primary matches
c&&c(r,s,h,i),e){j=q(s,n),e(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;while(k--)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l))}if(d){if(f||a){if(f){
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=s.length;while(k--)(l=s[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(r[k]=l);f(null,s=[],j,i)}
// Move matched elements from seed to results to keep them synchronized
k=s.length;while(k--)(l=s[k])&&(j=f?ba.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else s=q(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):_.apply(g,s)})}function s(a){for(var b,c,d,e=a.length,f=y.relative[a[0].type],g=f||y.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=o(function(a){return a===b},g,!0),j=o(function(a){return ba.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];h<e;h++)if(c=y.relative[a[h].type])k=[o(p(k),c)];else{
// Return special upon seeing a positional matcher
if(c=y.filter[a[h].type].apply(null,a[h].matches),c[N]){for(
// Find the next relative operator (if any) for proper handling
d=++h;d<e;d++)if(y.relative[a[d].type])break;
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return r(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ia,"$1"),c,h<d&&s(a.slice(h,d)),d<e&&s(a=a.slice(d)),d<e&&n(a))}k.push(c)}return p(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,
// We must always have either seed elements or outermost context
t=d||f&&y.find.TAG("*",j),
// Use integer dirruns iff this is the outermost matcher
u=P+=null==s?1:Math.random()||.1,v=t.length;
// Add elements passing elementMatchers directly to results
// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){l=0;while(m=a[l++])if(m(k,g,h)){i.push(k);break}j&&(P=u)}
// Track unmatched elements for set filters
e&&(
// They will have gone through all possible matchers
(k=!m&&k)&&n--,
// Lengthen the array for every element, matched or not
d&&p.push(k))}if(
// Apply set filters to unmatched elements
n+=o,e&&o!==n){l=0;while(m=c[l++])m(p,r,g,h);if(d){
// Reintegrate element matches to eliminate the need for sorting
if(n>0)while(o--)p[o]||r[o]||(r[o]=Z.call(i));
// Discard index placeholder values to get only actual matches
r=q(r)}
// Add matches to results
_.apply(i,r),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return j&&(P=u,C=s),p};return e?d(g):g}function u(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function v(a,b,c,d){var e,f,g,h,i,j=m(a);if(!d&&1===j.length){if(
// Take a shortcut and set the context if the root selector is an ID
f=j[0]=j[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&x.getById&&9===b.nodeType&&I&&y.relative[f[1].type]){if(b=(y.find.ID(g.matches[0].replace(va,wa),b)||[])[0],!b)return c;a=a.slice(f.shift().value.length)}
// Fetch a seed set for right-to-left matching
e=oa.needsContext.test(a)?0:f.length;while(e--){
// Abort if we hit a combinator
if(g=f[e],y.relative[h=g.type])break;if((i=y.find[h])&&(d=i(g.matches[0].replace(va,wa),ta.test(f[0].type)&&k(b.parentNode)||b))){if(
// If seed is empty or no tokens remain, we can return early
f.splice(e,1),a=d.length&&n(f),!a)return _.apply(c,d),c;break}}}
// Compile and execute a filtering function
// Provide `match` to avoid retokenization if we modified the selector above
return B(a,j)(d,b,!I,c,ta.test(a)&&k(b.parentNode)||b),c}var w,x,y,z,A,B,C,D,E,
// Local document vars
F,G,H,I,J,K,L,M,
// Instance-specific data
N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},
// General-purpose constants
V="undefined",W=1<<31,
// Instance methods
X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,aa=Y.slice,
// Use a stripped-down indexOf if we can't use a native one
ba=Y.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},ca="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
da="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/css3-syntax/#characters
ea="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
fa=ea.replace("w","w#"),
// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
ga="\\["+da+"*("+ea+")"+da+"*(?:([*^$|!~]?=)"+da+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+fa+")|)|)"+da+"*\\]",
// Prefer arguments quoted,
//   then not containing pseudos/brackets,
//   then attribute selectors/non-parenthetical expressions,
//   then anything else
// These preferences are here to reduce the number of selectors
//   needing tokenize in the PSEUDO preFilter
ha=":("+ea+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ga.replace(3,8)+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ia=new RegExp("^"+da+"+|((?:^|[^\\\\])(?:\\\\.)*)"+da+"+$","g"),ja=new RegExp("^"+da+"*,"+da+"*"),ka=new RegExp("^"+da+"*([>+~]|"+da+")"+da+"*"),la=new RegExp("="+da+"*([^\\]'\"]*?)"+da+"*\\]","g"),ma=new RegExp(ha),na=new RegExp("^"+fa+"$"),oa={ID:new RegExp("^#("+ea+")"),CLASS:new RegExp("^\\.("+ea+")"),TAG:new RegExp("^("+ea.replace("w","w*")+")"),ATTR:new RegExp("^"+ga),PSEUDO:new RegExp("^"+ha),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+da+"*(even|odd|(([+-]|)(\\d*)n|)"+da+"*(?:([+-]|)"+da+"*(\\d+)|))"+da+"*\\)|)","i"),bool:new RegExp("^(?:"+ca+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+da+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+da+"*((?:-\\d)?\\d*)"+da+"*\\)|)(?=[^-]|$)","i")},pa=/^(?:input|select|textarea|button)$/i,qa=/^h\d$/i,ra=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,ua=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
va=new RegExp("\\\\([\\da-f]{1,6}"+da+"?|("+da+")|.)","ig"),wa=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};
// Optimize for push.apply( _, NodeList )
try{_.apply(Y=aa.call(O.childNodes),O.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
Y[O.childNodes.length].nodeType}catch(xa){_={apply:Y.length?
// Leverage slice if possible
function(a,b){$.apply(a,aa.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){var c=a.length,d=0;
// Can't trust NodeList.length
while(a[c++]=b[d++]);a.length=c-1}}}
// Expose support vars for convenience
x=b.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
A=b.isXML=function(a){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;
// If no document and documentElement is available, return
// If no document and documentElement is available, return
// Set our document
// Support tests
// Support: IE>8
// If iframe document is assigned to "document" variable and if iframe has been reloaded,
// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
// IE6-8 do not support the defaultView property so parent will be undefined
// IE11 does not have attachEvent, so all must suffer
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Check if getElementsByClassName can be trusted
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!A(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),x.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),x.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),x.getElementsByClassName=ra.test(c.getElementsByClassName)&&e(function(a){
// Support: Opera<10
// Catch gEBCN failure to find non-leading classes
// Support: Safari<4
// Catch class over-caching
return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),x.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),x.getById?(y.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return c&&c.parentNode?[c]:[]}},y.filter.ID=function(a){var b=a.replace(va,wa);return function(a){return a.getAttribute("id")===b}}):(delete y.find.ID,y.filter.ID=function(a){var b=a.replace(va,wa);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),y.find.TAG=x.getElementsByTagName?function(a,b){if(typeof b.getElementsByTagName!==V)return b.getElementsByTagName(a)}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
// Filter out possible comments
if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},y.find.CLASS=x.getElementsByClassName&&function(a,b){if(typeof b.getElementsByClassName!==V&&I)return b.getElementsByClassName(a)},K=[],J=[],(x.qsa=ra.test(c.querySelectorAll))&&(e(function(a){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
a.innerHTML="<select t=''><option selected=''></option></select>",
// Support: IE8, Opera 10-12
// Nothing should be selected when empty strings follow ^= or $= or *=
a.querySelectorAll("[t^='']").length&&J.push("[*^$]="+da+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
a.querySelectorAll("[selected]").length||J.push("\\["+da+"*(?:value|"+ca+")"),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
a.querySelectorAll("[name=d]").length&&J.push("name"+da+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x"),J.push(",.*:")})),(x.matchesSelector=ra.test(L=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
x.disconnectedMatch=L.call(a,"div"),
// This should fail with an exception
// Gecko does not error, returns false instead
L.call(a,"[s!='']:x"),K.push("!=",ha)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=ra.test(H.compareDocumentPosition),M=b||ra.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},U=b?function(a,b){
// Flag for duplicate removal
if(a===b)return E=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!x.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?ba.call(D,a)-ba.call(D,b):0:4&d?-1:1)}:function(a,b){
// Exit early if the nodes are identical
if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];
// Parentless nodes are either documents or disconnected
if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?ba.call(D,a)-ba.call(D,b):0;if(f===h)return g(a,b);
// Otherwise we need full lists of their ancestors for comparison
d=a;while(d=d.parentNode)i.unshift(d);d=b;while(d=d.parentNode)j.unshift(d);
// Walk down the tree looking for a discrepancy
while(i[e]===j[e])e++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if(
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a),
// Make sure that attribute selectors are quoted
c=c.replace(la,"='$1']"),x.matchesSelector&&I&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);
// IE 9's matchesSelector returns false on disconnected nodes
if(d||x.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){
// Set document vars if needed
return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a);var c=y.attrHandle[b.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
d=c&&X.call(y.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:x.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(
// Unless we *know* we can detect duplicates, assume their presence
E=!x.detectDuplicates,D=!x.sortStable&&a.slice(0),a.sort(U),E){while(b=a[e++])b===a[e]&&(d=c.push(e));while(d--)a.splice(c[d],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return D=null,a},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
z=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof a.textContent)return a.textContent;
// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling)c+=z(a)}else if(3===e||4===e)return a.nodeValue}else
// If no nodeType, this is expected to be an array
while(b=a[d++])
// Do not traverse comment nodes
c+=z(b);
// Do not include comment or processing instruction nodes
return c},y=b.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:d,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
// Move the given value to match[3] whether quoted or unquoted
return a[1]=a[1].replace(va,wa),a[3]=(a[4]||a[5]||"").replace(va,wa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return oa.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&ma.test(c)&&(b=m(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(va,wa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+da+")"+a+"("+da+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
// Shortcut for :nth-*(n)
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){
// :(first|last|only)-(child|of-type)
if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
o=p="only"===a&&!o&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(o=[g?q.firstChild:q.lastChild],g&&s){
// Seek `elem` from a previously-cached index
k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(
// Fallback to seeking `elem` from the start
m=n=0)||o.pop())
// When found, cache indexes on `parent` and break
if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else
// Use the same loop as above to seek `elem` from the start
while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(
// Cache the index of each encountered element
s&&((l[N]||(l[N]={}))[a]=[P,m]),l===b))break;
// Incorporate the offset, then check against cycle size
return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,f=y.pseudos[a]||y.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return f[N]?f(c):f.length>1?(e=[a,a,"",c],y.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){var d,e=f(a,c),g=e.length;while(g--)d=ba.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{
// Potentially complex pseudos
not:d(function(a){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],e=B(a.replace(ia,"$1"));return e[N]?d(function(a,b,c,d){var f,g=e(a,null,d,[]),h=a.length;
// Match elements unmatched by `matcher`
while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||z(b)).indexOf(a)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:d(function(a){
// lang value must be a valid identifier
return na.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(va,wa).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),
// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
// Boolean properties
enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){
// Accessing this property makes selected-by-default
// options in Safari work properly
return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},
// Contents
empty:function(a){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!y.pseudos.empty(a)},
// Element/input types
header:function(a){return qa.test(a.nodeName)},input:function(a){return pa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},
// Position-in-collection
first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[c<0?c+b:c]}),even:j(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},y.pseudos.nth=y.pseudos.eq;
// Add button/input type pseudos
for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})y.pseudos[w]=h(w);for(w in{submit:!0,reset:!0})y.pseudos[w]=i(w);
// One-time assignments
// Sort stability
// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return l.prototype=y.filters=y.pseudos,y.setFilters=new l,B=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){
// Generate a function of recursive functions that can be used to check each element
b||(b=m(a)),c=b.length;while(c--)f=s(b[c]),f[N]?d.push(f):e.push(f);
// Cache the compiled function
f=T(a,t(e,d))}return f},x.sortStable=N.split("").sort(U).join("")===N,x.detectDuplicates=!!E,F(),x.sortDetached=e(function(a){
// Should return 1, but returns 4 (following)
return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),x.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ca,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);aa.find=ea,aa.expr=ea.selectors,aa.expr[":"]=aa.expr.pseudos,aa.unique=ea.uniqueSort,aa.text=ea.getText,aa.isXMLDoc=ea.isXML,aa.contains=ea.contains;var fa=aa.expr.match.needsContext,ga=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ha=/^.[^:#\[\.,]*$/;aa.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?aa.find.matchesSelector(d,a)?[d]:[]:aa.find.matches(a,aa.grep(b,function(a){return 1===a.nodeType}))},aa.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(aa(a).filter(function(){for(b=0;b<c;b++)if(aa.contains(e[b],this))return!0}));for(b=0;b<c;b++)aa.find(a,e[b],d);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return d=this.pushStack(c>1?aa.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!d(this,"string"==typeof a&&fa.test(a)?aa(a):a||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var ia,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
ja=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ka=aa.fn.init=function(a,b){var c,d;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if("string"==typeof a){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:ja.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ia).find(a):this.constructor(b).find(a);
// HANDLE: $(html) -> $(array)
if(c[1]){
// HANDLE: $(html, props)
if(b=b instanceof aa?b[0]:b,
// scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
aa.merge(this,aa.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:$,!0)),ga.test(c[1])&&aa.isPlainObject(b))for(c in b)
// Properties of context are called as methods if possible
aa.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
// Inject the element directly into the jQuery object
return d=$.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=$,this.selector=a,this}
// Execute immediately if ready is not present
return a.nodeType?(this.context=this[0]=a,this.length=1,this):aa.isFunction(a)?"undefined"!=typeof ia.ready?ia.ready(a):a(aa):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),aa.makeArray(a,this))};
// Give the init function the jQuery prototype for later instantiation
ka.prototype=aa.fn,
// Initialize central reference
ia=aa($);var la=/^(?:parents|prev(?:Until|All))/,
// methods guaranteed to produce a unique set when starting from a unique set
ma={children:!0,contents:!0,next:!0,prev:!0};aa.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&aa(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),aa.fn.extend({has:function(a){var b=aa(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(aa.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fa.test(a)||"string"!=typeof a?aa(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:
// Don't pass non-elements to Sizzle
1===c.nodeType&&aa.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?aa.unique(f):f)},
// Determine the position of an element within
// the matched set of elements
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?U.call(aa(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(aa.unique(aa.merge(this.get(),aa(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),aa.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return aa.dir(a,"parentNode")},parentsUntil:function(a,b,c){return aa.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return aa.dir(a,"nextSibling")},prevAll:function(a){return aa.dir(a,"previousSibling")},nextUntil:function(a,b,c){return aa.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return aa.dir(a,"previousSibling",c)},siblings:function(a){return aa.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return aa.sibling(a.firstChild)},contents:function(a){return a.contentDocument||aa.merge([],a.childNodes)}},function(a,b){aa.fn[a]=function(c,d){var e=aa.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=aa.filter(d,e)),this.length>1&&(ma[a]||aa.unique(e),la.test(a)&&e.reverse()),this.pushStack(e)}});var na=/\S+/g,oa={};/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
aa.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?oa[a]||f(a):aa.extend({},a);var// Last fire value (for non-forgettable lists)
b,
// Flag to know if list was already fired
c,
// Flag to know if list is currently firing
d,
// First callback to fire (used internally by add and fireWith)
e,
// End of the loop when firing
g,
// Index of currently firing callback (modified by remove if needed)
h,
// Actual callback list
i=[],
// Stack of fire calls for repeatable lists
j=!a.once&&[],
// Fire callbacks
k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&h<g;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;// To prevent further calls using add
break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},
// Actual Callbacks object
l={
// Add a callback or a collection of callbacks to the list
add:function(){if(i){
// First, we save the current length
var c=i.length;!function f(b){aa.each(b,function(b,c){var d=aa.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&
// Inspect recursively
f(c)})}(arguments),
// Do we need to add the callbacks to the
// current firing batch?
d?g=i.length:b&&(e=c,k(b))}return this},
// Remove a callback from the list
remove:function(){return i&&aa.each(arguments,function(a,b){var c;while((c=aa.inArray(b,i,c))>-1)i.splice(c,1),
// Handle firing indexes
d&&(c<=g&&g--,c<=h&&h--)}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?aa.inArray(a,i)>-1:!(!i||!i.length)},
// Remove all callbacks from the list
empty:function(){return i=[],g=0,this},
// Have the list do nothing anymore
disable:function(){return i=j=b=void 0,this},
// Is it disabled?
disabled:function(){return!i},
// Lock the list in its current state
lock:function(){return j=void 0,b||l.disable(),this},
// Is it locked?
locked:function(){return!j},
// Call all callbacks with the given context and arguments
fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},
// Call all the callbacks with the given arguments
fire:function(){return l.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!c}};return l},aa.extend({Deferred:function(a){var b=[
// action, add listener, listener list, final state
["resolve","done",aa.Callbacks("once memory"),"resolved"],["reject","fail",aa.Callbacks("once memory"),"rejected"],["notify","progress",aa.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return aa.Deferred(function(c){aa.each(b,function(b,f){var g=aa.isFunction(a[b])&&a[b];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&aa.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?aa.extend(a,d):d}},e={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return d.pipe=d.then,aa.each(b,function(a,f){var g=f[2],h=f[3];
// promise[ done | fail | progress ] = list.add
d[f[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = [ resolved | rejected ]
c=h},b[1^a][2].disable,b[2][2].lock),
// deferred[ resolve | reject | notify ]
e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},
// Deferred helper
when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,
// the count of uncompleted subordinates
h=1!==g||a&&aa.isFunction(a.promise)?g:0,
// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
i=1===h?a:aa.Deferred(),
// Update function for both resolve and progress values
j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};
// add listeners to Deferred subordinates; treat others as resolved
if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);e<g;e++)f[e]&&aa.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;
// if we're not waiting on anything, resolve the master
return h||i.resolveWith(d,f),i.promise()}});
// The deferred used on DOM ready
var pa;aa.fn.ready=function(a){
// Add the callback
return aa.ready.promise().done(a),this},aa.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(a){a?aa.readyWait++:aa.ready(!0)},
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
(a===!0?--aa.readyWait:aa.isReady)||(
// Remember that the DOM is ready
aa.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
a!==!0&&--aa.readyWait>0||(
// If there are functions bound, to execute
pa.resolveWith($,[aa]),
// Trigger any bound ready events
aa.fn.trigger&&aa($).trigger("ready").off("ready")))}}),aa.ready.promise=function(b){
// Catch cases where $(document).ready() is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
// Handle it asynchronously to allow scripts the opportunity to delay ready
// Use the handy event callback
// A fallback to window.onload, that will always work
return pa||(pa=aa.Deferred(),"complete"===$.readyState?setTimeout(aa.ready):($.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pa.promise(b)},
// Kick off the DOM ready check even if the user does not
aa.ready.promise();
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var qa=aa.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
// Sets many values
if("object"===aa.type(c)){e=!0;for(h in c)aa.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,aa.isFunction(d)||(g=!0),j&&(
// Bulk operations run against the entire set
g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(aa(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
// Gets
return e?a:j?b.call(a):i?b(a[0],c):f};/**
 * Determines whether an object can have data
 */
aa.acceptData=function(a){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
/* jshint -W018 */
return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=aa.acceptData,h.prototype={key:function(a){
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return the key for a frozen object.
if(!h.accepts(a))return 0;var b={},
// Check if the owner object already has a cache key
c=a[this.expando];
// If not, create one
if(!c){c=h.uid++;
// Secure it in a non-enumerable, non-writable property
try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,aa.extend(a,b)}}
// Ensure the cache object
return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,
// There may be an unlock assigned to this node,
// if there is no entry for this "owner", create one inline
// and set the unlock as though an owner entry had always existed
e=this.key(a),f=this.cache[e];
// Handle: [ owner, key, value ] args
if("string"==typeof b)f[b]=c;else
// Fresh assignments by object are shallow copied
if(aa.isEmptyObject(f))aa.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){
// Either a valid cache is found, or will be created.
// New caches will be created and the unlock returned,
// allowing direct access to the newly created
// empty data object. A valid owner object must be provided.
var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// [*]When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,aa.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{
// Support array or space separated string of keys
aa.isArray(b)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
d=b.concat(b.map(aa.camelCase)):(e=aa.camelCase(b),
// Try the string as a key before any manipulation
b in g?d=[b,e]:(
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
d=e,d=d in g?[d]:d.match(na)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!aa.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var ra=new h,sa=new h,ta=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ua=/([A-Z])/g;aa.extend({hasData:function(a){return sa.hasData(a)||ra.hasData(a)},data:function(a,b,c){return sa.access(a,b,c)},removeData:function(a,b){sa.remove(a,b)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to data_priv methods, these can be deprecated.
_data:function(a,b,c){return ra.access(a,b,c)},_removeData:function(a,b){ra.remove(a,b)}}),aa.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
// Gets all values
if(void 0===a){if(this.length&&(e=sa.get(f),1===f.nodeType&&!ra.get(f,"hasDataAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=aa.camelCase(d.slice(5)),i(f,d,e[d]));ra.set(f,"hasDataAttrs",!0)}return e}
// Sets multiple values
// Sets multiple values
return"object"==typeof a?this.each(function(){sa.set(this,a)}):qa(this,function(b){var c,d=aa.camelCase(a);
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(f&&void 0===b){if(
// Attempt to get data from the cache
// with the key as-is
c=sa.get(f,a),void 0!==c)return c;if(
// Attempt to get data from the cache
// with the key camelized
c=sa.get(f,d),void 0!==c)return c;if(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
c=i(f,d,void 0),void 0!==c)return c}else
// Set the data...
this.each(function(){
// First, attempt to store a copy or reference of any
// data that might've been store with a camelCased key.
var c=sa.get(this,d);
// For HTML5 data-* attribute interop, we have to
// store property names with dashes in a camelCase form.
// This might not apply to all properties...*
sa.set(this,d,b),
// *... In the case of properties that might _actually_
// have dashes, we need to also store a copy of that
// unchanged property.
a.indexOf("-")!==-1&&void 0!==c&&sa.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sa.remove(this,a)})}}),aa.extend({queue:function(a,b,c){var d;if(a)
// Speed up dequeue by getting out quickly if this is just a lookup
return b=(b||"fx")+"queue",d=ra.get(a,b),c&&(!d||aa.isArray(c)?d=ra.access(a,b,aa.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=aa.queue(a,b),d=c.length,e=c.shift(),f=aa._queueHooks(a,b),g=function(){aa.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// not intended for public consumption - generates a queueHooks object, or returns the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return ra.get(a,c)||ra.access(a,c,{empty:aa.Callbacks("once memory").add(function(){ra.remove(a,[b+"queue",c])})})}}),aa.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?aa.queue(this[0],a):void 0===b?this:this.each(function(){var c=aa.queue(this,a,b);
// ensure a hooks for this queue
aa._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&aa.dequeue(this,a)})},dequeue:function(a){return this.each(function(){aa.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=aa.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=ra.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var va=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wa=["Top","Right","Bottom","Left"],xa=function(a,b){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return a=b||a,"none"===aa.css(a,"display")||!aa.contains(a.ownerDocument,a)},ya=/^(?:checkbox|radio)$/i;!function(){var a=$.createDocumentFragment(),b=a.appendChild($.createElement("div"));
// #11217 - WebKit loses check when the name is after the checked attribute
b.innerHTML="<input type='radio' checked='checked' name='t'/>",
// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
// old WebKit doesn't clone checked state correctly in fragments
Z.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE9-IE11+
b.innerHTML="<textarea>x</textarea>",Z.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var za="undefined";Z.focusinBubbles="onfocusin"in a;var Aa=/^key/,Ba=/^(?:mouse|contextmenu)|click/,Ca=/^(?:focusinfocus|focusoutblur)$/,Da=/^([^.]*)(?:\.(.+)|)$/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
aa.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.get(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(q){
// Caller can pass in an object of custom data in lieu of the handler
c.handler&&(f=c,c=f.handler,e=f.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
c.guid||(c.guid=aa.guid++),
// Init the element's event structure and main handler, if this is the first
(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof aa!==za&&aa.event.triggered!==b.type?aa.event.dispatch.apply(a,arguments):void 0}),
// Handle multiple events separated by a space
b=(b||"").match(na)||[""],j=b.length;while(j--)h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
n&&(
// If event changes its type, use the special event handlers for the changed type
l=aa.event.special[n]||{},
// If selector defined, determine special event api type, otherwise given type
n=(e?l.delegateType:l.bindType)||n,
// Update special based on newly reset type
l=aa.event.special[n]||{},
// handleObj is passed to all event handlers
k=aa.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&aa.expr.match.needsContext.test(e),namespace:o.join(".")},f),
// Init the event handler queue if we're the first
(m=i[n])||(m=i[n]=[],m.delegateCount=0,
// Only use addEventListener if the special events handler returns false
l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),
// Add to the element's handler list, delegates in front
e?m.splice(m.delegateCount++,0,k):m.push(k),
// Keep track of which events have ever been used, for event optimization
aa.event.global[n]=!0)}},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.hasData(a)&&ra.get(a);if(q&&(i=q.events)){
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(na)||[""],j=b.length;while(j--)
// Unbind all events (on this namespace, if provided) for the element
if(h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=aa.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||aa.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)aa.event.remove(a,n+b[j],c,d,!0);
// Remove the expando if it's no longer used
aa.isEmptyObject(i)&&(delete q.handle,ra.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||$],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];
// Don't do events on text and comment nodes
if(g=h=d=d||$,3!==d.nodeType&&8!==d.nodeType&&!Ca.test(n+aa.event.triggered)&&(n.indexOf(".")>=0&&(
// Namespaced trigger; create a regexp to match event type in handle()
o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
b=b[aa.expando]?b:new aa.Event(n,"object"==typeof b&&b),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
b.result=void 0,b.target||(b.target=d),
// Clone any incoming data and prepend the event, creating the handler arg list
c=null==c?[b]:aa.makeArray(c,[b]),
// Allow special events to draw outside the lines
l=aa.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!l.noBubble&&!aa.isWindow(d)){for(i=l.delegateType||n,Ca.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
h===(d.ownerDocument||$)&&m.push(h.defaultView||h.parentWindow||a)}
// Fire handlers on the event path
f=0;while((g=m[f++])&&!b.isPropagationStopped())b.type=f>1?i:l.bindType||n,
// jQuery handler
k=(ra.get(g,"events")||{})[b.type]&&ra.get(g,"handle"),k&&k.apply(g,c),
// Native handler
k=j&&g[j],k&&k.apply&&aa.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!aa.acceptData(d)||j&&aa.isFunction(d[n])&&!aa.isWindow(d)&&(h=d[j],h&&(d[j]=null),aa.event.triggered=n,d[n](),aa.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
a=aa.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(ra.get(this,"events")||{})[a.type]||[],j=aa.event.special[a.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){
// Determine handlers
g=aa.event.handlers.call(this,a,i),
// Run delegates first; they may want to stop propagation beneath us
b=0;while((e=g[b++])&&!a.isPropagationStopped()){a.currentTarget=e.elem,c=0;while((f=e.handlers[c++])&&!a.isImmediatePropagationStopped())
// Triggered event must either 1) have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
a.namespace_re&&!a.namespace_re.test(f.namespace)||(a.handleObj=f,a.data=f.data,d=((aa.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}
// Call the postDispatch hook for the mapped type
return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;c<h;c++)f=b[c],
// Don't conflict with Object.prototype properties (#13203)
e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?aa(e,this).index(i)>=0:aa.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}
// Add the remaining (directly-bound) handlers
return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){
// Add which for key events
return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;
// Calculate pageX/Y if missing and clientX/Y available
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||$,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[aa.expando])return a;
// Create a writable copy of the event object and normalize some properties
var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Ba.test(e)?this.mouseHooks:Aa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new aa.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];
// Support: Cordova 2.5 (WebKit) (#13255)
// All events should have a target; Cordova deviceready doesn't
// Support: Safari 6.0+, Chrome < 28
// Target should not be a text node (#504, #13143)
return a.target||(a.target=$),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==l()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===l()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&aa.nodeName(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return aa.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){
// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var e=aa.extend(new aa.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?aa.event.trigger(e,null,b):aa.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},aa.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},aa.Event=function(a,b){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: Android < 4.0
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof aa.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?j:k):this.type=a,b&&aa.extend(this,b),this.timeStamp=a&&a.timeStamp||aa.now(),void(this[aa.expando]=!0)):new aa.Event(a,b)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
aa.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=j,this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
aa.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){aa.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return e&&(e===d||aa.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),
// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
Z.focusinBubbles||aa.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){aa.event.simulate(b,a.target,aa.event.fix(a),!0)};aa.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ra.access(d,b);e||d.addEventListener(a,c,!0),ra.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ra.access(d,b)-1;e?ra.access(d,b,e):(d.removeEventListener(a,c,!0),ra.remove(d,b))}}}),aa.fn.extend({on:function(a,b,c,d,/*INTERNAL*/e){var f,g;
// Types can be a map of types/handlers
if("object"==typeof a){
// ( types-Object, selector, data )
"string"!=typeof b&&(
// ( types-Object, data )
c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(
// ( types, fn )
d=b,c=b=void 0):null==d&&("string"==typeof b?(
// ( types, selector, fn )
d=c,c=void 0):(
// ( types, data, fn )
d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;
// Use same guid so caller can remove using origFn
return 1===e&&(f=d,d=function(a){
// Can use an empty set, since event contains the info
return aa().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=aa.guid++)),this.each(function(){aa.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return d=a.handleObj,aa(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(e in a)this.off(e,b,a[e]);return this}
// ( types [, fn] )
return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=k),this.each(function(){aa.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){aa.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return aa.event.trigger(a,b,c,!0)}});var Ea=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fa=/<([\w:]+)/,Ga=/<|&#?\w+;/,Ha=/<(?:script|style|link)/i,
// checked="checked" or checked
Ia=/checked\s*(?:[^=]|=\s*.checked.)/i,Ja=/^$|\/(?:java|ecma)script/i,Ka=/^true\/(.*)/,La=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
// We have to close these tags to support XHTML (#13200)
Ma={
// Support: IE 9
option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE 9
Ma.optgroup=Ma.option,Ma.tbody=Ma.tfoot=Ma.colgroup=Ma.caption=Ma.thead,Ma.th=Ma.td,aa.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=aa.contains(a.ownerDocument,a);
// Support: IE >= 9
// Fix Cloning issues
if(!(Z.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||aa.isXMLDoc(a)))for(
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
g=r(h),f=r(a),d=0,e=f.length;d<e;d++)s(f[d],g[d]);
// Copy the events from the original to the clone
if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;d<e;d++)q(f[d],g[d]);else q(a,h);
// Return the cloned set
// Preserve script evaluation history
return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;m<n;m++)if(e=a[m],e||0===e)
// Add nodes directly
if("object"===aa.type(e))
// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
aa.merge(l,e.nodeType?[e]:e);else if(Ga.test(e)){f=f||k.appendChild(b.createElement("div")),
// Deserialize a standard representation
g=(Fa.exec(e)||["",""])[1].toLowerCase(),h=Ma[g]||Ma._default,f.innerHTML=h[1]+e.replace(Ea,"<$1></$2>")+h[2],
// Descend through wrappers to the right content
j=h[0];while(j--)f=f.lastChild;
// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
aa.merge(l,f.childNodes),
// Remember the top-level container
f=k.firstChild,
// Fixes #12346
// Support: Webkit, IE
f.textContent=""}else l.push(b.createTextNode(e));
// Remove wrapper from fragment
k.textContent="",m=0;while(e=l[m++])
// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
if((!d||aa.inArray(e,d)===-1)&&(i=aa.contains(e.ownerDocument,e),
// Append to fragment
f=r(k.appendChild(e),"script"),
// Preserve script evaluation history
i&&p(f),c)){j=0;while(e=f[j++])Ja.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=aa.event.special,i=0;void 0!==(c=a[i]);i++){if(aa.acceptData(c)&&(f=c[ra.expando],f&&(b=ra.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?aa.event.remove(c,e):aa.removeEvent(c,e,b.handle);ra.cache[f]&&
// Discard any remaining `private` data
delete ra.cache[f]}
// Discard any remaining `user` data
delete sa.cache[c[sa.expando]]}}}),aa.fn.extend({text:function(a){return qa(this,function(a){return void 0===a?aa.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?aa.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||aa.cleanData(r(c)),c.parentNode&&(b&&aa.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(
// Prevent memory leaks
aa.cleanData(r(a,!1)),
// Remove any remaining nodes
a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return aa.clone(this,a,b)})},html:function(a){return qa(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof a&&!Ha.test(a)&&!Ma[(Fa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ea,"<$1></$2>");try{for(;c<d;c++)b=this[c]||{},
// Remove element nodes and prevent memory leaks
1===b.nodeType&&(aa.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];
// Force removal if there was no new content (e.g., from empty arguments)
// Make the changes, replacing each context element with the new content
return this.domManip(arguments,function(b){a=this.parentNode,aa.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){
// Flatten any nested arrays
a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=aa.isFunction(m);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||j>1&&"string"==typeof m&&!Z.checkClone&&Ia.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=aa.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){
// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(e=aa.map(r(c,"script"),n),f=e.length;i<j;i++)g=c,i!==l&&(g=aa.clone(g,!0,!0),
// Keep references to cloned scripts for later restoration
f&&
// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
aa.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)
// Evaluate executable scripts on first document insertion
for(h=e[e.length-1].ownerDocument,
// Reenable scripts
aa.map(e,o),i=0;i<f;i++)g=e[i],Ja.test(g.type||"")&&!ra.access(g,"globalEval")&&aa.contains(h,g)&&(g.src?
// Optional AJAX dependency, but won't run scripts if not present
aa._evalUrl&&aa._evalUrl(g.src):aa.globalEval(g.textContent.replace(La,"")))}return this}}),aa.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){aa.fn[a]=function(a){for(var c,d=[],e=aa(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),aa(e[g])[b](c),
// Support: QtWebKit
// .get() because push.apply(_, arraylike) throws
T.apply(d,c.get());return this.pushStack(d)}});var Na,Oa={},Pa=/^margin/,Qa=new RegExp("^("+va+")(?!px)[a-z%]+$","i"),Ra=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function b(){
// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",f.appendChild(g);var b=a.getComputedStyle(h,null);c="1%"!==b.top,d="4px"===b.width,f.removeChild(g)}var c,d,
// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
e="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",f=$.documentElement,g=$.createElement("div"),h=$.createElement("div");h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",Z.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",g.appendChild(h),
// Use window.getComputedStyle because jsdom on node.js will break without it.
a.getComputedStyle&&aa.extend(Z,{pixelPosition:function(){
// This test is executed only once but we still do memoizing
// since we can use the boxSizingReliable pre-computing.
// No need to check if the test was already performed, though.
return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){
// Support: Android 2.3
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// This support function is only executed once so no memoizing is needed.
var b,c=h.appendChild($.createElement("div"));
// Clean up the div for other support tests.
return c.style.cssText=h.style.cssText=e,c.style.marginRight=c.style.width="0",h.style.width="1px",f.appendChild(g),b=!parseFloat(a.getComputedStyle(c,null).marginRight),f.removeChild(g),h.innerHTML="",b}})}(),
// A method for quickly swapping in/out CSS properties to get correct calculations.
aa.swap=function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e};var
// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
Sa=/^(none|table(?!-c[ea]).+)/,Ta=new RegExp("^("+va+")(.*)$","i"),Ua=new RegExp("^([+-])=("+va+")","i"),Va={position:"absolute",visibility:"hidden",display:"block"},Wa={letterSpacing:0,fontWeight:400},Xa=["Webkit","O","Moz","ms"];aa.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=v(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
"float":"cssFloat"},
// Get and set the style property on a DOM Node
style:function(a,b,c,d){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var e,f,g,h=aa.camelCase(b),i=a.style;
// Check if we're setting a value
// gets hook for the prefixed version
// followed by the unprefixed version
// Check if we're setting a value
// If a hook was provided get the non-computed value from there
// convert relative number strings (+= or -=) to relative numbers. #7345
// Fixes bug #9237
// Make sure that null and NaN values aren't set. See: #7116
// If a number was passed in, add 'px' to the (except for certain CSS properties)
// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
// but it would mean to define eight (for every problematic property) identical functions
// If a hook was provided, use that value, otherwise just set the specified value
// Support: Chrome, Safari
// Setting style to blank string required to delete "style: x !important;"
return b=aa.cssProps[h]||(aa.cssProps[h]=x(i,h)),g=aa.cssHooks[b]||aa.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ua.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(aa.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||aa.cssNumber[h]||(c+="px"),Z.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=aa.camelCase(b);
// Return, converting to number if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// gets hook for the prefixed version
// followed by the unprefixed version
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
//convert "normal" to computed value
// Return, converting to number if forced or a qualifier was provided and val looks numeric
return b=aa.cssProps[h]||(aa.cssProps[h]=x(a.style,h)),g=aa.cssHooks[b]||aa.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wa&&(e=Wa[b]),""===c||c?(f=parseFloat(e),c===!0||aa.isNumeric(f)?f||0:e):e}}),aa.each(["height","width"],function(a,b){aa.cssHooks[b]={get:function(a,c,d){if(c)
// certain elements can have dimension info if we invisibly show them
// however, it must have a current display style that would benefit from this
return 0===a.offsetWidth&&Sa.test(aa.css(a,"display"))?aa.swap(a,Va,function(){return A(a,b,d)}):A(a,b,d)},set:function(a,c,d){var e=d&&Ra(a);return y(a,c,d?z(a,b,d,"border-box"===aa.css(a,"boxSizing",!1,e),e):0)}}}),
// Support: Android 2.3
aa.cssHooks.marginRight=w(Z.reliableMarginRight,function(a,b){if(b)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// Work around by temporarily setting element display to inline-block
return aa.swap(a,{display:"inline-block"},v,[a,"marginRight"])}),
// These hooks are used by animate to expand properties
aa.each({margin:"",padding:"",border:"Width"},function(a,b){aa.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+wa[d]+b]=f[d]||f[d-2]||f[0];return e}},Pa.test(a)||(aa.cssHooks[a+b].set=y)}),aa.fn.extend({css:function(a,b){return qa(this,function(a,b,c){var d,e,f={},g=0;if(aa.isArray(b)){for(d=Ra(a),e=b.length;g<e;g++)f[b[g]]=aa.css(a,b[g],!1,d);return f}return void 0!==c?aa.style(a,b,c):aa.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xa(this)?aa(this).show():aa(this).hide()})}}),aa.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(aa.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.options.duration?this.pos=b=aa.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;
// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=aa.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
aa.fx.step[a.prop]?aa.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[aa.cssProps[a.prop]]||aa.cssHooks[a.prop])?aa.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},
// Support: IE9
// Panic based approach to setting things on disconnected nodes
C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},aa.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},aa.fx=C.prototype.init,
// Back Compat <1.8 extension point
aa.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=new RegExp("^(?:([+-])=|)("+va+")([a-z%]*)$","i"),ab=/queueHooks$/,bb=[G],cb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_a.exec(b),f=e&&e[3]||(aa.cssNumber[a]?"":"px"),
// Starting value computation is required for potential unit mismatches
g=(aa.cssNumber[a]||"px"!==f&&+d)&&_a.exec(aa.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){
// Trust units reported by jQuery.css
f=f||g[3],
// Make sure we update the tween properties later on
e=e||[],
// Iteratively approximate from a nonzero starting point
g=+d||1;do
// If previous iteration zeroed out, double until we get *something*
// Use a string for doubling factor so we don't accidentally see scale as unchanged below
h=h||".5",
// Adjust and apply
g/=h,aa.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}
// Update tween properties
// If a +=/-= token was provided, we're doing a relative animation
return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};aa.Animation=aa.extend(I,{tweener:function(a,b){aa.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;d<e;d++)c=a[d],cb[c]=cb[c]||[],cb[c].unshift(b)},prefilter:function(a,b){b?bb.unshift(a):bb.push(a)}}),aa.speed=function(a,b,c){var d=a&&"object"==typeof a?aa.extend({},a):{complete:c||!c&&b||aa.isFunction(a)&&a,duration:a,easing:c&&b||b&&!aa.isFunction(b)&&b};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return d.duration=aa.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in aa.fx.speeds?aa.fx.speeds[d.duration]:aa.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){aa.isFunction(d.old)&&d.old.call(this),d.queue&&aa.dequeue(this,d.queue)},d},aa.fn.extend({fadeTo:function(a,b,c,d){
// show any hidden elements after setting opacity to 0
return this.filter(xa).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=aa.isEmptyObject(a),f=aa.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=I(this,aa.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||ra.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=aa.timers,g=ra.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
!b&&c||aa.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ra.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=aa.timers,g=d?d.length:0;
// look for any active animations, and finish them
for(
// enable finishing flag on private data
c.finish=!0,
// empty the queue first
aa.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// look for any animations in the old queue and finish them
for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// turn off finishing flag
delete c.finish})}}),aa.each(["toggle","show","hide"],function(a,b){var c=aa.fn[b];aa.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),
// Generate shortcuts for custom animations
aa.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){aa.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),aa.timers=[],aa.fx.tick=function(){var a,b=0,c=aa.timers;for(Ya=aa.now();b<c.length;b++)a=c[b],
// Checks the timer has not already been removed
a()||c[b]!==a||c.splice(b--,1);c.length||aa.fx.stop(),Ya=void 0},aa.fx.timer=function(a){aa.timers.push(a),a()?aa.fx.start():aa.timers.pop()},aa.fx.interval=13,aa.fx.start=function(){Za||(Za=setInterval(aa.fx.tick,aa.fx.interval))},aa.fx.stop=function(){clearInterval(Za),Za=null},aa.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
aa.fn.delay=function(a,b){return a=aa.fx?aa.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=$.createElement("input"),b=$.createElement("select"),c=b.appendChild($.createElement("option"));a.type="checkbox",
// Support: iOS 5.1, Android 4.x, Android 2.3
// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
Z.checkOn=""!==a.value,
// Must access the parent to make an option select properly
// Support: IE9, IE10
Z.optSelected=c.selected,
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
b.disabled=!0,Z.optDisabled=!c.disabled,
// Check if an input maintains its value after becoming a radio
// Support: IE9, IE10
a=$.createElement("input"),a.value="t",a.type="radio",Z.radioValue="t"===a.value}();var db,eb,fb=aa.expr.attrHandle;aa.fn.extend({attr:function(a,b){return qa(this,aa.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){aa.removeAttr(this,a)})}}),aa.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
// don't get/set attributes on text, comment and attribute nodes
if(a&&3!==f&&8!==f&&2!==f)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return typeof a.getAttribute===za?aa.prop(a,b,c):(1===f&&aa.isXMLDoc(a)||(b=b.toLowerCase(),d=aa.attrHooks[b]||(aa.expr.match.bool.test(b)?eb:db)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=aa.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void aa.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(na);if(f&&1===a.nodeType)while(c=f[e++])d=aa.propFix[c]||c,
// Boolean attributes get special treatment (#10870)
aa.expr.match.bool.test(c)&&(
// Set corresponding property to false
a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Z.radioValue&&"radio"===b&&aa.nodeName(a,"input")){
// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to default in case type is set after value during creation
var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),
// Hooks for boolean attributes
eb={set:function(a,b,c){
// Remove boolean attributes when set to false
return b===!1?aa.removeAttr(a,c):a.setAttribute(c,c),c}},aa.each(aa.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fb[b]||aa.find.attr;fb[b]=function(a,b,d){var e,f;
// Avoid an infinite loop by temporarily removing this function from the getter
return d||(f=fb[b],fb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fb[b]=f),e}});var gb=/^(?:input|select|textarea|button)$/i;aa.fn.extend({prop:function(a,b){return qa(this,aa.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[aa.propFix[a]||a]})}}),aa.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
// don't get/set properties on text, comment and attribute nodes
if(a&&3!==g&&8!==g&&2!==g)
// Fix name and attach hooks
return f=1!==g||!aa.isXMLDoc(a),f&&(b=aa.propFix[b]||b,e=aa.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gb.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),
// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
Z.optSelected||(aa.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),aa.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){aa.propFix[this.toLowerCase()]=this});var hb=/[\t\r\n\f]/g;aa.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(aa.isFunction(a))return this.each(function(b){aa(this).addClass(a.call(this,b,this.className))});if(h)for(
// The disjunction here is for better compressibility (see removeClass)
b=(a||"").match(na)||[];i<j;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");
// only assign if different to avoid unneeded rendering.
g=aa.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(aa.isFunction(a))return this.each(function(b){aa(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(na)||[];i<j;i++)if(c=this[i],
// This expression is here for better compressibility (see addClass)
d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):"")){f=0;while(e=b[f++])
// Remove *all* instances
while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");
// only assign if different to avoid unneeded rendering.
g=a?aa.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):aa.isFunction(a)?this.each(function(c){aa(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c){
// toggle individual class names
var b,d=0,e=aa(this),f=a.match(na)||[];while(b=f[d++])
// check each className given, space separated list
e.hasClass(b)?e.removeClass(b):e.addClass(b)}else c!==za&&"boolean"!==c||(this.className&&
// store className if set
ra.set(this,"__className__",this.className),
// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.className=this.className||a===!1?"":ra.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;c<d;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hb," ").indexOf(b)>=0)return!0;return!1}});var ib=/\r/g;aa.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=aa.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,aa(this).val()):a,
// Treat null/undefined as ""; convert numbers to string
null==e?e="":"number"==typeof e?e+="":aa.isArray(e)&&(e=aa.map(e,function(a){return null==a?"":a+""})),b=aa.valHooks[this.type]||aa.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)
// handle most common string cases
// handle cases where value is null/undef or number
return b=aa.valHooks[e.type]||aa.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ib,""):null==c?"":c)}}}),aa.extend({valHooks:{select:{get:function(a){
// Loop through all the selected options
for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)
// IE6-9 doesn't update selected after form reset (#2551)
if(c=d[i],(c.selected||i===e)&&(
// Don't return options that are disabled or in a disabled optgroup
Z.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!aa.nodeName(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
b=aa(c).val(),f)return b;
// Multi-Selects return an array
g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=aa.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=aa.inArray(aa(d).val(),f)>=0)&&(c=!0);
// force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),f}}}}),
// Radios and checkboxes getter/setter
aa.each(["radio","checkbox"],function(){aa.valHooks[this]={set:function(a,b){if(aa.isArray(b))return a.checked=aa.inArray(aa(a).val(),b)>=0}},Z.checkOn||(aa.valHooks[this].get=function(a){
// Support: Webkit
// "" is returned instead of "on" if a value isn't specified
return null===a.getAttribute("value")?"on":a.value})}),
// Return jQuery for attributes-only inclusion
aa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){
// Handle event binding
aa.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),aa.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jb=aa.now(),kb=/\?/;
// Support: Android 2.3
// Workaround failure to string-cast null input
aa.parseJSON=function(a){return JSON.parse(a+"")},
// Cross-browser xml parsing
aa.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;
// Support: IE9
try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return b&&!b.getElementsByTagName("parsererror").length||aa.error("Invalid XML: "+a),b};var
// Document location
lb,mb,nb=/#.*$/,ob=/([?&])_=[^&]*/,pb=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
qb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rb=/^(?:GET|HEAD)$/,sb=/^\/\//,tb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
ub={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
vb={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
wb="*/".concat("*");
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try{mb=location.href}catch(xb){
// Use the href attribute of an A element
// since IE will modify it given document.location
mb=$.createElement("a"),mb.href="",mb=mb.href}
// Segment location into parts
lb=tb.exec(mb.toLowerCase())||[],aa.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:mb,type:"GET",isLocal:qb.test(lb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":wb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":aa.parseJSON,
// Parse text as xml
"text xml":aa.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){
// Building a settings object
// Extending ajaxSettings
return b?L(L(a,aa.ajaxSettings),b):L(aa.ajaxSettings,a)},ajaxPrefilter:J(ub),ajaxTransport:J(vb),
// Main method
ajax:function(a,b){
// Callback for when everything is done
function c(a,b,c,g){var i,k,r,s,u,w=b;
// Called once
2!==t&&(
// State is "done" now
t=2,
// Clear timeout if it exists
h&&clearTimeout(h),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
d=void 0,
// Cache response headers
f=g||"",
// Set readyState
v.readyState=a>0?4:0,
// Determine if successful
i=a>=200&&a<300||304===a,
// Get response data
c&&(s=M(l,v,c)),
// Convert no matter what (that way responseXXX fields are always set)
s=N(l,s,v,i),
// If successful, handle type chaining
i?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(aa.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(aa.etag[e]=u)),
// if no content
204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(
// We extract error from statusText
// then normalize statusText and status for non-aborts
r=w,!a&&w||(w="error",a<0&&(a=0))),
// Set data for the fake xhr object
v.status=a,v.statusText=(b||w)+"",
// Success/Error
i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),
// Status-dependent callbacks
v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),
// Complete
p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),
// Handle the global AJAX counter
--aa.active||aa.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof a&&(b=a,a=void 0),
// Force options to be an object
b=b||{};var d,
// URL without anti-cache param
e,
// Response headers
f,g,
// timeout handle
h,
// Cross-domain detection vars
i,
// To know if global events are to be dispatched
j,
// Loop variable
k,
// Create the final options object
l=aa.ajaxSetup({},b),
// Callbacks context
m=l.context||l,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
n=l.context&&(m.nodeType||m.jquery)?aa(m):aa.event,
// Deferreds
o=aa.Deferred(),p=aa.Callbacks("once memory"),
// Status-dependent callbacks
q=l.statusCode||{},
// Headers (they are sent all at once)
r={},s={},
// The jqXHR state
t=0,
// Default abort message
u="canceled",
// Fake xhr
v={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(2===t){if(!g){g={};while(b=pb.exec(f))g[b[1].toLowerCase()]=b[2]}b=g[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return 2===t?f:null},
// Caches the header
setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return t||(l.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(t<2)for(b in a)
// Lazy-add the new callback in a way that preserves old ones
q[b]=[q[b],a[b]];else
// Execute the appropriate callbacks
v.always(a[v.status]);return this},
// Cancel the request
abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
l.url=((a||l.url||mb)+"").replace(nb,"").replace(sb,lb[1]+"//"),
// Alias method option to type as per ticket #12004
l.type=b.method||b.type||l.method||l.type,
// Extract dataTypes list
l.dataTypes=aa.trim(l.dataType||"*").toLowerCase().match(na)||[""],
// A cross-domain request is in order when we have a protocol:host:port mismatch
null==l.crossDomain&&(i=tb.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lb[1]&&i[2]===lb[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(lb[3]||("http:"===lb[1]?"80":"443")))),
// Convert data if not already a string
l.data&&l.processData&&"string"!=typeof l.data&&(l.data=aa.param(l.data,l.traditional)),
// Apply prefilters
K(ub,l,b,v),2===t)return v;
// We can fire global events as of now if asked to
j=l.global,
// Watch for a new set of requests
j&&0===aa.active++&&aa.event.trigger("ajaxStart"),
// Uppercase the type
l.type=l.type.toUpperCase(),
// Determine if request has content
l.hasContent=!rb.test(l.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
e=l.url,
// More options handling for requests with no content
l.hasContent||(
// If data is available, append data to url
l.data&&(e=l.url+=(kb.test(e)?"&":"?")+l.data,
// #9682: remove data so that it's not used in an eventual retry
delete l.data),
// Add anti-cache in url if needed
l.cache===!1&&(l.url=ob.test(e)?
// If there is already a '_' parameter, set its value
e.replace(ob,"$1_="+jb++):
// Otherwise add one to the end
e+(kb.test(e)?"&":"?")+"_="+jb++)),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
l.ifModified&&(aa.lastModified[e]&&v.setRequestHeader("If-Modified-Since",aa.lastModified[e]),aa.etag[e]&&v.setRequestHeader("If-None-Match",aa.etag[e])),
// Set the correct header, if data is being sent
(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),
// Set the Accepts header for the server, depending on the dataType
v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+wb+"; q=0.01":""):l.accepts["*"]);
// Check for headers option
for(k in l.headers)v.setRequestHeader(k,l.headers[k]);
// Allow custom headers/mimetypes and early abort
if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))
// Abort if not done already and return
return v.abort();
// aborting is no longer a cancellation
u="abort";
// Install callbacks on deferreds
for(k in{success:1,error:1,complete:1})v[k](l[k]);
// If no transport, we auto-abort
if(
// Get transport
d=K(vb,l,b,v)){v.readyState=1,
// Send global event
j&&n.trigger("ajaxSend",[v,l]),
// Timeout
l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){
// Propagate exception as error if not done
if(!(t<2))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return aa.get(a,b,c,"json")},getScript:function(a,b){return aa.get(a,void 0,b,"script")}}),aa.each(["get","post"],function(a,b){aa[b]=function(a,c,d,e){
// shift arguments if data argument was omitted
return aa.isFunction(c)&&(e=e||d,d=c,c=void 0),aa.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),
// Attach a bunch of functions for handling common AJAX events
aa.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){aa.fn[b]=function(a){return this.on(b,a)}}),aa._evalUrl=function(a){return aa.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},aa.fn.extend({wrapAll:function(a){var b;
// The elements to wrap the target around
return aa.isFunction(a)?this.each(function(b){aa(this).wrapAll(a.call(this,b))}):(this[0]&&(b=aa(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return aa.isFunction(a)?this.each(function(b){aa(this).wrapInner(a.call(this,b))}):this.each(function(){var b=aa(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=aa.isFunction(a);return this.each(function(c){aa(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){aa.nodeName(this,"body")||aa(this).replaceWith(this.childNodes)}).end()}}),aa.expr.filters.hidden=function(a){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return a.offsetWidth<=0&&a.offsetHeight<=0},aa.expr.filters.visible=function(a){return!aa.expr.filters.hidden(a)};var yb=/%20/g,zb=/\[\]$/,Ab=/\r?\n/g,Bb=/^(?:submit|button|image|reset|file)$/i,Cb=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
aa.param=function(a,b){var c,d=[],e=function(a,b){
// If value is a function, invoke it and return its value
b=aa.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===b&&(b=aa.ajaxSettings&&aa.ajaxSettings.traditional),aa.isArray(a)||a.jquery&&!aa.isPlainObject(a))
// Serialize the form elements
aa.each(a,function(){e(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a)O(c,a[c],b,e);
// Return the resulting serialization
return d.join("&").replace(yb,"+")},aa.fn.extend({serialize:function(){return aa.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=aa.prop(this,"elements");return a?aa.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!aa(this).is(":disabled")&&Cb.test(this.nodeName)&&!Bb.test(a)&&(this.checked||!ya.test(a))}).map(function(a,b){var c=aa(this).val();return null==c?null:aa.isArray(c)?aa.map(c,function(a){return{name:b.name,value:a.replace(Ab,"\r\n")}}):{name:b.name,value:c.replace(Ab,"\r\n")}}).get()}}),aa.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Db=0,Eb={},Fb={
// file protocol always yields status code 0, assume 200
0:200,
// Support: IE9
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Gb=aa.ajaxSettings.xhr();
// Support: IE9
// Open requests must be manually aborted on unload (#5280)
a.ActiveXObject&&aa(a).on("unload",function(){for(var a in Eb)Eb[a]()}),Z.cors=!!Gb&&"withCredentials"in Gb,Z.ajax=Gb=!!Gb,aa.ajaxTransport(function(a){var b;
// Cross domain only allowed if supported through XMLHttpRequest
if(Z.cors||Gb&&!a.crossDomain)return{send:function(c,d){var e,f=a.xhr(),g=++Db;
// Apply custom fields if provided
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];
// Override mime type if needed
a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(e in c)f.setRequestHeader(e,c[e]);
// Callback
b=function(a){return function(){b&&(delete Eb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(
// file: protocol always yields status 0; see #8605, #14207
f.status,f.statusText):d(Fb[f.status]||f.status,f.statusText,
// Support: IE9
// Accessing binary-data responseText throws an exception
// (#11426)
"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},
// Listen to events
f.onload=b(),f.onerror=b("error"),
// Create the abort callback
b=Eb[g]=b("abort"),
// Do send the request
// This may raise an exception which is actually
// handled in jQuery.ajax (so no try/catch here)
f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}}),
// Install script dataType
aa.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return aa.globalEval(a),a}}}),
// Handle cache's special case and crossDomain
aa.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),
// Bind script tag hack transport
aa.ajaxTransport("script",function(a){
// This transport only deals with cross domain requests
if(a.crossDomain){var b,c;return{send:function(d,e){b=aa("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),$.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hb=[],Ib=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
aa.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hb.pop()||aa.expando+"_"+jb++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
aa.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ib.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ib.test(b.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(h||"jsonp"===b.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return e=b.jsonpCallback=aa.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ib,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||aa.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){
// Restore preexisting value
a[e]=f,
// Save back as free
b[e]&&(
// make sure that re-using the options doesn't screw things around
b.jsonpCallback=c.jsonpCallback,
// save the callback name for future use
Hb.push(e)),
// Call if it was a function and we have a response
g&&aa.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),
// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
aa.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||$;var d=ga.exec(a),e=!c&&[];
// Single tag
// Single tag
return d?[b.createElement(d[1])]:(d=aa.buildFragment([a],b,e),e&&e.length&&aa(e).remove(),aa.merge([],d.childNodes))};
// Keep a copy of the old load method
var Jb=aa.fn.load;/**
 * Load a url into a page
 */
aa.fn.load=function(a,b,c){if("string"!=typeof a&&Jb)return Jb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>=0&&(d=a.slice(h),a=a.slice(0,h)),aa.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&aa.ajax({url:a,
// if "type" variable is undefined, then "GET" method will be used
type:e,dataType:"html",data:b}).done(function(a){
// Save response for use in complete callback
f=arguments,g.html(d?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
aa("<div>").append(aa.parseHTML(a)).find(d):
// Otherwise use the full result
a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},aa.expr.filters.animated=function(a){return aa.grep(aa.timers,function(b){return a===b.elem}).length};var Kb=a.document.documentElement;aa.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=aa.css(a,"position"),l=aa(a),m={};
// Set position first, in-case top/left are set even on static elem
"static"===k&&(a.style.position="relative"),h=l.offset(),f=aa.css(a,"top"),i=aa.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,
// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),aa.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},aa.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){aa.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return b=f.documentElement,aa.contains(b,d)?(typeof d.getBoundingClientRect!==za&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
// We assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===aa.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),aa.nodeName(a[0],"html")||(d=a.offset()),d.top+=aa.css(a[0],"borderTopWidth",!0),d.left+=aa.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-aa.css(c,"marginTop",!0),left:b.left-d.left-aa.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Kb;while(a&&!aa.nodeName(a,"html")&&"static"===aa.css(a,"position"))a=a.offsetParent;return a||Kb})}}),
// Create scrollLeft and scrollTop methods
aa.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;aa.fn[b]=function(e){return qa(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
aa.each(["top","left"],function(a,b){aa.cssHooks[b]=w(Z.pixelPosition,function(a,c){if(c)
// if curCSS returns percentage, fallback to offset
return c=v(a,b),Qa.test(c)?aa(a).position()[b]+"px":c})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
aa.each({Height:"height",Width:"width"},function(a,b){aa.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
// margin is only for outerHeight, outerWidth
aa.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qa(this,function(b,c,d){var e;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return aa.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?aa.css(b,c,g):aa.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),
// The number of elements contained in the matched element set
aa.fn.size=function(){return this.length},aa.fn.andSelf=aa.fn.addBack,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
"function"==typeof define&&define.amd&&define("jquery",[],function(){return aa});var
// Map over jQuery in case of overwrite
Lb=a.jQuery,
// Map over the $ in case of overwrite
Mb=a.$;
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return aa.noConflict=function(b){return a.$===aa&&(a.$=Mb),b&&a.jQuery===aa&&(a.jQuery=Lb),aa},typeof b===za&&(a.jQuery=a.$=aa),aa}),
// CodeMirror is the only global var we claim
window.CodeMirror=function(){"use strict";
// CONSTRUCTOR
function a(c,d){if(!(this instanceof a))return new a(c,d);this.options=d=d||{};
// Determine effective options based on given values and defaults.
for(var e in te)!d.hasOwnProperty(e)&&te.hasOwnProperty(e)&&(d[e]=te[e]);n(d);var f="string"==typeof d.value?0:d.value.first,g=this.display=b(c,f);g.wrapper.CodeMirror=this,k(this),d.autofocus&&!_d&&pa(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new dd},i(this),d.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap");var h=d.value;"string"==typeof h&&(h=new Ie(d.value,d.mode)),ha(this,wc)(this,h),
// Override magic textarea content restore that IE sometimes does
// on our hidden textarea on reload
Ld&&setTimeout(md(oa,this,!0),20),sa(this);
// IE throws unspecified error in certain cases, when
// trying to access activeElement before onload
var j;try{j=document.activeElement==g.input}catch(l){}j||d.autofocus&&!_d?setTimeout(md(La,this),20):Ma(this),ha(this,function(){for(var a in se)se.propertyIsEnumerable(a)&&se[a](this,d[a],ue);for(var b=0;b<ye.length;++b)ye[b](this)})()}
// DISPLAY CONSTRUCTOR
function b(a,b){var c={},d=c.input=qd("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
// if border: 0; -- iOS fails to open keyboard (issue #1287)
// Wraps and hides input textarea
// The actual fake scrollbars.
// DIVs containing the selection and the actual code
// Blinky cursor, and element used to ensure cursor fits at the end of a line
// Secondary cursor, shown when on a 'jump' in bi-directional text
// Used to measure text size
// Wraps everything that needs to exist inside the vertically-padded coordinate system
// Moved around its parent to cover visible view
// Set to the height of the text, causes scrolling
// D is needed because behavior of elts with overflow: auto and padding is inconsistent across browsers
// Will contain the gutters, if any
// Provides scrolling
// The element in which the editor lives.
// Work around IE7 z-index bug
// Needed to hide big blue blinking cursor on Mobile Safari
// Needed to handle Tab key in KHTML
// Current visible range (may be bigger than the view window).
// Used to only resize the line number gutter when necessary (when
// the amount of lines crosses a boundary that makes its width change)
// See readInput and resetInput
// Set to true when a non-horizontal-scrolling widget is added. As
// an optimization, widget aligning is skipped when d is false.
// Flag that indicates whether we currently expect input to appear
// (after some event like 'keypress' or 'input') and are polling
// intensively.
// Self-resetting timeout for the poller
// Tracks when resetInput has punted to just putting a short
// string instead of the (large) selection.
// Tracks the maximum line length so that the horizontal scrollbar
// can be kept static when scrolling.
// Used for measuring wheel scrolling granularity
return Rd?d.style.width="1000px":d.setAttribute("wrap","off"),$d&&(d.style.border="1px solid black"),d.setAttribute("autocorrect","off"),d.setAttribute("autocapitalize","off"),d.setAttribute("spellcheck","false"),c.inputDiv=qd("div",[d],null,"overflow: hidden; position: relative; width: 3px; height: 0px;"),c.scrollbarH=qd("div",[qd("div",null,null,"height: 1px")],"CodeMirror-hscrollbar"),c.scrollbarV=qd("div",[qd("div",null,null,"width: 1px")],"CodeMirror-vscrollbar"),c.scrollbarFiller=qd("div",null,"CodeMirror-scrollbar-filler"),c.gutterFiller=qd("div",null,"CodeMirror-gutter-filler"),c.lineDiv=qd("div",null,"CodeMirror-code"),c.selectionDiv=qd("div",null,null,"position: relative; z-index: 1"),c.cursor=qd("div"," ","CodeMirror-cursor"),c.otherCursor=qd("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"),c.measure=qd("div",null,"CodeMirror-measure"),c.lineSpace=qd("div",[c.measure,c.selectionDiv,c.lineDiv,c.cursor,c.otherCursor],null,"position: relative; outline: none"),c.mover=qd("div",[qd("div",[c.lineSpace],"CodeMirror-lines")],null,"position: relative"),c.sizer=qd("div",[c.mover],"CodeMirror-sizer"),c.heightForcer=qd("div",null,null,"position: absolute; height: "+Ne+"px; width: 1px;"),c.gutters=qd("div",null,"CodeMirror-gutters"),c.lineGutter=null,c.scroller=qd("div",[c.sizer,c.heightForcer,c.gutters],"CodeMirror-scroll"),c.scroller.setAttribute("tabIndex","-1"),c.wrapper=qd("div",[c.inputDiv,c.scrollbarH,c.scrollbarV,c.scrollbarFiller,c.gutterFiller,c.scroller],"CodeMirror"),Md&&(c.gutters.style.zIndex=-1,c.scroller.style.paddingRight=0),a.appendChild?a.appendChild(c.wrapper):a(c.wrapper),$d&&(d.style.width="0px"),Rd||(c.scroller.draggable=!0),Wd?(c.inputDiv.style.height="1px",c.inputDiv.style.position="absolute"):Md&&(c.scrollbarH.style.minWidth=c.scrollbarV.style.minWidth="18px"),c.viewOffset=c.lastSizeC=0,c.showingFrom=c.showingTo=b,c.lineNumWidth=c.lineNumInnerWidth=c.lineNumChars=null,c.prevInput="",c.alignWidgets=!1,c.pollingFast=!1,c.poll=new dd,c.cachedCharWidth=c.cachedTextHeight=c.cachedPaddingH=null,c.measureLineCache=[],c.measureLineCachePos=0,c.inaccurateSelection=!1,c.maxLine=null,c.maxLineLength=0,c.maxLineChanged=!1,c.wheelDX=c.wheelDY=c.wheelStartX=c.wheelStartY=null,c}
// STATE UPDATES
// Used to get the editor into a consistent state again when options change.
function c(b){b.doc.mode=a.getMode(b.options,b.doc.modeOption),d(b)}function d(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null)}),a.doc.frontier=a.doc.first,H(a,100),a.state.modeGen++,a.curOp&&ka(a)}function e(a){a.options.lineWrapping?(a.display.wrapper.className+=" CodeMirror-wrap",a.display.sizer.style.minWidth=""):(a.display.wrapper.className=a.display.wrapper.className.replace(" CodeMirror-wrap",""),m(a)),g(a),ka(a),V(a),setTimeout(function(){o(a)},100)}function f(a){var b=da(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/ea(a.display)-3);return function(e){return Zb(a.doc,e)?0:c?(Math.ceil(e.text.length/d)||1)*b:b}}function g(a){var b=a.doc,c=f(a);b.iter(function(a){var b=c(a);b!=a.height&&Ac(a,b)})}function h(a){var b=Be[a.options.keyMap],c=b.style;a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-keymap-\S+/g,"")+(c?" cm-keymap-"+c:"")}function i(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-"),V(a)}function j(a){k(a),ka(a),setTimeout(function(){q(a)},20)}function k(a){var b=a.display.gutters,c=a.options.gutters;rd(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(qd("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none"}function l(a,b){if(0==b.height)return 0;var c,d=b.text.length,e=b;while(c=Vb(e)){var f=c.find();e=xc(a,f.from.line),d+=f.from.ch-f.to.ch}e=b;while(c=Wb(e)){var f=c.find();d-=e.text.length-f.from.ch,e=xc(a,f.to.line),d+=e.text.length-f.to.ch}return d}function m(a){var b=a.display,c=a.doc;b.maxLine=xc(c,c.first),b.maxLineLength=l(c,b.maxLine),b.maxLineChanged=!0,c.iter(function(a){var d=l(c,a);d>b.maxLineLength&&(b.maxLineLength=d,b.maxLine=a)})}
// Make sure the gutters options contains the element
// "CodeMirror-linenumbers" when the lineNumbers option is true.
function n(a){var b=id(a.gutters,"CodeMirror-linenumbers");b==-1&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):b>-1&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}
// SCROLLBARS
// Re-synchronize the fake scrollbars with the actual size of the
// content. Optionally force a scrollTop.
function o(a){var b=a.display,c=a.doc.height,d=c+M(b);b.sizer.style.minHeight=b.heightForcer.style.top=d+"px",b.gutters.style.height=Math.max(d,b.scroller.clientHeight-Ne)+"px";var e=Math.max(d,b.scroller.scrollHeight),f=b.scroller.scrollWidth>b.scroller.clientWidth+1,g=e>b.scroller.clientHeight+1;g?(b.scrollbarV.style.display="block",b.scrollbarV.style.bottom=f?wd(b.measure)+"px":"0",
// A bug in IE8 can cause this value to be negative, so guard it.
b.scrollbarV.firstChild.style.height=Math.max(0,e-b.scroller.clientHeight+b.scrollbarV.clientHeight)+"px"):(b.scrollbarV.style.display="",b.scrollbarV.firstChild.style.height="0"),f?(b.scrollbarH.style.display="block",b.scrollbarH.style.right=g?wd(b.measure)+"px":"0",b.scrollbarH.firstChild.style.width=b.scroller.scrollWidth-b.scroller.clientWidth+b.scrollbarH.clientWidth+"px"):(b.scrollbarH.style.display="",b.scrollbarH.firstChild.style.width="0"),f&&g?(b.scrollbarFiller.style.display="block",b.scrollbarFiller.style.height=b.scrollbarFiller.style.width=wd(b.measure)+"px"):b.scrollbarFiller.style.display="",f&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(b.gutterFiller.style.display="block",b.gutterFiller.style.height=wd(b.measure)+"px",b.gutterFiller.style.width=b.gutters.offsetWidth+"px"):b.gutterFiller.style.display="",Xd&&0===wd(b.measure)&&(b.scrollbarV.style.minWidth=b.scrollbarH.style.minHeight=Yd?"18px":"12px",b.scrollbarV.style.pointerEvents=b.scrollbarH.style.pointerEvents="none")}function p(a,b,c){var d=a.scroller.scrollTop,e=a.wrapper.clientHeight;"number"==typeof c?d=c:c&&(d=c.top,e=c.bottom-c.top),d=Math.floor(d-L(a));var f=Math.ceil(d+e);return{from:Cc(b,d),to:Cc(b,f)}}
// LINE NUMBERS
function q(a){var b=a.display;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var c=t(b)-b.scroller.scrollLeft+a.doc.scrollLeft,d=b.gutters.offsetWidth,e=c+"px",f=b.lineDiv.firstChild;f;f=f.nextSibling)if(f.alignable)for(var g=0,h=f.alignable;g<h.length;++g)h[g].style.left=e;a.options.fixedGutter&&(b.gutters.style.left=c+d+"px")}}function r(a){if(!a.options.lineNumbers)return!1;var b=a.doc,c=s(a.options,b.first+b.size-1),d=a.display;if(c.length!=d.lineNumChars){var e=d.measure.appendChild(qd("div",[qd("div",c)],"CodeMirror-linenumber CodeMirror-gutter-elt")),f=e.firstChild.offsetWidth,g=e.offsetWidth-f;return d.lineGutter.style.width="",d.lineNumInnerWidth=Math.max(f,d.lineGutter.offsetWidth-g),d.lineNumWidth=d.lineNumInnerWidth+g,d.lineNumChars=d.lineNumInnerWidth?c.length:-1,d.lineGutter.style.width=d.lineNumWidth+"px",!0}return!1}function s(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function t(a){return ud(a.scroller).left-ud(a.sizer).left}
// DISPLAY DRAWING
function u(a,b,c,d){for(var e,f=a.display.showingFrom,g=a.display.showingTo,h=p(a.display,a.doc,c),i=!0;;i=!1){var j=a.display.scroller.clientWidth;if(!v(a,b,h,d))break;if(e=!0,b=[],D(a),o(a),i&&a.options.lineWrapping&&j!=a.display.scroller.clientWidth)d=!0;else if(d=!1,
// Clip forced viewport to actual scrollable area
c&&(c=Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,"number"==typeof c?c:c.top)),h=p(a.display,a.doc,c),h.from>=a.display.showingFrom&&h.to<=a.display.showingTo)break}return e&&($c(a,"update",a),a.display.showingFrom==f&&a.display.showingTo==g||$c(a,"viewportChange",a,a.display.showingFrom,a.display.showingTo)),e}
// Uses a set of changes plus the current scroll position to
// determine which DOM updates have to be made, and makes the
// updates.
function v(a,b,c,d){var e=a.display,f=a.doc;if(!e.wrapper.offsetWidth)return e.showingFrom=e.showingTo=f.first,void(e.viewOffset=0);
// Bail out if the visible area is already rendered and nothing changed.
if(!(!d&&0==b.length&&c.from>e.showingFrom&&c.to<e.showingTo)){r(a)&&(b=[{from:f.first,to:f.first+f.size}]);var g=e.sizer.style.marginLeft=e.gutters.offsetWidth+"px";e.scrollbarH.style.left=a.options.fixedGutter?g:"0";
// Used to determine which lines need their line numbers updated
var h=1/0;if(a.options.lineNumbers)for(var i=0;i<b.length;++i)b[i].diff&&b[i].from<h&&(h=b[i].from);var j=f.first+f.size,k=Math.max(c.from-a.options.viewportMargin,f.first),l=Math.min(j,c.to+a.options.viewportMargin);if(e.showingFrom<k&&k-e.showingFrom<20&&(k=Math.max(f.first,e.showingFrom)),e.showingTo>l&&e.showingTo-l<20&&(l=Math.min(j,e.showingTo)),je){k=Bc(Yb(f,xc(f,k)));while(l<j&&Zb(f,xc(f,l)))++l}
// Create a range of theoretically intact lines, and punch holes
// in that using the change info.
var m=[{from:Math.max(e.showingFrom,f.first),to:Math.min(e.showingTo,j)}];
// When merged lines are present, we might have to reduce the
// intact ranges because changes in continued fragments of the
// intact lines do require the lines to be redrawn.
if(m=m[0].from>=m[0].to?[]:y(m,b),je)for(var i=0;i<m.length;++i){var n,o=m[i];while(n=Wb(xc(f,o.to-1))){var p=n.find().from.line;if(!(p>o.from)){m.splice(i--,1);break}o.to=p}}for(var q=0,i=0;i<m.length;++i){var o=m[i];o.from<k&&(o.from=k),o.to>l&&(o.to=l),o.from>=o.to?m.splice(i--,1):q+=o.to-o.from}if(!d&&q==l-k&&k==e.showingFrom&&l==e.showingTo)return void x(a);m.sort(function(a,b){return a.from-b.from});
// Avoid crashing on IE's "unspecified error" when in iframes
try{var s=document.activeElement}catch(t){}q<.7*(l-k)&&(e.lineDiv.style.display="none"),A(a,k,l,m,h),e.lineDiv.style.display="",s&&document.activeElement!=s&&s.offsetHeight&&s.focus();var u=k!=e.showingFrom||l!=e.showingTo||e.lastSizeC!=e.wrapper.clientHeight;
// This is just a bogus formula that detects when the editor is
// resized or the font size changes.
return u&&(e.lastSizeC=e.wrapper.clientHeight,H(a,400)),e.showingFrom=k,e.showingTo=l,e.gutters.style.height="",w(a),x(a),!0}}function w(a){for(var b,c=a.display,d=c.lineDiv.offsetTop,e=c.lineDiv.firstChild;e;e=e.nextSibling)if(e.lineObj){if(Md){var f=e.offsetTop+e.offsetHeight;b=f-d,d=f}else{var g=ud(e);b=g.bottom-g.top}var h=e.lineObj.height-b;if(b<2&&(b=da(c)),h>.001||h<-.001){Ac(e.lineObj,b);var i=e.lineObj.widgets;if(i)for(var j=0;j<i.length;++j)i[j].height=i[j].node.offsetHeight}}}function x(a){var b=a.display.viewOffset=Dc(a,xc(a.doc,a.display.showingFrom));
// Position the mover div to align with the current virtual scroll position
a.display.mover.style.top=b+"px"}function y(a,b){for(var c=0,d=b.length||0;c<d;++c){for(var e=b[c],f=[],g=e.diff||0,h=0,i=a.length;h<i;++h){var j=a[h];e.to<=j.from&&e.diff?f.push({from:j.from+g,to:j.to+g}):e.to<=j.from||e.from>=j.to?f.push(j):(e.from>j.from&&f.push({from:j.from,to:e.from}),e.to<j.to&&f.push({from:e.to+g,to:j.to+g}))}a=f}return a}function z(a){for(var b=a.display,c={},d={},e=b.gutters.firstChild,f=0;e;e=e.nextSibling,++f)c[a.options.gutters[f]]=e.offsetLeft,d[a.options.gutters[f]]=e.offsetWidth;return{fixedPos:t(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function A(a,b,c,d,e){function f(b){var c=b.nextSibling;return Rd&&ae&&a.display.currentWheelTarget==b?(b.style.display="none",b.lineObj=null):b.parentNode.removeChild(b),c}var g=z(a),h=a.display,i=a.options.lineNumbers;d.length||Rd&&a.display.currentWheelTarget||rd(h.lineDiv);var j=h.lineDiv,k=j.firstChild,l=d.shift(),m=b;a.doc.iter(b,c,function(b){if(l&&l.to==m&&(l=d.shift()),Zb(a.doc,b)){if(0!=b.height&&Ac(b,0),b.widgets&&k&&k.previousSibling)for(var c=0;c<b.widgets.length;++c){var h=b.widgets[c];if(h.showIfHidden){var n=k.previousSibling;if(/pre/i.test(n.nodeName)){var o=qd("div",null,null,"position: relative");n.parentNode.replaceChild(o,n),o.appendChild(n),n=o}var p=n.appendChild(qd("div",[h.node],"CodeMirror-linewidget"));h.handleMouseEvents||(p.ignoreEvents=!0),C(h,p,n,g)}}}else if(l&&l.from<=m&&l.to>m){
// This line is intact. Skip to the actual node. Update its
// line number if needed.
while(k.lineObj!=b)k=f(k);i&&e<=m&&k.lineNumber&&td(k.lineNumber,s(a.options,m)),k=k.nextSibling}else{
// For lines with widgets, make an attempt to find and reuse
// the existing element, so that widgets aren't needlessly
// removed and re-inserted into the dom
if(b.widgets)for(var q,r=0,t=k;t&&r<20;++r,t=t.nextSibling)if(t.lineObj==b&&/div/i.test(t.nodeName)){q=t;break}
// This line needs to be generated.
var u=B(a,b,m,g,q);if(u!=q)j.insertBefore(u,k);else{while(k!=q)k=f(k);k=k.nextSibling}u.lineObj=b}++m});while(k)k=f(k)}function B(a,b,c,d,e){var f,g=lc(a,b),h=g.pre,i=b.gutterMarkers,j=a.display,k=g.bgClass?g.bgClass+" "+(b.bgClass||""):b.bgClass;if(!(a.options.lineNumbers||i||k||b.wrapClass||b.widgets))return h;
// Lines with gutter elements, widgets or a background class need
// to be wrapped again, and have the extra elements added to the
// wrapper div
if(e){e.alignable=null;for(var l,m=!0,n=0,o=null,p=e.firstChild;p;p=l)if(l=p.nextSibling,/\bCodeMirror-linewidget\b/.test(p.className)){for(var q=0;q<b.widgets.length;++q){var r=b.widgets[q];if(r.node==p.firstChild){r.above||o||(o=p),C(r,p,e,d),++n;break}}if(q==b.widgets.length){m=!1;break}}else e.removeChild(p);e.insertBefore(h,o),m&&n==b.widgets.length&&(f=e,e.className=b.wrapClass||"")}if(f||(f=qd("div",null,b.wrapClass,"position: relative"),f.appendChild(h)),
// Kludge to make sure the styled element lies behind the selection (by z-index)
k&&f.insertBefore(qd("div",null,k+" CodeMirror-linebackground"),f.firstChild),a.options.lineNumbers||i){var t=f.insertBefore(qd("div",null,"CodeMirror-gutter-wrapper","position: absolute; left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px"),h);if(a.options.fixedGutter&&(f.alignable||(f.alignable=[])).push(t),!a.options.lineNumbers||i&&i["CodeMirror-linenumbers"]||(f.lineNumber=t.appendChild(qd("div",s(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+j.lineNumInnerWidth+"px"))),i)for(var u=0;u<a.options.gutters.length;++u){var v=a.options.gutters[u],w=i.hasOwnProperty(v)&&i[v];w&&t.appendChild(qd("div",[w],"CodeMirror-gutter-elt","left: "+d.gutterLeft[v]+"px; width: "+d.gutterWidth[v]+"px"))}}if(Md&&(f.style.zIndex=2),b.widgets&&f!=e)for(var q=0,x=b.widgets;q<x.length;++q){var r=x[q],y=qd("div",[r.node],"CodeMirror-linewidget");r.handleMouseEvents||(y.ignoreEvents=!0),C(r,y,f,d),r.above?f.insertBefore(y,a.options.lineNumbers&&0!=b.height?t:h):f.appendChild(y),$c(r,"redraw")}return f}function C(a,b,c,d){if(a.noHScroll){(c.alignable||(c.alignable=[])).push(b);var e=d.wrapperWidth;b.style.left=d.fixedPos+"px",a.coverGutter||(e-=d.gutterTotalWidth,b.style.paddingLeft=d.gutterTotalWidth+"px"),b.style.width=e+"px"}a.coverGutter&&(b.style.zIndex=5,b.style.position="relative",a.noHScroll||(b.style.marginLeft=-d.gutterTotalWidth+"px"))}
// SELECTION / CURSOR
function D(a){var b=a.display,c=Za(a.doc.sel.from,a.doc.sel.to);
// Move the hidden textarea near the cursor to prevent scrolling artifacts
if(c||a.options.showCursorWhenSelecting?E(a):b.cursor.style.display=b.otherCursor.style.display="none",c?b.selectionDiv.style.display="none":F(a),a.options.moveInputWithCursor){var d=_(a,a.doc.sel.head,"div"),e=ud(b.wrapper),f=ud(b.lineDiv);b.inputDiv.style.top=Math.max(0,Math.min(b.wrapper.clientHeight-10,d.top+f.top-e.top))+"px",b.inputDiv.style.left=Math.max(0,Math.min(b.wrapper.clientWidth-10,d.left+f.left-e.left))+"px"}}
// No selection, plain cursor
function E(a){var b=a.display,c=_(a,a.doc.sel.head,"div");b.cursor.style.left=c.left+"px",b.cursor.style.top=c.top+"px",b.cursor.style.height=Math.max(0,c.bottom-c.top)*a.options.cursorHeight+"px",b.cursor.style.display="",c.other?(b.otherCursor.style.display="",b.otherCursor.style.left=c.other.left+"px",b.otherCursor.style.top=c.other.top+"px",b.otherCursor.style.height=.85*(c.other.bottom-c.other.top)+"px"):b.otherCursor.style.display="none"}
// Highlight selection
function F(a){function b(a,b,c,d){b<0&&(b=0),g.appendChild(qd("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px; top: "+b+"px; width: "+(null==c?j-a:c)+"px; height: "+(d-b)+"px"))}function c(c,d,f){function g(b,d){return $(a,Ya(c,b),"div",l,d)}var h,k,l=xc(e,c),m=l.text.length;return yd(Ec(l),d||0,null==f?m:f,function(a,c,e){var l,n,o,p=g(a,"left");if(a==c)l=p,n=o=p.left;else{if(l=g(c-1,"right"),"rtl"==e){var q=p;p=l,l=q}n=p.left,o=l.right}null==d&&0==a&&(n=i),l.top-p.top>3&&(// Different lines, draw top part
b(n,p.top,null,p.bottom),n=i,p.bottom<l.top&&b(n,p.bottom,null,l.top)),null==f&&c==m&&(o=j),(!h||p.top<h.top||p.top==h.top&&p.left<h.left)&&(h=p),(!k||l.bottom>k.bottom||l.bottom==k.bottom&&l.right>k.right)&&(k=l),n<i+1&&(n=i),b(n,l.top,o-n,l.bottom)}),{start:h,end:k}}var d=a.display,e=a.doc,f=a.doc.sel,g=document.createDocumentFragment(),h=N(a.display),i=h.left,j=d.lineSpace.offsetWidth-h.right;if(f.from.line==f.to.line)c(f.from.line,f.from.ch,f.to.ch);else{var k=xc(e,f.from.line),l=xc(e,f.to.line),m=Yb(e,k)==Yb(e,l),n=c(f.from.line,f.from.ch,m?k.text.length:null).end,o=c(f.to.line,m?0:null,f.to.ch).start;m&&(n.top<o.top-2?(b(n.right,n.top,null,n.bottom),b(i,o.top,o.left,o.bottom)):b(n.right,n.top,o.left-n.right,n.bottom)),n.bottom<o.top&&b(i,n.bottom,null,o.top)}sd(d.selectionDiv,g),d.selectionDiv.style.display=""}
// Cursor-blinking
function G(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursor.style.visibility=b.otherCursor.style.visibility="",a.options.cursorBlinkRate>0&&(b.blinker=setInterval(function(){b.cursor.style.visibility=b.otherCursor.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate))}}
// HIGHLIGHT WORKER
function H(a,b){a.doc.mode.startState&&a.doc.frontier<a.display.showingTo&&a.state.highlight.set(b,md(I,a))}function I(a){var b=a.doc;if(b.frontier<b.first&&(b.frontier=b.first),!(b.frontier>=a.display.showingTo)){var c,d=+new Date+a.options.workTime,e=xb(b.mode,K(a,b.frontier)),f=[];b.iter(b.frontier,Math.min(b.first+b.size,a.display.showingTo+500),function(g){if(b.frontier>=a.display.showingFrom){// Visible
var h=g.styles;g.styles=hc(a,g,e,!0);for(var i=!h||h.length!=g.styles.length,j=0;!i&&j<h.length;++j)i=h[j]!=g.styles[j];i&&(c&&c.end==b.frontier?c.end++:f.push(c={start:b.frontier,end:b.frontier+1})),g.stateAfter=xb(b.mode,e)}else jc(a,g.text,e),g.stateAfter=b.frontier%5==0?xb(b.mode,e):null;if(++b.frontier,+new Date>d)return H(a,a.options.workDelay),!0}),f.length&&ha(a,function(){for(var a=0;a<f.length;++a)ka(this,f[a].start,f[a].end)})()}}
// Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.
function J(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1e3:100),h=b;h>g;--h){if(h<=f.first)return f.first;var i=xc(f,h-1);if(i.stateAfter&&(!c||h<=f.frontier))return h;var j=ed(i.text,null,a.options.tabSize);(null==e||d>j)&&(e=h-1,d=j)}return e}function K(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return!0;var f=J(a,b,c),g=f>d.first&&xc(d,f-1).stateAfter;return g=g?xb(d.mode,g):yb(d.mode),d.iter(f,b,function(c){jc(a,c.text,g);var h=f==b-1||f%5==0||f>=e.showingFrom&&f<e.showingTo;c.stateAfter=h?xb(d.mode,g):null,++f}),c&&(d.frontier=f),g}
// POSITION MEASUREMENT
function L(a){return a.lineSpace.offsetTop}function M(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function N(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=sd(a.measure,qd("pre","x")),c=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle;return a.cachedPaddingH={left:parseInt(c.paddingLeft),right:parseInt(c.paddingRight)}}function O(a,b,c,d,e){var f=-1;if(d=d||R(a,b),d.crude){var g=d.left+c*d.width;return{left:g,right:g+d.width,top:d.top,bottom:d.bottom}}for(var h=c;;h+=f){var i=d[h];if(i)break;f<0&&0==h&&(f=1)}return e=h>c?"left":h<c?"right":e,"left"==e&&i.leftSide?i=i.leftSide:"right"==e&&i.rightSide&&(i=i.rightSide),{left:h<c?i.right:i.left,right:h>c?i.left:i.right,top:i.top,bottom:i.bottom}}function P(a,b){for(var c=a.display.measureLineCache,d=0;d<c.length;++d){var e=c[d];if(e.text==b.text&&e.markedSpans==b.markedSpans&&a.display.scroller.clientWidth==e.width&&e.classes==b.textClass+"|"+b.wrapClass)return e}}function Q(a,b){var c=P(a,b);c&&(c.text=c.measure=c.markedSpans=null)}function R(a,b){
// First look in the cache
var c=P(a,b);if(c)return c.measure;
// Failing that, recompute and store result in cache
var d=S(a,b),e=a.display.measureLineCache,f={text:b.text,width:a.display.scroller.clientWidth,markedSpans:b.markedSpans,measure:d,classes:b.textClass+"|"+b.wrapClass};return 16==e.length?e[++a.display.measureLineCachePos%16]=f:e.push(f),d}function S(a,b){function c(a){var b=a.top-o.top,c=a.bottom-o.top;c>r&&(c=r),b<0&&(b=0);for(var d=p.length-2;d>=0;d-=2){var e=p[d],f=p[d+1];if(!(e>c||f<b)&&(e<=b&&f>=c||b<=e&&c>=f||Math.min(c,f)-Math.max(b,e)>=c-b>>1)){p[d]=Math.min(b,e),p[d+1]=Math.max(c,f);break}}return d<0&&(d=p.length,p.push(b,c)),{left:a.left-o.left,right:a.right-o.left,top:d,bottom:null}}function d(a){a.bottom=p[a.top+1],a.top=p[a.top]}if(!a.options.lineWrapping&&b.text.length>=a.options.crudeMeasuringFrom)return T(a,b);var e=a.display,f=ld(b.text.length),g=lc(a,b,f,!0).pre;
// IE does not cache element positions of inline elements between
// calls to getBoundingClientRect. This makes the loop below,
// which gathers the positions of all the characters on the line,
// do an amount of layout work quadratic to the number of
// characters. When line wrapping is off, we try to improve things
// by first subdividing the line into a bunch of inline blocks, so
// that IE can reuse most of the layout information from caches
// for those blocks. This does interfere with line wrapping, so it
// doesn't work when wrapping is on, but in that case the
// situation is slightly better, since IE does cache line-wrapping
// information and only recomputes per-line.
if(Ld&&!Md&&!a.options.lineWrapping&&g.childNodes.length>100){for(var h=document.createDocumentFragment(),i=10,j=g.childNodes.length,k=0,l=Math.ceil(j/i);k<l;++k){for(var m=qd("div",null,null,"display: inline-block"),n=0;n<i&&j;++n)m.appendChild(g.firstChild),--j;h.appendChild(m)}g.appendChild(h)}sd(e.measure,g);var o=ud(e.lineDiv),p=[],q=ld(b.text.length),r=g.offsetHeight;
// Work around an IE7/8 bug where it will sometimes have randomly
// replaced our pre with a clone at this point.
Nd&&e.measure.first!=g&&sd(e.measure,g);for(var s,k=0;k<f.length;++k)if(s=f[k]){var t=s,u=null;
// A widget might wrap, needs special care
if(/\bCodeMirror-widget\b/.test(s.className)&&s.getClientRects){1==s.firstChild.nodeType&&(t=s.firstChild);var v=t.getClientRects();v.length>1&&(u=q[k]=c(v[0]),u.rightSide=c(v[v.length-1]))}u||(u=q[k]=c(ud(t))),s.measureRight&&(u.right=ud(s.measureRight).left-o.left),s.leftSide&&(u.leftSide=c(ud(s.leftSide)))}rd(a.display.measure);for(var s,k=0;k<q.length;++k)(s=q[k])&&(d(s),s.leftSide&&d(s.leftSide),s.rightSide&&d(s.rightSide));return q}function T(a,b){var c=new Ee(b.text.slice(0,100),null);b.textClass&&(c.textClass=b.textClass);var d=S(a,c),e=O(a,c,0,d,"left"),f=O(a,c,99,d,"right");return{crude:!0,top:e.top,left:e.left,bottom:e.bottom,width:(f.right-e.left)/100}}function U(a,b){var c=!1;if(b.markedSpans)for(var d=0;d<b.markedSpans;++d){var e=b.markedSpans[d];!e.collapsed||null!=e.to&&e.to!=b.text.length||(c=!0)}var f=!c&&P(a,b);if(f||b.text.length>=a.options.crudeMeasuringFrom)return O(a,b,b.text.length,f&&f.measure,"right").right;var g=lc(a,b,null,!0).pre,h=g.appendChild(xd(a.display.measure));return sd(a.display.measure,g),ud(h).right-ud(a.display.lineDiv).left}function V(a){a.display.measureLineCache.length=a.display.measureLineCachePos=0,a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null,a.options.lineWrapping||(a.display.maxLineChanged=!0),a.display.lineNumChars=null}function W(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function X(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}
// Context is one of "line", "div" (display.lineDiv), "local"/null (editor), or "page"
function Y(a,b,c,d){if(b.widgets)for(var e=0;e<b.widgets.length;++e)if(b.widgets[e].above){var f=cc(b.widgets[e]);c.top+=f,c.bottom+=f}if("line"==d)return c;d||(d="local");var g=Dc(a,b);if("local"==d?g+=L(a.display):g-=a.display.viewOffset,"page"==d||"window"==d){var h=ud(a.display.lineSpace);g+=h.top+("window"==d?0:X());var i=h.left+("window"==d?0:W());c.left+=i,c.right+=i}return c.top+=g,c.bottom+=g,c}
// Context may be "window", "page", "div", or "local"/null
// Result is in "div" coords
function Z(a,b,c){if("div"==c)return b;var d=b.left,e=b.top;
// First move into "page" coordinate system
if("page"==c)d-=W(),e-=X();else if("local"==c||!c){var f=ud(a.display.sizer);d+=f.left,e+=f.top}var g=ud(a.display.lineSpace);return{left:d-g.left,top:e-g.top}}function $(a,b,c,d,e){return d||(d=xc(a.doc,b.line)),Y(a,d,O(a,d,b.ch,null,e),c)}function _(a,b,c,d,e){function f(b,f){var g=O(a,d,b,e,f?"right":"left");return f?g.left=g.right:g.right=g.left,Y(a,d,g,c)}function g(a,b){var c=h[b],d=c.level%2;return a==zd(c)&&b&&c.level<h[b-1].level?(c=h[--b],a=Ad(c)-(c.level%2?0:1),d=!0):a==Ad(c)&&b<h.length-1&&c.level<h[b+1].level&&(c=h[++b],a=zd(c)-c.level%2,d=!1),d&&a==c.to&&a>c.from?f(a-1):f(a,d)}d=d||xc(a.doc,b.line),e||(e=R(a,d));var h=Ec(d),i=b.ch;if(!h)return f(i);var j=Gd(h,i),k=g(i,j);return null!=Ze&&(k.other=g(i,Ze)),k}function aa(a,b,c,d){var e=new Ya(a,b);return e.xRel=d,c&&(e.outside=!0),e}
// Coords must be lineSpace-local
function ba(a,b,c){var d=a.doc;if(c+=a.display.viewOffset,c<0)return aa(d.first,0,!0,-1);var e=Cc(d,c),f=d.first+d.size-1;if(e>f)return aa(d.first+d.size-1,xc(d,f).text.length,!0,1);for(b<0&&(b=0);;){var g=xc(d,e),h=ca(a,g,e,b,c),i=Wb(g),j=i&&i.find();if(!i||!(h.ch>j.from.ch||h.ch==j.from.ch&&h.xRel>0))return h;e=j.to.line}}function ca(a,b,c,d,e){function f(d){var e=_(a,Ya(c,d),"line",b,j);return h=!0,g>e.bottom?e.left-i:g<e.top?e.left+i:(h=!1,e.left)}var g=e-Dc(a,b),h=!1,i=2*a.display.wrapper.clientWidth,j=R(a,b),k=Ec(b),l=b.text.length,m=Bd(b),n=Cd(b),o=f(m),p=h,q=f(n),r=h;if(d>q)return aa(c,n,r,1);
// Do a binary search between these bounds.
for(;;){if(k?n==m||n==Id(b,m,1):n-m<=1){var s=d<o||d-o<=q-d?m:n,t=d-(s==m?o:q);while(pd(b.text.charAt(s)))++s;var u=aa(c,s,s==m?p:r,t<0?-1:t?1:0);return u}var v=Math.ceil(l/2),w=m+v;if(k){w=m;for(var x=0;x<v;++x)w=Id(b,w,1)}var y=f(w);y>d?(n=w,q=y,(r=h)&&(q+=1e3),l=v):(m=w,o=y,p=h,l-=v)}}function da(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==de){de=qd("pre");
// Measure a bunch of lines, for browsers that compute
// fractional heights.
for(var b=0;b<49;++b)de.appendChild(document.createTextNode("x")),de.appendChild(qd("br"));de.appendChild(document.createTextNode("x"))}sd(a.measure,de);var c=de.offsetHeight/50;return c>3&&(a.cachedTextHeight=c),rd(a.measure),c||1}function ea(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=qd("span","x"),c=qd("pre",[b]);sd(a.measure,c);var d=b.offsetWidth;return d>2&&(a.cachedCharWidth=d),d||10}function fa(a){a.curOp={
// An array of ranges of lines that have to be updated. See
// updateDisplay.
changes:[],forceUpdate:!1,updateInput:null,userSelChange:null,textChanged:null,selectionChanged:!1,cursorActivity:!1,updateMaxLine:!1,updateScrollPos:!1,id:++ke},Me++||(Le=[])}function ga(a){var b=a.curOp,c=a.doc,d=a.display;if(a.curOp=null,b.updateMaxLine&&m(a),d.maxLineChanged&&!a.options.lineWrapping&&d.maxLine){var e=U(a,d.maxLine);d.sizer.style.minWidth=Math.max(0,e+3)+"px",d.maxLineChanged=!1;var f=Math.max(0,d.sizer.offsetLeft+d.sizer.offsetWidth-d.scroller.clientWidth);f<c.scrollLeft&&!b.updateScrollPos&&Ca(a,Math.min(d.scroller.scrollLeft,f),!0)}var g,h;if(b.updateScrollPos)g=b.updateScrollPos;else if(b.selectionChanged&&d.scroller.clientHeight){// don't rescroll if not visible
var i=_(a,c.sel.head);g=nb(a,i.left,i.top,i.left,i.bottom)}if((b.changes.length||b.forceUpdate||g&&null!=g.scrollTop)&&(h=u(a,b.changes,g&&g.scrollTop,b.forceUpdate),a.display.scroller.offsetHeight&&(a.doc.scrollTop=a.display.scroller.scrollTop)),!h&&b.selectionChanged&&D(a),b.updateScrollPos){var j=Math.max(0,Math.min(d.scroller.scrollHeight-d.scroller.clientHeight,g.scrollTop)),k=Math.max(0,Math.min(d.scroller.scrollWidth-d.scroller.clientWidth,g.scrollLeft));d.scroller.scrollTop=d.scrollbarV.scrollTop=c.scrollTop=j,d.scroller.scrollLeft=d.scrollbarH.scrollLeft=c.scrollLeft=k,q(a),b.scrollToPos&&lb(a,cb(a.doc,b.scrollToPos.from),cb(a.doc,b.scrollToPos.to),b.scrollToPos.margin)}else g&&kb(a);b.selectionChanged&&G(a),a.state.focused&&b.updateInput&&oa(a,b.userSelChange);var l=b.maybeHiddenMarkers,n=b.maybeUnhiddenMarkers;if(l)for(var o=0;o<l.length;++o)l[o].lines.length||Zc(l[o],"hide");if(n)for(var o=0;o<n.length;++o)n[o].lines.length&&Zc(n[o],"unhide");var p;if(--Me||(p=Le,Le=null),b.textChanged&&Zc(a,"change",a,b.textChanged),b.cursorActivity&&Zc(a,"cursorActivity",a),p)for(var o=0;o<p.length;++o)p[o]()}
// Wraps a function in an operation. Returns the wrapped function.
function ha(a,b){return function(){var c=a||this,d=!c.curOp;d&&fa(c);try{var e=b.apply(c,arguments)}finally{d&&ga(c)}return e}}function ia(a){return function(){var b,c=this.cm&&!this.cm.curOp;c&&fa(this.cm);try{b=a.apply(this,arguments)}finally{c&&ga(this.cm)}return b}}function ja(a,b){var c,d=!a.curOp;d&&fa(a);try{c=b()}finally{d&&ga(a)}return c}function ka(a,b,c,d){null==b&&(b=a.doc.first),null==c&&(c=a.doc.first+a.doc.size),a.curOp.changes.push({from:b,to:c,diff:d})}
// INPUT HANDLING
function la(a){a.display.pollingFast||a.display.poll.set(a.options.pollInterval,function(){na(a),a.state.focused&&la(a)})}function ma(a){function b(){var d=na(a);d||c?(a.display.pollingFast=!1,la(a)):(c=!0,a.display.poll.set(60,b))}var c=!1;a.display.pollingFast=!0,a.display.poll.set(20,b)}
// prevInput is a hack to work with IME. If we reset the textarea
// on every change, that breaks IME. So we look for changes
// compared to the previous content instead. (Modern browsers have
// events that indicate IME taking place, but these are not widely
// supported or compatible enough yet to rely on.)
function na(a){var b=a.display.input,c=a.display.prevInput,d=a.doc,e=d.sel;if(!a.state.focused||We(b)||ra(a)||a.options.disableInput)return!1;a.state.pasteIncoming&&a.state.fakedLastChar&&(b.value=b.value.substring(0,b.value.length-1),a.state.fakedLastChar=!1);var f=b.value;if(f==c&&Za(e.from,e.to))return!1;if(Qd&&!Nd&&a.display.inputHasSelection===f)return oa(a,!0),!1;var g=!a.curOp;g&&fa(a),e.shift=!1;var h=0,i=Math.min(c.length,f.length);while(h<i&&c.charCodeAt(h)==f.charCodeAt(h))++h;var j=e.from,k=e.to,l=f.slice(h);h<c.length?j=Ya(j.line,j.ch-(c.length-h)):a.state.overwrite&&Za(j,k)&&!a.state.pasteIncoming&&(k=Ya(k.line,Math.min(xc(d,k.line).text.length,k.ch+l.length)));var m=a.curOp.updateInput,n={from:j,to:k,text:Ve(l),origin:a.state.pasteIncoming?"paste":a.state.cutIncoming?"cut":"+input"};if(Ra(a.doc,n,"end"),a.curOp.updateInput=m,$c(a,"inputRead",a,n),l&&!a.state.pasteIncoming&&a.options.electricChars&&a.options.smartIndent&&e.head.ch<100){var o=a.getModeAt(e.head).electricChars;if(o)for(var p=0;p<o.length;p++)if(l.indexOf(o.charAt(p))>-1){qb(a,e.head.line,"smart");break}}return f.length>1e3||f.indexOf("\n")>-1?b.value=a.display.prevInput="":a.display.prevInput=f,g&&ga(a),a.state.pasteIncoming=a.state.cutIncoming=!1,!0}function oa(a,b){var c,d,e=a.doc;if(Za(e.sel.from,e.sel.to))b&&(a.display.prevInput=a.display.input.value="",Qd&&!Nd&&(a.display.inputHasSelection=null));else{a.display.prevInput="",c=Xe&&(e.sel.to.line-e.sel.from.line>100||(d=a.getSelection()).length>1e3);var f=c?"-":d||a.getSelection();a.display.input.value=f,a.state.focused&&hd(a.display.input),Qd&&!Nd&&(a.display.inputHasSelection=f)}a.display.inaccurateSelection=c}function pa(a){"nocursor"==a.options.readOnly||_d&&document.activeElement==a.display.input||a.display.input.focus()}function qa(a){a.state.focused||(pa(a),La(a))}function ra(a){return a.options.readOnly||a.doc.cantEdit}
// EVENT HANDLERS
function sa(a){function b(){a.state.focused&&setTimeout(md(pa,a),0)}function c(){null==h&&(h=setTimeout(function(){h=null,
// Might be a text scaling operation, clear size caches.
g.cachedCharWidth=g.cachedTextHeight=g.cachedPaddingH=Te=null,V(a),ja(a,md(ka,a))},100))}
// Above handler holds on to the editor and its data structures.
// Here we poll to unregister it when the editor is no longer in
// the document, so that it can be garbage-collected.
function d(){for(var a=g.wrapper.parentNode;a&&a!=document.body;a=a.parentNode);a?setTimeout(d,5e3):Yc(window,"resize",c)}function e(b){_c(a,b)||a.options.onDragEvent&&a.options.onDragEvent(a,Qc(b))||Uc(b)}function f(b){g.inaccurateSelection&&(g.prevInput="",g.inaccurateSelection=!1,g.input.value=a.getSelection(),hd(g.input)),"cut"==b.type&&(a.state.cutIncoming=!0)}var g=a.display;Xc(g.scroller,"mousedown",ha(a,va)),Ld?Xc(g.scroller,"dblclick",ha(a,function(b){if(!_c(a,b)){var c=ua(a,b);if(c&&!ya(a,b)&&!ta(a.display,b)){Rc(b);var d=ub(xc(a.doc,c.line).text,c);fb(a.doc,d.from,d.to)}}})):Xc(g.scroller,"dblclick",function(b){_c(a,b)||Rc(b)}),Xc(g.lineSpace,"selectstart",function(a){ta(g,a)||Rc(a)}),
// Gecko browsers fire contextmenu *after* opening the menu, at
// which point we can't mess with it anymore. Context menu is
// handled in onMouseDown for Gecko.
he||Xc(g.scroller,"contextmenu",function(b){Na(a,b)}),Xc(g.scroller,"scroll",function(){g.scroller.clientHeight&&(Ba(a,g.scroller.scrollTop),Ca(a,g.scroller.scrollLeft,!0),Zc(a,"scroll",a))}),Xc(g.scrollbarV,"scroll",function(){g.scroller.clientHeight&&Ba(a,g.scrollbarV.scrollTop)}),Xc(g.scrollbarH,"scroll",function(){g.scroller.clientHeight&&Ca(a,g.scrollbarH.scrollLeft)}),Xc(g.scroller,"mousewheel",function(b){Da(a,b)}),Xc(g.scroller,"DOMMouseScroll",function(b){Da(a,b)}),Xc(g.scrollbarH,"mousedown",b),Xc(g.scrollbarV,"mousedown",b),
// Prevent wrapper from ever scrolling
Xc(g.wrapper,"scroll",function(){g.wrapper.scrollTop=g.wrapper.scrollLeft=0});var h;Xc(window,"resize",c),setTimeout(d,5e3),Xc(g.input,"keyup",ha(a,Ia)),Xc(g.input,"input",function(){Qd&&!Nd&&a.display.inputHasSelection&&(a.display.inputHasSelection=null),ma(a)}),Xc(g.input,"keydown",ha(a,Ja)),Xc(g.input,"keypress",ha(a,Ka)),Xc(g.input,"focus",md(La,a)),Xc(g.input,"blur",md(Ma,a)),a.options.dragDrop&&(Xc(g.scroller,"dragstart",function(b){Aa(a,b)}),Xc(g.scroller,"dragenter",e),Xc(g.scroller,"dragover",e),Xc(g.scroller,"drop",ha(a,za))),Xc(g.scroller,"paste",function(b){ta(g,b)||(pa(a),ma(a))}),Xc(g.input,"paste",function(){
// Workaround for webkit bug https://bugs.webkit.org/show_bug.cgi?id=90206
// Add a char to the end of textarea before paste occur so that
// selection doesn't span to the end of textarea.
if(Rd&&!a.state.fakedLastChar&&!(new Date-a.state.lastMiddleDown<200)){var b=g.input.selectionStart,c=g.input.selectionEnd;g.input.value+="$",g.input.selectionStart=b,g.input.selectionEnd=c,a.state.fakedLastChar=!0}a.state.pasteIncoming=!0,ma(a)}),Xc(g.input,"cut",f),Xc(g.input,"copy",f),
// Needed to handle Tab key in KHTML
Wd&&Xc(g.sizer,"mouseup",function(){document.activeElement==g.input&&g.input.blur(),pa(a)})}function ta(a,b){for(var c=Vc(b);c!=a.wrapper;c=c.parentNode)if(!c||c.ignoreEvents||c.parentNode==a.sizer&&c!=a.mover)return!0}function ua(a,b,c){var d=a.display;if(!c){var e=Vc(b);if(e==d.scrollbarH||e==d.scrollbarH.firstChild||e==d.scrollbarV||e==d.scrollbarV.firstChild||e==d.scrollbarFiller||e==d.gutterFiller)return null}var f,g,h=ud(d.lineSpace);
// Fails unpredictably on IE[67] when mouse is dragged around quickly.
try{f=b.clientX,g=b.clientY}catch(b){return null}return ba(a,f-h.left,g-h.top)}function va(a){function b(a){if(!Za(r,a)){if(r=a,"single"==k)return void fb(e.doc,cb(g,i),a);if(o=cb(g,o),q=cb(g,q),"double"==k){var b=ub(xc(g,a.line).text,a);$a(a,o)?fb(e.doc,b.from,q):fb(e.doc,o,b.to)}else"triple"==k&&($a(a,o)?fb(e.doc,q,cb(g,Ya(a.line,0))):fb(e.doc,o,cb(g,Ya(a.line+1,0))))}}function c(a){var d=++t,h=ua(e,a,!0);if(h)if(Za(h,m)){var i=a.clientY<s.top?-20:a.clientY>s.bottom?20:0;i&&setTimeout(ha(e,function(){t==d&&(f.scroller.scrollTop+=i,c(a))}),50)}else{qa(e),m=h,b(h);var j=p(f,g);(h.line>=j.to||h.line<j.from)&&setTimeout(ha(e,function(){t==d&&c(a)}),150)}}function d(a){t=1/0,Rc(a),pa(e),Yc(document,"mousemove",u),Yc(document,"mouseup",v)}if(!_c(this,a)){var e=this,f=e.display,g=e.doc,h=g.sel;if(h.shift=a.shiftKey,ta(f,a))return void(Rd||(f.scroller.draggable=!1,setTimeout(function(){f.scroller.draggable=!0},100)));if(!ya(e,a)){var i=ua(e,a);switch(window.focus(),Wc(a)){case 3:return void(he&&Na.call(e,e,a));case 2:return Rd&&(e.state.lastMiddleDown=+new Date),i&&fb(e.doc,i),setTimeout(md(pa,e),20),void Rc(a)}
// For button 1, if it was clicked inside the editor
// (posFromMouse returning non-null), we have to adjust the
// selection.
if(!i)return void(Vc(a)==f.scroller&&Rc(a));setTimeout(md(qa,e),0);var j=+new Date,k="single";if(fe&&fe.time>j-400&&Za(fe.pos,i))k="triple",Rc(a),setTimeout(md(pa,e),20),vb(e,i.line);else if(ee&&ee.time>j-400&&Za(ee.pos,i)){k="double",fe={time:j,pos:i},Rc(a);var l=ub(xc(g,i.line).text,i);fb(e.doc,l.from,l.to)}else ee={time:j,pos:i};var m=i;if(e.options.dragDrop&&Se&&!ra(e)&&!Za(h.from,h.to)&&!$a(i,h.from)&&!$a(h.to,i)&&"single"==k){var n=ha(e,function(b){Rd&&(f.scroller.draggable=!1),e.state.draggingText=!1,Yc(document,"mouseup",n),Yc(f.scroller,"drop",n),Math.abs(a.clientX-b.clientX)+Math.abs(a.clientY-b.clientY)<10&&(Rc(b),fb(e.doc,i),pa(e),
// Work around unexplainable focus problem in IE9 (#2127)
Ld&&!Nd&&setTimeout(function(){document.body.focus(),pa(e)},20))});
// Let the drag handler handle this.
// IE's approach to draggable
return Rd&&(f.scroller.draggable=!0),e.state.draggingText=n,f.scroller.dragDrop&&f.scroller.dragDrop(),Xc(document,"mouseup",n),void Xc(f.scroller,"drop",n)}Rc(a),"single"==k&&fb(e.doc,cb(g,i));var o=h.from,q=h.to,r=i,s=ud(f.wrapper),t=0,u=ha(e,function(a){(Qd&&!Od?a.buttons:Wc(a))?c(a):d(a)}),v=ha(e,d);Xc(document,"mousemove",u),Xc(document,"mouseup",v)}}}function wa(a,b,c,d,e){try{var f=b.clientX,g=b.clientY}catch(b){return!1}if(f>=Math.floor(ud(a.display.gutters).right))return!1;d&&Rc(b);var h=a.display,i=ud(h.lineDiv);if(g>i.bottom||!bd(a,c))return Tc(b);g-=i.top-h.viewOffset;for(var j=0;j<a.options.gutters.length;++j){var k=h.gutters.childNodes[j];if(k&&ud(k).right>=f){var l=Cc(a.doc,g),m=a.options.gutters[j];return e(a,c,a,l,m,b),Tc(b)}}}function xa(a,b){return!!bd(a,"gutterContextMenu")&&wa(a,b,"gutterContextMenu",!1,Zc)}function ya(a,b){return wa(a,b,"gutterClick",!0,$c)}function za(a){var b=this;if(!(_c(b,a)||ta(b.display,a)||b.options.onDragEvent&&b.options.onDragEvent(b,Qc(a)))){Rc(a),Qd&&(le=+new Date);var c=ua(b,a,!0),d=a.dataTransfer.files;if(c&&!ra(b))if(d&&d.length&&window.FileReader&&window.File)for(var e=d.length,f=Array(e),g=0,h=function(a,d){var h=new FileReader;h.onload=function(){f[d]=h.result,++g==e&&(c=cb(b.doc,c),Ra(b.doc,{from:c,to:c,text:Ve(f.join("\n")),origin:"paste"},"around"))},h.readAsText(a)},i=0;i<e;++i)h(d[i],i);else{
// Don't do a replace if the drop happened inside of the selected text.
if(b.state.draggingText&&!$a(c,b.doc.sel.from)&&!$a(b.doc.sel.to,c))
// Ensure the editor is re-focused
return b.state.draggingText(a),void setTimeout(md(pa,b),20);try{var f=a.dataTransfer.getData("Text");if(f){var j=b.doc.sel.from,k=b.doc.sel.to;hb(b.doc,c,c),b.state.draggingText&&Xa(b.doc,"",j,k,"paste"),b.replaceSelection(f,null,"paste"),pa(b)}}catch(a){}}}}function Aa(a,b){if(Qd&&(!a.state.draggingText||+new Date-le<100))return void Uc(b);if(!_c(a,b)&&!ta(a.display,b)){var c=a.getSelection();
// Use dummy image instead of default browsers image.
// Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
if(b.dataTransfer.setData("Text",c),b.dataTransfer.setDragImage&&!Vd){var d=qd("img",null,null,"position: fixed; left: 0; top: 0;");d.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Ud&&(d.width=d.height=1,a.display.wrapper.appendChild(d),
// Force a relayout, or Opera won't use our image for some obscure reason
d._top=d.offsetTop),b.dataTransfer.setDragImage(d,0,0),Ud&&d.parentNode.removeChild(d)}}}function Ba(a,b){Math.abs(a.doc.scrollTop-b)<2||(a.doc.scrollTop=b,Kd||u(a,[],b),a.display.scroller.scrollTop!=b&&(a.display.scroller.scrollTop=b),a.display.scrollbarV.scrollTop!=b&&(a.display.scrollbarV.scrollTop=b),Kd&&u(a,[]),H(a,100))}function Ca(a,b,c){(c?b==a.doc.scrollLeft:Math.abs(a.doc.scrollLeft-b)<2)||(b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth),a.doc.scrollLeft=b,q(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbarH.scrollLeft!=b&&(a.display.scrollbarH.scrollLeft=b))}function Da(a,b){var c=b.wheelDeltaX,d=b.wheelDeltaY;null==c&&b.detail&&b.axis==b.HORIZONTAL_AXIS&&(c=b.detail),null==d&&b.detail&&b.axis==b.VERTICAL_AXIS?d=b.detail:null==d&&(d=b.wheelDelta);var e=a.display,f=e.scroller;
// Quit if there's nothing to scroll here
if(c&&f.scrollWidth>f.clientWidth||d&&f.scrollHeight>f.clientHeight){
// Webkit browsers on OS X abort momentum scrolls when the target
// of the scroll event is removed from the scrollable element.
// This hack (see related code in patchDisplay) makes sure the
// element is kept around.
if(d&&ae&&Rd)for(var g=b.target;g!=f;g=g.parentNode)if(g.lineObj){a.display.currentWheelTarget=g;break}
// On some browsers, horizontal scrolling will cause redraws to
// happen before the gutter has been realigned, causing it to
// wriggle around in a most unseemly way. When we have an
// estimated pixels/delta value, we just handle horizontal
// scrolling entirely here. It'll be slightly off from native, but
// better than glitching out.
if(c&&!Kd&&!Ud&&null!=ne)// Abort measurement, if in progress
return d&&Ba(a,Math.max(0,Math.min(f.scrollTop+d*ne,f.scrollHeight-f.clientHeight))),Ca(a,Math.max(0,Math.min(f.scrollLeft+c*ne,f.scrollWidth-f.clientWidth))),Rc(b),void(e.wheelStartX=null);if(d&&null!=ne){var h=d*ne,i=a.doc.scrollTop,j=i+e.wrapper.clientHeight;h<0?i=Math.max(0,i+h-50):j=Math.min(a.doc.height,j+h+50),u(a,[],{top:i,bottom:j})}me<20&&(null==e.wheelStartX?(e.wheelStartX=f.scrollLeft,e.wheelStartY=f.scrollTop,e.wheelDX=c,e.wheelDY=d,setTimeout(function(){if(null!=e.wheelStartX){var a=f.scrollLeft-e.wheelStartX,b=f.scrollTop-e.wheelStartY,c=b&&e.wheelDY&&b/e.wheelDY||a&&e.wheelDX&&a/e.wheelDX;e.wheelStartX=e.wheelStartY=null,c&&(ne=(ne*me+c)/(me+1),++me)}},200)):(e.wheelDX+=c,e.wheelDY+=d))}}function Ea(a,b,c){if("string"==typeof b&&(b=Ae[b],!b))return!1;
// Ensure previous input has been read, so that the handler sees a
// consistent view of the document
a.display.pollingFast&&na(a)&&(a.display.pollingFast=!1);var d=a.doc,e=d.sel.shift,f=!1;try{ra(a)&&(a.state.suppressEdits=!0),c&&(d.sel.shift=!1),f=b(a)!=Oe}finally{d.sel.shift=e,a.state.suppressEdits=!1}return f}function Fa(a){var b=a.state.keyMaps.slice(0);return a.options.extraKeys&&b.push(a.options.extraKeys),b.push(a.options.keyMap),b}function Ga(a,b){
// Handle auto keymap transitions
var c=zb(a.options.keyMap),d=c.auto;clearTimeout(oe),d&&!Bb(b)&&(oe=setTimeout(function(){zb(a.options.keyMap)==c&&(a.options.keyMap=d.call?d.call(null,a):d,h(a))},50));var e=Cb(b,!0),f=!1;if(!e)return!1;var g=Fa(a);
// First try to resolve full name (including 'Shift-'). Failing
// that, see if there is a cursor-motion command (starting with
// 'go') bound to the keyname without 'Shift-'.
return f=b.shiftKey?Ab("Shift-"+e,g,function(b){return Ea(a,b,!0)})||Ab(e,g,function(b){if("string"==typeof b?/^go[A-Z]/.test(b):b.motion)return Ea(a,b)}):Ab(e,g,function(b){return Ea(a,b)}),f&&(Rc(b),G(a),Nd&&(b.oldKeyCode=b.keyCode,b.keyCode=0),$c(a,"keyHandled",a,e,b)),f}function Ha(a,b,c){var d=Ab("'"+c+"'",Fa(a),function(b){return Ea(a,b,!0)});return d&&(Rc(b),G(a),$c(a,"keyHandled",a,"'"+c+"'",b)),d}function Ia(a){var b=this;_c(b,a)||b.options.onKeyEvent&&b.options.onKeyEvent(b,Qc(a))||16==a.keyCode&&(b.doc.sel.shift=!1)}function Ja(a){var b=this;if(qa(b),!(_c(b,a)||b.options.onKeyEvent&&b.options.onKeyEvent(b,Qc(a)))){Ld&&27==a.keyCode&&(a.returnValue=!1);var c=a.keyCode;
// IE does strange things with escape.
b.doc.sel.shift=16==c||a.shiftKey;
// First give onKeyEvent option a chance to handle this.
var d=Ga(b,a);Ud&&(qe=d?c:null,
// Opera has no cut event... we try to at least catch the key combo
!d&&88==c&&!Xe&&(ae?a.metaKey:a.ctrlKey)&&b.replaceSelection(""))}}function Ka(a){var b=this;if(!(_c(b,a)||b.options.onKeyEvent&&b.options.onKeyEvent(b,Qc(a)))){var c=a.keyCode,d=a.charCode;if(Ud&&c==qe)return qe=null,void Rc(a);if(!(Ud&&(!a.which||a.which<10)||Wd)||!Ga(b,a)){var e=String.fromCharCode(null==d?c:d);Ha(b,a,e)||(Qd&&!Nd&&(b.display.inputHasSelection=null),ma(b))}}}function La(a){"nocursor"!=a.options.readOnly&&(a.state.focused||(Zc(a,"focus",a),a.state.focused=!0,a.display.wrapper.className.search(/\bCodeMirror-focused\b/)==-1&&(a.display.wrapper.className+=" CodeMirror-focused"),a.curOp||(oa(a,!0),Rd&&setTimeout(md(oa,a,!0),0))),la(a),G(a))}function Ma(a){a.state.focused&&(Zc(a,"blur",a),a.state.focused=!1,a.display.wrapper.className=a.display.wrapper.className.replace(" CodeMirror-focused","")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.doc.sel.shift=!1)},150)}function Na(a,b){function c(){if(null!=e.input.selectionStart){var a=e.input.value="​"+(Za(f.from,f.to)?"":e.input.value);e.prevInput="​",e.input.selectionStart=1,e.input.selectionEnd=a.length}}function d(){
// Try to detect the user choosing select-all
if(e.inputDiv.style.position="relative",e.input.style.cssText=j,Nd&&(e.scrollbarV.scrollTop=e.scroller.scrollTop=h),la(a),null!=e.input.selectionStart){Qd&&!Nd||c(),clearTimeout(pe);var b=0,d=function(){"​"==e.prevInput&&0==e.input.selectionStart?ha(a,Ae.selectAll)(a):b++<10?pe=setTimeout(d,500):oa(a)};pe=setTimeout(d,200)}}if(!_c(a,b,"contextmenu")){var e=a.display,f=a.doc.sel;if(!ta(e,b)&&!xa(a,b)){var g=ua(a,b),h=e.scroller.scrollTop;if(g&&!Ud){// Opera is difficult.
// Reset the current text selection only if the click is done outside of the selection
// and 'resetSelectionOnContextMenu' option is true.
var i=a.options.resetSelectionOnContextMenu;i&&(Za(f.from,f.to)||$a(g,f.from)||!$a(g,f.to))&&ha(a,hb)(a.doc,g,g);var j=e.input.style.cssText;if(e.inputDiv.style.position="absolute",e.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(b.clientY-5)+"px; left: "+(b.clientX-5)+"px; z-index: 1000; background: transparent; outline: none;border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);",pa(a),oa(a,!0),
// Adds "Select all" to context menu in FF
Za(f.from,f.to)&&(e.input.value=e.prevInput=" "),Qd&&!Nd&&c(),he){Uc(b);var k=function(){Yc(window,"mouseup",k),setTimeout(d,20)};Xc(window,"mouseup",k)}else setTimeout(d,50)}}}}
// Make sure a position will be valid after the given change.
function Oa(a,b,c){if(!$a(b.from,c))return cb(a,c);var d=b.text.length-1-(b.to.line-b.from.line);if(c.line>b.to.line+d){var e=c.line-d,f=a.first+a.size-1;return e>f?Ya(f,xc(a,f).text.length):db(c,xc(a,e).text.length)}if(c.line==b.to.line+d)return db(c,gd(b.text).length+(1==b.text.length?b.from.ch:0)+xc(a,b.to.line).text.length-b.to.ch);var g=c.line-b.from.line;return db(c,b.text[g].length+(g?0:b.from.ch))}
// Hint can be null|"end"|"start"|"around"|{anchor,head}
function Pa(a,b,c){if(c&&"object"==typeof c)// Assumed to be {anchor, head} object
return{anchor:Oa(a,b,c.anchor),head:Oa(a,b,c.head)};if("start"==c)return{anchor:b.from,head:b.from};var d=re(b);if("around"==c)return{anchor:b.from,head:d};if("end"==c)return{anchor:d,head:d};
// hint is null, leave the selection alone as much as possible
var e=function(a){if($a(a,b.from))return a;if(!$a(b.to,a))return d;var c=a.line+b.text.length-(b.to.line-b.from.line)-1,e=a.ch;return a.line==b.to.line&&(e+=d.ch-b.to.ch),Ya(c,e)};return{anchor:e(a.sel.anchor),head:e(a.sel.head)}}function Qa(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){this.canceled=!0}};return c&&(d.update=function(b,c,d,e){b&&(this.from=cb(a,b)),c&&(this.to=cb(a,c)),d&&(this.text=d),void 0!==e&&(this.origin=e)}),Zc(a,"beforeChange",a,d),a.cm&&Zc(a.cm,"beforeChange",a.cm,d),d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}
// Replace the range from from to to by the strings in replacement.
// change is a {from, to, text [, origin]} object
function Ra(a,b,c,d){if(a.cm){if(!a.cm.curOp)return ha(a.cm,Ra)(a,b,c,d);if(a.cm.state.suppressEdits)return}if(!(bd(a,"beforeChange")||a.cm&&bd(a.cm,"beforeChange"))||(b=Qa(a,b,!0))){
// Possibly split or suppress the update based on the presence
// of read-only spans in its range.
var e=ie&&!d&&Qb(a,b.from,b.to);if(e){for(var f=e.length-1;f>=1;--f)Sa(a,{from:e[f].from,to:e[f].to,text:[""]});e.length&&Sa(a,{from:e[0].from,to:e[0].to,text:b.text},c)}else Sa(a,b,c)}}function Sa(a,b,c){if(1!=b.text.length||""!=b.text[0]||!Za(b.from,b.to)){var d=Pa(a,b,c);Ic(a,b,d,a.cm?a.cm.curOp.id:NaN),Va(a,b,d,Nb(a,b));var e=[];vc(a,function(a,c){c||id(e,a.history)!=-1||(Oc(a.history,b),e.push(a.history)),Va(a,b,null,Nb(a,b))})}}function Ta(a,b){if(!a.cm||!a.cm.state.suppressEdits){var c=a.history,d=("undo"==b?c.done:c.undone).pop();if(d){var e={changes:[],anchorBefore:d.anchorAfter,headBefore:d.headAfter,anchorAfter:d.anchorBefore,headAfter:d.headBefore,generation:c.generation};("undo"==b?c.undone:c.done).push(e),c.generation=d.generation||++c.maxGeneration;for(var f=bd(a,"beforeChange")||a.cm&&bd(a.cm,"beforeChange"),g=d.changes.length-1;g>=0;--g){var h=d.changes[g];if(h.origin=b,f&&!Qa(a,h,!1))return void(("undo"==b?c.done:c.undone).length=0);e.changes.push(Hc(a,h));var i=g?Pa(a,h,null):{anchor:d.anchorBefore,head:d.headBefore};Va(a,h,i,Pb(a,h));var j=[];vc(a,function(a,b){b||id(j,a.history)!=-1||(Oc(a.history,h),j.push(a.history)),Va(a,h,null,Pb(a,h))})}}}}function Ua(a,b){function c(a){return Ya(a.line+b,a.ch)}a.first+=b,a.cm&&ka(a.cm,a.first,a.first,b),a.sel.head=c(a.sel.head),a.sel.anchor=c(a.sel.anchor),a.sel.from=c(a.sel.from),a.sel.to=c(a.sel.to)}function Va(a,b,c,d){if(a.cm&&!a.cm.curOp)return ha(a.cm,Va)(a,b,c,d);if(b.to.line<a.first)return void Ua(a,b.text.length-1-(b.to.line-b.from.line));if(!(b.from.line>a.lastLine())){
// Clip the change to the size of this doc
if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Ua(a,e),b={from:Ya(a.first,0),to:Ya(b.to.line+e,b.to.ch),text:[gd(b.text)],origin:b.origin}}var f=a.lastLine();b.to.line>f&&(b={from:b.from,to:Ya(f,xc(a,f).text.length),text:[b.text[0]],origin:b.origin}),b.removed=yc(a,b.from,b.to),c||(c=Pa(a,b,null)),a.cm?Wa(a.cm,b,d,c):sc(a,b,d,c)}}function Wa(a,b,c,d){var e=a.doc,g=a.display,h=b.from,i=b.to,j=!1,k=h.line;a.options.lineWrapping||(k=Bc(Yb(e,xc(e,h.line))),e.iter(k,i.line+1,function(a){if(a==g.maxLine)return j=!0,!0})),$a(e.sel.head,b.from)||$a(b.to,e.sel.head)||(a.curOp.cursorActivity=!0),sc(e,b,c,d,f(a)),a.options.lineWrapping||(e.iter(k,h.line+b.text.length,function(a){var b=l(e,a);b>g.maxLineLength&&(g.maxLine=a,g.maxLineLength=b,g.maxLineChanged=!0,j=!1)}),j&&(a.curOp.updateMaxLine=!0)),
// Adjust frontier, schedule worker
e.frontier=Math.min(e.frontier,h.line),H(a,400);var m=b.text.length-(i.line-h.line)-1;if(
// Remember that these lines changed, for updating the display
ka(a,h.line,i.line+1,m),bd(a,"change")){var n={from:h,to:i,text:b.text,removed:b.removed,origin:b.origin};if(a.curOp.textChanged){for(var o=a.curOp.textChanged;o.next;o=o.next);o.next=n}else a.curOp.textChanged=n}}function Xa(a,b,c,d,e){if(d||(d=c),$a(d,c)){var f=d;d=c,c=f}"string"==typeof b&&(b=Ve(b)),Ra(a,{from:c,to:d,text:b,origin:e},null)}
// POSITION OBJECT
function Ya(a,b){return this instanceof Ya?(this.line=a,void(this.ch=b)):new Ya(a,b)}function Za(a,b){return a.line==b.line&&a.ch==b.ch}function $a(a,b){return a.line<b.line||a.line==b.line&&a.ch<b.ch}function _a(a,b){return a.line-b.line||a.ch-b.ch}function ab(a){return Ya(a.line,a.ch)}
// SELECTION
function bb(a,b){return Math.max(a.first,Math.min(b,a.first+a.size-1))}function cb(a,b){if(b.line<a.first)return Ya(a.first,0);var c=a.first+a.size-1;return b.line>c?Ya(c,xc(a,c).text.length):db(b,xc(a,b.line).text.length)}function db(a,b){var c=a.ch;return null==c||c>b?Ya(a.line,b):c<0?Ya(a.line,0):a}function eb(a,b){return b>=a.first&&b<a.first+a.size}
// If shift is held, this will move the selection anchor. Otherwise,
// it'll set the whole selection.
function fb(a,b,c,d){if(a.sel.shift||a.sel.extend){var e=a.sel.anchor;if(c){var f=$a(b,e);f!=$a(c,e)?(e=b,b=c):f!=$a(b,c)&&(b=c)}hb(a,e,b,d)}else hb(a,b,c||b,d);a.cm&&(a.cm.curOp.userSelChange=!0)}function gb(a,b,c){var d={anchor:b,head:c};return Zc(a,"beforeSelectionChange",a,d),a.cm&&Zc(a.cm,"beforeSelectionChange",a.cm,d),d.anchor=cb(a,d.anchor),d.head=cb(a,d.head),d}
// Update the selection. Last two args are only used by
// updateDoc, since they have to be expressed in the line
// numbers before the update.
function hb(a,b,c,d,e){if(!e&&bd(a,"beforeSelectionChange")||a.cm&&bd(a.cm,"beforeSelectionChange")){var f=gb(a,b,c);c=f.head,b=f.anchor}var g=a.sel;if(g.goalColumn=null,null==d&&(d=$a(c,g.head)?-1:1),
// Skip over atomic spans.
!e&&Za(b,g.anchor)||(b=jb(a,b,d,"push"!=e)),!e&&Za(c,g.head)||(c=jb(a,c,d,"push"!=e)),!Za(g.anchor,b)||!Za(g.head,c)){g.anchor=b,g.head=c;var h=$a(c,b);g.from=h?c:b,g.to=h?b:c,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=a.cm.curOp.cursorActivity=!0),$c(a,"cursorActivity",a)}}function ib(a){hb(a.doc,a.doc.sel.from,a.doc.sel.to,null,"push")}function jb(a,b,c,d){var e=!1,f=b,g=c||1;a.cantEdit=!1;a:for(;;){var h=xc(a,f.line);if(h.markedSpans)for(var i=0;i<h.markedSpans.length;++i){var j=h.markedSpans[i],k=j.marker;if((null==j.from||(k.inclusiveLeft?j.from<=f.ch:j.from<f.ch))&&(null==j.to||(k.inclusiveRight?j.to>=f.ch:j.to>f.ch))){if(d&&(Zc(k,"beforeCursorEnter"),k.explicitlyCleared)){if(h.markedSpans){--i;continue}break}if(!k.atomic)continue;var l=k.find()[g<0?"from":"to"];if(Za(l,f)&&(l.ch+=g,l.ch<0?l=l.line>a.first?cb(a,Ya(l.line-1)):null:l.ch>h.text.length&&(l=l.line<a.first+a.size-1?Ya(l.line+1,0):null),!l)){if(e)
// Driven in a corner -- no valid cursor position found at all
// -- try again *with* clearing, if we didn't already
// Driven in a corner -- no valid cursor position found at all
// -- try again *with* clearing, if we didn't already
// Otherwise, turn off editing until further notice, and return the start of the doc
return d?(a.cantEdit=!0,Ya(a.first,0)):jb(a,b,c,!0);e=!0,l=b,g=-g}f=l;continue a}}return f}}
// SCROLLING
function kb(a){var b=lb(a,a.doc.sel.head,null,a.options.cursorScrollMargin);if(a.state.focused){var c=a.display,d=ud(c.sizer),e=null;if(b.top+d.top<0?e=!0:b.bottom+d.top>(window.innerHeight||document.documentElement.clientHeight)&&(e=!1),null!=e&&!Zd){var f=qd("div","​",null,"position: absolute; top: "+(b.top-c.viewOffset)+"px; height: "+(b.bottom-b.top+Ne)+"px; left: "+b.left+"px; width: 2px;");a.display.lineSpace.appendChild(f),f.scrollIntoView(e),a.display.lineSpace.removeChild(f)}}}function lb(a,b,c,d){for(null==d&&(d=0);;){var e=!1,f=_(a,b),g=c&&c!=b?_(a,c):f,h=nb(a,Math.min(f.left,g.left),Math.min(f.top,g.top)-d,Math.max(f.left,g.left),Math.max(f.bottom,g.bottom)+d),i=a.doc.scrollTop,j=a.doc.scrollLeft;if(null!=h.scrollTop&&(Ba(a,h.scrollTop),Math.abs(a.doc.scrollTop-i)>1&&(e=!0)),null!=h.scrollLeft&&(Ca(a,h.scrollLeft),Math.abs(a.doc.scrollLeft-j)>1&&(e=!0)),!e)return f}}function mb(a,b,c,d,e){var f=nb(a,b,c,d,e);null!=f.scrollTop&&Ba(a,f.scrollTop),null!=f.scrollLeft&&Ca(a,f.scrollLeft)}function nb(a,b,c,d,e){var f=a.display,g=da(a.display);c<0&&(c=0);var h=f.scroller.clientHeight-Ne,i=f.scroller.scrollTop,j={},k=a.doc.height+M(f),l=c<g,m=e>k-g;if(c<i)j.scrollTop=l?0:c;else if(e>i+h){var n=Math.min(c,(m?k:e)-h);n!=i&&(j.scrollTop=n)}var o=f.scroller.clientWidth-Ne,p=f.scroller.scrollLeft;b+=f.gutters.offsetWidth,d+=f.gutters.offsetWidth;var q=f.gutters.offsetWidth,r=b<q+10;return b<p+q||r?(r&&(b=0),j.scrollLeft=Math.max(0,b-10-q)):d>o+p-3&&(j.scrollLeft=d+10-o),j}function ob(a,b,c){a.curOp.updateScrollPos={scrollLeft:null==b?a.doc.scrollLeft:b,scrollTop:null==c?a.doc.scrollTop:c}}function pb(a,b,c){var d=a.curOp.updateScrollPos||(a.curOp.updateScrollPos={scrollLeft:a.doc.scrollLeft,scrollTop:a.doc.scrollTop}),e=a.display.scroller;d.scrollTop=Math.max(0,Math.min(e.scrollHeight-e.clientHeight,d.scrollTop+c)),d.scrollLeft=Math.max(0,Math.min(e.scrollWidth-e.clientWidth,d.scrollLeft+b))}
// API UTILITIES
function qb(a,b,c,d){var e,f=a.doc;null==c&&(c="add"),"smart"==c&&(a.doc.mode.indent?e=K(a,b):c="prev");var g=a.options.tabSize,h=xc(f,b),i=ed(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var j,k=h.text.match(/^\s*/)[0];if(d||/\S/.test(h.text)){if("smart"==c&&(j=a.doc.mode.indent(e,h.text.slice(k.length),h.text),j==Oe)){if(!d)return;c="prev"}}else j=0,c="not";"prev"==c?j=b>f.first?ed(xc(f,b-1).text,null,g):0:"add"==c?j=i+a.options.indentUnit:"subtract"==c?j=i-a.options.indentUnit:"number"==typeof c&&(j=i+c),j=Math.max(0,j);var l="",m=0;if(a.options.indentWithTabs)for(var n=Math.floor(j/g);n;--n)m+=g,l+="\t";m<j&&(l+=fd(j-m)),l!=k?Xa(a.doc,l,Ya(b,0),Ya(b,k.length),"+input"):f.sel.head.line==b&&f.sel.head.ch<k.length&&hb(f,Ya(b,k.length),Ya(b,k.length),1),h.stateAfter=null}function rb(a,b,c){var d=b,e=b,f=a.doc;return"number"==typeof b?e=xc(f,bb(f,b)):d=Bc(b),null==d?null:c(e,d)?(ka(a,d,d+1),e):null}function sb(a,b,c,d,e){function f(){var b=h+c;return b<a.first||b>=a.first+a.size?l=!1:(h=b,k=xc(a,b))}function g(a){var b=(e?Id:Jd)(k,i,c,!0);if(null==b){if(a||!f())return l=!1;i=e?(c<0?Cd:Bd)(k):c<0?k.text.length:0}else i=b;return!0}var h=b.line,i=b.ch,j=c,k=xc(a,h),l=!0;if("char"==d)g();else if("column"==d)g(!0);else if("word"==d||"group"==d)for(var m=null,n="group"==d,o=!0;;o=!1){if(c<0&&!g(!o))break;var p=k.text.charAt(i)||"\n",q=nd(p)?"w":n&&"\n"==p?"n":!n||/\s/.test(p)?null:"p";if(!n||o||q||(q="s"),m&&m!=q){c<0&&(c=1,g());break}if(q&&(m=q),c>0&&!g(!o))break}var r=jb(a,Ya(h,i),j,!0);return l||(r.hitSide=!0),r}function tb(a,b,c,d){var e,f=a.doc,g=b.left;if("page"==d){var h=Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);e=b.top+c*(h-(c<0?1.5:.5)*da(a.display))}else"line"==d&&(e=c>0?b.bottom+3:b.top-3);for(;;){var i=ba(a,g,e);if(!i.outside)break;if(c<0?e<=0:e>=f.height){i.hitSide=!0;break}e+=5*c}return i}function ub(a,b){var c=b.ch,d=b.ch;if(a){(b.xRel<0||d==a.length)&&c?--c:++d;var e=a.charAt(c),f=nd(e)?nd:/\s/.test(e)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!nd(a)};while(c>0&&f(a.charAt(c-1)))--c;while(d<a.length&&f(a.charAt(d)))++d}return{from:Ya(b.line,c),to:Ya(b.line,d)}}function vb(a,b){fb(a.doc,Ya(b,0),cb(a.doc,Ya(b+1,0)))}function wb(b,c,d,e){a.defaults[b]=c,d&&(se[b]=e?function(a,b,c){c!=ue&&d(a,b,c)}:d)}
// MODE STATE HANDLING
// Utility functions for working with state. Exported because modes
// sometimes need to do this.
function xb(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c}function yb(a,b,c){return!a.startState||a.startState(b,c)}
// KEYMAP DISPATCH
function zb(a){return"string"==typeof a?Be[a]:a}function Ab(a,b,c){function d(b){b=zb(b);var e=b[a];if(e===!1)return"stop";if(null!=e&&c(e))return!0;if(b.nofallthrough)return"stop";var f=b.fallthrough;if(null==f)return!1;if("[object Array]"!=Object.prototype.toString.call(f))return d(f);for(var g=0,h=f.length;g<h;++g){var i=d(f[g]);if(i)return i}return!1}for(var e=0;e<b.length;++e){var f=d(b[e]);if(f)return"stop"!=f}}function Bb(a){var b=Ye[a.keyCode];return"Ctrl"==b||"Alt"==b||"Shift"==b||"Mod"==b}function Cb(a,b){if(Ud&&34==a.keyCode&&a["char"])return!1;var c=Ye[a.keyCode];return null!=c&&!a.altGraphKey&&(a.altKey&&(c="Alt-"+c),(ge?a.metaKey:a.ctrlKey)&&(c="Ctrl-"+c),(ge?a.ctrlKey:a.metaKey)&&(c="Cmd-"+c),!b&&a.shiftKey&&(c="Shift-"+c),c)}
// STRING STREAM
// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.
// The character stream used by a mode's parser.
function Db(a,b){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}
// TEXTMARKERS
function Eb(a,b){this.lines=[],this.type=b,this.doc=a}function Fb(a,b,c,d,e){if(d&&d.shared)return Hb(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return ha(a.cm,Fb)(a,b,c,d,e);var f=new Eb(a,e);if(d&&kd(d,f),$a(c,b)||Za(b,c)&&f.clearWhenEmpty!==!1)return f;if(f.replacedWith&&(f.collapsed=!0,f.replacedWith=qd("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||(f.replacedWith.ignoreEvents=!0)),f.collapsed){if(Xb(a,b.line,b,c,f)||b.line!=c.line&&Xb(a,c.line,b,c,f))throw new Error("Inserting collapsed marker partially overlapping an existing one");je=!0}f.addToHistory&&Ic(a,{from:b,to:c,origin:"markText"},{head:a.sel.head,anchor:a.sel.anchor},NaN);var g,h=b.line,i=a.cm;return a.iter(h,c.line+1,function(d){i&&f.collapsed&&!i.options.lineWrapping&&Yb(a,d)==i.display.maxLine&&(g=!0);var e={from:null,to:null,marker:f};h==b.line&&(e.from=b.ch),h==c.line&&(e.to=c.ch),f.collapsed&&h!=b.line&&Ac(d,0),Kb(d,e),++h}),f.collapsed&&a.iter(b.line,c.line+1,function(b){Zb(a,b)&&Ac(b,0)}),f.clearOnEnter&&Xc(f,"beforeCursorEnter",function(){f.clear()}),f.readOnly&&(ie=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory()),f.collapsed&&(f.id=++Ce,f.atomic=!0),i&&(g&&(i.curOp.updateMaxLine=!0),(f.className||f.title||f.startStyle||f.endStyle||f.collapsed)&&ka(i,b.line,c.line+1),f.atomic&&ib(i)),f}
// SHARED TEXTMARKERS
function Gb(a,b){this.markers=a,this.primary=b;for(var c=0,d=this;c<a.length;++c)a[c].parent=this,Xc(a[c],"clear",function(){d.clear()})}function Hb(a,b,c,d,e){d=kd(d),d.shared=!1;var f=[Fb(a,b,c,d,e)],g=f[0],h=d.replacedWith;return vc(a,function(a){h&&(d.replacedWith=h.cloneNode(!0)),f.push(Fb(a,cb(a,b),cb(a,c),d,e));for(var i=0;i<a.linked.length;++i)if(a.linked[i].isParent)return;g=gd(f)}),new Gb(f,g)}
// TEXTMARKER SPANS
function Ib(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function Jb(a,b){for(var c,d=0;d<a.length;++d)a[d]!=b&&(c||(c=[])).push(a[d]);return c}function Kb(a,b){a.markedSpans=a.markedSpans?a.markedSpans.concat([b]):[b],b.marker.attachLine(a)}function Lb(a,b,c){if(a)for(var d,e=0;e<a.length;++e){var f=a[e],g=f.marker,h=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);if(h||f.from==b&&"bookmark"==g.type&&(!c||!f.marker.insertLeft)){var i=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);(d||(d=[])).push({from:f.from,to:i?null:f.to,marker:g})}}return d}function Mb(a,b,c){if(a)for(var d,e=0;e<a.length;++e){var f=a[e],g=f.marker,h=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);if(h||f.from==b&&"bookmark"==g.type&&(!c||f.marker.insertLeft)){var i=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);(d||(d=[])).push({from:i?null:f.from-b,to:null==f.to?null:f.to-b,marker:g})}}return d}function Nb(a,b){var c=eb(a,b.from.line)&&xc(a,b.from.line).markedSpans,d=eb(a,b.to.line)&&xc(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=Za(b.from,b.to),h=Lb(c,e,g),i=Mb(d,f,g),j=1==b.text.length,k=gd(b.text).length+(j?e:0);if(h)
// Fix up .to properties of first
for(var l=0;l<h.length;++l){var m=h[l];if(null==m.to){var n=Ib(i,m.marker);n?j&&(m.to=null==n.to?null:n.to+k):m.to=e}}if(i)
// Fix up .from in last (or move them into first in case of sameLine)
for(var l=0;l<i.length;++l){var m=i[l];if(null!=m.to&&(m.to+=k),null==m.from){var n=Ib(h,m.marker);n||(m.from=k,j&&(h||(h=[])).push(m))}else m.from+=k,j&&(h||(h=[])).push(m)}
// Make sure we didn't create any zero-length spans
h&&(h=Ob(h)),i&&i!=h&&(i=Ob(i));var o=[h];if(!j){
// Fill gap with whole-line-spans
var p,q=b.text.length-2;if(q>0&&h)for(var l=0;l<h.length;++l)null==h[l].to&&(p||(p=[])).push({from:null,to:null,marker:h[l].marker});for(var l=0;l<q;++l)o.push(p);o.push(i)}return o}function Ob(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&c.marker.clearWhenEmpty!==!1&&a.splice(b--,1)}return a.length?a:null}function Pb(a,b){var c=Kc(a,b),d=Nb(a,b);if(!c)return d;if(!d)return c;for(var e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g)a:for(var h=0;h<g.length;++h){for(var i=g[h],j=0;j<f.length;++j)if(f[j].marker==i.marker)continue a;f.push(i)}else g&&(c[e]=g)}return c}function Qb(a,b,c){var d=null;if(a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&id(d,c)!=-1||(d||(d=[])).push(c)}}),!d)return null;for(var e=[{from:b,to:c}],f=0;f<d.length;++f)for(var g=d[f],h=g.find(),i=0;i<e.length;++i){var j=e[i];if(!$a(j.to,h.from)&&!$a(h.to,j.from)){var k=[i,1];($a(j.from,h.from)||!g.inclusiveLeft&&Za(j.from,h.from))&&k.push({from:j.from,to:h.from}),($a(h.to,j.to)||!g.inclusiveRight&&Za(j.to,h.to))&&k.push({from:h.to,to:j.to}),e.splice.apply(e,k),i+=k.length-1}}return e}function Rb(a){return a.inclusiveLeft?-1:0}function Sb(a){return a.inclusiveRight?1:0}function Tb(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var d=a.find(),e=b.find(),f=_a(d.from,e.from)||Rb(a)-Rb(b);if(f)return-f;var g=_a(d.to,e.to)||Sb(a)-Sb(b);return g?g:b.id-a.id}function Ub(a,b){var c,d=je&&a.markedSpans;if(d)for(var e,f=0;f<d.length;++f)e=d[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!c||Tb(c,e.marker)<0)&&(c=e.marker);return c}function Vb(a){return Ub(a,!0)}function Wb(a){return Ub(a,!1)}function Xb(a,b,c,d,e){var f=xc(a,b),g=je&&f.markedSpans;if(g)for(var h=0;h<g.length;++h){var i=g[h];if(i.marker.collapsed){var j=i.marker.find(!0),k=_a(j.from,c)||Rb(i.marker)-Rb(e),l=_a(j.to,d)||Sb(i.marker)-Sb(e);if(!(k>=0&&l<=0||k<=0&&l>=0)&&(k<=0&&(_a(j.to,c)||Sb(i.marker)-Rb(e))>0||k>=0&&(_a(j.from,d)||Rb(i.marker)-Sb(e))<0))return!0}}}function Yb(a,b){var c;while(c=Vb(b))b=xc(a,c.find().from.line);return b}function Zb(a,b){var c=je&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed){if(null==d.from)return!0;if(!d.marker.replacedWith&&0==d.from&&d.marker.inclusiveLeft&&$b(a,b,d))return!0}}function $b(a,b,c){if(null==c.to){var d=c.marker.find().to,e=xc(a,d.line);return $b(a,e,Ib(e.markedSpans,c.marker))}if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var f,g=0;g<b.markedSpans.length;++g)if(f=b.markedSpans[g],f.marker.collapsed&&!f.marker.replacedWith&&f.from==c.to&&(null==f.to||f.to!=c.from)&&(f.marker.inclusiveLeft||c.marker.inclusiveRight)&&$b(a,b,f))return!0}function _b(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function ac(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function bc(a){return function(){var b=!this.cm.curOp;b&&fa(this.cm);try{var c=a.apply(this,arguments)}finally{b&&ga(this.cm)}return c}}function cc(a){return null!=a.height?a.height:(a.node.parentNode&&1==a.node.parentNode.nodeType||sd(a.cm.display.measure,qd("div",[a.node],null,"position: relative")),a.height=a.node.offsetHeight)}function dc(a,b,c,d){var e=new De(a,c,d);return e.noHScroll&&(a.display.alignWidgets=!0),rb(a,b,function(b){var c=b.widgets||(b.widgets=[]);if(null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e),e.line=b,!Zb(a.doc,b)||e.showIfHidden){var d=Dc(a,b)<a.doc.scrollTop;Ac(b,b.height+cc(e)),d&&pb(a,0,e.height),a.curOp.forceUpdate=!0}return!0}),e}function ec(a,b,c,d){a.text=b,a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null),null!=a.order&&(a.order=null),_b(a),ac(a,c);var e=d?d(a):1;e!=a.height&&Ac(a,e)}function fc(a){a.parent=null,_b(a)}
// Run the given mode's parser over a line, update the styles
// array, which contains alternating fragments of text and CSS
// classes.
function gc(b,c,d,e,f,g){var h=d.flattenSpans;null==h&&(h=b.options.flattenSpans);var i,j=0,k=null,l=new Db(c,b.options.tabSize);""==c&&d.blankLine&&d.blankLine(e);while(!l.eol()){if(l.pos>b.options.maxHighlightLength?(h=!1,g&&jc(b,c,e,l.pos),l.pos=c.length,i=null):i=d.token(l,e),b.options.addModeClass){var m=a.innerMode(d,e).mode.name;m&&(i="m-"+(i?m+" "+i:m))}h&&k==i||(j<l.start&&f(l.start,k),j=l.start,k=i),l.start=l.pos}while(j<l.pos){
// Webkit seems to refuse to render text nodes longer than 57444 characters
var n=Math.min(l.pos,j+5e4);f(n,k),j=n}}function hc(a,b,c,d){
// A styles array always starts with a number identifying the
// mode/overlays that it is based on (for easy invalidation).
var e=[a.state.modeGen];
// Compute the base array of styles
gc(a,b.text,a.doc.mode,c,function(a,b){e.push(a,b)},d);
// Run overlays, adjust style array.
for(var f=0;f<a.state.overlays.length;++f){var g=a.state.overlays[f],h=1,i=0;gc(a,b.text,g.mode,!0,function(a,b){var c=h;
// Ensure there's a token end at the current position, and that i points at it
while(i<a){var d=e[h];d>a&&e.splice(h,1,a,e[h+1],d),h+=2,i=Math.min(a,d)}if(b)if(g.opaque)e.splice(c,h-c,a,b),h=c+2;else for(;c<h;c+=2){var f=e[c+1];e[c+1]=f?f+" "+b:b}})}return e}function ic(a,b){return b.styles&&b.styles[0]==a.state.modeGen||(b.styles=hc(a,b,b.stateAfter=K(a,Bc(b)))),b.styles}
// Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array.
function jc(a,b,c,d){var e=a.doc.mode,f=new Db(b,a.options.tabSize);f.start=f.pos=d||0,""==b&&e.blankLine&&e.blankLine(c);while(!f.eol()&&f.pos<=a.options.maxHighlightLength)e.token(f,c),f.start=f.pos}function kc(a,b){if(!a)return null;for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:new RegExp("(?:^|s)"+c[2]+"(?:$|s)").test(b[d])||(b[d]+=" "+c[2])}if(/^\s*$/.test(a))return null;var e=b.cm.options.addModeClass?Ge:Fe;return e[a]||(e[a]=a.replace(/\S+/g,"cm-$&"))}function lc(a,b,c,d){var e,f=b,g=!0;while(e=Vb(f))f=xc(a.doc,e.find().from.line);var h={pre:qd("pre"),col:0,pos:0,measure:null,measuredSomething:!1,cm:a,copyWidgets:d};do{f.text&&(g=!1),h.measure=f==b&&c,h.pos=0,h.addToken=h.measure?oc:nc,(Qd||Rd)&&a.getOption("lineWrapping")&&(h.addToken=pc(h.addToken));var i=rc(f,h,ic(a,f));c&&f==b&&!h.measuredSomething&&(c[0]=h.pre.appendChild(xd(a.display.measure)),h.measuredSomething=!0),i&&(f=xc(a.doc,i.to.line))}while(i);!c||h.measuredSomething||c[0]||(c[0]=h.pre.appendChild(g?qd("span"," "):xd(a.display.measure))),h.pre.firstChild||Zb(a.doc,b)||h.pre.appendChild(document.createTextNode(" "));var j;
// Work around problem with the reported dimensions of single-char
// direction spans on IE (issue #1129). See also the comment in
// cursorCoords.
if(c&&Qd&&(j=Ec(f))){var k=j.length-1;j[k].from==j[k].to&&--k;var l=j[k],m=j[k-1];if(l.from+1==l.to&&m&&l.level<m.level){var n=c[h.pos-1];n&&n.parentNode.insertBefore(n.measureRight=xd(a.display.measure),n.nextSibling)}}var o=h.textClass?h.textClass+" "+(b.textClass||""):b.textClass;return o&&(h.pre.className=o),Zc(a,"renderLine",a,b,h.pre),h}function mc(a){var b=qd("span","•","cm-invalidchar");return b.title="\\u"+a.charCodeAt(0).toString(16),b}function nc(a,b,c,d,e,f){if(b){var g=a.cm.options.specialChars;if(g.test(b)){var h=document.createDocumentFragment(),i=0;while(!0){g.lastIndex=i;var j=g.exec(b),k=j?j.index-i:b.length-i;if(k&&(h.appendChild(document.createTextNode(b.slice(i,i+k))),a.col+=k),!j)break;if(i+=k+1,"\t"==j[0]){var l=a.cm.options.tabSize,m=l-a.col%l;h.appendChild(qd("span",fd(m),"cm-tab")),a.col+=m}else{var n=a.cm.options.specialCharPlaceholder(j[0]);h.appendChild(n),a.col+=1}}}else{a.col+=b.length;var h=document.createTextNode(b)}if(c||d||e||a.measure){var o=c||"";d&&(o+=d),e&&(o+=e);var n=qd("span",[h],o);return f&&(n.title=f),a.pre.appendChild(n)}a.pre.appendChild(h)}}function oc(a,b,c,d,e){for(var f=a.cm.options.lineWrapping,g=0;g<b.length;++g){var h=0==g,i=g+1;while(i<b.length&&pd(b.charAt(i)))++i;var j=b.slice(g,i);g=i-1,g&&f&&vd(b,g)&&a.pre.appendChild(qd("wbr"));var k=a.measure[a.pos],l=a.measure[a.pos]=nc(a,j,c,h&&d,g==b.length-1&&e);k&&(l.leftSide=k.leftSide||k),
// In IE single-space nodes wrap differently than spaces
// embedded in larger text nodes, except when set to
// white-space: normal (issue #1268).
Ld&&f&&" "==j&&g&&!/\s/.test(b.charAt(g-1))&&g<b.length-1&&!/\s/.test(b.charAt(g+1))&&(l.style.whiteSpace="normal"),a.pos+=j.length}b.length&&(a.measuredSomething=!0)}function pc(a){function b(a){for(var b=" ",c=0;c<a.length-2;++c)b+=c%2?" ":" ";return b+=" "}return function(c,d,e,f,g,h){return a(c,d.replace(/ {3,}/g,b),e,f,g,h)}}function qc(a,b,c,d){var e=!d&&c.replacedWith;if(e&&(a.copyWidgets&&(e=e.cloneNode(!0)),a.pre.appendChild(e),a.measure)){if(b)a.measure[a.pos]=e;else{var f=xd(a.cm.display.measure);if("bookmark"!=c.type||c.insertLeft){if(a.measure[a.pos])return;a.measure[a.pos]=a.pre.insertBefore(f,e)}else a.measure[a.pos]=a.pre.appendChild(f)}a.measuredSomething=!0}a.pos+=b}
// Outputs a number of spans to make up a line, taking highlighting
// and marked text into account.
function rc(a,b,c){var d=a.markedSpans,e=a.text,f=0;if(d)for(var g,h,i,j,k,l,m=e.length,n=0,o=1,p="",q=0;;){if(q==n){// Update current marker set
h=i=j=k="",l=null,q=1/0;for(var r=[],s=0;s<d.length;++s){var t=d[s],u=t.marker;t.from<=n&&(null==t.to||t.to>n)?(null!=t.to&&q>t.to&&(q=t.to,i=""),u.className&&(h+=" "+u.className),u.startStyle&&t.from==n&&(j+=" "+u.startStyle),u.endStyle&&t.to==q&&(i+=" "+u.endStyle),u.title&&!k&&(k=u.title),u.collapsed&&(!l||Tb(l.marker,u)<0)&&(l=t)):t.from>n&&q>t.from&&(q=t.from),"bookmark"==u.type&&t.from==n&&u.replacedWith&&r.push(u)}if(l&&(l.from||0)==n&&(qc(b,(null==l.to?m:l.to)-n,l.marker,null==l.from),null==l.to))return l.marker.find();if(!l&&r.length)for(var s=0;s<r.length;++s)qc(b,0,r[s])}if(n>=m)break;var v=Math.min(m,q);while(!0){if(p){var w=n+p.length;if(!l){var x=w>v?p.slice(0,v-n):p;b.addToken(b,x,g?g+h:h,j,n+x.length==q?i:"",k)}if(w>=v){p=p.slice(v-n),n=v;break}n=w,j=""}p=e.slice(f,f=c[o++]),g=kc(c[o++],b)}}else for(var o=1;o<c.length;o+=2)b.addToken(b,e.slice(f,f=c[o]),kc(c[o+1],b))}
// DOCUMENT DATA STRUCTURE
function sc(a,b,c,d,e){function f(a){return c?c[a]:null}function g(a,c,d){ec(a,c,d,e),$c(a,"change",a,b)}var h=b.from,i=b.to,j=b.text,k=xc(a,h.line),l=xc(a,i.line),m=gd(j),n=f(j.length-1),o=i.line-h.line;
// First adjust the line structure
if(0!=h.ch||0!=i.ch||""!=m||a.cm&&!a.cm.options.wholeLineUpdateBefore)if(k==l)if(1==j.length)g(k,k.text.slice(0,h.ch)+m+k.text.slice(i.ch),n);else{for(var p=[],q=1,r=j.length-1;q<r;++q)p.push(new Ee(j[q],f(q),e));p.push(new Ee(m+k.text.slice(i.ch),n,e)),g(k,k.text.slice(0,h.ch)+j[0],f(0)),a.insert(h.line+1,p)}else if(1==j.length)g(k,k.text.slice(0,h.ch)+j[0]+l.text.slice(i.ch),f(0)),a.remove(h.line+1,o);else{g(k,k.text.slice(0,h.ch)+j[0],f(0)),g(l,m+l.text.slice(i.ch),n);for(var q=1,r=j.length-1,p=[];q<r;++q)p.push(new Ee(j[q],f(q),e));o>1&&a.remove(h.line+1,o-1),a.insert(h.line+1,p)}else{
// This is a whole-line replace. Treated specially to make
// sure line objects move the way they are supposed to.
for(var q=0,r=j.length-1,p=[];q<r;++q)p.push(new Ee(j[q],f(q),e));g(l,l.text,n),o&&a.remove(h.line,o),p.length&&a.insert(h.line,p)}$c(a,"change",a,b),hb(a,d.anchor,d.head,null,!0)}function tc(a){this.lines=a,this.parent=null;for(var b=0,c=a.length,d=0;b<c;++b)a[b].parent=this,d+=a[b].height;this.height=d}function uc(a){this.children=a;for(var b=0,c=0,d=0,e=a.length;d<e;++d){var f=a[d];b+=f.chunkSize(),c+=f.height,f.parent=this}this.size=b,this.height=c,this.parent=null}function vc(a,b,c){function d(a,e,f){if(a.linked)for(var g=0;g<a.linked.length;++g){var h=a.linked[g];if(h.doc!=e){var i=f&&h.sharedHist;c&&!i||(b(h.doc,i),d(h.doc,a,i))}}}d(a,null,!0)}function wc(a,b){if(b.cm)throw new Error("This document is already in use.");a.doc=b,b.cm=a,g(a),c(a),a.options.lineWrapping||m(a),a.options.mode=b.modeOption,ka(a)}
// LINE UTILITIES
function xc(a,b){b-=a.first;while(!a.lines)for(var c=0;;++c){var d=a.children[c],e=d.chunkSize();if(b<e){a=d;break}b-=e}return a.lines[b]}function yc(a,b,c){var d=[],e=b.line;return a.iter(b.line,c.line+1,function(a){var f=a.text;e==c.line&&(f=f.slice(0,c.ch)),e==b.line&&(f=f.slice(b.ch)),d.push(f),++e}),d}function zc(a,b,c){var d=[];return a.iter(b,c,function(a){d.push(a.text)}),d}function Ac(a,b){for(var c=b-a.height,d=a;d;d=d.parent)d.height+=c}function Bc(a){if(null==a.parent)return null;for(var b=a.parent,c=id(b.lines,a),d=b.parent;d;b=d,d=d.parent)for(var e=0;;++e){if(d.children[e]==b)break;c+=d.children[e].chunkSize()}return c+b.first}function Cc(a,b){var c=a.first;a:do{for(var d=0,e=a.children.length;d<e;++d){var f=a.children[d],g=f.height;if(b<g){a=f;continue a}b-=g,c+=f.chunkSize()}return c}while(!a.lines);for(var d=0,e=a.lines.length;d<e;++d){var h=a.lines[d],i=h.height;if(b<i)break;b-=i}return c+d}function Dc(a,b){b=Yb(a.doc,b);for(var c=0,d=b.parent,e=0;e<d.lines.length;++e){var f=d.lines[e];if(f==b)break;c+=f.height}for(var g=d.parent;g;d=g,g=d.parent)for(var e=0;e<g.children.length;++e){var h=g.children[e];if(h==d)break;c+=h.height}return c}function Ec(a){var b=a.order;return null==b&&(b=a.order=$e(a.text)),b}
// HISTORY
function Fc(a){return{
// Arrays of history events. Doing something adds an event to
// done and clears undo. Undoing moves events from done to
// undone, redoing moves them in the other direction.
done:[],undone:[],undoDepth:1/0,
// Used to track when changes can be merged into a single undo
// event
lastTime:0,lastOp:null,lastOrigin:null,
// Used by the isClean() method
generation:a||1,maxGeneration:a||1}}function Gc(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans),++f})}function Hc(a,b){var c={line:b.from.line,ch:b.from.ch},d={from:c,to:re(b),text:yc(a,b.from,b.to)};return Gc(a,d,b.from.line,b.to.line+1),vc(a,function(a){Gc(a,d,b.from.line,b.to.line+1)},!0),d}function Ic(a,b,c,d){var e=a.history;e.undone.length=0;var f=+new Date,g=gd(e.done);if(g&&(e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))){
// Merge this change into the last event
var h=gd(g.changes);Za(b.from,b.to)&&Za(b.from,h.to)?
// Optimized case for simple insertion -- don't want to add
// new changesets for every character typed
h.to=re(b):
// Add new sub-event
g.changes.push(Hc(a,b)),g.anchorAfter=c.anchor,g.headAfter=c.head}else{
// Can not be merged, start a new event.
g={changes:[Hc(a,b)],generation:e.generation,anchorBefore:a.sel.anchor,headBefore:a.sel.head,anchorAfter:c.anchor,headAfter:c.head},e.done.push(g);while(e.done.length>e.undoDepth)e.done.shift()}e.generation=++e.maxGeneration,e.lastTime=f,e.lastOp=d,e.lastOrigin=b.origin,h||Zc(a,"historyAdded")}function Jc(a){if(!a)return null;for(var b,c=0;c<a.length;++c)a[c].marker.explicitlyCleared?b||(b=a.slice(0,c)):b&&b.push(a[c]);return b?b.length?b:null:a}function Kc(a,b){var c=b["spans_"+a.id];if(!c)return null;for(var d=0,e=[];d<b.text.length;++d)e.push(Jc(c[d]));return e}
// Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two
function Lc(a,b){for(var c=0,d=[];c<a.length;++c){var e=a[c],f=e.changes,g=[];d.push({changes:g,anchorBefore:e.anchorBefore,headBefore:e.headBefore,anchorAfter:e.anchorAfter,headAfter:e.headAfter});for(var h=0;h<f.length;++h){var i,j=f[h];if(g.push({from:j.from,to:j.to,text:j.text}),b)for(var k in j)(i=k.match(/^spans_(\d+)$/))&&id(b,Number(i[1]))>-1&&(gd(g)[k]=j[k],delete j[k])}}return d}
// Rebasing/resetting history to deal with externally-sourced changes
function Mc(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}
// Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.
function Nc(a,b,c,d){for(var e=0;e<a.length;++e){for(var f=a[e],g=!0,h=0;h<f.changes.length;++h){var i=f.changes[h];if(f.copied||(i.from=ab(i.from),i.to=ab(i.to)),c<i.from.line)i.from.line+=d,i.to.line+=d;else if(b<=i.to.line){g=!1;break}}f.copied||(f.anchorBefore=ab(f.anchorBefore),f.headBefore=ab(f.headBefore),f.anchorAfter=ab(f.anchorAfter),f.readAfter=ab(f.headAfter),f.copied=!0),g?(Mc(f.anchorBefore),Mc(f.headBefore),Mc(f.anchorAfter),Mc(f.headAfter)):(a.splice(0,e+1),e=0)}}function Oc(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;Nc(a.done,c,d,e),Nc(a.undone,c,d,e)}
// EVENT OPERATORS
function Pc(){Uc(this)}
// Ensure an event has a stop method.
function Qc(a){return a.stop||(a.stop=Pc),a}function Rc(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function Sc(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function Tc(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Uc(a){Rc(a),Sc(a)}function Vc(a){return a.target||a.srcElement}function Wc(a){var b=a.which;return null==b&&(1&a.button?b=1:2&a.button?b=3:4&a.button&&(b=2)),ae&&a.ctrlKey&&1==b&&(b=3),b}
// EVENT HANDLING
function Xc(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a._handlers||(a._handlers={}),e=d[b]||(d[b]=[]);e.push(c)}}function Yc(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=a._handlers&&a._handlers[b];if(!d)return;for(var e=0;e<d.length;++e)if(d[e]==c){d.splice(e,1);break}}}function Zc(a,b){var c=a._handlers&&a._handlers[b];if(c)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)}function $c(a,b){function c(a){return function(){a.apply(null,e)}}var d=a._handlers&&a._handlers[b];if(d){var e=Array.prototype.slice.call(arguments,2);Le||(++Me,Le=[],setTimeout(ad,0));for(var f=0;f<d.length;++f)Le.push(c(d[f]))}}function _c(a,b,c){return Zc(a,c||b.type,a,b),Tc(b)||b.codemirrorIgnore}function ad(){--Me;var a=Le;Le=null;for(var b=0;b<a.length;++b)a[b]()}function bd(a,b){var c=a._handlers&&a._handlers[b];return c&&c.length>0}function cd(a){a.prototype.on=function(a,b){Xc(this,a,b)},a.prototype.off=function(a,b){Yc(this,a,b)}}function dd(){this.id=null}
// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function ed(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),b==-1&&(b=a.length));for(var f=d||0,g=e||0;f<b;++f)"\t"==a.charAt(f)?g+=c-g%c:++g;return g}function fd(a){while(Pe.length<=a)Pe.push(gd(Pe)+" ");return Pe[a]}function gd(a){return a[a.length-1]}function hd(a){if($d)// Mobile Safari apparently has a bug where select() is broken.
a.selectionStart=0,a.selectionEnd=a.value.length;else
// Suppress mysterious IE10 errors
try{a.select()}catch(b){}}function id(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;c<d;++c)if(a[c]==b)return c;return-1}function jd(a,b){function c(){}c.prototype=a;var d=new c;return b&&kd(b,d),d}function kd(a,b){b||(b={});for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function ld(a){for(var b=[],c=0;c<a;++c)b.push(void 0);return b}function md(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function nd(a){return/\w/.test(a)||a>""&&(a.toUpperCase()!=a.toLowerCase()||Qe.test(a))}function od(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function pd(a){return a.charCodeAt(0)>=768&&Re.test(a)}
// DOM UTILITIES
function qd(a,b,c,d){var e=document.createElement(a);if(c&&(e.className=c),d&&(e.style.cssText=d),"string"==typeof b)td(e,b);else if(b)for(var f=0;f<b.length;++f)e.appendChild(b[f]);return e}function rd(a){for(var b=a.childNodes.length;b>0;--b)a.removeChild(a.firstChild);return a}function sd(a,b){return rd(a).appendChild(b)}function td(a,b){Nd?(a.innerHTML="",a.appendChild(document.createTextNode(b))):a.textContent=b}function ud(a){return a.getBoundingClientRect()}
// For a reason I have yet to figure out, some browsers disallow
// word wrapping between certain characters *only* if a new inline
// element is started between them. This makes it hard to reliably
// measure the position of things, since that requires inserting an
// extra span. This terribly fragile set of tests matches the
// character combinations that suffer from this phenomenon on the
// various browsers.
function vd(){return!1}function wd(a){if(null!=Te)return Te;var b=qd("div",null,null,"width: 50px; height: 50px; overflow-x: scroll");return sd(a,b),b.offsetWidth&&(Te=b.offsetHeight-b.clientHeight),Te||0}function xd(a){if(null==Ue){var b=qd("span","​");sd(a,qd("span",[b,document.createTextNode("x")])),0!=a.firstChild.offsetHeight&&(Ue=b.offsetWidth<=1&&b.offsetHeight>2&&!Md)}return Ue?qd("span","​"):qd("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")}
// BIDI HELPERS
function yd(a,b,c,d){if(!a)return d(b,c,"ltr");for(var e=!1,f=0;f<a.length;++f){var g=a[f];(g.from<c&&g.to>b||b==c&&g.to==b)&&(d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr"),e=!0)}e||d(b,c,"ltr")}function zd(a){return a.level%2?a.to:a.from}function Ad(a){return a.level%2?a.from:a.to}function Bd(a){var b=Ec(a);return b?zd(b[0]):0}function Cd(a){var b=Ec(a);return b?Ad(gd(b)):a.text.length}function Dd(a,b){var c=xc(a.doc,b),d=Yb(a.doc,c);d!=c&&(b=Bc(d));var e=Ec(d),f=e?e[0].level%2?Cd(d):Bd(d):0;return Ya(b,f)}function Ed(a,b){var c,d;while(c=Wb(d=xc(a.doc,b)))b=c.find().to.line;var e=Ec(d),f=e?e[0].level%2?Bd(d):Cd(d):d.text.length;return Ya(b,f)}function Fd(a,b,c){var d=a[0].level;return b==d||c!=d&&b<c}function Gd(a,b){Ze=null;for(var c,d=0;d<a.length;++d){var e=a[d];if(e.from<b&&e.to>b)return d;if(e.from==b||e.to==b){if(null!=c)return Fd(a,e.level,a[c].level)?(e.from!=e.to&&(Ze=c),d):(e.from!=e.to&&(Ze=d),c);c=d}}return c}function Hd(a,b,c,d){if(!d)return b+c;do b+=c;while(b>0&&pd(a.text.charAt(b)));return b}
// This is somewhat involved. It is needed in order to move
// 'visually' through bi-directional text -- i.e., pressing left
// should make the cursor go left, even when in RTL text. The
// tricky part is the 'jumps', where RTL and LTR text touch each
// other. This often requires the cursor offset to move more than
// one unit, in order to visually move one unit.
function Id(a,b,c,d){var e=Ec(a);if(!e)return Jd(a,b,c,d);for(var f=Gd(e,b),g=e[f],h=Hd(a,b,g.level%2?-c:c,d);;){if(h>g.from&&h<g.to)return h;if(h==g.from||h==g.to)return Gd(e,h)==f?h:(g=e[f+=c],c>0==g.level%2?g.to:g.from);if(g=e[f+=c],!g)return null;h=c>0==g.level%2?Hd(a,g.to,-1,d):Hd(a,g.from,1,d)}}function Jd(a,b,c,d){var e=b+c;if(d)while(e>0&&pd(a.text.charAt(e)))e+=c;return e<0||e>a.text.length?null:e}
// BROWSER SNIFFING
// Crude, but necessary to handle a number of hard-to-feature-detect
// bugs and behavior differences.
var Kd=/gecko\/\d/i.test(navigator.userAgent),Ld=/MSIE \d/.test(navigator.userAgent),Md=Ld&&(null==document.documentMode||document.documentMode<8),Nd=Ld&&(null==document.documentMode||document.documentMode<9),Od=Ld&&(null==document.documentMode||document.documentMode<10),Pd=/Trident\/([7-9]|\d{2,})\./.test(navigator.userAgent),Qd=Ld||Pd,Rd=/WebKit\//.test(navigator.userAgent),Sd=Rd&&/Qt\/\d+\.\d+/.test(navigator.userAgent),Td=/Chrome\//.test(navigator.userAgent),Ud=/Opera\//.test(navigator.userAgent),Vd=/Apple Computer/.test(navigator.vendor),Wd=/KHTML\//.test(navigator.userAgent),Xd=/Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent),Yd=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),Zd=/PhantomJS/.test(navigator.userAgent),$d=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),_d=$d||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),ae=$d||/Mac/.test(navigator.platform),be=/win/i.test(navigator.platform),ce=Ud&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);ce&&(ce=Number(ce[1])),ce&&ce>=15&&(Ud=!1,Rd=!0);
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
var de,ee,fe,ge=ae&&(Sd||Ud&&(null==ce||ce<12.11)),he=Kd||Qd&&!Nd,ie=!1,je=!1,ke=0,le=0,me=0,ne=null;
// Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).
Qd?ne=-.53:Kd?ne=15:Td?ne=-.7:Vd&&(ne=-1/3);var oe,pe,qe=null,re=a.changeEnd=function(a){return a.text?Ya(a.from.line+a.text.length-1,gd(a.text).length+(1==a.text.length?a.from.ch:0)):a.to};a.Pos=Ya,
// PROTOTYPE
// The publicly visible API. Note that operation(null, f) means
// 'wrap f in an operation, performed on its `this` parameter'
a.prototype={constructor:a,focus:function(){window.focus(),pa(this),ma(this)},setOption:function(a,b){var c=this.options,d=c[a];c[a]==b&&"mode"!=a||(c[a]=b,se.hasOwnProperty(a)&&ha(this,se[a])(this,b,d))},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](a)},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||"string"!=typeof b[c]&&b[c].name==a)return b.splice(c,1),!0},addOverlay:ha(null,function(b,c){var d=b.token?b:a.getMode(this.options,b);if(d.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:d,modeSpec:b,opaque:c&&c.opaque}),this.state.modeGen++,ka(this)}),removeOverlay:ha(null,function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a)return b.splice(c,1),this.state.modeGen++,void ka(this)}}),indentLine:ha(null,function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract"),eb(this.doc,a)&&qb(this,a,b,c)}),indentSelection:ha(null,function(a){var b=this.doc.sel;if(Za(b.from,b.to))return qb(this,b.from.line,a,!0);for(var c=b.to.line-(b.to.ch?0:1),d=b.from.line;d<=c;++d)qb(this,d,a)}),
// Fetch the parser token for a given character. Useful for hacks
// that want to inspect the mode state (say, for completion).
getTokenAt:function(a,b){var c=this.doc;a=cb(c,a);var d=K(this,a.line,b),e=this.doc.mode,f=xc(c,a.line),g=new Db(f.text,this.options.tabSize);while(g.pos<a.ch&&!g.eol()){g.start=g.pos;var h=e.token(g,d)}return{start:g.start,end:g.pos,string:g.current(),className:h||null,// Deprecated, use 'type' instead
type:h||null,state:d}},getTokenTypeAt:function(a){a=cb(this.doc,a);var b=ic(this,xc(this.doc,a.line)),c=0,d=(b.length-1)/2,e=a.ch;if(0==e)return b[2];for(;;){var f=c+d>>1;if((f?b[2*f-1]:0)>=e)d=f;else{if(!(b[2*f+1]<e))return b[2*f+2];c=f+1}}},getModeAt:function(b){var c=this.doc.mode;return c.innerMode?a.innerMode(c,this.getTokenAt(b).state).mode:c},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var c=[];if(!ze.hasOwnProperty(b))return ze;var d=ze[b],e=this.getModeAt(a);if("string"==typeof e[b])d[e[b]]&&c.push(d[e[b]]);else if(e[b])for(var f=0;f<e[b].length;f++){var g=d[e[b][f]];g&&c.push(g)}else e.helperType&&d[e.helperType]?c.push(d[e.helperType]):d[e.name]&&c.push(d[e.name]);for(var f=0;f<d._global.length;f++){var h=d._global[f];h.pred(e,this)&&id(c,h.val)==-1&&c.push(h.val)}return c},getStateAfter:function(a,b){var c=this.doc;return a=bb(c,null==a?c.first+c.size-1:a),K(this,a+1,b)},cursorCoords:function(a,b){var c,d=this.doc.sel;return c=null==a?d.head:"object"==typeof a?cb(this.doc,a):a?d.from:d.to,_(this,c,b||"page")},charCoords:function(a,b){return $(this,cb(this.doc,a),b||"page")},coordsChar:function(a,b){return a=Z(this,a,b||"page"),ba(this,a.left,a.top)},lineAtHeight:function(a,b){return a=Z(this,{top:a,left:0},b||"page").top,Cc(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b){var c=!1,d=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>d&&(a=d,c=!0);var e=xc(this.doc,a);return Y(this,xc(this.doc,a),{top:0,left:0},b||"page").top+(c?e.height:0)},defaultTextHeight:function(){return da(this.display)},defaultCharWidth:function(){return ea(this.display)},setGutterMarker:ha(null,function(a,b,c){return rb(this,a,function(a){var d=a.gutterMarkers||(a.gutterMarkers={});return d[b]=c,!c&&od(d)&&(a.gutterMarkers=null),!0})}),clearGutter:ha(null,function(a){var b=this,c=b.doc,d=c.first;c.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&(c.gutterMarkers[a]=null,ka(b,d,d+1),od(c.gutterMarkers)&&(c.gutterMarkers=null)),++d})}),addLineClass:ha(null,function(a,b,c){return rb(this,a,function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass";if(a[d]){if(new RegExp("(?:^|\\s)"+c+"(?:$|\\s)").test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:ha(null,function(a,b,c){return rb(this,a,function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass",e=a[d];if(!e)return!1;if(null==c)a[d]=null;else{var f=e.match(new RegExp("(?:^|\\s+)"+c+"(?:$|\\s+)"));if(!f)return!1;var g=f.index+f[0].length;a[d]=e.slice(0,f.index)+(f.index&&g!=e.length?" ":"")+e.slice(g)||null}return!0})}),addLineWidget:ha(null,function(a,b,c){return dc(this,a,b,c)}),removeLineWidget:function(a){a.clear()},lineInfo:function(a){if("number"==typeof a){if(!eb(this.doc,a))return null;var b=a;if(a=xc(this.doc,a),!a)return null}else{var b=Bc(a);if(null==b)return null}return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},getViewport:function(){return{from:this.display.showingFrom,to:this.display.showingTo}},addWidget:function(a,b,c,d,e){var f=this.display;a=_(this,cb(this.doc,a));var g=a.bottom,h=a.left;if(b.style.position="absolute",f.sizer.appendChild(b),"over"==d)g=a.top;else if("above"==d||"near"==d){var i=Math.max(f.wrapper.clientHeight,this.doc.height),j=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);
// Default to positioning above (if specified and possible); otherwise default to positioning below
("above"==d||a.bottom+b.offsetHeight>i)&&a.top>b.offsetHeight?g=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=i&&(g=a.bottom),h+b.offsetWidth>j&&(h=j-b.offsetWidth)}b.style.top=g+"px",b.style.left=b.style.right="","right"==e?(h=f.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==e?h=0:"middle"==e&&(h=(f.sizer.clientWidth-b.offsetWidth)/2),b.style.left=h+"px"),c&&mb(this,h,g,h+b.offsetWidth,g+b.offsetHeight)},triggerOnKeyDown:ha(null,Ja),triggerOnKeyPress:ha(null,Ka),triggerOnKeyUp:ha(null,Ia),execCommand:function(a){if(Ae.hasOwnProperty(a))return Ae[a](this)},findPosH:function(a,b,c,d){var e=1;b<0&&(e=-1,b=-b);for(var f=0,g=cb(this.doc,a);f<b;++f)if(g=sb(this.doc,g,e,c,d),g.hitSide)break;return g},moveH:ha(null,function(a,b){var c,d=this.doc.sel;c=d.shift||d.extend||Za(d.from,d.to)?sb(this.doc,d.head,a,b,this.options.rtlMoveVisually):a<0?d.from:d.to,fb(this.doc,c,c,a)}),deleteH:ha(null,function(a,b){var c=this.doc.sel;Za(c.from,c.to)?Xa(this.doc,"",c.from,sb(this.doc,c.head,a,b,!1),"+delete"):Xa(this.doc,"",c.from,c.to,"+delete"),this.curOp.userSelChange=!0}),findPosV:function(a,b,c,d){var e=1,f=d;b<0&&(e=-1,b=-b);for(var g=0,h=cb(this.doc,a);g<b;++g){var i=_(this,h,"div");if(null==f?f=i.left:i.left=f,h=tb(this,i,e,c),h.hitSide)break}return h},moveV:ha(null,function(a,b){var c,d,e=this.doc.sel;if(e.shift||e.extend||Za(e.from,e.to)){var f=_(this,e.head,"div");null!=e.goalColumn&&(f.left=e.goalColumn),c=tb(this,f,a,b),"page"==b&&pb(this,0,$(this,c,"div").top-f.top),d=f.left}else c=a<0?e.from:e.to;fb(this.doc,c,c,a),null!=d&&(e.goalColumn=d)}),toggleOverwrite:function(a){null!=a&&a==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?this.display.cursor.className+=" CodeMirror-overwrite":this.display.cursor.className=this.display.cursor.className.replace(" CodeMirror-overwrite",""),Zc(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return document.activeElement==this.display.input},scrollTo:ha(null,function(a,b){ob(this,a,b)}),getScrollInfo:function(){var a=this.display.scroller,b=Ne;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-b,width:a.scrollWidth-b,clientHeight:a.clientHeight-b,clientWidth:a.clientWidth-b}},scrollIntoView:ha(null,function(a,b){null==a?a={from:this.doc.sel.head,to:null}:"number"==typeof a?a={from:Ya(a,0),to:null}:null==a.from&&(a={from:a,to:null}),a.to||(a.to=a.from),b||(b=0);var c=a;null!=a.from.line&&(this.curOp.scrollToPos={from:a.from,to:a.to,margin:b},c={from:_(this,a.from),to:_(this,a.to)});var d=nb(this,Math.min(c.from.left,c.to.left),Math.min(c.from.top,c.to.top)-b,Math.max(c.from.right,c.to.right),Math.max(c.from.bottom,c.to.bottom)+b);ob(this,d.scrollLeft,d.scrollTop)}),setSize:ha(null,function(a,b){function c(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a}null!=a&&(this.display.wrapper.style.width=c(a)),null!=b&&(this.display.wrapper.style.height=c(b)),this.options.lineWrapping&&(this.display.measureLineCache.length=this.display.measureLineCachePos=0),this.curOp.forceUpdate=!0,Zc(this,"refresh",this)}),operation:function(a){return ja(this,a)},refresh:ha(null,function(){var a=this.display.cachedTextHeight;V(this),ob(this,this.doc.scrollLeft,this.doc.scrollTop),ka(this),(null==a||Math.abs(a-da(this.display))>.5)&&g(this),Zc(this,"refresh",this)}),swapDoc:ha(null,function(a){var b=this.doc;return b.cm=null,wc(this,a),V(this),oa(this,!0),ob(this,a.scrollLeft,a.scrollTop),$c(this,"swapDoc",this,b),b}),getInputField:function(){return this.display.input},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},cd(a);
// OPTION DEFAULTS
var se=a.optionHandlers={},te=a.defaults={},ue=a.Init={toString:function(){return"CodeMirror.Init"}};
// These two are, on init, called from the constructor because they
// have to be initialized before the editor can start at all.
wb("value","",function(a,b){a.setValue(b)},!0),wb("mode",null,function(a,b){a.doc.modeOption=b,c(a)},!0),wb("indentUnit",2,c,!0),wb("indentWithTabs",!1),wb("smartIndent",!0),wb("tabSize",4,function(a){d(a),V(a),ka(a)},!0),wb("specialChars",/[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/g,function(a,b){a.options.specialChars=new RegExp(b.source+(b.test("\t")?"":"|\t"),"g"),a.refresh()},!0),wb("specialCharPlaceholder",mc,function(a){a.refresh()},!0),wb("electricChars",!0),wb("rtlMoveVisually",!be),wb("wholeLineUpdateBefore",!0),wb("theme","default",function(a){i(a),j(a)},!0),wb("keyMap","default",h),wb("extraKeys",null),wb("onKeyEvent",null),wb("onDragEvent",null),wb("lineWrapping",!1,e,!0),wb("gutters",[],function(a){n(a.options),j(a)},!0),wb("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?t(a.display)+"px":"0",a.refresh()},!0),wb("coverGutterNextToScrollbar",!1,o,!0),wb("lineNumbers",!1,function(a){n(a.options),j(a)},!0),wb("firstLineNumber",1,j,!0),wb("lineNumberFormatter",function(a){return a},j,!0),wb("showCursorWhenSelecting",!1,D,!0),wb("resetSelectionOnContextMenu",!0),wb("readOnly",!1,function(a,b){"nocursor"==b?(Ma(a),a.display.input.blur(),a.display.disabled=!0):(a.display.disabled=!1,b||oa(a,!0))}),wb("disableInput",!1,function(a,b){b||oa(a,!0)},!0),wb("dragDrop",!0),wb("cursorBlinkRate",530),wb("cursorScrollMargin",0),wb("cursorHeight",1),wb("workTime",100),wb("workDelay",100),wb("flattenSpans",!0,d,!0),wb("addModeClass",!1,d,!0),wb("pollInterval",100),wb("undoDepth",40,function(a,b){a.doc.history.undoDepth=b}),wb("historyEventDelay",500),wb("viewportMargin",10,function(a){a.refresh()},!0),wb("maxHighlightLength",1e4,d,!0),wb("crudeMeasuringFrom",1e4),wb("moveInputWithCursor",!0,function(a,b){b||(a.display.inputDiv.style.top=a.display.inputDiv.style.left=0)}),wb("tabindex",null,function(a,b){a.display.input.tabIndex=b||""}),wb("autofocus",null);
// MODE DEFINITION AND QUERYING
// Known modes, by name and by MIME
var ve=a.modes={},we=a.mimeModes={};a.defineMode=function(b,c){if(a.defaults.mode||"null"==b||(a.defaults.mode=b),arguments.length>2){c.dependencies=[];for(var d=2;d<arguments.length;++d)c.dependencies.push(arguments[d])}ve[b]=c},a.defineMIME=function(a,b){we[a]=b},a.resolveMode=function(b){if("string"==typeof b&&we.hasOwnProperty(b))b=we[b];else if(b&&"string"==typeof b.name&&we.hasOwnProperty(b.name)){var c=we[b.name];"string"==typeof c&&(c={name:c}),b=jd(c,b),b.name=c.name}else if("string"==typeof b&&/^[\w\-]+\/[\w\-]+\+xml$/.test(b))return a.resolveMode("application/xml");return"string"==typeof b?{name:b}:b||{name:"null"}},a.getMode=function(b,c){var c=a.resolveMode(c),d=ve[c.name];if(!d)return a.getMode(b,"text/plain");var e=d(b,c);if(xe.hasOwnProperty(c.name)){var f=xe[c.name];for(var g in f)f.hasOwnProperty(g)&&(e.hasOwnProperty(g)&&(e["_"+g]=e[g]),e[g]=f[g])}if(e.name=c.name,c.helperType&&(e.helperType=c.helperType),c.modeProps)for(var g in c.modeProps)e[g]=c.modeProps[g];return e},a.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),a.defineMIME("text/plain","null");var xe=a.modeExtensions={};a.extendMode=function(a,b){var c=xe.hasOwnProperty(a)?xe[a]:xe[a]={};kd(b,c)},
// EXTENSIONS
a.defineExtension=function(b,c){a.prototype[b]=c},a.defineDocExtension=function(a,b){Ie.prototype[a]=b},a.defineOption=wb;var ye=[];a.defineInitHook=function(a){ye.push(a)};var ze=a.helpers={};a.registerHelper=function(b,c,d){ze.hasOwnProperty(b)||(ze[b]=a[b]={_global:[]}),ze[b][c]=d},a.registerGlobalHelper=function(b,c,d,e){a.registerHelper(b,c,e),ze[b]._global.push({pred:d,val:e})},
// UTILITIES
a.isWordChar=nd,a.copyState=xb,a.startState=yb,a.innerMode=function(a,b){while(a.innerMode){var c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state,a=c.mode}return c||{mode:a,state:b}};
// STANDARD COMMANDS
var Ae=a.commands={selectAll:function(a){a.setSelection(Ya(a.firstLine(),0),Ya(a.lastLine()))},killLine:function(a){var b=a.getCursor(!0),c=a.getCursor(!1),d=!Za(b,c);d||a.getLine(b.line).length!=b.ch?a.replaceRange("",b,d?c:Ya(b.line),"+delete"):a.replaceRange("",b,Ya(b.line+1,0),"+delete")},deleteLine:function(a){var b=a.getCursor().line;a.replaceRange("",Ya(b,0),Ya(b+1,0),"+delete")},delLineLeft:function(a){var b=a.getCursor();a.replaceRange("",Ya(b.line,0),b,"+delete")},undo:function(a){a.undo()},redo:function(a){a.redo()},goDocStart:function(a){a.extendSelection(Ya(a.firstLine(),0))},goDocEnd:function(a){a.extendSelection(Ya(a.lastLine()))},goLineStart:function(a){a.extendSelection(Dd(a,a.getCursor().line))},goLineStartSmart:function(a){var b=a.getCursor(),c=Dd(a,b.line),d=a.getLineHandle(c.line),e=Ec(d);if(e&&0!=e[0].level)a.extendSelection(c);else{var f=Math.max(0,d.text.search(/\S/)),g=b.line==c.line&&b.ch<=f&&b.ch;a.extendSelection(Ya(c.line,g?0:f))}},goLineEnd:function(a){a.extendSelection(Ed(a,a.getCursor().line))},goLineRight:function(a){var b=a.charCoords(a.getCursor(),"div").top+5;a.extendSelection(a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:b},"div"))},goLineLeft:function(a){var b=a.charCoords(a.getCursor(),"div").top+5;a.extendSelection(a.coordsChar({left:0,top:b},"div"))},goLineUp:function(a){a.moveV(-1,"line")},goLineDown:function(a){a.moveV(1,"line")},goPageUp:function(a){a.moveV(-1,"page")},goPageDown:function(a){a.moveV(1,"page")},goCharLeft:function(a){a.moveH(-1,"char")},goCharRight:function(a){a.moveH(1,"char")},goColumnLeft:function(a){a.moveH(-1,"column")},goColumnRight:function(a){a.moveH(1,"column")},goWordLeft:function(a){a.moveH(-1,"word")},goGroupRight:function(a){a.moveH(1,"group")},goGroupLeft:function(a){a.moveH(-1,"group")},goWordRight:function(a){a.moveH(1,"word")},delCharBefore:function(a){a.deleteH(-1,"char")},delCharAfter:function(a){a.deleteH(1,"char")},delWordBefore:function(a){a.deleteH(-1,"word")},delWordAfter:function(a){a.deleteH(1,"word")},delGroupBefore:function(a){a.deleteH(-1,"group")},delGroupAfter:function(a){a.deleteH(1,"group")},indentAuto:function(a){a.indentSelection("smart")},indentMore:function(a){a.indentSelection("add")},indentLess:function(a){a.indentSelection("subtract")},insertTab:function(a){a.replaceSelection("\t","end","+input")},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.replaceSelection("\t","end","+input")},transposeChars:function(a){var b=a.getCursor(),c=a.getLine(b.line);b.ch>0&&b.ch<c.length-1&&a.replaceRange(c.charAt(b.ch)+c.charAt(b.ch-1),Ya(b.line,b.ch-1),Ya(b.line,b.ch+1))},newlineAndIndent:function(a){ha(a,function(){a.replaceSelection("\n","end","+input"),a.indentLine(a.getCursor().line,null,!0)})()},toggleOverwrite:function(a){a.toggleOverwrite()}},Be=a.keyMap={};Be.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite"},
// Note that the save and find-related commands aren't defined by
// default. Unknown commands are simply ignored.
Be.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-Up":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Down":"goDocEnd","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore",fallthrough:"basic"},Be.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineStart","Cmd-Right":"goLineEnd","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delLineLeft",fallthrough:["basic","emacsy"]},Be["default"]=ae?Be.macDefault:Be.pcDefault,Be.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},a.lookupKey=Ab,a.isModifierKey=Bb,a.keyName=Cb,
// FROMTEXTAREA
a.fromTextArea=function(b,c){function d(){b.value=j.getValue()}
// Set autofocus to true if this textarea is focused, or if it has
// autofocus and no other element is focused.
if(c||(c={}),c.value=b.value,!c.tabindex&&b.tabindex&&(c.tabindex=b.tabindex),!c.placeholder&&b.placeholder&&(c.placeholder=b.placeholder),null==c.autofocus){var e=document.body;
// doc.activeElement occasionally throws on IE
try{e=document.activeElement}catch(f){}c.autofocus=e==b||null!=b.getAttribute("autofocus")&&e==document.body}if(b.form&&(Xc(b.form,"submit",d),!c.leaveSubmitMethodAlone)){var g=b.form,h=g.submit;try{var i=g.submit=function(){d(),g.submit=h,g.submit(),g.submit=i}}catch(f){}}b.style.display="none";var j=a(function(a){b.parentNode.insertBefore(a,b.nextSibling)},c);return j.save=d,j.getTextArea=function(){return b},j.toTextArea=function(){d(),b.parentNode.removeChild(j.getWrapperElement()),b.style.display="",b.form&&(Yc(b.form,"submit",d),"function"==typeof b.form.submit&&(b.form.submit=h))},j},Db.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));if(c)return++this.pos,b},eatWhile:function(a){var b=this.pos;while(this.eat(a));return this.pos>b},eatSpace:function(){var a=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);if(b>-1)return this.pos=b,!0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=ed(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?ed(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return ed(this.string,null,this.tabSize)-(this.lineStart?ed(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"!=typeof a){var d=this.string.slice(this.pos).match(a);return d&&d.index>0?null:(d&&b!==!1&&(this.pos+=d[0].length),d)}var e=function(a){return c?a.toLowerCase():a},f=this.string.substr(this.pos,a.length);if(e(f)==e(a))return b!==!1&&(this.pos+=a.length),!0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}},a.StringStream=Db,a.TextMarker=Eb,cd(Eb),Eb.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;if(b&&fa(a),bd(this,"clear")){var c=this.find();c&&$c(this,"clear",c.from,c.to)}for(var d=null,e=null,f=0;f<this.lines.length;++f){var g=this.lines[f],h=Ib(g.markedSpans,this);null!=h.to&&(e=Bc(g)),g.markedSpans=Jb(g.markedSpans,h),null!=h.from?d=Bc(g):this.collapsed&&!Zb(this.doc,g)&&a&&Ac(g,da(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(var f=0;f<this.lines.length;++f){var i=Yb(a.doc,this.lines[f]),j=l(a.doc,i);j>a.display.maxLineLength&&(a.display.maxLine=i,a.display.maxLineLength=j,a.display.maxLineChanged=!0)}null!=d&&a&&ka(a,d,e+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&ib(a)),b&&ga(a)}},Eb.prototype.find=function(a){for(var b,c,d=0;d<this.lines.length;++d){var e=this.lines[d],f=Ib(e.markedSpans,this);if(null!=f.from||null!=f.to){var g=Bc(e);null!=f.from&&(b=Ya(g,f.from)),null!=f.to&&(c=Ya(g,f.to))}}return"bookmark"!=this.type||a?b&&{from:b,to:c}:b},Eb.prototype.changed=function(){var a=this.find(),b=this.doc.cm;if(a&&b){"bookmark"!=this.type&&(a=a.from);var c=xc(this.doc,a.line);if(Q(b,c),a.line>=b.display.showingFrom&&a.line<b.display.showingTo){for(var d=b.display.lineDiv.firstChild;d;d=d.nextSibling)if(d.lineObj==c){d.offsetHeight!=c.height&&Ac(c,d.offsetHeight);break}ja(b,function(){b.curOp.selectionChanged=b.curOp.forceUpdate=b.curOp.updateMaxLine=!0})}}},Eb.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&id(b.maybeHiddenMarkers,this)!=-1||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)},Eb.prototype.detachLine=function(a){if(this.lines.splice(id(this.lines,a),1),!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;(b.maybeHiddenMarkers||(b.maybeHiddenMarkers=[])).push(this)}};var Ce=0;a.SharedTextMarker=Gb,cd(Gb),Gb.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();$c(this,"clear")}},Gb.prototype.find=function(){return this.primary.find()};
// LINE WIDGETS
var De=a.LineWidget=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.cm=a,this.node=b};cd(De),De.prototype.clear=bc(function(){var a=this.line.widgets,b=Bc(this.line);if(null!=b&&a){for(var c=0;c<a.length;++c)a[c]==this&&a.splice(c--,1);a.length||(this.line.widgets=null);var d=Dc(this.cm,this.line)<this.cm.doc.scrollTop;Ac(this.line,Math.max(0,this.line.height-cc(this))),d&&pb(this.cm,0,-this.height),ka(this.cm,b,b+1)}}),De.prototype.changed=bc(function(){var a=this.height;this.height=null;var b=cc(this)-a;if(b){Ac(this.line,this.line.height+b);var c=Bc(this.line);ka(this.cm,c,c+1)}});
// LINE DATA STRUCTURE
// Line objects. These hold state related to a line, including
// highlighting info (the styles array).
var Ee=a.Line=function(a,b,c){this.text=a,ac(this,b),this.height=c?c(this):1};cd(Ee),Ee.prototype.lineNo=function(){return Bc(this)};var Fe={},Ge={};tc.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;c<d;++c){var e=this.lines[c];this.height-=e.height,fc(e),$c(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.splice.apply(a,[a.length,0].concat(this.lines))},insertInner:function(a,b,c){this.height+=c,this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(var d=0,e=b.length;d<e;++d)b[d].parent=this},iterN:function(a,b,c){for(var d=a+b;a<d;++a)if(c(this.lines[a]))return!0}},uc.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(a<e){var f=Math.min(b,e-a),g=d.height;if(d.removeInner(a,f),this.height-=g-d.height,e==f&&(this.children.splice(c--,1),d.parent=null),0==(b-=f))break;a=0}else a-=e}if(this.size-b<25){var h=[];this.collapse(h),this.children=[new tc(h)],this.children[0].parent=this}},collapse:function(a){for(var b=0,c=this.children.length;b<c;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length,this.height+=c;for(var d=0,e=this.children.length;d<e;++d){var f=this.children[d],g=f.chunkSize();if(a<=g){if(f.insertInner(a,b,c),f.lines&&f.lines.length>50){while(f.lines.length>50){var h=f.lines.splice(f.lines.length-25,25),i=new tc(h);f.height-=i.height,this.children.splice(d+1,0,i),i.parent=this}this.maybeSpill()}break}a-=g}},maybeSpill:function(){if(!(this.children.length<=10)){var a=this;do{var b=a.children.splice(a.children.length-5,5),c=new uc(b);if(a.parent){a.size-=c.size,a.height-=c.height;var d=id(a.parent.children,a);a.parent.children.splice(d+1,0,c)}else{// Become the parent node
var e=new uc(a.children);e.parent=a,a.children=[e,c],a=e}c.parent=a.parent}while(a.children.length>10);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0,e=this.children.length;d<e;++d){var f=this.children[d],g=f.chunkSize();if(a<g){var h=Math.min(b,g-a);if(f.iterN(a,h,c))return!0;if(0==(b-=h))break;a=0}else a-=g}}};var He=0,Ie=a.Doc=function(a,b,c){if(!(this instanceof Ie))return new Ie(a,b,c);null==c&&(c=0),uc.call(this,[new tc([new Ee("",null)])]),this.first=c,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.history=Fc(),this.cleanGeneration=1,this.frontier=c;var d=Ya(c,0);this.sel={from:d,to:d,head:d,anchor:d,shift:!1,extend:!1,goalColumn:null},this.id=++He,this.modeOption=b,"string"==typeof a&&(a=Ve(a)),sc(this,{from:d,to:d,text:a},null,{head:d,anchor:d})};Ie.prototype=jd(uc.prototype,{constructor:Ie,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0,e=b.length;d<e;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=zc(this,this.first,this.first+this.size);return a===!1?b:b.join(a||"\n")},setValue:function(a){var b=Ya(this.first,0),c=this.first+this.size-1;Ra(this,{from:b,to:Ya(c,xc(this,c).text.length),text:Ve(a),origin:"setValue"},{head:b,anchor:b},!0)},replaceRange:function(a,b,c,d){b=cb(this,b),c=c?cb(this,c):b,Xa(this,a,b,c,d)},getRange:function(a,b,c){var d=yc(this,cb(this,a),cb(this,b));return c===!1?d:d.join(c||"\n")},getLine:function(a){var b=this.getLineHandle(a);return b&&b.text},setLine:function(a,b){eb(this,a)&&Xa(this,b,Ya(a,0),cb(this,Ya(a)))},removeLine:function(a){a?Xa(this,"",cb(this,Ya(a-1)),cb(this,Ya(a))):Xa(this,"",Ya(0,0),cb(this,Ya(1,0)))},getLineHandle:function(a){if(eb(this,a))return xc(this,a)},getLineNumber:function(a){return Bc(a)},getLineHandleVisualStart:function(a){return"number"==typeof a&&(a=xc(this,a)),Yb(this,a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return cb(this,a)},getCursor:function(a){var b,c=this.sel;return b=null==a||"head"==a?c.head:"anchor"==a?c.anchor:"end"==a||a===!1?c.to:c.from,ab(b)},somethingSelected:function(){return!Za(this.sel.head,this.sel.anchor)},setCursor:ia(function(a,b,c){var d=cb(this,"number"==typeof a?Ya(a,b||0):a);c?fb(this,d):hb(this,d,d)}),setSelection:ia(function(a,b,c){hb(this,cb(this,a),cb(this,b||a),c)}),extendSelection:ia(function(a,b,c){fb(this,cb(this,a),b&&cb(this,b),c)}),getSelection:function(a){return this.getRange(this.sel.from,this.sel.to,a)},replaceSelection:function(a,b,c){Ra(this,{from:this.sel.from,to:this.sel.to,text:Ve(a),origin:c},b||"around")},undo:ia(function(){Ta(this,"undo")}),redo:ia(function(){Ta(this,"redo")}),setExtending:function(a){this.sel.extend=a},historySize:function(){var a=this.history;return{undo:a.done.length,redo:a.undone.length}},clearHistory:function(){this.history=Fc(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){return a&&(this.history.lastOp=this.history.lastOrigin=null),this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:Lc(this.history.done),undone:Lc(this.history.undone)}},setHistory:function(a){var b=this.history=Fc(this.history.maxGeneration);b.done=a.done.slice(0),b.undone=a.undone.slice(0)},markText:function(a,b,c){return Fb(this,cb(this,a),cb(this,b),c,"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1};return a=cb(this,a),Fb(this,a,a,c,"bookmark")},findMarksAt:function(a){a=cb(this,a);var b=[],c=xc(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b){a=cb(this,a),b=cb(this,b);var c=[],d=a.line;return this.iter(a.line,b.line+1,function(e){var f=e.markedSpans;if(f)for(var g=0;g<f.length;g++){var h=f[g];d==a.line&&a.ch>h.to||null==h.from&&d!=a.line||d==b.line&&h.from>b.ch||c.push(h.marker.parent||h.marker)}++d}),c},getAllMarks:function(){var a=[];return this.iter(function(b){var c=b.markedSpans;if(c)for(var d=0;d<c.length;++d)null!=c[d].from&&a.push(c[d].marker)}),a},posFromIndex:function(a){var b,c=this.first;return this.iter(function(d){var e=d.text.length+1;return e>a?(b=a,!0):(a-=e,void++c)}),cb(this,Ya(c,b))},indexFromPos:function(a){a=cb(this,a);var b=a.ch;return a.line<this.first||a.ch<0?0:(this.iter(this.first,a.line,function(a){b+=a.text.length+1}),b)},copy:function(a){var b=new Ie(zc(this,this.first,this.first+this.size),this.modeOption,this.first);return b.scrollTop=this.scrollTop,b.scrollLeft=this.scrollLeft,b.sel={from:this.sel.from,to:this.sel.to,head:this.sel.head,anchor:this.sel.anchor,shift:this.sel.shift,extend:!1,goalColumn:this.sel.goalColumn},a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory())),b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from),null!=a.to&&a.to<c&&(c=a.to);var d=new Ie(zc(this,b,c),a.mode||this.modeOption,b);return a.sharedHist&&(d.history=this.history),(this.linked||(this.linked=[])).push({doc:d,sharedHist:a.sharedHist}),d.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}],d},unlinkDoc:function(b){if(b instanceof a&&(b=b.doc),this.linked)for(var c=0;c<this.linked.length;++c){var d=this.linked[c];if(d.doc==b){this.linked.splice(c,1),b.unlinkDoc(this);break}}
// If the histories were shared, split them again
if(b.history==this.history){var e=[b.id];vc(b,function(a){e.push(a.id)},!0),b.history=Fc(),b.history.done=Lc(this.history.done,e),b.history.undone=Lc(this.history.undone,e)}},iterLinkedDocs:function(a){vc(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),Ie.prototype.eachLine=Ie.prototype.iter;
// The Doc methods that should be available on CodeMirror instances
var Je="iter insert remove copy getEditor".split(" ");for(var Ke in Ie.prototype)Ie.prototype.hasOwnProperty(Ke)&&id(Je,Ke)<0&&(a.prototype[Ke]=function(a){return function(){return a.apply(this.doc,arguments)}}(Ie.prototype[Ke]));cd(Ie),a.e_stop=Uc,a.e_preventDefault=Rc,a.e_stopPropagation=Sc;var Le,Me=0;a.on=Xc,a.off=Yc,a.signal=Zc;
// MISC UTILITIES
// Number of pixels added to scroller and sizer to hide scrollbar
var Ne=30,Oe=a.Pass={toString:function(){return"CodeMirror.Pass"}};dd.prototype={set:function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)}},a.countColumn=ed;var Pe=[""],Qe=/[\u00df\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Re=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;a.replaceGetRect=function(a){ud=a};
// FEATURE DETECTION
// Detect drag-and-drop
var Se=function(){
// There is *some* kind of drag-and-drop support in IE6-8, but I
// couldn't get it to work yet.
if(Nd)return!1;var a=qd("div");return"draggable"in a||"dragDrop"in a}();Kd?// Only for "$'"
vd=function(a,b){return 36==a.charCodeAt(b-1)&&39==a.charCodeAt(b)}:Vd&&!/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent)?vd=function(a,b){return/\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(a.slice(b-1,b+1))}:Rd&&/Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent)?vd=function(a,b){var c=a.charCodeAt(b-1);return c>=8208&&c<=8212}:Rd&&(vd=function(a,b){if(b>1&&45==a.charCodeAt(b-1)){if(/\w/.test(a.charAt(b-2))&&/[^\-?\.]/.test(a.charAt(b)))return!0;if(b>2&&/[\d\.,]/.test(a.charAt(b-2))&&/[\d\.,]/.test(a.charAt(b)))return!1}return/[~!#%&*)=+}\]\\|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|\u2026[\w~`@#$%\^&*(_=+{[><]/.test(a.slice(b-1,b+1))});var Te,Ue,Ve=3!="\n\nb".split(/\n/).length?function(a){var b=0,c=[],d=a.length;while(b<=d){var e=a.indexOf("\n",b);e==-1&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");g!=-1?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)};a.splitLines=Ve;var We=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return!(!b||b.parentElement()!=a)&&0!=b.compareEndPoints("StartToEnd",b)},Xe=function(){var a=qd("div");return"oncopy"in a||(a.setAttribute("oncopy","return;"),"function"==typeof a.oncopy)}(),Ye={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};a.keyNames=Ye,function(){
// Number keys
for(var a=0;a<10;a++)Ye[a+48]=Ye[a+96]=String(a);
// Alphabetic keys
for(var a=65;a<=90;a++)Ye[a]=String.fromCharCode(a);
// Function keys
for(var a=1;a<=12;a++)Ye[a+111]=Ye[a+63235]="F"+a}();var Ze,$e=function(){function a(a){return a<=255?b.charAt(a):1424<=a&&a<=1524?"R":1536<=a&&a<=1791?c.charAt(a-1536):1792<=a&&a<=2220?"r":"L"}
// Character types for codepoints 0 to 0xff
var b="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL",c="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr",d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,e=/[stwN]/,f=/[LRr]/,g=/[Lb1n]/,h=/[1n]/,i="L";return function(b){if(!d.test(b))return!1;for(var c,j=b.length,k=[],l=0;l<j;++l)k.push(c=a(b.charCodeAt(l)));
// W1. Examine each non-spacing mark (NSM) in the level run, and
// change the type of the NSM to the type of the previous
// character. If the NSM is at the start of the level run, it will
// get the type of sor.
for(var l=0,m=i;l<j;++l){var c=k[l];"m"==c?k[l]=m:m=c}
// W2. Search backwards from each instance of a European number
// until the first strong type (R, L, AL, or sor) is found. If an
// AL is found, change the type of the European number to Arabic
// number.
// W3. Change all ALs to R.
for(var l=0,n=i;l<j;++l){var c=k[l];"1"==c&&"r"==n?k[l]="n":f.test(c)&&(n=c,"r"==c&&(k[l]="R"))}
// W4. A single European separator between two European numbers
// changes to a European number. A single common separator between
// two numbers of the same type changes to that type.
for(var l=1,m=k[0];l<j-1;++l){var c=k[l];"+"==c&&"1"==m&&"1"==k[l+1]?k[l]="1":","!=c||m!=k[l+1]||"1"!=m&&"n"!=m||(k[l]=m),m=c}
// W5. A sequence of European terminators adjacent to European
// numbers changes to all European numbers.
// W6. Otherwise, separators and terminators change to Other
// Neutral.
for(var l=0;l<j;++l){var c=k[l];if(","==c)k[l]="N";else if("%"==c){for(var o=l+1;o<j&&"%"==k[o];++o);for(var p=l&&"!"==k[l-1]||o<j&&"1"==k[o]?"1":"N",q=l;q<o;++q)k[q]=p;l=o-1}}
// W7. Search backwards from each instance of a European number
// until the first strong type (R, L, or sor) is found. If an L is
// found, then change the type of the European number to L.
for(var l=0,n=i;l<j;++l){var c=k[l];"L"==n&&"1"==c?k[l]="L":f.test(c)&&(n=c)}
// N1. A sequence of neutrals takes the direction of the
// surrounding strong text if the text on both sides has the same
// direction. European and Arabic numbers act as if they were R in
// terms of their influence on neutrals. Start-of-level-run (sor)
// and end-of-level-run (eor) are used at level run boundaries.
// N2. Any remaining neutrals take the embedding direction.
for(var l=0;l<j;++l)if(e.test(k[l])){for(var o=l+1;o<j&&e.test(k[o]);++o);for(var r="L"==(l?k[l-1]:i),s="L"==(o<j?k[o]:i),p=r||s?"L":"R",q=l;q<o;++q)k[q]=p;l=o-1}for(var t,u=[],l=0;l<j;)if(g.test(k[l])){var v=l;for(++l;l<j&&g.test(k[l]);++l);u.push({from:v,to:l,level:0})}else{var w=l,x=u.length;for(++l;l<j&&"L"!=k[l];++l);for(var q=w;q<l;)if(h.test(k[q])){w<q&&u.splice(x,0,{from:w,to:q,level:1});var y=q;for(++q;q<l&&h.test(k[q]);++q);u.splice(x,0,{from:y,to:q,level:2}),w=q}else++q;w<l&&u.splice(x,0,{from:w,to:l,level:1})}return 1==u[0].level&&(t=b.match(/^\s+/))&&(u[0].from=t[0].length,u.unshift({from:0,to:t[0].length,level:0})),1==gd(u).level&&(t=b.match(/\s+$/))&&(gd(u).to-=t[0].length,u.push({from:j-t[0].length,to:j,level:0})),u[0].level!=gd(u).level&&u.push({from:j,to:j,level:u[0].level}),u}}();
// THE END
return a.version="3.22.0",a}(),define("libs/codemirror/lib/codemirror",function(){}),
// TODO actually recognize syntax of TypeScript constructs
CodeMirror.defineMode("javascript",function(a,b){function c(a){var b,c=!1,d=!1;while(null!=(b=a.next())){if(!c){if("/"==b&&!d)return;"["==b?d=!0:d&&"]"==b&&(d=!1)}c=!c&&"\\"==b}}function d(a,b,c){return ma=a,na=c,b}function e(a,b){var e=a.next();if('"'==e||"'"==e)return b.tokenize=f(e),b.tokenize(a,b);if("."==e&&a.match(/^\d+(?:[eE][+\-]?\d+)?/))return d("number","number");if("."==e&&a.match(".."))return d("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(e))return d(e);if("="==e&&a.eat(">"))return d("=>","operator");if("0"==e&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),d("number","number");if(/\d/.test(e))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),d("number","number");if("/"==e)return a.eat("*")?(b.tokenize=g,g(a,b)):a.eat("/")?(a.skipToEnd(),d("comment","comment")):"operator"==b.lastType||"keyword c"==b.lastType||"sof"==b.lastType||/^[\[{}\(,;:]$/.test(b.lastType)?(c(a),a.eatWhile(/[gimy]/),d("regexp","string-2")):(a.eatWhile(ua),d("operator","operator",a.current()));if("`"==e)return b.tokenize=h,h(a,b);if("#"==e)return a.skipToEnd(),d("error","error");if(ua.test(e))return a.eatWhile(ua),d("operator","operator",a.current());a.eatWhile(/[\w\$_]/);var i=a.current(),j=ta.propertyIsEnumerable(i)&&ta[i];return j&&"."!=b.lastType?d(j.type,j.style,i):d("variable","variable",i)}function f(a){return function(b,c){var f,g=!1;if(qa&&"@"==b.peek()&&b.match(va))return c.tokenize=e,d("jsonld-keyword","meta");while(null!=(f=b.next())){if(f==a&&!g)break;g=!g&&"\\"==f}return g||(c.tokenize=e),d("string","string")}}function g(a,b){var c,f=!1;while(c=a.next()){if("/"==c&&f){b.tokenize=e;break}f="*"==c}return d("comment","comment")}function h(a,b){var c,f=!1;while(null!=(c=a.next())){if(!f&&("`"==c||"$"==c&&a.eat("{"))){b.tokenize=e;break}f=!f&&"\\"==c}return d("quasi","string-2",a.current())}
// This is a crude lookahead trick to try and notice that we're
// parsing the argument patterns for a fat-arrow function before we
// actually hit the arrow token. It only works if the arrow is on
// the same line as the arguments and there's no strange noise
// (comments) in between. Fallback is to only notice when we hit the
// arrow, and not declare the arguments as locals for the arrow
// body.
function i(a,b){b.fatArrowAt&&(b.fatArrowAt=null);var c=a.string.indexOf("=>",a.start);if(!(c<0)){for(var d=0,e=!1,f=c-1;f>=0;--f){var g=a.string.charAt(f),h=wa.indexOf(g);if(h>=0&&h<3){if(!d){++f;break}if(0==--d)break}else if(h>=3&&h<6)++d;else if(/[$\w]/.test(g))e=!0;else if(e&&!d){++f;break}}e&&!d&&(b.fatArrowAt=f)}}function j(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.prev=e,this.info=f,null!=d&&(this.align=d)}function k(a,b){for(var c=a.localVars;c;c=c.next)if(c.name==b)return!0;for(var d=a.context;d;d=d.prev)for(var c=d.vars;c;c=c.next)if(c.name==b)return!0}function l(a,b,c,d,e){var f=a.cc;
// Communicate our context to the combinators.
// (Less wasteful than consing up a hundred closures on every call.)
ya.state=a,ya.stream=e,ya.marked=null,ya.cc=f,a.lexical.hasOwnProperty("align")||(a.lexical.align=!0);while(!0){var g=f.length?f.pop():ra?v:u;if(g(c,d)){while(f.length&&f[f.length-1].lex)f.pop()();return ya.marked?ya.marked:"variable"==c&&k(a,d)?"variable-2":b}}}function m(){for(var a=arguments.length-1;a>=0;a--)ya.cc.push(arguments[a])}function n(){return m.apply(null,arguments),!0}function o(a){function c(b){for(var c=b;c;c=c.next)if(c.name==a)return!0;return!1}var d=ya.state;if(d.context){if(ya.marked="def",c(d.localVars))return;d.localVars={name:a,next:d.localVars}}else{if(c(d.globalVars))return;b.globalVars&&(d.globalVars={name:a,next:d.globalVars})}}function p(){ya.state.context={prev:ya.state.context,vars:ya.state.localVars},ya.state.localVars=za}function q(){ya.state.localVars=ya.state.context.vars,ya.state.context=ya.state.context.prev}function r(a,b){var c=function(){var c=ya.state,d=c.indented;"stat"==c.lexical.type&&(d=c.lexical.indented),c.lexical=new j(d,ya.stream.column(),a,null,c.lexical,b)};return c.lex=!0,c}function s(){var a=ya.state;a.lexical.prev&&(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function t(a){return function(b){return b==a?n():";"==a?m():n(arguments.callee)}}function u(a,b){return"var"==a?n(r("vardef",b.length),Q,t(";"),s):"keyword a"==a?n(r("form"),v,u,s):"keyword b"==a?n(r("form"),u,s):"{"==a?n(r("}"),N,s):";"==a?n():"if"==a?n(r("form"),v,u,s,V):"function"==a?n(_):"for"==a?n(r("form"),W,u,s):"variable"==a?n(r("stat"),G):"switch"==a?n(r("form"),v,r("}","switch"),t("{"),N,s,s):"case"==a?n(v,t(":")):"default"==a?n(t(":")):"catch"==a?n(r("form"),p,t("("),aa,t(")"),u,s,q):"module"==a?n(r("form"),p,ea,q,s):"class"==a?n(r("form"),ba,da,s):"export"==a?n(r("form"),fa,s):"import"==a?n(r("form"),ga,s):m(r("stat"),v,t(";"),s)}function v(a){return x(a,!1)}function w(a){return x(a,!0)}function x(a,b){if(ya.state.fatArrowAt==ya.stream.start){var c=b?F:E;if("("==a)return n(p,r(")"),L(R,")"),s,t("=>"),c,q);if("variable"==a)return m(p,R,t("=>"),c,q)}var d=b?B:A;return xa.hasOwnProperty(a)?n(d):"function"==a?n(_):"keyword c"==a?n(b?z:y):"("==a?n(r(")"),y,la,t(")"),s,d):"operator"==a||"spread"==a?n(b?w:v):"["==a?n(r("]"),ja,s,d):"{"==a?M(I,"}",null,d):n()}function y(a){return a.match(/[;\}\)\],]/)?m():m(v)}function z(a){return a.match(/[;\}\)\],]/)?m():m(w)}function A(a,b){return","==a?n(v):B(a,b,!1)}function B(a,b,c){var d=0==c?A:B,e=0==c?v:w;return"=>"==b?n(p,c?F:E,q):"operator"==a?/\+\+|--/.test(b)?n(d):"?"==b?n(v,t(":"),e):n(e):"quasi"==a?(ya.cc.push(d),C(b)):";"!=a?"("==a?M(w,")","call",d):"."==a?n(H,d):"["==a?n(r("]"),y,t("]"),s,d):void 0:void 0}function C(a){return"${"!=a.slice(a.length-2)?n():n(v,D)}function D(a){if("}"==a)return ya.marked="string-2",ya.state.tokenize=h,n()}function E(a){return i(ya.stream,ya.state),m("{"==a?u:v)}function F(a){return i(ya.stream,ya.state),m("{"==a?u:w)}function G(a){return":"==a?n(s,u):m(A,t(";"),s)}function H(a){if("variable"==a)return ya.marked="property",n()}function I(a,b){if("variable"==a){if(ya.marked="property","get"==b||"set"==b)return n(J)}else if("number"==a||"string"==a)ya.marked=qa?"property":a+" property";else if("["==a)return n(v,t("]"),K);if(xa.hasOwnProperty(a))return n(K)}function J(a){return"variable"!=a?m(K):(ya.marked="property",n(_))}function K(a){return":"==a?n(w):"("==a?m(_):void 0}function L(a,b){function c(d){if(","==d){var e=ya.state.lexical;return"call"==e.info&&(e.pos=(e.pos||0)+1),n(a,c)}return d==b?n():n(t(b))}return function(d){return d==b?n():m(a,c)}}function M(a,b,c){for(var d=3;d<arguments.length;d++)ya.cc.push(arguments[d]);return n(r(b,c),L(a,b),s)}function N(a){return"}"==a?n():m(u,N)}function O(a){if(sa&&":"==a)return n(P)}function P(a){if("variable"==a)return ya.marked="variable-3",n()}function Q(){return m(R,O,T,U)}function R(a,b){return"variable"==a?(o(b),n()):"["==a?M(R,"]"):"{"==a?M(S,"}"):void 0}function S(a,b){return"variable"!=a||ya.stream.match(/^\s*:/,!1)?("variable"==a&&(ya.marked="property"),n(t(":"),R,T)):(o(b),n(T))}function T(a,b){if("="==b)return n(w)}function U(a){if(","==a)return n(Q)}function V(a,b){if("keyword b"==a&&"else"==b)return n(r("form"),u,s)}function W(a){if("("==a)return n(r(")"),X,t(")"),s)}function X(a){return"var"==a?n(Q,t(";"),Z):";"==a?n(Z):"variable"==a?n(Y):m(v,t(";"),Z)}function Y(a,b){return"in"==b||"of"==b?(ya.marked="keyword",n(v)):n(A,Z)}function Z(a,b){return";"==a?n($):"in"==b||"of"==b?(ya.marked="keyword",n(v)):m(v,t(";"),$)}function $(a){")"!=a&&n(v)}function _(a,b){return"*"==b?(ya.marked="keyword",n(_)):"variable"==a?(o(b),n(_)):"("==a?n(p,r(")"),L(aa,")"),s,u,q):void 0}function aa(a){return"spread"==a?n(aa):m(R,O)}function ba(a,b){if("variable"==a)return o(b),n(ca)}function ca(a,b){if("extends"==b)return n(v)}function da(a){if("{"==a)return M(I,"}")}function ea(a,b){return"string"==a?n(u):"variable"==a?(o(b),n(ia)):void 0}function fa(a,b){return"*"==b?(ya.marked="keyword",n(ia,t(";"))):"default"==b?(ya.marked="keyword",n(v,t(";"))):m(u)}function ga(a){return"string"==a?n():m(ha,ia)}function ha(a,b){return"{"==a?M(ha,"}"):("variable"==a&&o(b),n())}function ia(a,b){if("from"==b)return ya.marked="keyword",n(v)}function ja(a){return"]"==a?n():m(w,ka)}function ka(a){return"for"==a?m(la,t("]")):","==a?n(L(w,"]")):m(L(w,"]"))}function la(a){return"for"==a?n(W,la):"if"==a?n(v,la):void 0}var ma,na,oa=a.indentUnit,pa=b.statementIndent,qa=b.jsonld,ra=b.json||qa,sa=b.typescript,ta=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("operator"),f={type:"atom",style:"atom"},g={"if":a("if"),"while":b,"with":b,"else":c,"do":c,"try":c,"finally":c,"return":d,"break":d,"continue":d,"new":d,"delete":d,"throw":d,"debugger":d,"var":a("var"),"const":a("var"),"let":a("var"),"function":a("function"),"catch":a("catch"),"for":a("for"),"switch":a("switch"),"case":a("case"),"default":a("default"),"in":e,"typeof":e,"instanceof":e,"true":f,"false":f,"null":f,undefined:f,NaN:f,Infinity:f,"this":a("this"),module:a("module"),"class":a("class"),"super":a("atom"),"yield":d,"export":a("export"),"import":a("import"),"extends":d};
// Extend the 'normal' keywords with the TypeScript language extensions
if(sa){var h={type:"variable",style:"variable-3"},i={
// object-like things
"interface":a("interface"),"extends":a("extends"),constructor:a("constructor"),
// scope modifiers
"public":a("public"),"private":a("private"),"protected":a("protected"),"static":a("static"),
// types
string:h,number:h,bool:h,any:h};for(var j in i)g[j]=i[j]}return g}(),ua=/[+\-*&%=<>!?|~^]/,va=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,wa="([{}])",xa={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},ya={state:null,column:null,marked:null,cc:null},za={name:"this",next:{name:"arguments"}};
// Interface
return s.lex=!0,{startState:function(a){var c={tokenize:e,lastType:"sof",cc:[],lexical:new j((a||0)-oa,0,"block",(!1)),localVars:b.localVars,context:b.localVars&&{vars:b.localVars},indented:0};return b.globalVars&&(c.globalVars=b.globalVars),c},token:function(a,b){if(a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation(),i(a,b)),b.tokenize!=g&&a.eatSpace())return null;var c=b.tokenize(a,b);return"comment"==ma?c:(b.lastType="operator"!=ma||"++"!=na&&"--"!=na?ma:"incdec",l(b,c,ma,na,a))},indent:function(a,c){if(a.tokenize==g)return CodeMirror.Pass;if(a.tokenize!=e)return 0;
// Kludge to prevent 'maybelse' from blocking lexical scope pops
for(var d=c&&c.charAt(0),f=a.lexical,h=a.cc.length-1;h>=0;--h){var i=a.cc[h];if(i==s)f=f.prev;else if(i!=V)break}"stat"==f.type&&"}"==d&&(f=f.prev),pa&&")"==f.type&&"stat"==f.prev.type&&(f=f.prev);var j=f.type,k=d==j;return"vardef"==j?f.indented+("operator"==a.lastType||","==a.lastType?f.info+1:0):"form"==j&&"{"==d?f.indented:"form"==j?f.indented+oa:"stat"==j?f.indented+("operator"==a.lastType||","==a.lastType?pa||oa:0):"switch"!=f.info||k||0==b.doubleIndentSwitch?f.align?f.column+(k?0:1):f.indented+(k?0:oa):f.indented+(/^(?:case|default)\b/.test(c)?oa:2*oa)},electricChars:":{}",blockCommentStart:ra?null:"/*",blockCommentEnd:ra?null:"*/",lineComment:ra?null:"//",fold:"brace",helperType:ra?"json":"javascript",jsonldMode:qa,jsonMode:ra}}),CodeMirror.defineMIME("text/javascript","javascript"),CodeMirror.defineMIME("text/ecmascript","javascript"),CodeMirror.defineMIME("application/javascript","javascript"),CodeMirror.defineMIME("application/ecmascript","javascript"),CodeMirror.defineMIME("application/json",{name:"javascript",json:!0}),CodeMirror.defineMIME("application/x-json",{name:"javascript",json:!0}),CodeMirror.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:!0}),CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:!0}),define("libs/codemirror/mode/javascript/javascript",function(){}),function(){function a(a,b,c){function d(b,c,d){if(b.text){var g=n?0:b.text.length-1,i=n?b.text.length:-1;if(b.text.length>h)return null;for(null!=d&&(g=d+o);g!=i;g+=o){var j=b.text.charAt(g);if(s.test(j)&&a.getTokenTypeAt(e(c,g+1))==q){var k=f[j];if(">"==k.charAt(1)==n)r.push(j);else{if(r.pop()!=k.charAt(0))return{pos:g,match:!1};if(!r.length)return{pos:g,match:!0}}}}}}var g=a.state.matchBrackets,h=g&&g.maxScanLineLength||1e4,i=g&&g.maxScanLines||100,j=b||a.getCursor(),k=a.getLineHandle(j.line),l=j.ch-1,m=l>=0&&f[k.text.charAt(l)]||f[k.text.charAt(++l)];if(!m)return null;var n=">"==m.charAt(1),o=n?1:-1;if(c&&n!=(l==j.ch))return null;for(var p,q=a.getTokenTypeAt(e(j.line,l+1)),r=[k.text.charAt(l)],s=/[(){}[\]]/,t=j.line,u=n?Math.min(t+i,a.lineCount()):Math.max(-1,t-i);t!=u;t+=o)if(p=t==j.line?d(k,t,l):d(a.getLineHandle(t),t))break;return{from:e(j.line,l),to:p&&e(t,p.pos),match:p&&p.match,forward:n}}function b(b,c){
// Disable brace matching in long lines, since it'll cause hugely slow updates
var f=b.state.matchBrackets.maxHighlightLineLength||1e3,g=a(b);if(!(!g||b.getLine(g.from.line).length>f||g.to&&b.getLine(g.to.line).length>f)){var h=g.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket",i=b.markText(g.from,e(g.from.line,g.from.ch+1),{className:h}),j=g.to&&b.markText(g.to,e(g.to.line,g.to.ch+1),{className:h});
// Kludge to work around the IE bug from issue #1193, where text
// input stops going to the textarea whenever this fires.
d&&b.state.focused&&b.display.input.focus();var k=function(){b.operation(function(){i.clear(),j&&j.clear()})};return c?void setTimeout(k,800):k}}function c(a){a.operation(function(){g&&(g(),g=null),a.somethingSelected()||(g=b(a,!1))})}var d=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),e=CodeMirror.Pos,f={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},g=null;CodeMirror.defineOption("matchBrackets",!1,function(a,b,d){d&&d!=CodeMirror.Init&&a.off("cursorActivity",c),b&&(a.state.matchBrackets="object"==typeof b?b:{},a.on("cursorActivity",c))}),CodeMirror.defineExtension("matchBrackets",function(){b(this,!0)}),CodeMirror.defineExtension("findMatchingBracket",function(b,c){return a(this,b,c)})}(),define("libs/codemirror/addon/edit/matchbrackets",function(){}),function(){"use strict";function a(a,c,d,e){function f(b){var d=g(a,c);if(!d||d.to.line-d.from.line<h)return null;for(var f=a.findMarksAt(d.from),i=0;i<f.length;++i)if(f[i].__isFold&&"fold"!==e){if(!b)return null;d.cleared=!0,f[i].clear()}return d}var g=d&&(d.call?d:d.rangeFinder);g||(g=CodeMirror.fold.auto),"number"==typeof c&&(c=CodeMirror.Pos(c,0));var h=d&&d.minFoldSize||0,i=f(!0);if(d&&d.scanUp)while(!i&&c.line>a.firstLine())c=CodeMirror.Pos(c.line-1,0),i=f(!1);if(i&&!i.cleared&&"unfold"!==e){var j=b(d);CodeMirror.on(j,"mousedown",function(){k.clear()});var k=a.markText(i.from,i.to,{replacedWith:j,clearOnEnter:!0,__isFold:!0});k.on("clear",function(b,c){CodeMirror.signal(a,"unfold",a,b,c)}),CodeMirror.signal(a,"fold",a,i.from,i.to)}}function b(a){var b=a&&a.widget||"↔";if("string"==typeof b){var c=document.createTextNode(b);b=document.createElement("span"),b.appendChild(c),b.className="CodeMirror-foldmarker"}return b}
// Clumsy backwards-compatible interface
CodeMirror.newFoldFunction=function(b,c){return function(d,e){a(d,e,{rangeFinder:b,widget:c})}},
// New-style interface
CodeMirror.defineExtension("foldCode",function(b,c,d){a(this,b,c,d)}),CodeMirror.defineExtension("isFolded",function(a){for(var b=this.findMarksAt(a),c=0;c<b.length;++c)if(b[c].__isFold)return!0}),CodeMirror.commands.fold=function(a){a.foldCode(a.getCursor())},CodeMirror.registerHelper("fold","combine",function(){var a=Array.prototype.slice.call(arguments,0);return function(b,c){for(var d=0;d<a.length;++d){var e=a[d](b,c);if(e)return e}}}),CodeMirror.registerHelper("fold","auto",function(a,b){for(var c=a.getHelpers(b,"fold"),d=0;d<c.length;d++){var e=c[d](a,b);if(e)return e}})}(),define("libs/codemirror/addon/fold/foldcode",function(){}),function(){"use strict";function a(a){this.options=a,this.from=this.to=0}function b(a){return a===!0&&(a={}),null==a.gutter&&(a.gutter="CodeMirror-foldgutter"),null==a.indicatorOpen&&(a.indicatorOpen="CodeMirror-foldgutter-open"),null==a.indicatorFolded&&(a.indicatorFolded="CodeMirror-foldgutter-folded"),a}function c(a,b){for(var c=a.findMarksAt(k(b)),d=0;d<c.length;++d)if(c[d].__isFold&&c[d].find().from.line==b)return!0}function d(a){if("string"==typeof a){var b=document.createElement("div");return b.className=a,b}return a.cloneNode(!0)}function e(a,b,e){var f=a.state.foldGutter.options,g=b;a.eachLine(b,e,function(b){var e=null;if(c(a,g))e=d(f.indicatorFolded);else{var h=k(g,0),i=f.rangeFinder||CodeMirror.fold.auto,j=i&&i(a,h);j&&j.from.line+1<j.to.line&&(e=d(f.indicatorOpen))}a.setGutterMarker(b,f.gutter,e),++g})}function f(a){var b=a.getViewport(),c=a.state.foldGutter;c&&(a.operation(function(){e(a,b.from,b.to)}),c.from=b.from,c.to=b.to)}function g(a,b,c){var d=a.state.foldGutter.options;c==d.gutter&&a.foldCode(k(b,0),d.rangeFinder)}function h(a){var b=a.state.foldGutter,c=a.state.foldGutter.options;b.from=b.to=0,clearTimeout(b.changeUpdate),b.changeUpdate=setTimeout(function(){f(a)},c.foldOnChangeTimeSpan||600)}function i(a){var b=a.state.foldGutter,c=a.state.foldGutter.options;clearTimeout(b.changeUpdate),b.changeUpdate=setTimeout(function(){var c=a.getViewport();b.from==b.to||c.from-b.to>20||b.from-c.to>20?f(a):a.operation(function(){c.from<b.from&&(e(a,c.from,b.from),b.from=c.from),c.to>b.to&&(e(a,b.to,c.to),b.to=c.to)})},c.updateViewportTimeSpan||400)}function j(a,b){var c=a.state.foldGutter,d=b.line;d>=c.from&&d<c.to&&e(a,d,d+1)}CodeMirror.defineOption("foldGutter",!1,function(c,d,e){e&&e!=CodeMirror.Init&&(c.clearGutter(c.state.foldGutter.options.gutter),c.state.foldGutter=null,c.off("gutterClick",g),c.off("change",h),c.off("viewportChange",i),c.off("fold",j),c.off("unfold",j),c.off("swapDoc",f)),d&&(c.state.foldGutter=new a(b(d)),f(c),c.on("gutterClick",g),c.on("change",h),c.on("viewportChange",i),c.on("fold",j),c.on("unfold",j),c.on("swapDoc",f))});var k=CodeMirror.Pos}(),define("libs/codemirror/addon/fold/foldgutter",function(){}),CodeMirror.registerHelper("fold","brace",function(a,b){function c(c){for(var d=b.ch,h=0;;){var i=d<=0?-1:g.lastIndexOf(c,d-1);if(i!=-1){if(1==h&&i<b.ch)break;if(e=a.getTokenTypeAt(CodeMirror.Pos(f,i+1)),!/^(comment|string)/.test(e))return i+1;d=i-1}else{if(1==h)break;h=1,d=g.length}}}var d,e,f=b.line,g=a.getLine(f),h="{",i="}",d=c("{");if(null==d&&(h="[",i="]",d=c("[")),null!=d){var j,k,l=1,m=a.lastLine();a:for(var n=f;n<=m;++n)for(var o=a.getLine(n),p=n==f?d:0;;){var q=o.indexOf(h,p),r=o.indexOf(i,p);if(q<0&&(q=o.length),r<0&&(r=o.length),p=Math.min(q,r),p==o.length)break;if(a.getTokenTypeAt(CodeMirror.Pos(n,p+1))==e)if(p==q)++l;else if(!--l){j=n,k=p;break a}++p}if(null!=j&&(f!=j||k!=d))return{from:CodeMirror.Pos(f,d),to:CodeMirror.Pos(j,k)}}}),CodeMirror.braceRangeFinder=CodeMirror.fold.brace,// deprecated
CodeMirror.registerHelper("fold","import",function(a,b){function c(b){if(b<a.firstLine()||b>a.lastLine())return null;var c=a.getTokenAt(CodeMirror.Pos(b,1));if(/\S/.test(c.string)||(c=a.getTokenAt(CodeMirror.Pos(b,c.end+1))),"keyword"!=c.type||"import"!=c.string)return null;
// Now find closing semicolon, return its position
for(var d=b,e=Math.min(a.lastLine(),b+10);d<=e;++d){var f=a.getLine(d),g=f.indexOf(";");if(g!=-1)return{startCh:c.end,end:CodeMirror.Pos(d,g)}}}var d,b=b.line,e=c(b);if(!e||c(b-1)||(d=c(b-2))&&d.end.line==b-1)return null;for(var f=e.end;;){var g=c(f.line+1);if(null==g)break;f=g.end}return{from:a.clipPos(CodeMirror.Pos(b,e.startCh+1)),to:f}}),CodeMirror.importRangeFinder=CodeMirror.fold["import"],// deprecated
CodeMirror.registerHelper("fold","include",function(a,b){function c(b){if(b<a.firstLine()||b>a.lastLine())return null;var c=a.getTokenAt(CodeMirror.Pos(b,1));return/\S/.test(c.string)||(c=a.getTokenAt(CodeMirror.Pos(b,c.end+1))),"meta"==c.type&&"#include"==c.string.slice(0,8)?c.start+8:void 0}var b=b.line,d=c(b);if(null==d||null!=c(b-1))return null;for(var e=b;;){var f=c(e+1);if(null==f)break;++e}return{from:CodeMirror.Pos(b,d+1),to:a.clipPos(CodeMirror.Pos(e))}}),CodeMirror.includeRangeFinder=CodeMirror.fold.include,define("libs/codemirror/addon/fold/brace-fold",function(){}),
// Because sometimes you need to style the cursor's line.
//
// Adds an option 'styleActiveLine' which, when enabled, gives the
// active line's wrapping <div> the CSS class "CodeMirror-activeline",
// and gives its background <div> the class "CodeMirror-activeline-background".
function(){"use strict";function a(a){"activeLine"in a.state&&(a.removeLineClass(a.state.activeLine,"wrap",d),a.removeLineClass(a.state.activeLine,"background",e))}function b(b,c){var f=b.getLineHandleVisualStart(c);b.state.activeLine!=f&&b.operation(function(){a(b),b.addLineClass(f,"wrap",d),b.addLineClass(f,"background",e),b.state.activeLine=f})}function c(a,c){b(a,c.head.line)}var d="CodeMirror-activeline",e="CodeMirror-activeline-background";CodeMirror.defineOption("styleActiveLine",!1,function(d,e,f){var g=f&&f!=CodeMirror.Init;e&&!g?(b(d,d.getCursor().line),d.on("beforeSelectionChange",c)):!e&&g&&(d.off("beforeSelectionChange",c),a(d),delete d.state.activeLine)})}(),define("libs/codemirror/addon/selection/active-line",function(){});/*!
 * JSHint, by JSHint Community.
 *
 * Licensed under the same slightly modified MIT license that JSLint is.
 * It stops evil-doers everywhere.
 *
 * JSHint is a derivative work of JSLint:
 *
 *   Copyright (c) 2002 Douglas Crockford  (www.JSLint.com)
 *
 *   Permission is hereby granted, free of charge, to any person obtaining
 *   a copy of this software and associated documentation files (the "Software"),
 *   to deal in the Software without restriction, including without limitation
 *   the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *   and/or sell copies of the Software, and to permit persons to whom
 *   the Software is furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included
 *   in all copies or substantial portions of the Software.
 *
 *   The Software shall be used for Good, not Evil.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *   FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *   DEALINGS IN THE SOFTWARE.
 *
 * JSHint was forked from the 2010-12-16 edition of JSLint.
 *
 */
/*
 JSHINT is a global function. It takes two parameters.

     var myResult = JSHINT(source, option);

 The first parameter is either a string or an array of strings. If it is a
 string, it will be split on '\n' or '\r'. If it is an array of strings, it
 is assumed that each string represents one line. The source can be a
 JavaScript text or a JSON text.

 The second parameter is an optional object of options which control the
 operation of JSHINT. Most of the options are booleans: They are all
 optional and have a default value of false. One of the options, predef,
 can be an array of names, which will be used to declare global variables,
 or an object whose keys are used as global names, with a boolean value
 that determines if they are assignable.

 If it checks out, JSHINT returns true. Otherwise, it returns false.

 If false, you can inspect JSHINT.errors to find out the problems.
 JSHINT.errors is an array of objects containing these members:

 {
     line      : The line (relative to 1) at which the lint was found
     character : The character (relative to 1) at which the lint was found
     reason    : The problem
     evidence  : The text line in which the problem occurred
     raw       : The raw message before the details were inserted
     a         : The first detail
     b         : The second detail
     c         : The third detail
     d         : The fourth detail
 }

 If a fatal error was found, a null will be the last element of the
 JSHINT.errors array.

 You can request a data structure which contains JSHint's results.

     var myData = JSHINT.data();

 It returns a structure with this form:

 {
     errors: [
         {
             line: NUMBER,
             character: NUMBER,
             reason: STRING,
             evidence: STRING
         }
     ],
     functions: [
         name: STRING,
         line: NUMBER,
         character: NUMBER,
         last: NUMBER,
         lastcharacter: NUMBER,
         param: [
             STRING
         ],
         closure: [
             STRING
         ],
         var: [
             STRING
         ],
         exception: [
             STRING
         ],
         outer: [
             STRING
         ],
         unused: [
             STRING
         ],
         global: [
             STRING
         ],
         label: [
             STRING
         ]
     ],
     globals: [
         STRING
     ],
     member: {
         STRING: NUMBER
     },
     unused: [
         {
             name: STRING,
             line: NUMBER
         }
     ],
     implieds: [
         {
             name: STRING,
             line: NUMBER
         }
     ],
     urls: [
         STRING
     ],
     json: BOOLEAN
 }

 Empty arrays will not be included.

*/
/*jshint
 evil: true, nomen: false, onevar: false, regexp: false, strict: true, boss: true,
 undef: true, maxlen: 100, indent: 4, quotmark: double, unused: true
*/
/*members "\b", "\t", "\n", "\f", "\r", "!=", "!==", "\"", "%", "(begin)",
 "(breakage)", "(character)", "(context)", "(error)", "(explicitNewcap)", "(global)",
 "(identifier)", "(last)", "(lastcharacter)", "(line)", "(loopage)", "(metrics)",
 "(name)", "(onevar)", "(params)", "(scope)", "(statement)", "(verb)", "(tokens)", "(catch)",
 "*", "+", "++", "-", "--", "\/", "<", "<=", "==",
 "===", ">", ">=", $, $$, $A, $F, $H, $R, $break, $continue, $w, Abstract, Ajax,
 __filename, __dirname, ActiveXObject, Array, ArrayBuffer, ArrayBufferView, Audio,
 Autocompleter, Asset, Boolean, Builder, Buffer, Browser, Blob, COM, CScript, Canvas,
 CustomAnimation, Class, Control, ComplexityCount, Chain, Color, Cookie, Core, DataView, Date,
 Debug, Draggable, Draggables, Droppables, Document, DomReady, DOMEvent, DOMReady, DOMParser,
 Drag, E, Enumerator, Enumerable, Element, Elements, Error, Effect, EvalError, Event,
 Events, FadeAnimation, Field, Flash, Float32Array, Float64Array, Form,
 FormField, Frame, FormData, Function, Fx, GetObject, Group, Hash, HotKey,
 HTMLElement, HTMLAnchorElement, HTMLBaseElement, HTMLBlockquoteElement,
 HTMLBodyElement, HTMLBRElement, HTMLButtonElement, HTMLCanvasElement, HTMLDirectoryElement,
 HTMLDivElement, HTMLDListElement, HTMLFieldSetElement,
 HTMLFontElement, HTMLFormElement, HTMLFrameElement, HTMLFrameSetElement,
 HTMLHeadElement, HTMLHeadingElement, HTMLHRElement, HTMLHtmlElement,
 HTMLIFrameElement, HTMLImageElement, HTMLInputElement, HTMLIsIndexElement,
 HTMLLabelElement, HTMLLayerElement, HTMLLegendElement, HTMLLIElement,
 HTMLLinkElement, HTMLMapElement, HTMLMenuElement, HTMLMetaElement,
 HTMLModElement, HTMLObjectElement, HTMLOListElement, HTMLOptGroupElement,
 HTMLOptionElement, HTMLParagraphElement, HTMLParamElement, HTMLPreElement,
 HTMLQuoteElement, HTMLScriptElement, HTMLSelectElement, HTMLStyleElement,
 HtmlTable, HTMLTableCaptionElement, HTMLTableCellElement, HTMLTableColElement,
 HTMLTableElement, HTMLTableRowElement, HTMLTableSectionElement,
 HTMLTextAreaElement, HTMLTitleElement, HTMLUListElement, HTMLVideoElement,
 Iframe, IframeShim, Image, importScripts, Int16Array, Int32Array, Int8Array,
 Insertion, InputValidator, JSON, Keyboard, Locale, LN10, LN2, LOG10E, LOG2E,
 MAX_VALUE, MIN_VALUE, Map, Mask, Math, MenuItem, MessageChannel, MessageEvent, MessagePort,
 MoveAnimation, MooTools, MutationObserver, NaN, Native, NEGATIVE_INFINITY, Node, NodeFilter,
 Number, Object, ObjectRange,
 Option, Options, OverText, PI, POSITIVE_INFINITY, PeriodicalExecuter, Point, Position, Prototype,
 RangeError, Rectangle, ReferenceError, RegExp, ResizeAnimation, Request, RotateAnimation, Set,
 SQRT1_2, SQRT2, ScrollBar, ScriptEngine, ScriptEngineBuildVersion,
 ScriptEngineMajorVersion, ScriptEngineMinorVersion, Scriptaculous, Scroller,
 Slick, Slider, Selector, SharedWorker, String, Style, SyntaxError, Sortable, Sortables,
 SortableObserver, Sound, Spinner, System, Swiff, Text, TextArea, Template,
 Timer, Tips, Type, TypeError, Toggle, Try, "use strict", unescape, URI, URIError, URL,
 VBArray, WeakMap, WSH, WScript, XDomainRequest, Web, Window, XMLDOM, XMLHttpRequest, XMLSerializer,
 XPathEvaluator, XPathException, XPathExpression, XPathNamespace, XPathNSResolver, XPathResult,
 "\\", a, abs, addEventListener, address, alert, apply, applicationCache, arguments, arity,
 asi, atob, b, basic, basicToken, bitwise, blacklist, block, blur, boolOptions, boss,
 browser, btoa, c, call, callee, caller, camelcase, cases, charAt, charCodeAt, character,
 clearInterval, clearTimeout, close, closed, closure, comment, complexityCount, condition,
 confirm, console, constructor, content, couch, create, css, curly, d, data, datalist, dd, debug,
 decodeURI, decodeURIComponent, defaultStatus, defineClass, deserialize, devel, document,
 dojo, dijit, dojox, define, else, emit, encodeURI, encodeURIComponent, elem,
 eqeq, eqeqeq, eqnull, errors, es5, escape, esnext, eval, event, evidence, evil,
 ex, exception, exec, exps, expr, exports, FileReader, first, floor, focus, forEach,
 forin, fragment, frames, from, fromCharCode, fud, funcscope, funct, function, functions,
 g, gc, getComputedStyle, getRow, getter, getterToken, GLOBAL, global, globals, globalstrict,
 hasOwnProperty, help, history, i, id, identifier, immed, implieds, importPackage, include,
 indent, indexOf, init, ins, internals, instanceOf, isAlpha, isApplicationRunning, isArray,
 isDigit, isFinite, isNaN, iterator, java, join, jshint,
 JSHINT, json, jquery, jQuery, keys, label, labelled, last, lastcharacter, lastsemic, laxbreak,
 laxcomma, latedef, lbp, led, left, length, line, load, loadClass, localStorage, location,
 log, loopfunc, m, match, max, maxcomplexity, maxdepth, maxerr, maxlen, maxstatements, maxparams,
 member, message, meta, module, moveBy, moveTo, mootools, multistr, name, navigator, new, newcap,
 nestedBlockDepth, noarg, node, noempty, nomen, nonew, nonstandard, nud, onbeforeunload, onblur,
 onerror, onevar, onecase, onfocus, onload, onresize, onunload, open, openDatabase, openURL,
 opener, opera, options, outer, param, parent, parseFloat, parseInt, passfail, plusplus,
 postMessage, pop, predef, print, process, prompt, proto, prototype, prototypejs, provides, push,
 quit, quotmark, range, raw, reach, reason, regexp, readFile, readUrl, regexdash,
 removeEventListener, replace, report, require, reserved, resizeBy, resizeTo, resolvePath,
 resumeUpdates, respond, rhino, right, runCommand, scroll, scope, screen, scripturl, scrollBy,
 scrollTo, scrollbar, search, seal, self, send, serialize, sessionStorage, setInterval, setTimeout,
 setter, setterToken, shift, slice, smarttabs, sort, spawn, split, statement, statementCount, stack,
 status, start, strict, sub, substr, supernew, shadow, supplant, sum, sync, test, toLowerCase,
 toString, toUpperCase, toint32, token, tokens, top, trailing, type, typeOf, Uint16Array,
 Uint32Array, Uint8Array, undef, undefs, unused, urls, validthis, value, valueOf, var, vars,
 version, verifyMaxParametersPerFunction, verifyMaxStatementsPerFunction,
 verifyMaxComplexityPerFunction, verifyMaxNestedBlockDepthPerFunction, WebSocket, withstmt, white,
 window, windows, Worker, worker, wsh, yui, YUI, Y, YUI_config*/
/*global exports: false */
// We build the application inside a function so that we produce only a single
// global variable. That function will be invoked immediately, and its return
// value is the JSHINT function itself.
var JSHINT=function(){"use strict";function a(){}// Used by Object.create
function b(a,b){
// The object.hasOwnProperty method fails when the property under consideration
// is named 'hasOwnProperty'. So we have to use this more convoluted form.
return Object.prototype.hasOwnProperty.call(a,b)}function c(a,b){void 0===Wa[a]&&void 0===Va[a]&&n("Bad option: '"+a+"'.",b)}function d(a){return"[object String]"===Object.prototype.toString.call(a)}
// Non standard methods
function e(a){return a>="a"&&a<="z￿"||a>="A"&&a<="Z￿"}function f(a){return a>="0"&&a<="9"}function g(a,b){return!!a&&!(!a.identifier||a.value!==b)}function h(a,b){return a.replace(/\{([^{}]*)\}/g,function(a,c){var d=b[c];return"string"==typeof d||"number"==typeof d?d:a})}function i(a,c){var d;for(d in c)b(c,d)&&!b(JSHINT.blacklist,d)&&(a[d]=c[d])}function j(){Object.keys(JSHINT.blacklist).forEach(function(a){delete ya[a]})}function k(){xa.couch&&i(ya,$a),xa.rhino&&i(ya,gb),xa.prototypejs&&i(ya,fb),xa.node&&(i(ya,eb),xa.globalstrict=!0),xa.devel&&i(ya,_a),xa.dojo&&i(ya,ab),xa.browser&&i(ya,Za),xa.nonstandard&&i(ya,ib),xa.jquery&&i(ya,cb),xa.mootools&&i(ya,db),xa.worker&&i(ya,kb),xa.wsh&&i(ya,lb),xa.esnext&&Ja(),xa.globalstrict&&xa.strict!==!1&&(xa.strict=!0),xa.yui&&i(ya,mb)}
// Produce an error warning.
function l(a,b,c){var d=Math.floor(b/ra.length*100);throw{name:"JSHintError",line:b,character:c,message:a+" ("+d+"% scanned).",raw:a}}function m(a,b,c,d){return JSHINT.undefs.push([a,b,c,d])}function n(a,b,c,d,e,f){var g,i,j;// `~
return b=b||va,"(end)"===b.id&&(b=Ga),i=b.line||0,g=b.from||0,j={id:"(error)",raw:a,evidence:ra[i-1]||"",line:i,character:g,scope:JSHINT.scope,a:c,b:d,c:e,d:f},j.reason=h(a,j),JSHINT.errors.push(j),xa.passfail&&l("Stopping. ",i,g),Ka+=1,Ka>=xa.maxerr&&l("Too many errors.",i,g),j}function o(a,b,c,d,e,f,g){return n(a,{line:b,from:c},d,e,f,g)}function p(a,b,c,d,e,f){n(a,b,c,d,e,f)}function q(a,b,c,d,e,f,g){return p(a,{line:b,from:c},d,e,f,g)}
// Tracking of "internal" scripts, like eval containing a static string
function r(a,b){var c;return c={id:"(internal)",elem:a,value:b},JSHINT.internals.push(c),c}function s(a,c,d){"hasOwnProperty"===a&&n("'hasOwnProperty' is a really bad name."),
// Define t in the current function in the current scope.
"exception"===c&&b(ka["(context)"],a)&&(ka[a]===!0||xa.node||n("Value of '{a}' may be overwritten in IE.",va,a)),b(ka,a)&&!ka["(global)"]&&(ka[a]===!0?xa.latedef&&n("'{a}' was used before it was defined.",va,a):xa.shadow||"exception"===c||n("'{a}' is already defined.",va,a)),ka[a]=c,d&&(ka["(tokens)"][a]=d),ka["(global)"]?(ma[a]=ka,b(na,a)&&(xa.latedef&&n("'{a}' was used before it was defined.",va,a),delete na[a])):Ca[a]=ka}function t(){var a,d,e,f,g,h,l,m=va,n=m.value,o=xa.quotmark,q={};switch(n){case"*/":p("Unbegun comment.");break;case"/*members":case"/*member":n="/*members",ua||(ua={}),d=ua,xa.quotmark=!1;break;case"/*jshint":case"/*jslint":d=xa,e=Va;break;case"/*global":d=q;break;default:p("What?")}f=nb.token();a:for(;;){for(l=!1;;){if("special"===f.type&&"*/"===f.value)break a;if("(endline)"!==f.id&&","!==f.id)break;f=nb.token()}if("/*global"===n&&"-"===f.value&&(l=!0,f=nb.token()),"(string)"!==f.type&&"(identifier)"!==f.type&&"/*members"!==n&&p("Bad option.",f),h=nb.token(),":"===h.id){h=nb.token(),d===ua&&p("Expected '{a}' and instead saw '{b}'.",f,"*/",":"),"/*jshint"===n&&c(f.value,f);var r=["maxstatements","maxparams","maxdepth","maxcomplexity","maxerr","maxlen","indent"];if(r.indexOf(f.value)>-1&&("/*jshint"===n||"/*jslint"===n))a=+h.value,("number"!=typeof a||!isFinite(a)||a<=0||Math.floor(a)!==a)&&p("Expected a small integer and instead saw '{a}'.",h,h.value),"indent"===f.value&&(d.white=!0),d[f.value]=a;else if("validthis"===f.value)ka["(global)"]?p("Option 'validthis' can't be used in a global scope."):"true"===h.value||"false"===h.value?d[f.value]="true"===h.value:p("Bad option value.",h);else if("quotmark"===f.value&&"/*jshint"===n)switch(h.value){case"true":d.quotmark=!0;break;case"false":d.quotmark=!1;break;case"double":case"single":d.quotmark=h.value;break;default:p("Bad option value.",h)}else"true"===h.value||"false"===h.value?("/*jslint"===n?(g=Ya[f.value]||f.value,d[g]="true"===h.value,void 0!==Xa[g]&&(d[g]=!d[g])):d[f.value]="true"===h.value,"newcap"===f.value&&(d["(explicitNewcap)"]=!0)):p("Bad option value.",h);f=nb.token()}else"/*jshint"!==n&&"/*jslint"!==n||p("Missing option value.",f),d[f.value]=!1,"/*global"===n&&l===!0&&(JSHINT.blacklist[f.value]=f.value,j()),f=h}"/*members"===n&&(xa.quotmark=o),i(ya,q);for(var s in q)b(q,s)&&(ja[s]=m);e&&k()}
// We need a peek function. If it has an argument, it peeks that much farther
// ahead. It is used to distinguish
//     for ( var i in ...
// from
//     for ( var i = ...
function u(a){var b,c=a||0,d=0;while(d<=c)b=sa[d],b||(b=sa[d]=nb.token()),d+=1;return b}
// Produce the next token. It looks for programming errors.
function v(a,b){switch(Ga.id){case"(number)":"."===va.id&&n("A dot following a number can be confused with a decimal point.",Ga);break;case"-":"-"!==va.id&&"--"!==va.id||n("Confusing minusses.");break;case"+":"+"!==va.id&&"++"!==va.id||n("Confusing plusses.")}for(("(string)"===Ga.type||Ga.identifier)&&(ia=Ga.value),a&&va.id!==a&&(b?"(end)"===va.id?n("Unmatched '{a}'.",b,b.id):n("Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.",va,a,b.id,b.line,va.value):"(identifier)"===va.type&&va.value===a||n("Expected '{a}' and instead saw '{b}'.",va,a,va.value)),Aa=Ga,Ga=va;;){if(va=sa.shift()||nb.token(),"(end)"===va.id||"(error)"===va.id)return;if("special"===va.type)t();else if("(endline)"!==va.id)break}}
// This is the heart of JSHINT, the Pratt parser. In addition to parsing, it
// is looking for ad hoc lint patterns. We add .fud to Pratt's model, which is
// like .nud except that it is only used on the first token of a statement.
// Having .fud makes it much easier to define statement-oriented languages like
// JavaScript. I retained Pratt's nomenclature.
// .nud     Null denotation
// .fud     First null denotation
// .led     Left denotation
//  lbp     Left binding power
//  rbp     Right binding power
// They are elements of the parsing method called Top Down Operator Precedence.
function w(a,b){var c,d=!1,e=!1;if("(end)"===va.id&&p("Unexpected early end of program.",Ga),v(),b&&(ia="anonymous",ka["(verb)"]=Ga.value),b===!0&&Ga.fud)c=Ga.fud();else{if(Ga.nud)c=Ga.nud();else{if("(number)"===va.type&&"."===Ga.id)return n("A leading decimal point can be confused with a dot: '.{a}'.",Ga,va.value),v(),Ga;p("Expected an identifier and instead saw '{a}'.",Ga,Ga.id)}while(a<va.lbp)d="Array"===Ga.value,e="Object"===Ga.value,
// #527, new Foo.Array(), Foo.Array(), new Foo.Object(), Foo.Object()
// Line breaks in IfStatement heads exist to satisfy the checkJSHint
// "Line too long." error.
c&&(c.value||c.first&&c.first.value)&&("new"!==c.value||c.first&&c.first.value&&"."===c.first.value)&&(d=!1,
// ...In the case of Object, if the left.value and token.value
// are not equal, then safely assume that this not "new Object()"
c.value!==Ga.value&&(e=!1)),v(),d&&"("===Ga.id&&")"===va.id&&n("Use the array literal notation [].",Ga),e&&"("===Ga.id&&")"===va.id&&n("Use the object literal notation {}.",Ga),Ga.led?c=Ga.led(c):p("Expected an operator and instead saw '{a}'.",Ga,Ga.id)}return c}
// Functions for conformance of style.
function x(a,b){a=a||Ga,b=b||va,xa.white&&a.character!==b.from&&a.line===b.line&&(a.from+=a.character-a.from,n("Unexpected space after '{a}'.",a,a.value))}function y(a,b){a=a||Ga,b=b||va,!xa.white||a.character===b.from&&a.line===b.line||n("Unexpected space before '{a}'.",b,b.value)}function z(a,b){a=a||Ga,b=b||va,xa.white&&!a.comment&&a.line===b.line&&x(a,b)}function A(a,b){if(xa.white){if(a=a||Ga,b=b||va,";"===a.value&&";"===b.value)return;a.line===b.line&&a.character===b.from&&(a.from+=a.character-a.from,n("Missing space after '{a}'.",a,a.value))}}function B(a,b){a=a||Ga,b=b||va,xa.laxbreak||a.line===b.line?xa.white&&(a=a||Ga,b=b||va,a.character===b.from&&(a.from+=a.character-a.from,n("Missing space after '{a}'.",a,a.value))):n("Bad line breaking before '{a}'.",b,b.id)}function C(a){var b;xa.white&&"(end)"!==va.id&&(b=pa+(a||0),va.from!==b&&n("Expected '{a}' to have an indentation at {b} instead at {c}.",va,va.value,b,va.from))}function D(a){a=a||Ga,a.line!==va.line&&n("Line breaking error '{a}'.",a,a.value)}function E(){Ga.line!==va.line?xa.laxcomma||(E.first&&(n("Comma warnings can be turned off with 'laxcomma'"),E.first=!1),n("Bad line breaking before '{a}'.",Ga,va.id)):!Ga.comment&&Ga.character!==va.from&&xa.white&&(Ga.from+=Ga.character-Ga.from,n("Unexpected space after '{a}'.",Ga,Ga.value)),v(","),A(Ga,va)}
// Functional constructors for making the symbols that will be inherited by
// tokens.
function F(a,b){var c=jb[a];return c&&"object"==typeof c||(jb[a]=c={id:a,lbp:b,value:a}),c}function G(a){return F(a,0)}function H(a,b){var c=G(a);return c.identifier=c.reserved=!0,c.fud=b,c}function I(a,b){var c=H(a,b);return c.block=!0,c}function J(a){var b=a.id.charAt(0);return(b>="a"&&b<="z"||b>="A"&&b<="Z")&&(a.identifier=a.reserved=!0),a}function K(a,b){var c=F(a,150);return J(c),c.nud="function"==typeof b?b:function(){return this.right=w(150),this.arity="unary","++"!==this.id&&"--"!==this.id||(xa.plusplus?n("Unexpected use of '{a}'.",this,this.id):this.right.identifier&&!this.right.reserved||"."===this.right.id||"["===this.right.id||n("Bad operand.",this)),this},c}function L(a,b){var c=G(a);return c.type=a,c.nud=b,c}function M(a,b){var c=L(a,b);return c.identifier=c.reserved=!0,c}function N(a,b){return M(a,function(){return"function"==typeof b&&b(this),this})}function O(a,b,c,d){var e=F(a,c);return J(e),e.led=function(e){return d||(B(Aa,Ga),A(Ga,va)),"in"===a&&"!"===e.id&&n("Confusing use of '{a}'.",e,"!"),"function"==typeof b?b(e,this):(this.left=e,this.right=w(c),this)},e}function P(a,b){var c=F(a,100);return c.led=function(a){B(Aa,Ga),A(Ga,va);var c=w(100);return g(a,"NaN")||g(c,"NaN")?n("Use the isNaN function to compare with NaN.",this):b&&b.apply(this,[a,c]),"!"===a.id&&n("Confusing use of '{a}'.",a,"!"),"!"===c.id&&n("Confusing use of '{a}'.",c,"!"),this.left=a,this.right=c,this},c}function Q(a){return a&&("(number)"===a.type&&0===+a.value||"(string)"===a.type&&""===a.value||"null"===a.type&&!xa.eqnull||"true"===a.type||"false"===a.type||"undefined"===a.type)}function R(a){return F(a,20).exps=!0,O(a,function(a,b){if(b.left=a,ya[a.value]===!1&&Ca[a.value]["(global)"]===!0?n("Read only.",a):a["function"]&&n("'{a}' is a function.",a,a.value),a){if(xa.esnext&&"const"===ka[a.value]&&n("Attempting to override '{a}' which is a constant",a,a.value),"."===a.id||"["===a.id)return a.left&&"arguments"!==a.left.value||n("Bad assignment.",b),b.right=w(19),b;if(a.identifier&&!a.reserved)return"exception"===ka[a.value]&&n("Do not assign to the exception parameter.",a),b.right=w(19),b;a===jb["function"]&&n("Expected an identifier in an assignment and instead saw a function invocation.",Ga)}p("Bad assignment.",b)},20)}function S(a,b,c){var d=F(a,c);return J(d),d.led="function"==typeof b?b:function(a){return xa.bitwise&&n("Unexpected use of '{a}'.",this,this.id),this.left=a,this.right=w(c),this},d}function T(a){return F(a,20).exps=!0,O(a,function(a,b){return xa.bitwise&&n("Unexpected use of '{a}'.",b,b.id),A(Aa,Ga),A(Ga,va),a?"."===a.id||"["===a.id||a.identifier&&!a.reserved?(w(19),b):(a===jb["function"]&&n("Expected an identifier in an assignment, and instead saw a function invocation.",Ga),b):void p("Bad assignment.",b)},20)}function U(a){var b=F(a,150);return b.led=function(a){return xa.plusplus?n("Unexpected use of '{a}'.",this,this.id):a.identifier&&!a.reserved||"."===a.id||"["===a.id||n("Bad operand.",this),this.left=a,this},b}
// fnparam means that this identifier is being defined as a function
// argument (see identifier())
function V(a){if(va.identifier)
// `undefined` as a function param is a common pattern to protect
// against the case when somebody does `undefined = true` and
// help with minification. More info: https://gist.github.com/315916
return v(),Ga.reserved&&!xa.es5&&(a&&"undefined"===Ga.value||n("Expected an identifier and instead saw '{a}' (a reserved word).",Ga,Ga.id)),Ga.value}
// fnparam means that this identifier is being defined as a function
// argument
function W(a){var b=V(a);return b?b:void("function"===Ga.id&&"("===va.id?n("Missing name in function declaration."):p("Expected an identifier and instead saw '{a}'.",va,va.value))}function X(a){var b,c=0;if(";"===va.id&&!wa)for(;;){if(b=u(c),b.reach)return;if("(endline)"!==b.id){if("function"===b.id){if(!xa.latedef)break;n("Inner functions should be listed at the top of the outer function.",b);break}n("Unreachable '{a}' after '{b}'.",b,b.value,a);break}c+=1}}function Y(a){var b,c=pa,d=Ca,e=va;if(";"===e.id)return void v(";");
// Is it a lonely block?
if(
// Is this a labelled statement?
e.identifier&&!e.reserved&&":"===u().id&&(v(),v(":"),Ca=Object.create(d),s(e.value,"label"),va.labelled||"{"===va.value||n("Label '{a}' on {b} statement.",va,e.value,va.value),Sa.test(e.value+":")&&n("Label '{a}' looks like a javascript url.",e,e.value),va.label=e.value,e=va),"{"===e.id)return void _(!0,!0);
// Look for the final semicolon.
if(
// Parse the statement.
a||C(),b=w(0,!0),!e.block){if(xa.expr||b&&b.exps?xa.nonew&&"("===b.id&&"new"===b.left.id&&n("Do not use 'new' for side effects.",e):n("Expected an assignment or function call and instead saw an expression.",Ga),","===va.id)return E();";"!==va.id?xa.asi||xa.lastsemic&&"}"===va.id&&va.line===Ga.line||o("Missing semicolon.",Ga.line,Ga.character):(x(Ga,va),v(";"),A(Ga,va))}
// Restore the indentation.
return pa=c,Ca=d,b}function Z(a){var b,c=[];while(!va.reach&&"(end)"!==va.id)";"===va.id?(b=u(),b&&"("===b.id||n("Unnecessary semicolon."),v(";")):c.push(Y(a===va.line));return c}/*
     * read all directives
     * recognizes a simple form of asi, but always
     * warns, if it is used
     */
function $(){for(var a,b,c;;){if("(string)"!==va.id)break;if(b=u(0),"(endline)"===b.id){a=1;do c=u(a),a+=1;while("(endline)"===c.id);if(";"!==c.id){if("(string)"!==c.id&&"(number)"!==c.id&&"(regexp)"!==c.id&&c.identifier!==!0&&"}"!==c.id)break;n("Missing semicolon.",va)}else b=c}else if("}"===b.id)
// directive with no other statements, warn about missing semicolon
n("Missing semicolon.",b);else if(";"!==b.id)break;C(),v(),Ea[Ga.value]&&n('Unnecessary directive "{a}".',Ga,Ga.value),"use strict"===Ga.value&&(xa["(explicitNewcap)"]||(xa.newcap=!0),xa.undef=!0),
// there's no directive negation, so always set to true
Ea[Ga.value]=!0,";"===b.id&&v(";")}}/*
     * Parses a single block. A block is a sequence of statements wrapped in
     * braces.
     *
     * ordinary - true for everything but function bodies and try blocks.
     * stmt     - true if block can be a single statement (e.g. in if/for/while).
     * isfunc   - true if block is a function body
     */
function _(a,c,d){var e,f,g,h,i,j=oa,k=pa,l=Ca;oa=a,a&&xa.funcscope||(Ca=Object.create(Ca)),A(Ga,va),g=va;var m=ka["(metrics)"];if(m.nestedBlockDepth+=1,m.verifyMaxNestedBlockDepthPerFunction(),"{"===va.id){if(v("{"),h=Ga.line,"}"!==va.id){pa+=xa.indent;while(!a&&va.from>pa)pa+=xa.indent;if(d){f={};for(i in Ea)b(Ea,i)&&(f[i]=Ea[i]);$(),xa.strict&&ka["(context)"]["(global)"]&&(f["use strict"]||Ea["use strict"]||n('Missing "use strict" statement.'))}e=Z(h),m.statementCount+=e.length,d&&(Ea=f),pa-=xa.indent,h!==va.line&&C()}else h!==va.line&&C();v("}",g),pa=k}else a?(c&&!xa.curly||n("Expected '{a}' and instead saw '{b}'.",va,"{",va.value),wa=!0,pa+=xa.indent,
// test indentation only if statement is in new line
e=[Y(va.line===Ga.line)],pa-=xa.indent,wa=!1):p("Expected '{a}' and instead saw '{b}'.",va,"{",va.value);return ka["(verb)"]=null,a&&xa.funcscope||(Ca=l),oa=j,!a||!xa.noempty||e&&0!==e.length||n("Empty block."),m.nestedBlockDepth-=1,e}function aa(a){ua&&"boolean"!=typeof ua[a]&&n("Unexpected /*member '{a}'.",Ga,a),"number"==typeof ta[a]?ta[a]+=1:ta[a]=1}function ba(a){var b=a.value,c=a.line,d=na[b];"function"==typeof d&&(d=!1),d?d[d.length-1]!==c&&d.push(c):(d=[c],na[b]=d)}function ca(){var a=V(!0);return a||("(string)"===va.id?(a=va.value,v()):"(number)"===va.id&&(a=va.value.toString(),v())),a}function da(){var a,b=va,c=[];if(v("("),z(),")"===va.id)return void v(")");for(;;){if(a=W(!0),c.push(a),s(a,"unused",Ga),","!==va.id)return v(")",b),z(Aa,Ga),c;E()}}function ea(a,b){var c,d=xa,e=Ca;return xa=Object.create(xa),Ca=Object.create(Ca),ka={"(name)":a||'"'+ia+'"',"(line)":va.line,"(character)":va.character,"(context)":ka,"(breakage)":0,"(loopage)":0,"(metrics)":fa(va),"(scope)":Ca,"(statement)":b,"(tokens)":{}},c=ka,Ga.funct=ka,la.push(ka),a&&s(a,"function"),ka["(params)"]=da(),ka["(metrics)"].verifyMaxParametersPerFunction(ka["(params)"]),_(!1,!1,!0),ka["(metrics)"].verifyMaxStatementsPerFunction(),ka["(metrics)"].verifyMaxComplexityPerFunction(),Ca=e,xa=d,ka["(last)"]=Ga.line,ka["(lastcharacter)"]=Ga.character,ka=ka["(context)"],c}function fa(a){return{statementCount:0,nestedBlockDepth:-1,ComplexityCount:1,verifyMaxStatementsPerFunction:function(){if(xa.maxstatements&&this.statementCount>xa.maxstatements){var b="Too many statements per function ("+this.statementCount+").";n(b,a)}},verifyMaxParametersPerFunction:function(b){if(b=b||[],xa.maxparams&&b.length>xa.maxparams){var c="Too many parameters per function ("+b.length+").";n(c,a)}},verifyMaxNestedBlockDepthPerFunction:function(){if(xa.maxdepth&&this.nestedBlockDepth>0&&this.nestedBlockDepth===xa.maxdepth+1){var a="Blocks are nested too deeply ("+this.nestedBlockDepth+").";n(a)}},verifyMaxComplexityPerFunction:function(){var b=xa.maxcomplexity,c=this.ComplexityCount;if(b&&c>b){var d="Cyclomatic complexity is too high per function ("+c+").";n(d,a)}}}}function ga(){ka["(metrics)"].ComplexityCount+=1}
// Parse JSON
function ha(){function a(){var a={},b=va;if(v("{"),"}"!==va.id)for(;;){if("(end)"===va.id)p("Missing '}' to match '{' from line {a}.",va,b.line);else{if("}"===va.id){n("Unexpected comma.",Ga);break}","===va.id?p("Unexpected comma.",va):"(string)"!==va.id&&n("Expected a string and instead saw {a}.",va,va.value)}if(a[va.value]===!0?n("Duplicate key '{a}'.",va,va.value):"__proto__"===va.value&&!xa.proto||"__iterator__"===va.value&&!xa.iterator?n("The '{a}' key may produce unexpected results.",va,va.value):a[va.value]=!0,v(),v(":"),ha(),","!==va.id)break;v(",")}v("}")}function b(){var a=va;if(v("["),"]"!==va.id)for(;;){if("(end)"===va.id)p("Missing ']' to match '[' from line {a}.",va,a.line);else{if("]"===va.id){n("Unexpected comma.",Ga);break}","===va.id&&p("Unexpected comma.",va)}if(ha(),","!==va.id)break;v(",")}v("]")}switch(va.id){case"{":a();break;case"[":b();break;case"true":case"false":case"null":case"(number)":case"(string)":v();break;case"-":v("-"),Ga.character!==va.from&&n("Unexpected space after '-'.",Ga),x(Ga,va),v("(number)");break;default:p("Expected a JSON value.",va)}}var ia,ja,ka,la,// All of the functions
ma,// The global scope
na,// Implied globals
oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,// Global variables defined by option
za,Aa,Ba,Ca,// The current scope
Da,Ea,Fa,Ga,Ha,Ia,Ja,Ka,La,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta,// The guessed name for anonymous functions.
// These are operators that should not be used with the ! operator.
Ua={"<":!0,"<=":!0,"==":!0,"===":!0,"!==":!0,"!=":!0,">":!0,">=":!0,"+":!0,"-":!0,"*":!0,"/":!0,"%":!0},
// These are the JSHint boolean options.
Va={asi:!0,// if automatic semicolon insertion should be tolerated
bitwise:!0,// if bitwise operators should not be allowed
boss:!0,// if advanced usage of assignments should be allowed
browser:!0,// if the standard browser globals should be predefined
camelcase:!0,// if identifiers should be required in camel case
couch:!0,// if CouchDB globals should be predefined
curly:!0,// if curly braces around all blocks should be required
debug:!0,// if debugger statements should be allowed
devel:!0,// if logging globals should be predefined (console,
// alert, etc.)
dojo:!0,// if Dojo Toolkit globals should be predefined
eqeqeq:!0,// if === should be required
eqnull:!0,// if == null comparisons should be tolerated
es5:!0,// if ES5 syntax should be allowed
esnext:!0,// if es.next specific syntax should be allowed
evil:!0,// if eval should be allowed
expr:!0,// if ExpressionStatement should be allowed as Programs
forin:!0,// if for in statements must filter
funcscope:!0,// if only function scope should be used for scope tests
globalstrict:!0,// if global "use strict"; should be allowed (also
// enables 'strict')
immed:!0,// if immediate invocations must be wrapped in parens
iterator:!0,// if the `__iterator__` property should be allowed
jquery:!0,// if jQuery globals should be predefined
lastsemic:!0,// if semicolons may be ommitted for the trailing
// statements inside of a one-line blocks.
latedef:!0,// if the use before definition should not be tolerated
laxbreak:!0,// if line breaks should not be checked
laxcomma:!0,// if line breaks should not be checked around commas
loopfunc:!0,// if functions should be allowed to be defined within
// loops
mootools:!0,// if MooTools globals should be predefined
multistr:!0,// allow multiline strings
newcap:!0,// if constructor names must be capitalized
noarg:!0,// if arguments.caller and arguments.callee should be
// disallowed
node:!0,// if the Node.js environment globals should be
// predefined
noempty:!0,// if empty blocks should be disallowed
nonew:!0,// if using `new` for side-effects should be disallowed
nonstandard:!0,// if non-standard (but widely adopted) globals should
// be predefined
nomen:!0,// if names should be checked
onevar:!0,// if only one var statement per function should be
// allowed
onecase:!0,// if one case switch statements should be allowed
passfail:!0,// if the scan should stop on first error
plusplus:!0,// if increment/decrement should not be allowed
proto:!0,// if the `__proto__` property should be allowed
prototypejs:!0,// if Prototype and Scriptaculous globals should be
// predefined
regexdash:!0,// if unescaped first/last dash (-) inside brackets
// should be tolerated
regexp:!0,// if the . should not be allowed in regexp literals
rhino:!0,// if the Rhino environment globals should be predefined
undef:!0,// if variables should be declared before used
unused:!0,// if variables should be always used
scripturl:!0,// if script-targeted URLs should be tolerated
shadow:!0,// if variable shadowing should be tolerated
smarttabs:!0,// if smarttabs should be tolerated
// (http://www.emacswiki.org/emacs/SmartTabs)
strict:!0,// require the "use strict"; pragma
sub:!0,// if all forms of subscript notation are tolerated
supernew:!0,// if `new function () { ... };` and `new Object;`
// should be tolerated
trailing:!0,// if trailing whitespace rules apply
validthis:!0,// if 'this' inside a non-constructor function is valid.
// This is a function scoped option only.
withstmt:!0,// if with statements should be allowed
white:!0,// if strict whitespace rules apply
worker:!0,// if Web Worker script symbols should be allowed
wsh:!0,// if the Windows Scripting Host environment globals
// should be predefined
yui:!0},
// These are the JSHint options that can take any value
// (we use this object to detect invalid options)
Wa={maxlen:!1,indent:!1,maxerr:!1,predef:!1,quotmark:!1,//'single'|'double'|true
scope:!1,maxstatements:!1,// {int} max statements per function
maxdepth:!1,// {int} max nested block depth per function
maxparams:!1,// {int} max params per function
maxcomplexity:!1},
// These are JSHint boolean options which are shared with JSLint
// where the definition in JSHint is opposite JSLint
Xa={bitwise:!0,forin:!0,newcap:!0,nomen:!0,plusplus:!0,regexp:!0,undef:!0,white:!0,
// Inverted and renamed, use JSHint name here
eqeqeq:!0,onevar:!0},
// These are JSHint boolean options which are shared with JSLint
// where the name has been changed but the effect is unchanged
Ya={eqeq:"eqeqeq",vars:"onevar",windows:"wsh"},
// browser contains a set of global names which are commonly provided by a
// web browser environment.
Za={ArrayBuffer:!1,ArrayBufferView:!1,Audio:!1,Blob:!1,addEventListener:!1,applicationCache:!1,atob:!1,blur:!1,btoa:!1,clearInterval:!1,clearTimeout:!1,close:!1,closed:!1,DataView:!1,DOMParser:!1,defaultStatus:!1,document:!1,event:!1,FileReader:!1,Float32Array:!1,Float64Array:!1,FormData:!1,focus:!1,frames:!1,getComputedStyle:!1,HTMLElement:!1,HTMLAnchorElement:!1,HTMLBaseElement:!1,HTMLBlockquoteElement:!1,HTMLBodyElement:!1,HTMLBRElement:!1,HTMLButtonElement:!1,HTMLCanvasElement:!1,HTMLDirectoryElement:!1,HTMLDivElement:!1,HTMLDListElement:!1,HTMLFieldSetElement:!1,HTMLFontElement:!1,HTMLFormElement:!1,HTMLFrameElement:!1,HTMLFrameSetElement:!1,HTMLHeadElement:!1,HTMLHeadingElement:!1,HTMLHRElement:!1,HTMLHtmlElement:!1,HTMLIFrameElement:!1,HTMLImageElement:!1,HTMLInputElement:!1,HTMLIsIndexElement:!1,HTMLLabelElement:!1,HTMLLayerElement:!1,HTMLLegendElement:!1,HTMLLIElement:!1,HTMLLinkElement:!1,HTMLMapElement:!1,HTMLMenuElement:!1,HTMLMetaElement:!1,HTMLModElement:!1,HTMLObjectElement:!1,HTMLOListElement:!1,HTMLOptGroupElement:!1,HTMLOptionElement:!1,HTMLParagraphElement:!1,HTMLParamElement:!1,HTMLPreElement:!1,HTMLQuoteElement:!1,HTMLScriptElement:!1,HTMLSelectElement:!1,HTMLStyleElement:!1,HTMLTableCaptionElement:!1,HTMLTableCellElement:!1,HTMLTableColElement:!1,HTMLTableElement:!1,HTMLTableRowElement:!1,HTMLTableSectionElement:!1,HTMLTextAreaElement:!1,HTMLTitleElement:!1,HTMLUListElement:!1,HTMLVideoElement:!1,history:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Image:!1,length:!1,localStorage:!1,location:!1,MessageChannel:!1,MessageEvent:!1,MessagePort:!1,moveBy:!1,moveTo:!1,MutationObserver:!1,name:!1,Node:!1,NodeFilter:!1,navigator:!1,onbeforeunload:!0,onblur:!0,onerror:!0,onfocus:!0,onload:!0,onresize:!0,onunload:!0,open:!1,openDatabase:!1,opener:!1,Option:!1,parent:!1,print:!1,removeEventListener:!1,resizeBy:!1,resizeTo:!1,screen:!1,scroll:!1,scrollBy:!1,scrollTo:!1,sessionStorage:!1,setInterval:!1,setTimeout:!1,SharedWorker:!1,status:!1,top:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,WebSocket:!1,window:!1,Worker:!1,XMLHttpRequest:!1,XMLSerializer:!1,XPathEvaluator:!1,XPathException:!1,XPathExpression:!1,XPathNamespace:!1,XPathNSResolver:!1,XPathResult:!1},$a={require:!1,respond:!1,getRow:!1,emit:!1,send:!1,start:!1,sum:!1,log:!1,exports:!1,module:!1,provides:!1},// Globals that were declared using /*global ... */ syntax.
_a={alert:!1,confirm:!1,console:!1,Debug:!1,opera:!1,prompt:!1},ab={dojo:!1,dijit:!1,dojox:!1,define:!1,require:!1},// The current function
bb=["closure","exception","global","label","outer","unused","var"],cb={$:!1,jQuery:!1},db={$:!1,$$:!1,Asset:!1,Browser:!1,Chain:!1,Class:!1,Color:!1,Cookie:!1,Core:!1,Document:!1,DomReady:!1,DOMEvent:!1,DOMReady:!1,Drag:!1,Element:!1,Elements:!1,Event:!1,Events:!1,Fx:!1,Group:!1,Hash:!1,HtmlTable:!1,Iframe:!1,IframeShim:!1,InputValidator:!1,instanceOf:!1,Keyboard:!1,Locale:!1,Mask:!1,MooTools:!1,Native:!1,Options:!1,OverText:!1,Request:!1,Scroller:!1,Slick:!1,Slider:!1,Sortables:!1,Spinner:!1,Swiff:!1,Tips:!1,Type:!1,typeOf:!1,URI:!1,Window:!1},eb={__filename:!1,__dirname:!1,Buffer:!1,console:!1,exports:!0,// In Node it is ok to exports = module.exports = foo();
GLOBAL:!1,global:!1,module:!1,process:!1,require:!1,setTimeout:!1,clearTimeout:!1,setInterval:!1,clearInterval:!1},fb={$:!1,$$:!1,$A:!1,$F:!1,$H:!1,$R:!1,$break:!1,$continue:!1,$w:!1,Abstract:!1,Ajax:!1,Class:!1,Enumerable:!1,Element:!1,Event:!1,Field:!1,Form:!1,Hash:!1,Insertion:!1,ObjectRange:!1,PeriodicalExecuter:!1,Position:!1,Prototype:!1,Selector:!1,Template:!1,Toggle:!1,Try:!1,Autocompleter:!1,Builder:!1,Control:!1,Draggable:!1,Draggables:!1,Droppables:!1,Effect:!1,Sortable:!1,SortableObserver:!1,Sound:!1,Scriptaculous:!1},gb={defineClass:!1,deserialize:!1,gc:!1,help:!1,importPackage:!1,java:!1,load:!1,loadClass:!1,print:!1,quit:!1,readFile:!1,readUrl:!1,runCommand:!1,seal:!1,serialize:!1,spawn:!1,sync:!1,toint32:!1,version:!1},
// standard contains the global names that are provided by the
// ECMAScript standard.
hb={Array:!1,Boolean:!1,Date:!1,decodeURI:!1,decodeURIComponent:!1,encodeURI:!1,encodeURIComponent:!1,Error:!1,eval:!1,EvalError:!1,Function:!1,hasOwnProperty:!1,isFinite:!1,isNaN:!1,JSON:!1,Map:!1,Math:!1,NaN:!1,Number:!1,Object:!1,parseInt:!1,parseFloat:!1,RangeError:!1,ReferenceError:!1,RegExp:!1,Set:!1,String:!1,SyntaxError:!1,TypeError:!1,URIError:!1,WeakMap:!1},
// widely adopted global names that are not part of ECMAScript standard
ib={escape:!1,unescape:!1},jb={},kb={importScripts:!0,postMessage:!0,self:!0},lb={ActiveXObject:!0,Enumerator:!0,GetObject:!0,ScriptEngine:!0,ScriptEngineBuildVersion:!0,ScriptEngineMajorVersion:!0,ScriptEngineMinorVersion:!0,VBArray:!0,WSH:!0,WScript:!0,XDomainRequest:!0},mb={YUI:!1,Y:!1,YUI_config:!1};!function(){/*jshint maxlen:300 */
// unsafe comment or string
La=/@cc|<\/?|script|\]\s*\]|<\s*!|&lt/i,
// unsafe characters that are silently deleted by one or more browsers
Ma=/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,
// token
Na=/^\s*([(){}\[.,:;'"~\?\]#@]|==?=?|\/=(?!(\S*\/[gim]?))|\/(\*(jshint|jslint|members?|global)?|\/)?|\*[\/=]?|\+(?:=|\++)?|-(?:=|-+)?|%=?|&[&=]?|\|[|=]?|>>?>?=?|<([\/=!]|\!(\[|--)?|<=?)?|\^=?|\!=?=?|[a-zA-Z_$][a-zA-Z0-9_$]*|[0-9]+([xX][0-9a-fA-F]+|\.[0-9]*)?([eE][+\-]?[0-9]+)?)/,
// characters in strings that need escapement
Oa=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,Pa=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
// star slash
Qa=/\*\//,
// identifier
Ra=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/,
// javascript url
Sa=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i,
// catches /* falls through */ comments
Ta=/^\s*\/\*\s*falls\sthrough\s*\*\/\s*$/}(),
// Provide critical ES5 functions to ES3.
"function"!=typeof Array.isArray&&(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.apply(a)}),Array.prototype.forEach||(Array.prototype.forEach=function(a,b){for(var c=this.length,d=0;d<c;d++)a.call(b||this,this[d],d,this)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this||void 0===this)throw new TypeError;var b=new Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?// shortcut for verifying if it's NaN
d=0:0!==d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);e<c;e++)if(e in b&&b[e]===a)return e;return-1}),"function"!=typeof Object.create&&(Object.create=function(b){return a.prototype=b,new a}),"function"!=typeof Object.keys&&(Object.keys=function(a){var c,d=[];for(c in a)b(a,c)&&d.push(c);return d});
// lexical analysis and token construction
var nb=function(){
// Private lex methods
function a(){var a,b,c;// trailing whitespace check
// trailing whitespace check
// If smarttabs option is used check for spaces followed by tabs only.
// Otherwise check for any occurence of mixed tabs and spaces.
// Tabs and one space followed by block comment is allowed.
// negative look-behind for "//"
// Check for trailing whitespaces
return!(h>=ra.length)&&(d=1,i=ra[h],h+=1,xa.smarttabs?(b=i.match(/(\/\/)? \t/),a=b&&!b[1]?0:-1):a=i.search(/ \t|\t [^\*]/),a>=0&&o("Mixed spaces and tabs.",h,a+1),i=i.replace(/\t/g,Fa),a=i.search(Ma),a>=0&&o("Unsafe character.",h,a),xa.maxlen&&xa.maxlen<i.length&&o("Line too long.",h,i.length),c=xa.trailing&&i.match(/^(.*?)\s+$/),c&&!/^\s+$/.test(i)&&o("Trailing whitespace.",h,c[1].length+1),!0)}
// Produce a token object.  The token inherits from a syntax symbol.
function c(a,c){function e(a){if(!xa.proto&&"__proto__"===a)return void o("The '{a}' property is deprecated.",h,g,a);if(!xa.iterator&&"__iterator__"===a)return void o("'{a}' is only available in JavaScript 1.7.",h,g,a);
// Check for dangling underscores unless we're in Node
// environment and this identifier represents built-in
// Node globals with underscores.
var b=/^(_+.*|.*_+)$/.test(a);if(xa.nomen&&b&&"_"!==a){if(xa.node&&"."!==Ga.id&&/^(__dirname|__filename)$/.test(a))return;return void o("Unexpected {a} in '{b}'.",h,g,"dangling '_'",a)}
// Check for non-camelcase names. Names like MY_VAR and
// _myVar are okay though.
xa.camelcase&&a.replace(/^_+/,"").indexOf("_")>-1&&!a.match(/^[A-Z0-9_]*$/)&&o("Identifier '{a}' is not in camel case.",h,g,c)}var f,i;return i="(color)"===a||"(range)"===a?{type:a}:"(punctuator)"===a||"(identifier)"===a&&b(jb,c)?jb[c]||jb["(error)"]:jb[a],i=Object.create(i),"(string)"!==a&&"(range)"!==a||!xa.scripturl&&Sa.test(c)&&o("Script URL.",h,g),"(identifier)"===a&&(i.identifier=!0,e(c)),i.value=c,i.line=h,i.character=d,i.from=g,f=i.id,"(endline)"!==f&&(za=f&&("(,=:[!&|?{};".indexOf(f.charAt(f.length-1))>=0||"return"===f||"case"===f)),i}var d,g,h,i;
// Public lex methods
return{init:function(b){ra="string"==typeof b?b.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n"):b,
// If the first line is a shebang (#!), make it a blank and move on.
// Shebangs are used by Node scripts.
ra[0]&&"#!"===ra[0].substr(0,2)&&(ra[0]=""),h=0,a(),g=1},range:function(a,b){var e,f="";for(g=d,i.charAt(0)!==a&&q("Expected '{a}' and instead saw '{b}'.",h,d,a,i.charAt(0));;){switch(i=i.slice(1),d+=1,e=i.charAt(0)){case"":q("Missing '{a}'.",h,d,e);break;case b:return i=i.slice(1),d+=1,c("(range)",f);case"\\":o("Unexpected '{a}'.",h,d,e)}f+=e}},
// token -- this is called by advance to get the next token
token:function(){function b(a){var b,c=a.exec(i);if(c)return u=c[0].length,b=c[1],m=b.charAt(0),i=i.substr(u),g=d+u-b.length,d+=u,b}function j(b){function e(a){var b=parseInt(i.substr(j+1,a),16);j+=a,b>=32&&b<=126&&34!==b&&92!==b&&39!==b&&o("Unnecessary escapement.",h,d),d+=a,f=String.fromCharCode(b)}var f,j,k="",l=!1;qa&&'"'!==b&&o("Strings must use doublequote.",h,d),xa.quotmark&&("single"===xa.quotmark&&"'"!==b?o("Strings must use singlequote.",h,d):"double"===xa.quotmark&&'"'!==b?o("Strings must use doublequote.",h,d):xa.quotmark===!0&&(Ba=Ba||b,Ba!==b&&o("Mixed double and single quotes.",h,d))),j=0;a:for(;;){while(j>=i.length){j=0;var m=h,n=g;if(!a()){q("Unclosed string.",m,n);break a}l?l=!1:o("Unclosed string.",m,n)}if(f=i.charAt(j),f===b)return d+=1,i=i.substr(j+1),c("(string)",k,b);if(f<" "){if("\n"===f||"\r"===f)break;o("Control character in string: {a}.",h,d+j,i.slice(0,j))}else if("\\"===f)switch(j+=1,d+=1,f=i.charAt(j),A=i.charAt(j+1),f){case"\\":case'"':case"/":break;case"'":qa&&o("Avoid \\'.",h,d);break;case"b":f="\b";break;case"f":f="\f";break;case"n":f="\n";break;case"r":f="\r";break;case"t":f="\t";break;case"0":f="\0",
// Octal literals fail in strict mode
// check if the number is between 00 and 07
// where 'n' is the token next to 'c'
A>=0&&A<=7&&Ea["use strict"]&&o("Octal literals are not allowed in strict mode.",h,d);break;case"u":e(4);break;case"v":qa&&o("Avoid \\v.",h,d),f="\x0B";break;case"x":qa&&o("Avoid \\x-.",h,d),e(2);break;case"":if(
// last character is escape character
// always allow new line if escaped, but show
// warning if option is not set
l=!0,xa.multistr){qa&&o("Avoid EOL escapement.",h,d),f="",d-=1;break}o("Bad escapement of EOL. Use option multistr if needed.",h,d);break;case"!":if("<"===i.charAt(j-2))break;/*falls through*/
default:o("Bad escapement.",h,d)}k+=f,d+=1,j+=1}}for(var k,m,n,p,r,s,t,u,v,w,x,y,z,A;;){if(!i)return c(a()?"(endline)":"(end)","");if(x=b(Na)){
//      identifier
if(e(m)||"_"===m||"$"===m)return c("(identifier)",x);
//      number
if(f(m))return isFinite(Number(x))||o("Bad number '{a}'.",h,d,x),e(i.substr(0,1))&&o("Missing space after '{a}'.",h,d,x),"0"===m&&(p=x.substr(1,1),f(p)?"."!==Ga.id&&o("Don't use extra leading zeros '{a}'.",h,d,x):!qa||"x"!==p&&"X"!==p||o("Avoid 0x-. '{a}'.",h,d,x)),"."===x.substr(x.length-1)&&o("A trailing decimal point can be confused with a dot '{a}'.",h,d,x),c("(number)",x);switch(x){
//      string
case'"':case"'":return j(x);
//      // comment
case"//":i="",Ga.comment=!0;break;
//      /* comment
case"/*":for(;;){if(t=i.search(Qa),t>=0)break;a()||q("Unclosed comment.",h,d)}i=i.substr(t+2),Ga.comment=!0;break;
//      /*members /*jshint /*global
case"/*members":case"/*member":case"/*jshint":case"/*jslint":case"/*global":case"*/":return{value:x,type:"special",line:h,character:d,from:g};case"":break;
//      /
case"/":if("="===i.charAt(0)&&q("A regular expression literal can be confused with '/='.",h,g),za){for(r=0,n=0,u=0;;){switch(k=!0,m=i.charAt(u),u+=1,m){case"":return q("Unclosed regular expression.",h,g),l("Stopping.",h,g);case"/":r>0&&o("{a} unterminated regular expression group(s).",h,g+u,r),m=i.substr(0,u-1),w={g:!0,i:!0,m:!0};while(w[i.charAt(u)]===!0)w[i.charAt(u)]=!1,u+=1;return d+=u,i=i.substr(u),w=i.charAt(0),"/"!==w&&"*"!==w||q("Confusing regular expression.",h,g),c("(regexp)",m);case"\\":m=i.charAt(u),m<" "?o("Unexpected control character in regular expression.",h,g+u):"<"===m&&o("Unexpected escaped character '{a}' in regular expression.",h,g+u,m),u+=1;break;case"(":if(r+=1,k=!1,"?"===i.charAt(u))switch(u+=1,i.charAt(u)){case":":case"=":case"!":u+=1;break;default:o("Expected '{a}' and instead saw '{b}'.",h,g+u,":",i.charAt(u))}else n+=1;break;case"|":k=!1;break;case")":0===r?o("Unescaped '{a}'.",h,g+u,")"):r-=1;break;case" ":w=1;while(" "===i.charAt(u))u+=1,w+=1;w>1&&o("Spaces are hard to count. Use {{a}}.",h,g+u,w);break;case"[":m=i.charAt(u),"^"===m&&(u+=1,"]"===i.charAt(u)&&q("Unescaped '{a}'.",h,g+u,"^")),"]"===m&&o("Empty class.",h,g+u-1),y=!1,z=!1;a:do switch(m=i.charAt(u),u+=1,m){case"[":case"^":o("Unescaped '{a}'.",h,g+u,m),z?z=!1:y=!0;break;case"-":y&&!z?(y=!1,z=!0):z?z=!1:"]"===i.charAt(u)?z=!0:(xa.regexdash!==(2===u||3===u&&"^"===i.charAt(1))&&o("Unescaped '{a}'.",h,g+u-1,"-"),y=!0);break;case"]":z&&!xa.regexdash&&o("Unescaped '{a}'.",h,g+u-1,"-");break a;case"\\":m=i.charAt(u),m<" "?o("Unexpected control character in regular expression.",h,g+u):"<"===m&&o("Unexpected escaped character '{a}' in regular expression.",h,g+u,m),u+=1,
// \w, \s and \d are never part of a character range
/[wsd]/i.test(m)?(z&&(o("Unescaped '{a}'.",h,g+u,"-"),z=!1),y=!1):z?z=!1:y=!0;break;case"/":o("Unescaped '{a}'.",h,g+u-1,"/"),z?z=!1:y=!0;break;case"<":z?z=!1:y=!0;break;default:z?z=!1:y=!0}while(m);break;case".":xa.regexp&&o("Insecure '{a}'.",h,g+u,m);break;case"]":case"?":case"{":case"}":case"+":case"*":o("Unescaped '{a}'.",h,g+u,m)}if(k)switch(i.charAt(u)){case"?":case"+":case"*":u+=1,"?"===i.charAt(u)&&(u+=1);break;case"{":if(u+=1,m=i.charAt(u),m<"0"||m>"9"){o("Expected a number and instead saw '{a}'.",h,g+u,m);break}for(u+=1,v=+m;;){if(m=i.charAt(u),m<"0"||m>"9")break;u+=1,v=+m+10*v}if(s=v,","===m&&(u+=1,s=1/0,m=i.charAt(u),m>="0"&&m<="9"))for(u+=1,s=+m;;){if(m=i.charAt(u),m<"0"||m>"9")break;u+=1,s=+m+10*s}"}"!==i.charAt(u)?o("Expected '{a}' and instead saw '{b}'.",h,g+u,"}",m):u+=1,"?"===i.charAt(u)&&(u+=1),v>s&&o("'{a}' should not be greater than '{b}'.",h,g+u,v,s)}}return m=i.substr(0,u-1),d+=u,i=i.substr(u),c("(regexp)",m)}return c("(punctuator)",x);
//      punctuator
case"#":return c("(punctuator)",x);default:return c("(punctuator)",x)}}else{x="",m="";while(i&&i<"!")i=i.substr(1);i&&(q("Unexpected '{a}'.",h,d,i.substr(0,1)),i="")}}}}}();
// Build the syntax table by declaring the syntactic elements of the language.
L("(number)",function(){return this}),L("(string)",function(){return this}),jb["(identifier)"]={type:"(identifier)",lbp:0,identifier:!0,nud:function(){var a,b=this.value,c=Ca[b];
// The name is in scope and defined in the current function.
if("function"==typeof c?
// Protection against accidental inheritance.
c=void 0:"boolean"==typeof c&&(a=ka,ka=la[0],s(b,"var"),c=ka,ka=a),ka===c)
// Change 'unused' to 'var', and reject labels.
switch(ka[b]){case"unused":ka[b]="var";break;case"unction":ka[b]="function",this["function"]=!0;break;case"function":this["function"]=!0;break;case"label":n("'{a}' is a statement label.",Ga,b)}else if(ka["(global)"])
// The name is not defined in the function.  If we are in the global
// scope, then we have an undefined variable.
//
// Operators typeof and delete do not raise runtime errors even if
// the base object of a reference is null so no need to display warning
// if we're inside of typeof or delete.
xa.undef&&"boolean"!=typeof ya[b]&&("typeof"!==ia&&"delete"!==ia||va&&("."===va.value||"["===va.value))&&m(ka,"'{a}' is not defined.",Ga,b),ba(Ga);else
// If the name is already defined in the current
// function, but not as outer, then there is a scope error.
switch(ka[b]){case"closure":case"function":case"var":case"unused":n("'{a}' used out of scope.",Ga,b);break;case"label":n("'{a}' is a statement label.",Ga,b);break;case"outer":case"global":break;default:
// If the name is defined in an outer function, make an outer entry,
// and if it was unused, make it var.
if(c===!0)ka[b]=!0;else if(null===c)n("'{a}' is not allowed.",Ga,b),ba(Ga);else if("object"!=typeof c)
// Operators typeof and delete do not raise runtime errors even
// if the base object of a reference is null so no need to
// display warning if we're inside of typeof or delete.
xa.undef&&("typeof"!==ia&&"delete"!==ia||va&&("."===va.value||"["===va.value))&&m(ka,"'{a}' is not defined.",Ga,b),ka[b]=!0,ba(Ga);else switch(c[b]){case"function":case"unction":this["function"]=!0,c[b]="closure",ka[b]=c["(global)"]?"global":"outer";break;case"var":case"unused":c[b]="closure",ka[b]=c["(global)"]?"global":"outer";break;case"closure":ka[b]=c["(global)"]?"global":"outer";break;case"label":n("'{a}' is a statement label.",Ga,b)}}return this},led:function(){p("Expected an operator and instead saw '{a}'.",va,va.value)}},L("(regexp)",function(){return this}),
// ECMAScript parser
G("(endline)"),G("(begin)"),G("(end)").reach=!0,G("</").reach=!0,G("<!"),G("<!--"),G("-->"),G("(error)").reach=!0,G("}").reach=!0,G(")"),G("]"),G('"').reach=!0,G("'").reach=!0,G(";"),G(":").reach=!0,G(","),G("#"),G("@"),M("else"),M("case").reach=!0,M("catch"),M("default").reach=!0,M("finally"),N("arguments",function(a){Ea["use strict"]&&ka["(global)"]&&n("Strict violation.",a)}),N("eval"),N("false"),N("Infinity"),N("null"),N("this",function(a){Ea["use strict"]&&!xa.validthis&&(ka["(statement)"]&&ka["(name)"].charAt(0)>"Z"||ka["(global)"])&&n("Possible strict violation.",a)}),N("true"),N("undefined"),R("=","assign",20),R("+=","assignadd",20),R("-=","assignsub",20),R("*=","assignmult",20),R("/=","assigndiv",20).nud=function(){p("A regular expression literal can be confused with '/='.")},R("%=","assignmod",20),T("&=","assignbitand",20),T("|=","assignbitor",20),T("^=","assignbitxor",20),T("<<=","assignshiftleft",20),T(">>=","assignshiftright",20),T(">>>=","assignshiftrightunsigned",20),O("?",function(a,b){return b.left=a,b.right=w(10),v(":"),b["else"]=w(10),b},30),O("||","or",40),O("&&","and",50),S("|","bitor",70),S("^","bitxor",80),S("&","bitand",90),P("==",function(a,b){var c=xa.eqnull&&("null"===a.value||"null"===b.value);return!c&&xa.eqeqeq?n("Expected '{a}' and instead saw '{b}'.",this,"===","=="):Q(a)?n("Use '{a}' to compare with '{b}'.",this,"===",a.value):Q(b)&&n("Use '{a}' to compare with '{b}'.",this,"===",b.value),this}),P("==="),P("!=",function(a,b){var c=xa.eqnull&&("null"===a.value||"null"===b.value);return!c&&xa.eqeqeq?n("Expected '{a}' and instead saw '{b}'.",this,"!==","!="):Q(a)?n("Use '{a}' to compare with '{b}'.",this,"!==",a.value):Q(b)&&n("Use '{a}' to compare with '{b}'.",this,"!==",b.value),this}),P("!=="),P("<"),P(">"),P("<="),P(">="),S("<<","shiftleft",120),S(">>","shiftright",120),S(">>>","shiftrightunsigned",120),O("in","in",120),O("instanceof","instanceof",120),O("+",function(a,b){var c=w(130);return a&&c&&"(string)"===a.id&&"(string)"===c.id?(a.value+=c.value,a.character=c.character,!xa.scripturl&&Sa.test(a.value)&&n("JavaScript URL.",a),a):(b.left=a,b.right=c,b)},130),K("+","num"),K("+++",function(){return n("Confusing pluses."),this.right=w(150),this.arity="unary",this}),O("+++",function(a){return n("Confusing pluses."),this.left=a,this.right=w(130),this},130),O("-","sub",130),K("-","neg"),K("---",function(){return n("Confusing minuses."),this.right=w(150),this.arity="unary",this}),O("---",function(a){return n("Confusing minuses."),this.left=a,this.right=w(130),this},130),O("*","mult",140),O("/","div",140),O("%","mod",140),U("++","postinc"),K("++","preinc"),jb["++"].exps=!0,U("--","postdec"),K("--","predec"),jb["--"].exps=!0,K("delete",function(){var a=w(0);return(!a||"."!==a.id&&"["!==a.id)&&n("Variables should not be deleted."),this.first=a,this}).exps=!0,K("~",function(){return xa.bitwise&&n("Unexpected '{a}'.",this,"~"),w(150),this}),K("!",function(){return this.right=w(150),this.arity="unary",Ua[this.right.id]===!0&&n("Confusing use of '{a}'.",this,"!"),this}),K("typeof","typeof"),K("new",function(){var a,c=w(155);if(c&&"function"!==c.id)if(c.identifier)switch(c["new"]=!0,c.value){case"Number":case"String":case"Boolean":case"Math":case"JSON":n("Do not use {a} as a constructor.",Aa,c.value);break;case"Function":xa.evil||n("The Function constructor is eval.");break;case"Date":case"RegExp":break;default:"function"!==c.id&&(a=c.value.substr(0,1),xa.newcap&&(a<"A"||a>"Z")&&!b(ma,c.value)&&n("A constructor name should start with an uppercase letter.",Ga))}else"."!==c.id&&"["!==c.id&&"("!==c.id&&n("Bad constructor.",Ga);else xa.supernew||n("Weird construction. Delete 'new'.",this);return x(Ga,va),"("===va.id||xa.supernew||n("Missing '()' invoking a constructor.",Ga,Ga.value),this.first=c,this}),jb["new"].exps=!0,K("void").exps=!0,O(".",function(a,b){x(Aa,Ga),y();var c=W();return"string"==typeof c&&aa(c),b.left=a,b.right=c,!a||"arguments"!==a.value||"callee"!==c&&"caller"!==c?xa.evil||!a||"document"!==a.value||"write"!==c&&"writeln"!==c||n("document.write can be a form of eval.",a):xa.noarg?n("Avoid arguments.{a}.",a,c):Ea["use strict"]&&p("Strict violation."),xa.evil||"eval"!==c&&"execScript"!==c||n("eval is evil."),b},160,!0),O("(",function(a,b){"}"!==Aa.id&&")"!==Aa.id&&y(Aa,Ga),z(),xa.immed&&!a.immed&&"function"===a.id&&n("Wrap an immediate function invocation in parentheses to assist the reader in understanding that the expression is the result of a function, and not the function itself.");var c=0,d=[];if(a&&"(identifier)"===a.type&&a.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)&&"Number String Boolean Date Object".indexOf(a.value)===-1&&("Math"===a.value?n("Math is not a function.",a):xa.newcap&&n("Missing 'new' prefix when invoking a constructor.",a)),")"!==va.id)for(;;){if(d[d.length]=w(10),c+=1,","!==va.id)break;E()}return v(")"),z(Aa,Ga),"object"==typeof a&&("parseInt"===a.value&&1===c&&n("Missing radix parameter.",Ga),xa.evil||("eval"===a.value||"Function"===a.value||"execScript"===a.value?(n("eval is evil.",a),d[0]&&"(string)"===[0].id&&r(a,d[0].value)):!d[0]||"(string)"!==d[0].id||"setTimeout"!==a.value&&"setInterval"!==a.value?!d[0]||"(string)"!==d[0].id||"."!==a.value||"window"!==a.left.value||"setTimeout"!==a.right&&"setInterval"!==a.right||(n("Implied eval is evil. Pass a function instead of a string.",a),r(a,d[0].value)):(n("Implied eval is evil. Pass a function instead of a string.",a),r(a,d[0].value))),a.identifier||"."===a.id||"["===a.id||"("===a.id||"&&"===a.id||"||"===a.id||"?"===a.id||n("Bad invocation.",a)),b.left=a,b},155,!0).exps=!0,K("(",function(){z(),"function"===va.id&&(va.immed=!0);var a=w(0);return v(")",this),z(Aa,Ga),xa.immed&&"function"===a.id&&"("!==va.id&&("."!==va.id||"call"!==u().value&&"apply"!==u().value)&&n("Do not wrap function literals in parens unless they are to be immediately invoked.",this),a}),O("[",function(a,b){y(Aa,Ga),z();var c,d=w(0);return d&&"(string)"===d.type&&(xa.evil||"eval"!==d.value&&"execScript"!==d.value||n("eval is evil.",b),aa(d.value),!xa.sub&&Ra.test(d.value)&&(c=jb[d.value],c&&c.reserved||n("['{a}'] is better written in dot notation.",Aa,d.value))),v("]",b),z(Aa,Ga),b.left=a,b.right=d,b},160,!0),K("[",function(){var a=Ga.line!==va.line;this.first=[],a&&(pa+=xa.indent,va.from===pa+xa.indent&&(pa+=xa.indent));while("(end)"!==va.id){while(","===va.id)xa.es5||n("Extra comma."),v(",");if("]"===va.id)break;if(a&&Ga.line!==va.line&&C(),this.first.push(w(10)),","!==va.id)break;if(E(),"]"===va.id&&!xa.es5){n("Extra comma.",Ga);break}}return a&&(pa-=xa.indent,C()),v("]",this),this},160),function(a){a.nud=function(){// All properties, including accessors
function a(a,c){j[a]&&b(j,a)?n("Duplicate member '{a}'.",va,g):j[a]={},j[a].basic=!0,j[a].basicToken=c}function c(a,c){j[a]&&b(j,a)?(j[a].basic||j[a].setter)&&n("Duplicate member '{a}'.",va,g):j[a]={},j[a].setter=!0,j[a].setterToken=c}function d(a){j[a]&&b(j,a)?(j[a].basic||j[a].getter)&&n("Duplicate member '{a}'.",va,g):j[a]={},j[a].getter=!0,j[a].getterToken=Ga}var e,f,g,h,i,j={};for(e=Ga.line!==va.line,e&&(pa+=xa.indent,va.from===pa+xa.indent&&(pa+=xa.indent));;){if("}"===va.id)break;if(e&&C(),"get"===va.value&&":"!==u().id)v("get"),xa.es5||p("get/set are ES5 features."),g=ca(),g||p("Missing property name."),d(g),i=va,x(Ga,va),f=ea(),h=f["(params)"],h&&n("Unexpected parameter '{a}' in get {b} function.",i,h[0],g),x(Ga,va);else if("set"===va.value&&":"!==u().id)v("set"),xa.es5||p("get/set are ES5 features."),g=ca(),g||p("Missing property name."),c(g,va),i=va,x(Ga,va),f=ea(),h=f["(params)"],h&&1===h.length||n("Expected a single parameter in set {a} function.",i,g);else{if(g=ca(),a(g,va),"string"!=typeof g)break;v(":"),A(Ga,va),w(10)}if(aa(g),","!==va.id)break;E(),","===va.id?n("Extra comma.",Ga):"}"!==va.id||xa.es5||n("Extra comma.",Ga)}
// Check for lonely setters if in the ES5 mode.
if(e&&(pa-=xa.indent,C()),v("}",this),xa.es5)for(var k in j)b(j,k)&&j[k].setter&&!j[k].getter&&n("Setter is defined without getter.",j[k].setterToken);return this},a.fud=function(){p("Expected to see a statement and instead saw a block.",Ga)}}(G("{")),
// This Function is called when esnext option is set to true
// it adds the `const` statement to JSHINT
Ja=function(){var a=H("const",function(a){var b,c,d;for(this.first=[];;){if(A(Ga,va),b=W(),"const"===ka[b]&&n("const '"+b+"' has already been declared"),ka["(global)"]&&ya[b]===!1&&n("Redefinition of '{a}'.",Ga,b),s(b,"const"),a)break;if(c=Ga,this.first.push(Ga),"="!==va.id&&n("const '{a}' is initialized to 'undefined'.",Ga,b),"="===va.id&&(A(Ga,va),v("="),A(Ga,va),"undefined"===va.id&&n("It is not necessary to initialize '{a}' to 'undefined'.",Ga,b),"="===u(0).id&&va.identifier&&p("Constant {a} was not declared correctly.",va,va.value),d=w(0),c.first=d),","!==va.id)break;E()}return this});a.exps=!0};var ob=H("var",function(a){
// JavaScript does not have block scope. It only has function scope. So,
// declaring a variable in a block can have unexpected consequences.
var b,c,d;for(ka["(onevar)"]&&xa.onevar?n("Too many var statements."):ka["(global)"]||(ka["(onevar)"]=!0),this.first=[];;){if(A(Ga,va),b=W(),xa.esnext&&"const"===ka[b]&&n("const '"+b+"' has already been declared"),ka["(global)"]&&ya[b]===!1&&n("Redefinition of '{a}'.",Ga,b),s(b,"unused",Ga),a)break;if(c=Ga,this.first.push(Ga),"="===va.id&&(A(Ga,va),v("="),A(Ga,va),"undefined"===va.id&&n("It is not necessary to initialize '{a}' to 'undefined'.",Ga,b),"="===u(0).id&&va.identifier&&p("Variable {a} was not declared correctly.",va,va.value),d=w(0),c.first=d),","!==va.id)break;E()}return this});ob.exps=!0,I("function",function(){oa&&n("Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.",Ga);var a=W();return xa.esnext&&"const"===ka[a]&&n("const '"+a+"' has already been declared"),x(Ga,va),s(a,"unction",Ga),ea(a,{statement:!0}),"("===va.id&&va.line===Ga.line&&p("Function declarations are not invocable. Wrap the whole function invocation in parens."),this}),K("function",function(){var a=V();return a?x(Ga,va):A(Ga,va),ea(a),!xa.loopfunc&&ka["(loopage)"]&&n("Don't make functions within a loop."),this}),I("if",function(){var a=va;return ga(),v("("),A(this,a),z(),w(20),"="===va.id&&(xa.boss||n("Expected a conditional expression and instead saw an assignment."),v("="),w(20)),v(")",a),z(Aa,Ga),_(!0,!0),"else"===va.id&&(A(Ga,va),v("else"),"if"===va.id||"switch"===va.id?Y(!0):_(!0,!0)),this}),I("try",function(){function a(){var a,b=Ca;v("catch"),A(Ga,va),v("("),Ca=Object.create(b),a=va.value,"(identifier)"!==va.type&&(a=null,n("Expected an identifier and instead saw '{a}'.",va,a)),v(),v(")"),ka={"(name)":"(catch)","(line)":va.line,"(character)":va.character,"(context)":ka,"(breakage)":ka["(breakage)"],"(loopage)":ka["(loopage)"],"(scope)":Ca,"(statement)":!1,"(metrics)":fa(va),"(catch)":!0,"(tokens)":{}},a&&s(a,"exception"),Ga.funct=ka,la.push(ka),_(!1),Ca=b,ka["(last)"]=Ga.line,ka["(lastcharacter)"]=Ga.character,ka=ka["(context)"]}var b;return _(!1),"catch"===va.id&&(ga(),a(),b=!0),"finally"===va.id?(v("finally"),void _(!1)):(b||p("Expected '{a}' and instead saw '{b}'.",va,"catch",va.value),this)}),I("while",function(){var a=va;return ka["(breakage)"]+=1,ka["(loopage)"]+=1,ga(),v("("),A(this,a),z(),w(20),"="===va.id&&(xa.boss||n("Expected a conditional expression and instead saw an assignment."),v("="),w(20)),v(")",a),z(Aa,Ga),_(!0,!0),ka["(breakage)"]-=1,ka["(loopage)"]-=1,this}).labelled=!0,I("with",function(){var a=va;return Ea["use strict"]?p("'with' is not allowed in strict mode.",Ga):xa.withstmt||n("Don't use 'with'.",Ga),v("("),A(this,a),z(),w(0),v(")",a),z(Aa,Ga),_(!0,!0),this}),I("switch",function(){var a=va,b=!1;for(ka["(breakage)"]+=1,v("("),A(this,a),z(),this.condition=w(20),v(")",a),z(Aa,Ga),A(Ga,va),a=va,v("{"),A(Ga,va),pa+=xa.indent,this.cases=[];;)switch(va.id){case"case":switch(ka["(verb)"]){case"break":case"case":case"continue":case"return":case"switch":case"throw":break;default:
// You can tell JSHint that you don't use break intentionally by
// adding a comment /* falls through */ on a line just before
// the next `case`.
Ta.test(ra[va.line-2])||n("Expected a 'break' statement before 'case'.",Ga)}C(-xa.indent),v("case"),this.cases.push(w(20)),ga(),b=!0,v(":"),ka["(verb)"]="case";break;case"default":switch(ka["(verb)"]){case"break":case"continue":case"return":case"throw":break;default:Ta.test(ra[va.line-2])||n("Expected a 'break' statement before 'default'.",Ga)}C(-xa.indent),v("default"),b=!0,v(":");break;case"}":return pa-=xa.indent,C(),v("}",a),1!==this.cases.length&&"true"!==this.condition.id&&"false"!==this.condition.id||xa.onecase||n("This 'switch' should be an 'if'.",this),ka["(breakage)"]-=1,void(ka["(verb)"]=void 0);case"(end)":return void p("Missing '{a}'.",va,"}");default:if(b)switch(Ga.id){case",":return void p("Each value should have its own case label.");case":":b=!1,Z();break;default:return void p("Missing ':' on a case clause.",Ga)}else{if(":"!==Ga.id)return void p("Expected '{a}' and instead saw '{b}'.",va,"case",va.value);v(":"),p("Unexpected '{a}'.",Ga,":"),Z()}}}).labelled=!0,H("debugger",function(){return xa.debug||n("All 'debugger' statements should be removed."),this}).exps=!0,function(){var a=H("do",function(){ka["(breakage)"]+=1,ka["(loopage)"]+=1,ga(),this.first=_(!0),v("while");var a=va;return A(Ga,a),v("("),z(),w(20),"="===va.id&&(xa.boss||n("Expected a conditional expression and instead saw an assignment."),v("="),w(20)),v(")",a),z(Aa,Ga),ka["(breakage)"]-=1,ka["(loopage)"]-=1,this});a.labelled=!0,a.exps=!0}(),I("for",function(){var a,b=va;if(ka["(breakage)"]+=1,ka["(loopage)"]+=1,ga(),v("("),A(this,b),z(),"in"===u("var"===va.id?1:0).id){if("var"===va.id)v("var"),ob.fud.call(ob,!0);else{switch(ka[va.value]){case"unused":ka[va.value]="var";break;case"var":break;default:n("Bad for in variable '{a}'.",va,va.value)}v()}return v("in"),w(20),v(")",b),a=_(!0,!0),xa.forin&&a&&(a.length>1||"object"!=typeof a[0]||"if"!==a[0].value)&&n("The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.",this),ka["(breakage)"]-=1,ka["(loopage)"]-=1,this}if(";"!==va.id)if("var"===va.id)v("var"),ob.fud.call(ob);else for(;;){if(w(0,"for"),","!==va.id)break;E()}if(D(Ga),v(";"),";"!==va.id&&(w(20),"="===va.id&&(xa.boss||n("Expected a conditional expression and instead saw an assignment."),v("="),w(20))),D(Ga),v(";"),";"===va.id&&p("Expected '{a}' and instead saw '{b}'.",va,")",";"),")"!==va.id)for(;;){if(w(0,"for"),","!==va.id)break;E()}return v(")",b),z(Aa,Ga),_(!0,!0),ka["(breakage)"]-=1,ka["(loopage)"]-=1,this}).labelled=!0,H("break",function(){var a=va.value;return 0===ka["(breakage)"]&&n("Unexpected '{a}'.",va,this.value),xa.asi||D(this),";"!==va.id&&Ga.line===va.line&&("label"!==ka[a]?n("'{a}' is not a statement label.",va,a):Ca[a]!==ka&&n("'{a}' is out of scope.",va,a),this.first=va,v()),X("break"),this}).exps=!0,H("continue",function(){var a=va.value;return 0===ka["(breakage)"]&&n("Unexpected '{a}'.",va,this.value),xa.asi||D(this),";"!==va.id?Ga.line===va.line&&("label"!==ka[a]?n("'{a}' is not a statement label.",va,a):Ca[a]!==ka&&n("'{a}' is out of scope.",va,a),this.first=va,v()):ka["(loopage)"]||n("Unexpected '{a}'.",va,this.value),X("continue"),this}).exps=!0,H("return",function(){return this.line===va.line?("(regexp)"===va.id&&n("Wrap the /regexp/ literal in parens to disambiguate the slash operator."),";"===va.id||va.reach||(A(Ga,va),"="!==u().value||xa.boss||o("Did you mean to return a conditional instead of an assignment?",Ga.line,Ga.character+1),this.first=w(0))):xa.asi||D(this),X("return"),this}).exps=!0,H("throw",function(){return D(this),A(Ga,va),this.first=w(20),X("throw"),this}).exps=!0,
//  Superfluous reserved words
M("class"),M("const"),M("enum"),M("export"),M("extends"),M("import"),M("super"),M("let"),M("yield"),M("implements"),M("interface"),M("package"),M("private"),M("protected"),M("public"),M("static");
// The actual JSHINT function itself.
var pb=function(a,e,f){var g,h,j,l,m,p={};if(e&&e.scope?JSHINT.scope=e.scope:(JSHINT.errors=[],JSHINT.undefs=[],JSHINT.internals=[],JSHINT.blacklist={},JSHINT.scope="(main)"),ya=Object.create(hb),ja=Object.create(null),i(ya,f||{}),e)for(g=e.predef,g&&(Array.isArray(g)||"object"!=typeof g||(g=Object.keys(g)),g.forEach(function(a){var b;"-"===a[0]?(b=a.slice(1),JSHINT.blacklist[b]=b):ya[a]=!0})),m=Object.keys(e),l=0;l<m.length;l++)p[m[l]]=e[m[l]],"newcap"===m[l]&&e[m[l]]===!1&&(p["(explicitNewcap)"]=!0),"indent"===m[l]&&(p.white=!0);for(xa=p,xa.indent=xa.indent||4,xa.maxerr=xa.maxerr||50,Fa="",h=0;h<xa.indent;h+=1)Fa+=" ";if(pa=1,ma=Object.create(ya),Ca=ma,ka={"(global)":!0,"(name)":"(global)","(scope)":Ca,"(breakage)":0,"(loopage)":0,"(tokens)":{},"(metrics)":fa(va)},la=[ka],Ia=[],Da=null,ta={},ua=null,na={},oa=!1,sa=[],qa=!1,Ka=0,ra=[],Ha=[],!d(a)&&!Array.isArray(a))return q("Input is neither a string nor an array of strings.",0),!1;if(d(a)&&/^\s*$/g.test(a))return q("Input is an empty string.",0),!1;if(0===a.length)return q("Input is an empty array.",0),!1;nb.init(a),za=!0,Ea={},Aa=Ga=va=jb["(begin)"];
// Check options
for(var r in e)b(e,r)&&c(r,Ga);k(),
// combine the passed globals after we've assumed all our options
i(ya,f||{}),
//reset values
E.first=!0,Ba=void 0;try{switch(v(),va.id){case"{":case"[":xa.laxbreak=!0,qa=!0,ha();break;default:$(),Ea["use strict"]&&!xa.globalstrict&&n('Use the function form of "use strict".',Aa),Z()}v(va&&"."!==va.value?"(end)":void 0);var s=function(a,b){do{if("string"==typeof b[a])
// JSHINT marks unused variables as 'unused' and
// unused function declaration as 'unction'. This
// code changes such instances back 'var' and
// 'closure' so that the code in JSHINT.data()
// doesn't think they're unused.
return"unused"===b[a]?b[a]="var":"unction"===b[a]&&(b[a]="closure"),!0;b=b["(context)"]}while(b);return!1},t=function(a,b){if(na[a]){for(var c=[],d=0;d<na[a].length;d+=1)na[a][d]!==b&&c.push(na[a][d]);0===c.length?delete na[a]:na[a]=c}},u=function(a,b){var c=b.line,d=b.character;xa.unused&&o("'{a}' is defined but never used.",c,d,a),Ha.push({name:a,line:c,character:d})},w=function(a,b){var c=a[b],d=a["(tokens)"][b];"("!==b.charAt(0)&&("unused"!==c&&"unction"!==c||a["(params)"]&&a["(params)"].indexOf(b)!==-1||u(b,d))};
// Check queued 'x is not defined' instances to see if they're still undefined.
for(h=0;h<JSHINT.undefs.length;h+=1)j=JSHINT.undefs[h].slice(0),s(j[2].value,j[0])?t(j[2].value,j[2].line):n.apply(n,j.slice(1));la.forEach(function(a){for(var c in a)b(a,c)&&w(a,c);if(a["(params)"]){var d,e=a["(params)"].slice(),f=e.pop();while(f){
// 'undefined' is a special case for (function (window, undefined) { ... })();
// patterns.
if(d=a[f],"undefined"===f)return;if("unused"!==d&&"unction"!==d)return;u(f,a["(tokens)"][f]),f=e.pop()}}});for(var x in ja)b(ja,x)&&!b(ma,x)&&u(x,ja[x])}catch(y){if(y){var z=va||{};JSHINT.errors.push({raw:y.raw,reason:y.message,line:y.line||z.line,character:y.character||z.from},null)}}
// Loop over the listed "internals", and check them as well.
if("(main)"===JSHINT.scope)for(e=e||{},h=0;h<JSHINT.internals.length;h+=1)j=JSHINT.internals[h],e.scope=j.elem,pb(j.value,e,f);return 0===JSHINT.errors.length};
// Data summary.
return pb.data=function(){var a,c,d,e,f,g,h={functions:[],options:xa},i=[],j=[];pb.errors.length&&(h.errors=pb.errors),qa&&(h.json=!0);for(f in na)b(na,f)&&i.push({name:f,line:na[f]});for(i.length>0&&(h.implieds=i),Ia.length>0&&(h.urls=Ia),g=Object.keys(Ca),g.length>0&&(h.globals=g),d=1;d<la.length;d+=1){for(c=la[d],a={},e=0;e<bb.length;e+=1)a[bb[e]]=[];for(e=0;e<bb.length;e+=1)0===a[bb[e]].length&&delete a[bb[e]];a.name=c["(name)"],a.param=c["(params)"],a.line=c["(line)"],a.character=c["(character)"],a.last=c["(last)"],a.lastcharacter=c["(lastcharacter)"],h.functions.push(a)}Ha.length>0&&(h.unused=Ha),j=[];for(f in ta)if("number"==typeof ta[f]){h.member=ta;break}return h},pb.jshint=pb,pb}();
// Make JSHINT a Node module, if possible.
"object"==typeof exports&&exports&&(exports.JSHINT=JSHINT),define("jshint",function(a){return function(){var b;return b||a.JSHINT}}(this)),function(){"use strict";function a(a,b){function c(a){return d.parentNode?(d.style.top=Math.max(0,a.clientY-d.offsetHeight-5)+"px",void(d.style.left=a.clientX+5+"px")):CodeMirror.off(document,"mousemove",c)}var d=document.createElement("div");return d.className="CodeMirror-lint-tooltip",d.appendChild(b.cloneNode(!0)),document.body.appendChild(d),CodeMirror.on(document,"mousemove",c),c(a),null!=d.style.opacity&&(d.style.opacity=1),d}function b(a){a.parentNode&&a.parentNode.removeChild(a)}function c(a){a.parentNode&&(null==a.style.opacity&&b(a),a.style.opacity=0,setTimeout(function(){b(a)},600))}function d(b,d,e){function f(){CodeMirror.off(e,"mouseout",f),g&&(c(g),g=null)}var g=a(b,d),h=setInterval(function(){if(g)for(var a=e;;a=a.parentNode){if(a==document.body)return;if(!a){f();break}}if(!g)return clearInterval(h)},400);CodeMirror.on(e,"mouseout",f)}function e(a,b,c){this.marked=[],this.options=b,this.timeout=null,this.hasGutter=c,this.onMouseOver=function(b){p(a,b)}}function f(a,b){if(b instanceof Function)return{getAnnotations:b};if(b&&b!==!0||(b={}),b.getAnnotations||(b.getAnnotations=a.getHelper(CodeMirror.Pos(0,0),"lint")),!b.getAnnotations)throw new Error("Required option 'getAnnotations' missing (lint addon)");return b}function g(a){var b=a.state.lint;b.hasGutter&&a.clearGutter(r);for(var c=0;c<b.marked.length;++c)b.marked[c].clear();b.marked.length=0}function h(a,b,c,e){var f=document.createElement("div"),g=f;return f.className="CodeMirror-lint-marker-"+b,c&&(g=f.appendChild(document.createElement("div")),g.className="CodeMirror-lint-marker-multiple"),0!=e&&CodeMirror.on(g,"mouseover",function(b){d(b,a,g)}),f}function i(a,b){return"error"==a?a:b}function j(a){for(var b=[],c=0;c<a.length;++c){var d=a[c],e=d.from.line;(b[e]||(b[e]=[])).push(d)}return b}function k(a){var b=a.severity;s.test(b)||(b="error");var c=document.createElement("div");return c.className="CodeMirror-lint-message-"+b,c.appendChild(document.createTextNode(a.message)),c}function l(a){var b=a.state.lint,c=b.options;c.async?c.getAnnotations(a,m,c):m(a,c.getAnnotations(a.getValue(),c.options))}function m(a,b){g(a);for(var c=a.state.lint,d=c.options,e=j(b),f=0;f<e.length;++f){var l=e[f];if(l){for(var m=null,n=c.hasGutter&&document.createDocumentFragment(),o=0;o<l.length;++o){var p=l[o],q=p.severity;s.test(q)||(q="error"),m=i(m,q),d.formatAnnotation&&(p=d.formatAnnotation(p)),c.hasGutter&&n.appendChild(k(p)),p.to&&c.marked.push(a.markText(p.from,p.to,{className:"CodeMirror-lint-mark-"+q,__annotation:p}))}c.hasGutter&&a.setGutterMarker(f,r,h(n,m,l.length>1,c.options.tooltips))}}d.onUpdateLinting&&d.onUpdateLinting(b,e,a)}function n(a){var b=a.state.lint;clearTimeout(b.timeout),b.timeout=setTimeout(function(){l(a)},b.options.delay||500)}function o(a,b){var c=b.target||b.srcElement;d(b,k(a),c)}function p(a,b){if(/\bCodeMirror-lint-mark-/.test((b.target||b.srcElement).className))for(var c=0;c<t.length;c+=2)for(var d=a.findMarksAt(a.coordsChar({left:b.clientX+t[c],top:b.clientY+t[c+1]})),e=0;e<d.length;++e){var f=d[e],g=f.__annotation;if(g)return o(g,b)}}function q(a,b,c){if(c&&c!=CodeMirror.Init&&(g(a),a.off("change",n),CodeMirror.off(a.getWrapperElement(),"mouseover",a.state.lint.onMouseOver),delete a.state.lint),b){for(var d=a.getOption("gutters"),h=!1,i=0;i<d.length;++i)d[i]==r&&(h=!0);var j=a.state.lint=new e(a,f(a,b),h);a.on("change",n),0!=j.options.tooltips&&CodeMirror.on(a.getWrapperElement(),"mouseover",j.onMouseOver),l(a)}}var r="CodeMirror-lint-markers",s=/^(?:error|warning)$/,t=[0,0,0,5,0,-5,5,0,-5,0];CodeMirror.defineOption("lintWith",!1,q),// deprecated
CodeMirror.defineOption("lint",!1,q)}(),define("libs/codemirror/addon/lint/lint",function(){}),function(){"use strict";function a(a,b){JSHINT("var t = "+a+";",b);// TODO убрать это и использовать стандартный валидатор
var c=JSHINT.data().errors,d=[];return c&&e(c,d),d}// deprecated
function b(a){
// All problems are warnings by default
return c(a,g,"warning",!0),c(a,h,"error"),d(a)?null:a}function c(a,b,c,d){var e,f,g,h,i;e=a.description;for(var j=0;j<b.length;j++)f=b[j],g="string"==typeof f?f:f[0],h="string"==typeof f?null:f[1],i=e.indexOf(g)!==-1,(d||i)&&(a.severity=c),i&&h&&(a.description=h)}function d(a){for(var b=a.description,c=0;c<f.length;c++)if(b.indexOf(f[c])!==-1)return!0;return!1}function e(a,c){for(var d=0;d<a.length;d++){var e=a[d];if(e){var f,g;
// This next block is to fix a problem in jshint. Jshint
// replaces
// all tabs with spaces then performs some checks. The error
// positions (character/space) are then reported incorrectly,
// not taking the replacement step into account. Here we look
// at the evidence line and try to adjust the character position
// to the correct value.
if(f=[],e.evidence){
// Tab positions are computed once per line and cached
var h=f[e.line];if(!h){var i=e.evidence;h=[],
// ugggh phantomjs does not like this
// forEachChar(evidence, function(item, index) {
Array.prototype.forEach.call(i,function(a,b){"\t"===a&&
// First col is 1 (not 0) to match error
// positions
h.push(b+1)}),f[e.line]=h}if(h.length>0){var j=e.character;h.forEach(function(a){j>a&&(j-=1)}),e.character=j}}var k=e.character-1,l=k+1;e.evidence&&(g=e.evidence.substring(k).search(/.\b/),g>-1&&(l+=g)),
// Convert to format expected by validation service
e.description=e.reason,// + "(jshint)";
e.start=e.character,e.end=l,e=b(e),e&&c.push({message:e.description,severity:e.severity,from:CodeMirror.Pos(e.line-1,k),to:CodeMirror.Pos(e.line-1,l)})}}}
// declare global: JSHINT
var f=["Dangerous comment"],g=[["Expected '{'","Statement body should be inside '{ }' braces."]],h=["Missing semicolon","Extra comma","Missing property name","Unmatched "," and instead saw"," is not defined","Unclosed string","Stopping, unable to continue"];CodeMirror.registerHelper("lint","javascript",a),CodeMirror.javascriptValidator=CodeMirror.lint.javascript}(),define("plugins/javascript-lint",function(){}),
// Utility function that allows modes to be combined. The mode given
// as the base argument takes care of most of the normal mode
// functionality, but a second (typically simple) mode is used, which
// can override the style of text. Both modes get to parse all of the
// text, but when both assign a non-null style to a piece of code, the
// overlay wins, unless the combine argument was true, in which case
// the styles are combined.
// overlayParser is the old, deprecated name
CodeMirror.overlayMode=CodeMirror.overlayParser=function(a,b,c){return{startState:function(){return{base:CodeMirror.startState(a),overlay:CodeMirror.startState(b),basePos:0,baseCur:null,overlayPos:0,overlayCur:null}},copyState:function(c){return{base:CodeMirror.copyState(a,c.base),overlay:CodeMirror.copyState(b,c.overlay),basePos:c.basePos,baseCur:null,overlayPos:c.overlayPos,overlayCur:null}},token:function(d,e){return d.start==e.basePos&&(e.baseCur=a.token(d,e.base),e.basePos=d.pos),d.start==e.overlayPos&&(d.pos=d.start,e.overlayCur=b.token(d,e.overlay),e.overlayPos=d.pos),d.pos=Math.min(e.basePos,e.overlayPos),d.eol()&&(e.basePos=e.overlayPos=0),null==e.overlayCur?e.baseCur:null!=e.baseCur&&c?e.baseCur+" "+e.overlayCur:e.overlayCur},indent:a.indent&&function(b,c){return a.indent(b.base,c)},electricChars:a.electricChars,innerMode:function(b){return{state:b.base,mode:a}},blankLine:function(c){a.blankLine&&a.blankLine(c.base),b.blankLine&&b.blankLine(c.overlay)}}},define("codemirror-overlay",["libs/codemirror/lib/codemirror","libs/codemirror/mode/javascript/javascript","libs/codemirror/addon/edit/matchbrackets","libs/codemirror/addon/fold/foldcode","libs/codemirror/addon/fold/foldgutter","libs/codemirror/addon/fold/brace-fold","libs/codemirror/addon/selection/active-line","jshint","libs/codemirror/addon/lint/lint","plugins/javascript-lint"],function(a){return function(){var b;return b||a.CodeMirror}}(this)),/**
 *  DOM Module
 *
 **/
define("ui/dom",["jquery"],function(a){"use strict";return{viewport:a(".viewport"),
// Action buttons
actionsList:a("#actions"),generatedActions:a(".a-generated"),uploadedActions:a(".a-uploaded"),generateBtn:a("#generate"),downloadBtn:a("#download-code"),resetBtn:a("#reset-ui"),copyCodeBtn:a("#copy-code"),indentDropdown:a("#json-indent"),
// Editors
templateEditor:a("#template-editor"),resultEditor:a("#result-editor"),
// Docs and dialogs
showSidebarBtn:a(".show-sidebar"),hideSidebarBtn:a("aside .close"),tagNames:a(".help-tab dt a"),
// Info
generateStartMessage:a(".wait-magic"),codeSizeBadge:a(".badge-code-size")}}),/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */
define("text",["module"],function(a){"use strict";var b,c,d,e,f,g=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],h=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,i=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,j="undefined"!=typeof location&&location.href,k=j&&location.protocol&&location.protocol.replace(/\:/,""),l=j&&location.hostname,m=j&&(location.port||void 0),n={},o=a.config&&a.config()||{};
//Using special require.nodeRequire, something added by r.js.
//Why Java, why is this so awkward?
//Avert your gaze!
return b={version:"2.0.10",strip:function(a){
//Strips <?xml ...?> declarations so that external SVG and XML
//documents can be added to a document without worry. Also, if the string
//is an HTML document, only the part inside the body tag is returned.
if(a){a=a.replace(h,"");var b=a.match(i);b&&(a=b[1])}else a="";return a},jsEscape:function(a){return a.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:o.createXhr||function(){
//Would love to dump the ActiveX crap in here. Need IE 6 to die first.
var a,b,c;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(b=0;b<3;b+=1){c=g[b];try{a=new ActiveXObject(c)}catch(d){}if(a){g=[c];// so faster next time
break}}return a},/**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
parseName:function(a){var b,c,d,e=!1,f=a.indexOf("."),g=0===a.indexOf("./")||0===a.indexOf("../");
//Pull off the strip arg.
return f!==-1&&(!g||f>1)?(b=a.substring(0,f),c=a.substring(f+1,a.length)):b=a,d=c||b,f=d.indexOf("!"),f!==-1&&(e="strip"===d.substring(f+1),d=d.substring(0,f),c?c=d:b=d),{moduleName:b,ext:c,strip:e}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,/**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
useXhr:function(a,c,d,e){var f,g,h,i=b.xdRegExp.exec(a);return!i||(f=i[2],g=i[3],g=g.split(":"),h=g[1],g=g[0],!(f&&f!==c||g&&g.toLowerCase()!==d.toLowerCase()||(h||g)&&h!==e))},finishLoad:function(a,c,d,e){d=c?b.strip(d):d,o.isBuild&&(n[a]=d),e(d)},load:function(a,c,d,e){
//Name has format: some.module.filext!strip
//The strip part is optional.
//if strip is present, then that means only get the string contents
//inside a body tag in an HTML string. For XML/SVG content it means
//removing the <?xml ...?> declarations so the content can be inserted
//into the current doc without problems.
// Do not bother with the work if a build and text will
// not be inlined.
if(e.isBuild&&!e.inlineText)return void d();o.isBuild=e.isBuild;var f=b.parseName(a),g=f.moduleName+(f.ext?"."+f.ext:""),h=c.toUrl(g),i=o.useXhr||b.useXhr;
// Do not load if it is an empty: url
// Do not load if it is an empty: url
//Load the text. Use XHR if possible and in a browser.
//Need to fetch the resource across domains. Assume
//the resource has been optimized into a JS module. Fetch
//by the module name + extension, but do not include the
//!strip part to avoid file system issues.
return 0===h.indexOf("empty:")?void d():void(!j||i(h,k,l,m)?b.get(h,function(c){b.finishLoad(a,f.strip,c,d)},function(a){d.error&&d.error(a)}):c([g],function(a){b.finishLoad(f.moduleName+"."+f.ext,f.strip,a,d)}))},write:function(a,c,d,e){if(n.hasOwnProperty(c)){var f=b.jsEscape(n[c]);d.asModule(a+"!"+c,"define(function () { return '"+f+"';});\n")}},writeFile:function(a,c,d,e,f){var g=b.parseName(c),h=g.ext?"."+g.ext:"",i=g.moduleName+h,
//Use a '.js' file name so that it indicates it is a
//script that can be loaded across domains.
j=d.toUrl(g.moduleName+h)+".js";
//Leverage own load() method to load plugin value, but only
//write out values that do not have the strip argument,
//to avoid any potential issues with ! in file names.
b.load(i,d,function(c){
//Use own write() method to construct full module value.
//But need to create shell that translates writeFile's
//write() to the right interface.
var d=function(a){return e(j,a)};d.asModule=function(a,b){return e.asModule(a,j,b)},b.write(a,i,d,f)},f)}},"node"===o.env||!o.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]?(c=require.nodeRequire("fs"),b.get=function(a,b,d){try{var e=c.readFileSync(a,"utf8");
//Remove BOM (Byte Mark Order) from utf8 files if it is there.
0===e.indexOf("\ufeff")&&(e=e.substring(1)),b(e)}catch(f){d(f)}}):"xhr"===o.env||!o.env&&b.createXhr()?b.get=function(a,c,d,e){var f,g=b.createXhr();
//Allow plugins direct access to xhr headers
if(g.open("GET",a,!0),e)for(f in e)e.hasOwnProperty(f)&&g.setRequestHeader(f.toLowerCase(),e[f]);
//Allow overrides specified in config
o.onXhr&&o.onXhr(g,a),g.onreadystatechange=function(b){var e,f;
//Do not explicitly handle errors, those should be
//visible via console output in the browser.
4===g.readyState&&(e=g.status,e>399&&e<600?(
//An http 4xx or 5xx error. Signal an error.
f=new Error(a+" HTTP status: "+e),f.xhr=g,d(f)):c(g.responseText),o.onXhrComplete&&o.onXhrComplete(g,a))},g.send(null)}:"rhino"===o.env||!o.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?b.get=function(a,b){var c,d,e="utf-8",f=new java.io.File(a),g=java.lang.System.getProperty("line.separator"),h=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(f),e)),i="";try{c=new java.lang.StringBuffer,d=h.readLine(),
// Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
// http://www.unicode.org/faq/utf_bom.html
// Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
// http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
d&&d.length()&&65279===d.charAt(0)&&(
// Eat the BOM, since we've already found the encoding on this file,
// and we plan to concatenating this buffer with others; the BOM should
// only appear at the top of a file.
d=d.substring(1)),null!==d&&c.append(d);while(null!==(d=h.readLine()))c.append(g),c.append(d);
//Make sure we return a JavaScript string and not a Java string.
i=String(c.toString())}finally{h.close()}b(i)}:("xpconnect"===o.env||!o.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(d=Components.classes,e=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),f="@mozilla.org/windows-registry-key;1"in d,b.get=function(a,b){var c,g,h,i={};f&&(a=a.replace(/\//g,"\\")),h=new FileUtils.File(a);
//XPCOM, you so crazy
try{c=d["@mozilla.org/network/file-input-stream;1"].createInstance(e.nsIFileInputStream),c.init(h,1,0,!1),g=d["@mozilla.org/intl/converter-input-stream;1"].createInstance(e.nsIConverterInputStream),g.init(c,"utf-8",c.available(),e.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),g.readString(c.available(),i),g.close(),c.close(),b(i.value)}catch(j){throw new Error((h&&h.path||"")+": "+j)}}),b}),define("text!ui/start_code.js",[],function(){return"[\n  '{{repeat(5, 7)}}',\n  {\n    _id: '{{objectId()}}',\n    index: '{{index()}}',\n    guid: '{{guid()}}',\n    isActive: '{{bool()}}',\n    balance: '{{floating(1000, 4000, 2, \"$0,0.00\")}}',\n    picture: 'http://placehold.it/32x32',\n    age: '{{integer(20, 40)}}',\n    eyeColor: '{{random(\"blue\", \"brown\", \"green\")}}',\n    name: '{{firstName()}} {{surname()}}',\n    gender: '{{gender()}}',\n    company: '{{company().toUpperCase()}}',\n    email: '{{email()}}',\n    phone: '+1 {{phone()}}',\n    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',\n    about: '{{lorem(1, \"paragraphs\")}}',\n    registered: '{{date(new Date(2014, 0, 1), new Date(), \"YYYY-MM-ddThh:mm:ss Z\")}}',\n    latitude: '{{floating(-90.000001, 90)}}',\n    longitude: '{{floating(-180.000001, 180)}}',\n    tags: [\n      '{{repeat(7)}}',\n      '{{lorem(1, \"words\")}}'\n    ],\n    friends: [\n      '{{repeat(3)}}',\n      {\n        id: '{{index()}}',\n        name: '{{firstName()}} {{surname()}}'\n      }\n    ],\n    greeting: function (tags) {\n      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';\n    },\n    favoriteFruit: function (tags) {\n      var fruits = ['apple', 'banana', 'strawberry'];\n      return fruits[tags.integer(0, fruits.length - 1)];\n    }\n  }\n]"}),/**
 *  Input/Output Module
 *
 **/
define("ui/io",["codemirror-overlay","./dom","text!./start_code.js"],function(CodeMirror,dom,startCode){"use strict";CodeMirror.defineMode("jg-template",function(a,b){var c={token:function(a,b){var c;if(a.match("{{")){while(null!=(c=a.next()))if("}"==c&&"}"==a.next())break;return a.eat("}"),"jg-template"}while(null!=a.next()&&!a.match("{{",!1));return null}};return CodeMirror.overlayMode(CodeMirror.getMode(a,b.backdrop||"javascript"),c)}); window.inputEditor=new CodeMirror(dom.templateEditor.get(0),{mode:"jg-template",matchBrackets:!0,smartIndent:!0,indentUnit:2,lineWrapping:!0,lineNumbers:!0,theme:"monokai",styleActiveLine:!0,foldGutter:!0,gutters:["CodeMirror-lint-markers","CodeMirror-linenumbers","CodeMirror-foldgutter"],lint:!0,value:window.localStorage.getItem(":JsonGeneratorService")||startCode});inputEditor.on("change",function(a){var b=a.getValue(),c=$(a.getWrapperElement()).prev("h2.start");0!==b.length?(window.localStorage.setItem(":JsonGeneratorService",b),c.hide()):c.fadeIn(300)});window.outputEditor=new CodeMirror(dom.resultEditor.get(0),{mode:"application/json",readOnly:!0,matchBrackets:!0,smartIndent:!0,indentUnit:4,lineWrapping:!0,theme:"monokai",foldGutter:!0,lineNumbers:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]});return outputEditor.on("change",function(a){$(a.getWrapperElement()).prev("h2.start").hide()}),{input:function(){return eval("("+inputEditor.getValue()+")")},output:function(a){outputEditor.setValue(a)},getTemplate:function(){return inputEditor.getValue()},reset:function(){inputEditor.clearHistory(),inputEditor.setValue(startCode),outputEditor.setValue("")}}}),/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define("libs/clipboard/dist/clipboard",[],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.Clipboard=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function d(a,b){while(a&&a.nodeType!==e){if("function"==typeof a.matches&&a.matches(b))return a;a=a.parentNode}}var e=9;/**
 * A polyfill for Element.matches()
 */
if("undefined"!=typeof Element&&!Element.prototype.matches){var f=Element.prototype;f.matches=f.matchesSelector||f.mozMatchesSelector||f.msMatchesSelector||f.oMatchesSelector||f.webkitMatchesSelector}b.exports=d},{}],2:[function(a,b,c){/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function d(a,b,c,d,f){var g=e.apply(this,arguments);return a.addEventListener(c,g,f),{destroy:function(){a.removeEventListener(c,g,f)}}}/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function e(a,b,c,d){return function(c){c.delegateTarget=f(c.target,b),c.delegateTarget&&d.call(a,c)}}var f=a("./closest");b.exports=d},{"./closest":1}],3:[function(a,b,c){/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
c.node=function(a){return void 0!==a&&a instanceof HTMLElement&&1===a.nodeType},/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
c.nodeList=function(a){var b=Object.prototype.toString.call(a);return void 0!==a&&("[object NodeList]"===b||"[object HTMLCollection]"===b)&&"length"in a&&(0===a.length||c.node(a[0]))},/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
c.string=function(a){return"string"==typeof a||a instanceof String},/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
c.fn=function(a){var b=Object.prototype.toString.call(a);return"[object Function]"===b}},{}],4:[function(a,b,c){/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function d(a,b,c){if(!a&&!b&&!c)throw new Error("Missing required arguments");if(!h.string(b))throw new TypeError("Second argument must be a String");if(!h.fn(c))throw new TypeError("Third argument must be a Function");if(h.node(a))return e(a,b,c);if(h.nodeList(a))return f(a,b,c);if(h.string(a))return g(a,b,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function e(a,b,c){return a.addEventListener(b,c),{destroy:function(){a.removeEventListener(b,c)}}}/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function f(a,b,c){return Array.prototype.forEach.call(a,function(a){a.addEventListener(b,c)}),{destroy:function(){Array.prototype.forEach.call(a,function(a){a.removeEventListener(b,c)})}}}/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function g(a,b,c){return i(document.body,a,b,c)}var h=a("./is"),i=a("delegate");b.exports=d},{"./is":3,delegate:2}],5:[function(a,b,c){function d(a){var b;if("SELECT"===a.nodeName)a.focus(),b=a.value;else if("INPUT"===a.nodeName||"TEXTAREA"===a.nodeName){var c=a.hasAttribute("readonly");c||a.setAttribute("readonly",""),a.select(),a.setSelectionRange(0,a.value.length),c||a.removeAttribute("readonly"),b=a.value}else{a.hasAttribute("contenteditable")&&a.focus();var d=window.getSelection(),e=document.createRange();e.selectNodeContents(a),d.removeAllRanges(),d.addRange(e),b=d.toString()}return b}b.exports=d},{}],6:[function(a,b,c){function d(){}d.prototype={on:function(a,b,c){var d=this.e||(this.e={});return(d[a]||(d[a]=[])).push({fn:b,ctx:c}),this},once:function(a,b,c){function d(){e.off(a,d),b.apply(c,arguments)}var e=this;return d._=b,this.on(a,d,c)},emit:function(a){var b=[].slice.call(arguments,1),c=((this.e||(this.e={}))[a]||[]).slice(),d=0,e=c.length;for(d;d<e;d++)c[d].fn.apply(c[d].ctx,b);return this},off:function(a,b){var c=this.e||(this.e={}),d=c[a],e=[];if(d&&b)for(var f=0,g=d.length;f<g;f++)d[f].fn!==b&&d[f].fn._!==b&&e.push(d[f]);
// Remove event from queue to prevent memory leak
// Suggested by https://github.com/lazd
// Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
return e.length?c[a]=e:delete c[a],this}},b.exports=d},{}],7:[function(b,c,d){!function(e,f){if("function"==typeof a&&a.amd)a(["module","select"],f);else if("undefined"!=typeof d)f(c,b("select"));else{var g={exports:{}};f(g,e.select),e.clipboardAction=g.exports}}(this,function(a,b){"use strict";function c(a){return a&&a.__esModule?a:{"default":a}}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=c(b),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=function(){/**
         * @param {Object} options
         */
function a(b){d(this,a),this.resolveOptions(b),this.initSelection()}/**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */
return g(a,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=a.action,this.container=a.container,this.emitter=a.emitter,this.target=a.target,this.text=a.text,this.trigger=a.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var a=this,b="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return a.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),
// Prevent zooming on iOS
this.fakeElem.style.fontSize="12pt",
// Reset box model
this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",
// Move element out of screen horizontally
this.fakeElem.style.position="absolute",this.fakeElem.style[b?"right":"left"]="-9999px";
// Move element to the same position vertically
var c=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=c+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,e["default"])(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,e["default"])(this.target),this.copyText()}},{key:"copyText",value:function(){var a=void 0;try{a=document.execCommand(this.action)}catch(b){a=!1}this.handleResult(a)}},{key:"handleResult",value:function(a){this.emitter.emit(a?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=a,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(a){if(void 0!==a){if(!a||"object"!==("undefined"==typeof a?"undefined":f(a))||1!==a.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=a}},get:function(){return this._target}}]),a}();a.exports=h})},{select:5}],8:[function(b,c,d){!function(e,f){if("function"==typeof a&&a.amd)a(["module","./clipboard-action","tiny-emitter","good-listener"],f);else if("undefined"!=typeof d)f(c,b("./clipboard-action"),b("tiny-emitter"),b("good-listener"));else{var g={exports:{}};f(g,e.clipboardAction,e.tinyEmitter,e.goodListener),e.clipboard=g.exports}}(this,function(a,b,c,d){"use strict";function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}/**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
function i(a,b){var c="data-clipboard-"+a;if(b.hasAttribute(c))return b.getAttribute(c)}var j=e(b),k=e(c),l=e(d),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=function(a){/**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
function b(a,c){f(this,b);var d=g(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return d.resolveOptions(c),d.listenClick(a),d}/**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */
return h(b,a),n(b,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof a.action?a.action:this.defaultAction,this.target="function"==typeof a.target?a.target:this.defaultTarget,this.text="function"==typeof a.text?a.text:this.defaultText,this.container="object"===m(a.container)?a.container:document.body}},{key:"listenClick",value:function(a){var b=this;this.listener=(0,l["default"])(a,"click",function(a){return b.onClick(a)})}},{key:"onClick",value:function(a){var b=a.delegateTarget||a.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new j["default"]({action:this.action(b),target:this.target(b),text:this.text(b),container:this.container,trigger:b,emitter:this})}},{key:"defaultAction",value:function(a){return i("action",a)}},{key:"defaultTarget",value:function(a){var b=i("target",a);if(b)return document.querySelector(b)}},{key:"defaultText",value:function(a){return i("text",a)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],b="string"==typeof a?[a]:a,c=!!document.queryCommandSupported;return b.forEach(function(a){c=c&&!!document.queryCommandSupported(a)}),c}}]),b}(k["default"]);a.exports=o})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)}),/**
 * noty - jQuery Notification Plugin v2.2.2
 * Contributors: https://github.com/needim/noty/graphs/contributors
 *
 * Examples and Documentation - http://needim.github.com/noty/
 *
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a){var b={init:function(b){
// return this so we can chain/use the bridge with less code.
// Mix in the passed in options with the default options
// Build the noty dom initial structure
return this.options=a.extend({},a.noty.defaults,b),this.options.layout=this.options.custom?a.noty.layouts.inline:a.noty.layouts[this.options.layout],a.noty.themes[this.options.theme]?this.options.theme=a.noty.themes[this.options.theme]:b.themeClassName=this.options.theme,delete b.layout,delete b.theme,this.options=a.extend({},this.options,this.options.layout.options),this.options.id="noty_"+(new Date).getTime()*Math.floor(1e6*Math.random()),this.options=a.extend({},this.options,b),this._build(),this},// end init
_build:function(){
// Generating noty bar
var b=a('<div class="noty_bar noty_type_'+this.options.type+'"></div>').attr("id",this.options.id);
// Set buttons if available
if(b.append(this.options.template).find(".noty_text").html(this.options.text),this.$bar=null!==this.options.layout.parent.object?a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(b):b,this.options.themeClassName&&this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_"+this.options.type),this.options.buttons){
// If we have button disable closeWith & timeout options
this.options.closeWith=[],this.options.timeout=!1;var c=a("<div/>").addClass("noty_buttons");null!==this.options.layout.parent.object?this.$bar.find(".noty_bar").append(c):this.$bar.append(c);var d=this;a.each(this.options.buttons,function(b,c){var e=a("<button/>").addClass(c.addClass?c.addClass:"gray").html(c.text).attr("id",c.id?c.id:"button-"+b).appendTo(d.$bar.find(".noty_buttons")).bind("click",function(){a.isFunction(c.onClick)&&c.onClick.call(e,d)})})}
// For easy access
this.$message=this.$bar.find(".noty_message"),this.$closeButton=this.$bar.find(".noty_close"),this.$buttons=this.$bar.find(".noty_buttons"),a.noty.store[this.options.id]=this},// end _build
show:function(){var b=this;
// If noty is have a timeout option
return b.options.custom?b.options.custom.find(b.options.layout.container.selector).append(b.$bar):a(b.options.layout.container.selector).append(b.$bar),b.options.theme&&b.options.theme.style&&b.options.theme.style.apply(b),"function"===a.type(b.options.layout.css)?this.options.layout.css.apply(b.$bar):b.$bar.css(this.options.layout.css||{}),b.$bar.addClass(b.options.layout.addClass),b.options.layout.container.style.apply(a(b.options.layout.container.selector)),b.showing=!0,b.options.theme&&b.options.theme.style&&b.options.theme.callback.onShow.apply(this),a.inArray("click",b.options.closeWith)>-1&&b.$bar.css("cursor","pointer").one("click",function(a){b.stopPropagation(a),b.options.callback.onCloseClick&&b.options.callback.onCloseClick.apply(b),b.close()}),a.inArray("hover",b.options.closeWith)>-1&&b.$bar.one("mouseenter",function(){b.close()}),a.inArray("button",b.options.closeWith)>-1&&b.$closeButton.one("click",function(a){b.stopPropagation(a),b.close()}),a.inArray("button",b.options.closeWith)==-1&&b.$closeButton.remove(),b.options.callback.onShow&&b.options.callback.onShow.apply(b),b.$bar.animate(b.options.animation.open,b.options.animation.speed,b.options.animation.easing,function(){b.options.callback.afterShow&&b.options.callback.afterShow.apply(b),b.showing=!1,b.shown=!0}),b.options.timeout&&b.$bar.delay(b.options.timeout).promise().done(function(){b.close()}),this},// end show
close:function(){if(!(this.closed||this.$bar&&this.$bar.hasClass("i-am-closing-now"))){var b=this;if(this.showing)return void b.$bar.queue(function(){b.close.apply(b)});if(!this.shown&&!this.showing){// If we are still waiting in the queue just delete from queue
var c=[];return a.each(a.noty.queue,function(a,d){d.options.id!=b.options.id&&c.push(d)}),void(a.noty.queue=c)}b.$bar.addClass("i-am-closing-now"),b.options.callback.onClose&&b.options.callback.onClose.apply(b),b.$bar.clearQueue().stop().animate(b.options.animation.close,b.options.animation.speed,b.options.animation.easing,function(){b.options.callback.afterClose&&b.options.callback.afterClose.apply(b)}).promise().done(function(){
// Modal Cleaning
b.options.modal&&(a.notyRenderer.setModalCount(-1),0==a.notyRenderer.getModalCount()&&a(".noty_modal").fadeOut("fast",function(){a(this).remove()})),
// Layout Cleaning
a.notyRenderer.setLayoutCountFor(b,-1),0==a.notyRenderer.getLayoutCountFor(b)&&a(b.options.layout.container.selector).remove(),
// Make sure self.$bar has not been removed before attempting to remove it
"undefined"!=typeof b.$bar&&null!==b.$bar&&(b.$bar.remove(),b.$bar=null,b.closed=!0),delete a.noty.store[b.options.id],// deleting noty from store
b.options.theme.callback&&b.options.theme.callback.onClose&&b.options.theme.callback.onClose.apply(b),b.options.dismissQueue||(
// Queue render
a.noty.ontap=!0,a.notyRenderer.render()),b.options.maxVisible>0&&b.options.dismissQueue&&a.notyRenderer.render()})}},// end close
setText:function(a){return this.closed||(this.options.text=a,this.$bar.find(".noty_text").html(a)),this},setType:function(a){return this.closed||(this.options.type=a,this.options.theme.style.apply(this),this.options.theme.callback.onShow.apply(this)),this},setTimeout:function(a){if(!this.closed){var b=this;this.options.timeout=a,b.$bar.delay(b.options.timeout).promise().done(function(){b.close()})}return this},stopPropagation:function(a){a=a||window.event,"undefined"!=typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},closed:!1,showing:!1,shown:!1};// end NotyObject
a.notyRenderer={},a.notyRenderer.init=function(c){
// Renderer creates a new noty
var d=Object.create(b).init(c);return d.options.killer&&a.noty.closeAll(),d.options.force?a.noty.queue.unshift(d):a.noty.queue.push(d),a.notyRenderer.render(),"object"==a.noty.returns?d:d.options.id},a.notyRenderer.render=function(){var b=a.noty.queue[0];"object"===a.type(b)?b.options.dismissQueue?b.options.maxVisible>0?a(b.options.layout.container.selector+" li").length<b.options.maxVisible&&a.notyRenderer.show(a.noty.queue.shift()):a.notyRenderer.show(a.noty.queue.shift()):a.noty.ontap&&(a.notyRenderer.show(a.noty.queue.shift()),a.noty.ontap=!1):a.noty.ontap=!0},a.notyRenderer.show=function(b){b.options.modal&&(a.notyRenderer.createModalFor(b),a.notyRenderer.setModalCount(1)),
// Where is the container?
b.options.custom?0==b.options.custom.find(b.options.layout.container.selector).length?b.options.custom.append(a(b.options.layout.container.object).addClass("i-am-new")):b.options.custom.find(b.options.layout.container.selector).removeClass("i-am-new"):0==a(b.options.layout.container.selector).length?a("body").append(a(b.options.layout.container.object).addClass("i-am-new")):a(b.options.layout.container.selector).removeClass("i-am-new"),a.notyRenderer.setLayoutCountFor(b,1),b.show()},a.notyRenderer.createModalFor=function(b){if(0==a(".noty_modal").length){var c=a("<div/>").addClass("noty_modal").addClass(b.options.theme).data("noty_modal_count",0);b.options.theme.modal&&b.options.theme.modal.css&&c.css(b.options.theme.modal.css),c.prependTo(a("body")).fadeIn("fast")}},a.notyRenderer.getLayoutCountFor=function(b){return a(b.options.layout.container.selector).data("noty_layout_count")||0},a.notyRenderer.setLayoutCountFor=function(b,c){return a(b.options.layout.container.selector).data("noty_layout_count",a.notyRenderer.getLayoutCountFor(b)+c)},a.notyRenderer.getModalCount=function(){return a(".noty_modal").data("noty_modal_count")||0},a.notyRenderer.setModalCount=function(b){return a(".noty_modal").data("noty_modal_count",a.notyRenderer.getModalCount()+b)},
// This is for custom container
a.fn.noty=function(b){return b.custom=a(this),a.notyRenderer.init(b)},a.noty={},a.noty.queue=[],a.noty.ontap=!0,a.noty.layouts={},a.noty.themes={},a.noty.returns="object",a.noty.store={},a.noty.get=function(b){return!!a.noty.store.hasOwnProperty(b)&&a.noty.store[b]},a.noty.close=function(b){return!!a.noty.get(b)&&a.noty.get(b).close()},a.noty.setText=function(b,c){return!!a.noty.get(b)&&a.noty.get(b).setText(c)},a.noty.setType=function(b,c){return!!a.noty.get(b)&&a.noty.get(b).setType(c)},a.noty.clearQueue=function(){a.noty.queue=[]},a.noty.closeAll=function(){a.noty.clearQueue(),a.each(a.noty.store,function(a,b){b.close()})};var c=window.alert;a.noty.consumeAlert=function(b){window.alert=function(c){b?b.text=c:b={text:c},a.notyRenderer.init(b)}},a.noty.stopConsumeAlert=function(){window.alert=c},a.noty.defaults={layout:"top",theme:"defaultTheme",type:"alert",text:"",dismissQueue:!0,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:"toggle"},close:{height:"toggle"},easing:"swing",speed:500},timeout:!1,force:!1,modal:!1,maxVisible:5,killer:!1,closeWith:["click"],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){},onCloseClick:function(){}},buttons:!1},a(window).resize(function(){a.each(a.noty.layouts,function(b,c){c.container.style.apply(a(c.container.selector))})})}(jQuery),
// Helpers
window.noty=function(a){return jQuery.notyRenderer.init(a)},define("libs/noty/js/noty/jquery.noty",function(){}),function(a){a.noty.layouts.bottomCenter={name:"bottomCenter",options:{},container:{object:'<ul id="noty_bottomCenter_layout_container" />',selector:"ul#noty_bottomCenter_layout_container",style:function(){a(this).css({bottom:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),define("libs/noty/js/noty/layouts/bottomCenter",function(){}),function(a){a.noty.layouts.topCenter={name:"topCenter",options:{},container:{object:'<ul id="noty_topCenter_layout_container" />',selector:"ul#noty_topCenter_layout_container",style:function(){a(this).css({top:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),define("libs/noty/js/noty/layouts/topCenter",function(){}),function(a){a.noty.themes.defaultTheme={name:"defaultTheme",helpers:{borderFix:function(){if(this.options.dismissQueue){var b=this.options.layout.container.selector+" "+this.options.layout.parent.selector;switch(this.options.layout.name){case"top":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).last().css({borderRadius:"0px 0px 5px 5px"});break;case"topCenter":case"topLeft":case"topRight":case"bottomCenter":case"bottomLeft":case"bottomRight":case"center":case"centerLeft":case"centerRight":case"inline":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).first().css({"border-top-left-radius":"5px","border-top-right-radius":"5px"}),a(b).last().css({"border-bottom-left-radius":"5px","border-bottom-right-radius":"5px"});break;case"bottom":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).first().css({borderRadius:"5px 5px 0px 0px"})}}}},modal:{css:{position:"fixed",width:"100%",height:"100%",backgroundColor:"#000",zIndex:1e4,opacity:.6,display:"none",left:0,top:0}},style:function(){switch(this.$bar.css({overflow:"hidden",background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"}),this.$message.css({fontSize:"13px",lineHeight:"16px",textAlign:"center",padding:"8px 10px 9px",width:"auto",position:"relative"}),this.$closeButton.css({position:"absolute",top:4,right:4,width:10,height:10,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",display:"none",cursor:"pointer"}),this.$buttons.css({padding:5,textAlign:"right",borderTop:"1px solid #ccc",backgroundColor:"#fff"}),this.$buttons.find("button").css({marginLeft:5}),this.$buttons.find("button:first").css({marginLeft:0}),this.$bar.bind({mouseenter:function(){a(this).find(".noty_close").stop().fadeTo("normal",1)},mouseleave:function(){a(this).find(".noty_close").stop().fadeTo("normal",0)}}),this.options.layout.name){case"top":this.$bar.css({borderRadius:"0px 0px 5px 5px",borderBottom:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});break;case"topCenter":case"center":case"bottomCenter":case"inline":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"center"});break;case"topLeft":case"topRight":case"bottomLeft":case"bottomRight":case"centerLeft":case"centerRight":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"left"});break;case"bottom":this.$bar.css({borderRadius:"5px 5px 0px 0px",borderTop:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 -2px 4px rgba(0, 0, 0, 0.1)"});break;default:this.$bar.css({border:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"})}switch(this.options.type){case"alert":case"notification":this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"});break;case"warning":this.$bar.css({backgroundColor:"#FFEAA8",borderColor:"#FFC237",color:"#826200"}),this.$buttons.css({borderTop:"1px solid #FFC237"});break;case"error":this.$bar.css({backgroundColor:"red",borderColor:"darkred",color:"#FFF"}),this.$message.css({fontWeight:"bold"}),this.$buttons.css({borderTop:"1px solid darkred"});break;case"information":this.$bar.css({backgroundColor:"#57B7E2",borderColor:"#0B90C4",color:"#FFF"}),this.$buttons.css({borderTop:"1px solid #0B90C4"});break;case"success":this.$bar.css({backgroundColor:"lightgreen",borderColor:"#50C24E",color:"darkgreen"}),this.$buttons.css({borderTop:"1px solid #50C24E"});break;default:this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"})}},callback:{onShow:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)},onClose:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)}}}}(jQuery),define("libs/noty/js/noty/themes/default",function(){}),define("ui/notify",["jquery"],function(a){"use strict";return a.extend(a.noty.defaults,{timeout:5e3,layout:"bottomCenter"}),function(b,c,d){if(c&&b)return noty(a.extend({text:c,type:b},d||{}))}}),/**
 *  Clipboard Module
 *
 **/
define("ui/clipboard",["libs/clipboard/dist/clipboard","./dom","./notify"],function(a,b,c){"use strict";var d=new a(b.copyCodeBtn[0]);return d.on("success",function(){c("success","The code has been copied to clipboard.")}),{clipCode:function(a){b.copyCodeBtn.attr("data-clipboard-text",a)},reset:function(){b.copyCodeBtn.attr("data-clipboard-text","")}}}),function(){"use strict";/**
     * Converts `value` to string and pad it with leading zeroes 
     * until resulting string reaches `length`
     * 
     * @param {Number} value
     * @param {Number} [length=2]
     * 
     * @return {String}
     */
function a(a,b){var c=a.toString(),d=2===arguments.length?b:2;if(c.length>d)return c;
// this task can be accomplished in one line — empty for cycle
for(c;c.length<d;c="0"+c);return c}/**
     * Formats date according to `format` string.
     * Format string may consist of any characters, but some of them considered tokens,
     * and will be replaced by appropriate value from `date`.
     * Possible tokens include:
     *  * **YYYY**: 4-digit year
     *  * **YY**: last 2 digit of year
     *  * **MMMM**: full name of month
     *  * **MMM**: short name of month
     *  * **MM**: ISO8601-compatible number of month (i.e. zero-padded) in year (with January being 1st month)
     *  * **M**: number of month in year without zero-padding (with January being 1st month)
     *  * **DD**: full name of day
     *  * **D**: short name of day
     *  * **dd**: zero-padded number of day in month
     *  * **d**: number of day in month
     *  * **HH**: zero-padded hour in 24-hr format
     *  * **H**: hour in 24-hr format
     *  * **hh**: zero-padded hour in 12-hr format
     *  * **h**: hour in 12-hr format
     *  * **mm**: zero-padded minutes
     *  * **m**: minutes
     *  * **ss**: zero-padded seconds
     *  * **s**: seconds
     *  * **ff**: zero-padded milliseconds
     *  * **f**: milliseconds
     *  * **A**: AM/PM
     *  * **a**: am/pm
     *  * **Z**: time-zone in ISO8601-compatible format (i.e. "-04:00")
     *
     *  Longer tokens take precedence over shorter ones (so "MM" will aways be "04", not "44" in april).
     *
     * @param {String} format
     * @param {Date|Number} [date=Date.now()]
     * 
     * @return {String}
     */
function b(a,c){var e=2===arguments.length&&c?c instanceof Date?c:new Date(c):new Date;return a=a.toString(),b._formatters[a]?b._formatters[a](e):a.replace(g,function(b){return d[b](e,a)})}var c=!("undefined"==typeof module||!module.exports),d={YYYY:function(a){return a.getFullYear()},YY:function(b){return a(b.getFullYear()%100)},MMMM:function(a,c){return h[b.lang()].months(a,c)},MMM:function(a,c){return h[b.lang()].monthsShort(a,c)},MM:function(b){return a(b.getMonth()+1)},M:function(a){return a.getMonth()+1},DD:function(a){return h[b.lang()].weekdays[a.getDay()]},D:function(a){return h[b.lang()].weekdaysMin[a.getDay()]},dd:function(b){return a(b.getDate())},d:function(a){return a.getDate()},HH:function(b){return a(b.getHours())},H:function(a){return a.getHours()},hh:function(b){return a(b.getHours()%12||12)},h:function(a){return a.getHours()%12||12},mm:function(b){return a(b.getMinutes())},m:function(a){return a.getMinutes()},ss:function(b){return a(b.getSeconds())},s:function(a){return a.getSeconds()},ff:function(b){return a(b.getMilliseconds(),3)},f:function(a){return a.getMilliseconds()},A:function(a){return h[b.lang()].meridiem(a.getHours(),!1)},a:function(a){return h[b.lang()].meridiem(a.getHours(),!0)},Z:function(b){var c=b.getTimezoneOffset(),d=Math.abs(Math.floor(c/60)),e=c%60,f=c>0?"+":"-";return[f,a(d),":",a(e)].join("")}},e=[];for(var f in d)d.hasOwnProperty(f)&&e.push(f);var g=new RegExp(e.join("|"),"mg"),h=b._languages={},i=b.lang=function(a,b){if(!a)return h.current||"en";if(!b){if(h[a]&&h.current!==a)h.current=a;else if(c)try{require("./lang/"+a),h.current=a}catch(d){}return h.current}return h[a]=b,h.current};
// Let's create English language
i("en",{_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.getMonth()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.getMonth()]},weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),meridiem:function(a,b){return a>11?b?"pm":"PM":b?"am":"AM"}});/**
     * Creates formatting function. Basically just curry over datef.
     * 
     * @return {Function} Readied formatting function with one argument — date.
     */
var j=function(a){return function(c){var d=a[b.lang()]||a["default"]||a;return b(d,c)}},k=b._formatters={},l=b.register=function(a,b){return k[a]=j(b),k[a]};/**
     * Return list of custom formats
     *
     * @return {Array}
     */
b.formatters=function(){return Object.keys(b._formatters)},
// Let's create some basic formats
l("ISODate","YYYY-MM-dd"),l("ISOTime","hh:mm:ss"),l("ISODateTime","YYYY-MM-ddThh:mm:ss"),l("ISODateTimeTZ","YYYY-MM-ddThh:mm:ssZ");
// get reference to global object
var m;// we're in browser, captain!
m="undefined"!=typeof window?window:"undefined"!=typeof global?global:this;
// conflict management — save link to previous content of datef, whatever it was.
var n=m.datef;/**
     * Cleans global namespace, restoring previous value of window.datef, and returns datef itself.
     * 
     * @return {datef}
     */
b.noConflict=function(){return m.datef=n,this},
// Expose our precious function to outer world.
c?module.exports=b:"function"==typeof define&&define.amd?define("datef",[],function(){return b}):m.datef=b}(),/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
function(){/************************************
        Constructors
    ************************************/
// Numeral prototype object
function a(a){this._value=a}/**
     * Implementation of toFixed() that treats floats more like decimals
     *
     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
     * problems for accounting- and finance-related software.
     */
function b(a,b,c,d){var e,f,g=Math.pow(10,b);
//roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
// Multiply up by precision, round accurately, then divide and use native toFixed():
return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}/************************************
        Formatting
    ************************************/
// determine what type of formatting we need to do
function c(a,b,c){var d;
// return string
// figure out what kind of format we are dealing with
// currency!!!!!
return d=b.indexOf("$")>-1?e(a,b,c):b.indexOf("%")>-1?f(a,b,c):b.indexOf(":")>-1?g(a,b):i(a._value,b,c)}
// revert to number
function d(a,b){var c,d,e,f,g,i=b,j=["KB","MB","GB","TB","PB","EB","ZB","YB"],k=!1;if(b.indexOf(":")>-1)a._value=h(b);else if(b===q)a._value=0;else{
// see if bytes are there so that we can multiply to the correct number
for("."!==o[p].delimiters.decimal&&(b=b.replace(/\./g,"").replace(o[p].delimiters.decimal,".")),
// see if abbreviations are there so that we can multiply to the correct number
c=new RegExp("[^a-zA-Z]"+o[p].abbreviations.thousand+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+o[p].abbreviations.million+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+o[p].abbreviations.billion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+o[p].abbreviations.trillion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),g=0;g<=j.length;g++)if(k=b.indexOf(j[g])>-1&&Math.pow(1024,g+1))break;
// do some math to create our number
a._value=(k?k:1)*(i.match(c)?Math.pow(10,3):1)*(i.match(d)?Math.pow(10,6):1)*(i.match(e)?Math.pow(10,9):1)*(i.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),
// round if we are talking about bytes
a._value=k?Math.ceil(a._value):a._value}return a._value}function e(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),j="";
// check for space before or after currency
// format the number
// position the symbol
// the symbol appears before the "(" or "-"
return b.indexOf(" $")>-1?(j=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(j=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=i(a._value,b,c),f<=1?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(f<g||f<h)&&(d=0),e.splice(d,0,o[p].currency.symbol+j),e=e.join("")):e=o[p].currency.symbol+j+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,j+o[p].currency.symbol),e=e.join("")):e=e+j+o[p].currency.symbol,e}function f(a,b,c){var d,e="",f=100*a._value;
// check for space before %
return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=i(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function g(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*b*60)/60),d=Math.round(a._value-60*b*60-60*c);return b+":"+(c<10?"0"+c:c)+":"+(d<10?"0"+d:d)}function h(a){var b=a.split(":"),c=0;
// turn hours and minutes into seconds and add them all up
// hours
// minutes
// seconds
// minutes
// seconds
return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function i(a,c,d){var e,f,g,h,i,j,k=!1,l=!1,m=!1,n="",r=!1,// force abbreviation to thousands
s=!1,// force abbreviation to millions
t=!1,// force abbreviation to billions
u=!1,// force abbreviation to trillions
v=!1,// force abbreviation
w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;
// check if number is zero and a custom zero format has been set
if(0===a&&null!==q)return q;
// see if we are formatting bytes
if(
// see if we should use parentheses for negative number or if we should prefix with a sign
// if both are present we default to parentheses
c.indexOf("(")>-1?(k=!0,c=c.slice(1,-1)):c.indexOf("+")>-1&&(l=!0,c=c.replace(/\+/g,"")),
// see if abbreviation is wanted
c.indexOf("a")>-1&&(
// check if abbreviation is specified
r=c.indexOf("aK")>=0,s=c.indexOf("aM")>=0,t=c.indexOf("aB")>=0,u=c.indexOf("aT")>=0,v=r||s||t||u,
// check for space before abbreviation
c.indexOf(" a")>-1?(n=" ",c=c.replace(" a","")):c=c.replace("a",""),y>=Math.pow(10,12)&&!v||u?(
// trillion
n+=o[p].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||t?(
// billion
n+=o[p].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||s?(
// million
n+=o[p].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||r)&&(
// thousand
n+=o[p].abbreviations.thousand,a/=Math.pow(10,3))),c.indexOf("b")>-1)for(
// check for space before
c.indexOf(" b")>-1?(w=" ",c=c.replace(" b","")):c=c.replace("b",""),g=0;g<=z.length;g++)if(e=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=e&&a<f){w+=z[g],e>0&&(a/=e);break}
// see if ordinal is wanted
// check for space before
// format number
return c.indexOf("o")>-1&&(c.indexOf(" o")>-1?(x=" ",c=c.replace(" o","")):c=c.replace("o",""),x+=o[p].ordinal(a)),c.indexOf("[.]")>-1&&(m=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],j=c.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=b(a,i[0].length+i[1].length,d,i[1].length)):A=b(a,i.length,d),h=A.split(".")[0],A=A.split(".")[1].length?o[p].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=b(a,null,d),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o[p].delimiters.thousands)),0===c.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x?x:"")+(n?n:"")+(w?w:"")+(k&&B?")":"")}/************************************
        Helpers
    ************************************/
function j(a,b){o[a]=b}/**
     * Computes the multiplier necessary to make x >= 1,
     * effectively eliminating miscalculations caused by
     * finite precision.
     */
function k(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}/**
     * Given a variable number of arguments, returns the maximum
     * multiplier that must be used to normalize an operation involving
     * all of them.
     */
function l(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var c=k(a),d=k(b);return c>d?c:d},-(1/0))}/************************************
        Constants
    ************************************/
var m,n="1.5.3",
// internal storage for language config files
o={},p="en",q=null,r="0,0",
// check for nodeJS
s="undefined"!=typeof module&&module.exports;/************************************
        Top Level Functions
    ************************************/
m=function(b){return m.isNumeral(b)?b=b.value():0===b||"undefined"==typeof b?b=0:Number(b)||(b=m.fn.unformat(b)),new a(Number(b))},
// version number
m.version=n,
// compare numeral object
m.isNumeral=function(b){return b instanceof a},
// This function will load languages and then set the global language.  If
// no arguments are passed in, it will simply return the current global
// language key.
m.language=function(a,b){if(!a)return p;if(a&&!b){if(!o[a])throw new Error("Unknown language : "+a);p=a}return!b&&o[a]||j(a,b),m},
// This function provides access to the loaded language data.  If
// no arguments are passed in, it will simply return the current
// global language object.
m.languageData=function(a){if(!a)return o[p];if(!o[a])throw new Error("Unknown language : "+a);return o[a]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(a){q="string"==typeof a?a:null},m.defaultFormat=function(a){r="string"==typeof a?a:"0.0"},/************************************
        Floating-point helpers
    ************************************/
// The floating-point helper functions and implementation
// borrows heavily from sinful.js: http://guipn.github.io/sinful.js/
/**
     * Array.prototype.reduce for browsers that don't support it
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Compatibility
     */
"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)
// At the moment all modern browsers, that support strict mode, have
// native implementation of Array.prototype.reduce. For instance, IE8
// does not support strict mode, so this check is actually useless.
throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),/************************************
        Numeral Prototype
    ************************************/
m.fn=a.prototype={clone:function(){return m(this)},format:function(a,b){return c(this,a?a:r,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:d(this,a?a:r)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b,d,e){return a+c*b}var c=l.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b,d,e){return a-c*b}var c=l.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b,c,d){var e=l(a,b);return a*e*(b*e)/(e*e)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b,c,d){var e=l(a,b);return a*e/(b*e)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(m(this._value).subtract(a).value())}},/************************************
        Exposing Numeral
    ************************************/
// CommonJS module is defined
s&&(module.exports=m),/*global ender:false */
"undefined"==typeof ender&&(
// here, `this` means `window` in the browser, or `global` on the server
// add `numeral` as a global object via a string identifier,
// for Closure Compiler 'advanced' mode
this.numeral=m),/*global define:false */
"function"==typeof define&&define.amd&&define("libs/numeral/numeral",[],function(){return m})}.call(this),define("generator/dictionary",[],function(){"use strict";return{maleFirstNames:["Abbott","Acevedo","Acosta","Adams","Adkins","Aguilar","Aguirre","Albert","Alexander","Alford","Allen","Allison","Alston","Alvarado","Alvarez","Anderson","Andrews","Anthony","Armstrong","Arnold","Ashley","Atkins","Atkinson","Austin","Avery","Avila","Ayala","Ayers","Bailey","Baird","Baker","Baldwin","Ball","Ballard","Banks","Barber","Barker","Barlow","Barnes","Barnett","Barr","Barrera","Barrett","Barron","Barry","Bartlett","Barton","Bass","Bates","Battle","Bauer","Baxter","Beach","Bean","Beard","Beasley","Beck","Becker","Bell","Bender","Benjamin","Bennett","Benson","Bentley","Benton","Berg","Berger","Bernard","Berry","Best","Bird","Bishop","Black","Blackburn","Blackwell","Blair","Blake","Blanchard","Blankenship","Blevins","Bolton","Bond","Bonner","Booker","Boone","Booth","Bowen","Bowers","Bowman","Boyd","Boyer","Boyle","Bradford","Bradley","Bradshaw","Brady","Branch","Bray","Brennan","Brewer","Bridges","Briggs","Bright","Britt","Brock","Brooks","Brown","Browning","Bruce","Bryan","Bryant","Buchanan","Buck","Buckley","Buckner","Bullock","Burch","Burgess","Burke","Burks","Burnett","Burns","Burris","Burt","Burton","Bush","Butler","Byers","Byrd","Cabrera","Cain","Calderon","Caldwell","Calhoun","Callahan","Camacho","Cameron","Campbell","Campos","Cannon","Cantrell","Cantu","Cardenas","Carey","Carlson","Carney","Carpenter","Carr","Carrillo","Carroll","Carson","Carter","Carver","Case","Casey","Cash","Castaneda","Castillo","Castro","Cervantes","Chambers","Chan","Chandler","Chaney","Chang","Chapman","Charles","Chase","Chavez","Chen","Cherry","Christensen","Christian","Church","Clark","Clarke","Clay","Clayton","Clements","Clemons","Cleveland","Cline","Cobb","Cochran","Coffey","Cohen","Cole","Coleman","Collier","Collins","Colon","Combs","Compton","Conley","Conner","Conrad","Contreras","Conway","Cook","Cooke","Cooley","Cooper","Copeland","Cortez","Cote","Cotton","Cox","Craft","Craig","Crane","Crawford","Crosby","Cross","Cruz","Cummings","Cunningham","Curry","Curtis","Dale","Dalton","Daniel","Daniels","Daugherty","Davenport","David","Davidson","Davis","Dawson","Day","Dean","Decker","Dejesus","Delacruz","Delaney","Deleon","Delgado","Dennis","Diaz","Dickerson","Dickson","Dillard","Dillon","Dixon","Dodson","Dominguez","Donaldson","Donovan","Dorsey","Dotson","Douglas","Downs","Doyle","Drake","Dudley","Duffy","Duke","Duncan","Dunlap","Dunn","Duran","Durham","Dyer","Eaton","Edwards","Elliott","Ellis","Ellison","Emerson","England","English","Erickson","Espinoza","Estes","Estrada","Evans","Everett","Ewing","Farley","Farmer","Farrell","Faulkner","Ferguson","Fernandez","Ferrell","Fields","Figueroa","Finch","Finley","Fischer","Fisher","Fitzgerald","Fitzpatrick","Fleming","Fletcher","Flores","Flowers","Floyd","Flynn","Foley","Forbes","Ford","Foreman","Foster","Fowler","Fox","Francis","Franco","Frank","Franklin","Franks","Frazier","Frederick","Freeman","French","Frost","Fry","Frye","Fuentes","Fuller","Fulton","Gaines","Gallagher","Gallegos","Galloway","Gamble","Garcia","Gardner","Garner","Garrett","Garrison","Garza","Gates","Gay","Gentry","George","Gibbs","Gibson","Gilbert","Giles","Gill","Gillespie","Gilliam","Gilmore","Glass","Glenn","Glover","Goff","Golden","Gomez","Gonzales","Gonzalez","Good","Goodman","Goodwin","Gordon","Gould","Graham","Grant","Graves","Gray","Green","Greene","Greer","Gregory","Griffin","Griffith","Grimes","Gross","Guerra","Guerrero","Guthrie","Gutierrez","Guy","Guzman","Hahn","Hale","Haley","Hall","Hamilton","Hammond","Hampton","Hancock","Haney","Hansen","Hanson","Hardin","Harding","Hardy","Harmon","Harper","Harrell","Harrington","Harris","Harrison","Hart","Hartman","Harvey","Hatfield","Hawkins","Hayden","Hayes","Haynes","Hays","Head","Heath","Hebert","Henderson","Hendricks","Hendrix","Henry","Hensley","Henson","Herman","Hernandez","Herrera","Herring","Hess","Hester","Hewitt","Hickman","Hicks","Higgins","Hill","Hines","Hinton","Hobbs","Hodge","Hodges","Hoffman","Hogan","Holcomb","Holden","Holder","Holland","Holloway","Holman","Holmes","Holt","Hood","Hooper","Hoover","Hopkins","Hopper","Horn","Horne","Horton","House","Houston","Howard","Howe","Howell","Hubbard","Huber","Hudson","Huff","Huffman","Hughes","Hull","Humphrey","Hunt","Hunter","Hurley","Hurst","Hutchinson","Hyde","Ingram","Irwin","Jackson","Jacobs","Jacobson","James","Jarvis","Jefferson","Jenkins","Jennings","Jensen","Jimenez","Johns","Johnson","Johnston","Jones","Jordan","Joseph","Joyce","Joyner","Juarez","Justice","Kane","Kaufman","Keith","Keller","Kelley","Kelly","Kemp","Kennedy","Kent","Kerr","Key","Kidd","Kim","King","Kinney","Kirby","Kirk","Kirkland","Klein","Kline","Knapp","Knight","Knowles","Knox","Koch","Kramer","Lamb","Lambert","Lancaster","Landry","Lane","Lang","Langley","Lara","Larsen","Larson","Lawrence","Lawson","Le","Leach","Leblanc","Lee","Leon","Leonard","Lester","Levine","Levy","Lewis","Lindsay","Lindsey","Little","Livingston","Lloyd","Logan","Long","Lopez","Lott","Love","Lowe","Lowery","Lucas","Luna","Lynch","Lynn","Lyons","Macdonald","Macias","Mack","Madden","Maddox","Maldonado","Malone","Mann","Manning","Marks","Marquez","Marsh","Marshall","Martin","Martinez","Mason","Massey","Mathews","Mathis","Matthews","Maxwell","May","Mayer","Maynard","Mayo","Mays","Mcbride","Mccall","Mccarthy","Mccarty","Mcclain","Mcclure","Mcconnell","Mccormick","Mccoy","Mccray","Mccullough","Mcdaniel","Mcdonald","Mcdowell","Mcfadden","Mcfarland","Mcgee","Mcgowan","Mcguire","Mcintosh","Mcintyre","Mckay","Mckee","Mckenzie","Mckinney","Mcknight","Mclaughlin","Mclean","Mcleod","Mcmahon","Mcmillan","Mcneil","Mcpherson","Meadows","Medina","Mejia","Melendez","Melton","Mendez","Mendoza","Mercado","Mercer","Merrill","Merritt","Meyer","Meyers","Michael","Middleton","Miles","Miller","Mills","Miranda","Mitchell","Molina","Monroe","Montgomery","Montoya","Moody","Moon","Mooney","Moore","Morales","Moran","Moreno","Morgan","Morin","Morris","Morrison","Morrow","Morse","Morton","Moses","Mosley","Moss","Mueller","Mullen","Mullins","Munoz","Murphy","Murray","Myers","Nash","Navarro","Neal","Nelson","Newman","Newton","Nguyen","Nichols","Nicholson","Nielsen","Nieves","Nixon","Noble","Noel","Nolan","Norman","Norris","Norton","Nunez","Obrien","Ochoa","Oconnor","Odom","Odonnell","Oliver","Olsen","Olson","Oneal","Oneil","Oneill","Orr","Ortega","Ortiz","Osborn","Osborne","Owen","Owens","Pace","Pacheco","Padilla","Page","Palmer","Park","Parker","Parks","Parrish","Parsons","Pate","Patel","Patrick","Patterson","Patton","Paul","Payne","Pearson","Peck","Pena","Pennington","Perez","Perkins","Perry","Peters","Petersen","Peterson","Petty","Phelps","Phillips","Pickett","Pierce","Pittman","Pitts","Pollard","Poole","Pope","Porter","Potter","Potts","Powell","Powers","Pratt","Preston","Price","Prince","Pruitt","Puckett","Pugh","Quinn","Ramirez","Ramos","Ramsey","Randall","Randolph","Rasmussen","Ratliff","Ray","Raymond","Reed","Reese","Reeves","Reid","Reilly","Reyes","Reynolds","Rhodes","Rice","Rich","Richard","Richards","Richardson","Richmond","Riddle","Riggs","Riley","Rios","Rivas","Rivera","Rivers","Roach","Robbins","Roberson","Roberts","Robertson","Robinson","Robles","Rocha","Rodgers","Rodriguez","Rodriquez","Rogers","Rojas","Rollins","Roman","Romero","Rosa","Rosales","Rosario","Rose","Ross","Roth","Rowe","Rowland","Roy","Ruiz","Rush","Russell","Russo","Rutledge","Ryan","Salas","Salazar","Salinas","Sampson","Sanchez","Sanders","Sandoval","Sanford","Santana","Santiago","Santos","Sargent","Saunders","Savage","Sawyer","Schmidt","Schneider","Schroeder","Schultz","Schwartz","Scott","Sears","Sellers","Serrano","Sexton","Shaffer","Shannon","Sharp","Sharpe","Shaw","Shelton","Shepard","Shepherd","Sheppard","Sherman","Shields","Short","Silva","Simmons","Simon","Simpson","Sims","Singleton","Skinner","Slater","Sloan","Small","Smith","Snider","Snow","Snyder","Solis","Solomon","Sosa","Soto","Sparks","Spears","Spence","Spencer","Stafford","Stanley","Stanton","Stark","Steele","Stein","Stephens","Stephenson","Stevens","Stevenson","Stewart","Stokes","Stone","Stout","Strickland","Strong","Stuart","Suarez","Sullivan","Summers","Sutton","Swanson","Sweeney","Sweet","Sykes","Talley","Tanner","Tate","Taylor","Terrell","Terry","Thomas","Thompson","Thornton","Tillman","Todd","Torres","Townsend","Tran","Travis","Trevino","Trujillo","Tucker","Turner","Tyler","Tyson","Underwood","Valdez","Valencia","Valentine","Valenzuela","Vance","Vang","Vargas","Vasquez","Vaughan","Vaughn","Vazquez","Vega","Velasquez","Velazquez","Velez","Villarreal","Vincent","Vinson","Wade","Wagner","Walker","Wall","Wallace","Waller","Walls","Walsh","Walter","Walters","Walton","Ward","Ware","Warner","Warren","Washington","Waters","Watkins","Watson","Watts","Weaver","Webb","Weber","Webster","Weeks","Weiss","Welch","Wells","West","Wheeler","Whitaker","White","Whitehead","Whitfield","Whitley","Whitney","Wiggins","Wilcox","Wilder","Wiley","Wilkerson","Wilkins","Wilkinson","William","Williams","Williamson","Willis","Wilson","Winters","Wise","Witt","Wolf","Wolfe","Wong","Wood","Woodard","Woods","Woodward","Wooten","Workman","Wright","Wyatt","Wynn","Yang","Yates","York","Young","Zamora","Zimmerman"],femaleFirstNames:["Abby","Abigail","Ada","Addie","Adela","Adele","Adeline","Adrian","Adriana","Adrienne","Agnes","Aida","Aileen","Aimee","Aisha","Alana","Alba","Alberta","Alejandra","Alexandra","Alexandria","Alexis","Alfreda","Alice","Alicia","Aline","Alisa","Alisha","Alison","Alissa","Allie","Allison","Allyson","Alma","Alta","Althea","Alyce","Alyson","Alyssa","Amalia","Amanda","Amber","Amelia","Amie","Amparo","Amy","Ana","Anastasia","Andrea","Angel","Angela","Angelia","Angelica","Angelina","Angeline","Angelique","Angelita","Angie","Anita","Ann","Anna","Annabelle","Anne","Annette","Annie","Annmarie","Antoinette","Antonia","April","Araceli","Arlene","Arline","Ashlee","Ashley","Audra","Audrey","Augusta","Aurelia","Aurora","Autumn","Ava","Avis","Barbara","Barbra","Beatrice","Beatriz","Becky","Belinda","Benita","Bernadette","Bernadine","Bernice","Berta","Bertha","Bertie","Beryl","Bessie","Beth","Bethany","Betsy","Bette","Bettie","Betty","Bettye","Beulah","Beverley","Beverly","Bianca","Billie","Blanca","Blanche","Bobbi","Bobbie","Bonita","Bonnie","Brandi","Brandie","Brandy","Brenda","Briana","Brianna","Bridget","Bridgett","Bridgette","Brigitte","Britney","Brittany","Brittney","Brooke","Caitlin","Callie","Camille","Candace","Candice","Candy","Cara","Carey","Carissa","Carla","Carlene","Carly","Carmela","Carmella","Carmen","Carol","Carole","Carolina","Caroline","Carolyn","Carrie","Casandra","Casey","Cassandra","Cassie","Catalina","Catherine","Cathleen","Cathryn","Cathy","Cecelia","Cecile","Cecilia","Celeste","Celia","Celina","Chandra","Charity","Charlene","Charlotte","Charmaine","Chasity","Chelsea","Cheri","Cherie","Cherry","Cheryl","Chris","Christa","Christi","Christian","Christie","Christina","Christine","Christy","Chrystal","Cindy","Claire","Clara","Clare","Clarice","Clarissa","Claudette","Claudia","Claudine","Cleo","Coleen","Colette","Colleen","Concepcion","Concetta","Connie","Constance","Consuelo","Cora","Corina","Corine","Corinne","Cornelia","Corrine","Courtney","Cristina","Crystal","Cynthia","Daisy","Dale","Dana","Danielle","Daphne","Darcy","Darla","Darlene","Dawn","Deana","Deann","Deanna","Deanne","Debbie","Debora","Deborah","Debra","Dee","Deena","Deidre","Deirdre","Delia","Della","Delores","Deloris","Dena","Denise","Desiree","Diana","Diane","Diann","Dianna","Dianne","Dina","Dionne","Dixie","Dollie","Dolly","Dolores","Dominique","Dona","Donna","Dora","Doreen","Doris","Dorothea","Dorothy","Dorthy","Earlene","Earline","Earnestine","Ebony","Eddie","Edith","Edna","Edwina","Effie","Eileen","Elaine","Elba","Eleanor","Elena","Elinor","Elisa","Elisabeth","Elise","Eliza","Elizabeth","Ella","Ellen","Elma","Elnora","Eloise","Elsa","Elsie","Elva","Elvia","Elvira","Emilia","Emily","Emma","Enid","Erica","Ericka","Erika","Erin","Erma","Erna","Ernestine","Esmeralda","Esperanza","Essie","Estela","Estella","Estelle","Ester","Esther","Ethel","Etta","Eugenia","Eula","Eunice","Eva","Evangelina","Evangeline","Eve","Evelyn","Faith","Fannie","Fanny","Fay","Faye","Felecia","Felicia","Fern","Flora","Florence","Florine","Flossie","Fran","Frances","Francesca","Francine","Francis","Francisca","Frankie","Freda","Freida","Frieda","Gabriela","Gabrielle","Gail","Gale","Gay","Gayle","Gena","Geneva","Genevieve","Georgette","Georgia","Georgina","Geraldine","Gertrude","Gilda","Gina","Ginger","Gladys","Glenda","Glenna","Gloria","Goldie","Grace","Gracie","Graciela","Greta","Gretchen","Guadalupe","Gwen","Gwendolyn","Haley","Hallie","Hannah","Harriet","Harriett","Hattie","Hazel","Heather","Heidi","Helen","Helena","Helene","Helga","Henrietta","Herminia","Hester","Hilary","Hilda","Hillary","Hollie","Holly","Hope","Ida","Ila","Ilene","Imelda","Imogene","Ina","Ines","Inez","Ingrid","Irene","Iris","Irma","Isabel","Isabella","Isabelle","Iva","Ivy","Jackie","Jacklyn","Jaclyn","Jacqueline","Jacquelyn","Jaime","James","Jami","Jamie","Jan","Jana","Jane","Janell","Janelle","Janet","Janette","Janice","Janie","Janine","Janis","Janna","Jannie","Jasmine","Jayne","Jean","Jeanette","Jeanie","Jeanine","Jeanne","Jeannette","Jeannie","Jeannine","Jenifer","Jenna","Jennie","Jennifer","Jenny","Jeri","Jerri","Jerry","Jessica","Jessie","Jewel","Jewell","Jill","Jillian","Jimmie","Jo","Joan","Joann","Joanna","Joanne","Jocelyn","Jodi","Jodie","Jody","Johanna","John","Johnnie","Jolene","Joni","Jordan","Josefa","Josefina","Josephine","Josie","Joy","Joyce","Juana","Juanita","Judith","Judy","Julia","Juliana","Julianne","Julie","Juliet","Juliette","June","Justine","Kaitlin","Kara","Karen","Kari","Karin","Karina","Karla","Karyn","Kasey","Kate","Katelyn","Katharine","Katherine","Katheryn","Kathie","Kathleen","Kathrine","Kathryn","Kathy","Katie","Katina","Katrina","Katy","Kay","Kaye","Kayla","Keisha","Kelley","Kelli","Kellie","Kelly","Kelsey","Kendra","Kenya","Keri","Kerri","Kerry","Kim","Kimberley","Kimberly","Kirsten","Kitty","Kris","Krista","Kristen","Kristi","Kristie","Kristin","Kristina","Kristine","Kristy","Krystal","Lacey","Lacy","Ladonna","Lakeisha","Lakisha","Lana","Lara","Latasha","Latisha","Latonya","Latoya","Laura","Laurel","Lauren","Lauri","Laurie","Laverne","Lavonne","Lawanda","Lea","Leah","Leann","Leanna","Leanne","Lee","Leigh","Leila","Lela","Lelia","Lena","Lenora","Lenore","Leola","Leona","Leonor","Lesa","Lesley","Leslie","Lessie","Leta","Letha","Leticia","Letitia","Lidia","Lila","Lilia","Lilian","Liliana","Lillian","Lillie","Lilly","Lily","Lina","Linda","Lindsay","Lindsey","Lisa","Liz","Liza","Lizzie","Lois","Lola","Lolita","Lora","Loraine","Lorena","Lorene","Loretta","Lori","Lorie","Lorna","Lorraine","Lorrie","Lottie","Lou","Louella","Louisa","Louise","Lourdes","Luann","Lucia","Lucile","Lucille","Lucinda","Lucy","Luella","Luisa","Lula","Lupe","Luz","Lydia","Lynda","Lynette","Lynn","Lynne","Lynnette","Mabel","Mable","Madeleine","Madeline","Madelyn","Madge","Mae","Magdalena","Maggie","Mai","Malinda","Mallory","Mamie","Mandy","Manuela","Mara","Marcella","Marci","Marcia","Marcie","Marcy","Margaret","Margarita","Margery","Margie","Margo","Margret","Marguerite","Mari","Maria","Marian","Mariana","Marianne","Maribel","Maricela","Marie","Marietta","Marilyn","Marina","Marion","Marisa","Marisol","Marissa","Maritza","Marjorie","Marla","Marlene","Marquita","Marsha","Marta","Martha","Martina","Marva","Mary","Maryann","Maryanne","Maryellen","Marylou","Matilda","Mattie","Maude","Maura","Maureen","Mavis","Maxine","May","Mayra","Meagan","Megan","Meghan","Melanie","Melba","Melinda","Melisa","Melissa","Melody","Melva","Mercedes","Meredith","Merle","Mia","Michael","Michele","Michelle","Milagros","Mildred","Millicent","Millie","Mindy","Minerva","Minnie","Miranda","Miriam","Misty","Mitzi","Mollie","Molly","Mona","Monica","Monique","Morgan","Muriel","Myra","Myrna","Myrtle","Nadia","Nadine","Nancy","Nanette","Nannie","Naomi","Natalia","Natalie","Natasha","Nelda","Nell","Nellie","Nettie","Neva","Nichole","Nicole","Nikki","Nina","Nita","Noelle","Noemi","Nola","Nona","Nora","Noreen","Norma","Odessa","Ofelia","Ola","Olga","Olive","Olivia","Ollie","Opal","Ophelia","Ora","Paige","Pam","Pamela","Pansy","Pat","Patrica","Patrice","Patricia","Patsy","Patti","Patty","Paula","Paulette","Pauline","Pearl","Pearlie","Peggy","Penelope","Penny","Petra","Phoebe","Phyllis","Polly","Priscilla","Queen","Rachael","Rachel","Rachelle","Rae","Ramona","Randi","Raquel","Reba","Rebecca","Rebekah","Regina","Rena","Rene","Renee","Reva","Reyna","Rhea","Rhoda","Rhonda","Rita","Robbie","Robert","Roberta","Robin","Robyn","Rochelle","Ronda","Rosa","Rosalie","Rosalind","Rosalinda","Rosalyn","Rosanna","Rosanne","Rosario","Rose","Roseann","Rosella","Rosemarie","Rosemary","Rosetta","Rosie","Roslyn","Rowena","Roxanne","Roxie","Ruby","Ruth","Ruthie","Sabrina","Sadie","Sallie","Sally","Samantha","Sandra","Sandy","Sara","Sarah","Sasha","Saundra","Savannah","Selena","Selma","Serena","Shana","Shanna","Shannon","Shari","Sharlene","Sharon","Sharron","Shauna","Shawn","Shawna","Sheena","Sheila","Shelby","Shelia","Shelley","Shelly","Sheree","Sheri","Sherri","Sherrie","Sherry","Sheryl","Shirley","Silvia","Simone","Socorro","Sofia","Sondra","Sonia","Sonja","Sonya","Sophia","Sophie","Stacey","Staci","Stacie","Stacy","Stefanie","Stella","Stephanie","Sue","Summer","Susan","Susana","Susanna","Susanne","Susie","Suzanne","Suzette","Sybil","Sylvia","Tabatha","Tabitha","Tamara","Tameka","Tamera","Tami","Tamika","Tammi","Tammie","Tammy","Tamra","Tania","Tanisha","Tanya","Tara","Tasha","Taylor","Teresa","Teri","Terra","Terri","Terrie","Terry","Tessa","Thelma","Theresa","Therese","Tia","Tiffany","Tina","Tisha","Tommie","Toni","Tonia","Tonya","Tracey","Traci","Tracie","Tracy","Tricia","Trina","Trisha","Trudy","Twila","Ursula","Valarie","Valeria","Valerie","Vanessa","Velma","Vera","Verna","Veronica","Vicki","Vickie","Vicky","Victoria","Vilma","Viola","Violet","Virgie","Virginia","Vivian","Vonda","Wanda","Wendi","Wendy","Whitney","Wilda","Willa","Willie","Wilma","Winifred","Winnie","Yesenia","Yolanda","Young","Yvette","Yvonne","Zelma"],surnames:["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes","Myers","Ford","Hamilton","Graham","Sullivan","Wallace","Woods","Cole","West","Jordan","Owens","Reynolds","Fisher","Ellis","Harrison","Gibson","Mcdonald","Cruz","Marshall","Ortiz","Gomez","Murray","Freeman","Wells","Webb","Simpson","Stevens","Tucker","Porter","Hunter","Hicks","Crawford","Henry","Boyd","Mason","Morales","Kennedy","Warren","Dixon","Ramos","Reyes","Burns","Gordon","Shaw","Holmes","Rice","Robertson","Hunt","Black","Daniels","Palmer","Mills","Nichols","Grant","Knight","Ferguson","Rose","Stone","Hawkins","Dunn","Perkins","Hudson","Spencer","Gardner","Stephens","Payne","Pierce","Berry","Matthews","Arnold","Wagner","Willis","Ray","Watkins","Olson","Carroll","Duncan","Snyder","Hart","Cunningham","Bradley","Lane","Andrews","Ruiz","Harper","Fox","Riley","Armstrong","Carpenter","Weaver","Greene","Lawrence","Elliott","Chavez","Sims","Austin","Peters","Kelley","Franklin","Lawson","Fields","Gutierrez","Ryan","Schmidt","Carr","Vasquez","Castillo","Wheeler","Chapman","Oliver","Montgomery","Richards","Williamson","Johnston","Banks","Meyer","Bishop","Mccoy","Howell","Alvarez","Morrison","Hansen","Fernandez","Garza","Harvey","Little","Burton","Stanley","Nguyen","George","Jacobs","Reid","Kim","Fuller","Lynch","Dean","Gilbert","Garrett","Romero","Welch","Larson","Frazier","Burke","Hanson","Day","Mendoza","Moreno","Bowman","Medina","Fowler","Brewer","Hoffman","Carlson","Silva","Pearson","Holland","Douglas","Fleming","Jensen","Vargas","Byrd","Davidson","Hopkins","May","Terry","Herrera","Wade","Soto","Walters","Curtis","Neal","Caldwell","Lowe","Jennings","Barnett","Graves","Jimenez","Horton","Shelton","Barrett","Obrien","Castro","Sutton","Gregory","Mckinney","Lucas","Miles","Craig","Rodriquez","Chambers","Holt","Lambert","Fletcher","Watts","Bates","Hale","Rhodes","Pena","Beck","Newman","Haynes","Mcdaniel","Mendez","Bush","Vaughn","Parks","Dawson","Santiago","Norris","Hardy","Love","Steele","Curry","Powers","Schultz","Barker","Guzman","Page","Munoz","Ball","Keller","Chandler","Weber","Leonard","Walsh","Lyons","Ramsey","Wolfe","Schneider","Mullins","Benson","Sharp","Bowen","Daniel","Barber","Cummings","Hines","Baldwin","Griffith","Valdez","Hubbard","Salazar","Reeves","Warner","Stevenson","Burgess","Santos","Tate","Cross","Garner","Mann","Mack","Moss","Thornton","Dennis","Mcgee","Farmer","Delgado","Aguilar","Vega","Glover","Manning","Cohen","Harmon","Rodgers","Robbins","Newton","Todd","Blair","Higgins","Ingram","Reese","Cannon","Strickland","Townsend","Potter","Goodwin","Walton","Rowe","Hampton","Ortega","Patton","Swanson","Joseph","Francis","Goodman","Maldonado","Yates","Becker","Erickson","Hodges","Rios","Conner","Adkins","Webster","Norman","Malone","Hammond","Flowers","Cobb","Moody","Quinn","Blake","Maxwell","Pope","Floyd","Osborne","Paul","Mccarthy","Guerrero","Lindsey","Estrada","Sandoval","Gibbs","Tyler","Gross","Fitzgerald","Stokes","Doyle","Sherman","Saunders","Wise","Colon","Gill","Alvarado","Greer","Padilla","Simon","Waters","Nunez","Ballard","Schwartz","Mcbride","Houston","Christensen","Klein","Pratt","Briggs","Parsons","Mclaughlin","Zimmerman","French","Buchanan","Moran","Copeland","Roy","Pittman","Brady","Mccormick","Holloway","Brock","Poole","Frank","Logan","Owen","Bass","Marsh","Drake","Wong","Jefferson","Park","Morton","Abbott","Sparks","Patrick","Norton","Huff","Clayton","Massey","Lloyd","Figueroa","Carson","Bowers","Roberson","Barton","Tran","Lamb","Harrington","Casey","Boone","Cortez","Clarke","Mathis","Singleton","Wilkins","Cain","Bryan","Underwood","Hogan","Mckenzie","Collier","Luna","Phelps","Mcguire","Allison","Bridges","Wilkerson","Nash","Summers","Atkins","Wilcox","Pitts","Conley","Marquez","Burnett","Richard","Cochran","Chase","Davenport","Hood","Gates","Clay","Ayala","Sawyer","Roman","Vazquez","Dickerson","Hodge","Acosta","Flynn","Espinoza","Nicholson","Monroe","Wolf","Morrow","Kirk","Randall","Anthony","Whitaker","Oconnor","Skinner","Ware","Molina","Kirby","Huffman","Bradford","Charles","Gilmore","Dominguez","Oneal","Bruce","Lang","Combs","Kramer","Heath","Hancock","Gallagher","Gaines","Shaffer","Short","Wiggins","Mathews","Mcclain","Fischer","Wall","Small","Melton","Hensley","Bond","Dyer","Cameron","Grimes","Contreras","Christian","Wyatt","Baxter","Snow","Mosley","Shepherd","Larsen","Hoover","Beasley","Glenn","Petersen","Whitehead","Meyers","Keith","Garrison","Vincent","Shields","Horn","Savage","Olsen","Schroeder","Hartman","Woodard","Mueller","Kemp","Deleon","Booth","Patel","Calhoun","Wiley","Eaton","Cline","Navarro","Harrell","Lester","Humphrey","Parrish","Duran","Hutchinson","Hess","Dorsey","Bullock","Robles","Beard","Dalton","Avila","Vance","Rich","Blackwell","York","Johns","Blankenship","Trevino","Salinas","Campos","Pruitt","Moses","Callahan","Golden","Montoya","Hardin","Guerra","Mcdowell","Carey","Stafford","Gallegos","Henson","Wilkinson","Booker","Merritt","Miranda","Atkinson","Orr","Decker","Hobbs","Preston","Tanner","Knox","Pacheco","Stephenson","Glass","Rojas","Serrano","Marks","Hickman","English","Sweeney","Strong","Prince","Mcclure","Conway","Walter","Roth","Maynard","Farrell","Lowery","Hurst","Nixon","Weiss","Trujillo","Ellison","Sloan","Juarez","Winters","Mclean","Randolph","Leon","Boyer","Villarreal","Mccall","Gentry","Carrillo","Kent","Ayers","Lara","Shannon","Sexton","Pace","Hull","Leblanc","Browning","Velasquez","Leach","Chang","House","Sellers","Herring","Noble","Foley","Bartlett","Mercado","Landry","Durham","Walls","Barr","Mckee","Bauer","Rivers","Everett","Bradshaw","Pugh","Velez","Rush","Estes","Dodson","Morse","Sheppard","Weeks","Camacho","Bean","Barron","Livingston","Middleton","Spears","Branch","Blevins","Chen","Kerr","Mcconnell","Hatfield","Harding","Ashley","Solis","Herman","Frost","Giles","Blackburn","William","Pennington","Woodward","Finley","Mcintosh","Koch","Best","Solomon","Mccullough","Dudley","Nolan","Blanchard","Rivas","Brennan","Mejia","Kane","Benton","Joyce","Buckley","Haley","Valentine","Maddox","Russo","Mcknight","Buck","Moon","Mcmillan","Crosby","Berg","Dotson","Mays","Roach","Church","Chan","Richmond","Meadows","Faulkner","Oneill","Knapp","Kline","Barry","Ochoa","Jacobson","Gay","Avery","Hendricks","Horne","Shepard","Hebert","Cherry","Cardenas","Mcintyre","Whitney","Waller","Holman","Donaldson","Cantu","Terrell","Morin","Gillespie","Fuentes","Tillman","Sanford","Bentley","Peck","Key","Salas","Rollins","Gamble","Dickson","Battle","Santana","Cabrera","Cervantes","Howe","Hinton","Hurley","Spence","Zamora","Yang","Mcneil","Suarez","Case","Petty","Gould","Mcfarland","Sampson","Carver","Bray","Rosario","Macdonald","Stout","Hester","Melendez","Dillon","Farley","Hopper","Galloway","Potts","Bernard","Joyner","Stein","Aguirre","Osborn","Mercer","Bender","Franco","Rowland","Sykes","Benjamin","Travis","Pickett","Crane","Sears","Mayo","Dunlap","Hayden","Wilder","Mckay","Coffey","Mccarty","Ewing","Cooley","Vaughan","Bonner","Cotton","Holder","Stark","Ferrell","Cantrell","Fulton","Lynn","Lott","Calderon","Rosa","Pollard","Hooper","Burch","Mullen","Fry","Riddle","Levy","David","Duke","Odonnell","Guy","Michael","Britt","Frederick","Daugherty","Berger","Dillard","Alston","Jarvis","Frye","Riggs","Chaney","Odom","Duffy","Fitzpatrick","Valenzuela","Merrill","Mayer","Alford","Mcpherson","Acevedo","Donovan","Barrera","Albert","Cote","Reilly","Compton","Raymond","Mooney","Mcgowan","Craft","Cleveland","Clemons","Wynn","Nielsen","Baird","Stanton","Snider","Rosales","Bright","Witt","Stuart","Hays","Holden","Rutledge","Kinney","Clements","Castaneda","Slater","Hahn","Emerson","Conrad","Burks","Delaney","Pate","Lancaster","Sweet","Justice","Tyson","Sharpe","Whitfield","Talley","Macias","Irwin","Burris","Ratliff","Mccray","Madden","Kaufman","Beach","Goff","Cash","Bolton","Mcfadden","Levine","Good","Byers","Kirkland","Kidd","Workman","Carney","Dale","Mcleod","Holcomb","England","Finch","Head","Burt","Hendrix","Sosa","Haney","Franks","Sargent","Nieves","Downs","Rasmussen","Bird","Hewitt","Lindsay","Le","Foreman","Valencia","Oneil","Delacruz","Vinson","Dejesus","Hyde","Forbes","Gilliam","Guthrie","Wooten","Huber","Barlow","Boyle","Mcmahon","Buckner","Rocha","Puckett","Langley","Knowles","Cooke","Velazquez","Whitley","Noel","Vang"],companies:["Accel","Accidency","Accruex","Accufarm","Accupharm","Accuprint","Accusage","Acium","Aclima","Acrodance","Acruex","Acumentor","Acusage","Adornica","Aeora","Affluex","Amril","Amtap","Amtas","Anacho","Anarco","Andershun","Andryx","Animalia","Anivet","Anixang","Anocha","Apex","Apexia","Apextri","Applica","Applidec","Applideck","Aquacine","Aquafire","Aquamate","Aquasseur","Aquasure","Aquazure","Aquoavo","Architax","Arctiq","Artiq","Artworlds","Asimiline","Assistia","Assistix","Assitia","Assurity","Atgen","Atomica","Austech","Austex","Autograte","Automon","Avenetro","Avit","Balooba","Baluba","Barkarama","Beadzza","Bedder","Bedlam","Besto","Bezal","Bicol","Biflex","Billmed","Biohab","Biolive","Biospan","Biotica","Bisba","Bitendrex","Bitrex","Bittor","Bizmatic","Blanet","Bleeko","Bleendot","Bluegrain","Bluplanet","Blurrybus","Boilcat","Boilicon","Boink","Bolax","Bostonic","Bovis","Brainclip","Brainquil","Bristo","Bugsall","Bulljuice","Bullzone","Bunga","Buzzmaker","Buzzness","Buzzopia","Buzzworks","Bytrex","Cablam","Calcu","Calcula","Callflex","Candecor","Canopoly","Capscreen","Caxt","Cedward","Cemention","Centice","Centree","Centregy","Centrexin","Centuria","Ceprene","Chillium","Chorizon","Cinaster","Cincyr","Cinesanct","Cipromox","Circum","Coash","Codact","Codax","Cofine","Cogentry","Cognicode","Colaire","Collaire","Columella","Combogen","Combogene","Combot","Comcubine","Comcur","Comdom","Comfirm","Comstar","Comstruct","Comtent","Comtest","Comtext","Comtour","Comtours","Comtract","Comtrail","Comtrak","Comtrek","Comvene","Comverges","Comvex","Comvey","Comveyer","Comveyor","Comvoy","Concility","Conferia","Confrenzy","Conjurica","Corecom","Corepan","Coriander","Cormoran","Corporana","Corpulse","Cosmetex","Cosmosis","Cowtown","Crustatia","Cubicide","Cubix","Cuizine","Cujo","Cyclonica","Cytrak","Cytrek","Cytrex","Dadabase","Daido","Daisu","Dancerity","Dancity","Danja","Darwinium","Datacator","Datagen","Datagene","Daycore","Decratex","Deepends","Delphide","Deminimum","Dentrex","Deviltoe","Digial","Digifad","Digigen","Digigene","Diginetic","Digiprint","Digique","Digirang","Digitalus","Dognosis","Dognost","Dogspa","Dogtown","Dragbot","Dreamia","Duflex","Duoflex","Dymi","Dyno","Earbang","Eargo","Earthmark","Earthplex","Earthpure","Earthwax","Earwax","Ebidco","Eclipsent","Eclipto","Ecolight","Ecosys","Ecrater","Ecratic","Ecraze","Ecstasia","Edecine","Egypto","Electonic","Elemantra","Elentrix","Elita","Elpro","Emergent","Emoltra","Empirica","Emtrac","Emtrak","Enaut","Endicil","Endipin","Endipine","Enerforce","Enersave","Enersol","Enervate","Enjola","Enomen","Enormo","Enquility","Entality","Enthaze","Entogrok","Entroflex","Entropix","Envire","Eplode","Eplosion","Equicom","Equitax","Equitox","Ersum","Escenta","Eschoir","Essensia","Eternis","Euron","Eventage","Eventex","Eventix","Everest","Evidends","Ewaves","Eweville","Exerta","Exiand","Exoblue","Exodoc","Exoplode","Exosis","Exospace","Exospeed","Exostream","Exoswitch","Exotechno","Exoteric","Exovent","Exozent","Exposa","Extragen","Extragene","Extrawear","Extremo","Extro","Eyeris","Eyewax","Ezent","Ezentia","Fanfare","Fangold","Farmage","Farmex","Fiberox","Fibrodyne","Filodyne","Firewax","Fishland","Fitcore","Fleetmix","Flexigen","Flotonic","Flum","Flumbo","Flyboyz","Fortean","Fossiel","Franscene","Freakin","Frenex","Frolix","Frosnex","Fuelton","Fuelworks","Furnafix","Furnigeer","Furnitech","Futuris","Futurity","Futurize","Gadtron","Gallaxia","Gaptec","Gazak","Geeketron","Geekfarm","Geekko","Geekmosis","Geeknet","Geekol","Geekola","Geekology","Geekosis","Geekular","Geekus","Geekwagon","Geeky","Genekom","Genesynk","Genmex","Genmom","Genmy","Geofarm","Geoform","Geoforma","Geologix","Geostele","Gink","Ginkle","Ginkogene","Glasstep","Gleamink","Globoil","Gluid","Glukgluk","Gogol","Goko","Golistic","Gology","Gonkle","Gorganic","Gracker","Grainspot","Greeker","Grok","Gronk","Grupoli","Gushkool","Gynk","Gynko","Hairport","Halap","Handshake","Harmoney","Hatology","Hawkster","Helixo","Hinway","Hivedom","Homelux","Hometown","Honotron","Hopeli","Hotcakes","Housedown","Hydrocom","Hyplex","Icology","Idealis","Idego","Idetica","Illumity","Imageflow","Imaginart","Imant","Imkan","Immunics","Imperium","Incubus","Indexia","Inear","Infotrips","Injoy","Inquala","Inrt","Insectus","Insource","Insuresys","Insurety","Insurity","Insuron","Interfind","Intergeek","Interloo","Interodeo","Intradisk","Intrawear","Inventure","Iplax","Irack","Isbol","Isodrive","Isologia","Isologica","Isologics","Isologix","Isonus","Isoplex","Isopop","Isosphere","Isostream","Isosure","Isoswitch","Isoternia","Isotrack","Isotronic","Izzby","Jamnation","Jasper","Jetsilk","Jimbies","Joviold","Jumpstack","Junipoor","Kage","Kaggle","Kangle","Katakana","Keeg","Keengen","Kegular","Kenegy","Kengen","Kidgrease","Kidstock","Kiggle","Kindaloo","Kinetica","Kineticut","Kiosk","Klugger","Kneedles","Knowlysis","Koffee","Kog","Kongene","Kongle","Konnect","Koogle","Kozgene","Krag","Kraggle","Krog","Kyagoro","Kyaguru","Letpro","Lexicondo","Limage","Limozen","Lingoage","Liquicom","Liquidoc","Locazone","Lotron","Lovepad","Ludak","Lumbrex","Lunchpad","Lunchpod","Luxuria","Lyria","Lyrichord","Macronaut","Magmina","Magnafone","Magneato","Magnemo","Magnina","Maineland","Makingway","Malathion","Mangelica","Manglo","Mantrix","Mantro","Manufact","Marketoid","Maroptic","Marqet","Martgo","Marvane","Matrixity","Maxemia","Maximind","Mazuda","Medalert","Medcom","Medesign","Medicroix","Medifax","Mediot","Medmex","Megall","Melbacor","Memora","Menbrain","Metroz","Microluxe","Micronaut","Minga","Miraclis","Miracula","Mitroc","Mixers","Mobildata","Moltonic","Momentia","Mondicil","Moreganic","Motovate","Multiflex","Multron","Musanpoly","Musaphics","Musix","Myopium","Namebox","Namegen","Navir","Naxdis","Nebulean","Neocent","Neptide","Netagy","Netbook","Neteria","Netility","Netplax","Netplode","Netropic","Netur","Neurocell","Newcube","Nexgene","Nikuda","Nimon","Nipaz","Niquent","Nitracyr","Nixelt","Noralex","Norali","Norsul","Norsup","Nspire","Nurali","Nurplex","Nutralab","Oatfarm","Obliq","Obones","Oceanica","Octocore","Ohmnet","Olucore","Olympix","Omatom","Omnigog","Ontagene","Ontality","Opportech","Opticall","Opticom","Opticon","Optique","Optyk","Orbalix","Orbaxter","Orbean","Orbiflex","Orbin","Orbixtar","Orboid","Organica","Oronoko","Otherside","Otherway","Oulu","Ovation","Overfork","Overplex","Ovium","Ovolo","Ozean","Panzent","Papricut","Paprikut","Paragonia","Parcoe","Parleynet","Pasturia","Pathways","Pawnagra","Pearlesex","Pearlessa","Perkle","Permadyne","Peticular","Petigems","Pharmacon","Pharmex","Pheast","Pholio","Phormula","Photobin","Phuel","Pigzart","Pivitol","Plasmos","Plasmosis","Plasmox","Plasto","Playce","Plexia","Plutorque","Podunk","Polarax","Polaria","Polarium","Poochies","Portaline","Portalis","Portica","Portico","Poshome","Powernet","Premiant","Primordia","Printspan","Prismatic","Proflex","Progenex","Prosely","Prosure","Protodyne","Providco","Prowaste","Proxsoft","Pulze","Puria","Pushcart","Pyramax","Pyrami","Pyramia","Pyramis","Qaboos","Qiao","Qimonk","Qnekt","Qot","Quadeebo","Quailcom","Qualitern","Qualitex","Quantalia","Quantasis","Quarex","Quarmony","Quarx","Quilch","Quility","Quilk","Quilm","Quiltigen","Quinex","Quintity","Quizka","Quizmo","Quonata","Quonk","Quordate","Quotezart","Radiantix","Rameon","Ramjob","Realmo","Realysis","Recognia","Recrisys","Recritube","Remold","Remotion","Renovize","Repetwire","Retrack","Retrotex","Reversus","Roboid","Rockabye","Rocklogic","Rockyard","Rodemco","Rodeocean","Rodeology","Rodeomad","Ronbert","Ronelon","Rooforia","Rotodyne","Roughies","Rubadub","Rugstars","Sarasonic","Satiance","Savvy","Scentric","Scenty","Schoolio","Sealoud","Securia","Senmao","Senmei","Sensate","Sentia","Sequitur","Shadease","Shepard","Shopabout","Signidyne","Signity","Silodyne","Singavera","Skinserve","Skybold","Skyplex","Slambda","Slax","Slofast","Sloganaut","Slumberia","Snacktion","Snips","Snorus","Snowpoke","Softmicro","Solaren","Solgan","Songbird","Songlines","Sonique","Soprano","Spacewax","Speedbolt","Spherix","Splinx","Sportan","Springbee","Squish","Steelfab","Steeltab","Stelaecor","Stockpost","Straloy","Stralum","Strezzo","Strozen","Stucco","Sulfax","Sultrax","Sultraxin","Sunclipse","Supportal","Supremia","Surelogic","Suremax","Sureplex","Suretech","Sustenza","Sybixtex","Synkgen","Syntac","Talae","Talendula","Talkalot","Talkola","Tasmania","Techade","Techmania","Techtrix","Telepark","Telequiet","Tellifly","Telpod","Temorak","Teraprene","Terascape","Terragen","Terrago","Terrasys","Tersanki","Tetak","Tetratrex","Thredz","Tingles","Tourmania","Toyletry","Translink","Trasola","Tribalog","Tripsch","Trollery","Tropoli","Tropolis","Tsunamia","Tubalum","Tubesys","Turnabout","Turnling","Twiggery","Twiist","Typhonica","Uberlux","Ultrasure","Ultrimax","Uncorp","Undertap","Uneeq","Uni","Unia","Unisure","Uniworld","Unq","Updat","Uplinx","Urbanshee","Utara","Utarian","Uxmox","Valpreal","Valreda","Vantage","Velity","Velos","Vendblend","Venoflex","Veraq","Verbus","Vertide","Verton","Vetron","Viagrand","Viagreat","Viasia","Vicon","Vidto","Vinch","Viocular","Virva","Virxo","Visalia","Visualix","Vitricomp","Vixo","Voipa","Volax","Voratak","Vortexaco","Vurbo","Waab","Waretel","Waterbaby","Wazzu","Webiotic","Wrapture","Xanide","Xelegyl","Xerex","Xeronk","Xiix","Xinware","Xixan","Xleen","Xoggle","Xplor","Xsports","Xth","Xumonk","Xurban","Xylar","Xymonk","Xyqag","Yogasm","Yurture","Zaggle","Zaggles","Zaj","Zanilla","Zanity","Zanymax","Zaphire","Zappix","Zaya","Zboo","Zeam","Zedalis","Zenco","Zenolux","Zensor","Zensure","Zensus","Zenthall","Zentia","Zentility","Zentime","Zentix","Zentry","Zentury","Zepitope","Zerbina","Zerology","Zialactic","Zidant","Zidox","Ziggles","Zilch","Zilencio","Zilidium","Zilla","Zillacom","Zillacon","Zillactic","Zilladyne","Zillan","Zillanet","Zillar","Zillatide","Zillidium","Zilodyne","Zilphur","Zinca","Ziore","Zipak","Zizzle","Zoarere","Zogak","Zoid","Zoinage","Zolar","Zolarex","Zolarity","Zolavo","Zomboid","Zork","Zorromop","Zosis","Zounds","Zoxy","Zuvy","Zyple","Zytrac","Zytrax","Zytrek","Zytrex"],
countries:[{abbr:"AF",name:"Afghanistan"},{abbr:"AL",name:"Albania"},{abbr:"DZ",name:"Algeria"},{abbr:"AS",name:"American Samoa"},{abbr:"AD",name:"Andorra"},{abbr:"AO",name:"Angola"},{abbr:"AI",name:"Anguilla"},{abbr:"AQ",name:"Antarctica"},{abbr:"AG",name:"Antigua and Barbuda"},{abbr:"AR",name:"Argentina"},{abbr:"AM",name:"Armenia"},{abbr:"AW",name:"Aruba"},{abbr:"AU",name:"Australia"},{abbr:"AT",name:"Austria"},{abbr:"AZ",name:"Azerbaijan"},{abbr:"BS",name:"Bahamas"},{abbr:"BH",name:"Bahrain"},{abbr:"BD",name:"Bangladesh"},{abbr:"BB",name:"Barbados"},{abbr:"BY",name:"Belarus"},{abbr:"BE",name:"Belgium"},{abbr:"BZ",name:"Belize"},{abbr:"BJ",name:"Benin"},{abbr:"BM",name:"Bermuda"},{abbr:"BT",name:"Bhutan"},{abbr:"BO",name:"Bolivia"},{abbr:"BA",name:"Bosnia and Herzegovina"},{abbr:"BW",name:"Botswana"},{abbr:"BV",name:"Bouvet Island"},{abbr:"BR",name:"Brazil"},{abbr:"IO",name:"British Indian Ocean Territory"},{abbr:"BN",name:"Brunei Darussalam"},{abbr:"BG",name:"Bulgaria"},{abbr:"BF",name:"Burkina Faso"},{abbr:"BI",name:"Burundi"},{abbr:"KH",name:"Cambodia"},{abbr:"CM",name:"Cameroon"},{abbr:"CA",name:"Canada"},{abbr:"CV",name:"Cape Verde"},{abbr:"KY",name:"Cayman Islands"},{abbr:"CF",name:"Central African Republic"},{abbr:"TD",name:"Chad"},{abbr:"CL",name:"Chile"},{abbr:"CN",name:"China"},{abbr:"CX",name:"Christmas Island"},{abbr:"CC",name:"Cocos (Keeling Islands)"},{abbr:"CO",name:"Colombia"},{abbr:"KM",name:"Comoros"},{abbr:"CG",name:"Congo"},{abbr:"CK",name:"Cook Islands"},{abbr:"CR",name:"Costa Rica"},{abbr:"CI",name:"Cote D'Ivoire (Ivory Coast)"},{abbr:"HR",name:"Croatia (Hrvatska)"},{abbr:"CU",name:"Cuba"},{abbr:"CY",name:"Cyprus"},{abbr:"CZ",name:"Czech Republic"},{abbr:"DK",name:"Denmark"},{abbr:"DJ",name:"Djibouti"},{abbr:"DM",name:"Dominica"},{abbr:"DO",name:"Dominican Republic"},{abbr:"TP",name:"East Timor"},{abbr:"EC",name:"Ecuador"},{abbr:"EG",name:"Egypt"},{abbr:"SV",name:"El Salvador"},{abbr:"GQ",name:"Equatorial Guinea"},{abbr:"ER",name:"Eritrea"},{abbr:"EE",name:"Estonia"},{abbr:"ET",name:"Ethiopia"},{abbr:"FK",name:"Falkland Islands (Malvinas)"},{abbr:"FO",name:"Faroe Islands"},{abbr:"FJ",name:"Fiji"},{abbr:"FI",name:"Finland"},{abbr:"FR",name:"France"},{abbr:"FX",name:"France, Metropolitan"},{abbr:"GF",name:"French Guiana"},{abbr:"PF",name:"French Polynesia"},{abbr:"TF",name:"French Southern Territories"},{abbr:"GA",name:"Gabon"},{abbr:"GM",name:"Gambia"},{abbr:"GE",name:"Georgia"},{abbr:"DE",name:"Germany"},{abbr:"GH",name:"Ghana"},{abbr:"GI",name:"Gibraltar"},{abbr:"GR",name:"Greece"},{abbr:"GL",name:"Greenland"},{abbr:"GD",name:"Grenada"},{abbr:"GP",name:"Guadeloupe"},{abbr:"GU",name:"Guam"},{abbr:"GT",name:"Guatemala"},{abbr:"GN",name:"Guinea"},{abbr:"GW",name:"Guinea-Bissau"},{abbr:"GY",name:"Guyana"},{abbr:"HT",name:"Haiti"},{abbr:"HM",name:"Heard and McDonald Islands"},{abbr:"HN",name:"Honduras"},{abbr:"HK",name:"Hong Kong"},{abbr:"HU",name:"Hungary"},{abbr:"IS",name:"Iceland"},{abbr:"IN",name:"India"},{abbr:"ID",name:"Indonesia"},{abbr:"IR",name:"Iran"},{abbr:"IQ",name:"Iraq"},{abbr:"IE",name:"Ireland"},{abbr:"IL",name:"Israel"},{abbr:"IT",name:"Italy"},{abbr:"JM",name:"Jamaica"},{abbr:"JP",name:"Japan"},{abbr:"JO",name:"Jordan"},{abbr:"KZ",name:"Kazakhstan"},{abbr:"KE",name:"Kenya"},{abbr:"KI",name:"Kiribati"},{abbr:"KP",name:"Korea (North)"},{abbr:"KR",name:"Korea (South)"},{abbr:"KW",name:"Kuwait"},{abbr:"KG",name:"Kyrgyzstan"},{abbr:"LA",name:"Laos"},{abbr:"LV",name:"Latvia"},{abbr:"LB",name:"Lebanon"},{abbr:"LS",name:"Lesotho"},{abbr:"LR",name:"Liberia"},{abbr:"LY",name:"Libya"},{abbr:"LI",name:"Liechtenstein"},{abbr:"LT",name:"Lithuania"},{abbr:"LU",name:"Luxembourg"},{abbr:"MO",name:"Macau"},{abbr:"MK",name:"Macedonia"},{abbr:"MG",name:"Madagascar"},{abbr:"MW",name:"Malawi"},{abbr:"MY",name:"Malaysia"},{abbr:"MV",name:"Maldives"},{abbr:"ML",name:"Mali"},{abbr:"MT",name:"Malta"},{abbr:"MH",name:"Marshall Islands"},{abbr:"MQ",name:"Martinique"},{abbr:"MR",name:"Mauritania"},{abbr:"MU",name:"Mauritius"},{abbr:"YT",name:"Mayotte"},{abbr:"MX",name:"Mexico"},{abbr:"FM",name:"Micronesia"},{abbr:"MD",name:"Moldova"},{abbr:"MC",name:"Monaco"},{abbr:"MN",name:"Mongolia"},{abbr:"MS",name:"Montserrat"},{abbr:"MA",name:"Morocco"},{abbr:"MZ",name:"Mozambique"},{abbr:"MM",name:"Myanmar"},{abbr:"NA",name:"Namibia"},{abbr:"NR",name:"Nauru"},{abbr:"NP",name:"Nepal"},{abbr:"NL",name:"Netherlands"},{abbr:"AN",name:"Netherlands Antilles"},{abbr:"NC",name:"New Caledonia"},{abbr:"NZ",name:"New Zealand"},{abbr:"NI",name:"Nicaragua"},{abbr:"NE",name:"Niger"},{abbr:"NG",name:"Nigeria"},{abbr:"NU",name:"Niue"},{abbr:"NF",name:"Norfolk Island"},{abbr:"MP",name:"Northern Mariana Islands"},{abbr:"NO",name:"Norway"},{abbr:"OM",name:"Oman"},{abbr:"PK",name:"Pakistan"},{abbr:"PW",name:"Palau"},{abbr:"PA",name:"Panama"},{abbr:"PG",name:"Papua New Guinea"},{abbr:"PY",name:"Paraguay"},{abbr:"PE",name:"Peru"},{abbr:"PH",name:"Philippines"},{abbr:"PN",name:"Pitcairn"},{abbr:"PL",name:"Poland"},{abbr:"PT",name:"Portugal"},{abbr:"PR",name:"Puerto Rico"},{abbr:"QA",name:"Qatar"},{abbr:"RE",name:"Reunion"},{abbr:"RO",name:"Romania"},{abbr:"RU",name:"Russian Federation"},{abbr:"RW",name:"Rwanda"},{abbr:"KN",name:"Saint Kitts and Nevis"},{abbr:"LC",name:"Saint Lucia"},{abbr:"VC",name:"Saint Vincent and The Grenadines"},{abbr:"WS",name:"Samoa"},{abbr:"SM",name:"San Marino"},{abbr:"ST",name:"Sao Tome and Principe"},{abbr:"SA",name:"Saudi Arabia"},{abbr:"SN",name:"Senegal"},{abbr:"SC",name:"Seychelles"},{abbr:"SL",name:"Sierra Leone"},{abbr:"SG",name:"Singapore"},{abbr:"SK",name:"Slovak Republic"},{abbr:"SI",name:"Slovenia"},{abbr:"SB",name:"Solomon Islands"},{abbr:"SO",name:"Somalia"},{abbr:"ZA",name:"South Africa"},{abbr:"GS",name:"S. Georgia and S. Sandwich Isls."},{abbr:"ES",name:"Spain"},{abbr:"LK",name:"Sri Lanka"},{abbr:"SH",name:"St. Helena"},{abbr:"PM",name:"St. Pierre and Miquelon"},{abbr:"SD",name:"Sudan"},{abbr:"SR",name:"Suriname"},{abbr:"SJ",name:"Svalbard and Jan Mayen Islands"},{abbr:"SZ",name:"Swaziland"},{abbr:"SE",name:"Sweden"},{abbr:"CH",name:"Switzerland"},{abbr:"SY",name:"Syria"},{abbr:"TW",name:"Taiwan"},{abbr:"TJ",name:"Tajikistan"},{abbr:"TZ",name:"Tanzania"},{abbr:"TH",name:"Thailand"},{abbr:"TG",name:"Togo"},{abbr:"TK",name:"Tokelau"},{abbr:"TO",name:"Tonga"},{abbr:"TT",name:"Trinidad and Tobago"},{abbr:"TN",name:"Tunisia"},{abbr:"TR",name:"Turkey"},{abbr:"TM",name:"Turkmenistan"},{abbr:"TC",name:"Turks and Caicos Islands"},{abbr:"TV",name:"Tuvalu"},{abbr:"UG",name:"Uganda"},{abbr:"UA",name:"Ukraine"},{abbr:"AE",name:"United Arab Emirates"},{abbr:"UK",name:"United Kingdom"},{abbr:"US",name:"United States"},{abbr:"UM",name:"US Minor Outlying Islands"},{abbr:"UY",name:"Uruguay"},{abbr:"UZ",name:"Uzbekistan"},{abbr:"VU",name:"Vanuatu"},{abbr:"VA",name:"Vatican City State (Holy See)"},{abbr:"VE",name:"Venezuela"},{abbr:"VN",name:"Viet Nam"},{abbr:"VG",name:"Virgin Islands (British)"},{abbr:"VI",name:"Virgin Islands (US)"},{abbr:"WF",name:"Wallis and Futuna Islands"},{abbr:"EH",name:"Western Sahara"},{abbr:"YE",name:"Yemen"},{abbr:"YU",name:"Yugoslavia"},{abbr:"ZR",name:"Zaire"},{abbr:"ZM",name:"Zambia"},{abbr:"ZW",name:"Zimbabwe"}],states:[{name:"Alabama",abbr:"AL"},{name:"Alaska",abbr:"AK"},{name:"American Samoa",abbr:"AS"},{name:"Arizona",abbr:"AZ"},{name:"Arkansas",abbr:"AR"},{name:"California",abbr:"CA"},{name:"Colorado",abbr:"CO"},{name:"Connecticut",abbr:"CT"},{name:"Delaware",abbr:"DE"},{name:"District Of Columbia",abbr:"DC"},{name:"Federated States Of Micronesia",abbr:"FM"},{name:"Florida",abbr:"FL"},{name:"Georgia",abbr:"GA"},{name:"Guam",abbr:"GU"},{name:"Hawaii",abbr:"HI"},{name:"Idaho",abbr:"ID"},{name:"Illinois",abbr:"IL"},{name:"Indiana",abbr:"IN"},{name:"Iowa",abbr:"IA"},{name:"Kansas",abbr:"KS"},{name:"Kentucky",abbr:"KY"},{name:"Louisiana",abbr:"LA"},{name:"Maine",abbr:"ME"},{name:"Marshall Islands",abbr:"MH"},{name:"Maryland",abbr:"MD"},{name:"Massachusetts",abbr:"MA"},{name:"Michigan",abbr:"MI"},{name:"Minnesota",abbr:"MN"},{name:"Mississippi",abbr:"MS"},{name:"Missouri",abbr:"MO"},{name:"Montana",abbr:"MT"},{name:"Nebraska",abbr:"NE"},{name:"Nevada",abbr:"NV"},{name:"New Hampshire",abbr:"NH"},{name:"New Jersey",abbr:"NJ"},{name:"New Mexico",abbr:"NM"},{name:"New York",abbr:"NY"},{name:"North Carolina",abbr:"NC"},{name:"North Dakota",abbr:"ND"},{name:"Northern Mariana Islands",abbr:"MP"},{name:"Ohio",abbr:"OH"},{name:"Oklahoma",abbr:"OK"},{name:"Oregon",abbr:"OR"},{name:"Palau",abbr:"PW"},{name:"Pennsylvania",abbr:"PA"},{name:"Puerto Rico",abbr:"PR"},{name:"Rhode Island",abbr:"RI"},{name:"South Carolina",abbr:"SC"},{name:"South Dakota",abbr:"SD"},{name:"Tennessee",abbr:"TN"},{name:"Texas",abbr:"TX"},{name:"Utah",abbr:"UT"},{name:"Vermont",abbr:"VT"},{name:"Virgin Islands",abbr:"VI"},{name:"Virginia",abbr:"VA"},{name:"Washington",abbr:"WA"},{name:"West Virginia",abbr:"WV"},{name:"Wisconsin",abbr:"WI"},{name:"Wyoming",abbr:"WY"}],cities:["Aberdeen","Abiquiu","Abrams","Accoville","Ada","Adamstown","Adelino","Advance","Aguila","Ahwahnee","Alafaya","Alamo","Albany","Albrightsville","Alden","Alderpoint","Alfarata","Allamuchy","Alleghenyville","Allendale","Allensworth","Allentown","Allison","Aurora","Austinburg","Avalon","Avoca","Axis","Babb","Baden","Bagtown","Bainbridge","Baker","Bakersville","Ballico","Balm","Bancroft","Bangor","Bannock","Barclay","Barrelville","Barronett","Barstow","Bartley","Bartonsville","Bascom","Basye","Bath","Bawcomville","Bayview","Beason","Beaulieu","Beaverdale","Bedias","Beechmont","Belfair","Belgreen","Bellamy","Belleview","Bellfountain","Belmont","Belva","Belvoir","Bend","Bendon","Bennett","Benson","Bentley","Bentonville","Bergoo","Berlin","Berwind","Bethany","Bethpage","Beyerville","Biddle","Biehle","Bison","Blackgum","Bladensburg","Blairstown","Blanco","Blandburg","Blanford","Blende","Blodgett","Bloomington","Blue","Bluetown","Bluffview","Bodega","Boling","Bonanza","Boomer","Boonville","Bordelonville","Bourg","Bowden","Bowie","Bowmansville","Boyd","Boykin","Bradenville","Brady","Brambleton","Brandermill","Brandywine","Brantleyville","Brazos","Brecon","Breinigsville","Brenton","Brethren","Brewster","Bridgetown","Broadlands","Brogan","Brookfield","Brooktrails","Brownlee","Brownsville","Brule","Brutus","Buxton","Bynum","Byrnedale","Caberfae","Cade","Caledonia","Callaghan","Caln","Calpine","Calvary","Calverton","Camas","Camino","Campo","Camptown","Canby","Cannondale","Caron","Canoochee","Canterwood","Carbonville","Carlos","Carlton","Caroleen","Caroline","Carrizo","Carrsville","Cartwright","Cascades","Cashtown","Caspar","Cassel","Castleton","Cataract","Catharine","Catherine","Cavalero","Cawood","Cazadero","Cecilia","Cedarville","Celeryville","Centerville","Century","Cetronia","Chalfant","Chamberino","Chamizal","Chaparrito","Chapin","Charco","Chase","Chautauqua","Chelsea","Chemung","Cherokee","Chesapeake","Chesterfield","Chestnut","Chical","Chicopee","Chilton","Chloride","Choctaw","Chumuckla","Churchill","Clara","Clarence","Clarksburg","Clarktown","Clay","Clayville","Cleary","Cliff","Cliffside","Clinton","Cloverdale","Coaldale","Coalmont","Cobbtown","Cochranville","Coinjock","Coldiron","Coleville","Collins","Coloma","Colton","Columbus","Como","Comptche","Concho","Condon","Conestoga","Connerton","Convent","Conway","Coral","Corinne","Cornfields","Cornucopia","Corriganville","Cotopaxi","Coultervillle","Courtland","Coventry","Cowiche","Coyote","Craig","Crawfordsville","Crayne","Crenshaw","Cresaptown","Cressey","Crisman","Croom","Crown","Crucible","Crumpler","Cucumber","Cumberland","Cumminsville","Curtice","Cutter","Cuylerville","Dahlen","Dale","Dalton","Dana","Dante","Darbydale","Dargan","Darlington","Darrtown","Datil","Davenport","Dawn","Day","Deercroft","Defiance","Delco","Dellview","Delshire","Deltaville","Delwood","Denio","Dennard","Deputy","Derwood","Deseret","Detroit","Devon","Dexter","Diaperville","Disautel","Dixie","Dixonville","Dodge","Dola","Dorneyville","Dotsero","Dowling","Downsville","Dragoon","Draper","Driftwood","Drummond","Drytown","Dubois","Dunbar","Dundee","Dunlo","Dunnavant","Dupuyer","Durham","Duryea","Dyckesville","Eagletown","Eagleville","Eastmont","Eastvale","Ebro","Echo","Eden","Edenburg","Edgar","Edgewater","Edinburg","Edmund","Edneyville","Efland","Eggertsville","Elbert","Elfrida","Elizaville","Ellerslie","Elliott","Elliston","Elrama","Elwood","Emerald","Emison","Emory","Enetai","Englevale","Enlow","Enoree","Epworth","Ernstville","Escondida","Esmont","Eureka","Evergreen","Ezel","Fairacres","Fairfield","Fairforest","Fairhaven","Fairlee","Fairmount","Fairview","Falconaire","Falmouth","Fannett","Farmers","Farmington","Faxon","Faywood","Fedora","Felt","Ferney","Fidelis","Fillmore","Finderne","Fingerville","Finzel","Fivepointville","Flintville","Florence","Floris","Floriston","Fontanelle","Forbestown","Forestburg","Foscoe","Fostoria","Fowlerville","Foxworth","Frank","Franklin","Fredericktown","Freeburn","Freelandville","Freetown","Fresno","Frierson","Frizzleburg","Fruitdale","Frystown","Fulford","Gadsden","Galesville","Gallina","Gambrills","Garberville","Gardiner","Gardners","Garfield","Garnet","Gasquet","Genoa","Gerber","Germanton","Gerton","Geyserville","Gibbsville","Gibsonia","Gila","Gilgo","Gilmore","Glasgow","Glenbrook","Glendale","Glenshaw","Glenville","Glidden","Gloucester","Golconda","Goldfield","Goochland","Goodville","Gordon","Gorham","Gorst","Gouglersville","Graball","Gracey","Grahamtown","Grandview","Graniteville","Grantville","Grapeview","Gratton","Grayhawk","Grazierville","Greenbackville","Greenbush","Greenfields","Greenock","Greensburg","Greenwich","Greer","Grenelefe","Grill","Grimsley","Groton","Groveville","Guilford","Gulf","Guthrie","Gwynn","Hachita","Hackneyville","Haena","Hailesboro","Hall","Hamilton","Hampstead","Hannasville","Hanover","Harborton","Hardyville","Haring","Harleigh","Harmon","Harold","Harrison","Harrodsburg","Hartsville/Hartley","Harviell","Hasty","Hatteras","Hayden","Hayes","Healy","Hebron","Hegins","Heil","Helen","Hemlock","Hendersonville","Henrietta","Herald","Herbster","Herlong","Hessville","Hickory","Highland","Hiko","Hillsboro","Hilltop","Hinsdale","Hiseville","Hiwasse","Hoagland","Hobucken","Hoehne","Holcombe","Hollins","Hollymead","Holtville","Homeland","Homestead","Homeworth","Hondah","Iberia","Idamay","Idledale","Ilchester","Imperial","Independence","Indio","Inkerman","Innsbrook","Interlochen","Iola","Ironton","Irwin","Islandia","Itmann","Ivanhoe","Jackpot","Jacksonburg","Jacksonwald","Jacumba","Jamestown","Jardine","Jeff","Jenkinsville","Jennings","Jessie","Joes","Johnsonburg","Joppa","Juarez","Jugtown","Juntura","Kaka","Kanauga","Kansas","Kapowsin","Katonah","Keller","Kempton","Kenmar","Kennedyville","Kent","Kenvil","Kenwood","Kerby","Kersey","Keyport","Kidder","Kieler","Kilbourne","Kimmell","Kingstowne","Kipp","Kirk","Kiskimere","Klagetoh","Klondike","Knowlton","Kohatk","Konterra","Kraemer","Kula","Kylertown","Lacomb","Ladera","Lafferty","Laurelton","Lavalette","Lawrence","Layhill","Leeper","Leland","Leming","Lemoyne","Leola","Leroy","Levant","Lewis","Leyner","Libertytown","Limestone","Lindcove","Lindisfarne","Linganore","Linwood","Lisco","Lithium","Lloyd","Lodoga","Logan","Loma","Longbranch","Longoria","Lookingglass","Loomis","Lopezo","Loretto","Lorraine","Loveland","Lowell","Lowgap","Loyalhanna","Lumberton","Lund","Lupton","Lutsen","Lydia","Lynn","Macdona","Machias","Madaket","Madrid","Magnolia","Mahtowa","Makena","Malo","Malott","Mammoth","Manchester","Manila","Manitou","Mansfield","Mapletown","Maplewood","Mappsville","Marbury","Marenisco","Marienthal","Marion","Marne","Marshall","Martell","Martinez","Martinsville","Marysville","Masthope","Matheny","Mathews","Matthews","Maury","Maxville","Maybell","Mayfair","Montura","Monument","Mooresburg","Moquino","Moraida","Morgandale","Morningside","Morriston","Moscow","Motley","Movico","Muir","Mulberry","Mulino","Munjor","Murillo","Muse","Nadine","Nanafalia","Naomi","Nash","National","Navarre","Neahkahnie","Needmore","Neibert","Nelson","Nescatunga","Nettie","Newcastle","Newkirk","Newry","Nicholson","Nicut","Nile","Nipinnawasee","Noblestown","Nogal","Nord","Norfolk","Norris","Northchase","Northridge","Norvelt","Norwood","Noxen","Nutrioso","Oasis","Oberlin","Oceola","Odessa","Ogema","Ola","Oley","Olney","Omar","Ona","Oneida","Onton","Orason","Oretta","Orick","Orin","Orovada","Orviston","Osage","Osmond","Otranto","Outlook","Rehrersburg","Reinerton","Remington","Reno","Retsof","Rew","Ribera","Riceville","Richford","Richmond","Richville","Riegelwood","Riner","Ripley","Rivera","Rivereno","Rivers","Riverton","Riviera","Robbins","Roberts","Robinette","Robinson","Rockbridge","Rockhill","Rockingham","Rodanthe","Roderfield","Rodman","Roeville","Roland","Romeville","Ronco","Roosevelt","Rosburg","Rose","Rosedale","Rosewood","Rosine","Rossmore","Rote","Roulette","Rowe","Roy","Ruckersville","Ruffin","Rushford","Russellville","Rutherford","Ryderwood","Sabillasville","Saddlebrooke","Salix","Salunga","Salvo","Sanborn","Sanders","Sandston","Sanford","Santel","Saranap","Sardis","Saticoy","Sattley","Savage","Savannah","Sedley","Sehili","Selma","Sena","Sexton","Seymour","Shaft","Sharon","Shasta","Shawmut","Sheatown","Shelby","Shepardsville","Shindler","Shrewsbury","Sidman","Siglerville","Silkworth","Sims","Singer","Sisquoc","Skyland","Slovan","Smeltertown","Smock","Snelling","Snowville","Snyderville","Soham","Somerset","Soudan","Southmont","Southview","Sparkill","Spelter","Sperryville","Spokane","Springdale","Springhill","Springville","Stagecoach","Staples","Starks","Statenville","Steinhatchee","Sterling","Stevens","Stewart","Stewartville","Stockdale","Stockwell","Stollings","Stonybrook","Stouchsburg","Strong","Strykersville","Succasunna","Sugartown","Suitland","Sultana","Summerfield","Summerset","Summertown","Sunbury","Sunnyside","Sunriver","Sunwest","Sussex","Sutton","Swartzville","Sylvanite","Taft","Takilma","Talpa","Tampico","Taycheedah","Teasdale","Tecolotito","Tedrow","Temperanceville","Templeton","Terlingua","Tetherow","Thatcher","Thermal","Thomasville","Thornport","Thynedale","Tibbie","Ticonderoga","Tilden","Tilleda","Tioga","Titanic","Tivoli","Toftrees","Tolu","Tonopah","Tooleville","Topanga","Topaz","Torboy","Townsend","Trail","Trexlertown","Trinway","Trona","Troy","Trucksville","Tryon","Turah","Turpin","Tuskahoma","Tuttle","Twilight","Tyhee","Tyro","Umapine","Unionville","Urbana","Urie","Utting","Vale","Valle","Vallonia","Valmy","Vandiver","Vaughn","Veguita","Venice","Ventress","Verdi","Vernon","Veyo","Vicksburg","Vienna","Villarreal","Vincent","Virgie","Vivian","Volta","Vowinckel","Wacissa","Wadsworth","Waikele","Waiohinu","Wakarusa","Wakulla","Walker","Walland","Walton","Wanamie","Wanship","Warren","Warsaw","Washington","Watchtower","Waterford","Waterloo","Waterview","Watrous","Wattsville","Wauhillau","Waukeenah","Waumandee","Waverly","Wawona","Websterville","Wedgewood","Weedville","Weeksville","Welch","Welda","Wells","Weogufka","Wescosville","Westboro","Westerville","Westmoreland","Westphalia","Westwood","Wheatfields","Wheaton","Whipholt","Whitehaven","Whitestone","Whitewater","Whitmer","Why","Wikieup","Wildwood","Williams","Williamson","Williston","Wilmington","Wilsonia","Winchester","Windsor","Winesburg","Winfred","Winston","Wintersburg","Wiscon","Witmer","Wolcott","Wollochet","Woodburn","Woodlake","Woodlands","Woodruff","Worcester","Worton","Wright","Wyano","Wyoming","Yardville","Yettem","Yogaville","Yonah","Yorklyn","Ypsilanti","Yukon","Zarephath","Zeba","Zortman"],streets:["Abbey Court","Aberdeen Street","Adams Street","Adelphi Street","Adler Place","Agate Court","Ainslie Street","Aitken Place","Alabama Avenue","Albany Avenue","Albee Square","Albemarle Road","Albemarle Terrace","Alice Court","Allen Avenue","Alton Place","Amber Street","Amboy Street","Amersfort Place","Amherst Street","Amity Street","Anchorage Place","Anna Court","Anthony Street","Apollo Street","Applegate Court","Argyle Road","Arion Place","Arkansas Drive","Arlington Avenue","Arlington Place","Ash Street","Ashford Street","Ashland Place","Aster Court","Atkins Avenue","Atlantic Avenue","Auburn Place","Aurelia Court","Autumn Avenue","Aviation Road","Bainbridge Street","Balfour Place","Baltic Street","Bancroft Place","Bank Street","Banker Street","Banner Avenue","Barbey Street","Barlow Drive","Bartlett Place","Bartlett Street","Barwell Terrace","Bassett Avenue","Batchelder Street","Bath Avenue","Battery Avenue","Baughman Place","Bay Parkway","Bay Street","Bay Avenue","Bayard Street","Baycliff Terrace","Bayview Place","Bayview Avenue","Beach Place","Beacon Court","Beadel Street","Beard Street","Beaumont Street","Beaver Street","Beayer Place","Bedell Lane","Bedford Place","Bedford Avenue","Beekman Place","Belmont Avenue","Belvidere Street","Bennet Court","Benson Avenue","Bergen Street","Bergen Court","Bergen Place","Bergen Avenue","Berkeley Place","Berriman Street","Berry Street","Bethel Loop","Beverley Road","Beverly Road","Bevy Court","Bijou Avenue","Billings Place","Bills Place","Blake Court","Blake Avenue","Bleecker Street","Bliss Terrace","Boardwalk ","Boerum Place","Boerum Street","Bogart Street","Bokee Court","Bond Street","Borinquen Pl","Bouck Court","Boulevard Court","Bowery Street","Bowne Street","Box Street","Boynton Place","Bradford Street","Bragg Street","Bragg Court","Branton Street","Brevoort Place","Bridge Street","Bridgewater Street","Brigham Street","Brighton Court","Brighton Avenue","Brightwater Court","Brightwater Avenue","Bristol Street","Broadway ","Brooklyn Road","Brooklyn Avenue","Broome Street","Brown Street","Bryant Street","Buffalo Avenue","Bulwer Place","Burnett Street","Bush Street","Bushwick Avenue","Bushwick Place","Bushwick Court","Butler Place","Butler Street","Cadman Plaza","Calder Place","Calyer Street","Cambridge Place","Cameron Court","Campus Place","Campus Road","Canal Avenue","Canarsie Road","Canda Avenue","Canton Court","Carlton Avenue","Carroll Street","Cass Place","Catherine Street","Caton Place","Caton Avenue","Cedar Street","Celeste Court","Central Avenue","Centre Street","Channel Avenue","Chapel Street","Charles Place","Chase Court","Chauncey Street","Cheever Place","Cherry Street","Chester Court","Chester Avenue","Chester Street","Chestnut Avenue","Chestnut Street","Christopher Avenue","Church Lane","Church Avenue","Clara Street","Clarendon Road","Clark Street","Clarkson Avenue","Classon Avenue","Claver Place","Clay Street","Clermont Avenue","Cleveland Street","Clifford Place","Clifton Place","Clinton Avenue","Clinton Street","Clove Road","Clymer Street","Cobek Court","Coffey Street","Colby Court","Coleman Street","Coleridge Street","Coles Street","Colin Place","College Place","Colonial Court","Colonial Road","Columbia Street","Columbia Place","Columbus Place","Commerce Street","Commercial Street","Concord Street","Conduit Boulevard","Congress Street","Conklin Avenue","Conover Street","Conselyea Street","Conway Street","Cook Street","Cooke Court","Cooper Street","Corbin Place","Cornelia Street","Cortelyou Road","Court Square","Court Street","Cove Lane","Coventry Road","Covert Street","Cox Place","Coyle Street","Cozine Avenue","Cranberry Street","Crawford Avenue","Creamer Street","Crescent Street","Crooke Avenue","Cropsey Avenue","Crosby Avenue","Croton Loop","Crown Street","Crystal Street","Cumberland Walk","Cumberland Street","Cypress Avenue","Cypress Court","Cyrus Avenue","Dahill Road","Dahl Court","Dahlgreen Place","Dakota Place","Danforth Street","Dank Court","Dare Court","Dean Street","Dearborn Court","Debevoise Street","Debevoise Avenue","Decatur Street","Degraw Street","Dekalb Avenue","Dekoven Court","Delevan Street","Delmonico Place","Dennett Place","Denton Place","Desmond Court","Devoe Street","Devon Avenue","Dewey Place","Dewitt Avenue","Diamond Street","Dictum Court","Dikeman Street","Dinsmore Place","Ditmars Street","Ditmas Avenue","Division Place","Division Avenue","Dobbin Street","Dodworth Street","Dooley Street","Doone Court","Dorchester Road","Dorset Street","Doscher Street","Doughty Street","Douglass Street","Dover Street","Downing Street","Drew Street","Driggs Avenue","Duffield Street","Dumont Avenue","Dunham Place","Dunne Court","Dunne Place","Dupont Street","Durland Place","Duryea Place","Duryea Court","Dwight Street","Eagle Street","Eastern Parkway","Eaton Court","Ebony Court","Eckford Street","Eldert Lane","Eldert Street","Elizabeth Place","Ellery Street","Elliott Walk","Elliott Place","Elm Avenue","Elm Place","Elmwood Avenue","Elton Street","Emerald Street","Emerson Place","Emmons Avenue","Empire Boulevard","Engert Avenue","Erasmus Street","Erskine Loop","Essex Street","Estate Road","Etna Street","Euclid Avenue","Evans Street","Everett Avenue","Evergreen Avenue","Everit Street","Exeter Street","Fair Street","Fairview Place","Falmouth Street","Fanchon Place","Fane Court","Farragut Place","Farragut Road","Fay Court","Fayette Street","Fenimore Street","Ferris Street","Ferry Place","Fillmore Place","Fillmore Avenue","Fiske Place","Flatbush Avenue","Flatlands Avenue","Fleet Place","Fleet Street","Fleet Walk","Florence Avenue","Folsom Place","Forbell Street","Ford Street","Forest Place","Forrest Street","Foster Avenue","Fountain Avenue","Frank Court","Franklin Street","Franklin Avenue","Freeman Street","Friel Place","Front Street","Frost Street","Fuller Place","Fulton Street","Furman Street","Furman Avenue","Gain Court","Gallatin Place","Garden Street","Garden Place","Gardner Avenue","Garfield Place","Garland Court","Garnet Street","Gates Avenue","Gatling Place","Gaylord Drive","Gelston Avenue","Gem Street","George Street","Georgia Avenue","Gerald Court","Gerritsen Avenue","Gerry Street","Gilmore Court","Girard Street","Glen Street","Glendale Court","Glenmore Avenue","Glenwood Road","Gold Street","Goodwin Place","Gotham Avenue","Grace Court","Grafton Street","Graham Avenue","Grand Street","Grand Avenue","Granite Street","Grant Avenue","Grattan Street","Green Street","Greene Avenue","Greenpoint Avenue","Greenwood Avenue","Grimes Road","Grove Place","Grove Street","Guernsey Street","Guider Avenue","Gunnison Court","Gunther Place","Hale Avenue","Hall Street","Halleck Street","Halsey Street","Hamilton Avenue","Hamilton Walk","Hampton Avenue","Hampton Place","Hancock Street","Hanover Place","Hanson Place","Harbor Court","Harbor Lane","Harden Street","Haring Street","Harkness Avenue","Harman Street","Harrison Place","Harrison Avenue","Hart Street","Hart Place","Harway Avenue","Harwood Place","Hastings Street","Hausman Street","Havemeyer Street","Havens Place","Hawthorne Street","Hazel Court","Heath Place","Hegeman Avenue","Hemlock Street","Henderson Walk","Hendrickson Place","Hendrickson Street","Hendrix Street","Henry Street","Herbert Street","Herkimer Place","Herkimer Court","Herkimer Street","Herzl Street","Hewes Street","Heyward Street","Hicks Street","High Street","Highland Avenue","Highland Place","Highland Boulevard","Highlawn Avenue","Hill Street","Hillel Place","Himrod Street","Hinckley Place","Hinsdale Street","Holly Street","Holmes Lane","Holt Court","Homecrest Avenue","Homecrest Court","Hooper Street","Hope Street","Hopkins Street","Horace Court","Hornell Loop","Howard Avenue","Howard Place","Howard Alley","Hoyt Street","Hoyts Lane","Hubbard Place","Hubbard Street","Hudson Avenue","Hull Street","Humboldt Street","Hunterfly Place","Huntington Street","Hunts Lane","Huron Street","Hutchinson Court","Hyman Court","Ide Court","Imlay Street","Independence Avenue","India Street","Indiana Place","Ingraham Street","Interborough Parkway","Ira Court","Irving Place","Irving Avenue","Irving Street","Irvington Place","Irwin Street","Ivan Court","Jackson Street","Jackson Court","Jackson Place","Jaffray Street","Jamaica Avenue","Jamison Lane","Jardine Place","Java Street","Jay Street","Jefferson Street","Jefferson Avenue","Jerome Street","Jerome Avenue","Jewel Street","Jodie Court","John Street","Johnson Avenue","Johnson Street","Joralemon Street","Joval Court","Judge Street","Juliana Place","Junius Street","Just Court","Kane Place","Kane Street","Kansas Place","Karweg Place","Kathleen Court","Kaufman Place","Kay Court","Keap Street","Keen Court","Kenilworth Place","Kenmore Court","Kenmore Terrace","Kensington Street","Kensington Walk","Kent Avenue","Kent Street","Kermit Place","Kiely Place","Kimball Street","King Street","Kings Hwy","Kings Place","Kingsland Avenue","Kingston Avenue","Kingsway Place","Knapp Street","Knickerbocker Avenue","Knight Court","Kosciusko Street","Kossuth Place","Krier Place","Lacon Court","Lafayette Avenue","Lafayette Walk","Lake Avenue","Lake Street","Lake Place","Lamont Court","Lancaster Avenue","Landis Court","Langham Street","Laurel Avenue","Lawn Court","Lawrence Street","Lawrence Avenue","Lawton Street","Lee Avenue","Lefferts Place","Lefferts Avenue","Legion Street","Lenox Road","Leonard Street","Leonora Court","Lester Court","Lewis Avenue","Lewis Place","Lexington Avenue","Liberty Avenue","Lincoln Place","Lincoln Road","Lincoln Avenue","Lincoln Terrace","Linden Street","Linden Boulevard","Linwood Street","Little Street","Livingston Street","Livonia Avenue","Llama Court","Lloyd Street","Lloyd Court","Locust Avenue","Locust Street","Logan Street","Lois Avenue","Lombardy Street","Lorimer Street","Loring Avenue","Lorraine Street","Losee Terrace","Lott Place","Lott Avenue","Lott Street","Louis Place","Louisa Street","Louise Terrace","Louisiana Avenue","Love Lane","Ludlam Place","Luquer Street","Lyme Avenue","Lynch Street","Macdougal Street","Macon Street","Madeline Court","Madison Street","Madison Place","Madoc Avenue","Main Street","Malbone Street","Malta Street","Manhattan Avenue","Manhattan Court","Manor Court","Maple Street","Maple Avenue","Marconi Place","Martense Street","Matthews Court","Matthews Place","Maujer Street","Mayfair Drive","McClancy Place","McDonald Avenue","McKibben Street","McKibbin Street","McKinley Avenue","Meadow Street","Meeker Avenue","Melba Court","Melrose Street","Menahan Street","Merit Court","Mermaid Avenue","Mersereau Court","Meserole Avenue","Meserole Street","Metropolitan Avenue","Metrotech Courtr","Miami Court","Micieli Place","Middagh Street","Middleton Street","Midwood Street","Milford Street","Mill Street","Mill Road","Mill Lane","Mill Avenue","Miller Avenue","Miller Place","Milton Street","Minna Street","Moffat Street","Monaco Place","Monitor Street","Monroe Place","Monroe Street","Montague Terrace","Montague Street","Montana Place","Montauk Court","Montauk Avenue","Montgomery Street","Montgomery Place","Montieth Street","Montrose Avenue","Monument Walk","Moore Street","Moore Place","Morgan Avenue","Morton Street","Moultrie Street","Murdock Court","Myrtle Avenue","Narrows Avenue","Nassau Street","Nassau Avenue","National Drive","Nautilus Avenue","Navy Street","Navy Walk","Nelson Street","Neptune Court","Neptune Avenue","Nevins Street","Newel Street","Newkirk Placez","Newkirk Avenue","Newport Street","Newton Street","Nichols Avenue","Nixon Court","Noble Street","Noel Avenue","Nolans Lane","Noll Street","Norfolk Street","Norman Avenue","Norwood Avenue","Nostrand Avenue","Nova Court","Oak Street","Oakland Place","Ocean Parkway","Ocean Avenue","Ocean Court","Oceanic Avenue","Oceanview Avenue","Olive Street","Oliver Street","Onderdonk Avenue","Opal Court","Orange Street","Orient Avenue","Oriental Court","Oriental Boulevard","Osborn Street","Otsego Street","Overbaugh Place","Ovington Avenue","Ovington Court","Oxford Street","Oxford Walk","Pacific Street","Paerdegat Avenue","Perry Terrace","Perry Place","Pershing Loop","Pierrepont Place","Pierrepont Street","Pilling Street","Pine Street","Pineapple Street","Pioneer Street","Pitkin Avenue","Plaza Street","Pleasant Place","Plymouth Street","Polar Street","Polhemus Place","Poly Place","Pooles Lane","Poplar Avenue","Poplar Street","Portal Street","Porter Avenue","Portland Avenue","Post Court","Powell Street","Powers Street","Prescott Place","President Street","Preston Court","Prince Street","Prospect Street","Prospect Avenue","Prospect Place","Provost Street","Pulaski Street","Putnam Avenue","Quay Street","Quentin Road","Quentin Street","Quincy Street","Radde Place","Railroad Avenue","Raleigh Place","Ralph Avenue","Randolph Street","Rapelye Street","Reed Street","Reeve Place","Regent Place","Remsen Avenue","Remsen Street","Revere Place","Rewe Street","Richards Street","Richardson Street","Richmond Street","Ridge Boulevard","Ridge Court","Ridgecrest Terrace","Ridgewood Place","Ridgewood Avenue","River Street","Riverdale Avenue","Robert Street","Rochester Avenue","Rock Street","Rockaway Parkway","Rockaway Avenue","Rockwell Place","Roder Avenue","Rodney Street","Roebling Street","Rogers Avenue","Roosevelt Court","Roosevelt Place","Rose Street","Ross Street","Rost Place","Royce Place","Royce Street","Ruby Street","Rugby Road","Russell Street","Rutherford Place","Rutland Road","Rutledge Street","Ryder Avenue","Ryder Street","Ryerson Street","Sackett Street","Sackman Street","Sandford Street","Sands Street","Sapphire Street","Saratoga Avenue","Schaefer Street","Schenck Street","Schenck Place","Schenck Court","Schenck Avenue","Schenectady Avenue","Schermerhorn Street","Scholes Street","School Lane","Schroeders Avenue","Schweikerts Walk","Scott Avenue","Seabring Street","Seacoast Terrace","Seagate Terrace","Seagate Avenue","Seaview Court","Seaview Avenue","Seba Avenue","Sedgwick Place","Sedgwick Street","Seeley Street","Seigel Street","Seigel Court","Senator Street","Seton Place","Shale Street","Sharon Street","Sheffield Avenue","Stewart Street","Stillwell Place","Stillwell Avenue","Stockholm Street","Stockton Street","Stoddard Place","Stone Avenue","Story Street","Story Court","Stratford Road","Strauss Street","Strickland Avenue","Strong Place","Stryker Court","Stryker Street","Stuart Street","Stuyvesant Avenue","Sullivan Street","Sullivan Place","Summit Street","Sumner Place","Sumpter Street","Sunnyside Avenue","Sunnyside Court","Surf Avenue","Sutter Avenue","Sutton Street","Suydam Street","Suydam Place","Taaffe Place","Tabor Court","Tampa Court","Tapscott Avenue","Tapscott Street","Taylor Street","Tech Place","Tehama Street","Temple Court","Tennis Court","Terrace Place","Thames Street","Thatford Avenue","Thomas Street","Thornton Street","Throop Avenue","Tiffany Place","Tilden Avenue","Tillary Street","Times Placez","Tompkins Avenue","Tompkins Place","Townsend Street","Troutman Street","Troy Avenue","Trucklemans Lane","Truxton Street","Tudor Terrace","Turnbull Avenue","Turner Place","Underhill Avenue","Union Avenue","Union Street","Utica Avenue","Vandalia Avenue","Vandam Street","Vanderbilt Street","Vanderbilt Avenue","Vanderveer Street","Vanderveer Place","Vandervoort Place","Vandervoort Avenue","Varanda Place","Varet Street","Varick Street","Varick Avenue","Veranda Place","Vermont Street","Vermont Court","Vernon Avenue","Verona Place","Verona Street","Veronica Place","Veterans Avenue","Victor Road","Village Road","Village Court","Vine Street","Virginia Place","Visitation Place","Vista Place","Voorhies Avenue","Wakeman Place","Waldane Court","Waldorf Court","Walker Court","Wallabout Street","Whitney Avenue","Whitty Lane","Whitwell Place","Will Place","Williams Place","Williams Avenue","Williams Court","Williamsburg Street","Willmohr Street","Willoughby Street","Willoughby Avenue","Willow Street","Willow Place","Wilson Avenue","Wilson Street","Windsor Place","Winthrop Street","Withers Street","Wogan Terrace","Wolcott Street","Wolf Place","Woodbine Street","Woodhull Street","Woodpoint Road","Woodrow Court","Woodruff Avenue","Woods Place","Woodside Avenue","Wortman Avenue","Wyckoff Street","Wyckoff Avenue","Wyona Street","Wythe Place","Wythe Avenue"]
}}),define("generator/data_getter",["./dictionary"],function(a){"use strict";
// Build item indexes for each field
function b(){for(var a in g)g.hasOwnProperty(a)&&(h[a]=0)}
// Randomizes array with fisher yates algorithm
// http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function c(a){var b,c,d=a.length;if(0===d)return!1;while(--d)b=Math.floor(Math.random()*(d+1)),c=a[d],a[d]=a[b],a[b]=c;return a}
// Randomizes data arrays in chaotic order
function d(){for(var a in g)g.hasOwnProperty(a)&&(g[a]=c(g[a]));b()}
// Get one field array item
function e(a){if(g.hasOwnProperty(a)){var b=g[a];
// Reset index to start select items from beginning of array
return h[a]>=b.length-1&&(h[a]=0),b[h[a]++]}return""}
// Get entire field array
function f(a){return g[a]}var g={},h={},i=function j(){return g=a,b(),j}();return{getField:f,getItem:e,shuffleData:d,init:i}}),define("libs/lorem-ipsum/lib/dictionary",["require","exports","module"],function(a,b,c){var d={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]};c.exports=d}),define("libs/lorem-ipsum/lib/generator",["require","exports","module","./dictionary"],function(a,b,c){function d(a){return a.indexOf("s",a.length-1)===-1?a+"s":a}var e=function(){var b=arguments.length?arguments[0]:{},c=b.count||1,e=b.units||"sentences",f=b.sentenceLowerBound||5,g=b.sentenceUpperBound||15,h=b.paragraphLowerBound||3,i=b.paragraphUpperBound||7,j=b.format||"plain",k=b.words||a("./dictionary").words,l=b.random||Math.random;e=d(e.toLowerCase());var m=function(a,b){return Math.floor(l()*(b-a+1)+a)},n=function(a){return a[m(0,a.length-1)]},o=function(a,b,c){var d="",e={min:0,max:m(b,c)};while(e.min<e.max)d=d+" "+n(a),e.min=e.min+1;return d.length&&(d=d.slice(1),d=d.charAt(0).toUpperCase()+d.slice(1)),d},p=function(a,b,c,d,e){var f="",g={min:0,max:m(b,c)};while(g.min<g.max)f=f+". "+o(a,d,e),g.min=g.min+1;return f.length&&(f=f.slice(2),f+="."),f},q={min:0,max:c},r="",s="",t="\r\n";"html"==j&&(s="<p>",t="</p>");while(q.min<q.max){switch(e.toLowerCase()){case"words":r=r+" "+n(k);break;case"sentences":r=r+". "+o(k,f,g);break;case"paragraphs":r=r+s+p(k,h,i,f,g)+t}q.min=q.min+1}if(r.length){var u=0;0==r.indexOf(". ")?u=2:0!=r.indexOf(".")&&0!=r.indexOf(" ")||(u=1),r=r.slice(u),"sentences"==e&&(r+=".")}return r};c.exports=e}),/**
 *  DataGenerator Module
 *
 *  Generate random data according to passed template tag name and arguments
 **/
define("generator/tags",["datef","libs/numeral/numeral","./data_getter","libs/lorem-ipsum/lib/generator"],function(a,b,c,d){"use strict";var e={},f={firstName:function(a){return e.gender=a||(this.bool()?"male":"female"),e.name=c.getItem(e.gender+"FirstNames"),e.name},surname:function(){return e.surname=c.getItem("surnames"),e.surname},gender:function(){return e.gender||(this.bool()?"male":"female")},company:function(){return e.company=c.getItem("companies")},countriesList:function(){for(var a=function(a,b){return a.name<b.name?-1:a.name>b.name?1:0},b=c.getField("countries").slice(0).sort(a),d={},e=0;e<b.length;e++){var f=b[e];d[f.abbr]=f.name}return d},country:function(a){return c.getItem("countries")[a?"abbr":"name"]},city:function(){return c.getItem("cities")},state:function(a){return c.getItem("states")[a?"abbr":"name"]},street:function(){return c.getItem("streets")},numeric:function(){return"<Error: numeric tag is deprecated, please try to use integer or floating tags instead>"},floating:function(a,b,c,d){a=a||0,b=b||10;
// Count decimal places in min argument
var e=(a.toString().split(".")[1]||[]).length;c=c||e||4;var f=Math.pow(10,c),g=this.integer(a*f,b*f),h=(g/f).toFixed(c);return d?numeral(h).format(d):parseFloat(h)},integer:function(a,b,c){a=a||0,b=b||10;var d=Math.round(a-.5+Math.random()*(b-a+1));return c?numeral(d).format(c):d},index:function(a){return this.currentIndex+(a||0)},repeat:function(a,b){return a&&!b?a:parseInt(this.integer(a,b),10)},random:function(){var a=[].slice.call(arguments);return a[this.integer(0,a.length-1)]},bool:function(){return!!Math.floor(2*Math.random())},objectId:function(){var a=((new Date).getTime()/1e3|0).toString(16);return a+"xxxxxxxxxxxxxxxx".replace(/x/g,function(){return(16*Math.random()|0).toString(16)}).toLowerCase()},guid:function(){var a="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return a.replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})},email:function(a){var b=e.name||this.firstName(),c=e.surname||this.surname(),d=e.company||this.company();return a&&(b=this.firstName(),c=this.surname(),d=this.company()),(b+c+"@"+d+".com").toLowerCase()},phone:function(a){var b=this.integer(800,999)+""+this.integer(400,600)+this.integer(2e3,4e3),c=0;return a=a||"(xxx) xxx-xxxx",a.replace(/x/g,function(){return b.charAt(c++)})},date:function(b,c,d){b=b||new Date(1970,0,1),c=c||new Date;var e=new Date(b.getTime()+Math.random()*(c.getTime()-b.getTime()));return d?a(d,e):e},lorem:function(a,b){return d({count:a||1,units:$.trim(b)||"sentences"})}};return{execute:function(a,b){var c;f.currentIndex=b||0;try{c=new Function("with (this) { return "+a+" };").call(f)}catch(d){c="<"+d.toString()+">"}return c},tagList:f}}),/**
 *  StringParser Module
 *
 *  Parses passed string and return new with tags replaced by random data.
 **/
define("generator/string_parser",["./tags"],function(a){"use strict";/**
   * Casts passed string to primitive type
   * @param {String} str
   * @returns {Boolean|Number|Object}
   */
function b(a){return"true"===a||"false"===a?"true"===a:!isNaN(parseFloat(a))&&isFinite(a)?parseFloat(a):"null"===a?null:a}/**
   * Main parser
   * @param {String} str
   * @param {Number} index - Index of current array element
   * @returns {*}
   */
function c(c,d){return c.indexOf("countriesList")!==-1?a.execute("countriesList()"):c=b(c.replace(/\{\{([^}]+)\}\}/g,function(b,c){return a.execute(c,d)}))}return c}),/**
 *  Generator core module
 *
 **/
define("generator/parser",["./string_parser","./tags","./data_getter"],function(a,b,c){"use strict";/**
   * Returns primitive data type
   * @param item
   * @returns {String}
   */
function d(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}/**
   * Clones passed object
   * @param {Object} o
   * @returns {Object}
   */
function e(a){if(!a||"object"!=typeof a)return a;var b,c,d="function"==typeof a.pop?[]:{};for(b in a)a.hasOwnProperty(b)&&(c=a[b],c&&"object"==typeof c?d[b]=e(c):d[b]=c);return d}/**
   * Creates array of arrays or objects and parses it
   * @param item - Item to repeat
   * @param {Number} repeats - Resulting items count
   * @returns {Array|String}
   */
function f(a,b){var c=[];if(b>=k)return"You specified too many items to be repeated. Try entering a repetition is not more than "+k+" times.";for(var d=0;d<b;d++)c.push(g(a,d));return c}/**
   * Detects item type and parses it
   * @param item
   * @param {Number} index - Index of current array element
   * @param {Object} obj - Current generated object
   * @returns {*}
   */
function g(b,c,e){switch(d(b)){case"array":return h(b);case"object":return i(b,c);case"function":return j(b,c,e);case"string":return a(b,c);default:return b}}/**
   * Creates new array of items or parses passed array
   * @param {Array} arr
   * @returns {Array}
   */
function h(b){var c=b[0];
// Detect {{repeat}} in array
if("string"===d(c)&&c.indexOf("repeat")!==-1){var e=b[1],h=a(c);// Get repeats count
b=f(e,h)}else
// Or just parse array
for(var i=0;i<b.length;i++)b[i]=g(b[i],i);return b}/**
   * Creates new object according to template and parses it
   * @param {Object} template - Object for cloning
   * @param {Number} index - Index of current array element
   * @returns {*}
   */
function i(a,b){var c=e(a);for(var d in c)c.hasOwnProperty(d)&&(c[d]=g(c[d],b,c));return c}/**
   * Executes functions
   * @param {Function} fn
   * @param {Number} index - Index of current array element
   * @param {Object} obj - Current generated object
   * @returns {*} - Result of function execution
   */
function j(a,c,d){return a.call(d,b.tagList,c)}/**
   * Constants
   */
var k=1/0;return function(a){return c.shuffleData(),g(a)}}),/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
function(a,b){/* CommonJS */
"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define("libs/spin.js/spin",b):a.Spinner=b()}(this,function(){"use strict";/* Whether to use CSS animations or setTimeout */
/**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}/**
   * Appends children and returns the parent.
   */
function b(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}/**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=k.substring(0,k.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return m[e]||(n.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",n.cssRules.length),m[e]=1),e}/**
   * Tries various vendor prefixes and returns the first supported property.
   */
function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<l.length;d++)if(c=l[d]+b,void 0!==e[c])return c;if(void 0!==e[b])return b}/**
   * Sets multiple style properties at once.
   */
function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}/**
   * Fills in default values.
   */
function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}/**
   * Returns the absolute page-offset of the given element.
   */
function g(a){var b={x:a.offsetLeft,y:a.offsetTop};while(a=a.offsetParent)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}/**
   * Returns the line color from the given string or array.
   */
function h(a,b){return"string"==typeof a?a:a[b%a.length]}/** The constructor */
function i(a){return"undefined"==typeof this?new i(a):void(this.opts=f(a||{},i.defaults,o))}function j(){/* Utility function to create a VML tag */
function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}
// No CSS transforms but VML support, add a CSS rule for VML elements:
n.addRule(".spin-vml","behavior:url(#default#VML)"),i.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function g(a,g,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~g}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:h(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)g(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)g(i);return b(a,m)},i.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var k,l=["webkit","Moz","ms","O"],m={},n=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),o={lines:12,// The number of lines to draw
length:7,// The length of each line
width:5,// The line thickness
radius:10,// The radius of the inner circle
rotate:0,// Rotation offset
corners:1,// Roundness (0..1)
color:"#000",// #rgb or #rrggbb
direction:1,// 1: clockwise, -1: counterclockwise
speed:1,// Rounds per second
trail:100,// Afterglow percentage
opacity:.25,// Opacity of the lines
fps:20,// Frames per second when using setTimeout()
zIndex:2e9,// Use a high z-index by default
className:"spinner",// CSS class to assign to the element
top:"auto",// center vertically
left:"auto",// center horizontally
position:"relative"};
// Global defaults that override the built-ins:
i.defaults={},f(i.prototype,{/**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
spin:function(b){this.stop();var c,d,f=this,h=f.opts,i=f.el=e(a(0,{className:h.className}),{position:h.position,width:0,zIndex:h.zIndex}),j=h.radius+h.length+h.width;if(// target position
b&&(b.insertBefore(i,b.firstChild||null),d=g(b),c=g(i),e(i,{left:("auto"==h.left?d.x-c.x+(b.offsetWidth>>1):parseInt(h.left,10)+j)+"px",top:("auto"==h.top?d.y-c.y+(b.offsetHeight>>1):parseInt(h.top,10)+j)+"px"})),i.setAttribute("role","progressbar"),f.lines(i,f.opts),!k){
// No CSS animation support, use setTimeout() instead
var l,m=0,n=(h.lines-1)*(1-h.direction)/2,o=h.fps,p=o/h.speed,q=(1-h.opacity)/(p*h.trail/100),r=p/h.lines;!function s(){m++;for(var a=0;a<h.lines;a++)l=Math.max(1-(m+(h.lines-a)*r)%p*q,h.opacity),f.opacity(i,a*h.direction+n,l,h);f.timeout=f.el&&setTimeout(s,~~(1e3/o))}()}return f},/**
     * Stops and removes the Spinner.
     */
stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},/**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
lines:function(d,f){function g(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*j+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,j=0,l=(f.lines-1)*(1-f.direction)/2;j<f.lines;j++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:k&&c(f.opacity,f.trail,l+j*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(g("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,g(h(f.color,j),"0 0 1px rgba(0,0,0,.1)")));return d},/**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var p=e(a("group"),{behavior:"url(#default#VML)"});return!d(p,"transform")&&p.adj?j():k=d(p,"animation"),i}),define("ui/helpers",[],function(){"use strict";return{getCookie:function(a){var b=document.cookie,c=b.indexOf(" "+a+"=");if(c==-1&&(c=b.indexOf(a+"=")),c==-1)b=null;else{c=b.indexOf("=",c)+1;var d=b.indexOf(";",c);d==-1&&(d=b.length),b=unescape(b.substring(c,d))}return b},setCookie:function(a,b,c){var d=new Date;d.setDate(d.getDate()+c);var e=escape(b)+(null==c?"":"; expires="+d.toUTCString());document.cookie=a+"="+e}}}),/**
 *  Actions Module
 *
 **/
define("ui/actions",["jquery","./io","./clipboard","./dom","generator/parser","libs/spin.js/spin","./notify","./helpers"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){
// Matches only the 10.. bytes that are non-initial
// characters in a multi-byte sequence.
var b=encodeURIComponent(a).match(/%[89ABab]/g);return a.length+(b?b.length:0)}
// Size calculation and badge logic
function j(){var a=i(JSON.stringify(s)),b=(a/1024).toFixed(2);d.codeSizeBadge.text(b+" kB").fadeIn()}function k(a){t=JSON.stringify(s,null,u),
// Prevent hiding actions list when changing indent
a||(d.generateStartMessage.hide(),d.generatedActions.show(),d.actionsList.fadeIn()),b.output(t),c.clipCode(t)}function l(){if(s){var a=JSON.stringify(s,null,u),b="text/json;charset=utf-8,"+encodeURIComponent(a);d.downloadBtn.attr("href","data:"+b)}}function m(a){a.preventDefault(a),q(),s=e(b.input()),j(),k(),l()}function n(b){b&&b.preventDefault();var c=a(this),e=c.data("tab"),f=d.showSidebarBtn.filter(".active").data("tab");d.showSidebarBtn.removeClass("active"),f&&e===f?d.viewport.removeClass("sidebar"):(c.addClass("active"),d.viewport.removeClass("help-tab feedback-tab").addClass("sidebar").addClass(e))}function o(a){a&&a.preventDefault(),d.showSidebarBtn.removeClass("active"),d.viewport.removeClass("sidebar")}
// TODO заменить на transition в css
function p(b){b.preventDefault();var c=a(this),d=a(c.attr("href"));if(!d.is(":animated"))return c.toggleClass("active"),d.slideToggle(150),!1}function q(a){d.downloadBtn.attr("href","#"),d.generatedActions.hide(),d.uploadedActions.hide(),c.reset(),a&&(d.codeSizeBadge.hide().text("").removeClass("over").removeAttr("title"),d.actionsList.fadeOut(),b.reset(),d.generateStartMessage.fadeIn(),a.preventDefault())}function r(){u=parseInt(d.indentDropdown.val(),10),k(!0),l()}
// Loader animation default settings
f.defaults={color:"#c1c1c2",speed:1.4,trail:60,hwaccel:!0,corners:0,opacity:.6};var s=null,t=null,u=2;return{generateJSON:m,resetUI:q,showSidebar:n,hideSidebar:o,toggleTagInfo:p,changeJSONIndent:r}}),require(["jquery","ui/actions","ui/dom"],function(a,b,c){"use strict";
// Bind events
c.generateBtn.on("click",b.generateJSON),c.resetBtn.on("click",b.resetUI),c.showSidebarBtn.on("click",b.showSidebar),c.hideSidebarBtn.on("click",b.hideSidebar),c.tagNames.on("click",b.toggleTagInfo),c.indentDropdown.on("change",b.changeJSONIndent),
// Show sidebar if tag name is in window hash
function(){var b=window.location.hash;if(b){var d=c.tagNames.filter('[href="'+b+'"]');d.length&&(c.showSidebarBtn.filter('[data-tab="help-tab"]').trigger("click"),a("aside").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){d.trigger("click")}))}}()}),define("app",function(){});