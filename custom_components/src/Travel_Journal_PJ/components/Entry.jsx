/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image" 
                    src="/rabat.png" 
                    alt="rabat lighthouse"/>
            </div>
            <div className="info-container">
                <img className="marker"src="/marker.png" alt="map marker icon"/>
                <span className="country"> Morocco</span>
                <a href="https://www.google.com/maps/place/%D0%9C%D0%B0%D1%8F%D0%BA+%D0%A0%D0%B0%D0%B1%D0%B0%D1%82%D0%B0/@34.0315238,-6.8469585,17z/data=!3m1!4b1!4m6!3m5!1s0xda76c0d1490f88d:0xd9f1e855759d02e7!8m2!3d34.0315238!4d-6.8443782!16s%2Fg%2F1237d80x?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                <h2 className="entry-title"> Rabat Lighthouse</h2>
                <p className="trip dates"> 26 March, 2025 - 27 March, 2025</p>
                <p className="entry-text"> Standing at the edge of the Atlantic Ocean, the Rabat Lighthouse is an enduring symbol of Morocco’s 
                maritime heritage. Located on Boulevard Mokhtar Gazoulit, this striking white cylindrical tower 
                has been guiding sailors since its construction in 1920.</p>
            </div>
        </article>
    )
}