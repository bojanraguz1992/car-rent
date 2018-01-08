// angular
//     .module('carRent')
//     .directive('calendarPicker', ['constants', function (constants) {
//         'use strict';
//         return {
//             restrict: 'E',
//             templateUrl: constants.componentsPath + 'calendar/calendar.html',
//             scope: {
//                 show: '=',
//                 activeDate: '='
//             },
//             controller: [
//                 '$scope',
//                 function ($scope) {
//                     var vm = {
//                         today: moment(),
//                         nextMonth: nextMonth,
//                         previusMonth: previusMonth,
//                         activeSlide: 0,
//                         selectDate: selectDate,
//                         hideModal: hideModal,
//                         titles: {
//                             months: ['January',
//                                 'February',
//                                 'March',
//                                 'April',
//                                 'May',
//                                 'June',
//                                 'July',
//                                 'August',
//                                 'September',
//                                 'October',
//                                 'November',
//                                 'December'
//                             ],
//                             days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
//                         },
//                         days: [],
//                     };
//                     $scope.vm = vm;
//                     $scope.$watch('show', function () {
//                         initCalendar();
//                     });


//                     function initCalendar() {
//                         getCurrentDay($scope.activeDate);
//                     }

//                     function getCurrentDay(day) {
//                         var date = moment(day);
//                         vm.startOfWeek = moment(date).startOf('week').isoWeekday(1);

//                         vm.activeMonth = {
//                             month: vm.titles.months[date.format('MM') - 1],
//                             year: date.format('YYYY')
//                         }
//                         vm.startOfWeek = buildWeek(vm.startOfWeek, date);
//                     }

//                     function buildWeek(startOfWeek, date) {
//                         var newMonth = [];
//                         do {
//                             for (var i = 0; i < 7; i++) {
//                                 var newDate;

//                                 if (moment(startOfWeek).add(i, 'day').format('MM') === moment(date).format('MM')) {
//                                     newDate = true;
//                                 } else {
//                                     newDate = false;
//                                 }

//                                 newMonth.push({
//                                     activeDate: moment($scope.activeDate).format('YYYY-MM-DD') === moment(startOfWeek).add(i, 'day').format('YYYY-MM-DD'),
//                                     day: moment(startOfWeek).add(i, 'day').format('YYYY-MM-DD'),
//                                     sameMonth: newDate,
//                                     minDate: false,
//                                     selected: false,
//                                     currentDate: moment(startOfWeek).add(i, 'day').format('YYYY-MM-DD') === vm.today.format('YYYY-MM-DD') ? true : false
//                                 });
//                             }

//                             startOfWeek = moment(startOfWeek).add(7, 'day');
//                         } while (startOfWeek.format('MM') === date.format('MM'));
//                         vm.days.push(newMonth);

//                         return startOfWeek;
//                     }

//                     function nextMonth() {
//                         vm.activeSlide++;
//                         getCurrentDay(vm.startOfWeek);
//                     }

//                     function previusMonth() {
//                         vm.activeSlide--;
//                     }

//                     function hideModal() {
//                         $scope.show = false;
//                     }

//                     function selectDate(day) {
//                         $scope.activeDate = day;
//                     }
//                 }
//             ]
//         };
//     }]);