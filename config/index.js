const dev = process.env.NOVE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com';
