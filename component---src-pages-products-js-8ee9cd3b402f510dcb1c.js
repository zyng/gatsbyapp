(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7],{141:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i);t.default=function(e){var t=e.body,a=e.title,i=e.img,r=e.reverse;return n.a.createElement("div",{className:"content "+(r?"reverse":"")},n.a.createElement("img",{src:i,alt:""}),n.a.createElement("div",{className:"content__body"},n.a.createElement("div",{className:"content__title"},a),n.a.createElement("div",{className:"content__text"},t)))}},147:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(156),o=a(154),s=a(141),c=a(173),u=a.n(c),l=a(174),m=a.n(l),d=[{id:1,title:"Product 1",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi, quaerat voluptates tempora sed animi? Possimus ad quisquam amet quia commodi non repudiandae? Nesciunt incidunt qui eius at ad? Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur distinctio nulla similique quis aliquid magnam, accusantium ut doloremque ipsa nisi quo mollitia cupiditate excepturi laboriosam? Facere distinctio id sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque est illum? Quos eos voluptates asperiores quo doloribus iure molestias reprehenderit molestiae maxime, harum a, veniam, accusantium animi corporis aliquam.",img:u.a},{id:2,title:"Product 2",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi, quaerat voluptates tempora sed animi? Possimus ad quisquam amet quia commodi non repudiandae? Nesciunt incidunt qui eius at ad? Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur distinctio nulla similique quis aliquid magnam, accusantium ut doloremque ipsa nisi quo mollitia cupiditate excepturi laboriosam? Facere distinctio id sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque est illum? Quos eos voluptates asperiores quo doloribus iure molestias reprehenderit molestiae maxime, harum a, veniam, accusantium animi corporis aliquam.",img:m.a}];t.default=function(){var e=d.map(function(e){return n.a.createElement(s.default,{key:e.id,title:e.title,body:e.body,img:e.img,reverse:e.id%2==0})});return n.a.createElement(r.a,null,n.a.createElement(o.a,{title:"Products Page"}),n.a.createElement("section",{className:"page-content"},n.a.createElement("div",{className:"page-content__title"},"our products"),e))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(32),c=a.n(s);a.d(t,"a",function(){return c.a});a(150);var u=n.a.createContext({}),l=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var i;e.exports=(i=a(152))&&i.default||i},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(54),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,a){e.exports=a.p+"static/header1-d33bdac5b79f7c65816bc59af88a2453.jpg"},154:function(e,t,a){"use strict";var i=a(155),n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=a(158),u=a.n(c),l=a(149);function m(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return r.a.createElement(l.b,{query:d,render:function(e){var i=t||e.site.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:i})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var d="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},156:function(e,t,a){"use strict";var i=a(151),n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=a(149),u=(a(157),a(14)),l=a(7),m=a.n(l),d=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).handleClick=function(e){e.target.parentNode.classList.toggle("active")},t}return m()(t,e),t.prototype.render=function(){return r.a.createElement("header",{className:"page-nav"},r.a.createElement(c.a,{to:"/",className:"logo"},"logo"),r.a.createElement("nav",null,r.a.createElement("button",{className:"hamburger",onClick:this.handleClick}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{to:"/",activeClassName:"active"},"home")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/products",activeClassName:"active"},"products")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/about",activeClassName:"active"},"about")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/contact",activeClassName:"active"},"contact")))))},t}(n.Component),p=a(153),g=a.n(p),f=function(e){var t="";switch(e.location.pathname){case"/gatsbyapp/":t="home";break;case"/gatsbyapp/products":t="products";break;case"/gatsbyapp/about":t="about us";break;case"/gatsbyapp/contact":t="contact";break;default:t="404 Error"}return r.a.createElement("div",{className:"page-header"},r.a.createElement("img",{src:g.a,alt:"page main photo"}),r.a.createElement("p",null,t))},b=function(e){var t=e.children;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(u.Location,null,function(e){var t=e.location;return r.a.createElement(f,{location:t})}),r.a.createElement("main",null,t))},data:i})};b.propTypes={children:s.a.node.isRequired};t.a=b},173:function(e,t,a){e.exports=a.p+"static/img5-eb2223b8806edabca98707ae1fd91a98.jpg"},174:function(e,t,a){e.exports=a.p+"static/img6-17a8fba5f17497ce0f33bc8a2e9d8104.jpg"}}]);
//# sourceMappingURL=component---src-pages-products-js-8ee9cd3b402f510dcb1c.js.map