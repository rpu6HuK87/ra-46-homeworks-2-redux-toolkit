import React, { useId } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removephoto } from '../redux/slices/photos'

export const ListPhoto = () => {
  const photos = useSelector((state) => state.photos.value)
  const dispatch = useDispatch()
  const listId = useId()

  return photos.length ? (
    <div className="images">
      {photos.map((img, ind) => (
        <div key={`${listId}-${ind}`}>
          <img src={img} alt={`${listId}-${ind}`} />
          <span
            className="close"
            onClick={() => dispatch(removephoto(img))}
          ></span>
        </div>
      ))}
    </div>
  ) : (
    'Фото не загружено'
  )
}
