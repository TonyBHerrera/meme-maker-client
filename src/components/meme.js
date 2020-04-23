import React from "react"

const Meme = props => {
    const { id, text, image, favorite } = props.meme

    return (
        <div key={id} className="meme">
            <div className="img-wrapper">
                <img className="meme-img" src={image} alt="funny meme" />
            </div>

            <p>{text}</p>


            {favorite ?
                (
                    <img src="https://cdn.dribbble.com/users/411234/screenshots/2427834/star.png"
                        alt="star"
                    />
                ) :
                null}
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Meme
// "https://cdn.dribbble.com/users/411234/screenshots/2427834/star.png"