import { useState } from 'react'
import './assets/components/css/formCentered.css'
import Password from './assets/components/GenaratePassword';

function App() {
  const [selectedNumber, setSelectedNumber] = useState(16);
  const [isnumber,setIsNumber] = useState(false);
  const [ischaracter,setIsCharacter] = useState(false);
  const [issymbol,setIsSymbol] = useState(false);
  const [isemojis,setIsEmojis] = useState(false);
  const [generated,setGenerated] = useState(false);
  

  const handleNumberChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setSelectedNumber(newValue);
  };

  const numberCheckBox =(e)=>{
    setIsNumber(!isnumber);
  }

  const symbolCheckBox =()=>{
    setIsSymbol(!issymbol);
  }

  const characterCheckBox =(e)=>{
    setIsCharacter(!ischaracter);
  }
  const emojisCheckBox =(e)=>{
    setIsEmojis(!isemojis);
  }
  const generatePassword =(event)=>{
    event.preventDefault();
    if(!ischaracter && !isnumber && !issymbol && !isemojis)
    {
      alert("atleast one should be selected");
    }
    else
    {
      setGenerated(true);
    }
  }


  console.log(isnumber);
  console.log(issymbol);
  console.log(ischaracter);
  console.log(selectedNumber);
  return (
    <>
      {generated ? (      <Password ischaracter={ischaracter} isnumber={isnumber} issymbol={issymbol} selectedNumber={selectedNumber} isemojis={isemojis}/>
):
      <form className="center-form" onSubmit={generatePassword}>
        <h2>Password Generator</h2>
        <input type="checkbox" id="Numbers" name="Numbers" onChange={numberCheckBox}/>
        <label htmlFor='Numbers'>Numbers</label>
        <br />
        <input type="checkbox" id="symbols" name="symbols" onChange={symbolCheckBox}/>
        <label htmlFor='symbols'>Symbols</label>
        <br />
        <input type="checkbox" id="characters" name="characters" onChange={characterCheckBox}/>
        <label htmlFor='characters'>Characters</label>
        <br />
        <input type="checkbox" id="emojis" name="emojis" onChange={emojisCheckBox}/>
        <label htmlFor='emojis'>Emojis</label>

        <br />
        <br />
          <input
            type="range"
            min="4"
            max="20"
            value={selectedNumber}
            onChange={handleNumberChange}
            style={{ width: '150px' }}
          />
        <p>Size of Password: {selectedNumber}</p>
        <div className='centered-generate'>
          <input type="submit" value="Generate" />
        </div>
      </form>
}
    </>
  )
}

export default App
