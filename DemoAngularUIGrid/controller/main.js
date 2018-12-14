var app=angular.module("historicalApp",['ui.grid',
'ui.grid.selection',
'ui.grid.exporter',
'ui.grid.pagination',
'ui.grid.autoResize',
'ui.grid.moveColumns']);

app.controller("gridCTRL",function ($scope) {
$scope.gridOptions = {

enableSelectAll: true,
enableRowSelection: true, enableRowHeaderSelection: false,
//paginationPageSizes: [9, 20, 50],
paginationPageSizes: [25, 50, 75],
paginationPageSize: 25,

enableGridMenu: true,
exporterCsvFilename: 'myFile.csv',
exporterMenuPdf: false,
exporterMenuExcel: false

};
//c.gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.NEVER;
//c.gridOptions.multiSelect = false;
$scope.gridOptions.multiSelect = false;
$scope.gridOptions.modifierKeysToMultiSelect = false;
$scope.gridOptions.noUnselect = true;
$scope.gridOptions.onRegisterApi = function( gridApi ) {
    $scope.gridApi = gridApi;
    $scope.gridApi.pagination.on.paginationChanged($scope, function (pageNumber, pageSize)
{

});
 };

$scope.gridOptions.columnDefs = [
{ name: 'number' },
{ name: 'shortDescription',cellTooltip: true}
];
$scope.data={};
$scope.data.incidents=[
    {'number':'INC101','shortDescription':"Test123"},
    {'number':'INC102','shortDescription':"Test1234"}
];

$scope.gridOptions.data = $scope.data.incidents;




})