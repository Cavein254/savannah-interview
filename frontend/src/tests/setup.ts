import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Perform cleanup after running each test
afterEach(() => {
  cleanup();
});
