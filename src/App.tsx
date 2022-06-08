import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import { getPlacesData } from './api'

function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({sw: 0, ne: 0})
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [filteredPlaces, setFilteredPlaces] = useState([])

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    const filtered = places.filter((place: any) => Number(place.rating) > +rating)

    setFilteredPlaces(filtered)
  }, [rating])

  useEffect(() => {
      setIsLoading(true)
      getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data)
        setPlaces(data)
        setFilteredPlaces([])
        setIsLoading(false)
      })
      console.log(coordinates, bounds, places)
  }, [type, coordinates, bounds])

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setChildClicked={setChildClicked}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces.length ? filteredPlaces : places}
            />
          </Grid>
      </Grid>
    </>
  )
}

export default App
