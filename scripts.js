function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  
  if (isMobile()) {
    console.log("Mobile device detected");
    //window.location.replace("https://mobile.sadwave.cloud");
  }else {
    console.log("Desktop device detected");
    //window.location.replace("https://sadwave.cloud");
  }   

  