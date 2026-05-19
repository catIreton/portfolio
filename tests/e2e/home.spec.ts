import { test, expect } from "@playwright/test";

test.describe("Portfolio home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/portfolio");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle("Cat Ireton | Full Stack Software Developer");
  });

  test("renders the profile heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Cat Ireton", level: 1 })).toBeVisible();
  });

  test("renders all main sections", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "About me" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  });

  test("Drug Wars project links to the live site", async ({ page }) => {
    const link = page.locator("article").first().getByRole("link", { name: "Live site" });
    await expect(link).toHaveAttribute("href", "https://catireton.github.io/drugwars/");
  });

  test("Drug Wars project card shows an image with alt text", async ({ page }) => {
    const img = page.locator("article img").first();
    await expect(img).toBeVisible();
    const alt = await img.getAttribute("alt");
    expect(alt?.trim().length).toBeGreaterThan(0);
  });

  test("Skills section contains AI category", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "AI" })).toBeVisible();
  });

  test("Skills section contains Claude and Cursor", async ({ page }) => {
    await expect(page.getByText("Claude")).toBeVisible();
    await expect(page.getByText("Cursor")).toBeVisible();
  });

  test("all images have non-empty alt attributes", async ({ page }) => {
    const images = await page.locator("img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt?.trim().length ?? 0, `image missing alt text`).toBeGreaterThan(0);
    }
  });

  test("all external links have rel=noopener", async ({ page }) => {
    const externalLinks = await page.locator("a[target='_blank']").all();
    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      const rel = await link.getAttribute("rel");
      expect(rel, `link missing rel=noopener: ${await link.getAttribute("href")}`).toContain(
        "noopener"
      );
    }
  });

  test("nav bar is visible", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("footer shows the current year", async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(page.getByText(year)).toBeVisible();
  });
});
