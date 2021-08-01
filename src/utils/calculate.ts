export const sum = (...args: number[]) =>
  args.reduce((immediateSum: number, arg: number) => immediateSum + arg, 0);
