let R=0,M=null,O=`undefined`,K=128,U=`string`,N=1,V=`Object`,P=`utf-8`,W=4,T=`function`,J=Array,Q=Error,Y=Object,X=Reflect,S=Uint8Array,L=undefined;var D=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7d19e4af8c590149(b,c,g(d))});var s=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==M){return `${a}`};if(b==U){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==M){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==U&&b.length>R){return `Function(${b})`}else{return `Function`}};if(J.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=s(a[R])};for(let d=N;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>N){d=c[N]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var w=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h649c0fba42dcb9a9(c,d,v(e))}finally{b[u++]=L}});var F=((a,b)=>{});var B=((a,b)=>{a=a>>>R;const c=A();const d=c.subarray(a/W,a/W+ b);const e=[];for(let a=R;a<d.length;a++){e.push(f(d[a]))};return e});var g=(a=>{if(d===b.length)b.push(b.length+ N);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function C(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var I=(async(b)=>{if(a!==L)return a;if(typeof b===O){b=new URL(`slider_bg.wasm`,import.meta.url)};const c=E();if(typeof b===U||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var r=(()=>{if(q===M||q.byteLength===R){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===L||a===M);var c=(a=>b[a]);var H=(b=>{if(a!==L)return a;const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;q=M;z=M;i=M;a.__wbindgen_start();return a});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==N){b.a=R;return !0};const c=!1;return c});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_setlistenerid_3183aae8fa5840fb=((a,b)=>{c(a).__yew_listener_id=b>>>R});b.wbg.__wbg_listenerid_12315eee21527820=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/W+ N]=p(d)?R:d;r()[a/W+ R]=!p(d)});b.wbg.__wbg_subtreeid_e348577f7ef777e3=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/W+ N]=p(d)?R:d;r()[a/W+ R]=!p(d)});b.wbg.__wbg_setsubtreeid_d32e6327eef1f7fc=((a,b)=>{c(a).__yew_subtree_id=b>>>R});b.wbg.__wbg_cachekey_b61393159c57fd7b=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/W+ N]=p(d)?R:d;r()[a/W+ R]=!p(d)});b.wbg.__wbg_setcachekey_80183b7cfc421143=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>R});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Q();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,N)}});b.wbg.__wbg_error_71d6845bf00a930f=((b,c)=>{var d=B(b,c).slice();a.__wbindgen_free(b,c*W,W);console.error(...d)});b.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=c(a).body;return p(b)?R:g(b)});b.wbg.__wbg_createElement_1a136faad4101f43=function(){return C(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_d47e0c50fa2904e0=function(){return C(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===R?L:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_dbdd908f92bae1b1=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=c(a).document;return p(b)?R:g(b)});b.wbg.__wbg_instanceof_Element_f614cf57d4316979=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_0819c2800784a176=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_69934f9195df65af=((b,d)=>{const e=c(d).outerHTML;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_children_3ab614807b5f0709=(a=>{const b=c(a).children;return g(b)});b.wbg.__wbg_removeAttribute_5c264e727b67dbdb=function(){return C(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_0918ea45d5a1c663=function(){return C(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===U?e:L;var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/W+ N]=h;r()[b/W+ R]=g});b.wbg.__wbg_value_ab23a75318ea828f=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_setvalue_918a8ae77531a942=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_name_6b14f0bd14104364=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_message_9cb2b2d345ff18c6=((b,d)=>{const e=c(d).message;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_files_0aa81397021d2faa=(a=>{const b=c(a).files;return p(b)?R:g(b)});b.wbg.__wbg_target_791826e938c3e308=(a=>{const b=c(a).target;return p(b)?R:g(b)});b.wbg.__wbg_bubbles_f0783dc095f8e220=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_191799b8e0ab3254=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_d94a39b8c8f6eed1=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_preventDefault_d2c7416966cb0632=(a=>{c(a).preventDefault()});b.wbg.__wbg_name_6c808ccae465f9e1=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_addEventListener_1b158e9e95e0ab00=function(){return C(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_removeEventListener_177ff96081e6f22d=function(){return C(((a,b,d,e,f)=>{c(a).removeEventListener(k(b,d),c(e),f!==R)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_cb6366cb0956ce29=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_99e27ed8897850f2=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_readyState_44c24e9776f720b4=(a=>{const b=c(a).readyState;return b});b.wbg.__wbg_result_e515a9bf8390ef47=function(){return C((a=>{const b=c(a).result;return g(b)}),arguments)};b.wbg.__wbg_error_8d62cca0d82b0b36=(a=>{const b=c(a).error;return p(b)?R:g(b)});b.wbg.__wbg_new_b07bacad2380fbb9=function(){return C((()=>{const a=new FileReader();return g(a)}),arguments)};b.wbg.__wbg_abort_fa3a2ce39ab03e8d=(a=>{c(a).abort()});b.wbg.__wbg_readAsArrayBuffer_84f69d5bca819f0a=function(){return C(((a,b)=>{c(a).readAsArrayBuffer(c(b))}),arguments)};b.wbg.__wbg_debug_0207b724052e591d=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_error_1f4e3e298a7c97f6=(a=>{console.error(c(a))});b.wbg.__wbg_error_8cf137381b3af25f=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_info_eb81e4fcae9ba8f1=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_log_bd0951a507fbf762=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_warn_ea08466617ec5d3a=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbg_parentNode_f3957fdd408a62f7=(a=>{const b=c(a).parentNode;return p(b)?R:g(b)});b.wbg.__wbg_parentElement_86a7612dde875ba9=(a=>{const b=c(a).parentElement;return p(b)?R:g(b)});b.wbg.__wbg_lastChild_8f7b6f3825115eff=(a=>{const b=c(a).lastChild;return p(b)?R:g(b)});b.wbg.__wbg_nextSibling_13e9454ef5323f1a=(a=>{const b=c(a).nextSibling;return p(b)?R:g(b)});b.wbg.__wbg_setnodeValue_8656e865e9b11bbb=((a,b,d)=>{c(a).nodeValue=b===R?L:k(b,d)});b.wbg.__wbg_textContent_efe8338af53ddf62=((b,d)=>{const e=c(d).textContent;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_appendChild_bd383ec5356c0bdb=function(){return C(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_insertBefore_882082ef4c5d7766=function(){return C(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_14b08321b677677a=function(){return C(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_dataTransfer_114daff2829a408c=(a=>{const b=c(a).dataTransfer;return p(b)?R:g(b)});b.wbg.__wbg_instanceof_KeyboardEvent_d49d8f666fac200b=(a=>{let b;try{b=c(a) instanceof KeyboardEvent}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_key_9a2550983fbad1d0=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_setchecked_3b12f3d602a63e47=((a,b)=>{c(a).checked=b!==R});b.wbg.__wbg_files_0fe2affb0f600765=(a=>{const b=c(a).files;return p(b)?R:g(b)});b.wbg.__wbg_value_c93cb4b4d352228e=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbg_setvalue_9bd3f93b3864ddbf=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const d=c(a)[b>>>R];return g(d)});b.wbg.__wbg_length_d99b680fd68bf71b=(a=>{const b=c(a).length;return b});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==M;return d});b.wbg.__wbg_next_1938cf110c9491d4=(a=>{const b=c(a).next;return g(b)});b.wbg.__wbg_next_267398d0e0761bf9=function(){return C((a=>{const b=c(a).next();return g(b)}),arguments)};b.wbg.__wbg_done_506b44765ba84b9c=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_31485d8770eb06ab=(a=>{const b=c(a).value;return g(b)});b.wbg.__wbg_iterator_364187e1ee96b750=(()=>{const a=Symbol.iterator;return g(a)});b.wbg.__wbg_get_5027b32da70f39b1=function(){return C(((a,b)=>{const d=X.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_call_a79f1973a4f07d5e=function(){return C(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_87d841e70661f6e9=(()=>{const a=new Y();return g(a)});b.wbg.__wbg_self_086b5302bcafb962=function(){return C((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_132fa5d7546f1de5=function(){return C((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return C((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return C((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===L;return b});b.wbg.__wbg_encodeURIComponent_8a6e310fdf61d07d=((a,b)=>{const c=encodeURIComponent(k(a,b));return g(c)});b.wbg.__wbg_from_a663e01d8dab8e44=(a=>{const b=J.from(c(a));return g(b)});b.wbg.__wbg_instanceof_ArrayBuffer_f4521cec1b99ee35=(a=>{let b;try{b=c(a) instanceof ArrayBuffer}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_is_a5728dbfb61c82cd=((a,b)=>{const d=Y.is(c(a),c(b));return d});b.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_buffer_5d1b598a01b41a42=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_new_ace717933ad7117f=(a=>{const b=new S(c(a));return g(b)});b.wbg.__wbg_set_74906aa30864df5a=((a,b,d)=>{c(a).set(c(b),d>>>R)});b.wbg.__wbg_length_f0764416ba5bb237=(a=>{const b=c(a).length;return b});b.wbg.__wbg_set_37a50e901587b477=function(){return C(((a,b,d)=>{const e=X.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ N]=g;r()[b/W+ R]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbindgen_closure_wrapper289=((a,b,c)=>{const d=t(a,b,112,w);return g(d)});b.wbg.__wbindgen_closure_wrapper502=((a,b,c)=>{const d=t(a,b,199,x);return g(d)});b.wbg.__wbindgen_closure_wrapper712=((a,b,c)=>{const d=t(a,b,267,y);return g(d)});return b});var A=(()=>{if(z===M||z.byteLength===R){z=new Uint32Array(a.memory.buffer)};return z});var x=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_mut_ref__h64263bc14327f779(c,d,v(e))}finally{b[u++]=L}});var e=(a=>{if(a<132)return;b[a]=d;d=a});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:N,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===L){const c=m.encode(a);const d=b(c.length,N)>>>R;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,N)>>>R;const f=j();let g=R;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==R){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,N)>>>R;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var j=(()=>{if(i===M||i.byteLength===R){i=new S(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>R;return h.decode(j().subarray(a,a+ b))});var v=(a=>{if(u==N)throw new Q(`out of js stack`);b[--u]=a;return u});let a;const b=new J(K).fill(L);b.push(L,M,!0,!1);let d=b.length;const h=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){h.decode()};let i=M;let l=R;const m=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const n=typeof m.encodeInto===T?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=M;let u=K;let z=M;export default I;export{H as initSync}