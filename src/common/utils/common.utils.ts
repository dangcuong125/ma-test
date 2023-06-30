import dayjs from 'dayjs';
import React from 'react';

export const hanldeSrcImage = (src: string) => {
  if (src?.startsWith('/')) {
    return src.slice(1);
  }
  return src;
};

export const formatNumberToCurrency = (num?: number) => {
  return num?.toLocaleString('vi', {
    style: 'currency',
    currency: 'VND',
    currencyDisplay: 'code',
  });
};

export function formatDate(date: string, format?: string) {
  return dayjs(date).format(format || 'DD/MM/YYYY HH:mm');
}

export function fDate(date: string, format?: string) {
  return dayjs(date).format(format || 'DD/MM/YYYY');
}
