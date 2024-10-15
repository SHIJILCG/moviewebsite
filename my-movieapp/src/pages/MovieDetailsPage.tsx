import React from 'react'
import { useParams } from 'react-router-dom'
import useGetAMovie from '../api/useGetAMovie'
import { MovieDetailsType } from '../Types/movietypes'


export const MovieDetailsPage = () => {
  const {movieId} = useParams()
  const movie =   useGetAMovie((movieId && +movieId) || 1)
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.data?.poster_path}`} alt="" />
    </div>
  )
}
