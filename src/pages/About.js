import Fatline from '../assets/images/fatline.png'

let About = () => {
    return (
        <div className="about">
            <h1>ABOUT US</h1>
            <hr/>
            <div className="row">
                <p>
                    Depuis plus de 11 ans je pratique l'art du tatouage, et plus précisement du tatouages Japonais traditionnel
                    "irezumi". Pour moi le tatouage, c'est d'abord une passion, une rencontre, un échange et un travail qui se 
                    fera a deux. Comme chaque histoire est unique, je m'accorde le temps de la réflexion, avec vous, afin de 
                    créer ce tatouage que vous aimerez toute une vie. Le côté spirituel, l'échange et la confiance est ce qui
                    me guide dans ma création. 
                </p>
                <img src={Fatline} alt='tattoo artist in his studio' />
            </div>
        </div>
    )
}

export default About
