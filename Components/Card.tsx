import Link from "next/link"
import Image from "next/image"
import styles from './Styles/Card.module.css'

export interface CardProps {
    title: string
    description: string
    imageUrl: string
    imageAltText : string
    href: string
    imagePath: string
}

export default function Card({ title, description, imageUrl, imageAltText, href , imagePath}: CardProps) {
 return (
    <div className={styles.cardDiv}>
        <Image src={imagePath} alt={imageAltText} width={300} height={300} />
        <Link href={href}> {title} </Link>
        <span> {description}</span>
    </div>
 )

}