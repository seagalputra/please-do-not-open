import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["mobileMenu", "closeIcon", "openIcon", "categories"];
  static classes = ["hidden"];

  openMobileMenu() {
    this.mobileMenuTarget.classList.toggle(this.hiddenClass);
    this.closeIconTarget.classList.toggle(this.hiddenClass);
    this.openIconTarget.classList.toggle(this.hiddenClass);
    this.categoriesTarget.classList.toggle(this.hiddenClass);
  }
}
