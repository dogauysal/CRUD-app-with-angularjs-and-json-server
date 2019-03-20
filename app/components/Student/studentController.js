schoolApp.controller('studentController',['$scope','$resource', '$state', '$stateParams', 'Student', function($scope, $resource, $state, $stateParams, Student) {
   
    $scope.Students = "";
    Student.get(function(data) {
        $scope.Students =  data;
        
    })

    $scope.EditStudent = function(id) {
        $state.go('studentEdit', {id: id});
    }

    $scope.AddNewStudent = function() {
        $state.go('studentAdd');
    }

}]).controller('studentEditController', ['$scope','$resource', '$stateParams', '$state', 'Student', 'Class', function($scope, $resource, $stateParams, $state, Student, Class) {
    $scope.Student = new Student();
    $scope.Student.class = new Class();
    $scope.ClassList = "";
    $scope.SelectedClassID = "";

    Class.get(function(data) {
        $scope.ClassList =  data;
    })

    Student.getById({id: $stateParams.id}, function(data) {
        $scope.Student = data;
        $scope.SelectedClassID = data.class.id;
    })

    $scope.UpdateStudent = function() {
        if (FieldValidation()) {
            $scope.Student.class = Class.getById({id: $scope.SelectedClassID});

            $scope.Student.class.$promise.then(function() {
                $scope.Student.$update().then(function() {
                    $state.go('student');
                })
    
            })     
        }
    }

    $scope.DeleteStudent = function() {
        $scope.Student.$delete().then(function() {
            $state.go('student');
        })
    }

    function FieldValidation() {
        
        var result = true;
        var errorFields = [];

        if($scope.Student.name == "" || $scope.Student.name == undefined) {
            $('#name').addClass("validation_error");
            errorFields.push('name');
        } else {
            $('#name').removeClass("validation_error");
        }

        if($scope.Student.surname == "" || $scope.Student.surname == undefined) {
            $('#surname').addClass("validation_error");
            errorFields.push('surname');
        } else {
            $('#surname').removeClass("validation_error");
        }
        
        if($scope.Student.age == "" || $scope.Student.age == undefined) {
            $('#age').addClass("validation_error");
            errorFields.push('age');
        } else {
            $('#age').removeClass("validation_error");
        }
        
        if($scope.SelectedClassID == "" || $scope.SelectedClassID == undefined) {
            $('#class').addClass("validation_error");
            errorFields.push('class');
        } else {
            $('#class').removeClass("validation_error");
        }

        if(errorFields.length > 0) 
            result = false;

        return result;

    }

}]).controller('studentAddController',['$scope', '$resource', '$stateParams', '$state', 'Student', 'Class', function($scope, $resource, $stateParams, $state, Student, Class) {
    $scope.Student = new Student();
    $scope.Student.class = new Class();
    $scope.SelectedClassID = "";
    $scope.ClassList = "";

    Class.get(function(data) {
        $scope.ClassList =  data;
    })

    $scope.AddStudent = function() {

        if(FieldValidation()) {
            
            $scope.Student.class  = Class.getById({id: $scope.SelectedClassID});

            $scope.Student.class.$promise.then(function() {
                $scope.Student.$add().then(function() {
                    $state.go('student');
                })
    
            })           
        }
    }

    function FieldValidation() {
        
        var result = true;
        var errorFields = [];

        if($scope.Student.name == "" || $scope.Student.name == undefined) {
            $('#name').addClass("validation_error");
            errorFields.push('name');
        } else {
            $('#name').removeClass("validation_error");
        }

        if($scope.Student.surname == "" || $scope.Student.surname == undefined) {
            $('#surname').addClass("validation_error");
            errorFields.push('surname');
        } else {
            $('#surname').removeClass("validation_error");
        }
        
        if($scope.Student.age == "" || $scope.Student.age == undefined) {
            $('#age').addClass("validation_error");
            errorFields.push('age');
        } else {
            $('#age').removeClass("validation_error");
        }
        
        if($scope.SelectedClassID == "" || $scope.SelectedClassID == undefined) {
            $('#class').addClass("validation_error");
            errorFields.push('class');
        } else {
            $('#class').removeClass("validation_error");
        }

        if(errorFields.length > 0) 
            result = false;

        return result;

    }
}])
