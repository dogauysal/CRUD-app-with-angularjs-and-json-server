schoolApp.controller('courseController',['$scope','$resource', '$state', '$stateParams', 'Course', 'Teacher', function($scope, $resource, $state, $stateParams, Course, Teacher) {
   
    $scope.Courses = "";
    Course.get(function(data) {
        $scope.Courses =  data;

        for (let index = 0; index < $scope.Courses.length; index++) {
            
            Teacher.getByCourseID({course_id : $scope.Courses[index].id}, function(_data) {
                 $scope.Courses[index].teacherCount = _data.length;
            });
         }
    })

    $scope.EditCourse = function(id) {
        $state.go('courseEdit', {id: id});
    }

    $scope.AddNewCourse = function() {
        $state.go('courseAdd');
    }

    $scope.ShowTeacherList = function(id) {
        $state.go('courseTeachers',{id: id})
    }

}]).controller('courseEditController', ['$scope','$resource', '$stateParams', '$state', 'Course', 'Teacher', function($scope, $resource, $stateParams, $state, Course, Teacher) {
    $scope.Course = new Course();
    Course.getById({id: $stateParams.id}, function(data) {
        $scope.Course = data;
    })

    $scope.UpdateCourse = function() {
        if($scope.Course.title != "" && $scope.Course.title != undefined) {
            $('#title').removeClass("validation_error");
            $scope.Course.$update().then(function() {
                $state.go('course');
            })
        } else {
            $('#title').addClass("validation_error");
        }
     
    }

    $scope.DeleteCourse = function() {
        var course_id = $scope.Course.id;
        $scope.Course.$delete().then(function() {
            Teacher.getByCourseID({course_id: course_id}, function(data) {
                for (let index = 0; index < data.length; index++) {
                    var teacher = new Teacher();
                    teacher = data[index];
                    teacher.course = new Course();
                    teacher.$update({id: teacher.id});
                }
            })
            $state.go('course');
        })
    }

}]).controller('courseAddController',['$scope', '$resource', '$stateParams', '$state', 'Course', function($scope, $resource, $stateParams, $state, Course) {
    $scope.Course = new Course();

    $scope.AddCourse = function() {

        if($scope.Course.title != "" && $scope.Course.title != undefined){
            $('#title').removeClass("validation_error");
            $scope.Course.$add().then(function() {
                $state.go('course');
            })
        } else {
            $('#title').addClass("validation_error");
        }

        
    }
}]).controller('courseTeachersController',['$scope', '$resource', '$stateParams', '$state', 'Course', 'Teacher', function($scope, $resource, $stateParams, $state, Course, Teacher) {

    $scope.Course = Course.getById({id: $stateParams.id});
    Teacher.getByCourseID({course_id : $stateParams.id}, function(data) {
        $scope.Teachers = data;
    });   
}])
