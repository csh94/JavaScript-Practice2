import React from 'react';
//import PropTypes from "prop-types";


/* 
보다시피 class component와 function component는 차이가 존재해.
function 은 무언가를 return 해, 그리고 screen에 표시돼.
class 는 class야, 하지만 react component 로부터 확장되고, screen에 표시돼.
너는 그걸 render method 안에 넣어야만 해!
react는 자동적으로 모든 class component의 render method를 실행하고자해.
자동으로!

function 이 쉬웠는데 class 를 사용하는 것은
class component가 가진 state 라 불리는 녀석을 원해서야.
state는 object이고 component의 data를 넣을 공간이 있고, 이 데이터는 변해.

*/
class App extends React.Component{
    state = {
        count: 0
    }
    add = () => {
        console.log("add");
    }
    minus = () => {
        console.log("minus");
    }
    render(){
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;