(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c268a7f"],{"44b5":function(t,e,n){"use strict";var r=n("bc18"),l=n.n(r);l.a},"61e2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.parseError?n("small",{staticClass:"notice"},[n("v-icon",{attrs:{name:"warning"}}),n("span",[t._v(" "+t._s(t.$t("interfaces.dropdown.options_invalid"))+" "),n("br"),t._v(" "+t._s(t.parseError)+" ")])],1):n("v-select",{attrs:{id:t.name,value:t.value,options:t.choices,placeholder:t.options.placeholder,icon:t.options.icon,other:t.options.allow_other},on:{input:function(e){return t.$emit("input",e)}}})},l=[],i=(n("d3b7"),n("25f0"),n("8db2")),o=n.n(i),a={mixins:[o.a],data:function(){return{parseError:null}},computed:{choices:function(){var t=this.options.choices;if(!t)return{};if("string"===typeof this.options.choices)try{t=JSON.parse(this.options.choices)}catch(e){this.parseError=e.toString()}return t}}},u=a,s=(n("44b5"),n("2877")),c=Object(s["a"])(u,r,l,!1,null,"23484922",null);e["default"]=c.exports},"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},bc18:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4c268a7f.f0e3e150.js.map