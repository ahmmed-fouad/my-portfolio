'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export default function RequirementsPage() {
  const [requirements, setRequirements] = useState<Message[]>([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('appCreationChat');
    if (savedMessages) {
      setRequirements(JSON.parse(savedMessages));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-foreground">App Requirements</h1>
      
      <div className="space-y-4">
        {requirements.map((message, index) => (
          <Card key={index} className="p-6 bg-card">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-foreground">
                {message.role === 'user' ? 'User' : 'Assistant'}
              </span>
              <span className="text-sm text-muted-foreground">
                {new Date(message.timestamp).toLocaleString()}
              </span>
            </div>
            <p className="text-foreground">{message.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
} 