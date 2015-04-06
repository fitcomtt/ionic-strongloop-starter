/**
 * Created by osei on 4/6/15.
 */
/* Iss -> Ionic Strongloop Starter*/
angular.module('Iss.Controllers')
.controller('LogInCtrl', function (Core,$scope) {


        $scope.login = function (user) {
            Core.userLogin(user.username,user.password);
        }
    })