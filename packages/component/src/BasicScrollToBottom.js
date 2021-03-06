import { css } from 'glamor';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AutoHideFollowButton from './ScrollToBottom/AutoHideFollowButton';
import Composer from './ScrollToBottom/Composer';
import Panel from './ScrollToBottom/Panel';

const ROOT_CSS = css({
  position: 'relative'
});

const BasicScrollToBottom = ({
  checkInterval,
  children,
  className,
  debounce,
  followButtonComponent,
  followButtonClassName,
  mode,
  scrollViewClassName
}) => (
  <Composer checkInterval={checkInterval} debounce={debounce} mode={mode}>
    <div className={classNames(ROOT_CSS + '', (className || '') + '')}>
      <Panel className={scrollViewClassName}>{children}</Panel>
      <AutoHideFollowButton className={followButtonClassName} children={followButtonComponent} />
    </div>
  </Composer>
);

BasicScrollToBottom.defaultProps = {
  checkInterval: undefined,
  children: undefined,
  className: undefined,
  debounce: undefined,
  followButtonComponent: undefined,
  followButtonClassName: undefined,
  mode: undefined,
  scrollViewClassName: undefined
};

BasicScrollToBottom.propTypes = {
  checkInterval: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string,
  debounce: PropTypes.number,
  followButtonComponent: PropTypes.element,
  followButtonClassName: PropTypes.string,
  mode: PropTypes.oneOf(['bottom', 'top']),
  scrollViewClassName: PropTypes.string
};

export default BasicScrollToBottom;
