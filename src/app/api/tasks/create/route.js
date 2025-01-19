import { createTaskService } from '../../../../../server/BL/task.service';
import { connectToMongo } from '../../../../../server/DL/connectToMongo';
import { NextResponse } from "next/server";

export async function POST(req, res) {      
    try {
        await connectToMongo();

        const taskData = await req.json();

        const task = await createTaskService(taskData);

        return NextResponse.json(task, { status: 201 });
    } catch (error) {
        console.error('Error creating task:', error);
        return res.status(500).json({ error: 'Failed to create task' });
    }
}
