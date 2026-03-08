import { Media } from "@/types/types"
import Image from "next/image";
import { Play } from "./icons";

const PlayButton = () => {
    return <span role="button" className="cursor-pointer inline-flex justify-center items-center w-12 h-12 rounded-full border border-[#F1E6FD30] bg-[#EFE6FE25] blur-[20px]">
        <Play />
    </span>
}
const MediaCard = ({ media }: {media: Media}) => {
    const { mediaType, metadata, thumbnail, mediaUri } = media;
    const { aspectRatio, label } = metadata || {};
    const src = (mediaType === 'video' ? thumbnail : mediaUri) || null; 

    return (
        <div className={`
            media media--${mediaType} surface w-full 
            rounded-2xl lg:rounded-none
            overflow-hidden
            relative
            flex justify-center items-center
        `}
        style={{
            aspectRatio: aspectRatio ? aspectRatio : (4/3)
        }}>
            <Image 
                src={src || ""} 
                className="object-cover" 
                fill alt={label || 'media'} 
                sizes="(max-width: 768px) 640w"
                />
            {
                mediaType === 'video' && <PlayButton />
            }
        </div>
    )
}

export default MediaCard