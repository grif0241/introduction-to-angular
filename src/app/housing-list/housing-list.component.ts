import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location'; // interface

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  // **** ANGULAR @INPUT DECORATOR TO SEND DATA TO CHILD COMPONENT ****
  // Add input feature to a property
  // Setting the type of this property to be an array of type: HousingLocation
  // [locationList]="housingLocationList"
  @Input() locationList: HousingLocation[] = [];

  results: HousingLocation[] = [];

  // **** ANGULAR @OUTPUT DECORATOR TO SEND DATA TO PARENT COMPONENT ****
  // Used with the EventEmitter
  // Create an event that Emits an event with a certain type of value (whatever data you're trying to send)
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  // **** ANGULAR TEMPLATE VARIABLE ****
  // Allows us to get a reference from the html element template and interact with it
  // Get reference to input and send as an argument to the method
  // ex/ #search attribute on input
  // search.value can now be directly passed into the (click) event on the button below
  // And the event handler signature can be changed to accept a parameter and use that value

  searchHousingLocations(searchText: string) {
    if(!searchText) return;
    this.results = this.locationList
    .filter(
      location => location.city.toLowerCase().includes(searchText.toLowerCase())
    )
  }


  // @Output()
  selectHousingLocation(location:HousingLocation) {
    // Emit new event from selectedLocationEvent Event Emitter
    // Value to emit is the location select by the user
    this.selectedLocationEvent.emit(location);
  }

}
