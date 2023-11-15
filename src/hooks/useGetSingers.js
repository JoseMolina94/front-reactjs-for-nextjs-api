import React, { useState, useEffect } from 'react'

export const useGetSingers = () => {
  const [singers, setSingers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getSingers = async () => {
    try {
      await fetch('http://127.0.0.1:3000/api/singers')
        .then((response) => response.json())
        .then((response) => {
          if (response.success) {
            setSingers(response.data)
          }
          setLoading(false)
        })
        .catch((e) => setError(e));
    } catch (e) {
      setLoading(false)
      setError(e)
    }
  }

  useEffect(() => {
    getSingers()
  }, [])

  return {
    singers,
    loading,
    error
  }
}
