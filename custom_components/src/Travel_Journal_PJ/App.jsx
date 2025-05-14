import Header from "./components/Header"
import Entry from "./components/Entry"


export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry 
                    img={{ src: "/rabat.png", alt: "rabat lighthouse"}}
                    title="Rabat Lighthouse"
                    country="Morocco"
                    googleMapsLink="https://www.google.com/maps/place/%D0%9C%D0%B0%D1%8F%D0%BA+%D0%A0%D0%B0%D0%B1%D0%B0%D1%82%D0%B0/@34.0315238,-6.8469585,17z/data=!3m1!4b1!4m6!3m5!1s0xda76c0d1490f88d:0xd9f1e855759d02e7!8m2!3d34.0315238!4d-6.8443782!16s%2Fg%2F1237d80x?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                    dates="26 March, 2025 - 27 March, 2025" 
                    text="Standing at the edge of the Atlantic Ocean, the Rabat Lighthouse is an enduring symbol of Morocco’s maritime heritage."
                />
            </main>
        </>
    )
}