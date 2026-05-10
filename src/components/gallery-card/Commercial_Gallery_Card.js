import { NavLink } from 'react-router-dom';

const COMMERCIAL_GALLERY_CARD = (props) => {

    const titleWithoutDashes = props.Title.replace(/\s-/g, '');
    const titleWithoutSpaces = titleWithoutDashes.replace(/\s/g, '-');
    const modifiedTitle = titleWithoutSpaces.toLowerCase();
    console.log(modifiedTitle);

    return (

        <section className="project" role="link" tabIndex="0">

                <NavLink to={`/gallery/${modifiedTitle}`} className="card-container">
                <video autoPlay muted loop disablePictureInPicture playsInline alt={props.Title}>
                    <source src={props.CardImage} type="video/mp4"></source>
                </video>
                <div className="card-title">{props.Title}</div>
                </NavLink>

        </section>
    );
};

export default COMMERCIAL_GALLERY_CARD;