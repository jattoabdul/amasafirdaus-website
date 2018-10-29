import React from 'react';

export const BlogPeekTabContent = (props) => {
    const getOrdinalNum = (n) => {
        return (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
      }

    const formatDate = (dateVal) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        const d = new Date(dateVal);
        const day = parseInt(d.getDate(), 10);

        return `${day} <sup>${getOrdinalNum(day)}</sup> ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
    }

    return (
        <div className="blog-peek-category__post">
            <img className="peek-image" src={props.thumbnailUrl} alt=""/>
            <h4 className="peek-text">{props.post.title}</h4>
            <p className="peek-sneak">{props.post.desc}</p>
            <p className="peek-post-time" dangerouslySetInnerHTML={{ __html: formatDate(props.post.publishedAt) }}></p>
            <span className="more">
                Read more
            </span>
        </div>
    )
}

// onClick={(event) => {
//     event.preventDefault();
//     props.onReadMore(props.tabIndex);
// }}
