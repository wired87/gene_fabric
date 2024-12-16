import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "../(site)/head";

const Dashboard = () => {
    return (
        <>
            <Head />
            <div className="container mx-auto p-6">
                <h1>Dashboard</h1>
                <ul>
                    <li>
                        <Card>
                            <CardHeader>
                                <CardTitle>Placeholder Item 1</CardTitle>
                            </CardHeader>
                            <CardContent>Content for placeholder item 1.</CardContent>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <CardHeader>
                                <CardTitle>Placeholder Item 2</CardTitle>
                            </CardHeader>
                            <CardContent>Content for placeholder item 2.</CardContent>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <CardHeader>
                                <CardTitle>Placeholder Item 3</CardTitle>
                            </CardHeader>
                            <CardContent>Content for placeholder item 3.</CardContent>
                        </Card>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Dashboard;
