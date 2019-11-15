//用Throttle来优化Debounce
function throttle(fn,delay){
    let last = 0,timer = null;
    return function(){
        let _this = this;
        let args = arguments;
        let now = Date.now();
        if(now - last < delay){
            //如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
            clearTimeout(timer);
            timer = setTimeout(function(){
                last = now;
                fn.apply(_this,args);
            },delay)
        }else{
            //如果时间间隔超出我们设定的时间间隔阈值，那就不等了，给用户反馈一次
            last = Date.now();
            fn.apply(_this,args);
        }
    }
}

function handle(){
    console.log(Math.random());
}

window.addEventListener('scroll',throttle(handle,1000))