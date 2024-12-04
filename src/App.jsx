import { useEffect, useState } from "react"
import Background from "./Components/background/background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";


const App = () => {
  let heroData = [
    { text1: " Dive into", text2: " What you Love" },
    { text1: " Indulge ", text2: " your passions" },
    { text1: " Give it to", text2: "Your passions" },
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus} />
    </div>
  )
}

export default App

