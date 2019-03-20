schoolApp.controller('teacherController',['$scope','$resource', '$state', '$stateParams', 'Teacher', function($scope, $resource, $state, $stateParams, Teacher) {
   
    $scope.Teachers = "";
    Teacher.get(function(data) {
        $scope.Teachers =  data;
    })

    $scope.EditTeacher = function(id) {
        $state.go('teacherEdit', {id: id});
    }

    $scope.AddNewTeacher = function() {
        $state.go('teacherAdd');
    }

}]).controller('teacherEditController', ['$scope','$resource', '$stateParams', '$state', 'Teacher', 'Course', function($scope, $resource, $stateParams, $state, Teacher, Course) {
  
    $scope.Teacher = new Teacher();
    $scope.Teacher.course = new Course();
    $scope.CourseList = "";
    $scope.SelectedCourseID = "";

    Course.get(function(data) {
        $scope.CourseList =  data;
    })

    Teacher.getById({id: $stateParams.id}, function(data) {
        $scope.Teacher = data;
        $scope.SelectedCourseID = data.course.id;
    })

    $scope.UpdateTeacher = function() {
        if (FieldValidation()) {
            $scope.Teacher.course = Course.getById({id: $scope.SelectedCourseID});

            $scope.Teacher.course.$promise.then(function() {
                $scope.Teacher.$update().then(function() {
                    $state.go('teacher');
                })
    
            })     
        }
    }

    $scope.DeleteTeacher = function() {
        $scope.Teacher.$delete().then(function() {
            $state.go('teacher');
        })
    }

    function FieldValidation() {
        
        var result = true;
        var errorFields = [];

        if($scope.Teacher.name == "" || $scope.Teacher.name == undefined) {
            $('#name').addClass("validation_error");
            errorFields.push('name');
        } else {
            $('#name').removeClass("validation_error");
        }

        if($scope.Teacher.surname == "" || $scope.Teacher.surname == undefined) {
            $('#surname').addClass("validation_error");
            errorFields.push('surname');
        } else {
            $('#surname').removeClass("validation_error");
        }
        
        if($scope.Teacher.age == "" || $scope.Teacher.age == undefined) {
            $('#age').addClass("validation_error");
            errorFields.push('age');
        } else {
            $('#age').removeClass("validation_error");
        }
        
        if($scope.SelectedCourseID == "" || $scope.SelectedCourseID == undefined) {
            $('#class').addClass("validation_error");
            errorFields.push('class');
        } else {
            $('#class').removeClass("validation_error");
        }

        if(errorFields.length > 0) 
            result = false;

        return result;

    }

}]).controller('teacherAddController',['$scope', '$resource', '$stateParams', '$state', 'Teacher', 'Course', function($scope, $resource, $stateParams, $state, Teacher, Course) {
    $scope.Teacher = new Teacher();
    $scope.Teacher.course = new Course();
    $scope.SelectedCourseID = "";
    $scope.CourseList = "";

    Course.get(function(data) {
        $scope.CourseList =  data;
    })

    $scope.AddTeacher = function() {

        if(FieldValidation()) {
            
            $scope.Teacher.course  = Course.getById({id: $scope.SelectedCourseID});

            $scope.Teacher.course.$promise.then(function() {
                $scope.Teacher.$add().then(function() {
                    $state.go('teacher');
                })
            })           
        }
    }

    function FieldValidation() {
        
        var result = true;
        var errorFields = [];

        if($scope.Teacher.name == "" || $scope.Teacher.name == undefined) {
            $('#name').addClass("validation_error");
            errorFields.push('name');
        } else {
            $('#name').removeClass("validation_error");
        }

        if($scope.Teacher.surname == "" || $scope.Teacher.surname == undefined) {
            $('#surname').addClass("validation_error");
            errorFields.push('surname');
        } else {
            $('#surname').removeClass("validation_error");
        }
        
        if($scope.Teacher.age == "" || $scope.Teacher.age == undefined) {
            $('#age').addClass("validation_error");
            errorFields.push('age');
        } else {
            $('#age').removeClass("validation_error");
        }
        
        if($scope.SelectedCourseID == "" || $scope.SelectedCourseID == undefined) {
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
