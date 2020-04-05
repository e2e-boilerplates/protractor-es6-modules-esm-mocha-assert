import assert from "assert";

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = await element(by.css("h1")).getText();

    assert.strictEqual(title, "Sandbox");
    assert.strictEqual(header, "Sandbox");
  });
}).timeout(20000);
