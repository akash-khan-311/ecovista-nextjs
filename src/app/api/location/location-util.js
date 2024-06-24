const data = [
  {
    id: 1,
    location: "Tokyo",
    latitude: 35.689487,
    longitude: 139.691711,
  },
  {
    id: 2,
    location: "Beijing",
    latitude: 39.904202,
    longitude: 116.407394,
  },
  {
    id: 3,
    location: "Mumbai",
    latitude: 19.07609,
    longitude: 72.877426,
  },
  {
    id: 4,
    location: "Seoul",
    latitude: 37.566536,
    longitude: 126.977966,
  },
  {
    id: 5,
    location: "Bangkok",
    latitude: 13.756331,
    longitude: 100.501762,
  },
  {
    id: 6,
    location: "Jakarta",
    latitude: -6.208763,
    longitude: 106.845599,
  },
  {
    id: 7,
    location: "Manila",
    latitude: 14.599512,
    longitude: 120.984222,
  },
  {
    id: 8,
    location: "Singapore",
    latitude: 1.352083,
    longitude: 103.819839,
  },
  {
    id: 9,
    location: "Kuala Lumpur",
    latitude: 3.139003,
    longitude: 101.686852,
  },
  {
    id: 10,
    location: "Hanoi",
    latitude: 21.028511,
    longitude: 105.804817,
  },
  {
    id: 11,
    location: "Dhaka",
    latitude: 23.810331,
    longitude: 90.412521,
  },
  {
    id: 12,
    location: "Karachi",
    latitude: 24.860735,
    longitude: 67.001137,
  },
  {
    id: 13,
    location: "Riyadh",
    latitude: 24.713552,
    longitude: 46.675297,
  },
  {
    id: 14,
    location: "Kabul",
    latitude: 34.555349,
    longitude: 69.207486,
  },
  {
    id: 15,
    location: "Delhi",
    latitude: 28.70406,
    longitude: 77.102493,
  },
];

const getLocation = () => {
  return data;
};
const getLocationByName = (location) => {
  if (!location) return null;
  const found = data.find(
    (item) => item.location.toLocaleLowerCase() === location.toLocaleLowerCase()
  );
  return found || {};
};

export { getLocation, getLocationByName };
