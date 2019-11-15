/**防抖函数 */
function debounce(fn,delay){
    let timer = null;
    return function(){
        let _this = this;
        let args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            fn.apply(_this,args);
        },delay)
        console.log('scoll')
    }
}

function handle(){
    console.log(Math.random());
}

window.addEventListener('scroll',debounce(handle,1000))
/**
 * 当持续触发scroll事件时，事件处理函数handle只在停止滚动1000毫秒之后才会调用一次，
 * 也就是说在持续触发scroll事件的过程中，事件处理函数handle一直没有执行。
 */
