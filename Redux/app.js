const initialState = {
    backgroundColor: '#ffffff'
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_BACKGROUND_COLOR':
        return {
          ...state,
          backgroundColor: action.payload
        };
      default:
        return state;
    }
  }
  
  const store = Redux.createStore(rootReducer);
  
  function updateBackgroundColor() {
    const state = store.getState();
    document.body.style.backgroundColor = state.backgroundColor;
  }
  
  store.subscribe(updateBackgroundColor);
  
  document.getElementById('colorPicker').addEventListener('input', (event) => {
    store.dispatch({ type: 'CHANGE_BACKGROUND_COLOR', payload: event.target.value });
  });
  
  // Инициализация фона
  updateBackgroundColor();