import feather from 'feather-icons';

class CuratedListController {
  constructor($scope, CuratedListService) {
    this.$scope = $scope;
    this.photos = [];
    this.CuratedListService = CuratedListService;
  }

  $onInit() {
    this.getPhotos();
    feather.replace();
  }

  getPhotos = () => this.CuratedListService.getPhotos()
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.photos = data.map(photo => ({
        ...photo.urls,
      }));
      this.$scope.$apply();
    })
    .catch(err => console.log(err));
}

export default CuratedListController;
