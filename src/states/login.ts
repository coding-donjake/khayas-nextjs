import { signal } from "@preact/signals-react";

export const loginState = signal({
  username: "",
  password: "",
});
export const loginInProgress = signal(false);
