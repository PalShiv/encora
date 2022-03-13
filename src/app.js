var app = angular.module('MyApp',[])

app.controller("MyCtrl",($scope,$http)=>{
    $scope.title = "Contact List"
      $http.get("https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts").then((response)=>{
        $scope.data = response.data;
      },
      (error)=>{
        alert(error);
      });

    $scope.popupData = {};

    $scope.openDlgNew = function () {
        $scope.newContact = true;
        $scope.deletePopup = false;
        var dlgElem = angular.element("#exampleModal");
        if (dlgElem) {
           dlgElem.modal("show");
        }
    }

    $scope.openDlgEdit = function (user,index) {
        // $scope.updateContactObj = user;
        $scope.index = index;
        $scope.popupData.firstName = user.firstName;
        $scope.popupData.lastName = user.lastName;
        $scope.popupData.phone = user.phone;
        $scope.newContact = false;
        $scope.deletePopup = false;
        var dlgElem = angular.element("#exampleModal");
        if (dlgElem) {
           dlgElem.modal("show");
        }
    }
    $scope.openDlgDelete = function (user) {
        $scope.DeleteContact = user;
        $scope.deletePopup = true;
        $scope.newContact = false;
        var dlgElem = angular.element("#exampleModal");
        if (dlgElem) {
           dlgElem.modal("show");
        }
    }

    $scope.closePopup = function(){
        $scope.popupData.fristname='';
        $scope.popupData.lastName='';
        $scope.popupData.phone='';
        var dlgElem = angular.element("#exampleModal");
        if (dlgElem) {
           dlgElem.modal("hide");
        }
    }
    $scope.addContact = function(){
        $scope.data.push({
            firstName: $scope.popupData.firstName, lastName: $scope.popupData.lastName, phone: $scope.popupData.phone, id: $scope.data[$scope.data.length-1].id+1
        });
        $scope.popupData.firstName='';
        $scope.popupData.lastName='';
        $scope.popupData.phone='';
        var dlgElem = angular.element("#exampleModal");
        if (dlgElem) {
           dlgElem.modal("hide");
        }
    }
    
    $scope.updateContact = function(){
        $scope.data[$scope.index].firstName = $scope.popupData.firstName;
        $scope.data[$scope.index].lastName  = $scope.popupData.lastName;
        $scope.data[$scope.index].phone = $scope.popupData.phone;
        
        $scope.popupData.firstName='';
        $scope.popupData.lastName='';
        $scope.popupData.phone='';
        var dlgElem = angular.element("#exampleModal");
        if (dlgElem) {
           dlgElem.modal("hide");
        }
    }
    $scope.deleteContact = function(){
        $scope.data.splice($scope.data.indexOf($scope.DeleteContact),1)
        var dlgElem = angular.element("#exampleModal");
        if (dlgElem) {
           dlgElem.modal("hide");
        }
    }

   

});