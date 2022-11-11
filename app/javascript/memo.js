function post (){
  const submit = document.getElementById("submit");
  //submitボタンがクリックされたら発火
  submit.addEventListener("click", (e) => {
    //既定のイベント（投稿ボタンをクリック、など）を無効化
    e.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);
    
    const XHR = new XMLHttpRequest();
    //.open("HTTPメソッド", "パス", "非同期通信ON/OFF")
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
 };
 
 window.addEventListener('load', post);