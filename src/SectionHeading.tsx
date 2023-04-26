import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ISectionHeading {
  children: any;
  icon?: IconProp;
  iconColor?: string;
  editIconClassName?: string;
  toggleEditMode?: any;
  hideEditMode?: boolean;
  center?: boolean;
  marginTop?: boolean; // Used if two sections are below each other
  noMarginBottom?: boolean;
  options?: any;
}

function SectionHeading(props: ISectionHeading) {
  let {
    children,
    icon,
    iconColor,
    editIconClassName,
    toggleEditMode,
    hideEditMode,
    center,
    marginTop,
    noMarginBottom,
    options,
  } = props;

  return (
    <div
      className={
        'u-vertical-center flex-row space-x-4 ' +
        (center ? 'justify-center' : '') +
        (marginTop ? ' mt-8' : '') +
        (noMarginBottom ? '' : ' mb-4 ')
      }
    >
      {icon && (
        <div className="w-8">
          <div
            className={
              'rounded-full u-center h-8 w-8 bg-' +
              (iconColor ? iconColor : 'black') +
              '-100'
            }
          >
            <FontAwesomeIcon
              size="sm"
              icon={icon}
              className={'text-' + (iconColor ? iconColor : 'black') + '-500'}
            />
          </div>
        </div>
      )}

      <h2 className="text-lg font-bold text-gray-900 mt-1 u-vertical-center ">
        {children}
      </h2>
      {toggleEditMode && !hideEditMode && (
        <FontAwesomeIcon
          icon="pencil-alt"
          className={
            editIconClassName
              ? editIconClassName
              : 'mt-1 text-primary cursor-pointer'
          }
          onClick={() => toggleEditMode()}
        />
      )}
      {options && options}
    </div>
  );
}

export { SectionHeading };
