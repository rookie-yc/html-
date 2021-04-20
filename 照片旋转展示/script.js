// 定义body
const body = document.querySelector("body")

// 定义lis

const lis = document.querySelectorAll("li")

// 事件监听，窗口滑动

window.addEventListener("scroll",()=>{
  onscrl();
},false)

onscrl(false);

function onscrl(){
  const s = (body.scrollHeight-window.innerHeight)/15;

  lis.forEach((li,ix)=>{
    const ang = ((this.scrollY-(s*(ix-1)))*360/(s*2))-180;

    li.style.setProperty('--ang',Math.max(-180,Math.min(180,ang))+'deg')
  })
}