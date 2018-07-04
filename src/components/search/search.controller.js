import feather from 'feather-icons';

class Photos {
  constructor($scope, SearchService) {
    this.$scope = $scope;
    this.SearchService = SearchService;
    this.photos = [];
    this.query = 'ukraine';
    this.totalItems = 0;
    this.perPage = 20;
    this.currentPage = 1;
  }

  $onInit() {
    this.searchPhotos(this.query, this.perPage);
    feather.replace();
    // this.$scope.$watch(
    //   () => this.query,
    //   (newValue) => {
    // },
    // );
  }

  getUsers = (page = 1, perPage = 20) => this.SearchService.getUsers(page, perPage)
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      this.photos = data.map(photo => ({
        ...photo.urls,
      }));
      this.$scope.$apply();
    })
    .catch(err => console.log(err));

  searchPhotos = (keyword, page = 1, perPage = 20) => {
    if (!this.query && this.query === '') return this.getUsers(page, perPage);
    return this.SearchService.searchPhotos(encodeURIComponent(keyword), page, perPage)
      .then(res => res.json())
      .then((data) => {
        this.perPage = perPage;
        this.totalItems = data.total;
        console.log(this.currentPage);
        console.log(data);
        this.photos = data.results.map(photo => ({
          ...photo.urls,
        }));
        this.$scope.$apply();
      })
      .catch(err => console.log(err));
  };

  pageChanged = () => {
    this.searchPhotos(this.query, this.currentPage, this.perPage);
  };
}

export default Photos;
