function addTwo(num: number): number {
  return 4;
}

const arr = [2, 1, 1, 2, 3, 4];
arr.map((item): string => {
  return "xyz";
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}


