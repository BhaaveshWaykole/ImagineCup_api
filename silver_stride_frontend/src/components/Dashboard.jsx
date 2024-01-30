import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";

export function Dashboard() {
    return(
        <div>
            <Card className="shadow-2xl shadow-blue-gray-900/3 h-screen m-2 rounded-2xl">
                <div>
                    <Typography variant="h3" color="gray">
                        Welcome Jhon
                    </Typography>
                </div>
            </Card>
        </div>
    )
}