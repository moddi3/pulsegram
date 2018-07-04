import CuratedListController from './curatedList.controller';
import curatedListTemplate from './curatedList.template.html';

const CuratedList = {
  bindings: { photos: '<' },
  controller: CuratedListController,
  template: curatedListTemplate,
};

export default CuratedList;
