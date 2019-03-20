schoolApp.controller('classController',['$scope','$resource', '$state', '$stateParams', 'Class', 'Student', function($scope, $resource, $state, $stateParams, Class, Student) {
   
    $scope.Classes = "";
    Class.get(function(data) {
        $scope.Classes =  data;

        for (let index = 0; index < $scope.Classes.length; index++) {
            
           Student.getByClassID({class_id : $scope.Classes[index].id}, function(_data) {
                $scope.Classes[index].studentCount = _data.length;
           });
        }
    })

    $scope.EditClass = function(id) {
        $state.go('classEdit', {id: id});
    }

    $scope.AddNewClass = function() {
        $state.go('classAdd');
    }

    $scope.ShowStudentList = function(id) {
        $state.go('classStudents',{id: id })
    }

}]).controller('classEditController', ['$scope','$resource', '$stateParams', '$state', 'Class', 'Student', function($scope, $resource, $stateParams, $state, Class, Student) {
    $scope.Class = new Class();
    Class.getById({id: $stateParams.id}, function(data) {
        $scope.Class = data;
    })

    $scope.UpdateClass = function() {
        if($scope.Class.title != "" && $scope.Class.title != undefined) {
            $('#title').removeClass("validation_error");
            $scope.Class.$update().then(function() {
                $state.go('class');
            })
        } else {
            $('#title').addClass("validation_error");
        }
     
    }

    $scope.DeleteClass = function() {
        var class_id = $scope.Class.id;
        $scope.Class.$delete().then(function() {
            Student.getByClassID({class_id: class_id}, function(data) {
                for (let index = 0; index < data.length; index++) {
                    var student = new Student();
                    student = data[index];
                    student.class = new Class();
                    student.$update({id: student.id});
                }
            })
            $state.go('class');
        })
    }

}]).controller('classAddController',['$scope', '$resource', '$stateParams', '$state', 'Class', function($scope, $resource, $stateParams, $state, Class) {
    $scope.Class = new Class();

    $scope.AddClass = function() {

        if($scope.Class.title != "" && $scope.Class.title != undefined){
            $('#title').removeClass("validation_error");
            $scope.Class.$add().then(function() {
                $state.go('class');
            })
        } else {
            $('#title').addClass("validation_error");
        }

        
    }
}]).controller('classStudentsController',['$scope', '$resource', '$stateParams', '$state', 'Class', 'Student', function($scope, $resource, $stateParams, $state, Class, Student) {

    $scope.Class = Class.getById({id: $stateParams.id});
    Student.getByClassID({class_id : $stateParams.id}, function(data) {
        $scope.Students = data;
    });   
}])
