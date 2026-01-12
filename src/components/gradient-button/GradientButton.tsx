import styles from "@/components/gradient-button/GradientButton.module.scss";

interface GradientButtonProps {
    children: string;
    type: "submit" | "button";
    ariaLabel: string;
    size?: "large" | "small";
    onClick?: () => void;
    form?: string;
    disabled?: boolean;
}

export default function GradientButton({
    children,
    type,
    ariaLabel,
    size = "large",
    onClick,
    form,
    disabled = false,
}: GradientButtonProps) {
    return (
        <button
            className={`${styles.button} ${size === "small" ? styles.buttonSmall : ""} ${disabled ? styles.buttonDisabled : ""}`.trim()}
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
            form={form}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
