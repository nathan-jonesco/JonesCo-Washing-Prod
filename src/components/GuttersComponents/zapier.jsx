import React, { useEffect } from 'react';

const ChatBotEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <zapier-interfaces-chatbot-embed
    className="z-50"  
    is-popup='true'
      chatbot-id='clx27frx5001xu14uf83z22bt'
      height='600px'
      width='400px'
    ></zapier-interfaces-chatbot-embed>
  );
};

export default ChatBotEmbed;
