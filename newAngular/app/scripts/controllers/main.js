        'use strict';

        /**
         * @ngdoc function
         * @name newAngularApp.controller:MainCtrl
         * @description
         * # MainCtrl
         * Controller of the newAngularApp
         */
        angular.module('newAngularApp')
            .controller('MainCtrl', function ($scope) {
                    $scope.coupons = [
                        {
                            title: 'Tayto Crisps',
                            expiry: '12 / 12 / 2016',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 3
                },
                        {
                            title: 'Judas Bread',
                            expiry: '12 / 1 / 0001',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 3
                    },
                        {
                            title: 'Judas Seat',
                            expiry: '12 / 1 / 0003',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 3

                    },
                        {
                            title: 'Judas Monitor',
                            expiry: '12 / 1 / 0001',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 3

                    },
                        {
                            title: 'Judas Bread',
                            expiry: '12 / 1 / 0001',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 3

                    },
                        {
                            title: 'Judas Keyboard',
                            expiry: '12 / 1 / 0001',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 3

                    },
                        {
                            title: 'Judas Mouse',
                            expiry: '12 / 1 / 0001',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 8

                    },
                        {
                            title: 'Judas Bread',
                            expiry: '12 / 1 / 0001',
                            sentToCard: 'false',
                            image: "/views/sendtocard.png",
                            saving: 3

                    }
         ];
                    $scope.displayPrintIconFlag = false;
                    $scope.printIcon = function (coupon) {
                        if (coupon.sentToCard === false) {
                            $scope.icon = "glyphicon glyphicon-print";
                        } else {
                            $scope.icon = "";
                        }

                    }
                    $scope.total = 0;

                    $scope.calculatetotal = function (coupon) {
                        if (coupon.sentToCard === false) {
                            $scope.total += coupon.saving;
                        }
                    }

                    $scope.toggleImage = function (coupon) {
                        coupon.sentToCard = !coupon.sentToCard;
                        if (coupon.sentToCard === false) {
                            coupon.image = "/views/sendtocarddone.png"
                        } else {
                            coupon.image = "/views/sendtocard.png"
                        }
                    }

                    $scope.counter = 0;

                    $scope.counterPlusOne = function (coupon) {
                        if (coupon.sentToCard === false) {
                            $scope.counter += 1;
                        }
                    };

                }

            );
