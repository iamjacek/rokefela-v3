import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { email, full_name } = await req.json();

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!full_name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.MAILCHIMP_LIST_ID;

    if (!MailchimpKey || !MailchimpServer || !MailchimpAudience) {
      throw new Error('Missing Mailchimp environment variables');
    }

    
    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

    const response = await fetch(customUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        full_name: full_name,
        tags: ["SUBSCRIPTION FORM"],
        status: 'subscribed',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData)
      return res.status(response.status).json({ error: errorData.detail });
    }

    const received = await response.json();
    console.log(received)
    return NextResponse.json(received);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}