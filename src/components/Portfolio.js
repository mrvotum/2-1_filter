import React, { useState } from 'react';
import Toolbar from './Toolbar';
import imagesArr from './dataBase';

export default function Portfolio() {
  const [selected, setSelected] = useState('All');
  const [sortedImgArr, setSortedImgArr] = useState(imagesArr);

  // state - переменная, хранящяя состояние
  // setState - имя функции, которая меняет на новое состояние
  // initialState - изначальное состояние
  // const [state, setState] = useState(initialState);

  // выбираем какие изображения будут показываться
  const selectLabel = tag => {
    setSelected(tag);
    if (tag === 'All') return setSortedImgArr(imagesArr); // все картинки
    console.log(`учитываем фильтр: ${tag}`);
    // передаём отсортированный массив
    const sortedImgArr = imagesArr.filter(item => item.category === tag);
    setSortedImgArr(sortedImgArr);
  };

  return (
    <div>
      <Toolbar
        filtersArr={["All", "Websites", "Flayers", "BusinessCards"]}
        selected={selected}
        // функции
        selectLabel={selectLabel}
        sortedImgArr={sortedImgArr}
      />
    </div>
  );
}