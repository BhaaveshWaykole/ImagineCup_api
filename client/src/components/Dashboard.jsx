import {
    Card,
    Typography
} from "@material-tailwind/react";

export function Dashboard() {
    return (
        <div>
            <Card className="shadow-2xl shadow-blue-gray-900/3 h-screen m-2 rounded-2xl">
                <Typography variant="h3" color="gray">
                    <div>
                        Welcome Jhon
                    </div>
                </Typography>
                <div>
                    <Card>
                        <div className="flex flex-row p-5">
                            <Card className="mx-2 rounded w-full border-2 border-black shadow-3xl shadow-pink-800">
                                Income
                            </Card>
                            <Card className="mx-2 rounded rounded w-full border-2 border-black shadow-3xl shadow-pink-800">
                                Expense
                            </Card>
                            <Card className="mx-2 rounded rounded w-full border-2 border-black shadow-3xl shadow-pink-800">
                                Balance
                            </Card>
                        </div>
                        <div className="flex flex-row p-5">
                            <Card className="mx-2 rounded rounded w-full border-2 border-black shadow-3xl shadow-pink-800">
                                Cash Flow
                            </Card>
                            <Card className="mx-2 rounded rounded w-full border-2 border-black shadow-3xl shadow-pink-800">
                                Recent Expense
                            </Card>
                        </div>
                    </Card>
                    <div className="border-2 border-black h-96">
                        <Card>
                            GRAPH
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    )
}