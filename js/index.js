pageLoaded.innerHTML = (new Date()).toLocalTimeString()
btn.addEventListener('click', makeAjax);

function makeAjax() {
   var xhr = new XMLHttpRequest();
   xhr.onreadestatuschange = function();
   if (xhr.readyState === 4 && xhr.status ===200) {
       
   }
}