import { useEffect, useRef } from 'react';
import Sidebar from  'vue_sidebar/sidebar';
import { createApp } from 'vue_sidebar/vue';

export const SidebarWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if(!containerRef?.current) return;

    const sidebar = createApp(Sidebar);
    sidebar.mount(containerRef.current);

    return () => {
      sidebar.unmount();
    };
  }, []);

  return (
    <div ref={containerRef}/>
  );
};
