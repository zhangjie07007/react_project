import React, {Component} from 'react';
import './App.less'

class App extends Component {

    componentDidMount() {
        console.log('componentDidMount');
    }

    render(){
        console.log(window);
        return (
            <div className='div' onClick={()=>{console.log(666)}} style={{color:'#ff4400'}}>6666666</div>
        )
    }
}

export default App;