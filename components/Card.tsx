import Link from "next/link"
import Image from "next/image"

export interface CardProps {
    title: string
    description: string
    image: string
    href: string
    
}

export default function Card({ title, description, image, href }: CardProps) {
 return (
    <div>
        <Image src={image} alt={title} width={300} height={300} />
        <Link href={href}> {title} </Link>
        <span> {description}</span>
    </div>
 )

}