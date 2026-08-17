import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        message:"Hello from"
    })
}

export async function POST(request){
    const body = await request.json();
    return NextResponse.json({
        message:"POST Request",
        data:body,
    });
}
export async function PUT() {
  return NextResponse.json({ message: "PUT Request" });
}

export async function DELETE() {
  return NextResponse.json({ message: "DELETE Request" });
}