import React from 'react';
import { ChevronDown, HelpCircle, BookOpen, Award, Globe, FileText, ShieldCheck } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "Admissions & Enrollment",
    questions: [
      { q: "What is the primary eligibility for professional programs?", a: "Minimum qualification for most programs is Higher Secondary (Plus Two) education. Specialized global certifications may require an entrance evaluation or a foundational degree in a relevant field." },
      { q: "How do I secure my seat for the 2026 academic intake?", a: "Prospective students must submit their digital dossier through our enrollment portal. Upon verification, an institutional interview is conducted to finalize the candidacy." },
      { q: "Are there any age restrictions for technical upskilling?", a: "We maintain an open-access policy. While our core programs target early-career professionals, our leadership and compliance modules are open to all industry practitioners." }
    ]
  },
  {
    category: "Academic Standards & Pedagogy",
    questions: [
      { q: "Is the curriculum recognized by international boards?", a: "Yes. Our syllabus is architected to meet GCC and European industrial compliance standards, ensuring that credentials carry global professional weight." },
      { q: "What is the ratio of theoretical to clinical learning?", a: "We follow a 40:60 pedagogy. 40% of the course is dedicated to institutional theory, while 60% is focused on hands-on application in simulated environments." },
      { q: "Do students receive support for global certifications?", a: "Absolutely. We provide dedicated coaching and resource materials for external licensing examinations required for international practice." }
    ]
  },
  {
    category: "Career Mobility & Placements",
    questions: [
      { q: "How does the placement cell assist graduates?", a: "We provide direct corporate referrals to our network of 45+ global partners, alongside training in resume architecture and high-stakes interview simulation." },
      { q: "Can I apply for GCC jobs immediately after completion?", a: "Our certificates are designed for global mobility. We provide necessary documentation support for candidates seeking immediate employment in the Middle East and beyond." }
    ]
  }
];

const FAQPage = () => {
  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-32 pb-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* --- LEFT SIDE: EXTENDED KNOWLEDGE BASE --- */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-[1px] bg-[#DAA520]" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#800000]">Information Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1a1a1a] leading-tight mb-8">
              Institutional <br /> 
              <span className="text-[#800000]">Directory.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              A comprehensive resource for prospective students regarding academic standards, global compliance, and enrollment procedures.
            </p>
          </div>

          {/* Categorized List */}
          <div className="space-y-16">
            {FAQ_DATA.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#DAA520] mb-8 border-b border-gray-100 pb-2">
                  {group.category}
                </h2>
                <div className="space-y-10">
                  {group.questions.map((faq, i) => (
                    <div key={i} className="group border-l-2 border-gray-50 pl-6 hover:border-[#800000] transition-colors">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-bold text-[#1a1a1a] leading-snug">
                          {faq.q}
                        </h3>
                        <ChevronDown className="text-gray-200 w-5 h-5 shrink-0 mt-1" />
                      </div>
                      <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: INSTITUTIONAL SIDEBAR --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 flex flex-col gap-8">
          
          {/* Hero Illustration */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 aspect-square flex items-center justify-center p-12">
             <img 
               src="https://img.freepik.com/free-vector/frequently-asked-questions-concept-illustration_114360-1430.jpg" 
               alt="FAQ Illustration" 
               className="w-full h-auto drop-shadow-2xl mix-blend-multiply opacity-80"
             />
             <div className="absolute top-6 left-6 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#DAA520]" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Verified Database</span>
             </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
              <Award className="text-[#800000] mb-3" size={24} />
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Global <br /> Recognition</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
              <Globe className="text-[#DAA520] mb-3" size={24} />
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">International <br /> Placement</span>
            </div>
          </div>

          {/* Quick Support Box */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl text-white">
            <HelpCircle className="text-[#DAA520] mb-4" size={32} />
            <h4 className="text-xl font-serif mb-2">Need a Prospectus?</h4>
            <p className="text-white/50 text-xs leading-relaxed mb-6">
              Download our institutional dossier to explore full program modules and faculty credentials.
            </p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#DAA520] hover:text-white transition-colors">
              Request Dossier <FileText size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="max-w-7xl mx-auto mt-40 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <BookOpen size={18} className="text-[#800000]" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Nazglobal Academy Institutional Archive</span>
        </div>
        <div className="flex gap-3">
           <div className="w-1.5 h-1.5 rounded-full bg-gray-100" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#800000]" />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;