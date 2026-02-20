document.addEventListener("DOMContentLoaded",function(){
  var burger=document.getElementById("hamburger");
  var menu=document.getElementById("menu");
  if(burger&&menu){
    burger.addEventListener("click",function(){
      menu.classList.toggle("open");
    });
  }
  var links=document.querySelectorAll('a[href^="#"]');
  links.forEach(function(a){
    a.addEventListener("click",function(e){
      var id=a.getAttribute("href").slice(1);
      var el=document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:"smooth"});
        if(menu&&menu.classList.contains("open")) menu.classList.remove("open");
      }
    });
  });
  var y=document.getElementById("year");
  if(y){y.textContent=new Date().getFullYear();}
  var form=document.getElementById("contact-form");
  if(form){
    form.addEventListener("submit",function(e){
      var name=form.querySelector('input[name="name"]');
      var email=form.querySelector('input[name="email"]');
      var msg=form.querySelector('textarea[name="message"]');
      var en=form.querySelector('[data-error="name"]');
      var ee=form.querySelector('[data-error="email"]');
      var em=form.querySelector('[data-error="message"]');
      var ok=true;
      if(!name.value.trim()){en.classList.add("show");ok=false}else{en.classList.remove("show")}
      var ep=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email.value.trim()||!ep.test(email.value)){ee.classList.add("show");ok=false}else{ee.classList.remove("show")}
      if(!msg.value.trim()){em.classList.add("show");ok=false}else{em.classList.remove("show")}
      if(!ok){e.preventDefault();return;}
      alert("Terima kasih. Pesan Anda telah dikirim (simulasi).");
    });
  }
});
