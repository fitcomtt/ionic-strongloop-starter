# Ionic Strongloop Starter

A starter app for Ionic with user integration against your Strongloop backend. With this app you will be able to register new users, login, logout, and initiate a password reset request.


##[Strongloop SDK information](http://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK)


##Starting

###Server

Api location once the server is running--> localhost:3000/api


```
git clone https://github.com/fitcom/ionic-strongloop-starter.git
cd ionic-strongloop-starter
```

to start the strongloop server

```
cd server
slc run
```
the api explorer will be accessiable from localhost:3000/explorer
but if you would like to access a graphical UI so you can edit your api and start the server without using the terminal/command promt much use


A strongloop account (Free) is required to use this feature
```
cd *server
slc arc
```
Once the browser is open create a new account or login

After login to start the api server from strongloop arc

![Alt text](https://raw.githubusercontent.com/fitcom/ionic-strongloop-starter/master/images/ss_arc.png "Strongloop Arc")

![Alt text](https://raw.githubusercontent.com/fitcom/ionic-strongloop-starter/master/images/ss_arc_2.png "Strongloop Arc")

Then click start :)

### App

View in browser 
```
cd app
ionic serve
```

Show how the app will look on android and ios (using broswer)

```
cd app
ionic server --lab
```

#### Android
Run on android device
```
cd app
ionic run android
```

If you would like maximum perform from your andorid app i would recommend installing crosswalk(Google Chrome Browser) in you app

```
cd app
ionic browser add crosswalk
```

#### IOS

Well don't have a mac yet :D
