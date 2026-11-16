
const h=document.querySelector('header');
addEventListener('scroll',()=>h.classList.toggle('small',scrollY>60),{passive:true});
document.getElementById('bg').onclick=()=>document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('.cards,.duo,.goalcards,.split,.reviews,.counter,.intro,.pay,.contact').forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv,.story').forEach(e=>io.observe(e));
document.querySelectorAll('.counter b').forEach(b=>{const t=b.textContent,n=parseInt(t.replace(/\D/g,''));const suf=t.replace(/[\d.]/g,'');
 new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();let s=performance.now();(function f(now){const p=Math.min((now-s)/1500,1);b.textContent=String(Math.round(n*p)).replace(/\B(?=(\d{3})+$)/g,'.')+suf;if(p<1)requestAnimationFrame(f)})(s)}}).observe(b)});
