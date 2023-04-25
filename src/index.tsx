import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Switch, ISwitchProps } from './Switch';
import { useSignedRequest } from './hooks/useSignedRequest';
import { useDebounce } from './hooks/useDebounce';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import { useFilters } from './hooks/useFilters';
import { useGetPagination } from './hooks/useGetPagination';
import { usePrevious } from './hooks/usePrevious';
import { useTabs } from './hooks/useTabs';
import { useMediaQuery } from './hooks/useMediaQuery';
import { Loader } from './Loader';
import { Button } from './Button';
import {Modal} from './Modal';
import * as addressUtils from './utils/addressUtils';
import * as cacheUtils from './utils/cacheUtils';
import * as dateUtils from './utils/dateUtils';
import * as generalUtils from './utils/generalUtils';
import * as interfaces from './interfaces/index';
import * as mapUtils from './utils/mapUtils';
import * as navUtils from './utils/navUtils';
import * as numberUtils from './utils/numberUtils';
import * as roleUtils from './utils/roleUtils';
import * as stringUtils from './utils/stringUtils';
import * as tableUtils from './utils/tableUtils';
import * as tagUtils from './utils/tagUtils';
import * as validationUtils from './utils/validationUtils';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export {
  Switch,
  ISwitchProps,
  useMediaQuery,
  useOnClickOutside,
  useTabs,
  usePrevious,
  useGetPagination,
  useFilters,
  useDebounce,
  useSignedRequest,
  addressUtils,
  cacheUtils,
  numberUtils,
  generalUtils,
  stringUtils,
  mapUtils,
  navUtils,
  dateUtils,
  interfaces,
  roleUtils,
  tableUtils,
  tagUtils,
  validationUtils,
  Loader,
  Button,
  Modal,
};
