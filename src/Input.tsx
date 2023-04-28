import React from 'react';
import { Select } from './Select';
import { InfoButton } from './InfoButton';
import { Label } from './Label';
import { Message } from './Message';

// Interfaces
export interface IInputProps {
  label?: string;
  labelInline?: boolean;
  labelClassName?: string;
  htmlFor?: string;
  register?: any;
  name?: string;
  defaultValue?: any;
  value?: any;
  validationError?: any;
  type?: string;
  onChange?: any;
  onClick?: any;
  onFocus?: any;
  onBlur?: any;
  onKeyPress?: any;
  onKeyUp?: any;
  step?: any;
  min?: number;
  max?: number;
  maxLength?: number;
  autoComplete?: any;
  disabled?: boolean;
  reference?: any;
  placeholder?: string;
  id?: string;
  containerClassName?: string;
  errorMessage?: string;
  autoFocus?: any;
  optional?: any; // when boolean displays the text "optional" next to the label, when string displays string value
  readOnly?: boolean;
  inputClassName?: string;
  info?: any;
  inputFieldId?: string;
  appendText?: string;
  appendPadding?: string;
  appendSelectProps?: any;
  prependText?: string;
  prependPadding?: string;
  inputFieldStyle?: any;
  inputId?: string;
  prependSelectProps?: any;
  prependTextSize?: string;
  showAsterisk?: boolean;
  noArrows?: boolean;
  disableNumericInputScroll?: boolean; // scrolling over a numeric input causes the input value to change
  pointer?: boolean;
  dataTest?: string | undefined;
  inputClasses?: string;
}
// Implementation
function Input(props: IInputProps) {
  let {
    label,
    htmlFor,
    labelClassName,
    inputFieldId,
    readOnly,
    inputFieldStyle,
    placeholder,
    register,
    reference,
    type,
    name,
    defaultValue,
    value,
    validationError,
    inputId,
    appendText,
    optional,
    disabled,
    errorMessage,
    onChange,
    onClick,
    onFocus,
    prependText,
    onBlur,
    containerClassName,
    labelInline,
    autoFocus,
    onKeyPress,
    onKeyUp,
    step,
    min,
    max,
    maxLength,
    autoComplete,
    info,
    appendSelectProps,
    inputClassName,
    prependSelectProps,
    prependTextSize,
    showAsterisk,
    noArrows,
    disableNumericInputScroll,
    pointer,
    dataTest,
    inputClasses,
  } = props;

  type = type ? type : 'text';
  labelClassName = labelClassName ? labelClassName : '';

  const InputElement = (
    <input
      autoFocus={autoFocus}
      name={name}
      ref={reference ? (r: any) => reference(r) : register}
      type={type}
      defaultValue={defaultValue}
      value={value}
      id={inputId}
      readOnly={disabled || readOnly} // if we make the input disabled then react-hooks-form doesn't submit the defaultValue https://twitter.com/bluebill1049/status/1300231640392716288
      onChange={onChange}
      onClick={onClick}
      onFocus={(e: any) => {
        if (!disabled) {
          e.target.placeholder = '';
          onFocus && onFocus(e);
        }
      }}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      onBlur={(e: any) => {
        if (!disabled) {
          if (placeholder) {
            e.target.placeholder = placeholder;
          }
          onBlur && onBlur(e);
        }
      }}
      step={step}
      min={min}
      max={max}
      maxLength={maxLength}
      autoComplete={
        autoComplete === 'off' ? 'something-chrome-does-not-know' : autoComplete
      } // setting autoComplete to off is not reliable
      className={
        'u-input-border ' +
        // 'appearance-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent shadow-sm block w-full border-gray-300 rounded-md ' +
        (inputClassName ?? inputClasses) +
        ' ' +
        (disabled ? ' bg-gray-100' : '') +
        (pointer ? ' cursor-pointer' : '')
      }
      onWheel={(e: any) => {
        if (disableNumericInputScroll) {
          e.target.blur();
        }
      }}
      data-test={dataTest}
    />
  );

  return (
    <div
      className={
        (noArrows ? ' no-arrows ' : '') +
        (containerClassName
          ? containerClassName
          : labelInline
          ? 'u-vertical-center flex-row space-x-4'
          : 'mt-4 max-w-sm')
      }
    >
      {label && label.length > 0 && (
        <div className="flex justify-between">
          <Label
            htmlFor={htmlFor}
            className={labelClassName}
            noMargin={labelInline}
          >
            <span className="inline-block whitespace-nowrap">
              {label}
              {showAsterisk && ' *'}
            </span>
            {info && <InfoButton>{info}</InfoButton>}
          </Label>
          {optional && (
            <span className="text-gray-500">
              {typeof optional === 'string' ? optional : '(Optional)'}
            </span>
          )}
        </div>
      )}
      <div
        className="u-vertical-center flex-row w-full"
        id={inputFieldId}
        style={inputFieldStyle}
      >
        {prependSelectProps && (
          <div className="-mr-2 z-10">
            <Select {...prependSelectProps} noMargin disabled={disabled} />
          </div>
        )}
        <div className={'relative rounded-m w-full'}>
          {prependText && (
            <div
              className={'absolute inset-y-0 left-0 pl-3 u-vertical-center '}
            >
              <span
                className={
                  'text-gray-500 ' +
                  (prependTextSize ? prependTextSize : 'sm:text-sm')
                }
              >
                {prependText}
              </span>
            </div>
          )}

          {InputElement}

          {appendText && (
            <div
              className={
                'absolute inset-y-0 right-0 mr-3 flex items-center text-gray-400 pointer-events-none'
              }
            >
              {appendText}
            </div>
          )}
        </div>
        {appendSelectProps && (
          <div className="-ml-2">
            <Select {...appendSelectProps} noMargin disabled={disabled} />
          </div>
        )}
      </div>
      {validationError &&
        (errorMessage ? (
          <Message.Error>{errorMessage}</Message.Error>
        ) : (
          <Message.Error>{validationError.message}</Message.Error>
        ))}
    </div>
  );
}

export { Input };
