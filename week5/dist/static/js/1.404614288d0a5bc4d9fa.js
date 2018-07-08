webpackJsonp([1],{LQ3l:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"ChapterList",props:{comicId:{type:Number,required:!0},chapters:{type:Array,required:!0}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"chapterList"},[a("div",{staticClass:"title"},[t._v("\n        All Chapters\n    ")]),t._v(" "),a("ul",{staticClass:"list"},t._l(t.chapters,function(s){return a("li",{key:s.id},[a("router-link",{attrs:{to:{name:"Reading",params:{id:t.comicId,cid:s.id}}}},[t._v("\n            Chapter "+t._s(s.id)+": "+t._s(s.title)+"\n            "),s.id==t.chapters.length?a("span",{staticClass:"newTag"},[t._v("NEW")]):t._e()])],1)}))])},staticRenderFns:[]};var c={name:"ComicDetail",components:{ChapterList:a("VU/8")(e,i,!1,function(t){a("UQqB")},"data-v-2494e22b",null).exports},data:function(){return{comicId:null,name:null,coverImg:null,genres:null,author:null,status:null,rate:5,summary:null,chapters:[]}},methods:{getApiData:function(){var t=this;this.$http.get("./static/data.json").then(function(s){var a=t.comicId-1;if(a>=0&&a<s.data.comics.length){var e=s.data.comics[a];t.name=e.name,t.coverImg=e.coverImg,t.genres=e.genres,t.author=e.author,t.status=e.status,t.rate=e.rate,t.summary=e.summary,t.chapters=e.chapters.slice(0)}else alert("抱歉！目前還沒有這本書"),t.$router.replace("/home")}).catch(function(t){console.log(t)})}},mounted:function(){this.comicId=1*this.$route.params.id,this.getApiData()}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.chapters.length?a("div",{staticClass:"comicDetail"},[a("div",{staticClass:"detail"},[a("div",{staticClass:"cover"},[a("img",{attrs:{src:t.coverImg}})]),t._v(" "),a("div",{staticClass:"context"},[a("div",{staticClass:"name"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),a("div",{staticClass:"descriptions"},[a("div",{staticClass:"description"},[a("div",{staticClass:"title"},[t._v("Genres")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.genres))])]),t._v(" "),a("div",{staticClass:"description"},[a("div",{staticClass:"title"},[t._v("Author")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.author))])]),t._v(" "),a("div",{staticClass:"description"},[a("div",{staticClass:"title"},[t._v("Status")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.status))])]),t._v(" "),a("div",{staticClass:"description"},[a("div",{staticClass:"title"},[t._v("Rate")]),t._v(" "),a("div",{staticClass:"content"},[t._l(t.rate,function(t,s){return a("i",{key:"full-star-"+s,staticClass:"fas fa-star"})}),t._v(" "),t._l(5-t.rate,function(t,s){return a("i",{key:s,staticClass:"far fa-star"})})],2)]),t._v(" "),a("div",{staticClass:"description"},[a("div",{staticClass:"title"},[t._v("Summary")]),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.summary)}})])])])]),t._v(" "),a("ChapterList",{attrs:{comicId:t.comicId,chapters:t.chapters}})],1):t._e()},staticRenderFns:[]};var r=a("VU/8")(c,n,!1,function(t){a("k6WV")},"data-v-32d9b35c",null);s.default=r.exports},UQqB:function(t,s){},k6WV:function(t,s){}});
//# sourceMappingURL=1.404614288d0a5bc4d9fa.js.map