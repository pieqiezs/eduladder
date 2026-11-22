(()=>{
'use strict';
const $=s=>document.querySelector(s),sleep=ms=>new Promise(r=>setTimeout(r,ms));
/* ---------- SUARA (Web Audio, tanpa file) ---------- */
let muted=false,AC=null;try{muted=localStorage.getItem('edul_mute')==='1'}catch(e){}
function ac(){if(muted)return null;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume()}catch(e){}return AC}
function tone(f,d,type='sine',v=.15,t0=0,to=null){const c=ac();if(!c)return;const o=c.createOscillator(),g=c.createGain(),t=c.currentTime+t0;o.type=type;o.frequency.setValueAtTime(f,t);if(to)o.frequency.exponentialRampToValueAtTime(to,t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+d+.03)}
function noise(d,v=.1,t0=0,fq=3000){const c=ac();if(!c)return;const n=c.sampleRate*d|0,b=c.createBuffer(1,n,c.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain(),t=c.currentTime+t0;f.type='bandpass';f.frequency.value=fq;s.buffer=b;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);s.connect(f);f.connect(g);g.connect(c.destination);s.start(t)}
const S={
click:()=>{tone(700,.05,'triangle',.12);tone(980,.06,'triangle',.08,.03)},
pick:()=>tone(520,.09,'triangle',.14,0,780),
pop:()=>tone(440,.12,'sine',.09,0,660),
dice:()=>{for(let i=0;i<9;i++)noise(.04,.2,i*.06+Math.random()*.02,1500+Math.random()*2500);tone(180,.5,'triangle',.05,0,120)},
step:k=>tone(380+k*45,.07,'sine',.16),
ladder:()=>[392,494,587,784,988].forEach((f,i)=>tone(f,.14,'triangle',.15,i*.08)),
snake:()=>{tone(600,.7,'sawtooth',.08,0,90);noise(.7,.14,0,6000)},
ok:()=>[523,659,784].forEach((f,i)=>tone(f,.16,'triangle',.16,i*.09)),
no:()=>{tone(220,.3,'sawtooth',.11,0,120);tone(180,.3,'square',.05,.12,90)},
tick:()=>tone(900,.03,'square',.05),
bonus:()=>[659,784,988,1319].forEach((f,i)=>tone(f,.18,'sine',.16,i*.07)),
duel:()=>{tone(300,.15,'square',.09);tone(450,.2,'square',.09,.15)},
win:()=>[523,659,784,1047,784,1047,1319].forEach((f,i)=>tone(f,.22,'triangle',.17,i*.14))
};
window.toggleSound=()=>{muted=!muted;try{localStorage.setItem('edul_mute',muted?'1':'0')}catch(e){}$('#muteBtn').textContent=muted?'🔇':'🔊';if(!muted)S.pop()};
$('#muteBtn').textContent=muted?'🔇':'🔊';
/* ---------- EFEK TEKAN TOMBOL ---------- */
document.addEventListener('pointerdown',e=>{
  const t=e.target.closest('button,.btn,.option,.answer-option');if(!t||t.disabled)return;
  const r=t.getBoundingClientRect(),d=document.createElement('span');d.className='rip';d.style.left=(e.clientX-r.left)+'px';d.style.top=(e.clientY-r.top)+'px';t.appendChild(d);setTimeout(()=>d.remove(),600);
  if(t.id!=='rollBtn')(t.matches('.option,.answer-option')?S.pick:S.click)();
  if(navigator.vibrate)try{navigator.vibrate(t.id==='rollBtn'?25:8)}catch(x){}
},{passive:true});
/* ---------- PAPAN: ULAR DAN TANGGA ---------- */
const P=n=>{const r=Math.floor((n-1)/10),c0=(n-1)%10,c=r%2?9-c0:c0;return[c*100+50,(9-r)*100+50]};
const COL=['#2e9e5b','#e0702f','#8664db','#d64545','#1b9aaa','#c9a400','#d6579a','#4a7de0'],snakePts={};
const f1=x=>x.toFixed(1);
function line(x1,y1,x2,y2,c,w){return`<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`}
function ladderSvg(a,b){
  const dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy),nx=-dy/L*17,ny=dx/L*17,n=Math.max(2,Math.floor(L/36));let g='<g filter="url(#sh)">';
  for(let i=1;i<=n;i++){const u=i/(n+1),x=a[0]+dx*u,y=a[1]+dy*u;g+=line(x-nx,y-ny,x+nx,y+ny,'#6b4420',10)+line(x-nx,y-ny,x+nx,y+ny,'#e0b36a',5)}
  for(const s of[-1,1])g+=line(a[0]+nx*s,a[1]+ny*s,b[0]+nx*s,b[1]+ny*s,'#6b4420',14)+line(a[0]+nx*s,a[1]+ny*s,b[0]+nx*s,b[1]+ny*s,'#c98a45',8);
  return g+'</g>';
}
function snakeSvg(h,t,col){
  const A=P(h),B=P(t),dx=B[0]-A[0],dy=B[1]-A[1],L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L,W=Math.max(2,Math.round(L/170)),N=44,C=[];
  for(let i=0;i<=N;i++){const u=i/N,o=Math.sin(u*W*Math.PI)*34;C.push([A[0]+dx*u+nx*o,A[1]+dy*u+ny*o])}
  snakePts[h]=C.filter((_,i)=>i%4===0).slice(1);
  const hw=i=>4+13*Math.pow(1-i/N,.7),Lp=[],Rp=[];
  C.forEach((c,i)=>{const a=C[Math.max(0,i-1)],b=C[Math.min(N,i+1)];let tx=b[0]-a[0],ty=b[1]-a[1];const m=Math.hypot(tx,ty)||1;tx/=m;ty/=m;const w=hw(i);Lp.push([c[0]-ty*w,c[1]+tx*w]);Rp.push([c[0]+ty*w,c[1]-tx*w])});
  const pts=Lp.concat(Rp.reverse()).map(p=>f1(p[0])+','+f1(p[1])).join(' ');
  let g=`<g filter="url(#sh)"><polygon points="${pts}" fill="${col}" stroke="#0000005a" stroke-width="3" stroke-linejoin="round"/>`;
  for(let i=3;i<N-2;i+=3)g+=`<circle cx="${f1(C[i][0])}" cy="${f1(C[i][1])}" r="${f1(hw(i)*.45)}" fill="${i%6?'#ffffff66':'#00000030'}"/>`;
  const ang=Math.atan2(C[0][1]-C[2][1],C[0][0]-C[2][0])*180/Math.PI;
  return g+`<g transform="translate(${f1(C[0][0])} ${f1(C[0][1])}) rotate(${f1(ang)})"><path d="M26 0L46 0M40 0L50-6M40 0L50 6" stroke="#e11d48" stroke-width="3" stroke-linecap="round" fill="none"/><ellipse cx="6" cy="0" rx="26" ry="20" fill="${col}" stroke="#0000005a" stroke-width="3"/><circle cx="12" cy="-10" r="6" fill="#fff"/><circle cx="12" cy="10" r="6" fill="#fff"/><circle cx="14" cy="-10" r="3" fill="#111"/><circle cx="14" cy="10" r="3" fill="#111"/></g></g>`;
}
let tokBox,tokEls=[],shown=[],tokQ=[],lastPlayers=null;
(function init(){
  const b=$('#board'),w=document.createElement('div');w.className='bwrap';b.parentNode.insertBefore(w,b);w.appendChild(b);
  const l=document.createElement('div');l.className='fxlayer';
  let s='<defs><filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="3" dy="5" stdDeviation="4" flood-opacity=".3"/></filter></defs>';
  Object.entries(ladders).forEach(([lo,hi])=>s+=ladderSvg(P(+lo),P(hi)));
  Object.entries(snakes).forEach(([h,t],k)=>s+=snakeSvg(+h,t,COL[k%COL.length]));
  l.innerHTML=`<svg viewBox="0 0 1000 1000" preserveAspectRatio="none">${s}</svg><div id="tokBox"></div>`;w.appendChild(l);tokBox=l.querySelector('#tokBox');
})();
/* ---------- PION BERGERAK ---------- */
const OFF=[[-1.8,-1.8],[1.8,-1.8],[-1.8,1.8],[1.8,1.8],[0,0]];
function place(i,x,y,ms){const e=tokEls[i];if(!e)return;e.style.transitionDuration=ms+'ms';e.style.left=x/10+'%';e.style.top=y/10+'%'}
function syncTokens(){
  if(!players.length)return;
  if(players!==lastPlayers||tokEls.length!==players.length){
    tokBox.innerHTML='';lastPlayers=players;shown=players.map(()=>1);tokQ=[];
    tokEls=players.map((p,i)=>{const e=document.createElement('div');e.className='ftok';e.style.background=PCOL[i];e.style.marginLeft=OFF[i][0]+'%';e.style.marginTop=OFF[i][1]+'%';e.textContent=p.bot?'B':i+1;tokBox.appendChild(e);return e});
    tokEls.forEach((_,i)=>place(i,...P(1),0));
  }
  players.forEach((p,i)=>{if(shown[i]!==p.pos){const a=shown[i];shown[i]=p.pos;tokQ[i]=(tokQ[i]||Promise.resolve()).then(()=>run(i,a,p.pos))}});
  tokEls.forEach((e,i)=>e.classList.toggle('active',i===current&&!gameOver));
}
async function run(i,a,b){
  if(snakes[a]===b){S.snake();for(const[x,y]of snakePts[a]){place(i,x,y,60);await sleep(58)}return}
  if(ladders[a]===b){S.ladder();place(i,...P(b),650);await sleep(660);return}
  if(b>a){for(let n=a+1;n<=b;n++){S.step(n-a);place(i,...P(n),90);await sleep(95)}}else place(i,...P(b),300);
}
/* ---------- PEMBUNGKUS FUNGSI GAME ---------- */
const wrap=(n,fn)=>{const o=window[n];window[n]=function(...a){return fn(o,a)}};
wrap('renderBoard',(o,a)=>{o(...a);syncTokens()});
let rolling=false;
wrap('doRoll',(o,a)=>{
  if(rolling||gameOver||lastRoll)return;rolling=true;S.dice();
  const f=$('#diceFace'),btn=$('#rollBtn');btn.disabled=true;f.classList.add('rolling');
  const iv=setInterval(()=>f.textContent='⚀⚁⚂⚃⚄⚅'[Math.random()*6|0],70);
  setTimeout(()=>{clearInterval(iv);f.classList.remove('rolling');rolling=false;o(...a)},600);
});
wrap('showCustomModal',(o,a)=>{S.pop();o(...a)});
wrap('submitAnswer',(o,a)=>{const p=players[current],n=p.answered;o(...a);if(p.answered>n)(lastCorrect?S.ok:S.no)()});
wrap('bonusSpin',(o,a)=>{o(...a);for(let i=0;i<14;i++)setTimeout(S.tick,i*115);setTimeout(S.bonus,1700)});
wrap('duelEvent',(o,a)=>{S.duel();o(...a)});
wrap('endDuel',(o,a)=>{const live=DU&&!DU.done;o(...a);if(live)(a[0]>=0?S.ok:S.no)()});
function confetti(){const c=document.createElement('div'),k=['#3157d5','#ff766e','#16a36a','#ffb454','#8664db'];c.className='confetti';for(let i=0;i<80;i++){const s=document.createElement('i');s.style.cssText=`left:${Math.random()*100}%;background:${k[i%5]};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*.8}s;transform:rotate(${Math.random()*360}deg)`;c.appendChild(s)}document.body.appendChild(c);setTimeout(()=>c.remove(),5200)}
wrap('finishGame',(o,a)=>{o(...a);S.win();confetti()});
})();
