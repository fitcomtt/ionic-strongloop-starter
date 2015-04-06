/**
 * Created by osei on 4/6/15.
 */
/* Iss -> Ionic Strongloop Starter*/
angular.module('Iss.Factories')
    .factory('Core', function (User) {

        
        var userLogin = function (user,password) {
            var email = /\S+@\S+\.\S+/;
            var validEmail = email.test(user);

            if(!validEmail){

                User.login({
                    username:user,
                    password:password
                }).$promise.then(function (data) {
                        console.log(data)
                    }, function (err) {
                        console.log(err)
                    })

            }
            else{
                User.login({
                    email:user,
                    password:password
                }).$promise.then(function (data) {
                        console.log(data)
                    }, function (err) {
                        console.log(err)
                    })
            }

            }

        var userSignup = function (username, email, password) {
            console.log(username,email,password)
            User.create({
                username:username,
                email:email,
                password:password
            }).$promise.then(function (user) {
                console.log(user)
            }, function (err) {
                console.log(err.message)
            })
        }

        var userForgot = function (email) {


        }

        return{
            userLogin :userLogin,
            userSignup:userSignup
        }
    });