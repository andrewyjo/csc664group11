import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import useCollapse from "react-collapsed";
import ReactDOM from "react-dom";
import Timeline from "react-image-timeline";
import "./App.css";
//import timeline from "./timeline.js";
//const mysql = require("mysql");
//
//const db = mysql.createConnection({
//    host: "localhost",
//    user: "tester00",
//    password: "Grapefruit123!@#",
//    database: "smartmediainterface",
//});

const events = [
    {
        date: new Date(2013, 9, 27),
        text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
        title: "Cairo, Egypt",
        buttonText: "Click Me",
        imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
        onClick: console.log,
    },
    {
        date: new Date(2020, 9, 27),
        text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
        title: "Cairo, Egypt",
        buttonText: "Click Me",
        imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
        onClick: console.log,
    },
];

const images = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 140,
        height: 74,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 140,
        height: 74,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        width: 20,
        height: 12,
    },
];
function Collapsible() {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally
        setExpanded(!isExpanded);
    }
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
                {isExpanded ? "Collapse" : "All photos"}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {/* <input type="file" name="file[]" multiple/> */}
                    Now you can see the hidden content. <br />
                    Click again to hide...
                </div>
            </div>
        </div>
    );
}

function App() {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => {
                setBackendData(data);
            });
    }, []);

    return (
        <div className="App">
            <h1>intelligent multimedia interface</h1>
            <Gallery images={images} />
            {/* <Timeline events={events} /> */}
            <main>
                <h1>Events</h1>
                <div>
                    {typeof backendData.users === "undefined" ? (
                        <p>Loading...</p>
                    ) : (
                        backendData.users.map((user, i) => <p key={i}>{user}</p>)
                    )}
                </div>

                <section>
                    <h2>2 December</h2>
                    <h2>{backendData.users}</h2>
                    <div class="grid-wrapper">
                        <article>
                            <h3>9:00 AM</h3>
                            <p>Life finds a way. You know what? It is beets. </p>
                        </article>
                        <article>
                            <h3>10:00 AM</h3>
                            <p>I've crashed into a beet truck </p>
                        </article>
                        <article>
                            <h3>12:30 AM</h3>
                            <p>I was part of something special. </p>
                        </article>
                        <article>
                            <h3>13:30 AM</h3>
                            <p>
                                Yeah, but your scientists were so preoccupied with whether or not they could, they
                                didn't stop to think if they should.{" "}
                            </p>
                            <img
                                src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                                alt="Black and white photo of a lake"
                            />
                        </article>
                        <article>
                            <h3>14:30 AM</h3>
                            <p>Just my luck, no ice. God help us, we're in the hands of engineers. </p>
                        </article>
                        <article>
                            <h3>15:30 AM</h3>
                            <p>I gave it a cold? I gave it a virus. A computer virus. </p>
                        </article>
                        <article>
                            <h3>16:30 AM</h3>
                            <p>
                                God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
                                creates Dinosaurs.{" "}
                            </p>
                        </article>
                        <article>
                            <h3>17:30 AM</h3>
                            <p>What do they got in there? King Kong? </p>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
                                alt="Black and White Eiffel Tower"
                            />
                        </article>
                    </div>
                </section>
                <section>
                    <h2>3 Jan</h2>
                    <div class="grid-wrapper">
                        <article>
                            <h3>9:00 AM</h3>
                            <p>Life finds a way. You know what? It is beets. </p>
                        </article>
                        <article>
                            <h3>10:00 AM</h3>
                            <p>I've crashed into a beet truck </p>
                        </article>
                        <article>
                            <h3>12:30 AM</h3>
                            <p>I was part of something special. </p>
                        </article>
                        <article>
                            <h3>13:30 AM</h3>
                            <p>
                                Yeah, but your scientists were so preoccupied with whether or not they could, they
                                didn't stop to think if they should.{" "}
                            </p>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
                                alt="Black and White Eiffel Tower"
                            />
                        </article>
                        <article>
                            <h3>14:30 AM</h3>
                            <p>Just my luck, no ice. God help us, we're in the hands of engineers. </p>
                        </article>
                        <article>
                            <h3>15:30 AM</h3>
                            <p>I gave it a cold? I gave it a virus. A computer virus. </p>
                        </article>
                        <article>
                            <h3>16:30 AM</h3>
                            <p>
                                God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
                                creates Dinosaurs.{" "}
                            </p>
                        </article>
                        <article>
                            <h3>17:30 AM</h3>
                            <p>What do they got in there? King Kong? </p>
                            <img
                                src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                                alt="Black and white Mountian view"
                            />
                            <img
                                src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                                alt="Black and white Mountian view"
                            />
                            <img
                                src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                                alt="Black and white Mountian view"
                            />
                        </article>
                    </div>
                </section>
            </main>
            <Collapsible />
            <Collapsible />
            <Collapsible />
            <Collapsible />
        </div>
    );
}

export default App;










//ARCHIVE

//function testAPI() {
//    const [backendData, setBackendData] = useState([{}]);
//
//    useEffect(() => {
//        fetch("/api")
//            .then((response) => response.json())
//            .then((data) => {
//                setBackendData(data);
//            });
//    }, []);
//
//    return (
//        <div>
//            {typeof backendData.users === "undefined" ? (
//                <p>Loading...</p>
//            ) : (
//                backendData.users.map((user, i) => <p key={i}>{user}</p>)
//            )}
//        </div>
//    );
//}
