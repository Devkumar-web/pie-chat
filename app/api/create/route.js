import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'
// Define values.
const api_key = "dryrc4qabbhc";
const api_secret = "yrtx4fv5ysm47rb44e737s25x7hgb4ykq8mcbrbj2qqmvga7e857q8ps2ujdh95y";
//const user_id = "user_2uCy4Yr8oEORIZLYy0cvVHye0IG";



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