
import { pollData } from '@/components/DummyData';
import VoteThanks from '@/pages/wallet/[id]';
import WalletDisplay from '@/components/wallet/WalletDisplay';
import WalletVote from '@/components/wallet/WalletVote';
import React, { useState } from 'react';

const Wallet = () => {
    const [polls ] = useState(pollData);
    const [createWallet, setcreateWallet] = useState(false);

    const handleCreateWallet = () => {
      console.log("flip switched")
      setcreateWallet(prev => !prev)
    }
   
    return (
      <section className='w-full h-screen overflow-y-scroll'>
  
         {
          !createWallet ? (
            (<WalletDisplay createWallet={handleCreateWallet} />)
          ) : (
            <WalletVote data={polls} />
          )
        } 
  
      </section>
     )
    }
export default Wallet;






