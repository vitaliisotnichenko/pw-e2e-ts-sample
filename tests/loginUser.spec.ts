import { test, expect } from "@fixtures/page.fixtures";
import {SearchController} from "@controllers/SearchController";
import {request} from "@playwright/test";

test("has title", async ({ pages: { iPhonePage }, apiClient }) => {
  const response = await apiClient.searchController.getSearchRequest({
    query: "IPhone",
  });

  console.log(JSON.stringify(response));

  expect(response.ok()).toBeTruthy();
  await iPhonePage.clickOnIphoneByTitle();
});