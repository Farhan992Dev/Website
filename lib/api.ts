export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081/api';

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_URL}/projects`, { cache: 'no-store' });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function fetchSettings() {
  try {
    const res = await fetch(`${API_URL}/settings`, { cache: 'no-store' });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error('Error fetching settings:', error);
    return [];
  }
}

export async function logVisitor(path: string) {
  if (typeof window === 'undefined') return;
  try {
    await fetch(`${API_URL}/log?path=${encodeURIComponent(path)}`, {
      method: 'POST',
    });
  } catch (error) {
    console.error('Error logging visitor:', error);
  }
}
