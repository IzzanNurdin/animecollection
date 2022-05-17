export function normalizeText(val) {
  const lowered = val.toLowerCase();
  const result = lowered.charAt(0).toUpperCase() + lowered.slice(1);
  return result;
}

export function readableText(val) {
  const split = val.split("_");
  let result = "";
  split.map((item) => {
    result += normalizeText(item) + " ";
  });
  return result;
}
