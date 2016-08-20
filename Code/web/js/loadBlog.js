/**
 * Created by Tushar_Kale on 8/20/16.
 */
    console.log("Hello1");
    var mediaApp = angular.module('mediaApp',[]);

    mediaApp.controller("mediaController", function ($scope) {
    console.log("Hello2");
    $scope.data = {
    "blogs": [
{
    "id": 2,
    "title": "The 10 Questions to Ask When You Hear the Word “Microgrid”",
    "content": "test",
    "status": "active",
    "imageLocation": "images/blog1.jpg",
    "user_id": 2,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "Francisco",
    "lastName": "Morocz",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "HPNet: Advancing Micro-hydro Power (Part 2) — A Look Ahead",
    "content": "test",
    "status": "active",
    "imageLocation": "images/blog2.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "Breaking the Macro Barriers to Microgrids",
    "content": "test",
    "status": "active",
    "imageLocation": "images/blog3.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "Innovation and resiliency on the microgrid",
    "content": "test",
    "status": "active",
    "imageLocation": "images/blog4.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "New York Seeks Value for Distributed Energy and Reevaluates Net Metering",
    "content": "test",
    "status": "active",
    "imageLocation": "images/blog5.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "What Will Keep Microgrid Development Trending Upward in 2016?",
    "content": "test",
    "status": "active",
    "imageLocation": "images/blog6.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "Shinde Title",
    "content": "test",
    "status": "active",
    "imageLocation": "images/banner1.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "Chawla Title",
    "content": "test",
    "status": "active",
    "imageLocation": "images/banner2.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "Thejas Title",
    "content": "test",
    "status": "active",
    "imageLocation": "images/banner3.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "test",
    "content": "test",
    "status": "active",
    "imageLocation": "images/banner1.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "test",
    "content": "test",
    "status": "active",
    "imageLocation": "images/banner2.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
},
{
    "id": 3,
    "title": "test",
    "content": "test",
    "status": "active",
    "imageLocation": "images/banner3.jpg",
    "user_id": 3,
    "created_at": "2016-08-13T23:55:55.000Z",
    "updated_at": "2016-08-13T23:55:55.000Z",
    "email": "j@gmail.com",
    "password": "ufdhf",
    "firstName": "keljh",
    "lastName": "ekjfh",
    "dob": "2016-08-09"
}
    ]
};
});

    mediaApp.controller("paginationController", function ($scope, Item) {
    /*

     $scope.data = {
     "blogs": [
     {
     "id": 2,
     "title": "The 10 Questions to Ask When You Hear the Word “Microgrid”",
     "content": "test",
     "status": "active",
     "imageLocation": "images/blog1.jpg",
     "user_id": 2,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "Francisco",
     "lastName": "Morocz",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Jui Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner2.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Prarthana Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner3.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Vineet Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner1.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Kattappa Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner2.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Nitin Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner3.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Shinde Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner1.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Chawla Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner2.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "Thejas Title",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner3.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "test",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner1.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "test",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner2.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     },
     {
     "id": 3,
     "title": "test",
     "content": "test",
     "status": "active",
     "imageLocation": "images/banner3.jpg",
     "user_id": 3,
     "created_at": "2016-08-13T23:55:55.000Z",
     "updated_at": "2016-08-13T23:55:55.000Z",
     "email": "j@gmail.com",
     "password": "ufdhf",
     "firstName": "keljh",
     "lastName": "ekjfh",
     "dob": "2016-08-09"
     }
     ]
     };
     */
    $scope.data = {
        "blogs": [
            {
                "id": 2,
                "title": "The 10 Questions to Ask When You Hear the Word “Microgrid”",
                "content": "test",
                "status": "active",
                "imageLocation": "images/blog1.jpg",
                "user_id": 2,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "Francisco",
                "lastName": "Morocz",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "HPNet: Advancing Micro-hydro Power (Part 2) — A Look Ahead",
                "content": "test",
                "status": "active",
                "imageLocation": "images/blog2.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "Breaking the Macro Barriers to Microgrids",
                "content": "test",
                "status": "active",
                "imageLocation": "images/blog3.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "Innovation and resiliency on the microgrid",
                "content": "test",
                "status": "active",
                "imageLocation": "images/blog4.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "New York Seeks Value for Distributed Energy and Reevaluates Net Metering",
                "content": "test",
                "status": "active",
                "imageLocation": "images/blog5.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "What Will Keep Microgrid Development Trending Upward in 2016?",
                "content": "test",
                "status": "active",
                "imageLocation": "images/blog6.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "Shinde Title",
                "content": "test",
                "status": "active",
                "imageLocation": "images/banner1.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "Chawla Title",
                "content": "test",
                "status": "active",
                "imageLocation": "images/banner2.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "Thejas Title",
                "content": "test",
                "status": "active",
                "imageLocation": "images/banner3.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "test",
                "content": "test",
                "status": "active",
                "imageLocation": "images/banner1.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "test",
                "content": "test",
                "status": "active",
                "imageLocation": "images/banner2.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            },
            {
                "id": 3,
                "title": "test",
                "content": "test",
                "status": "active",
                "imageLocation": "images/banner3.jpg",
                "user_id": 3,
                "created_at": "2016-08-13T23:55:55.000Z",
                "updated_at": "2016-08-13T23:55:55.000Z",
                "email": "j@gmail.com",
                "password": "ufdhf",
                "firstName": "keljh",
                "lastName": "ekjfh",
                "dob": "2016-08-09"
            }
        ]
    };
    /*

     $scope.paginationItems = [
     {
     "author": "Tushar Kale",
     "role": "Software Developer",
     "title": "First Blog Text",
     "url":"images/banner2.jpg"
     },{
     "author": "Juilee Jadhav",
     "role": "Software Developer",
     "title": "Second Blog Text",
     "url":"images/banner3.jpg"
     },{
     "author": "Vineet Dandekar",
     "role": "Software Developer",
     "title": "Third Blog Text",
     "url":"images/banner2.jpg"
     },{
     "author": "Juilee Jadhav",
     "role": "Software Developer",
     "title": "Second Blog Text",
     "url":"images/banner3.jpg"
     },{
     "author": "Juilee Jadhav",
     "role": "Software Developer",
     "title": "Second Blog Text",
     "url":"images/banner1.jpg"
     }
     ];
     */

    console.log($scope.data.blogs.length);
    $scope.itemsPerPage = 3;
    $scope.currentPage = 1;
    $scope.total = Item.total($scope.data.blogs);
    $scope.displayedItems = Item.get($scope.currentPage * $scope.itemsPerPage, $scope.itemsPerPage);

    console.log($scope.displayedItems.length);

    $scope.loadMore = function () {
    $scope.currentPage++;

    var newItems = Item.get($scope.currentPage * $scope.itemsPerPage, $scope.itemsPerPage);
    $scope.displayedItems = $scope.displayedItems.concat(newItems);

    if($scope.currentPage === ($scope.pageCount() - 1)){
    console.log("Entered");
    $(".load-more").hide();
}
    console.log("CurrentPage: " + Number($scope.currentPage) + Number(1));
    console.log("Page Count: " + typeof $scope.pageCount() + typeof 1);
}

    $scope.nextPageDisabledClass = function() {
    return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
};

    $scope.pageCount = function() {
    return Math.ceil($scope.total/$scope.itemsPerPage);
};

});

    mediaApp.directive("backgroundImageDirective", function() {

    return function (scope, element, attrs) {
    var url = attrs.backgroundImageDirective;
    element.css({
    'background-image': 'url('+url+')'
});
}
});

    mediaApp.directive("paginationTilesDirective", function () {


    return {
    /*template: "<li class=\"col-xs-4\" ng-repeat=\"item in displayedItems\"> <a href=\"\"> <div class=\"blogImage\" style=\"background-image: url('images/banner1.jpg');\"> </div> <h2 class=\"blogHeader\">Title Title Title TitleTitleTitleTitle Title TitleTitle Title</h2></a></li>"*/
    template: "<li class=\"col-xs-4\" ng-repeat=\"item in displayedItems\"> <a href=\"\"> <div class=\"blogImage\" style=\"background-image: url('{{item.imageLocation}}');\"> </div> <h2 class=\"blogHeader\">{{item.title}}</h2></a></li>"
};

})

    mediaApp.factory("Item", function () {

    var items = [];

    return {
    total: function (data) {
    items = data;
    return items.length;
},
    get: function (start, limit) {
    return items.slice(start, start + limit);
}
};
});