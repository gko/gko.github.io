(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(150),l=n(188),c=n.n(l),m=n(155),p=n(153),u=n(156),d=n(160),f=n.n(d),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata,n=t.siteUrl,a=t.title,r=t.author,i=this.props.pageContext,l=i.previous,d=i.next,y=""+n+i.slug,h=encodeURIComponent(y),g=e.frontmatter,b=g.title,v=g.tags,E=g.date,w=g.cover_image;return o.a.createElement(m.a,{location:this.props.location,title:a},o.a.createElement(p.a,{title:b,description:e.excerpt,url:y,type:"article"}),o.a.createElement(u.Helmet,{title:b},o.a.createElement("html",{amp:"true"}),o.a.createElement("script",{async:!0,src:"https://cdn.ampproject.org/v0.js"}),o.a.createElement("style",{"amp-boilerplate":""},"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"),o.a.createElement("noscript",null,"<style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>"),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("link",{rel:"canonical",href:y}),o.a.createElement("meta",{name:"twitter:image",content:w||n+"/"+f()(b)+".png"}),o.a.createElement("meta",{property:"og:image",content:w||n+"/"+f()(b)+".png"}),o.a.createElement("amp-img",{src:w||n+"/"+f()(b)+".png",alt:b,height:"400",width:"800"}),o.a.createElement("script",{type:"application/ld+json"},'{\n                      "@context": "http://schema.org",\n                      "@type": "NewsArticle",\n                      "headline": "'+b+'",\n                      "datePublished": "'+E+'",\n                      "dateModified": "'+E+'",\n                      "author": "'+r+'",\n                      "publisher": {\n                        type: "Person",\n                        name: "'+r+'"\n                      },\n                      "mainEntityOfPage": "'+n+"/"+f()(b)+'",\n                      "image": [\n                        "'+n+"/"+f()(b)+'.png"\n                      ]\n                    }')),o.a.createElement("h1",null,e.frontmatter.title),v&&o.a.createElement("ul",{className:"tags",style:{paddingLeft:0}},v.map(function(e){return o.a.createElement("li",{key:e,className:"tag"},o.a.createElement(s.Link,{to:"/tags/"+f()(e)+"/"},e))})),o.a.createElement("p",null,c()(E,"MMMM DD, YYYY")),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",null),o.a.createElement("p",{className:"share"},o.a.createElement("a",{className:"twitter",href:"https://twitter.com/intent/tweet?text="+h},"Tweet")),o.a.createElement("ul",{className:"navigation",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,margin:"2rem 0 0"}},o.a.createElement("li",null,l&&o.a.createElement(s.Link,{to:l.fields.slug,rel:"prev"},o.a.createElement("span",{className:"arrow"},"←")," ",l.frontmatter.title)),o.a.createElement("li",null,d&&o.a.createElement(s.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," ",o.a.createElement("span",{className:"arrow"},"→")))))},t}(o.a.Component);t.default=y;var h="301085867"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(149),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(151),m=n.n(c);n.d(t,"PageRenderer",function(){return m.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var u=r.a.createContext({}),d=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(51),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=(n(4),n(156)),s=n.n(o),l=n(150);function c(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,p=e.url,u=e.type;return i.a.createElement(l.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description,l=e.site.siteMetadata,m=l.title,d=l.author,f=l.siteUrl;return i.a.createElement(s.a,{htmlAttributes:{lang:n},titleTemplate:"%s — "+m,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:url",content:p||f},{property:"og:type",content:u||"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c;var m="1690466472"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Konstantin",description:"A web developer, based in Paris. I'm mostly a frontend developer, but also into devops and mobile stuff.",author:"Konstantin",siteUrl:"https://konstantin.io"}}}}},155:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(150),l=function(){return o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",o.a.createElement("a",{href:"mailto:hi@konstantin.io?subject=hello"},"Konstantin"))},c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e=n&&"/"===n.pathname?o.a.createElement("h1",{style:{textAlign:"center"}},a):o.a.createElement("h3",{className:"backLink"},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontWeight:300},to:"/"},o.a.createElement("span",{className:"arrow"},"←")," ",a)),o.a.createElement("div",null,e,r,o.a.createElement(l,null))},t}(o.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-amp-js-d3c951618457c15d73c4.js.map