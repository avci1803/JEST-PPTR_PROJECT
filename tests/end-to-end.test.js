import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TopBar from "../pages/components/TopBar";
import FeedbackPage from "../pages/Feedback";

import { username, password, timeout } from "../config";

describe("End-to-End Test", () => {
  let homePage;
  let topbar;
  let loginPage;
  let feedbackPage;

  beforeAll(async () => {
    jest.setTimeout(timeout);
    homePage = new HomePage();
    topbar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });

  it("Should load homepage", async () => {
    await homePage.visit();
    await homePage.isNavbarDisplayed();
  });

  it("Should submit feedback", async () => {
    await homePage.clickFeedbackLink();
    await feedbackPage.isFeedbackFormDisplayed();
    await feedbackPage.submitFeedback(
      "Mehmet",
      "abcde@gmail.com",
      "Subject no matter",
      "Write here a comment!"
    );
  });

  it("should login to application", async () => {
    await homePage.visit();
    await topbar.isTopBarDisplayed();
    await topbar.clickSignInButton();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login(username, password);
  });
});
