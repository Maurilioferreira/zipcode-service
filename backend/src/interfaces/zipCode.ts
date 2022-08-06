interface zipCodeInterface {
  id: number
  country: string
  countryAbbreviation: string
  zip: string
  places: string
}

interface zipCodeRes {
  "post code": string;
  "country abbreviation": string,
  "country": string,
  "places": [
    {
      "place name": string,
      "longitude": string,
      "state": string,
      "state abbreviation": string,
      "latitude": string;
    }
  ];
}

export { zipCodeInterface, zipCodeRes }