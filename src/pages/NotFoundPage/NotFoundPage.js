import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <Parallax>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Parallax className={styles.scene} strength={400}>
                        {/* Большой круг */}
                        <div className={styles.circle} data-depth="1.2"></div>

                        {/* Контейнеры с элементами */}
                        <div className={styles.one} data-depth="0.9">
                            <div className={styles.content}>
                                <span className={styles.piece}></span>
                                <span className={styles.piece}></span>
                                <span className={styles.piece}></span>
                            </div>
                        </div>

                        <div className={styles.two} data-depth="0.60">
                            <div className={styles.content}>
                                <span className={styles.piece}></span>
                                <span className={styles.piece}></span>
                                <span className={styles.piece}></span>
                            </div>
                        </div>

                        <div className={styles.three} data-depth="0.40">
                            <div className={styles.content}>
                                <span className={styles.piece}></span>
                                <span className={styles.piece}></span>
                                <span className={styles.piece}></span>
                            </div>
                        </div>

                        {/* Сообщение 404 */}
                        <p className={styles.p404} data-depth="0.50">404</p>
                        <p className={styles.p404} data-depth="0.10">404</p>
                    </Parallax>

                    {/* Текст и кнопка */}
                    <div className={styles.text}>
                        <article>
                            <p>Uh oh! Looks like you got lost. <br/>Go back to the homepage if you dare!</p>
                            <button>i dare!</button>
                        </article>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default NotFoundPage; // Экспорт компонента
