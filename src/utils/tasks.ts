export function doIntenseTask() {
  const now = new Date().getTime();
  while (new Date().getTime() - now < 6000) {
    // doing something intense
  }
}
