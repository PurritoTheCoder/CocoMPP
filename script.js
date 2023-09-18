$(function(){console.log("%cWelcome to MPP's developer console!","color:blue; font-size:20px;"),console.log(`%cCheck out the source code: https://github.com/LapisHusky/mppclone/tree/main/client
Guide for coders and bot developers: https://docs.google.com/document/d/1OrxwdLD1l1TE8iau6ToETVmnLuLXyGBhA0VfAY1Lf14/edit?usp=sharing`,"color:gray; font-size:12px;");var At=window.location.hash&&window.location.hash.match(/^(?:#.+)*#test(?:#.+)*$/i),dt=window.location.hash&&window.location.hash.match(/^(?:#.+)*#seeowncursor(?:#.+)*$/i),ut=window.location.hash&&window.location.hash.match(/^(?:#.+)*#midivolumetest(?:#.+)*$/i),me;Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length>>>0,o=Number(arguments[1])||0;for(o=o<0?Math.ceil(o):Math.floor(o),o<0&&(o+=t);o<t;o++)if(o in this&&this[o]===e)return o;return-1}),window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/30)};var He=.5,Mt=1e3,Re=function(e,t,o,i){this.x=e,this.y=t,this.w=o,this.h=i,this.x2=e+o,this.y2=t+i};Re.prototype.contains=function(e,t){return e>=this.x&&e<=this.x2&&t>=this.y&&t<=this.y2};const Ge={"Notes in C Major":["C","D","E","F","G","A","B","C"],"Notes in D Major":["D","E","G\u266D","G","A","B","D\u266D","D"],"Notes in E Major":["E","G\u266D","A\u266D","A","B","D\u266D","E\u266D","E"],"Notes in F Major":["F","G","A","B\u266D","C","D","E","F"],"Notes in G Major":["G","A","B","C","D","E","G\u266D","G"],"Notes in A Major":["A","B","D\u266D","D","E","G\u266D","A\u266D","A"],"Notes in B Major":["B","D\u266D","E\u266D","E","G\u266D","A\u266D","B\u266D","B"],"Notes in C# / Db Major":["D\u266D","E\u266D","F","G\u266D","A\u266D","B\u266D","C","D\u266D"],"Notes in D# / Eb Major":["E\u266D","F","G","A\u266D","B\u266D","C","D","E\u266D"],"Notes in F# / Gb Major":["G\u266D","A\u266D","B\u266D","B","D\u266D","E\u266D","F","G\u266D"],"Notes in G# / Ab Major":["A\u266D","B\u266D","C","D\u266D","E\u266D","F","G","A\u266D"],"Notes in A# / Bb Major":["B\u266D","C","D","E\u266D","F","G","A","B\u266D"],"Notes in A Minor":["A","B","C","D","E","F","G","A"],"Notes in A# / Bb Minor":["B\u266D","C","D\u266D","E\u266D","F","G\u266D","A\u266D","B\u266D"],"Notes in B Minor":["B","D\u266D","D","E","G\u266D","G","A","B"],"Notes in C Minor":["C","D","E\u266D","F","G","A\u266D","B\u266D","C"],"Notes in C# / Db Minor":["D\u266D","E\u266D","E","G\u266D","A\u266D","A","B","D\u266D"],"Notes in D Minor":["D","E","F","G","A","B\u266D","C","D"],"Notes in D# / Eb Minor":["E\u266D","F","G\u266D","A\u266D","B\u266D","B","D\u266D","E\u266D"],"Notes in E Minor":["E","G\u266D","G","A","B","C","D","E"],"Notes in F Minor":["F","G","A\u266D","B\u266D","C","D\u266D","E\u266D","F"],"Notes in F# / Gb Minor":["G\u266D","A\u266D","A","B","D\u266D","D","E","G\u266D"],"Notes in G Minor":["G","A","B\u266D","C","D","E\u266D","F","G"],"Notes in G# / Ab Minor":["A\u266D","B\u266D","B","D\u266D","E\u266D","E","G\u266D","A\u266D"]};var Lt=function(){var e={"people are playing":{pt:"pessoas est\xE3o jogando",es:"personas est\xE1n jugando",ru:"\u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0438\u0433\u0440\u0430\u0435\u0442",fr:"personnes jouent",ja:"\u4EBA\u304C\u904A\u3093\u3067\u3044\u308B",de:"Leute spielen",zh:"\u4EBA\u5728\u73A9",nl:"mensen spelen",pl:"os\xF3b graj\u0105",hu:"ember j\xE1tszik"},"New Room...":{pt:"Nova Sala ...",es:"Nueva sala de...",ru:"\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430...",ja:"\u65B0\u3057\u3044\u90E8\u5C4B",zh:"\u65B0\u623F\u95F4",nl:"nieuwe Kamer",hu:"\xFAj szoba"},"room name":{pt:"nome da sala",es:"sala de nombre",ru:"\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u044B",fr:"nom de la chambre",ja:"\u30EB\u30FC\u30E0\u540D",de:"Raumnamen",zh:"\u623F\u95F4\u540D\u79F0",nl:"kamernaam",pl:"nazwa pok\xF3j",hu:"szoba neve"},"Visible (open to everyone)":{pt:"Vis\xEDvel (aberto a todos)",es:"Visible (abierto a todo el mundo)",ru:"Visible (\u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0434\u043B\u044F \u0432\u0441\u0435\u0445)",fr:"Visible (ouvert \xE0 tous)",ja:"\u76EE\u306B\u898B\u3048\u308B\uFF08\u8AB0\u306B\u3067\u3082\u958B\u3044\u3066\u3044\u308B\uFF09",de:"Sichtbar (offen f\xFCr alle)",zh:"\u53EF\u89C1\uFF08\u5411\u6240\u6709\u4EBA\u5F00\u653E\uFF09",nl:"Zichtbaar (open voor iedereen)",pl:"Widoczne (otwarte dla wszystkich)",hu:"L\xE1that\xF3 (nyitott mindenki sz\xE1m\xE1ra)"},"Enable Chat":{pt:"Ativar bate-papo",es:"Habilitar chat",ru:"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0447\u0430\u0442",fr:"Activer discuter",ja:"\u30C1\u30E3\u30C3\u30C8\u3092\u6709\u52B9\u306B\u3059\u308B",de:"aktivieren Sie chatten",zh:"\u542F\u7528\u804A\u5929",nl:"Chat inschakelen",pl:"W\u0142\u0105cz czat",hu:"a cseveg\xE9st"},"Play Alone":{pt:"Jogar Sozinho",es:"Jugar Solo",ru:"\u0418\u0433\u0440\u0430\u0442\u044C \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u043A\u0443",fr:"Jouez Seul",ja:"\u4E00\u4EBA\u3067\u30D7\u30EC\u30A4",de:"Alleine Spielen",zh:"\u72EC\u81EA\u73A9\u800D",nl:"Speel Alleen",pl:"Zagraj sam",hu:"J\xE1tssz egyed\xFCl"}},t=function(d){s=d},o=function(){return window.navigator&&navigator.language&&navigator.language.length>=2?navigator.language.substr(0,2).toLowerCase():"en"},i=function(d,r){typeof r>"u"&&(r=s);var c=e[d];if(c==null)return d;var a=c[r];return a??d},n=function(d){typeof d>"u"&&(d=s),$(".translate").each(function(r,c){var a=$(this);c.tagName&&c.tagName.toLowerCase()=="input"?typeof c.placeholder<"u"&&a.attr("placeholder",i(a.attr("placeholder"),d)):a.text(i(a.text(),d))})},s=o();return{setLanguage:t,getLanguage:o,get:i,perform:n}}();Lt.perform();var R=function(){};R.prototype.init=function(e){return this.volume=.6,this.sounds={},this.paused=!0,this},R.prototype.load=function(e,t,o){},R.prototype.play=function(){},R.prototype.stop=function(){},R.prototype.setVolume=function(e){this.volume=e},R.prototype.resume=function(){this.paused=!1},AudioEngineWeb=function(){this.threshold=0,this.worker=new Worker("/workerTimer.js");var e=this;this.worker.onmessage=function(t){t.data.args&&(t.data.args.action==0?e.actualPlay(t.data.args.id,t.data.args.vol,t.data.args.time,t.data.args.part_id):e.actualStop(t.data.args.id,t.data.args.time,t.data.args.part_id))}},AudioEngineWeb.prototype=new R,AudioEngineWeb.prototype.init=function(e){return R.prototype.init.call(this),this.context=new AudioContext({latencyHint:"interactive"}),this.masterGain=this.context.createGain(),this.masterGain.connect(this.context.destination),this.masterGain.gain.value=this.volume,this.limiterNode=this.context.createDynamicsCompressor(),this.limiterNode.threshold.value=-10,this.limiterNode.knee.value=0,this.limiterNode.ratio.value=20,this.limiterNode.attack.value=0,this.limiterNode.release.value=.1,this.limiterNode.connect(this.masterGain),this.pianoGain=this.context.createGain(),this.pianoGain.gain.value=.5,this.pianoGain.connect(this.limiterNode),this.synthGain=this.context.createGain(),this.synthGain.gain.value=.5,this.synthGain.connect(this.limiterNode),this.playings={},e&&setTimeout(e,0),this},AudioEngineWeb.prototype.load=function(e,t,o){var i=this,n=new XMLHttpRequest;n.open("GET",t),n.responseType="arraybuffer",n.addEventListener("readystatechange",function(s){if(n.readyState===4)try{i.context.decodeAudioData(n.response,function(d){i.sounds[e]=d,o&&o()})}catch{new S({id:"audio-download-error",title:"Problem",text:"For some reason, an audio download failed with a status of "+n.status+". ",target:"#piano",duration:1e4})}}),n.send()},AudioEngineWeb.prototype.actualPlay=function(e,t,o,i){if(!this.paused&&this.sounds.hasOwnProperty(e)){var n=this.context.createBufferSource();n.buffer=this.sounds[e];var s=this.context.createGain();if(s.gain.value=t,n.connect(s),s.connect(this.pianoGain),n.start(o),this.playings[e]){var d=this.playings[e];d.gain.gain.setValueAtTime(d.gain.gain.value,o),d.gain.gain.linearRampToValueAtTime(0,o+.2),d.source.stop(o+.21),z&&d.voice&&d.voice.stop(o)}this.playings[e]={source:n,gain:s,part_id:i},z&&(this.playings[e].voice=new Pt(e,o))}},AudioEngineWeb.prototype.play=function(e,t,o,i){if(this.sounds.hasOwnProperty(e)){var n=this.context.currentTime+o/1e3,s=o-this.threshold;s<=0?this.actualPlay(e,t,n,i):this.worker.postMessage({delay:s,args:{action:0,id:e,vol:t,time:n,part_id:i}})}},AudioEngineWeb.prototype.actualStop=function(e,t,o){if(this.playings.hasOwnProperty(e)&&this.playings[e]&&this.playings[e].part_id===o){var i=this.playings[e].gain.gain;i.setValueAtTime(i.value,t),i.linearRampToValueAtTime(i.value*.1,t+.16),i.linearRampToValueAtTime(0,t+.4),this.playings[e].source.stop(t+.41),this.playings[e].voice&&this.playings[e].voice.stop(t),this.playings[e]=null}},AudioEngineWeb.prototype.stop=function(e,t,o){var i=this.context.currentTime+t/1e3,n=t-this.threshold;n<=0?this.actualStop(e,i,o):this.worker.postMessage({delay:n,args:{action:1,id:e,time:i,part_id:o}})},AudioEngineWeb.prototype.setVolume=function(e){R.prototype.setVolume.call(this,e),this.masterGain.gain.value=this.volume},AudioEngineWeb.prototype.resume=function(){this.paused=!1,this.context.resume()};var J=function(){};J.prototype.init=function(e){return this.piano=e,this.resize(),this},J.prototype.resize=function(e,t){typeof e>"u"&&(e=$(this.piano.rootElement).width()),typeof t>"u"&&(t=Math.floor(e*.2)),$(this.piano.rootElement).css({height:t+"px",marginTop:Math.floor($(window).height()/2-t/2)+"px"}),this.width=e*window.devicePixelRatio,this.height=t*window.devicePixelRatio},J.prototype.visualize=function(e,t){};var I=function(){J.call(this)};if(I.prototype=new J,I.prototype.init=function(e){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),e.rootElement.appendChild(this.canvas),J.prototype.init.call(this,e);var t=this,o=function(){t.redraw(),requestAnimationFrame(o)};requestAnimationFrame(o);var i=!1,n=null;return $(e.rootElement).mousedown(function(s){i=!0,k||s.preventDefault();var d=I.translateMouseEvent(s),r=t.getHit(d.x,d.y);r&&(se(r.key.note,r.v),n=r.key)}),e.rootElement.addEventListener("touchstart",function(s){i=!0,k||s.preventDefault();for(var d in s.changedTouches){var r=I.translateMouseEvent(s.changedTouches[d]),c=t.getHit(r.x,r.y);c&&(se(c.key.note,c.v),n=c.key)}},!1),$(window).mouseup(function(s){n&&ve(n.note),i=!1,n=null}),this},I.prototype.resize=function(e,t){J.prototype.resize.call(this,e,t),this.width<52*2&&(this.width=52*2),this.height<this.width*.2&&(this.height=Math.floor(this.width*.2)),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width=this.width/window.devicePixelRatio+"px",this.canvas.style.height=this.height/window.devicePixelRatio+"px",this.whiteKeyWidth=Math.floor(this.width/52),this.whiteKeyHeight=Math.floor(this.height*.9),this.blackKeyWidth=Math.floor(this.whiteKeyWidth*.75),this.blackKeyHeight=Math.floor(this.height*.5),this.blackKeyOffset=Math.floor(this.whiteKeyWidth-this.blackKeyWidth/2),this.keyMovement=Math.floor(this.whiteKeyHeight*.015),this.whiteBlipWidth=Math.floor(this.whiteKeyWidth*.7),this.whiteBlipHeight=Math.floor(this.whiteBlipWidth*.8),this.whiteBlipX=Math.floor((this.whiteKeyWidth-this.whiteBlipWidth)/2),this.whiteBlipY=Math.floor(this.whiteKeyHeight-this.whiteBlipHeight*1.2),this.blackBlipWidth=Math.floor(this.blackKeyWidth*.7),this.blackBlipHeight=Math.floor(this.blackBlipWidth*.8),this.blackBlipY=Math.floor(this.blackKeyHeight-this.blackBlipHeight*1.2),this.blackBlipX=Math.floor((this.blackKeyWidth-this.blackBlipWidth)/2),this.whiteKeyRender=document.createElement("canvas"),this.whiteKeyRender.width=this.whiteKeyWidth,this.whiteKeyRender.height=this.height+10;var i=this.whiteKeyRender.getContext("2d");if(i.createLinearGradient){var o=i.createLinearGradient(0,0,0,this.whiteKeyHeight);o.addColorStop(0,"#eee"),o.addColorStop(.75,"#fff"),o.addColorStop(1,"#dad4d4"),i.fillStyle=o}else i.fillStyle="#fff";i.strokeStyle="#000",i.lineJoin="round",i.lineCap="round",i.lineWidth=10,i.strokeRect(i.lineWidth/2,i.lineWidth/2,this.whiteKeyWidth-i.lineWidth,this.whiteKeyHeight-i.lineWidth),i.lineWidth=4,i.fillRect(i.lineWidth/2,i.lineWidth/2,this.whiteKeyWidth-i.lineWidth,this.whiteKeyHeight-i.lineWidth),this.blackKeyRender=document.createElement("canvas"),this.blackKeyRender.width=this.blackKeyWidth+10,this.blackKeyRender.height=this.blackKeyHeight+10;var i=this.blackKeyRender.getContext("2d");if(i.createLinearGradient){var o=i.createLinearGradient(0,0,0,this.blackKeyHeight);o.addColorStop(0,"#000"),o.addColorStop(1,"#444"),i.fillStyle=o}else i.fillStyle="#000";i.strokeStyle="#222",i.lineJoin="round",i.lineCap="round",i.lineWidth=8,i.strokeRect(i.lineWidth/2,i.lineWidth/2,this.blackKeyWidth-i.lineWidth,this.blackKeyHeight-i.lineWidth),i.lineWidth=4,i.fillRect(i.lineWidth/2,i.lineWidth/2,this.blackKeyWidth-i.lineWidth,this.blackKeyHeight-i.lineWidth),this.shadowRender=[];for(var n=-this.canvas.height*2,s=0;s<2;s++){var d=document.createElement("canvas");this.shadowRender[s]=d,d.width=this.canvas.width,d.height=this.canvas.height;var i=d.getContext("2d"),r=!!s;i.lineJoin="round",i.lineCap="round",i.lineWidth=1,i.shadowColor="rgba(0, 0, 0, 0.5)",i.shadowBlur=this.keyMovement*3,i.shadowOffsetY=-n+this.keyMovement,r?i.shadowOffsetX=this.keyMovement:(i.shadowOffsetX=0,i.shadowOffsetY=-n+this.keyMovement);for(var c in this.piano.keys)if(this.piano.keys.hasOwnProperty(c)){var a=this.piano.keys[c];a.sharp==r&&(a.sharp?i.fillRect(this.blackKeyOffset+this.whiteKeyWidth*a.spatial+i.lineWidth/2,n+i.lineWidth/2,this.blackKeyWidth-i.lineWidth,this.blackKeyHeight-i.lineWidth):i.fillRect(this.whiteKeyWidth*a.spatial+i.lineWidth/2,n+i.lineWidth/2,this.whiteKeyWidth-i.lineWidth,this.whiteKeyHeight-i.lineWidth))}}for(var c in this.piano.keys)if(this.piano.keys.hasOwnProperty(c)){var a=this.piano.keys[c];a.sharp?a.rect=new Re(this.blackKeyOffset+this.whiteKeyWidth*a.spatial,0,this.blackKeyWidth,this.blackKeyHeight):a.rect=new Re(this.whiteKeyWidth*a.spatial,0,this.whiteKeyWidth,this.whiteKeyHeight)}},I.prototype.visualize=function(e,t){e.timePlayed=Date.now(),e.blips.push({time:e.timePlayed,color:t})},I.prototype.redraw=function(){var e=Date.now(),t=e-1e3,o=e-100,i=e-1e3;this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var n=0;n<2;n++){this.ctx.globalAlpha=1,this.ctx.drawImage(this.shadowRender[n],0,0);var s=!!n;for(var d in this.piano.keys){if(!this.piano.keys.hasOwnProperty(d))continue;var r=this.piano.keys[d];if(r.sharp!=s)continue;r.loaded?r.timeLoaded>t?this.ctx.globalAlpha=(e-r.timeLoaded)/1e3*.8+.2:this.ctx.globalAlpha=1:this.ctx.globalAlpha=.2;var c=0;r.timePlayed>o&&(c=Math.floor(this.keyMovement-(e-r.timePlayed)/100*this.keyMovement));var a=Math.floor(r.sharp?this.blackKeyOffset+this.whiteKeyWidth*r.spatial:this.whiteKeyWidth*r.spatial),v=r.sharp?this.blackKeyRender:this.whiteKeyRender;this.ctx.drawImage(v,a,c);var h=r.baseNote[0].toUpperCase();s&&(h+="#"),h+=r.octave+1,te&&(this.ctx.font=`${(r.sharp?this.blackKeyWidth:this.whiteKeyWidth)/2}px Arial`,this.ctx.fillStyle=r.sharp?"white":"black",this.ctx.textAlign="center",h.includes("#")&&this.ctx.fillText(h,a+(r.sharp?this.blackKeyWidth:this.whiteKeyWidth)/2,c+(r.sharp?this.blackKeyHeight:this.whiteKeyHeight)-30-this.ctx.lineWidth),h=h.replace("C#","D\u266D"),h=h.replace("D#","E\u266D"),h=h.replace("F#","G\u266D"),h=h.replace("G#","A\u266D"),h=h.replace("A#","B\u266D"),this.ctx.fillText(h,a+(r.sharp?this.blackKeyWidth:this.whiteKeyWidth)/2,c+(r.sharp?this.blackKeyHeight:this.whiteKeyHeight)-10-this.ctx.lineWidth));const D=Ge[N];if(D&&r.loaded){h=h.replace("C#","D\u266D"),h=h.replace("D#","E\u266D"),h=h.replace("F#","G\u266D"),h=h.replace("G#","A\u266D"),h=h.replace("A#","B\u266D");const H=h.slice(0,-1);if(D.includes(H)){const O=this.ctx.globalAlpha;this.ctx.globalAlpha=.3,this.ctx.fillStyle="#0f0",r.sharp?this.ctx.fillRect(a,c,this.blackKeyWidth,this.blackKeyHeight):this.ctx.fillRect(a,c,this.whiteKeyWidth,this.whiteKeyHeight),this.ctx.globalAlpha=O}}if(r.blips.length){var m=this.ctx.globalAlpha,u,p;r.sharp?(a+=this.blackBlipX,c=this.blackBlipY,u=this.blackBlipWidth,p=this.blackBlipHeight):(a+=this.whiteBlipX,c=this.whiteBlipY,u=this.whiteBlipWidth,p=this.whiteBlipHeight);for(var w=0;w<r.blips.length;w++){var g=r.blips[w];g.time>i?(this.ctx.fillStyle=g.color,this.ctx.globalAlpha=m-(e-g.time)/1e3*m,this.ctx.fillRect(a,c,u,p)):(r.blips.splice(w,1),--w),c-=Math.floor(p*1.1)}}}}this.ctx.restore()},I.prototype.renderNoteLyrics=function(){for(var e in this.noteLyrics)if(this.noteLyrics.hasOwnProperty(St)){var t=this.noteLyrics[e],o=x,i=this.whiteKeyHeight+1;this.ctx.fillStyle=key.lyric.color;var n=this.ctx.globalAlpha;this.ctx.globalAlpha=n-(now-key.lyric.time)/1e3*n,this.ctx.fillRect(x,y,10,10)}},I.prototype.getHit=function(e,t){for(var o=0;o<2;o++){var i=!o;for(var n in this.piano.keys)if(this.piano.keys.hasOwnProperty(n)){var s=this.piano.keys[n];if(s.sharp==i&&s.rect.contains(e,t)){var d=t/(s.sharp?this.blackKeyHeight:this.whiteKeyHeight);return d+=.25,d*=He,d>1&&(d=1),{key:s,v:d}}}}return null},I.isSupported=function(){var e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))},I.translateMouseEvent=function(e){var t=e.target,o=0,i=0;do{if(!t)break;o+=t.offsetLeft,i+=t.offsetTop}while(t=t.offsetParent);return{x:(e.pageX-o)*window.devicePixelRatio,y:(e.pageY-i)*window.devicePixelRatio}},window.location.hostname==="localhost")var Fe=`http://${location.host}`;else var Fe="https://mppclone.com";function ae(e){this.initialized=!1,this.keys=e.keys,this.loading={},this.notification,this.packs=[],this.piano=e,this.soundSelection=localStorage.soundSelection?localStorage.soundSelection:"mppclassic",this.addPack({name:"MPP Classic",keys:Object.keys(this.piano.keys),ext:".mp3",url:"/sounds/mppclassic/"})}ae.prototype.addPack=function(e,t){var o=this;o.loading[e.url||e]=!0;function i(n){for(var s=!1,d=0;o.packs.length>d;d++)if(n.name==o.packs[d].name){s=!0;break}if(s)return console.warn("Sounds already added!!");n.url.substr(n.url.length-1)!="/"&&(n.url=n.url+"/");var r=document.createElement("li");r.classList="pack",r.innerText=n.name+" ("+n.keys.length+" keys)",r.onclick=function(){o.loadPack(n.name),o.notification.close()},n.html=r,o.packs.push(n),o.packs.sort(function(c,a){return c.name<a.name?-1:c.name>a.name?1:0}),t&&o.loadPack(n.name),delete o.loading[n.url]}if(typeof e=="string"){let n=!0;e.match(/^(http|https):\/\//i)&&(n=!1),$.getJSON((n?Fe:"")+e+"/info.json").done(function(s){s.url=e,i(s)})}else i(e)},ae.prototype.addPacks=function(e){for(var t=0;e.length>t;t++)this.addPack(e[t])},ae.prototype.init=function(){var e=this;if(e.initialized)return console.warn("Sound selector already initialized!");if(Object.keys(e.loading).length)return setTimeout(function(){e.init()},250);$("#sound-btn").on("click",function(){if(document.getElementById("Notification-Sound-Selector")!=null)return e.notification.close();for(var t=document.createElement("ul"),o=0;e.packs.length>o;o++){var i=e.packs[o];i.name==e.soundSelection?i.html.classList="pack enabled":i.html.classList="pack",t.appendChild(i.html)}e.notification=new S({title:"Sound Selector",html:t,id:"Sound-Selector",duration:-1,target:"#sound-btn"})}),e.initialized=!0,e.loadPack(e.soundSelection,!0)},ae.prototype.loadPack=function(e,t){for(var o=0;this.packs.length>o;o++){var i=this.packs[o];if(i.name==e){e=i;break}}if(typeof e=="string")return console.warn("Sound pack does not exist! Loading default pack..."),this.loadPack("MPP Classic");if(!(e.name==this.soundSelection&&!t)){if(e.keys.length!=Object.keys(this.piano.keys).length){this.piano.keys={};for(var o=0;e.keys.length>o;o++)this.piano.keys[e.keys[o]]=this.keys[e.keys[o]];this.piano.renderer.resize()}var n=this;for(var o in this.piano.keys)this.piano.keys.hasOwnProperty(o)&&function(){var d=n.piano.keys[o];d.loaded=!1;let r=!0;e.url.match(/^(http|https):\/\//i)&&(r=!1),n.piano.audio.load(d.note,(r?Fe:"")+e.url+d.note+e.ext,function(){d.loaded=!0,d.timeLoaded=Date.now()})}();localStorage&&(localStorage.soundSelection=e.name),this.soundSelection=e.name}},ae.prototype.removePack=function(e){for(var t=!1,o=0;this.packs.length>o;o++){var i=this.packs[o];if(i.name==e){this.packs.splice(o,1),i.name==this.soundSelection&&this.loadPack(this.packs[0].name);break}}t||console.warn("Sound pack not found!")};var _t=function(e,t){this.note=e+t,this.baseNote=e,this.octave=t,this.sharp=e.indexOf("s")!=-1,this.loaded=!1,this.timeLoaded=0,this.domElement=null,this.timePlayed=0,this.blips=[]},ze=function(e){var t=this;t.rootElement=e,t.keys={};var o=0,i=0,n=0,s=[2,1,2,1,1],d=function(h,m){var u=new _t(h,m);t.keys[u.note]=u,u.sharp?(u.spatial=i,i+=s[n%5],++n):(u.spatial=o,++o)};if(At)d("c",2);else{d("a",-1),d("as",-1),d("b",-1);for(var r="c cs d ds e f fs g gs a as b".split(" "),c=0;c<7;c++)for(var a in r)d(r[a],c);d("c",7)}this.renderer=new I().init(this),window.addEventListener("resize",function(){t.renderer.resize()}),window.AudioContext=window.AudioContext||window.webkitAudioContext||void 0;var v=AudioEngineWeb;this.audio=new v().init()};ze.prototype.play=function(e,t,o,i,n){if(!(!this.keys.hasOwnProperty(e)||!o)){var s=this.keys[e];s.loaded&&this.audio.play(s.note,t,i,o.id),me&&me(s.note,t*100,i,o.id);var d=this;setTimeout(function(){d.renderer.visualize(s,o.color);var r=$(o.nameDiv);r.addClass("play"),setTimeout(function(){r.removeClass("play")},30)},i||0)}},ze.prototype.stop=function(e,t,o){if(this.keys.hasOwnProperty(e)){var i=this.keys[e];i.loaded&&this.audio.stop(i.note,o,t.id),me&&me(i.note,0,o,t.id)}};var b=new ze(document.getElementById("piano")),je=new ae(b);je.addPacks(["/sounds/Emotional/","/sounds/Emotional_2.0/","/sounds/GreatAndSoftPiano/","/sounds/HardAndToughPiano/","/sounds/HardPiano/","/sounds/Harp/","/sounds/Harpsicord/","/sounds/LoudAndProudPiano/","/sounds/MLG/","/sounds/Music_Box/","/sounds/NewPiano/","/sounds/Orchestra/","/sounds/Piano2/","/sounds/PianoSounds/","/sounds/Rhodes_MK1/","/sounds/SoftPiano/","/sounds/Steinway_Grand/","/sounds/Untitled/","/sounds/Vintage_Upright/","/sounds/Vintage_Upright_Soft/"]),je.init();var pe=!1,Ve=!1,Ee={},Q={};function se(e,t){!l.preventsPlaying()&&ie.spend(1)&&(Ee[e]=!0,Q[e]=!0,b.play(e,t!==void 0?t:He,l.getOwnParticipant(),0),l.startNote(e,t))}function ve(e){Ee[e]&&(Ee[e]=!1,(pe||Ve)&&!z?Q[e]=!0:ie.spend(1)&&(b.stop(e,l.getOwnParticipant(),0),l.stopNote(e),Q[e]=!1))}function Se(){Ve=!0}function De(){if(Ve=!1,!pe)for(var e in Q)Q.hasOwnProperty(e)&&Q[e]&&!Ee[e]&&(Q[e]=!1,ie.spend(1)&&(b.stop(e,l.getOwnParticipant(),0),l.stopNote(e)))}function Ye(e,t=window.location.href){e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=o.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}if(window.location.hostname==="multiplayerpiano.com"){$("#chat-input")[0].autocomplete="off";let e=document.createElement("a");e.href="https://docs.google.com/document/d/1wQvGwQdaI8PuEjSWxKDDThVIoAlCYIxQOyfyi4o6HcM/edit?usp=sharing",e.title="Multiplayer Piano Rules",e.target="_blank";let t=document.createElement("button");t.style="height: 24px; font-size: 12px; background: #111; border: 1px solid #444; padding: 5px; cursor: pointer; line-height: 12px; border-radius: 2px; -webkit-border-radius: 2px; -moz-border-radius: 2px; overflow: hidden; white-space: nowrap; color: #fff; position: absolute; right: 6px; top: 0px; z-index: 20001;",t.innerText="Rules",e.appendChild(t),document.body.appendChild(e)}function ht(){var e=decodeURIComponent(window.location.pathname);return e.substr(0,1)=="/"&&(e=e.substr(1)),e||(e=Ye("c")),e||(e="lobby"),e}var ft=ht(),Ue;if(Ye("callback")==="discord"){var mt=Ye("code");mt&&(Ue={type:"discord",code:mt}),history.pushState({name:"lobby"},"Piano > lobby","/"),ft="lobby"}var Rt=8443;if(window.location.hostname==="localhost")var l=new Client("ws://localhost:8443");else var l=new Client("wss://port-8080-server-cocompp.preview.codeanywhere.com");Ue&&l.setLoginInfo(Ue),l.setChannel(ft),l.on("disconnect",function(e){});var ge=!0,qe=!1,Xe=!1;window.addEventListener("focus",function(e){ge=!0,qe=!1,Xe=!1;var t=Object.keys(MPP.client.ppl).length;t>0?document.title="Piano ("+t+")":document.title="Multiplayer Piano"}),window.addEventListener("blur",function(e){ge=!1}),function(){l.on("status",function(e){$("#status").text(e)}),l.on("count",function(e){if(e>0){if($("#status").html('<span class="number">'+e+"</span> "+(e==1?"person is":"people are")+" playing"),!ge&&(qe||Xe))return;document.title="Piano ("+e+")"}else document.title="Multiplayer Piano"})}(),function(){l.on("hi",function(e){l.permissions.clearChat&&$("#clearchat-btn").show(),l.permissions.vanish?$("#vanish-btn").show():$("#vanish-btn").hide()})}();var Je;(function(){function e(n){var s=Boolean(n.nameDiv),d;s?(d=n.nameDiv,$(d).empty()):(d=document.createElement("div"),d.addEventListener("mousedown",u=>Je(u,d)),d.addEventListener("touchstart",u=>Je(u,d)),d.style.display="none",$(d).fadeIn(2e3),d.id="namediv-"+n._id,d.className="name",d.participantId=n.id,$("#names")[0].appendChild(d),n.nameDiv=d),d.style.backgroundColor=n.color||"#777";var r=typeof n.tag=="object"?n.tag.text:n.tag;r==="BOT"&&(d.title="This is an authorized bot."),r==="MOD"&&(d.title="This user is an official moderator of the site."),r==="ADMIN"&&(d.title="This user is an official administrator of the site."),r==="OWNER"&&(d.title="This user is the owner of the site."),r==="MEDIA"&&(d.title="This is a well known person on Twitch, Youtube, or another platform."),t(n);var c=!1;if(n.vanished){c=!0;var a=document.createElement("div");a.className="nametag",a.textContent="VANISH",a.style.backgroundColor="#00ffcc",a.id="namevanish-"+n._id,n.nameDiv.appendChild(a)}if(n.tag){c=!0;var v=document.createElement("div");v.className="nametag",v.textContent=r||"",v.style.backgroundColor=o(n.tag),v.id="nametag-"+n._id,n.nameDiv.appendChild(v)}var h=document.createElement("div");h.className="nametext",h.textContent=n.name||"",h.id="nametext-"+n._id,c&&(h.style.float="left"),n.nameDiv.appendChild(h);var m=$("#names .name");m.sort(function(u,p){return u.id>p.id?1:u.id<p.id?-1:0}),$("#names").html(m)}l.on("participant added",function(n){if(!be(n))if(n.displayX=150,n.displayY=50,e(n),(l.participantId!==n.id||dt)&&!ne.includes(n.id)&&!F){var s=document.createElement("div");s.className="cursor",s.style.display="none",n.cursorDiv=$("#cursors")[0].appendChild(s),$(n.cursorDiv).fadeIn(2e3);var s=document.createElement("div");s.className="name",s.style.backgroundColor=n.color||"#777",s.textContent=n.name||"",n.cursorDiv.appendChild(s)}else n.cursorDiv=void 0}),l.on("participant removed",function(n){if(!be(n)){var s=$(n.nameDiv),d=$(n.cursorDiv);d.fadeOut(2e3),s.fadeOut(2e3,function(){s.remove(),d.remove(),n.nameDiv=void 0,n.cursorDiv=void 0})}}),l.on("participant update",function(n){if(!be(n)){var s=n.name||"",d=n.color||"#777";e(n),$(n.cursorDiv).find(".name").text(s).css("background-color",d)}}),l.on("ch",function(n){for(var s in l.ppl)if(l.ppl.hasOwnProperty(s)){var d=l.ppl[s];t(d)}}),l.on("participant added",function(n){be(n)||t(n)});function t(n){n.id===l.participantId?$(n.nameDiv).addClass("me"):$(n.nameDiv).removeClass("me"),l.channel.crown&&l.channel.crown.participantId===n.id?($(n.nameDiv).addClass("owner"),$(n.cursorDiv).addClass("owner")):($(n.nameDiv).removeClass("owner"),$(n.cursorDiv).removeClass("owner")),C.indexOf(n._id)!==-1?$(n.nameDiv).addClass("muted-notes"):$(n.nameDiv).removeClass("muted-notes"),P.indexOf(n._id)!==-1?$(n.nameDiv).addClass("muted-chat"):$(n.nameDiv).removeClass("muted-chat")}function o(n){return typeof n=="object"?n.color:n==="BOT"?"#55f":n==="OWNER"?"#a00":n==="ADMIN"?"#f55":n==="MOD"?"#0a0":n==="MEDIA"?"#f5f":"#777"}function i(n){const s=l.ppl[n.id];be(s)||s&&s.cursorDiv&&(K?s.cursorDiv.style.transform="translate3d("+n.x+"vw, "+n.y+"vh, 0)":(s.cursorDiv.style.left=n.x+"%",s.cursorDiv.style.top=n.y+"%"))}l.on("m",i),l.on("participant added",i)})(),function(){var e=$('<div id="crown"></div>').appendTo(document.body).hide(),t=$("<span></span>").appendTo(e),o;e.click(function(){l.sendArray([{m:"chown",id:l.participantId}])}),l.on("ch",function(i){if(i.ch.crown){var n=i.ch.crown;if(!n.participantId||!l.ppl[n.participantId]){var s=n.time+2e3-l.serverTimeOffset,d=n.time+15e3-l.serverTimeOffset;t.text(""),e.show(),s-Date.now()<=0?e.css({left:n.endPos.x+"%",top:n.endPos.y+"%"}):(e.css({left:n.startPos.x+"%",top:n.startPos.y+"%"}),e.addClass("spin"),e.animate({left:n.endPos.x+"%",top:n.endPos.y+"%"},2e3,"linear",function(){e.removeClass("spin")})),clearInterval(o),o=setInterval(function(){var r=Date.now();if(r>=s){var c=d-r;c>0?t.text(Math.ceil(c/1e3)+"s"):(t.text(""),clearInterval(o))}},1e3)}else e.hide()}else e.hide()}),l.on("disconnect",function(){e.fadeOut(2e3)})}(),l.on("n",function(e){var t=e.t-l.serverTimeOffset+Mt-Date.now(),o=l.findParticipantById(e.p);if(C.indexOf(o._id)===-1)for(var i=0;i<e.n.length;i++){var n=e.n[i],s=t+(n.d||0);if(s<0)s=0;else if(s>1e4)continue;if(n.s)b.stop(n.n,o,s);else{var d=typeof n.v<"u"?parseFloat(n.v):He;d?d<0?d=0:d>1&&(d=1):d=0,b.play(n.n,d,o,s),z&&b.stop(n.n,o,s+1e3)}}});var re=0,pt=-10,Z=0,vt=-10;setInterval(function(){if(Math.abs(re-pt)>.1||Math.abs(Z-vt)>.1){pt=re,vt=Z,l.sendArray([{m:"m",x:re,y:Z}]),dt&&l.emit("m",{m:"m",id:l.participantId,x:re,y:Z});var e=l.getOwnParticipant();e&&(e.x=re,e.y=Z)}},50),$(document).mousemove(function(e){re=(e.pageX/$(window).width()*100).toFixed(2),Z=(e.pageY/$(window).height()*100).toFixed(2)}),function(){l.on("ch",function(e){l.isOwner()||l.permissions.chsetAnywhere?$("#room-settings-btn").show():$("#room-settings-btn").hide(),!l.channel.settings.lobby&&(l.permissions.chownAnywhere||l.channel.settings.owner_id===l.user._id)?$("#getcrown-btn").show():$("#getcrown-btn").hide()}),$("#room-settings-btn").click(function(e){if(l.channel&&(l.isOwner()||l.permissions.chsetAnywhere)){var t=l.channel.settings;U("#room-settings"),setTimeout(function(){$("#room-settings .checkbox[name=visible]").prop("checked",t.visible),$("#room-settings .checkbox[name=chat]").prop("checked",t.chat),$("#room-settings .checkbox[name=crownsolo]").prop("checked",t.crownsolo),$("#room-settings .checkbox[name=nocussing]").prop("checked",t["no cussing"]),$("#room-settings input[name=color]").val(t.color),$("#room-settings input[name=color2]").val(t.color2),$("#room-settings .checkbox[name=noindex]").prop("checked",t.noindex),$("#room-settings input[name=limit]").val(t.limit)},100)}}),$("#room-settings .submit").click(function(){var e={visible:$("#room-settings .checkbox[name=visible]").is(":checked"),chat:$("#room-settings .checkbox[name=chat]").is(":checked"),crownsolo:$("#room-settings .checkbox[name=crownsolo]").is(":checked"),"no cussing":$("#room-settings .checkbox[name=nocussing]").is(":checked"),noindex:$("#room-settings .checkbox[name=noindex]").is(":checked"),color:$("#room-settings input[name=color]").val(),color2:$("#room-settings input[name=color2]").val(),limit:$("#room-settings input[name=limit]").val()};l.setChannelSettings(e),_()}),$("#room-settings .drop-crown").click(function(){_(),confirm("This will drop the crown...!")&&l.sendArray([{m:"chown"}])})}(),$("#clearchat-btn").click(function(e){confirm("Are you sure you want to clear chat?")&&l.sendArray([{m:"clearchat"}])}),$("#getcrown-btn").click(function(e){l.sendArray([{m:"chown",id:MPP.client.getOwnParticipant().id}])}),$("#vanish-btn").click(function(e){l.sendArray([{m:"v",vanish:!l.getOwnParticipant().vanished}])}),l.on("participant update",e=>{e._id===l.getOwnParticipant()._id&&(e.vanished?$("#vanish-btn").text("Unvanish"):$("#vanish-btn").text("Vanish"))}),l.on("participant added",e=>{e._id===l.getOwnParticipant()._id&&(e.vanished?$("#vanish-btn").text("Unvanish"):$("#vanish-btn").text("Vanish"))}),l.on("notification",function(e){new S(e)}),l.on("ch",function(e){var t=e.ch._id.toLowerCase();t==="spin"||t.substr(-5)==="/spin"?$("#piano").addClass("spin"):$("#piano").removeClass("spin")}),l.on("ch",function(e){let t="",o=!1;e.ch.settings.crownsolo&&(o=!0,t+='<p>This room is set to "only the owner can play."</p>'),e.ch.settings["no cussing"]&&(o=!0,t+='<p>This room is set to "no cussing."</p>');let i=$("#room-notice");o?(i.html(t),i.is(":hidden")&&i.fadeIn(1e3)):i.is(":visible")&&i.fadeOut(1e3)}),l.on("disconnect",function(){$("#room-notice").fadeOut(1e3)});var C=(localStorage.pianoMutes?localStorage.pianoMutes:"").split(",").filter(e=>e),P=(localStorage.chatMutes?localStorage.chatMutes:"").split(",").filter(e=>e),M=localStorage.showIdsInChat=="true",Y=localStorage.showTimestampsInChat=="true",T=localStorage.noChatColors=="true",G=localStorage.noBackgroundColor=="true",ee=localStorage.outputOwnNotes?localStorage.outputOwnNotes=="true":!0,L=localStorage.virtualPianoLayout=="true",K=localStorage.smoothCursor=="true",W=localStorage.showChatTooltips?localStorage.showChatTooltips=="true":!0,te=localStorage.showPianoNotes=="true",N=localStorage.highlightScaleNotes,ne=(localStorage.cursorHides?localStorage.cursorHides:"").split(",").filter(e=>e),F=localStorage.hideAllCursors=="true",le=localStorage.hidePiano=="true",ce=localStorage.hideChat=="true",k=localStorage.noPreventDefault=="true",we=localStorage.hideBotUsers=="true",ye=localStorage.disableMIDIDrumChannel?localStorage.disableMIDIDrumChannel=="true":!0;function be(e){if(we){if(e)return!!(e.tag&&e.tag.text==="BOT")}else return!1}le?$("#piano").hide():$("#piano").show(),ce?$("#chat").hide():$("#chat").show(),K?$("#cursors").attr("smooth-cursors",""):$("#cursors").removeAttr("smooth-cursors"),function(){var e=new Color("#000000"),t=new Color("#000000");function o(n,s){var d=new Color(n),r=new Color(s||n);s||r.add(-64,-64,-64);var c=document.getElementById("bottom"),a=500,v=0,h=30,m=a/h,u=new Color(d.r,d.g,d.b);u.r-=e.r,u.g-=e.g,u.b-=e.b;var p=new Color(u.r/h,u.g/h,u.b/h);u=new Color(r.r,r.g,r.b),u.r-=t.r,u.g-=t.g,u.b-=t.b;var w=new Color(u.r/h,u.g/h,u.b/h),g;g=setInterval(function(){e.add(p.r,p.g,p.b),t.add(w.r,w.g,w.b),document.body.style.background="radial-gradient(ellipse at center, "+e.toHexa()+" 0%,"+t.toHexa()+" 100%)",c.style.background=t.toHexa(),++v>=h&&(clearInterval(g),e=d,t=r,document.body.style.background="radial-gradient(ellipse at center, "+d.toHexa()+" 0%,"+r.toHexa()+" 100%)",c.style.background=r.toHexa())},m)}function i(){o("#220022","#000022")}window.setBackgroundColor=o,window.setBackgroundColorToDefault=i,i(),l.on("ch",function(n){if(G){i();return}n.ch.settings&&(n.ch.settings.color?o(n.ch.settings.color,n.ch.settings.color2):i())})}();var Pe=document.getElementById("volume-slider");Pe.value=b.audio.volume,$("#volume-label").text("Volume: "+Math.floor(b.audio.volume*100)+"%"),Pe.addEventListener("input",function(e){var t=+Pe.value;b.audio.setVolume(t),window.localStorage&&(localStorage.volume=t),$("#volume-label").text("Volume: "+Math.floor(t*100)+"%")});var It=function(e,t){this.note=e,this.octave=t||0},f=function(e,t){return{note:new It(e,t),held:!1}},de={MPP:{65:f("gs"),90:f("a"),83:f("as"),88:f("b"),67:f("c",1),70:f("cs",1),86:f("d",1),71:f("ds",1),66:f("e",1),78:f("f",1),74:f("fs",1),77:f("g",1),75:f("gs",1),188:f("a",1),76:f("as",1),190:f("b",1),191:f("c",2),222:f("cs",2),49:f("gs",1),81:f("a",1),50:f("as",1),87:f("b",1),69:f("c",2),52:f("cs",2),82:f("d",2),53:f("ds",2),84:f("e",2),89:f("f",2),55:f("fs",2),85:f("g",2),56:f("gs",2),73:f("a",2),57:f("as",2),79:f("b",2),80:f("c",3),189:f("cs",3),173:f("cs",3),219:f("d",3),187:f("ds",3),61:f("ds",3),221:f("e",3)},VP:{112:f("c",-1),113:f("d",-1),114:f("e",-1),115:f("f",-1),116:f("g",-1),117:f("a",-1),118:f("b",-1),49:f("c"),50:f("d"),51:f("e"),52:f("f"),53:f("g"),54:f("a"),55:f("b"),56:f("c",1),57:f("d",1),48:f("e",1),81:f("f",1),87:f("g",1),69:f("a",1),82:f("b",1),84:f("c",2),89:f("d",2),85:f("e",2),73:f("f",2),79:f("g",2),80:f("a",2),65:f("b",2),83:f("c",3),68:f("d",3),70:f("e",3),71:f("f",3),72:f("g",3),74:f("a",3),75:f("b",3),76:f("c",4),90:f("d",4),88:f("e",4),67:f("f",4),86:f("g",4),66:f("a",4),78:f("b",4),77:f("c",5)}},ue=L?de.VP:de.MPP,Ce=!1,A=0;function gt(e){if(!e.target.type){var t=parseInt(e.keyCode);if(ue[t]!==void 0){var o=ue[t];if(!o.held){o.held=!0;var i=o.note,n=1+i.octave;L||(e.shiftKey?++n:Ce||e.ctrlKey?--n:e.altKey&&(n+=2)),i=i.note+n;var s=Object.keys(b.keys).indexOf(i);if(L&&e.shiftKey?i=Object.keys(b.keys)[s+A+1]:i=Object.keys(b.keys)[s+A],i===void 0)return;var d=Bt();se(i,d)}return++Ot==3&&(Qe=!0,window.gKnowsYouCanUseKeyboardTimeout&&clearTimeout(gKnowsYouCanUseKeyboardTimeout),localStorage&&(localStorage.knowsYouCanUseKeyboard=!0),window.gKnowsYouCanUseKeyboardNotification&&gKnowsYouCanUseKeyboardNotification.close()),k||e.preventDefault(),e.stopPropagation(),!1}else t==20?(Ce=!0,k||e.preventDefault()):t===32?(Se(),k||e.preventDefault()):t===38&&A<=100?(A+=12,Te()):t===40&&A>=-100?(A-=12,Te()):t===39&&A<100?(A++,Te()):t===37&&A>-100?(A--,Te()):t==9?k||e.preventDefault():t==8&&(pe=!pe,k||e.preventDefault())}}function Te(){new S({title:"Transposing",html:"Transpose level: "+A,target:"#midi-btn",duration:1500})}function wt(e){if(!e.target.type){var t=parseInt(e.keyCode);if(ue[t]!==void 0){var o=ue[t];if(o.held){o.held=!1;var i=o.note,n=1+i.octave;L||(e.shiftKey?++n:Ce||e.ctrlKey?--n:e.altKey&&(n+=2)),i=i.note+n;var s=Object.keys(b.keys).indexOf(i);if(L&&e.shiftKey?i=Object.keys(b.keys)[s+A+1]:i=Object.keys(b.keys)[s+A],i===void 0)return;ve(i)}return k||e.preventDefault(),e.stopPropagation(),!1}else t==20?(Ce=!1,k||e.preventDefault()):t===32&&(De(),k||e.preventDefault())}}function yt(e){if(!e.target.type)return k||e.preventDefault(),e.stopPropagation(),e.keyCode==27||e.keyCode==13,!1}var Ae=function(e){Le()},Me=!1;function Le(){Me||(Me=!0,$("#piano").off("mousedown",Ae),$("#piano").off("touchstart",Ae),$(document).on("keydown",gt),$(document).on("keyup",wt),$(window).on("keypress",yt))}function bt(){Me&&(Me=!1,$(document).off("keydown",gt),$(document).off("keyup",wt),$(window).off("keypress",yt),$("#piano").on("mousedown",Ae),$("#piano").on("touchstart",Ae))}Le();var Bt=function(){return .1+Z/100*.6},ie=function(){var e=0,t=$("#quota .value");return setInterval(function(){ie.tick()},2e3),new NoteQuota(function(o){var i=o/this.max*100;i<=e?t.stop(!0,!0).css("width",i.toFixed(0)+"%"):t.stop(!0,!0).animate({width:i.toFixed(0)+"%"},2e3,"linear"),e=i})}();l.on("nq",function(e){ie.setParams(e)}),l.on("disconnect",function(){ie.setParams(NoteQuota.PARAMS_OFFLINE)});var xe,B=!1,xt=localStorage.knowsHowToDm==="true";l.on("participant removed",e=>{B&&e._id===xe._id&&(B=!1,$("#chat-input")[0].placeholder="You can chat with this thing.")});var ke,oe=!1,_e;l.on("participant removed",e=>{oe&&e._id===ke._id&&MPP.chat.cancelReply()}),function(){Je=function(i,n){var s=n,d=$(s);if(d&&d.hasClass("name")){d.addClass("play");var r=s.participantId;if(r==l.participantId)U("#rename","input[name=name]"),setTimeout(function(){$("#rename input[name=name]").val(l.ppl[l.participantId].name),$("#rename input[name=color]").val(l.ppl[l.participantId].color)},100);else if(r){var c=l.ppl[r]||null;c&&(o(c),i.stopPropagation())}}};var e=function(i){$("#names .name").removeClass("play")};document.body.addEventListener("mouseup",e),document.body.addEventListener("touchend",e);var t=function(){$(".participant-menu").remove(),$(".participantSpotlight").hide(),document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)},o=function(i){if(i){t(),document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),$("#"+i.id).find(".enemySpotlight").show();var n=$('<div class="participant-menu"></div>');$("body").append(n);var s=$(i.nameDiv),d=s.position();n.css({top:d.top+s.height()+15,left:d.left+6,background:i.color||"black"}),n.on("mousedown touchstart",function(r){r.stopPropagation();var c=$(r.target);c.hasClass("menu-item")&&(c.addClass("clicked"),n.fadeOut(200,function(){t()}))}),$('<div class="info"></div>').appendTo(n).text(i._id).on("mousedown touchstart",r=>{navigator.clipboard.writeText(i._id),r.target.innerText="Copied!"}),C.indexOf(i._id)==-1?$('<div class="menu-item">Mute Notes</div>').appendTo(n).on("mousedown touchstart",function(r){C.push(i._id),localStorage&&(localStorage.pianoMutes=C.join(",")),$(i.nameDiv).addClass("muted-notes")}):$('<div class="menu-item">Unmute Notes</div>').appendTo(n).on("mousedown touchstart",function(r){for(var c;(c=C.indexOf(i._id))!=-1;)C.splice(c,1);localStorage&&(localStorage.pianoMutes=C.join(",")),$(i.nameDiv).removeClass("muted-notes")}),P.indexOf(i._id)==-1?$('<div class="menu-item">Mute Chat</div>').appendTo(n).on("mousedown touchstart",function(r){P.push(i._id),localStorage&&(localStorage.chatMutes=P.join(",")),$(i.nameDiv).addClass("muted-chat")}):$('<div class="menu-item">Unmute Chat</div>').appendTo(n).on("mousedown touchstart",function(r){for(var c;(c=P.indexOf(i._id))!=-1;)P.splice(c,1);localStorage&&(localStorage.chatMutes=P.join(",")),$(i.nameDiv).removeClass("muted-chat")}),(!(C.indexOf(i._id)>=0)||!(P.indexOf(i._id)>=0))&&$('<div class="menu-item">Mute Completely</div>').appendTo(n).on("mousedown touchstart",function(r){C.push(i._id),localStorage&&(localStorage.pianoMutes=C.join(",")),P.push(i._id),localStorage&&(localStorage.chatMutes=P.join(",")),$(i.nameDiv).addClass("muted-notes"),$(i.nameDiv).addClass("muted-chat")}),(C.indexOf(i._id)>=0||P.indexOf(i._id)>=0)&&$('<div class="menu-item">Unmute Completely</div>').appendTo(n).on("mousedown touchstart",function(r){for(var c;(c=C.indexOf(i._id))!=-1;)C.splice(c,1);for(;(c=P.indexOf(i._id))!=-1;)P.splice(c,1);localStorage&&(localStorage.pianoMutes=C.join(",")),localStorage&&(localStorage.chatMutes=P.join(",")),$(i.nameDiv).removeClass("muted-notes"),$(i.nameDiv).removeClass("muted-chat")}),B&&xe._id===i._id?$('<div class="menu-item">End Direct Message</div>').appendTo(n).on("mousedown touchstart",function(r){B=!1,$("#chat-input")[0].placeholder="You can chat with this thing."}):$('<div class="menu-item">Direct Message</div>').appendTo(n).on("mousedown touchstart",function(r){xt||(localStorage.knowsHowToDm=!0,xt=!0,new S({target:"#piano",duration:2e4,title:"How to DM",text:"After you click the button to direct message someone, future chat messages will be sent to them instead of to everyone. To go back to talking in public chat, send a blank chat message, or click the button again."})),B=!0,xe=i,$("#chat-input")[0].placeholder="Direct messaging "+i.name+"."}),ne.indexOf(i._id)==-1?$('<div class="menu-item">Hide Cursor</div>').appendTo(n).on("mousedown touchstart",function(r){ne.push(i._id),localStorage&&(localStorage.cursorHides=ne.join(",")),$(i.cursorDiv).hide()}):$('<div class="menu-item">Show Cursor</div>').appendTo(n).on("mousedown touchstart",function(r){for(var c;(c=ne.indexOf(i._id))!=-1;)ne.splice(c,1);localStorage&&(localStorage.cursorHides=ne.join(",")),$(i.cursorDiv).show()}),$('<div class="menu-item">Mention</div>').appendTo(n).on("mousedown touchstart",function(r){$("#chat-input")[0].value+="@"+i.id+" ",setTimeout(()=>{$("#chat-input").focus()},1)}),(l.isOwner()||l.permissions.chownAnywhere)&&(l.channel.settings.lobby||$('<div class="menu-item give-crown">Give Crown</div>').appendTo(n).on("mousedown touchstart",function(r){confirm("Give room ownership to "+i.name+"?")&&l.sendArray([{m:"chown",id:i.id}])}),$('<div class="menu-item kickban">Kickban</div>').appendTo(n).on("mousedown touchstart",function(r){var c=prompt("How many minutes? (0-300)","30");if(c!==null){c=parseFloat(c)||0;var a=c*60*1e3;l.sendArray([{m:"kickban",_id:i._id,ms:a}])}})),l.permissions.siteBan&&$('<div class="menu-item site-ban">Site Ban</div>').appendTo(n).on("mousedown touchstart",function(r){U("#siteban"),setTimeout(function(){$("#siteban input[name=id]").val(i._id),$("#siteban input[name=reasonText]").val("Discrimination against others"),$("#siteban input[name=reasonText]").attr("disabled",!0),$("#siteban select[name=reasonSelect]").val("Discrimination against others"),$("#siteban input[name=durationNumber]").val(5),$("#siteban input[name=durationNumber]").attr("disabled",!1),$("#siteban select[name=durationUnit]").val("hours"),$("#siteban textarea[name=note]").val(""),$("#siteban p[name=errorText]").text(""),l.permissions.siteBanAnyReason?$("#siteban select[name=reasonSelect] option[value=custom]").attr("disabled",!1):$("#siteban select[name=reasonSelect] option[value=custom]").attr("disabled",!0)},100)}),l.permissions.usersetOthers&&$('<div class="menu-item set-color">Set Color</div>').appendTo(n).on("mousedown touchstart",function(r){var c=prompt("What color?",i.color);c!==null&&l.sendArray([{m:"setcolor",_id:i._id,color:c}])}),l.permissions.usersetOthers&&$('<div class="menu-item set-name">Set Name</div>').appendTo(n).on("mousedown touchstart",function(r){var c=prompt("What name?",i.name);c!==null&&l.sendArray([{m:"setname",_id:i._id,name:c}])}),n.fadeIn(100)}}}();var S=function(t){if(!(this instanceof S))throw"yeet";EventEmitter.call(this);var t=t||{};this.id="Notification-"+(t.id||Math.random()),this.title=t.title||"",this.text=t.text||"",this.html=t.html||"",this.target=$(t.target||"#piano"),this.duration=t.duration||3e4,this.class=t.class||"classic";var o=this,i=$("#"+this.id);return i.length>0&&i.remove(),this.domElement=$('<div class="notification"><div class="notification-body"><div class="title"></div><div class="text"></div></div><div class="x">X</div></div>'),this.domElement[0].id=this.id,this.domElement.addClass(this.class),this.domElement.find(".title").text(this.title),this.text.length>0?this.domElement.find(".text").text(this.text):this.html instanceof HTMLElement?this.domElement.find(".text")[0].appendChild(this.html):this.html.length>0&&this.domElement.find(".text").html(this.html),document.body.appendChild(this.domElement.get(0)),this.position(),this.onresize=function(){o.position()},window.addEventListener("resize",this.onresize),this.domElement.find(".x").click(function(){o.close()}),this.duration>0&&setTimeout(function(){o.close()},this.duration),this};mixin(S.prototype,EventEmitter.prototype),S.prototype.constructor=S,S.prototype.position=function(){var e=this.target.offset(),t=e.left-this.domElement.width()/2+this.target.width()/4,o=e.top-this.domElement.height()-8,i=this.domElement.width();t+i>$("body").width()&&(t-=t+i-$("body").width()),t<0&&(t=0),this.domElement.offset({left:t,top:o})},S.prototype.close=function(){var e=this;window.removeEventListener("resize",this.onresize),this.domElement.fadeOut(500,function(){e.domElement.remove(),e.emit("close")})};var Ot=0,Qe=!1;localStorage&&localStorage.knowsYouCanUseKeyboard&&(Qe=!0),Qe||(window.gKnowsYouCanUseKeyboardTimeout=setTimeout(function(){window.gKnowsYouCanUseKeyboardNotification=new S({title:"Did you know!?!",text:"You can play the piano with your keyboard, too.  Try it!",target:"#piano",duration:1e4})},3e4)),window.localStorage&&(localStorage.volume?(Pe.value=localStorage.volume,b.audio.setVolume(localStorage.volume),$("#volume-label").text("Volume: "+Math.floor(b.audio.volume*100)+"%")):localStorage.volume=b.audio.volume,window.gHasBeenHereBefore=localStorage.gHasBeenHereBefore||!1,gHasBeenHereBefore,localStorage.gHasBeenHereBefore=!0),U("#sound-warning"),$(document).off("keydown",et);var kt=function(e){((e.path||e.composedPath&&e.composedPath()).includes(document.getElementById("sound-warning"))||e.target===document.getElementById("sound-warning"))&&_(),document.removeEventListener("click",kt),b.audio.resume()};document.addEventListener("click",kt),$("#room > .info").text("--"),l.on("ch",function(e){var t=e.ch,o=$("#room > .info");o.text(t._id),t.settings.lobby?o.addClass("lobby"):o.removeClass("lobby"),t.settings.chat?o.removeClass("no-chat"):o.addClass("no-chat"),t.settings.crownsolo?o.addClass("crownsolo"):o.removeClass("crownsolo"),t.settings["no cussing"]?o.addClass("no-cussing"):o.removeClass("no-cussing"),t.settings.visible?o.removeClass("not-visible"):o.addClass("not-visible")}),l.on("ls",function(e){for(var t in e.u)if(e.u.hasOwnProperty(t)){var o=e.u[t],i=$('#room .info[roomid="'+(o.id+"").replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0")+'"]');i.length==0&&(i=$('<div class="info"></div>'),i.attr("roomname",o._id),i.attr("roomid",o.id),$("#room .more").append(i)),i.text(o.count+"/"+("limit"in o.settings?o.settings.limit:20)+" "+o._id),o.settings.lobby?i.addClass("lobby"):i.removeClass("lobby"),o.settings.chat?i.removeClass("no-chat"):i.addClass("no-chat"),o.settings.crownsolo?i.addClass("crownsolo"):i.removeClass("crownsolo"),o.settings["no cussing"]?i.addClass("no-cussing"):i.removeClass("no-cussing"),o.settings.visible?i.removeClass("not-visible"):i.addClass("not-visible"),o.banned?i.addClass("banned"):i.removeClass("banned")}}),$("#room").on("click",function(e){if(e.stopPropagation(),$(e.target).hasClass("info")&&$(e.target).parents(".more").length){$("#room .more").fadeOut(250);var t=$(e.target).attr("roomname");return typeof t<"u"&&Ie(t,"right"),!1}else $(e.target).hasClass("new")&&U("#new-room","input[name=name]");var o=function(i){$(i.target).is("#room .more")||($(document).off("mousedown",o),$("#room .more").fadeOut(250),l.sendArray([{m:"-ls"}]))};$(document).on("mousedown",o),$("#room .more .info").remove(),$("#room .more").show(),l.sendArray([{m:"+ls"}])}),$("#new-room-btn").on("click",function(e){e.stopPropagation(),U("#new-room","input[name=name]")}),$("#play-alone-btn").on("click",function(e){e.stopPropagation();var t="Room"+Math.floor(Math.random()*1e12);Ie(t,"right",{visible:!1}),setTimeout(function(){new S({id:"share",title:"Playing alone",html:'You are playing alone in a room by yourself, but you can always invite friends by sending them the link.<br><a href="'+location.href+'">'+location.href+"</a>",duration:25e3})},1e3)}),$("#account-btn").on("click",function(e){e.stopPropagation(),U("#account"),l.accountInfo?($("#account #account-info").show(),l.accountInfo.type==="discord"&&($("#account #avatar-image").prop("src",l.accountInfo.avatar),$("#account #logged-in-user-text").text(l.accountInfo.username+"#"+l.accountInfo.discriminator))):$("#account #account-info").hide()});var Ze;function et(e){e.keyCode==27&&(_(),k||e.preventDefault(),e.stopPropagation())}function U(e,t){E&&E.blur(),bt(),$(document).on("keydown",et),$("#modal #modals > *").hide(),$("#modal").fadeIn(250),$(e).show(),setTimeout(function(){$(e).find(t).focus()},100),Ze=e}function _(){$(document).off("keydown",et),$("#modal").fadeOut(100),$("#modal #modals > *").hide(),Le(),Ze=null}var $t=$("#modal .bg")[0];$($t).on("click",function(e){e.target==$t&&_()}),function(){function e(){var t=$("#new-room .text[name=name]").val(),o={visible:$("#new-room .checkbox[name=visible]").is(":checked"),chat:!0};$("#new-room .text[name=name]").val(""),_(),Ie(t,"right",o),setTimeout(function(){new S({id:"share",title:"Created a Room",html:'You can invite friends to your room by sending them the link.<br><a href="'+location.href+'">'+location.href+"</a>",duration:25e3})},1e3)}$("#new-room .submit").click(function(t){e()}),$("#new-room .text[name=name]").keypress(function(t){if(t.keyCode==13)e();else if(t.keyCode==27)_();else return;return k||t.preventDefault(),t.stopPropagation(),!1})}();function Ie(e,t,o,i){o||(o={}),t||(t="right"),typeof i>"u"&&(i=!0);var n=t=="left"?"right":"left";if(e==""&&(e="lobby"),!(l.channel&&l.channel._id===e)){if(i){var s="/?c="+encodeURIComponent(e).replace("'","%27");if(window.history&&history.pushState)history.pushState({depth:tt+=1,name:e},"Piano > "+e,s);else{window.location=s;return}}l.setChannel(e,o);var d=0,r=100;$("#piano").addClass("ease-out").addClass("slide-"+n),setTimeout(function(){$("#piano").removeClass("ease-out").removeClass("slide-"+n).addClass("slide-"+t)},d+=r),setTimeout(function(){$("#piano").addClass("ease-in").removeClass("slide-"+t)},d+=r),setTimeout(function(){$("#piano").removeClass("ease-in")},d+=r)}}var tt=0;$(window).on("popstate",function(e){var t=e.state?e.state.depth:0,o=t<=tt?"left":"right";tt=t;var i=ht();Ie(i,o,null,!1)}),function(){function e(){var t={name:$("#rename input[name=name]").val(),color:$("#rename input[name=color]").val()};_(),l.sendArray([{m:"userset",set:t}])}$("#rename .submit").click(function(t){e()}),$("#rename .text[name=name]").keypress(function(t){if(t.keyCode==13)e();else if(t.keyCode==27)_();else return;return k||t.preventDefault(),t.stopPropagation(),!1})}(),function(){function e(){var o={m:"siteban"};o.id=$("#siteban .text[name=id]").val();var i=$("#siteban select[name=durationUnit]").val();if(i==="permanent"){if(!l.permissions.siteBanAnyDuration){$("#siteban p[name=errorText]").text("You don't have permission to ban longer than 1 month. Contact a higher staff to ban the user for longer.");return}o.permanent=!0}else{var n=0;switch(i){case"seconds":n=1e3;break;case"minutes":n=1e3*60;break;case"hours":n=1e3*60*60;break;case"days":n=1e3*60*60*24;break;case"weeks":n=1e3*60*60*24*7;break;case"months":n=1e3*60*60*24*30;break;case"years":n=1e3*60*60*24*365;break}var s=n*parseFloat($("#siteban input[name=durationNumber]").val());if(s<0){$("#siteban p[name=errorText]").text("Invalid duration.");return}if(s>1e3*60*60*24*30&&!l.permissions.siteBanAnyDuration){$("#siteban p[name=errorText]").text("You don't have permission to ban longer than 1 month. Contact a higher staff to ban the user for longer.");return}o.duration=s}var d;if($("#siteban select[name=reasonSelect]").val()==="custom"){if(d=$("#siteban .text[name=reasonText]").val(),d.length===0){$("#siteban p[name=errorText]").text("Please provide a reason.");return}}else d=$("#siteban select[name=reasonSelect]").val();o.reason=d;var r=$("#siteban textarea[name=note]").val();r&&(o.note=r),_(),l.sendArray([o])}$("#siteban .submit").click(function(o){e()}),$("#siteban select[name=reasonSelect]").change(function(o){this.value==="custom"?($("#siteban .text[name=reasonText]").attr("disabled",!1),$("#siteban .text[name=reasonText]").val("")):($("#siteban .text[name=reasonText]").attr("disabled",!0),$("#siteban .text[name=reasonText]").val(this.value))}),$("#siteban select[name=durationUnit]").change(function(o){this.value==="permanent"?$("#siteban .text[name=durationNumber]").attr("disabled",!0):$("#siteban .text[name=durationNumber]").attr("disabled",!1)}),$("#siteban .text[name=id]").keypress(t),$("#siteban .text[name=reasonText]").keypress(t),$("#siteban .text[name=note]").keypress(t);function t(o){if(o.keyCode==13)e();else if(o.keyCode==27)_();else return;return k||o.preventDefault(),o.stopPropagation(),!1}}(),function(){function e(){delete localStorage.token,l.stop(),l.start(),_()}$("#account .logout-btn").click(function(t){e()}),$("#account .login-discord").click(function(t){location.hostname==="localhost"?location.replace("https://discord.com/api/oauth2/authorize?client_id=926633278100877393&redirect_uri=http%3A%2F%2Flocalhost%2F%3Fcallback%3Ddiscord&response_type=code&scope=identify"):location.replace("https://discord.com/api/oauth2/authorize?client_id=926633278100877393&redirect_uri=https%3A%2F%2Fmppclone.com%2F%3Fcallback%3Ddiscord&response_type=code&scope=identify")})}();for(var E=function(){l.on("ch",function(t){t.ch.settings.chat?E.show():E.hide()}),l.on("disconnect",function(t){}),l.on("c",function(t){if(E.clear(),t.c)for(var o=0;o<t.c.length;o++)E.receive(t.c[o])}),l.on("a",function(t){E.receive(t)}),l.on("dm",function(t){E.receive(t)}),$("#chat input").on("focus",function(t){bt(),$("#chat").addClass("chatting"),E.scrollToBottom()}),$(document).mousedown(function(t){!$("#chat").has(t.target).length>0&&E.blur()}),document.addEventListener("touchstart",function(t){for(var o in t.changedTouches){var i=t.changedTouches[o];!$("#chat").has(i.target).length>0&&E.blur()}}),$(document).on("keydown",function(t){$("#chat").hasClass("chatting")?t.keyCode==27?(E.blur(),k||t.preventDefault(),t.stopPropagation()):t.keyCode==13&&$("#chat input").focus():!Ze&&(t.keyCode==27||t.keyCode==13)&&$("#chat input").focus()}),$("#chat input").on("keydown",function(t){if(t.keyCode==13){if(MPP.client.isConnected()){var o=$(this).val();o.length==0?(B&&(B=!1,$("#chat-input")[0].placeholder="You can chat with this thing."),oe&&(oe=!1,$("#chat-input")[0].placeholder="You can chat with this thing."),setTimeout(function(){E.blur()},100)):(E.send(o),$(this).val(""),setTimeout(function(){E.blur()},100))}k||t.preventDefault(),t.stopPropagation()}else t.keyCode==27?(E.blur(),k||t.preventDefault(),t.stopPropagation()):t.keyCode==9&&(k||t.preventDefault(),t.stopPropagation())});var e=[];return{startReply:function(t,o){oe=!0,ke=t,_e=o,$("#chat-input")[0].placeholder=`Replying to ${t.name}`},startDmReply:function(t,o){oe=!0,B=!0,_e=o,ke=t,xe=t,$("#chat-input")[0].placeholder=`Replying to ${t.name} in a DM.`},cancelReply:function(){B&&(B=!1),oe=!1,$("#chat-input")[0].placeholder="You can chat with this thing."},show:function(){$("#chat").fadeIn()},hide:function(){$("#chat").fadeOut()},clear:function(){$("#chat li").remove()},scrollToBottom:function(){var t=$("#chat ul").get(0);t.scrollTop=t.scrollHeight-t.clientHeight},blur:function(){$("#chat").hasClass("chatting")&&($("#chat input").get(0).blur(),$("#chat").removeClass("chatting"),E.scrollToBottom(),Le())},send:function(t){oe?B?(l.sendArray([{m:"dm",reply_to:_e,_id:ke._id,message:t}]),setTimeout(()=>{MPP.chat.cancelReply()},100)):(l.sendArray([{m:"a",reply_to:_e,_id:ke._id,message:t}]),setTimeout(()=>{MPP.chat.cancelReply()},100)):B?l.sendArray([{m:"dm",_id:xe._id,message:t}]):l.sendArray([{m:"a",message:t}])},receive:function(t){if(t.m==="dm"){if(P.indexOf(t.sender._id)!=-1)return}else if(P.indexOf(t.p._id)!=-1)return;var o=`<li id="msg-${t.id}">`,i=!1;t.m==="dm"?(t.sender._id===l.user._id||t.recipient._id===l.user._id)&&(o+='<span class="reply"/>'):o+='<span class="reply"/>',Y&&(o+='<span class="timestamp"/>'),t.m==="dm"&&(t.sender._id===l.user._id?o+='<span class="sentDm"/>':t.recipient._id===l.user._id?o+='<span class="receivedDm"/>':(o+='<span class="otherDm"/>',i=!0)),i?(M&&(o+='<span class="id"/>'),o+='<span class="name"/><span class="dmArrow"/>',M&&(o+='<span class="id2"/>'),o+='<span class="name2"/><span class="message"/>'):(M&&(o+='<span class="id"/>'),o+='<span class="name"/>',t.r&&(o+='<span class="replyLink"/>'),o+='<span class="message"/>');var n=$(o);if(n.find(".reply").text("\u27A6"),t.r){var s=e.find(v=>v.id===t.r);ge||s?.p?._id===l.user._id&&(document.title="You have received a reply!",Xe=!0),s?(n.find(".replyLink").text(`\u27A5 ${s.m==="dm"?s.sender.name:s.p.name}`),n.find(".replyLink").css({background:`${(s?.m==="dm"?s?.sender?.color:s?.p?.color)??"gray"}`}),n.find(".replyLink").on("click",v=>{$("#chat-input").focus(),document.getElementById(`msg-${s?.id}`).scrollIntoView({behavior:"smooth"}),$(`#msg-${s?.id}`).css({border:`1px solid ${s?.m==="dm"?s.sender?.color:s.p?.color}80`,"background-color":`${s?.m==="dm"?s.sender?.color:s.p?.color}20`}),setTimeout(()=>{$(`#msg-${s?.id}`).css({"background-color":"unset",border:"1px solid #00000000"})},5e3)})):(n.find(".replyLink").text("\u27A5 Unknown Message"),n.find(".replyLink").css({background:"gray"}))}t.m==="dm"&&(t.sender._id===l.user._id?(n.find(".sentDm").text("To"),n.find(".sentDm").css("color","#ff55ff")):t.recipient._id===l.user._id?(n.find(".receivedDm").text("From"),n.find(".receivedDm").css("color","#ff55ff")):(n.find(".otherDm").text("DM"),n.find(".otherDm").css("color","#ff55ff"),n.find(".dmArrow").text("->"),n.find(".dmArrow").css("color","#ff55ff"))),Y&&n.find(".timestamp").text(new Date(t.t).toLocaleTimeString());const d=parseMarkdown(parseContent(t.a),parseUrl).replace(/@([\da-f]{24})/g,(v,h)=>{const m=l.ppl[h];if(m){const u=parseContent(m.name);return m.id===l.getOwnParticipant().id?(ge||(qe=!0,document.title="You were mentioned!"),`<span class="mention" style="background-color: ${m.color};">${u}</span>`):`@${u}`}else return v});n.find(".message").html(d),t.m==="dm"?(T||n.find(".message").css("color",t.sender.color||"white"),M&&(t.sender._id===l.user._id?n.find(".id").text(t.recipient._id.substring(0,6)):n.find(".id").text(t.sender._id.substring(0,6))),t.sender._id===l.user._id?(T||n.find(".name").css("color",t.recipient.color||"white"),n.find(".name").text(t.recipient.name+":"),W&&(n[0].title=t.recipient._id)):t.recipient._id===l.user._id?(T||n.find(".name").css("color",t.sender.color||"white"),n.find(".name").text(t.sender.name+":"),W&&(n[0].title=t.sender._id)):(T||n.find(".name").css("color",t.sender.color||"white"),T||n.find(".name2").css("color",t.recipient.color||"white"),n.find(".name").text(t.sender.name),n.find(".name2").text(t.recipient.name+":"),M&&n.find(".id").text(t.sender._id.substring(0,6)),M&&n.find(".id2").text(t.recipient._id.substring(0,6)),W&&(n[0].title=t.sender._id))):(T||n.find(".message").css("color",t.p.color||"white"),T||n.find(".name").css("color",t.p.color||"white"),n.find(".name").text(t.p.name+":"),T||n.find(".message").css("color",t.p.color||"white"),M&&n.find(".id").text(t.p._id.substring(0,6)),W&&(n[0].title=t.p._id)),n.find(".id").on("click",v=>{t.m==="dm"?navigator.clipboard.writeText(t.sender._id===l.user._id?t.recipient._id:t.sender._id):navigator.clipboard.writeText(t.p._id)}),n.find(".id2").on("click",v=>{navigator.clipboard.writeText(t.recipient._id)}),n.find(".reply").on("click",v=>{if(t.m!=="dm")MPP.chat.startReply(t.p,t.id,t.a),setTimeout(()=>{$("#chat-input").focus()},100);else if(t.m==="dm"){const h=t.sender._id===l.user._id?t.recipient:t.sender;l.ppl[h._id]?(MPP.chat.startDmReply(h,t.id),setTimeout(()=>{$("#chat-input").focus()},100)):new S({target:"#piano",title:"User not found.",text:"The user who you are trying to reply to in a DM is not found, so a DM could not be started."})}}),$("#chat ul").append(n),e.push(t);for(var r=$("#chat ul li").get(),c=1;c<=50&&c<=r.length;c++)r[r.length-c].style.opacity=1-c*.03;if(r.length>50&&(r[0].style.display="none"),r.length>256&&(e.shift(),$(r[0]).remove()),!$("#chat").hasClass("chatting"))E.scrollToBottom();else{var a=$("#chat ul").get(0);a.scrollTop>a.scrollHeight-a.offsetHeight-50&&E.scrollToBottom()}}}}(),Be=-12,he=["a-1","as-1","b-1"],Et="c cs d ds e f fs g gs a as b".split(" "),nt=0;nt<7;nt++)for(var St in Et)he.push(Et[St]+nt);he.push("c7");var it="[]";function Dt(){l.sendArray([{m:"devices",list:JSON.parse(it)}])}l.on("connect",Dt);var ot={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0};(function(){navigator.requestMIDIAccess&&navigator.requestMIDIAccess().then(function(e){function t(r){if(r.target.enabled){var c=r.data[0]&15,a=r.data[0]>>4,v=r.data[1],h=r.data[2];if(!(ye&&c==9)){if(a==8||a==9&&h==0)ve(he[v-9+Be+A+ot[c]]);else if(a==9)r.target.volume!==void 0&&(h*=r.target.volume),se(he[v-9+Be+A+ot[c]],h/127);else if(a==11)pe||v==64&&(h>20?Se():De());else if(a==14){var m=r.data[1]+(r.data[2]<<7)-8192;m=Math.round(m/1e3),ot[c]=m}}}}function o(r){return{type:r.type,manufacturer:r.manufacturer,name:r.name,version:r.version,enabled:r.enabled,volume:r.volume}}function i(){var r=[];if(e.inputs.size>0)for(var c=e.inputs.values(),a=c.next();a&&!a.done;a=c.next()){var v=a.value;r.push(o(v))}if(e.outputs.size>0)for(var h=e.outputs.values(),m=h.next();m&&!m.done;m=h.next()){var u=m.value;r.push(o(u))}var p=JSON.stringify(r);p!==it&&(it=p,Dt())}function n(){if(e.inputs.size>0)for(var r=e.inputs.values(),c=r.next();c&&!c.done;c=r.next()){var a=c.value;a.onmidimessage=t,a.enabled!==!1&&(a.enabled=!0),typeof a.volume>"u"&&(a.volume=1)}if(e.outputs.size>0){for(var v=e.outputs.values(),h=v.next();h&&!h.done;h=v.next()){var m=h.value;typeof m.volume>"u"&&(m.volume=1)}me=function(u,p,w,g){if(!(!ee&&g===l.participantId)){var D=he.indexOf(u);if(D!=-1){D=D+9-Be;for(var H=e.outputs.values(),O=H.next();O&&!O.done;O=H.next()){var j=O.value;if(j.enabled){var q=p;j.volume!==void 0&&(q*=j.volume),j.send([144,D,q],window.performance.now()+w)}}}}}}d(!1),i()}e.addEventListener("statechange",function(r){r instanceof MIDIConnectionEvent&&n()}),n();var s;function d(r){var c=document.createElement("ul");if(e.inputs.size>0)for(var a=e.inputs.values(),v=a.next();v&&!v.done;v=a.next()){var h=v.value,m=document.createElement("li");if(m.connectionId=h.id,m.classList.add("connection"),h.enabled&&m.classList.add("enabled"),m.textContent=h.name,m.addEventListener("click",function(j){for(var q=e.inputs.values(),V=q.next();V&&!V.done;V=q.next()){var X=V.value;if(X.id===j.target.connectionId){X.enabled=!X.enabled,j.target.classList.toggle("enabled"),i();return}}}),ut){var u=document.createElement("canvas");mixin(u,{width:16*window.devicePixelRatio,height:16*window.devicePixelRatio,className:"knob"}),m.appendChild(u),u=new Knob(u,0,2,.01,h.volume,"volume"),u.canvas.style.width="16px",u.canvas.style.height="16px",u.canvas.style.float="right",u.on("change",function(j){h.volume=j.value}),u.emit("change",u)}c.appendChild(m)}else c.textContent="(none)";var p=document.createElement("ul");if(e.outputs.size>0)for(var w=e.outputs.values(),g=w.next();g&&!g.done;g=w.next()){var D=g.value,m=document.createElement("li");if(m.connectionId=D.id,m.classList.add("connection"),D.enabled&&m.classList.add("enabled"),m.textContent=D.name,m.addEventListener("click",function(q){for(var V=e.outputs.values(),X=V.next();X&&!X.done;X=V.next()){var ct=X.value;if(ct.id===q.target.connectionId){ct.enabled=!ct.enabled,q.target.classList.toggle("enabled"),i();return}}}),ut){var u=document.createElement("canvas");mixin(u,{width:16*window.devicePixelRatio,height:16*window.devicePixelRatio,className:"knob"}),m.appendChild(u),u=new Knob(u,0,2,.01,D.volume,"volume"),u.canvas.style.width="16px",u.canvas.style.height="16px",u.canvas.style.float="right",u.on("change",function(V){D.volume=V.value}),u.emit("change",u)}p.appendChild(m)}else p.textContent="(none)";var H=document.createElement("div"),O=document.createElement("h1");O.textContent="Inputs",H.appendChild(O),H.appendChild(c),O=document.createElement("h1"),O.textContent="Outputs",H.appendChild(O),H.appendChild(p),s=new S({id:"MIDI-Connections",title:"MIDI Connections",duration:r?"-1":"4500",html:H,target:"#midi-btn"})}document.getElementById("midi-btn").addEventListener("click",function(r){document.getElementById("Notification-MIDI-Connections")?s.close():d(!0)})},function(e){})})(),window.onerror=function(e,t,o){},window.MPP={get press(){return se},set press(e){se=e},get release(){return ve},set release(e){ve=e},get pressSustain(){return Se},set pressSustain(e){Se=e},get releaseSustain(){return De},set releaseSustain(e){De=e},piano:b,client:l,chat:E,noteQuota:ie,soundSelector:je,Notification:S};var z=!1,fe=b.audio,at=b.audio.context,st=at.createGain();st.gain.value=.05,st.connect(fe.synthGain);var Oe=["sine","square","sawtooth","triangle"],$e=1,Ke="square",Ne=0,rt=.2,lt=.5,We=2;function Pt(e,t){var o=he.indexOf(e);o=o+9-Be;var i=Math.pow(2,(o-69)/12)*440;this.osc=at.createOscillator(),this.osc.type=Ke,this.osc.frequency.value=i,this.gain=at.createGain(),this.gain.gain.value=0,this.osc.connect(this.gain),this.gain.connect(st),this.osc.start(t),this.gain.gain.setValueAtTime(0,t),this.gain.gain.linearRampToValueAtTime(1,t+Ne),this.gain.gain.linearRampToValueAtTime(lt,t+Ne+rt)}Pt.prototype.stop=function(e){this.gain.gain.linearRampToValueAtTime(0,e+We),this.osc.stop(e+We)},function(){var e=document.getElementById("synth-btn"),t;e.addEventListener("click",function(){t?t.close():o()});function o(){var i=document.createElement("div");(function(){var s=document.createElement("input");mixin(s,{type:"button",value:"ON/OFF",className:z?"switched-on":"switched-off"}),s.addEventListener("click",function(d){if(z=!z,s.className=z?"switched-on":"switched-off",!z){for(var r in fe.playings)if(fe.playings.hasOwnProperty(r)){var c=fe.playings[r];c&&c.voice&&(c.voice.osc.stop(),c.voice=void 0)}}}),i.appendChild(s)})();var n=document.createElement("canvas");mixin(n,{width:32*window.devicePixelRatio,height:32*window.devicePixelRatio,className:"knob"}),i.appendChild(n),n=new Knob(n,0,100,.1,50,"mix","%"),n.canvas.style.width="32px",n.canvas.style.height="32px",n.on("change",function(s){var d=s.value/100;fe.pianoGain.gain.value=1-d,fe.synthGain.gain.value=d}),n.emit("change",n),function(){Ke=Oe[$e];var s=document.createElement("input");mixin(s,{type:"button",value:Oe[$e]}),s.addEventListener("click",function(d){++$e>=Oe.length&&($e=0),Ke=Oe[$e],s.value=Ke}),i.appendChild(s)}();var n=document.createElement("canvas");mixin(n,{width:32*window.devicePixelRatio,height:32*window.devicePixelRatio,className:"knob"}),i.appendChild(n),n=new Knob(n,0,1,.001,Ne,"osc1 attack","s"),n.canvas.style.width="32px",n.canvas.style.height="32px",n.on("change",function(s){Ne=s.value}),n.emit("change",n);var n=document.createElement("canvas");mixin(n,{width:32*window.devicePixelRatio,height:32*window.devicePixelRatio,className:"knob"}),i.appendChild(n),n=new Knob(n,0,2,.001,rt,"osc1 decay","s"),n.canvas.style.width="32px",n.canvas.style.height="32px",n.on("change",function(s){rt=s.value}),n.emit("change",n);var n=document.createElement("canvas");mixin(n,{width:32*window.devicePixelRatio,height:32*window.devicePixelRatio,className:"knob"}),i.appendChild(n),n=new Knob(n,0,1,.001,lt,"osc1 sustain","x"),n.canvas.style.width="32px",n.canvas.style.height="32px",n.on("change",function(s){lt=s.value}),n.emit("change",n);var n=document.createElement("canvas");mixin(n,{width:32*window.devicePixelRatio,height:32*window.devicePixelRatio,className:"knob"}),i.appendChild(n),n=new Knob(n,0,2,.001,We,"osc1 release","s"),n.canvas.style.width="32px",n.canvas.style.height="32px",n.on("change",function(s){We=s.value}),n.emit("change",n),t=new S({title:"Synthesize",html:i,duration:-1,target:"#synth-btn"}),t.on("close",function(){var s=document.getElementById("tooltip");s&&s.parentNode.removeChild(s),t=null})}}(),function(){if(window.location.hostname==="multiplayerpiano.com"){let r=function(){var c=document.createElement("div");(function(){var a=document.createElement("div");a.classList="setting",a.innerText="Show user IDs in chat",M&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.showIdsInChat=a.classList.contains("enabled"),M=a.classList.contains("enabled")},c.appendChild(a)})(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Timestamps in chat",Y&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.showTimestampsInChat=a.classList.contains("enabled"),Y=a.classList.contains("enabled")},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="No chat colors",T&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.noChatColors=a.classList.contains("enabled"),T=a.classList.contains("enabled")},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Force dark background",G&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.noBackgroundColor=a.classList.contains("enabled"),G=a.classList.contains("enabled"),l.channel.settings.color&&!G?setBackgroundColor(l.channel.settings.color,l.channel.settings.color2):setBackgroundColorToDefault()},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Output own notes to MIDI",ee&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.outputOwnNotes=a.classList.contains("enabled"),ee=a.classList.contains("enabled")},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Virtual Piano layout",L&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.virtualPianoLayout=a.classList.contains("enabled"),L=a.classList.contains("enabled"),ue=L?de.VP:de.MPP},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Show _id tooltips",W&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.showChatTooltips=a.classList.contains("enabled"),W=a.classList.contains("enabled")},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Show Piano Notes",te&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.showPianoNotes=a.classList.contains("enabled"),te=a.classList.contains("enabled")},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Enable smooth cursors",K&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.smoothCursor=a.classList.contains("enabled"),K=a.classList.contains("enabled"),K?$("#cursors").attr("smooth-cursors",""):$("#cursors").removeAttr("smooth-cursors"),K?Object.values(l.ppl).forEach(function(v){v.cursorDiv&&(v.cursorDiv.style.left="",v.cursorDiv.style.top="",v.cursorDiv.style.transform="translate3d("+v.x+"vw, "+v.y+"vh, 0)")}):Object.values(l.ppl).forEach(function(v){v.cursorDiv&&(v.cursorDiv.style.left=v.x+"%",v.cursorDiv.style.top=v.y+"%",v.cursorDiv.style.transform="")})},c.appendChild(a)}(),function(){var a=document.createElement("select");a.classList="setting",a.style="color: inherit; width: calc(100% - 2px);";const v=Object.keys(Ge),h=document.createElement("option");h.value=h.innerText="No highlighted notes",h.selected=!N,a.appendChild(h);for(const m of v){const u=document.createElement("option");u.value=m,u.innerText=m,u.selected=m===N,a.appendChild(u)}N&&(a.value=N),a.onchange=function(){localStorage.highlightScaleNotes=a.value,N=a.value},c.appendChild(a)}(),function(){var a=document.createElement("div");a.classList="setting",a.innerText="Hide all cursors",F&&a.classList.toggle("enabled"),a.onclick=function(){a.classList.toggle("enabled"),localStorage.hideAllCursors=a.classList.contains("enabled"),F=a.classList.contains("enabled"),F?$("#cursors").hide():$("#cursors").show()},c.appendChild(a)}(),t=new S({title:"Client Settings",html:c,duration:-1,target:"#client-settings-btn"}),t.on("close",function(){var a=document.getElementById("tooltip");a&&a.parentNode.removeChild(a),t=null})};var s=r,e=document.getElementById("client-settings-btn"),t;e.addEventListener("click",function(){t?t.close():r()})}else{let c=function(a,v,h,m,u,p){const w=document.createElement("input");w.type="checkbox",w.id=a,w.checked=h,w.onclick=p;const g=document.createElement("label");g.innerText=v+": ",g.appendChild(w),u.appendChild(g),m&&u.appendChild(document.createElement("br"))};var d=c,e=document.getElementById("client-settings-btn"),o=document.getElementById("client-settings-content"),i=document.getElementsByClassName("client-settings-tablink"),n=document.getElementById("client-settings-ok-btn");e.addEventListener("click",a=>{a.stopPropagation(),U("#client-settings")}),n.addEventListener("click",a=>{a.stopPropagation(),_()}),window.changeClientSettingsTab=(a,v)=>{o.innerHTML="";for(let p=0;p<i.length;p++)i[p].className=i[p].className.replace(" active","");switch(a.currentTarget.className+=" active",v.toLowerCase()){case"chat":var u=document.createElement("div");c("show-timestamps-in-chat","Show timestamps in chat",Y,!0,u,()=>{Y=!Y,localStorage.showTimestampsInChat=Y}),c("show-user-ids-in-chat","Show user IDs in chat",M,!0,u,()=>{M=!M,localStorage.showIdsInChat=M}),c("show-id-tooltips","Show ID tooltips",W,!0,u,()=>{W=!W,localStorage.showChatTooltips=W}),c("no-chat-colors","No chat colors",T,!0,u,()=>{T=!T,localStorage.noChatColors=T}),c("hide-chat","Hide chat",ce,!1,u,()=>{ce=!ce,localStorage.hideChat=ce,ce?$("#chat").hide():$("#chat").show()}),o.appendChild(u);break;case"midi":var u=document.createElement("div");c("output-own-notes-to-midi","Output own notes to MIDI",ee,!0,u,()=>{ee=!ee,localStorage.outputOwnNotes=ee}),c("disable-midi-drum-channel","Disable MIDI Drum Channel (channel 10)",ye,!0,u,()=>{ye=!ye,localStorage.disableMIDIDrumChannel=ye}),o.appendChild(u);break;case"piano":var u=document.createElement("div");c("virtual-piano-layout","Virtual Piano layout",L,!0,u,()=>{L=!L,localStorage.virtualPianoLayout=L,ue=L?de.VP:de.MPP}),c("show-piano-notes","Show piano notes",te,!0,u,()=>{te=!te,localStorage.showPianoNotes=te}),c("hide-piano","Hide piano",le,!0,u,()=>{le=!le,localStorage.hidePiano=le,le?$("#piano").hide():$("#piano").show()});var h=document.createElement("select");h.classList="setting",h.style="width: calc(58.7% - 2px);",h.onchange=()=>{localStorage.highlightScaleNotes=h.value,N=h.value};const p=Object.keys(Ge),w=document.createElement("option");w.value=w.innerText="None",w.selected=!N,h.appendChild(w);for(const g of p){const D=document.createElement("option");D.value=g,D.innerText=g,D.selected=g===N,h.appendChild(D)}N&&(h.value=N);var m=document.createElement("label");m.setAttribute("for",h.id),m.innerText="Highlighted notes: ",u.appendChild(m),u.appendChild(h),o.appendChild(u);break;case"misc":var u=document.createElement("div");c("dont-use-prevent-default","Don't use prevent default",T,!0,u,()=>{k=!k,localStorage.noPreventDefault=noPreventDefault}),c("force-dark-background","Force dark background",G,!0,u,()=>{G=!G,localStorage.noBackgroundColor=G,l.channel.settings.color&&!G?setBackgroundColor(l.channel.settings.color,l.channel.settings.color2):setBackgroundColorToDefault()}),c("enable-smooth-cursors","Enable smooth cursors",K,!0,u,()=>{K=!K,localStorage.smoothCursor=K,K?($("#cursors").attr("smooth-cursors",""),Object.values(l.ppl).forEach(function(g){g.cursorDiv&&(g.cursorDiv.style.left="",g.cursorDiv.style.top="",g.cursorDiv.style.transform="translate3d("+g.x+"vw, "+g.y+"vh, 0)")})):($("#cursors").removeAttr("smooth-cursors"),Object.values(l.ppl).forEach(function(g){g.cursorDiv&&(g.cursorDiv.style.left=g.x+"%",g.cursorDiv.style.top=g.y+"%",g.cursorDiv.style.transform="")}))}),c("hide-all-cursors","Hide all cursors",F,!0,u,()=>{F=!F,localStorage.hideAllCursors=F,F?$("#cursors").hide():$("#cursors").show()}),c("hide-bot-users","Hide all bots",we,!0,u,()=>{we=!we,localStorage.hideBotUsers=we}),o.appendChild(u);break}},changeClientSettingsTab({currentTarget:document.getElementsByClassName("client-settings-tablink")[0]},"Chat")}}();var Ct=500,Kt=2,Nt,Tt,Wt,Ht;(function(){Nt=d,Tt=r,Wt=a,Ht=c;var e=["DodgerBlue","OliveDrab","Gold","Pink","SlateBlue","LightBlue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],t=!1,o=null,i=[],n=0;function s(m,u,p){return m.color=e[Math.random()*e.length|0],m.x=Math.random()*u,m.y=Math.random()*p-p,m.diameter=Math.random()*10+5,m.tilt=Math.random()*10-10,m.tiltAngleIncrement=Math.random()*.07+.05,m.tiltAngle=0,m}function d(){var m=window.innerWidth,u=window.innerHeight;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(g){return window.setTimeout(g,16.6666667)}}();var p=document.getElementById("confetti-canvas");p===null&&(p=document.createElement("canvas"),p.setAttribute("id","confetti-canvas"),p.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:absolute;top:0;left:0"),document.body.appendChild(p),p.width=m,p.height=u,window.addEventListener("resize",function(){p.width=window.innerWidth,p.height=window.innerHeight},!0));for(var w=p.getContext("2d");i.length<Ct;)i.push(s({},m,u));t=!0,o===null&&function g(){w.clearRect(0,0,window.innerWidth,window.innerHeight),i.length===0?o=null:(h(),v(w),o=requestAnimFrame(g))}()}function r(){t=!1}function c(){Tt(),i=[]}function a(){t?r():d()}function v(m){for(var u,p,w=0;w<i.length;w++)u=i[w],m.beginPath(),m.lineWidth=u.diameter,m.strokeStyle=u.color,m.shadowColor="rgba(0, 0, 0, .3)",m.shadowBlur=4,m.shadowOffsetY=2,m.shadowOffsetX=0,p=u.x+u.tilt,m.moveTo(p+u.diameter/2,u.y),m.lineTo(p,u.y+u.tilt+u.diameter/2),m.stroke()}function h(){var m=window.innerWidth,u=window.innerHeight,p;n+=.01;for(var w=0;w<i.length;w++)p=i[w],!t&&p.y<-15?p.y=u+100:(p.tiltAngle+=p.tiltAngleIncrement,p.x+=Math.sin(n),p.y+=(Math.cos(n)+p.diameter+Kt)*.5,p.tilt=Math.sin(p.tiltAngle)*15),(p.x>m+20||p.x<-20||p.y>u)&&(t&&i.length<=Ct?s(p,m,u):(i.splice(w,1),w--))}})(),window!==top&&alert("Hey, it looks like you're visiting our site through another website. Consider playing Multiplayer Piano directly at https://mppclone.com"),l.start()});// 钢琴

$(function () {

  console.log("%cWelcome to Coco's Developer Console!", "color:blue; font-size:20px;");
  //console.log("%cCheck out the source code: https://github.com/LapisHusky/mppclone/tree/main/client\nGuide for coders and bot developers: https://docs.google.com/document/d/1OrxwdLD1l1TE8iau6ToETVmnLuLXyGBhA0VfAY1Lf14/edit?usp=sharing", "color:gray; font-size:12px;");

  var test_mode = (window.location.hash && window.location.hash.match(/^(?:#.+)*#test(?:#.+)*$/i));

  var gSeeOwnCursor = (window.location.hash && window.location.hash.match(/^(?:#.+)*#seeowncursor(?:#.+)*$/i));

  var gMidiVolumeTest = (window.location.hash && window.location.hash.match(/^(?:#.+)*#midivolumetest(?:#.+)*$/i));

  var gMidiOutTest;

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
      var len = this.length >>> 0;
      var from = Number(arguments[1]) || 0;
      from = (from < 0) ? Math.ceil(from) : Math.floor(from);
      if (from < 0) from += len;
      for (; from < len; from++) {
        if (from in this && this[from] === elt) return from;
      }
      return -1;
    };
  }

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
    || function (cb) { setTimeout(cb, 1000 / 30); };





































  var DEFAULT_VELOCITY = 0.5;












































  var TIMING_TARGET = 1000;



















  // Utility

  ////////////////////////////////////////////////////////////////



  var Rect = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x2 = x + w;
    this.y2 = y + h;
  };
  Rect.prototype.contains = function (x, y) {
    return (x >= this.x && x <= this.x2 && y >= this.y && y <= this.y2);
  };

  const BASIC_PIANO_SCALES = {
    // ty https://www.pianoscales.org/
    // major keys
    "Notes in C Major" : ["C", "D", "E", "F", "G", "A", "B", "C"],
    "Notes in D Major" : ["D", "E", "G♭", "G", "A", "B", "D♭", "D"],
    "Notes in E Major" : ["E", "G♭", "A♭", "A", "B", "D♭", "E♭", "E"],
    "Notes in F Major" : ["F", "G", "A", "B♭", "C", "D", "E", "F"],
    "Notes in G Major" : ["G", "A", "B", "C", "D", "E", "G♭", "G"],
    "Notes in A Major" : ["A", "B", "D♭", "D", "E", "G♭", "A♭", "A"],
    "Notes in B Major" : ["B", "D♭", "E♭", "E", "G♭", "A♭", "B♭", "B"],
    "Notes in C# / Db Major" : ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C", "D♭"],
    "Notes in D# / Eb Major" : ["E♭", "F", "G", "A♭", "B♭", "C", "D", "E♭"],
    "Notes in F# / Gb Major" : ["G♭", "A♭", "B♭", "B", "D♭", "E♭", "F", "G♭"],
    "Notes in G# / Ab Major" : ["A♭", "B♭", "C", "D♭", "E♭", "F", "G", "A♭"],
    "Notes in A# / Bb Major" : ["B♭", "C", "D", "E♭", "F", "G", "A", "B♭"],
    // natural minor keys
    "Notes in A Minor" : ["A", "B", "C", "D", "E", "F", "G", "A"],
    "Notes in A# / Bb Minor" : ["B♭", "C", "D♭", "E♭", "F", "G♭", "A♭", "B♭"],
    "Notes in B Minor" : ["B", "D♭", "D", "E", "G♭", "G", "A", "B"],
    "Notes in C Minor" : ["C", "D", "E♭", "F", "G", "A♭", "B♭", "C"],
    "Notes in C# / Db Minor" : ["D♭", "E♭", "E", "G♭", "A♭", "A", "B", "D♭"],
    "Notes in D Minor" : ["D", "E", "F", "G", "A", "B♭", "C", "D"],
    "Notes in D# / Eb Minor" : ["E♭", "F", "G♭", "A♭", "B♭", "B", "D♭", "E♭"],
    "Notes in E Minor" : ["E", "G♭", "G", "A", "B", "C", "D", "E"],
    "Notes in F Minor" : ["F", "G", "A♭", "B♭", "C", "D♭", "E♭", "F"],
    "Notes in F# / Gb Minor" : ["G♭", "A♭", "A", "B", "D♭", "D", "E", "G♭"],
    "Notes in G Minor" : ["G", "A", "B♭", "C", "D", "E♭", "F", "G"],
    "Notes in G# / Ab Minor" : ["A♭", "B♭", "B", "D♭", "E♭", "E", "G♭", "A♭"],
  };















  // performing translation

  ////////////////////////////////////////////////////////////////

  var Translation = (function () {
    var strings = {
      "people are playing": {
        "pt": "pessoas estão jogando",
        "es": "personas están jugando",
        "ru": "человек играет",
        "fr": "personnes jouent",
        "ja": "人が遊んでいる",
        "de": "Leute spielen",
        "zh": "人在玩",
        "nl": "mensen spelen",
        "pl": "osób grają",
        "hu": "ember játszik"
      },
      "New Room...": {
        "pt": "Nova Sala ...",
        "es": "Nueva sala de...",
        "ru": "Новая комната...",
        "ja": "新しい部屋",
        "zh": "新房间",
        "nl": "nieuwe Kamer",
        "hu": "új szoba"
      },
      "room name": {
        "pt": "nome da sala",
        "es": "sala de nombre",
        "ru": "название комнаты",
        "fr": "nom de la chambre",
        "ja": "ルーム名",
        "de": "Raumnamen",
        "zh": "房间名称",
        "nl": "kamernaam",
        "pl": "nazwa pokój",
        "hu": "szoba neve"
      },
      "Visible (open to everyone)": {
        "pt": "Visível (aberto a todos)",
        "es": "Visible (abierto a todo el mundo)",
        "ru": "Visible (открытый для всех)",
        "fr": "Visible (ouvert à tous)",
        "ja": "目に見える（誰にでも開いている）",
        "de": "Sichtbar (offen für alle)",
        "zh": "可见（向所有人开放）",
        "nl": "Zichtbaar (open voor iedereen)",
        "pl": "Widoczne (otwarte dla wszystkich)",
        "hu": "Látható (nyitott mindenki számára)"
      },
      "Enable Chat": {
        "pt": "Ativar bate-papo",
        "es": "Habilitar chat",
        "ru": "Включить чат",
        "fr": "Activer discuter",
        "ja": "チャットを有効にする",
        "de": "aktivieren Sie chatten",
        "zh": "启用聊天",
        "nl": "Chat inschakelen",
        "pl": "Włącz czat",
        "hu": "a csevegést"
      },
      "Play Alone": {
        "pt": "Jogar Sozinho",
        "es": "Jugar Solo",
        "ru": "Играть в одиночку",
        "fr": "Jouez Seul",
        "ja": "一人でプレイ",
        "de": "Alleine Spielen",
        "zh": "独自玩耍",
        "nl": "Speel Alleen",
        "pl": "Zagraj sam",
        "hu": "Játssz egyedül"
      }
      // todo: it, tr, th, sv, ar, fi, nb, da, sv, he, cs, ko, ro, vi, id, nb, el, sk, bg, lt, sl, hr
      // todo: Connecting, Offline mode, input placeholder, Notifications
    };

    var setLanguage = function (lang) {
      language = lang
    };

    var getLanguage = function () {
      if (window.navigator && navigator.language && navigator.language.length >= 2) {
        return navigator.language.substr(0, 2).toLowerCase();
      } else {
        return "en";
      }
    };

    var get = function (text, lang) {
      if (typeof lang === "undefined") lang = language;
      var row = strings[text];
      if (row == undefined) return text;
      var string = row[lang];
      if (string == undefined) return text;
      return string;
    };

    var perform = function (lang) {
      if (typeof lang === "undefined") lang = language;
      $(".translate").each(function (i, ele) {
        var th = $(this);
        if (ele.tagName && ele.tagName.toLowerCase() == "input") {
          if (typeof ele.placeholder != "undefined") {
            th.attr("placeholder", get(th.attr("placeholder"), lang))
          }
        } else {
          th.text(get(th.text(), lang));
        }
      });
    };

    var language = getLanguage();

    return {
      setLanguage: setLanguage,
      getLanguage: getLanguage,
      get: get,
      perform: perform
    };
  })();

  Translation.perform();















  // AudioEngine classes

  ////////////////////////////////////////////////////////////////

  var AudioEngine = function () {
  };

  AudioEngine.prototype.init = function (cb) {
    this.volume = 0.6;
    this.sounds = {};
    this.paused = true;
    return this;
  };

  AudioEngine.prototype.load = function (id, url, cb) {
  };

  AudioEngine.prototype.play = function () {
  };

  AudioEngine.prototype.stop = function () {
  };

  AudioEngine.prototype.setVolume = function (vol) {
    this.volume = vol;
  };

  AudioEngine.prototype.resume = function () {
    this.paused = false;
  };


  AudioEngineWeb = function () {
    this.threshold = 0;
    this.worker = new Worker("/workerTimer.js");
    var self = this;
    this.worker.onmessage = function (event) {
      if (event.data.args)
        if (event.data.args.action == 0) {
          self.actualPlay(event.data.args.id, event.data.args.vol, event.data.args.time, event.data.args.part_id);
        }
        else {
          self.actualStop(event.data.args.id, event.data.args.time, event.data.args.part_id);
        }
    }
  };

  AudioEngineWeb.prototype = new AudioEngine();

  AudioEngineWeb.prototype.init = function (cb) {
    AudioEngine.prototype.init.call(this);

    this.context = new AudioContext({ latencyHint: 'interactive' });

    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);
    this.masterGain.gain.value = this.volume;

    this.limiterNode = this.context.createDynamicsCompressor();
    this.limiterNode.threshold.value = -10;
    this.limiterNode.knee.value = 0;
    this.limiterNode.ratio.value = 20;
    this.limiterNode.attack.value = 0;
    this.limiterNode.release.value = 0.1;
    this.limiterNode.connect(this.masterGain);

    // for synth mix
    this.pianoGain = this.context.createGain();
    this.pianoGain.gain.value = 0.5;
    this.pianoGain.connect(this.limiterNode);
    this.synthGain = this.context.createGain();
    this.synthGain.gain.value = 0.5;
    this.synthGain.connect(this.limiterNode);

    this.playings = {};

    if (cb) setTimeout(cb, 0);
    return this;
  };

  AudioEngineWeb.prototype.load = function (id, url, cb) {
    var audio = this;
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.responseType = "arraybuffer";
    req.addEventListener("readystatechange", function (evt) {
      if (req.readyState !== 4) return;
      try {
        audio.context.decodeAudioData(req.response, function (buffer) {
          audio.sounds[id] = buffer;
          if (cb) cb();
        });
      } catch (e) {
        /*throw new Error(e.message
          + " / id: " + id
          + " / url: " + url
          + " / status: " + req.status
          + " / ArrayBuffer: " + (req.response instanceof ArrayBuffer)
          + " / byteLength: " + (req.response && req.response.byteLength ? req.response.byteLength : "undefined"));*/
        new Notification({
          id: "audio-download-error", title: "Problem", text: "For some reason, an audio download failed with a status of " + req.status + ". ",
          target: "#piano", duration: 10000
        });
      }
    });
    req.send();
  };

  AudioEngineWeb.prototype.actualPlay = function (id, vol, time, part_id) { //the old play(), but with time insted of delay_ms.
    if (this.paused) return;
    if (!this.sounds.hasOwnProperty(id)) return;
    var source = this.context.createBufferSource();
    source.buffer = this.sounds[id];
    var gain = this.context.createGain();
    gain.gain.value = vol;
    source.connect(gain);
    gain.connect(this.pianoGain);
    source.start(time);
    // Patch from ste-art remedies stuttering under heavy load
    if (this.playings[id]) {
      var playing = this.playings[id];
      playing.gain.gain.setValueAtTime(playing.gain.gain.value, time);
      playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.2);
      playing.source.stop(time + 0.21);
      if (enableSynth && playing.voice) {
        playing.voice.stop(time);
      }
    }
    this.playings[id] = { "source": source, "gain": gain, "part_id": part_id };

    if (enableSynth) {
      this.playings[id].voice = new synthVoice(id, time);
    }
  }

  AudioEngineWeb.prototype.play = function (id, vol, delay_ms, part_id) {
    if (!this.sounds.hasOwnProperty(id)) return;
    var time = this.context.currentTime + (delay_ms / 1000); //calculate time on note receive.
    var delay = delay_ms - this.threshold;
    if (delay <= 0) this.actualPlay(id, vol, time, part_id);
    else {
      this.worker.postMessage({ delay: delay, args: { action: 0/*play*/, id: id, vol: vol, time: time, part_id: part_id } }); // but start scheduling right before play.
    }
  }

  AudioEngineWeb.prototype.actualStop = function (id, time, part_id) {
    if (this.playings.hasOwnProperty(id) && this.playings[id] && this.playings[id].part_id === part_id) {
      var gain = this.playings[id].gain.gain;
      gain.setValueAtTime(gain.value, time);
      gain.linearRampToValueAtTime(gain.value * 0.1, time + 0.16);
      gain.linearRampToValueAtTime(0.0, time + 0.4);
      this.playings[id].source.stop(time + 0.41);


      if (this.playings[id].voice) {
        this.playings[id].voice.stop(time);
      }

      this.playings[id] = null;
    }
  };

  AudioEngineWeb.prototype.stop = function (id, delay_ms, part_id) {
    var time = this.context.currentTime + (delay_ms / 1000);
    var delay = delay_ms - this.threshold;
    if (delay <= 0) this.actualStop(id, time, part_id);
    else {
      this.worker.postMessage({ delay: delay, args: { action: 1/*stop*/, id: id, time: time, part_id: part_id } });
    }
  };

  AudioEngineWeb.prototype.setVolume = function (vol) {
    AudioEngine.prototype.setVolume.call(this, vol);
    this.masterGain.gain.value = this.volume;
  };

  AudioEngineWeb.prototype.resume = function () {
    this.paused = false;
    this.context.resume();
  };


























  // Renderer classes

  ////////////////////////////////////////////////////////////////

  var Renderer = function () {
  };

  Renderer.prototype.init = function (piano) {
    this.piano = piano;
    this.resize();
    return this;
  };

  Renderer.prototype.resize = function (width, height) {
    if (typeof width == "undefined") width = $(this.piano.rootElement).width();
    if (typeof height == "undefined") height = Math.floor(width * 0.2);
    $(this.piano.rootElement).css({ "height": height + "px", marginTop: Math.floor($(window).height() / 2 - height / 2) + "px" });
    this.width = width * window.devicePixelRatio;
    this.height = height * window.devicePixelRatio;
  };

  Renderer.prototype.visualize = function (key, color) {
  };




  var CanvasRenderer = function () {
    Renderer.call(this);
  };

  CanvasRenderer.prototype = new Renderer();

  CanvasRenderer.prototype.init = function (piano) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    piano.rootElement.appendChild(this.canvas);

    Renderer.prototype.init.call(this, piano); // calls resize()

    // create render loop
    var self = this;
    var render = function () {
      self.redraw();
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // add event listeners
    var mouse_down = false;
    var last_key = null;
    $(piano.rootElement).mousedown(function (event) {
      mouse_down = true;
      //event.stopPropagation();
      if (!gNoPreventDefault) event.preventDefault();

      var pos = CanvasRenderer.translateMouseEvent(event);
      var hit = self.getHit(pos.x, pos.y);
      if (hit) {
        press(hit.key.note, hit.v);
        last_key = hit.key;
      }
    });
    piano.rootElement.addEventListener("touchstart", function (event) {
      mouse_down = true;
      //event.stopPropagation();
      if (!gNoPreventDefault) event.preventDefault();
      for (var i in event.changedTouches) {
        var pos = CanvasRenderer.translateMouseEvent(event.changedTouches[i]);
        var hit = self.getHit(pos.x, pos.y);
        if (hit) {
          press(hit.key.note, hit.v);
          last_key = hit.key;
        }
      }
    }, false);
    $(window).mouseup(function (event) {
      if (last_key) {
        release(last_key.note);
      }
      mouse_down = false;
      last_key = null;
    });
    /*$(piano.rootElement).mousemove(function(event) {
      if(!mouse_down) return;
      var pos = CanvasRenderer.translateMouseEvent(event);
      var hit = self.getHit(pos.x, pos.y);
      if(hit && hit.key != last_key) {
        press(hit.key.note, hit.v);
        last_key = hit.key;
      }
    });*/

    return this;
  };

  CanvasRenderer.prototype.resize = function (width, height) {
    Renderer.prototype.resize.call(this, width, height);
    if (this.width < 52 * 2) this.width = 52 * 2;
    if (this.height < this.width * 0.2) this.height = Math.floor(this.width * 0.2);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = this.width / window.devicePixelRatio + "px";
    this.canvas.style.height = this.height / window.devicePixelRatio + "px";

    // calculate key sizes
    this.whiteKeyWidth = Math.floor(this.width / 52);
    this.whiteKeyHeight = Math.floor(this.height * 0.9);
    this.blackKeyWidth = Math.floor(this.whiteKeyWidth * 0.75);
    this.blackKeyHeight = Math.floor(this.height * 0.5);

    this.blackKeyOffset = Math.floor(this.whiteKeyWidth - (this.blackKeyWidth / 2));
    this.keyMovement = Math.floor(this.whiteKeyHeight * 0.015);

    this.whiteBlipWidth = Math.floor(this.whiteKeyWidth * 0.7);
    this.whiteBlipHeight = Math.floor(this.whiteBlipWidth * 0.8);
    this.whiteBlipX = Math.floor((this.whiteKeyWidth - this.whiteBlipWidth) / 2);
    this.whiteBlipY = Math.floor(this.whiteKeyHeight - this.whiteBlipHeight * 1.2);
    this.blackBlipWidth = Math.floor(this.blackKeyWidth * 0.7);
    this.blackBlipHeight = Math.floor(this.blackBlipWidth * 0.8);
    this.blackBlipY = Math.floor(this.blackKeyHeight - this.blackBlipHeight * 1.2);
    this.blackBlipX = Math.floor((this.blackKeyWidth - this.blackBlipWidth) / 2);

    // prerender white key
    this.whiteKeyRender = document.createElement("canvas");
    this.whiteKeyRender.width = this.whiteKeyWidth;
    this.whiteKeyRender.height = this.height + 10;
    var ctx = this.whiteKeyRender.getContext("2d");
    if (ctx.createLinearGradient) {
      var gradient = ctx.createLinearGradient(0, 0, 0, this.whiteKeyHeight);
      gradient.addColorStop(0, "#69a3ce");
      gradient.addColorStop(0.75, "#abe591");
      gradient.addColorStop(1, "#69a3ce");
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = "#fff";
    }
    ctx.strokeStyle = "#000";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
    ctx.lineWidth = 4;
    ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);

    // prerender black key
    this.blackKeyRender = document.createElement("canvas");
    this.blackKeyRender.width = this.blackKeyWidth + 10;
    this.blackKeyRender.height = this.blackKeyHeight + 10;
    var ctx = this.blackKeyRender.getContext("2d");
    if (ctx.createLinearGradient) {
      var gradient = ctx.createLinearGradient(0, 0, 0, this.blackKeyHeight);
      gradient.addColorStop(0, "#000");
      gradient.addColorStop(1, "#444");
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = "#000";
    }
    ctx.strokeStyle = "#222";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 8;
    ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
    ctx.lineWidth = 4;
    ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);

    // prerender shadows
    this.shadowRender = [];
    var y = -this.canvas.height * 2;
    for (var j = 0; j < 2; j++) {
      var canvas = document.createElement("canvas");
      this.shadowRender[j] = canvas;
      canvas.width = this.canvas.width;
      canvas.height = this.canvas.height;
      var ctx = canvas.getContext("2d");
      var sharp = j ? true : false;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 1;
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = this.keyMovement * 3;
      ctx.shadowOffsetY = -y + this.keyMovement;
      if (sharp) {
        ctx.shadowOffsetX = this.keyMovement;
      } else {
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = -y + this.keyMovement;
      }
      for (var i in this.piano.keys) {
        if (!this.piano.keys.hasOwnProperty(i)) continue;
        var key = this.piano.keys[i];
        if (key.sharp != sharp) continue;

        if (key.sharp) {
          ctx.fillRect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
            y + ctx.lineWidth / 2,
            this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
        } else {
          ctx.fillRect(this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
            y + ctx.lineWidth / 2,
            this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
        }
      }
    }

    // update key rects
    for (var i in this.piano.keys) {
      if (!this.piano.keys.hasOwnProperty(i)) continue;
      var key = this.piano.keys[i];
      if (key.sharp) {
        key.rect = new Rect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial, 0,
          this.blackKeyWidth, this.blackKeyHeight);
      } else {
        key.rect = new Rect(this.whiteKeyWidth * key.spatial, 0,
          this.whiteKeyWidth, this.whiteKeyHeight);
      }
    }
  };

  CanvasRenderer.prototype.visualize = function (key, color) {
    key.timePlayed = Date.now();
    key.blips.push({ "time": key.timePlayed, "color": color });
  };

  CanvasRenderer.prototype.redraw = function () {
    var now = Date.now();
    var timeLoadedEnd = now - 1000;
    var timePlayedEnd = now - 100;
    var timeBlipEnd = now - 1000;

    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw all keys
    for (var j = 0; j < 2; j++) {
      this.ctx.globalAlpha = 1.0;
      this.ctx.drawImage(this.shadowRender[j], 0, 0);
      var sharp = j ? true : false;
      for (var i in this.piano.keys) {
        if (!this.piano.keys.hasOwnProperty(i)) continue;
        var key = this.piano.keys[i];
        if (key.sharp != sharp) continue;

        if (!key.loaded) {
          this.ctx.globalAlpha = 0.2;
        } else if (key.timeLoaded > timeLoadedEnd) {
          this.ctx.globalAlpha = ((now - key.timeLoaded) / 1000) * 0.8 + 0.2;
        } else {
          this.ctx.globalAlpha = 1.0;
        }
        var y = 0;
        if (key.timePlayed > timePlayedEnd) {
          y = Math.floor(this.keyMovement - (((now - key.timePlayed) / 100) * this.keyMovement));
        }
        var x = Math.floor(key.sharp ? this.blackKeyOffset + this.whiteKeyWidth * key.spatial
          : this.whiteKeyWidth * key.spatial);
        var image = key.sharp ? this.blackKeyRender : this.whiteKeyRender;
        this.ctx.drawImage(image, x, y);

        var keyName = key.baseNote[0].toUpperCase();
        if (sharp) keyName += "#";
        keyName += key.octave + 1;

        if (gShowPianoNotes) {
          this.ctx.font = `${((key.sharp ? this.blackKeyWidth : this.whiteKeyWidth) / 2)}px Arial`;
          this.ctx.fillStyle = key.sharp ? "white" : "black";
          this.ctx.textAlign = "center";

          // do two passes to render both sharps and flat names.
          if (keyName.includes('#')) {
            this.ctx.fillText(keyName, x + ((key.sharp ? this.blackKeyWidth : this.whiteKeyWidth) / 2), y + (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight) - 30 - this.ctx.lineWidth);
          }

          keyName = keyName.replace("C#", "D♭");
          keyName = keyName.replace("D#", "E♭");
          keyName = keyName.replace("F#", "G♭");
          keyName = keyName.replace("G#", "A♭");
          keyName = keyName.replace("A#", "B♭");
  
          this.ctx.fillText(keyName, x + ((key.sharp ? this.blackKeyWidth : this.whiteKeyWidth) / 2), y + (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight) - 10 - this.ctx.lineWidth);
        }

        const highlightScale = BASIC_PIANO_SCALES[gHighlightScaleNotes];
        if (highlightScale && key.loaded) {
          keyName = keyName.replace("C#", "D♭");
          keyName = keyName.replace("D#", "E♭");
          keyName = keyName.replace("F#", "G♭");
          keyName = keyName.replace("G#", "A♭");
          keyName = keyName.replace("A#", "B♭");
          const keynameNoOctave = keyName.slice(0, -1);
          if (highlightScale.includes(keynameNoOctave)) {
              const prev = this.ctx.globalAlpha;
              this.ctx.globalAlpha = 0.3;
              this.ctx.fillStyle = "#0f0";
              if (key.sharp) {
                  this.ctx.fillRect(x, y, this.blackKeyWidth, this.blackKeyHeight);
              } else {
                  this.ctx.fillRect(x, y, this.whiteKeyWidth, this.whiteKeyHeight);
              }
              this.ctx.globalAlpha = prev;
          }
        }

        // render blips
        if (key.blips.length) {
          var alpha = this.ctx.globalAlpha;
          var w, h;
          if (key.sharp) {
            x += this.blackBlipX;
            y = this.blackBlipY;
            w = this.blackBlipWidth;
            h = this.blackBlipHeight;
          } else {
            x += this.whiteBlipX;
            y = this.whiteBlipY;
            w = this.whiteBlipWidth;
            h = this.whiteBlipHeight;
          }
          for (var b = 0; b < key.blips.length; b++) {
            var blip = key.blips[b];
            if (blip.time > timeBlipEnd) {
              this.ctx.fillStyle = blip.color;
              this.ctx.globalAlpha = alpha - ((now - blip.time) / 1000);
              this.ctx.fillRect(x, y, w, h);
            } else {
              key.blips.splice(b, 1);
              --b;
            }
            y -= Math.floor(h * 1.1);
          }
        }
      }
    }
    this.ctx.restore();
  };

  CanvasRenderer.prototype.renderNoteLyrics = function () {
    // render lyric
    for (var part_id in this.noteLyrics) {
      if (!this.noteLyrics.hasOwnProperty(i)) continue;
      var lyric = this.noteLyrics[part_id];
      var lyric_x = x;
      var lyric_y = this.whiteKeyHeight + 1;
      this.ctx.fillStyle = key.lyric.color;
      var alpha = this.ctx.globalAlpha;
      this.ctx.globalAlpha = alpha - ((now - key.lyric.time) / 1000);
      this.ctx.fillRect(x, y, 10, 10);
    }
  };

  CanvasRenderer.prototype.getHit = function (x, y) {
    for (var j = 0; j < 2; j++) {
      var sharp = j ? false : true; // black keys first
      for (var i in this.piano.keys) {
        if (!this.piano.keys.hasOwnProperty(i)) continue;
        var key = this.piano.keys[i];
        if (key.sharp != sharp) continue;
        if (key.rect.contains(x, y)) {
          var v = y / (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight);
          v += 0.25;
          v *= DEFAULT_VELOCITY;
          if (v > 1.0) v = 1.0;
          return { "key": key, "v": v };
        }
      }
    }
    return null;
  };


  CanvasRenderer.isSupported = function () {
    var canvas = document.createElement("canvas");
    return !!(canvas.getContext && canvas.getContext("2d"));
  };

  CanvasRenderer.translateMouseEvent = function (evt) {
    var element = evt.target;
    var offx = 0;
    var offy = 0;
    do {
      if (!element) break; // wtf, wtf?
      offx += element.offsetLeft;
      offy += element.offsetTop;
    } while (element = element.offsetParent);
    return {
      x: (evt.pageX - offx) * window.devicePixelRatio,
      y: (evt.pageY - offy) * window.devicePixelRatio
    }
  };











  // Soundpack Stuff by electrashave ♥

  ////////////////////////////////////////////////////////////////
  
  var soundDomain = 'https://' + window.location.hostname;

  function SoundSelector(piano) {
    this.initialized = false;
    this.keys = piano.keys;
    this.loading = {};
    this.notification;
    this.packs = [];
    this.piano = piano;
    this.soundSelection = localStorage.soundSelection ? localStorage.soundSelection : "mppclassic";
    this.addPack({ name: "MPP Classic", keys: Object.keys(this.piano.keys), ext: ".mp3", url: "/sounds/mppclassic/" });
  }

  SoundSelector.prototype.addPack = function (pack, load) {
    var self = this;
    self.loading[pack.url || pack] = true;
    function add(obj) {
      var added = false;
      for (var i = 0; self.packs.length > i; i++) {
        if (obj.name == self.packs[i].name) {
          added = true;
          break;
        }
      }

      if (added) return console.warn("Sounds already added!!"); //no adding soundpacks twice D:<

      if (obj.url.substr(obj.url.length - 1) != "/") obj.url = obj.url + "/";
      var html = document.createElement("li");
      html.classList = "pack";
      html.innerText = obj.name + " (" + obj.keys.length + " keys)";
      html.onclick = function () {
        self.loadPack(obj.name);
        self.notification.close();
      };
      obj.html = html;
      self.packs.push(obj);
      self.packs.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      if (load) self.loadPack(obj.name);
      delete self.loading[obj.url];
    }

    if (typeof pack == "string") {
      let useDomain = true;
      if (pack.match(/^(http|https):\/\//i)) useDomain = false;
      $.getJSON((useDomain ? soundDomain : '') + pack + "/info.json").done(function (json) {
        json.url = pack;
        add(json);
      });
    } else add(pack); //validate packs??
  };

  SoundSelector.prototype.addPacks = function (packs) {
    for (var i = 0; packs.length > i; i++) this.addPack(packs[i]);
  };

  SoundSelector.prototype.init = function () {
    var self = this;
    if (self.initialized) return console.warn("Sound selector already initialized!");

    if (!!Object.keys(self.loading).length) return setTimeout(function () {
      self.init();
    }, 250);

    $("#sound-btn").on("click", function () {
      if (document.getElementById("Notification-Sound-Selector") != null)
        return self.notification.close();
      var html = document.createElement("ul");
      //$(html).append("<p>Current Sound: " + self.soundSelection + "</p>");

      for (var i = 0; self.packs.length > i; i++) {
        var pack = self.packs[i];
        if (pack.name == self.soundSelection) pack.html.classList = "pack enabled";
        else pack.html.classList = "pack";
        html.appendChild(pack.html);
      }

      self.notification = new Notification({ title: "Sound Selector", html: html, id: "Sound-Selector", duration: -1, target: "#sound-btn" });
    });
    self.initialized = true;
    self.loadPack(self.soundSelection, true);
  };

  SoundSelector.prototype.loadPack = function (pack, f) {
    for (var i = 0; this.packs.length > i; i++) {
      var p = this.packs[i];
      if (p.name == pack) {
        pack = p;
        break;
      }
    }
    if (typeof pack == "string") {
      console.warn("Sound pack does not exist! Loading default pack...");
      return this.loadPack("MPP Classic");
    }

    if (pack.name == this.soundSelection && !f) return;
    if (pack.keys.length != Object.keys(this.piano.keys).length) {
      this.piano.keys = {};
      for (var i = 0; pack.keys.length > i; i++) this.piano.keys[pack.keys[i]] = this.keys[pack.keys[i]];
      this.piano.renderer.resize();
    }

    var self = this;
    for (var i in this.piano.keys) {
      if (!this.piano.keys.hasOwnProperty(i)) continue;
      (function () {
        var key = self.piano.keys[i];
        key.loaded = false;
        let useDomain = true;
        if (pack.url.match(/^(http|https):\/\//i)) useDomain = false
        self.piano.audio.load(key.note, (useDomain ? soundDomain : '') + pack.url + key.note + pack.ext, function () {
          key.loaded = true;
          key.timeLoaded = Date.now();
        });
      })();
    }
    if (localStorage) localStorage.soundSelection = pack.name;
    this.soundSelection = pack.name;
  };

  SoundSelector.prototype.removePack = function (name) {
    var found = false;
    for (var i = 0; this.packs.length > i; i++) {
      var pack = this.packs[i];
      if (pack.name == name) {
        this.packs.splice(i, 1);
        if (pack.name == this.soundSelection) this.loadPack(this.packs[0].name); //add mpp default if none?
        break;
      }
    }
    if (!found) console.warn("Sound pack not found!");
  };











  // Pianoctor

  ////////////////////////////////////////////////////////////////

  var PianoKey = function (note, octave) {
    this.note = note + octave;
    this.baseNote = note;
    this.octave = octave;
    this.sharp = note.indexOf("s") != -1;
    this.loaded = false;
    this.timeLoaded = 0;
    this.domElement = null;
    this.timePlayed = 0;
    this.blips = [];
  };

  var Piano = function (rootElement) {

    var piano = this;
    piano.rootElement = rootElement;
    piano.keys = {};

    var white_spatial = 0;
    var black_spatial = 0;
    var black_it = 0;
    var black_lut = [2, 1, 2, 1, 1];
    var addKey = function (note, octave) {
      var key = new PianoKey(note, octave);
      piano.keys[key.note] = key;
      if (key.sharp) {
        key.spatial = black_spatial;
        black_spatial += black_lut[black_it % 5];
        ++black_it;
      } else {
        key.spatial = white_spatial;
        ++white_spatial;
      }
    }
    if (test_mode) {
      addKey("c", 2);
    } else {
      addKey("a", -1);
      addKey("as", -1);
      addKey("b", -1);
      var notes = "c cs d ds e f fs g gs a as b".split(" ");
      for (var oct = 0; oct < 7; oct++) {
        for (var i in notes) {
          addKey(notes[i], oct);
        }
      }
      addKey("c", 7);
    }


    this.renderer = new CanvasRenderer().init(this);

    window.addEventListener("resize", function () {
      piano.renderer.resize();
    });


    window.AudioContext = window.AudioContext || window.webkitAudioContext || undefined;
    var audio_engine = AudioEngineWeb;
    this.audio = new audio_engine().init();
  };

  Piano.prototype.play = function (note, vol, participant, delay_ms, lyric) {
    if (!this.keys.hasOwnProperty(note) || !participant) return;
    var key = this.keys[note];
    if (key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
    if (gMidiOutTest) gMidiOutTest(key.note, vol * 100, delay_ms, participant.id);
    var self = this;
    setTimeout(function () {
      self.renderer.visualize(key, participant.color);
      if (lyric) {

      }
      var jq_namediv = $(participant.nameDiv);
      jq_namediv.addClass("play");
      setTimeout(function () {
        jq_namediv.removeClass("play");
      }, 30);
    }, delay_ms || 0);
  };

  Piano.prototype.stop = function (note, participant, delay_ms) {
    if (!this.keys.hasOwnProperty(note)) return;
    var key = this.keys[note];
    if (key.loaded) this.audio.stop(key.note, delay_ms, participant.id);
    if (gMidiOutTest) gMidiOutTest(key.note, 0, delay_ms, participant.id);
  };

  var gPiano = new Piano(document.getElementById("piano"));

  var gSoundSelector = new SoundSelector(gPiano);
  gSoundSelector.addPacks(["/sounds/Emotional/", "/sounds/Emotional_2.0/", "/sounds/GreatAndSoftPiano/", "/sounds/HardAndToughPiano/", "/sounds/HardPiano/", "/sounds/Harp/", "/sounds/Harpsicord/", "/sounds/LoudAndProudPiano/", "/sounds/MLG/", "/sounds/Music_Box/", "/sounds/NewPiano/", "/sounds/Orchestra/", "/sounds/Piano2/", "/sounds/PianoSounds/", "/sounds/Rhodes_MK1/", "/sounds/SoftPiano/", "/sounds/Steinway_Grand/", "/sounds/Untitled/", "/sounds/Vintage_Upright/", "/sounds/Vintage_Upright_Soft/"]);
  //gSoundSelector.addPacks(["/sounds/Emotional_2.0/", "/sounds/Harp/", "/sounds/Music_Box/", "/sounds/Vintage_Upright/", "/sounds/Steinway_Grand/", "/sounds/Emotional/", "/sounds/Untitled/"]);
  gSoundSelector.init();







  var gAutoSustain = false;
  var gSustain = false;

  var gHeldNotes = {};
  var gSustainedNotes = {};


  function press(id, vol) {
    if (!gClient.preventsPlaying() && gNoteQuota.spend(1)) {
      gHeldNotes[id] = true;
      gSustainedNotes[id] = true;
      gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
      gClient.startNote(id, vol);
    }
  }

  function release(id) {
    if (gHeldNotes[id]) {
      gHeldNotes[id] = false;
      if ((gAutoSustain || gSustain) && !enableSynth) {
        gSustainedNotes[id] = true;
      } else {
        if (gNoteQuota.spend(1)) {
          gPiano.stop(id, gClient.getOwnParticipant(), 0);
          gClient.stopNote(id);
          gSustainedNotes[id] = false;
        }
      }
    }
  }

  function pressSustain() {
    gSustain = true;
  }

  function releaseSustain() {
    gSustain = false;
    if (!gAutoSustain) {
      for (var id in gSustainedNotes) {
        if (gSustainedNotes.hasOwnProperty(id) && gSustainedNotes[id] && !gHeldNotes[id]) {
          gSustainedNotes[id] = false;
          if (gNoteQuota.spend(1)) {
            gPiano.stop(id, gClient.getOwnParticipant(), 0);
            gClient.stopNote(id);
          }
        }
      }
    }
  }




  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function getRoomNameFromURL() {
    var channel_id = decodeURIComponent(window.location.pathname);
    if (channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
    if (!channel_id) {
      channel_id = getParameterByName("c");
    }
    if (!channel_id) channel_id = "lobby";
    return channel_id;
  }


  // internet science

  ////////////////////////////////////////////////////////////////

  var channel_id = getRoomNameFromURL();

  var loginInfo;
  if (getParameterByName("callback") === "discord") {
    var code = getParameterByName("code");
    if (code) {
      loginInfo = {
        type: "discord",
        code
      };
    }
    history.pushState({ "name": "lobby" }, "Piano > lobby", "/");
    channel_id = "lobby";
  }

  var wssport = 8080;
  if (window.location.hostname === "localhost") {
    var gClient = new Client("ws://localhost:8080");
  } else {
    var gClient = new Client('wss://port-8080-server-cocompp.preview.codeanywhere.com/');
  }
  if (loginInfo) {
    gClient.setLoginInfo(loginInfo);
  }
  gClient.setChannel(channel_id);

  gClient.on("disconnect", function (evt) {
    //console.log(evt);
  });


  var tabIsActive = true;
  var youreMentioned = false;

  window.addEventListener('focus', function (event) {
    tabIsActive = true;
    youreMentioned = false;
    var count = Object.keys(MPP.client.ppl).length;
    if (count > 0) {
      document.title = "Piano (" + count + ")";
    } else {
      document.title = "Multiplayer Piano";
    }
  });

  window.addEventListener('blur', function (event) {
    tabIsActive = false;
  });

  // Setting status
  (function () {
    gClient.on("status", function (status) {
      $("#status").text(status);
    });
    gClient.on("count", function (count) {
      if (count > 0) {
        $("#status").html('<span class="number">' + count + '</span> ' + (count == 1 ? 'person is' : 'people are') + ' playing');
        if (!tabIsActive && youreMentioned) return;
        document.title = "Piano (" + count + ")";
      } else {
        document.title = "Multiplayer Piano";
      }
    });
  })();

  // Show moderator buttons
  (function () {
    gClient.on("hi", function (msg) {
      if (gClient.permissions.clearChat) {
        $("#clearchat-btn").show();
      }
      if (gClient.permissions.vanish) {
        $("#vanish-btn").show();
      } else {
        $("#vanish-btn").hide();
      }
    });
  })();

  var participantTouchhandler; //declare this outside of the smaller functions so it can be used below and setup later

  // Handle changes to participants
  (function () {
    function setupParticipantDivs(part) {
      var hadNameDiv = Boolean(part.nameDiv);

      var nameDiv;
      if (hadNameDiv) {
        nameDiv = part.nameDiv;
        $(nameDiv).empty();
      } else {
        nameDiv = document.createElement("div");
        nameDiv.addEventListener("mousedown", e => participantTouchhandler(e, nameDiv));
        nameDiv.addEventListener("touchstart", e => participantTouchhandler(e, nameDiv));
        nameDiv.style.display = "none";
        $(nameDiv).fadeIn(2000);
        nameDiv.id = 'namediv-' + part._id;
        nameDiv.className = "name";
        nameDiv.participantId = part.id;
        $("#names")[0].appendChild(nameDiv);
        part.nameDiv = nameDiv;
      }
      nameDiv.style.backgroundColor = part.color || "#777";
      var tagText = typeof part.tag === 'object' ? part.tag.text : part.tag;
      if (tagText === 'BOT') nameDiv.title = 'This is an authorized bot.';
      if (tagText === 'MOD') nameDiv.title = 'This user is an official moderator of the site.';
      if (tagText === 'ADMIN') nameDiv.title = 'This user is an official administrator of the site.';
      if (tagText === 'OWNER') nameDiv.title = 'This user is the owner of the site.';
      if (tagText === 'MEDIA') nameDiv.title = 'This is a well known person on Twitch, Youtube, or another platform.';

      updateLabels(part);

      var hasOtherDiv = false;
      if (part.vanished) {
        hasOtherDiv = true;
        var vanishDiv = document.createElement("div");
        vanishDiv.className = "nametag";
        vanishDiv.textContent = 'VANISH';
        vanishDiv.style.backgroundColor = '#00ffcc';
        vanishDiv.id = 'namevanish-' + part._id;
        part.nameDiv.appendChild(vanishDiv);
      }
      if (part.tag) {
        hasOtherDiv = true;
        var tagDiv = document.createElement("div");
        tagDiv.className = "nametag";
        tagDiv.textContent = tagText || "";
        tagDiv.style.backgroundColor = tagColor(part.tag);
        tagDiv.id = 'nametag-' + part._id;
        part.nameDiv.appendChild(tagDiv);
      }

      var textDiv = document.createElement("div");
      textDiv.className = "nametext";
      textDiv.textContent = part.name || "";
      textDiv.id = 'nametext-' + part._id;
      if (hasOtherDiv) textDiv.style.float = 'left';
      part.nameDiv.appendChild(textDiv);

      var arr = $("#names .name");
      arr.sort(function (a, b) {
        if (a.id > b.id) return 1;
        else if (a.id < b.id) return -1;
        else return 0;
      });
      $("#names").html(arr);


    }
    gClient.on("participant added", function (part) {

      part.displayX = 150;
      part.displayY = 50;

      // add nameDiv
      setupParticipantDivs(part);

      // add cursorDiv
      if ((gClient.participantId !== part.id || gSeeOwnCursor) && !gCursorHides.includes(part.id) && !gHideAllCursors) {
        var div = document.createElement("div");
        div.className = "cursor";
        div.style.display = "none";
        part.cursorDiv = $("#cursors")[0].appendChild(div);
        $(part.cursorDiv).fadeIn(2000);

        var div = document.createElement("div");
        div.className = "name";
        div.style.backgroundColor = part.color || "#777"
        div.textContent = part.name || "";
        part.cursorDiv.appendChild(div);

      } else {
        part.cursorDiv = undefined;
      }
    });
    gClient.on("participant removed", function (part) {
      // remove nameDiv
      var nd = $(part.nameDiv);
      var cd = $(part.cursorDiv);
      cd.fadeOut(2000);
      nd.fadeOut(2000, function () {
        nd.remove();
        cd.remove();
        part.nameDiv = undefined;
        part.cursorDiv = undefined;
      });
    });
    gClient.on("participant update", function (part) {
      var name = part.name || "";
      var color = part.color || "#777";
      setupParticipantDivs(part);
      $(part.cursorDiv)
        .find(".name")
        .text(name)
        .css("background-color", color);
    });
    gClient.on("ch", function (msg) {
      for (var id in gClient.ppl) {
        if (gClient.ppl.hasOwnProperty(id)) {
          var part = gClient.ppl[id];
          updateLabels(part);
        }
      }
    });
    gClient.on("participant added", function (part) {
      updateLabels(part);
    });
    function updateLabels(part) {
      if (part.id === gClient.participantId) {
        $(part.nameDiv).addClass("me");
      } else {
        $(part.nameDiv).removeClass("me");
      }
      if (gClient.channel.crown && gClient.channel.crown.participantId === part.id) {
        $(part.nameDiv).addClass("owner");
        $(part.cursorDiv).addClass("owner");
      } else {
        $(part.nameDiv).removeClass("owner");
        $(part.cursorDiv).removeClass("owner");
      }
      if (gPianoMutes.indexOf(part._id) !== -1) {
        $(part.nameDiv).addClass("muted-notes");
      } else {
        $(part.nameDiv).removeClass("muted-notes");
      }
      if (gChatMutes.indexOf(part._id) !== -1) {
        $(part.nameDiv).addClass("muted-chat");
      } else {
        $(part.nameDiv).removeClass("muted-chat");
      }
    }
    function tagColor(tag) {
      if (typeof tag === 'object') return tag.color;
      if (tag === 'BOT') return '#55f';
      if (tag === 'OWNER') return '#a00';
      if (tag === 'ADMIN') return '#f55';
      if (tag === 'MOD') return '#0a0';
      if (tag === 'MEDIA') return '#f5f';
      return '#777';
    }
    function updateCursor(msg) {
      const part = gClient.ppl[msg.id];
      if (part && part.cursorDiv) {
        if (gSmoothCursor) {
          part.cursorDiv.style.transform = 'translate3d(' + msg.x + 'vw, ' + msg.y + 'vh, 0)';
        } else {
          part.cursorDiv.style.left = msg.x + "%";
          part.cursorDiv.style.top = msg.y + "%";
        }
      }
    }
    gClient.on("m", updateCursor);
    gClient.on("participant added", updateCursor);
  })();


  // Handle changes to crown
  (function () {
    var jqcrown = $('<div id="crown"></div>').appendTo(document.body).hide();
    var jqcountdown = $('<span></span>').appendTo(jqcrown);
    var countdown_interval;
    jqcrown.click(function () {
      gClient.sendArray([{ m: "chown", id: gClient.participantId }]);
    });
    gClient.on("ch", function (msg) {
      if (msg.ch.crown) {
        var crown = msg.ch.crown;
        if (!crown.participantId || !gClient.ppl[crown.participantId]) {
          var land_time = crown.time + 2000 - gClient.serverTimeOffset;
          var avail_time = crown.time + 15000 - gClient.serverTimeOffset;
          jqcountdown.text("");
          jqcrown.show();
          if (land_time - Date.now() <= 0) {
            jqcrown.css({ "left": crown.endPos.x + "%", "top": crown.endPos.y + "%" });
          } else {
            jqcrown.css({ "left": crown.startPos.x + "%", "top": crown.startPos.y + "%" });
            jqcrown.addClass("spin");
            jqcrown.animate({ "left": crown.endPos.x + "%", "top": crown.endPos.y + "%" }, 2000, "linear", function () {
              jqcrown.removeClass("spin");
            });
          }
          clearInterval(countdown_interval);
          countdown_interval = setInterval(function () {
            var time = Date.now();
            if (time >= land_time) {
              var ms = avail_time - time;
              if (ms > 0) {
                jqcountdown.text(Math.ceil(ms / 1000) + "s");
              } else {
                jqcountdown.text("");
                clearInterval(countdown_interval);
              }
            }
          }, 1000);
        } else {
          jqcrown.hide();
        }
      } else {
        jqcrown.hide();
      }
    });
    gClient.on("disconnect", function () {
      jqcrown.fadeOut(2000);
    });
  })();


  // Playing notes
  gClient.on("n", function (msg) {
    var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
    var participant = gClient.findParticipantById(msg.p);
    if (gPianoMutes.indexOf(participant._id) !== -1)
      return;
    for (var i = 0; i < msg.n.length; i++) {
      var note = msg.n[i];
      var ms = t + (note.d || 0);
      if (ms < 0) {
        ms = 0;
      }
      else if (ms > 10000) continue;
      if (note.s) {
        gPiano.stop(note.n, participant, ms);
      } else {
        var vel = (typeof note.v !== "undefined") ? parseFloat(note.v) : DEFAULT_VELOCITY;
        if (!vel) vel = 0;
        else if (vel < 0) vel = 0;
        else if (vel > 1) vel = 1;
        gPiano.play(note.n, vel, participant, ms);
        if (enableSynth) {
          gPiano.stop(note.n, participant, ms + 1000);
        }
      }
    }
  });

  // Send cursor updates
  var mx = 0, last_mx = -10, my = 0, last_my = -10;
  setInterval(function () {
    if (Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) {
      last_mx = mx;
      last_my = my;
      gClient.sendArray([{ m: "m", x: mx, y: my }]);
      if (gSeeOwnCursor) {
        gClient.emit("m", { m: "m", id: gClient.participantId, x: mx, y: my });
      }
      var part = gClient.getOwnParticipant();
      if (part) {
        part.x = mx;
        part.y = my;
      }
    }
  }, 50);
  $(document).mousemove(function (event) {
    mx = ((event.pageX / $(window).width()) * 100).toFixed(2);
    my = ((event.pageY / $(window).height()) * 100).toFixed(2);
  });


  // Room settings button
  (function () {
    gClient.on("ch", function (msg) {
      if (gClient.isOwner() || gClient.permissions.chsetAnywhere) {
        $("#room-settings-btn").show();
      } else {
        $("#room-settings-btn").hide();
      }
      if (!gClient.channel.settings.lobby && (gClient.permissions.chownAnywhere || gClient.channel.settings.owner_id === gClient.user._id)) {
        $("#getcrown-btn").show();
      } else {
        $("#getcrown-btn").hide();
      }
    });
    $("#room-settings-btn").click(function (evt) {
      if (gClient.channel && (gClient.isOwner() || gClient.permissions.chsetAnywhere)) {
        var settings = gClient.channel.settings;
        openModal("#room-settings");
        setTimeout(function () {
          $("#room-settings .checkbox[name=visible]").prop("checked", settings.visible);
          $("#room-settings .checkbox[name=chat]").prop("checked", settings.chat);
          $("#room-settings .checkbox[name=crownsolo]").prop("checked", settings.crownsolo);
          $("#room-settings .checkbox[name=nocussing]").prop("checked", settings["no cussing"]);
          $("#room-settings input[name=color]").val(settings.color);
          $("#room-settings input[name=color2]").val(settings.color2);
          $("#room-settings input[name=limit]").val(settings.limit);
        }, 100);
      }
    });
    $("#room-settings .submit").click(function () {
      var settings = {
        visible: $("#room-settings .checkbox[name=visible]").is(":checked"),
        chat: $("#room-settings .checkbox[name=chat]").is(":checked"),
        crownsolo: $("#room-settings .checkbox[name=crownsolo]").is(":checked"),
        "no cussing": $("#room-settings .checkbox[name=nocussing]").is(":checked"),
        color: $("#room-settings input[name=color]").val(),
        color2: $("#room-settings input[name=color2]").val(),
        limit: $("#room-settings input[name=limit]").val(),
      };
      gClient.setChannelSettings(settings);
      closeModal();
    });
    $("#room-settings .drop-crown").click(function () {
      closeModal();
      if (confirm("This will drop the crown...!"))
        gClient.sendArray([{ m: "chown" }]);
    });
  })();

  // Clear chat button
  $("#clearchat-btn").click(function (evt) {
    if (confirm("Are you sure you want to clear chat?")) gClient.sendArray([{ m: 'clearchat' }]);
  });

  // Get crown button
  $("#getcrown-btn").click(function (evt) {
    gClient.sendArray([{ m: 'chown', id: MPP.client.getOwnParticipant().id }]);
  });

  // Vanish or unvanish button
  $("#vanish-btn").click(function (evt) {
    gClient.sendArray([{ m: 'v', vanish: !gClient.getOwnParticipant().vanished }]);
  });
  gClient.on('participant update', part => {
    if (part._id === gClient.getOwnParticipant()._id) {
      if (part.vanished) {
        $("#vanish-btn").text('Unvanish');
      } else {
        $("#vanish-btn").text('Vanish');
      }
    }
  });
  gClient.on('participant added', part => {
    if (part._id === gClient.getOwnParticipant()._id) {
      if (part.vanished) {
        $("#vanish-btn").text('Unvanish');
      } else {
        $("#vanish-btn").text('Vanish');
      }
    }
  });

  // Handle notifications
  gClient.on("notification", function (msg) {
    new Notification(msg);
  });

  // Don't foget spin
  gClient.on("ch", function (msg) {
    var chidlo = msg.ch._id.toLowerCase();
    if (chidlo === "spin" || chidlo.substr(-5) === "/spin") {
      $("#piano").addClass("spin");
    } else {
      $("#piano").removeClass("spin");
    }
  });

  /*function eb() {
    if(gClient.channel && gClient.channel._id.toLowerCase() === "test/fishing") {
      ebsprite.start(gClient);
    } else {
      ebsprite.stop();
    }
  }
  if(ebsprite) {
    gClient.on("ch", eb);
    eb();
  }*/

  // Crownsolo notice
  gClient.on("ch", function (msg) {
    let notice = "";
    let has_notice = false;
    if (msg.ch.settings.crownsolo) {
      has_notice = true;
      notice += '<p>This room is set to "only the owner can play."</p>';
    }
    if (msg.ch.settings['no cussing']) {
      has_notice = true;
      notice += '<p>This room is set to "no cussing."</p>';
    }
    let notice_div = $("#room-notice");
    if (has_notice) {
      notice_div.html(notice);
      if (notice_div.is(':hidden')) notice_div.fadeIn(1000);
    } else {
      if (notice_div.is(':visible')) notice_div.fadeOut(1000);
    }
  });
  gClient.on("disconnect", function () {
    $("#room-notice").fadeOut(1000);
  });







  var gPianoMutes = (localStorage.pianoMutes ? localStorage.pianoMutes : "").split(',').filter(v => v);
  var gChatMutes = (localStorage.chatMutes ? localStorage.chatMutes : "").split(',').filter(v => v);
  var gShowIdsInChat = localStorage.showIdsInChat == "true";
  var gShowTimestampsInChat = localStorage.showTimestampsInChat == "true";
  var gNoChatColors = localStorage.noChatColors == "true";
  var gNoBackgroundColor = localStorage.noBackgroundColor == "true";
  var gOutputOwnNotes = localStorage.outputOwnNotes ? localStorage.outputOwnNotes == "true" : true;
  var gVirtualPianoLayout = localStorage.virtualPianoLayout == "true";
  var gSmoothCursor = localStorage.smoothCursor == "true";
  var gShowChatTooltips = localStorage.showChatTooltips ? localStorage.showChatTooltips == "true" : true;
  var gShowPianoNotes = localStorage.showPianoNotes == "true";
  var gHighlightScaleNotes = localStorage.highlightScaleNotes;
  var gCursorHides = (localStorage.cursorHides ? localStorage.cursorHides : "").split(',').filter(v => v);
  var gHideAllCursors = localStorage.hideAllCursors == "true";
  var gHidePiano = localStorage.hidePiano == "true";
  var gHideChat = localStorage.hideChat == "true";
  var gNoPreventDefault = localStorage.noPreventDefault == "true";
//   var gWarnOnLinks = localStorage.warnOnLinks ? loalStorage.warnOnLinks == "true" : true;



  // Hide piano attribute
  if (gHidePiano) {
    $("#piano").hide();
  } else {
    $("#piano").show();
  }

  // Hide chat attribute 
  if (gHideChat) {
    $("#chat").hide();
  } else {
    $("#chat").show();
  }



  // smooth cursor attribute

  if (gSmoothCursor) {
    $("#cursors").attr('smooth-cursors', '');
  } else {
    $("#cursors").removeAttr('smooth-cursors');
  }


  // Background color
  (function () {
    var old_color1 = new Color("#000000");
    var old_color2 = new Color("#000000");
    function setColor(hex, hex2) {
      var color1 = new Color(hex);
      var color2 = new Color(hex2 || hex);
      if (!hex2)
        color2.add(-0x40, -0x40, -0x40);

      var bottom = document.getElementById("bottom");

      var duration = 500;
      var step = 0;
      var steps = 30;
      var step_ms = duration / steps;
      var difference = new Color(color1.r, color1.g, color1.b);
      difference.r -= old_color1.r;
      difference.g -= old_color1.g;
      difference.b -= old_color1.b;
      var inc1 = new Color(difference.r / steps, difference.g / steps, difference.b / steps);
      difference = new Color(color2.r, color2.g, color2.b);
      difference.r -= old_color2.r;
      difference.g -= old_color2.g;
      difference.b -= old_color2.b;
      var inc2 = new Color(difference.r / steps, difference.g / steps, difference.b / steps);
      var iv;
      iv = setInterval(function () {
        old_color1.add(inc1.r, inc1.g, inc1.b);
        old_color2.add(inc2.r, inc2.g, inc2.b);
        document.body.style.background = "radial-gradient(ellipse at center, " + old_color1.toHexa() + " 0%," + old_color2.toHexa() + " 100%)";
        bottom.style.background = old_color2.toHexa();
        if (++step >= steps) {
          clearInterval(iv);
          old_color1 = color1;
          old_color2 = color2;
          document.body.style.background = "radial-gradient(ellipse at center, " + color1.toHexa() + " 0%," + color2.toHexa() + " 100%)";
          bottom.style.background = color2.toHexa();
        }
      }, step_ms);
    }

    function setColorToDefault() {
      setColor("#220022", "#000022");
    }

    window.setBackgroundColor = setColor;
    window.setBackgroundColorToDefault = setColorToDefault;

    setColorToDefault();

    gClient.on("ch", function (ch) {
      if (gNoBackgroundColor) {
        setColorToDefault();
        return;
      }
      if (ch.ch.settings) {
        if (ch.ch.settings.color) {
          setColor(ch.ch.settings.color, ch.ch.settings.color2);
        } else {
          setColorToDefault();
        }
      }
    });
  })();







  var volume_slider = document.getElementById("volume-slider");
  volume_slider.value = gPiano.audio.volume;
  $("#volume-label").text("Volume: " + Math.floor(gPiano.audio.volume * 100) + "%");
  volume_slider.addEventListener("input", function (evt) {
    var v = +volume_slider.value;
    gPiano.audio.setVolume(v);
    if (window.localStorage) localStorage.volume = v;
    $("#volume-label").text("Volume: " + Math.floor(v * 100) + "%");
  });




  var Note = function (note, octave) {
    this.note = note;
    this.octave = octave || 0;
  };



  var n = function (a, b) { return { note: new Note(a, b), held: false }; };

  var layouts = {
    MPP: {
      65: n("gs"),
      90: n("a"),
      83: n("as"),
      88: n("b"),
      67: n("c", 1),
      70: n("cs", 1),
      86: n("d", 1),
      71: n("ds", 1),
      66: n("e", 1),
      78: n("f", 1),
      74: n("fs", 1),
      77: n("g", 1),
      75: n("gs", 1),
      188: n("a", 1),
      76: n("as", 1),
      190: n("b", 1),
      191: n("c", 2),
      222: n("cs", 2),

      49: n("gs", 1),
      81: n("a", 1),
      50: n("as", 1),
      87: n("b", 1),
      69: n("c", 2),
      52: n("cs", 2),
      82: n("d", 2),
      53: n("ds", 2),
      84: n("e", 2),
      89: n("f", 2),
      55: n("fs", 2),
      85: n("g", 2),
      56: n("gs", 2),
      73: n("a", 2),
      57: n("as", 2),
      79: n("b", 2),
      80: n("c", 3),
      189: n("cs", 3),
      173: n("cs", 3), // firefox why
      219: n("d", 3),
      187: n("ds", 3),
      61: n("ds", 3), // firefox why
      221: n("e", 3)
    },
    VP: {
      112: n("c", -1),
      113: n("d", -1),
      114: n("e", -1),
      115: n("f", -1),
      116: n("g", -1),
      117: n("a", -1),
      118: n("b", -1),

      49: n("c"),
      50: n("d"),
      51: n("e"),
      52: n("f"),
      53: n("g"),
      54: n("a"),
      55: n("b"),
      56: n("c", 1),
      57: n("d", 1),
      48: n("e", 1),
      81: n("f", 1),
      87: n("g", 1),
      69: n("a", 1),
      82: n("b", 1),
      84: n("c", 2),
      89: n("d", 2),
      85: n("e", 2),
      73: n("f", 2),
      79: n("g", 2),
      80: n("a", 2),
      65: n("b", 2),
      83: n("c", 3),
      68: n("d", 3),
      70: n("e", 3),
      71: n("f", 3),
      72: n("g", 3),
      74: n("a", 3),
      75: n("b", 3),
      76: n("c", 4),
      90: n("d", 4),
      88: n("e", 4),
      67: n("f", 4),
      86: n("g", 4),
      66: n("a", 4),
      78: n("b", 4),
      77: n("c", 5),
    }
  }

  var key_binding = gVirtualPianoLayout ? layouts.VP : layouts.MPP;

  var capsLockKey = false;

  var transpose = 0;

  function handleKeyDown(evt) {
    if(evt.target.type) return;
    //console.log(evt);
    var code = parseInt(evt.keyCode);
    if (key_binding[code] !== undefined) {
      var binding = key_binding[code];
      if (!binding.held) {
        binding.held = true;

        var note = binding.note;
        var octave = 1 + note.octave;
        if (!gVirtualPianoLayout) {
          if (evt.shiftKey) ++octave;
          else if (capsLockKey || evt.ctrlKey) --octave;
          else if (evt.altKey) octave += 2;
        }
        note = note.note + octave;
        var index = Object.keys(gPiano.keys).indexOf(note);
        if (gVirtualPianoLayout && evt.shiftKey) {
          note = Object.keys(gPiano.keys)[index + transpose + 1];
        }
        else note = Object.keys(gPiano.keys)[index + transpose];
        if (note === undefined) return;
        var vol = velocityFromMouseY();
        press(note, vol);
      }

      if (++gKeyboardSeq == 3) {
        gKnowsYouCanUseKeyboard = true;
        if (window.gKnowsYouCanUseKeyboardTimeout) clearTimeout(gKnowsYouCanUseKeyboardTimeout);
        if (localStorage) localStorage.knowsYouCanUseKeyboard = true;
        if (window.gKnowsYouCanUseKeyboardNotification) gKnowsYouCanUseKeyboardNotification.close();
      }

      if (!gNoPreventDefault) evt.preventDefault();
      evt.stopPropagation();
      return false;
    } else if (code == 20) { // Caps Lock
      capsLockKey = true;
      if (!gNoPreventDefault) evt.preventDefault();
    } else if (code === 0x20) { // Space Bar
      pressSustain();
      if (!gNoPreventDefault) evt.preventDefault();
    } else if (code === 38 && transpose <= 100) {
      transpose += 12;
      sendTransposeNotif();
    } else if (code === 40 && transpose >= -100) {
      transpose -= 12;
      sendTransposeNotif();
    } else if (code === 39 && transpose < 100) {
      transpose++;
      sendTransposeNotif();
    } else if (code === 37 && transpose > -100) {
      transpose--;
      sendTransposeNotif();
    } else if (code == 9) { // Tab (don't tab away from the piano)
      if (!gNoPreventDefault) evt.preventDefault();
    } else if (code == 8) { // Backspace (don't navigate Back)
      gAutoSustain = !gAutoSustain;
      if (!gNoPreventDefault) evt.preventDefault();
    }
  };

  function sendTransposeNotif() {
    new Notification({
      title: 'Transposing',
      html: 'Transpose level: ' + transpose,
      target: '#midi-btn',
      duration: 1500
    });
  }

  function handleKeyUp(evt) {
    if(evt.target.type) return;
    var code = parseInt(evt.keyCode);
    if (key_binding[code] !== undefined) {
      var binding = key_binding[code];
      if (binding.held) {
        binding.held = false;

        var note = binding.note;
        var octave = 1 + note.octave;
        if (!gVirtualPianoLayout) {
          if (evt.shiftKey) ++octave;
          else if (capsLockKey || evt.ctrlKey) --octave;
          else if (evt.altKey) octave += 2;
        }
        note = note.note + octave;
        var index = Object.keys(gPiano.keys).indexOf(note);
        if (gVirtualPianoLayout && evt.shiftKey) {
          note = Object.keys(gPiano.keys)[index + transpose + 1];
        }
        else note = Object.keys(gPiano.keys)[index + transpose];
        if (note === undefined) return;
        release(note);
      }

      if (!gNoPreventDefault) evt.preventDefault();
      evt.stopPropagation();
      return false;
    } else if (code == 20) { // Caps Lock
      capsLockKey = false;
      if (!gNoPreventDefault) evt.preventDefault();
    } else if (code === 0x20) { // Space Bar
      releaseSustain();
      if (!gNoPreventDefault) evt.preventDefault();
    }
  };

  function handleKeyPress(evt) {
    if(evt.target.type) return;
    if (!gNoPreventDefault) evt.preventDefault();
    evt.stopPropagation();
    if (evt.keyCode == 27 || evt.keyCode == 13) {
      //$("#chat input").focus();
    }
    return false;
  };

  var recapListener = function (evt) {
    captureKeyboard();
  };

  var capturingKeyboard = false;

  function captureKeyboard() {
    if (!capturingKeyboard) {
      capturingKeyboard = true;
      $("#piano").off("mousedown", recapListener);
      $("#piano").off("touchstart", recapListener);
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      $(window).on("keypress", handleKeyPress);
    }
  };

  function releaseKeyboard() {
    if (capturingKeyboard) {
      capturingKeyboard = false;
      $(document).off("keydown", handleKeyDown);
      $(document).off("keyup", handleKeyUp);
      $(window).off("keypress", handleKeyPress);
      $("#piano").on("mousedown", recapListener);
      $("#piano").on("touchstart", recapListener);
    }
  };

  captureKeyboard();


  var velocityFromMouseY = function () {
    return 0.1 + (my / 100) * 0.6;
  };





  // NoteQuota
  var gNoteQuota = (function () {
    var last_rat = 0;
    var nqjq = $("#quota .value");
    setInterval(function () {
      gNoteQuota.tick();
    }, 2000);
    return new NoteQuota(function (points) {
      // update UI
      var rat = (points / this.max) * 100;
      if (rat <= last_rat)
        nqjq.stop(true, true).css("width", rat.toFixed(0) + "%");
      else
        nqjq.stop(true, true).animate({ "width": rat.toFixed(0) + "%" }, 2000, "linear");
      last_rat = rat;
    });
  })();
  gClient.on("nq", function (nq_params) {
    gNoteQuota.setParams(nq_params);
  });
  gClient.on("disconnect", function () {
    gNoteQuota.setParams(NoteQuota.PARAMS_OFFLINE);
  });

  //DMs
  var gDmParticipant;
  var gIsDming = false;
  var gKnowsHowToDm = localStorage.knowsHowToDm === "true";
  gClient.on('participant removed', part => {
    if (gIsDming && part._id === gDmParticipant._id) {
      gIsDming = false;
      $('#chat-input')[0].placeholder = 'You can chat with this thing.';
    }
  });

  // click participant names
  (function () {
    participantTouchhandler = function (e, ele) {
      var target = ele;
      var target_jq = $(target);
      if (!target_jq) return;
      if (target_jq.hasClass("name")) {
        target_jq.addClass("play");
        var id = target.participantId;
        if (id == gClient.participantId) {
          openModal("#rename", "input[name=name]");
          setTimeout(function () {
            $("#rename input[name=name]").val(gClient.ppl[gClient.participantId].name);
            $("#rename input[name=color]").val(gClient.ppl[gClient.participantId].color);
          }, 100);
        } else if (id) {
          var part = gClient.ppl[id] || null;
          if (part) {
            participantMenu(part);
            e.stopPropagation();
          }
        }
      }
    };
    var releasehandler = function (e) {
      $("#names .name").removeClass("play");
    };
    document.body.addEventListener("mouseup", releasehandler);
    document.body.addEventListener("touchend", releasehandler);

    var removeParticipantMenus = function () {
      $(".participant-menu").remove();
      $(".participantSpotlight").hide();
      document.removeEventListener("mousedown", removeParticipantMenus);
      document.removeEventListener("touchstart", removeParticipantMenus);
    };

    var participantMenu = function (part) {
      if (!part) return;
      removeParticipantMenus();
      document.addEventListener("mousedown", removeParticipantMenus);
      document.addEventListener("touchstart", removeParticipantMenus);
      $("#" + part.id).find(".enemySpotlight").show();
      var menu = $('<div class="participant-menu"></div>');
      $("body").append(menu);
      // move menu to name position
      var jq_nd = $(part.nameDiv);
      var pos = jq_nd.position();
      menu.css({
        "top": pos.top + jq_nd.height() + 15,
        "left": pos.left + 6,
        "background": part.color || "black"
      });
      menu.on("mousedown touchstart", function (evt) {
        evt.stopPropagation();
        var target = $(evt.target);
        if (target.hasClass("menu-item")) {
          target.addClass("clicked");
          menu.fadeOut(200, function () {
            removeParticipantMenus();
          });
        }
      });
      // this spaces stuff out but also can be used for informational
      $('<div class="info"></div>').appendTo(menu).text(part._id).on("mousedown touchstart", evt => {
          navigator.clipboard.writeText(part._id);
          evt.target.innerText = "Copied!";
      });
      // add menu items
      if (gPianoMutes.indexOf(part._id) == -1) {
        $('<div class="menu-item">Mute Notes</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            gPianoMutes.push(part._id);
            if (localStorage) localStorage.pianoMutes = gPianoMutes.join(',');
            $(part.nameDiv).addClass("muted-notes");
          });
      } else {
        $('<div class="menu-item">Unmute Notes</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            var i;
            while ((i = gPianoMutes.indexOf(part._id)) != -1)
              gPianoMutes.splice(i, 1);
            if (localStorage) localStorage.pianoMutes = gPianoMutes.join(',');
            $(part.nameDiv).removeClass("muted-notes");
          });
      }
      if (gChatMutes.indexOf(part._id) == -1) {
        $('<div class="menu-item">Mute Chat</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            gChatMutes.push(part._id);
            if (localStorage) localStorage.chatMutes = gChatMutes.join(',');
            $(part.nameDiv).addClass("muted-chat");
          });
      } else {
        $('<div class="menu-item">Unmute Chat</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            var i;
            while ((i = gChatMutes.indexOf(part._id)) != -1)
              gChatMutes.splice(i, 1);
            if (localStorage) localStorage.chatMutes = gChatMutes.join(',');
            $(part.nameDiv).removeClass("muted-chat");
          });
      }
      if (!(gPianoMutes.indexOf(part._id) >= 0) || !(gChatMutes.indexOf(part._id) >= 0)) {
        $('<div class="menu-item">Mute Completely</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            gPianoMutes.push(part._id);
            if (localStorage) localStorage.pianoMutes = gPianoMutes.join(',');
            gf
            Mutes.push(part._id);
            if (localStorage) localStorage.chatMutes = gChatMutes.join(',');
            $(part.nameDiv).addClass("muted-notes");
            $(part.nameDiv).addClass("muted-chat");
          });
      }
      if ((gPianoMutes.indexOf(part._id) >= 0) || (gChatMutes.indexOf(part._id) >= 0)) {
        $('<div class="menu-item">Unmute Completely</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            var i;
            while ((i = gPianoMutes.indexOf(part._id)) != -1)
              gPianoMutes.splice(i, 1);
            while ((i = gChatMutes.indexOf(part._id)) != -1)
              gChatMutes.splice(i, 1);
            if (localStorage) localStorage.pianoMutes = gPianoMutes.join(',');
            if (localStorage) localStorage.chatMutes = gChatMutes.join(',');
            $(part.nameDiv).removeClass("muted-notes");
            $(part.nameDiv).removeClass("muted-chat");
          });
      }
      if (gIsDming && gDmParticipant._id === part._id) {
        $('<div class="menu-item">End Direct Message</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            gIsDming = false;
            $('#chat-input')[0].placeholder = 'You can chat with this thing.';
          });
      } else {
        $('<div class="menu-item">Direct Message</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            if (!gKnowsHowToDm) {
              localStorage.knowsHowToDm = true;
              gKnowsHowToDm = true;
              new Notification({
                target: '#piano',
                duration: 20000,
                title: 'How to DM',
                text: 'After you click the button to direct message someone, future chat messages will be sent to them instead of to everyone. To go back to talking in public chat, send a blank chat message, or click the button again.',
              });
            }
            gIsDming = true;
            gDmParticipant = part;
            $('#chat-input')[0].placeholder = 'Direct messaging ' + part.name + '.';
          });
      }
      if (gCursorHides.indexOf(part._id) == -1) {
          $('<div class="menu-item">Hide Cursor</div>').appendTo(menu)
            .on("mousedown touchstart", function (evt) {
              gCursorHides.push(part._id);
              if (localStorage) localStorage.cursorHides = gCursorHides.join(',');
              $(part.cursorDiv).hide();
            });
        } else {
          $('<div class="menu-item">Show Cursor</div>').appendTo(menu)
            .on("mousedown touchstart", function (evt) {
              var i;
              while ((i = gCursorHides.indexOf(part._id)) != -1)
              gCursorHides.splice(i, 1);
              if (localStorage) localStorage.cursorHides = gCursorHides.join(',');
              $(part.cursorDiv).show();
            });
        }

      $('<div class="menu-item">Mention</div>').appendTo(menu)
        .on("mousedown touchstart", function (evt) {
          $('#chat-input')[0].value += '@' + part.id + ' ';
          setTimeout(() => {
            $('#chat-input').focus();
          }, 1);
        });

      if (gClient.isOwner() || gClient.permissions.chownAnywhere) {
        if (!gClient.channel.settings.lobby) {
          $('<div class="menu-item give-crown">Give Crown</div>').appendTo(menu)
            .on("mousedown touchstart", function (evt) {
              if (confirm("Give room ownership to " + part.name + "?"))
                gClient.sendArray([{ m: "chown", id: part.id }]);
            });
        }
        $('<div class="menu-item kickban">Kickban</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            var minutes = prompt("How many minutes? (0-300)", "30");
            if (minutes === null) return;
            minutes = parseFloat(minutes) || 0;
            var ms = minutes * 60 * 1000;
            gClient.sendArray([{ m: "kickban", _id: part._id, ms: ms }]);
          });
      }
      if (gClient.permissions.siteBan) {
        $('<div class="menu-item site-ban">Site Ban</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            openModal("#siteban");
            setTimeout(function () {
              $("#siteban input[name=id]").val(part._id);
              $("#siteban input[name=reasonText]").val("Discrimination against others");
              $("#siteban input[name=reasonText]").attr("disabled", true);
              $("#siteban select[name=reasonSelect]").val("Discrimination against others");
              $("#siteban input[name=durationNumber]").val(5);
              $("#siteban input[name=durationNumber]").attr("disabled", false);
              $("#siteban select[name=durationUnit]").val("hours");
              $("#siteban textarea[name=note]").val("");
              $("#siteban p[name=errorText]").text("")
              if (gClient.permissions.siteBanAnyReason) {
                $("#siteban select[name=reasonSelect] option[value=custom]").attr("disabled", false);
              } else {
                $("#siteban select[name=reasonSelect] option[value=custom]").attr("disabled", true);
              }
            }, 100);
          });
      }
      if (gClient.permissions.usersetOthers) {
        $('<div class="menu-item set-color">Set Color</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            var color = prompt("What color?", part.color);
            if (color === null) return;
            gClient.sendArray([{ m: "setcolor", _id: part._id, color: color }]);
          });
      }
      if (gClient.permissions.usersetOthers) {
        $('<div class="menu-item set-name">Set Name</div>').appendTo(menu)
          .on("mousedown touchstart", function (evt) {
            var name = prompt("What name?", part.name);
            if (name === null) return;
            gClient.sendArray([{ m: "setname", _id: part._id, name: name }]);
          });
      }
      menu.fadeIn(100);
    };
  })();
















  // Notification class

  ////////////////////////////////////////////////////////////////

  var Notification = function (par) {
    if (this instanceof Notification === false) throw ("yeet");
    EventEmitter.call(this);

    var par = par || {};

    this.id = "Notification-" + (par.id || Math.random());
    this.title = par.title || "";
    this.text = par.text || "";
    this.html = par.html || "";
    this.target = $(par.target || "#piano");
    this.duration = par.duration || 30000;
    this["class"] = par["class"] || "classic";

    var self = this;
    var eles = $("#" + this.id);
    if (eles.length > 0) {
      eles.remove();
    }
    this.domElement = $('<div class="notification"><div class="notification-body"><div class="title"></div>' +
      '<div class="text"></div></div><div class="x">X</div></div>');
    this.domElement[0].id = this.id;
    this.domElement.addClass(this["class"]);
    this.domElement.find(".title").text(this.title);
    if (this.text.length > 0) {
      this.domElement.find(".text").text(this.text);
    } else if (this.html instanceof HTMLElement) {
      this.domElement.find(".text")[0].appendChild(this.html);
    } else if (this.html.length > 0) {
      this.domElement.find(".text").html(this.html);
    }
    document.body.appendChild(this.domElement.get(0));

    this.position();
    this.onresize = function () {
      self.position();
    };
    window.addEventListener("resize", this.onresize);

    this.domElement.find(".x").click(function () {
      self.close();
    });

    if (this.duration > 0) {
      setTimeout(function () {
        self.close();
      }, this.duration);
    }

    return this;
  }

  mixin(Notification.prototype, EventEmitter.prototype);
  Notification.prototype.constructor = Notification;

  Notification.prototype.position = function () {
    var pos = this.target.offset();
    var x = pos.left - (this.domElement.width() / 2) + (this.target.width() / 4);
    var y = pos.top - this.domElement.height() - 8;
    var width = this.domElement.width();
    if (x + width > $("body").width()) {
      x -= ((x + width) - $("body").width());
    }
    if (x < 0) x = 0;
    this.domElement.offset({ left: x, top: y });
  };

  Notification.prototype.close = function () {
    var self = this;
    window.removeEventListener("resize", this.onresize);
    this.domElement.fadeOut(500, function () {
      self.domElement.remove();
      self.emit("close");
    });
  };















  // set variables from settings or set settings

  ////////////////////////////////////////////////////////////////

  var gKeyboardSeq = 0;
  var gKnowsYouCanUseKeyboard = false;
  if (localStorage && localStorage.knowsYouCanUseKeyboard) gKnowsYouCanUseKeyboard = true;
  if (!gKnowsYouCanUseKeyboard) {
    window.gKnowsYouCanUseKeyboardTimeout = setTimeout(function () {
      window.gKnowsYouCanUseKeyboardNotification = new Notification({
        title: "Did you know!?!",
        text: "You can play the piano with your keyboard, too.  Try it!", target: "#piano", duration: 10000
      });
    }, 30000);
  }




  if (window.localStorage) {

    if (localStorage.volume) {
      volume_slider.value = localStorage.volume;
      gPiano.audio.setVolume(localStorage.volume);
      $("#volume-label").text("Volume: " + Math.floor(gPiano.audio.volume * 100) + "%");
    }
    else localStorage.volume = gPiano.audio.volume;

    window.gHasBeenHereBefore = (localStorage.gHasBeenHereBefore || false);
    if (gHasBeenHereBefore) {
    }
    localStorage.gHasBeenHereBefore = true;

  }




  // warn user about loud noises before starting sound (no autoplay)
  openModal("#sound-warning");
  $(document).off("keydown", modalHandleEsc);
  var user_interact = function (evt) {
    if ((evt.path || (evt.composedPath && evt.composedPath())).includes(document.getElementById('sound-warning')) || evt.target === document.getElementById('sound-warning')) {
      closeModal();
    }
    document.removeEventListener("click", user_interact);
    gPiano.audio.resume();
  }
  document.addEventListener("click", user_interact);













  // New room, change room

  ////////////////////////////////////////////////////////////////

  $("#room > .info").text("--");
  gClient.on("ch", function (msg) {
    var channel = msg.ch;
    var info = $("#room > .info");
    info.text(channel._id);
    if (channel.settings.lobby) info.addClass("lobby");
    else info.removeClass("lobby");
    if (!channel.settings.chat) info.addClass("no-chat");
    else info.removeClass("no-chat");
    if (channel.settings.crownsolo) info.addClass("crownsolo");
    else info.removeClass("crownsolo");
    if (channel.settings['no cussing']) info.addClass("no-cussing");
    else info.removeClass("no-cussing");
    if (!channel.settings.visible) info.addClass("not-visible");
    else info.removeClass("not-visible");
  });
  gClient.on("ls", function (ls) {
    for (var i in ls.u) {
      if (!ls.u.hasOwnProperty(i)) continue;
      var room = ls.u[i];
      var info = $("#room .info[roomname=\"" + (room._id + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0') + "\"]");
      if (info.length == 0) {
        info = $("<div class=\"info\"></div>");
        info.attr("roomname", room._id);
        $("#room .more").append(info);
      }
      info.text(room.count + '/' + ('limit' in room.settings ? room.settings.limit : 20) + " " + room._id);
      if (room.settings.lobby) info.addClass("lobby");
      else info.removeClass("lobby");
      if (!room.settings.chat) info.addClass("no-chat");
      else info.removeClass("no-chat");
      if (room.settings.crownsolo) info.addClass("crownsolo");
      else info.removeClass("crownsolo");
      if (room.settings['no cussing']) info.addClass("no-cussing");
      else info.removeClass("no-cussing");
      if (!room.settings.visible) info.addClass("not-visible");
      else info.removeClass("not-visible");
      if (room.banned) info.addClass("banned");
      else info.removeClass("banned");
    }
  });
  $("#room").on("click", function (evt) {
    evt.stopPropagation();

    // clicks on a new room
    if ($(evt.target).hasClass("info") && $(evt.target).parents(".more").length) {
      $("#room .more").fadeOut(250);
      var selected_name = $(evt.target).attr("roomname");
      if (typeof selected_name != "undefined") {
        changeRoom(selected_name, "right");
      }
      return false;
    }
    // clicks on "New Room..."
    else if ($(evt.target).hasClass("new")) {
      openModal("#new-room", "input[name=name]");
    }
    // all other clicks
    var doc_click = function (evt) {
      if ($(evt.target).is("#room .more")) return;
      $(document).off("mousedown", doc_click);
      $("#room .more").fadeOut(250);
      gClient.sendArray([{ m: "-ls" }]);
    }
    $(document).on("mousedown", doc_click);
    $("#room .more .info").remove();
    $("#room .more").show();
    gClient.sendArray([{ m: "+ls" }]);
  });
  $("#new-room-btn").on("click", function (evt) {
    evt.stopPropagation();
    openModal("#new-room", "input[name=name]");
  });


  $("#play-alone-btn").on("click", function (evt) {
    evt.stopPropagation();
    var room_name = "Room" + Math.floor(Math.random() * 1000000000000);
    changeRoom(room_name, "right", { "visible": false });
    setTimeout(function () {
      new Notification({ id: "share", title: "Playing alone", html: 'You are playing alone in a room by yourself, but you can always invite friends by sending them the link.<br><a href="' + location.href + '">' + location.href + '</a>', duration: 25000 });
    }, 1000);
  });





  var gModal;

  function modalHandleEsc(evt) {
    if (evt.keyCode == 27) {
      closeModal();
      if (!gNoPreventDefault) evt.preventDefault();
      evt.stopPropagation();
    }
  };

  function openModal(selector, focus) {
    if (chat) chat.blur();
    releaseKeyboard();
    $(document).on("keydown", modalHandleEsc);
    $("#modal #modals > *").hide();
    $("#modal").fadeIn(250);
    $(selector).show();
    setTimeout(function () {
      $(selector).find(focus).focus();
    }, 100);
    gModal = selector;
  };

  function closeModal() {
    $(document).off("keydown", modalHandleEsc);
    $("#modal").fadeOut(100);
    $("#modal #modals > *").hide();
    captureKeyboard();
    gModal = null;
  };

  var modal_bg = $("#modal .bg")[0];
  $(modal_bg).on("click", function (evt) {
    if (evt.target != modal_bg) return;
    closeModal();
  });

  (function () {
    function submit() {
      var name = $("#new-room .text[name=name]").val();
      var settings = {
        visible: $("#new-room .checkbox[name=visible]").is(":checked"),
        chat: true
      };
      $("#new-room .text[name=name]").val("");
      closeModal();
      changeRoom(name, "right", settings);
      setTimeout(function () {
        new Notification({ id: "share", title: "Created a Room", html: 'You can invite friends to your room by sending them the link.<br><a href="' + location.href + '">' + location.href + '</a>', duration: 25000 });
      }, 1000);
    };
    $("#new-room .submit").click(function (evt) {
      submit();
    });
    $("#new-room .text[name=name]").keypress(function (evt) {
      if (evt.keyCode == 13) {
        submit();
      } else if (evt.keyCode == 27) {
        closeModal();
      } else {
        return;
      }
      if (!gNoPreventDefault) evt.preventDefault();
      evt.stopPropagation();
      return false;
    });
  })();








  function changeRoom(name, direction, settings, push) {
    if (!settings) settings = {};
    if (!direction) direction = "right";
    if (typeof push == "undefined") push = true;
    var opposite = direction == "left" ? "right" : "left";

    if (name == "") name = "lobby";
    if (gClient.channel && gClient.channel._id === name) return;
    if (push) {
      var url = "/?c=" + encodeURIComponent(name).replace("'", "%27");
      if (window.history && history.pushState) {
        history.pushState({ "depth": gHistoryDepth += 1, "name": name }, "Piano > " + name, url);
      } else {
        window.location = url;
        return;
      }
    }

    gClient.setChannel(name, settings);

    var t = 0, d = 100;
    $("#piano").addClass("ease-out").addClass("slide-" + opposite);
    setTimeout(function () {
      $("#piano").removeClass("ease-out").removeClass("slide-" + opposite).addClass("slide-" + direction);
    }, t += d);
    setTimeout(function () {
      $("#piano").addClass("ease-in").removeClass("slide-" + direction);
    }, t += d);
    setTimeout(function () {
      $("#piano").removeClass("ease-in");
    }, t += d);
  };

  var gHistoryDepth = 0;
  $(window).on("popstate", function (evt) {
    var depth = evt.state ? evt.state.depth : 0;
    //if (depth == gHistoryDepth) return; // <-- forgot why I did that though...
    //yeah brandon idk why you did that either, but it's stopping the back button from changing rooms after 1 click so I commented it out

    var direction = depth <= gHistoryDepth ? "left" : "right";
    gHistoryDepth = depth;

    var name = getRoomNameFromURL();
    changeRoom(name, direction, null, false);
  });




















  // Rename

  ////////////////////////////////////////////////////////////////

  (function () {
    function submit() {
      var set = {
        name: $("#rename input[name=name]").val(),
        color: $("#rename input[name=color]").val()
      };
      //$("#rename .text[name=name]").val("");
      closeModal();
      gClient.sendArray([{ m: "userset", set: set }]);
    };
    $("#rename .submit").click(function (evt) {
      submit();
    });
    $("#rename .text[name=name]").keypress(function (evt) {
      if (evt.keyCode == 13) {
        submit();
      } else if (evt.keyCode == 27) {
        closeModal();
      } else {
        return;
      }
      if (!gNoPreventDefault) evt.preventDefault();
      evt.stopPropagation();
      return false;
    });
  })();









  //site-wide bans
  (function () {
    function submit() {
      var msg = { m: "siteban" };

      msg.id = $("#siteban .text[name=id]").val();

      var durationUnit = $("#siteban select[name=durationUnit]").val();
      if (durationUnit === "permanent") {
        if (!gClient.permissions.siteBanAnyDuration) {
          $("#siteban p[name=errorText]").text("You don't have permission to ban longer than 1 month. Contact a higher staff to ban the user for longer.");
          return;
        }
        msg.permanent = true;
      } else {
        var factor = 0;
        switch (durationUnit) {
          case "seconds": factor = 1000; break;
          case "minutes": factor = 1000 * 60; break;
          case "hours": factor = 1000 * 60 * 60; break;
          case "days": factor = 1000 * 60 * 60 * 24; break;
          case "weeks": factor = 1000 * 60 * 60 * 24 * 7; break;
          case "months": factor = 1000 * 60 * 60 * 24 * 30; break;
          case "years": factor = 1000 * 60 * 60 * 24 * 365; break;
        }
        var duration = factor * parseFloat($("#siteban input[name=durationNumber]").val());
        if (duration < 0) {
          $("#siteban p[name=errorText]").text("Invalid duration.");
          return;
        }
        if (duration > 1000 * 60 * 60 * 24 * 30 && !gClient.permissions.siteBanAnyDuration) {
          $("#siteban p[name=errorText]").text("You don't have permission to ban longer than 1 month. Contact a higher staff to ban the user for longer.");
          return;
        }
        msg.duration = duration;
      }

      var reason;
      if ($("#siteban select[name=reasonSelect]").val() === "custom") {
        reason = $("#siteban .text[name=reasonText]").val();
        if (reason.length === 0) {
          $("#siteban p[name=errorText]").text("Please provide a reason.");
          return;
        }
      } else {
        reason = $("#siteban select[name=reasonSelect]").val();
      }
      msg.reason = reason;

      var note = $("#siteban textarea[name=note]").val();
      if (note) {
        msg.note = note;
      }

      closeModal();
      gClient.sendArray([msg]);
    };
    $("#siteban .submit").click(function (evt) {
      submit();
    });
    $("#siteban select[name=reasonSelect]").change(function (evt) {
      if (this.value === "custom") {
        $("#siteban .text[name=reasonText]").attr("disabled", false);
        $("#siteban .text[name=reasonText]").val("");
      } else {
        $("#siteban .text[name=reasonText]").attr("disabled", true);
        $("#siteban .text[name=reasonText]").val(this.value);
      }
    });
    $("#siteban select[name=durationUnit]").change(function (evt) {
      if (this.value === "permanent") {
        $("#siteban .text[name=durationNumber]").attr("disabled", true);
      } else {
        $("#siteban .text[name=durationNumber]").attr("disabled", false);
      }
    });
    $("#siteban .text[name=id]").keypress(textKeypressEvent);
    $("#siteban .text[name=reasonText]").keypress(textKeypressEvent);
    $("#siteban .text[name=note]").keypress(textKeypressEvent);
    function textKeypressEvent(evt) {
      if (evt.keyCode == 13) {
        submit();
      } else if (evt.keyCode == 27) {
        closeModal();
      } else {
        return;
      }
      if (!gNoPreventDefault) evt.preventDefault();
      evt.stopPropagation();
      return false;
    }
  })();








  //Accounts

  (function () {
    function logout() {
      delete localStorage.token;
      gClient.stop();
      gClient.start();
      closeModal();
    }
    $("#account .logout-btn").click(function (evt) {
      logout();
    });
    $("#account .login-discord").click(function (evt) {
      if (location.hostname === "localhost") {
        location.replace("https://discord.com/api/oauth2/authorize?client_id=926633278100877393&redirect_uri=http%3A%2F%2Flocalhost%2F%3Fcallback%3Ddiscord&response_type=code&scope=identify");
      } else {
        location.replace("https://discord.com/api/oauth2/authorize?client_id=926633278100877393&redirect_uri=https%3A%2F%2Fmppclone.com%2F%3Fcallback%3Ddiscord&response_type=code&scope=identify");
      }
    });
  })();















  // chatctor

  ////////////////////////////////////////////////////////////////

  var chat = (function () {
    gClient.on("ch", function (msg) {
      if (msg.ch.settings.chat) {
        chat.show();
      } else {
        chat.hide();
      }
    });
    gClient.on("disconnect", function (msg) {

    });
    gClient.on("c", function (msg) {
      chat.clear();
      if (msg.c) {
        for (var i = 0; i < msg.c.length; i++) {
          chat.receive(msg.c[i]);
        }
      }
    });
    gClient.on("a", function (msg) {
      chat.receive(msg);
    });
    gClient.on("dm", function (msg) {
      chat.receive(msg);
    });

    $("#chat input").on("focus", function (evt) {
      releaseKeyboard();
      $("#chat").addClass("chatting");
      chat.scrollToBottom();
    });
    /*$("#chat input").on("blur", function(evt) {
      captureKeyboard();
      $("#chat").removeClass("chatting");
      chat.scrollToBottom();
    });*/
    $(document).mousedown(function (evt) {
      if (!$("#chat").has(evt.target).length > 0) {
        chat.blur();
      }
    });
    document.addEventListener("touchstart", function (event) {
      for (var i in event.changedTouches) {
        var touch = event.changedTouches[i];
        if (!$("#chat").has(touch.target).length > 0) {
          chat.blur();
        }
      }
    });
    $(document).on("keydown", function (evt) {
      if ($("#chat").hasClass("chatting")) {
        if (evt.keyCode == 27) {
          chat.blur();
          if (!gNoPreventDefault) evt.preventDefault();
          evt.stopPropagation();
        } else if (evt.keyCode == 13) {
          $("#chat input").focus();
        }
      } else if (!gModal && (evt.keyCode == 27 || evt.keyCode == 13)) {
        $("#chat input").focus();
      }
    });
    $("#chat input").on("keydown", function (evt) {
      if (evt.keyCode == 13) {
        if (MPP.client.isConnected()) {
          var message = $(this).val();
          if (message.length == 0) {
            if (gIsDming) {
              gIsDming = false;
              $('#chat-input')[0].placeholder = 'You can chat with this thing.';
            }
            setTimeout(function () {
              chat.blur();
            }, 100);
          } else {
            chat.send(message);
            $(this).val("");
            setTimeout(function () {
              chat.blur();
            }, 100);
          }
        }
        if (!gNoPreventDefault) evt.preventDefault();
        evt.stopPropagation();
      } else if (evt.keyCode == 27) {
        chat.blur();
        if (!gNoPreventDefault) evt.preventDefault();
        evt.stopPropagation();
      } else if (evt.keyCode == 9) {
        if (!gNoPreventDefault) evt.preventDefault();
        evt.stopPropagation();
      }
    });

    // Optionally show a warning when clicking links
    /*$("#chat ul").on("click", ".chatLink", function(ev) {
      var $s = $(this);

      if(gWarnOnLinks) {
        if(!$s.hasClass("clickedOnce")) {
          $s.addClass("clickedOnce");
          var id = setTimeout(() => $s.removeClass("clickedOnce"), 2000);
          $s.data("clickTimeout", id)
          return false;
        } else {
          console.log("a")
          $s.removeClass("clickedOnce");
          var id = $s.data("clickTimeout")
          if(id !== void 0) {
            clearTimeout(id)
            $s.removeData("clickTimeout")
          }
        }
      }
    });*/

    return {
      show: function () {
        $("#chat").fadeIn();
      },

      hide: function () {
        $("#chat").fadeOut();
      },

      clear: function () {
        $("#chat li").remove();
      },

      scrollToBottom: function () {
        var ele = $("#chat ul").get(0);
        ele.scrollTop = ele.scrollHeight - ele.clientHeight;
      },

      blur: function () {
        if ($("#chat").hasClass("chatting")) {
          $("#chat input").get(0).blur();
          $("#chat").removeClass("chatting");
          chat.scrollToBottom();
          captureKeyboard();
        }
      },

      send: function (message) {
        if (gIsDming) {
          gClient.sendArray([{ m: 'dm', _id: gDmParticipant._id, message }]);
        } else {
          gClient.sendArray([{ m: "a", message }]);
        }
      },

      receive: function (msg) {
        if (msg.m === 'dm') {
          if (gChatMutes.indexOf(msg.sender._id) != -1) return;
        } else {
          if (gChatMutes.indexOf(msg.p._id) != -1) return;
        }

        //construct string for creating list element

        var liString = '<li>';

        var isSpecialDm = false;

        if (gShowTimestampsInChat) liString += '<span class="timestamp"/>';
        
        if(msg.m === "a") {
          if (msg.p.tag) liString += '<span class="nametag"/>'
        }

        if (msg.m === 'dm') {
          if (msg.sender._id === gClient.user._id) { //sent dm
            liString += '<span class="sentDm"/>';
          } else if (msg.recipient._id === gClient.user._id) { //received dm
            liString += '<span class="receivedDm"/>';
          } else { //someone else's dm
            liString += '<span class="otherDm"/>';
            isSpecialDm = true;
          }
        }

        if (isSpecialDm) {
          if (gShowIdsInChat) liString += '<span class="id"/>';
          liString += '<span class="name"/><span class="dmArrow"/>';
          if (gShowIdsInChat) liString += '<span class="id2"/>';
          liString += '<span class="name2"/><span class="message"/>';
        } else {
          if (gShowIdsInChat) liString += '<span class="id"/>';
          liString += '<span class="name"/><span class="message"/>';
        }

        var li = $(liString);

        //prefix before dms so people know it's a dm
        if(msg.m === "a") {
          if(msg.p.tag) {
            li.find(".nametag").css("background-color", msg.p.tag.color);
            li.find(".nametag").css("color", "#ffffff");
            li.find(".nametag").text(msg.p.tag.text);
          }
        }
        
        if (msg.m === 'dm') {
          if (msg.sender._id === gClient.user._id) { //sent dm
            li.find(".sentDm").text('To');
            li.find(".sentDm").css("color", '#ff55ff');
          } else if (msg.recipient._id === gClient.user._id) { //received dm
            li.find(".receivedDm").text('From');
            li.find(".receivedDm").css("color", '#ff55ff');
          } else { //someone else's dm
            li.find(".otherDm").text('DM');
            li.find(".otherDm").css("color", '#ff55ff');

            li.find(".dmArrow").text('->');
            li.find(".dmArrow").css("color", '#ff55ff');
          }
        }

        if (gShowTimestampsInChat) {
          li.find(".timestamp").text(new Date(msg.t).toLocaleTimeString());
        }

        const message = parseMarkdown(parseContent(msg.a), parseUrl).replace(/@([\da-f]{24})/g, (match, id) => {
          const user = gClient.ppl[id];
          if (user) {
            const nick = parseContent(user.name);
            if (user.id === gClient.getOwnParticipant().id) {
              if (!tabIsActive) {
                youreMentioned = true;
                document.title = 'You were mentioned!';
              }
              return `<span class="mention" style="background-color: ${user.color};">${nick}</span>`;
            } else return `@${nick}`;
          } else return match;
        });

        //apply names, colors, ids
        li.find(".message").html(message);

        if (msg.m === 'dm') {
          if (!gNoChatColors) li.find(".message").css("color", msg.sender.color || "white");
          if (gShowIdsInChat) {
            if (msg.sender._id === gClient.user._id) {
              li.find(".id").text(msg.recipient._id.substring(0, 6));
            } else {
              li.find(".id").text(msg.sender._id.substring(0, 6));
            }
          }

          if (msg.sender._id === gClient.user._id) { //sent dm
            if (!gNoChatColors) li.find(".name").css("color", msg.recipient.color || "white");
            li.find(".name").text(msg.recipient.name + ":");
            if (gShowChatTooltips) li[0].title = msg.recipient._id;
          } else if (msg.recipient._id === gClient.user._id) { //received dm
            if (!gNoChatColors) li.find(".name").css("color", msg.sender.color || "white");
            li.find(".name").text(msg.sender.name + ":");

            if (gShowChatTooltips) li[0].title = msg.sender._id;
          } else { //someone else's dm
            if (!gNoChatColors) li.find(".name").css("color", msg.sender.color || "white");
            if (!gNoChatColors) li.find(".name2").css("color", msg.recipient.color || "white");
            li.find(".name").text(msg.sender.name);
            li.find(".name2").text(msg.recipient.name + ":");

            if (gShowIdsInChat) li.find(".id").text(msg.sender._id.substring(0, 6));
            if (gShowIdsInChat) li.find(".id2").text(msg.recipient._id.substring(0, 6));

            if (gShowChatTooltips) li[0].title = msg.sender._id;
          }
        } else {
          if (!gNoChatColors) li.find(".message").css("color", msg.p.color || "white");
          if (!gNoChatColors) li.find(".name").css("color", msg.p.color || "white");

          li.find(".name").text(msg.p.name + ":");

          if (!gNoChatColors) li.find(".message").css("color", msg.p.color || "white");
          if (gShowIdsInChat) li.find(".id").text(msg.p._id.substring(0, 6));

          if (gShowChatTooltips) li[0].title = msg.p._id;
        }

        //put list element in chat

        $("#chat ul").append(li);

        var eles = $("#chat ul li").get();
        for (var i = 1; i <= 50 && i <= eles.length; i++) {
          eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
        }
        if (eles.length > 50) {
          eles[0].style.display = "none";
        }
        if (eles.length > 256) {
          $(eles[0]).remove();
        }

        // scroll to bottom if not "chatting" or if not scrolled up
        if (!$("#chat").hasClass("chatting")) {
          chat.scrollToBottom();
        } else {
          var ele = $("#chat ul").get(0);
          if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
            chat.scrollToBottom();
        }
      }
    };
  })();















  // MIDI

  ////////////////////////////////////////////////////////////////

  var MIDI_TRANSPOSE = -12;
  var MIDI_KEY_NAMES = ["a-1", "as-1", "b-1"];
  var bare_notes = "c cs d ds e f fs g gs a as b".split(" ");
  for (var oct = 0; oct < 7; oct++) {
    for (var i in bare_notes) {
      MIDI_KEY_NAMES.push(bare_notes[i] + oct);
    }
  }
  MIDI_KEY_NAMES.push("c7");

  var devices_json = "[]";
  function sendDevices() {
    gClient.sendArray([{ "m": "devices", "list": JSON.parse(devices_json) }]);
  }
  gClient.on("connect", sendDevices);

  var pitchBends = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 };

  (function () {

    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(
        function (midi) {
          //console.log(midi);
          function midimessagehandler(evt) {
            if (!evt.target.enabled) return;
            //console.log(evt);
            var channel = evt.data[0] & 0xf;
            var cmd = evt.data[0] >> 4;
            var note_number = evt.data[1];
            var vel = evt.data[2];
            //console.log(channel, cmd, note_number, vel);
            if (cmd == 8 || (cmd == 9 && vel == 0)) {
              // NOTE_OFF
              release(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE + transpose + pitchBends[channel]]);
            } else if (cmd == 9) {
              // NOTE_ON
              if (evt.target.volume !== undefined)
                vel *= evt.target.volume;
              press(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE + transpose + pitchBends[channel]], vel / 127);
            } else if (cmd == 11) {
              // CONTROL_CHANGE
              if (!gAutoSustain) {
                if (note_number == 64) {
                  if (vel > 20) {
                    pressSustain();
                  } else {
                    releaseSustain();
                  }
                }
              }
            } else if (cmd == 14) {
              var pitchMod = evt.data[1] + (evt.data[2] << 7) - 0x2000;
              pitchMod = Math.round(pitchMod / 1000);
              pitchBends[channel] = pitchMod;
            }
          }

          function deviceInfo(dev) {
            return {
              type: dev.type,
              //id: dev.id,
              manufacturer: dev.manufacturer,
              name: dev.name,
              version: dev.version,
              //connection: dev.connection,
              //state: dev.state,
              enabled: dev.enabled,
              volume: dev.volume
            };
          }

          function updateDevices() {
            var list = [];
            if (midi.inputs.size > 0) {
              var inputs = midi.inputs.values();
              for (var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                var input = input_it.value;
                list.push(deviceInfo(input));
              }
            }
            if (midi.outputs.size > 0) {
              var outputs = midi.outputs.values();
              for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                var output = output_it.value;
                list.push(deviceInfo(output));
              }
            }
            var new_json = JSON.stringify(list);
            if (new_json !== devices_json) {
              devices_json = new_json;
              sendDevices();
            }
          }

          function plug() {
            if (midi.inputs.size > 0) {
              var inputs = midi.inputs.values();
              for (var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                var input = input_it.value;
                //input.removeEventListener("midimessage", midimessagehandler);
                //input.addEventListener("midimessage", midimessagehandler);
                input.onmidimessage = midimessagehandler;
                if (input.enabled !== false) {
                  input.enabled = true;
                }
                if (typeof input.volume === "undefined") {
                  input.volume = 1.0;
                }
                //console.log("input", input);
              }
            }
            if (midi.outputs.size > 0) {
              var outputs = midi.outputs.values();
              for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                var output = output_it.value;
                //output.enabled = false; // edit: don't touch
                if (typeof output.volume === "undefined") {
                  output.volume = 1.0;
                }
                //console.log("output", output);
              }
              gMidiOutTest = function (note_name, vel, delay_ms, participantId) {
                if (!gOutputOwnNotes && participantId === gClient.participantId) return;
                var note_number = MIDI_KEY_NAMES.indexOf(note_name);
                if (note_number == -1) return;
                note_number = note_number + 9 - MIDI_TRANSPOSE;
                var outputs = midi.outputs.values();
                for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                  var output = output_it.value;
                  if (output.enabled) {
                    var v = vel;
                    if (output.volume !== undefined)
                      v *= output.volume;
                    output.send([0x90, note_number, v], window.performance.now() + delay_ms);
                  }
                }
              }
            }
            showConnections(false);
            updateDevices();
          }

          midi.addEventListener("statechange", function (evt) {
            if (evt instanceof MIDIConnectionEvent) {
              plug();
            }
          });

          plug();


          var connectionsNotification;

          function showConnections(sticky) {
            //if(document.getElementById("Notification-MIDI-Connections"))
            //sticky = 1; // todo: instead, 
            var inputs_ul = document.createElement("ul");
            if (midi.inputs.size > 0) {
              var inputs = midi.inputs.values();
              for (var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                var input = input_it.value;
                var li = document.createElement("li");
                li.connectionId = input.id;
                li.classList.add("connection");
                if (input.enabled) li.classList.add("enabled");
                li.textContent = input.name;
                li.addEventListener("click", function (evt) {
                  var inputs = midi.inputs.values();
                  for (var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                    var input = input_it.value;
                    if (input.id === evt.target.connectionId) {
                      input.enabled = !input.enabled;
                      evt.target.classList.toggle("enabled");
                      //console.log("click", input);
                      updateDevices();
                      return;
                    }
                  }
                });
                if (gMidiVolumeTest) {
                  var knob = document.createElement("canvas");
                  mixin(knob, { width: 16 * window.devicePixelRatio, height: 16 * window.devicePixelRatio, className: "knob" });
                  li.appendChild(knob);
                  knob = new Knob(knob, 0, 2, 0.01, input.volume, "volume");
                  knob.canvas.style.width = "16px";
                  knob.canvas.style.height = "16px";
                  knob.canvas.style.float = "right";
                  knob.on("change", function (k) {
                    input.volume = k.value;
                  });
                  knob.emit("change", knob);
                }
                inputs_ul.appendChild(li);
              }
            } else {
              inputs_ul.textContent = "(none)";
            }
            var outputs_ul = document.createElement("ul");
            if (midi.outputs.size > 0) {
              var outputs = midi.outputs.values();
              for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                var output = output_it.value;
                var li = document.createElement("li");
                li.connectionId = output.id;
                li.classList.add("connection");
                if (output.enabled) li.classList.add("enabled");
                li.textContent = output.name;
                li.addEventListener("click", function (evt) {
                  var outputs = midi.outputs.values();
                  for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                    var output = output_it.value;
                    if (output.id === evt.target.connectionId) {
                      output.enabled = !output.enabled;
                      evt.target.classList.toggle("enabled");
                      //console.log("click", output);
                      updateDevices();
                      return;
                    }
                  }
                });
                if (gMidiVolumeTest) {
                  var knob = document.createElement("canvas");
                  mixin(knob, { width: 16 * window.devicePixelRatio, height: 16 * window.devicePixelRatio, className: "knob" });
                  li.appendChild(knob);
                  knob = new Knob(knob, 0, 2, 0.01, output.volume, "volume");
                  knob.canvas.style.width = "16px";
                  knob.canvas.style.height = "16px";
                  knob.canvas.style.float = "right";
                  knob.on("change", function (k) {
                    output.volume = k.value;
                  });
                  knob.emit("change", knob);
                }
                outputs_ul.appendChild(li);
              }
            } else {
              outputs_ul.textContent = "(none)";
            }
            var div = document.createElement("div");
            var h1 = document.createElement("h1");
            h1.textContent = "Inputs";
            div.appendChild(h1);
            div.appendChild(inputs_ul);
            h1 = document.createElement("h1");
            h1.textContent = "Outputs";
            div.appendChild(h1);
            div.appendChild(outputs_ul);
            connectionsNotification = new Notification({ "id": "MIDI-Connections", "title": "MIDI Connections", "duration": sticky ? "-1" : "4500", "html": div, "target": "#midi-btn" });
          }

          document.getElementById("midi-btn").addEventListener("click", function (evt) {
            if (!document.getElementById("Notification-MIDI-Connections"))
              showConnections(true);
            else {
              connectionsNotification.close();
            }
          });
        },
        function (err) {
          //console.log(err);
        });
    }
  })();













  // bug supply

  ////////////////////////////////////////////////////////////////

  window.onerror = function (message, url, line) {
    /*var url = url || "(no url)";
    var line = line || "(no line)";
    // errors in socket.io
    if(url.indexOf("socket.io.js") !== -1) {
      if(message.indexOf("INVALID_STATE_ERR") !== -1) return;
      if(message.indexOf("InvalidStateError") !== -1) return;
      if(message.indexOf("DOM Exception 11") !== -1) return;
      if(message.indexOf("Property 'open' of object #<c> is not a function") !== -1) return;
      if(message.indexOf("Cannot call method 'close' of undefined") !== -1) return;
      if(message.indexOf("Cannot call method 'close' of null") !== -1) return;
      if(message.indexOf("Cannot call method 'onClose' of null") !== -1) return;
      if(message.indexOf("Cannot call method 'payload' of null") !== -1) return;
      if(message.indexOf("Unable to get value of the property 'close'") !== -1) return;
      if(message.indexOf("NS_ERROR_NOT_CONNECTED") !== -1) return;
      if(message.indexOf("Unable to get property 'close' of undefined or null reference") !== -1) return;
      if(message.indexOf("Unable to get value of the property 'close': object is null or undefined") !== -1) return;
      if(message.indexOf("this.transport is null") !== -1) return;
    }
    // errors in soundmanager2
    if(url.indexOf("soundmanager2.js") !== -1) {
      // operation disabled in safe mode?
      if(message.indexOf("Could not complete the operation due to error c00d36ef") !== -1) return;
      if(message.indexOf("_s.o._setVolume is not a function") !== -1) return;
    }
    // errors in midibridge
    if(url.indexOf("midibridge") !== -1) {
      if(message.indexOf("Error calling method on NPObject") !== -1) return;
    }
    // too many failing extensions injected in my html
    if(url.indexOf(".js") !== url.length - 3) return;
    // extensions inject cross-domain embeds too
    if(url.toLowerCase().indexOf("multiplayerpiano.com") == -1) return;

    // errors in my code
    if(url.indexOf("script.js") !== -1) {
      if(message.indexOf("Object [object Object] has no method 'on'") !== -1) return;
      if(message.indexOf("Object [object Object] has no method 'off'") !== -1) return;
      if(message.indexOf("Property '$' of object [object Object] is not a function") !== -1) return;
    }

    var enc = "/bugreport/"
      + (message ? encodeURIComponent(message) : "") + "/"
      + (url ? encodeURIComponent(url) : "") + "/"
      + (line ? encodeURIComponent(line) : "");
    var img = new Image();
    img.src = enc;*/
  };









  // API
  window.MPP = {
    get press() { return press },
    set press(func) { press = func },

    get release() { return release },
    set release(func) { release = func },

    get pressSustain() { return pressSustain },
    set pressSustain(func) { pressSustain = func },
    
    get releaseSustain() { return releaseSustain },
    set releaseSustain(func) { releaseSustain = func },

    piano: gPiano,
    client: gClient,
    chat: chat,
    noteQuota: gNoteQuota,
    soundSelector: gSoundSelector,
    Notification: Notification
  };

  // synth
  var enableSynth = false;
  var audio = gPiano.audio;
  var context = gPiano.audio.context;
  var synth_gain = context.createGain();
  synth_gain.gain.value = 0.05;
  synth_gain.connect(audio.synthGain);

  var osc_types = ["sine", "square", "sawtooth", "triangle"];
  var osc_type_index = 1;

  var osc1_type = "square";
  var osc1_attack = 0;
  var osc1_decay = 0.2;
  var osc1_sustain = 0.5;
  var osc1_release = 2.0;

  function synthVoice(note_name, time) {
    var note_number = MIDI_KEY_NAMES.indexOf(note_name);
    note_number = note_number + 9 - MIDI_TRANSPOSE;
    var freq = Math.pow(2, (note_number - 69) / 12) * 440.0;
    this.osc = context.createOscillator();
    this.osc.type = osc1_type;
    this.osc.frequency.value = freq;
    this.gain = context.createGain();
    this.gain.gain.value = 0;
    this.osc.connect(this.gain);
    this.gain.connect(synth_gain);
    this.osc.start(time);
    this.gain.gain.setValueAtTime(0, time);
    this.gain.gain.linearRampToValueAtTime(1, time + osc1_attack);
    this.gain.gain.linearRampToValueAtTime(osc1_sustain, time + osc1_attack + osc1_decay);
  }

  synthVoice.prototype.stop = function (time) {
    //this.gain.gain.setValueAtTime(osc1_sustain, time);
    this.gain.gain.linearRampToValueAtTime(0, time + osc1_release);
    this.osc.stop(time + osc1_release);
  };

  (function () {
    var button = document.getElementById("synth-btn");
    var notification;

    button.addEventListener("click", function () {
      if (notification) {
        notification.close();
      } else {
        showSynth();
      }
    });

    function showSynth() {

      var html = document.createElement("div");

      // on/off button
      (function () {
        var button = document.createElement("input");
        mixin(button, { type: "button", value: "ON/OFF", className: enableSynth ? "switched-on" : "switched-off" });
        button.addEventListener("click", function (evt) {
          enableSynth = !enableSynth;
          button.className = enableSynth ? "switched-on" : "switched-off";
          if (!enableSynth) {
            // stop all
            for (var i in audio.playings) {
              if (!audio.playings.hasOwnProperty(i)) continue;
              var playing = audio.playings[i];
              if (playing && playing.voice) {
                playing.voice.osc.stop();
                playing.voice = undefined;
              }
            }
          }
        });
        html.appendChild(button);
      })();

      // mix
      var knob = document.createElement("canvas");
      mixin(knob, { width: 32 * window.devicePixelRatio, height: 32 * window.devicePixelRatio, className: "knob" });
      html.appendChild(knob);
      knob = new Knob(knob, 0, 100, 0.1, 50, "mix", "%");
      knob.canvas.style.width = "32px";
      knob.canvas.style.height = "32px";
      knob.on("change", function (k) {
        var mix = k.value / 100;
        audio.pianoGain.gain.value = 1 - mix;
        audio.synthGain.gain.value = mix;
      });
      knob.emit("change", knob);

      // osc1 type
      (function () {
        osc1_type = osc_types[osc_type_index];
        var button = document.createElement("input");
        mixin(button, { type: "button", value: osc_types[osc_type_index] });
        button.addEventListener("click", function (evt) {
          if (++osc_type_index >= osc_types.length) osc_type_index = 0;
          osc1_type = osc_types[osc_type_index];
          button.value = osc1_type;
        });
        html.appendChild(button);
      })();

      // osc1 attack
      var knob = document.createElement("canvas");
      mixin(knob, { width: 32 * window.devicePixelRatio, height: 32 * window.devicePixelRatio, className: "knob" });
      html.appendChild(knob);
      knob = new Knob(knob, 0, 1, 0.001, osc1_attack, "osc1 attack", "s");
      knob.canvas.style.width = "32px";
      knob.canvas.style.height = "32px";
      knob.on("change", function (k) {
        osc1_attack = k.value;
      });
      knob.emit("change", knob);

      // osc1 decay
      var knob = document.createElement("canvas");
      mixin(knob, { width: 32 * window.devicePixelRatio, height: 32 * window.devicePixelRatio, className: "knob" });
      html.appendChild(knob);
      knob = new Knob(knob, 0, 2, 0.001, osc1_decay, "osc1 decay", "s");
      knob.canvas.style.width = "32px";
      knob.canvas.style.height = "32px";
      knob.on("change", function (k) {
        osc1_decay = k.value;
      });
      knob.emit("change", knob);

      var knob = document.createElement("canvas");
      mixin(knob, { width: 32 * window.devicePixelRatio, height: 32 * window.devicePixelRatio, className: "knob" });
      html.appendChild(knob);
      knob = new Knob(knob, 0, 1, 0.001, osc1_sustain, "osc1 sustain", "x");
      knob.canvas.style.width = "32px";
      knob.canvas.style.height = "32px";
      knob.on("change", function (k) {
        osc1_sustain = k.value;
      });
      knob.emit("change", knob);

      // osc1 release
      var knob = document.createElement("canvas");
      mixin(knob, { width: 32 * window.devicePixelRatio, height: 32 * window.devicePixelRatio, className: "knob" });
      html.appendChild(knob);
      knob = new Knob(knob, 0, 2, 0.001, osc1_release, "osc1 release", "s");
      knob.canvas.style.width = "32px";
      knob.canvas.style.height = "32px";
      knob.on("change", function (k) {
        osc1_release = k.value;
      });
      knob.emit("change", knob);


      //useless blank space
      //var div = document.createElement("div");
      //div.innerHTML = "<br><br><br><br><center>this space intentionally left blank</center><br><br><br><br>";
      //html.appendChild(div);



      // notification
      notification = new Notification({ title: "Synthesize", html: html, duration: -1, target: "#synth-btn" });
      notification.on("close", function () {
        var tip = document.getElementById("tooltip");
        if (tip) tip.parentNode.removeChild(tip);
        notification = null;
      });
    }
  })();

  (function () {
    if (window.location.hostname === "multiplayerpiano.com") {
      var button = document.getElementById("client-settings-btn");
      var notification;

      button.addEventListener("click", function () {
        if (notification) {
          notification.close();
        } else {
          showSynth();
        }
      });

      function showSynth() {

        var html = document.createElement("div");

        // show ids in chat
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Show user IDs in chat";
          if (gShowIdsInChat) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.showIdsInChat = setting.classList.contains("enabled");
            gShowIdsInChat = setting.classList.contains("enabled");
          };
          html.appendChild(setting);
        })();

        // show timestamps in chat
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Timestamps in chat";
          if (gShowTimestampsInChat) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.showTimestampsInChat = setting.classList.contains("enabled");
            gShowTimestampsInChat = setting.classList.contains("enabled");
          };
          html.appendChild(setting);
        })();

        // no chat colors
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "No chat colors";
          if (gNoChatColors) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.noChatColors = setting.classList.contains("enabled");
            gNoChatColors = setting.classList.contains("enabled");
          };
          html.appendChild(setting);
        })();

        // no background color
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Force dark background";
          if (gNoBackgroundColor) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.noBackgroundColor = setting.classList.contains("enabled");
            gNoBackgroundColor = setting.classList.contains("enabled");
            if (gClient.channel.settings.color && !gNoBackgroundColor) {
              setBackgroundColor(gClient.channel.settings.color, gClient.channel.settings.color2);
            } else {
              setBackgroundColorToDefault();
            }
          };
          html.appendChild(setting);
        })();

        // output own notes
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Output own notes to MIDI";
          if (gOutputOwnNotes) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.outputOwnNotes = setting.classList.contains("enabled");
            gOutputOwnNotes = setting.classList.contains("enabled");
          };
          html.appendChild(setting);
        })();

        // virtual piano layout
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Virtual Piano layout";
          if (gVirtualPianoLayout) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.virtualPianoLayout = setting.classList.contains("enabled");
            gVirtualPianoLayout = setting.classList.contains("enabled");
            key_binding = gVirtualPianoLayout ? layouts.VP : layouts.MPP;
          };
          html.appendChild(setting);
        })();

        // 			gShowChatTooltips
        // Show chat tooltips for _ids.
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Show _id tooltips";
          if (gShowChatTooltips) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.showChatTooltips = setting.classList.contains("enabled");
            gShowChatTooltips = setting.classList.contains("enabled");
          };
          html.appendChild(setting);
        })();

        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Show Piano Notes";
          if (gShowPianoNotes) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.showPianoNotes = setting.classList.contains("enabled");
            gShowPianoNotes = setting.classList.contains("enabled");
          };
          html.appendChild(setting);
        })();

        // Enable smooth cursors.
        (function () {
          var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Enable smooth cursors";
          if (gSmoothCursor) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.smoothCursor = setting.classList.contains("enabled");
            gSmoothCursor = setting.classList.contains("enabled");
            if (gSmoothCursor) {
              $("#cursors").attr('smooth-cursors', '');
            } else {
              $("#cursors").removeAttr('smooth-cursors');
            }
            if (gSmoothCursor) {
              Object.values(gClient.ppl).forEach(function (participant) {
                if (participant.cursorDiv) {
                  participant.cursorDiv.style.left = '';
                  participant.cursorDiv.style.top = '';
                  participant.cursorDiv.style.transform = 'translate3d(' + participant.x + 'vw, ' + participant.y + 'vh, 0)';
                }
              });
            } else {
              Object.values(gClient.ppl).forEach(function (participant) {
                if (participant.cursorDiv) {
                  participant.cursorDiv.style.left = participant.x + "%";
                  participant.cursorDiv.style.top = participant.y + "%";
                  participant.cursorDiv.style.transform = '';
                }
              });
            }
          };
          html.appendChild(setting);
        })();

        (function () {
          var setting = document.createElement("select");
          setting.classList = "setting";
          setting.style = "color: inherit; width: calc(100% - 2px);"

          const keys = Object.keys(BASIC_PIANO_SCALES); // lol
          const option = document.createElement('option');
          option.value = option.innerText = "No highlighted notes";
          option.selected = !gHighlightScaleNotes;
          setting.appendChild(option);

          for (const key of keys) {
            const option = document.createElement('option');
            option.value = key;
            option.innerText = key;
            option.selected = key === gHighlightScaleNotes;
            setting.appendChild(option);
          }

          if (gHighlightScaleNotes) {
            setting.value = gHighlightScaleNotes;
          }


          setting.onchange = function () {
            localStorage.highlightScaleNotes = setting.value;
            gHighlightScaleNotes = setting.value;
          };
          html.appendChild(setting);
        })();

        (function () {
            var setting = document.createElement("div");
          setting.classList = "setting";
          setting.innerText = "Hide all cursors";
          if (gHideAllCursors) {
            setting.classList.toggle("enabled");
          }
          setting.onclick = function () {
            setting.classList.toggle("enabled");
            localStorage.hideAllCursors = setting.classList.contains("enabled");
            gHideAllCursors = setting.classList.contains("enabled");
            if (gHideAllCursors) {
                $("#cursors").hide();
            } else {
                $("#cursors").show();
            }
          };
          html.appendChild(setting);
        })();


        // warn on links
        /*(function() {
          var setting = document.createElement("div");
            setting.classList = "setting";
            setting.innerText = "Warn when clicking links";
            if (gWarnOnLinks) {
                      setting.classList.toggle("enabled");
            }
            setting.onclick = function() {
              setting.classList.toggle("enabled");
              localStorage.warnOnLinks = setting.classList.contains("enabled");
              gWarnOnLinks = setting.classList.contains("enabled");
            };
          html.appendChild(setting);
        })();*/

        //useless blank space
        //var div = document.createElement("div");
        //div.innerHTML = "<br><br><br><br><center>this space intentionally left blank</center><br><br><br><br>";
        //html.appendChild(div);



        // notification
        notification = new Notification({ title: "Client Settings", html: html, duration: -1, target: "#client-settings-btn" });
        notification.on("close", function () {
          var tip = document.getElementById("tooltip");
          if (tip) tip.parentNode.removeChild(tip);
          notification = null;
        });
      }
    } else {
      var button = document.getElementById("client-settings-btn");
      var content = document.getElementById("client-settings-content");
      var tablinks = document.getElementsByClassName("client-settings-tablink");
      var okButton = document.getElementById("client-settings-ok-btn");

      button.addEventListener("click", (evt) => {
        evt.stopPropagation();
        openModal("#client-settings");
      });

      okButton.addEventListener("click", (evt) => {
        evt.stopPropagation();
        closeModal();
      });

      function createSetting(id, labelText, isChecked, addBr, html, onclickFunc) {
        const setting = document.createElement("input");
        setting.type = "checkbox";
        setting.id = id;
        setting.checked = isChecked;
        setting.onclick = onclickFunc;

        const label = document.createElement("label");
        label.innerText = labelText + ": ";
          
        label.appendChild(setting);
        html.appendChild(label);
        if (addBr) html.appendChild(document.createElement("br"));
      }

      window.changeClientSettingsTab = (evt, tabName) => {
        content.innerHTML = "";

        for (let index = 0; index < tablinks.length; index++) {
          tablinks[index].className = tablinks[index].className.replace(" active", "");
        }
        
        evt.currentTarget.className += " active";
        
        switch (tabName.toLowerCase()) {
          case "chat":
            var html = document.createElement("div");

            createSetting("show-timestamps-in-chat", "Show timestamps in chat", gShowTimestampsInChat, true, html, () => {
              gShowTimestampsInChat = !gShowTimestampsInChat;
              localStorage.showTimestampsInChat = gShowTimestampsInChat;
            });

            createSetting("show-user-ids-in-chat", "Show user IDs in chat", gShowIdsInChat, true, html, () => {
              gShowIdsInChat = !gShowIdsInChat;
              localStorage.showIdsInChat = gShowIdsInChat;
            });

            createSetting("show-id-tooltips", "Show ID tooltips", gShowChatTooltips, true, html, () => {
              gShowChatTooltips = !gShowChatTooltips;
              localStorage.showChatTooltips = gShowChatTooltips;
            });

            createSetting("no-chat-colors", "No chat colors", gNoChatColors, true, html, () => {
              gNoChatColors = !gNoChatColors;
              localStorage.noChatColors = gNoChatColors;
            });

            createSetting("hide-chat", "Hide chat", gHideChat, false, html, () => {
              gHideChat = !gHideChat;
              localStorage.hideChat = gHideChat;

              if (gHideChat) {
                $("#chat").hide();
              } else {
                $("#chat").show();
              }
            });

            content.appendChild(html);
            break;
        
          case "midi":
            var html = document.createElement("div");

            createSetting("output-own-notes-to-midi", "Output own notes to MIDI", gOutputOwnNotes, false, html, () => {
              gOutputOwnNotes = !gOutputOwnNotes;
              localStorage.outputOwnNotes = gOutputOwnNotes;
            });

            content.appendChild(html);
            break;

          case "piano":
            var html = document.createElement("div");

            createSetting("virtual-piano-layout", "Virtual Piano layout", gVirtualPianoLayout, true, html, () => {
              gVirtualPianoLayout = !gVirtualPianoLayout;
              localStorage.virtualPianoLayout = gVirtualPianoLayout;
              key_binding = gVirtualPianoLayout ? layouts.VP : layouts.MPP;
            });

            createSetting("show-piano-notes", "Show piano notes", gShowPianoNotes, true, html, () => {
              gShowPianoNotes = !gShowPianoNotes;
              localStorage.showPianoNotes = gShowPianoNotes;
            });

            createSetting("hide-piano", "Hide piano", gHidePiano, true, html, () => {
              gHidePiano = !gHidePiano;
              localStorage.hidePiano = gHidePiano;

              if (gHidePiano) {
                $("#piano").hide();
              } else {
                $("#piano").show();
              }
            });

            var setting = document.createElement("select");
            setting.classList = "setting";
            setting.style = "width: calc(58.7% - 2px);"

            setting.onchange = () => {
              localStorage.highlightScaleNotes = setting.value;
              gHighlightScaleNotes = setting.value;
            }

            const keys = Object.keys(BASIC_PIANO_SCALES); // lol
            const option = document.createElement('option');
            option.value = option.innerText = "None";
            option.selected = !gHighlightScaleNotes;
            setting.appendChild(option);
    
            for (const key of keys) {
              const option = document.createElement('option');
              option.value = key;
              option.innerText = key;
              option.selected = key === gHighlightScaleNotes;
              setting.appendChild(option);
            }
    
            if (gHighlightScaleNotes) {
              setting.value = gHighlightScaleNotes;
            }

            var label = document.createElement("label");

            label.setAttribute("for", setting.id);
            label.innerText = "Highlighted notes: ";

            html.appendChild(label);
            html.appendChild(setting);

            content.appendChild(html);
            break;

          case "misc":
            var html = document.createElement("div");

            createSetting("dont-use-prevent-default", "Don't use prevent default", gNoChatColors, true, html, () => {
              gNoPreventDefault = !gNoPreventDefault;
              localStorage.noPreventDefault = noPreventDefault;
            });
            
            createSetting("force-dark-background", "Force dark background", gNoBackgroundColor, true, html, () => {
              gNoBackgroundColor = !gNoBackgroundColor;
              localStorage.noBackgroundColor = gNoBackgroundColor;

              if (gClient.channel.settings.color && !gNoBackgroundColor) {
                setBackgroundColor(gClient.channel.settings.color, gClient.channel.settings.color2);
              } else {
                setBackgroundColorToDefault();
              }
            });

            createSetting("enable-smooth-cursors", "Enable smooth cursors", gSmoothCursor, true, html, () => {
              gSmoothCursor = !gSmoothCursor;
              localStorage.smoothCursor = gSmoothCursor;
              if (gSmoothCursor) {
                $("#cursors").attr("smooth-cursors", "");
                Object.values(gClient.ppl).forEach(function (participant) {
                  if (participant.cursorDiv) {
                    participant.cursorDiv.style.left = '';
                    participant.cursorDiv.style.top = '';
                    participant.cursorDiv.style.transform = 'translate3d(' + participant.x + 'vw, ' + participant.y + 'vh, 0)';
                  }
                });
              } else {
                $("#cursors").removeAttr("smooth-cursors");
                Object.values(gClient.ppl).forEach(function (participant) {
                  if (participant.cursorDiv) {
                    participant.cursorDiv.style.left = participant.x + "%";
                    participant.cursorDiv.style.top = participant.y + "%";
                    participant.cursorDiv.style.transform = '';
                  }
                });
              }
            });

            createSetting("hide-all-cursors", "Hide all cursors", gHideAllCursors, true, html, () => {
              gHideAllCursors = !gHideAllCursors;
              localStorage.hideAllCursors = gHideAllCursors;
              if (gHideAllCursors) {
                  $("#cursors").hide();
              } else {
                  $("#cursors").show();
              }
            });

            content.appendChild(html);
            break;
        }
      }
    
      changeClientSettingsTab({currentTarget: document.getElementsByClassName("client-settings-tablink")[0]}, "Chat");
    }
  })();
















  //confetti, to be removed after the 10th anniversary
  //source: https://www.cssscript.com/confetti-falling-animation/

  var maxParticleCount = 500; //set max confetti count
  var particleSpeed = 2; //set the particle animation speed
  var startConfetti; //call to start confetti animation
  var stopConfetti; //call to stop adding confetti
  var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
  var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

  (function () {
    startConfetti = startConfettiInner;
    stopConfetti = stopConfettiInner;
    toggleConfetti = toggleConfettiInner;
    removeConfetti = removeConfettiInner;
    var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
    var streamingConfetti = false;
    var animationTimer = null;
    var particles = [];
    var waveAngle = 0;

    function resetParticle(particle, width, height) {
      particle.color = colors[(Math.random() * colors.length) | 0];
      particle.x = Math.random() * width;
      particle.y = Math.random() * height - height;
      particle.diameter = Math.random() * 10 + 5;
      particle.tilt = Math.random() * 10 - 10;
      particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
      particle.tiltAngle = 0;
      return particle;
    }

    function startConfettiInner() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            return window.setTimeout(callback, 16.6666667);
          };
      })();
      var canvas = document.getElementById("confetti-canvas");
      if (canvas === null) {
        canvas = document.createElement("canvas");
        canvas.setAttribute("id", "confetti-canvas");
        canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:absolute;top:0;left:0");
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
        window.addEventListener("resize", function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }, true);
      }
      var context = canvas.getContext("2d");
      while (particles.length < maxParticleCount)
        particles.push(resetParticle({}, width, height));
      streamingConfetti = true;
      if (animationTimer === null) {
        (function runAnimation() {
          context.clearRect(0, 0, window.innerWidth, window.innerHeight);
          if (particles.length === 0)
            animationTimer = null;
          else {
            updateParticles();
            drawParticles(context);
            animationTimer = requestAnimFrame(runAnimation);
          }
        })();
      }
    }

    function stopConfettiInner() {
      streamingConfetti = false;
    }

    function removeConfettiInner() {
      stopConfetti();
      particles = [];
    }

    function toggleConfettiInner() {
      if (streamingConfetti)
        stopConfettiInner();
      else
        startConfettiInner();
    }

    function drawParticles(context) {
      var particle;
      var x;
      for (var i = 0; i < particles.length; i++) {
        particle = particles[i];
        context.beginPath();
        context.lineWidth = particle.diameter;
        context.strokeStyle = particle.color;
        context.shadowColor = 'rgba(0, 0, 0, .3)';
        context.shadowBlur = 4;
        context.shadowOffsetY = 2;
        context.shadowOffsetX = 0;
        x = particle.x + particle.tilt;
        context.moveTo(x + particle.diameter / 2, particle.y);
        context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
        context.stroke();
      }
    }

    function updateParticles() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var particle;
      waveAngle += 0.01;
      for (var i = 0; i < particles.length; i++) {
        particle = particles[i];
        if (!streamingConfetti && particle.y < -15)
          particle.y = height + 100;
        else {
          particle.tiltAngle += particle.tiltAngleIncrement;
          particle.x += Math.sin(waveAngle);
          particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
          particle.tilt = Math.sin(particle.tiltAngle) * 15;
        }
        if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
          if (streamingConfetti && particles.length <= maxParticleCount)
            resetParticle(particle, width, height);
          else {
            particles.splice(i, 1);
            i--;
          }
        }
      }
    }
  })();

  if (window !== top) {
    alert("Hey, it looks like you're visiting our site through another website. Consider playing Multiplayer Piano directly at https://mppclone.com")
  }














  gClient.start();
});



















// misc

////////////////////////////////////////////////////////////////


// non-ad-free experience
/*(function() {
  function adsOn() {
    if(window.localStorage) {
      var div = document.querySelector("#inclinations");
      div.innerHTML = "Ads:<br>ON / <a id=\"adsoff\" href=\"#\">OFF</a>";
      div.querySelector("#adsoff").addEventListener("click", adsOff);
      localStorage.ads = true;
    }
    // adsterra
    var script = document.createElement("script");
    script.src = "//pl132070.puhtml.com/68/7a/97/687a978dd26d579c788cb41e352f5a41.js";
    document.head.appendChild(script);
  }

  function adsOff() {
    if(window.localStorage) localStorage.ads = false;
    document.location.reload(true);
  }

  function noAds() {
    var div = document.querySelector("#inclinations");
    div.innerHTML = "Ads:<br><a id=\"adson\" href=\"#\">ON</a> / OFF";
    div.querySelector("#adson").addEventListener("click", adsOn);
  }

  if(window.localStorage) {
    if(localStorage.ads === undefined || localStorage.ads === "true")
      adsOn();
    else
      noAds();
  } else {
    adsOn();
  }
})();*/
