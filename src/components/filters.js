import React from 'react';

export default function Filters(props) {
  const sortedImgArr = props.sortedImgArr;

  return (
    <div className="imagesHolder">
      {sortedImgArr.map(item => (
        <img className="img" key={item.id} src={item.img} alt={`image_${item.id}`}/>
      ))}
    </div>
  )
}
