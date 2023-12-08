import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState('');
  const [mouseOver, setMouseOver] = useState(false);

  const beshy = '🤸';
  const newValue = value.replace(/\s/g, beshy);

  const handleChange = (e) => {
    const currentValue = e.target.value;

    if (value != currentValue) {
      setCopied(false);
    }

    setValue(e.target.value);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div>
      <div className='lg:container lg:mx-auto'>
        <div className='h-[auto] w-[90%] lg:w-[500px] bg-[#333] text-[#fff] mx-auto mt-28 rounded-lg p-5 flex flex-col justify-between gap-y-5'>
          <input className='w-full px-2 py-3 text-[#333] rounded-md' type='text' placeholder="what's on ur mind beshy?" onChange={handleChange} />
          <div className='relative'>
            <textarea
              className='h-60 w-full text-[#333] p-2 rounded-md resize-none'
              onMouseOut={handleMouseOut}
              onMouseOver={handleMouseOver}
              value={newValue}
              readOnly
            ></textarea>
            <CopyToClipboard text={newValue} onCopy={() => setCopied(true)}>
              <button
                className={`hover:opacity-100 duration-300 absolute top-2 right-2 text-[#333] px-3 py-1 rounded-md border-2 border-[#333] 
                ${copied ? 'bg-[#333] text-[#fff]' : 'text-[#333] bg-[#fff]'} 
                ${mouseOver ? 'opacity-100' : 'opacity-0'}`}
              >
                {copied ? 'copied!' : 'copy'}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
