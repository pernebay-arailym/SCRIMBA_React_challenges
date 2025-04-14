/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

import Contact from "./contact.jsx"
import phoneIcon from './images/phone-icon.png';
import mailIcon from './images/mail-icon.png';
import mrWhiskerson from './images/mr-whiskerson.png';
import fluffykins from './images/fluffykins.png';
import felix from './images/felix.png';
import pumpkin from './images/pumpkin.png';
import "./index.css"


function App() {
    return (
        <div className="contacts">
            <Contact 
                img={mrWhiskerson}
                name="Mr. Whiskerson"
                phone="(123)-456-7890"
                email="mr.whiskaz@catnap.meow"/>
            <Contact 
                img={fluffykins}
                name="Fluffykins"
                phone="(212)-555-2345"
                email="fluff@me.com"/>
            <Contact 
                img={felix}
                name="Felix"
                phone="(212)-555-4567"
                email="thecat@hotmail.com"/>
            <Contact 
                img={pumpkin}
                name="Pumpkin"
                phone="(071)-467-2879"
                email="pumpkin@scrimba.com"/>
            
        </div>
    )
}

export default App

/**
*
<article className="contact-card">
    <img 
        src="./images/fluffykins.png"
        alt="Photo of Fluffykins"
    />
    <h3>Fluffykins</h3>
    <div className="info-group">
        <img 
            src="./images/phone-icon.png" 
            alt="phone icon" 
        />
        <p>(212) 555-2345</p>
    </div>
    <div className="info-group">
        <img 
            src="./images/mail-icon.png" 
            alt="mail icon"
        />
        <p>fluff@me.com</p>
    </div>
</article>

<article className="contact-card">
    <img 
        src="./images/felix.png"
        alt="Photo of Felix"
    />
    <h3>Felix</h3>
    <div className="info-group">
        <img 
            src="./images/phone-icon.png" 
            alt="phone icon" 
        />
        <p>(212) 555-4567</p>
    </div>
    <div className="info-group">
        <img 
            src="./images/mail-icon.png" 
            alt="mail icon"
        />
        <p>thecat@hotmail.com</p>
    </div>
</article>

<article className="contact-card">
    <img 
        src="./images/pumpkin.png"
        alt="Photo of Pumpkin"
    />
    <h3>Pumpkin</h3>
    <div className="info-group">
        <img 
            src="./images/phone-icon.png" 
            alt="phone icon" 
        />
        <p>(0800) CAT KING</p>
    </div>
    <div className="info-group">
        <img 
            src="./images/mail-icon.png" 
            alt="mail icon"
        />
        <p>pumpkin@scrimba.com</p>
    </div>
</article>
 */