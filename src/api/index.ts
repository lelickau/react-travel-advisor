import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359'
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'edf1bf70bdmsh47015bdc095632ep13780fjsn3cf215730580'
    }
}

export const getPlacesData = async (sw: any, nw: any) => {
    try {
        const {data: {data}} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: nw.lat,
                bl_longitude: sw.lng,
                tr_longitude: nw.lng
            },
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': 'edf1bf70bdmsh47015bdc095632ep13780fjsn3cf215730580'
            }
        })
        return data
    } catch (e) {
        console.log(e)
    }
}