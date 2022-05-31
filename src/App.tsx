
import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

export type Monster ={
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  
  console.log('rendered')

  useEffect(() => {
   

    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }
    fetchUsers()
  }, []); //If the values inside of the dependency array change then useEffect will run again - If there is an empty array then it should never 
  //be called again

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters)
 
  }, [monsters, searchField])
  

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

//Class component

// class App extends Component {
// constructor() {
//   super() //This needs to happen when you call the constructor so it uses this component specifically

//   this.state = {
//     monsters: []   ,
//     searchField: '',
//   }// }
// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     }))
// }

// onSearchChange = (event) => { // Setting this method outside of the render means that the method only gets initialized once rather than created every time
//   // with an anonymous method built directly in the onChange - Optimizes the component
//   const searchField = event.target.value.toLocaleLowerCase()
//   this.setState(() => {
//     return { searchField }
//   })

// }

//   render () {

//     const { monsters, searchField } = this.state; //Destructing
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return(
//     <div className="App">

//     <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox
//       onChangeHandler={onSearchChange}
//       placeholder={'search monsters'}
//       className={'search-box'}
//       />
//       <CardList monsters={filteredMonsters}/>
//     </div>  )
// }
// }

export default App;
