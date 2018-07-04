class Main {
  constructor($translate) {
    this.$translate = $translate;
    this.lang = 'de';
  }

  changeLanguage = (lang) => {
    this.lang = lang;
    this.$translate.use(this.lang);
  };
}

export default Main;
