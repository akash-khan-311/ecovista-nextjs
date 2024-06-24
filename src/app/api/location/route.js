import { getLocation } from "./location-util";

export const GET = () => {
  const locationData = getLocation();
  return Response.json(locationData);
};
