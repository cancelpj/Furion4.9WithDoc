"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9173],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,v=m["".concat(p,".").concat(u)]||m[u]||l[u]||r;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5860:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),o=t(4996),s=["components"],p={id:"get-start",title:"2.1 ASP.NET 5 \u96c6\u6210",sidebar_label:"2.1 ASP.NET 5 \u96c6\u6210"},c=void 0,d={unversionedId:"get-start",id:"get-start",title:"2.1 ASP.NET 5 \u96c6\u6210",description:"Furion \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002",source:"@site/docs/get-start.mdx",sourceDirName:".",slug:"/get-start",permalink:"/furion/docs/get-start",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/get-start.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"get-start",title:"2.1 ASP.NET 5 \u96c6\u6210",sidebar_label:"2.1 ASP.NET 5 \u96c6\u6210"},sidebar:"docs",previous:{title:"2.0 \u6781\u901f\u4e0a\u624b \u2728",permalink:"/furion/docs/serverun"},next:{title:"2.1 ASP.NET 6 \u96c6\u6210",permalink:"/furion/docs/get-start-net6"}},l={},m=[{value:"2.1 \u521b\u5efa <code>Web</code> \u9879\u76ee",id:"21-\u521b\u5efa-web-\u9879\u76ee",level:2},{value:"2.1.1 \u521b\u5efa <code>ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f</code>",id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"2.2 \u6dfb\u52a0 <code>Furion</code> \u4f9d\u8d56\u5305",id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",level:2},{value:"2.3 <code>Furion</code> \u57fa\u672c\u914d\u7f6e",id:"23-furion-\u57fa\u672c\u914d\u7f6e",level:2},{value:"2.3.1 <code>Program.cs</code> \u6dfb\u52a0 <code>Inject()</code>",id:"231-programcs-\u6dfb\u52a0-inject",level:3},{value:"2.3.2 \u5728 <code>Startup.cs</code> \u4e2d\u6dfb\u52a0\u4e24\u4e2a <code>Inject()</code>",id:"232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject",level:3},{value:"2.4 \u542f\u52a8\u6d4f\u89c8\u5668",id:"24-\u542f\u52a8\u6d4f\u89c8\u5668",level:2}],u={toc:m};function v(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"),(0,r.kt)("p",{parentName:"div"},"\u63a8\u8350\u4f7f\u7528 \u300a",(0,r.kt)("a",{parentName:"p",href:"/furion/docs/template"},"2.2 \u5b98\u65b9\u811a\u624b\u67b6"),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5165\u95e8\u6761\u4ef6")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET Core/ASP.NET Core")," \u6709\u4e00\u5b9a\u57fa\u7840\u4e86\u89e3\uff0c\u8fd8\u672a\u63a5\u89e6\u7684\u53ef\u5148\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/?view=aspnetcore-5.0&tabs=windows"},"\u3010ASP.NET Core \u57fa\u7840\u3011")))),(0,r.kt)("h2",{id:"21-\u521b\u5efa-web-\u9879\u76ee"},"2.1 \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h2"},"Web")," \u9879\u76ee"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u73af\u5883\u8981\u6c42")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e4b\u524d\u5148\u786e\u4fdd\u5b89\u88c5\u4e86\u6700\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET 5 SDK")," \u5e76\u5347\u7ea7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u81f3\u6700\u65b0\u7248\u3002"))),(0,r.kt)("h3",{id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f"},"2.1.1 \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h3"},"ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"li"},"Visual Studio 2019")," \u5e76\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"Web")," \u9879\u76ee")),(0,r.kt)("img",{src:(0,o.Z)("img/rm1.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u76ee\u540d\u79f0")),(0,r.kt)("img",{src:(0,o.Z)("img/rm2.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"WebAPI")," \u9879\u76ee")),(0,r.kt)("img",{src:(0,o.Z)("img/rm3.png")}),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u7279\u522b\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u5df2\u7ecf\u5185\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger")," \u89c4\u8303\u5316\u5e93\uff0c\u6240\u4ee5\u521b\u5efa\u65f6",(0,r.kt)("strong",{parentName:"p"},"\u65e0\u9700\u52fe\u9009")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable OpenAPI support")," \u9009\u9879\u3002\u5426\u5219\u63d0\u793a\u7248\u672c\u4e0d\u4e00\u81f4\u4ea7\u751f\u51b2\u7a81\u3002"))),(0,r.kt)("h2",{id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305"},"2.2 \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Furion")," \u4f9d\u8d56\u5305"),(0,r.kt)("img",{src:(0,o.Z)("img/rm4.png")}),(0,r.kt)("h2",{id:"23-furion-\u57fa\u672c\u914d\u7f6e"},"2.3 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Furion")," \u57fa\u672c\u914d\u7f6e"),(0,r.kt)("h3",{id:"231-programcs-\u6dfb\u52a0-inject"},"2.3.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Program.cs")," \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Inject()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {18}",showLineNumbers:!0,"":!0,"{18}":!0},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionStart\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder\n                    .Inject()   // \u6dfb\u52a0\u8fd9\u4e00\u884c\n                    .UseStartup<Startup>();\n                });\n    }\n}\n")),(0,r.kt)("h3",{id:"232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject"},"2.3.2 \u5728 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Startup.cs")," \u4e2d\u6dfb\u52a0\u4e24\u4e2a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Inject()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {20,37}",showLineNumbers:!0,"":!0,"{20,37}":!0},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionStart\n{\n    public class Startup\n    {\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddControllers().AddInject();  // \u6dfb\u52a0 AddInject();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n\n            app.UseHttpsRedirection();\n\n            app.UseRouting();\n\n            app.UseAuthorization();\n\n            // \u6dfb\u52a0\u8fd9\u4e00\u884c\uff0c\u5982\u679c\u662f MVC\u548cAPI\u5171\u5b58\u9879\u76ee\uff0c\u65e0\u9700\u6dfb\u52a0 string.Empty\n            app.UseInject(string.Empty);\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5c0f\u63d0\u9192")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"app.UseInject()")," \u4e0d\u8f93\u5165\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u5730\u5740\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/api"),"\uff0c\u5982\u679c\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"string.Empty")," \u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u76ee\u5f55\u3002\u5982\u679c\u8f93\u5165\u4efb\u610f\u5b57\u7b26\u4e32\uff0c\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/\u4efb\u610f\u5b57\u7b26\u4e32")," \u76ee\u5f55\u3002"))),(0,r.kt)("h2",{id:"24-\u542f\u52a8\u6d4f\u89c8\u5668"},"2.4 \u542f\u52a8\u6d4f\u89c8\u5668"),(0,r.kt)("p",null,"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u3002"),(0,r.kt)("img",{src:(0,o.Z)("img/rm5.png")}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5c0f\u77e5\u8bc6")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u521b\u5efa\u7684\u9879\u76ee\u4f1a\u81ea\u52a8\u914d\u7f6e\u4e86\u542f\u52a8\u9875\uff0c\u5982\u679c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"F5")," \u8fd0\u884c\uff0c\u53ef\u80fd\u4e0d\u4f1a\u81ea\u52a8\u6253\u5f00\u9996\u9875\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"launchUrl")," \u5373\u53ef\uff1a"),(0,r.kt)("img",{src:(0,o.Z)("img/rm6.png")}))))}v.isMDXComponent=!0}}]);