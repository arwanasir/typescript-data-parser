export interface Order {
  id: number;
  userId: number;
  amount: number;
  status: 'Pending' | 'Paid' | 'Cancelled';
  createdAt: string; 
}
