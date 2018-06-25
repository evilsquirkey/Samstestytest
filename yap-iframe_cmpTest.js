/* global sectionCode:true */
if(!window.Yahoo){
  /* jshint ignore:start */
  /* istanbul ignore next */
  !function(){var undefined=void 0,defaultConfig={targetFrame:undefined,exportInstaller:!1,useNative:!0,useInnerText:!0},config;if(window.jsxpath)config=window.jsxpath;else{var scriptElms=document.getElementsByTagName("script"),scriptElm=scriptElms[scriptElms.length-1],scriptSrc=scriptElm.src;config={};var scriptSrcMatchResult=scriptSrc.match(/\?(.*)$/);if(scriptSrcMatchResult)for(var configStrings=scriptSrcMatchResult[1].split("&"),i=0,l=configStrings.length;l>i;i++){var configString=configStrings[i],configStringSplited=configString.split("="),configName=configStringSplited[0],configValue=configStringSplited[1];configValue==undefined||("false"==configValue||/^-?\d+$/.test(configValue))&&(configValue=eval(configValue)),config[configName]=configValue}}for(var n in defaultConfig)n in config||(config[n]=defaultConfig[n]);if(config.hasNative=!!(document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("XPath",null)),!config.hasNative||!config.useNative||config.exportInstaller){var BinaryExpr,FilterExpr,FunctionCall,Literal,NameTest,NodeSet,NodeType,NodeUtil,Number,PathExpr,Step,UnaryExpr,UnionExpr,VariableReference,uai=new function(){var e=navigator.userAgent;if(RegExp==undefined)e.indexOf("Opera")>=0?this.opera=!0:e.indexOf("Netscape")>=0?this.netscape=!0:0==e.indexOf("Mozilla/")?this.mozilla=!0:this.unknown=!0,e.indexOf("Gecko/")>=0&&(this.gecko=!0),e.indexOf("Win")>=0?this.windows=!0:e.indexOf("Mac")>=0?this.mac=!0:e.indexOf("Linux")>=0?this.linux=!0:e.indexOf("BSD")>=0?this.bsd=!0:e.indexOf("SunOS")>=0&&(this.sunos=!0);else if(/AppleWebKit\/(\d+(?:\.\d+)*)/.test(e)?(this.applewebkit=RegExp.$1,4==RegExp.$1.charAt(0)?this.applewebkit2=!0:this.applewebkit3=!0):"object"==typeof Components&&(/Gecko\/(\d{8})/.test(e)||"Gecko"==navigator.product&&/^(\d{8})$/.test(navigator.productSub))&&(this.gecko=RegExp.$1),"object"==typeof opera&&"function"==typeof opera.version?(this.opera=opera.version(),this["opera"+this.opera[0]+this.opera[2]]=!0):"object"==typeof opera&&/Opera[\/ ](\d+\.\d+)/.test(e)?this.opera=RegExp.$1:this.ie||(/Safari\/(\d+(?:\.\d+)*)/.test(e)?this.safari=RegExp.$1:/NetFront\/(\d+(?:\.\d+)*)/.test(e)?this.netfront=RegExp.$1:/Konqueror\/(\d+(?:\.\d+)*)/.test(e)?this.konqueror=RegExp.$1:e.indexOf("(compatible;")<0&&/^Mozilla\/(\d+\.\d+)/.test(e)?(this.mozilla=RegExp.$1,/\([^(]*rv:(\d+(?:\.\d+)*).*?\)/.test(e)&&(this.mozillarv=RegExp.$1),/Firefox\/(\d+(?:\.\d+)*)/.test(e)?this.firefox=RegExp.$1:/Netscape\d?\/(\d+(?:\.\d+)*)/.test(e)&&(this.netscape=RegExp.$1)):this.unknown=!0),e.indexOf("Win 9x 4.90")>=0)this.windows="ME";else if(/Win(?:dows)? ?(NT ?(\d+\.\d+)?|\d+|ME|Vista|XP)/.test(e))if(this.windows=RegExp.$1,RegExp.$2)this.winnt=RegExp.$2;else switch(RegExp.$1){case"2000":this.winnt="5.0";break;case"XP":this.winnt="5.1";break;case"Vista":this.winnt="6.0"}else e.indexOf("Mac")>=0?this.mac=!0:e.indexOf("Linux")>=0?this.linux=!0:/(\w*BSD)/.test(e)?this.bsd=RegExp.$1:e.indexOf("SunOS")>=0&&(this.sunos=!0)},Lexer=function(e){for(var t=Lexer.prototype,n=e.match(t.regs.token),r=0,i=n.length;i>r;r++)t.regs.strip.test(n[r])&&n.splice(r,1);for(var o in t)n[o]=t[o];return n.index=0,n};Lexer.prototype.regs={token:/\$?(?:(?![0-9-])[\w-]+:)?(?![0-9-])[\w-]+|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|(?![0-9-])[\w-]+:\*|\s+|./g,strip:/^\s/},Lexer.prototype.peek=function(e){return this[this.index+(e||0)]},Lexer.prototype.next=function(){return this[this.index++]},Lexer.prototype.back=function(){this.index--},Lexer.prototype.empty=function(){return this.length<=this.index};var Ctx=function(e,t,n){this.node=e,this.position=t||1,this.last=n||1},BaseExpr=function(){};BaseExpr.prototype.number=function(e){var t=this.evaluate(e);return t.isNodeSet?t.number():+t},BaseExpr.prototype.string=function(e){var t=this.evaluate(e);return t.isNodeSet?t.string():""+t},BaseExpr.prototype.bool=function(e){var t=this.evaluate(e);return t.isNodeSet?t.bool():!!t};var BaseExprHasPredicates=function(){};BaseExprHasPredicates.parsePredicates=function(e,t){for(;"["==e.peek();){if(e.next(),e.empty())throw Error("missing predicate expr");var n=BinaryExpr.parse(e);if(t.predicate(n),e.empty())throw Error("unclosed predicate expr");if("]"!=e.next())throw e.back(),Error("bad token: "+e.next())}},BaseExprHasPredicates.prototype=new BaseExpr,BaseExprHasPredicates.prototype.evaluatePredicates=function(e,t){var n,r,i,e,o,s;s=this.reverse,n=this.predicates,e.sort();for(var a=t||0,u=n.length;u>a;a++){r=n[a];for(var p=[],i=e.list(),h=0,l=i.length;l>h;h++){switch(o=s?l-h:h+1,exrs=r.evaluate(new Ctx(i[h],o,l)),typeof exrs){case"number":exrs=o==exrs;break;case"string":exrs=!!exrs;break;case"object":exrs=exrs.bool()}exrs||p.push(h)}for(var h=p.length-1,l=0;h>=l;h--)e.del(p[h])}return e},!window.BinaryExpr&&window.defaultConfig&&(window.BinaryExpr=null),BinaryExpr=function(e,t,n){this.op=e,this.left=t,this.right=n,this.datatype=BinaryExpr.ops[e][2],this.needContextPosition=t.needContextPosition||n.needContextPosition,this.needContextNode=t.needContextNode||n.needContextNode,"="==this.op&&(n.needContextNode||n.needContextPosition||"nodeset"==n.datatype||"void"==n.datatype||!t.quickAttr?t.needContextNode||t.needContextPosition||"nodeset"==t.datatype||"void"==t.datatype||!n.quickAttr||(this.quickAttr=!0,this.attrName=n.attrName,this.attrValueExpr=t):(this.quickAttr=!0,this.attrName=t.attrName,this.attrValueExpr=n))},BinaryExpr.compare=function(e,t,n,r,i){var o,s,a,u,p,h;if(n=n.evaluate(i),r=r.evaluate(i),n.isNodeSet&&r.isNodeSet){s=n.list(),a=r.list();for(var l=0,d=s.length;d>l;l++)for(var c=0,f=a.length;f>c;c++)if(t(NodeUtil.to("string",s[l]),NodeUtil.to("string",a[c])))return!0;return!1}if(n.isNodeSet||r.isNodeSet){n.isNodeSet?(p=n,h=r):(p=r,h=n),u=p.list(),o=typeof h;for(var l=0,g=u.length;g>l;l++)if(t(NodeUtil.to(o,u[l]),h))return!0;return!1}return"="==e||"!="==e?"boolean"==typeof n||"boolean"==typeof r?t(!!n,!!r):"number"==typeof n||"number"==typeof r?t(+n,+r):t(n,r):t(+n,+r)},BinaryExpr.ops={div:[6,function(e,t,n){return e.number(n)/t.number(n)},"number"],mod:[6,function(e,t,n){return e.number(n)%t.number(n)},"number"],"*":[6,function(e,t,n){return e.number(n)*t.number(n)},"number"],"+":[5,function(e,t,n){return e.number(n)+t.number(n)},"number"],"-":[5,function(e,t,n){return e.number(n)-t.number(n)},"number"],"<":[4,function(e,t,n){return BinaryExpr.compare("<",function(e,t){return t>e},e,t,n)},"boolean"],">":[4,function(e,t,n){return BinaryExpr.compare(">",function(e,t){return e>t},e,t,n)},"boolean"],"<=":[4,function(e,t,n){return BinaryExpr.compare("<=",function(e,t){return t>=e},e,t,n)},"boolean"],">=":[4,function(e,t,n){return BinaryExpr.compare(">=",function(e,t){return e>=t},e,t,n)},"boolean"],"=":[3,function(e,t,n){return BinaryExpr.compare("=",function(e,t){return e==t},e,t,n)},"boolean"],"!=":[3,function(e,t,n){return BinaryExpr.compare("!=",function(e,t){return e!=t},e,t,n)},"boolean"],and:[2,function(e,t,n){return e.bool(n)&&t.bool(n)},"boolean"],or:[1,function(e,t,n){return e.bool(n)||t.bool(n)},"boolean"]},BinaryExpr.parse=function(e){var t,n,r,i,o=[];for(e.index;;){if(e.empty())throw Error("missing right expression");if(i=UnaryExpr.parse(e),t=e.next(),!t)break;if(r=this.ops[t],n=r&&r[0],!n){e.back();break}for(;o.length&&n<=this.ops[o[o.length-1]][0];)i=new BinaryExpr(o.pop(),o.pop(),i);o.push(i,t)}for(;o.length;)i=new BinaryExpr(o.pop(),o.pop(),i);return i},BinaryExpr.prototype=new BaseExpr,BinaryExpr.prototype.evaluate=function(e){return BinaryExpr.ops[this.op][1](this.left,this.right,e)},BinaryExpr.prototype.show=function(e){e=e||"";var t="";return t+=e+"binary: "+this.op+"\n",e+="    ",t+=this.left.show(e),t+=this.right.show(e)},!window.UnaryExpr&&window.defaultConfig&&(window.UnaryExpr=null),UnaryExpr=function(e,t){this.op=e,this.expr=t,this.needContextPosition=t.needContextPosition,this.needContextNode=t.needContextNode},UnaryExpr.ops={"-":1},UnaryExpr.parse=function(e){return this.ops[e.peek()]?new UnaryExpr(e.next(),UnaryExpr.parse(e)):UnionExpr.parse(e)},UnaryExpr.prototype=new BaseExpr,UnaryExpr.prototype.datatype="number",UnaryExpr.prototype.evaluate=function(e){return-this.expr.number(e)},UnaryExpr.prototype.show=function(e){e=e||"";var t="";return t+=e+"unary: "+this.op+"\n",e+="    ",t+=this.expr.show(e)},!window.UnionExpr&&window.defaultConfig&&(window.UnionExpr=null),UnionExpr=function(){this.paths=[]},UnionExpr.ops={"|":1},UnionExpr.parse=function(e){var t,n;if(n=PathExpr.parse(e),!this.ops[e.peek()])return n;for(t=new UnionExpr,t.path(n);;){if(!this.ops[e.next()])break;if(e.empty())throw Error("missing next union location path");t.path(PathExpr.parse(e))}return e.back(),t},UnionExpr.prototype=new BaseExpr,UnionExpr.prototype.datatype="nodeset",UnionExpr.prototype.evaluate=function(e){for(var t=this.paths,n=new NodeSet,r=0,i=t.length;i>r;r++){var o=t[r].evaluate(e);if(!o.isNodeSet)throw Error("PathExpr must be nodeset");n.merge(o)}return n},UnionExpr.prototype.path=function(e){this.paths.push(e),e.needContextPosition&&(this.needContextPosition=!0),e.needContextNode&&(this.needContextNode=!0)},UnionExpr.prototype.show=function(e){e=e||"";var t="";t+=e+"union:\n",e+="    ";for(var n=0;n<this.paths.length;n++)t+=this.paths[n].show(e);return t},!window.PathExpr&&window.defaultConfig&&(window.PathExpr=null),PathExpr=function(e){this.filter=e,this.steps=[],this.datatype=e.datatype,this.needContextPosition=e.needContextPosition,this.needContextNode=e.needContextNode},PathExpr.ops={"//":1,"/":1},PathExpr.parse=function(e){var t,n,r,i;if(this.ops[e.peek()]){if(t=e.next(),i=e.peek(),"/"==t&&(e.empty()||"."!=i&&".."!=i&&"@"!=i&&"*"!=i&&!/(?![0-9])[\w]/.test(i)))return FilterExpr.root();if(r=new PathExpr(FilterExpr.root()),e.empty())throw Error("missing next location step");n=Step.parse(e),r.step(t,n)}else if(n=FilterExpr.parse(e)){if(!this.ops[e.peek()])return n;r=new PathExpr(n)}else n=Step.parse(e),r=new PathExpr(FilterExpr.context()),r.step("/",n);for(;;){if(!this.ops[e.peek()])break;if(t=e.next(),e.empty())throw Error("missing next location step");r.step(t,Step.parse(e))}return r},PathExpr.prototype=new BaseExpr,PathExpr.prototype.evaluate=function(e){var t=this.filter.evaluate(e);if(!t.isNodeSet)throw Exception("Filter nodeset must be nodeset type");for(var n=this.steps,r=0,i=n.length;i>r&&t.length;r++){var o=n[r][1],s=o.reverse,a=t.iterator(s),u=t;t=null;var p,h;if(o.needContextPosition||"following"!=o.axis)if(o.needContextPosition||"preceding"!=o.axis){p=a();var l=0;for(t=o.evaluate(new Ctx(p),!1,u,l);p=a();)l++,t.merge(o.evaluate(new Ctx(p),!1,u,l))}else p=a(),t=o.evaluate(new Ctx(p));else{for(p=a();h=a();p=h)if(uai.applewebkit2){var d=!1,c=h;do if(c==p){d=!0;break}while(c=c.parentNode);if(!d)break}else try{if(!p.contains(h))break}catch(f){if(!(8&h.compareDocumentPosition(p)))break}t=o.evaluate(new Ctx(p))}}return t},PathExpr.prototype.step=function(e,t){if(t.op=e,this.steps.push([e,t]),this.quickAttr=!1,1==this.steps.length&&"/"==e&&"attribute"==t.axis){var n=t.test;n.notOnlyElement||"*"==n.name||(this.quickAttr=!0,this.attrName=n.name)}},PathExpr.prototype.show=function(e){e=e||"";var t="";if(t+=e+"path:\n",e+="    ",t+=e+"filter:\n",t+=this.filter.show(e+"    "),this.steps.length){t+=e+"steps:\n",e+="    ";for(var n=0;n<this.steps.length;n++){var r=this.steps[n];t+=e+"operator: "+r[0]+"\n",t+=r[1].show(e)}}return t},!window.FilterExpr&&window.defaultConfig&&(window.FilterExpr=null),FilterExpr=function(e){this.primary=e,this.predicates=[],this.datatype=e.datatype,this.needContextPosition=e.needContextPosition,this.needContextNode=e.needContextNode},FilterExpr.parse=function(e){var t,n,r,i;switch(r=e.peek(),i=r.charAt(0)){case"$":t=VariableReference.parse(e);break;case"(":if(e.next(),t=BinaryExpr.parse(e),e.empty())throw Error('unclosed "("');if(")"!=e.next())throw e.back(),Error("bad token: "+e.next());break;case'"':case"'":t=Literal.parse(e);break;default:if(isNaN(+r)){if(NodeType.types[r])return null;if(!/(?![0-9])[\w]/.test(i)||"("!=e.peek(1))return null;t=FunctionCall.parse(e)}else t=Number.parse(e)}return"["!=e.peek()?t:(n=new FilterExpr(t),BaseExprHasPredicates.parsePredicates(e,n),n)},FilterExpr.root=function(){return new FunctionCall("root-node")},FilterExpr.context=function(){return new FunctionCall("context-node")},FilterExpr.prototype=new BaseExprHasPredicates,FilterExpr.prototype.evaluate=function(e){var t=this.primary.evaluate(e);if(!t.isNodeSet){if(this.predicates.length)throw Error("Primary result must be nodeset type if filter have predicate expression");return t}return this.evaluatePredicates(t)},FilterExpr.prototype.predicate=function(e){this.predicates.push(e)},FilterExpr.prototype.show=function(e){e=e||"";var t="";if(t+=e+"filter: \n",e+="    ",t+=this.primary.show(e),this.predicates.length){t+=e+"predicates: \n",e+="    ";for(var n=0;n<this.predicates.length;n++)t+=this.predicates[n].show(e)}return t},!window.NodeUtil&&window.defaultConfig&&(window.NodeUtil=null),NodeUtil={to:function(e,t){var n,r=t.nodeType;if(1==r&&config.useInnerText&&!uai.applewebkit2&&(n=t.textContent,n=n==undefined||null==n?t.innerText:n,n=n==undefined||null==n?"":n),"string"!=typeof n)if(9==r||1==r)for(t=9==r?t.documentElement:t.firstChild,n="",stack=[],i=0;t;){do 1!=t.nodeType&&(n+=t.nodeValue),stack[i++]=t;while(t=t.firstChild);for(;i&&!(t=stack[--i].nextSibling););}else n=t.nodeValue;switch(e){case"number":return+n;case"boolean":return!!n;default:return n}},attrPropMap:{name:"name","class":"className",dir:"dir",id:"id",name:"name",title:"title"},attrMatch:function(e,t,n){return!t||null==n&&e.hasAttribute&&e.hasAttribute(t)||null!=n&&e.getAttribute&&e.getAttribute(t)==n?!0:!1},getDescendantNodes:function(e,t,n,r,i,o,s){if(o&&o.delDescendant(t,s),i&&"id"==r&&t.getElementById)t=t.getElementById(i),t&&e.match(t)&&n.push(t);else if(i&&"name"==r&&t.getElementsByName)for(var a=t.getElementsByName(i),u=0,p=a.length;p>u;u++)t=a[u],(uai.opera?t.name==i&&e.match(t):e.match(t))&&n.push(t);else if(i&&"class"==r&&t.getElementsByClassName)for(var a=t.getElementsByClassName(i),u=0,p=a.length;p>u;u++)t=a[u],t.className==i&&e.match(t)&&n.push(t);else if(e.notOnlyElement)!function(t){for(var o=arguments.callee,s=t.firstChild;s;s=s.nextSibling)NodeUtil.attrMatch(s,r,i)&&e.match(s.nodeType)&&n.push(s),o(s)}(t);else{var h=e.name;if(t.getElementsByTagName){var a=t.getElementsByTagName(h);if(a)for(var u=0;t=a[u++];)NodeUtil.attrMatch(t,r,i)&&n.push(t)}}return n},getChildNodes:function(e,t,n,r,i){for(var t=t.firstChild;t;t=t.nextSibling)NodeUtil.attrMatch(t,r,i)&&e.match(t)&&n.push(t);return n}},!window.Step&&window.defaultConfig&&(window.Step=null),Step=function(e,t){this.axis=e,this.reverse=Step.axises[e][0],this.func=Step.axises[e][1],this.test=t,this.predicates=[],this._quickAttr=Step.axises[e][2]},Step.axises={ancestor:[!0,function(e,t,n,r,i,o,s){for(;t=t.parentNode;)o&&1==t.nodeType&&o.reserveDelByNode(t,s,!0),e.match(t)&&n.unshift(t);return n}],"ancestor-or-self":[!0,function(e,t,n,r,i,o,s){do o&&1==t.nodeType&&o.reserveDelByNode(t,s,!0),e.match(t)&&n.unshift(t);while(t=t.parentNode);return n}],attribute:[!1,function(e,t,n){var r=t.attributes;if(r)if(e.notOnlyElement&&0==e.type||"*"==e.name)for(var i,o=0;i=r[o];o++)n.push(i);else{var i=r.getNamedItem(e.name);i&&n.push(i)}return n}],child:[!1,NodeUtil.getChildNodes,!0],descendant:[!1,NodeUtil.getDescendantNodes,!0],"descendant-or-self":[!1,function(e,t,n,r,i,o,s){return NodeUtil.attrMatch(t,r,i)&&e.match(t)&&n.push(t),NodeUtil.getDescendantNodes(e,t,n,r,i,o,s)},!0],following:[!1,function(e,t,n,r,i){do for(var o=t;o=o.nextSibling;)NodeUtil.attrMatch(o,r,i)&&e.match(o)&&n.push(o),n=NodeUtil.getDescendantNodes(e,o,n,r,i);while(t=t.parentNode);return n},!0],"following-sibling":[!1,function(e,t,n,r,i,o,s){for(;t=t.nextSibling;)o&&1==t.nodeType&&o.reserveDelByNode(t,s),e.match(t)&&n.push(t);return n}],namespace:[!1,function(e,t,n){return n}],parent:[!1,function(e,t,n){if(9==t.nodeType)return n;if(2==t.nodeType)return n.push(t.ownerElement),n;var t=t.parentNode;return e.match(t)&&n.push(t),n}],preceding:[!0,function(e,t,n,r,i){var o=[];do o.unshift(t);while(t=t.parentNode);for(var s=1,a=o.length;a>s;s++){var u=[];for(t=o[s];t=t.previousSibling;)u.unshift(t);for(var p=0,h=u.length;h>p;p++)t=u[p],NodeUtil.attrMatch(t,r,i)&&e.match(t)&&n.push(t),n=NodeUtil.getDescendantNodes(e,t,n,r,i)}return n},!0],"preceding-sibling":[!0,function(e,t,n,r,i,o,s){for(;t=t.previousSibling;)o&&1==t.nodeType&&o.reserveDelByNode(t,s,!0),e.match(t)&&n.unshift(t);return n}],self:[!1,function(e,t,n){return e.match(t)&&n.push(t),n}]},Step.parse=function(e){var t,n,r,i;if("."==e.peek())r=this.self(),e.next();else if(".."==e.peek())r=this.parent(),e.next();else{if("@"==e.peek()){if(t="attribute",e.next(),e.empty())throw Error("missing attribute name")}else if("::"==e.peek(1)){if(!/(?![0-9])[\w]/.test(e.peek().charAt(0)))throw Error("bad token: "+e.next());if(t=e.next(),e.next(),!this.axises[t])throw Error("invalid axis: "+t);if(e.empty())throw Error("missing node name")}else t="child";if(i=e.peek(),/(?![0-9])[\w]/.test(i.charAt(0)))if("("==e.peek(1)){if(!NodeType.types[i])throw Error("invalid node type: "+i);n=NodeType.parse(e)}else n=NameTest.parse(e);else{if("*"!=i)throw Error("bad token: "+e.next());n=NameTest.parse(e)}r=new Step(t,n)}return BaseExprHasPredicates.parsePredicates(e,r),r},Step.self=function(){return new Step("self",new NodeType("node"))},Step.parent=function(){return new Step("parent",new NodeType("node"))},Step.prototype=new BaseExprHasPredicates,Step.prototype.evaluate=function(e,t,n,r){var i=e.node;if(t||"//"!=this.op){if(this.needContextPosition&&(n=null,r=null),this.quickAttr){var o=this.attrValueExpr?this.attrValueExpr.string(e):null,s=this.func(this.test,i,new NodeSet,this.attrName,o,n,r);s=this.evaluatePredicates(s,1)}else{var s=this.func(this.test,i,new NodeSet,null,null,n,r);s=this.evaluatePredicates(s)}n&&n.doDel()}else if(this.needContextPosition||"child"!=this.axis){var a=new Step("descendant-or-self",new NodeType("node")),u=a.evaluate(e,!1,n,r).list(),s=null;a.op="/";for(var p=0,h=u.length;h>p;p++)s?s.merge(this.evaluate(new Ctx(u[p]),!0)):s=this.evaluate(new Ctx(u[p]),!0);s=s||new NodeSet}else if(this.quickAttr){var o=this.attrValueExpr?this.attrValueExpr.string(e):null,s=NodeUtil.getDescendantNodes(this.test,i,new NodeSet,this.attrName,o,n,r);s=this.evaluatePredicates(s,1)}else{var s=NodeUtil.getDescendantNodes(this.test,i,new NodeSet,null,null,n,r);s=this.evaluatePredicates(s)}return s},Step.prototype.predicate=function(e){if(this.predicates.push(e),(e.needContextPosition||"number"==e.datatype||"void"==e.datatype)&&(this.needContextPosition=!0),this._quickAttr&&1==this.predicates.length&&e.quickAttr){var t=e.attrName;this.attrName=t,this.attrValueExpr=e.attrValueExpr,this.quickAttr=!0}},Step.prototype.show=function(e){e=e||"";var t="";if(t+=e+"step: \n",e+="    ",this.axis&&(t+=e+"axis: "+this.axis+"\n"),t+=this.test.show(e),this.predicates.length){t+=e+"predicates: \n",e+="    ";for(var n=0;n<this.predicates.length;n++)t+=this.predicates[n].show(e)}return t},!window.NodeType&&window.defaultConfig&&(window.NodeType=null),NodeType=function(e,t){switch(this.name=e,this.literal=t,e){case"comment":this.type=8;break;case"text":this.type=3;break;case"processing-instruction":this.type=7;break;case"node":this.type=0}},NodeType.types={comment:1,text:1,"processing-instruction":1,node:1},NodeType.parse=function(e){var t,n,r;if(t=e.next(),e.next(),e.empty())throw Error("bad nodetype");if(r=e.peek().charAt(0),('"'==r||"'"==r)&&(n=Literal.parse(e)),e.empty())throw Error("bad nodetype");if(")"!=e.next())throw e.back(),Error("bad token "+e.next());return new NodeType(t,n)},NodeType.prototype=new BaseExpr,NodeType.prototype.notOnlyElement=!0,NodeType.prototype.match=function(e){return!this.type||this.type==e.nodeType},NodeType.prototype.show=function(e){e=e||"";var t="";return t+=e+"nodetype: "+this.type+"\n",this.literal&&(e+="    ",t+=this.literal.show(e)),t},!window.NameTest&&window.defaultConfig&&(window.NameTest=null),NameTest=function(e){this.name=e.toLowerCase()},NameTest.parse=function(e){return new NameTest("*"!=e.peek()&&":"==e.peek(1)&&"*"==e.peek(2)?e.next()+e.next()+e.next():e.next())},NameTest.prototype=new BaseExpr,NameTest.prototype.match=function(e){var t=e.nodeType;return 1!=t&&2!=t||"*"!=this.name&&this.name!=e.nodeName.toLowerCase()?!1:!0},NameTest.prototype.show=function(e){e=e||"";var t="";return t+=e+"nametest: "+this.name+"\n"},!window.VariableReference&&window.defaultConfig&&(window.VariableReference=null),VariableReference=function(e){this.name=e.substring(1)},VariableReference.parse=function(e){var t=e.next();if(t.length<2)throw Error("unnamed variable reference");return new VariableReference(t)},VariableReference.prototype=new BaseExpr,VariableReference.prototype.datatype="void",VariableReference.prototype.show=function(e){e=e||"";var t="";return t+=e+"variable: "+this.name+"\n"},!window.Literal&&window.defaultConfig&&(window.Literal=null),Literal=function(e){this.text=e.substring(1,e.length-1)},Literal.parse=function(e){var t=e.next();if(t.length<2)throw Error("unclosed literal string");return new Literal(t)},Literal.prototype=new BaseExpr,Literal.prototype.datatype="string",Literal.prototype.evaluate=function(){return this.text},Literal.prototype.show=function(e){e=e||"";var t="";return t+=e+"literal: "+this.text+"\n"},!window.Number&&window.defaultConfig&&(window.Number=null),Number=function(e){this.digit=+e},Number.parse=function(e){return new Number(e.next())},Number.prototype=new BaseExpr,Number.prototype.datatype="number",Number.prototype.evaluate=function(){return this.digit},Number.prototype.show=function(e){e=e||"";var t="";return t+=e+"number: "+this.digit+"\n"},!window.FunctionCall&&window.defaultConfig&&(window.FunctionCall=null),FunctionCall=function(e){var t=FunctionCall.funcs[e];if(!t)throw Error(e+" is not a function");this.name=e,this.func=t[0],this.args=[],this.datatype=t[1],t[2]&&(this.needContextPosition=!0),this.needContextNodeInfo=t[3],this.needContextNode=this.needContextNodeInfo[0]},FunctionCall.funcs={"context-node":[function(){if(0!=arguments.length)throw Error("Function context-node expects ()");var e;return e=new NodeSet,e.push(this.node),e},"nodeset",!1,[!0]],"root-node":[function(){if(0!=arguments.length)throw Error("Function root-node expects ()");var e,t;return e=new NodeSet,t=this.node,e.push(9==t.nodeType?t:t.ownerDocument),e},"nodeset",!1,[]],last:[function(){if(0!=arguments.length)throw Error("Function last expects ()");return this.last},"number",!0,[]],position:[function(){if(0!=arguments.length)throw Error("Function position expects ()");return this.position},"number",!0,[]],count:[function(e){if(1!=arguments.length||!(e=e.evaluate(this)).isNodeSet)throw Error("Function count expects (nodeset)");return e.length},"number",!1,[]],id:[function(e){var t,n,r,i,o,s,a;if(1!=arguments.length)throw Error("Function id expects (object)");for(s=this.node,a=9==s.nodeType?s:s.ownerDocument,e=e.string(this),t=e.split(/\s+/),n=new NodeSet,r=0,l=t.length;l>r;r++)if(i=t[r],o=a.getElementById(i),uai.opera&&o&&o.id!=i)for(var u=a.getElementsByName(i),p=0,h=u.length;h>p;p++)o=u[p],o.id==i&&n.push(o);else o&&n.push(o);return n.isSorted=!1,n},"nodeset",!1,[]],"local-name":[function(e){var t;switch(arguments.length){case 0:t=this.node;break;case 1:if((e=e.evaluate(this)).isNodeSet){t=e.first();break}default:throw Error("Function local-name expects (nodeset?)")}return""+t.nodeName.toLowerCase()},"string",!1,[!0,!1]],name:[function(){return FunctionCall.funcs["local-name"][0].apply(this,arguments)},"string",!1,[!0,!1]],"namespace-uri":[function(){return""},"string",!1,[!0,!1]],string:[function(e){switch(arguments.length){case 0:e=NodeUtil.to("string",this.node);break;case 1:e=e.string(this);break;default:throw Error("Function string expects (object?)")}return e},"string",!1,[!0,!1]],concat:[function(){if(arguments.length<2)throw Error("Function concat expects (string, string[, ...])");for(var e="",t=0,n=arguments.length;n>t;t++)e+=arguments[t].string(this);return e},"string",!1,[]],"starts-with":[function(e,t){if(2!=arguments.length)throw Error("Function starts-with expects (string, string)");return e=e.string(this),t=t.string(this),0==e.indexOf(t)},"boolean",!1,[]],contains:[function(e,t){if(2!=arguments.length)throw Error("Function contains expects (string, string)");return e=e.string(this),t=t.string(this),-1!=e.indexOf(t)},"boolean",!1,[]],substring:[function(e,t,n){var r,i;switch(e=e.string(this),t=t.number(this),arguments.length){case 2:n=e.length-t+1;break;case 3:n=n.number(this);break;default:throw Error("Function substring expects (string, string)")}return t=Math.round(t),n=Math.round(n),r=t-1,i=t+n-1,1/0==i?e.substring(0>r?0:r):e.substring(0>r?0:r,i)},"string",!1,[]],"substring-before":[function(e,t){var n;if(2!=arguments.length)throw Error("Function substring-before expects (string, string)");return e=e.string(this),t=t.string(this),n=e.indexOf(t),-1==n?"":e.substring(0,n)},"string",!1,[]],"substring-after":[function(e,t){if(2!=arguments.length)throw Error("Function substring-after expects (string, string)");e=e.string(this),t=t.string(this);var n=e.indexOf(t);return-1==n?"":e.substring(n+t.length)},"string",!1,[]],"string-length":[function(e){switch(arguments.length){case 0:e=NodeUtil.to("string",this.node);break;case 1:e=e.string(this);break;default:throw Error("Function string-length expects (string?)")}return e.length},"number",!1,[!0,!1]],"normalize-space":[function(e){switch(arguments.length){case 0:e=NodeUtil.to("string",this.node);break;case 1:e=e.string(this);break;default:throw Error("Function normalize-space expects (string?)")}return e.replace(/\s+/g," ").replace(/^ /,"").replace(/ $/,"")},"string",!1,[!0,!1]],translate:[function(e,t,n){if(3!=arguments.length)throw Error("Function translate expects (string, string, string)");e=e.string(this),t=t.string(this),n=n.string(this);for(var r=[],i=0,o=t.length;o>i;i++){var s=t.charAt(i);r[s]||(r[s]=n.charAt(i)||"")}for(var a="",i=0,o=e.length;o>i;i++){var s=e.charAt(i),u=r[s];a+=u!=undefined?u:s}return a},"string",!1,[]],"boolean":[function(e){if(1!=arguments.length)throw Error("Function boolean expects (object)");return e.bool(this)},"boolean",!1,[]],not:[function(e){if(1!=arguments.length)throw Error("Function not expects (object)");return!e.bool(this)},"boolean",!1,[]],"true":[function(){if(0!=arguments.length)throw Error("Function true expects ()");return!0},"boolean",!1,[]],"false":[function(){if(0!=arguments.length)throw Error("Function false expects ()");return!1},"boolean",!1,[]],lang:[function(){return!1},"boolean",!1,[]],number:[function(e){switch(arguments.length){case 0:e=NodeUtil.to("number",this.node);break;case 1:e=e.number(this);break;default:throw Error("Function number expects (object?)")}return e},"number",!1,[!0,!1]],sum:[function(e){var t,n,r,i;if(1!=arguments.length||!(e=e.evaluate(this)).isNodeSet)throw Error("Function sum expects (nodeset)");for(t=e.list(),n=0,r=0,i=t.length;i>r;r++)n+=NodeUtil.to("number",t[r]);return n},"number",!1,[]],floor:[function(e){if(1!=arguments.length)throw Error("Function floor expects (number)");return e=e.number(this),Math.floor(e)},"number",!1,[]],ceiling:[function(e){if(1!=arguments.length)throw Error("Function ceiling expects (number)");return e=e.number(this),Math.ceil(e)},"number",!1,[]],round:[function(e){if(1!=arguments.length)throw Error("Function round expects (number)");return e=e.number(this),Math.round(e)},"number",!1,[]]},FunctionCall.parse=function(e){var t,n=new FunctionCall(e.next());for(e.next();")"!=e.peek();){if(e.empty())throw Error("missing function argument list");if(t=BinaryExpr.parse(e),n.arg(t),","!=e.peek())break;e.next()}if(e.empty())throw Error("unclosed function argument list");if(")"!=e.next())throw e.back(),Error("bad token: "+e.next());return n},FunctionCall.prototype=new BaseExpr,FunctionCall.prototype.evaluate=function(e){return this.func.apply(e,this.args)},FunctionCall.prototype.arg=function(e){this.args.push(e),e.needContextPosition&&(this.needContextPosition=!0);var t=this.args;e.needContextNode&&(t.needContexNode=!0),this.needContextNode=t.needContextNode||this.needContextNodeInfo[t.length]},FunctionCall.prototype.show=function(e){e=e||"";var t="";if(t+=e+"function: "+this.name+"\n",e+="    ",this.args.length){t+=e+"arguments: \n",e+="    ";for(var n=0;n<this.args.length;n++)t+=this.args[n].show(e)}return t};var NodeID={uuid:1,get:function(e){return e.__jsxpath_id__||(e.__jsxpath_id__=this.uuid++)}};!window.NodeSet&&window.defaultConfig&&(window.NodeSet=null),NodeSet=function(){this.length=0,this.nodes=[],this.seen={},this.idIndexMap=null,this.reserveDels=[]},NodeSet.prototype.isNodeSet=!0,NodeSet.prototype.isSorted=!0,NodeSet.prototype.merge=function(e){if(this.isSorted=!1,e.only)return this.push(e.only);if(this.only){var t=this.only;delete this.only,this.push(t),this.length--}for(var n=e.nodes,r=0,i=n.length;i>r;r++)this._add(n[r])},NodeSet.prototype.sort=function(){if(!this.only&&!this.sortOff&&!this.isSorted){this.isSorted=!0,this.idIndexMap=null;var e=this.nodes;e.sort(function(e,t){if(e==t)return 0;if(e.compareDocumentPosition){var n=e.compareDocumentPosition(t);return 2&n?1:4&n?-1:0}for(var r=e,i=t,o=e,s=t,a=0,u=0;o=o.parentNode;)a++;for(;s=s.parentNode;)u++;if(a>u){for(;a--!=u;)r=r.parentNode;if(r==i)return 1}else if(u>a){for(;u--!=a;)i=i.parentNode;if(r==i)return-1}for(;(o=r.parentNode)!=(s=i.parentNode);)r=o,i=s;for(;r=r.nextSibling;)if(r==i)return-1;return 1})}},NodeSet.prototype.reserveDelByNodeID=function(e,t,n){var r,i=this.createIdIndexMap();if((r=i[e])&&(n&&this.length-t-1>r||!n&&r>t)){var o={value:r,order:String.fromCharCode(r),toString:function(){return this.order},valueOf:function(){return this.value}};this.reserveDels.push(o)}},NodeSet.prototype.reserveDelByNode=function(e,t,n){this.reserveDelByNodeID(NodeID.get(e),t,n)},NodeSet.prototype.doDel=function(){if(this.reserveDels.length){if(this.length<65536)var e=this.reserveDels.sort(function(e,t){return t-e});else var e=this.reserveDels.sort(function(e,t){return t-e});for(var t=0,n=e.length;n>t;t++)this.del(e[t]);this.reserveDels=[],this.idIndexMap=null}},NodeSet.prototype.createIdIndexMap=function(){if(this.idIndexMap)return this.idIndexMap;for(var e=this.idIndexMap={},t=this.nodes,n=0,r=t.length;r>n;n++){var i=t[n],o=NodeID.get(i);e[o]=n}return e},NodeSet.prototype.del=function(e){if(this.length--,this.only)delete this.only;else{var t=this.nodes.splice(e,1)[0];this._first==t&&(delete this._first,delete this._firstSourceIndex,delete this._firstSubIndex),delete this.seen[NodeID.get(t)]}},NodeSet.prototype.delDescendant=function(e,t){if(!this.only){var n=e.nodeType;if((1==n||9==n)&&!uai.applewebkit2){if(!e.contains)if(1==n){var r=e;e={contains:function(e){return 8&e.compareDocumentPosition(r)}}}else e={contains:function(){return!0}};for(var i=this.nodes,o=t+1;o<i.length;o++)e.contains(i[o])&&(this.del(o),o--)}}},NodeSet.prototype._add=function(e,t){var n=this.seen,r=NodeID.get(e);return n[r]?!0:(n[r]=!0,this.length++,void(t?this.nodes.unshift(e):this.nodes.push(e)))},NodeSet.prototype.unshift=function(e){if(!this.length)return this.length++,void(this.only=e);if(this.only){var t=this.only;delete this.only,this.unshift(t),this.length--}return this._add(e,!0)},NodeSet.prototype.push=function(e){if(!this.length)return this.length++,void(this.only=e);if(this.only){var t=this.only;delete this.only,this.push(t),this.length--}return this._add(e)},NodeSet.prototype.first=function(){return this.only?this.only:(this.nodes.length>1&&this.sort(),this.nodes[0])},NodeSet.prototype.list=function(){return this.only?[this.only]:(this.sort(),this.nodes)},NodeSet.prototype.string=function(){var e=this.only||this.first();return e?NodeUtil.to("string",e):""},NodeSet.prototype.bool=function(){return!(!this.length&&!this.only)},NodeSet.prototype.number=function(){return+this.string()},NodeSet.prototype.iterator=function(e){this.sort();var t=this;if(e){var n=0;return function(){var e=t.length-n++-1;return t.only&&0==e?t.only:t.nodes[e]}}var n=0;return function(){return t.only&&0==n++?t.only:t.nodes[n++]}};var install=function(e){e=e||this;{var t=e.document;e.undefined}e.XPathExpression=function(t){if(!t.length)throw e.Error("no expression");var n=this.lexer=Lexer(t);if(n.empty())throw e.Error("no expression");if(this.expr=BinaryExpr.parse(n),!n.empty())throw e.Error("bad token: "+n.next())},e.XPathExpression.prototype.evaluate=function(t,n){return new e.XPathResult(this.expr.evaluate(new Ctx(t)),n)},e.XPathResult=function(e,t){if(0==t)switch(typeof e){case"object":t++;case"boolean":t++;case"string":t++;case"number":t++}switch(this.resultType=t,t){case 1:return void(this.numberValue=e.isNodeSet?e.number():+e);case 2:return void(this.stringValue=e.isNodeSet?e.string():""+e);case 3:return void(this.booleanValue=e.isNodeSet?e.bool():!!e);case 4:case 5:case 6:case 7:this.nodes=e.list(),this.snapshotLength=e.length,this.index=0,this.invalidIteratorState=!1;break;case 8:case 9:return void(this.singleNodeValue=e.first())}},e.XPathResult.prototype.iterateNext=function(){return this.nodes[this.index++]},e.XPathResult.prototype.snapshotItem=function(e){return this.nodes[e]},e.XPathResult.ANY_TYPE=0,e.XPathResult.NUMBER_TYPE=1,e.XPathResult.STRING_TYPE=2,e.XPathResult.BOOLEAN_TYPE=3,e.XPathResult.UNORDERED_NODE_ITERATOR_TYPE=4,e.XPathResult.ORDERED_NODE_ITERATOR_TYPE=5,e.XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE=6,e.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE=7,e.XPathResult.ANY_UNORDERED_NODE_TYPE=8,e.XPathResult.FIRST_ORDERED_NODE_TYPE=9,t.createExpression=function(t){return new e.XPathExpression(t,null)},t.evaluate=function(e,n,r,i){return t.createExpression(e,null).evaluate(n,i)}},win;if(config.targetFrame){var frame=document.getElementById(config.targetFrame);frame&&(win=frame.contentWindow)}config.exportInstaller&&(window.install=install),config.hasNative&&config.useNative||install(win||window)}}();
  /* jshint ignore:end */

  var Yahoo,
      /**
       * Pub/Sub event object
       * @type {Object}
       */
      events = {},
      /**
       * Unique event id for published streams
       * @type {Number}
       */
      eventUID = -1,
      /**
       * Shorthand for the current user agent
       * @type {String}
       */
      agent = navigator.userAgent,
      /**
       * Shorthand for Array.prototype.slice
       * @type {Function}
       */
      slice = Array.prototype.slice,
      /**
       * Callback function for failed ad calls
       * @type {Function}
       */
      errorHandler = window.syndicationErrorHandler,
      /**
       * Empty function for use in JSONP config
       */
      emptyFn = function(){},
      /**
       * JSON.parse polyfill for older browsers (thank you < IE 9)
       * @param {Object} JSON The native or polyfill methods with JSON.parse/stringify
       */
      /* jshint ignore:start */
      parseJSON = window.JSON ? window.JSON.parse : /* istanbul ignore next */ function(){"use strict";var r,t,e,n,f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:" "},i=function(t){throw{name:"SyntaxError",message:t,at:r,text:e}},a=function(n){return n&&n!==t&&i("Expected '"+n+"' instead of '"+t+"'"),t=e.charAt(r),r+=1,t},o=function(){var r,e="";for("-"===t&&(e="-",a("-"));t>="0"&&"9">=t;)e+=t,a();if("."===t)for(e+=".";a()&&t>="0"&&"9">=t;)e+=t;if("e"===t||"E"===t)for(e+=t,a(),("-"===t||"+"===t)&&(e+=t,a());t>="0"&&"9">=t;)e+=t,a();return r=+e,isFinite(r)?r:void i("Bad number")},u=function(){var r,e,n,o="";if('"'===t)for(;a();){if('"'===t)return a(),o;if("\\"===t)if(a(),"u"===t){for(n=0,e=0;4>e&&(r=parseInt(a(),16),isFinite(r));e+=1)n=16*n+r;o+=String.fromCharCode(n)}else{if("string"!=typeof f[t])break;o+=f[t]}else o+=t}i("Bad string")},c=function(){for(;t&&" ">=t;)a()},s=function(){switch(t){case"t":return a("t"),a("r"),a("u"),a("e"),!0;case"f":return a("f"),a("a"),a("l"),a("s"),a("e"),!1;case"n":return a("n"),a("u"),a("l"),a("l"),null}i("Unexpected '"+t+"'")},l=function(){var r=[];if("["===t){if(a("["),c(),"]"===t)return a("]"),r;for(;t;){if(r.push(n()),c(),"]"===t)return a("]"),r;a(","),c()}}i("Bad array")},p=function(){var r,e={};if("{"===t){if(a("{"),c(),"}"===t)return a("}"),e;for(;t;){if(r=u(),c(),a(":"),Object.hasOwnProperty.call(e,r)&&i('Duplicate key "'+r+'"'),e[r]=n(),c(),"}"===t)return a("}"),e;a(","),c()}}i("Bad object")};return n=function(){switch(c(),t){case"{":return p();case"[":return l();case'"':return u();case"-":return o();default:return t>="0"&&"9">=t?o():s()}},function(f,a){var o;return e=f,r=0,t=" ",o=n(),c(),t&&i("Syntax error"),"function"==typeof a?function u(r,t){var e,n,f=r[t];if(f&&"object"==typeof f)for(e in f)Object.prototype.hasOwnProperty.call(f,e)&&(n=u(f,e),void 0!==n?f[e]=n:delete f[e]);return a.call(r,t,f)}({"":o},""):o}}(),
      /* jshint ignore:end */
      /**
       * JSONP callback id
       * @type {Number}
       */
      puid = 0,
      /**
       * URL that will be encoded and passed as the `pu`
       * @type {String}
       */
      url = window.publisherUrl,
      /**
       * Ad unit beacons indexed by creativeId for viewability
       * @type {Object}
       */
      beacons = {},
       /**
       * Ad unit click beacons indexed by creativeId for viewability
       * @type {Object}
       */
      click_beacons = {},
      /**
       * Used for tracking ad positions
       * @type {Array}
       */
      positions = [],
      /**
       * Flag for completion of async fetch of DARLA
       * @type {String}
       */
      darlaComplete = false,
      /**
       * Support languages for ad support page
       * @type {Array}
       */
      supportedLanguages = ['bg', 'br', 'en', 'de', 'es', 'fi', 'fr', 'hk', 'hr', 'hu', 'id', 'it', 'nl', 'no', 'ru', 'tw'],
      /**
       * Refeerence the users browsers preferred language
       * @return {String} String containing the local prefix ('en', 'es', etc...)
       */
      langauge = (function(){
        var lang = navigator.language || navigator.userLanguage || navigator.browserLanguage,
            prefix = lang && lang.toLowerCase().split('-')[0] || 'en';

        if(supportedLanguages.indexOf(prefix) === -1 || prefix === 'en'){
          prefix = 'us';
        }

        return prefix;
      })(),
      /**
       * YCS asset directory
       * @type {String}
       */
      assets = 'https://s.yimg.com/dh/ap/av/moneyball/assets/',
       /**
       * YCS asset directory
       * @type {String}
       */
      assetsAlt = 'https://s.yimg.com/av/dh/ap/av/moneyball/assets/',
      /**
       * Syndication YWA bucket
       * @type {String}
       */
      ywa = 'https://a.analytics.yahoo.com/p.pl?a=1000354660762&b=',
      /**
       * CSS class name that is appended after successful injection
       * @type {RegExp}
       */
      loadedClass = new RegExp('(^| )yap-loaded( |$)'),
      /**
       * Determines which browser, language, version and CSS prefix
       * @return {Object} Object containing data about the current browser
       */
      browser = (function(){
        var match = agent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || agent.match(/((ip)(hone|ad|od))/i) || [],
            name = RegExp.$1.toLowerCase() || 'chrome',
            types = {
              'chrome'    : 'webkit',
              'firefox'   : 'moz',
              'mozilla'   : 'moz',
              'msie'      : 'ms',
              'opera'     : 'o',
              'safari'    : 'webkit',
              'iphone'    : 'webkit',
              'ipod'      : 'webkit',
              'ipad'      : 'webkit',
              'trident'   : 'ms'
            },
            prefix = types[name];

        return {
          chrome    : name === 'chrome',
          cssPrefix : '-' + prefix + '-',
          firefox   : name === 'firefox',
          msie      : name === 'msie' || name === 'trident',
          opera     : name === 'opera',
          ios       : name === 'iphone' || name === 'ipod' || name === 'ipad',
          prefix    : prefix,
          safari    : name === 'safari' && ('doNotTrack' in window),
          version   : parseFloat(agent.match(/version\/([\d]+)/i) || match[2]),
          webkit    : prefix === 'webkit'
        }
      }()),
      /**
       * Determines environment (desktop v mobile), orientation,
       * and device detection
       */
       /* jshint unused:true */
      device = (function(){
        var match = agent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i),
            device = match && match[0] && match[0].toLowerCase() || 'other',
            detectMobile = device !== 'other',
            isTablet = (function(){
              return (/(tablet|ipad|playbook|silk|kindle)|(android(?!.*mobile))/i).test(device);
            })();

        return {
          idevice     : device === 'ipad' || device === 'iphone' || device === 'ipod',
          ipad        : device === 'ipad',
          iphone      : device === 'iphone',
          ipod        : device === 'ipod',
          isDesktop   : !detectMobile,
          isMobile    : detectMobile,
          isTablet    : detectMobile && isTablet,
          isPhone     : detectMobile && !isTablet,
          orientation : function(){ return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape' }
        }
      })(),
      /* jshint unused:false */
      /**
       * Used for rendering the gemini emblem (legacy support for < IE 9)
       * @type {String}
       */
      gemini = '<img class="adbuildr-image adbuildr-adchoice" onclick="javascript:window.open(\'http://info.yahoo.com/privacy/' + langauge + '/yahoo/relevantads.html\');" ' + (browser.msie && browser.version < 9 ? 'src="{path}{logo}.png" style="border: 0 !important;">' : 'src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" onmouseenter="this.style.width=\'94px\';" onmouseleave="this.style.width=\'18px\';" style="background: url({path}{logo}@2x.png) no-repeat 0 0; background-size: 94px 20px; width: 18px; height: 20px; ' + browser.cssPrefix + 'transition: all .3s ease-in-out; border: 0 !important; box-shadow: none !important;">'),
      /**
       * Iterates over a collection
       * @param {Array}    collection The collection to iterate over
       * @param {Function} fn         The callback function
       */
      each = function(collection, fn){
        var k = collection.length,
            i = 0;

        for(; i < k; i++){
          var result = fn.call(collection[i], collection[i], i);

          if(result === false){
            break;
          }
        }
      },
      /**
       * Returns the index of an item in the array
       * @param  {Array}  collection The array of items
       * @param  {Mixed}  item       The item to look for in the array
       * @return {Number}            The position of the item in the array
       */
      indexOf = function(collection, item){
        var k = collection.length,
            i = 0;

        for(; i < k; i++){
          if(collection[i] === item){
            return i;
          }
        }

        return -1;
      },
      /**
       * Determine whether the array contains a specific value
       * @param  {Array}   collection The array of items
       * @param  {Mixed}   item       The item to look for in the Array
       * @param  {Boolean} position   If true, the index of the matched item or -1 will be returned (optional)
       * @return {Mixed}              The true/false result, or the index of the value
       */
      inArray = function(collection, item, position){
        var result;

        if(collection instanceof Array){
          result = indexOf(collection, item);
        }

        if(position){
          return result;
        }

        return result !== -1;
      },
      /**
       * Returns the computed value of the passed elements property
       * @param  {Element} element  The DOM element
       * @param  {String}  property The property to get the value of
       * @return {Mixed}            The value of the passed property
       */
      getComputed = function(element, property){
        if(element.currentStyle){
          return element.currentStyle[property];
        }

        if(window.getComputedStyle){
          return window.getComputedStyle(element, null).getPropertyValue(property);
        }

        return element.style[property] || undefined;
      },
      /**
       * Returns an array of all child elements which match the given class name
       * @param  {Element} node      The element providing context
       * @param  {String}  classname The CSS class name to look for
       * @return {Array}             The collection of elements with the matching class name
       */
      getElementsByClassName = function(element, classname){
        var result = [],
            cname = new RegExp('(^| )' + classname + '( |$)'),
            elements = element.getElementsByTagName('*'),
            i = 0,
            size = elements.length;

        for(; i < size; i++){

          var classes = elements[i].className;

          if(cname.test(classes) && !loadedClass.test(classes)){
            return elements[i];
          }
        }

        return undefined;
      },
      /**
       * Filters the XPath collection, and returns the element at the specified index
       * @param  {String}  path  The XPath to evaluate
       * @param  {Number}  index The index of the DOM element to retrun
       * @return {Element}       The DOM element at the specified index
       */
      getElementAtIndex = function(path, index){
        var result = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null),
            /**
             * Filters the NodeList of elements that do not match the desired tag
             * @param {Array}  children Array containing the containers children
             * @param {String} tag      String containing the elements tag name
             */
            filter = function(children, tag){
              var filtered = [],
                  i = 0,
                  k = children.length;
              /* jshint ignore:start */
              for(; i < k; i++){
                var node = children[i];

                if(node.nodeType
                   && node.nodeType === 1
                   && node.tagName
                   && node.tagName === tag){
                  filtered.push(node);
                }
              }
              /* jshint ignore:end */

              return filtered;
            },
            /**
             * Returns the element at the given index of the cleaned collection
             * @param {Array} children Array or NodeList containing the child elements
             */
            process = function(children, snapshot){
              var collection = [],
                  size = snapshot ? children.snapshotLength : children.length,
                  i = 0;
              /* jshint ignore:start */
              for(; i < size; i++){
                var node = snapshot ? children.snapshotItem(i) : children[i];
                // make sure our node is an element node
                if(node && node.nodeType === 1){
                  // make sure its visible
                  if(getComputed(node, 'display') !== 'none'
                    // not a gemini ad container
                    && !loadedClass.test(node.className)
                    && !(node.id && node.id.indexOf('yap-') !== -1)
                  ){
                    collection.push(node);
                  }
                }
              }
              /* jshint ignore:end */
              return collection[index];
            };

        if(result.snapshotLength){
          var node = result.snapshotItem(0),
              source = path,
              bits = source.split('/..');

          if(bits.length > 1){
            if(node.parentNode && node.tagName){
              return process(filter(node.parentNode.childNodes, node.tagName))
            }

            return null;
          }
          else{
            return process(result, true)
          }
        }

        return null;
      },
      /**
       * Determines if an object is a plain object (created using "{}" or "new Object")
       * @param  {Object}  obj The object that will be checked to see if it's a plain object
       * @return {Boolean}     The true/false result of check
       */
      isPlainObject = function(obj){
        return !(typeof(obj) !== 'object' || obj && obj.nodeType || obj !== null && obj === obj.window || obj && obj.constructor && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf'));
      },
      /**
       * Generates a UUID for our request id `ri`
       * @return {String} The generated UUID
       */
      uuid = function(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
          var r = Math.random()*16|0,
              v = c === 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      },
      detectBoundaries = null,
      fragments = {};
      fragments.tbody = fragments.thead = fragments.tfoot = fragments.tr = 'table';
      fragments.th = fragments.td = 'tr';

  var Yahoo = {
    /**
     * Binds SafeFrmes to all ad positions for tracking
     * viewability measurement
     */
    viewability: function(){
      // reference safeframes boundary method
      detectBoundaries = (window.$sf && $sf.lib && $sf.lib.dom && $sf.lib.dom.Geom && $sf.lib.dom.Geom.bounds);
      // initialize position tracking
      Yahoo.track();
    },
    /**
     * Triggers YWA beacon for debugging
     * @param {String} src     String containing the YWA beacon
     * @param {String} message String containing the text we want to output to console
     */
    tracking: function(src, message){
      if(src){
        var YWA = new Image();
        // trigger the YWA beacon
        YWA.src = src;
      }

      // print tracking message to console
      if(message && window.console && window.console.log){
        console.log('%c ' + message, 'background: #400090; color: #fff');
      }
    },
    /**
     * The current version of syndication
     * @type {String}
     */
    version: '2.3.0',
    /**
     * Subscribe to published events
     * @param  {String}   event The event name
     * @param  {Function} fn    The callback function
     * @return {Number}         The unique subscription Id
     */
    subscribe: function(event, fn){
      if(!events[event]){
        events[event] = [];
      }

      var token = (++eventUID).toString();

      events[event].push({
        token: token,
        fn: fn
      });

      return token;
    },
    /**
     * Publish events for future subscription
     * @param  {String}   event  The event name
     * @param  {Function} args   The event arguments
     * @return {Boolean}         Always returns true
     */
    publish: function(event, args){
      if(!events[event]){
        return false;
      }

      setTimeout(function(){
        var subscribers = events[event],
            k = subscribers ? subscribers.length : 0;

        while(k--){
          subscribers[k].fn(event, args);
        }
      }, 0);

      return true;
    },
    /**
     * Unsubscribe from events
     * @param  {String}  token The unique event Id
     * @return {Boolean}       Always returns false
     */
    unsubscribe: function(token){
      var subscriptions;

      for(subscriptions in events){
        if(events[subscriptions]){
          var i = 0,
              k = events[subscriptions].length;

          for(; i < k; i++){
            if(events[subscriptions][i].token === token){
              events[subscriptions].splice(i, 1);

              return token;
            }
          }
        }
      }

      return false;
    },
    /**
     * The collection of sections from the publishers site
     * @type {Array}
     */
    adUnitCodes: [],
    /**
    * gdpr scope
    */
    y_gdpr:"",
    /**
    * euconsent
    */
    y_euconsent:"",
    /**
    /**
    * The API Key for the Ad Space
    */
    apiKey :'',

    /**
     * Object for managing multiple section data
     * @type {Object}
     */
    meta: {},
    /**
     * Array of Ids used from deduping
     */
    creativeIds: [],
    /**
     * Collect section codes
     */
    collect: function(){
      var img = new Image();
      /*Call the cookie service to set the B cookie */
      img.src = 'https://geo.yahoo.com/b?t=xhkd7&9sdk8454';

      var adUnitCode = window.adUnitCode;

      // convert legacy sectionCode strings to array
      if(typeof(adUnitCode) === 'undefined' && typeof(adUnitCode) === 'string'){
        adUnitCode = [adUnitCode];
      }

      if(adUnitCode){
        Yahoo.init(adUnitCode);
      }
    },

    
    /**
     * Initializes syndication script
     * @param  {Array}  code Array of section codes on the pages
     * @return {Object}      The Yahoo singleton
     */
    init: function(code){
      var i = 0,
          k = code.length;

      for(; i < k; i++){
        if(indexOf(Yahoo.adUnitCodes, code[i]) === -1){
          Yahoo.adUnitCodes.push(code[i]);
        }
      }
      // //For iframe lets not load darla
      // if(!darlaComplete){
      //   Yahoo.darla();
      // }
      // process sectionCode
      
      //sam's feeble attempt at a fix...

      if (window.__cmp) {
      
        console.log("window.__cmp is found (must be using safeFrame API)");
        
        window.__cmp('getConsentData', null, function (result, success) {
        	console.log("getConsentData success: "+success);
          if (success) {
          	// consentData contains the base64-encoded consent string
          	Yahoo.y_euconsent = result.consentData === undefined ? "" : result.consentData;
	          // gdprApplies specifies whether the user is in EU jurisdiction
          	Yahoo.y_gdpr = result.gdprApplies === undefined ? "" : result.gdprApplies;
	          // pass these 2 values to all ad / pixel calls
        	} else {
          	// either CMP is not on the publisher's page or an error occurred.
        	}
          
      	});     

// need to add in code to make the ad call
	      
	      
      } else {
	      //if (!window.__cmp){ 
        console.log("window.__cmp not found; cue the iframe magic");
        // find the CMP frame
        var f = window;
        var cmpFrame;
        while (!cmpFrame) {
          try {
            if (f.frames["__cmpLocator"]) cmpFrame = f;
          } catch (e) {}
          if (f === window.top) break;
          f = f.parent;
        }

        var cmpCallbacks = {};

        /* Set up a __cmp function to do the postMessage and
           stash the callback.
           This function behaves (from the caller's perspective)
           identically to the same frame __cmp call */
        window.__cmp = function(cmd, arg, callback) {
          console.log(cmd);
          console.log(arg);
          console.log(callback);
          if (!cmpFrame) {
            callback({ msg: "CMP not found" }, false);
            console.log("CMP not found");
            return;
          }
          var callId = Math.random() + "";
          console.log("callId: "+callId);
          var msg = {
            __cmpCall: {
              command: cmd,
              parameter: arg,
              callId: callId
            }
          };
          cmpCallbacks[callId] = callback;
          cmpFrame.postMessage(msg, "*");
        };

        /* when we get the return message, call the stashed callback */
        window.addEventListener(
          "message",
          function(event) {
            var msgIsString = typeof event.data === "string";
            var json = event.data;
            if (msgIsString) {
              try {
                json = JSON.parse(event.data);
              } catch (e) {}
            }

            if (json.__cmpReturn) {
              var i = json.__cmpReturn;
              cmpCallbacks[i.callId](i.returnValue, i.success);
              delete cmpCallbacks[i.callId];
            }
          },
          false
        );

        if(window.__cmp){
          console.log("window.__cmp doing it's thing with postmessaging");
          window.__cmp("getConsentData", null, function(result, success) {
            if (success) {
              // consentData contains the base64-encoded consent string
              Yahoo.y_euconsent = result.consentData === undefined ? "" : result.consentData;

              // gdprApplies specifies whether the user is in EU jurisdiction
              Yahoo.y_gdpr = result.gdprApplies === undefined ? "" : result.gdprApplies;

              Yahoo.fetch(Yahoo.adUnitCodes.shift());
              // pass these 2 values to all ad / pixel calls
            } else {
              Yahoo.fetch(Yahoo.adUnitCodes.shift());
              // either CMP is not on the publisher's page or an error occurred.
            }
          });
        } else {
          Yahoo.fetch(Yahoo.adUnitCodes.shift());
        }
      }

      return Yahoo;
    },
    /**
     * Pull down view-ability library async
     */
    darla: function(){
      // include DARLA for viewability
      var script = document.createElement('script');

      script.async = true;
      script.src = 'https://s.yimg.com/rq/darla/2-8-9/js/g-d-min.js';

      script.onload = function(){
        darlaComplete = true;
        Yahoo.viewability();
      };

      document.body.appendChild(script);
    },
    /**
     * Fetch section data using JSONP, create meta reference
     * and the injection process
     */
    fetch: function(id){
       /*GDPR related changes*/
      if (!window.__cmp) {
        // find the CMP frame
        var f = window;
        var cmpFrame;
        while (!cmpFrame) {
          try {
            if (f.frames["__cmpLocator"]) cmpFrame = f;
          } catch (e) {
          }
          if (f === window.top) break;
          f = f.parent;
        }

        var cmpCallbacks = {};

        /* Set up a __cmp function to do the postMessage and
           stash the callback.
           This function behaves (from the caller's perspective)
           identically to the same frame __cmp call */
        window.__cmp = function (cmd, arg, callback) {
          if (!cmpFrame) {
            callback({msg: "CMP not found"}, false);
            return;
          }
          var callId = Math.random() + "";
          var msg = {
            __cmpCall: {
              command: cmd,
              parameter: arg,
              callId: callId
            }
          };
          cmpCallbacks[callId] = callback;
          cmpFrame.postMessage(msg, '*');
        }


        /* when we get the return message, call the stashed callback */
        window.addEventListener("message", function (event) {
          var msgIsString = typeof event.data === "string";
          var json = event.data;
          if (msgIsString) {
            try {
              json = JSON.parse(event.data);
            } catch (e) {}
          }

          if (json.__cmpReturn) {
            var i = json.__cmpReturn;
            cmpCallbacks[i.callId](i.returnValue, i.success);
            delete cmpCallbacks[i.callId];
          }
        }, false);
      }

window.__cmp('getConsentData', null, function (result, success) {
        console.log("window.__cmp to the rescue");
        if (success) {
          // consentData contains the base64-encoded consent string
          Yahoo.y_euconsent = result.consentData === undefined ? "" : result.consentData;

          // gdprApplies specifies whether the user is in EU jurisdiction
          Yahoo.y_gdpr = result.gdprApplies === undefined ? "" : result.gdprApplies;

          // pass these 2 values to all ad / pixel calls
        } else {
          // either CMP is not on the publisher's page or an error occurred.
        }
      });

      // check length for legacy support of only sectionId
      var code = '&adUnitCode='+id,
          // set pu based on webview/fb v. browser
          pu =  url.indexOf('http') === -1 ? '' : '&publisherUrl=' + encodeURIComponent(url),
          // unique hash for the request identifier
          ri = uuid(),
          //apiKey
          apiKey = '&apiKey=' + window.apiKey,
          //gdpr
          gdpr = '&gdpr=' + Yahoo.y_gdpr,
          //euconsent
          euconsent = '&euconsent=' + Yahoo.y_euconsent,
          // move to next section
          nextSection = function(){
            // do we have more sections
            if(Yahoo.adUnitCodes.length){
              // fetch next section
              Yahoo.fetch(Yahoo.adUnitCodes.shift());
            }
          };

      // create a meta object of section data
      Yahoo.meta[id] = {
        // internal count for total injections
        count: 0,
        // flag for completion of ad call
        completed: false
      };

      this.jsonp({
        url: 'https://ads.yap.yahoo.com/nosdk/wj/v1/getAds.do?locale=en_us&agentVersion=205&adTrackingEnabled=true&totalAds=10' + pu + code + apiKey + gdpr + euconsent,
        error: function(){
          // fire error handler callback
          if(errorHandler && typeof(errorHandler) === 'function'){
            errorHandler('error', { code: id });
          }
          // next section
          nextSection();
        },
        success: function(data){
          // handle ssi failures
          if(data && data.additionalErrorInfo){
            // trigger error handler
            if(errorHandler && typeof(errorHandler) === 'function'){
              errorHandler('error', { code: id, error: data });
            }


            // go to next section
            return nextSection();
          }
          // update completed flag
          Yahoo.meta[id].completed = true;
          // publish fetch
          Yahoo.publish('section:fetched',
            Yahoo.extend(true, Yahoo.meta[id], data, {
              section: {
                code: id
              }
            })
          );
          // subscribe to detect event
          Yahoo.subscribe(Yahoo.meta[id].section.code + ':detect', function(event, config){
            Yahoo.identify(config);
          });
          // subscribe to inject event
          Yahoo.subscribe(Yahoo.meta[id].section.code + ':inject', function(event, config){
            if(config.config.ads.length){
              Yahoo.inject(config.node, config.index, config.config, function(conf){
                Yahoo.publish(conf.section.code + ':detect', conf);
              });
            }
            else{
              if(errorHandler && typeof(errorHandler) === 'function'){
                errorHandler('empty', { code: id });
              }

              Yahoo.unsubscribe(this.token);
            }
          });
          // next section
          nextSection();
        }
      });
    },
    /**
     * Tracks ad positions, pulls geometry and
     * triggers beacons when in units meet thresholds
     */
    track: function(){
      var history = {},
          // our in-view threshold
          threshold = 0.5,
          // reference our timer
          timer;

      // check if boundary method is available and darla has loaded
      if(!detectBoundaries && !darlaComplete){
        Yahoo.darla();
        return Yahoo.track();
      }

      timer = setInterval(function(){
        var i = 0,
            k = positions.length;

        if(!k){
          return;
        }

        for(; i < k; i++){
          var element = document.getElementById(positions[i]);
          // create cache for position
          if(!history[positions[i]]){
            history[positions[i]] = {};
          }
          // prevent breakage on error
          if(!detectBoundaries){
            return;
          }
          // extent history with boundary data
          Yahoo.extend(history[positions[i]], detectBoundaries(element, {}, true));
          // if element is not in view reset duration
          if(history[positions[i]].duration && history[positions[i]].t === 0 && history[positions[i]].l === 0 && history[positions[i]].b === 0 && history[positions[i]].r === 0){
            history[positions[i]].duration = (new Date()).getTime();
          }
          // check if any corner of this element is in view
          if(history[positions[i]].t || history[positions[i]].l || history[positions[i]].r || history[positions[i]].b){
            // if in-view has dropped out reset
            if(!history[positions[i]].duration || history[positions[i]].iv === 0){
              history[positions[i]].duration = (new Date()).getTime();
            }
            else{
              // get current time and substract that from the start
              var time = (new Date()).getTime() - new Date(history[positions[i]].duration).getTime();

              if((time / 1000) >= 1 && history[positions[i]].iv >= threshold){

                var a = 0,
                    b = beacons[positions[i]].length;

                for(; a < b; a++){
                  // create img
                  var img = new Image();
                  // append src
                  img.src = beacons[positions[i]][a];
                }

                // cause IE :(
                try {
                  // remove beacons
                  delete beacons[positions[i]];
                  delete history[positions[i]];
                }
                catch(e){
                  beacons[positions[i]] = history[positions[i]] = null;
                }

                positions.splice(i, 1);
              }
            }
          }
        }
      }, 250);
    },
    /**
     * Identify placement within the DOM
     * @param {Object} config Object containing the section meta-data
     */
    identify: function(config){

      var section = config.section,
          index = section.start + (config.count * section.skip),
          node = getElementAtIndex(section.xpath, Math.max(0, index - 1));

      if(!node){
        config.replace = true;

        node = getElementsByClassName(document.body, 'yap-ad-' + section.code);

        if(!node){
          getElementsByClassName(document.body, 'gemini-ad-' + section.code);
        }

        if(!node){
          node = getElementsByClassName(document.body, 'gemini-ad');
        }

        if(!node){
          config.replace = false
        }
      }

      if(node && node.nodeType && node.nodeType === 1){

        if(section.template && !config.template){
          // bring in the template
          Yahoo.jsonp({
            url: section.template,
            callback: {
              fn: 'ygscb',
              param: 'cb'
            },
            success: function(data){
              // decode HTML template
              config.template = {
                // the html string template
                html: decodeURIComponent(data.template),
                // original image height
                originalHeight: data.originalHeight,
                // original image width
                originalWidth: data.originalWidth,
                // reference to determined aspect ratio
                aspect: data.aspect,
                // explicit image size
                imgType: data.imgType,
                // device targeting
                device: data.device
              };
              // preload the correct images
              Yahoo.preload(config.ads, config.template.aspect, config.template.imgType);
              // inject ad positions
              Yahoo.publish(config.section.code + ':inject', {
                node: node,
                index: index,
                config: config
              });
            }
          });
        }else{
          Yahoo.publish(config.section.code + ':inject', {
            node: node,
            index: index,
            config: config
          });
        }
      }else{
        if(config.ads.length){
          setTimeout(function(){
            Yahoo.publish(config.section.code + ':detect', config);
          }, 500);
        }else{
          if(errorHandler && typeof(errorHandler) === 'function'){
            errorHandler('empty', { code: config.section.code });
          }
        }
      }
    },
    /**
     * Creates and injects the ad unit to the target nodes stream
     * @param  {DOM Element} node   Target node to inject after
     * @param  {Number}      index  Number representing the index in the stream to inject
     * @param  {Object}      config Object containing section meta-data
     * @param  {Function}    fn     Callback function to execute once completed
     */
    inject: function(node, index, config, fn){

      // make sure we inject in the specified environment
      if(config.template && config.template.device){
        if(
          config.template.device === 'phone' && !device.isPhone ||
          config.template.device === 'tablet' && !device.isTablet
        ){
          return;
        }
      }

      function fireBeacons(container_index){
    //Fire all the click events
    var a = 0,
        b = click_beacons[container_index].length;
        for(; a < b; a++){
    // create img
      var img = new Image();
            // append src
      img.src = click_beacons[container_index][a];
    }
      }



      var code = config.section.code,
          parent = node.parentNode,
          containerWidth = getComputed(node, 'width'),
          containerHeight = getComputed(node, 'height'),
          ad = config.ads.shift(),
          tag = ad.tag,
          uid = 'yap-' + ad.tag.adGuid,
      i = 0,
      k = 0,
          determineImageAsset =  function(obj){
            var type = config.template.imgType,
                aspect = config.template.aspect;

            if(type && obj[type]){
              return obj[type];
            }

            if(aspect && aspect !== 1){
              return obj.secHqImage || obj.secOrigImg || obj.secImage;
            }

            return obj.secOrigImg || obj.secHqImage || obj.secImage;
          },
          // our template data
          placeholders = {
            /* jslint camelCase: true */
            click_url: tag.clickUrl,
            /* jslint camelCase: false */
            title: tag.headline,
            image: determineImageAsset(tag),
            sponsor: tag.source,
            description: tag.summary,
            gemini_alt: gemini.slice().replace(/\{logo\}/g, 'syndication_alt').replace(/\{path\}/g, assetsAlt),
            gemini: gemini.slice().replace(/\{logo\}/g, 'syndication').replace(/\{path\}/g, assets)
          },
          container, target, slot;

          if(ad.adType === 'BANNER'){
            container = document.createElement('div');
            container.innerHTML = ad.tag.display;

          } else {
            // update template with meta data
            container = Yahoo.fragment(Yahoo.format(config.template.html, placeholders));
        }
            // the element we are injecting after
        target = index === 0 ? node : (node.nextElementSibling || node.nextSibling);

        // the position of the injection for YWA
        slot = index + config.count;

      if(container && container.nodeType && container.nodeType !== 1){

        // execute callback
        if(typeof(fn) === 'function'){
          fn(config);
        }

        return;
      }
      // check if this ad is a duplicate to a previous render
      if(inArray(Yahoo.creativeIds, ad.tag.adGuid)){
        // execute callback
        if(typeof(fn) === 'function'){
          fn(config);
        }
        return;
      }
      // push ad creative id into rendered ads collection
      Yahoo.creativeIds.push(ad.tag.adGuid)
      // set container id
      container.setAttribute('id', uid);
      // set section reference
      container.setAttribute('code', code);
      /*Set Click Listeners*/
      var win = window;
      if(win.addEventListener){
          container.addEventListener('click', function(){
            fireBeacons(uid);
          }, false);
      } else if(win.attachEvent){
          container.attachEvent('click', function(){
            fireBeacons(uid);
          });
      }
      console.log('Inside inject- Before inject');
      // are doing a replace
      if(config.replace){
        var currentClassNames = node.className,
            currentStyle = node.style.cssText;
        // restore publisher provided class names to our replacement block
        container.className += ' ' + currentClassNames;
        // restore publisher provided styling (for absolute positioning)
        container.style.cssText += ' ' + currentStyle;
        // replace existing placeholder element with ad container
        parent.replaceChild(container, node);
        // reset class detection flag
        config.replace = false;
      } else{
        // insert ad unit into the container element
        parent.insertBefore(container, target);
      }
      // adjust images for letterboxing support
      Yahoo.process(slice.call(container.getElementsByTagName('img')), config);

      // add key for this ad units beacons
      if(!beacons[uid]){
        beacons[uid] = [];
      }
      // add our beacon to the collection
      beacons[uid].push(ad.beacon.replace('$(AD_POSN)', encodeURIComponent('pp=m,pi=' + slot)));
      // add 3rd party beacons
      if(tag.imprTrackingUrl){
        if(tag.imprTrackingUrl instanceof Array){
              i = 0;
              k = tag.imprTrackingUrl.length;

          for(; i < k; i++){
            beacons[uid].push(tag.imprTrackingUrl[i]);
          }
        }
      }

      if(!click_beacons[uid]){
        click_beacons[uid] = [];
      }
      if(tag.clickTrackingUrl){
        if(tag.clickTrackingUrl instanceof Array){
              i =0;
            k = tag.clickTrackingUrl.length;
          for(; i < k; i++){
            click_beacons[uid].push(tag.clickTrackingUrl[i]);
          }
        }
      }

      //Fire impression beacons after one second
      setTimeout(function(){
        var a = 0,
        b = beacons[uid].length;
        for(; a < b; a++){
    // create img
      var img = new Image();
            // append src
      img.src = beacons[uid][a];
    }
      }, 1000);
      // apply rendered state
      container.className += ' yap-loaded';
      // push ids
      positions.push(uid);
      // increase count for next injection
      config.count++;
      // execute callback
      if(typeof(fn) === 'function'){
        fn(config);
      }
    },
    /**
     * Preload all ad assets prior to injection
     * @param  {Array}  ads    Array of ads returned from the ad call
     * @param  {String} aspect String containing the aspect ratio of the image (e.g. '1')
     * @param  {String} type   String containing the specific image type 'secImage', 'secOrigImg', 'secHqImage'
     */
    preload: function(ads, aspect, type){
       console.log('Inside preload');
      var i = 0,
          k = ads.length;

      for(; i < k; i++){
        if(ads[i].ccCode === 'LREC'){
          continue;
        }
        var tag = ads[i].tag,
            img = document.createElement('img'),
            which;

        if(type && tag[type]){
          which = tag[type];
        }
        else if(aspect && aspect !== '1'){
          which = tag.secHqImage || tag.secOrigImg || tag.secImage;
        }
        else{
          which = tag.secOrigImg || tag.secOrigImg || tag.secImage;
        }

        if(which){
          img.src = which;
        }
      }
      console.log('End of preload');
    },
    /**
     * Process all template images for controlled rendering
     * @param {Array} images Array of images extracted from the template
     */
    process: function(images, config){

      if(!images.length){
        return;
      }

      var template = config.template,
          k = images.length,
          i = 0;

      for(; i < k; i++){
        var img = images[i],
            // store reference to original source
            src = img.getAttribute('src'),
            // width - minus any padding so things line up
            height = template.originalHeight ? template.originalHeight + 'px' : 'auto',
            // width - minus any padding so things line up
            width = template.originalWidth ? template.originalWidth + 'px' : '100%';

        // update all images except ad-choices block
        if(img.className.indexOf('adbuildr-image') === -1){
          if(browser.msie && browser.version < 9){
            img.setAttribute('src', src);
            img.setAttribute('style', 'background-color: #000; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + src + '", sizingMethod="scale"); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + src + '", sizingMethod="scale");');
          }else{
            img.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
            img.style.cssText += 'background: url(' + src + ') no-repeat scroll center center / contain #000;';
          }

          img.style.cssText += 'height: ' + height + '; width: ' + width + ';';
        }
      }
    },
    /**
     * Returns a formatted string template from the passed values
     * @param  {String} tpl     String template containing place-holders to replace
     * @param  {Mixed}  values  Array/Object containing the indexed values or property key/value pairs
     * @return {String}         String containing the formatted template
     */
    format: function(tpl, values){
      if(!tpl || !values || typeof(values) !== 'object'){
        return undefined;
      }

      return tpl.replace(/\{(\w+)\}/g, function(match, key){
        return values[key] || '';
      });
    },
    /**
     * Creates DOM node(s) from a HTML string
     * @param  {String} html Dtring containing arbitrary HTML
     * @return {Array}       The DOM node(s)
     */
    fragment: function(html){
      var type = (/^\s*<(\w+|!)[^>]*>/).test(html),
          container = document.createElement(fragments[RegExp.$1] || 'div');

      container.innerHTML = ('' + html);

      var items = slice.call(container.childNodes);

      each(items, function(element){
        container.removeChild(element);
      });

      return items.shift();
    },
    /**
     * Append additonal params to a URL query string
     * @param  {String} uri     The URL to append the new items to
     * @param  {String} query   The additional query params
     * @return {String}         The new query string
     */
    appendQuery: function(uri, query) {
      return (uri + '&' + query).replace(/[&?]{1,2}/, '?');
    },
    /**
     * Fetch data cross-domain with JSONP
     * @param {Object} config The JSONP request configuration
     */
    jsonp: function(config){
      var defaults = {
        url: '',
        callback : {
          fn     : null,
          param  : 'cb'
        },
        context  : document,
        error    : emptyFn,
        success  : emptyFn,
        timeout  : 0
      };

      config = Yahoo.extend(true, defaults, config);

      var script = document.createElement('script'),
          fn = config.callback.fn || ('jsonpCallback' + (puid++)),
          context = config.context,
          timeout, data;

      var handler = function(){
        if(timeout){
          clearTimeout(timeout);
          timeout = null;
        }

        script.parentNode.removeChild(script);

        if(data){
          config.success.call(context, data[0]);
        }else{
          config.error.call(context, null, 'error');
        }

        data = undefined;
      };
      // handle any errors
      script.onerror = handler;
      // bind to script load
      script.onload = handler;
      // setup callback function
      window[fn] = function(){
        data = arguments;
      };
      // append custom callback param
      config.url = Yahoo.appendQuery(config.url, config.callback.param + '=?');
      // set script source
      script.src = config.url.replace(/\?(.+)=\?/, '?$1=' + fn);
      // append to document head
      document.getElementsByTagName('head')[0].appendChild(script);

      if(config.timeout > 0){
        timeout = setTimeout(function(){
          script.parentNode.removeChild(script);

          if(fn in window){
            window[fn] = emptyFn;
          }

         config.error.call(context, null, 'timeout');
        }, config.timeout);
      }
    }
  };

  /**
   * Merge the contents of two or more objects into the target object
   * @param  {Boolean} deep      If true, the merge becomes recursive (optional)
   * @param  {Object}  target    The object receiving the new properties
   * @param  {Object}  arguments One or more additional objects to merge with the first
   * @return {Object}            The target object with the new contents
   */
  Yahoo.extend = function(target){
    var i = 1,
        deep = false;

    if(typeof(target) === 'boolean'){
      deep = target;
      target = arguments[1] || {};
      i++;
    }

    each(slice.call(arguments, i), function(obj){
      var src, copy, isArray, clone;

      for(var key in obj){
        src = target[key];
        copy = obj[key];

        if(target === copy){
          continue;
        }

        if(deep && copy && (isPlainObject(copy) || (isArray = copy instanceof Array))){
          if(isArray){
            clone = (src && src instanceof Array) ? src : [];
          }else{
            clone = (src && isPlainObject(src)) ? src : {};
          }

          isArray = false;

          target[key] = Yahoo.extend(deep, clone, copy);
        }
        else if(copy !== undefined){
          target[key] = copy;
        }
      }
    });

    return target;
  };

  Yahoo.subscribe('section:fetched', function(event, config){
    // update our section config with proper values
    Yahoo.extend(config.section, {
      // set starting position
      start: Math.max(0, parseInt(config.section.start, 10) - 1),
      // set skips
      skip: parseInt(config.section.skip, 10),
      // clean up xpath
      xpath: (function(){
        // reference xpath
        var source = config.section.xpath,
            // look for context to parent node (e.g. /html/body/div/a/div/../..)
            bits = source.split('/..');
        // if we have context clean up the xpath
        if(bits.length > 1){
          // determine size
          var size = bits.length - 1,
              // split the remaining path
              path = source.split('/'),
              // get the target element
              index = path.length - ((size * 2) + 1),
              // item to update
              element = path[index],
              // remove index
              explicit = element.replace(/\[((\d+))\]*$/, ''),
              // updated xpath
              update = path.splice(index, 1, explicit);

          return path.join('/');
        }

        return source.replace(/\[((\d+))\]*$/, '');
      })()
    });
    console.log('Inside fetched and calling detect'+config);
    Yahoo.publish(config.section.code + ':detect', config);
  });

  // set global reference
  window.Yahoo = Yahoo;

  Yahoo.collect();
}
