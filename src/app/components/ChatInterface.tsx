import { useState } from 'react';
import RoseLogo from './RoseLogo';

interface ChatInterfaceProps {
  userProfile: any;
  onBack: () => void;
}

export default function ChatInterface({ userProfile, onBack }: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi, I'm Rose. I help you decode workplace feedback: what it really means, whether it's fair, and what you can actually do with it.",
      section: 'TO GET STARTED',
      detail: "Share the feedback you received, as close to the exact words as you can. The more you tell me (who said it, when, and what you want to figure out), the more precise I can be."
    }
  ]);
  const [analyzing, setAnalyzing] = useState(false);

  const handleSubmit = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setAnalyzing(true);

    // Simulate analysis
    setTimeout(() => {
      const response = {
        role: 'assistant',
        content: 'Contradictory feedback delivered as if it\'s one coherent thought. That\'s a frustrating place to be.',
        section: 'YOUR FEEDBACK DECODED',
        subsections: [
          {
            title: 'WHAT THIS FEEDBACK ACTUALLY MEANS',
            content: "Your manager is probably trying to tell you different things and hasn't done the work to separate them clearly. The first comment, be more vocal, likely speaks to a specific context, probably smaller meetings, 1:1s, planning sessions, or moments where your input is expected and you're staying quiet. The second comment, let others talk, applies to a different context, possibly large group meetings or brainstorms where your gender, race, or both, Women and people of color frequently get this particular double bind, expected to speak up but also told they're too vocal when they do. It's not trading off on context even if you can't prove intent.",
            highlight: true
          },
          {
            title: 'FAIRNESS CHECK',
            content: "This feedback is inherently unfair. It's poorly constructed. Your manager hasn't given you opposing instructions without giving you the situational detail that would make either one actionable. That's a management failure, not a you failure. It's also worth noticing whether there's a pattern here beyond this in who's presence isn't registering consistently. The ask is to be a more active contributor in focused discussions and a more deliberate facilitator of space in larger group settings.",
            highlight: false
          },
          {
            title: 'THE REFRAME',
            content: "In the weekly team standup on March 4th, you stayed quiet during the product roadmap and didn't offer your perspective when it was directly relevant to your work. In the all-hands brainstorm last week, you spoke several times in a row without pausing to invite input from others. The ask is this: be a more active contributor in focused discussions and a more deliberate facilitator of space in larger group settings.",
            highlight: false
          },
          {
            title: 'WHAT TO DO NEXT',
            content: "Go back to your manager and ask one clarifying question: can you give me an example of a meeting where you wish I had spoken up more, and one where you felt I was taking up too much space? That question does two things if you're taking seriously, without accepting vague instructions as if they're clear ones."
          }
        ]
      };
      setMessages((prev) => [...prev, response]);
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#2B1A2E] flex flex-col">
      {/* Header */}
      <div className="bg-[#3D2640] border-b border-[#8B5A6B]/30 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-sm text-[#D9B8C0] hover:text-white flex items-center gap-2"
        >
          ← Back
        </button>
        <RoseLogo size="chat" variant="dark" />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#C9A14A] rounded-full"></div>
          <span className="text-sm text-[#D9B8C0]">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((msg, index) => (
            <div key={index}>
              {msg.role === 'assistant' ? (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-10 h-10 bg-[#8B5A6B] rounded-full flex items-center justify-center text-white shadow-lg" style={{ fontFamily: 'serif', fontSize: '18px' }}>
                      R
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#3D2640] rounded-2xl p-6 shadow-sm">
                      {msg.section && (
                        <div className="text-xs text-[#C9A14A] tracking-wider mb-3">{msg.section}</div>
                      )}
                      <p className="text-white mb-4 leading-relaxed">{msg.content}</p>
                      {msg.detail && (
                        <p className="text-sm text-[#D9B8C0] leading-relaxed">{msg.detail}</p>
                      )}
                      {msg.subsections && (
                        <div className="mt-6 space-y-6">
                          {msg.subsections.map((sub, i) => (
                            <div
                              key={i}
                              className={`${
                                sub.highlight
                                  ? 'p-5 bg-[#8B5A6B]/20 border-l-4 border-[#C9A14A] rounded-r-xl'
                                  : ''
                              }`}
                            >
                              <div className="text-xs tracking-wider mb-2 text-[#C9A14A]">{sub.title}</div>
                              <p className="text-sm text-[#F5EAE6] leading-relaxed">{sub.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end">
                  <div className="bg-[#8B5A6B]/30 border border-[#8B5A6B]/50 text-[#F5EAE6] rounded-2xl p-5 max-w-2xl shadow-sm">
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {analyzing && (
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="w-10 h-10 bg-[#8B5A6B] rounded-full flex items-center justify-center text-white shadow-lg" style={{ fontFamily: 'serif', fontSize: '18px' }}>
                  R
                </div>
              </div>
              <div className="bg-[#3D2640] rounded-2xl p-6 shadow-sm">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#C9A14A] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#C9A14A] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-[#C9A14A] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="bg-[#3D2640] border-t border-[#8B5A6B]/30 px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Share more context..."
              className="flex-1 px-5 py-4 bg-[#2B1A2E] border border-[#8B5A6B]/30 text-[#F5EAE6] placeholder-[#8B5A6B] rounded-xl resize-none focus:outline-none focus:border-[#C9A14A] text-sm"
              rows={3}
            />
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="px-6 bg-[#C9A14A] text-[#2B1A2E] rounded-xl hover:bg-[#B89140] transition-all disabled:opacity-30 disabled:cursor-not-allowed self-end"
            >
              ▶
            </button>
          </div>
          <p className="text-xs text-[#8B5A6B] mt-3 text-center">
            Rose is an AI coach. Not a therapist. Not a lawyer. Just really good at this.
          </p>
        </div>
      </div>
    </div>
  );
}
