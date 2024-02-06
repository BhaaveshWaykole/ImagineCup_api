import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    ChartBarSquareIcon,
    ArrowTrendingUpIcon,
    InboxStackIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
    return (
        <Card className="w-1/6 shadow-2xl shadow-blue-gray-900/5 h-screen rounded-xl flex flex-col">
            <div className="profileRtCover border-2 border-black rounded-2xl  flex justify-center h-28 mt-5 "> 
                <img src="jpeg" alt="LOGO" className= "h-28"/>
            </div>
            <Typography className="py-5 px-2 text-center">
                <div>
                    <span className="font-bold">Sidebar</span>
                </div>
            </Typography>
            <div className="profileRtCover flex justify-center h-28 mb-5"> 
            {/* do relative position later if needed */}
                <img src="download.jpeg" alt="IMG" className="rounded-full h-28"/>
            </div>
            <List>
                <div className="px-2 flex content-center flex-col self-center">
                    <ListItem className="gap-3 mb-2 items-center cursor-pointer w-full rouned-xl">
                        <ListItemPrefix>
                            <ChartBarSquareIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <span>DashBoard</span>
                    </ListItem>
                    <ListItem className="gap-3 mb-2 items-center cursor-pointer">
                        <ListItemPrefix>
                            <ArrowTrendingUpIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <span>Learn</span>
                    </ListItem>
                    <ListItem className="gap-3 mb-2 items-center cursor-pointer">
                        <ListItemPrefix>
                            <InboxStackIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Item 2
                    </ListItem>
                </div>
            </List>
        </Card>
    );
}