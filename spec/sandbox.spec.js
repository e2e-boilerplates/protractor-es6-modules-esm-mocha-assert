import { strictEqual } from "assert";

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    strictEqual(title, "Sandbox");
    strictEqual(await header.getText(), "Sandbox");
  });
});
