(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=(a(149),a(158),a(154)),l=a(152),c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata,a=t.title,r=t.siteUrl;return o.a.createElement(s.a,{location:this.props.location,title:a},o.a.createElement(l.a,{title:e.frontmatter.title,description:e.excerpt,url:r+e.fields.slug}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))},t}(o.a.Component);t.default=c;var d="3542290590"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(148),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(150),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var A=i.a.createContext({}),f=function(e){return i.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},151:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(51),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";var r=a(153),i=a(0),n=a.n(i),o=(a(4),a(155)),s=a.n(o),l=a(149);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,c=e.title,u=e.url,A=e.type;return n.a.createElement(l.StaticQuery,{query:d,render:function(e){var r=t||e.site.siteMetadata.description,l=e.site.siteMetadata,d=l.title,f=l.author,p=l.siteUrl;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:""+d,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:url",content:u||p},{property:"og:type",content:A||"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:r})}c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c;var d="1690466472"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Konstantin Gorodinskiy",description:"A web developer, based in Paris.",author:"Konstantin",siteUrl:"https://konstantin.io"}}}}},154:function(e,t,a){"use strict";var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(149),l=function(){return o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",o.a.createElement("a",{href:"mailto:hi@konstantin.io?subject=hello"},"Konstantin"))},c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e=a&&"/"===a.pathname?o.a.createElement("h1",{style:{textAlign:"center"}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{className:"backLink"},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontWeight:300},to:"/"},o.a.createElement("span",{className:"arrow"},"←")," ",r)),o.a.createElement("div",null,e,i,o.a.createElement(l,null))},t}(o.a.Component);t.a=c},158:function(e,t,a){"use strict";a(159);var r=a(161),i=a(0),n=a.n(i),o=a(149),s=a(162),l=a.n(s);var c="2377636077";t.a=function(){return n.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"1em"},className:"bio"},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"15%"}}),n.a.createElement("p",{className:"social"},n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"twitter")," ","• ",n.a.createElement("a",{href:"https://github.com/"+r.github},"github")," ","• ",n.a.createElement("a",{href:"/cv"},"CV")))},data:r})}},159:function(e,t,a){"use strict";a(160)("fixed",function(e){return function(){return e(this,"tt","","")}})},160:function(e,t,a){var r=a(11),i=a(24),n=a(16),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},161:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHCjXovSjztwZA//8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDABMhIv/aAAgBAQABBQJaMDOxQj1nadLWUBDZUY7karse/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAABAwMFAAAAAAAAAAAAAAABACFBAgMQERIiYbH/2gAIAQEABj8C3BmZdSidFSHELk7gCER5i2K4GP/EAB4QAQADAAEFAQAAAAAAAAAAAAEAESExQVFhcYGx/9oACAEBAAE/ISddqW/ZblVPKIWgXHxUquGhvIcW4gi6D07ziNX1BsXZ9mmf/9oADAMBAAIAAwAAABDjCDz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEBAAMAAwEBAAAAAAAAAAABEQAhMUFRkbHB/9oACAEBAAE/EBaBlKoXY9WYetEGx+8cZKISdMHKZgBApwCPqGRMQQBFFAhPNck+KgCBHkwWLIUmo9/mHpCqdWyvz9xgoaUO63n/2Q==",width:180,height:180,src:"/static/a29978521cbc986f9ac68e3413c35e47/e72f0/profile-pic.jpg",srcSet:"/static/a29978521cbc986f9ac68e3413c35e47/e72f0/profile-pic.jpg 1x,\n/static/a29978521cbc986f9ac68e3413c35e47/a0b5c/profile-pic.jpg 1.5x,\n/static/a29978521cbc986f9ac68e3413c35e47/90853/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Konstantin",social:{twitter:"konstantin",github:"gko",linkedin:"gorodinskiy"}}}}}},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(52)),s=r(a(164)),l=r(a(165)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+s+l+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.Tag,b="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var x=p;return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(m,(0,l.default)({src:x.base64},S)),x.tracedSVG&&c.default.createElement(m,(0,l.default)({src:x.tracedSVG},S)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(m,{alt:a,title:t,src:x.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(h){var j=h,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete R.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&c.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(m,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:E,sizes:b,fixed:E,fluid:b,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-templates-page-js-152c2f5d4fd1affeaa69.js.map