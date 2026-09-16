import styles from "./AchievementCard.module.css";
import questionIcon from "../../../../assets/question.svg";

export default function AchievementCard ({achievement}) {

    const pourcentClassName = (pourcent) => {
        if (pourcent < 25) {
            return `${styles.cardPourcent} ${styles.cardPourcentUnlikely}`;
        } else if (pourcent < 66){
            return `${styles.cardPourcent} ${styles.cardPourcentRare}`;
        } else {
            return `${styles.cardPourcent} ${styles.cardPourcentCommon}`
        }
    } 

    return (
        <article className={styles.card}>
            <div className={styles.cardImage}>
                {
                    achievement.imageSrc ?
                    <img src={`../${achievement.imageSrc}`} />:
                    <img src={questionIcon}/>
                }
                {
                    achievement.pourcent &&
                    <div className={pourcentClassName(achievement.pourcent)}>
                        <h5>{achievement.pourcent} %</h5>
                    </div>
                }
            </div>
            <div className={styles.cardTitle}>
                <h2>{achievement.title}</h2>
            </div>
            <div className={styles.cardText}>
                <p>{achievement.description}</p>
            </div>
        </article>
    )
}