import { useState } from 'react'

function Home() {
    const [moosic,setMoosic] = useState(new Audio('https://www.marxists.org/history/ussr/sounds/mp3/soviet-anthem1944.mp3'
    )) 
    const handleMusic = () => {
        console.log(moosic)
        moosic.play();
    }

    return(
        <>
        <div className='home'>
            <h1 className='title' >UKRAINE SANCTIONS</h1>
            <img src='https://cdn.images.express.co.uk/img/dynamic/59/590x/570122_1.jpg' onClick={handleMusic} className='putin' alt='Sadimir Putin'></img>
            <p className='quote'>"In light of the invasion by Russia on the 24th of February 2022, it is imperative that information be propagated regarding the entities - both individuals and enterprises - which undermine the struggle for freedom. Although some may be compelled to dismiss the war as a "far away" conflict - not warranting the attention of those whose lives are far removed from it - this is the mentality which allowed both world wars to become the abominations they were. The ultimate conclusion of this war has definitive implications and explications on the world entire." <br></br> -Alex L. Chang</p>
        </div>
        </>
    )
}

export default Home