import { FormControl, InputLabel, MenuItem, Select, Typography, Grid } from '@material-ui/core'
import React, { ChangeEvent, FC, useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List: FC = () => {
    const classes = useStyles()
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('restaurants')

    const changeSearchType = (e: ChangeEvent<any>) => {
        setType(e.target.value)
    }

    const changeRating = (e: ChangeEvent<any>) => {
        setRating(e.target.value)
    }

    const places = [
        {name: 'Cool Place', },
        {name: 'Cool Cake', },
        {name: 'Cool Steak', },
    ]

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={changeSearchType}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={changeRating}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {
                    places?.map((place, idx) => (
                        <Grid item key={idx} xs={12}>
                            <PlaceDetails place={place}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default List