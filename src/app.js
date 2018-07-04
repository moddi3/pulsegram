import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import 'angular-translate';
import 'angular-sanitize';
import { StickyStatesPlugin } from '@uirouter/sticky-states';

import './styles/style.scss';
import search from './components/search/search.component';
import curatedList from './components/curatedList/curatedList.component';
import SearchService from './components/search/search.service';
import CuratedListService from './components/curatedList/curatedList.service';
import MainController from './main.controller';

const translationsEN = {
  Home: 'Home',
  Search: 'Search',
  Previous: 'Previous',
  Next: 'Next',
  BUTTON_LANG_DE: 'German',
  BUTTON_LANG_EN: 'English',
};

const translationsDE = {
  Home: 'Zuhause',
  Search: 'Suche',
  Previous: 'Bisherige',
  Next: 'Nachster',
  BUTTON_LANG_DE: 'Deutsch',
  BUTTON_LANG_EN: 'Englisch',
};

angular
  .module('app', ['ngSanitize', 'ui.bootstrap', 'ui.router', 'pascalprecht.translate'])
  .config(($translateProvider) => {
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('de', translationsDE);
    $translateProvider.preferredLanguage('de');
  })
  .config(($uiRouterProvider) => {
    $uiRouterProvider.plugin(StickyStatesPlugin);
    const { stateRegistry, urlService } = $uiRouterProvider;
    stateRegistry.register({
      name: 'home',
      url: '/home',
      component: 'curatedList',
    });

    stateRegistry.register({
      name: 'search',
      url: '/search',
      component: 'search',
    });

    urlService.rules.initial({ state: 'home' });
  })
  .controller('MainController', MainController)
  .component('search', search)
  .component('curatedList', curatedList)
  .service('SearchService', SearchService)
  .service('CuratedListService', CuratedListService)
  .directive('uiBroadcastTranslate', $rootScope => ({
    link(scope) {
      console.log(scope);
      $rootScope.$on('$translateChangeSuccess', () => {
        scope.$broadcast('uiBroadcastTranslateDirectiveEvent');
      });
    },
  }));
