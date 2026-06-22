import { ReactNode, useState } from 'react';

interface ProductCardProps {
  title: string;
  imageName?: string;
  children: ReactNode;
  orderMessage: string;
  ctaSubtext: string;
}

function BeforeAfterTestimonial({ beforeSrc, afterSrc, caption }: { beforeSrc: string, afterSrc: string, caption: string }) {
  const [isOver18, setIsOver18] = useState(false);

  return (
    <div className="my-10 relative mx-auto max-w-4xl mt-16">
      {/* Testimonial Banner Tab */}
      <div className="bg-yellow-400 text-gray-900 font-black uppercase px-4 sm:px-6 py-2 sm:py-3 rounded-t-xl sm:rounded-t-2xl text-xs sm:text-sm md:text-base border-4 border-b-0 border-yellow-500 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] inline-flex items-center gap-2 transform translate-y-1 z-10 relative ml-4 sm:ml-8">
        <svg className="w-5 h-5 text-red-600 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
        REAL TESTIMONIAL
      </div>
      
      {/* Testimonial Box */}
      <div className="bg-white p-4 sm:p-8 shadow-2xl border-4 border-green-700 rounded-2xl rounded-tl-none sm:rounded-tl-2xl relative z-20">
      
      <h4 className="font-oswald text-lg sm:text-xl uppercase font-black text-center mt-2 sm:mt-4 mb-6 text-gray-900 leading-tight px-2">
        {caption}
      </h4>
      
      <div className="relative rounded-lg bg-gray-100 p-2 sm:p-4">
        <div className="flex flex-col gap-4 justify-center transition-all duration-500 w-full relative">
          <div className="flex flex-row gap-2 sm:gap-4 justify-center w-full">
            <div className="flex-1 relative w-full">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[0.65rem] sm:text-xs font-black uppercase px-2 py-1 flex items-center justify-center rounded shadow-md z-10 border border-red-800">BEFORE</div>
              <img 
                src={`https://raw.githubusercontent.com/djaceplace-coder/Mazakuta-Original/main/public/${beforeSrc}`} 
                alt="Before" 
                loading="lazy"
                decoding="async"
                className={`w-full h-auto block bg-gray-50 rounded-md border-2 shadow-sm border-red-200 ${!isOver18 ? 'blur-2xl grayscale' : ''}`} 
                onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x500/fee2e2/991b1b?text=BEFORE` }} 
              />
            </div>
            <div className="flex-1 relative w-full">
              <div className="absolute top-3 left-3 bg-green-600 text-white text-[0.65rem] sm:text-xs font-black uppercase px-2 py-1 flex items-center justify-center rounded shadow-md z-10 border border-green-800">AFTER</div>
              <img 
                src={`https://raw.githubusercontent.com/djaceplace-coder/Mazakuta-Original/main/public/${afterSrc}`} 
                alt="After" 
                loading="lazy"
                decoding="async"
                className={`w-full h-auto block bg-gray-50 rounded-md border-2 shadow-sm border-green-200 ${!isOver18 ? 'blur-2xl grayscale' : ''}`} 
                onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x500/dcfce7/166534?text=AFTER` }} 
              />
            </div>
          </div>
          
          {!isOver18 && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-900/40 backdrop-blur-sm rounded-md p-4">
              <div className="bg-white p-6 sm:p-8 rounded-xl text-center w-full max-w-sm shadow-2xl border-2 border-red-200">
                <p className="font-bold text-red-600 mb-3 uppercase text-base sm:text-lg tracking-wide border-b border-red-100 pb-2">Age Verification</p>
                <p className="text-gray-700 text-sm sm:text-base mb-6 font-medium leading-relaxed">Explicit content. You must be 18+ to view these customer results.</p>
                <button 
                  onClick={() => setIsOver18(true)}
                  className="bg-red-600 hover:bg-red-700 shadow-md text-white font-bold py-3 px-6 rounded-md uppercase text-sm sm:text-base w-full transition-all active:scale-95 cursor-pointer"
                >
                  Yes, I am 18+
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-4 bg-green-50 rounded p-2 border border-green-200">
        <p className="font-bold italic text-sm text-green-900 flex items-center justify-center gap-1">
           <svg className="w-4 h-4" title="Verified Customer Result" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
           Verified Customer Result
        </p>
      </div>
      </div>
    </div>
  );
}

function ProductCard({ title, imageName, children, orderMessage, ctaSubtext }: ProductCardProps) {
  const shortName = title.includes(':') ? title.split(':')[1].trim() : title;
  
  return (
    <div className="flex flex-col h-full shadow-2xl rounded-xl" id="order">
      <h3 className="font-oswald text-xl font-bold bg-green-800 text-white p-3 text-center uppercase tracking-wider rounded-t-xl">{title}</h3>
      <div className="border-[5px] border-t-0 border-green-800 p-4 sm:p-5 rounded-b-xl bg-white relative flex flex-col flex-grow">
        <img 
          src={`https://raw.githubusercontent.com/djaceplace-coder/Mazakuta-Original/main/public/${imageName}.jpeg`} 
          alt={title} 
          loading="lazy"
          className="w-full h-auto block border-4 border-green-600 shadow-md mb-4 bg-gray-200"
        />
        <div className="text-gray-800 mb-6 text-sm sm:text-base leading-relaxed space-y-4 font-medium px-1 flex-grow">
           {children}
        </div>
        
        <div className="mt-auto">
          <div className="text-center font-black text-2xl text-red-700 mb-3 ml-2 mt-4 animate-bounce">
            &gt;&gt;&gt;
          </div>
          
          <a 
            href={`https://wa.me/2340000000000?text=${encodeURIComponent(orderMessage)}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-b from-green-600 to-green-800 rounded-xl py-3 px-2 shadow-[inset_0_-4px_0_rgba(0,0,0,0.3)] transform transition hover:scale-[1.02] active:scale-95 text-center border border-green-900 box-border"
          >
             <div className="font-oswald text-xl sm:text-2xl uppercase tracking-wider font-bold text-white shadow-sm leading-tight">GET {shortName}</div>
             <div className="text-yellow-300 font-bold italic text-xs mt-1">{ctaSubtext}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ subtitle, title }: { subtitle: string, title: string }) {
  return (
    <div className="my-10 text-center">
      <h2 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-1">{subtitle}</h2>
      <h3 className="font-oswald text-2xl sm:text-3xl lg:text-4xl leading-tight font-black uppercase text-gray-900 border-b-4 border-green-700 inline-block pb-1">
        {title}
      </h3>
    </div>
  )
}

function YesNoTrap() {
  return (
    <div className="my-14 p-4 max-w-3xl mx-auto">
      <div className="border-4 border-dashed border-yellow-400 p-6 bg-white mb-6 shadow-xl">
        <p className="font-bold text-gray-900 text-lg sm:text-xl leading-snug text-center">
          Before you order, Would you like to see more testimonials from men who have also used these products?
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        <a 
          href="https://wa.me/2340000000000?text=Hello%20Maza%20Kuta,%20I%20want%20to%20see%20more%20testimonials."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#15803d] hover:bg-[#16a34a] text-white font-oswald text-lg sm:text-xl uppercase tracking-wider font-bold py-4 px-6 shadow-lg text-center rounded-xl border border-green-800 transition transform hover:scale-[1.02]"
        >
          Yes, Let Me See!
        </a>
        <a 
          href="#order"
          className="bg-green-900 hover:bg-green-950 text-white font-oswald text-base sm:text-lg uppercase tracking-wider font-bold py-3 px-6 shadow-lg text-center rounded-xl border border-green-950 transition hover:bg-green-950"
        >
          No, I Just Want To Proceed To Order!
        </a>
      </div>
      
      <p className="mt-8 text-gray-800 font-bold text-sm sm:text-base leading-snug italic text-center bg-gray-200 p-4 rounded-lg">
        Many men have achieved amazing, life-changing results. 
      </p>
    </div>
  )
}

export function Phases() {
  return (
    <section className="px-4 py-4 bg-gray-50 border-t-8 border-gray-900">
      <SectionHeader subtitle="Step 1" title="Phase 1: The Cleanse & Reset" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProductCard 
          title="Product 1: The Flusher" 
          imageName="Flusher%20Base"
          orderMessage="Hello Maza Kuta, I want to order The Flusher."
          ctaSubtext="*Recommended for complete support*"
        >
          <p>
            Before you build, you <strong className="text-red-700">MUST</strong> clean out the filth. Stubborn staph, hidden UTIs, and built-up toxins literally block blood flow to your vital organs. 
          </p>
          <p>
            <strong className="text-green-800">The Flusher is the mandatory first step.</strong> It fiercely eradicates resistant infections, cleanses your urinary tract, and supercharges your immune system so your body can actually absorb the herbs that follow. Don't skip this.
          </p>
        </ProductCard>

        <ProductCard 
          title="Product 2: Anti-Wank Therapy" 
          imageName="Anti%20wank%20therapy%20Base"
          orderMessage="Hello Maza Kuta, I want to order the Anti-Wank Therapy."
          ctaSubtext="*Recommended for mental & physical reset*"
        >
          <p>
            Years of abuse have desensitized your system, leaving you with a dead libido and weak urges. 
          </p>
          <p className="bg-red-50 p-3 italic font-bold text-red-900 rounded border-l-4 border-red-700">
            The Anti-Wank Therapy is a 3-in-1 powerhouse combining the Infusion, Urge Crasher, and Tea.
          </p>
          <p>
            It repairs the damaged nerve endings, resets your dopamine receptors, and brings back the aggressive, raging morning wood you used to have in your teens.
          </p>
        </ProductCard>
      </div>

      <BeforeAfterTestimonial 
        beforeSrc="Test1before.jpg" 
        afterSrc="Test1after.jpg" 
        caption="Restored Morning Urges & Cleansed System" 
      />

      <SectionHeader subtitle="Step 2" title="Phase 2: The Foundation & Endurance" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProductCard 
          title="Product 3: Rock Steady" 
          imageName="Rock%20Steady%20Base"
          orderMessage="Hello Maza Kuta, I want to order Rock Steady."
          ctaSubtext="*Recommended for reliable erection recovery*"
        >
          <p>
            If you want solid, reliable erections that don't die midway, this is it. 
          </p>
          <p>
            <strong className="text-green-800">Rock Steady</strong> clears plaque from penile chambers and floods them with fresh blood. No more embarrassing softening right before penetration. You will stand tall, thick, and unyielding.
          </p>
        </ProductCard>
        
        <ProductCard 
          title="Product 4: Volumizer" 
          imageName="Volumizer%20Base"
          orderMessage="Hello Maza Kuta, I want to order the Volumizer."
          ctaSubtext="*Recommended to increase sperm volume and count*"
        >
          <p>
            A king needs ammo. Volumizer is meticulously formulated to drastically increase your sperm volume, count, and thickness. 
          </p>
          <p>
            Experience heavier, deeply satisfying releases that command respect and demonstrate true, undeniable virility.
          </p>
        </ProductCard>

        <ProductCard 
          title="Product 5: Everlast" 
          imageName="Everlast%20Base1"
          orderMessage="Hello Maza Kuta, I want to order Everlast."
          ctaSubtext="*Liquid formula for immediate stamina*"
        >
          <p>
            Immediate, commanding stamina in a potent liquid formula. 
          </p>
          <p>
            <strong className="text-red-700">Everlast targets your nervous system to suppress premature climax signals.</strong> It gives you the power to keep going long after she has tapped out. Absolute control is back in your hands.
          </p>
        </ProductCard>

        <ProductCard 
          title="Product 6: Extra Hours" 
          imageName="Extra%20Hours%20Base"
          orderMessage="Hello Maza Kuta, I want to order Extra Hours."
          ctaSubtext="*Powder/Tea to extend the ejaculation threshold*"
        >
          <p>
            The ultimate endurance powder and tea combo. 
          </p>
          <p>
            <strong className="text-green-800">Extra Hours</strong> extends your climax threshold significantly without sacrificing any physical pleasure. You get to enjoy every single second while maintaining total, dominant control over your finish line.
          </p>
        </ProductCard>
      </div>

      <BeforeAfterTestimonial 
        beforeSrc="Test2before.jpg" 
        afterSrc="test2bfter.jpg" 
        caption="Iron Clad Stamina & Performance Recovered" 
      />

      <YesNoTrap />
      
      <SectionHeader subtitle="Step 3" title="Phase 3: Ultimate Expansion" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <ProductCard 
          title="Product 7: Enlargement Therapy" 
          imageName="Enlargement%20Therapy%20Base"
          orderMessage="Hello Maza Kuta, I want to order the Enlargement Therapy."
          ctaSubtext="*Tissue Builder Max + Energy God + Cream*"
        >
          <p>
            For those who want noticeable size gains, this combo of <strong className="text-gray-900">Tissue Builder Max, Energy God, and our proprietary Topical Cream</strong> lays the foundational groundwork. 
          </p>
          <p>
            It forces rapid cellular expansion and improves deep vessel elasticity, granting you unmistakable girth and noticeable length over time.
          </p>
        </ProductCard>

        <ProductCard 
          title="Product 8: The Enlargement Infusion" 
          imageName="EnlargementInfusionBase"
          orderMessage="Hello Maza Kuta, I want to order The Enlargement Infusion VIP Package."
          ctaSubtext="*The absolute premium flagship package*"
        >
          <p className="text-lg font-bold text-red-700 mb-2 border-b-2 border-red-700 inline-block">
            THE FLAGSHIP PACKAGE
          </p>
          <p>
            The absolute premium VIP package. We hold nothing back. You get the potent Infusion liquid, Tissue Builder, Energy God, and the maximum-strength Cream all combined.
          </p>
          <p className="bg-yellow-100 p-4 font-black text-gray-900 italic rounded text-base border-l-4 border-yellow-500">
            This is for the man who wants maximum, permanent scaling. Total domination, guaranteed.
          </p>
        </ProductCard>
      </div>

      <BeforeAfterTestimonial 
        beforeSrc="Test3before.jpg" 
        afterSrc="Test3after.jpg" 
        caption="Maximum Size & Girth Expansion" 
      />

    </section>
  );
}
