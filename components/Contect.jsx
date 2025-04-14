import React from 'react'
import { useParams } from 'react-router'

export default function Contect() {
  const params=useParams()
  console.log(params);
  return (
    <div>Contect us</div>
  )
}
