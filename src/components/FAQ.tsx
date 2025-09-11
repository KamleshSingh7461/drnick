import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "Most patients benefit from a cleaning and exam every six months. If you have gum disease or other concerns, we may recommend more frequent visits."
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer: "Call us immediately. We reserve same-day appointments for emergencies like toothaches, swelling, broken teeth, or injuries."
  },
  {
    question: "Does teeth whitening hurt?",
    answer: "Professional whitening is safe and effective. Some patients may notice temporary sensitivity, which usually resolves in 24–48 hours."
  },
  {
    question: "What's the difference between a crown, bridge, and implant?",
    answer: "• Crown: A \"cap\" placed over a damaged tooth.\n• Bridge: Replaces one or more missing teeth by attaching to nearby teeth.\n• Implant: A titanium post surgically placed into the jaw with a crown on top — the closest replacement to a natural tooth."
  },
  {
    question: "At what age should my child see the dentist?",
    answer: "By age 1, or within six months of their first tooth. Early visits help prevent issues and build comfort with dental care."
  },
  {
    question: "Will a root canal hurt?",
    answer: "No. Root canals relieve pain caused by infection. With modern anesthesia and techniques, treatment feels much like a standard filling."
  },
  {
    question: "What if I'm nervous about going to the dentist?",
    answer: "You're not alone. We take extra time to explain your care, answer questions, and provide comfort options to make your visit stress-free."
  },
  {
    question: "Do you see children and families?",
    answer: "Yes! We welcome patients of all ages, from toddlers to seniors. We love helping children build healthy habits early."
  },
  {
    question: "Do you take walk-ins?",
    answer: "While appointments are encouraged, we do our best to accommodate same-day walk-ins, especially for emergencies."
  },
  {
    question: "How much does treatment cost?",
    answer: "Every patient's needs are different. During your visit, we'll provide a personalized treatment plan with upfront cost estimates, insurance benefits, and financing options."
  },
  {
    question: "What if I haven't been to the dentist in years?",
    answer: "That's okay! We'll start with a gentle exam and cleaning, then create a treatment plan to restore your oral health. No judgment — just support."
  },
  {
    question: "What should I expect at my first visit?",
    answer: "We'll review your health history, take X-rays if needed, perform a thorough exam, and determine the type of cleaning you may need. Together, we'll discuss your goals and create a personalized care plan."
  },
  {
    question: "Is dental care safe during pregnancy?",
    answer: "Yes. Preventive care and most dental treatments are safe during pregnancy, though we may postpone certain elective procedures until after delivery."
  },
  {
    question: "How can I prevent cavities at home?",
    answer: "Brush twice daily with fluoride toothpaste, floss daily, limit sugary snacks/drinks, and see us regularly for checkups and professional cleanings."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our dental services, procedures, and what to expect during your visit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-large transition-all duration-300 bg-white/80 backdrop-blur-lg border-border/50 hover:border-primary/30 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="border-t border-border/20 pt-4">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're here to help! Contact us directly for personalized answers to your dental care questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="gradient-primary border-0 shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 px-8 py-4"
                >
                  <a href="tel:+17732829696">Call Us Now</a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                >
                  <a href="#contact">Schedule Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
