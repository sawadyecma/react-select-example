export const runDebugger = (ms: number = 3000) => {
  setTimeout(() => {
    // eslint-disable-next-line no-debugger
    debugger;
  }, ms);
};
