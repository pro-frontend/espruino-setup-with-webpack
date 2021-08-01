export const sum = (...args: number[]): number =>
  args.reduce((immediateSum: number, arg: number) => immediateSum + arg, 0);
