(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),s=n.n(r),i=(n(13),n(1)),c=n(4),l=n(5),u=n(7),m=n(6),g=function(e){var t=e.goods;return a.a.createElement(a.a.Fragment,null,t.map((function(e){return a.a.createElement("li",{key:e},e)})))},h=function(e){var t=e.onChange,n=e.minLength;return a.a.createElement("select",{onChange:t,value:n,className:"LengthFilter"},[1,2,3,4,5,6,7,8,9,10].map((function(e){return a.a.createElement("option",{value:e,key:e},e)})))},d=(n(14),function(e){var t=e.reverseList,n=e.sortByName,o=e.reset,r=e.sortByLength,s=e.handleLengthSelection,i=e.minLength;return a.a.createElement("div",{className:"Actions"},a.a.createElement("button",{type:"button",onClick:t},"Reverse"),a.a.createElement("button",{type:"button",onClick:n},"Alphabetically"),a.a.createElement("button",{type:"button",onClick:o},"Reset"),a.a.createElement("button",{type:"button",onClick:r},"Length"),a.a.createElement(h,{onChange:s,minLength:i}))}),f=(n(15),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isVisible:!1,goods:Object(i.a)(e.props.goods),minLength:1},e.showList=function(){e.setState({isVisible:!e.isVisible})},e.reverseList=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).reverse()}}))},e.sortByName=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},e.reset=function(){e.setState({goods:Object(i.a)(e.props.goods),minLength:1})},e.sortByLength=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},e.handleLengthSelection=function(t){e.setState({minLength:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isVisible,n=e.goods,o=e.minLength;return a.a.createElement("div",{className:"GoodsList"},t?a.a.createElement("div",{className:"GoodsList__wrapper"},a.a.createElement("div",{className:"GoodsList__list"},a.a.createElement(g,{goods:n.filter((function(e){return e.length>o}))})),a.a.createElement(d,{reverseList:this.reverseList,sortByName:this.sortByName,reset:this.reset,sortByLength:this.sortByLength,handleLengthSelection:this.handleLengthSelection,minLength:o})):a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:this.showList},"Start")))}}]),n}(a.a.Component)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),"Current goods number: ".concat(p.length),a.a.createElement(f,{goods:p}))};s.a.render(a.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7202be71.chunk.js.map