import Unsplash from 'unsplash-js';
import { UNSPLASH } from '../../../keys';

const unsplash = new Unsplash({
  applicationId: UNSPLASH.APP_ACCESS_KEY,
  secret: UNSPLASH.APP_SECRET,
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
});

class CuratedListService {
  constructor($http) {
    this.$http = $http;
  }

  getPhotos = () => unsplash.photos.listCuratedPhotos(1, 30, 'popular');
}

export default CuratedListService;
