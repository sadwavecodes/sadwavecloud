function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  
  if (isMobile()) {
    console.log("Mobile device detected");
    if (window.confirm('For better mobile functionality click Ok. Cancel will load the desktop website ')) { 
window.location.href='https://mobile.sadwave.cloud';
};
  }else {
    console.log("Desktop device detected");
    window.location.replace("https://sadwave.cloud");
  }   

  
