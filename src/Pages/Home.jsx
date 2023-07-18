import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";
import Video from "../Composant/Card2";

function Accueil(){
    return (

        <div>
            <Header/>
            <Slide/>
            <h3>Nos Emission</h3>
            <div className="dis">
                <div>
                    <div className="Card-Emission">
                  <Car1/>
                    <Car1/>
                    <Car1/>
                    <Car1/>
                    <Car1/>
                    <Car1/>  
                </div>
                <div className="Card-video">
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                </div>
            </div>
                </div>
                
            <Pied/>
        </div>
        
    )
} export default Accueil