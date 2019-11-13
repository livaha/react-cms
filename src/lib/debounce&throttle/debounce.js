/**防抖函数 */
function debounce (fn,wait){
    let timeout = null;
    return function(){
        if(timeout !== null){
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn,wait);
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