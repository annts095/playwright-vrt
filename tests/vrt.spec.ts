import { test, expect } from "@playwright/test";

const screenShotOptions = { fullPage: true };

test("index", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot(screenShotOptions);
});

test("ranking", async ({ page }) => {
  await page.goto("/ranking");
  await expect(page).toHaveScreenshot(screenShotOptions);
});

/* 
追加したいページを記載する
test("{任意の文字列}", async ({ page }) => {
  await page.goto("/{対象のURL}");
  await expect(page).toHaveScreenshot(screenShotOptions);
});*/
