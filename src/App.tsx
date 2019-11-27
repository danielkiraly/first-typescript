import React from 'react';
import './App.css';
import axios from 'axios';
import CheckboxContainer from './components/CheckboxContainer';
import CreatableSelect from "react-select/creatable";
import { RecipeList } from './components/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';


interface Ingredient {
  label: string,
  value: string
}

interface Recipe {
  name: string,
  picture: string,
  ingredients: Array<String>,
  url: string
}

interface MyState {
  selectedDiets: string[],
  selectedHealth: string[],
  selectedIngredients: string[],
  ingredients: Array<Ingredient>,
  recipes: Array<Recipe>
};


class App extends React.Component{
  state: MyState = {
    selectedDiets: [],
    selectedHealth: [],
    selectedIngredients: [],
    recipes: [],
    ingredients: [
      {label: "chicken", value: "chicken"},
      {label: "bean", value: "bean"},
      {label: "chickpea", value: "chickpea"},
      {label: "fish", value: "fish"},
      {label: "pork", value: "pork"},
      {label: "cheese", value: "cheese"},
      {label: "rice", value: "rice"},
      {label: "chocolate", value: "chocolate"},
      {label: "tomato", value: "tomato"},
      {label: "potato", value: "potato"}
    ]
  };

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(results => {
  //       if (results.data !== undefined) {
  //       let persons = results.data.map( (res: { name: string; }) => { return { label: res.name, value: res.name}})
  //       this.setState({ persons });
  //     }
  //     })
  // }

  fetchData = () =>{
    let healthToSend;
    let dietsToSend;
    if(this.state.selectedHealth.length > 0){
      console.log(this.state.selectedHealth)
      healthToSend = this.state.selectedHealth;
    }
    if(this.state.selectedDiets.length > 0){
      console.log(this.state.selectedDiets)
      dietsToSend = this.state.selectedDiets;
    }
      axios({
        method: 'post',
        url: 'http://localhost:8080/search',
        data: {
          q: this.state.selectedIngredients,
          diet: dietsToSend,
          health: healthToSend
        }
      })
      .then((response) => {
        let recipes  = response.data.map((res: any) => {
          let obj: Recipe = {
            name: res.label,
            picture: res.image,
            ingredients: res.ingredientLines,
            url: res.url
          }
          return obj;
        })
        this.setState({recipes : recipes})
      }, (error) => {
        console.log(error);
      });
    }
  

  handleChange = (selectedItem: { map: (arg0: (r: any) => any) => { join: (arg0: string) => void; }; } | null) => {
    if(selectedItem !== null) {
      let list = selectedItem.map(r => r.value).join('&');
      this.setState({selectedIngredients: list}, () => {
        this.fetchData();

      });
    }
  }

  doItInApp = (selectedFilters: Map<string, boolean>) => {
    let selectedDietList = [];
    let selectedHealthList = [];
    for (let [key, value] of selectedFilters) {
      if (value === true) {
        if(key === 'balanced' || key === 'high protein' || key === 'low-fat' || key === 'low-carb'){
          selectedDietList.push(key);
        }else{
          selectedHealthList.push(key);
        }
      }
    }
    let resultDiets = selectedDietList.map(r => r).join('&');
    let resultHealth = selectedHealthList.map(r => r).join('&');
    this.setState({selectedDiets: resultDiets}, () => {
      this.setState({selectedHealth: resultHealth}, () => {
        this.fetchData();
      });

    });
  }

  render(){
    return (
      <div className="App">
          <CreatableSelect
                      isMulti
                      options={this.state.ingredients} 
                      onChange={this.handleChange.bind(this)}
                      />
          <CheckboxContainer doIt={this.doItInApp}/>
          <CardDeck>
            <RecipeList recipes={this.state.recipes}/>
          </CardDeck>
      </div>
    );
  }
}


export default App;
