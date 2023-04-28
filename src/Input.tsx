import React from 'react';

export function Input({ ...props }: any) {
  let {
    disabled,
    pointer,
    inputClassName,
    appendPadding,
    prependPadding,
    prependText,
    appendIcon,
    appendText,
    onClearSearch,
  } = props;
  // @ts-ignore
  let inputClasses = prependPadding
    ? ` ${prependPadding} `
    : prependText
    ? ` pl-7 `
    : '';

  if (inputClassName) {
    inputClasses = inputClassName;
  }

  if (appendPadding) {
    inputClasses += ` ${appendPadding} `;
  } else if (appendIcon || appendText || onClearSearch) {
    if (onClearSearch) {
      inputClasses += ' pr-20';
    } else if (appendText && appendText.length > 4) {
      inputClasses += ' pr-20';
    } else {
      inputClasses += ' pr-12';
    }
  }
  return (
    <input
      {...props}
      className={
        'focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent shadow-sm block w-full border-gray-300 rounded-md ' +
        inputClasses +
        ' ' +
        (disabled ? ' bg-gray-100' : '') +
        (pointer ? ' cursor-pointer' : '')
      }
    />
  );
}
