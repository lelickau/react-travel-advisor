import React, { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import { useMediaQuery } from '@material-ui/core'

import useStyles from './styles'

const Map: FC = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 600px)')
    const coordinates = {lat: 0, lng: 0}

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBGYQxLBpB9-VOrX20WNDv2UXB4MTWDHGw'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                // options={''}
                // onChange={''}
                // onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}

export default Map