# Hello Darling Technical

------


## About Project

------

This project utilises Adonis framework to help build the requirements as quickly as possible. Prior to creating this project I never heard or have used this framework.

https://docs.adonisjs.com/guides/preface/introduction


This project utilises Inertia to bridge Adonis framework and the React frontend.
https://inertiajs.com/

## Getting Started

------

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What things you need to install and how to install them:
- Node.js (version 20.15.0)
- npm (version 10.7.0)
- PostgreSQL DB running with following credentials
```
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=adonis
DB_PASSWORD=secret
DB_DATABASE=adonis
```


### Installing / Running Project

------

A step-by-step series of examples that tell you how to get a development env running:

1. Clone the repository:

```
git clone https://github.com/DarylHowe/hello_darling.git
cd my-adonisjs-app
 ```

2. Create .env file in my-adonisjs-app directory, copy paste values from .env.example file into it. 


3. Run build script (or run commands in this script in your project in main directory if script not working)
```
bash build.sh
```

4. Run dev server
```
node ace serve –watch 
```

### To Do

------
Due to time constraints there are many things that need to be added / improved in this project to get it ready for production. 
I left many 'ToDo' notes within the code to showcase what I would do with more time.

- Currently controllers contain all business logic, this would be swapped to service/repository classes
- All controllers, service methods, UI logic tested (or the important ones) as much as possible
- Rate limiting would be applied to the APIs to stop abuse at application level
- UI - Styling - of course I have not spent any time styling the project. Time to design and style appropriately is needed.
- UI - styling / component library added - DaisyUI / Bootstrap etc + Tailwind etc would be added. A more organised approach is needed. This is very much quick and dirty.
- UI - Components for each type of UI component used. I really have not spent any time refactoring the frontend to use re-usable components.
- EnvExample - Storing credentials here is absolutely not correct as checked into source control. Credentials ideally managed via some secrets manager etc or at least just not stored in .env file
- 

