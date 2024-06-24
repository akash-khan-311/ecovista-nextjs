import { getLocationByName } from "../location-util";

export const GET = (request,{params}) => {

    const locationData = getLocationByName(params?.name);
    return Response.json(locationData);
}