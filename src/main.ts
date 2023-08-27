export const isDigit = (char: string): boolean => "0123456789".includes(char);

export const parseHms = (raw: string): [number, number, number] => {
  let h = 0;
  let m = 0;
  let s = 0;
  let idx = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw[i];
    if (isDigit(char)) {
      continue;
    } else if (char === "h") {
      h = Number(raw.slice(idx, i));
      idx = i + 1;
    } else if (char === "m") {
      m = Number(raw.slice(idx, i));
      idx = i + 1;
    } else if (char === "s") {
      s = Number(raw.slice(idx, i));
      idx = i + 1;
    } else {
      throw new Error(`parseHms: Invalid format: ${raw} at ${i}`);
    }
  }
  return [h, m, s];
};

export const hmsToDate = (raw: string): Date => {
  const [h, m, s] = parseHms(raw);
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m);
  date.setSeconds(s);
  return date;
};

export const hmsToSeconds = (raw: string): number => {
  const [h, m, s] = parseHms(raw);
  return h * 3600 + m * 60 + s;
};
