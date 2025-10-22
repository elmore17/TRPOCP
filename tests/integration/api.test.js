// Мок функции для имитации API вызовов
const api = {
  getUser: async (id) => {
    // Имитация задержки API
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const users = {
      1: { id: 1, name: 'John Doe', email: 'john@example.com' },
      2: { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    };
    
    return users[id] || null;
  },
  
  createUser: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 150));
    
    if (!userData.name || !userData.email) {
      throw new Error('Name and email are required');
    }
    
    return {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString()
    };
  }
};

describe('API Integration Tests', () => {
  test('should fetch user by id', async () => {
    const user = await api.getUser(1);
    expect(user).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });
  });

  test('should return null for non-existent user', async () => {
    const user = await api.getUser(999);
    expect(user).toBeNull();
  });

  test('should create new user successfully', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com'
    };
    
    const newUser = await api.createUser(userData);
    
    expect(newUser.id).toBeDefined();
    expect(newUser.name).toBe(userData.name);
    expect(newUser.email).toBe(userData.email);
    expect(newUser.createdAt).toBeDefined();
  });

  test('should throw error when creating user without required fields', async () => {
    await expect(api.createUser({})).rejects.toThrow('Name and email are required');
    await expect(api.createUser({ name: 'Test' })).rejects.toThrow('Name and email are required');
  });
});