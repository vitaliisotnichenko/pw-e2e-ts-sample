import {BasePage} from "./BasePage";
import {ContentBannerComponent} from "../components/ContentBannerComponent";
import {Locator, Page} from "@playwright/test";

export class IPhonePage extends BasePage {
    private contentBannerComponent: ContentBannerComponent;
    private locators: IPhoneLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new IPhoneLocators(page)
        this.contentBannerComponent = new ContentBannerComponent(page)
    }

    async clickOnIphoneByTitle() {
        await this.locators.iphoneIcon.click();
    }
}

class IPhoneLocators {
    iphoneIcon: Locator;
    page: Page;

    constructor(page: Page) {
        this.page = page;
        this.iphoneIcon = this.page.getByRole('button', { name: 'iPhone 17, 512 ГБ, Sage'});
    }
}