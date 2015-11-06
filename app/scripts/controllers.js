/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Example user';
    this.helloText = 'Welcome in Strava Dash';
    this.descriptionText = 'My first real JS Application';

};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)