import React, { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        lat?: number;
        lng?: number;
    }
}

interface MapProps {
    setCoordinates: any;
    setBounds: React.Dispatch<React.SetStateAction<any>>;
    coordinates: any;
    places: any;
    setChildClicked: any;
}

const Map: FC<MapProps> = ({setCoordinates, setBounds, setChildClicked, coordinates, places}) => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:600px)')

    const changeCoordinates = (e: any) => {
        console.log(e)
        setCoordinates({
            lat: e.center.lat, lng: e.center.lng
        })
        setBounds({
            ne: e.marginBounds.ne, sw: e.marginBounds.sw
        })
    }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBGYQxLBpB9-VOrX20WNDv2UXB4MTWDHGw'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                // options={''}
                onChange={changeCoordinates}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place: any, i: number) => (
                    place.name ?
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!matches
                        ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                        : (
                            <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle2" gutterBottom> {place.name}</Typography>
                            <img
                                className={classes.pointer}
                                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            />
                            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )}
                    </div>
                    : ""
                    ))}

            </GoogleMapReact>

        </div>
    )
}

export default Map