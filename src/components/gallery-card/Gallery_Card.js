import * as React from "react";
// import {useState, useEffect} from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const GALLERY_CARD = (props) => {

    const [open, setOpen] = React.useState(false);
    const thumbnailsRef = React.useRef(null);

    return (

        <section className="project" role="button" tabindex="0" onClick={() => setOpen(true)}>

                <div className="card-container">
                <img src={props.CardImage} alt={props.Title}></img>
                <div className="card-title">{props.Title}</div>
                </div>

                <Lightbox
                    plugins={[Thumbnails, Zoom, Counter]}
                    thumbnails={{ ref: thumbnailsRef, showToggle: true }}
                    open={open}
                    close={() => setOpen(false)}
                    on={{
                    click: () => {
                        (thumbnailsRef.current?.visible
                        ? thumbnailsRef.current?.hide
                        : thumbnailsRef.current?.show)?.();
                    },
                    }}
                    slides={[
                        { src: props.Image1 },
                        { src: props.Image2 },
                        { src: props.Image3 },
                        { src: props.Image4 },
                        { src: props.Image5 },
                        { src: props.Image6 },
                        { src: props.Image7 },
                        { src: props.Image8 },
                        { src: props.Image9 },
                        { src: props.Image10 },
                        { src: props.Image11 },
                    ]}
                />
        </section>
    );
};

export default GALLERY_CARD;