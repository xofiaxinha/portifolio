import { useEffect } from "react";

const useSmoothScroll = () => {
    useEffect(() => {
        const handleClick = (e) => {
          // Only handle anchor links
          if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.getElementById(targetId.slice(1));
            console.log(targetElement);
            
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
              
              // Update URL without jumping
              window.history.pushState(null, null, targetId);
            }
          }
        };
        document.addEventListener('click', handleClick);
        return () =>{ document.removeEventListener('click', handleClick);};
    }
    , []);
};

export default useSmoothScroll;
