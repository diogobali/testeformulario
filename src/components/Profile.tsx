import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1327836279799750661/eAnigZzv_400x400.jpg" alt="Diogo Balieiro" />
            <div>
                <strong> Diogo Balieiro</strong>
                <p>Level 1</p>
            </div>
             
        </div>


    );

}