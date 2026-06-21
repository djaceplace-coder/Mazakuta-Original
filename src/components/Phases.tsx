import { ReactNode } from 'react';

interface ProductCardProps {
  title: string;
  imageName?: string;
  children: ReactNode;
  orderMessage: string;
  ctaSubtext: string;
}

function ProductCard({ title, imageName, children, orderMessage, ctaSubtext }: ProductCardProps) {
  const shortName = title.includes(':') ? title.split(':')[1].trim() : title;
  
  return (
    <div className="flex flex-col h-full shadow-2xl rounded-xl" id="order">
      <h3 className="font-oswald text-2xl font-bold bg-green-800 text-white p-3 text-center uppercase tracking-wider rounded-t-xl">{title}</h3>
      <div className="border-[5px] border-t-0 border-green-800 p-4 sm:p-5 rounded-b-xl bg-white relative flex flex-col flex-grow">
        <img 
          src={`https://raw.githubusercontent.com/djaceplace-coder/Mazakuta-Original/main/public/${imageName}.jpeg`} 
          alt={title} 
          className="w-full h-auto object-cover border-4 border-green-600 shadow-md mb-4 bg-gray-200 aspect-[4/3] min-h-[200px]"
        />
        <div className="text-gray-800 mb-6 text-[1.1rem] leading-relaxed space-y-4 font-medium px-1 flex-grow">
           {children}
        </div>
        
        <div className="mt-auto">
          <div className="text-center font-black text-3xl text-red-700 mb-3 ml-2 mt-4 animate-bounce">
            &gt;&gt;&gt;
          </div>
          
          <a 
            href={`https://wa.me/2340000000000?text=${encodeURIComponent(orderMessage)}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-b from-green-600 to-green-800 rounded-xl py-4 px-2 shadow-[inset_0_-4px_0_rgba(0,0,0,0.3)] transform transition hover:scale-[1.02] active:scale-95 text-center border border-green-900 box-border"
          >
             <div className="font-oswald text-2xl sm:text-3xl uppercase tracking-wider font-bold text-white shadow-sm leading-tight">GET {shortName}</div>
             <div className="text-yellow-300 font-bold italic text-xs sm:text-sm mt-1">{ctaSubtext}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ subtitle, title }: { subtitle: string, title: string }) {
  return (
    <div className="my-10 text-center">
      <h2 className="text-red-700 font-bold uppercase tracking-widest text-sm mb-1">{subtitle}</h2>
      <h3 className="font-oswald text-[2.5rem] leading-tight font-black uppercase text-gray-900 border-b-4 border-green-700 inline-block pb-1">
        {title}
      </h3>
    </div>
  )
}

function YesNoTrap() {
  return (
    <div className="my-14 p-4 max-w-3xl mx-auto">
      <div className="border-4 border-dashed border-yellow-400 p-6 bg-white mb-6 shadow-xl">
        <p className="font-bold text-gray-900 text-xl sm:text-2xl leading-snug text-center">
          Before you order, Would you like to see more testimonials from men who have also used these products?
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        <a 
          href="https://wa.me/2340000000000?text=Hello%20Maza%20Kuta,%20I%20want%20to%20see%20more%20testimonials."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#15803d] hover:bg-[#16a34a] text-white font-oswald text-xl sm:text-2xl uppercase tracking-wider font-bold py-5 px-6 shadow-lg text-center rounded-xl border border-green-800 transition transform hover:scale-[1.02]"
        >
          Yes, Let Me See!
        </a>
        <a 
          href="#order"
          className="bg-green-900 hover:bg-green-950 text-white font-oswald text-lg sm:text-xl uppercase tracking-wider font-bold py-4 px-6 shadow-lg text-center rounded-xl border border-green-950 transition hover:bg-green-950"
        >
          No, I Just Want To Proceed To Order!
        </a>
      </div>
      
      <p className="mt-8 text-gray-800 font-bold sm:text-lg text-base leading-snug italic text-center bg-gray-200 p-4 rounded-lg">
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
          imageName="Flusher-Base"
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
          imageName="Anti-wank-therapy-Base"
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

      <SectionHeader subtitle="Step 2" title="Phase 2: The Foundation & Endurance" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProductCard 
          title="Product 3: Rock Steady" 
          imageName="Rock-Steady-Base"
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
          imageName="Volumizer-Base"
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
          imageName="Everlast-Base1"
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
          imageName="Extra-Hours-Base"
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

      <YesNoTrap />
      
      <SectionHeader subtitle="Step 3" title="Phase 3: Ultimate Expansion" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <ProductCard 
          title="Product 7: Enlargement Therapy" 
          imageName="Enlargement-Therapy-Base"
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
          <p className="text-xl font-bold text-red-700 mb-2 border-b-2 border-red-700 inline-block">
            THE FLAGSHIP PACKAGE
          </p>
          <p>
            The absolute premium VIP package. We hold nothing back. You get the potent Infusion liquid, Tissue Builder, Energy God, and the maximum-strength Cream all combined.
          </p>
          <p className="bg-yellow-100 p-4 font-black text-gray-900 italic rounded text-lg border-l-4 border-yellow-500">
            This is for the man who wants maximum, permanent scaling. Total domination, guaranteed.
          </p>
        </ProductCard>
      </div>

    </section>
  );
}
