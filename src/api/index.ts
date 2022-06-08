import axios from "axios"

export const getPlacesData = async (type: string, sw: any, nw: any) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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