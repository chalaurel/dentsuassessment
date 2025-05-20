export interface ButtonProps {
    type?: 'primary' | 'secondary' | 'default';
    label: string;
    size?: 'sm' | 'md' | 'xl';
    isDisabled?: true | false;
    isLoading?: true | false;
    onClick?: () => void;
}