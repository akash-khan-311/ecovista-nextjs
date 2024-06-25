import { getLocations } from "./location-util";

export const GET = () => {
  const locationData = getLocations();
  return Response.json(locationData);
};
