import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...passProps
}) {
  let Component = 'button';
  const _props = { onClick, ...passProps };

  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith('on') && typeof _props[key] === 'function') delete _props[key];
    });
  }

  if (to) {
    _props.to = to;
    Component = Link;
  } else if (href) {
    _props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', className, { primary, outline, small, large, text, disabled, rounded });
  return (
    <Component className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
