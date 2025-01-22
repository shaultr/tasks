import { readAllTasksService } from '../../../../../server/BL/task.service';
import { connectToMongo } from '../../../../../server/DL/connectToMongo';
import { NextResponse } from "next/server";

export async function GET() {      
    try {
        await connectToMongo();

        const tasks = await readAllTasksService();

        return NextResponse.json(tasks, { status: 200 });
    } catch (error) {
        console.error('Error reading tasks:', error);
        return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
    }
}
