import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";
import conf from "../conf/conf";


function PostCard({
    $id,
    title,
    featuredImage
}) {



    return (
        <Link
            to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={`https://cloud.appwrite.io/v1/storage/buckets/${conf.appwriteBucketId}/files/${featuredImage}/view?project=${conf.appwriteProjectId}&mode=admin`} alt={title}
                        className="rounded-xl" />
                </div>
                <h2
                    className="text-xl font-bold text-gray-600">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard