System.register(["./index-legacy-01d9bd1f.js"],(function(e,t){"use strict";var s;return{setters:[e=>{s=e.W}],execute:function(){e("PreferencesWeb",class extends s{constructor(){super(...arguments),this.group="CapacitorStorage"}async configure({group:e}){"string"==typeof e&&(this.group=e)}async get(e){return{value:this.impl.getItem(this.applyPrefix(e.key))}}async set(e){this.impl.setItem(this.applyPrefix(e.key),e.value)}async remove(e){this.impl.removeItem(this.applyPrefix(e.key))}async keys(){return{keys:this.rawKeys().map((e=>e.substring(this.prefix.length)))}}async clear(){for(const e of this.rawKeys())this.impl.removeItem(e)}async migrate(){var e;const t=[],s=[],i="_cap_",r=Object.keys(this.impl).filter((e=>0===e.indexOf(i)));for(const n of r){const i=n.substring(5),r=null!==(e=this.impl.getItem(n))&&void 0!==e?e:"",{value:a}=await this.get({key:i});"string"==typeof a?s.push(i):(await this.set({key:i,value:r}),t.push(i))}return{migrated:t,existing:s}}async removeOld(){const e=Object.keys(this.impl).filter((e=>0===e.indexOf("_cap_")));for(const t of e)this.impl.removeItem(t)}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":`${this.group}.`}rawKeys(){return Object.keys(this.impl).filter((e=>0===e.indexOf(this.prefix)))}applyPrefix(e){return this.prefix+e}})}}}));
