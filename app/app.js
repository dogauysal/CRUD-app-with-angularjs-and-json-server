
var schoolApp =  angular.module('schoolApp',[
    'ui.router',
    'ngResource',
    'schoolAppServices'
]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
function($stateProvider,$urlRouterProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('class', {
            url: '/classes',
            templateUrl: 'app/components/Class/classList.html',
            controller: 'classController'
        })
        .state('classEdit', {
            url: '/classes/:id',
            templateUrl: 'app/components/Class/classEdit.html',
            controller: 'classEditController'
        })
        .state('classAdd', {
            url: '/class_add',
            templateUrl: 'app/components/Class/classAdd.html',
            controller: 'classAddController'
        })
        .state('classStudents', {
            url: '/classes/students/:id',
            templateUrl: 'app/components/Class/classStudents.html',
            controller: 'classStudentsController'
        })
        .state('course', {
            url: '/courses',
            templateUrl: 'app/components/Course/courseList.html',
            controller: 'courseController'
        })
        .state('courseEdit', {
            url: '/courses/:id',
            templateUrl: 'app/components/Course/courseEdit.html',
            controller: 'courseEditController'
        })
        .state('courseAdd', {
            url: '/course_add',
            templateUrl: 'app/components/Course/courseAdd.html',
            controller: 'courseAddController'
        })
        .state('courseTeachers', {
            url: '/courses/teachers/:id',
            templateUrl: 'app/components/Course/courseTeachers.html',
            controller: 'courseTeachersController'
        })
        .state('student', {
            url: '/students',
            templateUrl: 'app/components/Student/studentList.html',
            controller: 'studentController'
        })
        .state('studentEdit', {
            url: '/students/:id',
            templateUrl: 'app/components/Student/studentEdit.html',
            controller: 'studentEditController'
        })
        .state('studentAdd', {
            url: '/student_add',
            templateUrl: 'app/components/Student/studentAdd.html',
            controller: 'studentAddController'
        })
        .state('teacher', {
            url: '/teachers',
            templateUrl: 'app/components/Teacher/teacherList.html',
            controller: 'teacherController'
        })
        .state('teacherEdit', {
            url: '/teachers/:id',
            templateUrl: 'app/components/Teacher/teacherEdit.html',
            controller: 'teacherEditController'
        })
        .state('teacherAdd', {
            url: '/teacher_add',
            templateUrl: 'app/components/Teacher/teacherAdd.html',
            controller: 'teacherAddController'
        })
}
])