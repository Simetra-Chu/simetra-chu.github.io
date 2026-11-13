/* Decorative CSS animation: no rendering loop, input access or network calls. */
(()=>{
 if(document.querySelector('.meteor-field'))return;
 const field=document.createElement('div');
 field.className='meteor-field';field.setAttribute('aria-hidden','true');
 // Stagger a full sky of independent trails, already in flight on first paint.
 for(let i=0;i<64;i++){
  const x=8+(i*47%137),y=-24+(i*29%121),length=90+(i*37%125);
  const duration=2.8+(i%9)*.27,delay=-((i*.47+.3)%duration);
  const streak=document.createElement('span');
  for(const [key,value] of Object.entries({x:x+'%',y:y+'%',length:length+'px',duration:duration+'s',delay:delay+'s',opacity:String(.38+(i%7)*.07),width:(.8+(i%3)*.3)+'px'}))streak.style.setProperty('--meteor-'+key,value);
  field.append(streak);
 }
 const pause=()=>field.classList.toggle('is-paused',document.hidden);
 document.addEventListener('visibilitychange',pause);pause();
 document.body.prepend(field);
})();
