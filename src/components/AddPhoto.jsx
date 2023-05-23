import React from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addphoto } from '../redux/slices/photos'

import { fileToDataUrl } from '../helpers/my-helpers'

export const AddPhoto = () => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const handleSelect = async (evt) => {
    setLoading(true)
    const files = [...evt.target.files]
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)))
    //console.log('urls', urls)
    urls.map((url) => dispatch(addphoto(url)))
    setLoading(false)
  }

  return (
    <form>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <label className="input-file">
          <input
            type="file"
            name="file"
            onChange={(e) => handleSelect(e)}
            accept="image/png, image/jpeg"
            disabled={loading}
            multiple
          />
          <span className="input-file-btn">Выберите файл</span>
        </label>
      )}
    </form>
  )
}
