const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    
    //コントローラーのrenderで使用しているjson
    XHR.responseType = "json";
    XHR.send(formData);
    
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
 };
 
 window.addEventListener('load', post);