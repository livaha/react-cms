/**函数节流 
 * 函数节流主要有两种实现方法：时间戳和定时器。
 * 函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
*/
/**时间戳方法 */
let throttle1 = function(func,delay){
    let prev = Date.now();
    return function(){
        let context = this;
        let args = arguments;
        let now = Date.now();
        if(now - prev > delay){
            func.apply(context,args);
            prev = Date.now();
        }
    }
}
/**当高频事件触发时，第一次会立即执行，
 * 而后再怎么频繁地触发事件，也都是每delay时间才执行一次。
 * 而当最后一次事件触发完毕后，事件也不会再被执行了 */

//--------------------------------------
/**定时器方法 */
let throttle2 = function(func,delay){
    let timer = null;
    return function(){
        let _this = this;
        let args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                func.apply(_this,args);
                timer = null;
            },delay);
        }
    }
}
/**
 * 当第一次触发事件时，不会立即执行函数，而是在delay秒后才执行。
 * 而后再怎么频繁触发事件，也都是每delay时间才执行一次。
 * 当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
 */

 //--------------------------------------
 /**定时器+时间戳 */
 /**当第一次触发事件时马上执行事件处理函数，
  * 最后一次触发事件后也还会执行一次事件处理函数。 */
 let throttle = function(func,delay){
     let timer = null;
     let startTime = Date.now();
     return function(){
         let curTime = Date.now();
         let remaining = delay - (curTime - startTime);
         let _this = this;
         let args = arguments;
         clearTimeout(timer);
         if(remaining<=0){
             func.apply(_this,args);
             startTime = Date.now();
         }else{
             timer = setTimeout(func,remaining);
         }
     }
 }


function handle(){
    console.log(Math.random());
}
window.addEventListener('scroll',throttle(handle,1000));

/**本示例来源：https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA */