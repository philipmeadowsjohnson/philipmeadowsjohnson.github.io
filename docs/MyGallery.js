/** Goal
 <ImageGallery showThumbnails={true} additionalClass={"gallery-margin-bottom"} showPlayButton={false} items={[{original: '/img/fall14/tea-sugar-1.jpg', thumbnail: '/img/fall14/tea-sugar-1.jpg'}, {original: '/img/fall14/tea-sugar-2.jpg'}, {original: '/img/fall14/tea-sugar-3.jpg'}, {original: '/img/fall14/tea-sugar-4.jpg'}]} />
 */

import React from 'react';
import ImageGallery from 'react-image-gallery';

export const MyGallery = ({prefix, num, suffix, showThumbnails = true, dir = 'fall14'}) => {
  const items = [];
  for (let i = 1; i <= num; i++) {
    const file = `/img/${dir}/${prefix}-${i}.${suffix}`;
    items.push({ original: file, thumbnail: file })
  }
  return (
      <ImageGallery showThumbnails={showThumbnails} additionalClass={"gallery-margin-bottom"} showPlayButton={false} items={items} />
  )
}