## wweather

Quickly compare the upcoming weather forecast for 4 separate locations. Purely front-end application built with Javascript and jQuery.

### Why?

Every weekend I compare a handful of places before I leave the city to see where the best weather will be.

### Domain Modeling

1. Grid - a container that holds 4 Location objects
2. Location - represents a zipcode determined by user input, comprised of multiple Day objects
3. Day - represents a single day's weather forecast for a given zipcode

### Design Flow

0. On document ready generate new Grid & listeners
1. User inputs initial zipcode
2. Fetch forecast from Wunderground API
3. Create new Location and subsequent Days to store within the Location
4. Append visual representation of data to container
5. Reset form value
--
6. Repeat process for each zipcode entered into form
7. Max Locations within a Grid instance is 4 - drop first and add to last as user adds more than 4 Locations
