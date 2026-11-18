
const h=document.querySelector('header');
addEventListener('scroll',()=>h.classList.toggle('small',scrollY>60),{passive:true});

/* menú móvil (panel lateral) */
const dr=document.getElementById('drawer'),sc=document.getElementById('scrim'),bg=document.getElementById('bg');
function menu(open){dr.classList.toggle('open',open);sc.classList.toggle('open',open);document.body.classList.toggle('lock',open);bg.setAttribute('aria-expanded',open);dr.setAttribute('aria-hidden',!open)}
bg.onclick=()=>menu(!dr.classList.contains('open'));
document.getElementById('dclose').onclick=sc.onclick=()=>menu(false);
addEventListener('keydown',e=>{if(e.key==='Escape')menu(false)});
dr.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu(false)));
dr.querySelectorAll('.acc>button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));
addEventListener('resize',()=>{if(innerWidth>900)menu(false)});

document.querySelectorAll('.cards,.duo,.goalcards,.split,.reviews,.counter,.intro,.pay,.contact').forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv,.story').forEach(e=>io.observe(e));
document.querySelectorAll('.counter b').forEach(b=>{const t=b.textContent,n=parseInt(t.replace(/\D/g,''));const suf=t.replace(/[\d.]/g,'');
 new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();let s=performance.now();(function f(now){const p=Math.min((now-s)/1500,1);b.textContent=String(Math.round(n*p)).replace(/\B(?=(\d{3})+$)/g,'.')+suf;if(p<1)requestAnimationFrame(f)})(s)}}).observe(b)});

/* carruseles: flechas y puntitos */
const step=t=>{const a=t.children[0],b=t.children[1];return b?b.offsetLeft-a.offsetLeft:a.offsetWidth};
document.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{const t=document.querySelector(b.dataset.t);t.scrollBy({left:b.dataset.d*step(t)*(+b.dataset.n||2),behavior:'smooth'})});
document.querySelectorAll('[data-dots]').forEach(t=>{
 const d=document.createElement('div');d.className='dots';
 [...t.children].forEach((c,i)=>{const s=document.createElement('button');s.setAttribute('aria-label','ir a '+(i+1));s.onclick=()=>t.scrollTo({left:i*step(t),behavior:'smooth'});d.appendChild(s)});
 (t.parentElement.classList.contains('sbox')?t.parentElement:t).after(d);
 const upd=()=>{const i=Math.round(t.scrollLeft/step(t));[...d.children].forEach((s,j)=>s.classList.toggle('on',j===i))};
 t.addEventListener('scroll',upd,{passive:true});upd();
});
