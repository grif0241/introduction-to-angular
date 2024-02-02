import { Component } from '@angular/core';
import { HousingLocation } from './housing-location'; // import interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  // **** ANGULAR @INPUT DECORATOR TO SEND DATA TO ANOTHER COMPONENT ****
  // Add input feature to a property in the receiving component
  // In the sending component's html, use the name of the receiving component's 
  // @Input property [childPropName] and assign it to the value of the sending component's 
  // property in "parentPropName"

  housingLocationList: HousingLocation[] =[
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  selectedLocation: HousingLocation | undefined; // may not have a selected location

  // This is the @Output event handler
  // In the html, we are listening for an selectedLocationEvent to be emitted by the child component
  // In the html, we assign this handler to that event
  // By design, the event emits a value of HousingLocation, so the handler parameter must
  // also be that
  updateSelectedLocation(location: HousingLocation) {
    console.log(location);
    this.selectedLocation = location;
  }
}
