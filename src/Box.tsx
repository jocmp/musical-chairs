import classNames from "classnames"

interface Props {
  variant: 'small' | 'small-alt' | 'medium' | 'medium-alt' | 'large';
  title?: string | null;
  children?: JSX.Element | null;
}

export function Box({
  variant,
  title = null,
  children = null
}: Props) {
  const classes = classNames('box', {
    'box--small': variant === 'small',
    'box--small-alt': variant === 'small-alt',
    'box--medium': variant === 'medium',
    'box--medium-alt': variant === 'medium-alt',
    'box--large': variant === 'large',
  });

  return (
    <div className={classes}>
      {!!title &&
        <div>
          {title}
        </div>
      }
      {children}
    </div>
  );
}
