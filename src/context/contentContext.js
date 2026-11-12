import { createContext } from "react";

export const ContentContext = createContext({
  data: {},
  status: "disabled",
  error: null,
  refresh: () => {},
});

