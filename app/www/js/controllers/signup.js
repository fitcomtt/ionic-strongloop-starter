/**
 * Created by osei on 4/6/15.
 */
/* Iss -> Ionic Strongloop Starter*/
angular.module('Iss.Controllers')
.controller('SignUpCtrl', function (Core,$scope) {

        $scope.signup = function (user) {
            Core.userSignup(user.username,user.email,user.password);
        }
    })