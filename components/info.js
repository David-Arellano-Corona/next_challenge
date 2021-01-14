import styles from './Info.module.css'
export default function Info(){
    return (
        <div>
            <p>
                <label className={styles.label} >Nombre: </label>David Arellano Corona
            </p>
            <p >
                <label className={styles.label}  >Correo Electrónico: </label>davidarellanocii@gmail.com
            </p>
            <p>
                <label className={styles.label}  >Teléfono: </label>5538271154
            </p>
            <p>
                <label className={styles.label} >Estudios: </label>
                Ing. Sistemas Computacionales (Sin titular )<br/>
                Instituto Tecnológico de cuautla
            </p>
            <p>
                <label className={styles.label}  >Cursos: </label>Udemy
                <ol>
                    <li>NestJS Zero to Hero - Modern TypeScript Back-end Development</li>
                    <li>Crea un Instagram con React, GraphQL, Apollo y MongoDB</li>
                    <li>Patrones de diseño de software y principios SOLID.</li>
                    <li>JavaScript Algorithms and Data Structures Masterclass</li>
                    <li>Master en Python: Aprender Python 3, Django, Flask y Tkinter (EN CURSO)</li>
                </ol>
            </p>
            <p>
                <label className={styles.label} >Idioma: </label>Inglés Básico
            </p>
        </div>
    )
}