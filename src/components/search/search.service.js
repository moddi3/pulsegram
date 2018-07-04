import Unsplash from 'unsplash-js';
import { UNSPLASH } from '../../../keys';

const unsplash = new Unsplash({
  applicationId: UNSPLASH.APP_ACCESS_KEY,
  secret: UNSPLASH.APP_SECRET,
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
});

class SearchService {
  constructor($http) {
    this.$http = $http;
  }

  getUsers = (page, perPage) => unsplash.photos.listPhotos(page, perPage, 'latest');

  searchPhotos = (keyword, page, perPage) => unsplash.search.photos(keyword, page, perPage);
  // getUsers = (query = 'football') => {
  //   const URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
  //     query,
  //   )}&per_page=20`;
  //   return this.$http.get(URL);
  // };
}

export default SearchService;
