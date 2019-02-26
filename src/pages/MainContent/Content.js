import React from 'react';

const Content = ({ body, title, img, reverse }) => {
    return (
        <div className={`content ${reverse ? 'reverse' : ''}`}>
            <img src={img} alt="" />
            <div className="content__body">
                <div className="content__title">{title}</div>
                <div className="content__text">{body}</div>
            </div>
        </div>
    );
}

export default Content;