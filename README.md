**Requirements**
- Design an address management API.
- Build the API (using the provided components).
- Update the front-end to be interactive and integrate with your server.
  - The address book should show every user with their address as a `card`.
  - As you type in the search bar, the `cards` will start narrowing down to ones that match.
  - Clicking on the `Add Address` button should toggle the form editor and clicking on `Save` should save a new user's address.
  - Clicking the `Edit` button should toggle the form editor and clicking on `Save` should close the form editor
  - When you click on `Delete` the user should get deleted.
## Pre-reqs
You must have docker and docker-compose running on your system, which you can get [here](https://www.docker.com/products/docker-desktop) for windows & mac.

## To run
```sh
docker-compose up
```
Your changes will automatically reflect in both the server and the client.

You can find your client at
http://localhost:3000
and your server at
http://localhost:3001

## To run the server tests
```sh
docker-compose run --rm server npx mocha
```


