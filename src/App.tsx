import { useEffect, useState } from "react";
import { CocktailList } from "./components/CocktailList"
import { Cocktail } from "./components/CocktailList/types";
import { Glass } from "./components/Glass";
import { Header } from "./components/Header";

function App() {
  const [cocktailList, setCocktailList] = useState<Cocktail[]>([])
  const [currentCocktail, setCurrentCocktail] = useState<Cocktail | null>(null)
  useEffect(() => {
    (async () => {
      const response = await fetch('/data.json');
      const json = await response.json();
      setCocktailList(json);
    })()
  },[])
  return (
    <div className="app-container">
      <Header />
      <CocktailList onButtonClick={setCurrentCocktail} cocktails={cocktailList}/>
      <Glass ingredients={currentCocktail?.ingredients}/>
    </div>
  )
}

export default App
