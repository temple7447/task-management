// ----------------------------------------------------------------------

export function fNumber(number) {
  return new Intl.NumberFormat().format(number);
}

export function fCurrency(number) {
  const format = number
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    : '';

  return result(format, '.00');
}

export function fPercent(number) {
  const format = number
    ? new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1 }).format(number / 100)
    : '';

  return result(format, '.0');
}

export function fShortenNumber(number) {
  const format = number ? shortenNumber(number) : '';
  return result(format, '.00');
}

export function fData(number) {
  const format = number ? formatBytes(number) : '';
  return result(format, '.0');
}

// Helper functions

function shortenNumber(number) {
  const units = ['K', 'M', 'B', 'T'];
  let unit = '';
  let value = number;

  for (let i = units.length - 1; i >= 0; i--) {
    const threshold = Math.pow(1000, i + 1);
    if (number >= threshold) {
      value = number / threshold;
      unit = units[i];
      break;
    }
  }

  return `${value.toFixed(2)}${unit}`;
}

function formatBytes(bytes, decimals = 1) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

function result(format, key = '.00') {
  const isInteger = format.includes(key);
  return isInteger ? format.replace(key, '') : format;
}
