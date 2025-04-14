import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
    const error= useRouteError()
  return (
    <div>something went worng{error.status}</div>
  )
}
