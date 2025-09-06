export function API_URL() {
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
}