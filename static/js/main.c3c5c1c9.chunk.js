(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(t,e,s){},9:function(t,e,s){"use strict";s.r(e);var r=s(8),n=s(3),a=s(4),c=s(6),i=s(5),o=s(1),u=s.n(o),l=s(7),h=s.n(l),b=(s(14),s(0));function j(t){return Object(b.jsx)("button",{className:"Square",onClick:t.onClick,children:t.value})}var v=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(a.a)(s,[{key:"renderSquare",value:function(t){var e=this;return Object(b.jsx)(j,{value:this.props.squares[t],onClick:function(){return e.props.onClick(t)}})}},{key:"render",value:function(){for(var t=Array(9),e=0;e<9;e++)t[e]=this.renderSquare(e);return t}}]),s}(u.a.Component),m=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(t){var r;return Object(n.a)(this,s),(r=e.call(this,t)).state={xIsNext:!0,history:[{squares:Array(9),moves:Array(2)}],stepNumber:0,moveAsc:!0},r}return Object(a.a)(s,[{key:"changeMoveOrder",value:function(){this.setState({moveAsc:!this.state.moveAsc})}},{key:"jumpTo",value:function(t){this.setState({stepNumber:t,xIsNext:t%2===0})}},{key:"handleClick",value:function(t){var e=Math.floor(t/3)+1,s=t%3+1,r=this.state.history.slice(0,this.state.stepNumber+1),n=r[this.state.stepNumber].squares;if(!n[t]&&!f(n,this.state.stepNumber)){var a=n.slice();a[t]=this.state.xIsNext?"X":"O",this.setState({xIsNext:!this.state.xIsNext,history:r.concat([{squares:a,moves:[e,s]}]),stepNumber:this.state.stepNumber+1})}}},{key:"render",value:function(){var t=this,e=this.state.history,s=e.map((function(e,s){t.state.moveAsc||(s=t.state.history.length-1-s);var r=s?"Go to move #"+s:"Go to game start",n=t.state.history[s].moves;return Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{onClick:function(){return t.jumpTo(s)},style:{backgroundColor:t.state.stepNumber===s?"yellow":""},children:r}),0!==s&&Object(b.jsx)("span",{children:" row: "+n[0]+" col: "+n[1]})]},s)})),r=e[this.state.stepNumber].squares,n=f(r,this.state.stepNumber);return n||(n="Turn for: "+(this.state.xIsNext?"X":"O")),Object(b.jsxs)("div",{className:"Game",children:[Object(b.jsx)("div",{className:"GameBoard",children:Object(b.jsx)(v,{squares:r,onClick:function(e){return t.handleClick(e)}})}),Object(b.jsx)("div",{className:"GameInfo",children:n}),Object(b.jsx)("button",{onClick:function(){return t.changeMoveOrder()},children:"Reverse order"}),Object(b.jsx)("ul",{children:s})]})}}]),s}(u.a.Component);function f(t,e){if(e>=5)for(var s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<s.length;n++){var a=Object(r.a)(s[n],3),c=a[0],i=a[1],o=a[2];if(t[c]&&t[c]===t[i]&&t[i]===t[o])return t[c]+" is winner"}return 9===e?"Draw":null}h.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.c3c5c1c9.chunk.js.map