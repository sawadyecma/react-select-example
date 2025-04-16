export const runDebugger = (run: boolean = false, ms: number = 3000) => {
  if (!run) return;
  setTimeout(() => {
    // eslint-disable-next-line no-debugger
    debugger;
  }, ms);
};
