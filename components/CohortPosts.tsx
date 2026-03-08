import { Feed } from "@/types/types"
import Avatar from "./Avatar";
import FeedCard from "./FeedCard";

const Badges = ({items}: {items: any[]}) => {
    return <span className="w-14 h-6 relative">
        {
            items?.slice(0,3).map((p: any, index: number) => (
                <span key={p.userId} className={`absolute top-0`} style={{
                    left: `${Math.floor(index*15)}px`
                }}>
                    <Avatar className="border surface-border" src={p.avatar || ''} alt={p.userId || ""} width={24} height={24}/>
                </span>
            ))
        }
    </span>
}
const CohortPosts = ({feed}: {feed: Feed}) => {
    const { participants, topParticipants, posts } = feed;
    return (
        <div className='w-full lg:w-160 flex flex-col p-3 pt-4 gap-4 relative surface surface-border border rounded-3xl'>
            <div className="w-full h-14 flex flex-col gap-2 justify-center items-center">
                <h3 className="text-lg lg:text-xl leading-6.5 lg:leading-7 font-semibold flex gap-1 justify-center">
                    <span>See what others</span>
                    <Badges items={topParticipants || []} />
                    <span>have shared</span>
                </h3>
                <div className="text-xs lg:text-sm text-center">
                    <span className="font-bold">{participants}+</span>
                    participants already completed
                </div>
            </div>
            {
                posts.map((post) => <FeedCard key={post.postId} post={post} />)
            }
        </div>
    )
}

export default CohortPosts