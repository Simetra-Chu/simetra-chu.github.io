/* Decorative CSS animation: no rendering loop, input access or network calls. */
(()=>{
 if(document.querySelector('.meteor-field'))return;
 const field=document.createElement('div');
 field.className='meteor-field';field.setAttribute('aria-hidden','true');
 const paths=[
  [30,-5,125,9,-.4],[72,9,155,12,-6],[104,35,135,11,-3],
  [58,64,115,14,-10],[93,-8,170,15,-12],[42,80,100,13,-5],
  [112,70,145,10,-1.2]
 ];
 for(const [x,y,length,duration,delay] of paths){
  const streak=document.createElement('span');
  for(const [key,value] of Object.entries({x:x+'%',y:y+'%',length:length+'px',duration:duration+'s',delay:delay+'s'}))streak.style.setProperty('--meteor-'+key,value);
  field.append(streak);
 }
 const pause=()=>field.classList.toggle('is-paused',document.hidden);
 document.addEventListener('visibilitychange',pause);pause();
 document.body.prepend(field);
})();
