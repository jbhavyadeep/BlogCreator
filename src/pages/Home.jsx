import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useNavigate } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <button className="text-2xl font-bold hover:text-gray-500"
                                onClick={() => navigate('/login')}>
                                <h1>
                                    Login to read posts
                                </h1>
                            </button>

                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )

}

export default Home;