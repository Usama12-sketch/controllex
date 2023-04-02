
import Draft from './Get/draft';
import BlogPosts from './Get/Blog';
import { useRouter } from 'next/router';
const GetPost = ({ posts, Blocks, Admins, url, url2  }) => {
    const location = useRouter();
    const path = location.pathname;

    return (
        <div>

        {path === "/Draft" ? <div>
            <Draft posts={posts} Blocks={Blocks} Admins={Admins} url={url} url2={url2}/>
            </div> : null}


            {path !== "/Draft" ? <div>
                <BlogPosts posts={posts} Blocks={Blocks} Admins={Admins} url={url} url2={url2}/>
                       </div> : null}
        </div>
    )
}

export default GetPost
