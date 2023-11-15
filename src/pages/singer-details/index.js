import React from 'react'
import { SingerDetailsContainer } from "../../containers/SingerDetailsContainer";
import { useParams } from 'react-router-dom'

export const SingerDetails = ({query}) => {
  const { id } = useParams()

  return (
    <SingerDetailsContainer singerId={id} />
  )
}
