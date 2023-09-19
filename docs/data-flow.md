# Data Flow

Ionic provides a default directory structure, however that file structure has only 1 level and most of the directories exist on the `root` level.
In order to make it more clear, we will be adopting the `multitier architecture` approach.

## Architecture Layers

We use a layered pattern in the structure of our application. You can read more about this pattern in [here](https://medium.com/@priyalwalpita/software-architecture-patterns-layered-architecture-a3b89b71a057) and [here](https://en.wikipedia.org/wiki/Multitier_architecture) (though our implementation of this pattern only focuses on the front-end, so it's slightly different from the common implementation).

The 3 layers into which logic is divided are:

1. Data:

   The Data Layer deals with the data itself. This layer is for interactions with the backend and data type definitions. Inside the `/data` directory, you will find the MVC "Models", in our case repositories and types.

2. Connection:

   The Connection Layer connects the Data layer to the Presentation Layer. Inside the `/connection` directory is the logic for stores, state (future possibility), and other functions/helpers that the templates need but are too complex to keep in the templates themselves, or need to be reusable. Each content Type has its own store with all the necessary functions in the `/store` directory.

3. Presentation:

   The Presentation Layer is the layer that the users see. This layer is for the templates and components. Inside the `/presentation` directory, you will find all the Vue templates that together build the front-end. 

## Notes

- Data layer cannot access connection or presentation layer.
- Connection layer can only access data layer
- Presentation layer can access both connection and data layer, but access to data layer should be scoped to types, because the component will probably need to know the shape of the incoming data.
