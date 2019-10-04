import React from 'react';

import {CardList} from './components/card-list/card-list.component.jsx'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      seachField:'',
      placeholder:''
    }

    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(users=> this.setState({monsters:users}))
  }

  handleChange(e){
    this.setState({searchField: e.target.value});
  }

  handleChange2 = (e) => this.setState({searchField: e.target.value});



  render(){
    const monsters = this.state.monsters;
    const searchField = this.state.seachField;
    const placeholder = this.state.placeholder;

    console.log(monsters);
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox placeholder={placeholder} handleChange={e=>this.handleChange2(e)}>
        </SearchBox>
        <input type='search' 
            placeholder='search monsters' 
            onChange={e=>
              this.setState({seachField:e.target.value}, ()=> console.log(this.state))
            }>
        </input>
        <CardList monsters ={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
