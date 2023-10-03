import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: 'Larven API' }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, {
      status: 500,
    });
  }
}
