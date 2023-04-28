import React from 'react';
import { Input } from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputWithAppendIcon(props: any) {
  let {
    appendIcon,
    appendIconId,
    appendIconColor,
    onAppendIconClick,
    onClearSearch,
    inputClassName,
    appendPadding,
    appendText,
    ...restProps
  } = props;

  let inputClasses = '';

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
    <>
      <Input {...restProps} inputClasses={inputClasses} />
      {(appendIcon || onClearSearch) && (
        <div className={'absolute inset-y-0 right-0 mr-3 flex items-center'}>
          {appendIcon && (
            <div
              className={
                onAppendIconClick
                  ? ' cursor-pointer ' + (appendIconColor ?? 'text-primary')
                  : ' pointer-events-none text-gray-400'
              }
              id={appendIconId}
              onClick={onAppendIconClick ? onAppendIconClick : undefined}
            >
              <FontAwesomeIcon icon={appendIcon} size="sm" />
            </div>
          )}
          {appendIcon && onClearSearch && (
            <div className="mx-2 pointer-events-none text-gray-200">|</div>
          )}
          {onClearSearch && (
            <div
              title="Clear search"
              className="cursor-pointer text-gray-400 "
              onClick={() => {
                if (onClearSearch) {
                  onClearSearch();
                }
              }}
            >
              <FontAwesomeIcon icon={'times'} size="sm" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export { InputWithAppendIcon };
