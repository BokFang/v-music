(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3e0cb602"],{"341e":function(t,a,s){},"49d1":function(t,a,s){"use strict";var n=s("341e");s.n(n).a},"6c4f":function(t,a,s){t.exports=s.p+"img/avatar-loading.85723203.jpg"},"6d9e":function(t,a,s){"use strict";var n=s("766c");s.n(n).a},7220:function(t,a,s){"use strict";var n=s("b000");s.n(n).a},"766c":function(t,a,s){},"7d2a":function(t,a,s){"use strict";var n=s("5530"),i=(s("a9e3"),{props:{song:{type:String},artist:{type:String},album:{type:String},index:{type:Number},showId:{type:Boolean,default:!0}},methods:{selectSong:function(t,a){this.$emit("select",a,t)}}}),e=(s("7220"),s("2877")),c=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"song-list",on:{click:function(a){return t.selectSong(t.index,t.song)}}},[s("span",{staticClass:"num"},[t._v(t._s(t.index+1))]),s("main",[s("p",{staticClass:"song-name"},[t._v(t._s(t.song))]),s("p",{staticClass:"ablum-name"},[s("span",[t._v(t._s(t.artist))]),s("span",[t._v(" - "+t._s(t.album))])])]),s("div",{staticClass:"options"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-MVplay"}})]),s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-more"}})])])])}),[],!1,null,"054454aa",null).exports,r=s("f9f7"),l=s("2f62"),o=s("c31c"),u={props:{songs:{type:Array},avatarUrl:{type:String}},data:function(){return{scrollY:0}},components:{SongList:c,Scroll:r.a,Loading:o.a},methods:Object(n.a)({back:function(){this.$router.go(-1)},selectSong:function(t,a){this.selectPlay({list:this.songs,index:a})},playAll:function(){this.selectPlay({list:this.songs,index:0})}},Object(l.b)(["selectPlay"])),watch:{},mounted:function(){this.$refs.list.$el.style.top="".concat(this.$refs.bgImage.clientHeight,"px")},computed:{bgStyle:function(){return"background-image:url(".concat(this.avatarUrl,")")}}},d=(s("49d1"),Object(e.a)(u,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"music-list"},[s("div",{ref:"bgImage",staticClass:"header",style:t.bgStyle},[s("div",{staticClass:"top"},[s("svg",{staticClass:"icon back",attrs:{"aria-hidden":"true"},on:{click:t.back}},[s("use",{attrs:{"xlink:href":"#icon-back"}})]),s("svg",{staticClass:"icon share",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-share"}})])])]),s("scroll",{ref:"list",staticClass:"wrapper",attrs:{data:t.songs,"probe-type":3,"listen-scroll":!0}},[s("div",[s("div",{staticClass:"playAll",on:{click:t.playAll}},[s("svg",{staticClass:"icon play",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-play"}})]),s("span",[t._v("播放热门歌曲")])]),t._l(t.songs,(function(a,n){return s("song-list",{key:n,attrs:{song:a.name,index:n,artist:a.artist,album:a.album},on:{select:t.selectSong}})})),s("loading",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading"})],2)])],1)}),[],!1,null,"42ce0720",null));a.a=d.exports},b000:function(t,a,s){},b0c0:function(t,a,s){var n=s("83ab"),i=s("9bf2").f,e=Function.prototype,c=e.toString,r=/^\s*function ([^ (]*)/,l="name";n&&!(l in e)&&i(e,l,{configurable:!0,get:function(){try{return c.call(this).match(r)[1]}catch(t){return""}}})},c31c:function(t,a,s){"use strict";var n={data:function(){return{}}},i=(s("6d9e"),s("2877")),e=Object(i.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-loading"}})])}),[],!1,null,"d560a6e2",null);a.a=e.exports},f5de:function(t,a,s){"use strict";s.d(a,"a",(function(){return i})),s("b0c0");var n=function t(a){var s=a.id,n=a.name,i=a.album,e=a.artist,c=a.albumId,r=a.albumPic;(function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")})(this,t),this.id=s,this.name=n,this.album=i,this.artist=e,this.albumId=c,this.albumPic=r};function i(t){return new n({id:t.id,name:t.name,album:t.al.name,artist:t.ar[0].name,albumId:t.al.id,albumPic:t.al.picUrl})}},f814:function(t,a,s){"use strict";s.r(a);var n=(s("4160"),s("159b"),s("5530")),i=s("2f62"),e=s("f5de"),c=s("7d2a"),r=s("6c4f"),l={data:function(){return{songs:[],avatarUrl:r}},components:{MusicList:c.a},methods:{getSingerDetail:function(t){var a=this;t?this.$http.get("http://49.233.137.79:4000/artists?id=".concat(t)).then((function(t){a.songs.length=0,a.avatarUrl="".concat(t.data.artist[0].picUrl,"?param=300x300"),t.data.hotSongs.forEach((function(t){a.songs.push(Object(e.a)(t))}))})).catch((function(t){console.log(t)})):this.$router.push("/singer")}},computed:Object(n.a)({},Object(i.c)(["singer"])),watch:{},created:function(){var t=this.$route.params.id;this.getSingerDetail(t)}},o=s("2877"),u=Object(o.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"slide-fade"}},[s("music-list",{attrs:{songs:t.songs,avatarUrl:t.avatarUrl}})],1)}),[],!1,null,"acfcf660",null);a.default=u.exports}}]);