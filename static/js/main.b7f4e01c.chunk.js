(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports=[{id:1,name:"Bart",image:"https://vignette.wikia.nocookie.net/simpsons/images/f/fb/Bart%27s_youngest_son.png/revision/latest?cb=20141028004843"},{id:2,name:"Marge",image:"https://i.kym-cdn.com/photos/images/newsfeed/001/087/822/466.png"},{id:3,name:"Homer",image:"https://i.dlpng.com/static/png/68346_preview.png"},{id:4,name:"Lisa",image:"https://i.pinimg.com/originals/21/b2/30/21b2301fb6433ea2c4ba6d1051c52fe0.png",clicked:!1},{id:5,name:"Ned Flanders",image:"https://i.ibb.co/F3dHxvj/output-onlinepngtools.png",clicked:!1},{id:6,name:"Krusty the Clown",image:"https://s3.amazonaws.com/rapgenius/1354826801_Krusty-The-Clown-psd31017.png",clicked:!1},{id:7,name:"Moe",image:"http://pngimage.net/wp-content/uploads/2018/06/moe-png-5.png",clicked:!1},{id:8,name:"Principal Skinner",image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Seymour_Skinner.png/220px-Seymour_Skinner.png",clicked:!1},{id:9,name:"Mr Burns",image:"https://img.fireden.net/v/image/1488/21/1488211803327.png",clicked:!1},{id:10,name:"Milhouse",image:"https://i.pinimg.com/originals/8f/69/73/8f6973a1df71128f037e73138d6997d5.png",clicked:!1},{id:11,name:"Apu",image:"https://i.imgur.com/0qb4U8n.jpg",clicked:!1},{id:12,name:"Santa's Little Helper",image:"https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/d9/d0/5c/d9d05c14f16aedf8989df54caf5493c9.png",clicked:!1}]},,,,function(e,n,t){e.exports=t(31)},,,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(3),r=t.n(c),s=(t(16),t(4)),m=t(5),o=t(9),l=t(6),d=t(10);t(18);var u=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.cardClicked(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("h3",null,e.name)))};t(20);var p=function(e){return i.a.createElement("div",{className:"score-board"},e.children)};t(22);var g=function(e){return i.a.createElement("h1",{className:"title"},e.children)};t(24);var f=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},h=t(7);t(26);var k=function(e){return i.a.createElement("h2",null,"Dont pick the same Character Twice!")},v=t(8),w=t.n(v),b=(t(29),function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(i)))).state={simpsons:h,count:0},t.cardClicked=function(e){var n=!1;t.setState({count:t.state.count+1}),t.setState({simpsons:t.state.simpsons.map(function(t){return t.id===e&&(!0===t.clicked&&(n=!0),t.clicked=!0),t})}),!0===n&&t.restartGame(),t.shuffle()},t.restartGame=function(){alert("Game Over Try Again"),t.setState({simpsons:t.state.simpsons.map(function(e){return e.clicked=!1,e}),count:0})},t.shuffle=function(){var e=t.state.simpsons,n=w.a.shuffle(e);t.setState({simpsons:n})},t}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(f,null,i.a.createElement(g,null,"Simpsons Clicky Game",i.a.createElement(k,null," Dont click the same character twice!"),i.a.createElement(p,null,"Score: ",this.state.count)),this.state.simpsons.map(function(n){return i.a.createElement(u,{cardClicked:e.cardClicked,id:n.id,key:n.id,name:n.name,image:n.image})}))}}]),n}(a.Component));r.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[11,2,1]]]);
//# sourceMappingURL=main.b7f4e01c.chunk.js.map