(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return f});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(150),l=n(188),c=n.n(l),m=n(155),u=n(153),p=n(156),d=n(160),h=n.n(d),y=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata,n=e.siteUrl,a=e.title,r=e.author,i=""+n+this.props.pageContext.slug,l=t.frontmatter,d=l.title,y=l.tags,f=l.date;return o.a.createElement(m.a,{location:this.props.location,title:a},o.a.createElement(u.a,{title:d,description:t.excerpt,url:i,type:"article"}),o.a.createElement(p.Helmet,{title:d},o.a.createElement("html",{amp:"true"}),o.a.createElement("script",{type:"text/javascript",src:"//cdn.ampproject.org/v0.js",async:!0}),o.a.createElement("style",{"amp-boilerplate":""},"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"),o.a.createElement("noscript",null,"<style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>"),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("link",{rel:"canonical",href:i}),o.a.createElement("meta",{name:"twitter:image",content:n+"/"+h()(d)+".png"}),o.a.createElement("amp-img",{src:n+"/"+h()(d)+".png",alt:d,height:"400",width:"800"}),o.a.createElement("script",{type:"application/ld+json"},'{\n                      "@context": "http://schema.org",\n                      "@type": "NewsArticle",\n                      "headline": "'+d+'",\n                      "datePublished": "'+f+'",\n                      "dateModified": "'+f+'",\n                      "author": "'+r+'",\n                      "publisher": {\n                        type: "Person",\n                        name: "'+r+'"\n                      },\n                      "mainEntityOfPage": "'+n+"/"+h()(d)+'",\n                      "image": [\n                        "'+n+"/"+h()(d)+'.png"\n                      ]\n                    }')),o.a.createElement("h1",null,t.frontmatter.title),y&&o.a.createElement("ul",{className:"tags",style:{paddingLeft:0}},y.map(function(t){return o.a.createElement("li",{key:t,className:"tag"},o.a.createElement(s.Link,{to:"/tags/"+h()(t)+"/"},t))})),o.a.createElement("p",null,c()(f,"MMMM DD, YYYY")),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",null))},e}(o.a.Component);e.default=y;var f="301085867"},150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(149),l=n.n(s);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(151),m=n.n(c);n.d(e,"PageRenderer",function(){return m.a});var u=n(32);n.d(e,"parsePath",function(){return u.a});var p=r.a.createContext({}),d=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(t,e,n){var a;t.exports=(a=n(152))&&a.default||a},152:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(51),l=n(2),c=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},153:function(t,e,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=(n(4),n(156)),s=n.n(o),l=n(150);function c(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title,u=t.url,p=t.type;return i.a.createElement(l.StaticQuery,{query:m,render:function(t){var a=e||t.site.siteMetadata.description,l=t.site.siteMetadata,m=l.title,d=l.author,h=l.siteUrl;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:""+m,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:url",content:u||h},{property:"og:type",content:p||"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}c.defaultProps={lang:"en",meta:[],keywords:[]},e.a=c;var m="1690466472"},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Konstantin Gorodinskiy",description:"A web developer, based in Paris.",author:"Konstantin",siteUrl:"https://konstantin.io"}}}}},155:function(t,e,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(150),l=function(){return o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",o.a.createElement("a",{href:"mailto:hi@konstantin.io?subject=hello"},"Konstantin"))},c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t=n&&"/"===n.pathname?o.a.createElement("h1",{style:{textAlign:"center"}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{className:"backLink"},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontWeight:300},to:"/"},o.a.createElement("span",{className:"arrow"},"←")," ",a)),o.a.createElement("div",null,t,r,o.a.createElement(l,null))},e}(o.a.Component);e.a=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-amp-js-4c2129deaaf785df474e.js.map