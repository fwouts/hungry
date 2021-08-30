export function type(input: HTMLInputElement, text: string) {
  input.value = text;
  // @ts-ignore See https://github.com/facebook/react/issues/11488
  input._valueTracker.setValue("");
  input.dispatchEvent(new Event("input", { bubbles: true }));
}
