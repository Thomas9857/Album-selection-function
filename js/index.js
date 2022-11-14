// 1.获取展示图片的信息
let image = document.querySelector(".image");
// 获取下方四张图片的信息集合
let imgArr = document.getElementsByClassName("item");
for(let i = 0; i < imgArr.length; i ++) {
    // 2.为下方的每一张图片绑定一个鼠标悬停事件
    imgArr[i].onmouseover = () => {
        // 3.先使用for循环清除下方所有图片的选中样式
       for(let j = 0; j < imgArr.length; j++){
        // 通过className获取类值，并修改成item默认类
           imgArr[j].className = "item"
       }
       // 4.通过src，获取鼠标悬停的图片链接，并赋值给上方展示的图片
       image.src = imgArr[i].src;
       // 5.修改鼠标悬停的图片的样式，追加一个active类，表示选中
       imgArr[i].className += " active";
       // 注：active前面需要加空格
       // className获取的是值类型是字符串，通过+=去追加类值，不添加空格，会变成itemactive类
       // css没有这个类，所有会出现样式混乱
       // 也可以写成
       // imgArr[i].className = "item active"
    }
}