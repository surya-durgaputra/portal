import React from 'react';

const NewSingle = ({item}) => {
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={item.urlToImage} alt={item.title}/>
                    <span className="card-title">{item.source.name}</span>
                </div>
                <li>
                    {item.title}  
                </li>
                <div className="card-content">
                    <p>{item.description}</p>
                </div>
                <div className="card-action">
                    <a href={item.url} target="_blank">Read More...</a>
                </div>
            </div>
        </div>
    );
};

export default NewSingle;