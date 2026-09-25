(function(){
  const map={home:'../index.html',marketplace:'../index.html#marketplace-section','lucky-draw':'lucky-draw.html','wallet-topup':'topup.html','order-history':'profile.html','user-dashboard':'profile.html','admin-console':'admin.html'};
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-path]').forEach(a=>{
      const p=a.getAttribute('data-path');
      if(map[p]) a.setAttribute('href', map[p]);
      if(p==='login') a.addEventListener('click',e=>{e.preventDefault(); alert('Login/Register ยังไม่ได้เชื่อม Backend');});
    });
  });
})();
