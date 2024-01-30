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
        <Card className="w-1/6 shadow-xl shadow-blue-gray-900/5 h-screen rounded-xl flex flex-col">
            <Typography className="py-5 px-2">
                <div>
                    <span className="font-bold">Sidebar</span>
                </div>
            </Typography>
            <List>
                <div className="px-2">
                    <ListItem className = "gap-3 mb-2 items-center cursor-pointer">
                        <ListItemPrefix>
                            <ChartBarSquareIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        DashBord
                    </ListItem>
                    <ListItem className = "gap-3 mb-2 items-center cursor-pointer">
                        <ListItemPrefix>
                            <ArrowTrendingUpIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Learn
                    </ListItem>
                    <ListItem className = "gap-3 mb-2 items-center cursor-pointer">
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