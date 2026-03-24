 function ProfileCard({ title, handle, imgUrl, description }) {
    //const handle=props.handle
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img
                        src={imgUrl}
                        alt={title + " image"}
                    />
                </figure>
            </div>
            
            <div className="card-content">
                <div className="media-content">
                    <p className="is-4">{title}</p>
                    <p className="is-6">{handle}</p>
                    <p className="content">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard