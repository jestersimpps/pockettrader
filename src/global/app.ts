/*
  This is temporarily commented out as the `setupConfig` method has been temporarily removed
*/

// import { setupConfig } from '@ionic/core';

//setupConfig({
// uncomment the following line to force mode to be Material Design
// mode: 'md'
//});
declare let Context: any;

import highcharts from './highcharts';
Context.highcharts = highcharts;
