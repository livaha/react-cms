import React, { useState,useEffect } from 'react';
/**Note
 * React 16.8.0 是第一个支持 Hook 的版本。升级时，请注意更新所有的 package，包括 React DOM。 
 * React Native 从 0.59 版本开始支持 Hook。
 * 
 * 使用Hooks的作用
 * 可以在组件之间复用状态逻辑，
 * 替代 React 与状态管理库的结合使用，
 * Hook 使你在非 class 的情况下可以使用更多的 React 特性。 
 * Hook使用规则：
 * + 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
 * + 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有在自定义的 Hook 中调用。）
 * + useState，useEffect要按顺序写，否则会出错
 * + 自定义 Hook 必须以 “use” 开头.
 *  Demo1: useState的使用
 * Demo2: useEffect的使用1
 */
export function Demo1() {//useState
	//声明一个新的叫做"count"的state变量
	const [count,setCount] = useState(0);

  return (
    <div>
        <p>You clicked {count} times</p>
				<button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  );
}

/**useEffect就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
 * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 
 * 具有相同的用途，只不过被合并成了一个 API。 
 * */
export function Demo2(){
	const [count, setCount] = useState(0);

	//相当于comonentDidMount 和 componentDidUpdate:
	//React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。
	useEffect(()=>{
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<p>You clicked {count} times</p>
			<button  onClick={()=>setCount(count+1)}>
				Click me
			</button>
		</div>
	)
}

/**
 *副作用函数还可以通过返回一个函数来指定如何“清除”副作用。
 *例如，在下面的组件中使用副作用函数来订阅好友的在线状态，并通过取消订阅来进行清除操作：
 **/	
export function Demo3(){
	const [isOnline, setIsOnline] = useState(null);

	function handleStatusChange(status){
		setIsOnline(status.isOnline)
	}
	/*useEffect(()=>{
		ChatAPI.subscribeToFriendStatus(props.friend.id,handleStatusChange);
		return ()=>{
			ChatAPI.unsubscribeFromFriendStatus(props.friend.id,handleStatusChange);
		}
	})*/
	if(isOnline===null){
		return 'Loading...';
	}

	return isOnline?'Onlinne':'Offline';

}
