import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Simple contact form handler
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Here you would typically save to database
  console.log('Contact form submission:', { name, email, message });

  res.status(200).json({ 
    success: true, 
    message: 'Thank you for your message!' 
  });
}
