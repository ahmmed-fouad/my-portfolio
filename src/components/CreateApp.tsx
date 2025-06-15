import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export function CreateApp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem('appCreationChat');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const saveMessages = (newMessages: Message[]) => {
    setMessages(newMessages);
    localStorage.setItem('appCreationChat', JSON.stringify(newMessages));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    saveMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const aiMessage: Message = {
        role: 'assistant',
        content: `I understand you want to create an app with these requirements: ${input}. I'll help you visualize this with an image and save your requirements for review.`,
        timestamp: Date.now(),
      };
      saveMessages([...messages, userMessage, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(var(--text))]">
          Create Your App
        </h2>

        <div className="max-w-3xl mx-auto ">
          <Card
            className="p-6 border-[hsl(var(--border))] bg-[hsl(var(--bgCard))] text-[hsl(var(--subText))] 
           hover:border-[hsl(var(--bordHover))] "
          >
            <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-4 rounded-lg">
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                className="flex-1 w-full rounded-md hover:border-[hsl(var(--bordHover))] border 
                border-[hsl(var(--border))] px-3 py-2 outline-none"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
                placeholder="Describe your app requirements..."
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="border border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))] 
                cursor-pointer p-5 text-[hsl(var(--text))]"
              >
                Send
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
} 