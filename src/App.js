import { useState } from "react";
import Rating from "./components/Rating";
import './app.scss';
import { createArray } from "./utils";


const App = () => {

  const [state, setstate] = useState({
    selected: 3.5,
    stars: createArray(5),
    readOnly: true
  })

  const starInputChange = (e) => {
    if(e.target.value && (e.target.value <= 20)){
      setstate({
        ...state,
        stars: createArray(e.target.value)
      })
    }
  };

  const ratingInputChange = (e) => {
    setstate({
      ...state,
      selected: e.target.value
    })
  };

  const readOnlyHandler = (value) => {
    setstate({
      ...state,
      readOnly: value
    })
  }

  return (
    <div className="app">
      <div className="controls">
        <div className="input-field">
          <label>Stars</label>
          <input
            type="number" 
            onChange={starInputChange} 
            min={0}
            max={20}
            defaultValue={state.stars.length}
            />
        </div>
        <div className="input-field">
          <label>Rating</label>
          <input
            type="number" 
            min={0}
            step="0.1"
            max={state.stars.length}
            onChange={ratingInputChange} 
            value={state.selected}
            />
        </div>
        <div className="input-field">
          <label>Read only</label>
          <div className="radio-box">
            <div className="radio-field">
              <input id="rd1" onChange={()=> readOnlyHandler(true)} type="radio" defaultChecked={state.readOnly} name="readonly"/>
              <label htmlFor="rd1">True</label>
            </div>
            <div className="radio-field">
              <input type="radio" onChange={()=> readOnlyHandler(false)} id="rd2" defaultChecked={!state.readOnly} name="readonly"/>
              <label htmlFor="rd2">False</label>
            </div>
          </div>
        </div>
      </div>
      <Rating selected={state.selected} readOnly={state.readOnly} ratings={state.stars}/>
    </div>
  );
}

export default App;
