import * as React from "react";
// import {useState, useEffect} from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";


const GALLERY_CARD = (props) => {

    const [open, setOpen] = React.useState(false);
    const thumbnailsRef = React.useRef(null);
    const zoomRef = React.useRef(null);

    // TO DO!!! Still trying to space these properly
    const projectInfo = "";
    const formattedProjectInfo = projectInfo.concat(props.Title,"\u000a",props.Date,"\u000a",props.Position);
    const altText = "Ethaniel Snow Portfolio Image for " + props.Title;

    // This is unnecessarily verbose, but it doesn't need to be concise and I think it's more pleasently readable this way
    const numberOfProps = Object.keys(props).length;
    const numberOfSlides = (numberOfProps - 4) / 4;

    // This is crude, but I can't just iterate the image number inside the for loop for some reason so this is my workaround because I'm fed up with it for the time being and this works.
    const arrayOfPotentialSlides = [
            {
                src: props.Image1,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image1d},
                    {src: props.Image1c},
                    {src: props.Image1b},
                    {src: props.Image1},
                    ],
            },
            {
                src: props.Image2,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image2d},
                    {src: props.Image2c},
                    {src: props.Image2b},
                    {src: props.Image2},
                    ],
            },
            {
                src: props.Image3,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image3d},
                    {src: props.Image3c},
                    {src: props.Image3b},
                    {src: props.Image3},
                    ],
            },
            {
                src: props.Image4,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image4d},
                    {src: props.Image4c},
                    {src: props.Image4b},
                    {src: props.Image4},
                    ],
            },
            {
                src: props.Image5,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image5d},
                    {src: props.Image5c},
                    {src: props.Image5b},
                    {src: props.Image5},
                    ],
            },
            {
                src: props.Image6,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image6d},
                    {src: props.Image6c},
                    {src: props.Image6b},
                    {src: props.Image6},
                    ],
            },
            {
                src: props.Image7,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image7d},
                    {src: props.Image7c},
                    {src: props.Image7b},
                    {src: props.Image7},
                    ],
            },
            {
                src: props.Image8,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image8d},
                    {src: props.Image8c},
                    {src: props.Image8b},
                    {src: props.Image8},
                    ],
            },
            {
                src: props.Image9,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image9d},
                    {src: props.Image9c},
                    {src: props.Image9b},
                    {src: props.Image9},
                    ],
            },
            {
                src: props.Image10,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image10d},
                    {src: props.Image10c},
                    {src: props.Image10b},
                    {src: props.Image10},
                    ],
            },
            {
                src: props.Image11,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image11d},
                    {src: props.Image11c},
                    {src: props.Image11b},
                    {src: props.Image11},
                    ],
            },
            {
                src: props.Image12,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image12d},
                    {src: props.Image12c},
                    {src: props.Image12b},
                    {src: props.Image12},
                    ],
            },
            {
                src: props.Image13,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image13d},
                    {src: props.Image13c},
                    {src: props.Image13b},
                    {src: props.Image13},
                    ],
            },
            {
                src: props.Image14,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image14d},
                    {src: props.Image14c},
                    {src: props.Image14b},
                    {src: props.Image14},
                    ],
            },
            {
                src: props.Image15,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image15d},
                    {src: props.Image15c},
                    {src: props.Image15b},
                    {src: props.Image15},
                    ],
            },
            {
                src: props.Image16,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image16d},
                    {src: props.Image16c},
                    {src: props.Image16b},
                    {src: props.Image16},
                    ],
            },
            {
                src: props.Image17,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image17d},
                    {src: props.Image17c},
                    {src: props.Image17b},
                    {src: props.Image17},
                    ],
            },
            {
                src: props.Image18,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image18d},
                    {src: props.Image18c},
                    {src: props.Image18b},
                    {src: props.Image18},
                    ],
            },
            {
                src: props.Image19,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image19d},
                    {src: props.Image19c},
                    {src: props.Image19b},
                    {src: props.Image19},
                    ],
            },
            {
                src: props.Image20,
                description: formattedProjectInfo,
                alt: altText,
                srcSet: [
                    {src: props.Image20d},
                    {src: props.Image20c},
                    {src: props.Image20b},
                    {src: props.Image20},
                    ],
            },
    ];

    const arrayOfSlides = [];
    for (let count = 1; count <= numberOfSlides; count++) {
            arrayOfSlides.push(arrayOfPotentialSlides[count-1]);
        };
        // console.log(arrayOfSlides);
    
    // const arrayOfSlides = [];
    
    // for (let count = 1; count <= numberOfSlides; count++) {
    //     // console.log(count);
    //     let slide = `${"props.Image"+count}`;
    //     // console.log(slide);
    //     const potentialSlide = {
    //         src: slide,
    //         description: formattedProjectInfo,
    //         alt: altText,
    //         srcSet: [
    //             {src: slide+'d'},
    //             {src: slide+'c'},
    //             {src: slide+'b'},
    //             {src: slide},
    //         ],
    //     };
    //     // console.log(potentialSlide);
    //     arrayOfSlides.push(potentialSlide);
    // };
    // console.log(arrayOfSlides);

    return (

        <section className="project" role="button" tabIndex="0" onClick={() => setOpen(true)}>

                <div className="card-container">
                <img src={props.CardImage} alt={props.Title}></img>
                <div className="card-title">{props.Title}</div>
                </div>

                <Lightbox
                    plugins={[Thumbnails, Counter, Captions, Zoom, Fullscreen]}
                    thumbnails={{ ref: thumbnailsRef, showToggle: false }}
                    captions={{ descriptionTextAlign: "center" }}
                    zoom={{ ref: zoomRef, maxZoomPixelRatio: 5 }}
                    open={open}
                    close={() => setOpen(false)}
                    on={{
                    }}
                    slides={arrayOfSlides}
                />
        </section>
    );
};

export default GALLERY_CARD;