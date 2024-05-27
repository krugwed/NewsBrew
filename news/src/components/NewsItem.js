import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card">
                <span className="position-absolute end-0 badge rounded-pill bg-danger">{source}</span>
                <img src={!imageUrl ? "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/29_02_2020_17_00_20_7172535.jpg?width=920&format=jpeg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toLocaleString()} </small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem