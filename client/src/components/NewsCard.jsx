import React from "react";

export default function NewsCard({
    newsTitle,
    newsDescription,
    imageURL,
    url,
}) {
    return (
        <div className="card m-4 news-card">
            {imageURL && (
                <img src={imageURL} className="card-img-top" alt={newsTitle} />
            )}
            <div className="card-body">
                <h5 className="card-title">{newsTitle}</h5>
                <p className="card-text">{newsDescription}</p>
                <a href={url} className="btn btn-primary">
                    View News
                </a>
            </div>
        </div>
    );
}
