# Vue-Contacts-CRUD mini aplication

## Project setup

### After Cloning proyect
We have to open 2 terminals, described in more details in the with the nexts pictures

#### First localhost for FrontEnd
We locate in the MINICRUDVUE folter and run 
* "npm install"
![Captura de pantalla de 2023-02-19 23-29-22](https://user-images.githubusercontent.com/82011423/220010678-1711edc4-e83e-4f70-a5bb-de673d01db60.png)

#### Second localhost for Backend
We locate in the SERVER folder and clic "Open integrated
terminal", watch the image below:

![Captura de pantalla de 2023-02-19 23-40-52](https://user-images.githubusercontent.com/82011423/220011047-71e4482c-0549-40d8-b769-a79f9649d262.png)

This will create a new terminal where we are going to run the
Backend, like the image below:
```
image
```
![Captura de pantalla de 2023-02-19 23-42-16](https://user-images.githubusercontent.com/82011423/220011198-0e50e529-17ae-43da-b4fd-c48a239092ff.png)

Now we have to locate in this "../MINICRUD/server" folder and run
* "npm install"
* 
![Captura de pantalla de 2023-02-19 23-33-27](https://user-images.githubusercontent.com/82011423/220011267-6e1bd1b6-247e-4979-ab9d-d76c84575f8d.png)

## We are ready to RUN the proyect

**Let's change the terminal and start with running the BackEnd:**
```
npm start
```
![Captura de pantalla de 2023-02-19 23-44-58](https://user-images.githubusercontent.com/82011423/220011481-fca41432-c165-48f4-b0be-c6120dde0eb2.png)

**Let's change the terminal and now we start the FrontEnd:**
```
npm run serve
```
![Captura de pantalla de 2023-02-19 23-46-35](https://user-images.githubusercontent.com/82011423/220011718-776716ff-d9dd-4c0d-ad8a-1bf71779f3c4.png)

Finally let's open the localhost:
```
image
```
![Captura de pantalla de 2023-02-19 23-48-52](https://user-images.githubusercontent.com/82011423/220012193-cb9b398a-b419-4fd7-ad7b-25ce951eb21f.png)

### Proyect Running
we can see the App running.
![Captura de pantalla de 2023-02-19 23-49-32](https://user-images.githubusercontent.com/82011423/220012064-c6ef3d79-47f7-4ff5-a477-f336bb7b63fe.png)


## BRIEF EXPLANATION OF THE APPLICATION Vue-Contacts-CRUD

This application is a Managment of contacts, Creating,Reading,Updating,Deleting.

This is an simple CRUD developed with Vuejs 3, where we are focusing on implement:

**5 Principles SOLID**

Our main CLASS ha static methods that can't be modified

**Clean Arquitecture**

We have separated and organized the files by components and directories, also with routes

**One function to one unique funtionality**

Each function of the CLASS "ContactService" are specific for one task. Also our components
do 1 task , in this 1 page.

It's a basic approach.



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
