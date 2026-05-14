import { useEffect } from 'react';

function useCustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-fade';
    document.body.appendChild(cursor);

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const addHover = () => cursor.style.transform = 'translate(-50%, -50%) scale(1.4)';
    const removeHover = () => cursor.style.transform = 'translate(-50%, -50%) scale(1)';

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .hover-target').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      document.body.removeChild(cursor);
    };
  }, []);
}

export default useCustomCursor;
