function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function b(e,t,n){var i,o,a,r,f,u,l=0,c=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=o;return i=o=void 0,l=t,r=e.apply(a,n)}function S(e){return l=e,f=setTimeout(j,t),c?y(e):r}function k(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function j(){var e=v();if(k(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,a-(e-l)):n}(e))}function O(e){return f=void 0,b&&i?y(e):(i=o=void 0,r)}function h(){var e=v(),n=k(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),r}return t=p(t)||0,g(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(p(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},h.flush=function(){return void 0===f?r:O(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||r.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");y.addEventListener("input",(function(){const e={email:y.elements.email.value,message:y.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}));const S=y.elements.email,k=y.elements.message,j=localStorage.getItem("feedback-form-state");if(j){const e=JSON.parse(j);S.value=e.email,k.value=e.message}else S.value="",k.value="";y.addEventListener("submit",(e=>{e.preventDefault(),console.log(feedbackFormState),localStorage.removeItem("feedback-form-state"),feedbackFormState.email="",feedbackFormState.message="",S.value="",k.value=""}));const O=e(t)((()=>{localStorage.setItem("feedback-form-state",JSON.stringify(feedbackFormState))}),500);S.addEventListener("input",(()=>{feedbackFormState.email=S.value,O()})),k.addEventListener("input",(()=>{feedbackFormState.message=k.value,O()}));
//# sourceMappingURL=03-feedback.519dacca.js.map
