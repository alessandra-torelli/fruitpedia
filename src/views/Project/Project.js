import React from "react";
import style from "./Project.module.css";
import imageFile from "../../assets/images/doc/imageFile.png";
import figma from "../../assets/images/doc/figma.png";
import browserURL from "../../assets/images/doc/browserURL.png";
import fetch from "../../assets/images/doc/fetch.png";
import screenFruitpedia from "../../assets/images/doc/screenFruitpedia.png";
import screenPokemon from "../../assets/images/doc/screenPokemon.png";
import onErrorImg from "../../assets/images/doc/onErrorImg.png";
import errorRichiamo from "../../assets/images/doc/errorRichiamo.png";
import defaultImgSrc from "../../assets/images/doc/default.png";
import routeDetail from "../../assets/images/doc/routeDetail.png";
import problems from "../../assets/images/doc/problems.png";
import errors from "../../assets/images/doc/errors.png";
import corsPolicy from "../../assets/images/doc/corsPolicy.png";

function Project(){
    return(
        <main className="container-fluid">
            <div className="container px-5" id={style.doc}>
                <h1>Project documentation</h1>

                    <h2 className="mt-2">Introduction</h2>
                    <p>
                    This project was developed as part of the{" "}
                    <a
                        className="bodyStrong"
                        href="https://elearning.unimib.it/enrol/index.php?id=44672"
                    >
                        Web Applications: Design and Development
                    </a>{" "}
                    course.
                    </p>
                    <p>
                    The goal was to create a web application using a public API. I chose{" "}
                    <a className="bodyStrong" href="https://fruityvice.com/">
                        Fruityvice API
                    </a>
                    , which provides information about fruits, including taxonomy (genus,
                    family, order) and nutritional values.
                    </p>
                    <p>
                    Since the API is available only in English, the website content was kept
                    in English as well.
                    </p>

                    <h2 className="mt-2">API choice</h2>
                    <ul>
                    <li>
                        <span className="bodyStrong">API used: </span>
                        <a className="bodyStrong" href="https://fruityvice.com/">
                        Fruityvice API
                        </a>
                    </li>
                    <li>
                        <span className="bodyStrong">Available data: </span>array of fruits (id,
                        name, genus, family, order, nutritional values).
                    </li>
                    <li>
                        <span className="bodyStrong">Limitations: </span>the API does not provide
                        fruit images.
                    </li>
                    </ul>
                    <p>
                    To enhance usability and visual appeal, I created an additional JSON file
                    containing image URLs for each fruit.
                    </p>
                    <p>
                    The image dataset includes:
                    <ul>
                        <li>
                        An icon (sourced from{" "}
                        <a className="bodyStrong" href="https://flaticon.com/">
                            Flaticon
                        </a>
                        )
                        </li>
                        <li>
                        Three photos (plant, flowers, fruit) selected from open sources.
                        </li>
                    </ul>
                    </p>
                    <img className="pb-4" src={imageFile} alt="Images list" />

                    <h2 className="mt-2">Website structure</h2>
                    <p>
                    The website is organized into the following sections:
                    <ul>
                        <li>
                        <span className="bodyStrong">Homepage: </span>introduction to the project
                        and dataset.
                        </li>
                        <li>
                        <span className="bodyStrong">Fruits: </span>list of fruits, displayed as
                        either cards or a table.
                        </li>
                        <li>
                        <span className="bodyStrong">Photos: </span>gallery of plants and flowers,
                        with a toggle switch to navigate between them.
                        </li>
                        <li>
                        <span className="bodyStrong">Detail: </span>fruit-specific page,
                        accessible from Fruits or Photos, with detailed information.
                        </li>
                        <li>
                        <span className="bodyStrong">Project: </span>explanation of the
                        development process.
                        </li>
                    </ul>
                    </p>

                    <h3 className="mt-2">Development</h3>
                    <p>
                    The project was built with <span className="bodyStrong">React</span>{" "}
                    (initialized using create-react-app) and Reactstrap (Bootstrap for React).
                    </p>

                    <h4 className="mt-2">File Structure</h4>
                    <p>
                    The project follows a modular organization inside the <code>src/</code> folder:
                    <ul>
                        <li>
                        <span className="bodyStrong">assets/: </span>static resources such as
                        images and icons.
                        </li>
                        <li>
                        <span className="bodyStrong">components/: </span>reusable UI elements,
                        including layout parts and single cards.
                        </li>
                        <li>
                        <span className="bodyStrong">views/: </span>page-level components
                        corresponding to the main routes of the application.
                        <br />
                        This folder also contains the <span className="bodyStrong">App/</span>{" "}
                        directory, with <code>App.js</code> as the entry point managing layout and
                        routing.
                        </li>
                        <li>
                        <span className="bodyStrong">index.css: </span>global styling rules for
                        typography, color palette, and buttons.
                        </li>
                    </ul>
                    </p>
                    <p>
                    For navigation, the project relies on{" "}
                    <code>react-router-dom v6.8.1</code>, which manages
                    both static and dynamic routes (e.g., detail pages for individual fruits).
                    </p>

                    <h3>Graphic design</h3>
                    <p>
                    After defining the website structure, I created interface drafts in Figma.
                    The design was built around a nature-inspired palette with vibrant accents,
                    aiming for a clean yet lively aesthetic.
                    </p>
                    <img className="pb-4" src={figma} alt="graphic design" />

                    <h2>Code implementation</h2>
                    <p>
                    Starting from the <span className="bodyStrong">create-react-app</span>{" "}
                    boilerplate, I organized the <code>src/</code> folder into{" "}
                    <span className="bodyStrong">components</span>,{" "}
                    <span className="bodyStrong">views</span>, and{" "}
                    <span className="bodyStrong">assets</span>.
                    </p>
                    <p>
                    Global styles were defined in <span className="bodyStrong">index.css</span>,
                    covering typography, color palette, and buttons.
                    </p>
                    <p>
                    To integrate Bootstrap, I installed <span className="bodyStrong">Reactstrap</span>.
                    </p>

                    <h3>Core components</h3>

                    <h4>MainTemplate</h4>
                    <p>
                    A layout component including header, footer, and dynamic content (via{" "}
                    <code>children</code>). Imported into <code>App.js</code>.
                    </p>

                    <h4>Footer</h4>
                    <p>
                    Contains secondary navigation, project details (API and author), and a
                    reference to the university course. Props were used to pass author, course, and
                    navigation details.
                    </p>

                    <h4>Header</h4>
                    <p>
                    Built with the Bootstrap navbar, supporting responsive collapse. Navigation
                    items and logo are passed as props and assigned in <code>App.js</code>.
                    </p>

                    <h3>Views</h3>

                    <h4>Home</h4>
                    <p>
                    The first page implemented, used to test the rendering of{" "}
                    <code>MainTemplate</code>.
                    </p>

                    <h3>Routing</h3>
                    <p>
                    Routes were defined in <code>App.js</code> using{" "}
                    <code>react-router-dom v6.8.1</code>. The same library
                    was used for navigation with <code>NavLink</code>.
                    </p>
                    <p>
                    Static pages (Fruits and Photos) were created inside{" "}
                    <code>views/</code>.
                    </p>
                    <p>
                    Dynamic detail pages are handled with a route such as: <code>/fruits/:id</code> where <code>:id</code> corresponds to the fruit identifier.
                    </p>

                    <h3>Page components</h3>

                    <h4>Fruits</h4>
                    <p>
                    Built using three subcomponents: <code>FruitTable</code>,{" "}
                    <code>FruitCard</code>, and <code>FruitCardsGrid</code>. Users can switch
                    between table and card views with a toggle.
                    </p>

                    <h4>FruitTable</h4>
                    <p>
                    Maps icons and fruit data into a table layout, styled with CSS modules.
                    </p>

                    <h4>FruitCard</h4>
                    <p>
                    Defines the structure of a single card using Bootstrap components. The whole
                    card is wrapped in a <code>NavLink</code> to make it fully clickable.
                    </p>

                    <h4>FruitCardsGrid</h4>
                    <p>
                    Renders a responsive grid of cards with dynamic columns using Bootstrap
                    breakpoints.
                    </p>

                    <h3>Detail page</h3>
                    <p>
                    Displays detailed fruit data. The fruit is selected by filtering based on the
                    <code>:id</code> parameter from the URL.
                    </p>

                    <h2>API integration</h2>
                    <p>
                    Data was initially fetched directly from the Fruityvice API, but requests
                    failed due to <span className="bodyStrong">CORS policy</span> restrictions.
                    </p>
                    <p>
                    Attempts to bypass the issue (e.g., using <code>mode: 'no-cors'</code>) were
                    unsuccessful. As a workaround, I retrieved the full dataset manually, stored it
                    locally in a JSON file, and used it throughout the project.
                    </p>
                    <p>
                    The application then filters between the local dataset and the images JSON by
                    matching fruit IDs.
                    </p>

                    <img className="pb-4" src={browserURL} alt="Chiamata da browser"/>
                        <img className="pb-4" src={fetch} alt="Codice fetch"/>
                        <img className="pb-4" src={screenFruitpedia} alt="Risultato fetch Fruitpedia"/>
                        <img className="pb-4" src={screenPokemon} alt="Risultato fetch Pokémon"/>
                        <img className="pb-4" src={errors} alt="errors"/>
                        <img className="pb-4" src={corsPolicy} alt="cors polycy"/>

                    <h4>Photos</h4>
                    <p>
                    Displays a gallery of plants and flowers. A switch allows users to toggle
                    between the two views.
                    </p>

                    <h4>SinglePlant & SingleFlower</h4>
                    <p>
                    Components responsible for rendering individual images with labels, mapping
                    the JSON dataset and filtering by fruit name.
                    </p>

                    <h4>Plants & Flowers</h4>
                    <p>
                    Higher-level components structuring the gallery layout (rows and columns,
                    responsive to screen size).
                    </p>

                    <h3>Error handling and fallback mechanisms</h3>

                    <h4>Default Images</h4>
                    <p>
                    Utility functions were created to return placeholder images/icons if a resource
                    failed to load. This prevents broken layouts due to missing URLs.
                    </p>
                    <img className="pb-4" src={onErrorImg} alt="function error image" />
                    <img className="pb-4" src={errorRichiamo} alt="recall default image on error" />
                    <img className="pb-4" src={defaultImgSrc} alt="default image in source" />

                    <h4>404 Page</h4>
                    <p>
                    A dedicated component was implemented to handle invalid routes, ensuring a
                    consistent user experience even in case of navigation errors.
                    </p>
                    <img className="pb-4" src={routeDetail} alt="route to detail page"/>
                    <img className="pb-4" src={problems} alt="problems images"/>

            </div>
        </main>
    )
}

export default Project;