import { NextResponse } from "next/server";
import mailchimp from '@/lib/mailchimp';

export async function POST(request: Request) {
  try {
    // Extract the body of the request
    const body = await request.json();
    const {email} = body;

    // add subscriber to list
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID as string, {
      email_address: email,
      status: 'subscribed',
      tags: ['audit'],
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch {
    return NextResponse.json({ message: 'Internal Server Error' }, {
      status: 500,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    // Extract the body of the request
    const body = await request.json();
    const {email} = body;
  
    // remove subscriber from list
    const response = await mailchimp.lists.deleteListMember(
        process.env.MAILCHIMP_AUDIENCE_ID as string,
        email,
    );
  
    return NextResponse.json(response, {
      status: 200,
    });
  } catch {
    return NextResponse.json({ message: 'Internal Server Error' }, {
      status: 500,
    });
  }
}