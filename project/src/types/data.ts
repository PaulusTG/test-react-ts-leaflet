export type Location = {
  Latitude: number,
  Longitude: number,
  Zoom: number,
}

export type Point = {
  Id: number,
  Title: string,
  Description: string,
  DateTime: Date,
  Location: Location,
}
