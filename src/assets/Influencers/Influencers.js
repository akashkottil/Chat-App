import achu from '../../assets/Influencers/Achu.png'
import bellie from '../../assets/Influencers/bellie.png'
import helen from '../../assets/Influencers/helen.png'
import keira from '../../assets/Influencers/keira.png'
import lilly from '../../assets/Influencers/lilly.png'

const users= [
    {
        id:1,
        name: "Aswathy Achu",
        nameTag: "Ai influencer",
        img:achu,
        messages: [
            { text: "hey", sender: "ai", timestamp: new Date().toISOString() },
            { text: "hi, how are you?", sender: "user", timestamp: new Date().toISOString() }
        ],
        unread:4
    },
    {
        id:2,
        name: "bellie",
        nameTag: "Ai influencer",
        img:bellie,
        messages: [
            { text: "hai", sender: "ai", timestamp: new Date().toISOString() },
            { text: "hello there!", sender: "user", timestamp: new Date().toISOString() }
        ],
        unread:6
    },
    {
        id:3,
        name: "helen",
        nameTag: "Ai influencer",
        img:helen,
        messages: [
            { text: "hello", sender: "ai", timestamp: new Date().toISOString() },
            { text: "how's it going?", sender: "user", timestamp: new Date().toISOString() }
        ],
        unread:9
    },
    {
        id:4,
        name: "keira",
        nameTag: "Ai influencer",
        img:keira,
        messages: [
            { text: "evdeya??", sender: "ai", timestamp: new Date().toISOString() },
            { text: "I'm not home right now.", sender: "user", timestamp: new Date().toISOString() }
        ],
        unread:43
    },
    {
        id:5,
        name: "lilly",
        nameTag: "Ai influencer",
        img:lilly,
        messages: [
            { text: "call me", sender: "ai", timestamp: new Date().toISOString() },
            { text: "Will do!", sender: "user", timestamp: new Date().toISOString() }
        ],
        unread:2
    },
]

export default users;