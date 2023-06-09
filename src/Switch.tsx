import React, { HTMLAttributes } from 'react';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import { InfoButton } from './InfoButton';

export interface ISwitchProps extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled?: boolean;
  onChange: any;
  label?: string;
  info?: string;
  containerClassName?: string;
}

export function Switch(props: ISwitchProps) {
  let { checked, label, disabled, info, containerClassName } = props;

  return (
    <div
      className={
        'u-vertical-center flex-row space-x-4 ' +
        (containerClassName ? containerClassName : '')
      }
      onClick={() => {
        if (!disabled) {
          props.onChange();
        }
      }}
    >
      <HeadlessSwitch
        checked={checked}
        onChange={() => {}}
        disabled={disabled}
        className={
          ' relative inline-flex flex-shrink-0 h-6.5 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200  ' +
          (disabled
            ? 'pointer-events-none '
            : ' hover:border-primary cursor-pointer ') +
          (checked ? (disabled ? 'bg-gray-400' : 'bg-primary') : 'bg-gray-200')
        }
      >
        <span className="sr-only">Use setting</span>
        <span
          className={
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ' +
            (checked ? 'translate-x-5' : 'translate-x-0')
          }
        >
          <span
            className={
              'absolute inset-0 h-full w-full u-center transition-opacity ' +
              (checked
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200')
            }
            aria-hidden="true"
          >
            <svg
              className="h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={
              'absolute inset-0 h-full w-full u-center transition-opacity ' +
              (checked
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100')
            }
            aria-hidden="true"
          >
            <svg
              className={`h-3 w-3 ${
                disabled ? 'text-gray-600' : 'text-primary-600'
              } `}
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </span>
      </HeadlessSwitch>
      {label && (
        <div className={disabled ? 'text-gray-500' : 'cursor-pointer'}>
          {label}
        </div>
      )}
      {info && <InfoButton>{info}</InfoButton>}
    </div>
  );
}
