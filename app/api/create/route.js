import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'
// Define values.
const api_key = your_stream_api_key;
const api_secret = Your_stream_secret;



export async function POST(request) {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("NEW USER HAS BEEN CREATED")
    const client = await clerkClient();
    await serverClient.upsertUser({id:user.data.id})
    await client.users?.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })


    const slugs=["Python-new","javascript-new","React-new","Nodejs-new","Databases-new","Cloud-new","Ml-new"]
    slugs.forEach(async (item)=>{
        const channel = serverClient.channel('messaging', item , {
            image: 'https://getstream.io/random_png/?name=react',
            name: item ,
            members: [user.data.id],
            created_by_id:user.data.id
          });
          await channel.create();
         await channel.addMembers([user.data.id]);
    })



    return Response.json({ hello: "hello" });
}
