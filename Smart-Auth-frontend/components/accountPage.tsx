import * as React from 'react';
import { 
  Box,
  Typography
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
  SismoConnectButton,
  SismoConnectConfig,
  SismoConnectResponse,
  AuthType,
} from "@sismo-core/sismo-connect-react";

// Define the type for the verification result
type VerificationResult = {
  vaultId: string; // Replace string with the actual type of vaultId
  // Other properties...
};

const config: SismoConnectConfig = {
  appId: "0x867ab269c645f8f28ba861ff9cf8ec0e",
  vault: {
    impersonate: [],
  },
};

export const YourAccount = () => {
  const [verificationResult, setVerificationResult] = React.useState<VerificationResult | null>(null);

  const handleResponse = async (response: SismoConnectResponse) => {
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });

      if (res.ok) {
        const data: VerificationResult = await res.json();
        console.log(data);
        setVerificationResult(data);
      } else {
        // Handle the error response from the server
        console.error("Error verifying response:", res.statusText);
      }
    } catch (error) {
      console.error("Error verifying response:", error);
    }
  };

  return (
    <Box sx={{ width: '50%', justifyContent: 'center', p: '1rem', border: 1, borderRadius: '10px', borderColor: '#e1e3e4', backgroundColor: '#ffffff' }}>
      {verificationResult === null ? (
        <>
          Empower your organization&apos;s members by crafting your personalized zero-knowledge proof with Smart-Auth. This self-generated proof not only authenticates your identity but also seamlessly integrates you into the organizational fabric, unlocking the full potential of our on-chain single sign-on solution. Be part of the future of secure, decentralized access—create your zero-knowledge proof today.
          <SismoConnectButton 
            text="Submit Proof of Membership"
            config={config}
            auths={[{ authType: AuthType.VAULT }]}
            onResponse={handleResponse}
          />
        </>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <LockOpenIcon />
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
            <Typography sx={{ width: '100%' }}>Thanks for proving your affiliation with the organization</Typography>
            <Typography>The vaultID now connected with the organization is:</Typography>
            <Typography>{verificationResult.vaultId}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
