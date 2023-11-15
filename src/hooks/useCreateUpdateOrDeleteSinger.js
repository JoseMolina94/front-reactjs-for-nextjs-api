import React, { useState } from "react";

export const useCreateUpdateOrDeleteSinger = () => {
  const [loadingProcess, setLoadingProcess] = useState(false)
  const [response, setResponse] = useState(null)

  const createSinger = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/add-or-update-singer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setResponse(`Error: ${response.status}`)
      }

      const dataResponse = await response.json();
      setResponse(dataResponse);
      setLoadingProcess(false)
    } catch (e) {
      setLoadingProcess(false)
      setResponse(e);
      throw new Error(e)
    }
  }

  const updateSinger = (data) => {

  }

  const deleteSinger = (singerId) => {

  }

  return {
    createSinger,
    updateSinger,
    deleteSinger,
    loadingProcess,
    response
  }
}
