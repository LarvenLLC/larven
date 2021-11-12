import mailchimp from '.';

export default async function handler(req, res) {
  const {
    method,
    body: data
  } = req;

  const { email } = data;

  let response = {};
  switch (method) {
  case 'POST': {
    // add subscriber to list
    response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
      tags: ["audit"]
    })
    break;
  }
  case 'GET':
    // get subscriber
    break;
  case 'PUT':
    // update subscriber
    break;
  case 'DELETE':
    // remove subscriber from list
    response = await mailchimp.lists.deleteListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      email
    );
    break;
  default:
    res.setHeader('Allow', ['DELETE', 'GET', 'POST', 'PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  return res.status(200).json(result);
}
