import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";

export default function Page() {
    return <>

        <div className="container py-4">
            <div className="row">

                <Header />
                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>Hello Coffee Lovers!</h1>
                    <p>
                        Coffee beans are the seeds of the coffee plant, specifically from the cherries that grow on coffee trees. There are two main types: Arabica and Robusta. Arabica beans, known for their smooth, complex flavors and higher acidity, dominate the market, while Robusta beans are stronger and more bitter, often used in espresso blends.
                        After harvesting, the beans undergo processing methods—washed, natural, or honey—that significantly influence their taste profiles. Once dried, they are roasted to develop the rich flavors we associate with coffee. The roasting process can vary in length and temperature, resulting in everything from light, fruity notes to deep, chocolatey undertones.
                        Coffee beans are packed with antioxidants and essential oils, contributing to their rich aroma and potential health benefits. Each cup of coffee tells a story of its origin, the craftsmanship of its preparation, and the artistry of its brewing, making every sip a unique experience.
                    </p>
                </div>

            </div>
        </div>



    </>
}