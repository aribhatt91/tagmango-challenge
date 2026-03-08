'use client';

import { useEffect, useState } from "react"
import { FeedCardSkeleton } from "./FeedCard"
import UserSubmission from "./UserSubmission";
import CohortPosts from "./CohortPosts";
import { getUserFeed, getUserSubmission } from "@/lib/feedAPI";

function Feed() {
    const [ userSubmissionState, setUserSubmissionState ] = useState<any>({
        pending: true,
        data: null,
        error: null
    });
    const [ feedState, setFeedState ] = useState<any>({
        pending: true,
        data: null,
        error: null
    });

    const fetchUserSubmission = async () => {
        try {
            const res = await getUserSubmission();
            setUserSubmissionState({
                pending: false,
                data: res,
                error: null
            })
        }catch(error) {
            setUserSubmissionState({
                pending: false,
                data: null,
                error: "Failed to fetch your submission"
            })
        }
    }

    const fetchUserFeed = async () => {
        try {
            const res = await getUserFeed();
            setFeedState({
                pending: false,
                data: res,
                error: null
            })
        }catch(error) {
            setFeedState({
                pending: false,
                data: null,
                error: "Failed to fetch your feed"
            })
        }
    }

    useEffect(() => {
        fetchUserSubmission();
    }, [])

    useEffect(() => {
        fetchUserFeed();
    }, [])
    
    return (
        <div className="w-full max-w-160 flex flex-col gap-6">
            {
                (userSubmissionState.pending && !userSubmissionState.data) && <FeedCardSkeleton/>
            }
            {
                ((userSubmissionState.error) && <div className="text-lg p-4 h-4 text-center flex items-center">
                    {userSubmissionState.error}
                </div>)
            }
            {
                ((userSubmissionState.data) && <UserSubmission post={userSubmissionState.data} />)
            }
            {
                (feedState.pending && !feedState.data) && <FeedCardSkeleton/>
            }
            {
                ((feedState.error) && <div className="text-lg p-4 h-4 text-center flex items-center">
                    {feedState.error}
                </div>)
            }
            {
                ((feedState.data) && <CohortPosts feed={feedState.data} />)
            }
        </div>
    )
}

export default Feed