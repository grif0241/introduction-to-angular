// **** ANGULAR INTERFACE ****
// Alternative to just storing information in a plain JavaScript class
// Allows our custom data to by 'typed'
// Best practice instead of use of Classes


export interface HousingLocation {
  name: string,
  city: string,
  state: string,
  photo: string,
  availableUnits: number,
  wifi: boolean,
  laundry: boolean,
}
