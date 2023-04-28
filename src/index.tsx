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
import { Modal } from './Modal';
import Accordion from './Accordion';
import { Banner } from './Banner';
import { Card } from './Card';
import { Checkbox } from './Checkbox';
import { Confirm } from './Confirm';
import CopyText from './CopyText';
import { Counter } from './Counter';
import { CustomTable } from './customTable/CustomTable';
import { DatePicker } from './datePicker/DatePicker';
import { MonthPicker } from './monthPicker/MonthPicker';
import { DateRange } from './DateRange';
import { Dropdown } from './Dropdown';
import { IconWithBackground } from './IconWithBackground';
import { InfoButton } from './InfoButton';
import { InfoPopover } from './InfoPopover';
import { Input } from './Input';
import { InputWithIcon } from './utils/InputWithIcon';
import { Label, LabelWithValue } from './Label';
import { Message } from './Message';
import { NavItem, NavItemDivider } from './NavItem';
import { NewVersionAvailable } from './NewVersionAvailable';
import { PageHeading } from './PageHeading';
import { Pagination } from './Pagination';
import { Radio } from './Radio';
import { Table } from './Table';
import {
  TableActionsPanel,
  SectionActionsPanel,
  PageActionsPanel,
  FiltersPanel,
  ModalActionsPanel,
} from './Panels';
import ResponsiveRow from './ResponsiveRow';
import { SavingOverlay } from './SavingOverlay';
import { SavePanel, SavePanelContainer } from './SavePanel';
import { SectionHeading } from './SectionHeading';
import { Select, GroupedSelect } from './Select';
import { Tabs } from './Tabs';
import { Textarea } from './Textarea';
import { createStore, useStore, withStore } from './store';
import { WeekdaySelect } from './WeekdaySelect';
import { withError } from './errorBoundary/withError';
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
  Accordion,
  Banner,
  Card,
  Checkbox,
  Confirm,
  CopyText,
  Counter,
  DatePicker,
  MonthPicker,
  DateRange,
  CustomTable,
  Dropdown,
  IconWithBackground,
  InfoButton,
  InfoPopover,
  Input,
  Label,
  Message,
  NavItem,
  NavItemDivider,
  NewVersionAvailable,
  PageHeading,
  Pagination,
  Radio,
  TableActionsPanel,
  SectionActionsPanel,
  PageActionsPanel,
  FiltersPanel,
  ModalActionsPanel,
  ResponsiveRow,
  SavingOverlay,
  SavePanel,
  SavePanelContainer,
  SectionHeading,
  Select,
  GroupedSelect,
  Tabs,
  Textarea,
  WeekdaySelect,
  createStore,
  useStore,
  withStore,
  LabelWithValue,
  withError,
  Table,
  InputWithIcon,
};
