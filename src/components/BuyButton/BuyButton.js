import './BuyButton.scss';
import classNames from 'classnames';

function BuyButton ({onClick, type, children, size = 's'}) {
    const btnClass = classNames({
        'btn': true,
        'btn-primary': type === 'primary',
        'btn-secondary': type === 'secondary',
        'btn-small': size === 's',
        'btn-medium': size === 'm',
      });

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}

export default BuyButton;