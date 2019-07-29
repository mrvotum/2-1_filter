import React from 'react';
import Filters from './filters';

export default function Toolbar(props) {
  const { filtersArr, selected, selectLabel, sortedImgArr } = props;

  return (
    <>
      <div className="toolbar">
        {filtersArr.map(item => (
          <button
            onClick={() => {
              console.log(`фильтр: ${item}`);
              selectLabel(item);
            }}
            className={item === selected ? 'btn selected' : 'btn'} key={item}
            id={`btn_${item}`}>
            {item}
          </button>
        ))}
      </div>

      <Filters
        filtersArr={filtersArr}
        selected={selected}
        sortedImgArr={sortedImgArr}
      />
    </>
  );
}
