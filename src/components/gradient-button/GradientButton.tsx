import styles from "@/components/gradient-button/GradientButton.module.scss";

interface GradientButtonProps {
    children: string;
    type: "submit" | "button";
    ariaLabel: string;
}

export default function GradientButton({children, type, ariaLabel}: GradientButtonProps) {


    return (
        <button className={styles.button} type={type} aria-label={ariaLabel}>
            {children}
        </button>
    );
}