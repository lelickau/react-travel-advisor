import { FormControl, InputLabel, MenuItem, Select, Typography, Grid, CircularProgress } from '@material-ui/core'
import React, { ChangeEvent, FC, useState, useEffect, createRef } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

interface ListProps {
    places: any;
    childClicked: any;
    isLoading: boolean;
    type : string;
    setType: any;
    rating : string;
    setRating: any;
}

const List: FC<ListProps> = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {
    const [elRefs, setElRefs] = useState([])
    const classes = useStyles()

    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill(null).map((_, i) => refs[i] || createRef()))
    }, [places])

    const changeSearchType = (e: ChangeEvent<any>) => {
        setType(e.target.value)
    }

    const changeRating = (e: ChangeEvent<any>) => {
        setRating(e.target.value)
    }

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            {
                isLoading ? (
                    <div className={classes.loading}>
                        <CircularProgress size="5rem" />
                    </div>
                ) : (
                    <>
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
                        {places?.map((place: any, i: number) => (
                            place.name ?
                                <Grid ref={elRefs[i]} key={i} item xs={12}>
                                    <PlaceDetails
                                        selected={Number(childClicked) === i}
                                        refProp={elRefs[i]}
                                        place={place}
                                    />
                                </Grid>
                            : ""
                        ))}
                    </Grid>

                    </>
                )
            }
        </div>
    )
}

export default List