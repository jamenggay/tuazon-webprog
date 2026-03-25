import { Link } from 'react-router-dom';

const variantClasses = {
    primary:
        'bg-[#5A2A6E] text-[#F5EDE6] border-[#5A2A6E] hover:bg-[#4a2359]',
    secondary:
        'bg-[#F5EDE6] text-[#5A2A6E] border-[#5A2A6E] hover:bg-[#D6C6E1]',
    accent:
        'bg-[#C97B84] text-[#F5EDE6] border-[#C97B84] hover:bg-[#b46a72]',
};

const Button = ({
    children,
    to,
    type = 'button',
    variant = 'secondary',
    className = '',
}) => {
    const classes = [
        'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 ease-in-out',
        variantClasses[variant] ?? variantClasses.secondary,
        className,
    ]
        .join(' ')
        .trim();

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes}>
            {children}
        </button>
    );
};

export default Button;