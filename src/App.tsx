import React from "react";
import "./App.css";
import axios from "axios";
import CheckboxContainer from "./components/CheckboxContainer";
import CreatableSelect from "react-select/creatable";
import { RecipeList } from "./components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartPage from "./components/ShoppingCartPage";
import FavouritePage from "./components/FavouritePage";
import RegistrationPage from "./Auth/RegistrationPage";
import LoginPage from "./Auth/LoginPage";
import LogOutBtn from "./components/LogOutBtn";


interface Ingredient {
  label: string;
  value: string;
}

interface Recipe {
  label: string;
  image: string;
  ingredients: Array<String>;
  url: string;
}

interface MyState {
  selectedDiets: string[];
  selectedHealth: string[];
  selectedIngredients: string[];
  ingredients: Array<Ingredient>;
  recipes: Array<Recipe>;
}

class App extends React.Component {
  state: MyState = {
    selectedDiets: [],
    selectedHealth: [],
    selectedIngredients: [],
    recipes: [],
    ingredients: [
      { label: "chicken", value: "chicken" },
      { label: "bean", value: "bean" },
      { label: "chickpea", value: "chickpea" },
      { label: "fish", value: "fish" },
      { label: "pork", value: "pork" },
      { label: "cheese", value: "cheese" },
      { label: "rice", value: "rice" },
      { label: "chocolate", value: "chocolate" },
      { label: "tomato", value: "tomato" },
      { label: "potato", value: "potato" }
    ]
  };

  fetchData = () => {
    let healthToSend;
    let dietsToSend;
    if (this.state.selectedHealth.length > 0) {
      console.log(this.state.selectedHealth);
      healthToSend = this.state.selectedHealth;
    }
    if (this.state.selectedDiets.length > 0) {
      console.log(this.state.selectedDiets);
      dietsToSend = this.state.selectedDiets;
    }
    axios({
      method: "post",
      url: "http://localhost:8080/search",
      data: {
        q: this.state.selectedIngredients,
        diet: dietsToSend,
        health: healthToSend
      }
    }).then(
      response => {
        let recipes = response.data.map((res: any) => {
          let obj: Recipe = {
            label: res.label,
            image: res.image,
            ingredients: res.ingredients,
            url: res.url
          };
          return obj;
        });
        this.setState({ recipes: recipes });
      },
      error => {
        console.log(error);
      }
    );
  };

  handleChange = (
    selectedItem: {
      map: (arg0: (r: any) => any) => { join: (arg0: string) => void };
    } | null
  ) => {
    if (selectedItem !== null) {
      let list = selectedItem.map(r => r.value).join("&");
      this.setState({ selectedIngredients: list });
    }
  };

  doItInApp = (selectedFilters: Map<string, boolean>) => {
    let selectedDietList = [];
    let selectedHealthList = [];
    for (let [key, value] of selectedFilters) {
      if (value === true) {
        if (
          key === "balanced" ||
          key === "high protein" ||
          key === "low-fat" ||
          key === "low-carb"
        ) {
          selectedDietList.push(key);
        } else {
          selectedHealthList.push(key);
        }
      }
    }
    let resultDiets = selectedDietList.map(r => r).join("&");
    let resultHealth = selectedHealthList.map(r => r).join("&");
    this.setState({ selectedDiets: resultDiets }, () => {});
    this.setState({ selectedHealth: resultHealth }, () => {});
  };

  indexPage = () => {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light" fixed="top">
          <Navbar.Brand><Link style={{color: 'grey'}} to="/favourites">Favourites</Link></Navbar.Brand>
          <Navbar.Brand><Link style={{color: 'grey'}} to="/shopping-cart">My shopping list</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <DropdownButton
              title="Filters"
              variant="secondary"
              id={`dropdown-variants-filters`}
              key="filters"
            >
              <CheckboxContainer doIt={this.doItInApp}/>
            </DropdownButton>
          </Nav>
          <Form inline>
            <CreatableSelect
              isMulti
              placeholder={"Search ingredient(s)"}
              options={this.state.ingredients}
              onChange={this.handleChange}
            />
            <Button
              variant="outline-dark"
              onClick={(_event: any) => {
                this.fetchData();
              }}
            >
              Search
            </Button>
          </Form>
          <Navbar.Brand><Link style={{color: 'grey'}} to="/registration">Registration</Link></Navbar.Brand>
          <Navbar.Brand><Link style={{color: 'grey'}} to="/login">Login</Link></Navbar.Brand>
          <Navbar.Brand><LogOutBtn /></Navbar.Brand>

        </Navbar>
        <br></br>
        <br></br>
        <CardDeck>
          <RecipeList recipes={this.state.recipes} />
        </CardDeck>
      </React.Fragment>
    );
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={this.indexPage} />
          <Route path="/shopping-cart" component={ShoppingCartPage} />
          <Route path="/favourites" component={FavouritePage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          

        </div>
      </Router>
    );
  }
}
export default App;
