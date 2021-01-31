# Ecom App

Ecom app is a simple store application , developped using react native and expo.

## Installation

To run project locally please follow these instructions:
- install npm package manager 
- install expo cli :
```
npm install --global expo-cli
```
-install yarn package manager
```
npm install --global yarn
```
- clone the repository : 
```
git clone https://github.com/nawfalhaddi/ecom_app.git
```
- then run:
```
cd ecom_app && expo install

```

## Architechture
The source project folder contains 3 main sub-folders "core", "mainEntry"and "packages" , let's see what each folder stands for: 

- ### Core: 
    Contains all modules that are common and used in different places in the application , such as navigation , store , translation and common UI components.
- ### MainEntry: 
    Contains main entry file of the application.
- ### Packages: 
    Contains cart, notifications, products and users modules.

Each module contains the following architecture:

![alt text](https://github.com/nawfalhaddi/ecom_app/blob/main/module_architecture.png)


 - ####  Components : 
    contains common components in that specific module.
 - ####  data: 
    contains types ,interfaces and dummy data used in that module.

 - ####  hooks: 
    contains common hooks used in that module.

 - ####  pages: 
    contains pages of that module. Each page's folder it may contains "components" and "hooks" folders in case if we have specific elements to use only in that page.
    
This architecture is inspired by monorepo architecture.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

