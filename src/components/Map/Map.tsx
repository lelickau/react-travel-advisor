import React, { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import { useMediaQuery } from '@material-ui/core'

import useStyles from './styles'

interface MapProps {
    setCoordinates: any;
    setBounds: React.Dispatch<React.SetStateAction<any>>;
    coordinates: any;
}

const Map: FC<MapProps> = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 600px)')

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
                // onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}

export default Map