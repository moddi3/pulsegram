import SearchController from './search.controller';
import template from './photos.template.html';

const User = {
  bindings: { photos: '<' },
  controller: SearchController,
  template,
};

export default User;
