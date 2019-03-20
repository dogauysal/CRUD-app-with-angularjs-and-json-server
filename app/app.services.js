
var schoolAppServices =  angular.module('schoolAppServices',['ngResource']);

var Class = schoolAppServices.factory('Class', function($resource) {
    return $resource('http://localhost:3000/class/:id',{}, {
        get: {
            method: 'GET',
            params: {},
            isArray: true,
            cache: false
        },
        getById: {
            method: 'GET',
            params: {
                "id" : "@id"
            }
        },
        update: {
            method: 'PUT',
            params: {
                "id": "@id"
            }
        },
        delete: {
            method: 'DELETE',
            params: {
                "id": "@id"
            }
        },
        add: {
            method: 'POST'
        }
    })
})

var Course = schoolAppServices.factory('Course', function($resource) {
    return $resource('http://localhost:3000/course/:id',{}, {
        get: {
            method: 'GET',
            params: {},
            isArray: true,
            cache: false
        },
        getById: {
            method: 'GET',
            params: {
                "id" : "@id"
            }
        },
        update: {
            method: 'PUT',
            params: {
                "id": "@id"
            }
        },
        delete: {
            method: 'DELETE',
            params: {
                "id": "@id"
            }
        },
        add: {
            method: 'POST'
        }
    })
})

var Student = schoolAppServices.factory('Student', function($resource) {
    return $resource('http://localhost:3000/student/:id',{}, {
        get: {
            method: 'GET',
            params: {
                'id': '@id'
            },
            isArray: true,
            cache: false
        },
        getById: {
            method: 'GET',
            params: {
                "id" : "@id"
            }
        },
        getByClassID: {
            method: 'GET',
            url: 'http://localhost:3000/student?class.id=:class_id',
            params: {
                "class_id": "@class_id"
            },
            isArray: true,
            cache: false
        },
        update: {
            method: 'PUT',
            params: {
                "id": "@id"
            }
        },
        delete: {
            method: 'DELETE',
            params: {
                "id": "@id"
            }
        },
        add: {
            method: 'POST'
        }
    })
})

var Teacher = schoolAppServices.factory('Teacher', function($resource) {
    return $resource('http://localhost:3000/teacher/:id',{}, {
        get: {
            method: 'GET',
            params: {
                'id': '@id'
            },
            isArray: true,
            cache: false
        },
        getById: {
            method: 'GET',
            params: {
                "id" : "@id"
            }
        },
        getByCourseID: {
            method: 'GET',
            url: 'http://localhost:3000/teacher?course.id=:course_id',
            params: {
                "course_id": "@course_id"
            },
            isArray: true,
            cache: false
        },
        update: {
            method: 'PUT',
            params: {
                "id": "@id"
            }
        },
        delete: {
            method: 'DELETE',
            params: {
                "id": "@id"
            }
        },
        add: {
            method: 'POST'
        }
    })
})

