import React, { useId } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { somefacts } from '../redux/slices/facts'

export const FactsList = () => {
  const facts = useSelector((state) => state.facts.value)
  const dispatch = useDispatch()
  const listId = useId()
  return (
    <>
      <div style={{ padding: '10px' }}>
        <input
          name="price"
          type="number"
          min={1}
          max={5}
          onChange={(evt) => dispatch(somefacts(+evt.target.value))}
        />

        {facts.length ? (
          <ul>
            {facts.map((fact, index) => (
              <li key={`${listId}-${index}`}>{fact}</li>
            ))}
          </ul>
        ) : (
          <p>Ожидание ввода цифры от 1 до 5</p>
        )}
      </div>
    </>
  )
}
