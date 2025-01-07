// types/aos.d.ts
declare module 'aos' {
    interface AOSOptions {
      // Add any AOS configuration options you plan to use
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    class AOS {
      static init(options?: AOSOptions): void;
      static refresh(): void;
      static refreshHard(): void;
      // Add other AOS methods if needed
    }
  
    export default AOS;
  }
  