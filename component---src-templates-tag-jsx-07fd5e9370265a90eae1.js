(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return h}),a.d(e,"pageQuery",function(){return m});var r=a(6),n=a.n(r),s=a(0),i=a.n(s),o=a(155),l=a.n(o),c=a(158),p=a(187),u=a(154),d=a.n(u),h=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t=this.props.pageContext.tag,e=this.props.data.allMarkdownRemark.edges;return i.a.createElement(c.a,null,i.a.createElement("div",{className:"tag-container"},i.a.createElement(l.a,{title:'Posts tagged as "'+t+'" | '+d.a.siteTitle}),i.a.createElement(p.a,{postEdges:e})))},e}(i.a.Component),m="3824571933"},154:function(t,e,a){a(33);var r={siteTitle:"Gatsby Advanced Starter",siteTitleShort:"GA Starter",siteTitleAlt:"GatsbyJS Advanced Starter",siteLogo:"/logos/logo-1024.png",siteUrl:"https://vagr9k.github.io",pathPrefix:"/gatsby-advanced-starter",siteDescription:"A GatsbyJS stater with Advanced design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),t.exports=r},158:function(t,e,a){"use strict";a.d(e,"a",function(){return u});var r=a(6),n=a.n(r),s=a(0),i=a.n(s),o=a(155),l=a.n(o),c=a(154),p=a.n(c),u=(a(159),function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:p.a.siteDescription})),t)},e}(i.a.Component))},159:function(t,e,a){},187:function(t,e,a){"use strict";a(73);var r=a(6),n=a.n(r),s=a(0),i=a.n(s),o=a(34),l=function(t){function e(){return t.apply(this,arguments)||this}n()(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},a.render=function(){var t=this.getPostList();return i.a.createElement("div",null,t.map(function(t){return i.a.createElement(o.Link,{to:t.path,key:t.title},i.a.createElement("h1",null,t.title))}))},e}(i.a.Component);e.a=l}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-07fd5e9370265a90eae1.js.map