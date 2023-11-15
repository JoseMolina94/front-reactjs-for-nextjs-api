import React, { useState, useEffect } from 'react'

export const useGetSingerById = (singerId = '') => {
  const [singer, setSinger] = useState({});
  const [loadingSinger, setLoadingSinger] = useState(true);
  const [error, setError] = useState(null)

  const getSinger = async () => {
    try {
      await fetch(`http://127.0.0.1:3000/api/singer/${singerId}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.success) {
            setSinger(response.data)
          }
          setLoadingSinger(false)
        })
        .catch((e) => setError(e));
    } catch (e) {
      setLoadingSinger(false)
      setError(e)
    }
  }

  useEffect(() => {
    if (singerId) {
      getSinger()
    }
  }, [singerId]);

  return {
    singer,
    loadingSinger,
    error
  }
}
