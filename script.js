const photos=document.querySelectorAll('.photo');
const sections=document.querySelectorAll('.info,.treatments,.gallery,.contact');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
[...photos,...sections].forEach(el=>observer.observe(el));
