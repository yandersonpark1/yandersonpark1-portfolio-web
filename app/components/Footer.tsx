export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quotes: Record<string, string> = { 
    monday : "“Life is inherently risky. There is only one big risk you should avoid at all costs, and that is the risk of doing nothing.” — Denis Waitley", 
    tuesday : "“If at first you don't suceed, call it version 1.0.” — Unknown", 
    wednesday : "“Don't let life denature you, keep your structure intact under pressure.” — Frank Herbert", 
    thursday : "“Every strike brings me closer to the next home run.” — Babe Ruth", 
    friday : "“Life doesn’t come with comments, make your own documentation as you go.” — Unknown", 
    saturday : "“Life is like a stack, remember to pop the negative thoughts and push the positives.” — Unknown", 
    sunday : "I can do all things through Christ who strengthens me. — Philippians 4:13" 
  };  

  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  const today = dayNames[new Date().getDay()]
  const todayQuote = quotes[today]
  const [quoteText, author] = todayQuote.split(" — ")
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Quote of the Day</h3>
           
            <p className="text-gray-300 mb-2 text-lg italic">
              "{quoteText}"
            </p>
            <p className="text-gray-300 mb-2 text-lg italic">
              — {author}
            </p>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © {currentYear}. Yongwoo Anderson Park
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}