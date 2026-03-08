import { Post } from '@/types/types'
import FeedCard from './FeedCard'

const Banner = () => (
    <div className={`
        w-full h-22
        absolute top-0 left-0 
        rounded-t-3xl p-2 
        flex justify-center 
        bg-(--confetti) 
        bg-[url('/images/image-confetti-bg.png')]
        bg-size-[100%]
        bg-no-repeat
    `}>
        <span className='text-sm font-semibold text-(--confetti-text)'>Your Submission</span>
    </div>
)
function UserSubmission({post}: {post: Post}) {
  return (
    <div className='w-full lg:w-160 pt-11 relative'>
        <Banner />
        <FeedCard post={post}/>
    </div>
  )
}

export default UserSubmission