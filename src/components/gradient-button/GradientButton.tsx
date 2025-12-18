import styles from "@/components/gradient-button/GradientButton.module.scss";

interface GradientButtonProps {
    children: string;
    type: "submit" | "button";
    ariaLabel: string;
    size?: "large" | "small";
    onClick?: () => void;
}

export default function GradientButton({ children, type, ariaLabel, size = "large", onClick }: GradientButtonProps) {
    return (
        <button
            className={`${styles.button} ${size === "small" ? styles.buttonSmall : ""}`.trim()}
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    );
}