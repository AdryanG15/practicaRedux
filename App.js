const { combineReducers } = require("redux");

//Import
const createStore = require("redux").createStore;
const conbineReducers = require("redux").combineReducers

//Actions
const BuyPokemon = "BuyPokemon";
const ReturnPokemon = "ReturnPokemon";
const buyPokemonAction = (cant) => {
  return {
    type: BuyPokemon,
    payload: cant,
  };
};

const returnPokemonAction = (cant) => {
    return {
      type: ReturnPokemon,
      payload: cant,
    };
  };


const BuySwitch = "BuySwitch";
const buySwitchAction = (cant) => {
  return {
    type: BuySwitch,
    payload: cant,
  };
};

//Reducers
const default_games_state = {
  pokemon: 10, 
  yoshi: 10
};

const games_reducer = (state = default_games_state, action) => {
  switch (action.type) {
    case BuyPokemon: {
      return {
        ...state,
        pokemon: state.pokemon - action.payload,
      };
    }

    case ReturnPokemon: {
        return {
          ...state,
          pokemon: state.pokemon + action.payload,
        };
      }

    default: return state;
  }
};


const default_console_state = {
  ps5: 30,
  switch:32,

}

const console_reducer = (state = default_console_state, action) => {
  switch (action.type) {
    case BuySwitch: {
      return {
        ...state,
        switch: state.switch + action.payload,
      };
    }
  
    default: return state;
  }
};


const rootReducers = combineReducers({
  games_reducer,
  console_reducer
})


//Store
const store = createStore(rootReducers);

console.log("Estado incial:", store.getState());
store.subscribe(() => {
  console.log("Cambio de estado:", store.getState());
});
//store.dispatch(buyPokemonAction(3));
//store.dispatch(returnPokemonAction(2));

store.dispatch(buySwitchAction(2));
