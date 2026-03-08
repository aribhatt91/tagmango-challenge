import { Author, Media, Post, Reactions } from '@/types/types'
import { ChatCircle, Menu, PushPin, Smiley } from './icons'
import Avatar from './Avatar'
import ButtonIcon from './ButtonIcon'
import Chip from './Chip'
import Image from 'next/image'
import Skeleton from './Skeleton'
import MediaCard from './MediaCard'

export const FeedCardSkeleton = () => {
    return <div className='w-full w-max-[640px] rounded-3xl overflow-hidden flex flex-col surface surface-border'>
        <div className='w-full h-18 flex gap-2 p-3 items-center'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='flex flex-1 flex-col gap-2 justify-center'>
                <Skeleton className='h-3 w-3/5' />
                <Skeleton className='h-2 w-2/5' />
            </div>
        </div>
        <div className='w-full relative aspect-4/3'>
            <Skeleton className='absolute top-0 left-0 w-full h-full' />
        </div>
        <div className='w-full h-14 px-4'></div>
    </div>
}

const FeedCardHeader = ({ isPinned, author, createdAt }: {isPinned?: boolean, createdAt: string, author: Author}) => {
    return <>
        { isPinned && <div className='w-full h-8 px-2 py-2 flex items-center text-xs gap-2 border-b surface-border'>
            <span><PushPin/></span>
            This is a pinned post
        </div>}
        <div className='w-full h-18 flex gap-2 p-3'>
            <Avatar src={author.avatar || ''} alt={author.authorName} width={48} height={48} />
            <div className='h-full flex-1 flex flex-col justify-center gap-1 items-start'>
                <span className='text-base leading-6 font-semibold'>{author.authorName}</span>
                <span className='text-xs'>{createdAt}</span>
            </div>
            <span>
                <ButtonIcon transparent={true} bordered={false} icon={<Menu />} />
            </span>
        </div>
    </>
}

const ListItem = ({text, index}: {text: string, index: number }) => {
    return <span className='inline-flex items-center gap-2 mb-1  text-sm lg:text-base w-full'>
        <span className='w-4.5 h-4.5 relative'>{index <= 3 && <Image alt={`${index}`} fill src={`/images/${index}.png`} />}</span>
        <span>{text}</span>
    </span>
}

const FeedCardBody = ({ content }: {content: any[]}) => {
    //console.log(content);
    return <div className={`w-full flex flex-col pt-3 lg:pt-4 border-b surface-border`}>
        {
            content.map((node: any, index: number) => {
                if(node.type === 'text'){
                    return <p key={node.type + index} className='px-3 pb-3 lg:px-4 lg:pb-4 w-full text-sm lg:text-base'>{
                        node.text
                    }</p>
                }else if(node.type === 'list') {
                    return (
                        <div key={node.type + index} className='px-3 pb-3 lg:-px-4 lg:pb-4'>
                            {
                                node.list?.map((item: string, i: number) => {
                                    return <ListItem key={node.type+index+i} text={item} index={i+1} />
                                })
                            }
                        </div>
                    )
                }else if(node.type === 'media') {
                    return <div key={node.type + index} className='w-full px-3 pb-3 lg:px-0 lg:pb-0'>
                        <MediaCard media={node.media} />
                    </div>
                }
            })
        }
    </div>
}

const FeedCardFooter = ({ reactions, comments }: {
    reactions?: Reactions,
    comments?: number
}) => {
    return <div className='w-full h-14 px-4 py-3 flex justify-between items-center'>
        <div className='reactions flex gap-1 items-center'>
            <Chip className='w-20 h-8 gap-1'>
                <span><Image alt="hifi" src={'/images/hifi.png'} width={16} height={16}/></span>
                <span><Image alt="smiley" src={'/images/smiley.png'} width={16} height={16}/></span>
                <span className='text-sm lg:text-base'>{reactions?.totalCount}</span>
            </Chip>
            <ButtonIcon size='sm' icon={<Smiley/>} bordered={false} />
            <ButtonIcon size='sm' icon={<ChatCircle/>} bordered={false} />
        </div>
        <span className='text-sm'>{`${comments || 0} comment${comments === 1 ? '' : 's' }`}</span>
    </div>
}

function FeedCard({post}: {post: Post}) {
  return (
    <div className='feed-card relative w-full w-max-[640px] rounded-3xl overflow-hidden flex flex-col surface border surface-border'>
        <FeedCardHeader isPinned={post.isPinned} author={post.author} createdAt={post.createdAt} />
        <FeedCardBody content={post.content} />
        <FeedCardFooter reactions={post.reactions} comments={post.comments} />
    </div>
  )
}

export default FeedCard