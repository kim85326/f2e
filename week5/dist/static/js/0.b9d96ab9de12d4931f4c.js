webpackJsonp([0],{"1pr2":function(t,e){},"7Vt3":function(t,e){},Km5R:function(t,e){},Mooi:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"Breadcrumbs",props:{comic:{type:String,default:"漫畫名稱"},currentChapter:{type:Number,default:1},countChapters:{type:Number,default:1},currentPage:{type:Number,default:1},countPages:{type:Number,default:1}},methods:{updateField:function(t,e){this.$emit("update:current"+t,1*e.target.value)}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumbs"},[r("div",{staticClass:"comic"},[t._v(t._s(t.comic))]),t._v(" "),r("i",{staticClass:"fas fa-caret-right"}),t._v(" "),r("select",{staticClass:"chapter",domProps:{value:t.currentChapter},on:{change:function(e){e.preventDefault(),t.updateField("Chapter",e)}}},t._l(t.countChapters,function(e){return r("option",{key:e,domProps:{value:e}},[t._v("Chapter "+t._s(e))])})),t._v(" "),r("select",{staticClass:"page",domProps:{value:t.currentPage},on:{change:function(e){e.preventDefault(),t.updateField("Page",e)}}},t._l(t.countPages,function(e){return r("option",{key:e,domProps:{value:e}},[t._v("Page "+t._s(e))])}))])},staticRenderFns:[]};var c=r("VU/8")(a,n,!1,function(t){r("7Vt3")},"data-v-4f96a325",null).exports,i={name:"ArrowBtn",props:{direction:{type:String,default:"left"}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"arrowBtn",attrs:{href:"javascript:;"}},["up"==t.direction?r("i",{staticClass:"fas fa-angle-up"}):t._e(),t._v(" "),"down"==t.direction?r("i",{staticClass:"fas fa-angle-down"}):t._e(),t._v(" "),"left"==t.direction?r("i",{staticClass:"fas fa-angle-left"}):t._e(),t._v(" "),"right"==t.direction?r("i",{staticClass:"fas fa-angle-right"}):t._e()])])},staticRenderFns:[]};var u=r("VU/8")(i,s,!1,function(t){r("1pr2")},"data-v-7deda4a0",null).exports,o={name:"ChapterThumb",props:{currentPage:{type:Number,default:1},pages:{type:Array,require:!0}},methods:{updateCurrentPage:function(t){this.$emit("update:currentPage",t)}},watch:{currentPage:function(){var t=this;if(!this.$el)return!1;this.$nextTick(function(){var e=t.$el.querySelector("ul"),r=e.querySelector("li>a.active");if(!r)return!1;e.scrollLeft=r.offsetLeft-e.offsetLeft-e.offsetWidth/2+r.offsetWidth/2})}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chapterThumb"},[r("ul",t._l(t.pages,function(e,a){return r("li",{key:a},[r("a",{class:{active:t.currentPage-1==a},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.updateCurrentPage(a+1)}}},[r("span",[t._v(t._s(a+1))]),t._v(" "),r("img",{attrs:{src:e}})])])}))])},staticRenderFns:[]};var p={name:"Reading",components:{Breadcrumbs:c,ArrowBtn:u,ChapterThumb:r("VU/8")(o,l,!1,function(t){r("plNd")},"data-v-6cd152ae",null).exports},data:function(){return{comicId:null,name:null,currentChapter:null,chapters:[],currentPage:1,pages:[]}},computed:{currentImgSrc:function(){return this.pages[this.currentPage-1]}},watch:{currentChapter:function(){this.$router.replace("/comic/"+this.comicId+"/chapter/"+this.currentChapter)}},methods:{getApiData:function(){var t=this;this.$http.get("/static/data.json").then(function(e){var r=t.comicId-1,a=t.currentChapter-1;if(r>=0&&r<e.data.comics.length){var n=e.data.comics[r];t.name=n.name,t.chapters=n.chapters.slice(0),a>=0&&a<t.chapters.length?t.pages=n.chapters[a].pages.slice(0):(alert("抱歉！目前還沒有章節"),t.$router.replace("/comic/"+t.comicId))}else alert("抱歉！目前還沒有這本書"),t.$router.replace("/home")}).catch(function(t){console.log(t)})},prevPage:function(){this.currentPage>1&&this.currentPage--},nextPage:function(){this.currentPage<this.pages.length&&this.currentPage++}},mounted:function(){this.comicId=1*this.$route.params.id,this.currentChapter=1*this.$route.params.cid,this.getApiData()}},d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.pages.length?r("div",{staticClass:"reading"},[r("Breadcrumbs",{attrs:{comic:t.name,currentChapter:t.currentChapter,countChapters:t.chapters.length,currentPage:t.currentPage,countPages:t.pages.length},on:{"update:currentChapter":function(e){t.currentChapter=e},"update:currentPage":function(e){t.currentPage=e}}}),t._v(" "),r("div",{staticClass:"main"},[r("ArrowBtn",{attrs:{direction:"left"},nativeOn:{click:function(e){return t.prevPage(e)}}}),t._v(" "),r("div",{staticClass:"imgBox"},[r("img",{attrs:{src:t.currentImgSrc}})]),t._v(" "),r("ArrowBtn",{attrs:{direction:"right"},nativeOn:{click:function(e){return t.nextPage(e)}}})],1),t._v(" "),r("ChapterThumb",{attrs:{currentPage:t.currentPage,pages:t.pages},on:{"update:currentPage":function(e){t.currentPage=e}}})],1):t._e()},staticRenderFns:[]};var f=r("VU/8")(p,d,!1,function(t){r("Km5R")},"data-v-00e2114e",null);e.default=f.exports},plNd:function(t,e){}});
//# sourceMappingURL=0.b9d96ab9de12d4931f4c.js.map