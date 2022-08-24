import { useEffect, useState } from 'react';
import { pause } from 'SharedComponents';

export const useScriptedResponse = script => {
  const [scriptedResponse, setScriptedResponse] = useState('');

  useEffect(() => {
    setScriptedResponse('');

    if (script.length) {
      (async () => {
        let onScreenScript = '';
        for (let letter = 0; letter < script.length; letter++) {
          await pause(40);

          onScreenScript = onScreenScript + script[letter];

          setScriptedResponse(onScreenScript);
        }
      })();
    }
  }, [script]);

  return scriptedResponse;
};
