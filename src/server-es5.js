!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("material-ui/Divider")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("material-ui/TextField")},function(e,t){e.exports=require("material-ui/FlatButton")},function(e,t){e.exports=require("material-ui/Card")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),u=n(5),i=r(u),l=n(25),s=r(l),c=function(e){var t=e.error,n=e.open,r=e.close;return o.default.createElement(s.default,{key:"snack",open:n,message:t||"Error",autoHideDuration:2e3,onRequestClose:r})};c.propTypes={open:i.default.bool.isRequired,error:i.default.string,close:i.default.func.isRequired},t.default=c},function(e,t){e.exports=require("mongoose")},function(e,t,n){n(12),e.exports=n(13)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(0),o=r(a),u=n(14),i=n(1),l=n(15),s=r(l);n(32).config({path:".env"});var c=n(33),d=n(34),f=n(10),p=n(35),h=c(),m=n(36);f.connect(process.env.DATABASE,{useMongoClient:!0}).then(f.Promise=global.Promise),f.connection.on("error",function(e){console.error("🚫 → "+e.message)}),h.set("view engine","ejs"),h.set("views",p.join(__dirname,"views")),h.use(c.static(p.join(__dirname,"static"))),h.use(d.urlencoded({extended:!0})),h.use(d.json()),m(h),h.get("*",function(e,t){var n={},r=(0,u.renderToString)(o.default.createElement(i.StaticRouter,{location:e.url,context:n},o.default.createElement(s.default,null)));t.status(n.statusCode||200).render("layout",{html:r})});var v=process.env.PORT||7777;h.listen(v,function(){return console.log("[35m%s[0m","Express running → http://localhost:"+v)})},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),u=n(1),i=n(16),l=r(i),s=n(17),c=r(s),d=n(18),f=r(d),p=n(26),h=r(p),m=function(e){var t=e.children,n={height:"100vh",background:"whitesmoke"};return o.default.createElement("div",{style:n},o.default.createElement(c.default,null,t))},v=function(){return o.default.createElement(l.default,null,o.default.createElement(m,null,o.default.createElement(u.Switch,null,o.default.createElement(u.Route,{exact:!0,path:"/",component:f.default}),o.default.createElement(u.Route,{path:"/post/:id",component:h.default}),o.default.createElement(u.Route,{render:function(){return o.default.createElement("img",{style:{width:"100%"},src:"http://404-resto.com/typo3temp/pics/7580ea80fa.jpg"})}}))))};t.default=v},function(e,t){e.exports=require("material-ui/styles/MuiThemeProvider")},function(e,t){e.exports=require("material-ui/Paper")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=r(l),c=n(1),d=n(2),f=r(d),p=n(3),h=r(p),m=n(19),v=r(m),y=n(20),b=n(4),g=r(b),x=n(21),E=r(x),k=n(22),w=n(23),C=r(w),_=n(24),P=r(_),S=["/images/rick.png","/images/morty.jpg","/images/doofus-rick.jpg","/images/Evilmorty.jpg"],j=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={posts:[]},e.handleData=e.handleData.bind(e),e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;f.default.get("/api/post").then(function(t){return e.handleState(t.data)})}},{key:"handleData",value:function(){var e=this;f.default.get("/api/post").then(function(t){return e.handleState(t.data)})}},{key:"handleState",value:function(e){this.setState({posts:e})}},{key:"render",value:function(){var e=this.state.posts;return s.default.createElement(y.List,{style:{padding:0}},s.default.createElement(y.ListItem,{containerElement:s.default.createElement(P.default,{addPost:this.handleData})}),s.default.createElement(g.default,null),s.default.createElement(C.default,null,"Latests Posts"),e.map(function(e){return s.default.createElement("div",{key:e._id},s.default.createElement(y.ListItem,{leftAvatar:s.default.createElement(E.default,{src:v.default.sample(S)}),primaryText:s.default.createElement("p",null,e.title,s.default.createElement("span",{style:{color:k.lightBlack,fontSize:"0.7em"}},"  ",(0,h.default)(e.created).fromNow())),secondaryText:e.text,secondaryTextLines:2,hoverColor:k.cyan100,containerElement:s.default.createElement(c.Link,{to:"/post/"+e._id})}),s.default.createElement(g.default,{inset:!0}))}))}}]),t}(s.default.Component);t.default=j},function(e,t){e.exports=require("lodash/collection")},function(e,t){e.exports=require("material-ui/List")},function(e,t){e.exports=require("material-ui/Avatar")},function(e,t){e.exports=require("material-ui/styles/colors")},function(e,t){e.exports=require("material-ui/Subheader")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=r(l),c=n(5),d=r(c),f=n(2),p=r(f),h=n(6),m=r(h),v=n(7),y=r(v),b=n(8),g=n(9),x=r(g),E=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={title:"",text:"",error:"",snackbar:!1},e.handleChange=e.handleChange.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e.handleError=e.handleError.bind(e),e}return u(t,e),i(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.id,r=t.value;"title"===n?this.setState({title:r}):this.setState({text:r})}},{key:"handleSubmit",value:function(){var e=this,t=this.state,n=t.title,r=t.text;p.default.post("/api/post",{title:n,text:r}).then(function(){e.props.addPost(),e.setState({title:"",text:""})}).catch(function(t){return e.handleError(!0,t.response.data)})}},{key:"handleError",value:function(e,t){this.setState({snackbar:e,error:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.text,r=t.title,a=t.error,o=t.snackbar;return s.default.createElement(b.Card,{key:"card",style:{boxShadow:"0 0"}},s.default.createElement(b.CardHeader,{title:"Create post",actAsExpander:!0,showExpandableButton:!0}),s.default.createElement(b.CardText,{expandable:!0},s.default.createElement(m.default,{id:"title",floatingLabelText:"Title",value:r,fullWidth:!0,onChange:this.handleChange}),s.default.createElement(m.default,{id:"text",floatingLabelText:"Post",multiLine:!0,value:n,fullWidth:!0,onChange:this.handleChange}),s.default.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},s.default.createElement(y.default,{onClick:this.handleSubmit,style:{marginTop:"20px"},label:"Submit",primary:!0}))),s.default.createElement(x.default,{key:"snack",error:a,open:o,close:function(){return e.handleError(!1,a)}}))}}]),t}(s.default.Component);E.propTypes={addPost:d.default.func.isRequired},t.default=E},function(e,t){e.exports=require("material-ui/Snackbar")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=r(l),c=n(2),d=r(c),f=n(3),p=r(f),h=n(8),m=n(27),v=r(m),y=n(4),b=r(y),g=n(28),x=r(g),E=n(29),k=r(E),w=n(30),C=r(w),_=n(31),P=r(_),S=n(7),j=r(S),q=n(6),O=r(q),T=n(9),R=r(T),M=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={title:"",text:"",created:"",open:!1,edit:!1,error:"",snackbar:!1},e.removePost=e.removePost.bind(e),e.handleOpen=e.handleOpen.bind(e),e.handleClose=e.handleClose.bind(e),e.handleChange=e.handleChange.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e.handleError=e.handleError.bind(e),e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;d.default.get("/api/post/"+t).then(function(t){return e.handleData(t.data)}).catch(function(t){return e.handleError(!0,t.response.data)})}},{key:"handleData",value:function(e){var t=e.title,n=e.text,r=e.created;this.setState({title:t,text:n,created:r})}},{key:"handleEdit",value:function(e){this.setState({edit:e})}},{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleChange",value:function(e){var t=e.target,n=t.id,r=t.value;"title"===n?this.setState({title:r}):this.setState({text:r})}},{key:"handleSubmit",value:function(){var e=this,t=this.props.match.params.id,n=this.state,r=n.title,a=n.text;d.default.put("/api/post/"+t,{title:r,text:a}).then(function(){return e.handleEdit(!1)}).catch(function(t){return e.handleError(!0,t.response.data)})}},{key:"handleError",value:function(e,t){this.setState({snackbar:e,error:t})}},{key:"removePost",value:function(){var e=this,t=this.props.match.params.id;d.default.delete("/api/post/"+t).then(function(){e.handleClose(),e.props.history.goBack()})}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,r=t.text,a=t.created,o=t.edit,u=t.error,i=t.snackbar,l=[s.default.createElement(j.default,{key:"cancel",label:"Cancel",primary:!0,onClick:this.handleClose}),s.default.createElement(j.default,{key:"submit",label:"Submit",primary:!0,onClick:this.removePost})],c={title:o?s.default.createElement(O.default,{id:"title",defaultValue:n,onChange:this.handleChange}):n,text:o?s.default.createElement(O.default,{id:"text",defaultValue:r,onChange:this.handleChange,fullWidth:!0,multiLine:!0}):r};return s.default.createElement("div",null,s.default.createElement(h.Card,{style:{boxShadow:"0 0"}},s.default.createElement(h.CardHeader,{style:{padding:"8px"},title:s.default.createElement(v.default,{onClick:function(){return e.props.history.goBack()}},s.default.createElement(C.default,null))})),s.default.createElement(b.default,null),s.default.createElement(h.Card,{style:{boxShadow:"0 0",margin:"10px 0"}},s.default.createElement(h.CardHeader,{title:"username",avatar:"/images/Evilmorty.jpg",subtitle:"name"}),s.default.createElement(h.CardTitle,{title:c.title,subtitle:a&&(0,p.default)(a).fromNow(),subtitleStyle:{fontSize:"12px"},onClick:function(){return e.handleEdit(!0)}}),s.default.createElement(h.CardText,{style:{whiteSpace:"pre-wrap"},onClick:function(){return e.handleEdit(!0)}},c.text),s.default.createElement(b.default,null),s.default.createElement(h.CardActions,null,!o&&s.default.createElement(v.default,{onClick:this.handleOpen},s.default.createElement(x.default,null)),o&&s.default.createElement(v.default,{onClick:this.handleSubmit},s.default.createElement(k.default,null)))),s.default.createElement(R.default,{key:"snack",error:u,open:i,close:function(){return e.handleError(!1,u)}}),s.default.createElement(P.default,{bodyClassName:"device",actions:l,modal:!1,open:this.state.open,onRequestClose:this.handleClose}," Discard post?"))}}]),t}(s.default.Component);t.default=M},function(e,t){e.exports=require("material-ui/IconButton")},function(e,t){e.exports=require("material-ui/svg-icons/action/delete")},function(e,t){e.exports=require("material-ui/svg-icons/action/done")},function(e,t){e.exports=require("material-ui/svg-icons/navigation/arrow-back")},function(e,t){e.exports=require("material-ui/Dialog")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";var r=n(37),a=function(e){return function(t,n,r){return e(t,n,r).catch(r)}};e.exports=function(e){e.route("/api/post").get(a(r.getAllPosts)).post(r.checkBody,a(r.createPost)),e.route("/api/post/:id").get(r.checkId,a(r.getSinglePost)).delete(r.checkId,a(r.deletePost)).put(r.checkId,r.checkBody,a(r.updatePost))}},function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var u=t[a](o),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}var a=n(38),o={noContent:"You should write something",noTitle:"Please provide a title",maxLength:"That's a very long text",postNotFound:"Post not found!"};t.checkBody=function(e,t,n){var r=e.body,a=r.title,u=r.text;return a.length>1e3||u.length>1e3?t.status(500).send(o.maxLength):0===u.length?t.status(500).send(o.noContent):0===a.length?t.status(500).send(o.noTitle):void n()},t.checkId=function(e,t,n){var r=e.params.id,a=new RegExp("^[0-9a-fA-F]{24}$");return"string"==typeof r&&24==r.length&&a.test(r)?n():t.status(500).send(o.postNotFound)},t.createPost=function(){var e=r(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new a(t.body).save();case 2:r=e.sent,n.json(r);case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}(),t.getAllPosts=function(){var e=r(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.find().sort({created:-1}).limit(10);case 2:r=e.sent,n.json(r);case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}(),t.getSinglePost=function(){var e=r(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.findById(t.params.id);case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",n.status(500).send(o.postNotFound));case 5:n.json(r);case 6:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}(),t.deletePost=function(){var e=r(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.findByIdAndRemove(t.params.id);case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",n.status(500).send(o.postNotFound));case 5:n.json({message:"post removed"});case 6:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}(),t.updatePost=function(){var e=r(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.findByIdAndUpdate(t.params.id,t.body,{new:!0});case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",n.status(500).send(o.postNotFound));case 5:n.json(r);case 6:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}()},function(e,t,n){"use strict";var r=n(10),a=n(39),o=new r.Schema({title:{type:String,required:!0,trim:!0,maxlength:1e3},text:{type:String,required:!0,trim:!0,maxlength:1e3},created:{type:Date,default:Date.now}});o.plugin(a),e.exports=r.model("Post",o)},function(e,t){e.exports=require("mongoose-mongodb-errors")}]);