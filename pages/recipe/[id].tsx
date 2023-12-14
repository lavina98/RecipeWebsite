import CompleteRecipe from '@/Components/CompleteRecipe'
import {useRouter} from 'next/router'

export default function Page() {
    const router = useRouter()
    const { id } = router.query
    
    return <CompleteRecipe  id={Number(id)} />
}