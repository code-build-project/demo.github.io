(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7abeca78"],{"10e1":function(e,t,r){},2283:function(e,t,r){"use strict";var a=r("35c1"),n=r.n(a);n.a},"24b8":function(e,t,r){"use strict";var a=r("5a4a"),n=r.n(a);n.a},"35c1":function(e,t,r){},"5a4a":function(e,t,r){},"7a35":function(e,t,r){},a65e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r(e.component[e.currentComponent],{tag:"component",staticClass:"page__form",attrs:{form:e.form},on:{changeForm:function(t){return e.changeForm(t)}}})],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reg"},[r("v-icon",{staticClass:"reg__logo",attrs:{path:"img/logo.svg"}}),r("h1",{staticClass:"reg__title"},[e._v(" Зарегистрируйтесь в Code Build ")]),r("v-input",{staticClass:"reg__name",attrs:{"format-name":"formatString","max-length":"20"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},[e._v(" Имя ")]),r("v-input",{staticClass:"reg__mail",attrs:{"error-message":e.errors.email},on:{change:function(t){e.errors.email=""},blur:e.validateEmail},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[e._v(" E-mail ")]),r("div",{staticClass:"reg__consent"},[r("v-check-box",{model:{value:e.form.checkbox,callback:function(t){e.$set(e.form,"checkbox",t)},expression:"form.checkbox"}}),e._m(0)],1),r("v-button",{staticClass:"reg__button",attrs:{type:e.typeButton,"is-loaded":e.isPageLoaded},on:{click:function(t){return e.onSign()}}},[e._v(" Зарегистрироваться ")]),r("div",{staticClass:"reg__footer"},[e._v(" У вас уже есть аккаунт? "),r("router-link",{staticClass:"reg__auth",attrs:{to:"/auth",target:"_blank"}},[e._v(" Войти ")])],1)],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reg__consent-text"},[e._v(" Я согласен с условиями обработки "),r("span",{staticClass:"reg__consent-link"},[e._v("персональных данных")])])}],o=(r("b0c0"),r("96cf"),r("1da1")),c=r("4a55"),u=r("2f35"),l=r("a179"),m=r("ac34"),d=r("5b55"),f={name:"RegFormMain",components:{VIcon:c["a"],VInput:u["a"],VButton:l["a"],VCheckBox:m["a"]},data:function(){return{isPageLoaded:!0,form:{name:"",email:"",checkbox:!1},errors:{email:""}}},computed:{isValid:function(){var e=this.form,t=e.name,r=e.email,a=e.checkbox;return t&&d["a"].test(r)&&a},typeButton:function(){return this.isValid?"primary":"disabled"}},methods:{validateEmail:function(){d["a"].test(this.form.email)?this.errors.email="":this.errors.email="Неверный формат"},onSign:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isValid){t.next=2;break}return t.abrupt("return");case 2:return e.isPageLoaded=!1,t.prev=3,t.next=6,e.$service.reg.signIn(e.form);case 6:e.$emit("changeForm",e.form),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](3),r=t.t0.data,e.errors.email=r.message;case 13:return t.prev=13,e.isPageLoaded=!0,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,9,13,16]])})))()}}},p=f,v=(r("2283"),r("2877")),h=Object(v["a"])(p,s,i,!1,null,"dd66e86e",null),g=h.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form"},[r("h1",{staticClass:"form__title"},[e._v(" Введите код ")]),r("h2",{staticClass:"form__subtitle"},[e._v(" Мы отправили письмо с паролем"),r("br"),e._v(" на почту "+e._s(e.form.email)+","),r("br"),e._v(" введите пароль из письма"),r("br")]),r("v-input",{staticClass:"form__password",attrs:{"error-message":e.passwordError},on:{change:function(t){e.passwordError=""}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmRegistration()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[e._v(" Пароль ")]),r("div",{staticClass:"form__send"},[e.interval?r("div",[e._v(" Отправить новый пароль через "+e._s(e.time)+" ")]):r("div",{staticClass:"form__send-again",on:{click:function(t){return e.sendCodeAgain()}}},[e._v(" Отправить пароль повторно ")])]),r("v-button",{staticClass:"form__button",attrs:{type:e.typeButton,"is-loaded":e.isPageLoaded},on:{click:function(t){return e.confirmRegistration()}}},[e._v(" Подтвердить ")])],1)},b=[],k={name:"RegFormConfirm",components:{VInput:u["a"],VButton:l["a"]},props:{form:{type:Object,default:function(){return{}}}},data:function(){return{isPageLoaded:!0,interval:119,password:"",passwordError:""}},computed:{time:function(){var e=this.interval>=60?"01":"00",t=this.interval>=60?this.interval-60:this.interval,r=t>9?t:"0"+t;return e+":"+r},isValid:function(){return this.form.email&&this.password},typeButton:function(){return this.isValid?"primary":"disabled"}},mounted:function(){this.startTimer()},methods:{startTimer:function(){var e=this,t=setInterval((function(){e.interval>0?e.interval--:clearInterval(t)}),1e3)},sendCodeAgain:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$service.reg.signIn(e.form);case 3:e.interval=119,e.startTimer(),e.passwordError="",t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),r=t.t0.data,e.passwordError=r.message;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},confirmRegistration:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isValid){t.next=2;break}return t.abrupt("return");case 2:return e.isPageLoaded=!1,r={email:e.form.email,password:e.password},t.prev=4,t.next=7,e.$service.reg.completion(r);case 7:t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](4),a=t.t0.data,e.passwordError=a.message;case 13:return t.prev=13,e.isPageLoaded=!0,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[4,9,13,16]])})))()}}},x=k,C=(r("de5b"),Object(v["a"])(x,_,b,!1,null,"58493d60",null)),w=C.exports,y={name:"Registration",components:{FormMain:g,FormConfirm:w},data:function(){return{currentComponent:"main",component:{main:g,confirm:w},form:{name:"",email:""}}},methods:{changeForm:function(e){this.form=e,this.currentComponent="confirm"}}},E=y,V=(r("24b8"),Object(v["a"])(E,a,n,!1,null,"fdb712a4",null));t["default"]=V.exports},ac34:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"checkbox",class:"checkbox_type-"+e.type},[r("input",{staticClass:"checkbox-input",attrs:{id:e.keyField,type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("change",t.target.checked)}}}),r("label",{staticClass:"checkbox-label",attrs:{for:e.keyField}})])},n=[],s=(r("caad"),r("a9e3"),{name:"VCheckBox",model:{prop:"checked",event:"change"},props:{keyField:{type:[Number,String],default:1},checked:{type:Boolean,default:!1},type:{type:String,default:"normal",validator:function(e){return["normal","primary"].includes(e)}}}}),i=s,o=(r("ef81"),r("2877")),c=Object(o["a"])(i,a,n,!1,null,"dec9ba94",null);t["a"]=c.exports},de5b:function(e,t,r){"use strict";var a=r("10e1"),n=r.n(a);n.a},ef81:function(e,t,r){"use strict";var a=r("7a35"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-7abeca78.75318caf.js.map