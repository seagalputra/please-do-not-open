import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["mobileMenu", "closeIcon", "openIcon"];
  static classes = ["hidden"];

  openMobileMenu() {
    this.mobileMenuTarget.classList.toggle(this.hiddenClass);
    this.closeIconTarget.classList.toggle(this.hiddenClass);
    this.openIconTarget.classList.toggle(this.hiddenClass);
  }
}
