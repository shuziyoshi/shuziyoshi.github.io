document.addEventListener('DOMContentLoaded',function(){
    let mybodyid = document.querySelector('body').getAttribute('id');
    let mynavid = '#nav' + mybodyid;
    console.log("mybodyid is " + mybodyid);
    console.log("mynavid is " + mynavid);
    document.querySelector(mynavid).setAttribute('id','iamhere');
  });