## React Venue Cards Project

The app takes 50 venues from [this endpoint](https://venue-lister.herokuapp.com/venues) and displays them in card style. 

Routes
------

### `Home`
The Home route is the default route. The purpose of this route is to display 
a paginated grid of VenueCards (default: 10 venue cards per page). 

---

The Home component maintains 3 state variables:

#####VenueList: list
Maintains the list of venues provided to the VenueCardGrid.

#####VenueOffset: num
Tracks the current offset provided to the VenueCardGrid.

#####PageLength: num
Tracks the specified number of VenueCards to display per VenueCardGrid page.

---

When the Home component initially mounts it will display the Loading component whilst it fetches the list of Venues 
from the Venue API endpoint. As soon as this request is complete the Home component will rerender, hiding the Loading
component and populating the VenueCardGrid with VenueCards from the provided Venue list, as well as any offset that may 
have been requested in the URL via the 'p' query parameter.

The VenueCardGrid page can be changed via the MaterialUI Pagination component using a callback. When a page change has 
been triggered the callback function receives the requested page and calculates the new offset to pass to the VenueOffset 
state. This causes the VenueCardGrid to rerender, displaying VenueCards from the given offset.

The callback function will also update the 'p' query parameter in the URL with the new page, allowing users to bookmark 
or share the page without having to manually navigate back to it.

Components
------

### `VenueCard`
The VenueCard component uses MaterialUI's Card component, taking a Venue name, address, city, postcode and 
description (listing text) as props.

### `VenueCardGrid`
The VenueCardGrid uses MaterialUI's Grid components to create a grid of VenueCard components. VenueCardGrid accepts 
a list of venues through the venues prop, then checks for the presence of pageLength and offset props to decide which 
Venues should be rendered. The pageLength and offset props are intended to be used to allow pagination.

### `Loading`
The Loading component renders a simple fullscreen loader to block the UI, usually whilst awaiting initial component 
data.

### `Header`
The Header component uses MaterialUI's Typography component, accepting a title and subtitle prop to be displayed 
with padding. This allows a consistent header experience that can be modified one time inside the component and applied 
everywhere it's used.


Packages
------

### `MaterialUI`
MaterialUI components were used as building blocks for the project's custom components. MaterialUI components are 
polished and well tested as well as being as customisable as they need to be. 


### `React Router`
Given the limited scope of this project, React Route probably wasn't necessary, but it provides a great foundation for 
when more complex routing is required, as well as providing functionality for manipulating and reading the URL and it's
query parameters. 
