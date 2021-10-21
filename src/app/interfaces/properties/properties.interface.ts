export interface IProperties {
  _id?: string;
  Category?: string;
  Image?: string;
  Location?: {
    Latitud: string,
    Longitud: string
  };
  Name?: string;
  Status?: string;
}