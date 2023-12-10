import CompleteRecipe from '@/components/CompleteRecipe'
import {useRouter} from 'next/router'

export default function Page() {
    const router = useRouter()
    const { id } = router.query
    
    return <CompleteRecipe  id={Number(id)} />
}